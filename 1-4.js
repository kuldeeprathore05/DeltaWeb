console.log("hii")
console.log(5>6)
console.log(5==5)
let color ="green"
if(color == "red"){
    console.log("Stop");
};
if(color == "yellow"){
    console.log("Wait");
};
if(color == "green"){
    console.log("Go");
}

let age = 4
if(age < 3){

    console.log("hii")
}
else if(age > 3){

    console.log("hiii")
}  
else if(age == 4){

    console.log("hiiiiiiiiiiiiiiiiiiiiiiii")
}    

let size = "L"
if (size == "XL"){
    console.log(`Size: ${size} Price: Rs.250`)
}
else if (size == "L"){
    console.log(`Size: ${size} Price: Rs.200`)
}
else if (size == "M"){
    console.log(`Size: ${size} Price: Rs.100`)
}
else if (size == "S"){
    console.log(`Size: ${size} Price: Rs.50`)
}

let marks = 90;
if(marks >= 33){
    console.log("Pass");
    if(marks >=80){
        console.log("Grade-A");
    }
    else{
        console.log("Grade-o")
    }
}
else{
    console.log("Fail")
}
let string ="guu";
if(string[0] == "a" && string.length==3){
    console.log("This string is good")
}
else{
    console.log("Not a good String")
}
if(true){
    console.log("it is true")
}
else{
    console.log("it is false")
}
let colorr ="red";
switch (colorr) {
    case "red":
        console.log("stop")
        break;
    case "yellow":
            console.log("wwait")
            break;
    case "green":
            console.log("goo")
            break;
    default : 
            console.log("Broken Light")        

        break;
}
let day=  9
switch(day){
    case 1 :
        console.log("Monady")
        break;
    case 2 :
        console.log("Tuesay")
        break;
    case 3 :
    console.log("Wednesday")
    break
    case 4 :
        console.log("Thursday") 
        break;
    case 5 :
        console.log("Friday")   
        break;
    case 6 :
        console.log("Saturday")
        break;
    case 7 : 
    console.log("Sunday")
    break
    default :
    console.log("gu")
}

let msg  = "        hhhhl      "
console.log(msg.trim())

let namee ="Kuldeep"

console.log(namee.slice(-2))

let msggg = "ilovecoding"
console.log(msggg.replace("love","do"))
console.log(msggg.repeat(10))

let strr = "help!"
console.log(strr.trim().toUpperCase())

let naam = "ApnaCollege";
console.log(naam.slice(4,9))            //Colle
console.log(naam.indexOf("na"))          //2
console.log(naam.replace("Apna","Our"))     //OurCollege
console.log(naam.slice(4).replace("l","t"))   //Cotlege


let fruits = ["a","b","c"];
fruits[0] = "d"
fruits.push("cc")
console.log(fruits)

let start = ["jan","june","march","aug"]
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");

console.log(start)

console.log(start.indexOf("jan"))
console.log(start.indexOf("june"))
console.log(start.includes("jan"))
console.log(start.includes("june"))
console.log(start.includes("guu"))
console.log(fruits.concat(start))
console.log(start.reverse())

console.log(start.slice())
console.log(start.slice(2))
console.log(start.slice(-3))

let colors = ["a","b","c","d","e","f"]
console.log(colors.splice(4))
console.log(colors)
console.log(colors.splice(0,1))
console.log(colors)
console.log(colors.splice(0,1,"g","h"))
console.log(colors)

let starts = ["jan","june","march","aug"]
console.log(starts.splice(0,2))
console.log(starts.splice(0,0,"july","june"))
console.log(starts)

let arr = ["a","b"]
let arrc = arr
console.log(arrc.push("c"))
arr = ["a","d"]

let tik_tac_toe = [["x",null,"o"],[null,"x",null],["o",null,"x"]]
console.log(tik_tac_toe)
tik_tac_toe[0][1]="o"


let array1 = [7,9,0,-2]
console.log(array1.splice(0,3))
let array2 = [7,9,0,-2]
console.log(array2.slice(1))
let str3 = "      hi     "
console.log(str3.trim())

let array6 = [1,2,3,4,5,6]
if(array6.indexOf()== -1){
    console.log("Doesn't Exists")
}
else{
    console.log("Exists")
}

let num = 4005740000
if(num%10 == 0){
    console.log("Good")
}
else{
    console.log("Bad")
}
 
// let nameee =prompt("Name");
// let agee =prompt("Age");
// alert(` Name: ${nameee} \n Age: ${agee} `)
  
let quartor = 4
switch (quartor) {
    case 1:
        console.log("Jan,Feb,March")
        break;
    case 2:
        console.log("April,May,June")
        break;
    case 3:
        console.log("July,Aug,Sept")
        break;
    case 4:
        console.log("Oct,Nov,Dec")
        break;

    default:
        break;
}

let i = "Aaa77"
if((i[0] == "a" || i[0] == "A")&& i.length == 5){
    console.log("Golden String")
}
else{
    console.log("Not a GoldeN String")
}

//Loops!!

for(let i = 1; i<=5; i++ ){
    console.log(i);
}
for(let i = 1 ; i <=15 ; i+=2){
    console.log(i);
}
for(let i = 2 ; i<=10 ; i+=2){
    console.log(i)
}
for(let i=10 ; i>=2; i-=2){
    console.log(i)
}

for (let i =2 ; i <10 ; i++){
    console.log(i)}

for(let i = 5 ;i <=50;i+=5){
    console.log(i)
}   

//FavMovie
// let favMovie = "Avatar"
// let guess = prompt("Guess movie")
// while((guess!=favMovie)&&(guess!="quiet")){
//     guess =  prompt("Wrong, try again")
// }
// if(guess == favMovie){
//     console.log("Congrats")
// }
// else{
//     console.log("Get lost")
// }


let x = 1; 
while(x<=5) {
    if(x == 3){break;}
    console.log(x);
    x++;
}

let heroes = [["superman","batman","flash"],["thor","hulk","ironman"]]
for(i=0; i<heroes.length ;i++) {
    console.log(heroes[i]);
    for(j=0;j<heroes[i].length; j++){
        console.log( heroes[i][j])
    }    
}
// ****************
// TODO APP
// ****************
// let todo = []
// let req = prompt("What to do??")
// while(true){
//     if(req=="quit"){
//         console.log("QUITING APP");
//         break;
//     }
//     if(req=="list"){
//         console.log("-------");
//         for(list of todo){
//             console.log(list);
//         }
//         console.log("-------");

//     }
//     else if(req=="add"){
//         let task = prompt("What to add");
//         todo.push(task);
//         console.log("Task added");

//     }
//     else if (req=="delete"){
//         let ind = prompt("Which index to delete?")
//         todo.splice(ind,1)
//         console.log("Task deleted");

//     }
//     else{
//         console.log("Wrong request!")
//     }
//     req=prompt("Next Task??")


// }
