import React, { ReactElement } from 'react';
import Page403 from '@/pages/403';
import { useMobx } from '@/stores';
import { observer } from 'mobx-react-lite';
import { AuthorityType } from '@/config/constant';

type PageAuthProps = {
  children: ReactElement; // 页面路由
  authority?: AuthorityType; // 菜单配置中的 authority
};

const Comp: React.FC<PageAuthProps> = ({ children, authority }) => {
  const User = useMobx('User');
  if (!authority) return children;
  return User.role === authority ? children : <Page403 />;
};

export default observer(Comp);
