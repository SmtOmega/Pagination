import React, { useEffect, useState } from 'react'
import paginate from './util'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [dataSet, setDataSet] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const newData = paginate(data)
        setDataSet(newData)
        setLoading(false)
    }

    useEffect(()=> {
        getData()
    }, [])

    return {loading, dataSet}
}