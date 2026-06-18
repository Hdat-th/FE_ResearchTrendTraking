import AdminBadge from '../../components/admin/AdminBadge';
import AdminMetricCard from '../../components/admin/AdminMetricCard';
import AdminSectionCard from '../../components/admin/AdminSectionCard';
import AdminTable from '../../components/admin/AdminTable';
import { revenueBars, revenueRows } from '../../mock/admin';

const AdminRevenuePage = () => {
  const maxBar = Math.max(...revenueBars.map((item) => item.amount));

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Revenue Management Dashboard</h1>
          <p className="mt-1 text-xs text-slate-500">Subscription revenue, payment transaction health and premium conversion monitoring.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">⇩ Export Finance Report</button>
          <button className="rounded-md bg-[#062b4f] px-4 py-2 text-xs font-bold text-white hover:bg-[#0b3d6f]">Refresh Ledger</button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-4">
        <AdminMetricCard label="Monthly Recurring Revenue" value="24.8M₫" helper="+18.4% vs last month" icon="₫" accent="green" />
        <AdminMetricCard label="Successful Transactions" value="1,286" helper="VNPAY + VietQR success" icon="✓" accent="blue" />
        <AdminMetricCard label="Premium Subscribers" value="842" helper="76 yearly · 766 monthly" icon="★" accent="orange" />
        <AdminMetricCard label="Failed Payment Rate" value="2.1%" helper="-0.8% vs last cycle" icon="!" accent="slate" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <AdminSectionCard title="Revenue Trend" subtitle="Gross successful payments by month">
          <div className="p-5">
            <div className="flex h-72 items-end gap-4 rounded-lg bg-slate-50 p-5">
              {revenueBars.map((item) => (
                <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-52 w-full items-end rounded bg-white px-2">
                    <div
                      className="w-full rounded-t-md bg-[#0b6fb8] shadow-sm transition-all hover:bg-[#062b4f]"
                      style={{ height: `${(item.amount / maxBar) * 100}%` }}
                      title={`${item.month}: ${item.amount}M₫`}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold text-slate-500">ARPU</p>
                <p className="mt-1 text-lg font-extrabold text-slate-950">96.400₫</p>
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold text-slate-500">Conversion</p>
                <p className="mt-1 text-lg font-extrabold text-emerald-700">12.8%</p>
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold text-slate-500">Refunds</p>
                <p className="mt-1 text-lg font-extrabold text-red-600">4</p>
              </div>
            </div>
          </div>
        </AdminSectionCard>

        <AdminSectionCard title="Plan Mix" subtitle="Active user subscriptions">
          <div className="space-y-5 p-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Premium Monthly</span>
                <span>71%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-[#0b6fb8]" style={{ width: '71%' }} /></div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Premium Yearly</span>
                <span>21%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-emerald-500" style={{ width: '21%' }} /></div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Free / Edu Discount</span>
                <span>8%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-orange-400" style={{ width: '8%' }} /></div>
            </div>
            <div className="rounded-md bg-emerald-50 p-4 text-sm text-emerald-800">
              Edu accounts are receiving a configured 20% discount for premium checkout.
            </div>
          </div>
        </AdminSectionCard>
      </div>

      <AdminSectionCard title="Recent Payment Transactions" subtitle="Subscription plan purchases and gateway callbacks">
        <AdminTable headers={['Invoice ID', 'Customer', 'Plan', 'Amount', 'Method', 'Paid At', 'Status']}>
          {revenueRows.map((row) => (
            <tr key={row.invoiceId} className="hover:bg-slate-50">
              <td className="px-5 py-4 font-bold text-slate-700">{row.invoiceId}</td>
              <td className="px-5 py-4">{row.customer}</td>
              <td className="px-5 py-4 font-semibold text-slate-800">{row.plan}</td>
              <td className="px-5 py-4 font-bold text-slate-950">{row.amount}</td>
              <td className="px-5 py-4">{row.method}</td>
              <td className="px-5 py-4">{row.paidAt}</td>
              <td className="px-5 py-4"><AdminBadge status={row.status} /></td>
            </tr>
          ))}
        </AdminTable>
      </AdminSectionCard>
    </div>
  );
};

export default AdminRevenuePage;
