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

// Filter-based data variations
const filterVariations = {
  '7days': {
    totalRevenue: 12450,
    totalUsers: 320,
    totalOrders: 78,
    conversionRate: 4.8,
  },
  '30days': {
    totalRevenue: 54230,
    totalUsers: 1245,
    totalOrders: 342,
    conversionRate: 4.3,
  },
  '12months': {
    totalRevenue: 485230,
    totalUsers: 8542,
    totalOrders: 2891,
    conversionRate: 3.9,
  },
};

const userTypeVariations = {
  all: { multiplier: 1, userType: 'All Users' },
  free: { multiplier: 0.48, userType: 'Free Users' },
  premium: { multiplier: 0.36, userType: 'Premium Users' },
  enterprise: { multiplier: 0.16, userType: 'Enterprise Users' },
};

// Simulate API calls with delay
export async function fetchStats(filters?: { dateRange: string; userType: string }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  if (!filters) {
    return mockData.stats;
  }

  const dateData = filterVariations[filters.dateRange as keyof typeof filterVariations] || mockData.stats;
  const userMultiplier = userTypeVariations[filters.userType as keyof typeof userTypeVariations]?.multiplier || 1;

  return {
    totalRevenue: Math.round(dateData.totalRevenue * userMultiplier),
    totalUsers: Math.round(dateData.totalUsers * userMultiplier),
    totalOrders: Math.round(dateData.totalOrders * userMultiplier),
    conversionRate: Number((dateData.conversionRate * (1 + (userMultiplier - 1) * 0.2)).toFixed(1)),
  };
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
