import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

export interface Slide {
  name: string;
  review: string;
  image: string;
}

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.scss'],
})
export class Day5Component {
  constructor() {}
  slides = [
    {
      name: 'John D.',
      review:
        "It's incredible. I don't always clop, but when I do, it's because of project partner.",
      image:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Red&facialHairType=BeardMedium&facialHairColor=Red&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    },
    {
      name: 'Fred F.',
      review:
        'Project partner is worth much more than I paid. Project partner was worth a fortune to my company',
      image:
        'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Round&hatColor=Gray02&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Pink&eyeType=EyeRoll&eyebrowType=RaisedExcited&mouthType=Disbelief&skinColor=Light',
    },
    {
      name: 'Sally S.',
      review:
        "If you aren't sure, always go for project partner. I am completely blown away.",
      image:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Sunglasses&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Light',
    },
  ];
}
