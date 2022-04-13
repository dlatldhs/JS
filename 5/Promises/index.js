const buyFlightTicket = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            const error = true;
            if (error) {
                reject("Sorry");
            }
            else{
                resolve("Success");
            }
        }, 3000);
    })
}
buyFlightTicket().catch( (error) =>console.log(error)).then( (success) => console.log(success));