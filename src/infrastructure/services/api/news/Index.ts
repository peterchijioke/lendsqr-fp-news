import  Config from "../../../../../Config";

 const url = Config.base_url+'search_free?'
   const GetNewsApi= async () => {
                    let params = new URLSearchParams({q: 'Elon Musk', lang: 'en', media: 'True'})
                    const response = await fetch(url+ params,{
                                   headers: {
                                  'X-RapidAPI-Key': `${Config.api_key}`,
                                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
                            }
                    );
                    return response
                
    }




    export  {
        GetNewsApi
    }
