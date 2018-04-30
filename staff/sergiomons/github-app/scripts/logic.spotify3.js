/**
 *
 * PROMISE ALL
 *
 * Resolve an array of Promises
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all
 *
 */

const allPromise = [];
const URL = 'https://api.spotify.com/v1/me';
const TOKEN =
    'Bearer BQD8aBJJ-u4vPCS1LZKnwHf90bmXQWRi4tvkkWYkCykMLEbVP0VE_QkOWuba1cMR2b5A7HF1xw5pGX3fOsvMSHsugLTac4iDoou10Wn_OkOYhJeDnpG-E7QG4V65ua_SSylZ00D6C7xPndJx_APNowuHpOdDIHqykWo';

for (let i = 0; i < 20; i++) {
    allPromise.push(
        fetch(URL, {
            headers: {
                Authorization: TOKEN
            }
        }).then(res => res.json())
    );
}

Promise.all(allPromise)
    .then(console.log)
    .catch(console.error);