function MyComp(){
    const[arr,setArray]=React.useState([1,2,3,4,5,6,7,8,9,10]);

    
    return(
        <div>
        <h1> First component </h1>
        <h1>{arr}</h1>
        
        <Comp2 />
      
        
        </div>
    )

}


function Comp2(){
    const[obj,setObj]=React.useState(
        { name:"Raunak",
        
        id:123
         });

    let fun=()=>{
        setObj({
            
            name:"Sai",
            id:234
        }
        )
        
    }
    return(
        <div>
        <h1>Second component  </h1>
        <h1>name:{obj.name}</h1>
        <h1>id:{obj.id}</h1>
        <button onClick={()=> fun()}>Change my name</button>

       
        </div>
    )

}
ReactDOM.render(<MyComp />, document.getElementById("container"))