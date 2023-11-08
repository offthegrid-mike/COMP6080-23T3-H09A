import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function PageTwo() {
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();

    return (
        <>
            <div>Hey, your id is {id}</div>
            <div>Hey, your name is {searchParams.get('name')}</div>
        </>
    )
}

export default PageTwo