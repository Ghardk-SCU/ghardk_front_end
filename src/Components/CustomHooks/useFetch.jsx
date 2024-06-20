import { useState, useEffect } from 'react'

export default function useFetch({ url, setErrorMessage, method, body, Token}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
  }
  if (Token) headers.Authorization = `Bearer ${Token}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, {
          method: method,
          headers,
          body: JSON.stringify(body)
        })
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

  return { data, loading }
}
