import './style.css'

const apikey = import.meta.env.VITE_API_KEY

const results = document.getElementById("app");

const search = async () => {
    const title = document.getElementById("search").value;
    console.log(title);
    const api = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apikey}`);
    const json = await api.json();
    console.log(json);
    
    results.innerHTML = `
        <h1>${json.Title}</h1>
        <img src="${json.Poster}"/>
    `
}

const button = document.getElementById("submit");
button.addEventListener("click", (e) => {
    e.preventDefault();
    search();
});

















//console.log(url);

/*fetch(url).then(res => res.json())
.then(movie);
{
    movie.results.array.forEach(element => {
        console.log(movie[0].title);
    });
};

//displayMovie(url);

document.querySelector('#app').innerHTML = `

`*/
