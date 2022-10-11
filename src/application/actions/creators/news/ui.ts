const NewsLoading= (state:any, action:any) => {

    return {
      ...state,
      newsloading: action.payload,
    };
  }


  const NewsError= (state:any, action:any) => {
    return {
      ...state,
      error: action.payload,
    };
  }



export {
  NewsLoading,
  NewsError
}