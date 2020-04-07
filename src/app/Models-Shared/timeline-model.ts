export class TimelineModel{

    constructor(public entryId:string, public type:string, public date: Date, 
                public title: string, public activity: string, public userId?:string ) {
        
    }   

}