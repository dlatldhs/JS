const userData = (user) => {
	return new Promise( (resolve, reject) =>{
		setTimeout( () => {
			const error = false//true//false;
			if (error) {
				reject("error");
			}
			else {
				resolve(user);
			}
		}, 3000);
	})
}

const user ={
    name : 'ZION',
    school: 'BSSM',
    address: {
        city: 'Busan'
    }
};

userData(user).catch( (error) => console.log(error)).then( (success) => console.log(success) );