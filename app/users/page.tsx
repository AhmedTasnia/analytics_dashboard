export default function UsersPage() {
  const users = [
    { name: 'Ariana Fields', email: 'ariana@company.com', plan: 'Enterprise', status: 'Active' },
    { name: 'Marcus Lee', email: 'marcus@company.com', plan: 'Premium', status: 'Active' },
    { name: 'Elena Patel', email: 'elena@company.com', plan: 'Free', status: 'Trial' },
    { name: 'Jonas Reed', email: 'jonas@company.com', plan: 'Premium', status: 'Paused' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 p-6 overflow-auto mt-20 lg:mt-0 lg:ml-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-2">Manage audience segments and account health.</p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Total Users', value: '1,245', note: '+8.2% this month' },
              { label: 'Paid Plans', value: '642', note: '+5.4% this month' },
              { label: 'Churn Risk', value: '46', note: '-12 users this week' },
            ].map((metric) => (
              <div key={metric.label} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <p className="text-sm text-green-600 mt-2">{metric.note}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900">Recent Users</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-gray-500">
                    <tr>
                      <th className="py-2">Name</th>
                      <th className="py-2">Plan</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {users.map((user) => (
                      <tr key={user.email} className="text-gray-700">
                        <td className="py-3 font-medium text-gray-900">{user.name}</td>
                        <td className="py-3">{user.plan}</td>
                        <td className="py-3">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3">{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900">Segments</h2>
              <div className="mt-4 space-y-4">
                {[
                  { label: 'Enterprise Accounts', value: '124', note: 'High retention' },
                  { label: 'Premium Trial', value: '78', note: 'Needs nurture' },
                  { label: 'Free Active', value: '620', note: 'Upsell ready' },
                ].map((segment) => (
                  <div key={segment.label} className="rounded-lg border border-gray-200 p-4">
                    <p className="text-sm font-medium text-gray-900">{segment.label}</p>
                    <p className="text-xl font-semibold text-gray-900 mt-2">{segment.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{segment.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Engagement Notes</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Most active region: North America (44%).',
                'Top usage time: 9am-12pm local time.',
                'Onboarding completion improved after new tour.',
                'Support tickets down 18% week-over-week.',
              ].map((note) => (
                <div key={note} className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                  {note}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
