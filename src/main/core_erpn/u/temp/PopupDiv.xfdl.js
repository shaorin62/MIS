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
                this.set_name("comp_PopupDiv");
                this.set_classname("Script_String_Quote");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("0");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "123", "84", "160", "100", null, null, this);
            obj.set_visible("false");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "3", "2", "150", "28", null, null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.set_text("Menu1");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "3", "34", "150", "28", null, null, this.PopupDiv00);
            obj.set_taborder("1");
            obj.set_text("Menu2");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "3", "66", "150", "28", null, null, this.PopupDiv00);
            obj.set_taborder("2");
            obj.set_text("Menu3");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "184", "50", "100", "30", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) Contents");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "212", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) URL");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "240", "150", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "184", "240", "100", "30", null, null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01", "absolute", "123", "274", "160", "100", null, null, this);
            obj.style.set_border("1 solid #808080ff");
            obj.set_visible("false");
            obj.set_url("Components::PopupDiv_Sub.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 160, 100, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_visible("false");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Script_String_Quote");
            		p.getSetter("inheritanceid").set("");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Components::PopupDiv_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("PopupDiv.xfdl", function() {

        
        this.Button00_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width)-60;
        	var nY = parseInt(obj.height);
        	this.PopupDiv00.trackPopupByComponent(obj, nX, nY, 160, 100, "fn_callback");
        }

        this.fn_callback = function(sPopupID,sParam)
        {
        	this.Edit00.set_value(sParam);
        }

        this.Button_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup(obj.text);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width)-60;
        	var nY = parseInt(obj.height);
        	this.PopupDiv01.trackPopupByComponent(obj, nX, nY, 160, 100);
        }

        this.PopupDiv01_oncloseup = function(obj,e)
        {
        	this.Edit01.set_value(obj.returnvalue);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.PopupDiv00.addEventHandler("oncloseup", this.PopupDiv00_oncloseup, this);
            this.PopupDiv00.Button00.addEventHandler("onclick", this.Button_onclick, this);
            this.PopupDiv00.Button01.addEventHandler("onclick", this.Button_onclick, this);
            this.PopupDiv00.Button02.addEventHandler("onclick", this.Button_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.PopupDiv01.addEventHandler("oncloseup", this.PopupDiv01_oncloseup, this);

        };

        this.loadIncludeScript("PopupDiv.xfdl");
        this.loadPreloadList();
       
    };
}
)();
