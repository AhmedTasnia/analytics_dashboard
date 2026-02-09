'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 25000 },
  { month: 'Feb', revenue: 28500 },
  { month: 'Mar', revenue: 32100 },
  { month: 'Apr', revenue: 30500 },
  { month: 'May', revenue: 35800 },
  { month: 'Jun', revenue: 40200 },
  { month: 'Jul', revenue: 38900 },
  { month: 'Aug', revenue: 42300 },
  { month: 'Sep', revenue: 45600 },
  { month: 'Oct', revenue: 50100 },
  { month: 'Nov', revenue: 52800 },
  { month: 'Dec', revenue: 54230 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value) => `$${Number(value).toLocaleString()}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
