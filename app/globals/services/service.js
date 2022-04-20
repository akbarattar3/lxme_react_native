import axios, {create} from 'axios';
import {HTTP_METHODS, ERROR_MESG, ERROR_CODE} from './apiConstants';
import {api_environments} from './apiEnvironments';
import {DeviceEventEmitter} from 'react-native';

/**
 * axios object
 */
const API = create({
  timeout: 60000,
});

/***
 * Get common request headers object
 */
const getReqHeaders = async () => {
  return {
    'X-ClientID': api_environments.API_DOMAIN,
  };
};
/**
 * To perform api from class where this function/method is imported,
 * and send back completion in resolve or reject based on api response.
 */
export const request = (
  url,
  httpMethod,
  token,
  params,
  header = {},
  isWithToken = true,
  accessType = true,
) =>
  new Promise(async (resolve, reject) => {
    //the token is a variable which holds the token
    try {
      const tokenObj = isWithToken
        ? {
            Authorization: token,
          }
        : {};
      const accceptObj = accessType
        ? {
            Accept: 'application/json',
          }
        : {
            Accept: 'image/png',
          };
      const commonHeaders = await getReqHeaders();
      const configObj = {
        headers: {
          // ...header,
          // ...commonHeaders,
          // ...tokenObj,
          ...accceptObj,
          ...header,
        },
      };

      console.log('<><><><><> url <><><><><>', url);
      console.log('<><><><><> isWithToken <><><><><>', isWithToken);
      console.log('<><><><><> token <><><><><>', token);
      console.log('<><><><><> httpMethod <><><><><>', httpMethod);
      console.log('<><><><><> params <><><><><>', JSON.stringify(params));
      console.log(
        '<><><><><> headers <><><><><>',
        JSON.stringify(configObj.headers),
      );

      switch (httpMethod) {
        // GET
        case HTTP_METHODS.GET:
          doGet(url, resolve, reject, configObj);
          break;

        // POST
        case HTTP_METHODS.POST:
          doPost(url, params, resolve, reject, configObj);
          break;

        // PUT
        case HTTP_METHODS.PUT:
          doPut(url, params, resolve, reject, configObj);
          break;

        // DELETE
        case HTTP_METHODS.DELETE:
          doDelete(url, params, resolve, reject, configObj);
          break;
      }
    } catch (error) {
      reject(error);
    }
  });

/**
 *  This function is used to parse response and send completion to handle resolve and reject value for parent Promise.
 * We can consider it as a child promise
 * @param {*} response
 */
export const parseResponse = response =>
  new Promise(parsedResponse => {
    const isSuccess =
      response.status === 200 || response.status === 201 ? true : false;
    if (isSuccess) {
      parsedResponse({isSuccess: true, response: response});
    } else {
      let message = ERROR_MESG.SOMETHING_WENT_WRONG;
      if (response.data != null && response.data.message) {
        message = response.data.message;
      }
      parsedResponse({isSuccess: false, message: message});
    }
  });

/***
 * This function is used for service request with GET as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doGet = (url, resolve, reject, config = {}) => {
  API.get(url, config)
    .then(response => {
      console.log('url:UD', url);
      console.log('response:UD', response);
      parseResponse(response).then(parsedResponse => {
        // console.log(`url ${url} response => ${JSON.stringify(response)}`);
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch(error => {
      if (
        (error.response.status && error.response.status === 503) ||
        (error.response.status && error.response.status === 502)
      ) {
        DeviceEventEmitter.emit('MaintanenceError', {});
      } else if (error.response.status && error.response.status === 404) {
        DeviceEventEmitter.emit('PagenotFound', {
          statusCode: error.response.status,
        });
      } else if (error.response.status && error.response.status === 500) {
        //showAlert(); internal server Error
      } else if (error.response.status && error.response.status === 401) {
        const errorInfo = {
          msg: error.response.data.message,
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.unauthorized, errorInfo);
      }
      reject(error);
    });
};

/***
 * This function is used for service request with POST as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doPost = (url, params, resolve, reject, config = {}) => {
  API.post(url, params, config)
    .then(response => {
      console.log('url:UD', url);
      console.log('response:UD', response);
      parseResponse(response).then(parsedResponse => {
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch(error => {
      if (
        (error.response.status && error.response.status === 503) ||
        (error.response.status && error.response.status === 502)
      ) {
        DeviceEventEmitter.emit('MaintanenceError', {});
      } else if (error.response.status && error.response.status === 404) {
        // DeviceEventEmitter.emit("PagenotFound", {
        //   statusCode: error.response.status,
        // });
      } else if (error.response.status && error.response.status === 500) {
        //carts
        if (!url.includes('carts')) {
          //showAlert();
        }
      } else if (error.response.status && error.response.status === 401) {
        const errorInfo = {
          msg: 'invalidCreds',
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.unauthorized, errorInfo);
      } else if (error.response.status && error.response.status === 409) {
        const errorInfo = {
          msg: error.response.data.message,
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.recordIssue, errorInfo);
      }
      reject(error);
    });
};

/***
 * This function is used for service request with PUT as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doPut = (url, params, resolve, reject, config = {}) => {
  API.put(url, params, config)
    .then(response => {
      console.log('url:UD', url);
      console.log('response:UD', response);
      parseResponse(response).then(parsedResponse => {
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch(error => {
      console.log('url:UD error ', error);
      if (
        (error.response.status && error.response.status === 503) ||
        (error.response.status && error.response.status === 502)
      ) {
        DeviceEventEmitter.emit('MaintanenceError', {});
      } else if (error.response.status && error.response.status === 404) {
        if (url.includes('coupons')) {
        } else if (url.includes('selected-payment-method')) {
        } else {
          DeviceEventEmitter.emit('PagenotFound', {
            statusCode: error.response.status,
            requestUrl: url,
          });
        }
      } else if (error.response.status && error.response.status === 500) {
        // showAlert();
      } else if (error.response.status && error.response.status === 401) {
        const errorInfo = {
          msg: error.response.data.message,
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.unauthorized, errorInfo);
      } else if (
        error.response.status &&
        error.response.status === ERROR_CODE.CODE_409
      ) {
        const errorInfo = {
          msg: error.response.data.message,
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.wrongCurrentPassword, errorInfo);
      }
      reject(error.response);
    });
};

/***
 * This function is used for service request with DELETE as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doDelete = (url, params, resolve, reject, config = {}) => {
  API.delete(url, config)
    .then(response => {
      parseResponse(response).then(parsedResponse => {
        // console.log(`url ${url} response => ${JSON.stringify(response)}`);
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse);
        }
      });
    })
    .catch(error => {
      if (
        (error.response.status && error.response.status === 503) ||
        (error.response.status && error.response.status === 502)
      ) {
        DeviceEventEmitter.emit('MaintanenceError', {});
      } else if (error.response.status && error.response.status === 404) {
        // getAPIErrorsForFirebaseLog(url, 'DELETE');
        DeviceEventEmitter.emit('PagenotFound', {
          statusCode: error.response.status,
          requestUrl: url,
        });
      } else if (error.response.status && error.response.status === 500) {
        // showAlert();
      } else if (error.response.status && error.response.status === 401) {
        const errorInfo = {
          msg: error.response.data.message,
          code: error.response.status,
        };
        DeviceEventEmitter.emit(ERROR_MESG.unauthorized, errorInfo);
      }
      reject(error.response);
    });
};

// const getAPIErrorsForFirebaseLog = (url, type) => {
//   if (url) {
//     let path =
//       'api-issues/404/' +
//       Math.floor(100000 + Math.random() * 900000) +
//       '/' +
//       new Date().getTime();
//     let data = {
//       date: getDateAndTime(new Date()),
//       URL: url,
//       type: type,
//       env: getEnvironment(),
//       market: getMarketConfig().code.alpha2,
//     };
//     sendErrorLogToFDB(path, data);
//   }
// };
