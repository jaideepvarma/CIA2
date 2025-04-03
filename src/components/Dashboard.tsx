import React from 'react';
import { 
  Zap, 
  Users, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Bell,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Award
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-slate-900 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Welcome back, John!
        </h1>
        <p className="text-slate-400 mt-2">Your workspace overview for today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            label: 'Active Projects', 
            value: '32', 
            trend: '+12.5%',
            trendUp: true,
            icon: Target, 
            color: 'bg-emerald-500/20',
            textColor: 'text-emerald-400',
            borderColor: 'border-emerald-500/20'
          },
          { 
            label: 'Team Members', 
            value: '24', 
            trend: '+3.2%',
            trendUp: true,
            icon: Users, 
            color: 'bg-cyan-500/20',
            textColor: 'text-cyan-400',
            borderColor: 'border-cyan-500/20'
          },
          { 
            label: 'Hours Tracked', 
            value: '164', 
            trend: '-2.1%',
            trendUp: false,
            icon: Clock, 
            color: 'bg-purple-500/20',
            textColor: 'text-purple-400',
            borderColor: 'border-purple-500/20'
          },
          { 
            label: 'Tasks Done', 
            value: '248', 
            trend: '+18.4%',
            trendUp: true,
            icon: CheckCircle, 
            color: 'bg-pink-500/20',
            textColor: 'text-pink-400',
            borderColor: 'border-pink-500/20'
          }
        ].map((stat, index) => (
          <div 
            key={index} 
            className={`bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border ${stat.borderColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-[-8deg] translate-y-[-100%] animate-shimmer"></div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
                <p className={`text-2xl font-bold mt-1 ${stat.textColor}`}>{stat.value}</p>
                <div className={`flex items-center gap-1 mt-2 ${stat.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className={stat.textColor} size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Circular Progress Charts */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-200">Project Progress</h2>
            <select className="text-sm bg-slate-700 border-0 rounded-lg px-3 py-2 text-slate-300">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Design', progress: 75, color: 'emerald' },
              { label: 'Development', progress: 90, color: 'cyan' },
              { label: 'Marketing', progress: 60, color: 'purple' },
              { label: 'Research', progress: 85, color: 'pink' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={`rgb(var(--${item.color}-900))`}
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={`rgb(var(--${item.color}-400))`}
                      strokeWidth="3"
                      strokeDasharray={`${item.progress}, 100`}
                      className="animate-progress"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-${item.color}-400 font-semibold`}>{item.progress}%</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Chart */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-200">Activity Overview</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300">View Details</button>
          </div>
          <div className="h-[200px] relative">
            <div className="absolute inset-0 flex items-end">
              {[20, 45, 30, 80, 55, 75, 40, 60, 35, 70].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 transition-all duration-500"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="h-full w-full transform origin-bottom"
                    style={{
                      background: `linear-gradient(180deg, rgba(52, 211, 153, 0.2) 0%, rgba(52, 211, 153, 0) 100%)`,
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl border border-slate-700 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-200">Recent Activity</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300">View Timeline</button>
          </div>
          <div className="space-y-6">
            {[
              { 
                title: 'New Achievement Unlocked',
                description: 'Team reached 100% project completion rate this month',
                time: '2 hours ago',
                icon: Award,
                color: 'bg-emerald-500/20',
                textColor: 'text-emerald-400'
              },
              {
                title: 'Performance Milestone',
                description: 'Development team exceeded sprint goals by 40%',
                time: '4 hours ago',
                icon: Zap,
                color: 'bg-cyan-500/20',
                textColor: 'text-cyan-400'
              },
              {
                title: 'System Update',
                description: 'New features deployed to production environment',
                time: '5 hours ago',
                icon: Activity,
                color: 'bg-purple-500/20',
                textColor: 'text-purple-400'
              }
            ].map((activity, index) => (
              <div key={index} className="flex gap-4 group">
                <div className={`${activity.color} p-3 rounded-lg h-fit group-hover:scale-110 transition-transform`}>
                  <activity.icon className={activity.textColor} size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-slate-200">{activity.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{activity.description}</p>
                  <span className="text-slate-500 text-xs mt-2 block">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;