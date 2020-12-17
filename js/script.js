// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


/* {
    "poster": "https://www.link.com",
    "title": "New Jersey",
    "author": "Bon Jovi",
    "genre": "Rock",
    "year": "1988"
}, */

var app = new Vue(
    {
        el: '#root',
        data: {
            discs: [],
            genreList: [],
            selected: "all",
        },
        methods: {
            getGenreList: function() {
                this.discs.forEach(
                    element => {
                        // console.log(element);
                        if(this.genreList.includes(element.genre) == false) {
                            this.genreList.push(element.genre);
                        }
                    }
                );
                // console.log(this.genreList);
            },
        },
        mounted: function() {

            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result)=> {
                this.discs = result.data.response;
                // console.info("Array normale", this.discs);

                this.discs.sort(function(a, b){
                    return a.year-b.year
                })
                // console.info("Array sorted", this.discs);

                this.getGenreList();
            });

            

        },
    }
);