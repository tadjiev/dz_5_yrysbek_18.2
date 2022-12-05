import React, {useState} from 'react';

function PortfolioPage(props) {
    const [works, setWorks] = useState([])

    const handleClick = () => {
        setWorks(["Work1", "Work2"]
        )
    }

    return (
        <>
            <button onClick={handleClick}>get </button>
            <ul>
                {works.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
}

export default PortfolioPage;