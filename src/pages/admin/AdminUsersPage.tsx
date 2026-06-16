import AdminBadge from '../../components/admin/AdminBadge';
import AdminMetricCard from '../../components/admin/AdminMetricCard';
import AdminSectionCard from '../../components/admin/AdminSectionCard';
import AdminTable from '../../components/admin/AdminTable';
import { activityLogs, adminUsers } from '../../mock/admin';

const logTone = {
  ELEVATION: 'border-blue-400 bg-blue-50 text-blue-700',
  LEDGER: 'border-slate-300 bg-slate-50 text-slate-700',
  AUTH_FAIL: 'border-red-400 bg-red-50 text-red-700',
  UPDATE: 'border-sky-400 bg-sky-50 text-sky-700',
};

const AdminUsersPage = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">User Directory Governance</h1>
        <p className="mt-1 text-xs text-slate-500">Manage institution access, audit role transitions, and oversee global RBAC alignment across academic departments.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <AdminMetricCard label="Total Active Users" value="12,482" helper="+2.4% from last cycle" icon="♙" accent="blue" />
        <AdminMetricCard label="Role Requests Pending" value="148" helper="High priority: 14 actions" icon="▣" accent="orange" />
        <AdminMetricCard label="System Integrity Score" value="99.98%" helper="Status: High Resilience" icon="🛡" accent="green" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_285px]">
        <div className="space-y-5">
          <AdminSectionCard
            title="Access Control List"
            action={
              <div className="flex items-center gap-3">
                <button className="rounded-md bg-[#0b6fb8] px-4 py-2 text-xs font-bold text-white">+ Provision User</button>
                <button className="rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-500">≡</button>
              </div>
            }
          >
            <AdminTable headers={['User ID', 'Entity Full Name', 'Registered Email Node', 'Role Authorization', 'Status', 'Actions']}>
              {adminUsers.map((directoryUser) => (
                <tr key={directoryUser.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-bold text-slate-700">{directoryUser.id}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">{directoryUser.initials}</span>
                      <span className="font-bold text-slate-900">{directoryUser.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-500">{directoryUser.email}</td>
                  <td className="px-5 py-4"><select value={directoryUser.role} onChange={() => undefined} className="rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>{directoryUser.role}</option></select></td>
                  <td className="px-5 py-4"><AdminBadge status={directoryUser.status} /></td>
                  <td className="px-5 py-4 text-lg font-bold text-slate-500">...</td>
                </tr>
              ))}
            </AdminTable>
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
              <span>Displaying 4 of 12,482 user entries</span>
              <div className="flex gap-1">
                {[1, 2, 3].map((page) => (
                  <button key={page} className={`h-7 w-7 rounded border text-xs font-bold ${page === 1 ? 'bg-[#062b4f] text-white' : 'border-slate-200 bg-white text-slate-600'}`}>{page}</button>
                ))}
              </div>
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Compliance Status">
            <div className="p-5">
              <p className="text-sm text-slate-600">The current RBAC configuration matches the institutional policy 2024-B. No unauthorized role elevations detected in the last 24 hours.</p>
              <button className="mt-3 text-xs font-bold text-[#0b6fb8]">Download Compliance Report →</button>
            </div>
          </AdminSectionCard>
        </div>

        <AdminSectionCard title="System Activity Logs" action={<button className="text-sm text-slate-500">↻</button>}>
          <div className="space-y-3 p-4">
            {activityLogs.map((log) => (
              <div key={`${log.type}-${log.time}`} className={`rounded border-l-4 p-3 ${logTone[log.type]}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] font-extrabold">{log.type}</span>
                  <span className="text-[10px] text-slate-500">{log.time}</span>
                </div>
                <p className="mt-2 text-xs font-bold text-slate-800">{log.title}</p>
                <p className="mt-2 text-[10px] text-slate-500">{log.ref}</p>
              </div>
            ))}
            <button className="w-full rounded border border-[#0b6fb8] py-2 text-xs font-bold text-[#0b6fb8] hover:bg-blue-50">View Global Audit Trail</button>
          </div>
        </AdminSectionCard>
      </div>
    </div>
  );
};

export default AdminUsersPage;
