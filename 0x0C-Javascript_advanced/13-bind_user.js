let user = {
    'hobby': 'Calligraphy',
    'favoriteSport': 'Hockey',
    'astrologicalSign': 'Aries',
    'firstName': 'Buillaume',
    'lastName': 'Ialva',
    'location': 'Telaviv',
    'occupation': 'Engineer'
};

function logWelcomeUser(welcomeString) {
    let msg = `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`;
    console.log(msg);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
