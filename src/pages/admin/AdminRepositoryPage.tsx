import AdminBadge from '../../components/admin/AdminBadge';
import AdminMetricCard from '../../components/admin/AdminMetricCard';
import AdminSectionCard from '../../components/admin/AdminSectionCard';
import AdminTable from '../../components/admin/AdminTable';
import { repositoryCategories } from '../../mock/admin';

const anomalies = [
  { tone: 'border-orange-400', label: 'MISSING_ABSTRACT', title: 'Advanced Neural Networks...', id: 'AIS_798273_ERN', action: 'Auto-Fill' },
  { tone: 'border-red-500', label: 'FLAGGED_DUPLICATE', title: 'Climate Modeling 2024', id: 'AI-Q7M-125_TRS86', action: 'Review' },
];

const AdminRepositoryPage = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Article Repository</h1>
          <p className="mt-1 text-xs text-slate-500">Validate imported metadata, ontology categories and cleansing queue.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-[#0b6fb8]">⇩ Export</button>
          <button className="rounded-md bg-[#062b4f] px-4 py-2 text-xs font-bold text-white">Ingest Now</button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <AdminMetricCard label="Total Articles Verified" value="1.4M" helper="+2.4% vs last month" icon="▣" accent="slate" />
        <AdminMetricCard label="Data Health Score" value="98.4%" helper="Metadata completeness" icon="🛡" accent="blue" />
        <AdminMetricCard label="Indexed Today" value="+1,240" helper="Last sync: 12 minutes ago" icon="⟳" accent="slate" />
      </div>

      <div className="border-b border-slate-200">
        <div className="flex gap-8 text-sm font-bold text-slate-500">
          <button className="pb-3 hover:text-[#0b6fb8]">Research Papers</button>
          <button className="border-b-2 border-[#0b6fb8] pb-3 text-[#062b4f]">Ontology & Categories</button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
        <AdminSectionCard
          title="Concept Registry"
          subtitle="Ontology mapping and classification hierarchy"
          action={<button className="rounded-md bg-[#062b4f] px-4 py-2 text-xs font-bold text-white">+ New Concept</button>}
        >
          <AdminTable headers={['ID', 'Category Name', 'Sub-fields', 'Status']}>
            {repositoryCategories.map((category) => (
              <tr key={category.id} className="hover:bg-slate-50">
                <td className="px-5 py-5 font-bold text-slate-500">{category.id}</td>
                <td className="px-5 py-5">
                  <p className="font-bold text-slate-900">{category.name}</p>
                  <p className="mt-1 max-w-xs text-xs text-slate-500">{category.description}</p>
                </td>
                <td className="px-5 py-5"><span className="rounded bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{category.fields} Fields</span></td>
                <td className="px-5 py-5"><AdminBadge status={category.status} /></td>
              </tr>
            ))}
          </AdminTable>
        </AdminSectionCard>

        <AdminSectionCard
          title="Cleansing Queue"
          action={<span className="rounded bg-red-50 px-2 py-1 text-[10px] font-bold text-red-700">12 ACTIONABLE</span>}
        >
          <div className="space-y-4 p-5">
            {anomalies.map((anomaly) => (
              <div key={anomaly.id} className={`border-l-4 ${anomaly.tone} rounded-r-md bg-slate-50 p-4`}>
                <span className="rounded bg-red-50 px-2 py-1 text-[9px] font-bold text-red-600">{anomaly.label}</span>
                <h3 className="mt-2 text-sm font-extrabold text-slate-900">{anomaly.title}</h3>
                <p className="mt-1 text-xs text-slate-500">ID: {anomaly.id}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button className="rounded bg-[#062b4f] py-2 text-xs font-bold text-white">{anomaly.action}</button>
                  <button className="rounded border border-slate-200 bg-white py-2 text-xs font-bold text-slate-600">Dismiss</button>
                </div>
              </div>
            ))}
            <button className="w-full text-center text-sm font-bold text-[#0b6fb8] hover:underline">View All Anomalies</button>
          </div>
        </AdminSectionCard>
      </div>
    </div>
  );
};

export default AdminRepositoryPage;
