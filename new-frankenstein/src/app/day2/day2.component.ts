import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Grind {
  name: string;
  percent: number;
}

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss'],
})
export class Day2Component {
  grind: Grind[] = [
    { name: 'Luck', percent: 10 },
    { name: 'Skill', percent: 20 },
    { name: 'Will', percent: 15 },
    { name: 'Pleasure', percent: 5 },
    { name: 'Pain', percent: 50 },
  ];

  sortedData: Grind[];

  constructor() {
    this.sortedData = this.grind.slice();
  }

  sortData(sort: Sort) {
    const data = this.grind.slice();
    if (!sort.active || sort.direction) {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'percent':
          return compare(a.percent, b.percent, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
