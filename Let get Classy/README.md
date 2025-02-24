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