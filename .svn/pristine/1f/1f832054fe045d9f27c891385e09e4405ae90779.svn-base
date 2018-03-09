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
                this.set_titletext("근로(연봉)계약대상자등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTR_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CNTD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"JUNO_RGST\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EMPL_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CNTR_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTR_ENDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MTPY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"PBNR_ENDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN1_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN2_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN3_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YPAY_AMOT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"RCGN_YSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CNCF_YSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CNCF_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CNTD_CODE</Col><Col id=\"DSNAME\">dsSHRPYTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">CNTD_CODE</Col><Col id=\"DSNAME\">dsCNTD_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_text("근로(연봉)계약대상자등록 ");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("인사관리 > 계약관리 > 연봉계약서대상자선정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("18");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
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

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("5");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"계약년월\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"계약구분\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"직위\"/><Cell col=\"8\" text=\"주민등록번호\"/><Cell col=\"9\" text=\"입사일\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_essential\" text=\"계약시작일\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"계약종료일\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_essential\" text=\"기본급\"/><Cell col=\"13\" text=\"시간외근무수당\"/><Cell col=\"14\" text=\"월지급액\"/><Cell col=\"15\" displaytype=\"normal\" text=\"수습여부\"/><Cell col=\"16\" text=\"수습급여종료일\"/><Cell col=\"17\" text=\"수습1개월월봉\"/><Cell col=\"18\" text=\"수습2개월월봉\"/><Cell col=\"19\" text=\"수습3개월월봉\"/><Cell col=\"20\" text=\"결정연봉액\"/><Cell col=\"21\" cssclass=\"Cellgrd_WF_edit\" text=\"승인\"/><Cell col=\"22\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell col=\"23\" cssclass=\"Cellgrd_WF_edit\" text=\"계약확인\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" editfilter=\"number\" text=\"bind:CNTR_YMTH\" mask=\"####.##\" editlimit=\"6\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CNTD_CODE\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" text=\"bind:DURS_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:OPOS_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" text=\"bind:JUNO_RGST\" mask=\"######-#{######}\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" editfilter=\"none\" text=\"bind:EMPL_DATE\" editlimit=\"-1\" editlengthunit=\"utf16\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" editfilter=\"none\" text=\"bind:CNTR_BEDE\" editlimit=\"-1\" editlengthunit=\"utf16\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" editfilter=\"number\" text=\"bind:CNTR_ENDD\" editlimit=\"8\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSLY_AMOT\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:OVER_AMOT\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTPY_AMOT\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:PBNR_YSNO\"/><Cell col=\"16\" displaytype=\"date\" edittype=\"none\" editfilter=\"number\" text=\"bind:PBNR_ENDD\" expr=\"expr:(PBNR_YSNO=='1')?PBNR_ENDD:''\" editlimit=\"8\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PBN1_AMOT\" expr=\"expr:(PBNR_YSNO=='1')?PBN1_AMOT:''\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PBN2_AMOT\" expr=\"expr:(PBNR_YSNO=='1')?PBN2_AMOT:''\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PBN3_AMOT\" expr=\"expr:(PBNR_YSNO=='1')?PBN3_AMOT:''\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"20\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YPAY_AMOT\" editlimit=\"22\" editlengthunit=\"ascii\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:RCGN_YSNO\"/><Cell col=\"22\" edittype=\"text\" text=\"bind:REMK_100X\"/><Cell col=\"23\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNCF_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "317", "21", null, null, this);
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "122", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("엑셀양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "125", "0", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "205", "71", "46", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCNTD_CODE", "absolute", "247", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new MaskEdit("medSHRCNTR_YEAR", "absolute", "97", "71", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 317, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
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
            		p.set_titletext("근로(연봉)계약대상자등록");

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
        this.addIncludeScript("HRML0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRML0010.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		근로(연봉)계약 대상자를 등록한다.
         * @category	 	인사관리/계약관리
         * @author	   		KD
         * @cdate	  		2016.09.05
         * @version 1.0		최초 작성
         * HRML0010.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTTTFTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRML0010"; //해당 Form에서 사용 할 Package 명
        this.sKeyValue 		= new Array();

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.medSHRCNTR_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	
        	//관리자 화면이라 필요 없어보임.
        	switch (this.sUSERLAVEL) 
          	{
          		case "1" : 	//전체
        		break;
        	
        		case "2" :	//부문   					
        		break;
        		
        		case "3" :	//부실   					
        		break;
        		
        		case "4" :	//부서
        		break;	
        	
        		case "5" :	//개인
        		break;
        			
        		default :
        		break;
          	}
        	
        	//검색조건 포커스
        	this.medSHRCNTR_YEAR.setFocus();
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
        	this.fnc_DatasetClear("dsTR_MONEPL");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_MONEPL.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTR_MONEPL.addRow();
        	this.dsTR_MONEPL.set_rowposition(iRow); 
        	
        	//입력값 초기화 및 포커스 설정
        	this.fn_DataClear(iRow);
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTR_MONEPL.deleteRow(this.dsTR_MONEPL.rowposition);
        	this.grdTR_MONEPL.setFocus();
        	
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
        	if (!this.fn_SaveItemCheck()) return;
        	
        	//계약확인 체크시 계약확인일시 저장해줌
        	if(this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition, "CNCF_YSNO") == 1){
        		this.dsTR_MONEPL.setColumn(this.dsTR_MONEPL.rowposition, "CNCF_DATE", this.fnc_GetServerDateTime("DATE"));
        	}
        	
        	this.sKeyValue[0] = this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition,"CNTR_YMTH");
        	this.sKeyValue[1] = this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition,"CNTD_CODE");
        	this.sKeyValue[2] = this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition,"EMPL_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTR_MONEPL=dsTR_MONEPL:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_MONEPL.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_MONEPL", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTR_MONEPL.getRowCount() < 1) { 
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	if(this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition, "RCGN_YSNO") == 1){
        		this.fnc_Message("TMM107", "승인", "승인");
        		return false;
        	}else if(this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition, "CNCF_YSNO") == 1){
        		this.fnc_Message("TMM107", "계약확인", "계약확인");
        		return false;
        	}
        	
        	var sQuestionText = "(계약년월)성명 : " + this.fnc_Trim( "(" + this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition, "CNTR_YMTH") + ")" + this.dsTR_MONEPL.getColumn(this.dsTR_MONEPL.rowposition, "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		this.fnc_Message("TMM003"); 
        		return false;
        	}

        	for(var i=0; i<this.dsTR_MONEPL.getRowCount(); i++){
        		if(this.fnc_Length(this.fnc_Trim(this.dsTR_MONEPL.getColumn(i, "CNTR_YMTH"))) != 6 || this.IsNull(this.dsTR_MONEPL.getColumn(i, "CNTR_YMTH"))){
        			this.fnc_Message("TMM005", "계약년월", "6");
        			this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_YMTH"));
        			this.grdTR_MONEPL.setFocus();
        			return false;
        		}else if(this.IsNull(this.dsTR_MONEPL.getColumn(i, "CNTD_CODE"))){
        			this.fnc_Message("TMM008", "계약구분");
        			this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTD_CODE"));
        			this.grdTR_MONEPL.setFocus();
        			return false;
        		}else if(this.IsNull(this.dsTR_MONEPL.getColumn(i, "EMPL_NUMB"))){
        			this.fnc_Message("TMM008", "사원번호");
        			this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "EMPL_NUMB"));
        			this.grdTR_MONEPL.setFocus();
        			return false;
        		}else if(this.fnc_Length(this.fnc_Trim(this.dsTR_MONEPL.getColumn(i, "CNTR_ENDD"))) != 8 || this.IsNull(this.dsTR_MONEPL.getColumn(i, "CNTR_ENDD"))){
        			this.fnc_Message("TMM005", "계약종료일", "8");
        			this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_ENDD"));
        			this.grdTR_MONEPL.setFocus();
        			return false;
        		}else if(this.IsNull(this.dsTR_MONEPL.getColumn(i, "BSLY_AMOT"))){
        			this.fnc_Message("TMM008", "기본급");
        			this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "BSLY_AMOT"));
        			this.grdTR_MONEPL.setFocus();
        			return false;
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
        		sReturnString += " CNTD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCNTD_CODE.value)); 
        		sReturnString += " CNTR_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.medSHRCNTR_YEAR.value)); 
        	}else if (sKind == 'SAVE00') {
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {	
        		this.fnc_Information(this.stInformation, this.dsTR_MONEPL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTR_MONEPL.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdTR_MONEPL.setFocus();
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsTR_MONEPL.findRowExpr("CNTR_YMTH =='"+this.sKeyValue[0]+"'&& CNTD_CODE =='"+this.sKeyValue[1]+"'&& EMPL_NUMB =='"+this.sKeyValue[2]+"'");
        			this.sKeyValue[0] = this.sKeyValue[1] = this.sKeyValue[2] = "";
        			
        			if(irow<0) irow = 0;
        			this.dsTR_MONEPL.set_rowposition(irow);
        		}
        	
        	}else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCNTD_CODE,dsSHRPYTY_CODE,0";
        			arrParam[1] = "GRID,grdTR_MONEPL,dsCNTD_CODE,CNTD_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsTR_MONEPL);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	if(this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT){
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_YMTH"), "edittype", "text");		//계약년월
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTD_CODE"), "edittype", "combo");		//계약구분
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "EMPL_NAME"), "edittype", "text");		//성명	
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_BEDE"), "edittype", "date");		//계약시작일
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_ENDD"), "edittype", "date");		//계약종료일
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "BSLY_AMOT"), "edittype", "text");		//기본급
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "RCGN_YSNO"), "edittype", "checkbox");	//승인
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "REMK_100X"), "edittype", "text");		//비고
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNCF_YSNO"), "edittype", "checkbox");	//계약확인	
        	}else{		
        		//수정의 경우, 기본 키(계약년월, 성명)는 수정 불가 / 계약확인 체크되있다면 전체 수정 불가
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_YMTH"), "edittype", "none");		//계약년월
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTD_CODE"), "edittype", "none");		//계약구분
        		this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "EMPL_NAME"), "edittype", "none");		//성명
        						
        		if(this.dsTR_MONEPL.getColumn(obj.rowposition, "CNCF_YSNO") == 1){
        			
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_BEDE"), "edittype", "none");		//계약시작일
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_ENDD"), "edittype", "none");		//계약종료일
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "BSLY_AMOT"), "edittype", "none");		//기본급
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "RCGN_YSNO"), "edittype", "none");		//승인
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "REMK_100X"), "edittype", "none");		//비고
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNCF_YSNO"), "edittype", "none");		//계약확인
        		}else{
        		
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_BEDE"), "edittype", "date");		//계약시작일
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTR_ENDD"), "edittype", "date");		//계약종료일
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "BSLY_AMOT"), "edittype", "text");		//기본급
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "RCGN_YSNO"), "edittype", "checkbox");	//승인
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "REMK_100X"), "edittype", "text");		//비고
        			this.grdTR_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNCF_YSNO"), "edittype", "checkbox");	//계약확인	
        		}
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if (obj.name == "grdTR_MONEPL") {
        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty('body', obj.currentcell, 'text') == "bind:EMPL_NAME"){
        					
        			arrParam[0] = "HRM0002"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTR_MONEPL";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_NAME,DEPT_CODE,DURS_NAME,DURS_CODE,OPOS_NAME,OPOS_CODE,EMPL_DATE,JUNO_RGST,PBNR_YSNO";  
        			arrParam[6] = "0,1,5,3,2,23,22,21,20,28,32,35";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}		
        	}
        }

        /*----------------------------------------+
         |  입력값 초기화 및 포커스 설정      |
         +----------------------------------------*/
        this.fn_DataClear = function(row){
        	
        	//대상자 변경되면 입력값 초기화 해준다.
        	this.dsTR_MONEPL.setColumn(row, "BSLY_AMOT", "");	//기본급
        	this.dsTR_MONEPL.setColumn(row, "RCGN_YSNO", "");	//승인
        	this.dsTR_MONEPL.setColumn(row, "REMK_100X", "");	//비고
        	this.dsTR_MONEPL.setColumn(row, "CNCF_YSNO", "");	//계약확인
        	
        	//입력시 계약년월   : 해당년 3월 기본값으로 제공(사용자 수정 가능)
        	this.dsTR_MONEPL.setColumn(row, "CNTR_YMTH", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4).concat('03'));
        	//입력시 계약시작일 : 해당년 3월 1일을 기본값으로 제공(사용자 수정 가능)
        	this.dsTR_MONEPL.setColumn(row, "CNTR_BEDE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4).concat('0301'));
        	//입력시 계약종료일 : 해당년 기준 다음해 2월 28일 을 기본값으로 제공(사용자 수정 가능)
        	this.dsTR_MONEPL.setColumn(row, "CNTR_ENDD", (nexacro.toNumber(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4))+1).toString().concat('0228'));
        		
        	this.grdTR_MONEPL.setCellPos(this.fnc_GridColumnIndex(this.grdTR_MONEPL, "CNTD_CODE"));
        	this.grdTR_MONEPL.setFocus();
        }

        /*--------------------------------------------+
         |  데이터셋 값 변경 이벤트 				  |
         +--------------------------------------------*/
        this.dsTR_MONEPL_oncolumnchanged = function(obj,e){
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdTR_MONEPL, "YES", e.oldvalue, e.columnid);	
        	}
        	
        	//연봉계산 사용자함수 호출
        	this.fn_CalAmot(obj.rowposition);
        }

        /*--------------------------------------------+
         |  초과근무금액 및 결정연봉 계산			  |
         +--------------------------------------------*/
         this.fn_CalAmot = function (row){
        	//계산 전 해당 ROW 계산되는 값 초기화 하고 진행한다.
        	this.dsTR_MONEPL.setColumn(row, "PBNR_ENDD", "");	//수습급여종료일
        	this.dsTR_MONEPL.setColumn(row, "PBN1_AMOT", "");	//수습1개월월봉
        	this.dsTR_MONEPL.setColumn(row, "PBN2_AMOT", "");	//수습2개월월봉
        	this.dsTR_MONEPL.setColumn(row, "PBN3_AMOT", "");	//수습3개월월봉
        	this.dsTR_MONEPL.setColumn(row, "YPAY_AMOT", "");	//결정연봉액
        	
        	//수습여부에 따른 수습종료일(수습급여종료일) 계산
        	var pbnrYsno = this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "PBNR_YSNO"));					//수습여부
        		
        	//변수 선언
        	var pbnrEndd = "";																			//수습종료일(수습급여종료일)(수습여부, 계약시작일 기준 계산)
        	var cntrBede = this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "CNTR_BEDE"));					//계약시작일
        	var cntrEndd = this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "CNTR_ENDD"));					//계약종료일
        	//var emplDate = this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "EMPL_DATE"));					//입사일자
        	
        	var bslyAmot = nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "BSLY_AMOT")));	//기본급금액
        	var overAmot = nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(row, "OVER_AMOT")));	//초과근무금액
        	
        	var overAmot = 0;	//초과근무금액
        	
        	var pbn1Amot = 0;	//수습1개월월봉
        	var pbn2Amot = 0;	//수습2개월월봉
        	var pbn3Amot = 0;	//수습3개월월봉
        	var ypayAmot = 0;	//결정연봉액
        	
        	/*****************************************************************************************************************************
        	 * 1. 추가근무금액  계산 =  (기본급/209h) * 48h * 150%  															    	 *
        	 *    월 지급액 = 기본급 + 추가근무금액																						 *
        	 ****************************************************************************************************************************/
        	overAmot = nexacro.round(((nexacro.toNumber(bslyAmot) / 209) * 48 * 1.5), -1);
        	
        	this.dsTR_MONEPL.setColumn(row, "OVER_AMOT", overAmot);
        	
        	this.dsTR_MONEPL.setColumn(row, "MTPY_AMOT", nexacro.toNumber(bslyAmot + overAmot));
        	
        	/***********************************************************************************************************************************************
        	 * 2. 수습종료일(수습급여종료일) 계산									  											    	                   *
        	 *    수습여부 체크되있는 경우 수습종료일(수습급여종료일)을 계산해서 적용한다.												                   *
        	 *    계약시작일이 1일의 경우 수습종료일(수습급여종료일) = (계약시작월 + 1) 월의 말일										                   *
        	 *    계약시작일이 1일이 아닐 경우 수습종료일(수습급여종료일) = (계약시작월 + 2) 월의 말일									                   *
        	 *																															                   *
        	 * 3. 결정연봉액 계산(10의자리 반올림으로 계산함) 																			                   *
        	 *																															                   *
        	 * 1) 수습종료일(수습급여종료일)이 있을 경우(수습사원)																	                       *
        	 *  -. 계약시작일이 1일의 경우 결정연봉액 = (시간외근무수당 + 기본급) * (계약종료월 - 수습종료월) + (수습1개월월봉 + 수습2개월월봉)            *
        	 *										  := (시간외근무수당 + 기본급) * 0.9																   *
        	 *   . ※ 계약시작일이 1일의 경우 수습사원은 수습3개월월봉은 없다.(수습 2개월)																   *
        	 *																																			   *
        	 *  -. 계약시작일이 1일이 아닐 경우 결정연봉액 = (시간외근무수당+기본급)*(계약종료월-수습종료월)+(수습1개월월봉+수습2개월월봉+수습3개월월봉)   *
        	 *	 . 수습1개월 월봉 = (시간외근무수당 + 기본급) * 0.9 * 근무일수/해당월수(30고정:9월5일 장현기 차장님 협의)								   *
        	 *	 . ※근무일수 : (계약시작일의 말일-계약시작일) + 1																						   *
        	 *																																			   *
        	 * 2) 수습종료일(수습급여종료일)이 없을 경우(수습사원X)																		                   *
        	 *  -. 계약시작일이 1일의 경우 결정연봉액 = (시간외근무수당 + 기본급) * (계약종료월 - 계약시작월) + 1									       *
        	 *  -. 계약시작일이 1일이 아닐 경우 =(시간외근무수당+기본급)*(계약종료월-계약시작월)+(시간외근무수당+기본급)/30*((계약시작일말일-계약시작일)+1)*
        	 ***********************************************************************************************************************************************/
        	if(pbnrYsno == '1'){
        		// 2. 수습종료일(수습급여종료일) 계산
        		if(this.fnc_Right(cntrBede, 2) == "01"){
        			pbnrEndd = this.fnc_SubStr(this.fnc_AddMonth(cntrBede,1),0,6).concat(this.fnc_GetLastDayOfMonth(this.fnc_AddMonth(cntrBede,1)));
        		}else{
        			pbnrEndd = this.fnc_SubStr(this.fnc_AddMonth(cntrBede,2),0,6).concat(this.fnc_GetLastDayOfMonth(this.fnc_AddMonth(cntrBede,2)));
        		}
        		this.dsTR_MONEPL.setColumn(row, "PBNR_ENDD", pbnrEndd);
        		
        		//3. 결정연봉액 계산
        		if(this.fnc_Right(cntrBede, 2) == "01"){                                                                          
        			pbn1Amot = pbn2Amot = nexacro.round((overAmot + bslyAmot) * 0.9, -1);
        			pbn3Amot = "";
        			
        		}else{
        			pbn3Amot = pbn2Amot = nexacro.round((overAmot + bslyAmot) * 0.9, -1);
        			
        			pbn1Amot = nexacro.round((pbn2Amot * (this.fn_DiffDay(this.fnc_SubStr(cntrBede,0,6).concat(this.fnc_GetLastDayOfMonth(cntrBede)), cntrBede))/30), -1);
        			
        			this.dsTR_MONEPL.setColumn(row, "PBN3_AMOT", pbn3Amot);	//수습3월월봉
        		}		
        		this.dsTR_MONEPL.setColumn(row, "PBN1_AMOT", pbn1Amot);		//수습1월월봉
        		this.dsTR_MONEPL.setColumn(row, "PBN2_AMOT", pbn2Amot);		//수습2월월봉
        		
        		ypayAmot = (overAmot + bslyAmot) * (this.fn_DiffMonth(cntrEndd, pbnrEndd)) + (nexacro.toNumber(pbn1Amot) + nexacro.toNumber(pbn2Amot) + nexacro.toNumber(pbn3Amot));
        	}else{
        		 if(this.fnc_Right(cntrBede, 2) == "01"){ 
        			ypayAmot = (overAmot + bslyAmot) * (this.fn_DiffMonth(cntrBede, cntrEndd)  + 1); 
        		 }else{
        			ypayAmot = (overAmot + bslyAmot) * this.fn_DiffMonth(cntrBede, cntrEndd) + nexacro.round(((overAmot + bslyAmot)/30 * (this.fn_DiffDay(this.fnc_SubStr(cntrBede,0,6).concat(this.fnc_GetLastDayOfMonth(cntrBede)), cntrBede))), -1);
        		 }
        	}	
        	this.dsTR_MONEPL.setColumn(row, "YPAY_AMOT", nexacro.round(ypayAmot, -1));	//결정연봉액
         }
        /*--------------------------------------------+
         |  주어진 두 날짜의 월 차이를 계산			  |
         +--------------------------------------------*/
        this.fn_DiffMonth = function (sDate,eDate) {
        	
        	if (this.fnc_Length(sDate) != 8 || this.fnc_Length(eDate) != 8) return -1;
        	
        	var strtYear = nexacro.toNumber(this.fnc_SubStr(sDate,0,4));
        	var strtMonth = nexacro.toNumber(this.fnc_SubStr(sDate,4,2))-1;

        	var endYear = nexacro.toNumber(this.fnc_SubStr(eDate,0,4));
        	var endMonth = nexacro.toNumber(this.fnc_SubStr(eDate,4,2))-1;
        	
        	var diffMonth = (endYear - strtYear)* 12 + (endMonth - strtMonth);
        	
        	return Math.abs(diffMonth);
        }

        /*--------------------------------------------+
         |  주어진 두 날짜의 일 차이를 계산			  |
         +--------------------------------------------*/
        this.fn_DiffDay = function (sDate,eDate) {
        	
        	if (this.fnc_Length(sDate) != 8 || this.fnc_Length(eDate) != 8) return -1;
        	
        	var sYear  = nexacro.toNumber(this.fnc_SubStr(sDate, 0, 4));
        	var sMonth = nexacro.toNumber(this.fnc_SubStr(sDate, 4, 2))-1;
        	var sDay   = nexacro.toNumber(this.fnc_SubStr(sDate, 6, 2));
        	
        	var eYear  = nexacro.toNumber(this.fnc_SubStr(eDate, 0, 4));
        	var eMonth = nexacro.toNumber(this.fnc_SubStr(eDate, 4, 2))-1;
        	var eDay   = nexacro.toNumber(this.fnc_SubStr(eDate, 6, 2));
        	
        	var objSdate = new Date(sYear, sMonth, sDay);
        	var objEdate = new Date(eYear, eMonth, eDay);
        	
        	if (isNaN(objSdate) || isNaN(objEdate)) return -1;         //유효한 날짜인지 체크
        	
        	var diffDay = (objEdate.getTime()-objSdate.getTime())/1000/60/60/24;
        	
        	return Math.abs(diffDay)+1;	// 단순 일수 차이가 아닌 시작일 포함 일수라서 +1을 해서 리턴한다.
        }

        /*--------------------------------------------+
        |  양식파일 다운로드 클릭 時 				  |
        +--------------------------------------------*/
        this.fn_ExcelFileDown = function(obj,e)
        {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        }

        /*--------------------------------------------+
        |  양식파일 업로드 클릭 時 				      |
        +--------------------------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsTR_MONEPL");
        	this.fnc_ExcelUpload("dsTR_MONEPL", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        /*--------------------------------------------+
        |  엑셀파일 업로드 성공시 時 				  |
        +--------------------------------------------*/
        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
                	
        	this.dsTR_MONEPL.set_enableevent(false);
        	this.dsTR_MONEPL.set_updatecontrol(false);
        	
        	if (!this.fn_ExcelUploadCheck(this.objDsImportTemp)) return;
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		
        		var iRow = this.dsTR_MONEPL.addRow();
        		
        		if(this.fnc_Length(this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0))) < 1){
        			this.dsTR_MONEPL.deleteRow(iRow);
        			break;
        		}
        		
        		this.dsTR_MONEPL.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        	
        		this.fn_KeyFieldDisible(this.dsTR_MONEPL);	//dsTR_MONEPL onrowposchanged 이벤트 함수 호출해서 그리드 속성 INSERT 속성으로 세팅해준다.(사번을 가지고 사용자 정보 가져오기 위함) 
        		
        		this.dsTR_MONEPL.setColumn(iRow, "CNTR_YMTH", this.objDsImportTemp.getColumn(i, 0)); //계약년월
        		this.dsTR_MONEPL.setColumn(iRow, "CNTD_CODE", this.objDsImportTemp.getColumn(i, 1)); //계약구분
        		this.dsTR_MONEPL.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, 2)); //사원번호
        		this.dsTR_MONEPL.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, 2)); //사원번호
        		this.dsTR_MONEPL.setColumn(iRow, "CNTR_BEDE", this.objDsImportTemp.getColumn(i, 3)); //계약시작일
        		this.dsTR_MONEPL.setColumn(iRow, "CNTR_ENDD", this.objDsImportTemp.getColumn(i, 4)); //계약종료일
        		this.dsTR_MONEPL.setColumn(iRow, "BSLY_AMOT", this.objDsImportTemp.getColumn(i, 5)); //기본급
        		this.dsTR_MONEPL.setColumn(iRow, "REMK_100X", this.objDsImportTemp.getColumn(i, 6)); //비고		
        		
        		var e = new nexacro.DSColChangeEventInfo();
        		
        		e.newrow = iRow;
        		e.columnid = "EMPL_NAME";		// 그리드 grdTR_MONEPL 의 EMPL_NAME 컬럼에서 사용자 팝업 자동조회가 되야 하기 때문에 이벤트의 columnid를 세팅해준다.
        				
        		this.dsTR_MONEPL_oncolumnchanged(this.dsTR_MONEPL, e);
        	}
        	
        	this.objDsImportTemp.clear();
        	
        	this.dsTR_MONEPL.set_updatecontrol(true);
        	this.dsTR_MONEPL.set_enableevent(true);
        	
        	this.dsTR_MONEPL.set_rowposition(0);
        	this.grdTR_MONEPL.setFocus();
        	
        }

        /*--------------------------------------------+
        |  엑셀 업로드 전 처리       				  |
        +--------------------------------------------*/
        this.fn_ExcelUploadCheck = function (dsObj) {

        	if (dsObj.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < dsObj.getRowCount(); i++) {
        		if(this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 0))) > 0){
        			if (this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 0))) < 1) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계약년월이 없습니다.");
        				return false;
        			}		
        			if (this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 1))) < 1) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계약구분이 없습니다.");
        				return false;
        			}		
        			if (this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 2))) < 1) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사원번호가 없습니다.");
        				return false;
        			}
        			if (!this.fnc_IsDate(this.fnc_Replace(this.fnc_Trim(dsObj.getColumn(i, 3)), "-", "")) || this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 3))) != 8) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계약시작일이 잘못되었습니다.(날짜입력은 '-'이 들어가면 안됩니다.)");
        				return false;
        			}
        			if (!this.fnc_IsDate(this.fnc_Replace(this.fnc_Trim(dsObj.getColumn(i, 4)), "-", "")) || this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 4))) != 8) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계약종료일이 잘못되었습니다.(날짜입력은 '-'이 들어가면 안됩니다.)");
        				return false;
        			}
        			if (this.fnc_Length(this.fnc_Trim(dsObj.getColumn(i, 5))) < 1) {
        				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 기본급이 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true; 
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTR_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTR_MONEPL.addEventHandler("oncolumnchanged", this.dsTR_MONEPL_oncolumnchanged, this);
            this.dsTR_MONEPL.addEventHandler("onvaluechanged", this.dsTR_MONEPL_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static31.addEventHandler("onclick", this.Static31_onclick, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.cmbSHRCNTD_CODE.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRCNTD_CODE.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRCNTD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRCNTR_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HRML0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
