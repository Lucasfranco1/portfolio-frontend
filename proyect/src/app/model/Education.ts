export class Education{
    id?:string;
    education:string;
    year:number;
    descriptionEducation:string;
    logoEducationUrl:string;
    

    constructor(education:string, year:number, descriptionEducation:string, logoEducationUrl:string){
        this.education=education;
        this.year=year;
        this.descriptionEducation=descriptionEducation;
        this.logoEducationUrl=logoEducationUrl;
    }
}