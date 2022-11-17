import { useMobx } from '@/stores';
import { useOutlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HeaderDropdown from './HeaderDropdown';
import styles from './index.module.less';
import KeepAlive from '@/components/KeepAlive';
import Breadcrumb from './Breadcrumb';

const Comp: React.FC = () => {
  const outlet = useOutlet();
  const User = useMobx('User');
  // 缓存的路由
  const KeepAliveRoute = useMobx('KeepAliveRoute');
  return (
    <div className={styles.content}>
      <div className={styles.c_header}>
        <Breadcrumb />
        <div className="flex">
          <a onClick={() => (User.role = 'leader')}>队长</a>
          <div style={{ width: '30px' }}></div>
          <a onClick={() => (User.role = 'admin')}>管理员</a>
        </div>
        <HeaderDropdown />
      </div>
      <KeepAlive cacheList={KeepAliveRoute.cacheList}>{outlet}</KeepAlive>
    </div>
  );
};

export default observer(Comp);
