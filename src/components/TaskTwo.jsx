import { useState } from 'react';
import { notification } from 'antd';
import { PageWrapper } from './Styled.common';
import dataArr from '../data';
import DataTable from './Table/data';

const TaskTwo = () => {
    const [data, setData] = useState(dataArr);

    function findItem(_item) {
        const item =  data.find(itm => itm === _item);
        const findIndex = data.findIndex((i => i.id == _item.id));

        return [item, findIndex];
    }

    // function toggleStatus(itm, key_field) {
    //     let findIndex = data.findIndex((i => i.id == itm.id));
    //     let updatedArr = [...data];
    //     // console.log("item_", updatedArr[findIndex][key_field]);
    //     // console.log("itm_", itm[key_field]);
    //     // updatedArr[findIndex][key_field] = !itm[key_field];
    //     // // updatedArr[findIndex] = itm;

    //     const targetItem = updatedArr[findIndex];
    //     // targetItem[key_field] = !targetItem[key_field];
    //     targetItem[`${key_field}`] = !targetItem[`${key_field}`] 

    //     // set data
    //     setData(updatedArr);
    // }

    async function handleEvents(action, item) {
        let [itm, index] = await findItem(item);

        if (!itm || typeof(itm) !== "object") {
            // notify
            notification['error']({
                message: "Item not found!",
            });

            return false;
        }

        let updatedArr = data;
        let targetItem = updatedArr[index];
        function updateData() {
            setData(updatedArr);
        }



        switch(action) {
            case "create":
                // toggleStatus(_itm, 'isCreate');
                targetItem[`isCreate`] = !targetItem[`isCreate`] 
                updateData();
            
            case "view":
                // toggleStatus(_itm, 'isView');
                targetItem[`isView`] = !targetItem[`isView`] 
                updateData();

            case "edit":
                // toggleStatus(_itm, 'isEdit');
                targetItem[`isEdit`] = !targetItem[`isEdit`] 
                updateData();
            
            case "delete":
                // toggleStatus(_itm, 'isDelete');
                targetItem[`isDelete`] = !targetItem[`isDelete`] 
                updateData();
            
            case "approve":
                // toggleStatus(_itm, 'isApprove');
                targetItem[`isApprove`] = !targetItem[`isApprove`] 
                updateData();

            default: updateData();
        }
    }

    return (
        <PageWrapper task>
            <DataTable data={data} handleAction={handleEvents} />
        </PageWrapper>
    );
}

export default TaskTwo;