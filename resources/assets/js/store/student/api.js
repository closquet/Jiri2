//if logged and is admin
export const getAllStudents = (cb) => {
    axios.get('/students')
        .then( axiosResponse => {
            cb(axiosResponse.data);
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
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
        });
};

//if logged and is admin
export const disableStudent = (studentId, cb) => {
    axios.post('/students/' + studentId + '/disable')
        .then( axiosResponse => {
            cb(axiosResponse.status);
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
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
        });
};

//if logged and is admin
export const enableStudent = (studentId, cb) => {
    axios.post('/students/' + studentId + '/enable')
        .then( axiosResponse => {
            cb(axiosResponse.status);
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
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
        });
};

//if logged and is admin
export const updateStudent = (studentContent, cb) => {
    axios.post('/students/' + studentContent.id + '/update', studentContent)
        .then( axiosResponse => {
            cb(axiosResponse.status);
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
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
        });
};

//if logged and is admin
export const addStudent = (studentContent, cb) => {
    axios.post('/students/store', studentContent)
        .then( axiosResponse => {
            cb({
                'status': axiosResponse.status,
                'data' : axiosResponse.data
            });
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
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
        });

};
