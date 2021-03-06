function is(element,fs=true){
    if(typeof element === "object"&&element.length>0){
        return "array";
    }else if(typeof element === "string"){
        if(typeof fs === "boolean"&&fs){
            if(/([.][\w\d]{0,})/i.test(element)){
                return "file"
            }else{
                return "dir"
            }
        }else{
            return "string"
        }
    }else{
        return typeof element;
    }
}

module.exports = is;