"use client"
import { getStrapiURL } from "@/app/utils/api-helpers";
import React, { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";

const RichTextEditor = ({ htmlContent, className }: any) => {
  const [isClient, setIsClient] = useState(false);
  const customConfig = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "iframe",
      "video",
    ]), // Allow 'img' and 'iframe' tags
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      video: ["src", "alt", "style", "height", "width", "class"],
      img: ["src", "alt", "style", "height", "width", "class", "srcset"], // Allow 'src' and 'alt' attributes for 'img' tags
      iframe: ["src", "width", "height", "frameborder"], // Customize 'iframe' attributes as needed
    },
  };
  const [sanitizedHtmlUsed, setSanitizedHtml] = useState("");
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    const sanitized = sanitizeHtml(htmlContent, customConfig);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sanitized;
    const images = tempDiv.querySelectorAll('img[src^="/uploads"]');
    console.log(tempDiv, images);
    const baseUrl = getStrapiURL();
    images.forEach((image) => {
      const relativeUrl = image.getAttribute("src");
      const absoluteUrl = `${baseUrl}${relativeUrl}`;
      image.setAttribute("src", absoluteUrl);
    });
    setSanitizedHtml(tempDiv.innerHTML);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div suppressHydrationWarning={!isClient}> 
    <div
      className={`${className} custom-content`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtmlUsed }}
    >
    </div>
    </div>
  );
};

export default RichTextEditor;
