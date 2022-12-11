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
