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
                this.set_name("PAYB0165");
                this.set_titletext("급여추가발령");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_APDCAL", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DCGB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTLV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsDCGB_CODE</Col><Col id=\"CODEID\">DCGB_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsPSTP_CODE</Col><Col id=\"CODEID\">PSTP_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsDTLV_CODE</Col><Col id=\"CODEID\">DTLV_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsDRTY_CODE</Col><Col id=\"CODEID\">DRTY_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsPYTY_CODE</Col><Col id=\"CODEID\">PYTY_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsWRKS_CODE</Col><Col id=\"CODEID\">WRKS_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"CODEID\">CLSD_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsJBGP_CODE</Col><Col id=\"CODEID\">JBGP_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "177", "76", "134", "22", null, null, this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_APDCAL", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_APDCAL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"77\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" displaytype=\"text\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"성명\"/><Cell col=\"2\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"기준일\"/><Cell col=\"3\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"구분\"/><Cell col=\"4\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직원구분\"/><Cell col=\"5\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"근무상태\"/><Cell col=\"6\" text=\"부실\"/><Cell col=\"7\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"부서\"/><Cell col=\"8\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직군\"/><Cell col=\"9\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직급\"/><Cell col=\"10\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"호봉\"/><Cell col=\"11\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직무\"/><Cell col=\"12\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"직책\"/><Cell col=\"13\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"급여형태\"/><Cell col=\"14\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:DCGB_CODE\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CLSD_CODE\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:WRKS_CODE\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:JBGP_CODE\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:PSTP_CODE\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DUTY_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" treecollapseimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DURS_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:PYTY_CODE\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" editfilter=\"none\" style=\"align:left;background:EXPR(iif(BASE_OVTM + ADJT_OVTM==OVER_TIME,'default','#fdd9c3ff'));\" text=\"bind:REMK_200X\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "627", "68", "77", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "704", "68", "22", "22", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "727", "68", "111", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "351", "68", "72", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "424", "68", "22", "22", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "447", "68", "127", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("급여추가발령");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "313", "68", "33", "22", null, null, this);
            obj.set_text("부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("급여관리 > 급여관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "584", "68", "33", "22", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "16", "68", "47", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "169", "68", "134", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "146", "68", "22", "22", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "68", "68", "77", "22", null, null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여추가발령");
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
        this.addIncludeScript("PAYB0165.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0165.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		급여체크리스트를 관리한다.
         * @category	 	급여관리/급여체크리스트
         * @author	   	고민주
         * @cdate	  		2016.07.26
         * @version 1.0		최초 작성
         * PAYB0165.xml - <Created by Code Template generator>
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
        this.sPACKAGENAME = "PAYB0165"; 

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
        	this.medSHRPAYX_DATE.setFocus();
        	
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
        	this.fnc_DatasetClear('dsPY_APDCAL');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_APDCAL=dsPY_APDCAL";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_APDCAL.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |2016
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_APDCAL.insertRow(this.dsPY_APDCAL.rowposition + 1);
        	this.dsPY_APDCAL.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);	
        	this.dsPY_APDCAL.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);	
        	this.grdPY_APDCAL.setCellPos(this.fnc_GridColumnIndex(this.grdPY_APDCAL, "EMPL_NAME"));
        	this.grdPY_APDCAL.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPY_APDCAL.deleteRow(this.dsPY_APDCAL.rowposition);
        	this.grdPY_APDCAL.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_APDCAL");
        	this.grdPY_APDCAL.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_APDCAL=dsPY_APDCAL:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_APDCAL.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_APDCAL", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_APDCAL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_APDCAL.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "사원번호:" + this.fnc_Trim(this.dsPY_APDCAL.getColumn(this.dsPY_APDCAL.rowposition, "EMPL_NUMB"))
        						+ ",성명:" + this.fnc_Trim(this.dsPY_APDCAL.getColumn(this.dsPY_APDCAL.rowposition, "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_APDCAL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_APDCAL.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_APDCAL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'STDS_DATE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "STDS_DATE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'EMPL_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "EMPL_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'DCGB_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "구분", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "DCGB_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'CLSD_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직원구분", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "CLSD_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'WRKS_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근무상태", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "WRKS_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'DEPT_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "DEPT_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'JBGP_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직군", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "JBGP_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'CPOS_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "CPOS_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'PSTP_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "호봉", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "PSTP_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'DUTY_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직무", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "DUTY_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'DURS_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직책", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "DURS_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_APDCAL.getColumn(i, 'PYTY_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여형태", this.dsPY_APDCAL, i, this.grdPY_APDCAL, "PYTY_CODE");
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
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsPY_APDCAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_APDCAL.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsPY_APDCAL);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	//코드 바인딩
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdPY_APDCAL,dsDCGB_CODE,DCGB_CODE"; 
        		arrParam[1] = "GRID,grdPY_APDCAL,dsPSTP_CODE,PSTP_CODE"; 
        		arrParam[2] = "GRID,grdPY_APDCAL,dsDTLV_CODE,DTLV_CODE"; 
        		arrParam[3] = "GRID,grdPY_APDCAL,dsDRTY_CODE,DRTY_CODE"; 
        		arrParam[4] = "GRID,grdPY_APDCAL,dsPYTY_CODE,PYTY_CODE"; 
        		arrParam[5] = "GRID,grdPY_APDCAL,dsWRKS_CODE,WRKS_CODE"; 
        		arrParam[6] = "GRID,grdPY_APDCAL,dsCLSD_CODE,CLSD_CODE"; 
        		arrParam[7] = "GRID,grdPY_APDCAL,dsJBGP_CODE,JBGP_CODE"; 
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }
        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_APDCAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_APDCAL, "EMPL_NAME"), "edittype", "text");	
        		this.grdPY_APDCAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_APDCAL, "STDS_DATE"), "edittype", "date");	
        	} else {
        		this.grdPY_APDCAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_APDCAL, "EMPL_NAME"), "edittype", "none");
        		this.grdPY_APDCAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_APDCAL, "STDS_DATE"), "edittype", "none");
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        	if (obj.name == 'grdPY_APDCAL') {
        		if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:EMPL_NAME'){
        		
        			arrParam[0] = 'HRM0002';
        			arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        			arrParam[2] = 'EMPL_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_APDCAL';
        			arrParam[5] = 'EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_NAME,CPOS_NAME,DEPT_CODE,CLSD_CODE,JBGP_CODE,CPOS_CODE,PSTP_CODE,DUTY_NAME,DUTY_CODE,DURS_NAME,DURS_CODE,PYTY_CODE';
        			arrParam[6] = '0,1,5,3,19,2,16,14,20,26,25,24,23,22,10';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		} else if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:DEPT_NAME'){
        		
         			arrParam[0] = 'TMM0004';
        			arrParam[1] = '';
        			arrParam[2] = 'DEPT_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_APDCAL';
        			arrParam[5] = 'DEPT_CODE,DEPT_NAME';
        			arrParam[6] = '0,1'; 	
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} else if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:CPOS_NAME'){
        		
        			arrParam[0] = 'TMM1000';
        			arrParam[1] = 'CPOS_CODE';
        			arrParam[2] = 'CPOS_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_APDCAL';
        			arrParam[5] = 'CPOS_CODE,CPOS_NAME';
        			arrParam[6] = '0,1'; 	
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} else if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:DUTY_NAME'){
        			
        			arrParam[0] = 'TMM1000';
        			arrParam[1] = 'DUTY_CODE';
        			arrParam[2] = 'DUTY_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_APDCAL';
        			arrParam[5] = 'DUTY_CODE,DUTY_NAME';
        			arrParam[6] = '0,1'; 	
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} else if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:DURS_NAME'){
        			
        			arrParam[0] = 'TMM1000';
        			arrParam[1] = 'DURS_CODE';
        			arrParam[2] = 'DURS_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_APDCAL';
        			arrParam[5] = 'DURS_CODE,DURS_NAME';
        			arrParam[6] = '0,1'; 	
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        		
        	}
        }

        //그리드 팝업 시 필요한 이벤트
        this.dsPY_APDCAL_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "SECT_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DEPT_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "CPOS_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DUTY_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DURS_NAME") this.fn_HelpDialoge(this.grdPY_APDCAL, "YES" ,e.oldvalue, e.columnid);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_APDCAL.addEventHandler("oncolumnchanged", this.dsPY_APDCAL_oncolumnchanged, this);
            this.dsPY_APDCAL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_APDCAL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYB0165.xfdl");
        this.loadPreloadList();
       
    };
}
)();
