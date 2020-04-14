export class TimelineModel{

    constructor(public entryId:string, public type:string, public date: String, 
                public title: string, public activity: string, public userId?:string ) {
        
    }   

}