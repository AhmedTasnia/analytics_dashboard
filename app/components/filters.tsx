'use client';

import { useState, useEffect } from 'react';

interface FilterProps {
  onFilterChange?: (filters: { dateRange: string; userType: string }) => void;
}

export default function Filters({ onFilterChange }: FilterProps) {
  const [dateRange, setDateRange] = useState('30days');
  const [userType, setUserType] = useState('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDateRangeChange = (range: string) => {
    setDateRange(range);
    onFilterChange?.({ dateRange: range, userType });
  };

  const handleUserTypeChange = (type: string) => {
    setUserType(type);
    onFilterChange?.({ dateRange, userType: type });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Date Range
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Last 7 Days', value: '7days' },
              { label: 'Last 30 Days', value: '30days' },
              { label: 'Last 12 Months', value: '12months' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleDateRangeChange(option.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  dateRange === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* User Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            User Type
          </label>
          <select
            value={userType}
            onChange={(e) => handleUserTypeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
          >
            <option value="all">All Users</option>
            <option value="free">Free Users</option>
            <option value="premium">Premium Users</option>
            <option value="enterprise">Enterprise Users</option>
          </select>
        </div>
      </div>
    </div>
  );
}
