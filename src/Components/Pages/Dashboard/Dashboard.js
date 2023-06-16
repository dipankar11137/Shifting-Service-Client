import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  // const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-76 bg-base-100 text-base-content">
              <li>
                <Link
                  to="/dashboard"
                  className="font-bold hover:text-orange-600"
                >
                  Add Item
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageItem"
                  className="font-bold hover:text-orange-600"
                >
                  Manage Item
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageOrder"
                  className="font-bold hover:text-orange-600"
                >
                  Manage Order
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/reports"
                  className="font-bold hover:text-orange-600"
                >
                  Monthly Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
