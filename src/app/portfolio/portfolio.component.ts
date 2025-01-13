import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

interface PortfolioImage {
  src: string;
  alt: string;
  hover: boolean;
}

@Component({
  selector: 'app-portfolio',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  faStar = faStar;
  faPlus = faPlus;

  selectedImage: PortfolioImage | null = null;

  portfolioImages: PortfolioImage[] = [
    { src: '/images/cabin.png', alt: 'Cabin Image', hover: false },
    { src: '/images/cake.png', alt: 'Cake Image', hover: false },
    { src: '/images/circus.png', alt: 'Circus Image', hover: false },
    { src: '/images/cabin.png', alt: 'Cabin Image', hover: false },
    { src: '/images/cake.png', alt: 'Cake Image', hover: false },
    { src: '/images/circus.png', alt: 'Circus Image', hover: false },
  ];

  openImageModal(image: PortfolioImage) {
    this.selectedImage = image;
  }

  closeImageModal() {
    this.selectedImage = null;
  }
}
