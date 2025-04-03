import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle, BarChart2, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Statistics = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Statistics</h1>
        <p className="text-white/70">Analyze your team's performance and metrics</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Productivity Rate', value: '87%', trend: '+2.5%', trendUp: true, icon: TrendingUp, color: 'purple' },
          { label: 'Active Projects', value: '24', trend: '+4', trendUp: true, icon: BarChart2, color: 'blue' },
          { label: 'Team Velocity', value: '92%', trend: '+5.1%', trendUp: true, icon: Users, color: 'emerald' },
          { label: 'Time Efficiency', value: '95%', trend: '-1.2%', trendUp: false, icon: Clock, color: 'rose' }
        ].map((metric, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className={`bg-${metric.color}-500/20 p-3 rounded-lg`}>
                <metric.icon className={`text-${metric.color}-400`} size={24} />
              </div>
              <div className={`flex items-center gap-1 ${metric.trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                {metric.trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="text-sm font-medium">{metric.trend}</span>
              </div>
            </div>
            <h3 className="text-white/70 text-sm mb-1">{metric.label}</h3>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-4">Team Performance</h2>
          <div className="h-64">
            <div className="h-full flex items-end gap-4 pb-8">
              {[65, 85, 45, 75, 55, 90, 70].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg transition-all duration-500 hover:from-emerald-500 hover:to-emerald-300"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-white/70">Day {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Distribution Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-4">Project Distribution</h2>
          <div className="h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: 'Development', value: '35%', color: 'bg-blue-500' },
                { label: 'Design', value: '25%', color: 'bg-emerald-500' },
                { label: 'Marketing', value: '20%', color: 'bg-purple-500' },
                { label: 'Research', value: '20%', color: 'bg-rose-500' }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className={`${item.color} h-2 rounded-full mb-2`}></div>
                  <p className="text-sm font-medium text-white/70">{item.label}</p>
                  <p className="text-lg font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Monthly Progress</h2>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70">
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Tasks Completed', value: '487', trend: '+12.5%', icon: CheckCircle },
              { label: 'Hours Logged', value: '1,856', trend: '+8.2%', icon: Clock },
              { label: 'Team Efficiency', value: '94.2%', trend: '+5.1%', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="text-emerald-400" size={20} />
                  <span className="text-emerald-400 text-sm font-medium">{stat.trend}</span>
                </div>
                <p className="text-sm text-white/70">{stat.label}</p>
                <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;