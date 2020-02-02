//import userSrv from '@/services/userSrv';

import {  query as queryUsers } from '@/services/userSrv';
const UserModel = {
    namespace: 'User',
    state:{
        UserInfo:{
            username:"张三1"
        }
    },
    reducers:{
        updateUserState(state,action)
        {
            let currentUser=state.UserInfo;
            console.log("CurrentUser:"+currentUser);
            console.log(currentUser);
            console.log("CurrentUserPayload:")
            console.log(action.payload.UserInfo);
            //state.UserInfo.username=action.payload.UserInfo.username;这样写不会自动刷新
            //state=action.payload;
            //return state;
            return { ...state,UserInfo:action.payload.UserInfo} 
        }
    },
    effects:
    {
        *getUserInfo(_, { call, put }) {
            const response = yield call(queryUsers);
            //yield console.log(response.data);
            yield put({
              type: 'User/updateUserState',
              payload: response.data,
            });
          }
        
    }
};
export default UserModel;