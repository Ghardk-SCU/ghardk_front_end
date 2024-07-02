import { useEffect, useState, useContext } from "react"
import Shop from "./Shop"
import { AuthenticationContext } from "../../Store/Context/Authentication"
import useFetch from "../../Components/CustomHooks/useFetch"
import { getFav } from "../../Store/urls"

export default function Favorite() {
  const { Token } = useContext(AuthenticationContext)
  const { data: Prod, loading: ProdLoading } = useFetch({
    url: getFav(),
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
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{
      background: 'rgba(212, 205, 205, 1)'
    }} className="relative w-full min-h-screen text-Black flex flex-col gap-40">
      <Shop
        loadingProducts={loadingProducts} setLoadingProducts={setLoadingProducts}
        Products={products} />
    </div>
  )
}