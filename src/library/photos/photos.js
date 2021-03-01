
require('es6-promise').polyfill();
require('isomorphic-fetch');
const unsplash = require('unsplash-js');

let api = unsplash.createApi({
    accessKey:process.env.ACCESS_KEY
});

export const fetchPhotos = async (page,perPage) => {
    
    let result = await api.photos.list({
            page,
            perPage
        }).catch(console.log);

    return result.response['results'];

};

export const fetchPhoto = async (photoId) => {

    let result = await api.photos.get({photoId})
    .catch(console.log);

    return result;

};  