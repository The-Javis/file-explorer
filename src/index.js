let path = require("path");
let fs = require("fs");
let file = require("./origin/file");
let dir = require("./origin/dir");
let is = require("./tools/is");
let lastElement = require("./tools/lastElement");
let make = require("./make/idk");

class fileBrowser{
    constructor(root=path.resolve("./")){
        root = path.resolve(is(root,false)==="string"?root:"./");
        if(fs.existsSync(path.resolve(typeof root === "string"?root:"./"))){
            if(is(lastElement(root.split("\\")))==="file"){
                this.Methods = new file(root,fileBrowser);
            }else if(is(lastElement(root.split("\\")))==="dir"){
                this.Methods = new dir(root,fileBrowser);
            }
            this.make = (name)=>new make(name,root);
        }else{
            throw {error:"not exist root "+path.resolve(root?root:"./")}
        }
    }
    set Methods(a){
        if(typeof a === "object"&&a.length<0)throw {error:"require object keys"}
        for (const name in a) {
            if (a.hasOwnProperty(name)) {
                const e = a[name];
                this[name] = e;
            }
        }
    }
}

module.exports = fileBrowser;
