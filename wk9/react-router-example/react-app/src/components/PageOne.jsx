import React from 'react'
import { Link } from 'react-router-dom'

const generateRndInt = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
}

function PageOne() {

    const value = generateRndInt();

    return (
        <Link to={`/post/${value}`}>{value}</Link>
    )
}

export default PageOne