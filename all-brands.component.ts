import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.less']
})
export class AllBrandsComponent implements OnInit {

  arrayList =[{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQii2QYSEFqR5Q06KrMJWCCKjfPlRlGYplfYVbjVGK7dS3U8-6x',
    kindOfCheese:'Сыр мягкий',
    nameOfCheese:'КРЕМЧИЗ тар-тар',
    logo:'http://eventum.by/wp-content/uploads/2017/05/logo_037.jpg',
    description:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    image:'https://by.all.biz/img/by/catalog/474380.jpg',
    kindOfCheese:'Сыр мягкий',
    nameOfCheese:'КРЕМЧИЗ тар-тар',
    logo:'http://eventum.by/wp-content/uploads/2017/05/logo_037.jpg',
    description:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    image:'https://instamart.ru/spree/products/45758/preview/40873.jpg?1542033489',
    kindOfCheese:'Сыр мягкий',
    nameOfCheese:'КРЕМЧИЗ тар-тар',
    logo:'http://eventum.by/wp-content/uploads/2017/05/logo_037.jpg',
    description:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    image:'https://by.all.biz/img/by/catalog/474380.jpg',
    kindOfCheese:'Сыр мягкий',
    nameOfCheese:'КРЕМЧИЗ тар-тар',
    logo:'http://eventum.by/wp-content/uploads/2017/05/logo_037.jpg',
    description:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    image:'https://by.all.biz/img/by/catalog/474380.jpg',
    kindOfCheese:'Серёжа',
    nameOfCheese:'КРЕМЧИЗ тар-тар',
    logo:'http://eventum.by/wp-content/uploads/2017/05/logo_037.jpg',
    description:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  }];

  constructor() { }

  ngOnInit() {
  }

}
