let c=0,p=0,l=0,k=0,m=0;
document.addEventListener("DOMContentLoaded", function () {

    
    const btncountModL1=document.getElementsByClassName("Correct1")
    const btncounterModL1=Array.from(btncountModL1);
    btncounterModL1.forEach((btncounterModL1, index) => {
        btncounterModL1.addEventListener("click", () => {
            // Check if the radio button has not been clicked before
            if (!btncounterModL1.disabled) {
                // Increment the click count for this radio button
                l++;
                p++;
                console.log(c,k,l,m,p);
    
    
                // Disable the radio button to prevent further clicks
                btncounterModL1.disabled = true;
                SubmitTest(c,k,l,m,p);
    
            }
        });
        
            console.log("Hello");
        
    }); 
    
    if(document.getElementsByClassName("MCorrect")){
const btncount=document.getElementsByClassName("MCorrect")
const btncounter=Array.from(btncount);
btncounter.forEach((btncounter, index) => {
    btncounter.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter.disabled) {
            // Increment the click count for this radio button
            c++;
            p++;
            console.log(c,k,l,m,p)


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            SubmitTest(c,k,l,m,p);

            }
    });
    
        console.log("Hello");
    
});}

if(document.getElementsByClassName("CheckerW")){
    const btncounti=document.getElementsByClassName("CheckerW")
    const btncounteri=Array.from(btncounti);
    btncounteri.forEach((btncounteri, index) => {
        btncounteri.addEventListener("click", () => {
            if (!btncounteri.disabled){
                p++;
                console.log(c,k,l,m,p);
            
            btncounteri.disabled = true;
            SubmitTest(c,k,l,m,p);
            }

        });
    });

}

const btncountMod=document.getElementsByClassName("GCorrect")
const btncounterMod=Array.from(btncountMod);
btncounterMod.forEach((btncounter, index) => {
    btncounter.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter.disabled) {
            // Increment the click count for this radio button
            k++;
            p++;
            console.log(c,k,l,m,p);


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            SubmitTest(c,k,l,m,p);

        }
    });
    
        console.log("Hello");
    
});



const btncountModL2=document.getElementsByClassName("Correct2")
const btncounterModL2=Array.from(btncountModL2);
btncounterModL2.forEach((btncounterModL2, index) => {
    btncounterModL2.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounterModL2.disabled) {
            // Increment the click count for this radio button
            m++;
            p++;
            console.log(c,k,l,m,p);


            // Disable the radio button to prevent further clicks
            btncounterModL2.disabled = true;
            SubmitTest(c,k,l,m,p);

        }
    });
    
        console.log("Hello");
    
});


function SubmitTest(c,k,l,m,p){
    let Submit=document.getElementById("Test");
    Submit.addEventListener("click", () => {
        if(c<=Math.min(c,k,l,m,p) && p==12){
            console.log("Weak In Calculus");
            window.location.href="calculus.html";
        }
        if(k<=Math.min(c,k,l,m,p) && p==12){
            console.log("Weak In trignometry");
            window.location.href="trignometry.html";

           
            
        }
        if(l<=Math.min(c,k,l,m,p) && p==12){
            console.log("Weak In algebra");
            window.location.href="algebra.html";
        }
        if(m<=Math.min(c,k,l,m,p) && p==12){
            console.log("Weak In coordinate");
            window.location.href="coordinategeometry.html";
        }
        
    });

}


$('#modal-body').on('show.bs.modal', function (e) {
    SubmitTest(c,k,l,m,p);
});
});