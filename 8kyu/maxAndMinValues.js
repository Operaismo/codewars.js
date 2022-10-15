var min = function(list){
    return list.sort((a, b) => a - b)[0];
}

var max = function(list){
    return list.sort((a, b) => a - b)[list.length - 1];
}