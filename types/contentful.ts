import { Asset, Entry, EntrySkeletonType } from 'contentful';

// Therapist Profile
export interface TherapistProfileFields {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  profilePhoto: Asset;
  email?: string;
  phone?: string;
}

export interface TherapistProfileSkeleton extends EntrySkeletonType {
  contentTypeId: 'therapistProfile';
  fields: TherapistProfileFields;
}

export type TherapistProfile = Entry<TherapistProfileSkeleton>;

// Service
export interface ServiceFields {
  name: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  duration?: string;
  price?: string;
  icon?: Asset;
  order?: number;
}

export interface ServiceSkeleton extends EntrySkeletonType {
  contentTypeId: 'service';
  fields: ServiceFields;
}

export type Service = Entry<ServiceSkeleton>;

// Page
export interface PageFields {
  title: string;
  slug: string;
  content: string;
  metaDescription?: string;
  metaKeywords?: string[];
  heroImage?: Asset;
}

export interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: 'page';
  fields: PageFields;
}

export type Page = Entry<PageSkeleton>;

// Site Settings
export interface SiteSettingsFields {
  siteName: string;
  tagline?: string;
  logo?: Asset;
  primaryColor?: string;
  secondaryColor?: string;
  googleCalendarLink?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  schedulingMessage?: string;
}

export interface SiteSettingsSkeleton extends EntrySkeletonType {
  contentTypeId: 'siteSettings';
  fields: SiteSettingsFields;
}

export type SiteSettings = Entry<SiteSettingsSkeleton>;
