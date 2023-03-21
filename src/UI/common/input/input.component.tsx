import React from 'react'
import style from './input.module.scss'
export const Input = () => {
    return (
        <div className={`${style['input-group']}`}>
            <label className={`${style['input-group__label']}`} id="basic-addon3">Amount BTC</label>
            <input type="text" className={`${style['input-group__input']}`} id="basic-url" aria-describedby="basic-addon3" placeholder="1,200000" />
        </div>)
}
