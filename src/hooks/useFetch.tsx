import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
                setLoading(false)
            } catch (error) {
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
