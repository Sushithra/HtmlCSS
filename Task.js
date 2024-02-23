function Addtask(){
    var input=document.querySelector('.input')
    console.log(input.value)
    var element=document.getElementById("Taskcontainer")
    console.log(element)
    var newElement=document.createElement('div') //create inner container
    newElement.setAttribute('id','indiTask')   //set attributes-id
    newElement.innerHTML=`<p>${input.value}</p><button onclick="Delete(event)"> Delete</button>` //content
    element.append(newElement)
    } 
function Delete(event){
    event.target.parentElement.remove()
}
