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
                this.set_name("comp_Static");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "30", "50", "200", "30", null, null, this);
            obj.set_text("nexacro platform");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30", "139", "200", "53", null, null, this);
            obj.set_text("nexacro platform nexacro platform nexacro platform nexacro platform nexacro platform");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("2) Wordwrap");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "212", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("3 Expr");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30", "238", "200", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Static");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            obj.style.set_border("1 solid #808080ff");
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
        this.registerScript("Static.xfdl", function() {
        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Static.xfdl");

       
    };
}
)();
