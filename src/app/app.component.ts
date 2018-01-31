import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	items = ['First'];
	newItem = "";

	addItem(item){
		if(item != null){
			this.items.push(item);
			this.newItem = "";
		}
	}

	removeItem(index){
		this.items.splice(index, 1);
	}

}
