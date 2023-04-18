import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './sidebar-dropdown.module.scss';
import { Collapse } from 'react-collapse';
import { NavLink } from 'react-router-dom';
import { DotIcon, DropdownArrowIcon } from '../../../icons';

interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
    dropdownList: {
        title: string,
        link: string
    }[]
    icon: ReactNode
    isClosedNav: boolean
}
export const SidebarDropdown: React.FC<Props> = ({ title, dropdownList, icon, isClosedNav }) => {
    const [showCollapse, setShowCollapse] = useState(false)
    const [height, setHeight] = useState<string>()
    const ref = useRef<HTMLUListElement>(null)
    useEffect(() => {
        console.log("showCollapse", showCollapse)
        if (showCollapse) {
            const height = ref?.current?.clientHeight;
            setHeight(`${height}px`)
        } else {
            setHeight(`0px`)
        }

    }, [showCollapse])
    return (
        <>
            <div className={`${styles['list__title__wrapper']}`} onClick={() => { setShowCollapse(!showCollapse) }}>
                <div className={`${styles['list__title']}`} >
                    {icon}
                    <p className={`${styles['list__title-text']} ${isClosedNav ? styles['list__title-text-close'] : ''}`} >{title}</p>

                </div>
                <span className={`${showCollapse ? styles['list__title_dropIcon'] : ""} ${isClosedNav ? styles['list__title_dropIcon-close'] : ''}`}><DropdownArrowIcon />
                </span>
            </div>

            <div className={`${styles['list__wrapper']}`} style={{ height: height }}  >
                <ul ref={ref} className={`${styles['list__dropdown']}`}>
                    {dropdownList?.map((item, index) => {
                        return <li key={index} className={`${styles['list__item']} ${isClosedNav ? styles['list__item-close'] : ''}`}>
                            <NavLink to={`${item?.link}`} className={`${styles['list__item-link']} ${isClosedNav ? styles['list__item-link-close'] : ''}`}>
                                <span className={`text-[10px] ${isClosedNav ? "hidden" : ""}`}>
                                    <DotIcon />
                                </span>
                                <span className='ml-3 capitalize'>{isClosedNav ? item.title?.charAt(0).toUpperCase() : item.title}</span>
                            </NavLink></li>
                    })}

                </ul>
            </div>
        </>
    )
}
