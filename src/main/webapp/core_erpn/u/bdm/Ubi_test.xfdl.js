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
                this.set_name("Ubi_test");
                this.set_classname("Ubi_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiReport00", "absolute", "2.05%", "26", null, "400", "22.56%", null, this);
            obj.set_taborder("0");
            obj.set_text("UbiReport00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "80.66%", "70", null, "78", "6.84%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Ubi_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Ubi_test.xfdl", function() {
        this.UbiReport00.resource = "http://localhost:9030/NSCOM_MIS/ubireport/ajax/js4";

        this.UbiReport00.gatewayurl = "http://localhost:9030/NSCOM_MIS/UbiGateway";

        this.UbiReport00.dataurl = "http://localhost:9030/NSCOM_MIS/UbiData";

        this.UbiReport00.reporturl = "http://localhost:9030/NSCOM_MIS/ubireport/work/";

        this.UbiReport00.resid = "UBIAJAX";

        

        

        this.Button00_onclick = function(obj,e)
        {
        	this.UbiReport00.jrffile = "PAYC0010R01.jrf";
        	
        	this.UbiReport00.datasource = "";
        	
        	this.UbiReport00.retrieve(this, "retrieveEnd");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Ubi_test.xfdl");

       
    };
}
)();
