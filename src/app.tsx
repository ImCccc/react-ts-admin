import { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Loading from '@/components/Loading';
import { initFontSize } from './utils/util';
import PageAuth from './components/PageAuth';
import routes, { RouteProps } from '@/config/routes';
import { HashRouter, Route, Routes } from 'react-router-dom';
import '@/styles/global.less';

initFontSize();

const getRoute = (routes: RouteProps[]) =>
  routes.map(({ children, path, Component, authority }) => (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<Loading />}>
          <PageAuth authority={authority}>
            <Component />
          </PageAuth>
        </Suspense>
      }
    >
      {children && getRoute(children)}
    </Route>
  ));

export default () => (
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Routes>{getRoute(routes)}</Routes>
    </HashRouter>
  </ConfigProvider>
);
