import NavItem from '../Header/NavItem';
import navList from '../../data/navItem'; // ✅ Adjust path if needed


import './sideBar.css';

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">

        {/* Dashboard */}
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Documents */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/documents">
            <i className="bi bi-menu-button-wide"></i>
            <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li><a href="/customers"><i className="bi bi-people"></i><span>Customers</span></a></li>
            <li><a href="/suppliers"><i className="bi bi-truck"></i><span>Suppliers</span></a></li>
            <li><a href="/logistic"><i className="bi bi-box-seam"></i><span>Logistic</span></a></li>
          </ul>
        </li>

        {/* Forms */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/forms">
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li><a href="/forms/application"><i className="bi bi-file-earmark-text"></i><span>Application Form</span></a></li>
            <li><a href="/forms/release"><i className="bi bi-file-earmark-check"></i><span>Release Form</span></a></li>
            <li><a href="/forms/cancellation"><i className="bi bi-file-earmark-x"></i><span>Cancellation Form</span></a></li>
          </ul>
        </li>

        {/* Tables */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="/tables">
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li><a href="/tables/general"><i className="bi bi-table"></i><span>General Tables</span></a></li>
            <li><a href="/tables/data"><i className="bi bi-database"></i><span>Data Tables</span></a></li>
          </ul>
        </li>

        {/* Charts */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="/charts">
            <i className="bi bi-bar-chart"></i>
            <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li><a href="/charts/sales"><i className="bi bi-graph-up"></i><span>Sales Chart</span></a></li>
            <li><a href="/charts/analytics"><i className="bi bi-pie-chart"></i><span>Analytics Chart</span></a></li>
          </ul>
        </li>
        <li className = "nav-heading">Pages</li>
        {navList.map(nav =>{
         return <NavItem key = {nav._id} nav = {nav}/>
          
})}

      </ul>
    </aside>
  );
}

export default SideBar;
