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
                this.set_name("TMMA0320");
                this.set_titletext("경영계획및실적현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">MAID_TYCD</Col><Col id=\"DSNAME\">dsMAID_TYCD</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTR_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"10\"/><Column id=\"MAID_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"MI01_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI02_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI03_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI04_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI05_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI06_AMOT\" type=\"STRING\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("경영계획및실적현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 경영계획및실적관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "195", "71", "92", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("경영지표유형");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "166", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSTDYEAR01", "absolute", "96", "71", "70", "21", null, null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMAID", "absolute", "289", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbMAID_innerdataset = new Dataset("cmbMAID_innerdataset", this.cmbMAID);
            cmbMAID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row></Rows>");
            obj.set_innerdataset(cmbMAID_innerdataset);
            obj.set_taborder("124");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Static("Static90", "absolute", "9", "107", "866", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("월별 실적                                                                                                                                  단위(억)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "107", "269", "21", "25", null, this);
            obj.set_taborder("126");
            obj.set_text("누계 실적                         단위(억)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "872", "201", "20", "41", null, null, this);
            obj.set_taborder("128");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "6", "126", null, null, "312", "12", this);
            obj.set_taborder("131");
            obj.set_text("Div00");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("beige");
            obj.set_url("common::comFusionChartView.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", null, "126", "275", null, "22", "12", this);
            obj.set_taborder("132");
            obj.set_text("Div01");
            obj.set_url("common::comFusionChartView.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSTDYEAR", "absolute", "96", "71", "70", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("133");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경영계획및실적현황");

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
            this._addPreloadList("fdl", "common::comFusionChartView.xfdl");
            this._addPreloadList("fdl", "common::comFusionChartView.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMA0320.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0320.xfdl", function() {
         /***************************************************************************************************
         * # Program : TMMA0320 경영계획및실적현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.10		최인철		Initial Created.
         *   
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0320";

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
        	
        	this.fnc_GetComboDs(this.dsCombo); //콤보 조회 		
        	//var sDate = this.fnc_GetServerDateTime("DATE");
        	//this.edtSTDYEAR.set_value(this.fnc_Left(sDate, 4));
            this.edtSTDYEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        	
        	this.fn_Search();
        	
        	this.edtSTDYEAR.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTR_MONEPL"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
           // 기능 없음
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	// 기능 없음
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*------------------------------------+
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	// 기능 없음
        } 

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
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
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
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
        		sReturnString += " STDYEAR="  + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.edtSTDYEAR.value, 0, 4))); 
        		sReturnString += " MAID="     + this.fnc_Quote(this.fnc_Trim(this.cmbMAID.value));         

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
        		
        		this.fn_SetDataAndDraw();	
        		this.fn_SetDataAndDraw2();
         	
        	} else if (sMethodName == "GetCommCode")  {
        	 
        	    var arrParam = new Array();
        	    arrParam[0]  = "COMBO,cmbMAID,dsMAID_TYCD,0"; 	   //경영지표유형
        	    this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        		
        }

        
        /**
         * 화면 변수
         */
        this.oChartJSON = null;

        
        /**
         * 퓨전차트 표현을 위한 샘플 데이터를 생성합니다.
         */
        this.fn_SetDataAndDraw = function() {
        		
        		// 차트를 구성하기 위한 기본 데이터 객체 생성
        	var oChartInfo = new Object();
        	
        	// 1. 차트의 기본정보를 설정합니다.
        	oChartInfo.type = "mscolumn2d";	
        	//oChartInfo.type = "bar3d";	
        	oChartInfo.width = "800";
        	oChartInfo.height = "500";
        	oChartInfo.DateFormat = "json";
        	oChartInfo.renderAt= "chart-container";
        	
        	// 2. 차트의 구성에 필요한 추가정보(X/Y축 제목, 라벨, 캡션 등)
        	var oChartDataSource = new Object;
        	oChartInfo.dataSource = oChartDataSource;
        	oChartDataSource.chart = new Object;
        	oChartDataSource.chart.theme = "fint";
        	//oChartDataSource.chart.caption = "월별실적";
        	oChartDataSource.chart.captionFontSize = "30"; 
        	oChartDataSource.chart.subcaptionFontSize = "20"; 
        	oChartDataSource.chart.legendItemFontSize = "12"; 
        	//oChartDataSource.chart.axisnameFontSize = "20"; 
        	oChartDataSource.chart.labelFontSize = "12"; 
        	
        	oChartDataSource.chart.placeValuesInside = "0"; 
        	oChartDataSource.chart.rotateValues = "0"; 
            oChartDataSource.chart.valueFontColor = "#000000"; 	
            oChartDataSource.chart.formatNumberScale = "0"; 	
            oChartDataSource.chart.xAxisNameFontSize = "12"; 	
            oChartDataSource.chart.yAxisNameFontSize = "12"; 	
        		
        	//oChartDataSource.chart.showBorder = "0"; 
        	//oChartDataSource.chart.showHoverEffect = "1"; 
        	//oChartDataSource.chart.showCanvasBorder = "0";
        	//oChartDataSource.chart.usePlotGradientColor = "0";
        	oChartDataSource.chart.plotBorderAlpha = "100";
        	oChartDataSource.chart.legendBorderAlpha = "0"; 
        	
        	oChartDataSource.chart.bgColor = "#ffffff"; 
        	//oChartDataSource.chart.paletteColors = "#0075c2,#1aaf5d,#f2c500"; 
        	//oChartDataSource.chart.paletteColors = "#0075c2,#1aaf5d,#f2c500";
        	
        	//oChartDataSource.chart.canvasBgColor = "#ffffff"; 
        	//oChartDataSource.chart.bgColor = "#ffffff"; 
        	//oChartDataSource.chart.bgColor = "#ffffff"; 
        		
        	var iTyprRow = this.dsMAID_TYCD.findRow("COMD_CODE",this.cmbMAID.value);		
        	//oChartDataSource.chart.subCaption =  this.dsMAID_TYCD.getColumn(iTyprRow, "COMD_CDNM"); 
        	
        	oChartDataSource.chart.xAxisName = "월";
        	oChartDataSource.chart.yAxisName = "실적";

        	//oChartDataSource.chart.paletteColors =  "#CC0033,#333ccc,#f2c500";
        	oChartDataSource.chart.paletteColors =  "#5060aa,#d7315f,#f2c500";
        	
        		
        	// 3. 컬럼2D 차트 구성을 위한 데이터를 세팅합니다.
        	
        	oChartDataSource.categories = new Object;	
        	oChartDataSource.categories.category = new Array;
        	
            var ssDate =  this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4 ,2);
        	
            
            //for (var iRow = 0; iRow < nexacro.toNumber(ssDate - 1 ) ; iRow++) {    
            /*for (var iRow = 0; iRow < 12 ; iRow++) {    
              oChartDataSource.categories.category[iRow] = new Object;
              oChartDataSource.categories.category[iRow].label = nexacro.toNumber(iRow + 1) + "월";    
            }
            */
            
            oChartDataSource.dataset = new Array;
        	oChartDataSource.dataset[0] = new Object;
        	oChartDataSource.dataset[0].seriesname = "목표";
        	oChartDataSource.dataset[0].alpha = "100";	
        	oChartDataSource.dataset[0].data = new Array;
        	oChartDataSource.dataset[1] = new Object;
        	oChartDataSource.dataset[1].seriesname = "실적";
        	oChartDataSource.dataset[1].alpha = "100";	
        	oChartDataSource.dataset[1].data = new Array;
        	
        	if (this.dsTR_MONEPL.getRowCount > 0) {
        	
        		for (var iRow = 0; iRow < 12 ; iRow++) {    
        		
        			oChartDataSource.dataset[0].data[iRow] = new Object;
        			oChartDataSource.dataset[0].data[iRow].value =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI03_AMOT")) ;       
        			oChartDataSource.dataset[1].data[iRow] = new Object;
        			oChartDataSource.dataset[1].data[iRow].value =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI06_AMOT"));

        			oChartDataSource.categories.category[iRow] = new Object;
        			oChartDataSource.categories.category[iRow].label = nexacro.toNumber(iRow + 1) + "월 <br/>(" +
        				nexacro.round(  nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI06_AMOT")))
        							  * nexacro.toNumber("100")
        							  / nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI03_AMOT")))
        							  )
        			 + "%)"
        			;
        		
        		}

        	} else {

        		for (var iRow = 0; iRow < 12 ; iRow++) {    
        			oChartDataSource.dataset[0].data[iRow] = new Object;
        			oChartDataSource.dataset[0].data[iRow].value =  0;       
        			oChartDataSource.dataset[1].data[iRow] = new Object;
        			oChartDataSource.dataset[1].data[iRow].value =  0;
        			oChartDataSource.categories.category[iRow] = new Object;
        			oChartDataSource.categories.category[iRow].label = nexacro.toNumber(iRow + 1) + "월 <br/>(0%)";
        		}
        	
        	}
            
            /*
            for (var iRow = 0; iRow < nexacro.toNumber(ssDate - 1 ) ; iRow++) {
            oChartDataSource.dataset[0].data[iRow] = new Object;
        	oChartDataSource.dataset[0].data[iRow].value =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI03_AMOT")) ;       
        	oChartDataSource.dataset[1].data[iRow] = new Object;
        	oChartDataSource.dataset[1].data[iRow].value =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI06_AMOT"));	
             }	
             */
        	
        	this.oChartJSON = oChartInfo;
            this.Div00.fn_DrawChart(this.oChartJSON);
            
        }

        
        this.fn_SetDataAndDraw2 = function() {
        		
        	var oChartInfo = new Object();
        	
        	// 1. 차트의 기본정보를 설정합니다.
        	oChartInfo.type = "mscolumn2d";	
        	oChartInfo.width = "250";
        	oChartInfo.height = "500";
        	oChartInfo.DateFormat = "json";
        	
        	// 2. 차트의 구성에 필요한 추가정보(X/Y축 제목, 라벨, 캡션 등)
        	var oChartDataSource = new Object;
        	oChartInfo.dataSource = oChartDataSource;
        	oChartDataSource.chart = new Object;
        	//oChartDataSource.chart.caption = "누계실적";
        	oChartDataSource.chart.legendItemFontSize = "12"; 
        	oChartDataSource.chart.captionFontSize = "30"; 
        	oChartDataSource.chart.labelFontSize = "12"; 
        		
        	oChartDataSource.chart.xAxisName = "년도";
        	oChartDataSource.chart.yAxisName = "실적";
        	
            oChartDataSource.chart.xAxisNameFontSize = "12"; 	
            oChartDataSource.chart.yAxisNameFontSize = "12"; 	
        	
        	oChartDataSource.chart.theme = "fint";
        	//oChartDataSource.chart.paletteColors =  "#CC0033,#333ccc,#f2c500";
        	oChartDataSource.chart.paletteColors =  "#5060aa,#d7315f,#f2c500";
        	oChartDataSource.chart.placeValuesInside = "0"; 
        	oChartDataSource.chart.rotateValues = "0"; 
            oChartDataSource.chart.valueFontColor = "#000000"; 	
            oChartDataSource.chart.formatNumberScale = "0"; 	
        		
        	// 3. 컬럼2D 차트 구성을 위한 데이터를 세팅합니다.
        	
        	oChartDataSource.categories = new Object;	
        	oChartDataSource.categories.category = new Array;

            //oChartDataSource.categories.category[1] = new Object;
            //oChartDataSource.categories.category[1].label = "실적";
        	
            var ssDate =  this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4 ,2);
              
            oChartDataSource.dataset = new Array;
        	oChartDataSource.dataset[0] = new Object;
        	oChartDataSource.dataset[0].seriesname = "목표";
        	oChartDataSource.dataset[0].alpha = "100";	
        	oChartDataSource.dataset[0].data = new Array;
        	oChartDataSource.dataset[1] = new Object;
        	oChartDataSource.dataset[1].seriesname = "실적";
        	oChartDataSource.dataset[1].alpha = "100";	
        	oChartDataSource.dataset[1].data = new Array;
        	
        	var SUM1 = 0 ;
        	var SUM2 = 0 ;
            for (var iRow = 0; iRow < nexacro.toNumber(ssDate - 1 ) ; iRow++) {
            
        	  SUM1 = nexacro.toNumber(SUM1) +  nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI03_AMOT")));
        	  SUM2 = nexacro.toNumber(SUM2) +  nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI06_AMOT")));	
            
            }
            
            oChartDataSource.dataset[0].data[0] = new Object;
        	oChartDataSource.dataset[0].data[0].value =  SUM1;
        	oChartDataSource.dataset[1].data[0] = new Object;
        	oChartDataSource.dataset[1].data[0].value =  SUM2;
        	
        	//oChartDataSource.chart.subCaption =  nexacro.round( nexacro.toNumber(SUM2)/nexacro.toNumber(SUM1)*nexacro.toNumber("100") ) + "%";
        	//oChartDataSource.chart.subcaptionFontSize = "20"; 

        	oChartDataSource.categories.category[0] = new Object;
        	SUM1 = SUM1 == 0 ? 1 : SUM1;
            oChartDataSource.categories.category[0].label = this.fnc_SubStr(this.edtSTDYEAR.value, 0, 4) + "년<br/>("
        												  + nexacro.round( nexacro.toNumber(SUM2)/nexacro.toNumber(SUM1)*nexacro.toNumber("100") ) + "%)";
        	
        	this.oChartJSON = oChartInfo;
            this.Div01.fn_DrawChart(this.oChartJSON);
            
        }

        
        this.cmbMAID_onitemchanged = function(obj,e)
        {
        		//this.fn_SetDataAndDraw();	
        		//this.fn_SetDataAndDraw2();
        		this.fn_Search();
        }

        this.Static90_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTR_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbMAID.addEventHandler("onitemchanged", this.cmbMAID_onitemchanged, this);
            this.Static90.addEventHandler("onclick", this.Static90_onclick, this);
            this.edtSTDYEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0320.xfdl");
        this.loadPreloadList();
       
    };
}
)();
