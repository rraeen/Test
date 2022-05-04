class DataTransfer extends React.Component{
    state={
        data: "",
    };
    render(){
    
        return( 
            <div className="con">
                <div className={this.state.data}></div>
                <h1>Wait for 5 sec:{this.state.data}</h1>
                <SendMe fun={this.fun.bind(this)}/>
            </div>
        );
    }
    fun(d){
        setTimeout(()=>{
            this.setState({
                data:d,
            })
        },1000)
        
    }
}

class SendMe extends React.Component{
    render(){
        let data="ani"
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