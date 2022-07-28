export class Model {
    user;
    items;

    constructor(){
        this.user = "Mehmet";
        this.items = [
                        new Film("Film1",true),
                        new Film("Film2",false),
                        new Film("Film3",false),
                        new Film("Film4",false),
                     ];
    }
}

export class Film {
    film;
    durum;

    constructor(film,durum){
        this.film = film;
        this.durum = durum;
    }
}