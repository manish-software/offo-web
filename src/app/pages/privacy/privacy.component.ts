import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
})
export class PrivacyComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Privacy Policy — Offo',
      'Our privacy policy describes collecting, sharing, and handling your private data to provide our best custom mobile app development services.',
      'https://offonow.com/assets/images/logo.png'
    );
  }
}
