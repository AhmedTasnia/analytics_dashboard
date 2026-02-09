'use client';

import { useState, useEffect } from 'react';
import { DollarSign, Users, ShoppingCart, Percent } from 'lucide-react';
import KPICard from '@/app/components/kpiCard';
import RevenueChart from '@/app/components/charts/revenueChart';
import OrderChart from '@/app/components/charts/orderChart';
import UserDistributionChart from '@/app/components/charts/userDistributionChart';
import Filters from '@/app/components/filters';
import { fetchStats } from '@/lib/mockData';

interface Stats {
  totalRevenue: number;
  totalUsers: number;
  totalOrders: number;
  conversionRate: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [filters, setFilters] = useState({ dateRange: '30days', userType: 'all' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const loadStats = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStats();
  }, [filters, isMounted]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  if (!isMounted) {
    return (
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto mt-20 lg:mt-0 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mt-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! your analytics overview.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-32 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto mt-20 lg:mt-0 lg:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! your analytics overview.</p>
          </div>

          {/* Filters */}
          <Filters onFilterChange={handleFilterChange} />

          {/* KPI Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {isLoading ? (
              Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-32 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                  </div>
                ))
            ) : stats ? (
              <>
                <KPICard
                  title="Total Revenue"
                  value={`$${stats.totalRevenue.toLocaleString()}`}
                  change={12.5}
                  isPositive={true}
                  icon={
                    <DollarSign className="w-6 h-6 text-green-600" />
                  }
                />
                <KPICard
                  title="Total Users"
                  value={stats.totalUsers.toLocaleString()}
                  change={8.2}
                  isPositive={true}
                  icon={
                    <Users className="w-6 h-6 text-blue-600" />
                  }
                />
                <KPICard
                  title="Total Orders"
                  value={stats.totalOrders.toLocaleString()}
                  change={-3.1}
                  isPositive={false}
                  icon={
                    <ShoppingCart className="w-6 h-6 text-purple-600" />
                  }
                />
                <KPICard
                  title="Conversion Rate"
                  value={`${stats.conversionRate}%`}
                  change={5.6}
                  isPositive={true}
                  icon={
                    <Percent className="w-6 h-6 text-orange-600" />
                  }
                />
              </>
            ) : null}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <RevenueChart />
            <OrderChart />
          </div>

          {/* User Distribution Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <UserDistributionChart />
          </div>
        </div>
      </main>
    </div>
  );
}