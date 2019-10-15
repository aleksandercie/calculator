import React from 'react'


const Button = (props) => {

    // const buttonClass = props.children === 1 ? styles.button : styles.buttonaa
    return (
        <>
            <button className="button" onClick={() => props.handleClick(props.children)}>{props.children}</button>
        </>
    )
}

export default Button