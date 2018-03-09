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
                this.set_name("comp_GroupBox");
                this.set_classname("GroupBox");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00", "absolute", "30", "48", "250", "100", null, null, this);
            obj.set_text("GroupBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "172", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("2) Align");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "30", "200", "250", "100", null, null, this);
            obj.set_text("GroupBox");
            obj.set_taborder("3");
            obj.set_titlealign("bottomcenter");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GroupBox");
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

        this.loadIncludeScript("GroupBox.xfdl");

       
    };
}
)();
