import request from '../util/request';


export default {
  namespace: 'pet',

  state:{

  },
  reducers:{
    setData(state,{payload}){
      return { data: payload};
    },
  },
  effects:{
    *fetchData({payload},{call,put}){
      const response = yield call(request,'/api/fetchPetData');
      yield put({type:'setData',payload:response})
    },
  },

}
