import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleBlog } from "../api/GetBlogs";
import { Data } from "../context/Store";
import { Loader } from "./Loader";

const tags = ["Web Development", "Programming", "Career Advice", "Coding Tips"];

const relatedPosts = [
  { id: 1, title: "It is a long established...", date: "26 march 2022", image: null },
  { id: 2, title: "There are many variations...", date: "26 march 2022", image: null },
  { id: 3, title: "Contrary to popular belief...", date: "26 march 2022", image: null },
  { id: 4, title: "Finibus Bonorum et Malorum...", date: "26 march 2022", image: null },
];

export const SingleBlogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const { loading, setLoading, btnColor } = useContext(Data);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await GetSingleBlog(id);
        setBlog(res.data);
        // If your API returns related posts, set them here
        // setRelated(res.data.related || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, [setLoading]);

  if (loading) return <Loader />;

  const formattedDate = blog?.created_at
    ? new Date(blog.created_at).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : "";

  return (
    <section className="pt-20 pb-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6">

        {/* Date */}
        <p className="text-center text-sm text-gray-400 mb-3 tracking-wide">
          {formattedDate}
        </p>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold herotext_color leading-snug mb-3">
          {blog?.title}
        </h1>

        {/* Subtitle / Excerpt */}
        {blog?.excerpt && (
          <p className="text-center text-sm text-gray-400 mb-5">
            {blog.excerpt}
          </p>
        )}

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-5">
          {(blog?.tags || tags).map((tag) => (
            <span
              key={tag}
              className="hover:text-gray-800 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        {blog?.image && (
          <div className="rounded-2xl overflow-hidden mb-8 bg-gray-50">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[280px] object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div
          className="text-sm text-gray-600 leading-7 mb-8 text-justify"
          dangerouslySetInnerHTML={{ __html: blog?.body }}
        />

        {/* Blockquote */}
        {blog?.quote && (
          <blockquote className="my-8">
            <p className="text-base italic text-gray-800 font-medium leading-relaxed mb-2">
              {blog.quote}
            </p>
            <footer className="text-sm text-gray-400">
              — <cite className="not-italic">{blog.quote_author || "Someone famous"}</cite>{" "}
              {blog.quote_source && (
                <span>
                  in <span className="italic">{blog.quote_source}</span>
                </span>
              )}
            </footer>
          </blockquote>
        )}

        {/* Post-quote body */}
        {blog?.body_after_quote && (
          <div
            className="text-sm text-gray-600 leading-7 mb-10"
            dangerouslySetInnerHTML={{ __html: blog.body_after_quote }}
          />
        )}

        {/* Latest Blog Posts */}
        <div className="mt-12 border-t border-gray-100 pt-10">
          <h2 className="text-3xl font-medium herotext_color mb-1">Latest Blog Posts</h2>
          <p className="text-xs text-gray-400 mb-5">26 march 2022</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(related.length ? related : relatedPosts).map((post) => (
              <div key={post.id} className="cursor-pointer group">
                <div className="rounded-xl overflow-hidden bg-gray-100 mb-2 h-[80px]">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-snug group-hover:text-gray-900 transition-colors">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Author Footer */}
        {blog?.author_name && (
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-xs font-semibold text-gray-500">
                {blog.author_avatar ? (
                  <img src={blog.author_avatar} alt={blog.author_name} className="w-full h-full object-cover" />
                ) : (
                  blog.author_name?.charAt(0).toUpperCase()
                )}
              </div>
              <div>
                <p className="text-sm font-semibold herotext_color leading-none mb-0.5">
                  {blog.author_name}
                </p>
                <p className="text-xs text-gray-400">{blog.author_role || "Author"}</p>
              </div>
            </div>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                backgroundColor: hovered ? btnColor : "transparent",
                color: hovered ? "white" : btnColor,
                border: `1px solid ${btnColor}`,
              }}
              className="text-sm px-6 py-2 rounded transition-colors cursor-pointer"
            >
              Blogs
            </button>

          </div>
        )}

      </div>
    </section>
  );
};