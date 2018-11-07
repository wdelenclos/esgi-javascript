

function ucfirst(string){
    if(typeof(string) == "string"){
        return string[0].toUpperCase()+string.slice(1);
    }
    else {
        return "";
    }
}
function capitalize(string){
    var resultString = "";
    if(typeof(string) == "string"){
        for(var i = 0; i < string.length; i++){
            if(i == 0){
                resultString += string[i].toUpperCase();
            }
            else{
                if(string[i-1] == " "){
                    resultString += string[i].toUpperCase();
                }
                else{
                    resultString += string[i];
                }
            }
        }
        return resultString;
    }
    else {
        return "";
    }
}

function camelCase(string){
    var resultString = "";
    if(typeof(string) == "string"){
        for(var i = 0; i < string.length; i++){
            if(i == 0){
                resultString += string[i].toUpperCase();
            }
            else{
                if(string[i] == " "){
                    resultString += string[i+1].toUpperCase();
                    i++;
                }
                else{
                    resultString += string[i].toLowerCase();
                }
            }
        }
        return resultString;
    }
    else {
        return "";
    }
}


function snake_case(string){
    var resultString = "";
    if(typeof(string) == "string"){
        for(var i = 0; i < string.length; i++){
            if(i == 0){
                resultString += string[i].toLowerCase();
            }
            else{
                if(string[i] == " "){
                    resultString += "_";
                }
                else{
                    resultString += string[i].toLowerCase();
                }
            }
        }
        return resultString;
    }
    else {
        return "";
    }
}
