(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("comp_ImageViewer");
                this.set_classname("comp_Button");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "30", "50", "200", "100", null, null, this);
            obj.set_taborder("0");
            obj.set_image("URL('theme://images/btn_CalDrop.png')");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "30", "203", "200", "100", null, null, this);
            obj.set_taborder("2");
            obj.set_image("URL('nexacro_platform')");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("1) Theme Image");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "172", "150", "20", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("2) Global Image");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "30", "355", "200", "100", null, null, this);
            obj.set_taborder("6");
            obj.set_image("URL('Images::nexacro_platform.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "324", "150", "20", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("3) URL");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "30", "584", "133", "55", null, null, this);
            obj.set_taborder("8");
            obj.set_image("URL('theme://images/btn_CalDrop.png')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "484", "150", "20", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("4) Stretch");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04", "absolute", "30", "515", "133", "55", null, null, this);
            obj.set_taborder("10");
            obj.set_image("URL('theme://images/btn_CalDrop.png')");
            obj.set_stretch("fit");
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

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
