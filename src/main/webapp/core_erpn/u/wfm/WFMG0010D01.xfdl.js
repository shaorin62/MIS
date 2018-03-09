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
                this.set_name("WFMG0010D01");
                this.set_titletext("신청 및 내역 DIV");
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
            		p.set_titletext("신청 및 내역 DIV");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WFMG0010D01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMG0010D01.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		연수지원신청DIV
         * @category	 	복리후생> 연수관리> 연수지원신청DIV
         * @author	   		김혜림
         * @cdate	  		2016.09.21
         * @version 1.0		최초 작성
         * WFMG0010D01.xml - <Created by Code Template generator>
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
        this.sPACKAGENAME = "WFMG0010D01"; //해당 Form에서 사용 할 Package 명 
        var sAPPRGUBN 	= "";	// 결재처리구분 [ list : 목록, del : 결재취소, show : 조회, createDoc : 상신 , insert : 입력 (추가)]
        var sDOCUIDXX 	= "";	// 결재문서 ID
        var sAPPRSEQN 	= "";	// 결재문서 SEQ
        var sAPPRSTAT   = "";   // 결재문서 상태

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
        	//var v_sParam = this.getOwnerFrame();
        	//var v_sFormParam = v_sParam.planner_bizMenuParam;
        	//var docGubn = ""; 
        	
        	/*수정*/
        	var v_sParam = this.getOwnerFrame();
        	var docGubn = application.dsFrontArgs.getColumn(application.dsFrontArgs.findRow("ARGS_NAME","docGubn"),"ARGS_VALU");

        	if(docGubn == null){
        		docGubn = "list"; 
        		this.sDOCUIDXX = "";		
        	}else{
        		this.sDOCUIDXX = docGubn;
        	}
        		
        	// 해당 신청서 양식에 따른 초기화면
        	switch(docGubn)
        	{
        		case "KHR143":
        			this.sAPPRGUBN = "insert";//show에서 변경함
        			this.Div_Main.set_url("wfm::WFMG0020.xfdl");			
        			break;
        		default: 
        			this.sAPPRGUBN = "list";
        			this.Div_Main.set_url("wfm::WFMG0010.xfdl");
        			break;
        	}
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
        	
        	if(sAPPRGUBN == "list")
        	{
        		this.Div_Main.fn_search();
        	}
        	else
        	{	
        		// 조회화면 전환
        		this.Div_Main.set_url("wfm::WFMG0010.xfdl");
        	}

        	this.sDOCUIDXX = "";
        	this.sAPPRGUBN = "list";
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  

        	var lv_strDoc = this.fnc_Trim(this.Div_Main.cmbSHRDOCU_IDXX.value);
        	// 신청서에 따른 신규화면 전환
        	if(lv_strDoc == "")
        	{
        		/*
        		  신청서를 선택해 주세요라는 메세지를 등록해야 함. 
        		*/
        		this.fnc_Message("TMM125","신청서를 선택해주세요");
        		return;
        	}
        	
        	// 해당 신청서 양식에 따른 url
        	if(lv_strDoc=="KHR143"){
        		this.Div_Main.set_url("wfm::WFMG0020.xfdl");
        		this.sAPPRGUBN = "insert";//show에서 변경함
        		this.sDOCUIDXX = lv_strDoc;
        		this.sAPPRSTAT = "";
        	}else{
        		this.fnc_Message("TMM125","신청서를 선택해주세요");
        		return;
        	}
        	
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

        	
        	//if(e.fromobject instanceof Div) return;
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
        		//this.fnc_Information(this.stInformation, this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		
        		//this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         this.fn_goMenu = function(docId){
        	// 해당 신청서 양식에 따른 url
        	
        	switch(docId)
        	{
        		// 연수지원신청서
        		case "KHR143":
        			this.Div_Main.set_url("wfm::WFMG0020.xfdl");
        			break;
        		default:
        			this.Div_Main.set_url("wfm::WFMG0010.xfdl");
        			return;
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

        this.loadIncludeScript("WFMG0010D01.xfdl");

       
    };
}
)();
