export type ProgramStatus = 'Active' | 'Upcoming' | 'Completed';
export type UserRole = 'admin' | 'finance' | 'ops' | 'marketing' | 'hr' | 'tech';
export type ReviewStatus = 'Completed' | 'Pending' | 'In Review' | 'Draft';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  departmentId?: string; // If null, assume admin/global
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  image: string;
  email: string;
}

export interface Program {
  id: string;
  title: string;
  batch: string;
  participants: number;
  mentors: number;
  status: ProgramStatus;
  progress: number;
  startDate: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  projectName: string;
  owner: string;
  date: string;
  status: ReviewStatus;
  value: string;
  departmentId: string;
}

export interface StatMetric {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface Department {
  id: string;
  name: string;
  email: string;
  description: string;
  color: string;
  hoverColor: string;
  icon: string;
}

export enum View {
  DASHBOARD = 'DASHBOARD',
  DATA_REVIEW = 'DATA_REVIEW',
  PROGRAMS = 'PROGRAMS',
  MEMBERS = 'MEMBERS',
  SETTINGS = 'SETTINGS'
}

export type Theme = 'dark' | 'light';