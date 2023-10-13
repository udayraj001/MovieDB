import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let content;
  if (activeTab === 'tab1') {
    content = <Tab1 />;
  } else if (activeTab === 'tab2') {
    content = <Tab2 />;
  } else if (activeTab === 'tab3') {
    content = <Tab3 />;
  }

  return (
    <div>
      <div className="tabs">
        <div className={activeTab === 'tab1' ? 'active-tab' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</div>
        <div className={activeTab === 'tab2' ? 'active-tab' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</div>
        <div className={activeTab === 'tab3' ? 'active-tab' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</div>
      </div>
      <div className="tab-content">{content}</div>
    </div>
  );
};

export default Tabs;