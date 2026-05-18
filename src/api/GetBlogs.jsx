import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    withCredentials: true // sends cookie automatically with every request
  })

export const ApiFetch = async() => {
    const respons = await api.get('/blogs')
    console.log(respons)
    return respons.data
}
export const GetSingleBlog = async(id) => {
    const respons = await api.get(`/blogs/${id}`)
    console.log(respons)
    return respons.data
}