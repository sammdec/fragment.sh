import React from "react"
import ReactDOM from "react-dom"
import { createBrowserNavigation, app } from "navi"
import pages from "./pages"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

app({
  pages,
  exports: App,
  async main() {
    let navigation = createBrowserNavigation({
      pages
    })

    // Wait until the navigation has loaded the page's content,
    // or failed to do so. If you want to load other data in parallel
    // while the initial page is loading, make sure to start loading
    // before this line.
    await navigation.steady()

    // React requires that you call `ReactDOM.hydrate` if there is
    // statically rendered content in the root element, but prefers
    // us to call `ReactDOM.render` when it is empty.
    let hasStaticContent = process.env.NODE_ENV === "production"
    let renderer = hasStaticContent ? ReactDOM.hydrate : ReactDOM.render

    // Start react.
    renderer(<App navigation={navigation} />, document.getElementById("root"))
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(data => {
  console.log(data)
})
