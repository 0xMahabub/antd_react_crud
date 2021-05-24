import { useRef, useState } from 'react';
import { Divider, notification } from 'antd';
import { PageWrapper } from './Styled.common';
import dataArr from '../data';


const TaskTwo = () => {
    const formRef = useRef();
    const [data, setData] = useState(dataArr);

    return (
        <PageWrapper task>
            <Divider />
        </PageWrapper>
    );
}

export default TaskTwo;