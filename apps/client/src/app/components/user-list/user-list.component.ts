import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
    {id: '1', name: 'John Smith', avatarUrl: 'https://api.adorable.io/avatars/285/wacap.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
