import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import OverView from '../overview/OverView';
import OrderOnline from '../order/OrderOnline';
import Reviews from '../reviews/Reviews';
import Photos from '../photos/Photos';
import Menu from '../menu/Menu';

function TabsPage() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="tabs-component"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="overview" title="Overview">
       <OverView/>
      </Tab>
      <Tab eventKey="order" title="Order Online">
        <OrderOnline/>
      </Tab>
      <Tab eventKey="reviews" title="reviews" >
        <Reviews/>
      </Tab>
      <Tab eventKey="photos" title="photos" >
      <Photos/>
      </Tab>

      <Tab eventKey="menu" title="Menu">
       <Menu/>
      </Tab>
    </Tabs>
  );
}

export default TabsPage;