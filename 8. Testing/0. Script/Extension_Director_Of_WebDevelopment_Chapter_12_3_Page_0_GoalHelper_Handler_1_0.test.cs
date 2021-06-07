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
using BaseDI.Community.Script.Web_Development.Extensions_0;

#endregion

#endregion

namespace BaseDI.Community.Test
{
    public class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0_Test
    {
        #region 1. Assign

        //CLIENT/SERVER

        //SETTINGS

        //DATASETS


        //MISC

        //PLUMBING


        #endregion

        #region 2. Ready

        public Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0_Test()
        {

        }

        #endregion

        #region 3. Set

        #endregion

        #region 4. Action

        static Func<SingleParmPoco_12_2_1_0, Task<dynamic>> ExecuteConversionRequest = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;

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

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE baseDI converter

            storedOutputResponseData = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_0_0_Framework_Convert_HtmlToJSON_1_0(parameterInputs);

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

        [Fact]
        public void TestMethod1()
        {
            string a = "";
        }

        #endregion
    }
}