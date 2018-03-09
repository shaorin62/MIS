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
                this.set_name("comp_PopupDiv_Sub");
                this.set_classname("comp_Div_Sub");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "3", "2", "150", "28", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Menu1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "3", "34", "150", "28", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Menu2");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "3", "66", "150", "28", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Menu3");
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
        this.registerScript("PopupDiv_Sub.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {
        	this.parent.PopupDiv01.closePopup(obj.text);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button_onclick, this);

        };

        this.loadIncludeScript("PopupDiv_Sub.xfdl");

       
    };
}
)();
