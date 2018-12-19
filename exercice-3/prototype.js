
String.prototype.ucfirst = function(string){
    if(typeof(string) == "string"){
        return string[0].toUpperCase()+string.slice(1);
    }
    else {
        return "";
    }
};

String.prototype.capitalize = function(string){
    if(typeof(string) == "string") {
        return string.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    else {
        return "";
    }
};

String.prototype.camelCase = function(string){
    if(typeof(string) == "string") {
        var st = capitalize(string.replace(/_/g, " "));
        return st.replace(/\s/g, '');
    }
    else {
        return "";
    }
};


String.prototype.snake_case = function(string){
    return capitalize(string).toLowerCase().replace(/\s/g,'_');
};

String.prototype.verlan = function(str) {
    var strs = str.split(" ");
    var res = "";
    for (s in strs){
        res += " "+strs[s].split("").reverse().join('');
    }
    return res;
};

String.prototype.yoda = function(str){
    var result = "";
    var wordArray = str.split(" ");
    for(var i = wordArray.length - 1; i >= 0; i--) {
        result += wordArray[i] + " ";
    }
    return result.trim();
};

String.prototype.leet = function(str){
    if(typeof(string) == "string") {
        var chrs = {'a': '4', 'e': '3', 'i': '1', 'y': '7', 'u': '(_)', 'o': '0'};
        return str.split("").map(function (val) {
            return chrs[val.toLowerCase()] || val
        }).join('');
    }
    else {
        return "";
    }
};



const prop_access = (object, propertyPath = '') => {
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if (object === null) {
        console.log(object + ' not exist');
        return;
    }

    let newObj = object;
    let path = '';
    for (let prop of propertyPath.split('.')) {
        path += '.' + prop;
        if (newObj.hasOwnProperty(prop)) {
            newObj = newObj[prop];
        } else {
            console.log(path.slice(1) + ' not exist');
            return;
        }
    }

    return newObj
};
