import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MỚI · Checkout Screen
// Mô phỏng initiatePayment() -> PENDING (theo state diagram "Payment Transaction" ở mục 4).
// Thực tế: BE tạo Transaction(status=PENDING, user_id, subscription_id=NULL) và redirect
// sang cổng thanh toán (VNPay). FE chỉ cần điều hướng tới /payment/return?status=...
const PLAN_PRICE = '99.000₫';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = (outcome: 'SUCCESS' | 'FAILED' | 'CANCELLED') => {
    setIsProcessing(true);
    // Demo: bỏ qua bước redirect cổng thanh toán thật, đi thẳng tới trang return.
    setTimeout(() => {
      navigate(`/payment/return?status=${outcome}`);
    }, 600);
  };

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          MỚI · Checkout Screen
        </p>
        <h1 className="text-2xl font-bold text-gray-900">Upgrade to Premium</h1>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex justify-between text-sm text-gray-700">
          <span>Premium Plan (1 month)</span>
          <span className="font-semibold">{PLAN_PRICE}</span>
        </div>
        <hr className="my-3 border-gray-200" />
        <div className="flex justify-between text-sm font-semibold text-gray-900">
          <span>Total</span>
          <span>{PLAN_PRICE}</span>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-700">Thanh toán qua cổng VNPay (mock).</p>
        <p className="mt-1 text-xs text-gray-400">
          Khi BE nhận IPN với chữ ký hợp lệ (BR-28) → Transaction chuyển SUCCESS, tạo/cập nhật
          User Subscription, set <code>access_tier = PREMIUM</code> (BR-27a). Bên dưới là 3 nút
          demo cho 3 nhánh PENDING → SUCCESS / FAILED / CANCELLED.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <button
            disabled={isProcessing}
            onClick={() => handlePay('SUCCESS')}
            className="rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800 disabled:opacity-50"
          >
            {isProcessing ? 'Đang xử lý…' : `Pay ${PLAN_PRICE} (Simulate SUCCESS)`}
          </button>
          <button
            disabled={isProcessing}
            onClick={() => handlePay('FAILED')}
            className="rounded-md border border-red-600 px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
          >
            Simulate FAILED (vnp_ResponseCode != 00)
          </button>
          <button
            disabled={isProcessing}
            onClick={() => handlePay('CANCELLED')}
            className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Simulate CANCELLED (đóng cổng thanh toán)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
