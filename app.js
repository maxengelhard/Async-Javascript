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