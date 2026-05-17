import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardOverview from '../features/compliance/pages/DashboardOverview';
import RequirementList from '../features/compliance/pages/RequirementList';
import RequirementDetail from '../features/compliance/pages/RequirementDetail';
import RequirementCreate from '../features/compliance/pages/RequirementCreate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardOverview /> },
      { path: 'compliance', element: <RequirementList /> },
      { path: 'compliance/:id', element: <RequirementDetail /> },
      { path: 'compliance/new', element: <RequirementCreate /> },
      {
        path: 'analytics',
        element: (
          <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics Dashboard</h1>
            <p className="text-slate-500 mt-1">Compliance trends and regional framework breakdown parameters.</p>
            <div className="mt-8 border border-dashed border-slate-300 rounded-xl h-96 flex items-center justify-center bg-white shadow-sm">
              <span className="text-slate-400 font-medium">Compliance performance trends visualization placeholder.</span>
            </div>
          </div>
        ),
      },
      {
        path: 'settings',
        element: (
          <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Settings</h1>
            <p className="text-slate-500 mt-1">Configure regulatory hooks, threshold notifications, and webhooks.</p>
            <div className="mt-8 border border-dashed border-slate-300 rounded-xl h-96 flex items-center justify-center bg-white shadow-sm">
              <span className="text-slate-400 font-medium">Configuration mapping parameters placeholder.</span>
            </div>
          </div>
        ),
      },
    ],
  },
]);