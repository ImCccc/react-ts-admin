/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  TenantMgrTenantCreate = '/rpc/platform-iam/TenantMgr.TenantCreate',
  TenantMgrTenantDelete = '/rpc/platform-iam/TenantMgr.TenantDelete',
  TenantMgrTenantEdit = '/rpc/platform-iam/TenantMgr.TenantEdit',
  TenantMgrTenantInfo = '/rpc/platform-iam/TenantMgr.TenantInfo',
  TenantMgrTenantList = '/rpc/platform-iam/TenantMgr.TenantList'
}

/** 新建租户 POST /rpc/platform-iam/TenantMgr.TenantCreate */
export async function TenantMgrTenantCreate(
  body: PLATFORM.platformIamTenantCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamTenantCreateResponse>('/rpc/platform-iam/TenantMgr.TenantCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除租户 POST /rpc/platform-iam/TenantMgr.TenantDelete */
export async function TenantMgrTenantDelete(
  body: PLATFORM.platformIamTenantDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamTenantDeleteResponse>('/rpc/platform-iam/TenantMgr.TenantDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑租户 POST /rpc/platform-iam/TenantMgr.TenantEdit */
export async function TenantMgrTenantEdit(
  body: PLATFORM.platformIamTenantEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamTenantEditResponse>('/rpc/platform-iam/TenantMgr.TenantEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 租户详情 POST /rpc/platform-iam/TenantMgr.TenantInfo */
export async function TenantMgrTenantInfo(
  body: PLATFORM.platformIamTenantInfoRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamTenantInfoResponse>('/rpc/platform-iam/TenantMgr.TenantInfo', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 租户列表查询 POST /rpc/platform-iam/TenantMgr.TenantList */
export async function TenantMgrTenantList(
  body: PLATFORM.platformIamTenantListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamTenantListResponse>('/rpc/platform-iam/TenantMgr.TenantList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

