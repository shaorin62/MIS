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
                this.set_name("WFMG0030");
                this.set_titletext("연수지원현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_TRSPXM", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"TRAI_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"TRSP_SEQN\" type=\"STRING\" size=\"5\"/><Column id=\"WOTM_YCNT\" type=\"STRING\" size=\"2\"/><Column id=\"TRAI_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"TRPL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"TRAI_PLAN\" type=\"STRING\" size=\"500\"/><Column id=\"TRSP_COST\" type=\"STRING\" size=\"15\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"WOTM_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ZERO_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj.set_taborder("10");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("연수지원현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "343", "71", "52", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("연수기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

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

            obj = new Grid("grdCW_TRSPXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("9");
            obj.set_binddataset("dsCW_TRSPXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"91\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"68\"/><Column size=\"255\"/><Column size=\"124\"/><Column size=\"96\"/><Column size=\"88\"/><Column size=\"75\"/><Column size=\"71\"/><Column size=\"93\"/><Column size=\"74\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"기안일자\"/><Cell col=\"2\" text=\"연수시작일\"/><Cell col=\"3\" text=\"연수종료일\"/><Cell col=\"4\" text=\"연수일수\"/><Cell col=\"5\" text=\"연수장소\"/><Cell col=\"6\" text=\"부서\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"직위\"/><Cell col=\"9\" text=\"근속시작일\"/><Cell col=\"10\" text=\"근속년수\"/><Cell col=\"11\" text=\"지원금액\"/><Cell col=\"12\" text=\"해외광고제\"/></Band><Band id=\"body\"><Cell text=\"bind:TRAI_YEAR\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:TRAI_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:TRAI_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:TRAI_PROD\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:TRPL_NAME\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" text=\"bind:EMPL_NAME\"/><Cell col=\"8\" text=\"bind:OPOS_NAME\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:WOTM_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:WOTM_YCNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRSP_COST\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" expr=\"expr:ZERO_YSNO == &quot;1&quot; ? &quot;해당&quot; : &quot;미해당&quot;\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('TRSP_COST')\" mask=\"9,999\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "385", "71", "80", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "490", "71", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAI_BEDE", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAI_ENDD", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "467", "71", "21", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "90", "61", "8", "41", null, null, this);
            obj.set_taborder("118");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "314", "61", "40", "41", null, null, this);
            obj.set_taborder("123");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "378", "61", "8", "41", null, null, this);
            obj.set_taborder("125");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연수지원현황");

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
        this.addIncludeScript("WFMG0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMG0030.xfdl", function() {
        /****************************************************************************************************
         * @explanation		연수지원현황을 조회한다.
         * @category	 	복리후생>연수관리>연수지원현황
         * @author	   		김혜림
         * @cdate	  		2016.09.28
         * @version 1.0		최초 작성
         * WFMG0030.xml - <Created by Code Template generator>
         *
         *Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
                 
         /*************************
          *  공통 Script Include  *
          ************************/
          //include "script::lib_script_common.xjs"

         /**********************
          *  화면 변수 선언부  *
          *********************/
         this.sBUTTONLIST  = "TTFFTFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
         this.sPACKAGENAME = "WFMG0030"; 

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

            var iNowDate = this.fnc_GetServerDateTime("DATE");
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.calSHRTRAI_BEDE.set_value(this.fnc_SubStr(iNowDate, 0, 6) + '01');
            this.calSHRTRAI_ENDD.set_value(this.fnc_SubStr(iNowDate)); 
            this.calSHRTRAI_BEDE.setFocus();
                	
        		/*권한에 따라 사원번호 수정 가능여부 결정*/
        		/*★개발을 위해 권한 level을 1로 셋팅*/
        		// this.sUSERLAVEL = 1;
                	
        		  /* switch(this.sUSERLAVEL){
        			case 1: 
                	this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
                	this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
                	break;
                	}
                	
                	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
                	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
                	*/
                	
                	this.fn_Search();

                }

                /*-----------------------------------+
                 |  02.화면 종료(닫기) 버튼 클릭 時  |
                 ------------------------------------*/
                this.fn_End = function (obj) {

                	this.parent.close();
                	
                }

                /*------------------------+
                 |  03.조회 버튼 클릭 時  |
                 +------------------------*/
                this.fn_Search = function (obj) {
                	if (!this.fn_SearchItemCheck()) return;
                	this.fnc_DatasetClear('dsCW_TRSPXM');

                	var sMethodName = "SEARCH00";
                	var sInDataSet  = "";
                	var sOutDataSet = "dsCW_TRSPXM=dsCW_TRSPXM";
                	var sArgument   = this.fn_CreateArgument(sMethodName);

                	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
                	this.grdCW_TRSPXM.setFocus();

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
                    this.fnc_DataSetCancel("dsCW_TRSPXM");
                	var iNowDate = this.fnc_GetServerDateTime("DATE");
        			this.calSHRTRAI_BEDE.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        			this.calSHRTRAI_ENDD.set_value(this.fnc_SubStr(iNowDate)); 
        			this.edtSHREMPL_NAME.set_value("");
        			this.edtSHREMPL_NUMB.set_value("");
        						
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
                	// 기능 없음
                }

                /*------------------------------------+
                 |  10.최초 화면 Load時 처리 할 사항  |
                 +------------------------------------*/
                this.fn_FormUnloadCheckProcess = function(obj,e) {
                
        			if(e.fromobject instanceof Div) return;
        			var sMessage = this.fnc_FormUnloadCheck("dsCW_TRSPXM", this);

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

                	if (this.fnc_DatasetChangeCheck("dsCW_TRSPXM")) {
                		if (this.fnc_Message("TMM023") == false) return false;
                	}
                	
                	if (this.fnc_Length(this.fnc_Trim(this.calSHRTRAI_BEDE.value)) < 1) {
                		return this.fnc_SearchCheckPostAction("TMM072", "연수기간 FROM", this.calSHRTRAI_BEDE);
                	}
                	if(this.fnc_Length(this.fnc_Trim(this.calSHRTRAI_ENDD.value)) < 1) {
                		return this.fnc_SearchCheckPostAction("TMM072", "연수기간 TO", this.calSHRTRAI_ENDD);
                	}
                	
                	if (this.calSHRTRAI_BEDE.value > this.calSHRTRAI_ENDD.value) {
                		return this.fnc_SearchCheckPostAction("TMM042", "연수기간 FROM 연수기간 TO", this.calSHRTRAI_BEDE);
                	}
                	
                	return true;
                }

                /*-------------------+
                 |  삭제 여부 체크!  |
                 +-------------------*/
                this.fn_DeleteCheck = function () {

                }

                /*-------------------+
                 |  저장 여부 체크!  |
                 
                 +-------------------*/
                this.fn_SaveItemCheck = function () {

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
                		sReturnString += " TRAI_BEDE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAI_BEDE.value)); 
                		sReturnString += " TRAI_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAI_ENDD.value)); 
                		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 	
                	
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
                		this.fnc_Information(this.stInformation, this.dsCW_TRSPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                		this.fnc_Message("TMM018", this.dsCW_TRSPXM.getCaseCount("dataset.getRowLevel(currow)==0"));
                	
                	} 
                }

                /*****************************************************************************************************
                 *                                사용자 정의  Function 처리 부분                                  *
                 *****************************************************************************************************/

                
                /**************************************************************************************************
                 *                                  사용자 정의  Event 처리 부분                                   *
                 ***************************************************************************************************/
                 /*-----------------------+
                 |  팝업 Setting  |
                 +------------------------*/
                 this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

                	var arrParam = new Array();
                	
                	// 조회조건 - 사원(popup)
                  if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

                		arrParam[0] = "HRM0004"; //HRM0001
                		arrParam[1] = "";
                		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                		arrParam[3] = "N";
                		arrParam[4] = "edtSHREMPL_NAME";
                		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                		arrParam[6] = "0,1";
                		
                		this.fnc_HelpDialogeAction(this, obj, arrParam);
                		
                	} 
                }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_TRSPXM.addEventHandler("oncolumnchanged", this.dsCW_TRSPXM_oncolumnchanged, this);
            this.dsCW_TRSPXM.addEventHandler("onload", this.dsCW_TRSPXM_onload, this);
            this.dsCW_TRSPXM.addEventHandler("onrowsetchanged", this.dsCW_TRSPXM_onrowsetchanged, this);
            this.dsCW_TRSPXM.addEventHandler("cancolumnchange", this.dsCW_TRSPXM_cancolumnchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static31.addEventHandler("onclick", this.Static31_onclick, this);
            this.grdCW_TRSPXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdCW_TRSPXM.addEventHandler("oncellclick", this.grdTM_APPRXH_oncellclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMG0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
