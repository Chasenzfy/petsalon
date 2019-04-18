import request from '../util/request';
import * as ownerService from '../pages/owner/index';

export default {
  namespace: 'owner',

  state:{

  },
  reducers:{
    setData(state,{payload}){
      return { data: payload};
    },
    save(state, { payload: {} }) {
      return { ...state };
    },
    },
  effects:{
    *fetchData({payload},{call,put}){
      const response = yield call(request,'/api/fetchOwnerData');
      //const response = yield call(request,'/api/owners/all');
      yield put({type:'setData',payload:response})
    },

    *fetch(_,{call,put}){
      const response = yield call(request, '/api/fetch');
      console.log(response);
      yield put({type: 'save',payload:{photo:"clothes"}});
    },

    *remove({ payload: id }, { call, put, select }) {
      yield call(ownerService.remove, id);
      yield put({ type: 'reload'});
    },

    *create({ payload: values }, { call, put }) {
      yield call(ownerService.create, values);
      yield put({ type: 'reload' });
    },
  },

}
