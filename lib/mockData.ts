// Mock API data
export const mockData = {
  stats: {
    totalRevenue: 54230,
    totalUsers: 1245,
    totalOrders: 342,
    conversionRate: 4.3,
  },
  
  revenue: [
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
  ],

  orders: [
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
  ],

  users: [
    { name: 'Free Users', value: 600 },
    { name: 'Premium Users', value: 450 },
    { name: 'Enterprise Users', value: 195 },
  ],

  trafficSource: [
    { name: 'Organic', value: 450, percentage: 36.1 },
    { name: 'Paid', value: 380, percentage: 30.5 },
    { name: 'Social', value: 280, percentage: 22.5 },
    { name: 'Referral', value: 135, percentage: 10.8 },
  ],
};

// Simulate API calls with delay
export async function fetchStats() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData.stats;
}

export async function fetchRevenue() {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return mockData.revenue;
}

export async function fetchOrders() {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return mockData.orders;
}

export async function fetchUsers() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData.users;
}

export async function fetchTrafficSource() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return mockData.trafficSource;
}
