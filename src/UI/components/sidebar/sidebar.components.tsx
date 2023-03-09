import React, { useState } from 'react'
import styles from './sidebar.module.scss';

export const Sidebar = () => {
    const [closeNav, setCloseNav] = useState(false)
    return (
        <div className={`${styles['sidebar']} ${closeNav ? styles['sidebar-closed'] : ''}`}>
            <button className='' onClick={() => {
                setCloseNav(!closeNav
                )
            }}>x</button>

        </div>
    )
}

