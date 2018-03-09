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
                this.set_name("Arlam_P");
                this.set_titletext("알람팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,320,130);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnCancel", "absolute", "243", "94", "62", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "98", "22", "201", "66", null, null, this);
            obj.set_taborder("19");
            obj.set_text("하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "28", "28", "55", "55", null, null, this);
            obj.set_taborder("20");
            obj.set_image("URL('theme://images/ico_MF_arlam2.gif')");
            obj.style.set_border("0 none #bdbdbdff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 320, 130, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("알람팝업");
            		p.set_scrollbars("none");

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
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("Arlam_P.xfdl");

       
    };
}
)();
