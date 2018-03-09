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
                this.set_name("comp_Tab");
                this.set_classname("comp_Div");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Call child");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "242", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Call child");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "184", "50", "382", "154", null, null, this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "30", "30", "100", "30", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "137", "30", "150", "30", null, null, this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_text("Call parent");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01", "absolute", "184", "242", "377", "148", null, null, this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab01);
            obj.set_text("tabpage1");
            obj.set_url("Components::Tab_Sub.xfdl");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab01);
            obj.set_text("tabpage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("1) Contents");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "212", "150", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("2) URL");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Div");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Components::Tab_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Tab.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Tab00.tabpage1.Edit00.set_value("Parent Call");
        }

        this.Tab00_tabpage1_Button00_onclick = function(obj,e)
        {
        	this.fn_Parent(this.Tab00.tabpage1.Edit00.value);
        }

        this.fn_Parent = function(sArg)
        {
        	this.alert(sArg);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Tab01.tabpage1.fn_Child("Parent Call2");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Tab00.tabpage1.Button00.addEventHandler("onclick", this.Tab00_tabpage1_Button00_onclick, this);

        };

        this.loadIncludeScript("Tab.xfdl");
        this.loadPreloadList();
       
    };
}
)();
