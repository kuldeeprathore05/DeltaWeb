//01 Material UI
//Libray of React UI components
//npm install @mui/material @emotion/react @emotion/styled
//npm install @fontsource/roboto (it uses roboto font , so usko bhi install kiya)
//npm install @mui/icons-material (icon oack install)
//Kuch material UI se use krna hai to uspe jao uska exppand code kro , then import kro , then code copy paste
//eg
import Button from '@mui/material/Button';

function App(){
    let handleClick=()=>{
        console.log("button was clicked")
    }
    return(
        <>
        <h1>Material UI Demo</h1>
        <Button varient ="contained" onClick={handleClick}>Click Me!</Button>
        </>
    )
}





//02  Building Serach Box
//Building a Weather Widget 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function Weather(){
    let [city , setCity] = useState("")
    let handleSearch=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=(event)=>{
        event.prventDefault();
        setCity("")
    }
    return(
        <div>
        <h3>Search for the weather!</h3> 
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleSearch}/>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} type="submit"> Send</Button>
        </form>
        </div>
    )
}

//button mein type="submit" alag se likha hai bass





//03  Using API Weather
//We will use OpenWeather 
//GEocoding API use krnege OpenWeather ki kyuki isme city se direct lonititude lantitue convert hoke weather aa jaenga
// https://openweathermap.org/current#geocoding

// API - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function Weather(){
    let [city , setCity] = useState("")
    let handleSearch=(event)=>{
        setCity(event.target.value)
    }

    
    const API_KEY = "d0f7da5908599f7f40ec580ac78908ba"
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"

    let getWeatherInfo=  async ()=>{
        let response = await fetch(`${API_URL}?=${city}&appid=${API_KEY}&units=metric`)
        let jsonResopnse = await response.json();
        console.log(jsonResopnse)
        console.log(jsonResopnse.main.feels_like)
        console.log(jsonResopnse.main.humidity)
        console.log(jsonResopnse.main.pressure)
        console.log(jsonResopnse.main.temp)
        console.log(jsonResopnse.main.temp_max)
        console.log(jsonResopnse.main.temp_min)
        console.log(jsonResopnse.weather[0].description)
    }

    let handleSubmit=(event)=>{
        event.prventDefault();
        setCity("");
        getWeatherInfo();
    }
    return(
        <div>
        <h3>Search for the weather!</h3> 
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleSearch}/>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} type="submit"> Send</Button>
        </form>
        </div>
    )
}

//        let response = await fetch(`${API_URL}?=${city}&appid=${API_KEY}&units=metric`)  
//     url ko esse fetch kiya hai isme city chiye thi aur api_key chiye thi , city to state hai upper let [city , setCity]... ye likha hai to city ho ${city} esse access ho hi jaegi aur api_key const mein likh di
//   &units=metric  ye isilye likha kyuki tempeature farahniet mein aa raha tha phele (documentation mein hi likha hai OpenWeather  ki )
// response ko json mein kiya , fir console kra ke dekh 






//04 Building Info Box
// &deg;C   --- degree celsius ke liye
// Typography mein bbhot sare div bana diiye isiliye component={"span"} ye likha typography ke andar





//05 Weather App Component








//*** App.jsx --> WeatherApp --> SearchBox.jsx & InfoBox.jsx  ****//
//Flow Samhjo, good code

