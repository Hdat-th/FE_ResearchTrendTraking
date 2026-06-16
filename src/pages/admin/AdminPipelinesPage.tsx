import AdminBadge from '../../components/admin/AdminBadge';
import AdminSectionCard from '../../components/admin/AdminSectionCard';
import AdminTable from '../../components/admin/AdminTable';
import { pipelineHistory } from '../../mock/admin';

const AdminPipelinesPage = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">OpenAlex Control Panel</h1>
          <p className="mt-1 text-xs text-slate-500">Dedicated management of OpenAlex external data ingestion streams.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">⇩ Export</button>
          <button className="rounded-md bg-[#062b4f] px-4 py-2 text-xs font-bold text-white hover:bg-[#0b3d6f]">↥ Ingest Now</button>
        </div>
      </div>

      <AdminSectionCard
        title="Ingestion Control"
        action={<span className="text-[11px] font-bold text-emerald-700">● Endpoint Active</span>}
      >
        <AdminTable headers={['Engine', 'Endpoint Base URL', 'Interval', 'Status', 'Actions']}>
          <tr>
            <td className="px-5 py-4 font-bold text-slate-800"><span className="mr-2 rounded-md bg-blue-50 px-2 py-1 text-blue-700">☁</span>OpenAlex API</td>
            <td className="px-5 py-4">api.openalex.org/works</td>
            <td className="px-5 py-4"><span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-bold">Daily</span></td>
            <td className="px-5 py-4"><AdminBadge status="ACTIVE" /></td>
            <td className="px-5 py-4"><button className="font-bold text-[#0b6fb8]">↻ Sync Now</button></td>
          </tr>
        </AdminTable>
      </AdminSectionCard>

      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.85fr]">
        <AdminSectionCard title="Ingestion History">
          <div className="divide-y divide-slate-100 px-5">
            {pipelineHistory.map((event) => (
              <div key={`${event.title}-${event.time}`} className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-bold text-slate-800">{event.title}</p>
                  <p className="text-xs text-slate-500">{event.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <AdminBadge status={event.status} />
                  {event.status === 'FAILED' && <button className="rounded border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">Retry</button>}
                </div>
              </div>
            ))}
          </div>
        </AdminSectionCard>

        <AdminSectionCard title="API Authentication">
          <div className="space-y-4 p-5">
            <label className="block text-xs font-bold text-slate-700" htmlFor="openalex-key">OpenAlex API Key</label>
            <input id="openalex-key" type="password" value="sk-openalex-demo-key" readOnly className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700" />
            <p className="text-xs text-slate-500">Your key is encrypted and used only for authenticated requests to OpenAlex.</p>
            <button className="w-full rounded-md bg-[#0b6fb8] px-4 py-2 text-sm font-bold text-white hover:bg-[#095d9d]">Save Key</button>
          </div>
        </AdminSectionCard>
      </div>
    </div>
  );
};

export default AdminPipelinesPage;
