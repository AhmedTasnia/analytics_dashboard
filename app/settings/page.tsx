export default function SettingsPage() {
  const preferences = [
    { label: 'Weekly summary emails', value: 'Enabled' },
    { label: 'Product update alerts', value: 'Enabled' },
    { label: 'Security notifications', value: 'Enabled' },
  ];

  const integrations = [
    { label: 'Slack workspace', value: 'Connected' },
    { label: 'Google Analytics', value: 'Connected' },
    { label: 'Stripe billing', value: 'Pending update' },
  ];

  return (
    <main className="p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Update preferences, security, and workspace settings.</p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Workspace</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>Workspace Name</span>
                <span className="font-medium text-gray-900">Analytics Pro</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Plan</span>
                <span className="font-medium text-gray-900">Growth</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Billing Cycle</span>
                <span className="font-medium text-gray-900">Monthly</span>
              </div>
            </div>
            <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Manage Billing
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
            <div className="mt-4 space-y-3">
              {preferences.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm text-gray-700">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Edit Preferences
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Security</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>Two-factor auth</span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last password change</span>
                <span className="font-medium text-gray-900">14 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active sessions</span>
                <span className="font-medium text-gray-900">3 devices</span>
              </div>
            </div>
            <button className="mt-6 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Review Activity
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Team Access</h2>
            <div className="mt-4 space-y-4">
              {[
                { label: 'Admins', value: '4 members' },
                { label: 'Analysts', value: '9 members' },
                { label: 'View-only', value: '12 members' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm text-gray-700">
                  <span>{item.label}</span>
                  <span className="font-medium text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Invite Members
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900">Integrations</h2>
            <div className="mt-4 space-y-3">
              {integrations.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm text-gray-700">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Manage Integrations
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
