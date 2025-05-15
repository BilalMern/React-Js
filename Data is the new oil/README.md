We will see about Higher Order Functions:
Our first task is to add a promoted label to those restaurant cards who has promoted value (true) in there data. for that we have to make a function which takes RestaurantCard as input and give a new Component having updated promoted label on the card.

HIGHER ORDER COMPONENTS:
used to enhanced the component, they are just a normal fuction which takes a component and return other component which is enhanced. It's a pattern used for code reuse and logic abstraction.

Lifting the State up in the React:
Lifting State Up is the pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow as props and action (such as evnets) to flow up.

UseCase:
When you have two or more components that needs to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.