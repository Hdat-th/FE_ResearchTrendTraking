import { Link, NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types/auth';

const adminNavItems = [
  { to: '/admin', label: 'Dashboard', icon: '▦', end: true },
  { to: '/admin/pipelines', label: 'Data Pipelines', icon: '⚙', end: false },
  { to: '/admin/repository', label: 'Article Repository', icon: '▤', end: false },
  { to: '/admin/users', label: 'User Governance', icon: '◉', end: false },
  { to: '/admin/revenue', label: 'Revenue Dashboard', icon: '₫', end: false },
];

const AdminLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || user.role !== Role.ADMIN) {
    return <Navigate to="/" replace />;
  }

  const initials = user.fullName
    .split(' ')
    .map((part) => part[0])
    .slice(-2)
    .join('');

  return (
    <div className="min-h-screen bg-[#f4f7fa] text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-20 flex w-[244px] flex-col bg-[#062b4f] text-white shadow-xl">
        <div className="px-4 pb-5 pt-4">
          <Link to="/admin" className="block text-lg font-extrabold tracking-tight">
            AIS Admin
          </Link>
          <p className="mt-0.5 text-[11px] text-blue-200">Academic Intelligence</p>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition',
                  isActive
                    ? 'bg-[#62b0ff] text-[#062b4f] shadow-sm'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              <span className="flex h-5 w-5 items-center justify-center text-base">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="space-y-2 px-3 pb-5 text-xs text-blue-100">
          <Link to="/" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10">
            <span>↩</span> User Workspace
          </Link>
          <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left hover:bg-white/10">
            <span>⚙</span> Settings
          </button>
          <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left hover:bg-white/10">
            <span>?</span> Help
          </button>
        </div>
      </aside>

      <div className="ml-[244px] min-h-screen">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
          <div className="flex w-full max-w-md items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-500">
            <span>⌕</span>
            <input
              aria-label="Admin global search"
              className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
              placeholder={location.pathname.includes('users') ? 'Search directory...' : 'Search pipelines, logs, or endpoints...'}
            />
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <button aria-label="Notifications" className="text-lg hover:text-[#062b4f]">⌁</button>
            <button aria-label="Apps" className="text-lg hover:text-[#062b4f]">▦</button>
            <button aria-label="More" className="text-lg hover:text-[#062b4f]">⋮</button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900">{user.fullName}</p>
                <p className="text-[10px] text-slate-500">System Overseer</p>
              </div>
              <Link
                to="/profile"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#062b4f] text-xs font-bold text-white"
              >
                {initials}
              </Link>
            </div>
          </div>
        </header>

        <main className="px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
