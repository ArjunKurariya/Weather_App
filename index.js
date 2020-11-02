let temp = document.getElementById("temp");
       
temp.innerHTML = `${Math.round(30)}&deg;c`;


       
           const wApi = {
               key:"ebcd13f1eb1e950ec583ea7e06547d86",
               baseUrl:"https://api.openweathermap.org/data/2.5/weather"
           }
           
           const searchBox = document.getElementById('input_box');
           
           const bt = document.getElementById('btn');
   
            let city = document.getElementById('city');         
       
           bt.addEventListener("click",(event)=>{
                 
               
   fetch(`${wApi.baseUrl}?q=${searchBox.value}&appid=${wApi.key}&units=metric`)
       .then(weather=>{
               return weather.json();
                   }).then( data =>{       
           alert("Weather Report Of "+searchBox.value);    
           showReport(data)})
       .catch(err=>{
               console.log("error-> "+err)
               city.innerHTML = "City Not Found!!";                
   });    
           });


       



           
/*            
   function getReport(city){
       fetch(`${wApi.baseUrl}?q=${city}&appid=${wApi.key}&unit=metric`)     
       
       .then(weather=>{
           return weather.json();
       }).then( data =>showReport(data))
       .catch(err=>console.log(error));
   }
           
 */
           
   function showReport(weather){
       console.log(weather);
       
      
       city.innerHTML = `${weather.name},${weather.sys.country}`
       
      
       temp.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;
       
      var d = new Date();

      // let date = document.getElementById("date");
       //date.innerHTML = d.getDate();

       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*         
         let mon = document.getElementById("mon");
         mon.innerHTML = months[d.getMonth()];
         
         let ye = document.getElementById("ye");
          ye.innerHTML = d.getFullYear();

*/
       let min_max = document.getElementById('min_max');
       min_max.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c(min)/${Math.ceil(weather.main.temp_max)}&deg;c(max)`;
       
       let weatherType = document.getElementById('weather');
       
       weatherType.innerHTML = `${weather.weather[0].main}`;
       
       
       if (weatherType.textContent == 'Clear'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/clear (2).jpg')";
       }
       
       if (weatherType.textContent == 'Haze'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/haze.jpg')";
       }
       
       if (weatherType.textContent == 'Rain'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/rain.jpg')";
       }
       
       if (weatherType.textContent == 'Snow'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/normal_1.jpg')";
       }
       
       if (weatherType.textContent == 'Thunderstrom'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/thunder.jpg')";
       }
       
       
       if (weatherType.textContent == 'Clouds'){
           document.body.style.backgroundImage = "url('Weather_App_IMAGES/cloud.jpg')";
       }
       
       
       
       
       
   }        
     