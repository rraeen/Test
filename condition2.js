class Admin extends React.Component{
    state={
        admin:"Admin",
        user:"User",
       
        isAdmin:true
       
    };

    render(){
        
        let renderData=null;
       
        if(this.state.isAdmin){
           renderData= ( <div>
                <h1 > i am {this.state.admin}</h1>
            </div>)

        }
        else{
            renderData=( <div>
              <h1> i am {this.state.user}</h1>
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