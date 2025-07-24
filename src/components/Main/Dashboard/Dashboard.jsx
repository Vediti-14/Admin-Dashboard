
import React from "react";
import "./dashboard.css";
import Cards from "./Cards";
import Reports from './Reports/Reports';
import RecentSales from './Recent Sales/RecentSales';
import TopSelling from './Top Selling/TopSelling';
import RecentActivity from './Recent Activity/RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News/News';

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {/* ✅ Just use Cards component */}
            <Cards />

            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
