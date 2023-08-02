import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { PopularOrSearchMoviesAPIResponse, Result } from '../types/PopularOrSearchMoviesAPI'

type UseMultiplePageApiReturn = {
    data: Result[],
    loading: boolean,
    error: Error | null,
    hasMore: boolean,
    page: number,
    setUrl: Dispatch<SetStateAction<string>>
}


export default function useMultiplePageApi(initialUrl: string, initialData: Result[] = []): UseMultiplePageApiReturn {
    const [data, setData] = useState(initialData)
    const [url, setUrl] = useState(initialUrl)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const responseData = await response.json() as PopularOrSearchMoviesAPIResponse

            setData(prevData => {
                const newData = [...prevData, ...responseData.results]
                const uniqueData = newData.reduce((acc:Result[], item) => {
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
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error)
            } else {
                setError(new Error("An unknown error occurred"));
            }

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
