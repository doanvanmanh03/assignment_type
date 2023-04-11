import { useEffect,useState} from "react";
import { getAll } from "../api/product"
import Product from "./product"
import { IProduct } from "../model";

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <div>
        <h1 className="text-4xl">Sản phẩm nổi bật</h1>
        <div className="grid grid-cols-6 gap-4">
            {products.map(product => <Product
            data ={product}
                 key={product.id} />)
            }
        </div>
    </div>
}

export default HomePage
