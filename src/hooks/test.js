import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const test = () => {
    const [dataTest, setdataTes] = useState()

    const Get = async () => {
        await axios
            .get('/api/user')
            .then(response => setStatus(response.data.status))
            .catch(error => {})
    }

    useEffect(() => {
        Get()
    }, [])

    
}
