// import history from './history'
//
// export default function request(method, url, body) {
//     method = method.toUpperCase();
//     if (method ==='GET'){
//         body = undefined;
//     }else {
//         body = body&& JSON.stringify(body)
//     }
//
//     return fetch(url, {
//         method,
//         headers:{
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body
//     })
//         .then(res =>{
//             if (res.status ===401){
//                 history.push('/log_in');
//                 return Promise.reject('Unauthorized');
//             }else{
//                 alert('request success')
//             }
//         })
// }
//
// export const get = url => request('GET', url);
// export const post = (url, body) => request('POST', url, body);
// export const put = (url, body) => request('PUT', url, body);
// export const del = (url, body) => request('DELETE', url, body);