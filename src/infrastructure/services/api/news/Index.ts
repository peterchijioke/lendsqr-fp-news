import  Config from "../../../../../Config";

 const url = 'https://newscatcher.p.rapidapi.com/v1/search_free?'
   const GetNewsApi= async () => {
                              let params = new URLSearchParams({q: 'Elon Musk', lang: 'en', media: 'True'})
                             try {
                               const response = await fetch(url+ params,{
                                   headers: {
                                  'X-RapidAPI-Key': `36fd4b0648mshe6ff39a9fff795ep19ff77jsna772ea0effce`,
                                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' } });

                                  console.log(response.json())
                             } catch (error) {
                              console.log(error)
                             }
                                  
                                  // return response

             }


    export  {
        GetNewsApi
    }
