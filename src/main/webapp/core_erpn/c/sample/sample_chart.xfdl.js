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
                this.set_name("sample_chart");
                this.set_classname("sample_chart");
                this.set_titletext("highchart");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "16", "24", null, null, "66", "26", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "973", "59", "32", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_chart");
            		p.set_titletext("highchart");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample_chart.xfdl", function() {

        this.sample_chart_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://localhost:9040/NSCOM_MIS/Highcharts/examples/3d-column-interactive/test_highchart.htm");
        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	trace("WebBrowser00_onloadcompleted");
        	var arrData = [10,20,30,40,50,60,70,80,90,100,10,20];
        	this.WebBrowser00.callMethod("fn_drawChart",arrData);
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	trace("WebBrowser00_onusernotify");
        }

        

        this.Button00_onclick = function(obj,e)
        {
        	trace("WebBrowser00_onloadcompleted");
        	var arrData = [10,20,30,40,50,60,70,80,90,100,10,20];
        	this.WebBrowser00.callMethod("fn_drawChart",arrData);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.sample_chart_onload, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample_chart.xfdl");

       
    };
}
)();
