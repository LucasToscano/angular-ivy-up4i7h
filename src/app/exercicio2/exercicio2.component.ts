import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercicio2",
  templateUrl: "./exercicio2.component.html",
  styleUrls: ["./exercicio2.component.css"]
})
export class Exercicio2Component implements OnInit {
  public serverNameLabel = "";
  public serverName = "No Server!";
  public mensageServer = "Server offline!";
  public isOnline = false;

  constructor() {}

  onClickBtn() {
    this.serverName = this.serverNameLabel;

    if (this.serverNameLabel.trim() != "") {
      this.mensageServer =
        'Server com o nome: "' +
        this.serverName +
        '" Esta com o status : "Online"';
      this.isOnline = true;
      this.serverNameLabel = "";
      window.alert("Sucess!");
    } else {
      window.alert("Alguma coisa deu errado! verifique o valor digitado!");
    }
  }

  OnUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
