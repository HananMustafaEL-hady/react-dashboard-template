import React from 'react'
import { useComponentVisible } from '../../../../hooks';
import { Profile } from '../../../common/profile/profile.component';
import { NotificationDropIcon } from '../../../icons'
import styles from './nav-notifications.module.scss';
export const NavNotifications = () => {
    const { ref: refDrop, isComponentVisible: showDrop, setIsComponentVisible: setShowDrop } = useComponentVisible(false);

    return (
        <div className='lg:relative  '>
            <div className='text-link hover:text-primary cursor-pointer text-xl  font-bold ml-4 transition-all duration-[0.15s] ease-in' onClick={() => setShowDrop(!showDrop)} ref={refDrop}><NotificationDropIcon /></div>
            <ul className={`${styles['list']} ${showDrop ? styles['list-show'] : ''}`}>
                <h3 className='bg-primary text-[#fff] p-4 font-bold '>All Notifications</h3>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile /></li>

            </ul>
        </div>

    )
}
