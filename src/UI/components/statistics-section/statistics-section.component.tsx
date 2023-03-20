import React from 'react'
import { StatisticsCard } from '../../common/statistics-card/statistics-card.component'

export const StatisticsSection = () => {
    return (
        <div className='flex justify-between space-x-8 '><StatisticsCard /><StatisticsCard /><StatisticsCard /><StatisticsCard /></div>
    )
}
