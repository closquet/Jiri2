//if logged and is admin
export const getAllUsers = (cb) => {
    axios.get('/users')
    .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
        cb(error);
    })
    .then( axiosResponse => {
        cb(axiosResponse.data);
    });
};

//if logged
export const getCurrentUser = () => {
    this.$http.get('/current').then(response => {

        // get body data
        this.someData = response.body;

    }, response => {
        // error callback
    });
    return {
        id: '3',
        name:'Billy Dumant',
        email:'myriam@mail.be',
        phone:'+32495000003',
        category:'1', //1 = teacher, 2 = guest
        isAdmin:1,
        isAvailable:1
    };
};

//if logged and is admin
export const disableUser = (userId, cb) => {
    axios.post('/users/' + userId + '/disable')
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            cb(error.response.status);
        })
        .then( axiosResponse => {
            cb(axiosResponse.status);
        });
};

//if logged and is admin
export const enableUser = (userId, cb) => {
    axios.post('/users/' + userId + '/enable')
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            cb(error.response.status);
        })
        .then( axiosResponse => {
            cb(axiosResponse.status);
        });
};

//if logged and is admin
export const updateUser = (userContent, cb) => {
    axios.post('/users/' + userContent.id + '/update', userContent)
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            cb(error.response.status);
        })
        .then( axiosResponse => {
            cb(axiosResponse.status);
        });
};

//if logged and is admin
};
