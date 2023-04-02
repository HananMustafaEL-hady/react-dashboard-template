import React from 'react'
import { useComponentVisible } from '../../../../hooks';
import { Profile } from '../../../common/profile/profile.component';
import { SearchDropIcon } from '../../../icons'
import styles from './nav-search.module.scss';
export const NavSearch = () => {
    const { ref: refDrop, isComponentVisible: showDrop, setIsComponentVisible: setShowDrop } = useComponentVisible(false);

    return (
        <div className='relative ' ref={refDrop}>
            <div className='text-link hover:text-primary cursor-pointer text-xl  font-bold ml-4 transition-all duration-[0.15s] ease-in' onClick={() => setShowDrop(!showDrop)} ><SearchDropIcon /></div>
            <ul className={`${styles['list']} ${showDrop ? styles['list-show'] : ''}`}>
                <div className='p-4 '>
                    <input type="text" name="name" className='w-full bg-primary/25 p-2 rounded' placeholder='search here...' />
                </div>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile hasDate={false} /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile hasDate={false} /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile hasDate={false} /></li>
                <li className={`w-full  py-[10px] block whitespace-nowrap  hover:bg-primary/20 border-b border-borderBottomColor cursor-pointer px-4 `}><Profile hasDate={false} /></li>

            </ul>
        </div>

    )
}
