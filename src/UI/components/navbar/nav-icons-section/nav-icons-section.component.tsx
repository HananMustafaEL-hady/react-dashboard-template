import React, { useState } from 'react'
import { NavDropdown, NavNotifications, NavSearch } from '../..';
import { useComponentVisible } from '../../../../hooks';
import { CloseFullScreenIcon, DarkModeIcon, FullScreenIcon, LanguesDropIcon, ModeDropIcon } from '../../../icons';

export const NavIconsSection = () => {
    const { ref: refMode, isComponentVisible: showMode, setIsComponentVisible: setShowMode } = useComponentVisible(false);
    const [isFullscreen, setIsFullscreen] = useState(false)
    const elem = document.documentElement;

    const _FullScreen = () => {

        if (isFullscreen) {
            closeFullscreen()
        } else {
            openFullscreen()
        }
    }


    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        setIsFullscreen(true)
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        setIsFullscreen(false)
    }

    return (
        <div className='flex items-center'>
            <NavSearch />
            <div className='text-link hover:text-primary cursor-pointer text-xl  font-bold ml-4 transition-all duration-[0.15s] ease-in'><LanguesDropIcon /></div>
            <NavNotifications />
            <div className='relative' ref={refMode} onMouseOver={() => {
                setShowMode(true)
            }} onMouseLeave={() => {
                setShowMode(false)
            }}>
                <div className='text-link hover:text-primary cursor-pointer text-xl  font-bold ml-4 transition-all duration-[0.15s] ease-in' ><ModeDropIcon /></div>
                <NavDropdown showDrop={showMode} >
                    <li className='nav-icon'><ModeDropIcon /><span className='ml-4'>Light</span></li>
                    <li className='nav-icon'><DarkModeIcon /><span className='ml-4'>Dark</span></li>
                    <li className='nav-icon'><DarkModeIcon /><span className='ml-4'>Auto</span></li>
                </NavDropdown>
            </div>
            <div className='text-link hover:text-primary cursor-pointer text-xl  font-bold ml-4 transition-all duration-[0.15s] ease-in' onClick={_FullScreen}>
                {isFullscreen ? <CloseFullScreenIcon /> : <FullScreenIcon />}</div>
        </div>
    )
}
