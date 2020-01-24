1. What problem does the context API help solve?

Context API helps creating global data, using context you can avoid having to prop drill all the way down through components to get to other components etc.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions is what you are doing to activate the reducer command you have in place. reducers is managing global state with initial state and actions. store is placing all the information from your reducer into a place a component can then access it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is internal state that will only be needed within that component, ie managing form input values using some kind of value, set value command. This state is only needed within that component to be able to use the input correctly.

Application state is data that is going to be used through the application as in an api call data, or other states that will be needed throughout different components, and these components will probably be changed the state of the Application state as well.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows asnyc call to be made in order to use redux to fetch data. I have to use an action-creators since redux hooks doesn't really need actions, but using thunk requires me to create an async function to call data.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux with hooks, its as simple to use as context and reducer but can do a lot more especially with the use of middleware.
