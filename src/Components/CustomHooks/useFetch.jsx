import { useState, useEffect } from 'react'

export default function useFetch({ url, setErrorMessage, method, body, Token, reRender = 1 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
  }
  if (Token) headers.Authorization = `Bearer ${Token}`;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: JSON.stringify(body)
        })
        const string = await response.text();
        const data = string === "" ? {} : JSON.parse(string);
        if (setData) setData(data)
        if (!response.ok) {
          throw new Error(data.message)
        }
      } catch (error) {
        if (setErrorMessage)
          setErrorMessage(error.message)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url, reRender])

  return { data, loading }
}
