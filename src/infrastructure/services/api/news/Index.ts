import  Config from "../../../../../Config";

 const url = 'https://newscatcher.p.rapidapi.com/v1/search_free?'
   const GetNewsApi= async () => {
                              let params = new URLSearchParams({q: 'Elon Musk', lang: 'en', media: 'True'})
                          
                               fetch(url+ params,{
                                   headers: {
                                  'X-RapidAPI-Key': `36fd4b0648mshe6ff39a9fff795ep19ff77jsna772ea0effce`,
                                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' }}).then(res=>res.json()).then((response)=>{
                                        console.log(response)
                                  }).catch(e=>console.log("=============",e))
                                  
                              // return response
             }


    export  {
        GetNewsApi
    }
