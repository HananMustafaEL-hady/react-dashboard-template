import React from 'react';
import styles from './card.module.scss'
interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string
}
export const Card: React.FC<Props> = ({ children, title }) => {
    return (
        <div className='card'>

            <div className={`${styles['card__header']}`}>
                <h3 className={`${styles['card__header__title']}`}>{title}</h3>
            </div>
            <div className={`${styles['card__body']}`}>
                {children}
            </div>
        </div>
    )
}
