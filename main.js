Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_qualtity:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML='<img id="image" src="'+data_uri+'">';

    });
}
console.log( 'ml5.version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9d9YU4ivA/model.json', modelloaded);

function modelloaded(){
    console.log('modelloaded')
}

function identify(){
    img=document.getElementById("image");
    classifier.classify(img, got_result);
}

function got_result(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML= results[0].label;
        accuracy= results[0].confidence.toFixed(4)
        document.getElementById("object_accuracy").innerHTML= accuracy * 100 + "%";
    }
}