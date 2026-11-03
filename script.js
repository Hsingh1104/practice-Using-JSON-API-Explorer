function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response){
            console.log(response);
            return response.json();
        })
        .then(function (json){
            console.log(json)
            const postList = document.getElementById("postList");
            json.forEach(function (post) {
                let postDiv = document.createElement("div");
                postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p> ${post.body}</p>`;
            postList.appendChild(postDiv);
            })
        })
}

function createPost (event) {
    fetch ("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
}

