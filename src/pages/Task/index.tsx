import { useState, useRef, useMemo } from 'react';
import TableList, {
  TableListRef,
  TableListColumns,
} from '@/components/TableList';
import TableSearch, { FieldsProps } from '@/components/TableSearch';
import { TaskServicePage } from '@/services/smzx/TaskService';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useMobx } from '@/stores';

type ParamsProps = { product_id?: string };

const fields: FieldsProps = [
  {
    label: '任务名称',
    key: 'name',
    placeholder: '请输入任务名称',
  },
];

const Comp: React.FC = () => {
  const tableRef = useRef<TableListRef>();
  const [params, setParams] = useState<ParamsProps>({});
  const navigate = useNavigate();
  const KeepAliveRoute = useMobx('KeepAliveRoute');

  // 点击查询
  const onSearch = (data: ParamsProps) => {
    setParams({ ...data });
  };

  const columns = useMemo<TableListColumns<SMZX.smzxTaskDetail>>(
    () => [
      {
        title: '任务名称',
        dataIndex: 'name',
      },
      {
        width: 200,
        title: '当前状态',
        dataIndex: 'hide',
        render: (hide) => (hide === 1 ? '隐藏' : '显示'),
      },
      {
        ellipsis: false,
        operList: [
          {
            label: '编辑',
            callback: () => {
              KeepAliveRoute.addCacheRoute();
              navigate('/test');
            },
          },
        ],
      },
    ],
    [KeepAliveRoute, navigate],
  );

  return (
    <div className="common-page">
      <TableSearch
        className="margin-space"
        fields={fields}
        onSearch={onSearch}
      />
      <TableList
        rowKey="code"
        onRef={tableRef}
        columns={columns}
        reqParams={params}
        service={TaskServicePage}
      />
    </div>
  );
};

export default observer(Comp);
