import { useEffect, useState } from "react"
import Shop from "./Shop"
import useFetch from "../../Components/CustomHooks/useFetch"
import { searchByText } from "../../Store/urls"
import { useParams } from "react-router-dom"

export default function SearchPage() {
  const { name } = useParams()
  const [productsUrl, setProductsUrl] = useState(searchByText(name))
  const { data: Prod, loading: ProdLoading } = useFetch({
    url: productsUrl,
    method: 'GET',
    reRender: name
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
    setLoadingProducts(true)
  }, [name])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{
      background: 'rgba(212, 205, 205, 1)'
    }} className="relative w-full min-h-screen text-Black flex flex-col gap-40">
      <Shop searchWord={name}
        setProductsUrl={setProductsUrl} ProductsUrl={productsUrl}
        loadingProducts={loadingProducts} setLoadingProducts={setLoadingProducts}
        Products={products} />
    </div>
  )
}