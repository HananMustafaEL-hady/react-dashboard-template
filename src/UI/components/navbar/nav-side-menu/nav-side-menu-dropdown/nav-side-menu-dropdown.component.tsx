import React, { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DropdownArrowIcon } from '../../../../icons';
import styles from "./nav-side-menu-dropdown.module.scss"
interface Props {
    title: string;
    dropdownList: {
        title: string,
        link: string
    }[]
    icon: ReactNode
}
export const NavSideMenuDropdown: React.FC<Props> = ({ title, dropdownList, icon }) => {
    const [showCollapse, setShowCollapse] = useState(false)

    return (
        <div className='p-[14px]'>
            <div className={`${styles['list__header']}`} onClick={() => { setShowCollapse(!showCollapse) }}>
                <span className={`${styles['list__header-icon']}`}>                {icon}
                </span>
                <p className={`${styles['list__header-title']}`} >{title}</p>
            </div>


            <ul className={`${styles['list__dropdown']} ${showCollapse ? styles['list__dropdown-show'] : ''}`}>
                {dropdownList?.map((item, index) => {
                    return <NavLink to={`${item?.link}`} key={index} ><li className={`${styles['list__dropdown__link']}`}>
                        {item.title}
                    </li>
                    </NavLink>
                })}
            </ul>


        </div>
    )
}
