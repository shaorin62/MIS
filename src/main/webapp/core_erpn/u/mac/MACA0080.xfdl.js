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
                this.set_name("MACA0080");
                this.set_titletext("전표생성순번처리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MEDXXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MEDFXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDF_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("전표생성순번처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 매체관리 > 회계관리 > 전표생성순번처리");
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

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRYEAR_MNTH", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("113");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_TCALXM", "absolute", "8", "138", "365", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("115");
            obj.set_binddataset("dsMD_CUSTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"광고주코드\"/><Cell col=\"1\" text=\"광고주명\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"순번\"/><Cell col=\"3\" text=\"년월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" text=\"bind:CUST_SEQX\"/><Cell col=\"3\" text=\"bind:TAXY_MONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_TCALXM00", "absolute", "393", "138", "375", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("116");
            obj.set_binddataset("dsMD_MEDFXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"162\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"매체코드\"/><Cell col=\"1\" text=\"매체명\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"순번\"/><Cell col=\"3\" text=\"년월\"/></Band><Band id=\"body\"><Cell text=\"bind:MEDX_FLAG\"/><Cell col=\"1\" text=\"bind:MEDX_NAME\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" text=\"bind:MEDF_SEQX\"/><Cell col=\"3\" text=\"bind:TAXY_MONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_TCALXM01", "absolute", "788", "138", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("117");
            obj.set_binddataset("dsMD_MEDXXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"169\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"매체사코드\"/><Cell col=\"1\" text=\"매체사명\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"순번\"/><Cell col=\"3\" text=\"년월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:MEDX_CODE\"/><Cell col=\"1\" text=\"bind:MEDX_CDNM\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" text=\"bind:MEDX_SEQX\"/><Cell col=\"3\" text=\"bind:TAXY_MONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCRET_SEQX", "absolute", null, "113", "74", "21", "25", null, this);
            obj.set_taborder("118");
            obj.set_text("순번생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "788", "117", "171", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnCRET_OSEQ", "absolute", null, "113", "98", "21", "102", null, this);
            obj.set_taborder("121");
            obj.set_text("순번자동입력");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "768", "296", "20", "60", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "373", "296", "20", "60", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표생성순번처리");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MACA0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MACA0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	MACA0080 전표생성순번처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.06		최제현		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFFF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "MACA0080"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
         	this.fn_Search();

        } 
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	//광고주 목록조회
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsMD_CUSTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CUSTXM=dsMD_CUSTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
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
        	//this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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

        

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        
        /*-----------------------+ 
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.

        	if (((this.fnc_DatasetChangeCheck("dsMD_CUSTXM"))||(this.fnc_DatasetChangeCheck("dsMD_MEDFXM"))||
        	(this.fnc_DatasetChangeCheck("dsMD_MEDXXM"))) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	//년월
        	if(this.fnc_IsDate(this.calSHRYEAR_MNTH.fn_GetMonth()) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}
        	
        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*--------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//변경된 데이터 체크
        	var i=0;
        	var j=0;
        	//광고주 순번 중복체크
        	for(i=0;i<this.dsMD_CUSTXM.rowcount;i++){
        		for(j=0;j<this.dsMD_CUSTXM.rowcount;j++){
        			if(i>j&&this.dsMD_CUSTXM.getColumn(i,"CUST_SEQX")==this.dsMD_CUSTXM.getColumn(j,"CUST_SEQX")){
        				this.fnc_Message("MAC008");
        				return false;
        			}
        		}
        	}
        	//매체구분 순번체크
        	for(i=0;i<this.dsMD_MEDFXM.rowcount;i++){
        		for(j=0;j<this.dsMD_MEDFXM.rowcount;j++){
        			if(i>j&&this.dsMD_MEDFXM.getColumn(i,"MEDF_SEQX")==this.dsMD_MEDFXM.getColumn(j,"MEDF_SEQX")){
        				this.fnc_Message("MAC009");
        				return false;
        			}
        		}
        	}
        	//매체사 순번중복체크
        	for(i=0;i<this.dsMD_MEDXXM.rowcount;i++){
        		for(j=0;j<this.dsMD_MEDXXM.rowcount;j++){
        			if(i>j&&this.dsMD_MEDXXM.getColumn(i,"MEDX_SEQX")==this.dsMD_MEDXXM.getColumn(j,"MEDX_SEQX")){
        				this.fnc_Message("MAC010");
        				return false;
        			}
        		}
        	}

        	if ((this.fnc_DatasetChangeCheck("dsMD_CUSTXM") == false)
        	&&(this.fnc_DatasetChangeCheck("dsMD_MEDFXM") == false)
        	&&(this.fnc_DatasetChangeCheck("dsMD_MEDXXM") == false)) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/

        this.fn_DeleteCheck = function (totalNum) {

        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "일련번호 : ("+this.grdMD_CUSTXM.getCellText(this.grdMD_CUSTXM.currentrow, this.grdMD_CUSTXM.getBindCellIndex( "body", "SEQX_FILD" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);

        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	if (sKind == "SEARCH00" || sKind == "SEARCH01" || sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        	}  else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02" 
        		|| sKind == "SAVE03" || sKind == "SAVE04" || sKind == "SAVE05" ) {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} 

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.stInformation, this.dsMD_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//매체 목록 조회 
        		this.fnc_DatasetClear("dsMD_MEDFXM");

        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_MEDFXM=dsMD_MEDFXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	} else if (sMethodName == "SEARCH01") {
        		
        		//매체사 목록조회
        		this.fnc_DatasetClear("dsMD_MEDXXM");

        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_MEDXXM=dsMD_MEDXXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation1, this.dsMD_MEDXXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SAVE00" ) {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//매체 순번저장
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsMD_MEDFXM=dsMD_MEDFXM:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	} else if (sMethodName == "SAVE01" ) {
        		//매체사 순번저장
        		var sMethodName = "SAVE02";
        		var sInDataSet  = "dsMD_MEDXXM=dsMD_MEDXXM:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	} else if (sMethodName == "SAVE02" ) {
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} 
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        /*-----------------------------+
         |  순번생성 버튼 클릭시 |
         +-----------------------------*/

        this.btnCRET_SEQX_onclick = function(obj,e)
        {	
        	//순번생성
        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_CUSTXM=dsMD_CUSTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        
        /*-----------------------------+
         |  순번자동생성 버튼 클릭시 |
         +-----------------------------*/
        this.btnCRET_OSEQ_onclick = function(obj,e)
        {	
        	for(var i=0;i<this.dsMD_CUSTXM.rowcount;i++){
        		this.dsMD_CUSTXM.setColumn(i,"CUST_SEQX",i+1)
        	}
        	for(var i=0;i<this.dsMD_MEDFXM.rowcount;i++){
        		this.dsMD_MEDFXM.setColumn(i,"MEDF_SEQX",i+1)
        	}
        	for(var i=0;i<this.dsMD_MEDXXM.rowcount;i++){
        		this.dsMD_MEDXXM.setColumn(i,"MEDX_SEQX",i+1)
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.grdMD_TCALXM00.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.grdMD_TCALXM00.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_TCALXM00.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.grdMD_TCALXM01.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.grdMD_TCALXM01.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_TCALXM01.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.btnCRET_SEQX.addEventHandler("onclick", this.btnCRET_SEQX_onclick, this);
            this.btnCRET_OSEQ.addEventHandler("onclick", this.btnCRET_OSEQ_onclick, this);

        };

        this.loadIncludeScript("MACA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
