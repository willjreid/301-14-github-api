// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('/github/user/repos')
// .then(success, fail)
.then(
  // success
  data => data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`)),
  // fail
  err => console.error(err.status, err.statusText, 'is the way my stuff is broken'))
