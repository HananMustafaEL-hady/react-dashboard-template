import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { BitcoinIcon } from '../../icons'
import styles from './statistics-card.module.scss'
export const StatisticsCard = () => {
    return (
        <div className={`card  `}>
            <div className={`card-body ${styles['stats']}`}>

                <div className='flex items-center justify-between'>
                    <div className={`flex items-center`}>
                        <span className={`mr-2 text-[24px]`}>
                            <BitcoinIcon />
                        </span>
                        <h6 className={`font-semibold text-[#1B1824]`}>Bitcoin</h6>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className=' text-[#1B1824] text-2xl	 font-semibold'> $34.850,10</h3>
                        <small className="text-[#1AA053] text-[10px]">+ 0.8%</small><small className="ml-2 text-[10px]">(BTC/USDT)</small>
                    </div>

                    <ReactApexChart
                        options={{
                            chart: {
                                height: '100%',
                                type: 'line',
                                zoom: {
                                    enabled: false,
                                },
                                toolbar: {
                                    show: false,
                                },
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2,
                                colors: ['#1AA053', '#C03221'],
                            },
                            grid: {
                                show: false,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                labels: { show: false },
                                range: 30,
                                axisTicks: { show: false },
                            },

                        }}
                        series={[
                            {
                                name: "Bitcoin",
                                data: [
                                    10, 21, 15, 31, 29, 42, 39, 61, 41, 51,
                                    32, 51, 51, 55, 60, 10, 21, 15, 31, 29, 42, 39, 61, 41, 51,

                                ],
                            },
                        ]}
                        type='line'
                        height={'80px'}
                        width={'100%'}
                    />
                </div>
            </div>
        </div>
    )
}
