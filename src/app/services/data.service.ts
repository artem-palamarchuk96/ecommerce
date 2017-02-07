import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Category, Subcategory, Product, Producer } from '../index';

@Injectable()
export class DataService {

    constructor(private router: Router) {
    }

    categories:Category[] = [
        new Category('1', 'Бытовая техника'),
        new Category('2', 'Техника для кухни'),
        new Category('3', 'Телевизоры и аудио')
    ];

    subcategories:Subcategory[] = [
        new Subcategory('1', 'Холодильники', 'Бытовая техника'),
        new Subcategory('2', 'Плиты', 'Бытовая техника'),
        new Subcategory('3', 'Мультиварки', 'Техника для кухни'),
        new Subcategory('4', 'Блендеры', 'Техника для кухни'),
        new Subcategory('5', 'Телевизоры', 'Телевизоры и аудио'),
        new Subcategory('6', 'Наушники', 'Телевизоры и аудио')
    ];

    products:Product[] = [
        new Product('1', 'INDESIT LI7 S1 W', 6252677, 7999, 'Холодильники', 'Indesit', 'http://www.foxtrot.com.ua/files/MediumImages/6252677/0.jpg'),
        new Product('2', 'SAMSUNG RB37J5100SA/UA', 6320980, 14999, 'Холодильники', 'Samsung', 'http://www.foxtrot.com.ua/files/MediumImages/6320980/0.jpg'),
        new Product('3', 'ATLANT XM 6325-101', 6107888, 9199, 'Холодильники', 'ATLANT', 'http://www.foxtrot.com.ua/files/MediumImages/6107888/0.jpg'),
        new Product('4', 'INDESIT DF 4181 X', 6251947, 10199, 'Холодильники', 'Indesit', 'http://www.foxtrot.com.ua/files/MediumImages/6251947/0.jpg'),
        new Product('5', 'LG GA-B419SEQL', 6235473, 14899, 'Холодильники', 'LG', 'http://www.foxtrot.com.ua/files/MediumImages/6235473/0.jpg'),
        new Product('6', 'WHIRLPOOL BSNF 8121 OX', 6230683, 12599, 'Холодильники', 'WhirlPool', 'http://www.foxtrot.com.ua/files/MediumImages/6230683/0.jpg'),
        new Product('7', 'ATLANT ХМ-4725-101', 6282208, 8333, 'Холодильники', 'ATLANT', 'http://www.foxtrot.com.ua/files/MediumImages/6282208/0.jpg'),
        new Product('8', 'WHIRLPOOL BSNF 9152 W', 6234383, 13699, 'Холодильники', 'WhirlPool', 'http://www.foxtrot.com.ua/files/MediumImages/6234383/0.jpg'),
        new Product('9', 'SAMSUNG RSA1SHVB1/BWT', 6055622, 25699, 'Холодильники', 'Samsung', 'http://www.foxtrot.com.ua/files/MediumImages/6055622/0.jpg'),
        new Product('10', 'GORENJE RK 6191 BW ', 6040017, 9999, 'Холодильники', 'Gorenje', 'http://www.foxtrot.com.ua/files/MediumImages/6040017/0.jpg'),
        //new Product('4', 'HANSA FCMW58077', 6203908, 6799, 'Плиты'),
        //new Product('5', 'BEKO CSE 52110 GW', 6038396, 6199, 'Плиты'),
        //new Product('6', 'HANSA FCMW68020', 6061715, 7779, 'Плиты'),
        //new Product('7', 'MOULINEX CE500E', 6150473, 2999, 'Мультиварки'),
        //new Product('8', 'PHILIPS HD4731/03', 6282083, 2749, 'Мультиварки'),
        //new Product('9', 'DELFA DMC-10', 6164261, 599, 'Мультиварки'),
        //new Product('10', 'MOULINEX DD726010', 6228971, 1111, 'Блендеры'),
        //new Product('11', 'SATURN ST-FP9063', 6300333, 929, 'Блендеры'),
        //new Product('12', 'PHILIPS HR1673/90', 6215432, 2199, 'Блендеры'),
        //new Product('13', 'SAMSUNG UE32J5200AKXUA', 6231245, 9999, 'Телевизоры'),
        //new Product('14', 'BRAVIS LED-42D2050 Smart +T2 black', 6296787, 10999, 'Телевизоры'),
        //new Product('15', 'LG 43LH570V', 6300139, 15499, 'Телевизоры'),
        //new Product('16', 'PANASONIC RP-HJE125E-P', 6040397, 219, 'Наушники'),
        //new Product('17', 'PHILIPS SHE3590BK/10', 5952381, 199, 'Наушники'),
        //new Product('18', 'SENNHEISER PX 100-II White', 5796237, 1519, 'Наушники')
    ];

    producers:Producer[] = [
        new Producer('1', 'ATLANT'),
        new Producer('2', 'Samsung'),
        new Producer('3', 'Indesit'),
        new Producer('4', 'Beko'),
        new Producer('5', 'Bosch')
    ];

    getProductsBySubcategory(subname: string) {
        if (subname) {
            return this.products.filter(elem => elem.subcategory == subname)
        }
    }

    getSubcategoriesByCategory(category: string) {
        if (category) {
            return this.subcategories.filter(elem => elem.category == category);
        }
    }

    getProduct(articul: number) {
        if (articul) {
            return this.products.find(elem => elem.articul == articul);
        }
    }

    producerFilter(producer: string) {
        if (producer) {
            return this.products.filter(elem => elem.producer == producer);
        }
    }
}
