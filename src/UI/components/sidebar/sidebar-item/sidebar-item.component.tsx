import React, { ReactNode } from 'react'
import { NavLink } from "react-router-dom";
import { LogoIcon } from '../../../icons';
import styles from './sidebar-item.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {
    link: string;
    name: string;
    isClosedNav: boolean,
    icon: ReactNode


}

export const SidebarItem: React.FC<Props> = ({ link, name, isClosedNav, icon }) => {
    return (
        <NavLink to={`/${link}`} className={`${styles['link']} `}>
            <div className={`${styles['link__icon']}`}>
                {icon}
            </div>
            <h2 className={`${styles['link__text']} ${isClosedNav ? styles['link__text-close'] : ''}`}>{name}</h2>
        </NavLink>
    )
}
