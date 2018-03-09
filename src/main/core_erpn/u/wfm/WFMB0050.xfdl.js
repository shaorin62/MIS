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
                this.set_name("WFMB0050");
                this.set_titletext("학자금신청등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSCEX_CODE</Col><Col id=\"CODEID\">SCEX_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">1</Col><Col id=\"CODEID\">1</Col></Row><Row><Col id=\"DSNAME\">2</Col><Col id=\"CODEID\">2</Col></Row><Row><Col id=\"DSNAME\">3</Col><Col id=\"CODEID\">3</Col></Row><Row><Col id=\"DSNAME\">4</Col><Col id=\"CODEID\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWF_SCEXXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SEQN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_YEAR\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_TERM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_AMOT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_LIMT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"GIVE_YMDX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTerm", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">1</Col><Col id=\"CODEID\">1</Col></Row><Row><Col id=\"DSNAME\">2</Col><Col id=\"CODEID\">2</Col></Row><Row><Col id=\"DSNAME\">3</Col><Col id=\"CODEID\">3</Col></Row><Row><Col id=\"DSNAME\">4</Col><Col id=\"CODEID\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">WFM0004</Col><Col id=\"DSNAME\">dsSCEX_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("학자금신청등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 학자금신청등록");
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
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWF_SCEXXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsWF_SCEXXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"84\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" colspan=\"4\" text=\"대상사원\"/><Cell col=\"5\" colspan=\"5\" text=\"대상자녀\"/><Cell col=\"10\" colspan=\"3\" text=\"학자금\"/><Cell col=\"13\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell row=\"1\" col=\"1\" text=\"사원번호\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"부서\"/><Cell row=\"1\" col=\"4\" text=\"직위\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"자녀명\"/><Cell row=\"1\" col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"생년월일\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"학교명\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"학년\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_essential\" text=\"분기/학기\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_essential\" text=\"종류\"/><Cell row=\"1\" col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"신청금액\"/><Cell row=\"1\" col=\"12\" text=\"한도금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK_BOX\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:CHLD_NAME\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:CHLD_BIRT\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SCHL_YEAR\" editlimit=\"0\" combodataset=\"dsYear\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SCHL_TERM\" editlimit=\"0\" combodataset=\"dsTerm\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SCEX_CODE\" combodisplay=\"edit\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:SCEX_AMOT\" mask=\"#,##0\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SCEX_LIMT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" text=\"bind:REMK_200X\" editlimit=\"0\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "98", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject", "absolute", "71", "71", null, "21", "48", null, this);
            obj.set_taborder("116");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("128");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("129");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("학자금신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSubject","value","dsTM_APPRXH","SUBJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("WFMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMB0050.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		학자금신청등록
         * @category	 	복리후생>학자금관리>학자금신청등록 
         * @author	   		전종원
         * @cdate	  		2016.09.19
         * @version 1.0		최초 작성
         * HATC0010.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTTTFTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMB0050"; 
        this.sDOCUID 	  = "";
        this.sAPPR_GUBN   = "";		//결재처리구분 [ createDoc : 상신, deleteDoc : 결재취소, show : 조회, list : 목록 ]
        this.sKeyValue    = "";

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
        		
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 5;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 
        			break;
        	}

        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = this.parent.sDOCUIDXX;
        	
        	if(this.parent.sAPPRGUBN == "cre"){ /*상신일때*/
        		this.btn_PROC.set_enable(true);
        		this.fn_formNotEnable();
        	}else if(this.parent.sAPPRGUBN == "del"){ /*취소일때*/
        		this.btn_CANC.set_enable(true);
        		this.fn_formNotEnable();
        	}

        	if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != ""){
        		this.fn_formNotEnable();
        	}
        	
        	if(this.parent.sAPPRSEQN == null || this.parent.sAPPRSEQN == ""){
        		this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","학자금신청서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        	}else{
        		this.sKeyValue = this.parent.sAPPRSEQN;
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsWF_SCEXXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsWF_SCEXXD=dsWF_SCEXXD dsTM_APPRXH=dsTM_APPRXH";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.edtSubject.setFocus();
        	}
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.parent.fn_End();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.parent.sAPPRGUBN = "list";	
        	this.parent.sAPPRSEQN = "";
        	this.parent.sDOCUIDXX = "";
        	this.parent.sKeyValue = this.sKeyValue;
        	this.parent.fn_goMenu();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsWF_SCEXXD.addRow();
        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.dsWF_SCEXXD.set_rowposition(iRow);
        	this.dsWF_SCEXXD.setColumn(iRow, "DOCU_IDXX", this.sDOCUID);
        	this.dsWF_SCEXXD.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);	//대상자 사번
        	this.dsWF_SCEXXD.setColumn(iRow, "EMPL_NAME", application.GBL_USERNM);	//대상자 성명
        	this.dsWF_SCEXXD.setColumn(iRow, "DEPT_CODE", application.GBL_DEPTCD);	//대상자 부서코드
        	this.dsWF_SCEXXD.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM);	//대상자 부서명
        	this.dsWF_SCEXXD.setColumn(iRow, "OPOS_CODE", application.GBL_OPOSCD);	//대상자 직위코드
        	this.dsWF_SCEXXD.setColumn(iRow, "OPOS_NAME", application.GBL_OPOSNM);	//대상자 직위명
        		
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	
        	if (this.sUSERLAVEL == "1") {
        		this.grdWF_SCEXXD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXD, "EMPL_NAME"), "edittype", "text");
        		this.grdWF_SCEXXD.setCellPos(this.fnc_GridColumnIndex(this.grdWF_SCEXXD, "EMPL_NAME"));
        	}else{
        		this.grdWF_SCEXXD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXD, "EMPL_NAME"), "edittype", "none");
        		this.grdWF_SCEXXD.setCellPos(this.fnc_GridColumnIndex(this.grdWF_SCEXXD, "EMPL_NAME"));	
        	}
        	this.grdWF_SCEXXD.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		/*
        			체크된 내용들만 삭제한다.
        			역순으로 체크하여 삭제해야 아래의 SCRIPT 정상작동한다. 
        		*/
        		for (i = this.dsWF_SCEXXD.getRowCount() - 1 ; i >= 0 ; i -- ){
        			if(this.dsWF_SCEXXD.getColumn(i,"CHK_BOX") == '1'){
        				this.dsWF_SCEXXD.deleteRow(i);
        			}
        		}
        		
        		this.grdWF_SCEXXD.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsWF_SCEXXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	this.grdWF_SCEXXD.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsWF_SCEXXD=dsWF_SCEXXD:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	this.grdWF_SCEXXD.setFocus();
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
        	
        	if (this.fnc_DatasetChangeCheck("dsWF_SCEXXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsWF_SCEXXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}

        	var iSelectRowCount = this.dsWF_SCEXXD.getCaseCount("CHK_BOX == '1'");
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "자녀명 (" + this.fnc_Trim(this.dsWF_SCEXXD.getColumn(this.dsWF_SCEXXD.rowposition, "CHLD_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	} else {
        		this.fnc_Message("TMM020");
        		return false;
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsWF_SCEXXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_APPRXH.getColumn(0, "SUBJ_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_APPRXH, 0, this.edtSubject, "SUBJ_NAME");
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsWF_SCEXXD.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsWF_SCEXXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "EMPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원명", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "CHLD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자녀명", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "CHLD_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "CHLD_BIRT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자녀생년월일", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "CHLD_BIRT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "SCHL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학교명", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCHL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "SCHL_YEAR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학년", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCHL_YEAR");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "SCHL_TERM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학기", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCHL_TERM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "SCEX_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학자금종류", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCEX_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXD.getColumn(i, "SCEX_LIMT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학자금실납입금", this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCEX_LIMT");
        		}

        		if (this.dsWF_SCEXXD.getColumn(i, "SCEX_LIMT") - this.dsWF_SCEXXD.getColumn(i, "SCEX_AMOT") < 0)
        		{
        			return this.fnc_CheckPostAction("WFM001", this.dsWF_SCEXXD.getColumn(i, "CHLD_NAME"), this.dsWF_SCEXXD, i, this.grdWF_SCEXXD, "SCEX_AMOT");
        		}

        		/*SORT_SEQN 값 할당*/		
        		this.dsWF_SCEXXD.setColumn(i,"SORT_SEQN", i+1);
        		
        	}
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN; 	
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.parent.sKeyValue = this.sKeyValue;
        		this.fn_Search();
        	
        	} else if (sMethodName == "sendApproval") {

        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if(this.parent.sAPPRGUBN == "cre"){
        			this.fnc_ShowApproval(this.parent.sAPPRGUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		
        		/*
        			var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsDraft&cmpID=CK";
        			var sPostData = "&jobID="+this.dsTM_APPROVAL.getColumn(0,"documentType")
        						+ "&docID="+this.dsTM_APPROVAL.getColumn(0, "documentID")
        						+ "&userID="+"gwtest07"; //application.GBL_EMPLNO;
        			
        			if(nexacro.Browser == "Runtime"){  //런타임 모드일때
        				system.execBrowser(sUrl+sPostData);
        			}else{								//브라우저일때
        				window.open(sUrl+sPostData);
        			}
        		*/
        		}
        					
        		this.fn_Search();
        			
        	} else if (sMethodName == "GetCommCode") {
        		

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdWF_SCEXXD,dsSCEX_CODE,SCEX_CODE";	//학자금 종류
        		this.fnc_UserComboInnerBind(arrParam);
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         
         
         /*전체화면 비활성화*/
         this.fn_formNotEnable = function(){
        	this.grdWF_SCEXXD.enable = false;
        	this.edtSubject.enable = false;
         }

         /*결재상신/취소*/
         this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/

        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 						
        	var sApprDocId	= this.sDOCUID + "-" + this.dsTM_APPRXH.getColumn(0,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	sXmlStr  = "<style>td {border:1px solid black; Font-size:12px; }";
        	sXmlStr += ".label1 { background-color:#cccccc; font-weight:bold; text-align: center; height: 25px; }";
        	sXmlStr += ".label2 { padding-left: 5px; height: 25px; }";
        	sXmlStr += ".label3 { text-align: center; height: 25px; }";
        	sXmlStr += ".label4 { text-align: right; padding-right: 5px; height: 25px; }";
        	sXmlStr += "</style>";
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=13%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=16%>";
        	sXmlStr += "  <col width=5%>";
        	sXmlStr += "  <col width=5%>";
        	sXmlStr += "  <col width=11%>";
        	sXmlStr += "  <col width=10%>";
        	
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1' colspan='4'>대상사원</td>";
        	sXmlStr += "    <td class='label1' colspan='5'>대상자녀</td>";
        	sXmlStr += "    <td class='label1' colspan='2'>학자금</td>";
        	sXmlStr += "  </tr>";
        	
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>사번</td>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label1'>부서</td>";
        	sXmlStr += "    <td class='label1'>직위</td>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label1'>생년월일</td>";
        	sXmlStr += "    <td class='label1'>학교명</td>";
        	sXmlStr += "    <td class='label1'>학년</td>";
        	sXmlStr += "    <td class='label1'>학기</td>";
        	sXmlStr += "    <td class='label1'>종류</td>";
        	sXmlStr += "    <td class='label1'>실납입금</td>";
        	sXmlStr += "  </tr>";
        	for(var i = 0; i < this.dsWF_SCEXXD.getRowCount(); i++){
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"EMPL_NUMB") + "</td>";	/*사원번호*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"EMPL_NAME") + "</td>";	/*성명*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"DEPT_NAME") + "</td>";	/*부서*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"OPOS_NAME") + "</td>";	/*직위*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"CHLD_NAME") + "</td>";	/*자녀명*/
        		sXmlStr += "    <td class='label3'>" + this.fn_ChangeDisplayType("date", this.dsWF_SCEXXD.getColumn(i,"CHLD_BIRT")) + "</td>";	/*자녀생년월일*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"SCHL_NAME") + "</td>";	/*학교명*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"SCHL_YEAR") + "</td>";	/*학년*/
        		sXmlStr += "    <td class='label3'>" + this.dsWF_SCEXXD.getColumn(i,"SCHL_TERM") + "</td>";	/*학기*/
        		sXmlStr += "    <td class='label3'>" + this.grdWF_SCEXXD.getCellText(i,10) + "</td>";		/*학자금종류*/
        		sXmlStr += "    <td class='label4'>" + this.grdWF_SCEXXD.getCellText(i,11) + "</td>";		/*학자금실납입금*/
        		sXmlStr += "  </tr>";
        	}
        	sXmlStr += "</table>";	
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);	/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);					/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdWF_SCEXXD") {	
        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        				
        			arrParam[0] = "HRM0051"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdWF_SCEXXD";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";  
        			arrParam[6] = "0,1,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} 
        	}

        }

         /*
         헤더 click 시
         */
        this.grdWF_SCEXXD_onheadclick = function(obj,e)
        {
        	
        	if(e.col == 0){	
        		this.fnc_GridAllCheck(this.grdWF_SCEXXD,"CHK_BOX");	
        	}
        }

         /*
         데이터셋의 열(column) 값이 변경된 후에 발생하는 이벤트입니다.
         */
        this.dsWF_SCEXXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdWF_SCEXXD, "YES", e.oldvalue, e.columnid);
        	} else if (e.columnid == "SCEX_CODE") {
        		this.dsWF_SCEXXD.setColumn(e.row,"SCEX_LIMT",this.dsSCEX_CODE.getColumn(this.dsSCEX_CODE.findRow("COMB_CODE", this.dsWF_SCEXXD.getColumn(e.row, "SCEX_CODE")), "LIMT_AMOT"));
        	}
        }

        
        this.btn_PROC_OnClick = function(obj,e)
        {
        	this.fn_apprProcess("createDoc");
        }

        this.btn_CANC_onclick = function(obj,e)
        {
        	this.fn_apprProcess("deleteDoc");
        }

        this.fn_ChangeDisplayType = function (type,val) { 
        	var rtnVal;
        	if (type == "date"){
        		rtnVal = this.fnc_SubStr(val, 0, 4) + "-" + this.fnc_SubStr(val, 4, 2) + "-" + this.fnc_SubStr(val, 6, 2);
        	}else if (type == "jumin"){
        		rtnVal = this.fnc_SubStr(val, 0, 6) + "-" + this.fnc_SubStr(val, 6, 7);
        	}
        	
        	return rtnVal;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsWF_SCEXXD.addEventHandler("oncolumnchanged", this.dsWF_SCEXXD_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdWF_SCEXXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdWF_SCEXXD.addEventHandler("onheadclick", this.grdWF_SCEXXD_onheadclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);

        };

        this.loadIncludeScript("WFMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
