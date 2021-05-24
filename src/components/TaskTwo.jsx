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

        return {item, findIndex};
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

    async function handleEvents(action, _item) {
        let {item, findIndex} = await findItem(_item);

        if (!item || typeof(item) !== "object") {
            // notify
            notification['error']({
                message: "Item not found!",
            });

            return false;
        }

        if (action === "create") {
            item['isCreate'] = !item['isCreate'];
            let arr = [...data];
            arr[findIndex] = item;
            setData(arr);
        }
        else if (action === "view") {
            item['isView'] = !item['isView'];
            let arr = [...data];
            arr[findIndex] = item;
            setData(arr);
        }
        else if (action === "edit") {
            item['isEdit'] = !item['isEdit'];
            let arr = [...data];
            arr[findIndex] = item;
            setData(arr);
        }
        else if (action === "delete") {
            item['isDelete'] = !item['isDelete'];
            let arr = [...data];
            arr[findIndex] = item;
            setData(arr);
        }
        else if (action === "approve") {
            item['isApprove'] = !item['isApprove'];
            let arr = [...data];
            arr[findIndex] = item;
            setData(arr);
        }
        else {
            // notify
            notification['error']({
                message: "Wrong event!",
            });
        }
    }

    return (
        <PageWrapper task>
            <DataTable data={data} handleAction={handleEvents} />
        </PageWrapper>
    );
}

export default TaskTwo;