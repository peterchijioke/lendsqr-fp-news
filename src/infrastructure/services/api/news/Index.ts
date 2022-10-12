import crashlytics from "@react-native-firebase/crashlytics";
import  Config from "../../../../../Config";

 const url = Config.base_url+'search_free?'
   const GetNewsApi= async () => {
                              let params = new URLSearchParams({q: 'Elon Musk', lang: 'en', media: 'True'})
                             try {
                               const response = await fetch(url+ params,{
                                   headers: {
                                  'X-RapidAPI-Key': `${Config.api_key}`,
                                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' }});
                                return response
                             } catch (error:any) {
                              crashlytics().recordError(error.message)
                              console.log(error.message)
                             }   
                                  // return response
             }

    export  {
        GetNewsApi
    }
