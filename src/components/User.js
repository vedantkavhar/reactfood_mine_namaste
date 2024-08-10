
const User = (props) => {

    return (
        <div className="user">
            <h4>Name:{props.name}</h4>
            <h4>Location:{props.location}</h4>
            <h4>Age:{props.age}</h4>
           
        </div>
    );
};

export default User; 