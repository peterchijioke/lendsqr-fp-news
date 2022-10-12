import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment'
import remoteConfig from '@react-native-firebase/remote-config';
import Crash from '@react-native-firebase/crashlytics'
export default class Helper {

 textTrucate = function (str:string, length=100, ending=`...Read more`):string {
  if (str?.length > length) {
    return str?.substring(0, length - ending?.length);
  } else {
    return str;
  }
};

// format date

formatDate = (date:string) => {
  moment.locale("en");
  return moment.parseZone(date).format("MMMM d, YYYY");
};

// check email
validateEmail = (email:string):boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

// store user data in storage 

storeData =  async (value:any,storage_Key:string) => {
  try {
    const jsonValue = JSON.stringify(value)
    // await AsyncStorage.setItem(storage_Key, jsonValue)
      await remoteConfig()
      .setDefaults({
        User: jsonValue,
      })

    return 'saved'
  } catch (e:any) {
     Crash().recordError(e);
        console.log(e)
    return 'error'
   
  }
}


 getData = async (storage_Key:string) => {
  remoteConfig().fetch().then(()=>remoteConfig().activate()).then((activated)=>{
    if (activated) {
      return remoteConfig().getValue('User')
    }else{
       Crash().log("No active user");
        console.log("No active user ")
    }
  }).then((data)=>{
        const result = data?.asString()
        console.log(result)
  })

  // try {
  //   const value = await AsyncStorage.getItem(storage_Key)
  //   if(value !== null) {
  //     return JSON.parse(value)
  //   }else{
  //     return null
  //   }
  // } catch(e) {
  //   return `error`
  // }





}


}