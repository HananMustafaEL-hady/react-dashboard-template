import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavDropdown } from '../..'
import { useComponentVisible } from '../../../../hooks';
import styles from './nav-profile.module.scss';

export const NavProfile = () => {
    const { ref: refDrop, isComponentVisible: showDrop, setIsComponentVisible: setShowDrop } = useComponentVisible(false);

    return (
        <div className={`${styles["profile"]}`}>
            <div className="flex-shrink-0 ">
                <img
                    className={`${styles["profile__img"]}`}
                    src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/01.png"
                    alt="userImage"
                />
            </div>
            <div className="ml-4 relative">
                <h4 className={`${styles["profile__name"]}`}>
                    Austin Robertson
                </h4>
                <p className={`${styles["profile__link"]}`} onClick={() => setShowDrop(!showDrop)} ref={refDrop}>Marketing Administrator</p>
                <NavDropdown showDrop={showDrop} >
                    <li><NavLink to="/profile" className={`nav-link`}>profile</NavLink></li>
                    <li><NavLink to="/setting" className={`nav-link`}>privacy setting</NavLink></li>
                </NavDropdown>
            </div>
        </div>
    )
}
