let users = ['the3rdMoonCont'];

function enterNames(){
    let pos = [] +  document.getElementsByClassName(users[0]);
    console.log(pos);
    
    for(let i in pos){
        i.innerHTML = users[0];
    }
}