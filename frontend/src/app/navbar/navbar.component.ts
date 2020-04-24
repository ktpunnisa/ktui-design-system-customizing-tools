import { Component, OnInit } from '@angular/core';
import { LibraryGeneratorService } from './library-generator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private LibGeneratorService: LibraryGeneratorService) {}

  ngOnInit() {}

  exportLibrary() {
    this.LibGeneratorService.getLibrary('library/test-library.zip').subscribe(response => {
      window.location.href = response.url;
    });
  }
}
