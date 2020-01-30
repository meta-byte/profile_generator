

function generateHTML(git, color, stars) {

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
      <title>Document</title>
      <style>
          h1 {
              color: white;
          }
  
          .fa {
              color: black;
              font-size: 20px;
          }
  
          ul {
              padding-top: 70px;
              font-size: 20px;
          }
  
          li {
              padding-bottom: 30px;
          }
  
          img {
              margin: 20px;
              border-style: solid;
              border-color: white;
          }
  
          blockquote {
              margin: 20px 0;
              padding-left: 1.5rem;
              border-left: 5px solid ${color};
              padding-right: 1.5rem;
              border-right: 5px solid ${color};
          }
  
          footer {
              margin-top: 100px;
          }
      </style>
  </head>
  
  <body class="">
      <div class="">
          <div class="row ${color} z-depth-1">
              <div class="col s12 center ${color} darken-2">
                  <h1>${git.data.name}</h1>
              </div>
              <div>
                  <div class="col s4 center-align">
                      <ul>
                          <li><a class="fa fa-location-arrow"></a> ${git.data.location}</li>
                          <li><a class="fa fa-building"></a> ${git.data.company}</li>
                      </ul>
  
  
                  </div>
                  <div class="col s4">
                      <img class="responsive-img circle z-depth-2"
                          src="${git.data.avatar_url}">
                  </div>
                  <div class="col s4 center-align">
                      <ul>
                          <li><a href="${git.data.html_url}" target="_blank" class="fa fa-github"></a> Github</li>
                          <li><a href="${git.data.blog}" target="_blank" class="fa fa-rss"></a> Blog</li>
  
                      </ul>
                  </div>
              </div>
  
          </div>
          <div class="container">
              <div class="row">
                  <div class="col s12 center">
                      <blockquote class="">
                          <h5>${git.data.bio}</h5>
                      </blockquote>
                  </div>
              </div>
              <div class="row">
                  <div class="col s6 center">
                      <div class="card ${color}">
                          <div class="card-content white-text">
                              <span class="card-title">Public Repositories</span>
                              <h3>${git.data.public_repos}</h3>
                          </div>
                      </div>
                  </div>
                  <div class="col s6 center">
                      <div class="card ${color}">
                          <div class="card-content white-text">
                              <span class="card-title">Starred</span>
                              <h3>${stars}</h3>
                          </div>
                      </div>
                  </div>
  
              </div>
              <div class="row">
                  <div class="col s6 center">
                      <div class="card ${color}">
                          <div class="card-content white-text">
                              <span class="card-title">Followers</span>
                              <h3>${git.data.followers}</h3>
                          </div>
                      </div>
                  </div>
                  <div class="col s6 center">
                      <div class="card ${color}">
                          <div class="card-content white-text">
                              <span class="card-title">Following</span>
                              <h3>${git.data.following}</h3>
                          </div>
                      </div>
                  </div>
  
              </div>
  
          </div>
      </div>
  
      <footer class="page-footer ${color}">
          <div class="footer-copyright ${color} darken-2">
              <div class="container">
              </div>
          </div>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  
  </body>
  
  </html>`
}

module.exports = generateHTML