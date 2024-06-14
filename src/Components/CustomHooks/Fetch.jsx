export default async function Fetch({ url, setData, setLoading, setErrorMessage, method, body, Token }) {
  const headers = { 'Content-Type': 'application/json', }
  if (Token) headers.Authorization = `Bearer ${Token}`;
  try {
    setLoading(true)
    const response = await fetch(url, {
      method: method,
      headers,
      body: JSON.stringify(body)
    })
    const data = await response.json()
    setData(data)
    if (data.status !== 'success') {
      throw new Error(data.message)
    }
  } catch (error) {
    setErrorMessage(error.message)
    console.error(error)
  } finally {
    setLoading(false)
  }
}
