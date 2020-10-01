// Assignment Code
var generateBtn = document.querySelector("#generate");

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  alert("You will be presented with a series of prompts for your passwords criteria")
  var length = prompt("How long you whant your password to be? It should be between 8-128 characters")
  if(length >= 8 && length <= 128){
    alert("Write yes if you want the following criterias or no if you don't want it")
    var lower = prompt("Do you want any lowercase?yes or no?")
    lower = lower.toLowerCase()
      if(lower == 'yes' || lower == 'no'){
        var upper = prompt("Do you want any upercase?yes or no?")
        upper = upper.toLowerCase()
          if(upper == 'yes' || upper == 'no'){
            var numeric = prompt("Do you want any number?yes or no?")
            numeric = numeric.toLowerCase()
                if(numeric == 'yes' || numeric == 'no'){
                  var special = prompt("Do you want any special character ?yes or no?")
                  special = special.toLowerCase()
                      if(special == 'yes' || special == 'no'){
                      }else{
                        alert("You should choose between 'yes' or 'no' ")
                      }

                }else{
                  alert("You should choose between 'yes' or 'no' ")
                }
          }else{
              alert("You should choose between 'yes' or 'no' ")
            }
      }else{
          alert("You should choose between 'yes' or 'no' ")
      }  
  }else{
      alert("You should choose between 8 and 128 characters")
  }
  var pass = []
  var a = []
 
      if(lower == 'yes'){
        var lowerlist = ['a',	'b'	,'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        for(var i = 0 ; i < length; i++){
        pass.push(lowerlist[Math.floor(Math.random()*26)])
        }
        a.push(lowerlist[Math.floor(Math.random()*26)])
        
      }
      if(upper == 'yes'){
        var upperlist = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z']
        for(var i = 0; i < length; i++){
        pass.push(upperlist[Math.floor(Math.random()*26)])
        }
        a.push(upperlist[Math.floor(Math.random()*26)])
      }
      if(numeric == 'yes'){
        var numlist = []
        for (var i = 0; i < 10; i++){
          numlist[i] = i
        }
        for(var i = 0; i < 10; i++){
          pass.push(numlist[Math.floor(Math.random()*10)])
      }
      a.push(numlist[Math.floor(Math.random()*10)])
  
    }
      if(special == 'yes'){
        var speciallist = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
        for(var i = 0; i < 31; i++){
          pass.push(speciallist[Math.floor(Math.random()*31)])
        }
        a.push(speciallist[Math.floor(Math.random()*30)])
      
      }
  for(var i = a.length; i < length; i++){
    a.push(pass[Math.floor(Math.random()*pass.length)])
  }
  a = a.join('')
  return a
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
