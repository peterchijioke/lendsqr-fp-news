import {configureStore} from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import Services from '../infrastructure/services/api/Services';

import customMiddleware from './middleware/index';
import news from './reducers/news/news';
import ui from './reducers/news/ui';


type Data = ()=>{}
const middleware:any= [...customMiddleware]
let reducer = {
  news,
  ui
};

const store = configureStore({
  reducer,
  middleware
})
export default store;
