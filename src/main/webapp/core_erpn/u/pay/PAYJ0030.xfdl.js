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
                this.set_name("PAYJ0030");
                this.set_titletext("항목별인건비실적");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_EMPAVG_HEAD", this);
            obj._setContents("<ColumnInfo><Column id=\"대분류\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"중분류 \" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"구분\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"항목\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"합계\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"임원\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"일반\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"연구소\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"유통일반\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"유통판촉\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"임시직\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"용역\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT3\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_EMPAVG", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DGGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DGGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">MSKN_CODE</Col><Col id=\"DSNAME\">dsMSKN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">MSDV_CODE</Col><Col id=\"DSNAME\">dsMSDV_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("항목별인건비실적");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("10");
            obj.set_text("급여관리>항목별인건비실적");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_EMPAVG", "absolute", "8", "156", null, null, "8", "8", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_EMPAVG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"125\"/><Column size=\"204\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"항목\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"고정직\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"무기계약\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"유기계약\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"용역\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:STDS_YMTH\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:EMPL_NUMB\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:EMPL_NAME\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CLSD_CODE\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CLSD_NAME\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DGGP_CODE\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DGGP_NAME\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_CODE", "absolute", "89", "100", "180", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_CODE", "absolute", "345", "100", "156", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_text("조회년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "229", "68", "60", "22", null, null, this);
            obj.set_taborder("23");
            obj.set_text("부서그룹");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "229", "92", "60", "22", null, null, this);
            obj.set_taborder("24");
            obj.set_text("성별");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image05", "absolute", "16", "92", "60", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("조회구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "400", "23", null, null, this);
            obj.set_taborder("39");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRSTDS_YEAR", "absolute", "81", "68", "81", "22", null, null, this);
            obj.set_taborder("40");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPDN_CODE00", "absolute", "81", "92", "138", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_type("search");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");

            obj = new CheckBox("chkPREV_DATA00", "absolute", "169", "68", "16", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            obj.style.set_buttonalign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "188", "68", "24", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("누계");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPDN_CODE01", "absolute", "294", "68", "138", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_type("search");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHRAPDN_CODE02", "absolute", "294", "92", "138", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_type("search");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image1", "absolute", "442", "68", "33", "22", null, null, this);
            obj.set_taborder("46");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "481", "68", "52", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "534", "68", "22", "22", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_align("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "557", "68", "100", "22", null, null, this);
            obj.set_taborder("49");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image3", "absolute", "442", "92", "33", "22", null, null, this);
            obj.set_taborder("50");
            obj.set_text("단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_NAME", "absolute", "481", "92", "176", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
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
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("항목별인건비실적");
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
        this.addIncludeScript("PAYJ0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYJ0030.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		항목별인건비실적를 관리한다.
         * @category	 	급여관리/항목별인건비실적
         * @author	   	고민주
         * @cdate	  		2016.08.02
         * @version 1.0		최초 작성
         * PAYJ0030.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYJ0030"; 

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
        	this.fnc_DatasetClear('dsPY_EMPAVG');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPAVG=dsPY_EMPAVG";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_EMPAVG.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_EMPAVG");
        	this.grdPY_EMPAVG.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_EMPAVG", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_EMPAVG")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsPY_EMPAVG.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPAVG.getCaseCount("dataset.getRowLevel(currow)==0"));
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPDN_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkPREV_DATA00.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.cmbSHRAPDN_CODE01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPDN_CODE02.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYJ0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
