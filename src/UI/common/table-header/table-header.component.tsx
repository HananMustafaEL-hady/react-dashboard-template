import React from 'react'
interface Props {
    headerList: string[]
}
export const TableHeader: React.FC<Props> = ({ headerList }) => {
    return (
        <div className="table-header">
            {headerList?.map((item, index) => {
                return <div className="header__item" key={index}>{item}</div>
            })}
        </div>)
}
