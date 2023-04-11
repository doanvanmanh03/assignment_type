import instance from ".";
import { SingipFrom, SingupFrom } from "../model";

export const singup = (data:SingupFrom) =>{
    const uri ="/signup"
    return instance.post(uri,data)
 }
 export const login = (data:SingipFrom) =>{
    const uri ="/login"
    return instance.post(uri,data)
 }