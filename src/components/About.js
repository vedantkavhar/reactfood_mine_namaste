import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("parents consstructor 1")
    }
    // componentDidMount(){
    //     console.log("parent compponent mount 6")
    // }
    // componentDidUpdate(){
    //     console.log("parent component did update")
    // }
    render(){
        console.log("parents render 2")
        
        return(
            <div className="about-container w-1/3 m-auto right-0 left-0 text-center">


                {/* usercontext */}
                {/* <div><UserContext.Consumer>
                    {({loggedinuser})=><h1>{loggedinuser}</h1>}
                    </UserContext.Consumer>
                </div> */}

                
                <h1 className="font-bold text-xl">About Us page</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime voluptas rem cupiditate eum facilis ullam eaque iste laborum!</h3>
                {/* <User name={"vedant k from function comp props"} location={"Akola"} age={21}/> */}
                <UserClass name={"ved from class props"} location={"akola"} age={19}/>
                
            </div>
        )
    }
};
export default About;