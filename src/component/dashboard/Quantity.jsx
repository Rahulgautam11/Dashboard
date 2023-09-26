import React, { useState } from 'react'

const Quantity = ({ count, setcount }) => {


    const HandleIncrease = () => {
        setcount(count + 1)

    }
    const HandleDecrease = () => {
        if (count > 0) {
            setcount(count - 1)

        }
    }
    const HandleInputValue = (e) => {
        let value = parseInt(e.target.value)
        setcount(value ? value : 0)
    }
    return (
        <div className='quantity_wrap'>
            <button onClick={HandleDecrease}>-</button>
            <input type="number" onChange={HandleInputValue} value={count} />
            <button onClick={HandleIncrease}>+</button>
        </div>
    )
}

export default Quantity