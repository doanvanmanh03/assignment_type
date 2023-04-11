import * as Yup  from 'yup'
export interface IProduct {
    id:number,
    name:string,
    price:number,
    original_price:number,
    description:string ,
    images: {base_url: string}[],
    brand:{id:number,name:string,slug:string},
    specifications:ISpecification[]
}
interface ISpecification{
    name:string,
    attributes:{code:string ,value:string ,name:string}[]

}
export const singupSchema = Yup.object({
    firstName:Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName:Yup.string().required("Trường dữ liệu bắt buộc"),
    email:Yup.string().required("Trường dữ liệu bắt buộc"),
    password:Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    firmPassword:Yup.string().oneOf([Yup.ref("password")],"Mật khẩu không khớp"),
  
  })
  
  export   type SingupFrom = Yup.InferType<typeof singupSchema>
  export const singinSchema = Yup.object({
    email:Yup.string().required("Trường dữ liệu bắt buộc"),
    password:Yup.string().min(6).required("Trường dữ liệu bắt buộc"),

  })
  export type SingipFrom = Yup.InferType<typeof singupSchema > 

  
  export  const UpdateSchema = Yup.object({
    name: Yup.string().required("TRường dữ liệu bắt buộc"),
    price: Yup.number().required("TRường dữ liệu bắt buộc"),
    orginal_price: Yup.number().required("TRường dữ liệu bắt buộc"),
    description: Yup.string().min(10,"tối thiếu 10 ký tự").required("TRường dữ liệu bắt buộc"),
    
})

export type updateForm = Yup.InferType<typeof UpdateSchema>