
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


const type_check = (val, check) => {
    if (typeof val === 'object') {
        if (check.hasOwnProperty('properties')) {
            return Object.entries(check.properties)
                .filter(([prop, propCheck]) => type_check_v2(val[prop], propCheck))
                .length === Object.values(check.properties).length
                ;
        }
    }
}