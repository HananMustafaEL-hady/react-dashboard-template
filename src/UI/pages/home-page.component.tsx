import React from 'react'
import { Button } from '../common/button/button.component'
import { Card } from '../common/card/card.component'
import { Input } from '../common/input/input.component'
import { StatisticsSection } from '../components/statistics-section/statistics-section.component'

export const HomePage = () => {
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
    </main>
  )
}
