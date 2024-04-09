//  import {person} from "./modules.js";
// console.log(person);


function zero(sum){
    alert(sum)
}
 

async function a(){
    return "Hello"
}    

a().then(
    function(value){
        zero(value)
    },
    function(error){
        zero("please try again")
    }
)

    