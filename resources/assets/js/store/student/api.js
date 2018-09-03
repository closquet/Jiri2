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
export const updateStudent = (student, cb) => {
    axios.post('/students/' + student.id + '/update', student)
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
export const addStudent = (student, cb) => {
    axios.post('/students/store', student)
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

export const addStudentProject = (project, cb) => {
    axios.post('/students/' + project.student_id + '/projects/store', project)
    .then( axiosResponse => {
        cb({
            'status': axiosResponse.status,
            'data' : axiosResponse.data
        });
        console.log(this);
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

export const updateStudentProject = (project, cb) => {
    axios.post('/students/' + project.student_id + '/projects/' + project.project_id + '/update', project)
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
        console.log(error);
        cb(error);
    });
};