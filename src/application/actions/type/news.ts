import { createAction } from "@reduxjs/toolkit";
const GET_ALL_NEWS:any = createAction('get-all-news');
const NEWS_LOADING:any = createAction('news-loading');
const NEWS_ERROR:any= createAction('loading-error');

export {
  GET_ALL_NEWS,
  NEWS_LOADING,
  NEWS_ERROR
}