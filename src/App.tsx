// // import { SimplePost } from "./components/1Simple/SimplePost"

// import { SimplePost } from "./components/7Snapshots/SimplePost";

// // import UseArrayExample from "./components/2Hooks/UseArrayExample";

// // import { PostWitComment } from "./components/3UserInterface/PostWithComment"

// // import { ShoppingList1 } from "./components/4Errors/ShoppingList1"
// // import { ShoppingList2 } from "./components/4Errors/ShoppingList2"
// // import { Post } from "./components/5Doubles/2SimpleMocks/Post"

// import { Post } from "./components/5Doubles/5msw/Post"


// function App() {
//   const ingredients = ['Apples', 'Bananas', 'Ham', 'Bread']

//   const someFunction = (selectedItem: string) => {
//     console.log(`Selected ${selectedItem}`)
//   }
  

//   return (
//     // <>
//     //  <SimplePost 
//     //  content="The sky is blue"
//     //  user="Alex"
//     //  likesBy={["John", "Mary"]}
//     //  />
//     // </>

//     // <>
//     // <UseArrayExample />
//     // </>

//     // <>
//     // <PostWitComment
//     // content="The sky is blue"
//     // user="Alex"
//     // />
//     // </>

//     // <>
//     // <h2>Shopping list 1:</h2>
//     // <ShoppingList1 
//     //   groceries={ingredients}
//     //   selectItem={someFunction}
//     // />
//     // <h2>Shopping list 2:</h2>
//     // <ShoppingList2
//     //   groceries={ingredients}
//     //   selectItem={someFunction}
//     // />
//     // </>

//      <Post
//        content="The sun is bright"
//        id="123"
//        user="Alex"
//       />
   
//   )
// }

// export default App

//Routing testing with React Testing Library - Jest/Vitest
// import {AppWithRoutes} from "./components/6Router/AppWithRoutes"
// function App(){
//   return <>
//   <AppWithRoutes />
//   </>
  
// }
// export default App;


//snapshot testing
import {SimplePost}  from "./components/7Snapshots/SimplePost";
function App(){
  return <>
    <SimplePost
    content="Simple content"
    user="Alex"
    likesBy={["John", "Mary"]}
    />
  </>
}
export default App;
