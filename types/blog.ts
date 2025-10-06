import { Asset, Entry, EntrySkeletonType } from 'contentful';

// Blog Post
export interface BlogPostFields {
  title: string;
  shortTitle: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author?: string;
  featuredImage?: Asset;
  tags?: string[];
  category?: string;
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}

export type BlogPost = Entry<BlogPostSkeleton>;
