import BlogCard from "@/app/common/components/BlogCard";
import { getBlogBySlug } from "@/app/utils/get-blog-by-slug";

const BlogPage = async ({ params }: any) => {
  const { blog } = params;
  const blogData = await getBlogBySlug(blog);
  if (blogData?.data?.length === 0) return <div>Loading ...</div>;
  return (
      <div className="grid grid-cols-1 gap-5 md:col-span-2 col-span-3">
          <BlogCard data={blogData?.data[0].attributes} />
      </div>
  );
};
export default BlogPage;
