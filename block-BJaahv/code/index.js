// Using function to create object

function createProject(name,id,noOfProjects) {
    let project = {};
    project.name = name;
    project.id = id;
    project.noOfProjects = noOfProjects;
    project.getProjects = function(){
        return project.noOfProjects;
    }
    project.changeName = function(newName){
        project.name = newName;
        return project.name;
    }
    project.incrementProject = function(val){
       return project.noOfProjects += val;
    }
    project.decrementProject = function(val){
        return project.noOfProjects -= val;
    }
    return project;
}

// Test 

let projectOne = createProject('Arya',101,5);
console.group('Project1');
console.log(projectOne.name);
console.log(projectOne.id);
console.log(projectOne.noOfProjects)
console.log(projectOne.changeName('John'))
console.log(projectOne.incrementProject(10))
console.log(projectOne.decrementProject(4))
console.log(projectOne.getProjects())
console.groupEnd()


let projectTwo = createProject('Sansa',102,10);
console.group('Project2');
console.log(projectTwo.name);
console.log(projectTwo.id);
console.log(projectTwo.noOfProjects)
console.log(projectTwo.changeName('Bran'))
console.log(projectTwo.incrementProject(8))
console.log(projectTwo.decrementProject(2))
console.log(projectTwo.getProjects())
console.groupEnd()



// Using Object.create (prototypal pattern)

let projectMethods = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    incrementProject(val){
       return this.noOfProjects += val;
    },
    decrementProject(val){
        return this.noOfProjects -= val;
    }
}

function createProject(name,id,noOfProjects) {
    let project = Object.create(projectMethods);
    project.name = name;
    project.id = id;
    project.noOfProjects = noOfProjects;
    return project;
}

// Test 

let projectOne = createProject('Arya',101,5);
console.group('Project1');
console.log(projectOne.name);
console.log(projectOne.id);
console.log(projectOne.noOfProjects)
console.log(projectOne.changeName('John'))
console.log(projectOne.incrementProject(10))
console.log(projectOne.decrementProject(4))
console.log(projectOne.getProjects())
console.groupEnd()


let projectTwo = createProject('Sansa',102,10);
console.group('Project2');
console.log(projectTwo.name);
console.log(projectTwo.id);
console.log(projectTwo.noOfProjects)
console.log(projectTwo.changeName('Bran'))
console.log(projectTwo.incrementProject(8))
console.log(projectTwo.decrementProject(2))
console.log(projectTwo.getProjects())
console.groupEnd()



// Using Pseudoclassical Way

function CreateProject(name,id,noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

CreateProject.prototype = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    incrementProject(val){
       return this.noOfProjects += val;
    },
    decrementProject(val){
        return this.noOfProjects -= val;
    }
}

// Test 

let projectOne = new CreateProject('Arya',101,5);
console.group('Project1');
console.log(projectOne.name);
console.log(projectOne.id);
console.log(projectOne.noOfProjects)
console.log(projectOne.changeName('John'))
console.log(projectOne.incrementProject(10))
console.log(projectOne.decrementProject(4))
console.log(projectOne.getProjects())
console.groupEnd()


let projectTwo = new CreateProject('Sansa',102,10);
console.group('Project2');
console.log(projectTwo.name);
console.log(projectTwo.id);
console.log(projectTwo.noOfProjects)
console.log(projectTwo.changeName('Bran'))
console.log(projectTwo.incrementProject(8))
console.log(projectTwo.decrementProject(2))
console.log(projectTwo.getProjects())
console.groupEnd()



//  Using Class

class Project {
    constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    incrementProject(val){
       return this.noOfProjects += val;
    }
    decrementProject(val){
        return this.noOfProjects -= val;
    }
}

// Test 

let projectOne = new Project('Arya',101,5);
console.group('Project1');
console.log(projectOne.name);
console.log(projectOne.id);
console.log(projectOne.noOfProjects)
console.log(projectOne.changeName('John'))
console.log(projectOne.incrementProject(10))
console.log(projectOne.decrementProject(4))
console.log(projectOne.getProjects())
console.groupEnd()


let projectTwo = new Project('Sansa',102,10);
console.group('Project2');
console.log(projectTwo.name);
console.log(projectTwo.id);
console.log(projectTwo.noOfProjects)
console.log(projectTwo.changeName('Bran'))
console.log(projectTwo.incrementProject(8))
console.log(projectTwo.decrementProject(2))
console.log(projectTwo.getProjects())
console.groupEnd()