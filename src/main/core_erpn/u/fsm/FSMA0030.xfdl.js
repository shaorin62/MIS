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
                this.set_name("FSMA0030");
                this.set_titletext("감가상각율");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRSTDS_YEAR</Col><Col id=\"CODEID\">STDS_YEAR</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_AMRATE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT01\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT02\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_AMRATE", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_AMRATE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("11");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"220\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"No\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"내용연수\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"정액법에 의한 상각률(할푼리)\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"정률법에 의한 상각률(할푼리)\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\" editlimit=\"3\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:AMOT_RT01\" mask=\"#,###\" editlimit=\"6\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:AMOT_RT02\" mask=\"#,###\" editlimit=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "519", "23", "25", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnDATA_COPY", "absolute", "8", "35", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("자료생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_YEAR", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new PopupDiv("popINSERT", "absolute", "8", "56", "278", "90", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "260", "39", null, null, this.popINSERT);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("16");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSTDS_YEAR", "absolute", "98", "18", "66", "21", null, null, this.popINSERT);
            obj.set_taborder("17");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "166", "18", "63", "21", null, null, this.popINSERT);
            obj.set_taborder("18");
            obj.set_text("자료생성");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("Button0", "absolute", "207", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("19");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("30");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("감가상각율관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("35");
            obj.set_text("자산관리>자신기준정보>감가상각율");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "514", "0", "32", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 278, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.getSetter("taborder").set("17");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("감가상각율");
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
        this.addIncludeScript("FSMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMA0030 감가상각율
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                   *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "FSMA0030";
        this.sBtnINSERT   = "N"; 

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
          /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRSTDS_YEAR.setFocus();
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
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsFS_AMRATE"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_AMRATE=dsFS_AMRATE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_AMRATE.setFocus(); 
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	this.dsFS_AMRATE.addRow();
        	
        	this.dsFS_AMRATE.setColumn(this.dsFS_AMRATE.rowposition, "STDS_YEAR", this.cmbSHRSTDS_YEAR.value);
        	this.grdFS_AMRATE.setFocus(); 
        	this.grdFS_AMRATE.setCellPos(this.fnc_GridColumnIndex(this.grdFS_AMRATE, "PRID_DPCT"));
        	this.grdFS_AMRATE.getCellText(0,1);
        	

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) 	this.dsFS_AMRATE.deleteRow(this.dsFS_AMRATE.rowposition);
        	this.grdFS_AMRATE.setFocus(); 
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_AMRATE"); 
        	this.grdFS_AMRATE.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_AMRATE=dsFS_AMRATE:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_AMRATE.setFocus();
        	
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

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_AMRATE",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_YEAR.value)) != 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.cmbSHRSTDS_YEAR);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (dsobj) {

        	var sQuestionText  = "내용연수 (" + this.fnc_Trim(this.dsFS_AMRATE.getColumn(this.dsFS_AMRATE.rowposition, "PRID_DPCT")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsFS_AMRATE")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var row = 0; row < this.dsFS_AMRATE.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsFS_AMRATE.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_AMRATE.getColumn(row, "PRID_DPCT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용연수", this.dsFS_AMRATE, row, this.grdFS_AMRATE, "PRID_DPCT");
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
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.cmbSHRSTDS_YEAR.value); 

        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.cmbSHRSTDS_YEAR.value); 
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		
        	}
        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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
        		// 자료생성, 조회시 각각 SEARCH00 태운다. 그래서 분리함.

        		if (this.sBtnINSERT == "N") {
        		
        			this.fnc_Information(this.stInformation, this.dsFS_AMRATE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        			this.cmbSHRSTDS_YEAR.set_value(this.dsFS_AMRATE.getColumn(this.dsFS_AMRATE.rowposition, "STDS_YEAR"));
        			
        		} else if (this.sBtnINSERT == "Y") 	{

        			if (this.sBtnINSERT == 'N') {
        			
        				this.fnc_Information(this.stInformation, this.dsFS_AMRATE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        				this.cmbSHRSTDS_YEAR.set_value(this.dsFS_AMRATE.getColumn(this.dsFS_AMRATE.rowposition, "STDS_YEAR"));
        				
        			} else if (this.sBtnINSERT == 'Y') {

        				this.fn_GetCombo1(); //콤보세팅
        				this.sBtnINSERT = "N";
        			
        			}
        		}
        		
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.cmbSHRSTDS_YEAR.set_index(0);
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Message("TMM103"); 
        		this.cmbSHRSTDS_YEAR.set_value(this.dsFS_AMRATE.getColumn(this.dsFS_AMRATE.rowposition, "STDS_YEAR"));
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSTDS_YEAR,dsSHRSTDS_YEAR,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} 
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  기준년월 콤보데이터셋  |
         +------------------------*/
        this.fn_GetCombo1 = function () {

        	this.fnc_DatasetClear("dsFS_AMRATE"); 
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_AMRATE=dsFS_AMRATE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------+
         |  팝업 자료생성  |
         +------------------------*/
        this.popINSERT_btnINSERT_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSTDS_YEAR.value)) != 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.popINSERT.medSTDS_YEAR.get_value);
        	}

        	this.fnc_DatasetClear("dsFS_AMRATE");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_AMRATE=dsFS_AMRATE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	var sArgument   = " pgm="           + this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="        + this.fnc_Quote(sMethodName);
        		sArgument  += " STDS_YEAR=" 	+ this.fnc_Quote(this.popINSERT.medSTDS_YEAR.value); 
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.sBtnINSERT = "Y";
        	this.grdFS_AMRATE.setFocus(); 
        }

        /*-----------------------+
         |  팝업닫기  |
         +------------------------*/
        this.popINSERT_Button0_OnClick = function (obj,e) {
        	this.popINSERT.closePopup();
        }

        this.fn_DataCodeCopy = function (obj,e) {

        	var nX 	= system.clientToScreenX(obj, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);

        	var nY 	= system.clientToScreenY(obj, obj.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        		
        	this.popINSERT.trackPopup(nX, nY - 2);
        	this.popINSERT.medSTDS_YEAR.setFocus();
        	
        }

        /*-----------------------------------+
         |  콤보박스 onItemchanged 자동조회  |
         +------------------------------------*/
        this.cmbSHRSTDS_YEAR_OnItemChanged = function (obj,e) {

        	this.fnc_DatasetClear("dsFS_AMRATE"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_AMRATE=dsFS_AMRATE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_AMRATE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.btnDATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.cmbSHRSTDS_YEAR.addEventHandler("onitemchanged", this.cmbSHRSTDS_YEAR_OnItemChanged, this);
            this.cmbSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.medSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.Button0.addEventHandler("onclick", this.popINSERT_Button0_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
