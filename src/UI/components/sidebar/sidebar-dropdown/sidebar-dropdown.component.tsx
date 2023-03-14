import React, { ReactNode, useState } from 'react'
import styles from './sidebar-dropdown.module.scss';
import { Collapse } from 'react-collapse';
import { NavLink } from 'react-router-dom';
import { DropdownArrowIcon } from '../../../icons';

interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
    dropdownList: {
        title: string,
        link: string
    }[]
    icon: ReactNode
    isClosedNav: boolean
}
export const SidebarDropdown: React.FC<Props> = ({ title, dropdownList, icon, isClosedNav }) => {
    const [showCollapse, setShowCollapse] = useState(false)
    return (
        <>
            <div className={`${styles['list__title__wrapper']}`} onClick={() => { setShowCollapse(!showCollapse) }}>
                <div className={`${styles['list__title']}`} >
                    {icon}
                    <p className={`${styles['list__title-text']} ${isClosedNav ? styles['list__title-text-close'] : ''}`} >{title}</p>

                </div>
                <span className={`${showCollapse ? styles['list__title_dropIcon'] : ""} ${isClosedNav ? styles['list__title_dropIcon-close'] : ''}`}><DropdownArrowIcon />
                </span>
            </div>

            <Collapse isOpened={showCollapse}>
                <ul>
                    {dropdownList?.map((item, index) => {
                        return <li key={index} className={`${styles['list__title__wrapper']}`}>
                            <NavLink to={`${item?.link}`}>{isClosedNav ? item.title?.charAt(0).toUpperCase() : item.title}</NavLink>
                        </li>
                    })}

                </ul>
            </Collapse>
        </>
    )
}
