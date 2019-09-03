

import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
import {connect} from "react-redux"
import { getAllNews } from '../../store/actions/news.actions';

 class NewsComponent extends Component {     
  componentDidMount(){
   this.props.dispatch(getAllNews())
  }
  render() {    
    return (
      <View>
          <Text> The News Components</Text>
      </View>   
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});


const mapStateToProps=state=>{
  return{
    News:state.News
  }
}

export default connect(mapStateToProps)(NewsComponent)