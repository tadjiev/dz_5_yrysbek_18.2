import React, {useState} from 'react';

function AboutUs(props) {
    const [status, setStatus] = useState(false)

    const handleClick = () => {
        setStatus(!status)
    }
    return (
        <>
            {
                status ? <p>Text</p> : false
            }
            <button onClick={handleClick}>button</button>
        </>
    );
}

export default AboutUs;