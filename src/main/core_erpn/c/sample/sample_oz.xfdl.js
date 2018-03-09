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
                this.set_name("test_webbrowser");
                this.set_classname("test_webbrowser");
                this.set_titletext("oz report");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "17", "14", "120", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("oz");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_webbrowser");
            		p.set_titletext("oz report");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample_oz.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	
        	this.fnc_Oz("p201", "hr/pmm/p201", "sno|21108|sta_ymd|201401|end_ymd|201403|node_code|01");
        }

        // /***********************************************************************************************************
        //    함수명   : fnc_Oz()
        //    설명     : OZ Report 호출
        //    argument : odinames 
        //               reportname 
        //               param : id | value | id2 | value ...
        //    return   : N/A
        //    2014.10.01 김석두(KSD)
        //  ***********************************************************************************************************/
        this.fnc_Oz = function(odinames,reportname,param)
        {
        	var connection = "http://intradev.ktcu.or.kr/oz60/server";
        	var sParam = "connection=" + connection;
        	sParam += "&odinames=" + odinames;
        	sParam += "&reportname=" + reportname + ".ozr";
        	sParam += "&param=" + param;

        	if(this.isValidObject("WebBrowser00")){
        		this.removeChild("WebBrowser00")
        	}

        	var objWebBrowser = new WebBrowser();  
        	objWebBrowser.init("WebBrowser00", "absolute", 0, 0, 0, 0, null, null);
        	this.addChild("WebBrowser00", objWebBrowser); 
        	objWebBrowser.show(); 			
        	objWebBrowser.set_url(application.GBL_HTTPURL + "/test_oz.jsp?"+sParam);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample_oz.xfdl");

       
    };
}
)();
