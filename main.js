prediction1 = "";

 Webcam.set({
     height: 300,
     width: 350,
     image_format: "png",
     png_quality: 100 });

Webcam.attach("#camera");

function captureImage(){
    Webcam.snap(function (image){
       document.getElementById("paste").innerHTML = "<img src = '"+image+"' id = 'imageTag'>"; 
    });
}

console.log("ml5 version ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bwz_CMpct/model.json", function(){
    console.log("Model Loaded");
});

function predictEmotion() {
    var img = document.getElementById("imageTag");
    classifier.classify(img, obtainedResults);
}

function obtainedResults(error, result){
    if(error) {
        console.error(error);
    }
    else{
        console.log(result);
        prediction1 = result[0].label;

    if(prediction1 == "Pointing Up Emoji"){
        document.getElementById("predict1Emoji").innerHTML = "👆"
    }
    if(prediction1 == "Thumbs Up"){
        document.getElementById("predict1Emoji").innerHTML = "👍"
    }
    if(prediction1 == "Hand With Fingers Splayed"){
        document.getElementById("predict1Emoji").innerHTML = "🖐"
    }

    if(prediction1 == "Super Emoji"){
        document.getElementById("predict1Emoji").innerHTML = "👌"
    }
    if(prediction1 == "Waving Hand"){
        document.getElementById("predict1Emoji").innerHTML = "👋"
    }
      
    
    document.getElementById("Result1").innerHTML = prediction1;
    }
}