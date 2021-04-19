import { checkPassword } from "../database"

export const authCheckApi=(username,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(checkPassword(username,password))
            resolve({success:true,status:200})
            else
            reject({success:false,status:401,error:"Incorrect Username"})
        },3000)
       
    })
}