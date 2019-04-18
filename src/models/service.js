import request from '../util/request';

export default {
  namespace: 'service',

  state:{

  },
  reducers:{
    setData(state,{payload}){
      return { data: payload};
    },
  },
  effects:{
    *fetchData({payload},{call,put}){
      const response = yield call(request,'/api/fetchServiceData');
      yield put({type:'setData',payload:response})
    },
  },

}
