import React, { useEffect, useState } from 'react'
import { Button } from '../common/button/button.component'
import { Card } from '../common/card/card.component'
import { Input } from '../common/input/input.component'
import { Table } from '../components'
import { StatisticsSection } from '../components/statistics-section/statistics-section.component'
import axios from "axios"

export const HomePage = () => {

  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
          `https://jsonplaceholder.typicode.com/users?_limit=5&_page=${currentPage}`
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
  }, [currentPage]);
  const _setPageChange = (e: { selectedPage: number }) => {
    setCurrentPage(e.selectedPage);
  };
  console.log("data", data)
  return (
    <main className='lg:ml-[225px] px-4 flex flex-col '>
      <StatisticsSection />
      <Card title={'Quick Trade'} >
        <Input />
        <Input />
        <Input />
        <Input />
        <div className='flex space-x-10 justify-around '>
          <Button className='btn btn-danger' >
            sell
          </Button>
          <Button className='btn' >
            buy
          </Button>
          <Button className='btn btn-success ' disabled={true} >
            submit
          </Button>
          <Button className='btn btn-outline-danger' >
            logout
          </Button>
          <Button className='btn btn-gray ' isLoading>
            login
          </Button>


        </div>
      </Card>


      <Card title='Recent Trading Activities'>
        <Table _renderTableData={_renderTableData} data={{
          data: data, limit: 5,
          page: currentPage,
          pageCount: 2,
          totalCount: 10,
        }} hasPagination={true} _setPageChange={_setPageChange} currentPage={currentPage} />
      </Card>
    </main>
  )
}
