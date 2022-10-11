import { StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import {text} from '../../../partials/Style'
import { Colors } from '../../../assets/colors/Colors'



const AppText = ({style,...props}:TextProps) => {
  return (
    <Text style={[styles.txt,style]} {...props}/>
  )
}

AppText.Body=(props:TextProps)=><AppText style={[styles.body]} {...props}/>
AppText.Title=(props:TextProps)=><AppText style={[styles.title]} {...props}/>
AppText.SubTitle=(props:TextProps)=><AppText style={[styles.subTitle]} {...props}/>
AppText.Error=(props:TextProps)=><AppText style={[styles.error]} {...props}/>
AppText.Button=(props:TextProps)=><AppText style={[styles.button]} {...props}/>
AppText.Google=(props:TextProps)=><AppText.Button style={[styles.google]} {...props}/>

export default AppText

const styles = StyleSheet.create({
  txt:{
    ...text.font,
    color:Colors.baseAncent
  },
  title:{
    fontSize:38,
    fontWeight:'bold'
    
  },
  body:{

  },
  subTitle:{
    fontWeight:'bold'
  }
,error:{
    color:Colors.primary,
    fontWeight:'bold',
  }

  ,button:{
          fontSize:14,
        }
        ,google:{
          fontSize:14,
          marginTop:'3%',
          marginLeft:'1%'
        }
  
})