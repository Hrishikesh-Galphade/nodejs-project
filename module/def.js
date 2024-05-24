function d(){
    console.log("In a d");
}

function e(){
    console.log("In a e");
}

function f(){
    console.log("In a f");
}

exports = function (){
    return {
        d:d,
        e:e,
        f:f,
        de:200,
        abc:function(){
        console.log("In a abc from def.js");
    }
    }
}