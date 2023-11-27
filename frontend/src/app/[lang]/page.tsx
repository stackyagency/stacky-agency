import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  let page;

  switch (params.lang) {
    case "fr":
      page = await getPageBySlug("accueil", params.lang);
      break;
    case "en":
      page = await getPageBySlug("home", params.lang);
      break;
    default:
      page = await getPageBySlug("accueil", params.lang);
      break;
  }

  if (page.data.length === 0) return null;

  const contentSections = page.data[0].attributes.contentSections;

  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
}
