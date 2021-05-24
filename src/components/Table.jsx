import { DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';



const DataTable = ({ users, delUser }) => {
    const cols = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '25%',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            width: '30%',
        },
        {
            title: 'Action',
            width: '20%',
            fixed: 'right',
            render: (record) => {
                return (
                    <>
                        <Button type="danger" onClick={() => delUser(record)}>
                            <DeleteOutlined />
                        </Button>
                    </>
                )
            }
        }
    ];


    return (
        <>
            <Table
                columns={cols}
                rowKey={(record) => record.id}
                dataSource={users}
            />
        </>
    )
}

export default DataTable;