import React from 'react'
import styles from './sidebar-list-group.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
    hasLine?: boolean
    isClosedNav: boolean
}
export const SidebarListGroup: React.FC<Props> = ({ title, hasLine = true, children, isClosedNav }) => {
    return (
        <div className={`${styles['list']} `}>
            <h2 className={`${styles['list__title']} ${isClosedNav ? styles['list__title-close'] : ''}`}>{title}</h2>
            {children}
            {hasLine ? <hr className={`${styles['list__hr']}`} /> : null}
        </div>
    )
}
