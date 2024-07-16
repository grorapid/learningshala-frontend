"use client"
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Link from "next/link";
import { getBlog } from "@/app/utils/get-blog-by-slug";
interface Article {
  page?: any;
}
const TopArticles = ({ page }: Article) => {
  const [topArticles, setTopArticles] = useState<any>(page || {});
  const getTopArticleData = async () => {
    const res = await getBlog();
    setTopArticles(res || {});
  };
  useEffect(() => {
    if (!page) {
      getTopArticleData();
    } else {
      setTopArticles(page);
    }
  }, [page]);

  if (!page?.length) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Typography variant="h4" className="font-semibold text-brand-text-title">
        Top Articles
      </Typography>
      <div className="flex flex-col space-y-4 my-6">
        {topArticles
          ?.filter((item: any) => item?.attributes?.toparticle == true)
          .slice(0, 7)
          ?.map((item: any, index: number) => (
            <div key={index}>
              <Link href={`/blogs/${item?.attributes?.slug}`}>
                <div
                  className="text-sm md:text-base text-brand-text-title hover:underline hover:text-brand-primary-blue-main font-medium"
                  key={index}
                >
                  {item?.attributes?.title}
                </div>
              </Link>
              <div className="h-[1px] my-3 w-full bg-gray-200"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopArticles;
