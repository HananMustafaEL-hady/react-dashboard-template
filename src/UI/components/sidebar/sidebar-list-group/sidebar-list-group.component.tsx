import React from 'react'
import styles from './sidebar-list-group.module.scss';

interface Props {
    title: string
}
export const SidebarListGroup: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}
