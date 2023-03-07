export class Router {
  routes = {}

  addRoute(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => { document.querySelector('#app').innerHTML = html })

    this.changeImagebg()
  }

  changeImagebg() {
    const { pathname } = window.location
    if (pathname == '/') {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe01.png)'
    }
    if (pathname == '/explorer') {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe03.png)'
    }
    if (pathname == '/universe') {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe02.png)'
    }
  }
}

export default new Router()