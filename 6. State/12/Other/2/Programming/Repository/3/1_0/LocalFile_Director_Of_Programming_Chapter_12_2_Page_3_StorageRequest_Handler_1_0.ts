//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//#endregion

//#endregion

export namespace BaseDI.Community.State.Programming_3
{
    export class LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedProcessRequestServerInstance: any = null;
        private _storedProcessRequestServerInstanceExperienceRequestHandler: any = null;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: any = null;
        private _storedProcessRequestDataStorylineDetails_Parameters: any = null;

        private _storedOutputResponseDataObservationTemplate: string = "";

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING
        private _storedInputRequestActionName: string = "";
        private _storedProcessRequestRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedProcessRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0";
        private _storedProcessRequestName: string = "";
        private _storedProcessRequestDataRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        public StartUpCallBack;

        //#endregion

        //#region 2. Ready

        //A. Constructor Instantiation
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            this._storedInputRequestActionName = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE process data repository

            this._storedProcessRequestDataRepository = parameterInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process request storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE process request extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action_1_Begin_Process = this.Action_1_Begin_Process.bind(this);
            this.Action_2_Validate_Process = this.Action_2_Validate_Process.bind(this);
            this.Action_3_Process_StoryAuthor = this.Action_3_Process_StoryAuthor.bind(this);
            this.Action_4_Process_StoryCharacters = this.Action_4_Process_StoryCharacters.bind(this);
            this.Action_5_Process_StorySetting = this.Action_5_Process_StorySetting.bind(this);
            this.Action_6_Process_StoryExperiences = this.Action_6_Process_StoryExperiences.bind(this);
            this.Action_7_Process_StoryResources = this.Action_7_Process_StoryResources.bind(this);
            this.Action_8_Process_CRUD = this.Action_8_Process_CRUD.bind(this);
            this.Action_9_Verify_Process = this.Action_9_Verify_Process.bind(this);
            this.Action_10_End_Process = this.Action_10_End_Process.bind(this);

            this.HandleDefaults = this.HandleDefaults.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region A. Action Methods

        //A. Story in motion (DO SOMETHING)

        //#region EXECUTE LOGIC INSTUCTIONS

        //#region A. Action Methods

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region B. Action Factories

        //Page 1-8
        private async Factory_Action_8_Process_CRUD(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_8_Process_CRUD_OutputApiToken();
                //}

                storedOutputResponseData = await this.Execute_Factory_Action_8_Process_CRUD_ControlDataInCache();

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region C. Action Logic

        //Page 1-8
        private async Execute_Factory_Action_8_Process_CRUD_ControlDataInCache(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            let storedOutputResponseObservationKey: string = "";
            let storedOutputResponseObservationKeyDelimeterValue: string = "";
            let storedOutputResponseObservationKeys: any = null;
            let storedOutputResponseObservationsIndex: number = 0;

            let storedProcessRequestStorageAction: string = "";

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input request details

            let storedInputRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedInputRequestNameDataCacheKey: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE action name

            let storedInputRequestActionName: string = this.ClientOrServerInstance["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this.ClientOrServerInstance["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;
            let storedProcessRequestDeveloperModeParameters: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = this.ExtraData.KeyValuePairs.getValue("storedProcessRequestDeveloperLoggingInputs");
            let storedProcessRequestDeveloperModeSkipConsole: boolean = (storedProcessRequestDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog")) ? storedProcessRequestDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog") : false;
            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //#endregion 

            //#region MEMORIZE process server details

            let storedServer: any = this?.ClientOrServerInstance?.Server;

            //#endregion

            //#region MEMORIZE process storyline details

            const storedOutputResponseObservations: Array<Object> = this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations;;
            const storedOutputResponseObservationsCount: number = this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.length == 0 ? 0 : this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.length;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONTROL storage request

            try {
                //#region IDEAL CASE - USE baseDI extension

                //#region 1. SEARCH for storage item

                if (storedOutputResponseObservations) {
                    storedOutputResponseObservations.map(storedOutputResponseObservation => {
                        storedOutputResponseObservationKeys = Object.keys(storedOutputResponseObservation);

                        storedOutputResponseObservationKeys.map(storedOutputResponseObservationKey => {
                            storedOutputResponseObservationKey = storedOutputResponseObservationKey.toString();
                            //OUTPUT EXAMPLE: storedOutputResponseObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-Create-BaseDI_DataConverter_Mode"

                            if (storedOutputResponseObservationKey.toString().toUpperCase().includes("STORAGEKEY")) {
                                storedOutputResponseObservationKeyDelimeterValue = storedOutputResponseObservationKey.toString().split("-");

                                storedProcessRequestStorageAction = storedOutputResponseObservationKeyDelimeterValue[1];
                                //OUTPUT EXAMPLE: storedProcessRequestStorageAction = "Create"

                                storedOutputResponseObservationKey = storedOutputResponseObservationKey.toString().replace("-Create", "");
                                storedOutputResponseObservationKey = storedOutputResponseObservationKey.toString().replace("-Read", "");
                                storedOutputResponseObservationKey = storedOutputResponseObservationKey.toString().replace("-Update", "");
                                storedOutputResponseObservationKey = storedOutputResponseObservationKey.toString().replace("-Delete", "");
                                //OUTPUT EXAMPLE: storedOutputResponseObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-BaseDI_DataConverter_Mode"


                                //CREATE THE PROCESS
                                const handleObservation = async (storedProcessRequestStorageValue) => {
                                    storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                                    //0. CONTROLLERS

                                    //1. INPUTS

                                    //2. PROCESS
                                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(this.ClientOrServerInstance, Object));
                                    storedInputs.Parameters.setValue("parameterProcessRequestStorageAction", storedProcessRequestStorageAction);
                                    storedInputs.Parameters.setValue("parameterProcessRequestStorageValue", Object.assign(storedProcessRequestStorageValue, Object));
                                    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(this._storedProcessRequestDataStorylineDetails, Object));

                                    //3. OUTPUTS
                                    storedInputs.Parameters.setValue("parameterOutputResponseObservationKey", storedOutputResponseObservationKey as string);

                                    storedOutputResponseData = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Community.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_1(storedInputs);

                                    if (storedProcessRequestStorageAction.toUpperCase() == "READ") {
                                        this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(JSON.parse(storedOutputResponseData));

                                        //#region EDGE CASE - USE developer logger
                                        if (storedProcessRequestDeveloperMode && !storedProcessRequestDeveloperModeSkipConsole && storedOutputResponseData != null) {
                                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                                            //0. CONTROLLERS

                                            //1. INPUTS

                                            //2. PROCESS
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY retrieved cached key ***" + storedOutputResponseObservationKey + "***");
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                                            //3. OUTPUTS
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                        }

                                        //#endregion
                                    }
                                    else
                                    {
                                        //#region EDGE CASE - USE developer logger

                                        if (storedProcessRequestDeveloperMode && !storedProcessRequestDeveloperModeSkipConsole) {
                                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                                            //0. CONTROLLERS

                                            //1. INPUTS

                                            //2. PROCESS
                                            if (storedProcessRequestStorageAction.toUpperCase() == "CREATE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY created cached key ***" + storedOutputResponseObservationKey + "***");
                                            }

                                            if (storedProcessRequestStorageAction.toUpperCase() == "DELETE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY deleted cached key " + storedOutputResponseObservationKey);
                                            }

                                            if (storedProcessRequestStorageAction.toUpperCase() == "UPDATE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY updated cached key " + storedOutputResponseObservationKey);
                                            }

                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                                            //3. OUTPUTS
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALAccountingCostType", "STORAGE"); //Values = Logging or Mistake

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                        }

                                        //#endregion
                                    }
                                }

                                //START THE PROCESS
                                handleObservation(storedOutputResponseObservation);
                            }

                            storedOutputResponseObservationsIndex += 1;
                        })
                    });
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED handling storage request");                   
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }
                //#endregion

                //#region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //#region A. Action Methods

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-2
        public async Action_2_Validate_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-3
        public async Action_3_Process_StoryAuthor(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-4
        public async Action_4_Process_StoryCharacters(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = await this.Factory_Action_9_Verify_Process();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = this.StorylineDetails; //await Factory_Action_10_End_Process();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region B. Action Factories

        //Page 1-1
        private async Factory_Action_1_Begin_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_1_Begin_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-2
        private async Factory_Action_2_Validate_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_2_Validate_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-3
        private async Factory_Action_3_Process_StoryAuthor(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_3_Process_StoryAuthor_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-4
        private async Factory_Action_4_Process_StoryCharacters(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_4_Process_StoryCharacters_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_5_Process_StorySetting_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-6
        private async Factory_Action_6_Process_StoryExperiences(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_6_Process_StoryExperiences_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-7
        private async Factory_Action_7_Process_StoryResources(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_7_Process_StoryResources_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-9
        private async Factory_Action_9_Verify_Process(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_9_Verify_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-10
        private async Factory_Action_10_End_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                if (this._storedInputRequestActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.toUpperCase()) {
                    //storedOutputResponseData = await Execute_Factory_Action_10_End_Process_TransportRequestToHandler();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region C. Action Logic

        //#endregion

        //#endregion

        //#endregion

        //#endregion
    }
}