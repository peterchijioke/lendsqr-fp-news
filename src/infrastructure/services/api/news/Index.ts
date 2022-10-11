 const url = 'https://newscatcher.p.rapidapi.com/v1/sources?'
   const GetNewsApi= async () => {
                    let params = new URLSearchParams({lang:'en'})
                    const response = await fetch(url+ params,{
                                    headers: {
                                            'X-RapidAPI-Key': '36fd4b0648mshe6ff39a9fff795ep19ff77jsna772ea0effce',
                                            'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
                                     }
                            }
                    );
                    return response
                
    }




    export  {
        GetNewsApi
    }
