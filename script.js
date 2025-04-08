// // const apikey = "20da423906ccf27bec8c2d81c8f4a2eb"
// // const apikey = "a691ff33a7edafd6c171c2c88521a78c";
// const apikey = "81b6ce30a90a16bf4b8b1a78ee1435fe"
// // const apikey = "68ff022d4bc3c260e5d275fd8ff5aad9"
// const WetherDataEle = document.querySelector(".wether-data")
// const cityNameEle = document.querySelector("#city-name")
// const fromEle = document.querySelector("form")
// const imgIcon = document.querySelector(".icon") 

// fromEle.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     // console.log(cityNameEle.value);
//     const cityValue = cityNameEle.Value

//     getWeatherData(cityValue)
// })

// async function getWeatherData(cityValue){
//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
//         if(!response.ok){
//             throw new Error("Network is not ok!")
//         }
//         const data = await response.json()
//         // console.log(data);

//     const temprature = Math.floor(data.main.temp)
//     const description = data.weather[0].description
//     const icon = data.weather[0].icon
//     const details = [
//         `Feels Like: ${Math.floor(data.main.feels_like)}° C`,
//         `Humidity: ${data.main.humidity}%`,
//         `Wind Speed: ${data.wind.speed} m/s`
//     ]
//     WetherDataEle.querySelector(".temp").textContent = `${temprature}° C`
//     WetherDataEle.querySelector(".desc").textContent=`${description}`

//     imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

//     WetherDataEle.querySelector(".details").innerHTML = details.map((detail)=>{
//         return `<div>${detail}</div>`
//     }).join("")


//        }catch(err){

//         weatherDataEle.querySelector(".temp").textContent = ""
//         imgIcon.innerHTML = ""
//         weatherDataEle.querySelector(".desc").textContent = "An Error Occurred!"
//        }
// }


const apiKey = "81b6ce30a90a16bf4b8b1a78ee1435fe"

const weatherDataEle = document.querySelector(".weather-data")
const cityNameEle = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(cityNameEle.value);
    const cityValue = cityNameEle.value

    getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
    try{
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok!")
        }

        const data = await response.json()
        // console.log(data);

        const temprature = Math.floor(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherDataEle.querySelector(".temp").textContent = `${temprature}°C`
        weatherDataEle.querySelector(".desc").textContent = `${description}`

        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

        weatherDataEle.querySelector(".details").innerHTML = details.map((detail)=>{
           return `<div>${detail}</div>`
        }).join("")

    }catch(err){
        weatherDataEle.querySelector(".temp").textContent = ""
        imgIcon.innerHTML = ""
        weatherDataEle.querySelector(".desc").textContent = "An Error Occurred!"

    }

}

