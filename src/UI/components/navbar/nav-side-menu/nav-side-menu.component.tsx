import React from 'react';
import { NavSideMenuDropdown } from '../..';
import { HomeIcon } from '../../../icons';
import styles from './nav-side-menu.module.scss';
export const NavSideMenu = () => {
	return (
		<div>
			<div className={`${styles['side-menu']} `}>
				<NavSideMenuDropdown title={'Home'} dropdownList={[{ title: "Dashboard", link: "/Dashboard" }, { title: "Analytics", link: "/Analytics" }]} icon={<HomeIcon />} />
			</div>
			<div className={`${styles['side-menu-backdrop']} `}></div>
		</div>
	);
};
