
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
//  providers: [PostService]
})
export class UserComponent {
  title: string;
  name: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor() {
    this.title = 'Ms ';
    this.name = 'Shruti';
    this.address = {
      street: '7439 dover mill dr',
      city: 'Charlotte',
      state: 'NC'
    }
    this.hobbies = ['Music', 'Movies', 'Sports']
    this.showHobbies = false;
//    this.postService.getPost().subscribe(res => this.posts = res);

  }

  toggleHobbies() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby) {
    console.log(hobby)
    this.hobbies.push(hobby);
  }
}
interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
