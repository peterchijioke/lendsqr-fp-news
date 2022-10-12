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

storeData =  async (value:object) => {
  try {
    const jsonValue = JSON.stringify(value)
    // await AsyncStorage.setItem(storage_Key, jsonValue)
      await remoteConfig()
      .setDefaults({
        User: jsonValue,
      })

    return 'saved'
  } catch (e:any) {
     Crash().recordError(new Error(e.message));
        console.log(e)
    return 'error'
   
  }
}


 getData = async (key:string) : Promise<any>=>  {

 try {
          const User: any = await remoteConfig().getValue("User");
          console.log(User.asString());
          if (User.asString()) {
            return User.asString();
          } else {
            return null;
          }
        } catch (e: any) {
          console.error(e);
           Crash().recordError(new Error(e.message));
           return "error";
        }


}


}