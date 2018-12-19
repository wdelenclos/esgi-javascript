
// Verifier que le type de l'arg1 correspond à l'arg 2
// type_check_v1(1, "number");
function type_check_v1(val, type){
    switch (type) {
        case 'undefined':
            return val === undefined;
        case 'null':
            return val === null;
        case 'array':
            return Array.isArray(val);
        case 'function':
            if(val !== null && val !== undefined){
                return val && {}.toString.call(val) === '[object Function]';
            }
            else{
                return false;
            }
        case 'nullNotObject' || 'arrayNotObject':
            return false;
        default:
            return (typeof val === type.toLowerCase());
    }
}

// Verifier un objet en entrée
//({prop: 1}, {type: 'object'})
// ("string", {type: string,  value: "foo"}
// (3, {enum:["foo", "bar", 3]}

function type_check_v2(val, obj ){
    let valValidity;
    let typeValidity;
    if(obj.hasOwnProperty('type')){
        typeValidity = typeof val === obj.type.toLowerCase();
    }
    if(obj.hasOwnProperty('enum')){
        valValidity =  obj.enum.includes(val);
    }
    else if (obj.hasOwnProperty('value')){
        valValidity = (val === obj.value);
    }
    else{
        valValidity = true;
    }
    return(valValidity+typeValidity === 2 )
}

function type_check(obj,conf){
    var key;
    for(key in Object.keys(conf)){
        switch(key){
            case 'type':
                if(!type_check_v2(obj, conf[key])) return false;
                break;
            case 'value':
                if(!type_check_v2(obj, conf[key])) return false;
                break;
            case "enum":
                var val;
                for(val in conf[key]){
                    if(!type_check_v2(variable,{value: val})) return false
                }
                break;
            case 'properties':
                for(property in Object.keys(conf[key])){
                    if(!obj[property]) return false;
                    if(!type_check(variable[property],conf[key][property])) return false;
                }
        }

        return true;
    }
}