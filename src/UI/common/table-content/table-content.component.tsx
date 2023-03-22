import React from 'react'

interface Props {
    _renderTableData: Function;
    data: object[]
}
export const TableContent: React.FC<Props> = ({ data, _renderTableData }) => {
    return (
        <div className="table-content">
            {data?.map((item, index) => {
                return <tr className="table-row" key={index}>
                    {_renderTableData(item)}
                </tr>
            })}

        </div>
    )
}
