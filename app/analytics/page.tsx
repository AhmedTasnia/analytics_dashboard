export default function AnalyticsPage() {
  const summary = [
    { label: 'Active Sessions', value: '1,342', note: '+6.2% vs last week' },
    { label: 'Avg. Session Time', value: '4m 18s', note: '+0.4m vs last week' },
    { label: 'Bounce Rate', value: '28.4%', note: '-1.9% vs last week' },
    { label: 'Goal Completions', value: '312', note: '+9.1% vs last week' },
  ];

  const insights = [
    'Organic search grew steadily after the new landing page launch.',
    'Returning visitors convert 2.3x more than first-time visitors.',
    'Top device category is desktop (62%), followed by mobile (31%).',
  ];

  return (
    <main className="p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Track performance trends and user behavior.</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summary.map((item) => (
            <div key={item.label} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-sm font-medium text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{item.value}</p>
              <p className="text-sm text-green-600 mt-2">{item.note}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900">Channel Performance</h2>
            <p className="text-sm text-gray-600 mt-2">Weekly sessions by acquisition channel.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600">Organic</p>
                <p className="text-xl font-semibold text-gray-900">58%</p>
                <p className="text-xs text-green-600 mt-1">+4.1%</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600">Paid</p>
                <p className="text-xl font-semibold text-gray-900">24%</p>
                <p className="text-xs text-red-600 mt-1">-1.6%</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600">Social</p>
                <p className="text-xl font-semibold text-gray-900">18%</p>
                <p className="text-xs text-green-600 mt-1">+0.8%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Insights</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {insights.map((item) => (
                <li key={item} className="rounded-lg bg-gray-50 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900">Goal Progress</h2>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Newsletter Signups', value: '72%', color: 'bg-blue-600' },
              { label: 'Checkout Completion', value: '64%', color: 'bg-green-600' },
              { label: 'Product Demo Requests', value: '48%', color: 'bg-orange-500' },
            ].map((goal) => (
              <div key={goal.label}>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{goal.label}</span>
                  <span>{goal.value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div className={`h-2 rounded-full ${goal.color}`} style={{ width: goal.value }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
