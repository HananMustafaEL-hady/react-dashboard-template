import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavItem } from './nav-item/nav-item.component';
import styles from './navbar.module.scss';
import { ElementsIcon, HomeIcon, LogoIcon, PagesIcon } from '../../icons';
import { NavProfile } from '..';

import { NavIconsSection } from './nav-icons-section/nav-icons-section.component';
interface Props {
	isClosedNav: boolean
	setCloseNav: React.Dispatch<React.SetStateAction<boolean>>
}
export const Navbar: React.FC<Props> = ({ isClosedNav, setCloseNav }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<nav className={`${styles['nav']} ${isClosedNav ? styles['nav-closeSide'] : ''}`} id="nav">
				<div className="flex items-center justify-between h-16">
					<div className="md:flex  w-full hidden ">
						<div className='flex items-center justify-between w-full'>
							<div className=" flex items-center ">
								<h3 className='mb-0 mx-1 pr-3 text-[10px] border-r border-borderBottomColor'>Home</h3>
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
							<div className='  flex flex-row'>
								<NavIconsSection />
								<NavProfile />
							</div>
						</div>
					</div>

					<div className="mr-2 flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>


				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<NavItem
									link={'/link'}
									name={'link'}
									icon={<LogoIcon />}
								/>
							</div>
						</div>
					)}
				</Transition>
			</nav >
		</div >
	);
};
