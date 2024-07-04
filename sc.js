let text=("The New yorker magzine does not allow the phrase world war II.they say it should be.")
for(let i=0; i < text.length;i++){
    if(text.slice(i,i+12)==="world war II"){
        text=text.slice(0,i)+"The second world war" + text.slice(i+12)
        console.log(text);
    }
}

let nChart=text.indexOf("world war II");
let first=text.slice(0,nChart);
let replace=("The second world war");
let remain=text.slice(nChart,12);
console.log(first+replace+remain);
let Text="Everthing is ok";
let textIndex=text.lastIndexOf("ok");
console.log(textIndex);
let Str=prompt("write anything");
let CheckStr=Str.length;
for(let i=0;i<CheckStr;i++){
    if(Str.slice(i,i+1)=="!"){
        console.log("Exclimation mark is found")
    }
    else{
        console("Exclimation mark is not found")
    }
}
let replace=text.replace("world war II","The second war");
console.log(replace);
let text="Everthing is ok";
let textIndex=text.lastIndexOf("ok");
console.log(textIndex);