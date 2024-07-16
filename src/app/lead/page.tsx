import React, { Suspense } from 'react';
import Lead from './LeadForm';


function SearchBarFallback() {
  return <>placeholder</>
}
 
export default function LeadPage() {
  return (
    <>
          <Lead />
    </>
  )
}


