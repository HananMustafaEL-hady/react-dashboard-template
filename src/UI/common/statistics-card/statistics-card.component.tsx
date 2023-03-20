import React from 'react'
import { BitcoinIcon } from '../../icons'
import styles from './statistics-card.module.scss'
export const StatisticsCard = () => {
    return (
        <div className={`card w-full`}>
            <div className={`card-body ${styles['stats']}`}>
                <div className={``}>
                    <div className={` flex items-center mb-2`}>
                        <span className={`mr-2`}>
                            <BitcoinIcon />
                        </span>
                        <h6 className={`font-semibold text-[#1B1824]`}>Bitcoin</h6>
                    </div>
                    <div>
                        <h3> $34.850,10</h3>
                        <small className="text-success">+ 0.8%</small><small className="ms-2">(BTC/USDT)</small>
                    </div>
                </div>

                <div className={``}>

                </div>
            </div>
        </div>
    )
}
