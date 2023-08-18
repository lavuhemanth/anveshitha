

export const getApiCall = (path) => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:9093/api/v1/" + path)
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 200) {
            return resolve(data);
          }
        })
        .catch(error => {
          alert('Error fetching category data');
          return reject(error);
        })
    });
    
}


export const postApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:9093/api/v1/" + path, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 201) {
            return resolve(data);
          }
        })
        .catch(error => {
          return reject(error);
        })
    });
    
}

export const putApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:9093/api/v1/" + path, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 201) {
            return resolve(data);
          }
        })
        .catch(error => {
          return reject(error);
        })
    });   
}



export const deleteApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:9093/api/v1/" + path, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 200) {
            return resolve(data);
          }
        })
        .catch(error => {
          return reject(error);
        })
    });   
}
