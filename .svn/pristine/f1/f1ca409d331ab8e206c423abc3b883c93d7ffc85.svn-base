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
                this.set_name("FSMB0010P02");
                this.set_titletext("품목정보조회 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,760,545);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASCL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LARG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_ATNM\" type=\"STRING\" size=\"256\"/><Column id=\"ASST_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_MTNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRID_DPCT\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_CMPT\" type=\"STRING\" size=\"256\"/><Column id=\"ASCL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_ACT1\" type=\"STRING\" size=\"256\"/><Column id=\"ASST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_METH\" type=\"STRING\" size=\"256\"/><Column id=\"DPCT_CYCL\" type=\"STRING\" size=\"256\"/><Column id=\"PRID_DPCT\" type=\"STRING\" size=\"256\"/><Column id=\"ASST_DTLX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUBCODE\" type=\"STRING\" size=\"255\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "43", "15", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "70", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "15", "93", null, null, "15", "44", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsFS_ASSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"45\"/><Column size=\"132\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"78\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"1\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align: center middle;\" text=\"No\"/><Cell col=\"1\" text=\"대분류명\"/><Cell col=\"2\" text=\"중분류명\"/><Cell col=\"3\" text=\"소분류명\"/><Cell col=\"4\" text=\"자산구분명\"/><Cell col=\"5\" text=\"상각방법명\"/><Cell col=\"6\" text=\"내용년수\"/><Cell col=\"7\" text=\"상각율\"/><Cell col=\"8\" text=\"상각주기명\"/><Cell col=\"9\" text=\"소분류코드\"/><Cell col=\"10\" text=\"중분류코드\"/><Cell col=\"11\" text=\"상각완료기준\"/><Cell col=\"12\" text=\"자산분류코드\"/><Cell col=\"13\" text=\"계정과목코드\"/><Cell col=\"14\" text=\"자산구분코드\"/><Cell col=\"15\" text=\"상각방법코드\"/><Cell col=\"16\" text=\"상각주기코드\"/><Cell col=\"17\" text=\"세무년수\"/><Cell col=\"18\" text=\"자산세부\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:center;\" expr=\"currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ASCL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MIDL_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SMAL_NAME\"/><Cell col=\"4\" text=\"bind:ASST_GBNM\"/><Cell col=\"5\" text=\"bind:DPCT_MTNM\"/><Cell col=\"6\" text=\"bind:PRID_DPCT\"/><Cell col=\"7\" text=\"bind:DPCT_RATE\"/><Cell col=\"8\" text=\"bind:DPCT_CLNM\"/><Cell col=\"9\" text=\"bind:SMAL_CODE\"/><Cell col=\"10\" text=\"bind:MIDL_CODE\"/><Cell col=\"11\" text=\"bind:DPCT_CMPT\"/><Cell col=\"12\" text=\"bind:ASCL_CODE\"/><Cell col=\"13\" text=\"bind:DPCT_ACT1\"/><Cell col=\"14\" text=\"bind:ASST_GUBN\"/><Cell col=\"15\" text=\"bind:DPCT_METH\"/><Cell col=\"16\" text=\"bind:DPCT_CYCL\"/><Cell col=\"17\" text=\"bind:PRID_DPCT\"/><Cell col=\"18\" text=\"bind:ASST_DTLX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "35", "26", "63", "21", null, null, this);
            obj.set_text("대분류");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "233", "26", "439", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearch2", "absolute", "91", "26", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsCombo2");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.style.set_background("#ffffffb3");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "745", "0", "15", "461", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "680", "501", "64", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "680", "533", "64", "12", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "26", "52", "21", "26", null, this);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "395", "0", "64", "15", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "87", "216", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "58", "56", "35", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel00", "absolute", null, "68", "50", "21", "15", null, this);
            obj.set_taborder("30");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("31");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 760, 545, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품목정보조회 팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FSMB0010P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0010P02.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0010P02 품목정보조회 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.29		권미영		Initial Created.
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
        this.sCLSF_NAME		= this.parent.sCLSF_NAME;	//조회 Parameter
        this.sPACKAGENAME 	= "FSMB0010P02"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION = ''; //Form의 Title 정보
        	this.sFORMLOCATION = ''; //Form의 Location 정보
        	this.sUSERLAVEL = ''; //Form의 사용  Level

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
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_GridSetting(this);
        	this.fn_LoadMajorKey(); //품목 대분류 조회
        	
        	this.edtCLSF_NAME.set_value(this.sCLSF_NAME);
        	this.fn_Search(); 

        }

        /*-------------------------+
         |   품목 대분류 조회      |
         +-------------------------*/
        this.fn_LoadMajorKey = function () {

        	this.fnc_DatasetClear("dsCombo2");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsCombo2=dsCombo2";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------------------+
         |  화면 ID에 다른 Form Setting 자료 조회  |
         +-----------------------------------------*/
        this.fn_Search = function (obj) {

        	this.fnc_DatasetClear("dsFS_ASSTXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASSTXM=dsFS_ASSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();

        }

        /*-----------------------------------------+
         |  대분류 변경시 자동조회!  |
         +------------------------------------------*/
        this.cmbSearch2_onitemchanged = function (obj,e) {

        	this.fn_Search();
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSearch2.value)); 
        		sReturnString += " CLSF_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtCLSF_NAME.value)); 

        	} else if (sKind == 'SEARCH01') {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME); 
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

        		this.fnc_Information(this.stInformation, this.dsFS_ASSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == 'SEARCH01') {
        	
        		this.cmbSearch2.set_index(0);

        	} 

        }

        /*---------------------------------+
         |  소분류 검색 조회 실행 !       |
         +----------------------------------*/
        this.edtCLSF_NAME_onkeydown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Search();

        }

        /*-----------------------------------------------+
         |  그리드에서 더블 클릭 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTA_SLIPXM_OnCellDblClick = function (obj,e) {

        	// 배열에 해당 값을 반환 하고 종료
        	this.fn_Confirm();

        }

        /*-----------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTA_SLIPXM_OnKeyDown = function (obj,e) {

        	// 엔터키 입력 시 배열에 해당 값을 반환 하고 종료
        	if (e.keycode == 13) this.fn_Confirm();

        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	
        	if (e.keycode == 27) this.fn_Cancel();
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*--------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function () {
        	
        	var iColumnCount = this.dsFS_ASSTXM.getColCount();
        	var arrReturn = new Array(iColumnCount);
        	var iRow = this.dsFS_ASSTXM.rowposition;

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "ASCL_NAME"))) > 0) {

        		// 반환 할 자료(Array) 만들기
        		arrReturn[10] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "SMAL_CODE")); //소분류코드
        		arrReturn[0] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "SMAL_NAME")); //소분류명
        		arrReturn[3] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "ASCL_NAME")); //자산분류명
        		arrReturn[16] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "DPCT_METH")); //상각방법코드
        		arrReturn[12] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "DPCT_CMPT")); //상각완료기준
        		arrReturn[7] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "PRID_DPCT")); //내용년수
        		arrReturn[8] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "DPCT_RATE")); //상각율
        		arrReturn[17] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "DPCT_CYCL")); //상각주기코드
        		arrReturn[19] 	= this.fnc_Trim(this.dsFS_ASSTXM.getColumn(iRow, "ASST_DTLX")); //자산세부유형
        		this.fnc_PopupClose(arrReturn);

        	}

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_OnCellDblClick, this);
            this.grdTA_SLIPXM.addEventHandler("onkeydown", this.grdTA_SLIPXM_OnKeyDown, this);
            this.edtCLSF_NAME.addEventHandler("onkeydown", this.edtCLSF_NAME_onkeydown, this);
            this.cmbSearch2.addEventHandler("onitemchanged", this.cmbSearch2_onitemchanged, this);
            this.btnSearch.addEventHandler("onclick", this.fn_Search, this);
            this.btnToExcel00.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("FSMB0010P02.xfdl");

       
    };
}
)();
