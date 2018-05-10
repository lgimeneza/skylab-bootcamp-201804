/**
 * TODO:
 * SERVICE ACTORES PARA EL PROYECTO REACT GROUP
 *
 * https://developers.themoviedb.org/3/movies/get-movie-details
 *
 *
 * IDEA: Que la pregunta no sea por nombre si no por el "conocido por"
 *
 */

import axios from 'axios';

const MoviesService = {
    baseUrl: 'https://api.themoviedb.org/3/person',
    apiKey: 'f65f563dee54221848f232ef44394559',

    // https://api.themoviedb.org/3/person/popular?api_key=f65f563dee54221848f232ef44394559&language=es-ES

    getQuestion() {
        const numberPage = Math.floor(Math.random() * 30);
        return axios
            .get(
                `${this.baseUrl}/popular?api_key=${
                    this.apiKey
                }&language=es-ES&page=${numberPage}`
            )
            .then(res => res.data.results)
            .then(actors => {
                const random1 = Math.floor(Math.random() * 20);
                const actor1 = {
                    name: actors[random1].name,
                    id: actors[random1].id,
                    img: actors[random1].profile_path,
                    movies: actors[random1].known_for
                };

                return axios
                    .get(
                        `${this.baseUrl}/${actor1.id}?api_key=${
                            this.apiKey
                        }&language=es-ES`
                    )
                    .then(res => res.data)
                    .then(infoActor => {
                        const actor2 = {
                            ...actor1,
                            birthday: infoActor.birthday,
                            born: infoActor.place_of_birth
                        };
                        return actor2;
                    });
            });
    }

    // checkAnswer(actorName) {
    //     // if (actorName === question.answer) {
    //     //     // CORRECT!
    //     // } else {
    //     //     // INCORRECT!
    //     // }
    // },
};

export default MoviesService;
