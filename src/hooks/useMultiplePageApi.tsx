import { useState, useEffect } from 'react'

export default function useMultiplePageApi(initialUrl, initialData = []) {
    const [data, setData] = useState(initialData)
    const [url, setUrl] = useState(initialUrl)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const responseData = await response.json()

            setData(prevData => {
                const newData = [...prevData, ...responseData.results]
                const uniqueData = newData.reduce((acc, item) => {
                    if (!acc.find(i => i.id === item.id)) {
                        acc.push(item)
                    }
                    return acc
                }, [])
                return uniqueData
            })
            // setHasMore(responseData.results.length > 0)
            setHasMore(responseData.total_pages > page)
            setPage(page + 1)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setData(initialData)
        setPage(1)
        setUrl(initialUrl)

    }, [])

    useEffect(() => {
        if (!url) return
        fetchData()
    }, [url])

    return { data, loading, error, hasMore, page, setUrl }
}
