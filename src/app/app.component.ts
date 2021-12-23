import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string;	
	ipAddress: string;
	music = document.getElementById("music");
	
	constructor(private http:HttpClient) {
		this.ipAddress = "";
		this.title = "BartIP";
		sessionStorage.clear();		
	}

	ngOnInit() {
		this.getIPAddress();
	}

	getIPAddress() {
		this.http.get("https://ifconfig.me", {responseType: "text"}).subscribe(ip => this.ipAddress = ip);					
	}

}
