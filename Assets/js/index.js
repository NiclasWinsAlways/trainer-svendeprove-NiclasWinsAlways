document.addEventListener('DOMContentLoaded', () => {
/*   if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('ServiceWorker registration was successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      })
    })
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      document.querySelector(".hidden").classList.toggle("hidden", false);
    })
 */

const navSlide = () => {
  const burger = document.querySelector('.nav__burger');
  const navContainer = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li')

  burger.addEventListener('click', (e) => {
      console.log('clicked')
      if (navContainer) {
          navContainer.classList.toggle('nav-active')
          navLinks.forEach((link, index) => {
              if (link.style.animation) {
                  link.style.animation = "";
              } else {
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s`
              }
          })
      }

      burger.classList.toggle('fa-times')
  })
}
navSlide()

let loginButton = document.querySelector('.login');
let formName = document.getElementById('form__name');
 console.log(formName);
let formPass = document.getElementById('form__password');

const form = document.querySelector('.form');
console.log(formPass)


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formPass.value)
    loginButton.addEventListener('click', (e) => {

      form.style.display = "block"
})



fetch("http://localhost:4000/api/v1/users/1", {
    "method": "GET",
    "headers": {
        "": "",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkNUNCd3lhQ21xblVLODUxWFlYaThLLmY4RUFkanFraUQuN2h4RDkzSTRIOGdWR2NBazdhLi4iLCJ1c2VyRmlyc3ROYW1lIjpudWxsLCJ1c2VyTGFzdE5hbWUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiJ9LCJpYXQiOjE2MDQ2NTYxMjQsImV4cCI6MTYwNDY1OTcyNH0.Q7iimf3XIXh7cgPjm7ecfbuXxWiJ4cVEjAbiaKKhpjk"
    }
})
    .then(response => console.log(response))
    .catch(err => console.error(err));
    loginButton.addEventListener('click', (e) => {

      form.style.display = "block"
  
    });

  

   function token() {
    if (get_token = true) {
        return fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "username=user1&password=1234"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                get_token = data.token;

            })
    }
    document.onload = function () {
      let navTitle = document.querySelector('nav__title')
  }
  const searchBar = document.getElementById('search');
  
  
  const searchClasses = async searchText => {
  
      let data = await fetch('http://localhost:4000/api/v1/classes/')
  
      //console.log(data)
  
      let matches = data.filter(classes => {
          const regex = new RegExp(`^${searchText}`, "gi")
  
          return (
              classes.className.match(regex) ||
              classes.classDescription.match(regex) || classes.classDay.match(regex) || classes.trainer.trainerName.match(regex)
  
          )
          //console.log(classes)
      })
      if (searchText.length === 0) {
          matches = [];
      }
      if (searchText.length === 0) {
           document.querySelector(".search__middle-container").style.display =
           'none'
  
      } else {
           document.querySelector(".search__middle-container").style.display = 'block'
           document.querySelector(".search__middle-container").style.display = 'flex'
      }
      outputClasses(matches)
  
  };
  const outputClasses = matches => {
      if (matches.length > 0) {
  
          matches.forEach(element => {
              //console.log(element)
              const searchTemplate = document.querySelector(".search__template")
              const searchContainer = document.querySelector(".search__middle-container");
              const clone = searchTemplate.content.cloneNode(true);
  
              clone.querySelector('.search__image').src = element.asset.url;
              clone.querySelector('.search__middle-title').innerText = element.className;
  
  
  
              searchContainer.appendChild(clone)
            })
          }
          }
        }
      })
    });
