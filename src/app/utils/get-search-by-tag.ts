import { fetchAPI } from "@/app/utils/fetch-api";

export async function getSearchByTag(tag: string[]) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/tags`;
  const urlParamsObject = {
    filters: {
      $or: tag.map((item:any)=>(
        
          {tagName: {
            $containsi: item,
          },
        }
        
      ))
    },
    populate:{
      universities:{
        populate:{
          name:{
            populate:"*"
          }
        }
      },
      sk_courses:{
        populate:{
          name:{
            populate:"*"
          }
        }
      }
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getAdmisssion(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/admissions`;
  const urlParamsObject = {
    filters: {
      university:{
        slug:slug
      }
    },
    populate:{
      faq_admission:{
        populate:'*'
      },
      banner:{
        populate:'*'
      },
      university:{
        populate:{
          logo:{
            populate:'*'
          },
          bannerImage:{
            populate:"*"
          },
          sk_courses:{
       populate:{
        admission_data:{
          populate:"*"
        },
        sk_course_type:{
          populate:"*"
        }

       }
          },
          sk_university_articles:{
              populate:'*'
          },
          sk_course_types:{
            populate:{
              sk_university_fee:{
                populate:'*'
              },
              admission_data:{
                populate:"*"
              }

            }
          }
        }
      }
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getProgramBySlug(slug: string,university:string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
        sk_course_type:{
          slug:{
            $eq:slug
          }
        },
        university:{
          slug:{
            $eq:university
          }
        }
    },
    populate: {
      bg_img:{
        populate:"*"
      },
      college_logo:{
        populate:"*"
      },
      sk_university_fee:{
        populate:"*"
      },
      admission_data:{
        populate:"*"
      },
      sk_course_program:{
        populate:"*"
      },
      sk_course_type:{
        
    populate:{
      sk_university_articles:{
        populate:"*"
      }
    }
      },
    
      sk_course_specification:{
        populate:"*"
      },
      sk_university_articles:{
       
        populate:"*"
       
      },
      university:{
        populate:"*"
      }
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
export async function getProgramByUniv(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-course-types`;
  const urlParamsObject = {
    filters: {
      universitiy: {
        slug: {
          $eq: slug,
        },
      },
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
