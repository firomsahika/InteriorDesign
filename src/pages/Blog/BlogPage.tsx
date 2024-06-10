import Blog from "../../components/Blog/Blogs"
import Subscribe from "../../components/Blog/Subscribe"


export default function BlogPage() {
  return (
    <div className="w-full min-h-screen py-10 px-32 bg-[#212828] font-kanit">
      <Blog />
      <Subscribe />
    </div>
  )
}
