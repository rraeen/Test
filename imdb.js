
let btn=document.getElementById("btn")
let Area=document.getElementById("Area")
let name=document.getElementById("movie")



let url;
btn.addEventListener("click", function(e){
    e.preventDefault()
    let search= document.forms["fm"]["search"].value

   let url=`http://www.omdbapi.com/?s=${search}&apikey=f056e2f7`
  
   
   
   
   let imdb= async()=>{
    let response=await fetch(url)
    let data= await response.json()
    let arr=Object.values(data);
    console.log(data);
    let item=arr[0]


   item.map((val,index)=>{
       
        console.log(item[index].Title);
        Area.innerHTML += `<div id="Area">
                              <div class="card">
                              <img src="${item[index].Poster}">
                              <p id="m">${item[index].Title}</p>
                              <p id="y">(${item[index].Year})</p>
                              </div>
                          </div>
                              
                              `
        
        return

    })
  
    }
    imdb()  
})

// Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
// Title: "Lagaan: Once Upon a Time in India"
// Type: "movie"
// Year: "2001"
// imdbID: "tt0169102"














