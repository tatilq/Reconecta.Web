import { AfterViewInit, HostListener, Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'shared-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,

    private _route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    }
}
