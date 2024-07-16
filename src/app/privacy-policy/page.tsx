"use client"
import Typography from "../common/atoms/Typography";
import RichTextEditor from "../common/components/RichTextEditor";
import { getPageBySlug } from "../utils/get-page-by-slug";




const Privacy= async () =>{
    
    
     const privacydata=await getPageBySlug("privacypolicy")
    
    return (
    <div className="flex flex-col container py-12 mx-auto justify-start items-start">
        <Typography variant="h3" component={"h3"} >
            {privacydata?.data[0]?.attributes?.heading}
        </Typography>
     <RichTextEditor className="mt-8" htmlContent={privacydata?.data[0]?.attributes?.contentSections[0].content}/>
    </div>
    ) 
}
export default Privacy