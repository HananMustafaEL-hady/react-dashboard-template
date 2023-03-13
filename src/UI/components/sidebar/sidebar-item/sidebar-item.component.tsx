import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './sidebar-item.module.scss';

interface Props {
    link: string,
    icon: string,
    name: string
}

export const SidebarItem: React.FC<Props> = ({ link, icon, name }) => {
    return (
        <NavLink to={`/${link}`}>
            <div className={`${styles['header__logo']}`}>
                {/* <img
                    src={`${icon}`}
                    alt={''}
                    className=''
                /> */}
            </div>
            <h2>{name}</h2>
        </NavLink>
    )
}
