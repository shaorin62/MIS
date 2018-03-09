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
                this.set_name("HRMD0010");
                this.set_titletext("증명서신청");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">HRM0001</Col><Col id=\"DSNAME\">dsSTDS_DATE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_DEPTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"합계\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"이사장\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"부이사장\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"상무\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"특급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제1급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제2급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제3급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제4급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제5급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제6급\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"기능직\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"합계_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"이사장_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"부이사장_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"상무_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"특급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제1급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제2급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제3급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제4급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제5급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"제6급_\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"기능직_\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("정원대비현원현황");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("인사관리>정원대비현원현황");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("45");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("46");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "74", "22", null, null, this);
            obj.set_text("정원책정일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_DEPTXM", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_DEPTXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("44");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"51\"/><Column size=\"38\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"20\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" displaytype=\"text\" text=\"구분\"/><Cell col=\"3\" style=\"background: ;\" text=\"계\"/><Cell col=\"4\" style=\"background: ;\" text=\"이사장\"/><Cell col=\"5\" displaytype=\"text\" text=\"부이사장\"/><Cell col=\"6\" displaytype=\"text\" text=\"상무\"/><Cell col=\"7\" displaytype=\"text\" text=\"특급\"/><Cell col=\"8\" displaytype=\"text\" text=\"1급\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" text=\"2급\"/><Cell col=\"10\" text=\"3급\"/><Cell col=\"11\" style=\"background: ;\" text=\"4급\"/><Cell col=\"12\" text=\"5급\"/><Cell col=\"13\" displaytype=\"text\" style=\"background: ;\" text=\"6급\"/><Cell col=\"14\" text=\"기능직\"/></Band><Band id=\"body\"><Cell text=\"bind:SECT_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"정원\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"현원\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"2\" displaytype=\"text\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"과부족\"/><Cell row=\"2\" col=\"3\" displaytype=\"text\" edittype=\"none\"/><Cell row=\"2\" col=\"4\" displaytype=\"text\" edittype=\"none\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell row=\"2\" col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\"/><Cell row=\"2\" col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\"/><Cell row=\"2\" col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\"/><Cell row=\"2\" col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\"/><Cell row=\"2\" col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\"/><Cell row=\"2\" col=\"10\" displaytype=\"text\" edittype=\"none\"/><Cell row=\"2\" col=\"11\" displaytype=\"text\" edittype=\"none\"/><Cell row=\"2\" col=\"12\" displaytype=\"text\" edittype=\"none\"/><Cell row=\"2\" col=\"13\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\"/><Cell row=\"2\" col=\"14\" displaytype=\"text\" edittype=\"none\"/></Band><Band id=\"summary\"><Cell rowspan=\"3\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"정원\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"현원\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" text=\"과부족\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "217", "68", "47", "22", null, null, this);
            obj.set_text("기준일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_DATE", "absolute", "95", "68", "112", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("search");
            obj.set_taborder("41");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Calendar("calSHRDRFT_STDT", "absolute", "269", "68", "103", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증명서신청");
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
        this.addIncludeScript("HRMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMD0010.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		정원대비현원현황를 관리한다.
         * @category	 	인사관리/정원대비현원현황
         * @author	   	고민주
         * @cdate	  		2016.08.01
         * @version 1.0		최초 작성
         * HRMD0010.xml - <Created by Code Template generator>
         *
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMD0010"; 

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.calSHRDRFT_STDT.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.cmbSHRSTDS_DATE.setFocus();
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
        	this.fnc_DatasetClear('dsTM_DEPTXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_DEPTXM=dsTM_DEPTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_DEPTXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsTM_DEPTXM");
        	this.grdTM_DEPTXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_DEPTXM", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_DEPTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "정원책정일", this.cmbSHRSTDS_DATE);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDRFT_STDT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRDRFT_STDT);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_DATE.value)); 
        		sReturnString += " PRES_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDRFT_STDT.value)); 
        			
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "GetUserComboCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSTDS_DATE,dsSTDS_DATE,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDRFT_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HRMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
