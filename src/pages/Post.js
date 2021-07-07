import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const Post = ({ match }) => {

    const { id } = useParams()
    const query = new URLSearchParams(useLocation().search)

    return (
        <>
            <h2>Post ID: {id}</h2>
            <h2>query: {query.get('name')}</h2>
        </>
    )
}
