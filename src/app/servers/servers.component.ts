import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: `./servers.component.html`,
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "test";
  serverIsCreated = false;

  constructor() {
    setTimeout(() => {}, 2000);
    {
      this.allowNewServer = true;
    }
  }

  onCreateServer() {
    this.serverIsCreated = true;
    this.serverCreationStatus = "Server name is: " + this.serverName;
    this.allowNewServer = false;
  }
  OnUpdateServerName(event: any) {
    console.debug(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
