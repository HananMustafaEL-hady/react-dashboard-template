import React from 'react'
import styles from './sidebar-header.module.scss';

interface Props {
    isClosedNav: boolean
    setCloseNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarHeader: React.FC<Props> = ({ setCloseNav, isClosedNav }) => {
    return (
        <div className={`${styles['header']}`}>
            {/* logo */}
            <div className={`${styles['header__logo']}`}>
                <img
                    src={`/images/logo.svg`}
                    alt={''}
                    className=''
                />
            </div>
            <h1 className={`${styles['header__title']} ${isClosedNav ? styles['header__title-open'] : ''}`}>title title</h1>

            <div className={`${styles['header__toggle']} ${isClosedNav ? styles['header__toggle-open'] : ''}`} onClick={() => setCloseNav(!isClosedNav)}>
                <img
                    src={`/images/sidebar-toggle.svg`}
                    alt={''}
                    className=''
                />
            </div>
        </div>
    )
}
