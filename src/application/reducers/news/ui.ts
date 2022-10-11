import {createAction, createReducer} from '@reduxjs/toolkit';
export let NEWS_LOAD:any = createAction('news-loading');
type InitialStateStructure={
  newsloading:boolean
}


const initialState:InitialStateStructure = {
  newsloading:false
};


const uiReducer = createReducer(initialState, builder => {
  builder.addCase(NEWS_LOAD,(state:any, action:any) => {
    return {
      ...state,
      newsloading: action.payload,
    };
  });
});


export default uiReducer;
