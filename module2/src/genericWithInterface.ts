{
    //
interface developer<T>{
    name: string;
    laptop:{
        brand: string;
        model: string;
        releaseYear: string;
    }
    smartWatch: T
}

const poorDeveloper: developer<{brand:string, price:number, display: string}> = {
    name: 'Wasim',
    laptop:{
        brand: 'HP',
        model:"840 G5",
        releaseYear: '2018'
    },
    smartWatch:{
        brand: 'Apple',
        price: 100,
        display: 'amolet'
    }
}
    //
}