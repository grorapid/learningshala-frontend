import { fetchAPI } from "@/app/utils/fetch-api";

export async function getUniversityBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/universities`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      sk_university_articles: {
        populate: "*",
      },
      latest_updates:{
        populate:"*"
      },
      sk_course_types: {
        populate: "*",
      },
      sk_courses: {
        populate: "*",
      },
      admission_data: {
        populate: "*",
      },
      financialAid: {
        populate:{
          scholarship_banner: { populate :"*"},
          loanpartnerslogo: "*",
        }
      },
      other_universities: {
        populate: "*",
      },
      sk_university_testimonials: {
        populate: {
          cards: {
            populate: "*",
          },
        },
      },
      contentSections: {
        populate: {
          table: "*",
          university_faq:"*"
        },
      },
      navigation: {
        populate: "*",
      },
      placementStats: {
        populate: "*",
      },
      admissionProcess: {
        populate: "*",
      },
      approvers: {
        populate: "*",
      },
      sk_course_programs: {
        populate: "*",
      },
      sampleCertificate: {
        populate: "*",
      },
      expert: {
        populate: {
          expert: {
            populate: "*",
          },
        },
      },
      Categories: {
        populate: {
          Card: {
            populate: "*",
          },
        },
      },
      examinationPattern: {
        populate: "*",
      },
      bannerImage: {
        populate: "*",
      },
      logo: {
        populate: "*",
      },
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getUniversity() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/universities`;
  const urlParamsObject = {
    populate: {
      name:{
        populate:"*"
      }
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function gettopcollege() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/top-colleges`;
  const urlParamsObject = {
    populate:{
      universities:{
        populate:{
          name:"*",
          card_banner:"*",
          logo:"*"
        }
      }
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getUniversityByName(
  name: string,
  coll: string,
  any: string
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/universities`;
  const urlParamsObject = {
    filters: {
      name: {
        $containsi: name,
      },
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getUniversityByTop() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/universities`;
  const urlParamsObject = {
    filters: {
      topuniversity: true,
    },
    pagination: {
      start: 0,
      limit: 10,
    },
   populate:{
    logo:{
      populate:"*"
    },
    card_banner:{
      populate:"*"
    }
   },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
