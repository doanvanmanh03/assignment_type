import {Link} from 'react-router-dom'
import { IProduct } from "../model"
type Props = {
  data:IProduct
}
const Product = ({data}:Props) => {
    return<div  className="pl- mt-8 bg-red-white border rounded hover:border-red-300 hover:scale-110  " >
       <Link to={`/product/${data.id}`} className="block">
    <img src={data.images?.[0].base_url}className="  h-[250px] w-[250px] m-auto "  alt="Art"/>
    <h3 className="mt-4 text-xl  text-gray-900 text-sm ml-8 text-[#707070] " >
      {data.name}
    </h3>
    <span  className="text-2xl text-[#D70018] ml-8">{data.price}</span>   <span className="line-through ml-4 text-[#707070]">{data.original_price}</span>
    <p></p>
    <a className="text-xl pr-2 ml-8">
    <i className="fa fa-star  text-yellow-400" aria-hidden="true"></i>
    <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
    <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
    <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
    <i className="fa fa-star text-yellow-400" aria-hidden="true"></i> 
    
    </a>
    <span className="text-[#707070]">10 Đánh giá </span>
  </Link>

    </div>
  
}

export default Product
