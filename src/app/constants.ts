import { Program, StatMetric, Activity, Department, User, TeamMember, ReviewItem } from './types';

// Mock Users for Authentication
export const USERS: User[] = [
  { id: '1', name: 'Administrator', email: 'admin@adminsxc.ac.id', role: 'admin', avatar: 'https://picsum.photos/id/100/100/100' },
  { id: '2', name: 'Finance Lead', email: 'head@financesxc.ac.id', role: 'finance', departmentId: 'finance', avatar: 'https://picsum.photos/id/101/100/100' },
  { id: '3', name: 'Ops Manager', email: 'lead@opssxc.ac.id', role: 'ops', departmentId: 'ops', avatar: 'https://picsum.photos/id/102/100/100' },
  { id: '4', name: 'Marketing Head', email: 'chief@marketingsxc.ac.id', role: 'marketing', departmentId: 'marketing', avatar: 'https://picsum.photos/id/103/100/100' },
  { id: '5', name: 'HR Director', email: 'director@hrsxc.ac.id', role: 'hr', departmentId: 'hr', avatar: 'https://picsum.photos/id/104/100/100' },
  { id: '6', name: 'CTO', email: 'cto@techsxc.ac.id', role: 'tech', departmentId: 'tech', avatar: 'https://picsum.photos/id/105/100/100' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Finance
  { id: 'f1', name: 'Alice Chen', role: 'Chief Financial Officer', departmentId: 'finance', email: 'alice.c@sxceos.com', image: 'https://picsum.photos/id/201/200/200' },
  { id: 'f2', name: 'Bob Smith', role: 'Finance Manager', departmentId: 'finance', email: 'bob.s@sxceos.com', image: 'https://picsum.photos/id/202/200/200' },
  { id: 'f3', name: 'Charlie Kim', role: 'Senior Analyst', departmentId: 'finance', email: 'charlie.k@sxceos.com', image: 'https://picsum.photos/id/203/200/200' },
  
  // Ops
  { id: 'o1', name: 'Diana Prince', role: 'Chief Operating Officer', departmentId: 'ops', email: 'diana.p@sxceos.com', image: 'https://picsum.photos/id/204/200/200' },
  { id: 'o2', name: 'Evan Wright', role: 'Operations Manager', departmentId: 'ops', email: 'evan.w@sxceos.com', image: 'https://picsum.photos/id/205/200/200' },
  { id: 'o3', name: 'Sarah Connor', role: 'Logistics Coordinator', departmentId: 'ops', email: 'sarah.c@sxceos.com', image: 'https://picsum.photos/id/215/200/200' },

  // Marketing
  { id: 'm1', name: 'Fiona Gallagher', role: 'Chief Marketing Officer', departmentId: 'marketing', email: 'fiona.g@sxceos.com', image: 'https://picsum.photos/id/206/200/200' },
  { id: 'm2', name: 'George Bluth', role: 'Brand Manager', departmentId: 'marketing', email: 'george.b@sxceos.com', image: 'https://picsum.photos/id/207/200/200' },
  { id: 'm3', name: 'Holly Flax', role: 'Social Media Lead', departmentId: 'marketing', email: 'holly.f@sxceos.com', image: 'https://picsum.photos/id/216/200/200' },

  // HR
  { id: 'h1', name: 'Helen Parr', role: 'Chief People Officer', departmentId: 'hr', email: 'helen.p@sxceos.com', image: 'https://picsum.photos/id/208/200/200' },
  { id: 'h2', name: 'Ian Malcolm', role: 'HR Manager', departmentId: 'hr', email: 'ian.m@sxceos.com', image: 'https://picsum.photos/id/209/200/200' },
  { id: 'h3', name: 'Jenna Rink', role: 'Talent Acquisition', departmentId: 'hr', email: 'jenna.r@sxceos.com', image: 'https://picsum.photos/id/217/200/200' },

  // Tech
  { id: 't1', name: 'Julia Roberts', role: 'Chief Technology Officer', departmentId: 'tech', email: 'julia.r@sxceos.com', image: 'https://picsum.photos/id/210/200/200' },
  { id: 't2', name: 'Kevin Flynn', role: 'Engineering Manager', departmentId: 'tech', email: 'kevin.f@sxceos.com', image: 'https://picsum.photos/id/211/200/200' },
  { id: 't3', name: 'Linus Torvalds', role: 'Lead Architect', departmentId: 'tech', email: 'linus.t@sxceos.com', image: 'https://picsum.photos/id/218/200/200' },
];

export const REVIEWS: ReviewItem[] = [
  // Finance
  { id: 'REC-1000', projectName: 'Q3 Financial Report', owner: 'Alice Chen', date: '12/28/2025', status: 'Completed', value: '$5,940.03', departmentId: 'finance' },
  { id: 'REC-1001', projectName: 'Sponsorship Invoices', owner: 'Bob Smith', date: '12/11/2025', status: 'Pending', value: '$56.44', departmentId: 'finance' },
  { id: 'REC-1011', projectName: 'Annual Budget Audit', owner: 'Alice Chen', date: '01/05/2026', status: 'In Review', value: '$12,450.00', departmentId: 'finance' },

  // HR
  { id: 'REC-1002', projectName: 'HR Policy Update', owner: 'Helen Parr', date: '12/29/2025', status: 'In Review', value: '$79.58', departmentId: 'hr' },
  { id: 'REC-1012', projectName: 'Recruitment Drive Q1', owner: 'Ian Malcolm', date: '01/10/2026', status: 'Draft', value: '$1,200.00', departmentId: 'hr' },
  { id: 'REC-1015', projectName: 'Employee Satisfaction Survey', owner: 'Helen Parr', date: '12/15/2025', status: 'Completed', value: '$0.00', departmentId: 'hr' },

  // Tech
  { id: 'REC-1003', projectName: 'Server Migration Log', owner: 'Julia Roberts', date: '01/13/2026', status: 'Draft', value: '$692.03', departmentId: 'tech' },
  { id: 'REC-1013', projectName: 'Security Patch v2.4', owner: 'Kevin Flynn', date: '01/02/2026', status: 'Completed', value: '$0.00', departmentId: 'tech' },
  { id: 'REC-1018', projectName: 'Database Optimization', owner: 'Linus Torvalds', date: '01/14/2026', status: 'Pending', value: '$450.00', departmentId: 'tech' },

  // Marketing
  { id: 'REC-1004', projectName: 'Marketing Campaign Q4', owner: 'Fiona Gallagher', date: '12/08/2025', status: 'Completed', value: '$2,516.03', departmentId: 'marketing' },
  { id: 'REC-1014', projectName: 'Social Media Ad Spend', owner: 'Holly Flax', date: '01/12/2026', status: 'Pending', value: '$840.00', departmentId: 'marketing' },
  { id: 'REC-1019', projectName: 'Brand Partnership Deck', owner: 'George Bluth', date: '01/08/2026', status: 'Draft', value: '$150.00', departmentId: 'marketing' },

  // Ops
  { id: 'REC-1005', projectName: 'Logistics Vendor Contract', owner: 'Diana Prince', date: '12/15/2025', status: 'In Review', value: '$3,200.00', departmentId: 'ops' },
  { id: 'REC-1016', projectName: 'Event Space Booking', owner: 'Evan Wright', date: '01/18/2026', status: 'Pending', value: '$1,500.00', departmentId: 'ops' },
  { id: 'REC-1017', projectName: 'Equipment Inventory', owner: 'Sarah Connor', date: '12/20/2025', status: 'Completed', value: '$0.00', departmentId: 'ops' },
];

export const METRICS: StatMetric[] = [
  { label: 'Total Students', value: '10,245', trend: '+12% vs last month', trendUp: true, icon: 'users' },
  { label: 'Active Programs', value: '8', trend: 'Stable', trendUp: true, icon: 'briefcase' },
  { label: 'Partner CEOs', value: '523', trend: '+5 new this week', trendUp: true, icon: 'award' },
  { label: 'Pending Reviews', value: '142', trend: '-15% vs last week', trendUp: false, icon: 'file-text' },
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'finance',
    name: 'Finance',
    email: 'finance@studentsxceos.com',
    description: 'Revenue, Expenses, Budgeting',
    color: 'text-emerald-400', 
    hoverColor: 'group-hover:text-emerald-300',
    icon: 'dollar-sign'
  },
  {
    id: 'ops',
    name: 'Operations',
    email: 'operations@studentsxceos.com',
    description: 'Project Mgmt, Efficiency, Logistics',
    color: 'text-blue-400',
    hoverColor: 'group-hover:text-blue-300',
    icon: 'briefcase'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    email: 'marketing@studentsxceos.com',
    description: 'Campaigns, Reach, Engagement',
    color: 'text-amber-400',
    hoverColor: 'group-hover:text-amber-300',
    icon: 'megaphone'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    email: 'hr@studentsxceos.com',
    description: 'Recruiting, Culture, Training',
    color: 'text-indigo-400',
    hoverColor: 'group-hover:text-indigo-300',
    icon: 'users'
  },
  {
    id: 'tech',
    name: 'Data & Tech',
    email: 'tech@studentsxceos.com',
    description: 'Analytics, Systems, Security',
    color: 'text-purple-400',
    hoverColor: 'group-hover:text-purple-300',
    icon: 'database'
  }
];

export const DEPARTMENT_DATA: Record<string, { metrics: StatMetric[], chartData: any[] }> = {
  finance: {
    metrics: [
      { label: 'Total Revenue', value: '$124,500', trend: '+12%', trendUp: true, icon: 'dollar-sign' },
      { label: 'Expenses', value: '$45,200', trend: '-5%', trendUp: false, icon: 'activity' },
      { label: 'Net Profit', value: '$79,300', trend: '+18%', trendUp: true, icon: 'trending-up' },
      { label: 'Pending Invoices', value: '23', trend: '-2', trendUp: false, icon: 'file-text' },
    ],
    chartData: [
      { name: 'Mon', value: 2000 },
      { name: 'Tue', value: 4000 },
      { name: 'Wed', value: 5800 },
      { name: 'Thu', value: 4200 },
      { name: 'Fri', value: 3800 },
      { name: 'Sat', value: 3600 },
      { name: 'Sun', value: 1000 },
    ]
  },
  ops: {
    metrics: [
      { label: 'Efficiency Rate', value: '94%', trend: '+2%', trendUp: true, icon: 'activity' },
      { label: 'Active Projects', value: '12', trend: '+3', trendUp: true, icon: 'briefcase' },
      { label: 'Team Load', value: '87%', trend: '+5%', trendUp: true, icon: 'users' },
      { label: 'Issues Resolved', value: '45', trend: '+12', trendUp: true, icon: 'check-circle' },
    ],
    chartData: [
      { name: 'Mon', value: 5500 },
      { name: 'Tue', value: 2000 },
      { name: 'Wed', value: 1500 },
      { name: 'Thu', value: 4800 },
      { name: 'Fri', value: 1500 },
      { name: 'Sat', value: 1300 },
      { name: 'Sun', value: 4600 },
    ]
  },
  marketing: {
    metrics: [
      { label: 'Total Reach', value: '45.2K', trend: '+24%', trendUp: true, icon: 'users' },
      { label: 'Engagement', value: '12.8%', trend: '+1.2%', trendUp: true, icon: 'activity' },
      { label: 'Leads', value: '342', trend: '+15%', trendUp: true, icon: 'trending-up' },
      { label: 'Ad Spend', value: '$4.2K', trend: '-8%', trendUp: false, icon: 'dollar-sign' },
    ],
    chartData: [
      { name: 'Mon', value: 1800 },
      { name: 'Tue', value: 2800 },
      { name: 'Wed', value: 3100 },
      { name: 'Thu', value: 1500 },
      { name: 'Fri', value: 1400 },
      { name: 'Sat', value: 2700 },
      { name: 'Sun', value: 3400 },
    ]
  },
  hr: {
    metrics: [
      { label: 'Total Employees', value: '145', trend: '+4', trendUp: true, icon: 'users' },
      { label: 'Open Roles', value: '8', trend: '-2', trendUp: false, icon: 'users' },
      { label: 'Satisfaction', value: '4.8/5', trend: '+0.2', trendUp: true, icon: 'activity' },
      { label: 'Training Hours', value: '320', trend: '+45', trendUp: true, icon: 'trending-up' },
    ],
    chartData: [
      { name: 'Mon', value: 3600 },
      { name: 'Tue', value: 5000 },
      { name: 'Wed', value: 5400 },
      { name: 'Thu', value: 2000 },
      { name: 'Fri', value: 1200 },
      { name: 'Sat', value: 4000 },
      { name: 'Sun', value: 3000 },
    ]
  },
  tech: {
    metrics: [
      { label: 'System Uptime', value: '99.99%', trend: '0%', trendUp: true, icon: 'activity' },
      { label: 'Active Users', value: '1,234', trend: '+12%', trendUp: true, icon: 'users' },
      { label: 'Bugs Reported', value: '12', trend: '-4', trendUp: false, icon: 'bug' },
      { label: 'Deployments', value: '56', trend: '+8', trendUp: true, icon: 'trending-up' },
    ],
    chartData: [
      { name: 'Mon', value: 2000 },
      { name: 'Tue', value: 2050 },
      { name: 'Wed', value: 3000 },
      { name: 'Thu', value: 5000 },
      { name: 'Fri', value: 3000 },
      { name: 'Sat', value: 5300 },
      { name: 'Sun', value: 4000 },
    ]
  }
};

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Jakarta Leadership Batch 14',
    batch: 'Batch 14',
    participants: 120,
    mentors: 15,
    status: 'Active',
    progress: 65,
    startDate: 'Feb 12, 2024',
    description: 'The flagship leadership accelerator for top-tier university students in Jakarta.'
  },
  {
    id: '2',
    title: 'Tech Development Bootcamp',
    batch: 'Batch 3',
    participants: 45,
    mentors: 8,
    status: 'Active',
    progress: 30,
    startDate: 'Mar 01, 2024',
    description: 'Intensive React & Node.js bootcamp for aspiring student CTOs.'
  },
  {
    id: '3',
    title: 'Summit 2024 Preparation',
    batch: 'Annual',
    participants: 200,
    mentors: 50,
    status: 'Upcoming',
    progress: 0,
    startDate: 'Aug 15, 2024',
    description: 'Planning and execution committee for the annual grand summit.'
  },
  {
    id: '4',
    title: 'Marketing Trainee Program',
    batch: 'Batch 9',
    participants: 80,
    mentors: 10,
    status: 'Completed',
    progress: 100,
    startDate: 'Jan 10, 2024',
    description: 'Hands-on marketing strategy workshops with FMCG leaders.'
  }
];

export const RECENT_ACTIVITY: Activity[] = [
  { id: '1', user: 'Sarah Jenkins', action: 'submitted', target: 'Final Case Study - Batch 14', time: '2 hours ago', avatar: 'https://picsum.photos/id/1011/100/100' },
  { id: '2', user: 'David Chen (CEO)', action: 'approved', target: 'Mentorship Request #402', time: '4 hours ago', avatar: 'https://picsum.photos/id/1005/100/100' },
  { id: '3', user: 'System', action: 'generated', target: 'Weekly Performance Report', time: '1 day ago', avatar: 'https://picsum.photos/id/1025/100/100' },
  { id: '4', user: 'Amanda Low', action: 'joined', target: 'Tech Development Bootcamp', time: '1 day ago', avatar: 'https://picsum.photos/id/1027/100/100' },
];

export const CHART_DATA = [
  { name: 'Mon', active: 400, submissions: 240 },
  { name: 'Tue', active: 300, submissions: 139 },
  { name: 'Wed', active: 200, submissions: 980 },
  { name: 'Thu', active: 278, submissions: 390 },
  { name: 'Fri', active: 189, submissions: 480 },
  { name: 'Sat', active: 239, submissions: 380 },
  { name: 'Sun', active: 349, submissions: 430 },
];