import React, { Component} from 'react';
import InstagramEmbed from 'react-instagram-embed'
 
export default class InstaFeed extends Component {
  render() {
    return ( 
		<InstagramEmbed
		  url='https://www.instagram.com/p/BfuKtOtFOSW/?hl=en&taken-by=thegailproject/'
		  maxWidth={90}
		  maxheight={300}
		  hideCaption={false}
		  containerTagName='div'
		  protocol=''
		  onLoading={() => {}}
		  onSuccess={() => {}}
		  onAfterRender={() => {}}
		  onFailure={() => {}}/>
    );
  }
}
