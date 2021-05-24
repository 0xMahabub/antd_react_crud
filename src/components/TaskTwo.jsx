import { useState } from 'react';
import { notification } from 'antd';
import { PageWrapper } from './Styled.common';
import dataArr from '../data';
import DataTable from './Table/data';

const TaskTwo = () => {
    const [data, setData] = useState(dataArr);

    function findItem(item) {
        return data.find(itm => itm === item)
    }

    function toggleStatus(itm, key_field) {
        let findIndex = data.findIndex((i => i.id == itm.id));
        let updatedArr = [...data];
        console.log("item_", updatedArr[findIndex][key_field]);
        console.log("itm_", itm[key_field]);
        updatedArr[findIndex][key_field] = !itm[key_field];
        // updatedArr[findIndex] = itm;
        // set data
        setData(updatedArr);
    }

    async function handleEvents(action, item) {
        let _itm = await findItem(item);

        if (!_itm || typeof(_itm) !== "object") {
            // notify
            notification['error']({
                message: "Item not found!",
            });

            return false;
        }

        switch(action) {
            case "create":
                toggleStatus(_itm, 'isCreate');
            
            case "view":
                toggleStatus(_itm, 'isView');

            case "edit":
                toggleStatus(_itm, 'isEdit');
            
            case "delete":
                toggleStatus(_itm, 'isDelete');
            
            case "approve":
                toggleStatus(_itm, 'isApprove');

            default: return _itm;
        }
    }

    return (
        <PageWrapper task>
            <DataTable data={data} handleAction={handleEvents} />
        </PageWrapper>
    );
}

export default TaskTwo;