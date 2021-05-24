import { DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { TableWrapper } from '../Styled.common';



const DataTable = ({ users, delUser }) => {
    const cols = [
        {
            title: 'Name',
            dataIndex: 'name',
            // width: '25%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            // width: '30%',
            responsive: ["xs", "sm", "md", "lg", "xl"],
        },
        {
            title: 'Action',
            // width: '20%',
            // fixed: 'right',
            responsive: ["xs", "sm", "md", "lg", "xl"],
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
        <TableWrapper>
            <Table
                columns={cols}
                rowKey={(record) => record.id}
                dataSource={users}
            />
        </TableWrapper>
    )
}

export default DataTable;