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
                this.set_name("YEAA0090_2015");
                this.set_titletext("연말정산전산매체(2015)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1035,715);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYEA_COMP_MED1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SEND_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRESENTER_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HOMETAX_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TAXOFFIC_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_OFFICE_TEL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_COMP_MED2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_TAXOFFIC_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_YEPROC_CNT\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFWORK_CNT\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM083\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM084\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM085\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_COMP_MED3", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM083\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM084\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM085\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM092\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM093\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM094\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_COMP_MEDI", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_REC_DATA\" size=\"4000\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stTITLE1", "absolute", "0", "4", null, "21", "863", null, this);
            obj.set_taborder("0");
            obj.set_text("제출자 레코드");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_COMP_MED1", "absolute", "0", "25", null, "75", "0", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsYEA_COMP_MED1");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"95\"/><Column size=\"79\"/><Column size=\"103\"/><Column size=\"106\"/><Column size=\"174\"/><Column size=\"153\"/><Column size=\"80\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"세무서\"/><Cell col=\"1\" displaytype=\"text\" text=\"제출일\"/><Cell col=\"2\" displaytype=\"text\" text=\"제출자구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"홈택스ID\"/><Cell col=\"4\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"법인명\"/><Cell col=\"6\" displaytype=\"text\" text=\"담당자부서\"/><Cell col=\"7\" displaytype=\"text\" text=\"담당자성명\"/><Cell col=\"8\" displaytype=\"text\" text=\"담당자전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_TAXOFFIC_NM\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:left\" text=\"bind:YEA_SEND_YMD\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_PRESENTER_NM\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_HOMETAX_ID\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_BIZ_NO\" mask=\"###-##-#####\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_BRANCH_NM\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_DEPT_NM\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_EMP_NM\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_OFFICE_TEL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "0", "104", null, "21", "863", null, this);
            obj.set_taborder("2");
            obj.set_text("원천징수 의무자별 집계");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "0", "228", null, "21", "863", null, this);
            obj.set_taborder("4");
            obj.set_text("주(현)근무처 레코드");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_COMP_MED2", "absolute", "0", "125", null, "99", "0", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("5");
            obj.set_binddataset("dsYEA_COMP_MED2");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"125\"/><Column size=\"79\"/><Column size=\"96\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"법인명\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"대표자\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"법인등록번호\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"주근무처수\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"종근무처수\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"총급여총계\"/><Cell col=\"7\" colspan=\"4\" displaytype=\"text\" text=\"결정세액총계\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_BIZ_NO\" mask=\"###-##-#####\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left\" text=\"bind:YEA_BRANCH_NM\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_CORP_MASTER\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_CORP_NO\" mask=\"######-#######\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_YEPROC_CNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_BFWORK_CNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM001\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM083\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM084\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM085\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_SUM001\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_COMP_MED3", "absolute", "0", "249", null, null, "0", "0", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("6");
            obj.set_binddataset("dsYEA_COMP_MED3");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"82\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사번\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"총급여\"/><Cell col=\"3\" colspan=\"4\" displaytype=\"text\" text=\"결정세액\"/><Cell col=\"7\" colspan=\"4\" displaytype=\"text\" text=\"차감징수세액\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"계\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_EMP_NO\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center\" text=\"bind:YEA_EMP_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM001\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM083\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM084\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM085\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_SUM001\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM092\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM093\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_NUM094\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right\" text=\"bind:YEA_PRC_SUM002\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right middle;\" expr=\"expr:comp.parent.lookupFunc('Count').call('YEA_EMP_NM') + '건'\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM001')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM083')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM084')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM085')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_SUM001')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM092')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM093')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_NUM094')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('YEA_PRC_SUM002')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "546", "0", "80", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "546", "100", "80", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "546", "224", "80", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1035, 715, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연말정산전산매체(2015)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("YEAA0090_2015.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0090_2015.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0090_2015.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0060 개인자료등록확인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "YEAA0090_2015"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   = "";			//파일명
        this.sFILE_PATH   = "";			//파일경로

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

        	this.fnc_DatasetClear("dsYEA_COMP_MED1,dsYEA_COMP_MED2,dsYEA_COMP_MED3,dsYEA_COMP_MEDI");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsYEA_COMP_MED1=dsYEA_COMP_MED1 dsYEA_COMP_MED2=dsYEA_COMP_MED2 dsYEA_COMP_MED3=dsYEA_COMP_MED3 dsYEA_COMP_MEDI=dsYEA_COMP_MEDI";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_COMP_MED1.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
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
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_PAYDTL,dsYEA_YEPROC", this);
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
        	if (this.fnc_Length(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)) != 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "정산년도", this.parent.medSHRYEA_STD_YY);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지점코드", this.parent.cmbSHRYEA_BRANCH_CD);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "제출일", this.parent.calSHRYEA_SEND_YMD);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " edtSHRYEA_EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(application.GBL_USERID)); //사원번호
        		sReturnString += " medSHRYEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)); //정산년도
        		sReturnString += " cmbSHRYEA_BRANCH_CD=" + this.fnc_Quote(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)); //지점코드
        		sReturnString += " calSHRYEA_SEND_YMD=" + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)); //제출일

        	}else if (sKind == 'SAVE00') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " edtSHRYEA_EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(application.GBL_USERID)); //사원번호
        		sReturnString += " medSHRYEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.parent.medSHRYEA_STD_YY.value)); //정산년도
        		sReturnString += " cmbSHRYEA_BRANCH_CD=" + this.fnc_Quote(this.fnc_Trim(this.parent.cmbSHRYEA_BRANCH_CD.value)); //지점코드
        		sReturnString += " calSHRYEA_SEND_YMD=" + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRYEA_SEND_YMD.value)); //제출일
        		sReturnString += " sYEA_BIZ_NO=" 	 + this.fnc_Quote(this.fnc_Trim(this.dsYEA_COMP_MED1.getColumn(0, "YEA_BIZ_NO"))); //사업자번호
        		
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
        		//this.fnc_Message("TMM018", this.dsYEA_COMP_MED3.getCaseCount("dataset.getRowLevel(currow)==0"));
        	}else if (sMethodName == 'SAVE00') {
        		trace("this.sFILE_NAME : "+this.sFILE_NAME+" this.sFILE_PATH: "+this.sFILE_PATH);
        		this.fn_ExcelFileDown();
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------------+
         |  전산매체 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {

        	var sPath    = this.sFILE_PATH;   //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        this.btnFileCreate_OnClick = function (obj,e) {

        	// 파일생성 전처리가 false 이면 다음처리를 하지않는다.
        	if (!this.PreCreateFile()) return;

        	// 파일생성 처리를 한다.
        	this.ComCreateFile();
        }

        // 파일생성 전처리 메소드
        this.PreCreateFile = function () {

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_COMP_MED3.rowcount < 1) {
        		// 전산매체 신고할 연말정산 내역이 없습니다.
        		this.fnc_Alert("전산매체 신고할 [연말정산] 내역이 없습니다."); 
        		return false;
        	}

        	// 처리 하시겠습니까? 메시지 뿌리기
        	if (!this.fnc_Confirm("처리하시겠습니까?")) return false;
        	
        	return true;
        }

        
        // 파일생성
        this.ComCreateFile = function () {

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("YEAA0090_2015.xfdl");

       
    };
}
)();
