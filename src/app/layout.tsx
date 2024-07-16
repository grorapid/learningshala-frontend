import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./common/molecules/navbar";
import Footer from "./common/molecules/footer";
import { Nunito_Sans } from "next/font/google";
import { fetchAPI } from "./utils/fetch-api";
import { getStrapiURL } from "./utils/api-helpers";
import MobileFooter from "./common/components/MobileFooter";
import SearchPage from "./common/components/Searchpage";
import LeadFormModal from "./common/components/LeadFormModal";
import GoogleAnalytics from "./GoogleAnalytics";

const nunitosans = Nunito_Sans({
  variable: "--font-nunito",
  preload: false,
  display: "swap",
});

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: "deep",
    locale: "en",
  };
  return await fetchAPI(path, urlParamsObject, options);
}

const FALLBACK_SEO = {
  title: "Strapi Starter Next Blog",
  description: "Strapi Starter Next Blog",
};


export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);
  if (!meta?.data) return FALLBACK_SEO;
  const { metaData, favicon } = meta?.data?.attributes;
  const { url } = favicon?.data?.attributes;
  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [global= {data: []}] = await Promise.all([getGlobal("en")]);
  return (
    <html className={`${nunitosans.variable}`} lang="en">
      <body className="bg-white">
        <Navbar
          globalData={global?.data?.attributes}
        />
        <main className="pt-20">{children}</main>
        <Footer globalData={global?.data?.attributes} />
        <MobileFooter />
        <SearchPage globalData={global?.data?.attributes} />
        <LeadFormModal />
        {/* {process.env.GA_TRACKING_ID ? <GoogleAnalytics /> : null} */}
      </body>
    </html>
  );
}
