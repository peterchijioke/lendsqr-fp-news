import crashlytics from "@react-native-firebase/crashlytics";
import  Config from "../../../../../Config";
import perf from '@react-native-firebase/perf';

 const url = Config.base_url+'search_free?'
   const GetNewsApi= async () => {

                      // Define the network metric
                    const metric = await perf().newHttpMetric(url, 'GET');

                    // Define meta details
                    metric.putAttribute('News', 'All News');

                    // Start the metric
                    await metric.start();

                              let params = new URLSearchParams({q: 'Elon Musk', lang: 'en', media: 'True'})
                             try {
                               const response:any = await fetch(url+ params,{
                                   headers: {
                                  'X-RapidAPI-Key': `${Config.api_key}`,
                                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' }});
                                  metric.setHttpResponseCode(response.status);
                                  metric.setResponseContentType(response.headers.get('Content-Type'));
                                  metric.setResponsePayloadSize(response.headers.get('Content-Length'));
                                        // Stop the metric
                                        await metric.stop();

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
