import * as React from 'react';

// Containers
import ArmorSearch from './containers/ArmorSearch';
import CharmConfig from './containers/CharmConfig';

// Components
import { Layout, Tabs, Button } from 'antd';

// Styles
import 'antd/dist/antd.css';

export default function App() {
  return (
    <Layout>
      <Layout.Header>MHRise Armor Set Search</Layout.Header>
      <Layout.Content>
        <Tabs>
          <Tabs.TabPane tab="Search" key="1">
            <ArmorSearch />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chamrs" key="2">
            <CharmConfig />
          </Tabs.TabPane>
        </Tabs>
      </Layout.Content>
    </Layout>
  );
}
