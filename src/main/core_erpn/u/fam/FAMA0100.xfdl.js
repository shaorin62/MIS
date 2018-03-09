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
                this.set_name("FAMA0100");
                this.set_titletext("환율관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsSHRCURR_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"USEDFLAG\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_EXRTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"STND_RATE\" size=\"12\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USDS_RATE\" size=\"12\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NOTI_RATE\" size=\"12\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VALU_RATE\" size=\"12\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NATI_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("4");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGET_MONEYRATE", "absolute", null, "113", "84", "21", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("환율정보연동");
            obj.style.set_imagealign("left");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", null, "113", "68", "21", "212", null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTDS_DATE", "absolute", null, "113", "100", "21", "111", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_visible("false");

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE1", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("Static6", "absolute", "202", "71", "14", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE2", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("Static03", "absolute", "345", "71", "68", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("화폐단위");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCURR_GUBN", "absolute", "413", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Grid("grdTA_EXRTXM", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("15");
            obj.set_binddataset("dsTA_EXRTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"142\"/><Column size=\"218\"/><Column size=\"152\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"기준일자\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"화폐단위\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"최초고시환율\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CURR_GUBN\" editimemode=\"none\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:STND_RATE\" mask=\"#,###,##0.0000\" maskchar=\"-\" editlimit=\"0\" editlimitbymask=\"both\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("환율관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("홈 > 재무관리 > 재무기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("33");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("환율관리");
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
        this.addIncludeScript("FAMA0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0100 환율관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMA0100";

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
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	var sNowDate   = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sFirstDate = this.fnc_SubStr(sNowDate, 0, 6) + "01";
        	this.calSHRSTDS_DATE1.set_value(sFirstDate);
        	this.calSHRSTDS_DATE2.set_value(sNowDate);
        	this.calSTDS_DATE.set_value(sNowDate);
        	this.calSHRSTDS_DATE1.setFocus();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_EXRTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_EXRTXM=dsTA_EXRTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_EXRTXM.addRow();
        	this.dsTA_EXRTXM.setColumn(iRow, 'STDS_DATE', this.fnc_GetServerDateTime("DATE")); 
        	
        	this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "STDS_DATE"), "edittype", "date");
        	this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "CURR_GUBN"), "edittype", "combo");

        	this.grdTA_EXRTXM.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTA_EXRTXM.deleteRow(this.dsTA_EXRTXM.rowposition);		
        	this.grdTA_EXRTXM.setFocus();

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_EXRTXM");
        	this.grdTA_EXRTXM.setFocus();

        }
        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_EXRTXM=dsTA_EXRTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdTA_EXRTXM.setFocus();

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
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_EXRTXM", this);
        		
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
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_EXRTXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	if (this.fnc_IsDate(this.calSHRSTDS_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "시작 기준일자", this.calSHRSTDS_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRSTDS_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "종료 기준일자", this.calSHRSTDS_DATE2);
        	}

        	if (this.calSHRSTDS_DATE1.value > this.calSHRSTDS_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "시작 기준일자,종료 기준일자", this.calSHRSTDS_DATE1);
        	}
        	
        	return true;

        }

        
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_EXRTXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTA_EXRTXM.rowcount; i++) {

        		if (this.dsTA_EXRTXM.getRowType(this.dsTA_EXRTXM.rowposition) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_EXRTXM.getColumn(i, "STDS_DATE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "기준일자", this.dsTA_EXRTXM, i, this.grdTA_EXRTXM, "STDS_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_EXRTXM.getColumn(i, "CURR_GUBN"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "화폐단위", this.dsTA_EXRTXM, i, this.grdTA_EXRTXM, "CURR_GUBN");
        		}		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_EXRTXM.getColumn(i, "STND_RATE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "최초고시환율", this.dsTA_EXRTXM, i, this.grdTA_EXRTXM, "STND_RATE");
        		}

        	}

        	return true;

        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTA_EXRTXM.rowcount < 1){
        		this.fnc_Message("TMM007");
        		return;
        	}

        	var sQuestionText  = "기준일자: " + this.dsTA_EXRTXM.getColumn(this.dsTA_EXRTXM.rowposition, "STDS_DATE") + " ";
        		sQuestionText += "화폐단위: " + this.dsTA_EXRTXM.getColumn(this.dsTA_EXRTXM.rowposition, "CURR_GUBN");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " STND_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE1.value));
        		sReturnString += " STND_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE2.value));
        		sReturnString += " CURR_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCURR_GUBN.value));

        	} else if (sKind == 'GET_EXCHANGE_RATE') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSTDS_DATE.value));

        	} else if (sKind == 'SAVE00'){

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

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

        	if (sMethodName == 'SEARCH00') {

        		this.fnc_Information(this.stInformation, this.dsTA_EXRTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_EXRTXM.getCaseCount("dataset.getRowLevel(currow)==0"));		

        	} else if (sMethodName == 'GET_EXCHANGE_RATE') {

        		this.fnc_Message("TMM125", "환율정보연동 작업이 완료 되었습니다");

        	} else if (sMethodName == 'SAVE00'){

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCURR_GUBN,dsSHRCURR_GUBN,0";
        			arrParam[1] = "GRID,grdTA_EXRTXM,dsCURR_GUBN,CURR_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e){

        	// edittype 처리
        	if (this.fnc_ToUpper(this.dsTA_EXRTXM.getRowType(this.dsTA_EXRTXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "STDS_DATE"), "edittype", "date");
        		this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "CURR_GUBN"), "edittype", "combo");
        	} else {
        		this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "STDS_DATE"), "edittype", "none");
        		this.grdTA_EXRTXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_EXRTXM, "CURR_GUBN"), "edittype", "none");
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------------+
         | 환율정보연동 버튼 클릭시  |
         +------------------------------*/
        this.btnGET_EXCHANGE_RATE_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.calSTDS_DATE.value)) < 1){
        		this.fnc_Message("TMM072", "기준일자");
        		this.calSTDS_DATE.setFocus();
        		return false;
        	}

        	var sSTDS_DATE = this.fnc_SubStr(this.calSTDS_DATE.value, 0, 4) + "-"
        		           + this.fnc_SubStr(this.calSTDS_DATE.value, 4, 2) + "-"
        		           + this.fnc_SubStr(this.calSTDS_DATE.value, 6, 2);
        		           
        	var sMESSAGE  = "";
        	    sMESSAGE  = "기준일자 [" + sSTDS_DATE + "]의 환율정보를 연동 하시겠습니까?";
        	    sMESSAGE += "\n※기존일자[" + sSTDS_DATE + "]의 자료는 초기화 됩니다!";
        	    
        	if (this.fnc_Message("M1093", sMESSAGE) == false) return;
        	
        	var sMethodName = "GET_EXCHANGE_RATE";
        	var sInDataSet  = "dsTA_EXRTXM=dsTA_EXRTXM";
        	var sOutDataSet = "dsTA_EXRTXM=dsTA_EXRTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_EXRTXM.setFocus();
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_EXRTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnGET_MONEYRATE.addEventHandler("onclick", this.btnGET_EXCHANGE_RATE_OnClick, this);
            this.calSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSTDS_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCURR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMA0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
