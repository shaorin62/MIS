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
                this.set_name("sample_param");
                this.set_classname("sample_param");
                this.set_titletext("타 폼으로 값을 넘길 때");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "59", "55", "127", "55", null, null, this);
            obj.set_taborder("0");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "225", "56", "127", "55", null, null, this);
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_param");
            		p.set_titletext("타 폼으로 값을 넘길 때");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample_param.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	//타 폼으로 값을 넘길 때
        	application.dsParam.clear();
        	application.dsParam.addColumn("column00", "string", 120 );
        	application.dsParam.addColumn("column01", "string", 120 );
        	application.dsParam.addColumn("column02", "string", 120 );
        	application.dsParam.addColumn("column03", "string", 120 );
        	application.dsParam.addRow();
        	application.dsParam.setColumn(0,"column00","a");
        	application.dsParam.setColumn(0,"column01","b");
        	application.dsParam.setColumn(0,"column02","c");
        	application.dsParam.setColumn(0,"column03","c");
        }

        this.Button01_onclick = function(obj,e)
        {
        	//타 폼에서 참조하고 클리어한다.
        	trace(application.dsParam.getColumn(0,"column00"));
        	trace(application.dsParam.getColumn(0,"column01"));
        	trace(application.dsParam.getColumn(0,"column02"));
        	trace(application.dsParam.getColumn(0,"column03"));
        	application.dsParam.clear();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("sample_param.xfdl");

       
    };
}
)();
