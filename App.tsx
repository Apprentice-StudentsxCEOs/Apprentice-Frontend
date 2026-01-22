import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  Clock,
  FileText,
  Award,
  DollarSign,
  Megaphone,
  LogOut,
  Lock,
  Activity as ActivityIcon,
  CheckCircle,
  Bug,
  Hand,
  Crown,
  User as UserIcon,
  Moon,
  Sun,
  Shield,
  Mail,
  Database,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { View, Program, StatMetric, Department, User, TeamMember, Theme, UserRole, ReviewItem } from './types';
import { METRICS, PROGRAMS, RECENT_ACTIVITY, CHART_DATA, DEPARTMENTS, DEPARTMENT_DATA, USERS, TEAM_MEMBERS, REVIEWS } from './constants';

// --- Sub Components ---

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: any, 
  label: string, 
  isActive: boolean, 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition-all duration-200 group ${
      isActive 
        ? 'bg-brand-500/10 text-brand-500 border-r-2 border-brand-500' 
        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
    }`}
  >
    <Icon size={20} className={`mr-3 ${isActive ? 'text-brand-500' : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'}`} />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const StatCard = ({ metric, deptId }: { metric: StatMetric, deptId?: string }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return Users;
      case 'briefcase': return Briefcase;
      case 'award': return Award;
      case 'file-text': return FileText;
      case 'dollar-sign': return DollarSign;
      case 'activity': return ActivityIcon;
      case 'check-circle': return CheckCircle;
      case 'trending-up': return TrendingUp;
      case 'trending-down': return TrendingDown;
      case 'bug': return Bug;
      default: return Users;
    }
  };

  const Icon = getIcon(metric.icon);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-lg dark:shadow-black/20 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition-colors">
          <Icon className="text-blue-500 dark:text-blue-400" size={24} />
        </div>
        <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
          metric.trendUp 
            ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
            : 'bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
        }`}>
          {metric.trendUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
          {metric.trend}
        </div>
      </div>
      <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{metric.label}</h3>
      <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{metric.value}</p>
    </div>
  );
};

const ProgramCard = ({ program }: { program: Program }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20';
      case 'Upcoming': return 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
      case 'Completed': return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-600';
      default: return 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all cursor-pointer group flex flex-col h-full shadow-sm dark:shadow-none">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs px-2 py-1 rounded-md border font-medium ${getStatusColor(program.status)}`}>
          {program.status}
        </span>
        <span className="text-slate-500 dark:text-slate-500 text-xs">{program.startDate}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
        {program.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{program.description}</p>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>Batch</span>
          <span className="text-slate-900 dark:text-slate-200">{program.batch}</span>
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-600 dark:text-slate-400">Progress</span>
            <span className="text-brand-500 dark:text-brand-400 font-mono">{program.progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full" 
              style={{ width: `${program.progress}%` }} 
            />
          </div>
        </div>

        <div className="flex items-center pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-4">
          <div className="flex -space-x-2 mr-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs text-white">
                <img src={`https://picsum.photos/id/${i + 50}/100/100`} alt="User" className="w-full h-full rounded-full object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-600 dark:text-white">
              +{program.participants}
            </div>
          </div>
          <button className="ml-auto text-sm text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 flex items-center">
            Manage <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Login View ---

const LoginView = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Regex to match format: name@department.sxc.ac.id
    // Departments: finance, ops, marketing, hr, tech, admin
    const emailRegex = /^([^@]+)@(finance|ops|marketing|hr|tech|admin)\.sxc\.ac\.id$/i;
    const match = input.match(emailRegex);

    if (match && password.length > 0) {
      const namePart = match[1];
      const deptPart = match[2].toLowerCase();
      
      const role = deptPart as UserRole;
      const departmentId = role === 'admin' ? undefined : role;
      
      const newUser: User = {
          id: Date.now().toString(),
          name: namePart.charAt(0).toUpperCase() + namePart.slice(1), // Capitalize first letter
          email: input,
          role: role,
          departmentId: departmentId,
          avatar: `https://ui-avatars.com/api/?name=${namePart}&background=random&color=fff`
      };

      onLogin(newUser);
    } else {
      setError('Invalid format. Please use: name@department.sxc.ac.id');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
       {/* Left Side - Dark Vibe */}
       <div className="w-full md:w-1/2 bg-slate-900 flex flex-col justify-center items-center p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0"></div>
          <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="z-10 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
               <span className="text-4xl text-white font-bold">*</span>
            </div>
          </div>

          <h1 className="z-10 text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hello <br/>
            Students<span className="text-slate-400">X</span>Ceos! 
            <Hand className="inline-block ml-4 text-yellow-400 animate-pulse" size={48} />
          </h1>
          
          <p className="z-10 text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            Streamline your departmental reviews. Access finance, operations, marketing, and HR data in one centralized hub.
          </p>

          <div className="absolute bottom-8 text-slate-600 text-sm">
             &copy; 2026 StudentsXCeos. All rights reserved.
          </div>
       </div>

       {/* Right Side - White Login Form */}
       <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-12">
         <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-12">
               {/* Logo placeholder if needed */}
               <div></div> 
               <div className="text-slate-900 font-semibold flex items-center">
                  StudentsXCeos Internal
                  <div className="ml-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs">S</div>
               </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-2">Member Login</h2>
            <p className="text-slate-500 mb-8">Enter your departmental email to access the dashboard.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="name@department.sxc.ac.id" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {error && <p className="text-rose-500 text-sm">{error}</p>}

              <button 
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
              >
                Enter
              </button>
            </form>
            
            <div className="mt-8 text-center bg-slate-50 p-4 rounded-lg border border-slate-100">
               <p className="text-slate-500 text-xs font-semibold mb-2">VALID FORMATS</p>
               <div className="text-xs text-slate-400 grid grid-cols-1 gap-1 text-center font-mono">
                  <span>yourname@finance.sxc.ac.id</span>
                  <span>yourname@ops.sxc.ac.id</span>
                  <span>yourname@marketing.sxc.ac.id</span>
                  <span>yourname@admin.sxc.ac.id</span>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

// --- Dashboard Views ---

const DashboardView = ({ user }: { user: User }) => {
  let metrics = METRICS;
  let chartData = CHART_DATA;
  let title = 'Platform Overview';
  let subtitle = 'Aggregated performance metrics across all departments.';

  if (user.role !== 'admin' && user.departmentId) {
    const deptData = DEPARTMENT_DATA[user.departmentId];
    if (deptData) {
      metrics = deptData.metrics;
      chartData = deptData.chartData;
      const deptName = user.role.charAt(0).toUpperCase() + user.role.slice(1);
      title = `${deptName} Dashboard`;
      subtitle = `Weekly performance overview for ${deptName}`;
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
        <p className="text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Chart Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Performance Analytics</h3>
            <select className="bg-slate-100 dark:bg-slate-700 border-none text-slate-700 dark:text-slate-200 text-sm rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Quarter</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg)', border: '1px solid var(--tooltip-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--tooltip-text)' }}
                  cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataReviewView = ({ user }: { user: User }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // Filter Reviews based on User Role (Admin sees all, Dept sees Dept)
  const accessibleReviews = user.role === 'admin' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.departmentId === user.departmentId);

  // Apply visual filters (Search & Status)
  const filteredReviews = accessibleReviews.filter(review => {
    const matchesSearch = 
      review.projectName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      review.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.owner.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || review.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      case 'Pending': return 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'In Review': return 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400';
      default: return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
       {/* Header */}
       <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Data Review</h2>
        <p className="text-slate-500 dark:text-slate-400">
           {user.role === 'admin' ? 'Manage and track records across all departments.' : 'Track your departmental records and reports.'}
        </p>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search projects, IDs, or owners..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-400"
            />
         </div>
         <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative">
               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
               <select 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-9 pr-8 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer"
               >
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>In Review</option>
                  <option>Draft</option>
               </select>
            </div>
         </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/30 border-b border-slate-200 dark:border-slate-700">
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">ID</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Name</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Owner</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Value</th>
                     <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {filteredReviews.map((review) => (
                     <tr key={review.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">{review.id}</td>
                        <td className="p-4 text-sm font-semibold text-slate-900 dark:text-white">{review.projectName}</td>
                        <td className="p-4">
                           <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-200 mr-2">
                                 {review.owner.charAt(0)}
                              </div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">{review.owner}</span>
                           </div>
                        </td>
                        <td className="p-4 text-sm text-slate-500 dark:text-slate-400">{review.date}</td>
                        <td className="p-4">
                           <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(review.status)}`}>
                              {review.status}
                           </span>
                        </td>
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300 text-right">{review.value}</td>
                        <td className="p-4 text-center">
                           <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                              <MoreHorizontal size={18} />
                           </button>
                        </td>
                     </tr>
                  ))}
                  {filteredReviews.length === 0 && (
                     <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-500 dark:text-slate-400">
                           No records found matching your criteria.
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

const ActiveMembersView = ({ user }: { user: User }) => {
  // Logic:
  // If Admin: Show ALL members with Departments clearly visible
  // If Dept User: Show ONLY members of their department
  
  const allMembers = user.role === 'admin' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(m => m.departmentId === user.departmentId);

  const chiefs = allMembers.filter(m => m.role.startsWith('Chief'));
  const team = allMembers.filter(m => !m.role.startsWith('Chief'));

  const deptName = user.departmentId ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Global';

  const MemberCard = ({ member, isChief }: { member: TeamMember, isChief: boolean }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 border ${isChief ? 'border-amber-200 dark:border-amber-500/30' : 'border-slate-200 dark:border-slate-700/50'} hover:border-blue-500/50 transition-all flex items-center space-x-4 group relative overflow-hidden shadow-sm dark:shadow-none`}>
      {isChief && (
        <div className="absolute top-0 right-0 p-2 opacity-30 dark:opacity-50">
          <Crown size={60} className="text-amber-500/10 -rotate-12" />
        </div>
      )}
      {/* Admin View: Show Department Badge */}
      {user.role === 'admin' && (
        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
          ${member.departmentId === 'finance' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' :
            member.departmentId === 'ops' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
            member.departmentId === 'marketing' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300' :
            member.departmentId === 'hr' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' :
            'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
          }
        `}>
          {member.departmentId}
        </div>
      )}

      <div className="relative z-10">
        <img src={member.image} alt={member.name} className={`w-16 h-16 rounded-full object-cover border-2 ${isChief ? 'border-amber-400' : 'border-slate-200 dark:border-slate-700'} group-hover:border-blue-500 transition-colors`} />
        {user.role !== 'admin' && (
            <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 ${member.departmentId === 'finance' ? 'bg-emerald-500' : member.departmentId === 'ops' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
        )}
      </div>
      <div className="z-10">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg flex items-center">
          {member.name}
          {isChief && <Crown size={14} className="ml-2 text-amber-500 fill-amber-500" />}
        </h3>
        <p className={`${isChief ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'} text-sm font-medium`}>{member.role}</p>
        <p className="text-slate-500 text-xs mt-1">{member.email}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Active Members</h2>
        <p className="text-slate-500 dark:text-slate-400">
          {user.role === 'admin' ? 'Global directory of all departmental leaders and members.' : `Active members and leadership for ${deptName}.`}
        </p>
      </div>

      {/* Executive Leadership Section */}
      <section>
        <div className="flex items-center mb-6">
          <Crown className="text-amber-500 mr-3" size={24} />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Executive Leadership</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chiefs.map(member => (
            <MemberCard key={member.id} member={member} isChief={true} />
          ))}
          {chiefs.length === 0 && (
             <div className="col-span-3 text-center py-8 text-slate-500 bg-slate-100 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
               No executives found.
             </div>
          )}
        </div>
      </section>

      {/* Managers & Active Members Section */}
      <section>
        <div className="flex items-center mb-6">
          <UserIcon className="text-blue-500 mr-3" size={24} />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Managers & Active Members</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(member => (
            <MemberCard key={member.id} member={member} isChief={false} />
          ))}
           {team.length === 0 && (
             <div className="col-span-3 text-center py-8 text-slate-500 bg-slate-100 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
               No active members found.
             </div>
          )}
        </div>
      </section>
    </div>
  );
};

const SettingsView = ({ theme, onToggleTheme, user }: { theme: Theme, onToggleTheme: () => void, user: User }) => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
       <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage your preferences and account settings.</p>
      </div>

      <div className="grid gap-6">
        {/* Appearance Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
          <div className="flex items-center mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
              {theme === 'dark' ? <Moon className="text-blue-600 dark:text-blue-400" size={24} /> : <Sun className="text-orange-500" size={24} />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Appearance</h3>
              <p className="text-slate-500 text-sm">Customize how the application looks.</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">Interface Theme</p>
              <p className="text-sm text-slate-500">Select your preferred display mode.</p>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
              <button 
                onClick={onToggleTheme}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Light
              </button>
              <button 
                onClick={onToggleTheme}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${theme === 'dark' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card */}
         <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
          <div className="flex items-center mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg mr-4">
               <Shield className="text-emerald-600 dark:text-emerald-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Account Info</h3>
              <p className="text-slate-500 text-sm">Your verified credentials.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Display Name</label>
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                   <UserIcon size={16} className="mr-2 opacity-50"/> {user.name}
                </div>
             </div>
             <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                   <Mail size={16} className="mr-2 opacity-50"/> {user.email}
                </div>
             </div>
             <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Role Access</label>
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 uppercase">
                   <Shield size={16} className="mr-2 opacity-50"/> {user.role}
                </div>
             </div>
             <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Department</label>
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 uppercase">
                   <Briefcase size={16} className="mr-2 opacity-50"/> {user.departmentId || 'Global Admin'}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsView = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Programs & Batches</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage ongoing batches, curriculum, and participants.</p>
      </div>
      <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-brand-500/20">
        + New Program
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {PROGRAMS.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setActiveView(View.DASHBOARD);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveView(View.DASHBOARD);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderView = () => {
    if (!currentUser) return null;

    switch (activeView) {
      case View.DASHBOARD: return <DashboardView user={currentUser} />;
      case View.DATA_REVIEW: return <DataReviewView user={currentUser} />;
      case View.PROGRAMS: return <ProgramsView />;
      case View.MEMBERS: return <ActiveMembersView user={currentUser} />;
      case View.SETTINGS: return <SettingsView theme={theme} onToggleTheme={toggleTheme} user={currentUser} />;
      default: return <div className="text-slate-500 text-center py-20">Work in progress...</div>;
    }
  };

  if (!currentUser) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className={theme}>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-300">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all z-20">
          <div className="p-6">
            <div className="flex items-center space-x-2 text-brand-500 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Students<span className="text-blue-500">x</span>CEOs</span>
            </div>
            
            <nav className="flex-1 space-y-1">
              <SidebarItem 
                icon={LayoutDashboard} 
                label="Dashboard" 
                isActive={activeView === View.DASHBOARD} 
                onClick={() => setActiveView(View.DASHBOARD)} 
              />
              
              <SidebarItem 
                icon={Database} 
                label="Data Review" 
                isActive={activeView === View.DATA_REVIEW} 
                onClick={() => setActiveView(View.DATA_REVIEW)} 
              />
              
              <SidebarItem 
                icon={Briefcase} 
                label="Programs" 
                isActive={activeView === View.PROGRAMS} 
                onClick={() => setActiveView(View.PROGRAMS)} 
              />
              
              <SidebarItem 
                icon={Users} 
                label="Active Members" 
                isActive={activeView === View.MEMBERS} 
                onClick={() => setActiveView(View.MEMBERS)} 
              />
              
              <SidebarItem 
                icon={Settings} 
                label="Settings" 
                isActive={activeView === View.SETTINGS} 
                onClick={() => setActiveView(View.SETTINGS)} 
              />
            </nav>
          </div>

          <div className="p-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3 mb-4">
                  <img src={currentUser.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-600" />
                  <div className="overflow-hidden">
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{currentUser.name}</p>
                      <p className="text-xs text-slate-500 truncate capitalize">{currentUser.role}</p>
                  </div>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center text-xs text-slate-500 hover:text-rose-500 transition-colors w-full"
              >
                <LogOut size={14} className="mr-2" /> Sign Out
              </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
          {/* Background Gradients for Vibe */}
          <div className="absolute top-0 left-0 w-full h-96 bg-white dark:bg-slate-900 z-0 pointer-events-none opacity-50"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

          {/* Top Header */}
          <header className="flex items-center justify-between px-8 py-5 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 sticky top-0">
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <Menu size={24} />
              </button>
            </div>

            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800/50 rounded-lg px-4 py-2 w-96 border border-slate-200 dark:border-slate-700 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all">
              <Search size={18} className="text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 w-full"
              />
            </div>

            <div className="flex items-center space-x-6">
              <button className="relative text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
              <div className={`px-3 py-1 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center`}>
                 {currentUser.name}
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                Create Report
              </button>
            </div>
          </header>

          {/* Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-8 z-10 scroll-smooth custom-scrollbar">
            <div className="max-w-7xl mx-auto">
              {renderView()}
            </div>
          </div>
        </main>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6">
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-slate-400">
                <X size={24} />
              </button>
              
              <div className="flex items-center space-x-2 text-brand-500 mb-8 mt-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Students<span className="text-blue-500">x</span>CEOs</span>
              </div>

              <nav className="flex-1 space-y-2">
                 <SidebarItem 
                  icon={LayoutDashboard} 
                  label="Dashboard" 
                  isActive={activeView === View.DASHBOARD} 
                  onClick={() => { setActiveView(View.DASHBOARD); setIsMobileMenuOpen(false); }} 
                />
                <SidebarItem 
                  icon={Database} 
                  label="Data Review" 
                  isActive={activeView === View.DATA_REVIEW} 
                  onClick={() => { setActiveView(View.DATA_REVIEW); setIsMobileMenuOpen(false); }} 
                />
                <SidebarItem 
                  icon={Briefcase} 
                  label="Programs" 
                  isActive={activeView === View.PROGRAMS} 
                  onClick={() => { setActiveView(View.PROGRAMS); setIsMobileMenuOpen(false); }} 
                />
                <SidebarItem 
                  icon={Users} 
                  label="Active Members" 
                  isActive={activeView === View.MEMBERS} 
                  onClick={() => { setActiveView(View.MEMBERS); setIsMobileMenuOpen(false); }} 
                />
                <SidebarItem 
                  icon={Settings} 
                  label="Settings" 
                  isActive={activeView === View.SETTINGS} 
                  onClick={() => { setActiveView(View.SETTINGS); setIsMobileMenuOpen(false); }} 
                />
                 <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
                    <button onClick={handleLogout} className="flex items-center text-slate-500">
                        <LogOut size={18} className="mr-3"/> Sign Out
                    </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}