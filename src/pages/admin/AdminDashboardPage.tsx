import AdminBadge from '../../components/admin/AdminBadge';
import AdminMetricCard from '../../components/admin/AdminMetricCard';
import AdminSectionCard from '../../components/admin/AdminSectionCard';
import AdminTable from '../../components/admin/AdminTable';
import { exportRequests } from '../../mock/admin';

const AdminDashboardPage = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">System Workspace: Dashboard Overview</h1>
        <p className="mt-1 text-xs text-slate-500">Real-time ingestion metrics and governance ledger status.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <AdminMetricCard label="Total Articles Fetched" value="842,915" helper="Records from OpenAlex crawl" icon="☁" accent="blue" />
        <AdminMetricCard label="Data Warehouse Size" value="144,528" helper="Articles normalized in repository" icon="▣" accent="blue" />
        <AdminMetricCard label="OpenAlex Connection" value="ACTIVE" helper="API Gateway verified" icon="✥" accent="orange" />
      </div>

      <AdminSectionCard
        title="Recent Export Requests"
        action={<button className="text-xs font-bold text-[#0b6fb8] hover:underline">View All</button>}
      >
        <AdminTable headers={['Report ID', 'User', 'Type', 'Timestamp', 'Status']}>
          {exportRequests.map((request) => (
            <tr key={request.id} className="hover:bg-slate-50">
              <td className="px-5 py-4 font-bold text-slate-700">{request.id}</td>
              <td className="px-5 py-4">{request.user}</td>
              <td className="px-5 py-4 font-semibold">{request.type}</td>
              <td className="px-5 py-4">{request.timestamp}</td>
              <td className="px-5 py-4"><AdminBadge status={request.status} /></td>
            </tr>
          ))}
        </AdminTable>
      </AdminSectionCard>
    </div>
  );
};

export default AdminDashboardPage;
