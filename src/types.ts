import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  editPost?: {
    url?: URL["href"];
    text?: string;
    appendFilePath?: boolean;
  };
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type Language = {
  Home:string;
  SocialLinks: string;
  Updated: string;
  Featured: string;
  RecentPosts: string;
  AllPosts: string;
  AllRightsReserved: string;
  Copyright:string;
  Posts: string;
  Post: string;
  Tags: string;
  Tag:string;
  About: string;
  Archives: string;
  Search: string;
  Toggle: string;
  Back:string;
  NotFoundTitle:string;
  NotFoundMessage:string;
  BackHome:string;

  ArchivesPageTitle: string;
  ArchivesPageDescription: string;

  PostsPageTitle: string;
  PostsPageDescription: string;

  TagsPageTitle: string;
  TagsPageDescription: string;
  TagPageDescription:string;

  SearchPageTitle: string;
  SearchPageDescription: string;
  SearchAnything:string;


  BackToTop: string;
  SharePost:string;

  PreviousPost:string;
  NextPost:string;

};
