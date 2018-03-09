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
                this.set_name("HRMA0030");
                this.set_titletext("조직개편관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_SIMUDT", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_LEVL\" size=\"256\" type=\"STRING\"/><Column id=\"SMUL_SEQN\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DTCH_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"ENGL_DTNM\" size=\"100\" type=\"STRING\"/><Column id=\"ABBR_DTNM\" size=\"100\" type=\"STRING\"/><Column id=\"DTGN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DTGP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"UPPR_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"SECT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"UPPR_NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_SIMUEM", this);
            obj._setContents("<ColumnInfo><Column id=\"SMUL_SEQN\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DTGP_CODE</Col><Col id=\"DSNAME\">dsDTGP_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">HRM0007</Col><Col id=\"DSNAME\">dsSHRSMUL_SEQN</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SIMUDT", "absolute", "8", "128", null, "332", "25", null, this);
            obj.set_binddataset("dsTM_SIMUDT");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("true");
            obj.set_taborder("1");
            obj.set_selecttype("row");
            obj.set_treeinitstatus("expand,null");
            obj.set_autofittype("none");
            obj.set_readonly("false");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\" band=\"left\"/><Column size=\"1\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"124\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서구조\"/><Cell col=\"1\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서명\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"영문명\"/><Cell col=\"4\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"약어명\"/><Cell col=\"5\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서그룹\"/><Cell col=\"6\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사업장\"/><Cell col=\"7\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"상위부서\"/><Cell col=\"8\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"9\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"소속여부\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"padding:0 10 0 0;line:1 none transparent ;selectline: ;\" text=\"bind:DEPT_NAME\" treelevel=\"bind:DEPT_LEVL\" treeexpandimage=\"bind:EXTE_IMAG\" treecollapseimage=\"bind:CLOS_IMAG\" treeitemimage=\"bind:IMAG_IDXX\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:ENGL_DTNM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:ABBR_DTNM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:DTGP_CODE\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:OFFI_NAME\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:UPPR_NAME\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SORT_ORDR\" editlimit=\"5\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SECT_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SIMUEM", "absolute", "8", "488", null, null, "25", "8", this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTM_SIMUEM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"123\"/><Column size=\"93\"/><Column size=\"96\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"backgroundimage: ;\" text=\"사원번호\"/><Cell col=\"1\" style=\"backgroundimage: ;\" text=\"성명\"/><Cell col=\"2\" style=\"backgroundimage: ;\" text=\"부서코드\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서명\"/><Cell col=\"4\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직책\"/><Cell col=\"5\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서장여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NAME\" wordwrap=\"none\" expandsize=\"13\" suppress=\"0\" suppressalign=\"first\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DURS_NAME\" editlengthunit=\"ascii\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:DTMN_YSNO\" wordwrap=\"none\" expandsize=\"13\" suppress=\"0\" suppressalign=\"first\" autosizerow=\"default\" autosizecol=\"default\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "8", "465", "119", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("  인원정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("44");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSMUL_SEQN", "absolute", "95", "70", "232", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image0", "absolute", "27", "70", "60", "22", null, null, this);
            obj.set_taborder("46");
            obj.set_text("조직개편");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "87", "61", "8", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_text("조직개편관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("54");
            obj.set_text("인사관리>조직관리>조직개편관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("59");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "107", "79", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("  부서정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "101", "107", "169", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조직개편관리");
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
        this.addIncludeScript("HRMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMA0030 조직개편관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.11     고민주		Initial Created.
         *   2016.12.06     안윤준		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "HRMA0030";

        //트리 클릭시 expand 구분용 변수
        this.sTREESTATUS  = 0;

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRSMUL_SEQN.setFocus();

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
        	this.fnc_DatasetClear("dsTM_SIMUDT,dsTM_SIMUEM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_SIMUDT=dsTM_SIMUDT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_SIMUEM=dsTM_SIMUEM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTM_SIMUDT,dsTM_SIMUEM");
        	this.grdTM_SIMUDT.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_SIMUDT=dsTM_SIMUDT:U dsTM_SIMUEM=dsTM_SIMUEM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SIMUDT.setFocus();

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

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_SIMUDT,dsTM_SIMUEM", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsTM_SIMUDT,dsTM_SIMUEM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSMUL_SEQN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조직개편", this.cmbSHRSMUL_SEQN);
        	}

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

        	var sDEPT_CODE_PRE = this.dsTM_SIMUDT.getColumn(this.dsTM_SIMUDT.rowposition,"DEPT_CODE");

        	this.dsTM_SIMUEM.filter("");
        	if (!this.fnc_DatasetChangeCheck("dsTM_SIMUDT,dsTM_SIMUEM")) {
        		this.dsTM_SIMUEM.filter("DEPT_CODE == '" + sDEPT_CODE_PRE + "'");
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var iDTMN_YSNO = 0;
        	var sDEPT_CODE = "";

        	for(var j = 0; j < this.dsTM_SIMUDT.getRowCount() ; j ++){

        		sDEPT_CODE = this.dsTM_SIMUDT.getColumn(j,"DEPT_CODE")
        		var iMatchRow = this.dsTM_SIMUEM.findRow("DEPT_CODE",sDEPT_CODE);

        		iDTMN_YSNO = 0;

        		for (var i = iMatchRow; sDEPT_CODE == this.dsTM_SIMUEM.getColumn(i,"DEPT_CODE"); i++){
        			if (this.dsTM_SIMUEM.getColumn(i, "DTMN_YSNO") == "1"){
        				iDTMN_YSNO++;
        			}
        		}

        		if (iMatchRow != -1){
        			if( iDTMN_YSNO == 0 ){
        				this.dsTM_SIMUDT.set_rowposition(j);
        				this.dsTM_SIMUEM.set_rowposition(0);
        				return this.fnc_Alert("부서 별로 부서장은 반드시 한명을 선택해야합니다.");
        			}else if ( iDTMN_YSNO > 1 ) {
        				this.dsTM_SIMUDT.set_rowposition(j);
        				this.dsTM_SIMUEM.set_rowposition(0);
        				return this.fnc_Alert("부서 별로 부서장은 반드시 한명만 선택해야합니다.");
        			}
        		}
        	}
        	this.dsTM_SIMUEM.filter("DEPT_CODE == '" + sDEPT_CODE_PRE + "'");
        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SMUL_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSMUL_SEQN.value));

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SMUL_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSMUL_SEQN.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsTM_SIMUDT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_SIMUDT.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if ( this.dsSHRSMUL_SEQN.getColumn(this.cmbSHRSMUL_SEQN.index, "COYS_YSNO") == "1" ) {
        			this.grdTM_SIMUDT.set_readonly(true);
        			this.grdTM_SIMUEM.set_readonly(true);
        		} else {
        			this.grdTM_SIMUDT.set_readonly(false);
        			this.grdTM_SIMUEM.set_readonly(false);
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTM_SIMUDT,dsDTGP_CODE,DTGP_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSMUL_SEQN,dsSHRSMUL_SEQN,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
        	}

        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	if(this.dsTM_SIMUDT.rowcount < 1 ) return;
        	this.dsTM_SIMUEM.filter("DEPT_CODE == '" + this.dsTM_SIMUDT.getColumn(this.dsTM_SIMUDT.rowposition,"DEPT_CODE") + "'");

        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ( this.dsSHRSMUL_SEQN.getColumn(this.cmbSHRSMUL_SEQN.index, "COYS_YSNO") == "1" ) {
        		return;
        	}
        	
        	if (obj.name == "grdTM_SIMUDT") {
        		if (sColumnID == "OFFI_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "OFFI_NAME"){
        			arrParam[0] = "TMM0008";
        			arrParam[1] = "ENFC_CODE";
        			arrParam[2] = "OFFI_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTM_SIMUDT";
        			arrParam[5] = "ENFC_CODE,OFFI_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}else if (sColumnID == "UPPR_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "UPPR_NAME")  {
        			arrParam[0] = "TMM0004";
        			arrParam[1] = "";
        			arrParam[2] = "UPPR_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTM_SIMUDT";
        			arrParam[5] = "UPPR_DTCD,UPPR_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}

        	} else if (obj.name == "grdTM_SIMUEM") {
        		if (sColumnID == "DURS_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "DURS_NAME")  {
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "DURS_CODE";
        			arrParam[2] = "DURS_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTM_SIMUEM";
        			arrParam[5] = "DURS_CODE,DURS_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}else if (sColumnID == "DEPT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME")  {
        			arrParam[0] = "TMM0004";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTM_SIMUEM";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";  // 직위 추가 되면 컬럼 하나 더 추가아
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        	}

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        
        /*---------------------------------+
         | Tree Grid 더블 클릭 이벤트 처리 |
         +---------------------------------*/
        this.grdTM_SIMUDT_oncelldblclick = function (obj,e) {
        	
        	if ( e.cell == 0 ) {
        		var objDs = this[obj.binddataset];

        		if (this.sTREESTATUS == 1) {
        			this.sTREESTATUS = 0;
        			return;
        		}

        		var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        		// 자식 노드가 존재할 경우
        		if (childRow >= 0) {

        			var gridRow = obj.getTreeRow(objDs.rowposition);

        			if (obj.isTreeCollapsedRow(childRow, true)) {
        				obj.setTreeStatus(gridRow, true);
        			} else {
        				obj.setTreeStatus(gridRow, false);
        			}

        		}

        		this.sTREESTATUS = 0;
        	}

        }

        this.dsTM_SIMUDT_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "OFFI_NAME") this.fn_HelpDialoge(this.grdTM_SIMUDT, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "UPPR_NAME") this.fn_HelpDialoge(this.grdTM_SIMUDT, "YES", e.oldvalue, e.columnid);

        }

        this.dsTM_SIMUEM_oncolumnchanged = function(obj,e){
        	if (e.columnid == "DEPT_NAME") this.fn_HelpDialoge(this.grdTM_SIMUEM, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "DURS_NAME") this.fn_HelpDialoge(this.grdTM_SIMUEM, "YES", e.oldvalue, e.columnid);

        }

        this.cmbSHRSMUL_SEQN_onitemchanged = function(obj,e){
        	this.fnc_DatasetClear("dsTM_SIMUDT,dsTM_SIMUEM");
        	
        }

        this.grdTM_SIMUEM_oncellclick = function(obj,e){
        	if ( this.dsSHRSMUL_SEQN.getColumn(this.cmbSHRSMUL_SEQN.index, "COYS_YSNO") == "1" ) {
        	} else {	
        		if ( this.fnc_getGridHelpColName(obj, e.cell) == "DTMN_YSNO") { // 입력 그리드 - 학력
        				
        			this.dsTM_SIMUEM.set_enableevent(false);
        			for ( var i=0; i<this.dsTM_SIMUEM.getRowCount(); i++ ) {
        				if ( i == e.row ) {
        					this.dsTM_SIMUEM.setColumn(i, "DTMN_YSNO", "1"); 
        				} else {
        					this.dsTM_SIMUEM.setColumn(i, "DTMN_YSNO", "0");
        				}
        			}
        			this.dsTM_SIMUEM.set_enableevent(true);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_SIMUDT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_SIMUDT.addEventHandler("oncolumnchanged", this.dsTM_SIMUDT_oncolumnchanged, this);
            this.dsTM_SIMUEM.addEventHandler("oncolumnchanged", this.dsTM_SIMUEM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTM_SIMUDT.addEventHandler("oncelldblclick", this.grdTM_SIMUDT_oncelldblclick, this);
            this.grdTM_SIMUDT.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTM_SIMUEM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTM_SIMUEM.addEventHandler("oncellclick", this.grdTM_SIMUEM_oncellclick, this);
            this.cmbSHRSMUL_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSMUL_SEQN.addEventHandler("onitemchanged", this.cmbSHRSMUL_SEQN_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
