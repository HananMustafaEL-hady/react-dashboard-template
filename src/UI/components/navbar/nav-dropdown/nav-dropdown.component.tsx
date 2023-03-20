import React, { Children } from 'react'
import styles from './nav-dropdown.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {
    showDrop: boolean
}
export const NavDropdown: React.FC<Props> = ({ showDrop, children }) => {

    return (
        <ul className={`${styles['list']} ${showDrop ? styles['list-show'] : ''}`}>
            {children}
        </ul>
    )
}
