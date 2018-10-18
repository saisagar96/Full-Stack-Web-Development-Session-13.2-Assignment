window.onload = function() {

    var url = 'https://api.github.com/users/saisagar96';
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(tasksJson) {
        render(tasksJson);
    })
    .catch(function(err) {
        console.log(err);
    });

    function render(obj) {
        document.getElementById("login").innerHTML = "login : " + obj.login;
        document.getElementById("id").innerHTML = "id : " +  obj.id;
        document.getElementById("node_id").innerHTML = "node_id : " + obj.node_id;
        document.getElementById("avatar_id").innerHTML = "avatar_id : " + obj.avatar_url;
        document.getElementById("gravatar_id").innerHTML = "gravatar_id : " + obj.gravatar_id;
        document.getElementById("url").innerHTML =  "url : " + obj.url;
        document.getElementById("html_url").innerHTML = "html_url : " + obj.html_url;
        document.getElementById("followers_url").innerHTML =  "followers_url : " + obj.followers_url;
        document.getElementById("following_url").innerHTML = "following_url : " + obj.following_url;
        document.getElementById("gists_url").innerHTML = "gists_url : " + obj.gists_url;
        document.getElementById("starred_url").innerHTML = "starred_url : " + obj.starred_url;
        document.getElementById("subscriptions_url").innerHTML = "subscriptions_url : " + obj.subscriptions_url;
        document.getElementById("organizations_url").innerHTML = "organizations_url : " + obj.organizations_url;
        document.getElementById("repos_url").innerHTML = "repos_url : " + obj.repos_url;
        document.getElementById("events_url").innerHTML = "events_url : " + obj.events_url;
        document.getElementById("received_events_url").innerHTML = "received_events_url : " + obj.received_events_url;
        document.getElementById("type").innerHTML = "type : " + obj.type;
        document.getElementById("site_admin").innerHTML = "site_admin : " + obj.site_admin;
        document.getElementById("name").innerHTML = "name : " + obj.name;
        document.getElementById("company").innerHTML = "company : " + obj.company;
        document.getElementById("blog").innerHTML = "blog : " + obj.blog;
        document.getElementById("location").innerHTML = "location : " + obj.location;
        document.getElementById("email").innerHTML = "email : " + obj.email;
        document.getElementById("hireable").innerHTML = "hireable : " + obj.hireable;
        document.getElementById("bio").innerHTML = "bio : " + obj.bio;
        document.getElementById("public_repos").innerHTML = "public_repos : " + obj.public_repos;
        document.getElementById("public_gists").innerHTML = "public_gists : " + obj.public_gists;
        document.getElementById("followers").innerHTML = "followers : " + obj.followers;
        document.getElementById("following").innerHTML = "following : " + obj.following;
        document.getElementById("created_at").innerHTML = "created_at : " + obj.created_at;
        document.getElementById("updated_at").innerHTML = "updated_at : " + obj.updated_at;
    }
}