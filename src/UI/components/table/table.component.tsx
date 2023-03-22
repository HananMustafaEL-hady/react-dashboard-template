import React, { useEffect, useState } from 'react'
import { TableHeader } from '../../common/table-header/table-header.component';
import axios from "axios"
import { TableContent } from '../../common/table-content/table-content.component';

export const Table = () => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const _renderTableData = (data: any) => {
        console.log("_renderTableData", data)
        return <>
            <div className="table-data">{data?.id}</div>
            <div className="table-data">{data?.name}</div>
            <div className="table-data">{data?.phone}</div>
            <div className="table-data">{data?.website}</div>
            <div className="table-data">{data?.email}</div>


        </>

    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users?_limit=10`
                );
                setData(response.data);
                setError(null);
            } catch (err: any) {
                setError(err?.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    console.log("data", data)

    return (
        <div className='table_wrapper'>
            <div className="table">
                <TableHeader headerList={["id", "name", "phone", "website", "email"]} />
                <TableContent _renderTableData={_renderTableData} data={data} />
            </div>
        </div>

    )
}
