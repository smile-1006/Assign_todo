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
    <aside className={`bg-gray-100 dark:bg-gray-800 h-screen p-4 flex flex-col ${collapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Menu className="cursor-pointer" onClick={() => setCollapsed(!collapsed)} />
          {!collapsed && <h1 className="text-xl font-bold">TodoList+</h1>}
        </div>
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <User className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 p-1" />
          </div>
        )}
      </div>
      <nav className="flex flex-col space-y-2 flex-grow">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded hover:bg-indigo-600 hover:text-white transition-colors ${
                isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
