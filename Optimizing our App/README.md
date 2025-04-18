We will see how can we write code in a better way and we will also see how we can optimze our app, how we can make our app performant, how we can make our app very fast, how we can make our app lightweight so that it loads on the web page very fast.

We will see about Custom Hooks but before that we need to learn important principle in computer science which is SINGLE RESPONSIBILITY PRINCIPLE what basically it means that suppose we have a function or if we have a class or if we have any single identity of our code so that should have a single responsibility. for example if we have RestaurantMenu component so the only job of RestaruantMenu should have to be displaying RestaurantMenu. So for each component that we create we should give it a single responsibility, and we should not do a lot of things in our component. If we are doing multiple things in same components, we should just break it down into different components. So this is a good way of maintaining the code into a modular fashion. Modularity means we break down our code into different smaller modules. so that the code become more maintainable and testable. How this makes our component testable? When we break down our code into smaller smaller pieces, small small components, small small different types of utiltiy fuctions so what happens is we test each and every small small piece of code we write test cases for one piece, second piece, third piece etc so if we write test cases properly and all the test cases got pass, so if we introduced with any bug, so we can catch that bug very easily and quickly. but if we have only one big component doing all the work so debugging will get very difficult.


CUSTOM HOOKS:
Hooks are utility functions they are like helper functions, custom hooks means we will just abstract we will just take out some responsibility from a component and extract in inside a hook so that our hook and our component becomes more modular and becomes more readable. Creating a custom hook is not mandatory thing but its a very good thing because that will make our code more readable, modular and that will make our code more reusable.


WHY WE NEED CUSTOM HOOKS:
We may need a custom hook in a situation where our component have more then one major responsibilities for example first major responsibilty is fetching the data and second major responsibility is displaying the data on to the web page. So if think that our component should only be concerned about displayin the data, it should worry where the data is coming from, how the data is coming from.

The best place to create these helper functions is in "utils" and always prefer to create a separate file for a separate hook thats a good convention to follow. and we have to named a file exactly same as the name of hook and whenever we are creating a hook, always start with the word "use" in small case and then remaining name in camel case like useRestaurantMenu. so if the fuction name starting with the small letter 'use' React will know that its a hook.


HOW TO MAKE A LARGE SCALE WEBSITE PERFORMANT AND FAST:
When we build website with several components then what happen is parcel, a bundler bundled the whole web js files into single js file and if the website is too large then the size of that bundled js file will high which makes web app slow and sluggish. So the js file size increases by how many components it loads. To make it fast and performant we have to break our app into smaller peices, means we will make smaller bundles of these files this process is known as:
-Chunking
-Code Splitting
-Dynamic Bundling
-Layzy Loading
-Dynamic Import
-Own Demand Loading // Whenever the user is going on to any particular page, only then load that page.

For example, if we are building a trip booking application where users can plan their trips with various options such as flights, hotels, trains, buses, and cabs, we can create separate bundles for each of these. This allows us to logically split our web application into smaller bundles, preventing a single bundle from becoming too large. By doing this, we ensure that the request for each JavaScript file remains lightweight, reducing load times and improving performance.

//How you make a large scale app lighter and performant? I can use Lazy Loading to distribute my code into different chunks.

//We can say that applying Lazy loading is just like making small applications inside a big application. So this is how we can logically split our website into smaller bundles so that we dont put a load on a single bundle, so that our request for that js file does not become so heavy that it take a lot of time to get into the browser.


APPLYING LAZY LOADING:
Here in our app let us assume our app is not just delivering food, it also start selling groceries. So here we are going to make different bundle for grocery and different bundle for our main food. We made Grocery.js Component. To apply Lazy Loading to any component we dont have to import it as usual, we have to import it by Lazy Loading. i.e:

const Grocery = lazy() //here Lazy is a function which is given to us by react, so we have to import it, ie:
import {lazy} from React;// and Lazy function takes a callback function in which we can write import.// this import is not same as usual import, This import is basically a function which will take the part of that Grocery. i.e:

const Grocery = lazy(()=> import(./Components/Grocery))

// Sometimes we got an error of react suspension because our Grocery component has to took some time to render on to the web page, and React is very fast, React cant wait for data coming from Grocery component and what happens is React try to load Grocery component but the code isnt there so it throws an error. To tackle this error we use Suspense component, and we have to wrap our component inside it and we have to give it a placeholder, so what happens is we have to give that Suspense a fallback(what should React render when the code isnt available) we need this placeholder fallback becuase when we are on the home page our code of Grocery is not there, so React tries to load something but it cannot load until the Grocery code is there, so meanwhile React wants something to be present on that screen and we can give that inside fallback inside suspense. and we can pass JSX in fallback.







