import { lazy } from 'react';
import { AuthorityType } from '@/config/constant';
import MeunIcon from '@/components/MeunIcon';

export type MeunProps = {
  label: string; // 菜单名称
  key?: string; // 路由路径
  icon?: JSX.Element;
  children?: MeunProps[]; // 子菜单
  hidemenu?: boolean; // 菜单是否隐藏, 通常详情页面需要设置为 true
  authority?: AuthorityType; // 值是角色, 用于指定哪个角色才能访问页面
};

export type RouteProps = {
  path: string; // 路由路径
  Component: React.LazyExoticComponent<React.FC>;
  authority?: AuthorityType; // 值是角色, 用于指定哪个角色才能访问页面
  isHomepage?: boolean; // 是否主页
  children?: RouteProps[];
};

export type RouteMenuProps = Partial<RouteProps> &
  MeunProps & { children?: RouteMenuProps[] };

const loginRoute = {
  path: '/login',
  Component: lazy(() => import('@/pages/Login')),
};

const route404 = {
  path: '*',
  Component: lazy(() => import('@/pages/404')),
};

const routeMenuList: RouteMenuProps[] = [
  {
    label: '设备管理',
    path: '/device',
    icon: <MeunIcon icon="icon_yingyong" />,
    children: [
      {
        label: '机器人管理',
        path: '/device/agv',
        authority: 'admin',
        Component: lazy(() => import('@/pages/DeviceAgv')),
      },
    ],
  },
  {
    label: '任务管理',
    path: '/task',
    icon: <MeunIcon icon="icon_renwu" />,
    children: [
      {
        label: '任务列表',
        path: '/task/index',
        isHomepage: true,
        Component: lazy(() => import('@/pages/Task')),
      },
      {
        label: '任务记录',
        path: '/task/log',
        authority: 'admin',
        Component: lazy(() => import('@/pages/LogTask')),
      },
    ],
  },
  {
    label: '测试',
    path: '/test',
    hidemenu: true,
    Component: lazy(() => import('@/pages/Test')),
  },
];

export const getRoutes = (routeMenuList: RouteMenuProps[]): RouteProps[] => {
  const routes: RouteProps[] = [];
  // 用于缓存主页的路由配置
  const homeRoute: RouteProps[] = [];
  const loop = (routeMenuList: RouteMenuProps[]) => {
    routeMenuList.forEach((route) => {
      const { children, path, Component, authority, isHomepage } = route;
      if (Component && isHomepage) homeRoute.push({ path: '/', Component });
      if (Component && path) routes.push({ path, Component, authority });
      if (children) loop(children);
    }, routes);
  };
  loop(routeMenuList);
  return [
    loginRoute,
    {
      path: '/',
      Component: lazy(() => import('@/pages/Layout')),
      children: [...homeRoute, ...routes, route404],
    },
    route404,
  ];
};

export const getMenus = (list = routeMenuList): MeunProps[] =>
  list.map((item) => {
    const { children, path, label, icon, authority, hidemenu } = item;
    return {
      icon,
      label,
      hidemenu,
      key: path,
      authority,
      children: children ? getMenus(children) : undefined,
    };
  });

export const getBreadcrumbData = () => {
  const breadcrumbData: { [key: string]: string } = {};
  const loop = (routeMenuList: RouteMenuProps[]) => {
    routeMenuList.forEach((route) => {
      const { children, path, label } = route;
      if (path) breadcrumbData[path] = label;
      if (children) loop(children);
    });
  };
  loop(routeMenuList);
  return breadcrumbData;
};

export const breadcrumbData = getBreadcrumbData();

export default getRoutes(routeMenuList);
