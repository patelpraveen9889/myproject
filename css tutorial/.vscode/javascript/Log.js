 const log = {
    error : function(error){console.log('error' +error);},
    warning :function(Warning){ console.log('Warning :'+warning);},
    info : function(info){console.log('Info :'+info)}
}
function set(){
    console.log("this is set function");
}
module.exports= {log , set};