//01 Axios
//axios.githuh pe se cdn link copy krke html code mein laga doo
//fetch ki jagh ye isliye  use krte hai kyuki isme parse krne ki need nhi hai direct data nikal skte hai
let url = "https://catfact.ninja/fact"
let btn = document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();        //asynchronous hai mtlb agar yaha async await nhi kiya to promise return hoga
    console.log(fact) 
    let p = document.querySelector("#result")
    p.innerText = fact;

})

async function getFacts(){
    try{
    let res = await axios.get(url);
    return res.data.fact;
    }catch(e){
        console.log("error is ", e)
        return "nO fact found"
    }
    
}


//03 Sending Headers with API request
let url2 = "https://icanhazdadjoke.com"
async function getJokes(){
    try{                                                      
        const config = {header : {Accept : "application/json"}};
        let res = await axios.get (url, config);      //yaha header config nam ka vo pass krna pada appliction/json ,,nhi to res.data se html code aa rha tha
        console.log(res.data);
    
    }
    catch(e){
        console.log(e)
    }
}

