
import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

import { IRental, AppStorage } from '../shared/rental.interface';

// TODO: Interfaces in next lecture
@Component({
  selector: 'bwm-rental-listing',
  templateUrl: './rental-listing.component.html'
})
export class RentalListingComponent implements OnInit, IRental{
  rentals: Rental[] = [];
  someData = 'Some Data1';
  isLoaded = false;

  constructor(private rentalService: RentalService){}

  ngOnInit() {
    const appStorage = new AppStorage<string>();

    appStorage.addItem("23");
    appStorage.addItem("2343433");

    const item = appStorage.getItem(0);
    const items = appStorage.displayItems();

    this.rentalService.getRentals()
      .subscribe((rentals: Rental[]) => {
        this.rentals = rentals;
    });
  }

  implementMe() {
    return '';
  }
}