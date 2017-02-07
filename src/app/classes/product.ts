export class Product {

    constructor(
        public _id: string,
        public name: string,
        public articul: number,
        public price: number,
        public subcategory: string,
        public producer: string,
        public imgSrc: string
    ) {}
}