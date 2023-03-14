import React, { useState } from 'react'
import { LogoIcon } from '../../icons';
import { SidebarHeader, SidebarDropdown, SidebarItem, SidebarListGroup } from '../index';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
    const [isClosedNav, setCloseNav] = useState(false)
    return (
        <div className={`${styles['sidebar']} ${isClosedNav ? styles['sidebar-closed'] : ''}`}>
            <SidebarHeader isClosedNav={isClosedNav} setCloseNav={setCloseNav} />

            {/* list of links */}
            <nav id="sidebar" className={`${styles['header__logo']}`}>

                <SidebarListGroup title={'Home'} isClosedNav={isClosedNav} >
                    <SidebarItem link={''} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarDropdown title={'menu'} dropdownList={[{ title: "item", link: "/menu" }]} icon={<LogoIcon />} isClosedNav={isClosedNav} />
                </SidebarListGroup>

                <SidebarListGroup title={'Home'} hasLine={false} isClosedNav={isClosedNav} >
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarItem link={'dashboard'} name={'dashboard'} isClosedNav={isClosedNav} icon={<LogoIcon />} />
                    <SidebarDropdown title={'menu'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<LogoIcon />} isClosedNav={isClosedNav} />
                </SidebarListGroup>

            </nav>


        </div>
    )
}

