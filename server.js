const express= require('express');
const app= express();
const PORT = process.env.PORT || 3000;
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/checker',(req,res)=>{
    res.render('checker');
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})
var data=54
//js code
const person={
    name:"Imran",
    dis:"Rajbari",
    age:32
}
console.log(person.dis)
// array
const person1=["Abdur Rahim","Jaxl","AKter",];
console.log(person1[2].length);
console.log(person1.pop());
console.log(person1);
const time=new Date();
console.log(time.getMinutes());

// create a MAP
const fruits= new Map([
    ["apple",65010],
    ["bannana",546545]
]);
console.log(fruits.get("apple"));
try {
    console.log(`wererhewl ${data}`);
  }catch(err) {
    console.log(err.message);
  }

const myData= 54;
try{
if(myData<12) throw "to low"
if(myData==54) throw "Perfect"
if(myData>12) throw "Learge"
}
catch(err){
    console.log(err)
}

