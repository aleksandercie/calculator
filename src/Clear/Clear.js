import React from 'react'


const Clear = (props) => {
    return (
        <>
            <button className="clear" onClick={() => props.handleClick()}>{props.children}</button>
        </>
    )
}

export default Clear