import { useState, useEffect } from 'react'

type FetchState<T> = {
    data: T | null
    loading: boolean
    error: Error | null
}

export default function useFetch<T = unknown>(url: string): FetchState<T> {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const json = await response.json() as T
                setData(json)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}


// --- usage example --- //

// function App() {
//     const {data, loading, error} = useFetch('https://api.example.com/data')

//     if (loading) {
//         return <div>Loading...</div>
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>
//     }

//     return (
//         <div>
//             {data && data.map((item) => (
//                 <div key={item.id}>{item.name}</div>
//             ))}
//         </div>
//     )
// }
