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
                this.set_name("TMMD0420");
                this.set_titletext("ExportTableData");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsObjectList", this);
            obj._setContents("<ColumnInfo><Column id=\"OBJECT_NAME\" size=\"128\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"OBJECT_TYPE\" size=\"19\" prop=\"default\" type=\"STRING\"/><Column id=\"TEMPORARY\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTablePkList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTableColumnList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PK_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTableValueList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_METAXM", "absolute", "8", "128", "320", null, null, "15", this);
            obj.set_binddataset("dsObjectList");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"Table Name\"/><Cell col=\"1\" displaytype=\"text\" text=\"Comments\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:OBJECT_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMMENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("ExportTableData");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text("홈 > 공통관리 > 시스템관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "27", "71", "80", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("테이블명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTable_Name", "absolute", "105", "71", "197", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "313", "103", "80", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "107", "240", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "340", "128", null, "124", "25", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "359", "148", "95", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("조건구문");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWHRE_SYNT", "absolute", "455", "138", null, "102", "46", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Shape00", "absolute", "338", "277", null, null, "25", "15", this);
            obj.set_taborder("42");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMerge", "absolute", "340", "279", null, null, "27", "17", this);
            obj.set_taborder("43");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "347", "255", "240", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "346", "271", "216", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "331", "71", "80", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("코멘트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMMNET_NAME", "absolute", "399", "71", "197", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "302", "61", "40", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("ExportTableData");
            		p.set_scrollbars("autovert");

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
        this.addIncludeScript("TMMD0420.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0420.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0420 테이블 구조 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2017.01.04     안윤준     Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMD0420"; //해당 Form에서 사용 할 Package 명
        this.sCtrl = false;

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";
        }else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.edtSHRTable_Name.setFocus();
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsObjectList=dsObjectList";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        	
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	this.fnc_DatasetClear("dsTablePkList,dsTableColumnList,dsTableValueList");
        	this.txtMerge.set_value("");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTablePkList=dsTablePkList dsTableColumnList=dsTableColumnList dsTableValueList=dsTableValueList";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        	
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm="				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);

        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " TABLE_QUERY=" 	+ this.dsObjectList.getColumn(this.dsObjectList.rowposition, "OBJECT_NAME");
        		sReturnString += " WHRE_SYNT=" 		+ this.fnc_Quote(this.txtWHRE_SYNT.value);
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation00, this.dsTableValueList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsTableValueList.col
        		var sTableName = this.dsObjectList.getColumn(this.dsObjectList.rowposition, "OBJECT_NAME");
        		var sMerge = "";
        		
        		if (this.dsTableValueList.getColCount() == this.dsTableColumnList.getRowCount()) {
        			for ( var i=0; i<this.dsTableValueList.getRowCount(); i++ ) { // data 조회 건수
        				sMerge += "MERGE INTO " + sTableName + " A USING(\n  SELECT\n";
        				var sColList  = []; // 초기화
        				var sAColList = []; // 초기화
        				var sBColList = []; // 초기화
        				
        				for ( var j=0; j<this.dsTableColumnList.getRowCount(); j++ ) { // TABLE 컬럼 조회
        					var sColName = this.dsTableColumnList.getColumn(j, "COLUMN_NAME");
        					var sDataType = this.dsTableColumnList.getColumn(j, "DATA_TYPE");
        					var sReplace = "";
        					sColList.push(this.dsTableColumnList.getColumn(j, "COLUMN_NAME"));
        					sAColList.push("A."+this.dsTableColumnList.getColumn(j, "COLUMN_NAME"));
        					sBColList.push("B."+this.dsTableColumnList.getColumn(j, "COLUMN_NAME"));
        					if ( sDataType == "DATE" ) {
        						var sColValue = this.fnc_Trim(this.dsTableValueList.getColumn(i, sColName));
        						var sYear  = this.fnc_SubStr(sColValue, 0, 4);
        						var sMonth = this.fnc_SubStr(sColValue, 4, 2);
        						var sDay   = this.fnc_SubStr(sColValue, 6, 2);
        						var sHour  = this.fnc_SubStr(sColValue, 8, 2);
        						var sMin   = this.fnc_SubStr(sColValue, 10, 2);
        						var sSec   = this.fnc_SubStr(sColValue, 12, 2);
        						var sToDATE = sMonth+"/"+sDay+"/"+sYear+" "+sHour+":"+sMin+":"+sSec;
        						sMerge += "  TO_DATE('" + sToDATE + "', 'MM/DD/YYYY HH24:MI:SS') AS " + sColName + ",\n";
        						
        					} else {
        						// 컬럼 값 중 싱글쿼테이션 을 더블쿼테이션으로 수정
        						sReplace = this.fnc_Replace(this.dsTableValueList.getColumn(i, sColName), "'", '`');
        						sMerge += "  '" + this.fnc_Trim(this.fnc_Replace(sReplace, '`', "''")) + "' AS " + sColName + ",\n";
        					}
        				}
        				sMerge = sMerge.slice(0,-2);
        				sMerge += "\n  FROM DUAL) B\n";
        				
        				for ( var k=0; k<this.dsTablePkList.getRowCount(); k++ ) { // PK 컬럼 조회
        					var sColName = this.dsTableColumnList.getColumn(k, "COLUMN_NAME");
        					if ( k == 0 ) {
        						sMerge += "ON (A." + sColName + "= B." + sColName;
        					} else {
        						sMerge += " and A." + sColName + "= B." + sColName;
        					}
        					
        				}
        				sMerge += ")\nWHEN NOT MATCHED THEN\n";
        				sMerge += "INSERT (" + sColList + ")\n";
        				sMerge += "VALUES (" + sBColList + ")\n";
        				sMerge += "WHEN MATCHED THEN\n";
        				sMerge += "UPDATE SET \n";
        				
        				for ( var l=0; l<this.dsTableColumnList.getRowCount(); l++ ) { // TABLE 컬럼 조회
        					var sColName = this.dsTableColumnList.getColumn(l, "COLUMN_NAME");
        					if ( this.dsTableColumnList.getColumn(l, "PK_CHK") == "0" ) {
        						sMerge += "  A." + sColName + " = B." + sColName + ",\n";
        					}
        					
        				}
        				sMerge = sMerge.slice(0,-2);
        				sMerge += ";\n\n";
        			}
        		}
        		
        		this.txtMerge.set_value(sMerge);
        		
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	this.fnc_DatasetClear("dsTablePkList,dsTableColumnList,dsTableValueList");
        	this.txtMerge.set_value("");
        	this.fnc_Information(this.stInformation00, 0, "SHR");

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.txtWHRE_SYNT_onkeydown = function(obj,e) {
        	// ctrl + enter 키 입력 시 조회
        	if ( e.keycode == "13" && e.ctrlKey ){
        		this.fn_Search();
        	}
        	
        }

        this.edtSHRTable_Name_ontextchanged = function(obj,e) {
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRTable_Name.text)) > 0) {
        		this.dsObjectList.filter("String(OBJECT_NAME).indexOf('" + this.edtSHRTable_Name.text + "') >= 0"); 
        		
        		if (this.dsObjectList.getRowCount() > 0) {
        			this.dsObjectList.set_rowposition(0);
        			this.grdTM_METAXM.selectRow(0);
        			this.fnc_Information(this.stInformation, this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		}
        		
        	} else {
        		this.dsObjectList.filter("");
        		this.fnc_Information(this.stInformation, this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	}
        	
        }

        this.edtSHRCOMMNET_NAME_ontextchanged = function(obj,e) {
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRCOMMNET_NAME.text)) > 0) {
        		this.dsObjectList.filter("String(COMMENTS).indexOf('" + this.edtSHRCOMMNET_NAME.text + "') >= 0"); 
        		
        		if (this.dsObjectList.getRowCount() > 0) {
        			this.dsObjectList.set_rowposition(0);
        			this.grdTM_METAXM.selectRow(0);
        			this.fnc_Information(this.stInformation, this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		}
        		
        	} else {
        		this.dsObjectList.filter("");
        		this.fnc_Information(this.stInformation, this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsObjectList.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRTable_Name.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRTable_Name.addEventHandler("ontextchanged", this.edtSHRTable_Name_ontextchanged, this);
            this.txtWHRE_SYNT.addEventHandler("onkeydown", this.txtWHRE_SYNT_onkeydown, this);
            this.txtWHRE_SYNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtMerge.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMMNET_NAME.addEventHandler("ontextchanged", this.edtSHRCOMMNET_NAME_ontextchanged, this);
            this.edtSHRCOMMNET_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMD0420.xfdl");
        this.loadPreloadList();
       
    };
}
)();
