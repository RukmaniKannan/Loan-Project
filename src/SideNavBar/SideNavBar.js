import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css';
import logos from '../Assets/Screenshot 2024-11-07 120105.png';
import { TbFileInfo } from 'react-icons/tb';
import { LiaTwitter } from 'react-icons/lia';
import { LuWarehouse } from 'react-icons/lu';

import { FaScaleBalanced, FaPeopleRoof, FaUsers, FaUser, FaCheck, FaEarthAmericas, FaCity } from 'react-icons/fa6';

const SideNavBar = ({ children }) => {
  const [activeNav, setActiveNav] = useState(null);
  const [activeFinance, setActiveFinance] = useState(false);
  const [activeReport, setActiveReport] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(null);
  const [activeSubNavItem, setActiveSubNavItem] = useState(null);

  const sideNavBarData = [
    {
      title: 'Masters',
      // icon: <TbFileInfo size={18} color={activeNav === 1 ? '#fff' : 'grey'} />,
      SubNav: [
        { title: 'Loan Types/Facility', 
          // icon: <FaUsers size={14} color={activeSubNav === 0 ? '#fff' : 'grey'} />,
           link: '/Loan types' },
        { title: 'Collateral', 
          // icon: <FaUser size={12} color={activeSubNav === 1 ? '#fff' : 'grey'} />,
         link: '/collateral' },
        { title: 'Borrower', 
          // icon: <LiaTwitter size={18} color={activeSubNav === 2 ? '#fff' : 'grey'} />, 
          link: '/borrower' },
      ],
    },
    {
      title: '',
      // icon: <FaCheck size={12} color={activeFinance ? '#fff' : 'grey'} />,
      SubNav_Item: [
        { title: 'Lending', 
          // icon: <FaEarthAmericas size={10} color={activeSubNavItem === 0 ? '#fff' : 'grey'} />, 
          link: '/lending' },
        { title: 'Repayment', 
          // icon: <FaCity size={10} color={activeSubNavItem === 1 ? '#fff' : 'grey'} />, 
        link: '/repayment' },
      ],
    },
    {
      title: 'Users',
      // icon: <FaPeopleRoof size={18} color={activeNav === 3 ? '#fff' : 'grey'} />,
      link: '/users',
    },
    {
      // title: 'Report',
      // icon: <LuWarehouse size={14} color={activeReport ? '#fff' : 'grey'} />,
      SubNav_Report: [
        { title: 'Loan Report', 
          // icon: <FaScaleBalanced size={16} color={activeNav === 5 ? '#fff' : 'grey'} />, 
          link: '/loan report' },
      ],
    },
  ];

  const handleNavClick = (index) => {
    setActiveNav(activeNav === index ? null : index);
    setActiveSubNav(null);
    setActiveSubNavItem(null);
  };

  const handleFinanceClick = () => {
    setActiveFinance(!activeFinance);
  };

  const handleReportClick = () => {
    setActiveReport(!activeReport);
  };

  const handleSubNavClick = (subIndex) => {
    setActiveSubNav(activeSubNav === subIndex ? null : subIndex);
    setActiveSubNavItem(null);
  };

  const SubNavItemsClick = (subNavItemIndex) => {
    setActiveSubNavItem(activeSubNavItem === subNavItemIndex ? null : subNavItemIndex);
  };

  return (
    <div className="d-flex">
      <div className="side-navbar">
        <div className="sidebar-header d-flex align-items-center">
          <img src={logos} className="logo" alt="Logo" />
          <div className="sidebar-title">
            <span className="text-white">LOAN</span>
            <p className="text-white">MANAGEMENT</p>
          </div>
        </div>
        <div className="sidebar-menu">
          {sideNavBarData.map((itemnav, index) => (
            <div key={index}>
              <div className="link">
                <div
                  className="nav-item d-flex align-items-center"
                  onClick={() => handleNavClick(index)}
                >
                  <span className="nav-icon">{itemnav.icon}</span>
                  <span className="nav-title" style={{ color: activeNav === index ? 'white' : 'grey' }}>
                    {itemnav.title}
                  </span>
                </div>
              </div>
              {activeNav === index && itemnav.SubNav && (
                <div className="sub-nav">
                  {itemnav.SubNav.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link to={subItem.link} className="link">
                        <div
                          className="nav-item d-flex"
                          onClick={() => handleSubNavClick(subIndex)}
                        >
                          <span className="nav-icon">{subItem.icon}</span>
                          <span className="nav-title" style={{ color: activeSubNav === subIndex ? 'white' : 'grey' }}>
                            {subItem.title}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              {index === 1 && (
                <>
                  <div onClick={handleFinanceClick} className="nav-item d-flex align-items-center">
                    <span className="nav-title" style={{ color: activeFinance ? 'white' : 'grey' }}>Finance</span>
                  </div>
                  {activeFinance && itemnav.SubNav_Item && (
                    <div className="sub-nav-item">
                      {itemnav.SubNav_Item.map((subNavItem, subNavItemIndex) => (
                        <Link key={subNavItemIndex} to={subNavItem.link} className="link">
                          <div
                            className="nav-item d-flex"
                            onClick={() => SubNavItemsClick(subNavItemIndex)}
                          >
                            <span className="nav-icon">{subNavItem.icon}</span>
                            <span className="nav-title" style={{ color: activeSubNavItem === subNavItemIndex ? 'white' : 'grey' }}>
                              {subNavItem.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
              {index === 3 && (
                <>
                  <div onClick={handleReportClick} className="nav-item d-flex align-items-center">
                    <span className="nav-title" style={{ color: activeReport ? 'white' : 'grey' }}>Report</span>
                  </div>
                  {activeReport && itemnav.SubNav_Report && (
                    <div className="sub-nav-report">
                      {itemnav.SubNav_Report.map((subReport, reportIndex) => (
                        <Link key={reportIndex} to={subReport.link} className="link">
                          <div className="nav-item d-flex align-items-center">
                            <span className="nav-icon">{subReport.icon}</span>
                            <span className="nav-title" style={{ color: activeNav === reportIndex ? 'white' : 'grey' }}>
                              {subReport.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default SideNavBar;
