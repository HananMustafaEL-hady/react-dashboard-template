import React from 'react';
import { NavSideMenuDropdown } from '../..';
import { HomeIcon } from '../../../icons';
import styles from './nav-side-menu.module.scss';
export const NavSideMenu = () => {
	return (
		<div>
			<div className={`${styles['side-menu']} `}>
				<NavSideMenuDropdown title={'Home'} dropdownList={[{ title: "item", link: "/menu" }]} icon={<HomeIcon />} />

			</div>
			<div className={`${styles['side-menu-backdrop']} `}></div>
		</div>
	);
};
