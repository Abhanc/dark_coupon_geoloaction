function loadCoupon() {
    document.getElementById('mainDiv').style.visibility='visible';
    document.getElementById('couponButton').style.visibility='hidden';

}
const closeItem = () => {
    document.getElementById('mainDiv').style.visibility='hidden';
}

const changMode =() =>{
    let mybody = document.body;
    mybody.classList.toggle('newBackground');
}

const couponButton =() => {
    document.getElementById('couponButton').style.visibility='visible';
}



// giolocation?\

            let x = document.getElementById('out');
            let y = document.getElementById('weather');

            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText = "Geo Not Supported";
                }
            }

            function showPosition(data){
                console.log(data);
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
                let out = `Latitude ${lat} \n longitude:  ${long}`;
                x.innerText = out;
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                ///api calling
                fetch(url,{method: 'GET'})
                //return promise
                .then((res) => res.json())
                //return data
                .then((data) => {
                    console.log(data)
                    let city = data.city.name;
                    let temp = data.list[0].temp.day;
                    y.innerText = ` \n ${city} \n ${temp} °C`
                })
            }
