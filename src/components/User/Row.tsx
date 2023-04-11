const Row = () => {
    return <>
        <div className="w-[1800px] m-auto">
            <div className="grid grid-cols-3 ">
                <div className="m-auto" >
                    <img src="/img/a1.png" alt="" className="w-[300px] h-[300px] hover:scale-110" />
                </div>
                <div>
                    <h1 className="text-4xl">Samsung Galaxy S22-Đen</h1>
                    <div className="pt-2">
                        <span className="text-3xl text-red-500 ">16.090.000 ₫</span><span className="xl pl-4 line-through">21.990.000 ₫</span>
                    </div>

                    <p className="text-2xl ">Chọn số lượng:</p>
                    <div className="pt-4 ">
                        <span><i className="fa fa-minus text-2xl w-[40px] h-[40px] border text-center rounded hover:scale-110" aria-hidden="true"></i></span>
                        <span className="pl-4"><i className="fa fa-plus text-2xl w-[40px] h-[40px] border text-center rounded hover:scale-110 " aria-hidden="true"></i></span>
                        <div className="pt-4">
                            <div className="bg-[#F6F6F6] rounded ">
                                <div className="pl-4 ">
                                    <p>-Chương trình khuyến mãi</p>
                                    <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                                    <p>
                                        Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-3  pt-8">
                <div className="m-auto" >
                    <img src="/img/a2.png" alt="" className="w-[300px] h-[300px] hover:scale-110" />
                </div>
                <div>
                    <h1 className="text-4xl">Samsung Galaxy S22-Đen</h1>
                    <div className="pt-2">
                        <span className="text-3xl text-red-500 ">16.090.000 ₫</span><span className="xl pl-4 line-through">21.990.000 ₫</span>
                    </div>
                    <p className="text-2xl ">Chọn số lượng:</p>
                    <div className="pt-4 ">
                        <span><i className="fa fa-minus text-2xl w-[40px] h-[40px] border text-center rounded hover:scale-110" aria-hidden="true"></i></span>
                        <span className="pl-4"><i className="fa fa-plus text-2xl w-[40px] h-[40px] border text-center rounded hover:scale-110 " aria-hidden="true"></i></span>
                        <div className="pt-4">
                            <div className="bg-[#F6F6F6] rounded ">
                                <div className="pl-4 ">
                                    <p>-Chương trình khuyến mãi</p>
                                    <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                                    <p>
                                        Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="grid grid-cols-2 pt-8 ">
                        <div className="text-2xl">
                            <p>Tổng Tiền Tạm Tính :</p>
                        </div>
                        <div className="text-2xl text-red-500 font-bold">
                            <p>25000.000 đ</p>
                        </div>

                    </div>
                    <div className="pt-8">
                        <button className="w-[500px] h-[40px] bg-[#DC3545] text-white text-xl rounded hover:scale-110">Tiến hành đặt hàng</button>
                    </div>
                    <div className="pt-4"> 
                        <button className="w-[500px] h-[40px]  border rounded text-red-500 text-xl hover:scale-110">Chọn thêm sản phẩm khác</button>
                    </div>

                </div>
            </div>


        </div>

    </>

}
export default Row