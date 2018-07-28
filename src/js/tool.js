function $id(id){
    return document.getElementById(id);
}
function $get(ele,tagName){
    if(typeof ele === 'string' && $(ele)){
        return $(ele).getElementsByTagName(tagName);
    }else if(typeof ele == 'object'){
        return ele.getElementsByTagName(tagName);
    }
}
function $create(tagName){
    return document.createElement(tagName);
}