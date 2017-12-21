import { Component, OnInit } from '@angular/core';
import { App, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/auth/login';

import { AuthServiceProvider } from '../providers/auth/auth-service';

@Component({
  templateUrl: 'app.html'
})

export class Sparkr implements OnInit {

  rootPage:any = TabsPage;

  constructor(public platform: Platform,
              public app: App,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public authService: AuthServiceProvider,
              public alertCtrl: AlertController
             ) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      if(this.authService.getCurrentUser()){
          this.rootPage = TabsPage;
      }else{
          this.rootPage = LoginPage;
      }

    });
  }

  ngOnInit(): void { }

}
