//#region Imports

//#region 3rd Party
const _3rdParty_Chalk_ConsoleColorChanger = require('chalk');

//#endregion

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Community.Script.Risk_Management.Extensions_0 {

    export class Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 {
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

        //#region DEVELOPER MANAGEMENT

        public static async Step_X_X_Framework_Control_DeveloperException_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> {
            console.log("GOT EXCEPTION");
            console.log(parameterInputs.Parameters["storedProcessRequestMistake"]);

            return null;
        }

        public static async Step_X_X_Framework_Output_DeveloperMessage_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedOutputResponseMessage: string = "";

                //#endregion

                //#region MEMORIZE control client server

                let storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE app settings

                let storedProcessRequestSettings = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Community.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS                
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
                
                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_DeveloperMessage_1_0 -> ValidateInputs");
               
                //3. OUTPUTS
                //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);
                
                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    //0. CONTROLLES

                    //1. INPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequest3WordDescription")) {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n"
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(this._storedProcessRequestSettings).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(this._storedProcessRequestSettings{'this._storedProcessRequestSettings':'xxxxx'})"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestFileName")) {
                        storedOutputResponseMessage += "***parameterProcessRequestFileName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMethodName")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMethodName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestStepNumberReplace")) {
                        storedOutputResponseMessage += "***parameterProcessRequestStepNumberReplace*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseMessageType")) {
                        storedOutputResponseMessage += "***parameterOutputResponseMessageType*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    
                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        //3. OUTPUTS
                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE blank return

                    return;

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
            ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE developer mode

            let storedOutputResponseOPTIONALAccountingCostType: string = "";
            let storedOutputResponseOPTIONALBeginOfProcess: boolean = false;
            let storedOutputResponseOPTIONALMiddleOfProcess: boolean = false;
            let storedOutputResponseOPTIONALEndOfProcess: boolean = false;
            let storedOutputResponseOPTIONALMasterLeaderIsSecondStep: boolean = false;

            let storedOutputResponseMistake: boolean = false;

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

            //#region MEMORIZE developer mode


            //0. CONTROLLES

            //1. INPUTS               
            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //2. PROCESS
            let storedProcessRequest3WordDescription: string = parameterInputs.Parameters.getValue("parameterProcessRequest3WordDescription");
            let storedProcessRequestSettings: any = parameterInputs.Parameters.getValue("parameterProcessRequestSettings");
            let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");
            let storedProcessRequestFileName: string = parameterInputs.Parameters.getValue("parameterProcessRequestFileName");
            let storedProcessRequestMethodName: string = parameterInputs.Parameters.getValue("parameterProcessRequestMethodName");
            let storedProcessRequestStepNumberReplace: number = parameterInputs.Parameters.getValue("parameterProcessRequestStepNumberReplace");

            //3. OUTPUTS
            let storedOutputResponseMessageType: string = (parameterInputs.Parameters.getValue("parameterOutputResponseMessageType") != undefined ? parameterInputs.Parameters.getValue("parameterOutputResponseMessageType") : "LOGGING");

            if (parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALAccountingCostType") != undefined)
                storedOutputResponseOPTIONALAccountingCostType = parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALAccountingCostType");

            if (parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALBeginOfProcess") != undefined)
                storedOutputResponseOPTIONALBeginOfProcess = parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALBeginOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALMiddleOfProcess") != undefined)
                storedOutputResponseOPTIONALMiddleOfProcess = parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALMiddleOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALEndOfProcess") != undefined)
                storedOutputResponseOPTIONALEndOfProcess = parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALEndOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep") != undefined)
                storedOutputResponseOPTIONALMasterLeaderIsSecondStep = parameterInputs.Parameters.getValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep");

            //#endregion

            //#region MEMORIZE master storer

            let storedProcessRequestMasterStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Community.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE application logging

                //#region IDEAL CASE - USE developer logger

                const ExecuteOutputResponse = async (): Promise<boolean> => {
                    //#region 1A. SETUP logging output
                    if (storedOutputResponseMessageType.toUpperCase() == "LOGGING") {
                        if (storedOutputResponseOPTIONALBeginOfProcess || storedOutputResponseOPTIONALEndOfProcess) {
                            storedOutputResponseMessage = this._storedOutputResponseStepTemplate; // "STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";
                        }
                        else {
                            if (storedOutputResponseOPTIONALAccountingCostType) {
                                storedOutputResponseMessage = this._storedOutputResponseStepTemplate_Idented_Twice; // "   STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n      {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";      
                            }
                            else {
                                storedOutputResponseMessage = this._storedOutputResponseStepTemplate_Idented; // "   STEP {storedProcessRequestStepNumberReplace}: {storedProcessRequest3WordDescription}\n      {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";      
                            }
                        }
                    }
                    //#endregion

                    //#region 1B. SETUP exception output
                    if (storedOutputResponseMessageType.toUpperCase() == "MISTAKE") {
                        storedOutputResponseMessage = this._storedOutputResponseMistakeTemplate; // ***LEAKY PIPE*** {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> storedProcessRequest\n";

                        storedOutputResponseMistake = true;
                    }
                    //#endregion

                    //#region 2. SETUP default message

                    //0. CONTROLLES

                    //1. INPUTS                              
                    storedOutputResponseMessage = storedOutputResponseMessage.replace("{storedInputRequestActionName}", storedInputRequestActionName);

                    //2. PROCESS                         
                    storedOutputResponseMessage = storedOutputResponseMessage.replace("{storedProcessRequestStepNumberReplace}", storedProcessRequestStepNumberReplace.toString());
                    storedOutputResponseMessage = storedOutputResponseMessage.replace("{storedProcessRequest3WordDescription}", (storedOutputResponseOPTIONALAccountingCostType != "") ? "[" + storedOutputResponseOPTIONALAccountingCostType.toUpperCase() + " COST] - " + storedProcessRequest3WordDescription : "[ZERO COST] - " + storedProcessRequest3WordDescription);
                    storedOutputResponseMessage = storedOutputResponseMessage.replace("{storedProcessRequestFileName}", storedProcessRequestFileName);
                    storedOutputResponseMessage = storedOutputResponseMessage.replace("storedProcessRequest", storedProcessRequestMethodName);

                    //#endregion

                    if (!this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE_SILENT) {
                        //#region 3A. OUPUT client message
                        if (this._storedProcessRequestSettings.APP_ENV.toUpperCase() == "CLIENT") {
                            if (storedOutputResponseMistake) {
                                console.log("%c" + storedOutputResponseMessage, "color:" + "Orange");

                                return;
                            }

                            if (storedOutputResponseOPTIONALBeginOfProcess == true) {
                                console.log("%c" + "\n\n------------------------------------------------------------------------------------------------------------------------------", "color:" + "#94f500");
                                console.log("%c" + "NEW REQUEST - " + storedInputRequestActionName.toUpperCase(), "color:" + "#94f500");
                                console.log("%c" + "------------------------------------------------------------------------------------------------------------------------------\n", "color:" + "#94f500");

                                console.log("%c" + storedOutputResponseMessage, "color:" + "#94f500");

                                return;
                            }

                            if (storedOutputResponseOPTIONALMiddleOfProcess == true) {
                                console.log("%c" + storedOutputResponseMessage, "color:" + "#00FFFF");

                                return;
                            }

                            if (storedOutputResponseOPTIONALAccountingCostType != "") {
                                console.log("%c" + storedOutputResponseMessage, "color:" + "Yellow");

                                return;
                            }

                            if (storedOutputResponseOPTIONALEndOfProcess == true) {
                                console.log("%c" + storedOutputResponseMessage, "color:" + "#ff0e11");

                                return;
                            }
                            else {
                                console.log("%c" + storedOutputResponseMessage, "color:" + "#D3D3D3");
                            }
                        }
                        //#endregion

                        //#region 3B. OUPUT server message
                        if (this._storedProcessRequestSettings.APP_ENV.toUpperCase() == "SERVER") {
                            if (storedOutputResponseMistake) {
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.underline.magentaBright(storedOutputResponseMessage));

                                return;
                            }

                            if (storedOutputResponseOPTIONALBeginOfProcess == true) {
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.greenBright("\n\n------------------------------------------------------------------------------------------------------------------------------"));
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.greenBright("NEW REQUEST - " + storedInputRequestActionName.toUpperCase()));
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.greenBright("------------------------------------------------------------------------------------------------------------------------------\n"));

                                console.log(_3rdParty_Chalk_ConsoleColorChanger.greenBright(storedOutputResponseMessage));
                                //console.log('\x1b[32m', storedOutputResponseMessage, '\x1b[0m'); //GREEN

                                return;
                            }

                            if (storedOutputResponseOPTIONALMiddleOfProcess == true) {
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.cyanBright(storedOutputResponseMessage));
                                //console.log('\x1b[34m', storedOutputResponseMessage); //BLUE

                                return;
                            }

                            if (storedOutputResponseOPTIONALAccountingCostType != "") {
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.yellowBright(storedOutputResponseMessage));
                                //console.log("%c" + storedOutputResponseMessage, "color:" + "Yellow"); //YELLOW

                                return;
                            }

                            if (storedOutputResponseOPTIONALEndOfProcess == true) {
                                console.log(_3rdParty_Chalk_ConsoleColorChanger.redBright(storedOutputResponseMessage));
                                //console.log("%c" + storedOutputResponseMessage, "color:" + "#ff0e11"); //RED

                                return;
                            }
                            else {
                                console.log(storedOutputResponseMessage);
                                //console.log('\x1b[37m', storedOutputResponseMessage);  //WHITE
                            }
                        }
                        //#endregion
                    }

                    return true;
                }

                await ExecuteOutputResponse();

                //#endregion    

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE return false

                return false;

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE true return

            return true;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}