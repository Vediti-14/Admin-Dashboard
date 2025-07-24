import React from 'react';
import "./main.css";
import PageTitle from './PageTitle/PageTitle'; // ✅ Corrected path
import Dashboard from './Dashboard/Dashboard';

export default function Main() {
  return (
    <main id="main" className="main">
      <PageTitle  page = "Dashboard"/>
      <Dashboard/>
    </main>
  );
}
