import axios from "axios"
import { useState, useEffect, useCallback } from "react"

function usePaginate(pageName, pageNumber, itemsPerpage, query, buttonClick) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [action, setAction] = useState("")
    const fetch = useCallback(() => {
        async function fetch() {
            const url = buttonClick
                ? {
                      all: `http://localhost:3500/${pageName}?q=${query}`,
                      curPage: `http://localhost:3500/${pageName}?q=${query}&&_page=${pageNumber}&&_limit=${itemsPerpage}`,
                  }
                : {
                      all: `http://localhost:3500/${pageName}`,
                      curPage: `http://localhost:3500/${pageName}?_page=${pageNumber}&&_limit=${itemsPerpage}`,
                  }
            const [totalItems, CurrentPageItems] = await Promise.all([
                axios.get(url.all),
                axios.get(url.curPage),
            ])
            setData([totalItems.data, CurrentPageItems.data])
            setLoading(false)
        }
        fetch().catch((error) => setError(error))
    }, [pageNumber, itemsPerpage, pageName, buttonClick])
    useEffect(() => {
        fetch()
    }, [fetch, action])
    return [...data, loading, error, action, setAction]
}
export default usePaginate
