import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，您访问的页面不存在。"
    extra={
      <Link to="/">
        <Button type="primary">返回主页</Button>
      </Link>
    }
  />
);

export default App;
