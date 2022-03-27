import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export interface LinkGroupData {
  title: string
  links: Array<{
    label: string
    href: string
    badge?: React.ReactElement
  }>
}

export const links: LinkGroupData[] = [
  {
    title: 'Product',
    links: [
      { label: 'WINHUB POS – Billing Application', href: '/winhub-pos-billing-application' },
      { label: 'Gym / Fitness Club Management', href: '/gym-fitness-club-management' },
      {
        label: 'restaurant point of sale web application',
        href: '/winhub-pos-restaurant-point-of-sale-web-application',
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      { label: 'School Management System', href: '/school-management-system' },
      { label: 'Examples', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Node.js Development', href: '/node-js-development-company' },
      { label: 'React JS Development', href: '/react-js-development-company' },
      { label: 'Gatsby Development', href: '/gatsby-development-company-winhub-solutions' },
      { label: 'WordPress Development Services', href: '/wordpress-development-services' },
      { label: 'E-Commerce  Development ', href: '/e-commerce-website-development-company' },
      { label: 'UX/UI Design and Development Services', href: '/ux-ui-design-and-development-services' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Terms And Conditions', href: '/terms-and-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
 
]

interface SocialLink {
  label: string
  icon: React.ReactElement
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: <FaFacebook />, href: '#' },
  { label: 'Instagram', icon: <FaInstagram />, href: '#' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: '#' },
  { label: 'LinkedIn', icon: <FaTwitter />, href: '#' },
]

interface FooterLink {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Offer terms', href: '#' },
  { label: 'Legal notice', href: '#' },
  { label: 'Sitemap', href: '#' },
]
