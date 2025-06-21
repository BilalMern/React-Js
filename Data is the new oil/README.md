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