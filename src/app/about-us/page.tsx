import { getPageBySlug } from "@/app/utils/get-page-by-slug";
import { sectionRenderer } from "../utils/section-renderer";

export default async function RootRoute() {
  const page = await getPageBySlug("about-us");

  if (!page || !page.data || page?.data?.length === 0) return <div>No data</div>;

  const contentSections = page?.data?.[0]?.attributes?.contentSections;

  return contentSections?.map((section: any, index: number) => {
    return sectionRenderer(section, index);
  });
}
