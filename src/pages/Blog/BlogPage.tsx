import Blog from "../../components/Blog/Blogs"
import Subscribe from "../../components/Blog/Subscribe"


export default function BlogPage() {
  return (
    <div className="w-full min-h-screen px-6 py-10 md:lg:px-32 bg-[#212828] font-kanit">
      <Blog />
      <Subscribe />
    </div>
  )
}
