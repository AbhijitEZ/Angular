import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Access Modifier should be public to access in the template
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
