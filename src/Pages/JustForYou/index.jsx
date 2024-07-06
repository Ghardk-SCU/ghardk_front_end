import { useEffect, useState, useContext } from "react"
import { AuthenticationContext } from "../../Store/Context/Authentication"
import Shop from "./Shop"
import useFetch from "../../Components/CustomHooks/useFetch"
import { justForYou } from "../../Store/urls"
import { useParams, useNavigate } from "react-router-dom"

export default function JustForYou() {
  const { name } = useParams()
  const Navigate = useNavigate()
  const { Token, isLogedIn } = useContext(AuthenticationContext)
  const [productsUrl, setProductsUrl] = useState(justForYou())
  const { data: Prod, loading: ProdLoading } = useFetch({
    url: justForYou(),
    method: 'GET',
    Token
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
    setProducts([])
    setLoadingProducts(true)
  }, [name])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!isLogedIn) {
      Navigate('/login')
    }
  }, [isLogedIn])

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