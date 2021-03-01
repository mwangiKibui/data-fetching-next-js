require('es6-promise').polyfill();
require('isomorphic-fetch');
const unsplash = require('unsplash-js');

let api = unsplash.createApi({
    accessKey:process.env.ACCESS_KEY
});

export const fetchUser = async (username) => {

    let result = await api.users.get({ username });

    return result;

};