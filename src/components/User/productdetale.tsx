import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../api/product'
import { IProduct } from '../../model'
const Productdetale = () => {
  // khi có dữ liệu cần có biến để lưu trữ lại
  const[product,setProduct] = useState<IProduct>({} as IProduct)
  const { id } = useParams()
  const fetchProduct = async () => {
    if (id) {
      const { data } = await getById(id)
      console.log(data)
      setProduct(data)
    }

  }
  useEffect(() =>{
    fetchProduct()
  },[])
  return (

    <div className="w-[1800px] m-auto">
      <div className="h-[60px] border-t ">
        <h1 className="text-5xl pt-2">{product.name}</h1>
      </div>
      <div className="grid grid-cols-3 pt-8">
        <div>
          <div className="ml-12">
            <img src={product.images?.[0].base_url} className="hover:scale-110" alt="" />
          </div>

          <div className="flex pt-4 ">
            <i className="fa fa-star-o w-[100px] h-[100px] border text-center text-[#666666] text-8xl hover: " aria-hidden="true"></i>
            <img  src={product.images?.[0].base_url} className="w-[100px] h-[100px] hover:-translate-y-4 " alt="" />
            <img  src={product.images?.[0].base_url}className="w-[100px] h-[100px] hover:-translate-y-4" alt="" />
            <img  src={product.images?.[0].base_url} className="w-[100px] h-[100px] hover:-translate-y-4" alt="" />
            <img  src={product.images?.[0].base_url} className="w-[100px] h-[100px] hover:-translate-y-4" alt="" />

          </div>
          <p className="text-[#666666]">Tính năng hiệu quả</p>
        </div>
        <div>
          <span className="text-4xl text-red-500 ">{product.price}.đ</span>
          <span className="text-2xl text-[#707070] line-through pl-4">{product.original_price}.đ</span>
          <p className=" text-[#707070] text-lg mt-6"> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
          <div className="pt-8"  >

            <button className="w-[200px] h-[40px] rounded bg-[#FF3945] text-white hover:scale-110 ">Mua Ngay</button>
            <a href='/row'>
              <span className="pl-8 text-2xl"><i className="fa fa-cart-arrow-down text-5xl text-[#FF3945]   w-[50px] h-[50px] text-center hover:scale-110 " aria-hidden="true"></i> Thêm vào giỏ hàng</span>
            </a>


          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-[1800px] ">
        <div className="text-center">
          <h1 className="text-[#D70018] text-4xl">ĐẶC ĐIỂM NỔI BẬT</h1>
        </div>
        <div className="text-lg pl-6 text-[#444444]">
          <p >Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
          <p className="pt-2">Thưởng thức không gian giải trí cực đỉnh - {product.specifications?.[0].attributes?.[0].code} ,{product.specifications?.[0].attributes?.[0].name} ,{product.specifications?.[0].attributes?.[0].value}</p>
          
        </div>
      </div>
      <div>
        <p className="text-lg pt-4">
          Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung.
          Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước.
          Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
        </p>
        <h2 className="text-3xl pt-4">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h2>
        <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera.
          Sau đây là những đánh giá chi tiết về chiếc</p>
        <h2 className="text-3xl pt-4">Thiết kế sang trọng, màn hình Super AMOLED</h2>
        <p>
          Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
          Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
        </p>
      </div>
      <div className="text-center pt-4">
        <button className="w-[250px] h-[30px] border rounded">
          xem thêm
        </button>
      </div>
    </div>
  )
}

export default Productdetale