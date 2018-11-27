
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
            return val && {}.toString.call(val) === '[object Function]';
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
        return "Error: Invalid value or enum entry"
    }
    return(valValidity+typeValidity === 2 )
}