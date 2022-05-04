class DataTransfer extends React.Component{
    state={
        val: "",
    };
    render(){
    
        return( 
            <div>
                
                <h1>Parent:{this.state.val}</h1>
                <SendMe fun={this.fun.bind(this)}/>
            </div>
        );
    }
    fun(data){
        this.setState({
            val:data,
        })
    }
}

class SendMe extends React.Component{
    render(){
        let data=" Data received"
        return(
            <div>
                <button onClick={()=>{
                    this.props.fun(data);
                }}> Click me</button>
            </div>
            
        )
    }
}
ReactDOM.render(<DataTransfer />, document.getElementById("container"))