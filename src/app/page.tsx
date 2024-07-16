
import { getPageBySlug } from "@/app/utils/get-page-by-slug";
import { sectionRenderer } from "./utils/section-renderer";

import RootLoading from "./loading";

/**
 * takes slug from staic page section
 * @returns Home Page
 */

export default async  function RootRoute(){
  
   const page= await getPageBySlug("home");
  

  if (page===null) return <div>No Data</div>;
  const contentSections = page?.data?.[0]?.attributes?.contentSections;
  return contentSections?.map((section: any, index: number) => {
    return sectionRenderer(section, index);
  });
}
