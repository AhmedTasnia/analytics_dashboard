'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', orders: 24 },
  { month: 'Feb', orders: 28 },
  { month: 'Mar', orders: 32 },
  { month: 'Apr', orders: 30 },
  { month: 'May', orders: 35 },
  { month: 'Jun', orders: 40 },
  { month: 'Jul', orders: 38 },
  { month: 'Aug', orders: 42 },
  { month: 'Sep', orders: 45 },
  { month: 'Oct', orders: 50 },
  { month: 'Nov', orders: 52 },
  { month: 'Dec', orders: 342 },
];

export default function OrderChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Orders Per Month</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar
            dataKey="orders"
            fill="#10b981"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
