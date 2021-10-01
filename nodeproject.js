const request = require("request");

const getObjectAPIV1 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v1",
            data: body,
          });
        }
      );
    });
  };
  
  const getObjectAPIV2 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v2",
            data: body,
          });
        }
      );
    });
  };
  
  Promise.all([getObjectAPIV1(), getObjectAPIV2()])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  
  Promise.race ([getObjectAPIV1(),getObjectAPIV2()])
  .then ((result)=> console.log(result))