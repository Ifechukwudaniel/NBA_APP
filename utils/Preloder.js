import React from 'react';
import {View, ActivityIndicator, StyleSheet} from "react-native"
 
const Preloader  = () => {
    return (
            <View style={styles.loading}>
               <ActivityIndicator size="large"/>
            </View>
          )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#1d428a',
       padding:40
    },
    loading:{
       flex:1,
       justifyContent:"center",
       alignSelf:"center"
    }
  });
  
export default Preloader ;