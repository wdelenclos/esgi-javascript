

function ucfirst(string){
    if(typeof(string) == "string"){
        return string[0].toUpperCase()+string.slice(1);
    }
    else {
        return "";
    }
}

function capitalize(string){
    if(typeof(string) == "string") {
        return string.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    else {
        return "";
    }
}

function camelCase(string){
    if(typeof(string) == "string") {
        var st = capitalize(string).replace(/_/g, " ");
        return st.replace(/\s/g, '');
    }
    else {
        return "";
    }
}


function snake_case(string){
    return capitalize(string).toLowerCase().replace(/\s/g,'_');
}

function verlan(str) {
    return str.split("").reverse().join('');
}

