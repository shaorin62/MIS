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
                this.set_name("FSMD0010P01");
                this.set_titletext("감가상각전표관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,890,592);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"MONT_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASST_CSCD\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"20\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_SLIPXM", "absolute", "15", "101", null, null, "15", "44", this);
            obj.set_binddataset("dsFS_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"62\"/><Column size=\"124\"/><Column size=\"79\"/><Column size=\"89\"/><Column size=\"148\"/><Column size=\"145\"/><Column size=\"116\"/><Column size=\"0\"/><Column size=\"99\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"부서코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"2\" text=\"자산비용구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산분류코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산분류명\"/><Cell col=\"5\" displaytype=\"text\" text=\"당월상각액\"/><Cell col=\"6\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"7\" displaytype=\"text\" text=\"승인상태\"/><Cell col=\"8\" text=\"코스트코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:ASST_CSCD\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:ASCL_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ASCL_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_DPCT\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:APPV_STAT\"/><Cell col=\"8\" text=\"bind:CSTC_CODE\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MONT_DPCT&quot;)\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "15", "8", "427", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnSlipCreate01", "absolute", "0", "0", "100", "21", null, null, this.Div0);
            obj.set_taborder("5");
            obj.set_text("전표자료생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSlipDelete01", "absolute", "102", "0", "100", "21", null, null, this.Div0);
            obj.set_taborder("6");
            obj.set_text("전표자료삭제");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSlipCreate02", "absolute", "204", "0", "100", "21", null, null, this.Div0);
            obj.set_taborder("7");
            obj.set_text("상각전표생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSlipDelete02", "absolute", "306", "0", "100", "21", null, null, this.Div0);
            obj.set_taborder("8");
            obj.set_text("상각전표삭제");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "33", null, "43", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "35", "44", "68", "21", null, null, this);
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("title00", "absolute", "232", "44", "68", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSTDS_YMTH", "absolute", "103", "44", "100", "21", null, null, this);
            obj.set_enable("false");
            obj.set_mask("####-##");
            obj.set_taborder("1");
            obj.set_type("string");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "300", "44", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "875", "16", "15", "461", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "548", "64", "8", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "806", "580", "64", "12", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", null, "44", "52", "21", "26", null, this);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "80", "262", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "76", "80", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 427, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 890, 592, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("감가상각전표관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FSMD0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMD0010P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMD0020P01 감가상각전표관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
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
        this.sBUTTONLIST = "";
        this.sPACKAGENAME = "FSMD0010P01";
        this.sSLIP_DATE = "";

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
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_SLIPXM, "SLIP_NUMB");

        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.mskSHRSTDS_YMTH.set_value(this.parent.pBASEYMTH); //상각년월 셋팅
        	this.sSLIP_DATE = this.fnc_GetLastDayOfMonth(this.parent.pBASEYMTH + "01");
        	this.fn_Search();	

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

        	this.fnc_DatasetClear("dsFS_SLIPXM"); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_SLIPXM=dsFS_SLIPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_SLIPXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        
        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;	
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_SLIPXM",this);
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

         /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsFS_SLIPXM")) {

        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {

        		return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_SLIPXM, 0, this.mskSHRSTDS_YMTH, "");

        	}

        	if (this.fnc_Length(this.cmbSHRACCT_UNIT.value) < 1) {

        		return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_SLIPXM, 0, this.cmbSHRACCT_UNIT, "");

        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 , 전표자료 생성, 전표자료 삭제, 상각전표 생성 Argument 생성
        	if (sKind == "SEARCH00" || sKind == "SLIPCREATE01" || sKind == "SLIPDELETE01"
        		 || sKind == "SLIPCREATE02") {
        		 
        		          
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value)); //상각년월
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.fnc_Trim(this.sSLIP_DATE)); //전표처리위한 말일날짜		
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_SLIPXM.getColumn(this.dsFS_SLIPXM.rowposition, "DEPT_CODE"))); //부서코드

        		
        	} else if (sKind == "SLIPDELETE02") {

        		// 상각전표 삭제 Argument 생성
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH="    + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value)); //상각년월
        		sReturnString += " ACCT_UNIT="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " edtSTDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_SLIPXM.getColumn(this.dsFS_SLIPXM.rowposition, "STDS_YMTH"))); //상각년월
        		sReturnString += " edtACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_SLIPXM.getColumn(this.dsFS_SLIPXM.rowposition, "ACCT_UNIT"))); //회계단위

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

        		this.fnc_Information(this.stInformation, this.dsFS_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_SLIPXM.rowcount);

        	} else if (sMethodName == "SLIPCREATE01") {

        		this.fnc_Information(this.stInformation, this.dsFS_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "전표자료 생성을 완료 하였습니다.");
        		this.fn_Search();

        	} else if (sMethodName == "SLIPDELETE01") {

        		this.fnc_Information(this.stInformation, this.dsFS_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "전표자료 삭제를 완료 하였습니다.");
        		this.fn_Search();

        	} else if (sMethodName == "SLIPCREATE02") {

        		this.fnc_Information(this.stInformation, this.dsFS_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "상각전표 처리를 완료 하였습니다.");
        		this.fn_Search();

        	} else if (sMethodName == "SLIPDELETE02") {

        		this.fnc_Information(this.stInformation, this.dsFS_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "상각전표 취소를 완료 하였습니다.");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0"; 	   //회계단위(조회)
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  전표 삭제 여부 체크!  |
         +------------------------*/
        this.fn_SlipBeforeCheck = function (obj,e) {

        	var sSlipNumb = this.fnc_Trim(this.dsFS_SLIPXM.getColumn(this.dsFS_SLIPXM.rowposition, "SLIP_NUMB"));
        	
        	if (obj.name == "btnSlipCreate01") {
        		
        		if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {

        			return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_SLIPXM, 0, this.mskSHRSTDS_YMTH, "");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_SLIPXM, 0, this.cmbSHRACCT_UNIT, "");

        		}

        		if (this.dsFS_SLIPXM.getRowCount() > 0) {

        			this.fnc_Message("TMM125", "이미 전표자료 생성이 완료되었습니다.\n\n전표자료 생성이 불가합니다.!");
        			return;

        		}

        		this.fn_SlipCreate01();

        	} else if (obj.name == "btnSlipDelete01") {

        		// 전표자료 삭제(obj.id = btnSlipDelete01)
        		if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {

        			return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_SLIPXM, 0, this.mskSHRSTDS_YMTH, "");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_SLIPXM, 0, this.cmbSHRACCT_UNIT, "");

        		}

        		if (this.dsFS_SLIPXM.getRowCount() < 1) {

        			this.fnc_Message("TMM125", "삭제할 전표자료가 없습니다.!");
        			return;

        		}

        		if (this.fnc_Length(sSlipNumb) > 0) {

        			this.fnc_Message("TMM125", "이미 상각전표 생성이 완료되었습니다.\n\n전표자료 삭제가 불가합니다.!");
        			return;

        		}

        		if (!this.fnc_Message("TMM140", "전표자료를 삭제 하시겠습니까")) return;

        		this.fn_SlipDelete01();

        	} else if (obj.name == "btnSlipCreate02") {

        		// 상각전표 생성(obj.id = btnSlipCreate02)
        		if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {

        			return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_SLIPXM, 0, this.mskSHRSTDS_YMTH, "");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_SLIPXM, 0, this.cmbSHRACCT_UNIT, "");

        		}

        		if (this.dsFS_SLIPXM.getRowCount() < 1) {

        			this.fnc_Message("TMM125", "전표자료 없습니다.\n\n상각전표 생성이 불가합니다.!");
        			return;

        		}

        		if (this.fnc_Length(sSlipNumb) > 0) {

        			this.fnc_Message("TMM125", "이미 상각전표 생성이 완료되었습니다.\n\n상각전표 전표 생성이 불가합니다.!");
        			return;

        		}
        		
        		for(var irow = 0  ; irow < this.dsFS_SLIPXM.getRowCount() ; irow++ ) {
        			var sCSTC_CODE = this.fnc_Trim(this.dsFS_SLIPXM.getColumn(irow, "CSTC_CODE"));
        		
        		if (this.fnc_Length(sCSTC_CODE) == 0) {

        			this.fnc_Message("TMM125", "코스트코드값이 존재하지 않는 데이터가 존재합니다. 부서코드에 해당하는 코스트코드 데이터를 먼저 생성해주세요" + irow);
        			return;

        		}
        		}
        		

        		this.fn_SlipCreate02();

        	} else if (obj.name == "btnSlipDelete02") {

        		// 상각전표 삭제(obj.id = btnSlipDelete02)
        		if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {

        			return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_SLIPXM, 0, this.mskSHRSTDS_YMTH, "");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_SLIPXM, 0, this.cmbSHRACCT_UNIT, "");

        		}

        		if (this.dsFS_SLIPXM.getRowCount() < 1) {

        			this.fnc_Message("TMM125", "전표자료 없습니다.\n\n상각전표 삭제가 불가합니다.!");
        			return;

        		}

        		if (this.fnc_Length(sSlipNumb) < 1) {

        			this.fnc_Message("TMM125", "이미 상각전표 생성이 완료되지 않았습니다.\n\n상각전표 전표 삭제가 불가합니다.!");
        			return;

        		}

        		this.fn_SlipDelete02();

        	}

        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------+
         |  전표자료 생성!!  |
         +-------------------*/
        this.fn_SlipCreate01 = function () {

        	var sMethodName = "SLIPCREATE01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_SLIPXM=dsFS_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_SLIPXM.setFocus(); 

        }

        /*------------------+
         |  전표자료 삭제!!  |
         +-------------------*/
        this.fn_SlipDelete01 = function () {

        	var sMethodName = "SLIPDELETE01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_SLIPXM=dsFS_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_SLIPXM.setFocus();

        }

        /*-----------------------+
         |  감가상각 전표 생성!!  |
         +-----------------------*/
        this.fn_SlipCreate02 = function () {

        	var sMethodName = "SLIPCREATE02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_SLIPXM=dsFS_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_SLIPXM.setFocus();

        }

        /*-----------------------+
         |  감가상각 전표 삭제!!  |
         +-----------------------*/
        this.fn_SlipDelete02 = function () {

        	var sMethodName = "SLIPDELETE02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_SLIPXM=dsFS_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_SLIPXM.setFocus();

        }

        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {

        	// 전표번호 없을때 리턴처리
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_SLIPXM.getColumn(e.row, "SLIP_NUMB"))) < 1) return;

        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdFS_SLIPXM, "SLIP_NUMB") == e.cell) {

        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_SLIPXM.getColumn(e.row, "SLIP_NUMB"));
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "REV", this.sUSERLAVEL);

        	}

        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_SLIPXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.Div0.btnSlipCreate01.addEventHandler("onclick", this.fn_SlipBeforeCheck, this);
            this.Div0.btnSlipDelete01.addEventHandler("onclick", this.fn_SlipBeforeCheck, this);
            this.Div0.btnSlipCreate02.addEventHandler("onclick", this.fn_SlipBeforeCheck, this);
            this.Div0.btnSlipDelete02.addEventHandler("onclick", this.fn_SlipBeforeCheck, this);
            this.mskSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);

        };

        this.loadIncludeScript("FSMD0010P01.xfdl");

       
    };
}
)();
