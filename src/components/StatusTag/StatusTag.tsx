import React from 'react'
import './style.css'
type Props = {
    color: string,
    children: React.ReactNode,
}
const StatusTag = ({color, children}: Props ) => {
    return (
        <div className="tag" style={{backgroundColor: `${color}`}}>
            {children}
        </div>
    )
}

export default StatusTag
