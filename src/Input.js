import React from 'react'

function Input({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name:</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(e.target.value)
                }} />
                <button type='button' onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Button</button>
        </form>
    )
}

export default Input