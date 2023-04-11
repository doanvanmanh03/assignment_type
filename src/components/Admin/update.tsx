// khai báo các trường các trường dữ liệu
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from  "yup" 
import {useParams} from 'react-router-dom'
import { getById, update } from "../../api/product";
import { useEffect } from "react";
import { UpdateSchema, updateForm } from "../../model";


const Update = () => {
    const { register, handleSubmit,formState:{errors} } = useForm<updateForm>({
        resolver: yupResolver(UpdateSchema),
        defaultValues: async () =>{
            if(id){
              return  await fetchProductById(id)
            }
        }
    })
    const {id} = useParams()

    const onSubmit = async (data:updateForm) => {
        try{
            if(id){
                const reponse  = await update (id , data)
                console.log(reponse)
            }
           
        }catch(err){
            console.log(err)
        }

    }
    const fetchProductById = async (id: string) =>{
        const {data }= await getById(id)
        return data
    }
    useEffect(() =>{
        if(id){
            fetchProductById(id)
        }
    })
    return <>

        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">


                        <div className="mt-8">
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label >Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("name")}
                                />
                                <p className="text-red-600 text-[10px]">
                                    {errors.name && errors.name.message}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label >Giá</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                       {...register("price")}
                                       type="number"
                                    />
                                     <p className="text-red-600 text-[10px]">
                                    {errors.price && errors.price.message}
                                </p>
                                </div>

                                <div>
                                    <label >Giảm giá</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        {...register("orginal_price")}
                                        type="number"
                                        
                                    />
                                     <p className="text-red-600 text-[10px]">
                                    {errors.orginal_price&& errors.orginal_price.message}
                                </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                              
                                <div>

                                </div>

                             
                            </div>

                            <div>
                                <label >Mô tả</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("description")}
                                ></textarea>
                                 <p className="text-red-600 text-[10px]">
                                    {errors.description && errors.description.message}
                                </p>
                                
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>

}
export default Update