import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DropdownArrowIcon } from '../../icons';
import styles from './sub-dropdown.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
    dropdownList: {
        title: string,
        link: string
    }[]
    icon?: ReactNode
}

export const SubDropdown: React.FC<Props> = ({ title, dropdownList, icon }) => {
    const [showCollapse, setShowCollapse] = useState(false)
    const [height, setHeight] = useState<string>()
    const ref = useRef<HTMLUListElement>(null)
    useEffect(() => {
        if (showCollapse) {
            const height = ref?.current?.clientHeight;
            setHeight(`${height}px`)
        } else {
            setHeight(`0px`)
        }

    }, [showCollapse])
    return (
        <>
            <div className={`${styles['list']}`} onClick={() => { setShowCollapse(!showCollapse) }}>
                <div className={`${styles['list__header']}`} >
                    {icon}
                    <p className={`${styles['list__title']} `} >{title}</p>
                </div>
                <span className={`${showCollapse ? styles['list__dropIcon'] : ""} `}><DropdownArrowIcon />
                </span>
            </div>

            <div className={`${styles['list__wrapper']}`} style={{ height: height }}  >
                <ul ref={ref} className={`${styles['list__dropdown']}`}>
                    eeeee
                </ul>
            </div>
        </>
    )
}