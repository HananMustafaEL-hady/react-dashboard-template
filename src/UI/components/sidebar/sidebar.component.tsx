import React, { useState } from 'react'
import { SidebarHeader, SidebarDropdown, SidebarItem } from '../index';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
    const [isClosedNav, setCloseNav] = useState(false)
    return (
        <div className={`${styles['sidebar']} ${isClosedNav ? styles['sidebar-closed'] : ''}`}>
            <SidebarHeader isClosedNav={isClosedNav} setCloseNav={setCloseNav} />

            {/* list of links */}
            <nav id="sidebar" className={`${styles['header__logo']}`}>



                <SidebarItem link={'dashboard'} icon={'/images/logo.svg'} name={'home'} />
                <SidebarDropdown />

            </nav>


        </div>
    )
}

