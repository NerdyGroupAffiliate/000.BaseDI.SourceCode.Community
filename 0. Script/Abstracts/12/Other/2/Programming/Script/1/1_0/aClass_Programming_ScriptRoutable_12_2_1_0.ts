import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as IContract_Programming_BaseDI_12_2_1_0 from "../../../../../../../../Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_BaseDI_12_2_1_0";

export namespace BaseDI.Community.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptRoutable_12_2_1_0
    {
        //#region 1. Assign
        public CallBack: (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => any = null;

        public Repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        public StorylineDetails: object = new Object();

        public StorylineDetails_Cached: object = new Object();

        public StorylineDetails_Parameters: object = new Object();

        public ExtraData: any;

        public DirectorOrExperienceRequestHandler: any;

        public MasterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterController: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterTransporter: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterConverter: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public NicheMaster: aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>;

        public ClientOrServerInstance: any;

        public RequestID: string;
        //#endregion

        //#region 2. Ready
        constructor()
        {
            //#region 1. Assign
            //#endregion

            //#region 2. Action
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public abstract Action(): Promise<object>;
        //#endregion
    }
}