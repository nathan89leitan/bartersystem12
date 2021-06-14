import React, { Component} from 'react';
import { Header,Badge,Icon } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase';
export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      userId : firebase.auth().currentUser.email,value:""
    }
  }
getNumberOfUnreadNotifications(){
  db.collection('all_notifications').where('notification_status','==',"unread").where('targeted_user_id','==',this.state.userId)
  .onSnapshot((snapshot)=>{
    var unreadNotifications = snapshot.docs.map((doc) => doc.data())
    this.setState({
      value: unreadNotifications.length
    })
  })
}
componentDidMount(){
  this.getNumberOfUnreadNotifications()
}

 bellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='#orange' size={30}
          onPress={() =>this.props.navigation.navigate('notification')}/>
         <Badge
          value={this.state.value}
        /* containerStyle={{ position: 'absolute', top: -4, right: -4 }}*//>
      </View>
    )
  }
  render(){
    return(
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: 'yellow', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<this.bellIconWithBadge {...this.props}/>}
          backgroundColor = "tan"
        />

)
}

}