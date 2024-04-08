
let button_num = document.querySelectorAll(".number");
let button_op = document.querySelectorAll(".operator")
let button_eq = document.querySelectorAll(".equal")
let clear = document.querySelector(".clear")
let del = document.querySelector(".del")

let temp = "";
let val1=null;
let val2=null;
let op="";

button_num.forEach(button =>{
    button.addEventListener("click" , ()=> {
        temp += button.value;
        display(temp)        
    }

    )
})



/*
-- add event listener to each operator button
-- When a operator button is pressed check temp and op variables are empty
-- if empty give error
-- else check if val1 is null if so parse temp to val1
              else parse temp to val2 and call operate function
*/
button_op.forEach(button => {
    button.addEventListener('click',()=>{

       if(temp!="" ){
        if(val1!=null){
            val2 = parseInt(temp)
            temp=""
             // call operate and change val1 value
             console.log(val2+" "+op+" in val2 assignemnt");
            operate(val1,val2,op)
            op="";
            op += button.value;

            
        }
        else {
            val1 = parseInt(temp)
            temp=""
            op += button.value;
            console.log(val1+" "+op+" in val1 assignemnt");
        }
         
       }
       else{
        
        if(temp == "") {console.log("enter valid numer");} 
        else console.log("enter operator");{op = button.value;}
       }
    })
})



function add(a,b){
    val1 = a+b;
    return val1
}

function sub(a,b){
    val1 = a-b;
    return a-b;
}

function mul(a,b){
    val1= a*b;
    return val1;
}


function divide(a,b){
    val1= a/b;
    return val1;
}


function operate(val1,val2,op){
    switch (op) {
        case "+":
            console.log(add(val1,val2));
            val2=null;
            temp=""
            op=""
          break;
        case "*":
            console.log(mul(val1,val2));
            val2=null;
            temp=""
            op=""
          break;
        case "-":
            console.log(sub(val1,val2));
            val2=null;
            temp=""
            op=""
          break;
        case "/":
            console.log(divide(val1,val2)); 
            val2=null;
            temp=""
            op=""
          break;
          case "=":
            console.log(val1); 
            val2=null;
            temp=""
            op=""
          break;
       
        default:
          console.log("enter valid operator");
      }
}


const disp_value = document.querySelector(".display_value")
function display(temp){
    disp_value.textContent = temp;
}


button_eq.forEach(button =>{
    button.addEventListener("click" , ()=> {
        display(val1)        
    }

    )
})

clear.addEventListener("click",()=>{
    temp = "0";
val1=null;
val2=null;
op="";
display(temp);
temp = "";
});



del.addEventListener("click",()=>{
    temp=temp.slice(0,temp.length-1);
    if(temp == "") {temp = "0"}
    display(temp);

});
