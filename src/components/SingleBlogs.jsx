import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetSingleBlog } from "../api/GetBlogs";
import { Data } from "../context/Store";
import { Loader } from "./Loader";

export const SingleBlogs = () => {

    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const { loading, setLoading } = useContext(Data)

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)
            try {
                const res = await GetSingleBlog(id)
                setBlog(res.data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        getBlogs()
    }, [setLoading])

    if (loading) return <Loader/>

    return (
        <section className="pt-25 container flex items-center justify-center pb-25">
            <div className="max-w-4xl mx-auto px-4 py-10">

                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                    {blog?.title}
                </h1>

                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                    <span>{blog?.author_name}</span>
                    <span>{new Date(blog?.created_at).toDateString()}</span>
                </div>

                {blog?.image && (
                    <img
                        src={blog?.image}
                        alt={blog?.title}
                        className="w-full h-[400px] object-cover rounded-xl mb-6 shadow"
                    />
                )}

                <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: blog?.body }} />
                </div>
            </div>
        </section>
    )
}