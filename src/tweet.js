import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets'
// var Timeline = require('react-twitter-widgets').Timeline
 

class TwitterFeed extends Component {

render() {
  return(
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'thegailproject'
      }}
      options={{
        username: 'TwitterDev',
        height: '300',
        width: '300',
        align: 'left'
      }}/>
    );
  }
}


export default TwitterFeed;