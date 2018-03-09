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
                this.set_name("comp_MaskEdit");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_value("AA001");
            obj.set_mask("AA-###");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "30", "242", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("######-{#######}");
            obj.style.set_align("center middle");
            obj.set_value("1234561234567");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) String");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "212", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) Password");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "30", "128", "150", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_value("1234567.89");
            obj.set_mask("9,999.999");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "30", "162", "150", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_value("1234567.89");
            obj.set_mask("9,999.000");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "100", "150", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("2) Number");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "189", "49", "80", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Text");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "273", "49", "80", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Value");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "357", "50", "100", "30", null, null, this);
            obj.set_taborder("10");
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MaskEdit.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Edit00.set_value(this.MaskEdit00.text);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Edit00.set_value(this.MaskEdit00.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("MaskEdit.xfdl");

       
    };
}
)();
