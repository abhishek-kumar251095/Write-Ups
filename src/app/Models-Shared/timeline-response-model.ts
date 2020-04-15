export interface TimelineResponseModel {

    userId: string;
    date: string;
    body: [
        {
            title: String, 
            activity: String, 
            type: String, 
            entryId: String
        }
    ];

}