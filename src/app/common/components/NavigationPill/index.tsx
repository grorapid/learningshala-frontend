"use client"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import JobRoleGraph from '../JobRoleStats/Graph'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationPill() {
  let [categories] = useState({
    "Product Manager": [
      {"graph": <JobRoleGraph />, id:1}
    ],
    "Head HR": [
      {"graph": <JobRoleGraph />, id:2}
    ],
    "Chief of Staff": [
      {"graph": <JobRoleGraph />, id:3}
    ],
  })

  return (
    <div className="w-full max-w-lg px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-full bg-brand-background-blue p-1">
          {Object.keys(categories)?.map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-3 leading-5 ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                  selected
                    ? 'text-white font-bold  bg-brand-primary-blue-main rounded-full hover:bg-brand-primary-blue-hover'
                    : 'text-brand-accent-black-secondary rounded-full hover:bg-brand-primary-blue-main hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories)?.map((posts, idx) => (
            <Tab.Panel
              key={idx}
            >
              <ul>
                {posts?.map((post, index) => (
                  <li key={index}>{post.graph}</li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
