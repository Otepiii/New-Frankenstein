import { Component } from '@angular/core';

export interface RecipeList {
  position: number;
  name: string;
  amount: number;
  unit: string;
  technique: string;
}

const ELEMENT_DATA: RecipeList[] = [
  {
    position: 1,
    name: 'Chicken Thighs',
    amount: 3,
    unit: 'Pcs',
    technique: 'Pan seared/fried',
  },
  {
    position: 2,
    name: 'Soy Sauce',
    amount: 3,
    unit: 'Tbs',
    technique: 'reduced',
  },
  { position: 3, name: 'Mirin', amount: 3, unit: 'Tbs', technique: 'reduced' },
  { position: 4, name: 'Sake', amount: 3, unit: 'Tbs', technique: 'reduced' },
  { position: 5, name: 'Sugar', amount: 3, unit: 'Tbs', technique: 'reduced' },
  { position: 6, name: 'Rice', amount: 2, unit: 'Cups', technique: 'Steamed' },
];

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss'],
})
export class Day3Component {
  displayedColumns: string[] = [
    'position',
    'name',
    'amount',
    'unit',
    'technique',
  ];
  dataSource = ELEMENT_DATA;
}
