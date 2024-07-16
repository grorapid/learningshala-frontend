import { fetchAPI } from "@/app/utils/fetch-api";

export async function getCourseBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      $or: [
        {
          sk_course_specification: {
            name: {
              $eq: slug,
            },
          },
        },
        {
          slug: {
            $eq: slug,
          },
        },
      ],
    },

    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getProgram() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
export async function getCourses(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      university: {
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

export async function getCourse() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      isTopCourse: true,
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getTopCourse() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      topCourseRank: {
        $between: [1, 5],
      },
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
export async function getCourseByName(name: string, coll: string, any: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      $and: [
        {
          $or: [
            {
              name: {
                $containsi: name,
              },
            },
            {
              shortform: {
                $containsi: name,
              },
            },
          ],
          university: {
            $or: [
              {
                name: {
                  $containsi: coll,
                },
              },
              {
                name: {
                  $containsi: any,
                },
              },
            ],
          },
        },
      ],
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getCourseForCompare(
  val1: string,
  val2: string,
  val3: string
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      slug: {
        $in: [val1, val2, val3],
      },
    },
    populate: {
      shortform:{
        populate:"*"
      },
      university:{
        populate:{
          sampleCertificate:{
            populate:"*"
          },
          placementStats:{
            populate:{
              placement_partners:{
                populate:"*"
              }
            }
          },
          logo:{
            populate:'*'
          }
          
        }
      },
      sk_university_fee:{
        populate:"*"
      },
      duration:{
        populate:"*"
      },
      credit_points:{
        populate:"*"
      },
      exam_pattern:{
        populate:"*"
      },
      education_mode:{
        populate:"*"
      },
      approvals:{
        populate:"*"
      },
      eligibility:{
        populate:"*"
      },
      industry_ready:{
        populate:"*"
      },
      online_class:{
        populate:"*"
      },
      placement_assistance:{
        populate:"*"
      },
      pros:{
        populate:"*"
      },
      nirf_ranking:{
        populate:'*'
      },
      wes_approval:{
        populate:'*'
      },
      emi_facility:{
        populate:"*"
      },
      sk_university_articles:{
        populate:"*"
      },
      sk_course_type:{
        populate:"*"
      },
      durationUnit:{
        populate:"*"
      }



    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getCourseForNotCompare(
  val1: string,
  val2: string,
  val3: string
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      slug: {
        $notIn: [val1, val2, val3],
      },
    },
    populate: {
      name: {
        populate: "*",
      },
      rating: {
        populate: "*",
      },
      sk_course_program: {
        populate: {
          name: {
            populate: "*",
          },
        },
      },
      sk_university_fee:{
        populate:"*"
      },
      university: {
        populate: {
          name: {
            populate: "*",
          },
          logo: {
            populate: "*",
          },
        },
      },
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getCoursebytype() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-course-types`;
  const urlParamsObject = {
    populate: {
      name: {
        populate: "*",
      },
    },
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
export async function getCoursebySpecialization(value: string[]) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      sk_course_specification: {
        $or:value.map((item: any) => (
          {
            name: {
              $eq: item,
            }
          }
        ))
      },
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getCourseByFilter(val1:string[], val: number) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;

  const urlParamsObject = {
    filters: {
      $and: [
        {
          sk_course_type: {
            $or: val1.map((item: any) => (
              {
                name: {
                  $eq: item,
                }
              }
            ))
          },
        },
        {
          university: {
            $or: val1.map((item: any) => (
              {
                name: {
                  $eq: item,
                }
              }
            ))
          },
        },
      ] // Apply the filter function here
    },
    pagination: {
      page: val,
      pageSize: 10,
    },
    encodeValuesOnly: true,

    populate: {
      name: {
        populate: "*",
      },
      rating: {
        populate: "*",
      },
      sk_course_type: {
        populate: {
          name: {
            populate: "*",
          },
        },
      },
      university: {
        populate: {
          name: {
            populate: "*",
          },
          logo: {
            populate: "*",
          },
        },
      },
    },
    locale: "en",
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getOtherCourse(val1: string, val2: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      $and: [
        {
          sk_course_type: {
            slug: {
              $ne: val1,
            },
          },
        },
        {
          university: {
            slug: {
              $eq: val2,
            },
          },
        },
      ],
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getprogrambyotheruniversity(val1: string, val2: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      $and: [
        {
          sk_course_type: {
            slug: {
              $eq: val1,
            },
          },
        },
        {
          university: {
            slug: {
              $ne: val2,
            },
          },
        },
        {
          isTopCourse:{
            $eq:true
          }
        }
      ],
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getprograms(val1: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      sk_course_type: {
        name: {
          $eq: val1,
        },
      },
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function gettopprograms(course: string, university: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    filters: {
      $and: [
        {
          university: {
            slug: {
              $eq: university,
            },
          },
        },
        {
          slug: {
            $ne: course,
          },
        },
      ],
    },
    pagination: {
      start: 0,
      limit: 10,
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
