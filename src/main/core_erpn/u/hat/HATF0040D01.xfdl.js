﻿(function()
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
                this.set_name("HATF0040D01");
                this.set_titletext("출장승인신청 및 내역 DIV");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_Main", "absolute", "0%", "0", null, null, "0%", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div_Main");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div_Main,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div_Main");

            	}
            );
            this.Div_Main.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장승인신청 및 내역 DIV");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HATF0040D01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0040D01.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장승인신청 및 내역을 관리한다.
         * @category	 	인사관리>출장관리>출장승인신청
         * @author	   		박정윤
         * @cdate	  		2016.09.18
         * @version 1.0		최초 작성
         * HATC0010.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456+
        789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTFTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0040D01"; //해당 Form에서 사용 할 Package 명 
         
        var sAPPRGUBN 	= "";	    // 결재처리구분 [ list : 목록, del : 결재취소, show : 조회, cre : 결재상신(수정), re : 재사용, new : 신규등록, modi : 수정 ]
        var sDOCUIDXX 	= "KHR120";	// 결재문서 ID
        var sAPPRSEQN 	= "";     	// 결재문서 SEQ
        var sKeyValue   = "";
        this.sBSRPSEQ1	= "";		//출장승인key
        var sAPPRSTAT   = "";   // 결재문서 상태
        var sAPPLEMNR   = "";       // 신청자 사번
        var sINSTUSID   = application.GBL_EMPLNO;  // 작성자 사번

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 this.sUSERAUTH     = ""; 
        	 this.sFORMCAPTION  = ""; 
        	 this.sFORMLOCATION = "";
        	 this.sUSERLAVEL    = "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	/*
        		통합그룹웨어에서 서식선택을 통해 직접 접근할때 
        		파라미터값으로 어떤 문서를 선택해서 들어왔는지 전달받아야 함.
        	*/		
        	
        	/*인버스 개발자 공통쪽 개발 완료 되면
        	   http://mis.nscom.co.kr/sso/CheckLoginSSO.jsp?empl=2005012&scd=hms&mid=hatc0010
        	   위의 url에 docId 파라미터 값을 추가한다.
        	   ex) docId=KHR112 	   
        	*/
        	var v_sParam = this.getOwnerFrame();
        	var docGubn = application.dsFrontArgs.getColumn(application.dsFrontArgs.findRow("ARGS_NAME","docGubn"),"ARGS_VALU");
        	
        	if(docGubn == null){
        		docGubn = "list"; 
        		this.sDOCUIDXX = "";		
        	}else{
        		this.sDOCUIDXX = docGubn;
        	}
        	
        	switch(docGubn)
        	{		
        		// 출장승인신청서
        		case "KHR120":			
        			this.sAPPRGUBN = "show";
        			this.Div_Main.set_url("hat::HATF0050.xfdl");			
        			break;
        		default: 
        			this.sAPPRGUBN = "list";
        			this.Div_Main.set_url("hat::HATF0040.xfdl");
        			break;
        	}
        	
        	// 사용자 초기화 및 디폴트 셋팅
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.parent.parent.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if(sAPPRGUBN == "list") {

        		this.Div_Main.fn_search();
        	
        	} else {	
        		// 조회화면 전환
        		this.Div_Main.set_url("hat::HATF0040.xfdl");
        	}

        	this.sDOCUIDXX = "";
        	this.sAPPRGUBN = "list";
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Input = function (obj) {  

        	var lv_strDoc = "KHR120";

        	this.sAPPRSTAT = 'N';

        	// 해당 신청서 양식에 따른 url
        	switch(lv_strDoc)
        	{
        		// 시간외근무신청등록
        		case "KHR120":
        			this.Div_Main.set_url("hat::HATF0050.xfdl");
        			break;
        		default:
        			return;
        	}

        	this.sAPPRGUBN = "show";
        	this.sDOCUIDXX = lv_strDoc;
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if(sAPPRGUBN == "list")
        	{	
        		this.Div_Main.fn_Delete();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	if(sAPPRGUBN == "list"){
        		this.Div_Main.fn_Cancel();
        	}	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	this.Div_Main.fn_Save();
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        	
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	
        	if(e.fromobject instanceof Div) return;
        	//if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	//this.Div_Main.fn_FormUnloadCheckProcess();

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);	
        	//this.Div_Main.fn_FormUnloadProcess();
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	//this.Div_Main.fn_HotKey();
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
            	sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDOCU_IDXX.value)); 

        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        	} 
        	return sReturnString;
        	
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {
        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == 'SEARCH00') {
        		this.fnc_Information(this.stInformation, this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         
         /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        this.fn_goMenu = function(docId){
        	// 해당 신청서 양식에 따른 url
        	
        	switch(docId)
        	{
        		// 출장승인신청
        		case "KHR120":
        			this.Div_Main.set_url("hat::HATF0050.xfdl");
        			break;
        		default:
        			this.Div_Main.set_url("hat::HATF0040.xfdl");
        			return;
        			//break;
        	}
        	
        	this.sDOCUIDXX = docId;
        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("HATF0040D01.xfdl");

       
    };
}
)();
