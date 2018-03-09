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
                this.set_name("MDMC0010P02");
                this.set_titletext("신문사이즈조회팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,550,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_NPAPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"MNDY_FLAG\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_MEDM\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "15", "87", "262", "21", null, null, this);
            obj.set_cssclass("styFormSearchInfo");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "15", null, null, "21", "74", "13", this);
            obj.set_text("해당 항목에서 더블클릭 또는 Enter Key를 누르시면 선택 됩니다.");
            obj.set_cssclass("sta_WF_Desc01");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "15", "6", null, "21", "15", null, this);
            obj.set_cssclass("sta_WF_Info");
            obj.set_text("조회조건 후 입력하세요 ");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "30", null, "43", "15", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "83", "50", "21", "15", null, this);
            obj.set_taborder("8");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", null, "41", "52", "21", "26", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "102", "216", "6", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "0", "120", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "320", "0", "56", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "73", "56", "35", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "483", "64", "12", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "451", "64", "8", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "31", "41", "63", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("월일간구분");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_BRNDXM", "absolute", "15", "108", null, null, "15", "44", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsMD_NPAPXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"144\"/><Column size=\"84\"/><Column size=\"98\"/><Column size=\"95\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"월일간구분\"/><Cell col=\"1\" text=\"매체사명\"/><Cell col=\"2\" text=\"단\"/><Cell col=\"3\" text=\"통\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:MNDY_FLAG\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:STAD_STEP\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:STAD_MEDM\" editlimit=\"0\" expandshow=\"hide\" expandsize=\"23\"/><Cell col=\"4\" text=\"bind:STAD_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "245", "41", "39", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("매체명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_NAME", "absolute", "293", "41", "103", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMNDY_FLAG", "absolute", "95", null, "105", "21", null, "433", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 550, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("신문사이즈조회팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MDMC0010P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMC0010P02.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDMB0010P02 신문사이즈조회팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.13		최제현		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= ""; 
        this.sPACKAGENAME = 'MDMC0010P02';

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH = "";
        	this.sFORMCAPTION = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL = "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        
        /*------------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	//this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        }

        /*-----------------------+
         |  조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear('dsMD_NPAPXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_NPAPXM=dsMD_NPAPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        		
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_NPAPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_NPAPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	return true;
        }

        
        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " RMED_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRRMED_NAME.value)); //광고주
        		sReturnString += " MNDY_FLAG=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRMNDY_FLAG.value)); //브랜드

        	} 

        	return sReturnString;

        }

        /*-------------------------------------+
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsMD_NPAPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_NPAPXM.rowcount);

        	} else if (sMethodName == "GetCommCode") {		
        		this.fnc_GetComboMEDY_CODE();
        		this.fnc_GetComboMNDY_FLAG();
        		this.edtSHRRMED_NAME.set_value(this.parent.rmed_name);
        		this.cmbSHRMNDY_FLAG.set_value(this.parent.mndy_flag);
        		this.fn_Search();

        	}

        }

        /*----------------------------------+
         |  Enter Key Press 시 조회 실행 !  |
         +----------------------------------*/
        this.edtSearchText_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Search();

        }

        /*------------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTM_POPUPX_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Confirm();

        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {

        	if (e.keycode == 27) this.fn_Cancel();

        }

        /*---------------------+
         |  엑셀 버튼 클릭 時  |
         ----------------------*/
        this.fn_ToExcel = function (obj,e) {

        	this.fnc_ToExcel(this.name);

        }

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var stdr_etcx = this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"STAD_SIZE");
        	var stdr_step = this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"STAD_STEP");
        	var stdr_ctmt = this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"STAD_MEDM");
        	var key = this.parent.key;

        	this.opener.fn_CallBackPopup(stdr_etcx,stdr_step,stdr_ctmt, key);
        	
        	this.fnc_PopupClose("");

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }
        /*----------------+
         |  셀 더블클릭  |
         +----------------*/
        this.grdMD_BRNDXM_oncelldblclick = function(obj,e)
        {
        	this.fn_Confirm();
        }

        /*-------------------------------------+
          |  검색을 위한 신문구분 콤보		|
          +-------------------------------------*/

        //신문구분
        this.fnc_GetComboMEDY_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMNDY_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0014"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMNDY_FLAG,dsMNDY_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*--------------------------------------+
         |  	그리드 신문구분 콤보         |
         +--------------------------------------*/
        //신문구분
        this.fnc_GetComboMNDY_FLAG = function(flag)
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMNDY_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0014"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = flag						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdMD_BRNDXM,dsGRDMNDY_FLAG,MNDY_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.Button69.addEventHandler("onclick", this.fn_Search, this);
            this.grdMD_BRNDXM.addEventHandler("onheadclick", this.grdMD_CTMDXM_onheadclick, this);
            this.grdMD_BRNDXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_BRNDXM.addEventHandler("oncelldblclick", this.grdMD_BRNDXM_oncelldblclick, this);
            this.edtSHRRMED_NAME.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.cmbSHRMNDY_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("MDMC0010P02.xfdl");

       
    };
}
)();
