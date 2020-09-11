const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('got the user');
        const a=1;
        if (a !==1) {
        resolve({user: 'Max'});
        } else {
        reject(new Error('User does not equal 1'));
        }
    }, 1000);
});

promise.then(user => {
    console.log(user);
}).catch(error => {
    console.log(error.message);
})









// console.log('Start');

// function logInUser(email, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Now we have data')
//           resolve({userEmail: email});  
//         }, 2000)
//     })
    
// }

// function getUserVideos(email) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(['video1', 'video2', 'video3']);
//         },1000);
//     })
    
// }

// function videoDetails(video) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Title Of The Video')
//         },1000);
//     })
   
// }

// // this is promises now

// logInUser('me@joob.com', 'password')
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detial => console.log(detial));

/////////// Promise All

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting stuff from youtube');
        resolve({videos: [1,2,3,4]});
    }, 2000);
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting stuff from facebook');
        resolve({messages: [1,2,3,4]});
    },2000);
});

Promise.all([yt,fb])
.then(result => console.log(result))