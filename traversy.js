// Callbacks

// const posts = [
//     {title: 'Post One', body: 'This is post 1'},
//     {title: 'Post Two', body: 'This is post 2'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         });
//         document.querySelector('h2').innerHTML = output;
//     },1000);
// }
// This is the one that doesn't work because it takes to long
// function createPost(post) {
//     setTimeout(() => {
//         post.push(post);
//     },2000)
// }
// getPosts();
// createPost(post);

// this doesn't work becuse the getPost has already fired and taken in the two. the third was not in yet

////// Here is a callback
// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     },2000)
// }



// createPost({title: 'Post Three', body: 'This is post 3'},getPosts);

////// Promises

const posts = [
    {title: 'Post One', body: 'This is post 1'},
    {title: 'Post Two', body: 'This is post 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.querySelector('h2').innerHTML = output;
    },1000);
}

function createPost(post) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            posts.push(post);
            resolve();
        },2000);
    })
}
// here is a promise!
// createPost({title: 'Post Three', body: 'This is post 3'})
// .then(getPosts)

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));
// waits till all are good and then will console .log values

//////// Asyc / Await

// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post 3'})
//     getPosts();
// }

// init();


//////// Await with fetch

async function fetchUsers() {
    const res = await (await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')).json();

    console.log(res);
}

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json());
fetchUsers();