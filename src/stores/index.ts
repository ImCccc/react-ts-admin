import User from './User';

export type StoreType = typeof stores;
export type UserExampleProps = typeof stores.User;

const stores = {
  User: new User(),
};

function useMobx<T extends keyof StoreType>(storeName: T) {
  return stores[storeName];
}

export { useMobx };
