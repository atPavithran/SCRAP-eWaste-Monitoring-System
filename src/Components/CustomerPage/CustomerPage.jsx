import React from 'react';
import SidebarForCustomer from './SidebarForCustomer';
import Calendar from '../FrequentlyUsed/Calendar';
import LineGraph from '../FrequentlyUsed/ProgressGraph';

const CustomerPage = () => {
  return (
    <div>
      <div className='Linegraph'>
        <LineGraph />
      </div>
      <div className='sidebar-for-customer'>
        <SidebarForCustomer />
      </div>
      <div className='calendar-in-dashboard'>
        <Calendar />
      </div>
    </div>
  );
};

export default CustomerPage;
