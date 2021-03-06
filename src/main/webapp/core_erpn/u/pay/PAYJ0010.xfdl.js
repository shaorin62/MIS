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
                this.set_name("PAYJ0010");
                this.set_titletext("월말인원실적");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_EMPMTE", this);
            obj._setContents("<ColumnInfo><Column id=\"DGGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN01_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN02_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN03_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN04_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN05_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN06_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN07_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN08_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN09_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN10_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN11_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MN12_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("월말인원실적");
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

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("10");
            obj.set_text("급여관리>월말인원실적");
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

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_EMPMTE", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_EMPMTE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"1월\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"2월\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"3월\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"4월\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" text=\"5월\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" text=\"6월\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" text=\"7월\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" text=\"8월\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" text=\"9월\"/><Cell col=\"12\" displaytype=\"text\" style=\"background: ;\" text=\"10월\"/><Cell col=\"13\" displaytype=\"text\" style=\"background: ;\" text=\"11월\"/><Cell col=\"14\" displaytype=\"text\" style=\"background: ;\" text=\"12월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DGGP_NAME\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DTGN_NAME\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:WRTY_NAME\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN01_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN02_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN03_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN04_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN05_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN06_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN07_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN08_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN09_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN10_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN11_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MN12_AMOT\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_text("조회년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRSTDS_YEAR", "absolute", "81", "68", "44", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
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
            		p.set_titletext("월말인원실적");
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
        this.addIncludeScript("PAYJ0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYJ0010.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		월말인원실적를 관리한다.
         * @category	 	급여관리/월말인원실적
         * @author	   	고민주
         * @cdate	  		2016.08.02
         * @version 1.0		최초 작성
         * PAYJ0010.xml - <Created by Code Template generator>
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
        this.sPACKAGENAME = "PAYJ0010"; 

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
        	this.medSHRSTDS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRSTDS_YEAR.setFocus();

        
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
        	this.fnc_DatasetClear('dsPY_EMPMTE');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPMTE=dsPY_EMPMTE";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_EMPMTE.setFocus();

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
        	this.fnc_DataSetCancel("dsPY_EMPMTE");
        	this.grdPY_EMPMTE.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_EMPMTE", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_EMPMTE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRSTDS_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회년도", this.medSHRSTDS_YEAR);
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
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YEAR.value)); 
        			
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
        	
        		this.fnc_Information(this.stInformation, this.dsPY_EMPMTE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPMTE.getCaseCount("dataset.getRowLevel(currow)==0"));
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
            this.medSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYJ0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
