#region Imports

#region BaseDI

//0. SCRIPT
using BaseDI.Community.Script.Programming.Poco_1;

//1. STORYLINE

//5. CHAPTER
using ChapterPage = BaseDI.Community.Chapter.Page.Programming_2;

//6. STATE
using BaseDI.Community.State.Programming_2;

#endregion

#region .Net Core

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

#endregion

#region 3rd Party Core

using Xunit;

#endregion

#endregion

namespace BaseDI.Community.Test
{
    public class Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlTestingVariables_Handler_1_0
    {
        #region 1. Assign

        //CLIENT/SERVER

        //SETTINGS

        //DATASETS


        //MISC

        //PLUMBING


        #endregion

        #region 2. Ready

        public Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlTestingVariables_Handler_1_0()
        {

        }

        #endregion

        #region 3. Set

        #endregion

        #region 4. Action

        #region 1. EXECUTE store static test variable process

        #region IDEA CASE - USE default values

        static Func<SingleParmPoco_12_2_1_0, Task<dynamic>> Action = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            ChapterPage.Page_2_1_Begin_Process_12_2_1_0 storedProcessRequestDataRepository;

            #endregion

            #region DEFINE output variables

            SingleParmPoco_12_2_1_0 storedOutputResponseData = null;
            dynamic storedOutputResponseDataRepository = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request settings

            Dictionary<string, object> storedProcessRequestTracker = new Dictionary<string, object>();

            storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;

            storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            #endregion

            #region MEMORIZE process test variables

            //0. CONTROLLERS

            if (!parameterInputs.Parameters.ContainsKey("parameterControlRequestClientOrServer") || parameterInputs.Parameters["parameterControlRequestClientOrServer"] == null) {
                parameterInputs.Parameters["parameterControlRequestClientOrServer"] = new Object();
            }

            //1. INPUTS

            //2. PROCESS
            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCallBack") || parameterInputs.Parameters["parameterControlRequestClientOrServer"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestCallBack"] = new Object();
            }

            parameterInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
            parameterInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_Parameters") || parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_CallBack") || parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_CallBack"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_CallBack"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCallBack") || parameterInputs.Parameters["parameterProcessRequestCallBack"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestCallBack"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedDisturber") || parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedSensor") || parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"] == null)
            {
                parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer") || parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"] == null)
            {
                //parameterInputs.Parameters["parameterProcessRequestCentralizedStorer", new Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Community.Story.Programming_0.Implement_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs));
            }

            parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"] = null;

            if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails") || parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"] == null)
            {
                storedProcessRequestDataRepository = new ChapterPage.Page_2_1_Begin_Process_12_2_1_0(parameterInputs);
                storedProcessRequestDataRepository.Repository = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(parameterInputs);

                storedOutputResponseDataRepository = await storedProcessRequestDataRepository.Action();

                parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"] = storedOutputResponseDataRepository.StorylineDetails;
            }

            //3. OUTPUTS
            if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseControlID") || parameterInputs.Parameters["parameterOutputResponseControlID"] == null)
            {
                parameterInputs.Parameters["parameterOutputResponseControlID"] = null;
            }

            if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseType") || parameterInputs.Parameters["parameterOutputResponseType"] == null)
            {
                parameterInputs.Parameters["parameterOutputResponseType"] = "HTML";
            }

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE baseDI converter

            storedOutputResponseData = await Action_Factory_Start(parameterInputs);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE baseDI data

            return storedOutputResponseData;

            #endregion

            #endregion    

            #endregion
        };

        #endregion

        #endregion

        #region 2. EXECUTE store dynamic test variable process

        #region IDEA CASE - USE baseDI variables

        static Func<SingleParmPoco_12_2_1_0, Task<dynamic>> Action_Factory_Start = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            if (parameterInputs.Parameters.Count > 0)
            {
                if ((parameterInputs.Parameters["parameterInputRequestName"] as string).ToUpper().Contains("DIRECTOR_OF_WEBDEVELOPMENT") ||
                    (parameterInputs.Parameters["parameterInputRequestName"] as string).ToUpper().Contains("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
                {

                    return Action_Factory_Start_12_3_WebDevelopment(parameterInputs);
                }
            }

            return Action_Factory_End(parameterInputs);
        };

        #region 12-3 - Web Development

        static Func<SingleParmPoco_12_2_1_0, Task<dynamic>> Action_Factory_Start_12_3_WebDevelopment = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            SingleParmPoco_12_2_1_0 storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process test variables

            //0. CONTROLLERS

            //1. INPUTS
            parameterInputs.Parameters["parameterInputRequestActionName"] = Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0;
            parameterInputs.Parameters["parameterInputRequestName"] = parameterInputs.Parameters["parameterInputRequestName"];
            parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"] = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            //2. PROCESS
            parameterInputs.Parameters["parameterProcessRequestExtraData"] = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            //3. OUTPUTS

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE baseDI converter

            storedOutputResponseData = parameterInputs;

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE baseDI data

            return storedOutputResponseData;

            #endregion

            #endregion    

            #endregion
        };

        #endregion

        #endregion

        #endregion

        #region 3. EXECUTE store test variable process

        static Func<SingleParmPoco_12_2_1_0, Task<dynamic>> Action_Factory_End = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            //let storedProcessRequestCentralizedStorer: Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Community.Story.Programming_0.Implement_DesignPattern_Factory_Storer_12_2_1_0 = null;
            ChapterPage.Page_2_1_Begin_Process_12_2_1_0 storedProcessRequestLocalCacheDataRepository = null;

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            dynamic storedOutputResponseProcess = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process test variables

            //0. CONTROLLERS

            //1. INPUTS

            //2. PROCESS
            parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"] = null;
            parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"] = null;
            //parameterInputs.Parameters["parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);

            storedProcessRequestLocalCacheDataRepository = new ChapterPage.Page_2_1_Begin_Process_12_2_1_0(parameterInputs);
            storedProcessRequestLocalCacheDataRepository.Repository = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(parameterInputs);

            //3. OUTPUT
            storedOutputResponseProcess = await storedProcessRequestLocalCacheDataRepository.Action();
            parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"] = storedOutputResponseProcess[0].StorylineDetails;

            //3. OUTPUTS

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE baseDI converter



            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE baseDI data

            return parameterInputs;

            #endregion

            #endregion    

            #endregion
        };

        #endregion

        #endregion

    }
}
