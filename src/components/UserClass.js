import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"dumm",
                location:"akola",
                avatar_url:"https:?//",
            }
        };
        console.log("child constuctor 3")
    }
    
    async componentDidMount(){
        console.log("child compponent mount 5  APICALL ")
        // make apicalls 
        const data=await fetch("https://api.github.com/users/vedantkavhar");
        const json =await data.json();
        this.setState({
            userInfo:json,
        })


    }
    componentDidUpdate(){
        console.log("componet did update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    
    render() {
        // const {name,location}=this.props;
        // const {cnt}=this.state;
        console.log("child render 4")
        
        return(
            <div className="userclass">
                <h4>Github userName:{this.state.userInfo.login}</h4>
                {/* <h4>Location:{this.state.userInfo.location}</h4> */}
                <h4 className="absolute ml-24">Github Avatar :</h4>
                <img src={this.state.userInfo.avatar_url} className="w-10 h-10 m-auto left-0 right-0" /> 
                {/*  <h4>Age:{this.props.age}</h4> */ }
            </div>



            /* <h2>Count:{this.state.cnt}</h2>
            <h2>Count:{this.state.cnt2}</h2>
            {/* <h2>Count:{cnt}</h2> */
            // <button id="vedbtn" onClick={()=>{
            //     //never update state variables  DIRECTLY
            //     this.setState({
            //         cnt:cnt+1,
            //         cnt2:this.state.cnt2+1,
            //     })
            // }}>Count increase</button> */}
        );
    }
};

export default UserClass;