import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700">
            Home
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700">
            Analytics
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700">
            Settings
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700">
            Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Overview</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add New
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold mt-2">12,345</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold">Sales</h3>
            <p className="text-3xl font-bold mt-2">$23,456</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold mt-2">1,234</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-3 px-4">User</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">john.doe@example.com</td>
                <td className="py-3 px-4">Admin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4">Jane Smith</td>
                <td className="py-3 px-4">jane.smith@example.com</td>
                <td className="py-3 px-4">Editor</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Tom Brown</td>
                <td className="py-3 px-4">tom.brown@example.com</td>
                <td className="py-3 px-4">User</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
