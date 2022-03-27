import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export const links = [
  {
    label: 'About Us',
    href: '/about',
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
        href: 'gatsby-development-company-winhub-solutions/',
        icon: <IoGrid />,
      },
      {
        label: 'WordPress Development Services',
        description: 'Get updates, articles and insights from the team.',
        href: '/wordpress-development-services/',
        icon: <MdWeb />,
      },
      {
        label: 'E-Commerce Website Development',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '/e-commerce-website-development-company/',
        icon: <IoGrid />,
      },
      {
        label: 'UX/UI Design and Development Services',
        description: 'Get updates, articles and insights from the team.',
        href: '/ux-ui-design-and-development-services/',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Products',
    children: [
      {
        label: 'Gym / Fitness Club Management',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '/gym-fitness-club-management',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'WINHUB POS – Billing Application',
        description: 'Discover and join your local Sketch community.',
        href: '/winhub-pos-billing-application',
        icon: <IoCalendar />,
      },
      {
        label: 'Restaurant point of sale web application',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: 'winhub-pos-restaurant-point-of-sale-web-application',
        icon: <IoGrid />,
      },
      {
        label: 'School Management System',
        description: 'School Management System',
        href: '/school-management-system/',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]
