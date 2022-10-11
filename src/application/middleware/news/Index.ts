
import { GET_ALL_NEWS, NEWS_ERROR, NEWS_LOADING } from "../../actions/type/news";
import { Action } from "@reduxjs/toolkit";
import { GetNewsApi } from "../../../infrastructure/services/api/news/Index";

const loadNewsFlow:any= ({ dispatch }) => (next)=>
        async (action) => {
            next(action)
            if (action.type===NEWS_LOADING.type) {
                try {
                    const news =  await GetNewsApi()
                    let data = await news.json()
                    dispatch(GET_ALL_NEWS(data));
                } catch (error) {
                    dispatch(NEWS_ERROR(error));
                    console.error(error)
                }
            }
        }



type Data=()=>{}
const data:Array<Data> = [
    loadNewsFlow
]
export default data