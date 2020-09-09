import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor() {}

  ionViewWillEnter() {
    console.log("ionViewWillEnter: Tab1");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave: Tab1");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave: Tab1");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter: Tab1");
  }
}
