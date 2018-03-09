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
                this.set_name("PAYF0090");
                this.set_titletext("퇴직연금사업자등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">TMM0006</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTBUSI", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REAY_JOCD\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBTU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DCTU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("3");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("퇴직연금사업자등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("6");
            obj.set_text("급여관리 > 퇴직연금관리 > 퇴직연금사업자");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업자명");
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

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
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

            obj = new Grid("grdPY_RTBUSI", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("2");
            obj.set_binddataset("dsPY_RTBUSI");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"260\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연금사업자코드\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연금사업자명\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"3\" text=\"DB형 사용여부\"/><Cell col=\"4\" text=\"DC형 사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"background: ;\" text=\"bind:REAY_JOCD\" editlimit=\"4\" editautoselect=\"true\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;background: ;\" text=\"bind:BIZR_NAME\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:BIZR_NUMB\" mask=\"###-##-#####\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:DBTU_YSNO\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:DCTU_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "95", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("Image0", "absolute", "324", "71", "95", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("연금사업자명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NAME", "absolute", "418", "71", "160", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직연금사업자등록");

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
        this.addIncludeScript("PAYF0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0090.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0090 퇴직연금 사업자등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		김준수		Initial Created.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0090";
        this.aKeyValue    = new Array(1);
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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetUserComboDs(this.dsUserCombo);
            this.cmbSHRENFC_CODE.set_value(100);
            this.fn_Search();
            
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
            this.fnc_DatasetClear("dsPY_RTBUSI");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTBUSI=dsPY_RTBUSI";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            var iRow = this.dsPY_RTBUSI.addRow();
            this.dsPY_RTBUSI.setColumn(iRow, "ENFC_CODE", this.cmbSHRENFC_CODE.value);
            this.fnc_GridSetCellFocus(this.grdPY_RTBUSI, "ENFC_CODE");
            
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
            if (this.fn_DeleteCheck()) this.dsPY_RTBUSI.deleteRow(this.dsPY_RTBUSI.rowposition);
            this.grdPY_RTBUSI.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            this.fnc_DataSetCancel("dsPY_RTBUSI");
            this.grdPY_RTBUSI.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;
        	this.aKeyValue[0] = this.dsPY_RTBUSI.getColumn(this.dsPY_RTBUSI.rowposition, "REAY_JOCD");
        	
            var sMethodName = "SAVE00";
            var sInDataSet  = "dsPY_RTBUSI=dsPY_RTBUSI:U";
            var sOutDataSet = "dsPY_RTBUSI=dsPY_RTBUSI";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdPY_RTBUSI.setFocus();
            
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
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTBUSI", this);
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

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsPY_RTBUSI")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsPY_RTBUSI.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsPY_RTBUSI.getRowType(row)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "REAY_JOCD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM008", "연금사업자코드", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "REAY_JOCD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM008", "사업자 성명", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM008", "사업자 번호", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NUMB"))) < 10) {
        			return this.fnc_CheckPostAction("TMM008", "사업자 번호", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NUMB");
        		}
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
         	var sQuestionText = "연금사업자코드 (" + this.fnc_Trim(this.dsPY_RTBUSI.getColumn(this.dsPY_RTBUSI.rowposition, "REAY_JOCD")) + ")";
         	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE="  + this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " BIZR_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRBIZR_NAME.value)); 
        		
        	} else if (sKind == "SAVE00")	{
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.stInformation, this.dsPY_RTBUSI.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTBUSI.rowcount);
        		this.grdPY_RTBUSI.setFocus();
        		
        		var iRow = this.dsPY_RTBUSI.findRowExpr("REAY_JOCD=='" + this.aKeyValue[0] + "'");
        		if (iRow < 0) iRow = 0;
        		this.dsPY_RTBUSI.set_rowposition(iRow);
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetUserComboCode") {
                var arrParam = new Array();
                    arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
                this.fnc_UserComboInnerBind(arrParam);
                
            }
        }

        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	// 기능없음.
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRBIZR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBIZR_NAME.addEventHandler("oneditclick", this.edtSHRFIRM_NAME_oneditclick, this);

        };

        this.loadIncludeScript("PAYF0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
