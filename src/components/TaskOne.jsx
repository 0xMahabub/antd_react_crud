import { useRef, useState } from 'react';
import { Form, Input, Button, Divider, notification } from 'antd';
import { PageWrapper } from './Styled.common';
import UserTable from './Table/index';

const TaskOne = () => {
    const [form] = Form.useForm();
    const formRef = useRef();

    // data in state
    const [users, setUsers] = useState([]);

    function checkDuplicate(usr) {
        return users.find(u => u.email === usr.email) ? true : false;
    }

    function lastUserId(usr) {
        return usr.length > 0 ? usr.length+1 : 1;
    }

    const onSubmit = async (data) => {
        // check
        if (checkDuplicate(data)) {
            // duplicate try
            // notify
            notification['error']({
                message: "Duplicate try!",
            });
        }
        else {
            // ok
            let newUser = {
                ...data,
                id: lastUserId(users)
            };
            await setUsers([...users, newUser]); // adding new user
            // notify
            notification['success']({
                message: "User has been added successfully!",
            });
        }
    }

    // delete user
    async function deleteUser(usr) {
        if (users.length > 0) {
            const remove_and_takeOthers = users.filter(u => u.id !== usr.id);
            setUsers(remove_and_takeOthers);
            // notify
            notification['info']({
                message: "User has been removed successfully!",
            });
        }
    }


    return (
        <PageWrapper task>
            <Form
            form={form}
            layout="inline"
            onFinish={onSubmit}
            ref={formRef}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input placeholder="Enter Email-Address" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>

            <Divider />

            <UserTable users={users} delUser={deleteUser} />
        </PageWrapper>
    );
}

export default TaskOne;