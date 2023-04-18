import React, { useState } from 'react'
import { AnalyticsIcon, AuthSkinsIcon, BlankPageIcon, CryptoIcon, DashboardIcon, FormIcon, IconsIcon, LogoIcon, MapIcon, MenuStyleIcon, PluginsIcon, SpecialPagesIcon, TableIcon, UiIcon, UsersIcon, UtilitiesIcon, WidgetsIcon } from '../../icons';
import { SidebarHeader, SidebarDropdown, SidebarItem, SidebarListGroup } from '../index';
import styles from './sidebar.module.scss';

interface Props {
    isClosedNav: boolean
    setCloseNav: React.Dispatch<React.SetStateAction<boolean>>

}
export const Sidebar: React.FC<Props> = ({ isClosedNav, setCloseNav }) => {
    return (
        <div className={`${styles['sidebar']} ${isClosedNav ? styles['sidebar-closed'] : ''}`}>
            <SidebarHeader isClosedNav={isClosedNav} setCloseNav={setCloseNav} />

            {/* list of links */}
            <nav id="sidebar" className={`${styles['header__logo']}`}>

                <SidebarListGroup title={'Home'} isClosedNav={isClosedNav} >
                    <SidebarItem link={''} name={'dashboard'} isClosedNav={isClosedNav} icon={<DashboardIcon />} />
                    <SidebarItem link={'analytics'} name={'analytics'} isClosedNav={isClosedNav} icon={<AnalyticsIcon />} />
                    <SidebarItem link={'crypto'} name={'crypto'} isClosedNav={isClosedNav} icon={<CryptoIcon />} />
                    <SidebarDropdown title={'menu style'} dropdownList={[{ title: "horizontal ", link: "/horizontal " }, { title: "dual compact ", link: "/compact " }, { title: "boxed horizontal ", link: "/Boxed-Horizontal " }]} icon={<MenuStyleIcon />} isClosedNav={isClosedNav} />
                </SidebarListGroup>

                <SidebarListGroup title={'pages'} isClosedNav={isClosedNav} >
                    <SidebarDropdown title={'special pages'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<SpecialPagesIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'auth skins'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<AuthSkinsIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'users'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<UsersIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'utilities'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<UtilitiesIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Plugins'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<PluginsIcon />} isClosedNav={isClosedNav} />
                    <SidebarItem link={'blank page'} name={'blank-page'} isClosedNav={isClosedNav} icon={<BlankPageIcon />} />

                </SidebarListGroup>


                <SidebarListGroup title={'elements'} hasLine={false} isClosedNav={isClosedNav} >
                    <SidebarDropdown title={'UI Elements'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<UiIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Widgets'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<WidgetsIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Maps'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<MapIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Form'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<FormIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Table'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<TableIcon />} isClosedNav={isClosedNav} />
                    <SidebarDropdown title={'Icons'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} icon={<IconsIcon />} isClosedNav={isClosedNav} />

                </SidebarListGroup>

            </nav>


        </div>
    )
}

