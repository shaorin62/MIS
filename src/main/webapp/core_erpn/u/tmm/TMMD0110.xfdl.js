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
                this.set_name("TMMD0110");
                this.set_titletext("메타용어관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_METAXM", this);
            obj._setContents("<ColumnInfo><Column id=\"COLM_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTR_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ORIG_WORD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMN_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMN_LEN1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DOMN_LEN2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SYST_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNN_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DOMN_CODE</Col><Col id=\"DSNAME\">dsDOMN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "117", "21", null, null, this);
            obj.set_text("물리명 Or 논리명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_METAXM", "absolute", "8", "128", null, null, "25", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_METAXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"95\"/><Column size=\"207\"/><Column size=\"260\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"139\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"물리명\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"논리명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전체명칭\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"도메인\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"자리수1\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"자리수2\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시스템\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"담당자\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:center;font:9 굴림체;\" text=\"bind:COLM_NAME\" editimemode=\"alpha\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ATTR_NAME\" editlimit=\"50\" editimemode=\"hangul\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ORIG_WORD\" editlimit=\"100\" editimemode=\"alpha\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:DOMN_CODE\" editlimit=\"50\" editimemode=\"english\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN1\" editlimit=\"4\" editimemode=\"native\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN2\" editlimit=\"2\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:SYST_CODE\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:OWNN_NAME\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:REMK_100X\" editlimit=\"100\" editimemode=\"hangul\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOLM_NAME", "absolute", "146", "71", "262", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "253", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", "0", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            obj.set_visible("true");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", "101", "0", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            obj.set_visible("true");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("메타용어관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 공통관리 > 시스템관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "138", "61", "8", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 253, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메타용어관리");
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
        this.addIncludeScript("TMMD0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0110.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         
         2016.08.26. 김석두(표준화 최종 완료)
        ***************************************************************************************************/

        /************************
         * 공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         * 화면 변수 선언부 *
         *********************/
        this.sBUTTONLIST = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMD0110";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /**************************************************************************************************
         *                                      공통 Event 처리 부분                                    *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;	
        	this.fnc_DatasetClear("dsTM_METAXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_METAXM=dsTM_METAXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_METAXM.addRow();
        	this.fnc_GridSetCellFocus(this.grdTM_METAXM, "COLM_NAME");

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTM_METAXM.deleteRow(this.dsTM_METAXM.rowposition);
        	this.grdTM_METAXM.setFocus();

        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_METAXM");
        	this.grdTM_METAXM.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_METAXM=dsTM_METAXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_METAXM.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_METAXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);

        }

        
        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	// 공통 예외 처리 - 화면에서 자동 조회를 위해 - Enter Key 시
        	if ((e.keycode == 13) && (e.fromreferenceobject.name == "edtSHRCOLM_NAME")) {
        		this.fn_Search();
        		return;
        	}

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_METAXM")) if (this.fnc_Message("TMM023") == false) return false;
        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_METAXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText  = "  물리명:" + this.dsTM_METAXM.getColumn(this.dsTM_METAXM.rowposition, "COLM_NAME") + String.fromCharCode(10);
        		sQuestionText += "  논리명:" + this.dsTM_METAXM.getColumn(this.dsTM_METAXM.rowposition, "ATTR_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_METAXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTM_METAXM.getRowCount(); i++) {

        		if (this.dsTM_METAXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "COLM_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "물리명", this.dsTM_METAXM, i, this.grdTM_METAXM, "COLM_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "ATTR_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "논리명", this.dsTM_METAXM, i, this.grdTM_METAXM, "ATTR_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "ORIG_WORD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전체명칭", this.dsTM_METAXM, i, this.grdTM_METAXM, "ORIG_WORD");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "DOMN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "도메인", this.dsTM_METAXM, i, this.grdTM_METAXM, "DOMN_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "DOMN_LEN1"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자리수1", this.dsTM_METAXM, i, this.grdTM_METAXM, "DOMN_LEN1");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_METAXM.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템", this.dsTM_METAXM, i, this.grdTM_METAXM, "SYST_CODE");
        		}

        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COLM_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOLM_NAME.value));

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        		this.fnc_Information(this.stInformation, this.dsTM_METAXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_METAXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {

        		this.fn_KeyFieldDisible(this.dsTM_METAXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTM_METAXM,dsDOMN_CODE,DOMN_CODE";
        			arrParam[1] = "GRID,grdTM_METAXM,dsSYST_CODE,SYST_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.dsSYST_CODE.filter("USEX_YSNO=='1'");

        	}

        }

        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function (obj){

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_METAXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTM_METAXM, "COLM_NAME"), "edittype", "normal");
        	} else {
        		this.grdTM_METAXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTM_METAXM, "COLM_NAME"), "edittype", "none");
        	}

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         ***************************************************************************************************/

        /*-------------------------------+
         |  양식파일 업로드 클릭 時   |
         +-------------------------------*/
        this.fn_ExcelUpload = function(obj,e) {
        	
        	this.fnc_DatasetClear("dsTM_METAXM");
        	this.fnc_ExcelUpload("dsTM_METAXM", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        /*-------------------------------------------+
         |  양식파일 업로드 클릭 時 후처리함수   |
         +-------------------------------------------*/
        this.fn_ExcelSuccess = function(obj,e) {

        	this.setWaitCursor(false);
        	this.dsTM_METAXM.set_enableevent(false);
        	this.dsTM_METAXM.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	this.dsTM_METAXM.set_enableevent(true);
        	
        	// 복사해온 Row Status는 Insert Type.
        	this.dsTM_METAXM.set_updatecontrol(false);
        	for (var i = 0; i < this.dsTM_METAXM.getRowCount(); i++) {
        		this.dsTM_METAXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        	}
        	this.dsTM_METAXM.set_updatecontrol(true);
        	this.dsTM_METAXM.set_rowposition(1);
        	this.grdTM_METAXM.setFocus();

        	this.fnc_Message("TMM300", "엑셀 업로드를 완료하였습니다.");

        }

        /*------------------------------+
         |  양식파일 다운로드 처리   |
         +------------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        // 	var sPath    = "XLS_FILE/";               //파일 경로
        //     var sLogFile = "메타용어.xlsx";          //파일 논리명
        //     var sPhyFile = "UpSample_MetaData.xlsx";  //파일 물리명
        // 
        // 	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_METAXM.addEventHandler("oncolumnchanged", this.dsTM_METAXM_OnColumnChanged, this);
            this.dsTM_METAXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMD0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
