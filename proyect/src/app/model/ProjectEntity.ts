export class Project{

    id?: string;
    nameProject: string;
    descriptionProject: string;    
    urlProject: string;
    imageProject: string;       
    
    constructor(nameProject: string, descriptionProject: string, urlProject: string, imageProject: string){
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
        this.urlProject = urlProject;
        this.imageProject = imageProject;
        
    }
}