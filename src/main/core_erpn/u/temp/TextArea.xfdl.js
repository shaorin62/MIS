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
                this.set_name("comp_TextArea");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "30", "50", "300", "102", null, null, this);
            obj.set_taborder("1");
            obj.set_value("nexacro platform\r\nnexacro platform\r\nnexacro platform\r\nnexacro platform\r\nnexacro platform");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "172", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("2) Max Length - 50");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "268", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("3) Auto Select");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "356", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("4) Input Type - english");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "446", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("5) Input Filter - digit");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "30", "202", "300", "46", null, null, this);
            obj.set_taborder("10");
            obj.set_value("nexacro platform\r\nnexacro platform");
            obj.set_maxlength("50");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "30", "290", "300", "46", null, null, this);
            obj.set_taborder("11");
            obj.set_value("nexacro platform\r\nnexacro platform");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "30", "378", "300", "46", null, null, this);
            obj.set_taborder("12");
            obj.set_value("nexacro platform\r\nnexacro platform");
            obj.set_inputtype("english");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04", "absolute", "30", "468", "300", "46", null, null, this);
            obj.set_taborder("13");
            obj.set_value("nexacro platform\r\nnexacro platform");
            obj.set_autoselect("true");
            obj.set_inputfilter("digit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05", "absolute", "30", "556", "300", "46", null, null, this);
            obj.set_taborder("14");
            obj.set_value("nexacro platform\r\nnexacro platform");
            obj.set_autoselect("true");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "534", "150", "20", null, null, this);
            obj.set_taborder("15");
            obj.set_text("6) Inputmode - upper");
            obj.style.set_font("bold 9 arial");
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

        this.loadIncludeScript("TextArea.xfdl");

       
    };
}
)();
