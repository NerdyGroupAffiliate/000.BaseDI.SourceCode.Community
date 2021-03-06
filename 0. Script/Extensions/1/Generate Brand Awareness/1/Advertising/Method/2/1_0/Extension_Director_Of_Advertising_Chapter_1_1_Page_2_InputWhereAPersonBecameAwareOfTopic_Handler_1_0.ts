//#region Imports

//#region 3rd Party

//const facebook = require('fb');
//const googleapis = require('googleapis');
// const Instagram = require('instagram-web-api');


if (process.env.APP_ENV == "SERVER") {
    var { _3rdParty_InstagramPrivateAPI_APIClient, IgCheckpointError } = require("instagram-private-api");
    var { get } = require("request-promise");
    var { inquirer } = require("inquirer");
    var fs = require("fs");
}

//#endregion

//#region BaseDI

import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

//#endregion

//#endregion

export namespace BaseDI.Community.Advertising.Extensions_2 {
    export class Extension_Director_Of_Advertising_Chapter_1_1_Page_2_InputWhereAPersonBecameAwareOfTopic_Handler_1_0 {
        //SETTINGS
        private static _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private static _storedProcessRequestTracker: any;

        //EXCEPTIONS
        private static _storedProcessRequestMistake: any = null;

        //MISC
        private static _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING
        private static _storedOutputResponseMistakeTemplate: string = "***LEAKY PIPE*** {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";

        private static _storedOutputResponseStepTemplate: string = "STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";
        private static _storedOutputResponseStepTemplate_Idented: string = "  STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n     {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";
        private static _storedOutputResponseStepTemplate_Idented_Twice: string = "     STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n        {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";

        constructor() {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#region CONTENT MANAGEMENT

        public static async Step_X_X_Framework_Output_ContentToInstagram_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedOutputResponseMessage: string = "";

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == null || parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == undefined) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInstagramAccountUsername")) {
                        storedOutputResponseMessage += "***parameterInstagramAccountUsername*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterInstagramAccountUsername") == "" || parameterInputs.Parameters.getValue("parameterInstagramAccountUsername") == null || parameterInputs.Parameters.getValue("parameterInstagramAccountUsername") == undefined) {
                            storedOutputResponseMessage += "***parameterInstagramAccountUsername*** cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInstagramAccountPassword")) {
                        storedOutputResponseMessage += "***parameterInstagramAccountUsername*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterInstagramAccountPassword") == "" || parameterInputs.Parameters.getValue("parameterInstagramAccountPassword") == null || parameterInputs.Parameters.getValue("parameterInstagramAccountPassword") == undefined) {
                            storedOutputResponseMessage += "***parameterInstagramAccountPassword*** cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInstagramContent")) {
                        storedOutputResponseMessage += "***parameterContent*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if ((parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromUrl == "" || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromUrl == null || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromUrl == undefined) &&
                            (parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromBytes == "" || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromBytes == null || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentFromBytes == undefined) &&
                            (parameterInputs.Parameters.getValue("parameterInstagramContent").ContentCaption == "" || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentCaption == null || parameterInputs.Parameters.getValue("parameterInstagramContent").ContentCaption == undefined)) {
                            storedOutputResponseMessage += "***parameterInstagramContent*** must contain content by a URL or in Bytes to send to Instagram.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("PARSING parameter values failed");

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion

                //#region 3. OUTPUT

                //#region RETURN validation passed

                //#region IDEAL CASE - USE passed indicator

                return true;

                //#endregion

                //#endregion

                //#endregion
            }

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE developer mode

            let storedOutputResponseOPTIONALAccountingCostType: string = "";
            let storedOutputResponseOPTIONALBeginOfProcess: boolean = false;
            let storedOutputResponseOPTIONALMiddleOfProcess: boolean = false;
            let storedOutputResponseOPTIONALEndOfProcess: boolean = false;
            let storedOutputResponseOPTIONALMasterLeaderIsSecondStep: boolean = false;

            let storedMistake: boolean = false;

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE instagram client details

            let storedInstagramClient: any = new _3rdParty_InstagramPrivateAPI_APIClient();

            //#endregion

            //#region DEFINE instagram content details

            let storedInstagramContentCaption: string = "";
            let storedInstagramContentFromBytes: any = null;

            //#endregion

            //#region DEFINE stored message

            let storedOutputResponseMessage: string = "";

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE instagram account details

            let storedInstagramAccountUserName: string = parameterInputs.Parameters.getValue("parameterInstagramAccountUsername");
            let storedInstagramAccountPassword: string = parameterInputs.Parameters.getValue("parameterInstagramAccountPassword");

            //#endregion

            //#region MEMORIZE instagram content details

            let storedInstagramContent: any = parameterInputs.Parameters.getValue("parameterInstagramContent");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.storedInputs.Parameters.getValue("parameterInputRequestActionName"));

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SENDING instagram content");
            
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Advertising_Chapter_1_1_Page_2_InputWhereAPersonBecameAwareOfTopic_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_ContentToInstagram_1_0");

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, HandleDefaults, Storage, Uptime
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE application logging

            //#region IDEAL CASE - USE 3rdParty module
            if (process.env.APP_ENV == "SERVER") {
                try {
                    const ExecuteOutputResponse = async (parameterAuthenticationResponse: any, parameterInstagramClient: any, parameterInstagramAccountUserName: string, parameterInstagramAccountPassword: string, parameterInstagramContent: any): Promise<any> => {
                        //#region 1A. TRANSPORT authentication to instagram

                        try {
                            const ExecuteTransportRequest = async (parameterInstagramClient: any, parameterInstagramAccountUserName: string, parameterInstagramAccountPassword: string, parameterInstagramContent: any): Promise<any> => {
                                //#region 1B. SETUP instagram device inputs

                                storedInstagramClient.state.generateDevice(parameterInstagramAccountUserName);
                                storedInstagramClient.state.proxyUrl = "";

                                //#endregion

                                //#region 1C. SIGN into to instagram

                                //#region EDGE CASE - USE developer logger

                                if (storedProcessRequestDeveloperMode) {
                                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ATTEMPTING to sign in " + parameterInstagramAccountUserName);
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                }

                                //#endregion

                                return parameterInstagramClient.account.login(parameterInstagramAccountUserName, parameterInstagramAccountPassword);

                                //#endregion
                            }

                            parameterAuthenticationResponse = await ExecuteTransportRequest(parameterInstagramClient, parameterInstagramAccountUserName, parameterInstagramAccountPassword, parameterInstagramContent);
                        }
                        catch (storedProcessRequestMistake) {
                            //#region EDGE CASE - USE developer logger
                            if (storedProcessRequestDeveloperMode) {
                                this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED instagram authentication");
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                            }
                            //#endregion

                            //#region EDGE CASE - USE exception handler

                            throw storedProcessRequestMistake;

                            //#endregion
                        }

                        //#endregion

                        if (parameterAuthenticationResponse != null && parameterAuthenticationResponse != undefined) {
                            parameterAuthenticationResponse.then(async (storedResponse) => {
                                //#region 2. TRANSPORT content to instagram

                                const ExecuteTransportRequest = async (parameterInstagramContent: any) => {

                                    //#region EDGE CASE - USE developer logger

                                    if (storedProcessRequestDeveloperMode) {
                                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY signed into instagram");
                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ATTEMPTING to send content");
                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                    }

                                    //#endregion

                                    storedInstagramContentFromBytes = (parameterInstagramContent.ContentFromBytes != undefined && storedInstagramContent.ContentFromBytes != null) ? parameterInstagramContent.ContentFromBytes : await get({ url: parameterInstagramContent.ContentFromUrl, encoding: null, });
                                    storedInstagramContentCaption = (parameterInstagramContent.ContentCaption != undefined && storedInstagramContent.ContentCaption != null) ? parameterInstagramContent.ContentCaption : "";

                                    return await storedInstagramClient.publish.photo({ file: parameterInstagramContent, caption: parameterInstagramContent.ContentCaption });
                                }

                                //#endregion

                                await ExecuteTransportRequest(parameterInstagramContent);
                            }).catch(async (storedProcessRequestMistake) => {
                                //#region EDGE CASE - USE developer logger
                                if (storedProcessRequestDeveloperMode) {
                                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED sending content to instagram");
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Community.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                }
                                //#endregion                        

                                //#region EDGE CASE - USE exception handler

                                throw storedProcessRequestMistake;

                                //#endregion
                            });
                        }
                    };

                    await ExecuteOutputResponse(storedOutputResponseData, storedInstagramClient, storedInstagramAccountUserName, storedInstagramAccountPassword, storedInstagramContent);
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE exception handler

                    throw storedProcessRequestMistake;

                    //#endregion
                }
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN server details

            //#region IDEAL CASE - USE server details

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}
