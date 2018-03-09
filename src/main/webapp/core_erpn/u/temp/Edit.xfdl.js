(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("comp_Edit");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "30", "126", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "30", "205", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("4");
            obj.set_value("ABCD");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "30", "286", "150", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_value("ABCD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "138", "368", "150", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_inputtype("number,comma");
            obj.set_value("12345");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "138", "408", "150", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("english");
            obj.set_value("abc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "138", "483", "150", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_value("abc");
            obj.set_inputfilter("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "100", "150", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("2) Password");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "180", "150", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("3) Max Length, AutoSkip");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "260", "150", "20", null, null, this);
            obj.set_taborder("11");
            obj.set_text("4) Auto Select");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "340", "150", "20", null, null, this);
            obj.set_taborder("12");
            obj.set_text("5) Input Type");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "28", "371", "102", "20", null, null, this);
            obj.set_taborder("13");
            obj.set_text("* number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "28", "412", "102", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("* english");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30", "486", "102", "20", null, null, this);
            obj.set_taborder("15");
            obj.set_text("* digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "460", "150", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("6) Input Filter");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "20", "534", "150", "20", null, null, this);
            obj.set_taborder("17");
            obj.set_text("7) Inputmode - upper");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "30", "557", "150", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_value("ABC");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Button");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Edit.xfdl");

       
    };
}
)();
