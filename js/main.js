let imageAr = ['website-images-assets/main_2529_image4.png', 'website-images-assets/CantorLectureTheatre3.jpg'
, 'website-images-assets/CantorAtrium3.jpg', 'website-images-assets/CantorGallery.jpg', 'website-images-assets/ACES-036-Computing-Playstation-Lab-2.jpg'];

console.dir(imageAr);

document.getElementById('CollegeImages').setAttribute('src', imageAr[4]);

let counter = 0;

function chgImage(){
    if (counter < imageAr.length){
        document.getElementById('CollegeImages').setAttribute('src', imageAr[counter]);
        counter++;
    }
    else{
        counter = 0;
    }    
    console.info('Called');
}

setInterval(chgImage, 7000);

document.getElementById('CollegeImages').addEventListener('click', 
function(){
    if (counter < imageAr.length){
        document.getElementById('CollegeImages').setAttribute('src', imageAr[counter]);
        counter++;
    }
    else{
        counter = 0;
        document.getElementById('CollegeImages').setAttribute('src', imageAr[counter]);
    }
})