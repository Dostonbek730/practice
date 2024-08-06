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

let numberOfMovies;

function start() {
    numberOfMovies = +prompt('Сколько фильмов вы посмотрели? ', '')

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt('Сколько фильмов вы посмотрели? ', '')
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyMovies () {
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
}

rememberMyMovies ();

function detectPersonalLevel () {
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
    
}

detectPersonalLevel ();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYpurGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYpurGenres ();