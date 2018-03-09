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
                this.set_name("comp_Spin");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Spin("Spin00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01", "absolute", "30", "133", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_value("100");
            obj.set_increment("10");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02", "absolute", "30", "216", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_value("100");
            obj.set_increment("10");
            obj.set_max("200");
            obj.set_min("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2) Increment");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "188", "150", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("3) Mim/Max (100~200)");
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

        this.loadIncludeScript("Spin.xfdl");

       
    };
}
)();
