using BaseDI.Community.Script.Programming.Poco_1;
using BaseDI.Community.Script.Programming.Repository_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Community.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptAction_12_2_1_0<ChapterAction> : IContract_Programming_Repository_12_2_1_0
    {
        #region 1. Assign

        public Func<Object, Object> CallBack { get; set; }

        public Dictionary<string, object> ClientOrServerInstance { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        internal JObject ProgrammingAdministrator { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterLeader { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterController { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterTransporter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterConverter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterStorer { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterDisturber { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterSensor { get; set; }

        public string RequestName { get; set; }

        public JObject StorylineDetails { get; set; }

        public JObject StorylineDetails_Cached { get; set; }

        public JObject StorylineDetails_Parameters { get; set; }

        //A. Variable Declaration      

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptAction_12_2_1_0()
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            ClientOrServerInstance = new Dictionary<string, object>();

            ProgrammingAdministrator = new JObject();            

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public abstract void HandleDefaults();

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)     
        public abstract ChapterAction Action_1_Begin_Process();

        public abstract ChapterAction Action_2_Validate_Process();

        public abstract ChapterAction Action_3_Process_StoryAuthor();

        public abstract ChapterAction Action_4_Process_StoryCharacters();

        public abstract ChapterAction Action_5_Process_StorySetting();

        public abstract ChapterAction Action_6_Process_StoryExperiences();

        public abstract ChapterAction Action_7_Process_StoryResources();

        public abstract ChapterAction Action_8_Process_CRUD();

        public abstract ChapterAction Action_9_Verify_Process();

        public abstract ChapterAction Action_10_End_Process();
       

        #endregion 
    }
}
