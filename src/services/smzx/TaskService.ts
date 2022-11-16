/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  TaskServiceCreate = '/rpc/smzx.smzx/TaskService.Create',
  TaskServiceDelete = '/rpc/smzx.smzx/TaskService.Delete',
  TaskServiceDispatchSetStatus = '/rpc/smzx.smzx/TaskService.DispatchSetStatus',
  TaskServiceDispatchStartGroup = '/rpc/smzx.smzx/TaskService.DispatchStartGroup',
  TaskServiceHideStatus = '/rpc/smzx.smzx/TaskService.HideStatus',
  TaskServiceList = '/rpc/smzx.smzx/TaskService.List',
  TaskServicePage = '/rpc/smzx.smzx/TaskService.Page',
  TaskServiceStart = '/rpc/smzx.smzx/TaskService.Start',
  TaskServiceStop = '/rpc/smzx.smzx/TaskService.Stop',
  TaskServiceUpdate = '/rpc/smzx.smzx/TaskService.Update'
}

/** 创建任务 POST /rpc/smzx.smzx/TaskService.Create */
export async function TaskServiceCreate(
  body: SMZX.smzxTaskCreateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskCreateResp>('/rpc/smzx.smzx/TaskService.Create', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除任务 POST /rpc/smzx.smzx/TaskService.Delete */
export async function TaskServiceDelete(
  body: SMZX.smzxTaskDeleteReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskDeleteResp>('/rpc/smzx.smzx/TaskService.Delete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调度任务组状态 POST /rpc/smzx.smzx/TaskService.DispatchSetStatus */
export async function TaskServiceDispatchSetStatus(
  body: SMZX.smzxTaskDispatchSetStatusReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskDispatchSetStatusResp>('/rpc/smzx.smzx/TaskService.DispatchSetStatus', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调度开始任务组 POST /rpc/smzx.smzx/TaskService.DispatchStartGroup */
export async function TaskServiceDispatchStartGroup(
  body: SMZX.smzxTaskDispatchStartGroupReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskDispatchStartGroupResp>('/rpc/smzx.smzx/TaskService.DispatchStartGroup', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置隐藏状态 POST /rpc/smzx.smzx/TaskService.HideStatus */
export async function TaskServiceHideStatus(
  body: SMZX.smzxTaskHideStatusReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskHideStatusResp>('/rpc/smzx.smzx/TaskService.HideStatus', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 所有任务列表 POST /rpc/smzx.smzx/TaskService.List */
export async function TaskServiceList(
  body: Record<string, any>,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskListResp>('/rpc/smzx.smzx/TaskService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /rpc/smzx.smzx/TaskService.Page */
export async function TaskServicePage(
  body: SMZX.smzxTaskPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskPageResp>('/rpc/smzx.smzx/TaskService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 开始任务 POST /rpc/smzx.smzx/TaskService.Start */
export async function TaskServiceStart(
  body: SMZX.smzxTaskStartReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskStartResp>('/rpc/smzx.smzx/TaskService.Start', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 停止任务 POST /rpc/smzx.smzx/TaskService.Stop */
export async function TaskServiceStop(
  body: SMZX.smzxTaskStopReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskStopResp>('/rpc/smzx.smzx/TaskService.Stop', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /rpc/smzx.smzx/TaskService.Update */
export async function TaskServiceUpdate(
  body: SMZX.smzxTaskUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskUpdateResp>('/rpc/smzx.smzx/TaskService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

