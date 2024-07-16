"use client"
import React from 'react';
import Form from '../common/sections/SelectforCompare/Form';
import { useSearchParams } from 'next/navigation';

const Lead = () => {
  const searchParams = useSearchParams()
  const source = searchParams?.get('source') ?? ''
  return (
    <div>
      <Form popup={false} source={source}/>
    </div>
  )
}

export default Lead

