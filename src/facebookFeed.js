import React, { Component} from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="393288644468158">
        <EmbeddedPost href="https://www.facebook.com/photo.php?fbid=2033931003598188&set=a.1377738339217461.1073741826.100009439233989&type=3&theater" width="500" />
      </FacebookProvider>
    );
  }
}