"use client";
import React, { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Shield, Users, Package, ShoppingCart, Settings, LogOut, Eye, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const SuperAdminDashboard = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (!user || !user.email) {
        router.push("/super-admin/login");
        return;
      }
      if (user.role?.name !== "super_admin") {
        toast.error("Access denied. Super Admin privileges required.");
        router.push("/super-admin/login");
        return;
      }
      setIsAuthorized(true);
      loadDashboardData();
    };
    checkAuthorization();
  }, [router]);

  const loadDashboardData = async () => {
    try {
      // For now, just set loading to false and show empty data
      // You can implement API endpoints later
      setUsers([]);
      setStats({
        totalUsers: 0,
        totalProducts: 0,
        totalOrders: 0,
        totalRevenue: 0
      });
    } catch (error) {
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    // Placeholder function - implement API endpoint later
    toast.success(`User role would be updated to ${newRole}`);
  };

  const deleteUser = async (userId: string) => {
    // Placeholder function - implement API endpoint later
    if (!confirm("Are you sure you want to delete this user?")) return;
    toast.success("User would be deleted");
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="text-red-500" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-white">Super Admin Dashboard</h1>
                <p className="text-gray-300">System Administration Panel</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/api/auth/signout")}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
              </div>
              <Users className="text-blue-500" size={32} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Products</p>
                <p className="text-3xl font-bold text-white">{stats.totalProducts}</p>
              </div>
              <Package className="text-green-500" size={32} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-white">{stats.totalOrders}</p>
              </div>
              <ShoppingCart className="text-yellow-500" size={32} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold text-white">KSh {stats.totalRevenue.toLocaleString()}</p>
              </div>
              <Settings className="text-purple-500" size={32} />
            </div>
          </div>
        </div>

        {/* Users Management */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-bold text-white">User Management</h2>
            <p className="text-gray-300">Manage user roles and permissions</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {users.map((user: any) => (
                  <tr key={user.id} className="hover:bg-white/5">
                    <td className="px-6 py-4 whitespace-nowrap text-white">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={user.role || "user"}
                        onChange={(e) => updateUserRole(user.id, e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="super_admin">Super Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => router.push(`/super-admin/users/${user.id}`)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="text-red-400 hover:text-red-300"
                          disabled={user.role === "super_admin"}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
