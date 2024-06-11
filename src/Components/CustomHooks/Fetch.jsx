
export default async function Fetch({ url, setLoading, setData, setErrorMessage, method, body}) {
  try {
    setLoading(true)
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    setData(data)
    if(data.status !== 'success') {
      throw new Error(data.message)
    }
  } catch (error) {
    setErrorMessage(error.message)
    console.error(error)
  } finally {
    setLoading(false)
  }
}
