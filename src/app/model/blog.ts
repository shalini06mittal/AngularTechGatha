export class Blog{
    constructor(public title:string,
        public description:string,public date:string, public time:string,
        public category?:string,public id?:number){}
}