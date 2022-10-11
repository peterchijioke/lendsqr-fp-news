const GetAllNews= (state:any, action:any) => {
    return {
      ...state,
      allNews: action.payload,
    };
  }



export {
  GetAllNews
}