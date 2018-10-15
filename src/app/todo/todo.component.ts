import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

	todoArray: string[] = [];

	add(value) {
	if(value!==""){
	this.todoArray.push(value);
	} else {

	alert("Please enter your name")

	}

	}

	delete(todo) {
	for(let i=0; i<this.todoArray.length; i++) {
		if(todo == this.todoArray[i]) {
		this.todoArray.splice(i, 1);

		}
	}
	}



  constructor() { }

  ngOnInit() {
  }

}
