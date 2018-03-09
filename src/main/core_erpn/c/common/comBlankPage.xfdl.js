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
                this.set_name("comBlankPage");
                this.set_classname("comBlankPage");
                this.set_titletext("Blank Page");
                this._setFormPosition(0,0,300,300);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 300, 300, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comBlankPage");
            		p.set_titletext("Blank Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comBlankPage.xfdl", function() {
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("comBlankPage.xfdl");

       
    };
}
)();
