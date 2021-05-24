import { Checkbox, Table } from 'antd';

const DataTable = ({ data, handleAction }) => {
    const cols = [
        {
            title: 'Module Name',
            dataIndex: 'moduleName',
            width: '20%',
            fixed: 'left'
        },
        {
            title: 'Activity Name',
            dataIndex: 'activityName',
            width: '40%',
        },
        {
            title: 'Create',
            width: '8%',
            render: (record) => {
                return (
                    <>
                        <Checkbox name="create" onChange={() => handleAction("create", record)} />
                    </>
                )
            }
        },
        {
            title: 'View',
            width: '8%',
            render: (record) => {
                return (
                    <>
                        <Checkbox name="create" onChange={() => handleAction("view", record)} />
                    </>
                )
            }
        },
        {
            title: 'Edit',
            width: '8%',
            render: (record) => {
                return (
                    <>
                        <Checkbox name="create" onChange={() => handleAction("edit", record)} />
                    </>
                )
            }
        },
        {
            title: 'Delete',
            width: '8%',
            render: (record) => {
                return (
                    <>
                        <Checkbox name="create" onChange={() => handleAction("delete", record)} />
                    </>
                )
            }
        },
        {
            title: 'Approve',
            width: '8%',
            render: (record) => {
                return (
                    <>
                        <Checkbox name="create" onChange={() => handleAction("approve", record)} />
                    </>
                )
            }
        },
    ];


    return (
        <>
            <Table
                columns={cols}
                rowKey={record => record.id}
                dataSource={data}
            />
        </>
    );
}

export default DataTable;