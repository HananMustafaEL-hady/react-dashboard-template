import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-item.module.scss';

interface Props {
	link: string;
	name: string;
	icon: ReactNode;
}

export const NavItem: React.FC<Props> = ({ link, name, icon }) => {
	return (
		<NavLink to={`${link}`} className={`${styles['link']}`}>
			<div className={`${styles['link__icon']}`}>{icon}</div>
			<span className={`${styles['link__text']}`}>{name}</span>
		</NavLink>
	);
};
