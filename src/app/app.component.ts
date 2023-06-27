import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';


import {
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType
} from 'angular-gridster2';
import { MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // standalone: true,
  // imports: [RouterLink, RouterLinkActive, RouterOutlet, MatListModule,
  //   FormsModule,
  //   NgForOf,
  //   NgIf,

  //   MatButtonModule,
  //   MatCheckboxModule,
  //   MatIconModule,
  //   MatInputModule,

  //   MarkdownModule,

  //   GridsterComponent,
  //   GridsterItemComponent]
})
export class AppComponent {
  title = 'test';
}
