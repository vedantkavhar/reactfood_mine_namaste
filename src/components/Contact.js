const Contact=()=>{
    return (
        <div className="m-4 p-4">
            <h1 className="font-bold text-xl ml-5">Contact us here</h1>
            <form className="m-2 p-2">
                <input type="text" placeholder="name" className="border border-orange-200 rounded-lg m-1 p-1" />
                <input type="text" placeholder="messages" className="border border-orange-200 rounded-lg m-1 p-1" />
                <button className="border border-orange-200 rounded-lg m-1 p-1">Submit</button>

            </form>
        </div>
    );
};

export default Contact;