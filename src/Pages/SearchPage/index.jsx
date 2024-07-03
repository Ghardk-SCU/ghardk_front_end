import { useEffect, useState } from "react"
import Shop from "./Shop"
import useFetch from "../../Components/CustomHooks/useFetch"
import { searchByText } from "../../Store/urls"
import { useParams } from "react-router-dom"

export default function SearchPage() {
  const queryParams = new URLSearchParams(location.search);
  const [productsUrl, setProductsUrl] = useState(searchByText(queryParams.get('q')))
  const { data: Prod, loading: ProdLoading } = useFetch({
    url: productsUrl,
    method: 'GET',
  })
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  useEffect(() => {
    if (Prod) {
      setProducts(Prod)
      setLoadingProducts(false)
    }
  }, [Prod])
  useEffect(() => {
    setProductsUrl(searchByText(queryParams.get('q')))
    setLoadingProducts(true)
  }, [queryParams.get('q')])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{
      background: 'rgba(212, 205, 205, 1)'
    }} className="relative w-full min-h-screen text-Black flex flex-col gap-40">
      <Shop searchWord={queryParams.get('q')}
        setProductsUrl={setProductsUrl} ProductsUrl={productsUrl}
        loadingProducts={loadingProducts} setLoadingProducts={setLoadingProducts}
        Products={products} setProducts={setProducts}/>
    </div>
  )
}