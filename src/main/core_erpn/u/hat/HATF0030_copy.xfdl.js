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
                this.set_name("HATF0030");
                this.set_titletext("유류비지급관리기준");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_GASBXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BEGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DSTNC\" type=\"INT\" size=\"256\"/><Column id=\"OIL_UNTPC\" type=\"INT\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"DSNAME\">dsSHRDPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">OPAY_CODE</Col><Col id=\"DSNAME\">dsSHROPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">OPAY_CODE</Col><Col id=\"DSNAME\">dsOPAY_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_GASBXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_GASBXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시작일자\"/><Cell col=\"2\" text=\"종료일자\"/><Cell col=\"3\" text=\"기준거리\"/><Cell col=\"4\" text=\"유류단가\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:getRowType(rowposition) == '2' ? 'date' : 'none'\" text=\"bind:BEGIN_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:END_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:STDR_DSTNC\" mask=\"###,###,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:OIL_UNTPC\" mask=\"###,###,###\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" text=\"bind:ETC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "105", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("유류비지급관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "29", null, this);
            obj.set_text("출장관리>유류비지급관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "522", "27", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "74", "22", null, null, this);
            obj.set_text("시작일자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDAYP_DATE", "absolute", "85", "68", "101", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "186", "61", "30", "41", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "631", "61", "40", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "722", "55", "128", "4", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, null, "15", "37", "0", this);
            obj.set_taborder("22");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("유류비지급관리기준");
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
        this.addIncludeScript("HATF0030_copy.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0030_copy.xfdl", function() {
        /****************************************************************************************************
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
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "HATF0030"; //해당 Form에서 사용 할 Package 명

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
        	
            this.calSHRDAYP_DATE.set_value(this.fnc_Today().substr(0, 8));

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
        	this.fnc_DatasetClear("dsTA_GASBXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_GASBXM=dsTA_GASBXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_GASBXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_GASBXM.addRow();
        	
        	this.dsTA_GASBXM.setColumn(iRow, "BEGIN_DATE", this.fnc_Today().substr(0, 8));   //시작일
        	this.dsTA_GASBXM.setColumn(iRow, "END_DATE", "99991231");						 //종료일
        	
        	this.grdTA_GASBXM.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTA_GASBXM.deleteMultiRows(this.grdTA_GASBXM.getSelectedDatasetRows());
        	this.grdTA_GASBXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	
        	this.fnc_DataSetCancel("dsTA_GASBXM");
        	
        	// 검색영역 데이터 초기화
        	this.calSHRDAYP_DATE      = this.fnc_Today().substr(0, 8);
        	
        	//this.grdTA_GASBXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_GASBXM=dsTA_GASBXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_GASBXM.setFocus();
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTA_GASBXM", this);
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

        	/*if (!this.fnc_IsDate(this.calSHRDAYP_DATE.value)) {
        		return this.fnc_SearchCheckPostAction("M1005", "조회 시작일", this.calSHRDAYP_DATE);
        	}*/

        	if (this.fnc_DatasetChangeCheck("dsTA_GASBXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTA_GASBXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_GASBXM);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "시작일자 (" + this.fnc_Trim(this.dsTA_GASBXM.getColumn(this.dsTA_GASBXM.rowposition, "BEGIN_DATE")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_GASBXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_GASBXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GASBXM.getColumn(i, "BEGIN_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일자", this.dsTA_GASBXM, i, this.grdTA_GASBXM, "BEGIN_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GASBXM.getColumn(i, "END_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일자", this.dsTA_GASBXM, i, this.grdTA_GASBXM, "END_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GASBXM.getColumn(i, "STDR_DSTNC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기준거리", this.dsTA_GASBXM, i, this.grdTA_GASBXM, "STDR_DSTNC");
        		}
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			  + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		  + this.fnc_Quote(sKind); 									  
        		sReturnString += " BEGIN_DATE="       + this.fnc_Quote(this.fnc_Trim(this.calSHRDAYP_DATE.value)); // 시작일자 

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsTA_GASBXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_GASBXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} 
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-------------------------------------------------+
         |  그리드 데이터 변경시 중복체크              |
         +-------------------------------------------------*/
        this.dsTA_GASBXM_cancolumnchange = function(obj,e)
        {

        	if(e.columnid == "BEGIN_DATE" || e.columid == "END_DATE"){
        		
        		if(e.columnid == "BEGIN_DATE"){ //시작일
        		
        			if(this.fn_IsNull(e.newvalue) || this.fn_IsNull(obj.getColumn(e.row, "END_DATE"))) {
        				return true;
        			}
        			
        			var nDiffDate = this.fn_DiffDate(e.newvalue, obj.getColumn(e.row, "END_DATE"));
        			
        			if(nDiffDate < 0) {
        				alert("시작일은 종료일보다 늦을 수 없습니다.");
        				return false;
        			}
        	 
        	   } else if(e.columnid == "END_DATE"){ //종료일
        		
        			if(this.fn_IsNull(e.newvalue) || this.fn_IsNull(obj.getColumn(e.row, "BEGIN_DATE"))) {
        				return true;
        			}
        			
        			var nDiffDate = this.fn_DiffDate(obj.getColumn(e.row, "BEGIN_DATE"), e.newvalue);
        			
        			if(nDiffDate < 0) {
        				alert("죵료일이 시작일보다 빠를 수 없습니다.");
        				return false;
        			}
        	 
        	   } 
        	}
        	
        	if(e.columnid == "CMPNY_CD" || e.columnid == "BEGIN_DATE"){
        	
        		var v_arrColID = ["CMPNY_CD","BEGIN_DATE"];
        		var v_arrValue;
        		var v_strValue;
        		
        		if(e.columnid == "CMPNY_CD"){
        			
        			v_strValue = obj.getColumn(e.row, "BEGIN_DATE");
        			if(this.fn_IsNull(e.newvalue) || this.fn_InNull(v_strValue)){
        				return true;
        			}
        			v_arrValue = [e.newvalue,v_strValue];
        		} else {
        			
        			v_strValue = obj.getColumn(e.row, "CMPNY_CD");
        			if(fn_IsNull(e.newvalue) || fn_IsNull(v_strValue)){
        				return true;
        			}
        			v_arrValue = [v_strValue,e.newvalue];
        		}
        		
        	}
        }

        
        this.fn_IsNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
        	if (new String(sValue).valueOf() == "NaN") return true;
        	if (sValue == null) return true;
        	if (sValue == undefined) return true;
        	var v_ChkStr = new String(sValue);
        	var returnValue = false;
        	
        	if (v_ChkStr == null) return true;
        	
        	if (v_ChkStr.toString().length == 0 ) return true;
        	else return false;
        	
        	return false;

        }

        /*this.gfn_getDuplication(objDs, strColID, strValue)
        {
        	var v_nFindRow = objDs.findRow(strColID, strValue);
        	if(v_nFindRow>-1){
        		return true;
        	}
        	return false;
        }*/

        
        this.fn_DiffDate  = function (sStartDate,sEndDate)
        {
        alert("12313");
        	var vFromDate = new Date(parseInt(sEndDate.substring(0,4), 10), parseInt(sEndDate.substring(4,6)-1, 10), parseInt(sEndDate.substring(6,8),10));
        	var vToDate = new Date(parseInt(sStartDate.substring(0,4), 10), parseInt(sStartDate.substring(4,6)-1, 10), parseInt(sStartDate.substring(6,8),10));

        	return parseInt((vFromDate - vToDate)/(1000*60*60*24));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_GASBXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRDAYP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HATF0030_copy.xfdl");
        this.loadPreloadList();
       
    };
}
)();
