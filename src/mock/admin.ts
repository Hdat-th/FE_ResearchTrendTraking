export type AdminStatus = 'ACTIVE' | 'REQUESTED' | 'GENERATING' | 'READY' | 'FAILED' | 'SUCCESS' | 'PENDING' | 'SUSPENDED' | 'DRAFT' | 'VERIFIED' | 'REGISTERED' | 'EXPIRED';

export interface ExportRequest {
  id: string;
  user: string;
  type: 'CSV' | 'PDF' | 'XLSX';
  timestamp: string;
  status: AdminStatus;
}

export interface PipelineEvent {
  title: string;
  time: string;
  status: AdminStatus;
}

export interface RepositoryCategory {
  id: string;
  name: string;
  description: string;
  fields: number;
  status: AdminStatus;
}

export interface UserDirectoryRow {
  id: string;
  initials: string;
  name: string;
  email: string;
  role: string;
  status: AdminStatus;
}

export interface ActivityLog {
  type: 'ELEVATION' | 'LEDGER' | 'AUTH_FAIL' | 'UPDATE';
  time: string;
  title: string;
  ref: string;
}

export interface RevenueRow {
  invoiceId: string;
  customer: string;
  plan: string;
  amount: string;
  method: string;
  paidAt: string;
  status: AdminStatus;
}

export const exportRequests: ExportRequest[] = [
  { id: '#EXP-82910', user: 'm.chen@academic.org', type: 'CSV', timestamp: '2023-11-24 14:20', status: 'REQUESTED' },
  { id: '#EXP-82909', user: 'j.doe@university.edu', type: 'PDF', timestamp: '2023-11-24 14:15', status: 'GENERATING' },
  { id: '#EXP-82908', user: 'admin_root', type: 'CSV', timestamp: '2023-11-24 13:45', status: 'READY' },
  { id: '#EXP-82907', user: 'r.smith@research.lab', type: 'PDF', timestamp: '2023-11-24 12:30', status: 'FAILED' },
];

export const pipelineHistory: PipelineEvent[] = [
  { title: 'OpenAlex Sync', time: '2 mins ago', status: 'SUCCESS' },
  { title: 'Manual Trigger', time: 'Just now', status: 'PENDING' },
  { title: 'Scheduled Crawl', time: '1 hour ago', status: 'FAILED' },
];

export const repositoryCategories: RepositoryCategory[] = [
  { id: 'CAT-001', name: 'Computer Science', description: 'Computing systems, algorithms, processing', fields: 42, status: 'VERIFIED' },
  { id: 'CAT-002', name: 'Medicine', description: 'Clinical health, diagnostics, patient care', fields: 38, status: 'VERIFIED' },
  { id: 'CAT-003', name: 'Physics', description: 'Fundamental forces, matter, astrophysics', fields: 24, status: 'DRAFT' },
];

export const adminUsers: UserDirectoryRow[] = [
  { id: '#USR-8821', initials: 'JD', name: 'Dr. Julianne Davies', email: 'j.davies@ais-node.edu', role: 'Lecturer (Giảng viên)', status: 'ACTIVE' },
  { id: '#USR-6942', initials: 'MT', name: 'Minh Tran', email: 'm.tran@ais-node.edu', role: 'Researcher (Nhà nghiên cứu)', status: 'REGISTERED' },
  { id: '#USR-9102', initials: 'SA', name: 'Sarah Ahmed', email: 's.ahmed@ais-node.edu', role: 'Student (Sinh viên)', status: 'SUSPENDED' },
  { id: '#USR-9214', initials: 'RL', name: 'Robert Lang', email: 'r.lang@ais-node.edu', role: 'Admin Overseer', status: 'ACTIVE' },
];

export const activityLogs: ActivityLog[] = [
  { type: 'ELEVATION', time: '14:22:10 UTC', title: 'User #USR-8942 requested elevation to Researcher', ref: 'HASH: 462f4b1' },
  { type: 'LEDGER', time: '13:44:02 UTC', title: 'Periodic node sync completed successfully', ref: 'BLOCK: 881203' },
  { type: 'AUTH_FAIL', time: '12:11:58 UTC', title: '3 failed login attempts on User #USR-1102', ref: 'IP: 192.x.x.x' },
  { type: 'UPDATE', time: '11:06:33 UTC', title: 'Dr. Julianne Davies updated profile metadata', ref: 'ID: v7.92' },
];

export const revenueRows: RevenueRow[] = [
  { invoiceId: '#INV-24001', customer: 'Dr. Sarah Jenkins', plan: 'Premium Yearly', amount: '799.000₫', method: 'VNPAY', paidAt: '2026-06-12 09:24', status: 'SUCCESS' },
  { invoiceId: '#INV-24002', customer: 'Minh Tran', plan: 'Premium Monthly', amount: '99.000₫', method: 'VietQR', paidAt: '2026-06-13 12:45', status: 'SUCCESS' },
  { invoiceId: '#INV-24003', customer: 'j.doe@university.edu', plan: 'Premium Monthly', amount: '79.200₫', method: 'VNPAY', paidAt: '2026-06-14 18:04', status: 'PENDING' },
  { invoiceId: '#INV-24004', customer: 'r.smith@research.lab', plan: 'Premium Monthly', amount: '99.000₫', method: 'VietQR', paidAt: '2026-06-15 21:37', status: 'FAILED' },
];

export const revenueBars = [
  { month: 'Jan', amount: 34 },
  { month: 'Feb', amount: 46 },
  { month: 'Mar', amount: 42 },
  { month: 'Apr', amount: 58 },
  { month: 'May', amount: 64 },
  { month: 'Jun', amount: 76 },
];
