class Admin extends React.Component{
    state={
        
       
        status:true
       
    };

    render(){
        
        let renderData=null;
       
        if(this.state.status){
           renderData= ( <div>
               <div className="box1"> </div>
                <h1 >Now the color is Red</h1>
            </div>)

        }
        else{
            renderData=( <div>
                  <div className="box2"> </div>
              <h1> Now the color is Yellow</h1>
            </div>)

        }
        return (
            <div>
                {renderData}
                <button onClick={()=>{this.changeView()}}> click to change the</button>
            </div>
        )

    }
    
    
   changeView(){
       if(this.state.status){
           this.setState({
            status:false
           })
       }
       else{
           this.setState({
            status:true
           })
       }


   }
}


ReactDOM.render(<Admin />, document.getElementById("container"))