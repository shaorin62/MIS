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
                this.set_name("TMMA0220");
                this.set_titletext("공지사항");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NOTICE", this);
            obj._setContents("<ColumnInfo><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"NTCE_SBJT\" type=\"STRING\" size=\"256\"/><Column id=\"BULT_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POPD_BEDE\" type=\"STRING\" size=\"256\"/><Column id=\"POPD_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("공지사항");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("10");
            obj.set_text("공통관리>공지사항");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_NOTICE", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_NOTICE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"490\"/><Column size=\"90\"/><Column size=\"105\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성일자\"/><Cell col=\"6\" text=\"유효기간\"/><Cell col=\"7\" text=\"조회\"/></Band><Band id=\"body\"><Cell style=\"align:right;\" text=\"bind:SRAL_NUMB\"/><Cell col=\"1\" style=\"align:left;cursor:pointer;\" text=\"bind:NTCE_SBJT\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" text=\"bind:INST_DATE\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:POPD_ENDD\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:EMPL_CONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRINST_DATE1", "absolute", "81", "68", "95", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "173", "68", "16", "22", null, null, this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRINST_DATE2", "absolute", "192", "68", "95", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Image01", "absolute", "297", "68", "47", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRINST_USID", "absolute", "349", "68", "65", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRINST_USID", "absolute", "415", "68", "22", "22", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRINST_USNM", "absolute", "438", "68", "80", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "528", "68", "33", "22", null, null, this);
            obj.set_taborder("19");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRNTCE_SBJT", "absolute", "566", "68", "150", "22", null, null, this);
            obj.set_taborder("20");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "726", "68", "33", "22", null, null, this);
            obj.set_taborder("21");
            obj.set_text("내용");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBULT_CNTT", "absolute", "764", "68", "150", "22", null, null, this);
            obj.set_taborder("22");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("divContents", "absolute", "9.9%", "168", "790", "530", null, null, this);
            obj.set_text("게시물내용보기");
            obj.set_url("tmm::TMMA0220P01.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공지사항");
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
            this._addPreloadList("fdl", "tmm::TMMA0220P01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMA0220.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0220.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0220 공지사항
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.06.24		chg			Initial Created.
         *   2016.09.26		김준수		주석 수정.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0220"; //해당 Form에서 사용 할 Package 명 

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

        /*
        첨부파일 그리드 사용시
        	dsFL_ATTACH updatecontrol:true 필수 선언
        	폼초기화시
        	this.divFILE_UPLOAD.fn_FileDivInit();	
        	this.mobjmainds=this.dsTM_NOTICE;
        	this.mcolname="FILE_IDXX";
        	필수 선언
        	this.dsTM_NOTICE_onrowposchanged 에서 첨부파일 조회 참고
        	
        */
        //첨부파일 div에서 사용하는 전역변수
        this.mobjmainds;
        this.mcolname;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	//this.fnc_GetComboDs(this.dsCombo);
        	
        	this.calSHRINST_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4)+"0101");	//년초
        	this.calSHRINST_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));

        	//첨부파일 목록을 검색할 때 사용.
        	this.mobjmainds=this.dsTM_NOTICE;
        	this.mcolname="FILE_IDXX";
        	
        	this.fn_Search();
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
        	this.fnc_DatasetClear('dsTM_NOTICE');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_NOTICE=dsTM_NOTICE";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NOTICE.setFocus();

        }

        /*------------------------------+
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

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_NOTICE");
        	this.grdTM_NOTICE.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	//기능없음
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_NOTICE", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_NOTICE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRINST_DATE1.value)) != 8) {
        		
        		return this.fnc_CheckPostAction("TMM008", "게시기간 시작일", '', '', this.calSHRINST_DATE1, '');
        	}
        		
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRINST_DATE2.value)) != 8) {
        		
        		return this.fnc_CheckPostAction("TMM008", "게시기간 종료일", '', '', this.calSHRINST_DATE2, '');
        	}	
        			
        	if (parseInt(this.fnc_Trim(this.calSHRINST_DATE1.value)) > parseInt(this.fnc_Trim(this.calSHRINST_DATE2.value))) {
        		
        		return this.fnc_CheckPostAction("TMM042", "[게시기간 시작일],[게시기간 종료일]", '', '', this.calSHRINST_DATE2, '');
        	}	
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	//기능없음

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	//기능없음
        	
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
        		sReturnString += " INST_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINST_DATE1.value));
        		sReturnString += " INST_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINST_DATE2.value));
        		sReturnString += " INST_USID="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRINST_USID.value));
        		sReturnString += " NTCE_SBJT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRNTCE_SBJT.value));
        		sReturnString += " BULT_CNTT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRBULT_CNTT.value));
        		
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SRAL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(this.dsTM_NOTICE.getColumn(this.dsTM_NOTICE.rowposition,"SRAL_NUMB")));
        		//UPDT_USID 는 세션 정보 사용
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_NOTICE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_NOTICE.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE01') {
        	
        		//기능없음
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		//기능없음
        	
        	} 
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	//기능없음

        }

        /*--------------------------------------+
         |  제목 클릭시 팝업 오픈     |
         +-------------------------------------*/
        this.grdTM_NOTICE_oncellclick = function(obj,e)
        {
        	if(this.grdTM_NOTICE.getBindCellIndex("body","NTCE_SBJT")==e.col){
        		
        		//게시물 조회자 정보 저장
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "";	//게시물의 순번만 파라미터로 넘긴다.
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			
        		
        		//파일아이디 this.mobjmainds, this.mcolname 를 사용해서 가져온다.
        		//dsFL_ATTACH은 하드코딩해서 사용
        		//후처리 할것이 없음.	
        		//첨부파일 조회
        		this.fnc_DatasetClear("dsFL_ATTACH");
        		var sMethodName = "GetFile";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsFL_ATTACH=dsFL_ATTACH";
        		var sReturnString = "";
        		
        		sReturnString  = " pgm="        + this.fnc_Quote("comFile");//첨부파일 조회 컨트롤러는 독립적임
        		sReturnString += " action="     + this.fnc_Quote(sMethodName);
        		sReturnString += " FILE_IDXX="   + this.fnc_Quote(this.mobjmainds.getColumn(this.mobjmainds.rowposition, this.mcolname));	
        		
        		//첨부파일 조회 컨트롤러는 독립적임
        		this.fnc_TransactionCall(this, "comFile",sMethodName, sInDataSet, sOutDataSet, sReturnString, "fn_CallBack");
        			
        			
        		
        		this.divContents.trackPopupByComponent(this.grdTM_NOTICE,50,24);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_NOTICE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_NOTICE.addEventHandler("oncellclick", this.grdTM_NOTICE_oncellclick, this);
            this.calSHRINST_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRINST_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRINST_USID.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRINST_USID.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRINST_USNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRINST_USNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRNTCE_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBULT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0220.xfdl");
        this.loadPreloadList();
       
    };
}
)();
