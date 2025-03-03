CLASS BASE COMPONENTS:
We made User component to call it in About component.

A Class base component is just a normal javascript class. To create one we have to write class keyword and then name of the component and to make this a component what we will do is we will extends React.Component: i.e

class UserClass extends React.Component{

}
We have render method inside it which gives us piece of JSX. So we can say that class base component is a class which is render method which gives JSX. React.Component is basically a class which is given to us by react so we have to import React from 'react'. 

To pass props to class base component we have to create a constructor and this constructor will now recieve the props and we have to write keyword super(props): i.e
class UserClass extends React.Component{
    Constructor(props){
        super(props)
    }
    render(){
    return(
        JSX
    )
    }
}
When we say we are rendering a functional component what does it mean so basically on our web page if there is a functional component, it loads so that means we are mounting that functional component, we are kind of like calling that function, we are invoking that functonal component. So whenever we say invoking a functional Component that means we are loading or mounting that function on to the webpage.    

When we are creating instance of a class means loading a class base component means creating an instance of class. So when we say we are loading class base component on our webpage it means we are creating instance of that class.

STATE VARIABLE IN CLASS BASE COMPONENT:
If we have to create a state variable inside class component so the best place to create it is inside the constructor method. We can make state variable by something known as this.state where state is basically a big whole object which contains state varaibles: i.e,
constructor(props){
super(props)
this.state={
    count:0
}
}
to update it react gives us this.setState() which takes an object which contain the updated value of state variable.