//////////////// Sync

// function otherFunct() {
//     console.log('we are in another funct');
//     console.log('do some stuff');
// }

// console.log('Start');

// otherFunct();

// console.log('End');


// Async code example

// console.log('Start');

// // pass it to a web API to keep track of the timer and take it off the stack

// setTimeout(() => {
//     console.log('We are in the timeout')
// }, 2000);

// // after the set Timeout happens it pushes it back onto the stack

// console.log('End');


/////// Call backs

// console.log('Start');

// function logInUser(email, password, callback) {
//     setTimeout(() => {
//         console.log('Now we have data')
//       callback({userEmail: email});  
//     }, 2000)
// }

// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback(['video1', 'video2', 'video3']);
//     },1000);
// }

// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback('Title Of The Video')
//     },1000);
// }

// // this is call back hell

// const user = logInUser('mve@yahoo.com', 12345, (user) => {
//     console.log(user)
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         })
//     });
// });


// console.log('Finish');


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

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting stuff from youtube');
//         resolve({videos: [1,2,3,4]});
//     }, 1000);
// });

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting stuff from facebook');
//         resolve({messages: [1,2,3,4]});
//     },2000);
// });

// Promise.all([yt,fb])
// .then(result => console.log(result));


// Async await

function logInUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have data')
          resolve({userEmail: email});  
        }, 2000)
    })
    
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        },1000);
    })
    
}

function videoDetails(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Title Of The Video')
        },1000);
    })
   
}

async function displayUser() {
    try {
    const logUser = await logInUser('ed', 13485);
    const videos = await getUserVideos(logUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(logUser);
    console.log(videos);
    console.log(detail);
    }

    catch(err) {
        console.log('We could not get the video')
    }

}

displayUser();