export const LOGIN_PATH = '/login';

export const TABLE_OFFET_TOP = 220;

export const AUTHORITY_ADMIN = 'admin';
export const AUTHORITY_MEMBER = 'member';
export const AUTHORITY_LEADER = 'leader';

export type AuthorityAdminType = typeof AUTHORITY_ADMIN;
export type AuthorityMemberType = typeof AUTHORITY_MEMBER;
export type AuthorityLeaderType = typeof AUTHORITY_LEADER;

export type AuthorityType =
  | AuthorityAdminType
  | AuthorityMemberType
  | AuthorityLeaderType;
