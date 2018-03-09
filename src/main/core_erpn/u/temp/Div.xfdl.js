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
                this.set_name("comp_Div");
                this.set_classname("comp_Div");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "137", "48", "345", "123", null, null, this);
            obj.set_taborder("0");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "30", "20", "150", "30", null, null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "185", "20", "100", "30", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Call parent");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "137", "228", "345", "123", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1 solid #808080ff");
            obj.set_url("Components::Div_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "30", "49", "100", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Call child");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "228", "100", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Call child");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1) Contents");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "199", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2) URL Link");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 345, 123, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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
            this._addPreloadList("fdl", "Components::Div_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Div.xfdl", function() {

        
        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.Edit00.set_value("Parent Call1");
        }

        
        this.fn_Parent = function(sArg)
        {
        	this.alert(sArg);
        }

        
        this.Div00_Button00_onclick = function(obj,e)
        {
        	this.fn_Parent(this.Div00.Edit00.value);
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.Div01.fn_Child("Parent Call2");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Div.xfdl");
        this.loadPreloadList();
       
    };
}
)();
