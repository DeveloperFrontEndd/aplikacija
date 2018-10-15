import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent
	},

	{
		path: 'details/:id',
		component: DetailsComponent
	},
	
	{
		path: 'posts',
		component: PostsComponent
	},

	{
		path: 'todo',
		component: TodoComponent
	},
	


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
