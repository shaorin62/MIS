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
                this.set_name("workcalendar");
                this.set_scrollbars("none");
                this.set_titletext("[공통]달력");
                this._setFormPosition(0,0,279,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"SUN0\" type=\"STRING\" size=\"256\"/><Column id=\"MON0\" type=\"STRING\" size=\"256\"/><Column id=\"TUE0\" type=\"STRING\" size=\"256\"/><Column id=\"WED0\" type=\"STRING\" size=\"256\"/><Column id=\"THU0\" type=\"STRING\" size=\"256\"/><Column id=\"FRI0\" type=\"STRING\" size=\"256\"/><Column id=\"SAT0\" type=\"STRING\" size=\"256\"/><Column id=\"SUN1\" type=\"STRING\" size=\"256\"/><Column id=\"MON1\" type=\"STRING\" size=\"256\"/><Column id=\"TUE1\" type=\"STRING\" size=\"256\"/><Column id=\"WED1\" type=\"STRING\" size=\"256\"/><Column id=\"THU1\" type=\"STRING\" size=\"256\"/><Column id=\"FRI1\" type=\"STRING\" size=\"256\"/><Column id=\"SAT1\" type=\"STRING\" size=\"256\"/><Column id=\"SUN2\" type=\"STRING\" size=\"256\"/><Column id=\"MON2\" type=\"STRING\" size=\"256\"/><Column id=\"TUE2\" type=\"STRING\" size=\"256\"/><Column id=\"WED2\" type=\"STRING\" size=\"256\"/><Column id=\"THU2\" type=\"STRING\" size=\"256\"/><Column id=\"FRI2\" type=\"STRING\" size=\"256\"/><Column id=\"SAT2\" type=\"STRING\" size=\"256\"/><Column id=\"SUN3\" type=\"STRING\" size=\"256\"/><Column id=\"MON3\" type=\"STRING\" size=\"256\"/><Column id=\"TUE3\" type=\"STRING\" size=\"256\"/><Column id=\"WED3\" type=\"STRING\" size=\"256\"/><Column id=\"THU3\" type=\"STRING\" size=\"256\"/><Column id=\"FRI3\" type=\"STRING\" size=\"256\"/><Column id=\"SAT3\" type=\"STRING\" size=\"256\"/><Column id=\"SUN4\" type=\"STRING\" size=\"256\"/><Column id=\"MON4\" type=\"STRING\" size=\"256\"/><Column id=\"TUE4\" type=\"STRING\" size=\"256\"/><Column id=\"WED4\" type=\"STRING\" size=\"256\"/><Column id=\"THU4\" type=\"STRING\" size=\"256\"/><Column id=\"FRI4\" type=\"STRING\" size=\"256\"/><Column id=\"SAT4\" type=\"STRING\" size=\"256\"/><Column id=\"SUN5\" type=\"STRING\" size=\"256\"/><Column id=\"MON5\" type=\"STRING\" size=\"256\"/><Column id=\"TUE5\" type=\"STRING\" size=\"256\"/><Column id=\"WED5\" type=\"STRING\" size=\"256\"/><Column id=\"THU5\" type=\"STRING\" size=\"256\"/><Column id=\"FRI5\" type=\"STRING\" size=\"256\"/><Column id=\"SAT5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_SCHDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "279", "260", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MF_bg1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Calendar", "absolute", "15", "47", "248", "199", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_date");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell style=\"color:#f84f4fff;\" text=\"bind:SUN0\"/><Cell col=\"1\" text=\"bind:MON0\"/><Cell col=\"2\" text=\"bind:TUE0\"/><Cell col=\"3\" text=\"bind:WED0\"/><Cell col=\"4\" style=\"selectbackground: ;\" text=\"bind:THU0\"/><Cell col=\"5\" text=\"bind:FRI0\"/><Cell col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT0\"/><Cell row=\"1\" style=\"color:#f84f4fff;\" text=\"bind:SUN1\"/><Cell row=\"1\" col=\"1\" text=\"bind:MON1\"/><Cell row=\"1\" col=\"2\" text=\"bind:TUE1\"/><Cell row=\"1\" col=\"3\" text=\"bind:WED1\"/><Cell row=\"1\" col=\"4\" text=\"bind:THU1\"/><Cell row=\"1\" col=\"5\" text=\"bind:FRI1\"/><Cell row=\"1\" col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT1\"/><Cell row=\"2\" style=\"color:#f84f4fff;\" text=\"bind:SUN2\"/><Cell row=\"2\" col=\"1\" text=\"bind:MON2\"/><Cell row=\"2\" col=\"2\" text=\"bind:TUE2\"/><Cell row=\"2\" col=\"3\" text=\"bind:WED2\"/><Cell row=\"2\" col=\"4\" text=\"bind:THU2\"/><Cell row=\"2\" col=\"5\" text=\"bind:FRI2\"/><Cell row=\"2\" col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT2\"/><Cell row=\"3\" style=\"color:#f84f4fff;\" text=\"bind:SUN3\"/><Cell row=\"3\" col=\"1\" text=\"bind:MON3\"/><Cell row=\"3\" col=\"2\" text=\"bind:TUE3\"/><Cell row=\"3\" col=\"3\" text=\"bind:WED3\"/><Cell row=\"3\" col=\"4\" text=\"bind:THU3\"/><Cell row=\"3\" col=\"5\" text=\"bind:FRI3\"/><Cell row=\"3\" col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT3\"/><Cell row=\"4\" style=\"color:#f84f4fff;\" text=\"bind:SUN4\"/><Cell row=\"4\" col=\"1\" text=\"bind:MON4\"/><Cell row=\"4\" col=\"2\" text=\"bind:TUE4\"/><Cell row=\"4\" col=\"3\" text=\"bind:WED4\"/><Cell row=\"4\" col=\"4\" text=\"bind:THU4\"/><Cell row=\"4\" col=\"5\" text=\"bind:FRI4\"/><Cell row=\"4\" col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT4\"/><Cell row=\"5\" style=\"color:#f84f4fff;\" text=\"bind:SUN5\"/><Cell row=\"5\" col=\"1\" text=\"bind:MON5\"/><Cell row=\"5\" col=\"2\" text=\"bind:TUE5\"/><Cell row=\"5\" col=\"3\" text=\"bind:WED5\"/><Cell row=\"5\" col=\"4\" text=\"bind:THU5\"/><Cell row=\"5\" col=\"5\" text=\"bind:FRI5\"/><Cell row=\"5\" col=\"6\" style=\"color:#5e95eeff;\" text=\"bind:SAT5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staYyyyMm", "absolute", "80", "9", "121", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_text6");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "277", "53", "2", "186", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MF_PreMonth", "absolute", "70", "5", "21", "36", null, null, this);
            obj.set_taborder("3");
            obj.set_text("<");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MF_NextMonth", "absolute", "195", "4", "21", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_text(">");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "61", "0", "151", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "53", "25", "185", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "253", "53", "24", "185", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 279, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[공통]달력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("workcalendar.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("workcalendar.xfdl", "script::lib_gfn.xjs");
        this.registerScript("workcalendar.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>일정관리/Calendar
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.10		김기환		Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_gfn.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "ComWorkCalendar"; //해당 Form에서 사용 할 Package 명
        this.sDisplayYearMonth = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6);
        this.nCurrCell  = "";

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.staYyyyMm.set_text(this.fnc_SubStr(this.sDisplayYearMonth, 0, 4) + "." + this.fnc_SubStr(this.sDisplayYearMonth, 4, 2));
        	
        	// 블루테마 경우만 color 변경
        	if ( application.GBL_THEMECD == "BLUE" ){
        		var nCell;
        		
        		for( var i=0; i<6; i++ ){
        			nCell = (i*7)+0;
        			this.grd_Calendar.setCellProperty("body", nCell, "color" , "#ff8080"); //일요일 
        			this.grd_Calendar.setCellProperty("body", nCell, "color2", "#ff8080"); //일요일
        			
        			nCell = (i*7)+6;
        			this.grd_Calendar.setCellProperty("body", nCell, "color" , "#84c0f8"); //토요일
        			this.grd_Calendar.setCellProperty("body", nCell, "color2", "#84c0f8"); //토요일
        		}
        	}
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        /*---------------------------------------+
         |  Transaction 처리
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {

        	switch (pMethodName) {
        	
        		//현재월 데이터 조회
        		case "SEARCH00": 

        			this.fnc_DatasetClear("dsTM_SCHDXM");
        			
        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsTM_SCHDXM=dsTM_SCHDXM";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        	}
        	
        	//Transaction Call!!
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		sReturnString += " SCHD_YYMM="	+ this.fnc_Quote(this.sDisplayYearMonth);

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
        		this.fn_setCalender(this.sDisplayYearMonth);
        	}
        }

        /*------------------------------------+
        |  Grid 셀 클릭 이벤트              |
        +-------------------------------------*/
        this.grd_Calendar_oncellclick = function(obj,e){

        	//농심기획용이면 SKIP!
        	if( application._SVCENV == "CUSTOMER")	return;
        	
        	if( !this.IsNull(this.parent.divThird) ){
        	
        		var sText = this.dsCalendar.getColumn(0, e.cell);

        		if( this.fnc_Length(this.fnc_Trim(sText)) < 1 ){
        			return;
        		}
        		
        		var sDd = this.fnc_LPad(sText, 0, 2) ;
        		var sDate = this.sDisplayYearMonth.concat(sDd);
        		
        		this.parent.divThird.fn_schSearch(sDate); //일정관리 조회(솔루션)
        	}
        }

        /*------------------------------------+
        |  Grid 셀 더블클릭 이벤트  		  |
        +-------------------------------------*/
        this.grd_Calendar_oncelldblclick = function(obj,e){
        	
        	//솔루션용이면 SKIP!
        	if( application._SVCENV == "SOLUTION")	return;
        	
        	var sText = this.dsCalendar.getColumn(0, e.cell);

        	if( this.fnc_Length(this.fnc_Trim(sText)) < 1 )	return;
        	
        	if( !this.IsNull(this.parent.divThird) ){
        	
        		this.nCurrCell = e.cell;
        		
        		var sDd = this.fnc_LPad(sText, 0, 2) ;
        		var sDate = this.sDisplayYearMonth.concat(sDd);
        		
        		//일정등록 팝업 호출
        		var sPopupId = "MyToday";
        		var sUrl = "main::mytodaylist_common.xfdl";
        		var oArgs = { pSCHD_DATE : sDate, sCallback : "fn_myTodayCallback" };
        		var sOptions = "";
        		var sPopupCallback = "fn_myTodayCallback";
        		this.fnc_OpenPopup(sPopupId, sUrl, oArgs, sOptions, sPopupCallback);
        	
        	}
        }

        /*-------------------------------------+
         |  일정등록 팝업 호출 후 Callback!      			   |
         +-------------------------------------*/
        this.fn_myTodayCallback = function(){
        	this.fn_TransactionCall("SEARCH00");
        }

        /*------------------------------------+
        |  이전달 버튼 클릭 이벤트  |
        +-------------------------------------*/
        this.btn_MF_PreMonth_onclick = function(obj,e)
        {
        	var sYm = this.sDisplayYearMonth.concat("01");
        	
        	this.sDisplayYearMonth = this.fnc_SubStr(this.fnc_AddMonth(sYm, -1), 0, 6);
        	this.staYyyyMm.set_text(this.fnc_SubStr(this.sDisplayYearMonth, 0, 4) + "." + this.fnc_SubStr(this.sDisplayYearMonth, 4, 2));
        	
        	this.nCurrCell = "";
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        /*------------------------------------+
        |  다음달 버튼 클릭 이벤트  |
        +-------------------------------------*/
        this.btn_MF_NextMonth_onclick = function(obj,e)
        {
        	var sYm = this.sDisplayYearMonth.concat("01");
        	
        	this.sDisplayYearMonth = this.fnc_SubStr(this.fnc_AddMonth(sYm, +1), 0, 6);
        	this.staYyyyMm.set_text(this.fnc_SubStr(this.sDisplayYearMonth, 0, 4) + "." + this.fnc_SubStr(this.sDisplayYearMonth, 4, 2));
        	
        	this.nCurrCell = "";
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        /*------------------------------------+
        |  달력 데이터 세팅  |
        +-------------------------------------*/
        this.fn_setCalender = function(pYyMm){
        								
        	var sDate 	 = this.fnc_GetServerDateTime("DATE"); //현재날짜(YYYYMM)
        	var sDd   	 = this.fnc_SubStr(sDate, 6, 2);       //현재일(YYYYMMDD)
        	var sYm   	 = this.staYyyyMm.text.replace(".", "");   //생성년월(YYYYMM)
        	var sParamDate = pYyMm.concat("01");				   //생성일자(YYYYMMDD)
        	var sDay 	 = (this.fnc_GetDay(sParamDate))%7; 	   //요일 반환
        	var sLastDay = this.fnc_GetLastDayOfMonth(sParamDate); //마지막 일을 반환
        	var sCalData = 1;
        	var bfocus 	 = false;	//현재년월과 생성년월 일치여부
        	var nCell;
        	
        	//1. 조회 달력 데이터셋으로 데이터 복사
        	this.dsCalendar.clearData();
        	var nRow = this.dsCalendar.addRow();

        	for( var i=0; i < 6; i++ ){
        		for( var j=0; j<7; j++ ){
        			nCell = (i*7)+j;
        			
        			if( (i==0 && j<sDay) || (sCalData > sLastDay) ){
        				this.grd_Calendar.setCellProperty( "body", nCell, "cssclass", "Cellgrd_MF_noimg");
        				continue;
        			}
        			
        			this.dsCalendar.setColumn(nRow, nCell, sCalData);
        			
        			if( (sYm == this.fnc_SubStr(sDate, 0, 6)) && (Number(sDd) == sCalData) ){
        			
        				bfocus = true;	//현재년월과 생성년월 일치
        				if(this.IsNull(this.nCurrCell))	this.nCurrCell = nCell;
        			}
        			
        			if(this.dsTM_SCHDXM.findRowExpr("SCHD_DATE == '"+sYm.concat(sCalData)+"'") >= 0){
        				this.grd_Calendar.setCellProperty( "body", nCell, "cssclass", "Cellgrd_MF_link"); //밑줄
        			}else{
        				this.grd_Calendar.setCellProperty( "body", nCell, "cssclass", "");
        			}
        			
        			sCalData++;
        		}
        	}

        	//2. 포커스 이동
        	if(this.IsNull(this.nCurrCell)){
        		//현재월이 아닌 경우 마지막 셀로 포커스 이동(cssclass가 없을 경우 처음CELL로 포커스 되는현상 제거)
        		this.grd_Calendar.setCellPos(41); //포커스
        	}else{
        		this.grd_Calendar.setCellPos(this.nCurrCell); //포커스
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grd_Calendar.addEventHandler("oncellclick", this.grd_Calendar_oncellclick, this);
            this.grd_Calendar.addEventHandler("oncelldblclick", this.grd_Calendar_oncelldblclick, this);
            this.btn_MF_PreMonth.addEventHandler("onclick", this.btn_MF_PreMonth_onclick, this);
            this.btn_MF_NextMonth.addEventHandler("onclick", this.btn_MF_NextMonth_onclick, this);

        };

        this.loadIncludeScript("workcalendar.xfdl");

       
    };
}
)();
