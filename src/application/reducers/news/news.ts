import {createReducer} from '@reduxjs/toolkit';
import { GET_ALL_NEWS, NEWS_ERROR, NEWS_LOADING} from '../../actions/type/news'
import { GetAllNews} from '../../actions/creators/news/news'
import { NewsError, NewsLoading } from '../../actions/creators/news/ui';

type InitialStateStructure={
  error:any
  allNews:[]
}
const initialState:InitialStateStructure = {
 error:null,
 allNews:[]
};

const Quote = createReducer(initialState, builder => {
  builder.addCase(GET_ALL_NEWS,GetAllNews);
  builder.addCase(NEWS_ERROR,NewsError);
});

export default Quote;
