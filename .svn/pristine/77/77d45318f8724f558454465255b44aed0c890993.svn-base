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
                this.set_name("comPostPopup");
                this.set_titletext("우편번호검색");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,878,445);
            }
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NWPOST", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_VIEW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIDO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DORONAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIGUNGU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_VIEW\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ADDR_VIEW2\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"UPMYUN\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_NWPOST", "absolute", "15", "83", "848", "318", null, null, this);
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsTM_NWPOST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"68\"/><Column size=\"88\"/><Column size=\"151\"/><Column size=\"129\"/><Column size=\"277\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"시/도\"/><Cell col=\"2\" text=\"시/군/구\"/><Cell col=\"3\" text=\"읍면\"/><Cell col=\"4\" text=\"도로명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:POST_VIEW\" mask=\"#####\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:SIDO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:SIGUNGU\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:UPMYUN\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:DORONAME\" editlimit=\"0\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "15", "411", "484", "20", null, null, this);
            obj.set_text("해당 항목에서 더블클릭 또는 Enter Key를 누르시면 선택 됩니다.");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "62", "200", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "43", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSIDO_CODE", "absolute", "77", "26", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle7", "absolute", "35", "26", "36", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("시도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "215", "26", "52", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("시군구");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "408", "26", "52", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("도로명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDORONAME", "absolute", "463", "26", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSIGUNGU", "absolute", "270", "26", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle02", "absolute", "612", "26", "52", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("건물명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDLNAME", "absolute", "667", "26", "120", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "437", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "863", "0", "15", "437", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "32", "401", "120", "14", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "419", "58", "56", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "320", "0", "56", "15", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "16", "77", "216", "6", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", "797", "25", "55", "23", null, null, this);
            obj.set_taborder("31");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "808", "409", "55", "24", null, null, this);
            obj.set_taborder("32");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "782", "433", "64", "12", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "782", "401", "64", "8", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 878, 445, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("우편번호검색");
            		p.set_scrollbars("none");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comPostPopup.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comPostPopup.xfdl", function() {
        /*****************************************************************************************************
         2014.10.25 김석두 (최초 개발)
         본 화면은 Help Popup 처리 화면 입니다.
         
         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ****************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sSEARCHKIND  = this.parent.sSEARCHKIND;  //Open 할 Popup 종류
        this.sSEARCHPARAM = this.parent.sSEARCHPARAM; //조회 Parameter
        this.sSEARCHVALUE = this.parent.sSEARCHVALUE; //입력된 자료가 있다면 Default로 조회
        this.sSEARCHUSE   = this.parent.sSEARCHUSE;   //사용여부구문 포함 여부
        this.sPACKAGENAME = 'ComPostPopup';

        /*------------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);	

        }

        /*-----------------------------------------+
         |  화면 ID에 다른 Form Setting 자료 조회  |
         +-----------------------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTM_NWPOST");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_NWPOST=dsTM_NWPOST";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NWPOST.setFocus();

        }

        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSIDO_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "시도", this.cmbSHRSIDO_CODE);
        	/*} else if (this.fnc_Length(this.fnc_Trim(this.edtSHRSIGUNGU.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "시군구", this.edtSHRSIGUNGU);*/
        	} else if (this.fnc_Length(this.fnc_Trim(this.edtSHRDORONAME.value)) < 1 && this.fnc_Length(this.fnc_Trim(this.edtSHRBDLNAME.value)) < 1) {		
        		return this.fnc_SearchCheckPostAction("TMM072", "도로명 OR 건물명", this.edtSHRDORONAME);
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 도로명검색
        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="         		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      		+ this.fnc_Quote(sKind);
        		//sReturnString += " cmbSHRSIDO_CODE="   	+ this.fnc_Quote(this.cmbSHRSIDO_CODE.text); 	//시도
        		sReturnString += " cmbSHRSIGUNGU="   	+ this.fnc_Quote(this.cmbSHRSIGUNGU.value);		//시군구
        		sReturnString += " edtSHRDORONAME="   	+ this.fnc_Quote(this.edtSHRDORONAME.value);		//도로명
        		sReturnString += " edtSHRBDLNAME="   	+ this.fnc_Quote(this.edtSHRBDLNAME.value);		//건물명

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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_NWPOST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "GetCommCode") {
        	
        		
        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsSIDO_CODE"; 			   //받을 Dataset명
        		arrParam1[1] = "COM0001"; 	  			   //조회 콤보 ID
        		arrParam1[2] = ""; 			  			   //Head Flags
        		arrParam1[3] = "0"; 		  			   //사용여부
        		arrParam1[4] = this.cmbSHRSIDO_CODE.value; //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRSIDO_CODE,dsSIDO_CODE,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);

        		this.edtSHRDORONAME.set_value("");
        	    this.fn_GetCombo();
        	}
        }

        /*----------------------------------+
         |  Enter Key Press 시 조회 실행 !  |
         +----------------------------------*/
        this.edtSearchText_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Search();

        }

        
        /*-----------------------------------------------------+
         |  검색 조건 Combo가 바뀔 때 검색 조건 Text로 Focus!  |
         +-----------------------------------------------------*/
        this.cmbSearch_OnChanged = function (obj,e) {

        	this.edtSearchText.setFocus();

        }

        /*------------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTM_NWPOST_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Confirm();

        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {

        	if (e.keycode == 27) this.fn_Cancel();

        }

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var iColumnCount = this.dsTM_NWPOST.getColCount();
        	var arrReturn = new Array(3);

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsTM_NWPOST.getColumn(this.dsTM_NWPOST.rowposition, "POST_VIEW");
        	arrReturn[1] = this.dsTM_NWPOST.getColumn(this.dsTM_NWPOST.rowposition, "ADDR_VIEW");
        	arrReturn[2] = this.dsTM_NWPOST.getColumn(this.dsTM_NWPOST.rowposition, "ADDR_VIEW2");
        		
        	this.fnc_PopupClose(arrReturn);

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }

        this.cmbSHRSIDO_CODE_onitemchanged = function(obj,e)
        {
        	this.fn_GetCombo();
        }

        
        /*------------------------+
         |  시군구 코드          |
         +------------------------*/
        this.fn_GetCombo = function () {

        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsCITY_CODE"; 			   //받을 Dataset명
        		arrParam1[1] = "COM0002"; 	  			   //조회 콤보 ID
        		arrParam1[2] = ""; 			  			   //Head Flags
        		arrParam1[3] = "0"; 		  			   //사용여부
        		arrParam1[4] = this.cmbSHRSIDO_CODE.value; //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRSIGUNGU,dsCITY_CODE,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTM_NWPOST.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.grdTM_NWPOST.addEventHandler("onkeydown", this.grdTM_NWPOST_OnKeyDown, this);
            this.cmbSHRSIDO_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSIDO_CODE.addEventHandler("onitemchanged", this.cmbSHRSIDO_CODE_onitemchanged, this);
            this.edtSHRDORONAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDORONAME.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.cmbSHRSIGUNGU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDLNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDLNAME.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.btnSearch.addEventHandler("onclick", this.fn_Search, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("comPostPopup.xfdl");

       
    };
}
)();
