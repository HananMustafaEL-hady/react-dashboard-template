import React from 'react'
import styles from './profile.module.scss';
interface Props {
    hasDate?: boolean
}
export const Profile: React.FC<Props> = ({ hasDate = true }) => {

    return (
        <div className={`${styles["profile"]}`}>
            <div className="flex-shrink-0 ">
                <img
                    className={`${styles["profile__img"]}`}
                    src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/01.png"
                    alt="userImage"
                />
            </div>
            <div className="ml-4 w-full">
                <h4 className={`${styles["profile__name"]}`}> Emma Watson Bni </h4>


                <div className={`${styles["profile__link__wrapper"]}`}>
                    <p className={`${styles["profile__link"]}`} >Cyst Bni</p>
                    {hasDate ? <p className={`${styles["profile__date"]}`} >3 days ago</p> : null}
                </div>

            </div>
        </div>
    )
}
