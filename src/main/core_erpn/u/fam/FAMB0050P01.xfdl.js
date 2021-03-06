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
                this.set_name("FAMB0050");
                this.set_titletext("전표변경내역조회 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,900,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" type=\"string\" size=\"30\"/><Column id=\"LOGX_SEQX\" type=\"bigdecimal\" size=\"6\"/><Column id=\"LOGX_GUBN\" type=\"string\" size=\"10\"/><Column id=\"SLIP_DATE\" type=\"string\" size=\"8\"/><Column id=\"SLIP_LINE\" type=\"string\" size=\"4\"/><Column id=\"ACCT_INTL\" type=\"string\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"string\" size=\"200\"/><Column id=\"SLIP_DAMT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"SLIP_CAMT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"REMK_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsLOGX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">LOGX_GUBN</Col><Col id=\"REMK\">이력구분</Col><Col id=\"USEDFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "95", "8", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("전표변경내역조회 팝업");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "180", null, null, "15", "15", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"75\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"40\"/><Column size=\"160\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"전표일자\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center middle;\" text=\"전표번호\"/><Cell col=\"2\" text=\"이력순번\"/><Cell col=\"3\" text=\"이력구분\"/><Cell col=\"4\" text=\"순번\"/><Cell col=\"5\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"6\" displaytype=\"text\" text=\"차변\"/><Cell col=\"7\" displaytype=\"text\" text=\"대변\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center middle;\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;\" text=\"bind:SLIP_DATE\" suppress=\"1\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_NUMB\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:LOGX_SEQX\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:LOGX_GUBN\" suppress=\"4\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:SLIP_LINE\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACCT_NAME\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAMT\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_CAMT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: center;\" expr=\"expr:dataset.getSum(&quot;SLIP_DAMT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: center;\" expr=\"expr:dataset.getSum(&quot;SLIP_CAMT&quot;)\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:right;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CAMT&quot;)\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("12");
            obj.set_text("회계관리>전표변경내역조회");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "532", "23", "8", null, this);
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_taborder("6");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "272", "0", "36", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "0", "8", null, null, "0", this);
            obj.set_taborder("26");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "8", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "8", null, null, "15", "25", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", null, "23", "300", "10", "25", null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "320", "61", "40", "41", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "251", "61", null, "10", "584", null, this);
            obj.set_taborder("33");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "156", "400", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NAME", "absolute", "97", "123", "584", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "511", "97", "170", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "27", "123", "63", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("적요");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "27", "97", "63", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "97", "97", "71", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "193", "97", "127", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "349", "97", "68", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("작성부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "418", "97", "68", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "418", "71", "68", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "511", "71", "170", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "349", "71", "68", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE2", "absolute", "219", "71", "101", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSLIP_DATE1", "absolute", "97", "71", "101", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static5", "absolute", "27", "71", "63", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpACCT_INTL", "absolute", "488", "71", "21", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpEMPL_NUMB", "absolute", "170", "97", "21", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpDEPT_CODE", "absolute", "488", "97", "21", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "251", "92", null, "5", "584", null, this);
            obj.set_taborder("52");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "251", "118", null, "5", "584", null, this);
            obj.set_taborder("53");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "251", "144", null, "10", "584", null, this);
            obj.set_taborder("54");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "201", "70", "15", "22", null, null, this);
            obj.set_taborder("55");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "485", "155", "80", "25", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "173", "264", "7", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표변경내역조회 팝업");
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
        this.addIncludeScript("FAMB0050P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0050P01.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMB0050P01 전표변경내역조회 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMB0050P01";
        this.sALLX_YSNO   = "";
        this.sLoadForm    = "";
        this.sSlipNumb    = "";

        this.calSHRSLIP_DATE1.set_value(this.parent.sSHRSLIP_DATE);
        this.calSHRSLIP_DATE2.set_value(this.parent.sSHRSLIP_DATE);

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM,"SLIP_NUMB");
        	
        	if (this.fnc_IsDate(this.calSHRSLIP_DATE1.value) == false){
        	  
        	  var sDate = this.fnc_GetServerDateTime("DATE");
        	  this.calSHRSLIP_DATE1.set_value(this.fnc_Trim(sDate));
        	  this.calSHRSLIP_DATE2.set_value(this.fnc_Trim(sDate));
        	  
        	}

        	this.fn_SetPopupArgument();
          
        	if (this.sLoadForm == "SHR") {	

        		this.calSHRSLIP_DATE.set_value(this.fnc_SubStr(this.sSlipNumb, 2, 8));
        		this.edtSHRDISP_NUMB.set_value(this.fnc_SubStr(this.sSlipNumb, 10, 4));
        		this.edtSHRSLIP_NUMB.set_value(this.sSlipNumb);
        		this.fn_Search();
        		this.btnSLIPSearch.set_visible(false);
        		
        	}

        	this.calSHRSLIP_DATE1.setFocus();
        	
        }
         
        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_SLIPXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj,e){
        	this.fnc_ToExcel(this.name);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj,e){

        	if (this.dsTA_SLIPNTLOG.getRowCount() <= 0){
        	
        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); 
        		return;
        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "fama0130.jrf"; 					      //Report File Name

        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRSLIP_DATE.value + "-" + this.edtSHRDISP_NUMB.value + "^";

        	application.GBL_RPTDATASET = "dsTA_SLIPNTLOG,dsLOGX_GUBN";
        	application.GBL_PRINT = "Y"; 										 //미리보기 사이즈 120%

        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("전표변경내역조회", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        	
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e){

        	if(e.fromobject instanceof Div) return;
        	
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	
        	return this.fnc_FormUnloadCheck(obj, this);
        	
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         **************************************************************************************************/
        /*-------------------+
         |  조회 여부 체크! |
         +-------------------*/
        this.fn_SearchItemCheck = function (){
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "전표시작일자", this.calSHRSLIP_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "전표종료일자", this.calSHRSLIP_DATE2);
        	}

        	if (this.calSHRSLIP_DATE1.value > this.calSHRSLIP_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM022", "전표시작일자,전표종료일자", this.calSHRSLIP_DATE2);
        	}
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (){
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck(this.parent.dsTA_SLIPNT)){
        	
        		this.fnc_Message("TMM003");
        		return false;
        		
        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value)); 
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value)); 
        		sReturnString += " ACCT_INTL="  + this.fnc_Quote(this.fnc_Trim(this.edtACCT_INTL.value));
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtEMPL_NUMB.value));
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtDEPT_CODE.value));
        		sReturnString += " REMK_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtREMK_NAME.value));
        	}
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){
        	
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

        /*------------------------------------+
         |  Transaction 후 Post Process!      |
         +------------------------------------*/
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00"){
        	
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.rowcount, "SHR"); 
        		this.fnc_Message("TMM018", this.dsTA_SLIPXM.rowcount);
        	
        	} else if (sMethodName == "GetCommCode"){
        		
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTA_SLIPXM,dsLOGX_GUBN,LOGX_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        /*----------------------+
         | Help Popup Open      |
         +----------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "ImgHelpACCT_INTL") || (obj.name == "edtACCT_NAME")) {

                arrParam[0] = "FAM0031";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtACCT_NAME";                         
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } else if ((obj.name == "ImgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) {

                arrParam[0] = "FAM0011";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtEMPL_NAME";                         
                arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

           } else if ((obj.name == "ImgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtDEPT_NAME";                         
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
           } 
             
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/
        /*-------------------+
         |  조회 전표번호  |
         +-------------------*/
        this.edtSHRDISP_NUMB_onkillfocus = function (obj,e){

        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("01" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        	
        }

        /*-----------------+
         |  전표상세조회 |
         +-----------------*/
        this.btnSLIPSearch_OnClick = function (obj,e){
        	this.fnc_PopSlipForm(this.edtSHRSLIP_NUMB.value, "SHR", this.sUSERLAVEL);
        }

        /*-----------------------------------------+
         |  팦업으로 호출될때 변수를 셋팅한다. |
         +-----------------------------------------*/
        this.fn_SetPopupArgument = function (){

        	try {
        	
        		if (this.pLoadForm != null) this.sLoadForm = this.pLoadForm;
        		if (this.pSlipNumb != null)	this.sSlipNumb = this.pSlipNumb;
        	
        	} catch (e){
        	
        	}
        	
        }

        /*------------------+
         |  조회 전표번호 |
         +------------------*/
        this.edtSHRSLIP_DATE_onkillfocus = function (obj,e){

        	if (this.fnc_Trim(this.edtSHRDISP_NUMB.value) == "") return;

        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("10" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        	
        }

        this.edtSHRDISP_NUMB_onkillfocus = function (obj,e){

        	if (this.fnc_Trim(this.edtSHRDISP_NUMB.value) == "") return;

        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("10" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        	
        }

        /*------------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +-----------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {
        	if (e.keycode == 27) this.fn_Confirm();
        }

        /*---------------+
         |  확인 처리 ! |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var arrReturn = new Array(0);

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");	
        	this.fnc_PopupClose(arrReturn);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.grdTA_SLIPXM.addEventHandler("onkeydown", this.grdTA_SLIPXM_OnKeyDown, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.edtREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRSLIP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMB0050P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
