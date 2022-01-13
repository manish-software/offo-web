import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Terms of Service — Offo',
      'To provide our mobile app development services. We need to obtain your agreement to our Terms of Service.',
      'https://offonow.com/assets/images/logo.png'
    );
  }
}
