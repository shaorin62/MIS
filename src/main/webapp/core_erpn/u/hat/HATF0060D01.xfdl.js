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
                this.set_name("HATF0060D01");
                this.set_titletext("출장여비정산 신청 및 내역 DIV");
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
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장여비정산 신청 및 내역 DIV");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HATF0060D01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0060D01.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장여비정산 내역을 관리한다.
         * @category	 	인사관리>출장관리>출장여비정산
         * @author	   		김남호
         * @cdate	  		2016.09.22
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
        this.sAPPRGUBN 	= "";	    // 결재처리구분 [ list : 목록, del : 결재취소, show : 조회, cre : 결재상신(수정), re : 재사용, new : 신규등록, modi : 수정 ]
        this.sDOCUIDXX 	= "";		// 결재문서 ID
        this.sAPPRSEQN 	= "";     	// 결재문서 SEQ
        this.sAPPRSTAT   = "";       // 결재문서 상태
        this.sAPPLEMNR   = "";       // 신청자 사번
        this.sINSTUSID   = application.GBL_EMPLNO;  // 작성자 사번
        this.sBSRPGUBN   = "";        // 출장승인신청서 구분 (0==>일반: 국내, 국외 / 1==> 일일출장 : 일일)
        this.sBSRP_SEQ1	= "";		//출장승인key
        this.sBTCL_SEQ1	= "";		//출장여비정산key
        this.sBTWO_SEQ1	= "";		//외근등록key

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
        		default : list, 엔포탈에서 양식으로 바로 조회시 넘어오는 문서구분값
        	*/
        	var v_sParam = this.getOwnerFrame();
        	var v_sFormParam = v_sParam.planner_bizMenuParam;
        	
        	var docGubn = ""; 
        		
        	if(v_sFormParam == null){
        	
        		docGubn = "list";
        	
        	}else{
        	
        		docGubn = v_sFormParam;
        		fv_linkGubn = v_sFormParam;
        	
        	}
        	
        	// 해당 신청서 양식에 따른 초기화면
        	switch(docGubn)
        	{
        		case "KHR121":
        		case "KHR122":

        		default: 
        			sAPPRGUBN = "list";
        			this.Div_Main.set_url("hat::HATF0060.xfdl");
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
        		this.Div_Main.set_url("hat::HATF0060.xfdl");
        	}

        	this.sDOCUIDXX = "";
        	this.sAPPRGUBN = "list";
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Input = function (obj) {  

        	var sBsrpCode = this.fnc_Trim(this.Div_Main.EdtBsrpCode.value);
        	
        	// 출장구분(국내,외근) 선택 따른 url
        	switch(sBsrpCode)
        	{
        		//국내출장여비등록
        		case "10":
        			this.Div_Main.set_url("hat::HATF0070.xfdl");
        			this.sDOCUIDXX = "KHR121";
        			break;
        		//국외출장여비등록
        		case "20":
        			this.Div_Main.set_url("hat::HATF0070.xfdl");
        			this.sDOCUIDXX = "KHR121";
        			break;
        		//외근정산등록
        		case "30":
        			this.Div_Main.set_url("hat::HATF0080.xfdl");
        			this.sDOCUIDXX = "KHR122";
        			break;
        		default:
        			this.fnc_Message("TMM125","출장구분을 확인하세요.");
        			return;
        	}
        	
        	this.sAPPRGUBN = "show";

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	this.Div_Main.fn_Delete();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.Div_Main.fn_Cancel();
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
         this.fn_goMenu = function(sBsrpCode){
        	// 해당 신청서 양식에 따른 url

        	// 출장구분(국내,외근) 선택 따른 url
        	switch(sBsrpCode)
        	{
        		//국내출장여비등록
        		case "10":
        			this.Div_Main.set_url("hat::HATF0070.xfdl");
        			this.sDOCUIDXX = "KHR121";
        			break;
        		//국외출장여비등록
        		case "20":
        			this.Div_Main.set_url("hat::HATF0070.xfdl");
        			this.sDOCUIDXX = "KHR121";
        			break;
        		//외근정산등록
        		case "30":
        			this.Div_Main.set_url("hat::HATF0080.xfdl");
        			this.sDOCUIDXX = "KHR122";
        			break;
        		default:
        			this.Div_Main.set_url("hat::HATF0060.xfdl");
        			return;
        	}
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

        this.loadIncludeScript("HATF0060D01.xfdl");

       
    };
}
)();
