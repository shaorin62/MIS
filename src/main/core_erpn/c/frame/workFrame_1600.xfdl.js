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
                this.set_name("workFrame");
                this.set_cssclass("frm_WF_Bg");
                this._setFormPosition(0,0,1294,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "17", "311", null, null, this);
            obj.set_taborder("99");
            obj.set_text("w\r\n17");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_work", "absolute", "17", "0", null, null, "0", "0", this);
            obj.set_taborder("100");
            obj.set_text("div_work");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("100");
            		p.set_text("div_work");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1294, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("frm_WF_Bg");

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
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("workFrame_1600.xfdl");

       
    };
}
)();
