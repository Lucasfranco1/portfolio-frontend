export class WorkExperienceEntity{
    id?:string;
    work:string;
    year:number;
    descriptionWork:string;    
    logoBusinessUrl:string;

    constructor(work:string, year:number, descriptionWork:string, logoBusinessUrl:string){
        this.work=work;
        this.year=year;
        this.descriptionWork=descriptionWork;        
        this.logoBusinessUrl=logoBusinessUrl;
    }
}