# reactfood
# lecture 8 notees from 1hr

## **compoonent did mount is bestplace for api calls**

## React component lifecycle
- parent construnctor
- parent render
- child construnctor
- child render
- child componentdid mount
- parent componentdid mount

### when 2 childs lifecycle will be
- parent construnctor
- parent render
- child1 construnctor
- child1 render

- child2 construnctor
- child2 render
- child1 componentdid mount
- child2 componentdid mount
- parent componentdid mount

- diagram for compondent lofecycel
- ![diagram for compondent lofecycel](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)



### update phase 
#### Mounting
- constructor(duummy data)
- render(duummy data)
- html dom (duummy data)
- Component did mount (update star var with api data)
 - api call 
 - this.setstate (update state var)

#### Update 
- render(with api new daate)
- html load dom (new data)
- Component did update

#### Unmount
- ComponentWillUnmount(if new page clicked)



# After 2hr from old live class
-
[showing how rerender happed when state var changes in class based comp compared to funciton based useEffect()]
![alt text](image.png)