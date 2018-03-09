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
                this.set_name("comReportViewerOz");
                this.set_classname("comReportViewerOz");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Plugin("OZViewer0", "absolute", "0", "0", null, null, "1", "0", this);
            obj.setProperty("classid", "{0DEF32F8-170F-46F8-B1FF-4BF7443F5F25}");
            obj.setProperty("viewer.emptyframe", "true");
            obj.setProperty("viewer.isframe", "false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comReportViewerOz");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comReportViewerOz.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comReportViewerOz.xfdl", function() {
        /*****************************************************************************************************
         2014.12.29 김석두 (최초 개발)
         본 화면은 Oz Report Viewer 화면 입니다.
         
         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ****************************************************************************************************/
        //include "script::lib_script_common.xjs"

        /**************************************
          Form Loadm 시 Auto Viewer 처리 
        ***************************************/
        this.fn_ReportView = function(obj,e) {

        	var iCntParam = application.GBL_RPTPARAM.length;   //Parameter Count
        	var iCntQuery = application.GBL_ODIPARAM.length;   //Parameter Count
        	var arrParam  = new Array();                       //Parameter Name & Values
        	var arrQuery  = new Array();                       //Parameter Name & Values
        	var sConStr   = "";                                //Report Arguemnt

        	//레포트 기본 설정
        	sConStr += "connection.servlet=" + application.GBL_RPTURL;
        	sConStr += "\nconnection.reportname=" + application.GBL_RPTFILENAME;
        	sConStr += "\ninformation.debug=true";
        	sConStr += "\nviewer.isframe=false"; 
        	sConStr += "\nviewer.configmode=html";
        	sConStr += "\nviewer.printcommand=true";

        	//ODI 설정
        	sConStr += "\nodi.odinames=" + application.GBL_RPTFILEPATH;
         	sConStr += "\nodi." + application.GBL_RPTFILEPATH + ".clientdmtype=Memory";
         	sConStr += "\nodi." + application.GBL_RPTFILEPATH + ".fetchtype=Concurrent";
         	sConStr += "\nodi." + application.GBL_RPTFILEPATH + ".serverdmtype=Memory";
        	alert(sConStr);
         	
         	if(application.GBL_PRT_CNT != "0") {
        		sConStr += "\nexport.mode=silent";
        		sConStr += "\nprint.once=true";
        		sConStr += "\nprint.lockopt=true";		
        		sConStr += "\nprint.copies="+application.GBL_PRT_CNT;		
        		application.GBL_PRT_CNT = "0";
         	} 
        	//Report Form Parameter 전달
        	if (iCntParam > 0) sConStr += "\nconnection.pcount=" + iCntParam;
        	for (var i=0; i < iCntParam; i++) {
        		arrParam = this.fnc_Split(GBL_RPTPARAMETER[i], ",");
        		sConStr += "\nconnection.args" + nexacro.toNumber(i+1) + "=" + arrParam[0] + "=" + arrParam[1];
        	}

        	//Report Query Parameter 전달
        	if (iCntQuery > 0) sConStr += "\nodi." + application.GBL_RPTFILEPATH + ".pcount=" + iCntQuery;
        	for (var i=0; i < iCntQuery; i++) {
        		arrQuery = this.fnc_Split(application.GBL_ODIPARAM[i], ",");
        		sConStr += "\nodi." + application.GBL_RPTFILEPATH + ".args" + nexacro.toNumber(i+1) + "=" + arrQuery[0] + "=" + arrQuery[1];
        	}

        	this.OZViewer0.callMethod("CreateReport", sConStr);

        	GBL_RPTFILENAME = "";    //Report 파일명 초기화
        	GBL_RPTFILEPATH = "";    //Report 파일경로(Oz는 odi명) 초기화
        	GBL_RPTPARAM    = "";    //Report Parameter 초기화
        	GBL_ODIPARAM    = "";    //ODI Parameter 초기화

        }

        /**************************************
          Print Post Process 
        ***************************************/
        this.fn_PrintPostProc = function(a1,a2,a3,a4,a5,a6,a7,a8) {
        	
        	//alert(a2);  //0:성공 1:실폐
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_ReportView, this);
            this.OZViewer0.addEventHandler("OZPrintCommand", this.fn_PrintPostProc, this);

        };

        this.loadIncludeScript("comReportViewerOz.xfdl");

       
    };
}
)();
