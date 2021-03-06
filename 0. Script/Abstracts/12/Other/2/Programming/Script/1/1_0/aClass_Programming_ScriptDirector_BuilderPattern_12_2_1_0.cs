using BaseDI.Community.Character_1;
//using BaseDI.Community.Experience_;
using BaseDI.Community.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace BaseDI.Community.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 : aClass_Programming_ScriptRoutable_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0()
        {
            //SET WHAT is needed to create the storyline.
            StorylineDetails = new JObject();

            StorylineDetails_Cached = new JObject();
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public abstract void HandleDefaults();

        #endregion

        #region 4. Action

        public abstract override Task<JObject> Action();

        #endregion
    }

    #region 5. Action Script

    //A. Story in motion (DO SOMETHING) SCRIPT

    #endregion

    #region 6. Action Implementation

    //A.Commence Storyline(ACT WHAT HAS HAPPENED)

    #endregion
}
