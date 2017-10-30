
$('#textButton').on('click', (e) => {
    fetch('sample.txt')
    .then((response) => response.text())
    .then((data) => {
        $('#output').html(data);
        console.log(data);
    })
    .catch((err)  => console.log(err))
    return false;
});

$('#usersButton').on('click' , (e) => {
    // console.log(e);
    // let output = '';
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => (response.json()))
    .then((data) => {
        console.log(data);
        let posts = data;
        console.log("posts", posts);
        $.each(posts, (k, post) => {
            $('#output').append(`
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `);
        });
    })
    .catch((err) => console.log(err));
});

$('#people').on('click', (e) => {
    // console.log(e);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let title = $('#title').val();
    let body = $('#body').val();

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-type", "application/json");
    let fetchData = {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body
        }),
        headers: myHeaders
    }

    let myRequest = new Request(url, fetchData);
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers : {
    //         "Accept": "application/json, text/plain, */*",
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({title: title, body: body})
    // })

    fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
})


$(document).ready(() => {
    // getUsers();
})

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);  
}

// function getUsers() {
    const url = 'https://randomuser.me/api/?results=10';
    var ul = $('#list-flex');
    console.log(ul)
    ul.append(createNode('div'));
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        let people = data.results;
        // $.each(people, (k, person) => {

        // })
        return people.map(function (person) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = person.picture.medium;
            span.innerHTML = person.name.first;
            append(li, img);
            append(li, span);
            // append(ul, li);
            ul.append(li)
            console.log(li)
        })
    })
// }