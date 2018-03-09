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
                this.set_name("YEAA0100_2016");
                this.set_titletext("의료비전산매체(2016)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,672);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYEA_COMP_MED1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_TAXOFFIC_NM\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SEND_YMD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HOMETAX_ID\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_NM\" size=\"40\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_COMP_MEDI", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_REC_DATA\" size=\"250\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_COMP_MED2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_EMP_NO\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LOFO_NM\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR008\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR007\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR006\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_NUM001\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MES_NUM002\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MES_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR002\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR004\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stTITLE1", "absolute", "0", "4", "203", "21", null, null, this);
            obj.set_text("원천징수의무자");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_COMP_MED1", "absolute", "0", "25", null, "99", "0", null, this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsYEA_COMP_MED1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" displaytype=\"text\" text=\"제출자\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"text\" text=\"원천징수의무자\"/><Cell row=\"1\" displaytype=\"text\" text=\"세무서\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"제출일\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"사업자번호\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"홈택스ID\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"사업자번호\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"상호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_TAXOFFIC_NM\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:left\" text=\"bind:YEA_SEND_YMD\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_BIZ_NO1\" mask=\"###-##-#####\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_HOMETAX_ID\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_BIZ_NO2\" mask=\"###-##-#####\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_BRANCH_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "0", "128", "203", "21", null, null, this);
            obj.set_text("의료비 지급내역");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_COMP_MED2", "absolute", "0", "149", null, null, "0", "0", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsYEA_COMP_MED2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"79\" band=\"left\"/><Column size=\"79\" band=\"left\"/><Column size=\"79\" band=\"left\"/><Column size=\"99\"/><Column size=\"125\"/><Column size=\"117\"/><Column size=\"70\"/><Column size=\"104\"/><Column size=\"100\"/><Column size=\"76\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" displaytype=\"text\" text=\"소득자\"/><Cell col=\"3\" colspan=\"3\" displaytype=\"text\" text=\"지급처\"/><Cell col=\"6\" colspan=\"3\" displaytype=\"text\" text=\"지급명세\"/><Cell col=\"9\" colspan=\"3\" displaytype=\"text\" text=\"공제대상자\"/><Cell row=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"사원명\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"내외국인\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"상호\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"의료증빙코드\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"건수\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"지급액\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"난임시술비해당여부\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"성명\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"내외국인\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"본인등해당여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_EMP_NO\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_EMP_NM\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_LOFO_NM\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_MES_STR007\" mask=\"###-##-#####\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_MES_STR006\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_MES_STR001\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_MES_NUM001\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_MES_NUM002\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:YEA_MES_STR008\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_MES_STR002\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_MES_STR004\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_MES_STR005\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "458", "0", "80", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "458", "124", "80", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1235", "128", "80", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 672, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("의료비전산매체(2016)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("YEAA0100_2016.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0100_2016.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0100_2016.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0100_2015 의료비전산매체(2015)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFFFTF'; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = 'YEAA0100_2016'; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   = "";			//파일명
        this.sFILE_PATH   = "";			//파일경로

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
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear("dsYEA_COMP_MED1,dsYEA_COMP_MED2,dsYEA_COMP_MEDI");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsYEA_COMP_MED1=dsYEA_COMP_MED1 dsYEA_COMP_MED2=dsYEA_COMP_MED2 dsYEA_COMP_MEDI=dsYEA_COMP_MEDI";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_COMP_MED1.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
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
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

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
        	if (this.fnc_Length(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)) != 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "정산년도", this.parent.medSHRYEA_STD_YY);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지점코드", this.parent.cmbSHRYEA_BRANCH_CD);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "제출일", this.parent.calSHRYEA_SEND_YMD);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " medSHRYEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)); //정산년도
        		sReturnString += " cmbSHRYEA_BRANCH_CD=" + this.fnc_Quote(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)); //지점코드
        		sReturnString += " calSHRYEA_SEND_YMD=" + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)); //제출일
        		sReturnString += " medSHRYEA_DEDUCTION_AMT=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_DEDUCTION_AMT.value)); //신고금액

        	}else if (sKind == 'SAVE00') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " medSHRYEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)); //정산년도
        		sReturnString += " cmbSHRYEA_BRANCH_CD=" + this.fnc_Quote(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)); //지점코드
        		sReturnString += " calSHRYEA_SEND_YMD=" + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)); //제출일
        		sReturnString += " medSHRYEA_DEDUCTION_AMT=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_DEDUCTION_AMT.value)); //신고금액
        		sReturnString += " sYEA_BIZ_NO=" 	 + this.fnc_Quote(this.fnc_Trim(this.dsYEA_COMP_MED1.getColumn(0, "YEA_BIZ_NO1"))); //사업자번호
        		
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
        		//this.fnc_Message("TMM018", this.dsYEA_COMP_MED3.getCaseCount("dataset.getRowLevel(currow)==0"));
        	}else if (sMethodName == 'SAVE00') {
        	
        		trace("this.sFILE_NAME : "+this.sFILE_NAME+" this.sFILE_PATH: "+this.sFILE_PATH);
        		this.fn_ExcelFileDown();
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------------+
         |  전산매체 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {

        	var sPath    = this.sFILE_PATH;   //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        this.btnFileCreate_OnClick = function (obj,e) {

        	// 파일생성 전처리가 false 이면 다음처리를 하지않는다.
        	if (!this.PreCreateFile()) return;

        	// 파일생성 처리를 한다.
        	this.ComCreateFile();
        }

        // 파일생성 전처리 메소드
        this.PreCreateFile = function () {

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_COMP_MED2.rowcount < 1) {
        		// 전산매체 신고할 연말정산 내역이 없습니다.
        		this.fnc_Alert("전산매체 신고할 [연말정산] 내역이 없습니다."); 
        		return false;
        	}

        	// 처리 하시겠습니까? 메시지 뿌리기
        	if (!this.fnc_Confirm("처리하시겠습니까?")) return false;
        	
        	return true;
        }

        
        // 파일생성
        this.ComCreateFile = function () {

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("YEAA0100_2016.xfdl");

       
    };
}
)();
