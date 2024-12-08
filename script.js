// switch
// var tDay=toDay.getDay();
let day;
switch (day){
    case 0:
        day="sunday";
        break;
        case 1:
            day="monday";
            break;
            case 2:
                day="tuesday";
                break;
                case 3:
                    day = "wensday";
                    break;
                    case 4:
                        day="thursday";
                        break;
                        case 5:
                            day="friday";
                            break;
                            case 6:
                                day="saturday";
                                break;

}
// console.log(`today is :${day3}`);


// loop in javascript
// even number
let text="";
function even(){
    for (let i=1;i<=100;++i)
    {
        if(i%2==0){
            text+= `even= ${i}`;
            document.getElementById("demo").innerHTML=text;
            console.log(text);
        }
    }
}
even();

function odd(){
    let x=1;
    let text2="";
    while(x<=100){
    ++x
    if(x%2!=0){
        text2+= x;
        console.log(text2);
        document.getElementById("demo").innerHTML=text2;
    }

    }
}
odd();

1 to 10 table
let text3="";
let y=1;
for(y=1;y<=10;++y){
    text3+=`the number is ${y}`;
    document.getElementById("demo").innerHTML=text3;
}

// pattern

function pattern(rows){
    
    for(let i=1;i<=rows;i++){
        let stars="";
        for(let j=1; j<=i;++j){
        stars+= "*";
       
        document.getElementById("demo").innerHTML=stars;
    }
       console.log(stars);
    }
   
}
pattern(7);
// for in loop

const person={
    name:"john",
    age:34,
}
let text4="";
for(let x in person){
text4+=person[x]+"<br>";
}
document.getElementById("demo").innerHTML=text4;


const aman={
    name:"aman",
    dob:"11/jan/2003",
    city:"sehore",
    pg:"mca",
}
let text5="";
for(let y in aman){
    text5+= aman[y]+"<br>";
}
document.getElementById("demo").innerHTML=text5;

// for in loop use in array

const number=[12,34,23,23,2343];
let text6="";
for(let b in number){
    text6+= number[b]+"<br>";
}
document.getElementById("demo").innerHTML=text6;

// for of loop

const virat ="rohit sharma";
    
let text7="";
for(let a of virat ){
    text7+= a+"<br>";

}
document.getElementById("demo").innerHTML=text7;

const name="javascript";
let text8="";
for(let b of name){
    text8+= b+"<Br>";
}
document.getElementById("demo").innerHTML=text8;

 const tyagi=["aman","sehore","bhopal","indore"];
 let text9="";
 for(let t of tyagi){
    text9+= t+"<br>";
 }
 document.getElementById("demo").innerHTML=text9;

 const num=[30,43,50,34];
 let n="";
 for(let m of num){
    n+= m*10;
 }
 document.getElementById("demo").innerHTML=n;

