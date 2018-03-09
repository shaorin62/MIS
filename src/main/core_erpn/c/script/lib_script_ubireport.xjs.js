//XJS=lib_script_ubireport.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        
        /**
         * 유비레포트 출력 모달팝업을 표시합니다.
         * @param {String} reportfile 레포트 파일명입니다. 하위경로에 위치하면 디렉토리 경로를 포함하여야 합니다.
         * @param {String} params 레포트로 전달할 파라미터 변수입니다. 레포트에서만 사용 가능합니다.
         * @param {Object} dataref 레포트에 사용할 데이터를 지정합니다.
         * @param {Object} reportOptions 레포트명, 레포트 출력/저장 등의 옵션을 지정합니다.
         * @example 
         *		var reportfile = "/tmm/TMMA0011R01.jrf";
         *		var params = "REPORT_NAME#코드목록";
         *		var dataref = new Array();
         *		dataref[0] = new Object();
         *		dataref[0].type="TRAN";
         *		dataref[0].svcUrl = "/core/erp/tmm/TMMA0011_SEARCH00.do";
         *		dataref[0].inDataset = ""
         *		dataref[0].outDataset = "dsTM_CODEXH=dsTM_CODEXH"
         *		dataref[0].arg = "COMM_CDNM='USEX_YSNO' SYST_CODE='TMM'";
         *		var reportOptions = new Object();
         *		reportOptions.title = "인쇄물명";		// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
         *		reportOptions.loadEvent = "fn_ReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명
         *		reportOptions.saveEnable = true;	// 저장 버튼(기능) 사용여부. true or false
         *      reportOptions.saveLock = true;		// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
         *		reportOptions.saveCallback = "fn_SaveEnd";	// 리포트를 파일로 저장한 후 실행할 함수
         *		reportOptions.printEnable = true;	// 인쇄 버튼(기틍) 사용여부. true or false
         *		reportOptions.printCallback = "fn_PrintEnd";	// 리포트 인쇄 후 실행됩니다.
         *      reportOptions.printLock = true;		// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
         *		this.fn_UbiReport(reportfile, params, dataref);
         * @author genie
         */
        this.fn_UbiReport = function(reportfile,params,dataref,reportOptions) {
        	
        	// 레포트 파일명은 절대불변 필수!
        	if ((typeof reportfile == "undefined") || (reportfile == null) || (this.fnc_Trim(reportfile).length == 0))  {
        		this.fnc_Alert("레포트 파일명이 지정되지 않았습니다!");
        		return;
        	}
        	
        	if ((typeof dataref == "undefined") || (dataref == null)) {
        		dataref = new Array();
        	}
        	
        	if ((typeof params == "undefined") || (params == null) || (this.fnc_Trim(params).length == 0)) {
        		params = "";
        	}
        	
        	if ((typeof reportOptions == "undefined") || (reportOptions == null)) {
        		reportOptions = "";
        	}
        	
        	for ( var i=0; i<dataref.length; i++ ) {
        		dataref[i].arg += " GBL_USERID="  + this.fnc_Quote(application.GBL_USERID);   //로그인 ID
        		dataref[i].arg += " GBL_EMPLNO="  + this.fnc_Quote(application.GBL_EMPLNO);   //로그인 사원번호
        		dataref[i].arg += " GBL_DEPTCD="  + this.fnc_Quote(application.GBL_DEPTCD);   //로그인 사용자 부서
        		dataref[i].arg += " GBL_LOGINIP=" + this.fnc_Quote(application.GBL_LOGINIP);  //로그인 IP
        		//dataref[i].arg += " MENU_ID="     + this.fnc_Quote(sMenuId);                 //실행 메뉴명
        	}
        	
        	var objArgs = new Object();
        	objArgs.reportFile = reportfile;
        	objArgs.reportParam = params;
        	objArgs.reportRef = dataref;
        	objArgs.reportOption = reportOptions;
        	
        	this.fnc_OpenPopup("comUbiReportView", "common::comUbiReportView.xfdl", {objParam : objArgs}, "", "");
        	
        };

        /**
         * Div 컴포넌트 내에 유비레포트를 
         * @param {String} reportfile 레포트 파일명입니다. 하위경로에 위치하면 디렉토리 경로를 포함하여야 합니다.
         * @param {String} params 레포트로 전달할 파라미터 변수입니다. 레포트에서만 사용 가능합니다.
         * @param {Object} dataref 레포트에 사용할 데이터를 지정합니다.
         * @param {Object} reportOptions 레포트명, 레포트 출력/저장 등의 옵션을 지정합니다.
         * @example 
         *		var reportfile = "/tmm/TMMA0011R01.jrf";
         *		var params = "REPORT_NAME#코드목록";
         *		var dataref = new Array();
         *		dataref[0] = new Object();
         *		dataref[0].type="TRAN";
         *		dataref[0].svcUrl = "/core/erp/tmm/TMMA0011_SEARCH00.do";
         *		dataref[0].inDataset = ""
         *		dataref[0].outDataset = "dsTM_CODEXH=dsTM_CODEXH"
         *		dataref[0].arg = "COMM_CDNM='USEX_YSNO' SYST_CODE='TMM'";
         *		var reportOptions = new Object();
         *		reportOptions.title = "인쇄물명";		// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
         *		reportOptions.loadEvent = "fn_ReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명
         *		reportOptions.saveEnable = true;	// 저장 버튼(기능) 사용여부. true or false
         *      reportOptions.saveLock = true;		// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
         *		reportOptions.saveCallback = "fn_SaveEnd";	// 리포트를 파일로 저장한 후 실행할 함수
         *		reportOptions.printEnable = true;	// 인쇄 버튼(기틍) 사용여부. true or false
         *		reportOptions.printCallback = "fn_PrintEnd";	// 리포트 인쇄 후 실행됩니다.
         *      reportOptions.printLock = true;		// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
         *		this.fn_UbiReportComp(reportfile, params, dataref);
         * @author genie
         */
        this.fn_UbiReportComp = function(divobj,reportfile,params,dataref,reportOptions) {
        	
        	if ((typeof divobj == "undefined") || (divobj == null)) {
        		this.fnc_Alert("사용법이 올바르지 않습니다.");
        	}
        	
        	// 레포트 파일명은 절대불변 필수!
        	if ((typeof reportfile == "undefined") || (reportfile == null) || (this.fnc_Trim(reportfile).length == 0))  {
        		this.fnc_Alert("레포트 파일명이 지정되지 않았습니다!");
        		return;
        	}
        	
        	if ((typeof dataref == "undefined") || (dataref == null))  {
        		dataref = new Array();
        	}
        	
        	if ((typeof params == "undefined") || (params == null) || (this.fnc_Trim(params).length == 0))  {
        		params = "";
        	}
        	
        	if ((typeof reportOptions == "undefined") || (reportOptions == null))  {
        		reportOptions = new Object();
        	}
        		
        	this.__objUbiParamArgs = new Object();
        	this.__objUbiParamArgs.reportFile = reportfile;
        	this.__objUbiParamArgs.reportParam = params;
        	this.__objUbiParamArgs.reportRef = dataref;
        	this.__objUbiParamArgs.viewerDiv = divobj.name;
        	this.__objUbiParamArgs.reportOption = reportOptions;
        	
        	divobj.set_url("common::comBlankPage.xfdl");	// div 클리어 후
        	divobj.set_url("common::comUbiReportViewComp.xfdl");
        	
        };

        this.fn_UbiReportGrid = function(reportfile,reportOptions,oGrid) {
        	
        	/*
        	reportOptions.title = "유비리포트";						// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        	reportOptions.loadCallback = "fn_PopupReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        	reportOptions.saveEnable = false;							// 저장 버튼 표시여부. true or false
        	reportOptions.saveLock = true;								// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	reportOptions.saveCallback = "fn_WhenSaveEnd";				// 리포트를 파일로 저장한 후 실행할 함수입니다.
        	reportOptions.printEnable = true;							// 인쇄 버튼 표시여부. true or false
        	reportOptions.printCallback = "fn_WhenPrintEnd";			// 리포트 인쇄 후 실행할 함수입니다.
        	reportOptions.printLock = true;								// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	*/
        // 	A4_LANDSCAPE    : A4용지 가로방향
        // 	A4_PORTRAIT     : A4용지 세로방향
        // 	A3_LANDSCAPE    : A4용지 가로방향
        // 	A3_PORTRAIT     : A4용지 세로방향
        	
        	// 레포트 용지방향 옵션 없을지 A4용지 가로방향 기본
        	if ((typeof reportfile == "undefined") || (reportfile == null) || (this.fnc_Trim(reportfile).length == 0))  {
        		var reportfile = "A4_LANDSCAPE";
        	}
        	
        	// 그리드 절대불변 필수!
        	if ((typeof oGrid == "undefined") || (oGrid == null))  {
        		this.fnc_Alert("그리드가 지정되지 않았습니다!");
        		return;
        	}
        	
        	if ((typeof reportOptions == "undefined") || (reportOptions == null)) {
        		reportOptions = "";
        	}
        	
        	
        	var objArgs = new Object();
        	objArgs.reportFile   = reportfile + ".jrf"; // 리포트 파일명
        	objArgs.oGrid 		 = oGrid;      // 출력할 그리드
        	objArgs.reportOption = reportOptions; // 옵션
        	this.fnc_OpenPopup("comUbiReportViewG", "common::comUbiReportViewG.xfdl", {objParam : objArgs}, "", "");
        	
        };

        

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
