import { Checkbox, Table } from 'antd';
import { TableWrapper } from '../Styled.common';

const DataTable = ({ data, handleAction }) => {
    const cols = [
        {
            title: 'Module Name',
            dataIndex: 'moduleName',
            // width: '20%',
            // fixed: 'left',
            responsive: ["xs", "sm", "md", "lg", "xl"]
        },
        {
            title: 'Activity Name',
            dataIndex: 'activityName',
            // width: '40%',
            responsive: ["xs", "sm", "md", "lg", "xl"]
        },
        {
            title: 'Create',
            // width: '8%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
            // width: '8%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
            // width: '8%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
            // width: '8%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
            // width: '8%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
        <TableWrapper>
            <Table
                columns={cols}
                rowKey={record => record.id}
                dataSource={data}
            />
        </TableWrapper>
    );
}

export default DataTable;