'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Free Users', value: 600, color: '#3b82f6' },
  { name: 'Premium Users', value: 450, color: '#8b5cf6' },
  { name: 'Enterprise Users', value: 195, color: '#ec4899' },
];

export default function UserDistributionChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">User Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} users`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
