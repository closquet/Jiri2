//if logged and is admin
export const getAllProjects = (cb) => {
    axios.get('/projects')
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
export const disableProject = (projectId, cb) => {
    axios.post('/projects/' + projectId + '/disable')
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
export const enableProject = (projectId, cb) => {
    axios.post('/projects/' + projectId + '/enable')
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
export const updateProject = (projectContent, cb) => {
    axios.post('/projects/' + projectContent.id + '/update', projectContent)
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
export const addProject = (projectContent, cb) => {
    axios.post('/projects/store', projectContent)
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
                console.log('error.response :' + error.response.data);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log('error.request : ' + error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('else Error', error.message);
            }
            console.log(error.config);
            cb(error.response.status);
        });

};
