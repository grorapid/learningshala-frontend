//About Section Interfaces
export interface CourseAttributes{
    heading: string;
    subHeading: string;
    icon: object;
  }
  export interface AboutCourse {
    id: number;
    heading: string,
    long_description: string;
    course_highlights: CourseAttributes[]
    short_description: string;
    views: number
  }
  
  //Skills Section Interfaces


  //What will you learn Interface
  export interface ListContent {
    id: number;
    learning_text: string;
  }

  export interface BannerData{
    bannerImage:{data:{attributes:{url:string}}}
    logo:{data:{attributes:{url:string,alternativeText:string}}}
    name:string,
    rating:number,
    rankTitle:string,
    reviewsCount:number,
  }
  export interface AboutData{
    name:string,
    updatedAt:string
    aboutUniversity:string,
    approvers:{data:[{id:number,attributes:{url:string}}]},
  }

  export interface Placementdata{
    placementStats:{stats:[{id:number,key:string,value:string}],No_of_recruiters:string,
    Student_placed:string,
    Promotion_recieved:string,
    placement_partners:{data:[{id:number,attributes:{url:string,alternativeText:string}}]},
    placement_richtext:string},
    
   
  }

  export interface ExploreByDegreedata{
    sk_courses:{data:[{attributes:{slug:string,approvals:string,university:{data:{attributes:{logo:{data:{attributes:{url:string}}},name:string}}},sk_course_program:{data:{attributes:{name:string}}},sk_course_type:{data:{attributes:{sk_course_program:{data:{attributes:{name:string}}},description:string,sk_course_specializations:{data:[{attributes:{description:string}}]}}}},sk_university_fee:{data:{attributes:{fees:string}}},rating:number,reviews:string,duration:string,name:string,learners_enrolled:string}}]}
  }
  export interface Examinationdata{
    examinationPattern:[{coursePatternLinks:[{key:string,value:string}]}]
    name:string
  }
  export interface Newsdata{
    data:[{attributes:{title:string,shortDescription:string,slug:string,updatedAt:string,content:string,author:string,toparticle:boolean,image:{data:{attributes:{url:string,alternativeText:string}}}}}]
    title:string,
    updatedAt:string,
    image:{data:{attributes:{url:string,alternativeText:string}}}
    author:string,
    content:string,
    shortDescription:string
  }

  export interface PopularArticlesdata{
    name:string,
    toparticles:[{title:string,content:string,likes:number,readtime:number,publishdate:string,toparticleimage:{data:{attributes:{url:string}}}}]
  }

  export interface Admissiondata{
    admissionProcess:{
    title:string,
    description:string,
    admission_steps:[{title:string,description:string}]
    }
  }

  export interface FinancialAiddata{
    financialAid:{scholarshiptext:string,loanpartner:string,scolarship:[{scholarship_name:string,deadline:string}],loanpartnerslogo:{data:[{attributes:{url:string,alternativeText:string}}]}}
  }

  export interface SampleDegreeData{
    name: string;
    sampleCertificate:{data:{attributes:{url:string,alternativeText:string}}}
  }
  export interface Popularprogramdata{
    logo:{data:{attributes:{url:string}}}
    sk_course_program:{data:[{attributes:{sk_courses:{data:[{attributes:{slug:string,name:string,learners_enrolled:string,duration:string}}]},name:string}}]}
  }

  export interface Checkbox{
  
    attributes:{university:{data:{attributes:{logo:{data:{attributes:{url:string}}}}}},sk_course_program:{data:{attributes:{name:string}}},sk_course_type:{data:{attributes:{sk_course_program:{data:{attributes:{name:string}}},description:string,sk_course_specializations:{data:[{attributes:{description:string}}]}}}},sk_university_fee:{data:{attributes:{fees:string}}},rating:number,reviews:string,duration:string,name:string,learners_enrolled:string}
  }
  export interface Course{
    data:[{attributes:{slug:string,exam_accepted:string,admission_data:{No_of_courses:number},approvals:string,university:{data:{attributes:{logo:{data:{attributes:{url:string}}},name:string}}},sk_course_program:{data:{attributes:{name:string}}},sk_course_type:{data:{attributes:{name:string,sk_course_program:{data:{attributes:{name:string}}},description:string,sk_course_specializations:{data:[{attributes:{description:string}}]}}}},sk_university_fee:{data:{attributes:{fees:string}}},rating:number,reviews:string,duration:string,name:string,learners_enrolled:string}}]
  }

  export interface Result{
   
   data:[{attributes:{logo:{data:{attributes:{url:string}}},name:string}}]

  }
  export interface UniversityData{
    data:[{attributes:{bannerImage:{data:{attributes:{url:string}}}},logo:{data:{attributes:{url:string}}}, name:string,  rating:number, rankTitle:string,reviewsCount:number,slug:string}]
  }