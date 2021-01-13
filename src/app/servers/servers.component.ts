import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: `./servers.component.html`,
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";

  constructor() {
    setTimeout(() => {}, 2000);
    {
      this.allowNewServer = true;
    }
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was create";
  }

  ngOnInit() {}
}
