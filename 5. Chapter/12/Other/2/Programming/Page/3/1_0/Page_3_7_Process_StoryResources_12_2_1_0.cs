#region Imports

#region BaseDI

using BaseDI.Community.Script.Programming.Abstract_1;
using BaseDI.Community.Script.Programming.Repository_1;
using BaseDI.Community.Script.Programming_1;

using BaseDI.Community.Script.Programming.Poco_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Community.Chapter.Page.Programming_3
{
    public class Page_3_7_Process_StoryResources_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_3_7_Process_StoryResources_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        public override void HandleDefaults()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - defaults handler


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            //Set a reference to our the details of our storyline.
            var storylineDetails = StorylineDetails;

            //Get container detail.
            //var detail = storylineDetails.StoryScenery.Location.Stage.Details.Where(d => d.Key.ToUpper() == "PAGE_6_1_PROCESS_STORYLINEENDING").SingleOrDefault();

            //Parse HTML into Linq to HTML object.
            //var HTMLdocument = HDocument.Parse(detail.Value);

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
