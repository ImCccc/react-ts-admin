import { useMobx } from '@/stores';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HeaderDropdown from './HeaderDropdown';
import styles from './index.module.less';

const Comp: React.FC = () => {
  const User = useMobx('User');
  return (
    <div className={styles.content}>
      <div className={styles.c_header}>
        <div className="flex">
          <a onClick={() => (User.role = 'leader')}>队长</a>
          <div style={{ width: '30px' }}></div>
          <a onClick={() => (User.role = 'admin')}>管理员</a>
        </div>
        <HeaderDropdown />
      </div>
      <Outlet />
    </div>
  );
};

export default observer(Comp);
