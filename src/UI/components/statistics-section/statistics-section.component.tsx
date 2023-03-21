import React from 'react'
import { StatisticsCard } from '../../common/statistics-card/statistics-card.component'

export const StatisticsSection = () => {
    return (
        <div className='columns-1 md:columns-2 lg:columns-4  mb-6'><StatisticsCard /><StatisticsCard /><StatisticsCard /><StatisticsCard /></div>
    )
}
