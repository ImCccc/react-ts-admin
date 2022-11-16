import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="抱歉，您无权访问此页面。"
    extra={
      <Link to="/">
        <Button type="primary">返回主页</Button>
      </Link>
    }
  />
);

export default App;
