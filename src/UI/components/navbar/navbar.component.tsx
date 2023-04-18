import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavItem } from './nav-item/nav-item.component';
import styles from './navbar.module.scss';
import { ElementsIcon, HomeIcon, LogoIcon, PagesIcon } from '../../icons';
import { NavProfile, NavSideMenu, SidebarHeader } from '..';

import { NavIconsSection } from './nav-icons-section/nav-icons-section.component';
interface Props {
	isClosedNav: boolean;
	setCloseNav: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Navbar: React.FC<Props> = ({ isClosedNav, setCloseNav }) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document?.body?.classList?.add(
				'overflow-hidden',
				'lg:overflow-auto'
			);
		} else {
			document?.body?.classList?.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<div>
			<nav
				className={`${styles['nav']} ${isClosedNav ? styles['nav-closeSide'] : ''
					}`}
				id="nav"
			>
				<div className="flex items-center justify-between h-16">
					<div className="lg:flex  w-full hidden ">
						<div className="flex items-center justify-between w-full">
							<div className=" flex items-center ">
								<h3 className="mb-0 mx-6 pr-3 text-[10px] border-r border-borderBottomColor">
									Home
								</h3>
								<NavItem
									link={'/'}
									name={'Home'}
									icon={<HomeIcon />}
								/>
								<NavItem
									link={'/pages'}
									name={'Pages'}
									icon={<PagesIcon />}
								/>
								<NavItem
									link={'/elements'}
									name={'elements'}
									icon={<ElementsIcon />}
								/>
							</div>
							<div className="  flex flex-row">
								<NavIconsSection />
								<NavProfile />
							</div>
						</div>
					</div>

					<div className="mr-2 flex lg:hidden justify-between w-full">
						<div>
							{/* <div className={`${styles['nav__logo']}`}>
								<img
									src={`/images/logo.svg`}
									alt={''}
									className=''
								/>
							</div> */}
						</div>
						<button
							className={`${styles['nav__toggler']}`}
							type="button"
							onClick={() => setIsOpen(!isOpen)}
						>
							<span className={`${styles['nav__toggler-icon']}`}>
								<span
									className={`${styles['nav__toggler-bar']} ${isOpen
										? styles['nav__toggler-bar1']
										: ''
										}`}
								></span>
								<span
									className={`${styles['nav__toggler-bar']} ${isOpen
										? styles['nav__toggler-bar2']
										: ''
										} `}
								></span>
								<span
									className={`${styles['nav__toggler-bar']} ${isOpen
										? styles['nav__toggler-bar3']
										: ''
										}`}
								></span>
							</span>
						</button>
					</div>
				</div>

				{isOpen ? (
					<section className="lg:hidden transition-all duration-[400ms] ease-in box-shadow z-30">
						<div className="pt-2 pb-3 ">
							<div className="  flex flex-row justify-end">
								<NavIconsSection />
								<NavProfile />
							</div>
						</div>
						<NavSideMenu />
					</section>
				) : null}
			</nav>
		</div>
	);
};
