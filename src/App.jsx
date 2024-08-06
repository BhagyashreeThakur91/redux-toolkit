import AddNewBlog from "./blog-app/add-new-blog"
import BlogList from "./blog-app/blog-list"
// import CounterButton from "./counter-example/counter-button"
// import CounterValue from "./counter-example/counterValue"

function App() {
  return (
    <div>
      <h1>Blog List App</h1>
      {/* <CounterButton/>
      <CounterValue/> */}
      <AddNewBlog/>
      <BlogList/>
    </div>
  )
}

export default App
