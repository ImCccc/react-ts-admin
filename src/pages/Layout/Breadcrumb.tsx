import { breadcrumbData } from '@/config/routes';
import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.less';

type BreadcrumbProps = { label: string; path: string };

const Comp: React.FC = () => {
  const { pathname } = useLocation();
  const [list, setList] = useState<BreadcrumbProps[]>([]);

  useEffect(() => {
    const paths = pathname.slice(1).split('/');
    setList(
      paths.reduce<BreadcrumbProps[]>((data, cur, index) => {
        const path = index ? `${data[index - 1].path}/${cur}` : `/${cur}`;
        const label = breadcrumbData[path] || '';
        data.push({ path, label });
        return data;
      }, []),
    );
  }, [pathname]);

  return (
    <div>
      {list.map((v, index) => (
        <Fragment key={v.path}>
          {index ? <Link to={v.path}>{v.label}</Link> : v.label}
          {index !== list.length - 1 && (
            <span className={styles.spacing}>/</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Comp;
