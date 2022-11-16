import { useUpdate } from 'ahooks';
import { useLocation } from 'react-router-dom';
import React, { useRef, useEffect, memo, ReactNode } from 'react';

type KeepAliveProps = {
  cacheList: string[]; // 缓存的路由
  children: ReactNode; // 路由界面
};

const KeepAlive: React.FC<KeepAliveProps> = ({ cacheList = [], children }) => {
  const update = useUpdate();
  const activeKey = useRef('');
  const { pathname } = useLocation();
  const componentList = useRef(new Map<string, KeepAliveProps['children']>());

  useEffect(() => {
    Array.from(componentList.current).map(([key]) => {
      if (!cacheList.includes(key) && key !== pathname) {
        componentList.current.delete(key);
      }
    });

    activeKey.current = pathname;
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, children);
    }

    // 强制刷新界面
    update();
  }, [cacheList, children, pathname, update]);

  return (
    <>
      {Array.from(componentList.current).map(([key, component]) =>
        key == activeKey.current ? (
          <div key={key} className="layout-container-active">
            {component}
          </div>
        ) : (
          <div key={key} className="layout-container__keep-alive">
            {component}
          </div>
        ),
      )}
    </>
  );
};

export default memo(KeepAlive);
