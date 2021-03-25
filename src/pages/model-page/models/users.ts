/*  eslint no-param-reassign: "off" */
import { getUsers, getUser } from '@/service/users';
import { Subscription, Effect, ImmerReducer } from 'umi';

type UsersState = {
  list?: API.User[];
  detail?: API.User;
};

type ModelType = {
  namespace: string;
  state: UsersState;
  effects: {
    fetch: Effect;
    get: Effect;
  };
  reducers: {
    list: ImmerReducer<UsersState>;
    detail: ImmerReducer<UsersState>;
  };
  subscriptions: {
    setup: Subscription;
  };
};

const GlobalModal: ModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    list(state = {}, { payload: { list } }) {
      state.list = list;
    },
    detail(state = {}, { payload: { detail } }) {
      state.detail = detail;
    },
  },
  effects: {
    *fetch({ payload = {} }, { call, put }) {
      const { value: list } = yield call(getUsers, payload);
      yield put({ type: 'list', payload: { list } });
    },
    *get({ payload: { userId } }, { call, put }) {
      const { value: detail } = yield call(getUser(userId));
      yield put({ type: 'detail', payload: { detail } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/model-page') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

export default GlobalModal;
