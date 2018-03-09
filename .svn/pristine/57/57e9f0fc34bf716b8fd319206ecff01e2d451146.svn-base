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
                this.set_name("encrypt");
                this.set_classname("encrypt");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtOrg", "absolute", "4.69%", "45", null, "23", "80.86%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "20.31%", "40", null, "28", "65.72%", null, this);
            obj.set_taborder("1");
            obj.set_text("encode");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "20.41%", "76", null, "28", "65.63%", null, this);
            obj.set_taborder("2");
            obj.set_text("decode");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEnc", "absolute", "35.25%", "39", null, "23", "50.29%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDec", "absolute", "35.35%", "78", null, "23", "50.2%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("encrypt");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("encrypt.xfdl", "script::lib_base64.xjs");
        this.registerScript("encrypt.xfdl", function() {
        //include "script::lib_base64.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	this.edtEnc.set_value(this.base64Encode(this.edtOrg.value));
        }
        this.Button01_onclick = function(obj,e)
        {
        	this.edtDec.set_value(this.base64Decode(this.edtEnc.value));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("encrypt.xfdl");

       
    };
}
)();
