using BaseDI.Community.Script.Programming.Poco_1;
using BaseDI.Community.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Linq;

namespace BaseDI.Community.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptSetting_12_2_1_0
    {

        #region 1. Assign

        //A. Variable Declaration       

        public Func<Object, Object> CallBack { get; set; }

        public string ID { get; set; }

        public int TypeID { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public DateTime Created { get; set; }

        public DateTime Updated { get; set; }

        public DateTime Deleted { get; set; }

        public JObject ARMData { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptSetting_12_2_1_0()
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)        

        #endregion 
    }
}
