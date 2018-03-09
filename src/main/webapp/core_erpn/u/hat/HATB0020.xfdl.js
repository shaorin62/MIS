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
                this.set_name("HATB0020");
                this.set_titletext("일근태등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_ATTEDY", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RESN_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCUMENT_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WORK_GUBN</Col><Col id=\"DSNAME\">dsWORK_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRWORK_GUBN</Col><Col id=\"CODEID\">WORK_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ENDDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("일근태등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("근태기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "896", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("근태구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWORK_GUBN", "absolute", "964", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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
            obj.set_text("h 6");
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

            obj = new Grid("grdAT_ATTEDY", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_ATTEDY");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근태일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근태구분\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시간/일\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK_YSNO\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;date&quot; : &quot;none&quot;\" style=\"align:center;background: ;\" text=\"bind:ATTE_DATE\" mask=\"yyyy-MM-dd\" calendardisplay=\"edit\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:EMPL_NUMB\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editdisplay=\"edit\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" text=\"bind:WORK_GUBN\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO ==&quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:WORK_TIME\" mask=\"#0.0\" editlimit=\"3\" editautoselect=\"false\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:RESN_DESC\" editlimit=\"100\" editdisplay=\"edit\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRATTE_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRATTE_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static03", "absolute", "344", "71", "52", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "386", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "468", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "491", "71", "100", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "315", "61", "40", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "620", "71", "52", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "662", "71", "80", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "744", "71", "21", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "767", "71", "100", "21", null, null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "591", "61", "40", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "867", "61", "40", "41", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일근태등록");

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
        this.addIncludeScript("HATB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATB0020.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		일근태등록
         * @category	 	인사관리>근태처리>일근태등록
         * @author	   	    김희정
         * @cdate	  		2016.09.07
         * @version 1.0		최초 작성
         * HATB0020.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.										*
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.										*
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리				*
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망	*
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요								*
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "HATB0020";

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

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRATTE_DATE1.set_value(this.fnc_SubStr(iNowData, 0, 6) + "01");
        	this.calSHRATTE_DATE2.set_value(this.fnc_SubStr(iNowData)); 
        	this.edtSHRDEPT_NAME.setFocus();
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
        	this.fnc_DatasetClear("dsAT_ATTEDY");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ATTEDY=dsAT_ATTEDY";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEDY.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	var iRow = this.dsAT_ATTEDY.addRow();
        	
        	this.dsAT_ATTEDY.set_rowposition(iRow); 
        	this.dsAT_ATTEDY.setColumn(iRow, "CHK_YSNO", "0");
        	this.dsAT_ATTEDY.setColumn(iRow, "ATTE_DATE", this.calSHRATTE_DATE2.value);
        	this.grdAT_ATTEDY.setCellPos(this.fnc_GridColumnIndex(this.grdAT_ATTEDY, "ATTE_DATE"));
        	this.grdAT_ATTEDY.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		// 체크목록 삭제
        		for (i = this.dsAT_ATTEDY.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsAT_ATTEDY.getColumn(i,"CHK_YSNO") == "1"){
        				this.dsAT_ATTEDY.deleteRow(i);
        			}
        		}
        		
        		this.grdAT_ATTEDY.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsAT_ATTEDY");
        	this.grdAT_ATTEDY.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_ATTEDY=dsAT_ATTEDY:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEDY.setFocus();

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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsAT_ATTEDY", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

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

        	if (this.fnc_DatasetChangeCheck("dsAT_ATTEDY")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRATTE_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간시작", this.calSHRATTE_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRATTE_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간종료", this.calSHRATTE_DATE2);
        	}
        	
        	if (this.calSHRATTE_DATE1.value > this.calSHRATTE_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "근태기간시작,근태기간종료", this.calSHRATTE_DATE1);
        	}
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsAT_ATTEDY") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_ATTEDY.getRowCount(); i++) {
        		
        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_ATTEDY.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "ATTE_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근태일자", this.dsAT_ATTEDY, i, this.grdAT_ATTEDY, "ATTE_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsAT_ATTEDY, i, this.grdAT_ATTEDY, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "WORK_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근태구분", this.dsAT_ATTEDY, i, this.grdAT_ATTEDY, "WORK_GUBN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "WORK_TIME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시간/일", this.dsAT_ATTEDY, i, this.grdAT_ATTEDY, "WORK_TIME");
        		}
        		
        		var sWorkGubn = this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "WORK_GUBN"));
        		var sWorkTime = this.fnc_Trim(this.dsAT_ATTEDY.getColumn(i, "WORK_TIME"));
        		if(sWorkGubn == "1") {
        			if(  nexacro.toNumber(sWorkTime) < 1 ) {
        				this.fnc_Message("TMM127","야간근무는 1시간 이상");
        				return false;
        			}
        		}
        		if(sWorkGubn == "2") {
        			if(  nexacro.toNumber(sWorkTime) < 4 ) {
        				this.fnc_Message("TMM127","휴일근무는 4시간 이상");
        				return false;
        			}
        		}
        		if(sWorkGubn == "3") {
        			if( nexacro.toNumber(sWorkTime) != 1 && nexacro.toNumber(sWorkTime) != "0.5" ) {
        				this.fnc_Message("TMM127","월차는 0.5또는 1일만");
        				return false;
        			}
        		}
        		if(sWorkGubn == "4") {
        			if( nexacro.toNumber(sWorkTime) != 1 && nexacro.toNumber(sWorkTime) != 0.5 ) {
        				this.fnc_Message("TMM127","연차는 0.5또는 1일만");
        				return false;
        			}
        		}
        		if(sWorkGubn == "5") {
        			if(nexacro.toNumber(sWorkTime) != 1) {
        				this.fnc_Message("TMM127","무급은 1일만");
        				return false;
        			}
        		}
        		if(sWorkGubn == "6") {
        			if(nexacro.toNumber(sWorkTime) != 1) {			
        				this.fnc_Message("TMM127","정기휴가는 1일만");
        				return false;
        			}
        		}
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (this.dsAT_ATTEDY.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	/* 마감된 근태월 정보 삭제 불가*/
        	var iFindRow = this.dsAT_ATTEDY.findRowExpr("CHK_YSNO == '1' && ENDD_YSNO == '1'");
            if (iFindRow > -1){
        		var sEmplName = this.dsAT_ATTEDY.getColumn(iFindRow, "EMPL_NAME");
        		var sAtteDate = this.fnc_SubStr(this.dsAT_ATTEDY.getColumn(iFindRow, "ATTE_DATE"), 4, 2) + "월 " + this.fnc_SubStr(this.dsAT_ATTEDY.getColumn(iFindRow, "ATTE_DATE"), 6, 2) + "일";
        		this.fnc_Message("TMM080", "마감완료", sEmplName +"님의 " + sAtteDate + " 근태일은 삭제");
        		return false;
        	}
        	
        	var iSelectRowCount = this.dsAT_ATTEDY.getCaseCount("CHK_YSNO == '1'");
        	if (iSelectRowCount == 0) {
        		this.fnc_Message("TMM010");
        		return false;
        	}
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var iSelectRow = this.dsAT_ATTEDY.findRow('CHK_YSNO', '1');
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsAT_ATTEDY.getColumn(iSelectRow, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        		
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ATTE_DATE1=" + this.fnc_Quote(this.calSHRATTE_DATE1.value);	//근태기간시작일자
        		sReturnString += " ATTE_DATE2=" + this.fnc_Quote(this.calSHRATTE_DATE2.value);	//근태기간종료일자
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);	//부서코드
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	//사원번호
        		sReturnString += " WORK_GUBN=" + this.fnc_Quote(this.cmbSHRWORK_GUBN.value);	//근태구분

        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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

        		this.fnc_Information(this.stInformation, this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		var sAtteEnd = this.dsAT_ENDDXM.getColumn(0, "ENDD_YSNO");
        		if(sAtteEnd == "1"){
        			this.fnc_Message("TMM080", "마감완료", "해당근태일은 입력");
        			this.dsAT_ATTEDY.setColumn(this.dsAT_ATTEDY.rowposition, "ATTE_DATE", "");
        		}
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWORK_GUBN,dsSHRWORK_GUBN,WORK_GUBN";
        			arrParam[1] = "GRID,grdAT_ATTEDY,dsWORK_GUBN,WORK_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서(popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "TMM0004";	//BDM0002
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdAT_ATTEDY") {

        		//if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" ) {
        			
        			arrParam[0] = "HRM0002"; 
        			arrParam[1] = this.edtSHRDEPT_CODE.value;
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdAT_ATTEDY";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";  
        			arrParam[6] = "0,1,2,3,20,21";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        /*------------------------------------+
         | 근태마감여부 조회                |
         +-------------------------------------*/
        this.fn_AtteMagamInfo = function (sDate) {
        	this.fnc_DatasetClear("dsAT_ENDDXM");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ENDDXM=dsAT_ENDDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	if(this.fnc_Length(sDate) > 1){
        		sArgument += " ATTE_YMTH=" + this.fnc_Quote(sDate);	//근태일자
        	}
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.grdAT_ATTEDY_onheadclick = function(obj,e)
        {
        	if(e.cell != 0)
        		return;
        		
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox")) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	var v_Colid = obj.getCellProperty("body", e.cell, "text").replace("bind:", "");
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	/* Dataset에 Value 일괄 설정 */
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		if (this.fnc_ToUpper(objDataSet.getRowType(i)) != Dataset.ROWTYPE_INSERT) {
        			objDataSet.setColumn(i, v_Colid, iCheckValue);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        }

        
        this.dsAT_ATTEDY_cancolumnchange = function(obj,e)
        {
        	var sAtteDate = "";
        	var sEmplNumb = "";
        	var sWorkGubn = "";

        	if(e.columnid == "ATTE_DATE"){
        		sAtteDate = e.newvalue;
        		sEmplNumb = this.dsAT_ATTEDY.getColumn(e.row, "EMPL_NUMB");
        		sWorkGubn = this.dsAT_ATTEDY.getColumn(e.row, "WORK_GUBN");
        	}else if(e.columnid == "EMPL_NUMB"){
        		sAtteDate = this.dsAT_ATTEDY.getColumn(e.row, "ATTE_DATE");
        		sEmplNumb = e.newvalue;
        		sWorkGubn = this.dsAT_ATTEDY.getColumn(e.row, "WORK_GUBN");
        	}else if(e.columnid == "WORK_GUBN"){
        		sAtteDate = this.dsAT_ATTEDY.getColumn(e.row, "ATTE_DATE");
        		sEmplNumb = this.dsAT_ATTEDY.getColumn(e.row, "EMPL_NUMB");
        		sWorkGubn = e.newvalue;
        	}else {
        		return;
        	}
        	
        	var sEmplName = this.dsAT_ATTEDY.getColumn(e.row, "EMPL_NAME");
        	var iFindRow2 = this.dsAT_ATTEDY.findRowExpr("ATTE_DATE=='" + sAtteDate + "' && EMPL_NUMB=='" + sEmplNumb+ "' && WORK_GUBN=='" + sWorkGubn+ "'");
            if (iFindRow2 > -1){
        		this.fnc_Message("TMM077", sEmplName + "님의 근태정보");
        		return false;
            }
        }

        this.dsAT_ATTEDY_oncolumnchanged = function(obj,e) {
        	if(e.columnid == "ATTE_DATE"){
        		var sAtteYmth = this.fnc_SubStr(e.newvalue,0,6);
        		/* 근태마감여부 확인 */
        		this.fn_AtteMagamInfo(sAtteYmth);
        	}
        	
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdAT_ATTEDY, "YES", e.oldvalue, e.columnid);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_ATTEDY.addEventHandler("cancolumnchange", this.dsAT_ATTEDY_cancolumnchange, this);
            this.dsAT_ATTEDY.addEventHandler("oncolumnchanged", this.dsAT_ATTEDY_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRWORK_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdAT_ATTEDY.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_ATTEDY.addEventHandler("onheadclick", this.grdAT_ATTEDY_onheadclick, this);
            this.calSHRATTE_DATE1.addEventHandler("ontextchanged", this.calSHRATTE_DATE1_ontextchanged, this);
            this.calSHRATTE_DATE2.addEventHandler("ontextchanged", this.calSHRATTE_DATE2_ontextchanged, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HATB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
