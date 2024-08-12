'use strict';
/* 
const numberOfMovies = prompt('Сколько фильмов вы посмотрели? ', '')

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const   a = prompt('Один из последних просмотреных фильмов? '),
        b = prompt('На сколько оцените его? '),
        c = prompt('Один из последних просмотреных фильмов? '),
        d = prompt('На сколько оцените его? ');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB) 



let nameOfMovie = prompt('Один из последних просмотреных фильмов? ', '');

if (nameOfMovie.length < 10){
    let Movies
    do {
        Movies = prompt('Ответ не верный. Один из последних просмотреных фильмов? ', '')
    }
    while (Movies.length < 10);
}


let numberOfMovies = prompt('Сколько фильмов вы посмотрели? ', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10 && 0 < personalMovieDB.count){
    alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count > 10 && 30 > personalMovieDB.count) {
    alert('Вы классический зритель')
} else if (personalMovieDB.count > 30){
    alert('Вы киноман')
} else if (personalMovieDB.count < 0){
    alert('Произошла ошибка')
} else {
    alert('Произошла ошибка')
}
*/


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели? ', '')
    
        while (personalMovieDB == '' || personalMovieDB == null || isNaN(numberOfMovies)) {
            personalMovieDB = +prompt('Сколько фильмов вы посмотрели? ', '')
        }
    },
    rememberMyMovies: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних просмотреных фильмов? '),
                    b = prompt('На сколько оцените его? ');
            if (a != null && b != null && a != '' && b != '' && a.length < 10) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && 0 < personalMovieDB.count){
            alert('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count > 10 && 30 > personalMovieDB.count) {
            alert('Вы классический зритель')
        } else if (personalMovieDB.count > 30){
            alert('Вы киноман')
        } else if (personalMovieDB.count < 0){
            alert('Произошла ошибка')
        } else {
            alert('Произошла ошибка')
        }
        
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null){
                console.log('Вы ввели некоректные данные или не ввели вообще!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
    
};

