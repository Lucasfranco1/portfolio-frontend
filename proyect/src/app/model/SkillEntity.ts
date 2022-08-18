export class Skill{
    id?: string;
    nameSkill: string;
    percentSkill: number;    
    imageSkill: string;         
    
    constructor(nameSkill:string, percentSkill:number, imageSkill:string){
        this.nameSkill=nameSkill;
        this.percentSkill=percentSkill;
        this.imageSkill=imageSkill;
        
    }
}