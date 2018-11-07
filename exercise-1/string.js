

function ucfirst(string){
    if(typeof(string) == "string"){
        return string[0].toUpperCase()+string.slice(1);
    }
    else {
        return "";
    }
}

function capitalize(string){
    return string.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function camelCase(string){
    var st =  string.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    });
    return st.replace(/\s/g,'');
}


function snake_case(string){
    camelCase(capitalize).toLowerCase().replace(/\s/g,'_');
}

function verlan(str) {
    return str.reverse();
}

