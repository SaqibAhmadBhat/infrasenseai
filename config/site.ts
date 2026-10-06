import { companyData } from "@/content/company";

export const siteConfig = {
  name: companyData.name,
  description: companyData.description,
  url: companyData.contact.website,
  ogImage: "https://infrasenseai.online/og.jpg",
  links: {
    twitter: "https://twitter.com/infrasenseai", // placeholders
    github: "https://github.com/infrasenseai",
  },
};
