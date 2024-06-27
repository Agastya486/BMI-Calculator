function calculate(){
        //taking the height, and weight value from the user input
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        
        //taking the error message ID
        let errorParent =document.getElementById("error-parent");
        let errorMessage = document.getElementById("error-message");
        
        //checking if the height and weight is an integer
        if(isNaN(height) || isNaN(weight)){
                errorParent.style.display = "block";
                errorMessage.innerHTML = "Must be a number!";
        }
        
        else if(height < 100){
                errorParent.style.display = "block";
                errorMessage.innerHTML = "Must enter minimum of 3 digits in height!";
        }
        
        else{
                height = height/100; //calculate the BMI
                const result = weight/(height*height);

                const bmiScore = document.getElementById("index-score"); //giving the BMI result
                bmiScore.innerHTML = "Your BMI is: " + result.toFixed(1);

                let category = document.getElementById("category");

                if(result < 18.5){ //categorizing the BMI
                        category.innerHTML ="Underweight";
                        category.style.color = "red";       
                }
                
                else if(result >= 18.5 && result < 25){
                        category.innerHTML ="Normal Weight";
                        category.style.color = "green";
                }

                else if(result >= 25 && result < 30){
                        category.innerHTML ="Overweight";
                        category.style.color = "orange";
                }
                
                else if(result >= 30){
                        category.innerHTML ="Obese";
                        category.style.color = "red";
                }
                
        }
        
}

const button = document.getElementById("btn-confirm");
button.addEventListener("click", calculate);