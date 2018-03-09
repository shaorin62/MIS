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
                this.set_name("comp_Create");
                this.set_classname("comp_Create");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("1) Create");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "30", "50", "150", "40", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Create");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("2) Destory");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "139", "150", "44", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Destory");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Create");
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
        this.registerScript("Create.xfdl", function() {

        this.objComp = "";
        this.Button00_onclick = function(obj,e)
        {
        	this.objComp = new Button("objButton", "absolute", 300, 100, 200, 50);
        	this.addChild("ButtonName", this.objComp);
        	this.objComp.setEventHandler("onclick", this.fn_click, this);
        	this.objComp.set_text("Create Button");
        	this.objComp.show();
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.removeChild("ButtonName");
        	this.objComp.destroy();
        	this.objComp = null;
        }

        this.fn_click = function()
        {
        	this.alert("Button Click!!!");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Create.xfdl");

       
    };
}
)();
