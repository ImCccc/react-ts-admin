import { AuthorityType } from '@/config/constant';
import { makeAutoObservable } from 'mobx';

const getAuthority = () => {
  return (localStorage.getItem('__AuthorityType__') ||
    'admin') as AuthorityType;
};

class User {
  thisRole = getAuthority();

  constructor() {
    makeAutoObservable(this);
  }

  get role() {
    return this.thisRole;
  }

  set role(role: AuthorityType) {
    localStorage.setItem('__AuthorityType__', role);
    this.thisRole = role;
  }
}

export default User;
