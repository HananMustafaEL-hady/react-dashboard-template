import React from 'react';
import { NavSideMenuDropdown, NavSideMenuLink } from '../..';
import { SubDropdown } from '../../../common/sub-dropdown/sub-dropdown.component';
import { HomeIcon, PagesIcon } from '../../../icons';
import styles from './nav-side-menu.module.scss';
export const NavSideMenu = () => {
	return (
		<div>
			<div className={`${styles['side-menu']} `}>
				<NavSideMenuDropdown title={'Home'} icon={<HomeIcon />} >
					<NavSideMenuLink name={'Dashboard'} url={'/'} />
					<NavSideMenuLink name={'Analytics'} url={'/Analytics'} />
					<SubDropdown title={'menu'} dropdownList={[{ title: "Horizontal", link: "/Horizontal" }]} />
				</NavSideMenuDropdown>
				{/* <NavSideMenuDropdown title={'Pages'} icon={<PagesIcon />} >
					<NavSideMenuLink name={'Dashboard'} url={'/'} />
					<NavSideMenuLink name={'Analytics'} url={'/Analytics'} />
				</NavSideMenuDropdown> */}
			</div>
			<div className={`${styles['side-menu-backdrop']} `}></div>
		</div>
	);
};
