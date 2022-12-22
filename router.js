export class Router {
    routes = {}
    AddPages(PathName, PageName) {
        this.routes[PathName] = PageName
    }
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, '', event.target.href)
    
        this.Handle()
    }
    Handle() {
        const { pathname } = window.location
        let route = this.routes[pathname]
    
    
        fetch(route).then(data => data.text()).then(html => 
        document.querySelector('#pages').innerHTML = html)
    }
}