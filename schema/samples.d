mutation{
  addClient(name:"Befkadu", email:"befkadu@gmail.com",phone:"200202020"){name}
}


mutation{
  addClient(name:"Testing3", email:"testing3@gmail.com",phone:"90i090909"){
    id
    name
    email
    phone
  }
}


mutation{
  deleteClient(id:"6a440ef153fceca5d1c45d3d"){
    name
  }
}


mutation{
  addProject(name:"Project 1", description:"Description of project",status:new, clientId:"6a4409d56347304b34747fcb"){
    name
  }
  
}

{
  projects{
name, id}
}

{
  project(id:"6a44115153fceca5d1c45d3e"){
    name
    client{
    name
  }
}
}

mutation{
  updateProject(id:"6a44115153fceca5d1c45d3e",name:"Mobile Application Project", status:completed){
    name
  }
}
