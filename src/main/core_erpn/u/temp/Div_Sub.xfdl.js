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
                this.set_name("comp_Div_Sub");
                this.set_classname("comp_Div_Sub");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "30", "20", "150", "30", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "185", "20", "100", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Call parent");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Div_Sub");
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
        this.registerScript("Div_Sub.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.parent.fn_Parent(this.Edit00.value);
        }

        this.fn_Child = function(sArg)
        {
        	this.Edit00.set_value(sArg);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Div_Sub.xfdl");

       
    };
}
)();
