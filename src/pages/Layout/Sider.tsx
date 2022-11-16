import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMenus, MeunProps } from '@/config/routes';
import { observer } from 'mobx-react-lite';
import { useMobx } from '@/stores';
import { Menu } from 'antd';
import styles from './index.module.less';

const Comp: React.FC = () => {
  const User = useMobx('User');
  const KeepAliveRoute = useMobx('KeepAliveRoute');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const thisMenus = useMemo<any[]>(() => {
    const loop = (menus: MeunProps[]) => {
      return menus.filter((menu) => {
        const { authority, children, hidemenu } = menu;
        if (hidemenu) return false;
        if (authority && authority !== User.role) return false;
        if (children) menu.children = loop(children);
        return true;
      });
    };
    return loop(getMenus());
  }, [User.role]);

  const defaultOpenKeys = useMemo(
    () => thisMenus.map((v) => v.key),
    [thisMenus],
  );

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <div className={styles.menuwrap}>
      <div onClick={() => navigate('/')} className={styles.m_title}>
        语音标记平台
      </div>
      <Menu
        mode="inline"
        theme="dark"
        items={thisMenus}
        className={styles.menu}
        onClick={(e) => {
          navigate(e.key);
          KeepAliveRoute.remove();
        }}
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={selectedKeys}
      />
    </div>
  );
};

export default observer(Comp);
