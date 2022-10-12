
import { GET_ALL_NEWS, NEWS_ERROR, NEWS_LOADING } from "../../actions/type/news";
import crashlytics from "@react-native-firebase/crashlytics";
import { GetNewsApi } from "../../../infrastructure/services/api/news/Index";

const loadNewsFlow:any= ({ dispatch }) => (next)=>
        async (action) => {
            next(action)
            if (action.type===NEWS_LOADING.type) {
                try {
                    const news:any =  await GetNewsApi()
                    let data = await news.json()
                    dispatch(GET_ALL_NEWS(data));
                } catch (error:any) {
                    dispatch(NEWS_ERROR(error.message));
                    console.error(error.message)
                    crashlytics().recordError(error.message)
                }
            }
        }



type Data=()=>{}
const data:Array<Data> = [
    loadNewsFlow
]
export default data