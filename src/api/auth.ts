import instance from "./instance";

export const login = (user)=>{
    return instance.post('/signin',user)
}
