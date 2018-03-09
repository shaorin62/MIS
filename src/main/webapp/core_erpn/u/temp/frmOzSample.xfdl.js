(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("frmOzSample");
                this.set_classname("frmOzSample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "8", "13", "128", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmOzSample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmOzSample.xfdl", "script::lib_script_common.xjs");
        this.registerScript("frmOzSample.xfdl", function() {
        //include "script::lib_script_common.xjs"

        this.Button00_onclick = function(obj,e) {

        	var arrParam = new Array();                    					               			  
        		arrParam[0] = "sBASE_YMTH," + "201412";  //정산년월
        		arrParam[1] = "sEMPL_NUMB," + "19908";   //사원번호  

        	application.GBL_RPTFILENAME = "/mis/PAYE0020R0.ozr";    //레포트 파일명
        	application.GBL_RPTFILEPATH = "PAYE0020R0";             //레로트 결로(ODI명)
        	application.GBL_RPTPARAM    = "";                       //레포트 파라메터
        	application.GBL_ODIPARAM    = arrParam;                 //ODI 파라메터
        	this.fnc_OzPrintViewer();                               //Report Viewing

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("frmOzSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
