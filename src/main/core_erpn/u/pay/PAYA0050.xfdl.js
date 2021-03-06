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
                this.set_name("PAYA0050");
                this.set_titletext("간이세액조견표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_SIPLTX", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ABNR_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNDR_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR1_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR2_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR3_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR4_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR5_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR6_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR7_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR8_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNR9_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GN10_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GN11_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0004</Col><Col id=\"DSNAME\">dsSTDS_YMTH</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIPLTX", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_binddataset("dsPY_SIPLTX");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"92\"/><Column size=\"92\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"text\" text=\"월급여액(천원) [비과세제외]\" wordwrap=\"true\"/><Cell col=\"2\" colspan=\"11\" displaytype=\"text\" text=\"공제대상가족의 수\"/><Cell row=\"1\" displaytype=\"text\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"이상\" wordwrap=\"true\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"미만\" wordwrap=\"true\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"1인\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"2인\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"3인\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"4인\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"5인\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"6인\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"7인\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"8인\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"9인\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"10인\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"11인\"/><Cell row=\"2\" displaytype=\"text\" text=\"이상\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" text=\"미만\"/><Cell row=\"2\" col=\"4\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"5\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"6\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"7\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"8\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"9\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"10\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"11\" displaytype=\"text\" text=\"일반\"/><Cell row=\"2\" col=\"12\" displaytype=\"text\" text=\"일반\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ABNR_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:UNDR_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR1_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR2_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR3_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR4_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR5_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR6_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR7_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR8_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNR9_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GN10_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GN11_AMOT\" mask=\"#,###,###,###,###,###\" calendardisplaynulltype=\"default\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("간이세액표");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("급여관리 > 간이세액표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_YMTH", "absolute", "81", "67", "87", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_type("search");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("기준년월");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormUp", "absolute", "111", "33", "93", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "8", "33", "102", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "109", "270", "23", "8", null, this);
            obj.set_taborder("12");
            obj.set_text("(1,000만원 초과자의 경우 자동계산처리)");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_color("crimson");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("간이세액조견표");
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
        this.addIncludeScript("PAYA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0050.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		간이세액표를 관리한다.
         * @category	 	급여관리/간이세액표
         * @author	   	고민주
         * @cdate	  		2016.07.12
         * @version 1.0		최초 작성
         * PAYA0050.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYA0050"; //해당 Form에서 사용 할 Package 명 

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
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
        	this.cmbSHRSTDS_YMTH.setFocus();

        	//검색조건 포커스

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
        	this.fnc_DatasetClear('dsPY_SIPLTX');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_SIPLTX=dsPY_SIPLTX";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SIPLTX.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_SIPLTX.insertRow(this.dsPY_SIPLTX.rowposition + 1);
        	this.dsPY_SIPLTX.set_rowposition(iRow);
        	this.grdPY_SIPLTX.setCellPos(this.fnc_GridColumnIndex(this.grdPY_SIPLTX, "ABNR_AMOT"));
        	this.grdPY_SIPLTX.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsPY_SIPLTX.deleteRow(this.dsPY_SIPLTX.rowposition);
        	this.grdPY_SIPLTX.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsPY_SIPLTX");
        	this.grdPY_SIPLTX.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_SIPLTX=dsPY_SIPLTX:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SIPLTX.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_SIPLTX", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_SIPLTX")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.cmbSHRSTDS_YMTH);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_SIPLTX.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "기준년월:" + this.fnc_Trim(this.dsPY_SIPLTX.getColumn(this.dsPY_SIPLTX.rowposition, "STDS_YMTH"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_SIPLTX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        // 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_SIPLTX.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIPLTX.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIPLTX.getColumn(i, 'ABNR_AMOT'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "월급여액", this.dsPY_SIPLTX, i, this.grdPY_SIPLTX, "ABNR_AMOT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIPLTX.getColumn(i, 'UNDR_AMOT'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "월급여액", this.dsPY_SIPLTX, i, this.grdPY_SIPLTX, "UNDR_AMOT");
        		}
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.cmbSHRSTDS_YMTH);
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
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value)); 
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsPY_SIPLTX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_SIPLTX.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsPY_SIPLTX);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetUserComboCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSTDS_YMTH,dsSTDS_YMTH,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {

        		this.grdPY_SIPLTX.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIPLTX, "ABNR_AMOT"), "edittype", "masknumber");	
        		this.grdPY_SIPLTX.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIPLTX, "UNDR_AMOT"), "edittype", "masknumber");	
        	} else {
        		this.grdPY_SIPLTX.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIPLTX, "ABNR_AMOT"), "edittype", "none");
        		this.grdPY_SIPLTX.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIPLTX, "UNDR_AMOT"), "edittype", "none");

        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onitemchanged", this.cmbSHRBASE_YMTH_OnChanged, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.stInformation00.addEventHandler("onclick", this.stInformation00_onclick, this);

        };

        this.loadIncludeScript("PAYA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
