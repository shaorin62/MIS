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
                this.set_name("HRML0010");
                this.set_titletext("근로(연봉)계약서확인");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_CNTRXA", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_YMTH\" type=\"STRING\" size=\"256\"/><Column id=\"CNTD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUNO_RGST\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BEDE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"BSLY_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"OVER_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"MTPY_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBNR_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"PBN1_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBN2_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBN3_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"YPAY_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"RCGN_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"CNCF_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNCF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("12");
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
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("근로(연봉)계약서확인");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("인사관리 > 계약관리 > 연봉계약서확인");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRDEPT_CODE", "absolute", "206", "71", "68", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "402", "71", "70", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "453", "61", "40", "41", null, null, this);
            obj.set_taborder("18");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("20");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_CNTRXA", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("25");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("titletext").set("근로(연봉)계약서확인");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsHR_CNTRXA");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"계약년월\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"직위\"/><Cell col=\"8\" text=\"주민등록번호\"/><Cell col=\"9\" text=\"입사일\"/><Cell col=\"10\" text=\"계약시작일\"/><Cell col=\"11\" text=\"계약종료일\"/><Cell col=\"12\" text=\"기본급\"/><Cell col=\"13\" text=\"시간외수당\"/><Cell col=\"14\" text=\"월지급액\"/><Cell col=\"15\" text=\"수습급여종료일\"/><Cell col=\"16\" text=\"수습1개월월봉\"/><Cell col=\"17\" text=\"수습2개월월봉\"/><Cell col=\"18\" text=\"수습3개월월봉\"/><Cell col=\"19\" text=\"결정연봉액\"/><Cell col=\"20\" text=\"계약서\"/><Cell col=\"21\" text=\"계약서확인\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTR_YMTH\" mask=\"####.##\"/><Cell col=\"1\" text=\"bind:CNTD_CODE\"/><Cell col=\"2\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" text=\"bind:DURS_NAME\"/><Cell col=\"7\" text=\"bind:OPOS_NAME\"/><Cell col=\"8\" text=\"bind:JUNO_RGST\" mask=\"######-#{######}\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:EMPL_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" text=\"bind:CNTR_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" text=\"bind:CNTR_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSLY_AMOT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OVER_AMOT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MTPY_AMOT\"/><Cell col=\"15\" displaytype=\"date\" editfilter=\"number\" style=\"align: ;\" text=\"bind:PBNR_ENDD\" editlimit=\"8\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PBN1_AMOT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PBN2_AMOT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PBN3_AMOT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YPAY_AMOT\"/><Cell col=\"20\" displaytype=\"button\" edittype=\"none\" text=\"계약서\" tooltiptext=\"계약서\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:CNCF_YSNO\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRDRFT_YEAR", "absolute", "97", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_mask("####");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "248", "71", "80", "21", null, null, this);
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "330", "71", "21", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "353", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSHREMPL_NUMB", "absolute", "482", "71", "68", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "678", "71", "70", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "524", "71", "80", "21", null, null, this);
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "606", "71", "21", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "629", "71", "100", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("근로(연봉)계약서확인");

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
        this.addIncludeScript("HRML0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRML0030.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		근로(연봉)계약서를 확인한다.
         * @category	 	인사관리/근로(연봉)계약서확인
         * @author	   	이준영
         * @cdate	  		2016.09.06
         * @version 1.0		최초 작성
         * HRMK0030.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFFTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRML0030"; //해당 Form에서 사용 할 Package 명
        this.sKeyValue    = new Array();

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
        	this.medSHRDRFT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);

        	switch(this.sUSERLAVEL) {
        	
        		case '1':	//관리자
        			this.imgHelpSHRDEPT_CODE.set_enable(true);
        			this.edtSHRDEPT_NAME.set_enable(true);
        			this.imgHelpSHREMPL_NUMB.set_enable(true);
        			this.edtSHREMPL_NAME.set_enable(true);
        			
        			break;
        		
        		case "2" :	//부문   					
        			break;
        		
        		case "2" :	//부실   					
        			break;
        		
        		case "4" :	//부서
        			break;	

        		case '5':  //개인
        			this.medSHRDRFT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4))

        			if (application.GBL_EMPLNO.length > 0) {
        				this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        				this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);		
        				this.fn_Search();
        			} else {
        				this.edtSHREMPL_NUMB.set_value('');
        				this.edtSHREMPL_NAME.set_value('');
        			}

        			break;
        	}
        	
        	this.sKeyValue[0] = "";
        	this.sKeyValue[1] = "";
        	
        	//검색조건 포커스
        	this.medSHRDRFT_YEAR.setFocus();
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
        	this.fnc_DatasetClear('dsHR_CNTRXA');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_CNTRXA=dsHR_CNTRXA";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CNTRXA.setFocus();
        	
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
        	
        	this.fnc_DataSetCancel("dsHR_CNTRXA");
        	this.grdHR_CNTRXA.setFocus();
        	
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
        	
        	if (this.dsHR_CNTRXA.rowposition == -1) {
        		
        		this.fnc_Message("TMM031");
        		
        	} else {
        		
        		var sPbnrEndd = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "PBNR_ENDD");
        		var sEmplNumb = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "EMPL_NUMB");
        		var sCntrYmth = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "CNTR_YMTH");
        				
        		this.fn_popupOpen(sPbnrEndd, sEmplNumb, sCntrYmth, "PRINT");
        		
        	}

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CNTRXA", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_CNTRXA")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.medSHRDRFT_YEAR.value)) > 0 && this.fnc_Length(this.fnc_Trim(this.medSHRDRFT_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM125", "정확한 기준년도를 입력하세요", this.medSHRDRFT_YEAR);	
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
        		sReturnString += " DRFT_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.medSHRDRFT_YEAR.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));			
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
        		
        		this.fnc_Information(this.stInformation, this.dsHR_CNTRXA.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_CNTRXA.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if (this.sKeyValue[0] != "" && this.sKeyValue[1] != "") {
        			var irow = this.dsHR_CNTRXA.findRowExpr("EMPL_NUMB=='" + this.sKeyValue[0] + "'&&CNTR_YMTH=='" + this.sKeyValue[1] + "'");
        			this.sKeyValue[0] = "";
        			this.sKeyValue[1] = "";
        			if(irow < 0) irow = 0;
        			this.dsHR_CNTRXA.set_rowposition(irow);
        		}
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        }	
        this.grd_oncellclick = function(obj,e)
        {
        	if ( obj.name == "grdHR_CNTRXA" ) {
        		if ( e.cell == 20 ) {
        			var sPbnrEndd = this.dsHR_CNTRXA.getColumn(e.row, "PBNR_ENDD");
        			var sEmplNumb = this.dsHR_CNTRXA.getColumn(e.row, "EMPL_NUMB");
        			var sCntrYmth = this.dsHR_CNTRXA.getColumn(e.row, "CNTR_YMTH");
        			
        			this.fn_popupOpen(sPbnrEndd, sEmplNumb, sCntrYmth, "VIEW");
        		}
        	}
        }

        /*--------------------------------+
         |  계약서 팝업 열기  |
         +--------------------------------*/
        this.fn_popupOpen = function(sPbnrEndd,sEmplNumb,sCntrYmth,sMode) {

        	//수습여부 	
        	var sPbnrYsno = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "PBNR_YSNO");    /* 수습여부 */
        		
        	var sName 		= "HRML0030P01";
        	var sFormURL 	= "hrm::HRML0030P01.xfdl";
        	var sOpenStyle  = "modeless=false";           			//Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           			//Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  			//원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 			//원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";               			//현재 반응 없음
        		sOpenStyle += ",height=800";              			//현재 반응 없음
        		sOpenStyle += ",title=true";              			//Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=근로(연봉)계약서";   	//Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            			//Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          			//Form Title Bar Visible 여부
        		
        	var objArgumentList = {
        		sEMPL_NUMB:sEmplNumb,
        		sCNTR_YMTH:sCntrYmth,
        		sPBNR_YSNO:sPbnrYsno,
        		sMODE:sMode
        	};
        	
        	if (sMode == "VIEW") {
        		this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        	} else {
        		this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupDone");
        	}
        	
        }

        
        /*--------------------------------+
         |  계약서 팝업 후 처리  |
         +--------------------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
        	
        	if (sPopupId == "HRML0030P01") {
        		
        		this.sKeyValue[0] = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "EMPL_NUMB");
        		this.sKeyValue[1] = this.dsHR_CNTRXA.getColumn(this.dsHR_CNTRXA.rowposition, "CNTR_YMTH");
        		
        		this.fn_Search(); //조회
        	}
        	
        }

        /*--------------------------------+
         |  인쇄  팝업 후 처리  |
         +--------------------------------*/
        this.fn_popupDone = function(sPopupId,Variant) {
        	//별도 처리 없음. 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_CNTRXA.addEventHandler("oncolumnchanged", this.dsHR_CNTRXA_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRDEPT_CODE.addEventHandler("onclick", this.Static31_onclick, this);
            this.grdHR_CNTRXA.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.medSHRDRFT_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.staSHREMPL_NUMB.addEventHandler("onclick", this.Static31_onclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRML0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
