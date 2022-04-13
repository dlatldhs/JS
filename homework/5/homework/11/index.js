function randomJokeApi() {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve(
                fetch("https://api.chucknorris.io/jokes/random")
                .then((response) => response.json())
                .then((json) => console.log(json)));
        })
    })
}

async function asyncCall() {
    console.log("ready...");
    const randomJoke = await randomJokeApi();
}
asyncCall();