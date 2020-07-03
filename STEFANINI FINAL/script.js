function fetchData(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=df9fc66a8ebb11eec91f801ee40c387d&language=en-US&page=1')
        .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            const html = data.results.map(user => {
                return `
                    <ul style="display: inline;">
                        <a href><li><img src="https://image.tmdb.org/t/p/w200/${user.poster_path}" />
                        </li></a>
                    </ul>
                `;
            }).join('');
            console.log(html);
            document
                .querySelector('#app1')
                .insertAdjacentHTML("afterbegin", '<span>Now Playing</span'+html)
        })
        .catch(error => {
            console.log(error);
        });
}
fetchData();

function Doi(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=df9fc66a8ebb11eec91f801ee40c387d&language=en-US&page=3')
        .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            const html = data.results.map(user => {
                return `
                    <ul style="display: inline;">
                        <a href><li><img src="https://image.tmdb.org/t/p/w200/${user.poster_path}" />
                        </li></a>
                    </ul>
                `;
            }).join('');
            console.log(html);
            document
                .querySelector('#app2')
                .insertAdjacentHTML("afterbegin", '<span>Latest Movies</span'+html)
        })
        .catch(error => {
            console.log(error);
        });
}
Doi();

function Trei(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=df9fc66a8ebb11eec91f801ee40c387d&language=en-US&page=1')
        .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            const html = data.results.map(user => {
                return `
                    <ul style="display: inline;">
                        <a href><li><img src="https://image.tmdb.org/t/p/w200/${user.poster_path}" />
                        </li></a>
                    </ul>
                `;
            }).join('');
            console.log(html);
            document
                .querySelector('#app3')
                .insertAdjacentHTML("afterbegin", '<span>Upcoming Movies</span'+html)
        })
        .catch(error => {
            console.log(error);
        });
}
Trei();

