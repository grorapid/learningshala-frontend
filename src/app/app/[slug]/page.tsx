import { getPageBySlug } from "@/app/utils/get-page-by-slug";
import { sectionRenderer } from "../../utils/section-renderer";

export default async function RootRoute({ params }: any) {
  const page = await getPageBySlug(params.slug);

  if (page?.data?.length === 0) return <div>No data</div>;

  const contentSections = page?.data?.[0]?.attributes?.contentSections;

  return contentSections?.map((section: any, index: number) => {
    return sectionRenderer(section, index);
  });
}
