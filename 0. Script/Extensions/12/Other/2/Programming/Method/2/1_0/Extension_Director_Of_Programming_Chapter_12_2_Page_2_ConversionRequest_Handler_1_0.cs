#region Imports

#region BaseDI

using BaseDI.Community.Script.Programming.Abstract_1;
using BaseDI.Community.Script.Programming.Extensions_0;
using BaseDI.Community.Script.Programming.Extensions_1;
using BaseDI.Community.Script.Programming.Poco_1;
using BaseDI.Community.Script.Risk_Management.Extensions_0;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Hanssens.Net;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Community.Script.Programming.Extensions_2
{
    public class Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0
    {
        public Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0()
        {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #region IMAGE MANAGEMENT

        #endregion

        #region HTML MANAGEMENT

        public static async Task<JObject> Step_X_X_Framework_Convert_CssToJson_1_0(SingleParmPoco_12_2_1_0 parameterInputs) {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE stored message

                string storedOutputResponseMessage = "";

                #endregion

                #region MEMORIZE control client server

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE app settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["parameterProcessRequestSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.ts.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0 -> ValidateInputs");

                //3. OUTPUTS
                //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestFileNameList"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestFileNameList*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

                    #endregion                    
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion

            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = new SingleParmPoco_12_2_1_0();

            #endregion

            #region DEFINE process variables

            object storedProcessRequestFileNameItem = new object();
            string storedProcessRequestFileNameItemKey = "";
            List<object> storedProcessRequestFileNameList = new List<object>();

            object storedProcessRequestOutputResponseFileItem = new object();
            List<object> storedProcessRequestOutputResponseFileList = new List<object>();

            dynamic storedProcessRequestResponseData = null;

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponse = null;
            dynamic storedOutputResponseData = null;

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE input file details

            List<string> storedInputRequestFileNameList = parameterInputs.Parameters["parameterInputRequestFileNameList"];

            #endregion            

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process file details



            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "EXECUTING html to xml conversion";
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.cs";
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Convert_CssToJson_1_0";

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE convert css to json

            #region IDEAL CASE - USE baseDI converter

            try
            {
                #region A. CONVERT css to buckets

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        return null;
                    };

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {

                    throw;
                }
                #endregion

                #region B. CONVERT buckets
                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        return null;
                    };

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {

                    throw;
                }
                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "FAILED cache retrieval";
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE xml dataset

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<JObject> Step_X_X_Framework_Convert_HtmlToJson_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE stored message

                string storedOutputResponseMessage = "";

                #endregion

                #region MEMORIZE control client server

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE app settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["parameterProcessRequestSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.ts.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_HtmlToJson_1_0 -> ValidateInputs");

                //3. OUTPUTS
                //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestFileName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestFileName*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestFileType"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestFileType*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

                    #endregion                    
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion

            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = new SingleParmPoco_12_2_1_0();

            #endregion

            #region DEFINE process variables

            dynamic storedProcessRequestResponseData = null;

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponse = null;
            dynamic storedOutputResponseData = null;

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE input file details

            string storedInputRequestFileName = parameterInputs.Parameters["parameterInputRequestFileName"];
            string storedInputRequestFileType = parameterInputs.Parameters["parameterInputRequestFileType"];

            #endregion            

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "EXECUTING html to xml conversion";
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.cs";
            storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Convert_HtmlToJson_1_0";

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE convert html to json

            #region IDEAL CASE - USE baseDI converter

            try
            {
                #region A. CONVERT html to buckets

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        return null;
                    };

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {

                    throw;
                }
                #endregion

                #region B. CONVERT buckets
                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        return null;
                    };

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {

                    throw;
                }
                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "FAILED cache retrieval";
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE xml dataset

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
