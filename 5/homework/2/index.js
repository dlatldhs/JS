function addressMaker(city,state,country) {
    const newAddress ={
        city:city,
        state:state,
        country:country
    }
    const { city , state , country } = newAddress;
    console.log(city,state,country);
}
addressMaker('Austin','Texas');

