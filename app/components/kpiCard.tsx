'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  icon?: React.ReactNode;
  isPositive?: boolean;
}

export default function KPICard({
  title,
  value,
  change,
  icon,
  isPositive = true,
}: KPICardProps) {
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';
  const textColor = isPositive ? 'text-green-600' : 'text-red-600';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{value}</h3>

          <div className={`flex items-center gap-1 ${textColor}`}>
            <TrendIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">{Math.abs(change)}%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        {icon && (
          <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}