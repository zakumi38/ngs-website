import axios from "axios"
import { useState, useEffect, useCallback } from "react"

function usePaginateTeam(pageName, pageNumber, itemsPerpage, team) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [action, setAction] = useState("")
    const fetch = useCallback(() => {
        const url =
            team === "All"
                ? {
                      all: `http://localhost:3500/${pageName}`,
                      curPage: `http://localhost:3500/${pageName}?_page=${pageNumber}&&_limit=${itemsPerpage}`,
                  }
                : {
                      all: `http://localhost:3500/${pageName}?team=${team}`,
                      curPage: `http://localhost:3500/${pageName}?team=${team}&&_page=${pageNumber}&&_limit=${itemsPerpage}`,
                  }
        async function fetch() {
            const [totalItems, CurrentPageItems] = await Promise.all([
                axios.get(url.all),
                axios.get(url.curPage),
            ])
            setData([totalItems.data, CurrentPageItems.data])
            setLoading(false)
        }
        fetch().catch((error) => setError(error))
    }, [pageNumber, itemsPerpage, pageName, team])
    useEffect(() => {
        fetch()
    }, [fetch, action])
    return [...data, loading, error, action, setAction]
}
export default usePaginateTeam
