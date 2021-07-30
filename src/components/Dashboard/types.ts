

export interface ILaunches {
    launches: ILaunchObject[];
}

export interface ILaunchObject {
    id: string;
    mission_name: string;
    mission_id: string[];
}

export interface ILaunchesProps{
    selectLaunch:(launchObject:ILaunchObject)=>void;
    selectedLaunch:(ILaunchObject|null);
}


// Kind of redundant, maybe I can use one interface for the below?
export interface IVideoProps{
    selectedLaunch:(ILaunchObject);
}

export interface IInfoProps{
    selectedLaunch:(ILaunchObject);
}