/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    return obj instanceof classFunction || Object(obj) instanceof classFunction;
    
};
