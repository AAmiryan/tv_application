import React from 'react';
import { ConfigProvider } from 'antd';

import 'antd/dist/reset.css';
import { antTheme } from './assets/antd';
import Home from './pages/Home';
const App: React.FC = () => {
  return (
    <ConfigProvider theme={antTheme}>
      <Home />
    </ConfigProvider>
  );
};

export default App;
