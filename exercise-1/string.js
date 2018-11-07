

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
        var st = capitalize(string.replace(/_/g, " "));
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

function leet(str){
    var chrs = {'a':'4','e':'3','i':'1','y':'7','u':'(_)','o':'0'};
    return str.split("").map( function(val) { return chrs[val.toLowerCase()] || val}).join('');

}



function prop_access(key, sub){


    else{
        console.log('not exist”');
    }
}