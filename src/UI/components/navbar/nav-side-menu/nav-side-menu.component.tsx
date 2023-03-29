import React from 'react';
import styles from './nav-side-menu.module.scss';
export const NavSideMenu = () => {
	return (
		<div>
			<div className={`${styles['side-menu']} `}></div>
			<div className={`${styles['side-menu-backdrop']} `}></div>
		</div>
	);
};
