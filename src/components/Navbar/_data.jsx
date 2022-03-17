import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export const links = [
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Node.js Development Company',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '/node-js-development-company',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'React JS Development Company',
        description: 'Discover and join your local Sketch community.',
        href: '/react-js-development-company',
        icon: <IoCalendar />,
      },
      {
        label: 'Gatsby Development Company',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '/gatsby-development-company',
        icon: <IoGrid />,
      },
      {
        label: 'Web Development Company',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
      {
        label: 'Gatsby Development Company',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '/gatsby-development-company',
        icon: <IoGrid />,
      },
      {
        label: 'Web Development Company',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
]
