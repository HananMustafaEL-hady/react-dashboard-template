import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from "./nav-side-menu-dropdown.module.scss"
interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
    icon: ReactNode
}
export const NavSideMenuDropdown: React.FC<Props> = ({ title, icon, children }) => {
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
        <div className=''>
            <div className={`${styles['list__header']} ${showCollapse ? styles['list__header-selected'] : ''}`} onClick={() => { setShowCollapse(!showCollapse) }}>
                <span className={`${styles['list__header-icon']}`}>
                    {icon}
                </span>
                <p className={`${styles['list__header-title']}`} >{title}</p>
            </div>

            <div className={`${styles['list__wrapper']}`} style={{ height: height }}  >
                <ul ref={ref} className={`${styles['list__dropdown']}`}>
                    {children}
                </ul>
            </div>

        </div>
    )
}
