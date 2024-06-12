import { useEffect } from 'react'

export default function useFetch({ url, setLoading, setData, setErrorMessage }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
}
