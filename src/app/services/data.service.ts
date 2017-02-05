import { Injectable } from '@angular/core';
import { Category, Subcategory, Product } from '../index';

@Injectable()
export class DataService {

    constructor() {
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
        new Product('1', 'INDESIT LI7 S1 W', 6252677, 7999, 'Холодильники'),
        new Product('2', 'ATLANT XM 6325-101', 6107888, 9199, 'Холодильники'),
        new Product('3', 'SAMSUNG RB37J5100SA/UA', 6320980, 14999, 'Холодильники'),
        new Product('4', 'HANSA FCMW58077', 6203908, 6799, 'Плиты'),
        new Product('5', 'BEKO CSE 52110 GW', 6038396, 6199, 'Плиты'),
        new Product('6', 'HANSA FCMW68020', 6061715, 7779, 'Плиты'),
        new Product('7', 'MOULINEX CE500E', 6150473, 2999, 'Мультиварки'),
        new Product('8', 'PHILIPS HD4731/03', 6282083, 2749, 'Мультиварки'),
        new Product('9', 'DELFA DMC-10', 6164261, 599, 'Мультиварки'),
        new Product('10', 'MOULINEX DD726010', 6228971, 1111, 'Блендеры'),
        new Product('11', 'SATURN ST-FP9063', 6300333, 929, 'Блендеры'),
        new Product('12', 'PHILIPS HR1673/90', 6215432, 2199, 'Блендеры'),
        new Product('13', 'SAMSUNG UE32J5200AKXUA', 6231245, 9999, 'Телевизоры'),
        new Product('14', 'BRAVIS LED-42D2050 Smart +T2 black', 6296787, 10999, 'Телевизоры'),
        new Product('15', 'LG 43LH570V', 6300139, 15499, 'Телевизоры'),
        new Product('9', 'PANASONIC RP-HJE125E-P', 6040397, 219, 'Наушники'),
        new Product('9', 'PHILIPS SHE3590BK/10', 5952381, 199, 'Наушники'),
        new Product('9', 'SENNHEISER PX 100-II White', 5796237, 1519, 'Наушники')
    ];

    getProductsBySubcategory(subname: String) {
        if (subname) {
            return this.products.filter(elem => elem.subcategory == subname)
        }
    }

    getSubcategoriesByCategory(category: String) {
        if (category) {
            return this.subcategories.filter(elem => elem.category == category);
        }
    }


}
