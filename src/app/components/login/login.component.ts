import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import sampleConfig from '../../app.config';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signIn : any;
  constructor(){
    this.signIn = new OktaSignIn({baseUrl: 'https://farmersinsurance.okta.com'});
  }
  
  ngOnInit() {
    this.signIn.renderEl({
      el: '#widget-container'
    }, 
    (res) => {
      /**
       * In this flow, the success handler will not be called because we redirect
       * to the Okta org for the authentication workflow.
       */
      console.log("hello");
      res.session.setCookieAndRedirect('https://farmersinsurance.okta.com/home/farmersinsurance_mulesoftanypoint_1/0oa645p1rtcjk6SLN1t7/aln645ulbvt56NkTf1t7');
    },
    (err) => {
      throw err;
    },
  );
    /*function success(res) {
      if (res.status === 'SUCCESS') {
        console.log('Do something with this sessionToken', res.session.token);
      } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
      }
    });*/
  }
}