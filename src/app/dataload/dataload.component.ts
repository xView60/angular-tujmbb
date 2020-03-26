import { Component } from "@angular/core";
import * as firebase from 'firebase';
@Component({
  selector: "dataload",
  templateUrl: "./dataload.component.html"
})

export class DataLoad {
  value: string;
  handleClick(event: Event) {
  console.log('Click!', event)
}
onKey(event: any) { // without type info
    this.value = event.target.value;
  }
  constructor() {
    
  var firebaseConfig = {
      apiKey: "AIzaSyAuTpI1o0BjYWIpr3WJSTmPxDkJAx6Dn3Q",
      authDomain: "typescript-1f822.firebaseapp.com",
      databaseURL: "https://typescript-1f822.firebaseio.com",
      projectId: "typescript-1f822",
      storageBucket: "typescript-1f822.appspot.com",
      messagingSenderId: "1057001508457",
      appId: "1:1057001508457:web:a3a83dfbe1809c05285cf8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}