import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Role } from '../../types/auth';

const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: Role.RESEARCHER, label: 'Researcher' },
  { value: Role.LECTURER, label: 'Lecturer' },
  { value: Role.STUDENT, label: 'Student' },
];

// S-01 · Register Screen (FR-01)
// Role chọn ở đây là CỐ ĐỊNH cho danh tính học thuật - KHÔNG đổi khi access_tier
// thay đổi sau này (xem BR-29: Premium hết hạn -> hạ access_tier, role giữ nguyên).
const RegisterPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>(Role.STUDENT);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
        <p className="mt-1 text-sm text-gray-500">
          Join the institutional network to access courses, research tracks, and administrative tools.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              required
              placeholder="e.g., Hoàng Tiến Đạt"
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Institutional Email</label>
            <input
              type="email"
              required
              placeholder="username@university.edu.vn"
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700">Institutional Role</span>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {ROLE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRole(opt.value)}
                  className={`rounded-md border px-3 py-2 text-sm ${
                    role === opt.value
                      ? 'border-indigo-700 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800"
          >
            Register Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
