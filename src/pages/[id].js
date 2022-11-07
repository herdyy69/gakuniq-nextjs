import React from 'react'
import { useRouter } from 'next/router'

const Test = () => {
    const router = useRouter()
    const { id } = router.query

    const dumbData = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Jack' },
    ]

    const user = dumbData.find(user => user.id === parseInt(id))

    return (
        <div>
            <h1>Test</h1>
            {user && <p>{user.name}</p>}
        </div>
    )
}

export default Test
