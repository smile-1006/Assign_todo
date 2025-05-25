import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Calendar,
  CheckSquare,
  BarChart2,
  Settings,
  LogOut,
  Tag,
  Menu,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const links = [
  { to: '/today', label: 'Today', icon: Home },
  { to: '/upcoming', label: 'Upcoming', icon: Calendar },
  { to: '/completed', label: 'Completed', icon: CheckSquare },
  { to: '/tags', label: 'Tags', icon: Tag },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/analytics', label: 'Analytics', icon: BarChart2 },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/logout', label: 'Logout', icon: LogOut },
];

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={`
        bg-white dark:bg-gray-800 h-screen 
        ${collapsed ? 'w-20' : 'w-64'} 
        transition-all duration-300 ease-in-out
        border-r border-gray-200 dark:border-gray-700
        flex flex-col
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          {!collapsed && <h1 className="text-xl font-bold text-gray-800 dark:text-white">TodoList+</h1>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`
              }
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
          {!collapsed && (
            <div>
              <p className="font-medium text-gray-800 dark:text-white">John Doe</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SidebarMenu;