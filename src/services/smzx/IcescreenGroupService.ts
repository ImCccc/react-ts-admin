/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  IcescreenGroupServiceList = '/rpc/smzx.smzx/IcescreenGroupService.List',
  IcescreenGroupServicePlay = '/rpc/smzx.smzx/IcescreenGroupService.Play',
  IcescreenGroupServiceStopPlay = '/rpc/smzx.smzx/IcescreenGroupService.StopPlay'
}

/** 冰屏组列表 POST /rpc/smzx.smzx/IcescreenGroupService.List */
export async function IcescreenGroupServiceList(
  body: SMZX.smzxIcescreenGroupListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenGroupListResp>('/rpc/smzx.smzx/IcescreenGroupService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏组播放 播放后拉取列表 POST /rpc/smzx.smzx/IcescreenGroupService.Play */
export async function IcescreenGroupServicePlay(
  body: SMZX.smzxIcescreenGroupPlayReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenGroupPlayResp>('/rpc/smzx.smzx/IcescreenGroupService.Play', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏视频停止播放 停止后拉取列表 POST /rpc/smzx.smzx/IcescreenGroupService.StopPlay */
export async function IcescreenGroupServiceStopPlay(
  body: SMZX.smzxIcescreenGroupStopPlayReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenGroupStopPlayResp>('/rpc/smzx.smzx/IcescreenGroupService.StopPlay', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

