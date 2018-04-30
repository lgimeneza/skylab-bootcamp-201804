/**
 *
 * CUSTOM FETCH
 *
 * How Fetch is working behind the scenes!
 *
 */
function customFetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            const OK = 200;
            const DONE = 4;

            if (this.readyState === DONE) {
                //clearTimeout(timeoutError);

                if (this.status === OK) {
                    return resolve(JSON.parse(this.responseText));
                } else {
                    return reject(
                        new Error(
                            this.status +
                                'Error en la peticion httpRequest/AJAX'
                        )
                    );
                }
            }
        };

        xhr.open('GET', url);
        const TIME = 2000;

        const timeoutError = setTimeout(function() {
            xhr.abort();
            return reject(
                new Error(this.status + 'Error en la peticion httpRequest/AJAX')
            );
        }, TIME);

        xhr.send(null);
    });
}

function newFetch(url) {
    return customFetch(url)
        .then(console.log)
        .catch(console.error);
}