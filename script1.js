let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1744c557bcc57173a8b98fb65d494ce3`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="https://img.freepik.com/premium-vector/summer-thunderstorms-storm-clouds-thunderstorm-lightning-cloud-lightning-bolt-sketch-icon-infographic-website-app_646072-162.jpg?w=740"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="https://img.freepik.com/free-photo/blue-cloud-technology-symbol-icon_53876-15091.jpg?w=1060&t=st=1669570659~exp=1669571259~hmac=5b2a7f98d5079ee1358af9644ad0877f3834a1bae1d55e9cddab51150e288bb1g"    /*cloud*/
        }
       else if(id<600&& id>500)
        {
            tempicon.src="https://img.freepik.com/premium-vector/rain-cloud-vector-isolated-icon-emoji-illustration-cloud-with-rain-drops-vector-emoticon_603823-794.jpg?w=826"   /*rain*/
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="https://img.freepik.com/premium-vector/3d-realistic-weather-icon-snow-cloud-snowflakes_363543-495.jpg?w=740"  /*snow*/
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="https://img.freepik.com/free-photo/blue-cloud-technology-symbol-icon_53876-15091.jpg?w=1060&t=st=1669570659~exp=1669571259~hmac=5b2a7f98d5079ee1358af9644ad0877f3834a1bae1d55e9cddab51150e288bb1g"    /*cloud*/
        }
         else if(id==800)
        {
            tempicon.src="https://img.freepik.com/premium-vector/cloudy-icon-partly-sunny-weather-symbol-sun-blue-cloud_53562-14844.jpg?w=826"
        }



   
    }
catch(error)
{
    alert('city not found');
}





};
