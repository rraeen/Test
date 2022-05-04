class Admin extends React.Component{
    state={
        status:"Admin",
        Username:"Amit",
        userStatus:"User",
        AdminName:"Suresh",
        isAdmin:true
       
    };

    render(){
        let {status,Username,AdminName, userStatus,isAdmin}=this.state;
        let renderData=null;
       
        if(isAdmin){
           renderData= ( <div>
                <h1>status: {status} </h1>
                <h1>Home</h1>
                <h1>Welcome, {AdminName}</h1>
                <h2>Add product</h2>
            </div>)

        }
        else{
            renderData=( <div>
                 <h1>status:{userStatus} </h1>
                <h1>login</h1>
                <h1>Welcome, {Username}</h1>
                <h2>Please Login first</h2>
                
            </div>)

        }
        return (
            <div>
                {renderData}
                <button onClick={()=>{this.changeView()}}> click</button>
            </div>
        )

    }
    
    
   changeView(){
       if(this.state.isAdmin){
           this.setState({
               isAdmin:false
           })
       }
       else{
           this.setState({
               isAdmin:true
           })
       }


   }
}


ReactDOM.render(<Admin />, document.getElementById("container"))