import {GetNewsApi} from './src/infrastructure/services/api/news/Index'




jest.mock('./src/infrastructure/services/api/news/Index');


console.log(GetNewsApi)
test('check function',()=>{
  
})

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('./src/partials/Helper',()=>{

})