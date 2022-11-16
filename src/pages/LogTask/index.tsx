import { useCallback, useRef, useState } from 'react';
import TableList, {
  TableListRef,
  TableListColumns,
} from '@/components/TableList';
import TableSearch from '@/components/TableSearch';
import {
  TaskRecordServicePage,
  TaskRecordServiceExport,
} from '@/services/smzx/TaskRecordService';
import { linkExport } from '@/utils/util';
import type { RangePickerProps } from 'antd/lib/date-picker';
import moment from 'moment';

// 不能选当天之后的日期
const disabledDate: RangePickerProps['disabledDate'] = (
  current: moment.Moment,
): boolean => {
  return current && current >= moment().endOf('day');
};

const disabledTime = () => {
  return true;
};

// 筛选项
const fields = [
  {
    label: '下发时间',
    type: 'RangePicker',
    placeholder: ['开始日期', '结束日期'],
    key: 'rangeTime',
    compProps: {
      disabledDate: disabledDate,
      disabledTime: disabledTime,
      showTime: {
        defaultValue: [
          moment('00:00:00', 'HH:mm:ss'),
          moment('23:59:59', 'HH:mm:ss'),
        ],
        hideDisabledOptions: true,
      },
    },
  },
];

const Comp: React.FC = () => {
  // 筛选值
  const [filterValue, setFilterValue] = useState<Record<string, any>>({});
  // 子组件的ref，可以调用子组件的方法
  const tableRef = useRef<TableListRef>();

  // 点击查询
  const onSearch = useCallback((data: any) => {
    if (data.rangeTime) {
      setFilterValue({
        start_time: data.rangeTime[0],
        end_time: data.rangeTime[1],
      });
    } else {
      setFilterValue({});
    }
  }, []);

  // 点击重置
  const onReset = () => {
    setFilterValue({});
  };

  // 表格列
  const columns: TableListColumns<SMZX.smzxTaskRecord> = [
    {
      title: '任务ID',
      dataIndex: 'id',
    },
    {
      title: '任务名称',
      dataIndex: 'name',
    },
    {
      title: '下发时间',
      dataIndex: 'start_time',
      timeFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      title: '结束时间',
      dataIndex: 'finish_time',
      timeFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      title: '执行结果',
      dataIndex: 'task_status',
      render: (text) => (
        <span>
          {text === 0 && '已发送'}
          {text === 1 && '执行中'}
          {text === 2 && '失败'}
          {text === 3 && '成功'}
        </span>
      ),
    },
    {
      title: '错误原因',
      dataIndex: 'err',
    },
    {
      width: 120,
      ellipsis: false,
      operList: [
        {
          label: '导出',
          callback: ({ id }) =>
            TaskRecordServiceExport({ id }).then((v) => linkExport(v.file_url)),
        },
      ],
    },
  ];

  return (
    <div className="common-page">
      <TableSearch
        fields={fields}
        onReset={onReset}
        onSearch={onSearch}
        className="margin-space"
      />
      <TableList
        onRef={tableRef}
        columns={columns}
        reqParams={filterValue}
        service={TaskRecordServicePage}
        pagination={{ showQuickJumper: true }}
      />
    </div>
  );
};

export default Comp;
