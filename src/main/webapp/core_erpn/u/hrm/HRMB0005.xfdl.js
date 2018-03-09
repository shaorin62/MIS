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
                this.set_name("HRMB0005");
                this.set_titletext("사원번호생성");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsWRDV_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("사원번호생성");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("인사관리>인사관리>사원번호생성");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0%", "1", null, "23", "82.2%", null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "17.98%", "1", null, "23", "65.79%", null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXM", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"101\"/><Column size=\"93\"/><Column size=\"133\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"한글성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"주민등록번호\"/><Cell col=\"3\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"입사일\"/><Cell col=\"4\" text=\"부서코드\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" displaytype=\"text\" text=\"영문이름\"/><Cell col=\"7\" displaytype=\"text\" text=\"한자\"/><Cell col=\"8\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직원구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:RERN_NUMB\" mask=\"######-#######\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENCO_DATE\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:DEPT_CODE\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ENEE_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CCEM_NAME\" editimemode=\"native\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:WRDV_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "302", "68", "33", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "340", "68", "60", "22", null, null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "401", "68", "22", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_align("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "424", "68", "125", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "47", "22", null, null, this);
            obj.set_taborder("22");
            obj.set_text("입사일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBGIN_DATE", "absolute", "68", "68", "103", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "168", "68", "16", "22", null, null, this);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENDX_DATE", "absolute", "188", "68", "103", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사원번호생성");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMB0005.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0005.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		초기대상자일괄입력를 관리한다.
         * @category	 	인사관리/초기대상자일괄입력
         * @author	   	고민주
         * @cdate	  		2016.07.05
         * @version 1.0		최초 작성
         * HRMB0005.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMB0005"; 

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRBGIN_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + '0101');
        	this.calSHRENDX_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))); 
        	this.calSHRBGIN_DATE.setFocus();

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
        	this.fnc_DatasetClear('dsHR_MASTXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_MASTXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	var iRow = this.dsHR_MASTXM.insertRow(this.dsHR_MASTXM.rowposition + 1);
        	this.dsHR_MASTXM.set_rowposition(iRow); 
        	this.grdHR_MASTXM.setCellPos(this.fnc_GridColumnIndex(this.grdHR_MASTXM, "EMPL_NAME"));
        	this.grdHR_MASTXM.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsHR_MASTXM.deleteMultiRows(this.grdHR_MASTXM.getSelectedDatasetRows());
        		this.grdHR_MASTXM.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsHR_MASTXM");
        	this.grdHR_MASTXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsHR_MASTXM=dsHR_MASTXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_MASTXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_MASTXM", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_MASTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBGIN_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "입사일", this.calSHRBGIN_DATE);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRENDX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "입사일", this.calSHRENDX_DATE);
        	}
        	
        	if (this.calSHRBGIN_DATE.value > this.calSHRENDX_DATE.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "입사시작일,입사종료일", this.calSHRBGIN_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_MASTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdHR_MASTXM);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_MASTXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_MASTXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_MASTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(i, 'EMPL_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "한글성명", this.dsHR_MASTXM, i, this.grdHR_MASTXM, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(i, 'RERN_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "주민등록번호", this.dsHR_MASTXM, i, this.grdHR_MASTXM, "RERN_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(i, 'ENCO_DATE'))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "입사일", this.dsHR_MASTXM, i, this.grdHR_MASTXM, "ENCO_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(i, 'WRDV_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직원구분", this.dsHR_MASTXM, i, this.grdHR_MASTXM, "WRDV_CODE");
        		}
        	}
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
        		sReturnString += " BGIN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRBGIN_DATE.value)); 
        		sReturnString += " ENDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENDX_DATE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdHR_MASTXM,dsWRDV_CODE,WRDV_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	if(obj.readonly == true) return;
        	
        	var arrParam = new Array();
        	
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}else if (obj.name == 'grdHR_MASTXM') {
        	
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME") {
        				
        			arrParam[0] = 'TMM0004';
        			arrParam[1] = '';
        			arrParam[2] = 'DEPT_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdHR_MASTXM';
        			arrParam[5] = 'DEPT_CODE,DEPT_NAME';
        			arrParam[6] = '0,1';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {

        	var sPath    = "XLS_FILE/";               //파일 경로
            var sLogFile = "사원번호생성.xlsx";  //파일 논리명
            var sPhyFile = "UpSample_EnpsTotal.xlsx";  //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;

        	//this.fn_GetPay();	
        	this.dsHR_MASTXM.clearData();
        	this.fnc_ExcelUpload("dsHR_MASTXM","Sheet1","A2", "this.fn_ExcelSuccess");	

        	
        }

        //그리드 팝업 시 필요한 이벤트
        this.dsHR_MASTXM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "DEPT_NAME") this.fn_HelpDialoge(this.grdHR_MASTXM, "YES" ,e.oldvalue, e.columnid); 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_MASTXM.addEventHandler("oncolumnchanged", this.dsHR_MASTXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.grdHR_MASTXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HRMB0005.xfdl");
        this.loadPreloadList();
       
    };
}
)();
