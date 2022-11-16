import { Button, message } from 'antd';
import { useState, useRef, useCallback, useMemo } from 'react';
import TableList, {
  TableListRef,
  TableListColumns,
} from '@/components/TableList';
import TableSearch, { FieldsProps } from '@/components/TableSearch';
import ModalForm, {
  FormItemListProps,
  ImperativeHandleProps,
} from '@/components/ModalForm';
import {
  TaskServicePage,
  TaskServiceUpdate,
  TaskServiceCreate,
  TaskServiceDelete,
  TaskServiceHideStatus,
} from '@/services/smzx/TaskService';
import { taskAreaList } from '@/utils/globalData';

import useAuth from '@/hooks/useAuth';
import { observer } from 'mobx-react-lite';
import { AUTHORITY_ADMIN } from '@/config/constant';

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
  const modalFormRef = useRef<ImperativeHandleProps>(null);
  const [params, setParams] = useState<ParamsProps>({});
  const [initialValues, setInitialValues] = useState<SMZX.smzxTaskCreateReq>();

  const dataColumn = useAuth<any>(
    {
      [AUTHORITY_ADMIN]: [
        {
          label: '删除',
          confirmKey: 'name',
          callback: (row: any) => TaskServiceDelete({ code: row.code }),
        },
      ],
    },
    [],
  );

  const width = useAuth<any>({ [AUTHORITY_ADMIN]: 300 }, 200);

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
        width: width,
        ellipsis: false,
        operList: [
          {
            label: '编辑',
            callback: (row) => {
              setInitialValues({ ...row });
              modalFormRef.current?.showModal();
            },
          },
          {
            label: '切换状态',
            callback: async (row) => {
              row.hide = +!row.hide;
              await TaskServiceHideStatus({ code: row.code, hide: row.hide });
              tableRef.current?.refresh();
            },
          },
          ...dataColumn,
        ],
      },
    ],
    [dataColumn, width],
  );

  const onSubmit = useCallback(
    async (data: SMZX.smzxTaskUpdateReq) => {
      if (initialValues) {
        await TaskServiceUpdate(data);
        message.success('修改成功!');
      } else {
        await TaskServiceCreate(data);
        message.success('新增成功!');
      }
      tableRef.current?.refresh();
    },
    [initialValues],
  );

  const formItemList: FormItemListProps = useMemo(() => {
    return [
      {
        name: 'code',
        label: '任务代码',
        rules: [{ required: true, message: '请输入任务代码!' }],
        props: {
          disabled: !!initialValues,
          placeholder: '请输入任务代码',
        },
      },
      {
        name: 'name',
        label: '任务名称',
        rules: [{ required: true, message: '请输入任务名称!' }],
        props: { placeholder: '请输入任务名称' },
      },
      {
        name: 'area',
        type: 'Select',
        label: '区域',
        rules: [{ required: true, message: '请选选择区域!' }],
        props: {
          placeholder: '请选选择区域',
          options: taskAreaList,
        },
      },
      {
        name: 'map_id',
        label: '地图 Id',
        rules: [{ required: true, message: '请输入地图 Id!' }],
        props: { placeholder: '请输入地图 Id' },
      },
      {
        name: 'task_url',
        label: '任务模板',
        type: 'Upload',
        rules: [{ required: true, message: '请上传任务模板!' }],
        props: {
          accept: '.xlsx,',
          placeholder: '请上传任务模板',
          params: {
            bucket: 'smzx',
            object: 'task',
          },
        },
      },
      {
        name: 'url',
        label: '上传图片',
        type: 'Upload',
        rules: [{ required: true, message: '请上传图片!' }],
        props: {
          listType: 'picture-card',
          placeholder: '请上传图片',
          params: {
            bucket: 'smzx',
            object: 'task',
          },
        },
      },
    ];
  }, [initialValues]);

  const afterClose = useCallback(() => setInitialValues(undefined), []);

  return (
    <div className="common-page">
      <TableSearch
        className="margin-space"
        fields={fields}
        onSearch={onSearch}
        renderButtons={() => (
          <>
            <Button onClick={() => modalFormRef.current?.showModal()}>
              新增任务
            </Button>
            <ModalForm
              ref={modalFormRef}
              onSubmit={onSubmit}
              afterClose={afterClose}
              formItemList={formItemList}
              initialValues={initialValues}
              formProps={{ labelCol: { span: 5 } }}
              title={initialValues ? '编辑任务' : '新增任务'}
            ></ModalForm>
          </>
        )}
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
