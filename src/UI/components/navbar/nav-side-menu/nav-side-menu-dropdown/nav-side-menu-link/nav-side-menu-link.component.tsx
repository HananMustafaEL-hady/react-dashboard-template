import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav-side-menu-link.module.scss'

interface Props {
  name: string;
  url: string
}

export const NavSideMenuLink: React.FC<Props> = ({ name, url }) => {
  return (
    <NavLink to={`${url}`} ><li className={`${styles['link']} `} >
      {name}
    </li>
    </NavLink>
  )
}
