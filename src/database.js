function Db() {
    const products = {
        1:{
            id: 1,
            name: "Metallica",
            src: "images/metallica.jpg",
            price: 10,
            music: "music/metallica.mp3"
        },
        2:{
            id: 2,
            name: "Pink Floyd",
            src: "images/pink.jpg",
            price: 10,
            music: "music/floyd.mp3"
        },
        3:{
            id: 3,
            name: "Guns N' Roses",
            src: "images/guns.jpg",
            price: 10,
            music: "music/guns.mp3"
        },
        4:{
            id: 4,
            name: "The Beatles",
            src: "images/beatles.jpg",
            price: 10,
            music: "music/beatles.mp3"
        },
        5:{
            id: 5,
            name: "Rolling Stones",
            src: "images/rolling.jpg",
            price: 10,
            music: "music/stones.mp3"
        },
        6:{
            id: 6,
            name: "Led Zepellin",
            src: "images/led.jpg",
            price: 10,
            music: "music/zepellin.mp3"
        },
        7:{
            id: 7,
            name: "Queen",
            src: "images/queen.jpg",
            price: 10,
            music: "music/queen.mp3"
        },
        8:{
            id: 8,
            name: "Pearl Jam",
            src: "images/pearl.jpg",
            price: 10,
            music: "music/pearl.mp3"
        },
        
    }    

    this.get = function(){
        return Object.values(products);
    }
    this.getById = function(id) {
        return products[id];
    }
}

var db = new Db();
