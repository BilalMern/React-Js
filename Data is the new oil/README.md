We will see about Higher Order Functions:
Our first task is to add a promoted label to those restaurant cards who has promoted value (true) in there data. for that we have to make a function which takes RestaurantCard as input and give a new Component having updated promoted label on the card.

HIGHER ORDER COMPONENTS:
used to enhanced the component, they are just a normal fuction which takes a component and return other component which is enhanced. It's a pattern used for code reuse and logic abstraction.

LIFTING THE STATE UP IN REACT:
Lifting State Up is the pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow as props and action (such as evnets) to flow up.

UseCase:
When you have two or more components that needs to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.

PROPS DRILLING:
Prop drilling refers to the situation where you pass data through multiple layers of components, even if intermediate components don’t need that data—they just pass it along.

props only flow one way (from parent → child), and there's no automatic "skip to grandchild" mechanism. 
If you don't pass message from Child, then GrandChild won’t receive it — because there's no magic bridge between Parent and GrandChild.

❓ Why is Prop Drilling Seen as a Problem?
Because:

It makes your code harder to maintain.

If you refactor or add new levels (e.g., GreatGrandChild), you have to keep passing props through layers that don’t care about them.

Components get bloated with irrelevant props.

✅ Alternatives to Avoid Prop Drilling
Context API (best built-in solution for global/shared state)

State management libraries (like Redux, Zustand, Recoil)

Lifting state to a common ancestor and selectively passing where needed



REACT CONTEXT API:
React Context API is a way to share data (like state or functions) across many components, without passing props manually at every level (avoiding prop drilling).

🛠️ How to Use Context API (Step by Step)
✅ 1. Create a Context
js
import { createContext } from 'react';

const MyContext = createContext();

✅ 2. Provide the Context (in a parent component)
jsx

<MyContext.Provider value={/* some data */}>
  {/* all components inside this can access the value */}
</MyContext.Provider>

✅ 3. Consume the Context (anywhere inside)
js

import { useContext } from 'react';

const value = useContext(MyContext);



🌍 Imagine This:
You're in a classroom.

The teacher (👩‍🏫) has a board at the front where they write the day's topic.

All students (🧑‍🎓) read from the same board.

If the teacher writes “Math” — all students know the subject is Math.

This "board" is like the Context Provider. It provides shared data (e.g., subject = "Math") to everyone (students/components) without passing it one by one.

💡 In React Terms:
Context = The board (shared place for data)

Provider = The teacher writing on the board

useContext() = Students reading from the board



//If we have to pass data to one or two levels this is still ok there is no need of using Context API, but what if our data is present somewhere and we want to access it somewhere else. In a large application this is the very common senario where sometimes we need to have a some kind of global data that I can access anywhere in my app wherever i am, whatever nested level I am, whether Im in Header, whether im in Footer, whether Im in ItemList, whether Im in any place, I want to access some data, how we can do that for that React gives us superpower and that superpower is known as React Context. While we use Context we can just avoid props drilling. A lot of people think that if have some global data, I will keep it in the top level component and then I will pass it as a props but how much level? Its foolish to pass some data from props to like 10 levels deep, not a good way, so what er can do is we use Context which is kind of like a global place where our data is kept and anybody can access it. That is known as React Context.
What Im trying to say is there is some data that we need but it can be accessed from anywhere in our app, for that data we hold it inside a context and that context can be used anywhere in our app.

What Context Solves?
Context solves the problem of props drilling, If we had a central store where we can keep the data, we dont need to drill down the props. Now I can access it anywhere I want to. So in React there are many ways to avoid props drilling but context is also a good way to cure props drilling.

If we had a central store where we can keep the data, we dont need to drill down the props. Now we can access it anywhere we want.