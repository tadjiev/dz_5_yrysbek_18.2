import React, {useState} from 'react';

function ContactsPage(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        console.log(input)
        setInput('')
    }

    const handleClear = () => {
        setInput('')
    }

    return (
        <>
            <input value={input} type="text" onChange={handleChange}/>
            <button onClick={handleClick}>add</button>
            <button onClick={handleClear}>clear</button>
        </>
    );
}

export default ContactsPage;