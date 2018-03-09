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
                this.set_name("Mytoday_P");
                this.set_titletext("MY Today");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,768,368);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_SCHDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_NTYN\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_SCHDXM_Del", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_NTYN\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_SCHDXM", "absolute", "15", "33", "739", "292", null, null, this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_SCHDXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("class").set("styGrid01");
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"596\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"내용\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_edit\" text=\"시간\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"알림여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHD_CNTT\" editlimit=\"80\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:SCHD_TIME\" mask=\"HH:mm\" calendardisplay=\"edit\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:SCHD_NTYN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "261", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "754", "6", "15", "261", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "692", "332", "62", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "700", "0", "64", "8", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchDel", "absolute", "668", "8", "86", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("일정삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchAdd", "absolute", "579", "8", "86", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("일정등록");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "691", "356", "64", "12", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "691", "324", "64", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", "627", "332", "62", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("staSchdDate", "absolute", "15", "6", "176", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_text6");
            obj.style.set_background("transparent URL('theme://images/btn_CalDrop_N.png') left middle");
            obj.style.set_padding("-2 0 0 24");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 768, 368, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("MY Today");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("mytodaylist_common.xfdl", "script::lib_script_common.xjs");
        this.registerScript("mytodaylist_common.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>MY TODAY>일정 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.16		김기환		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "ComMyToday"; //해당 Form에서 사용 할 Package 명
        this.sSCHD_DATE   = this.parent.pSCHD_DATE;
        this.aKeyValue    = new Array(1);
        this.sPreValue	  = "";

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_GridSetting(this); //Grid Sub Cell Property 수정
        	
        	if( this.fnc_Length(this.sSCHD_DATE) > 0 ){
        		var sParamDate = this.fnc_SubStr(this.sSCHD_DATE,0,4) + "." + 
        						 this.fnc_SubStr(this.sSCHD_DATE,4,2) + "." + 
        						 this.fnc_SubStr(this.sSCHD_DATE,6,2);
        						 
        		this.staSchdDate.set_text(sParamDate);		
        				 
        		this.fn_TransactionCall("SEARCH00");
        	}
        }

        /*-------------------------------------+
         |  팝업 하단의 닫기버튼 클릭 시    |
         +-------------------------------------*/
        this.fn_Cancel = function(obj,e) {
        	this.fnc_PopupClose("");
        }

        /*---------------------------------------+
         |  Transaction 처리					 |
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {

        	switch (pMethodName) {
        	
        		//일정 조회
        		case "SEARCH00": 

        			this.dsTM_SCHDXM.clearData();
        			
        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsTM_SCHDXM=dsTM_SCHDXM";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		//일정 저장
        		case "SAVE00": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "dsTM_SCHDXM=dsTM_SCHDXM:U,dsTM_SCHDXM_Del=dsTM_SCHDXM_Del";
        			var sOutDataSet = "";
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
        	
        	//일정 조회
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		sReturnString += " SCHD_DATE="	+ this.fnc_Quote(this.sSCHD_DATE);

        	}
        	//일정 저장
        	else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);

        	}

        	return sReturnString;
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!|
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
        	
        	//일정 조회
        	if (sMethodName == "SEARCH00"){
        		if(!this.IsNull(this.parent.pRow))	this.dsTM_SCHDXM.set_rowposition(this.parent.pRow);
        	}
        	//일정 저장
        	else if(sMethodName == "SAVE00"){
        		this.fnc_Message("TMM103");
        		this.fn_TransactionCall("SEARCH00");
        	}
        }

        /*------------------+
         |  저장 여부 체크!|
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsTM_SCHDXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var sErrMsg = "";

        	for (var row = 0; row < this.dsTM_SCHDXM.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_SCHDXM.getRowType(row)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		//내용이 비어있을 경우
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SCHDXM.getColumn(row, "SCHD_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용", this.dsTM_SCHDXM, row, this.dsTM_SCHDXM, "SCHD_CNTT");
        		}
        		
        		//알림 설정되었지만 시간이 비어있을 경우
        		if (this.dsTM_SCHDXM.getColumn(row, "SCHD_NTYN") == 1 &&
        		    this.fnc_Length(this.fnc_Trim(this.dsTM_SCHDXM.getColumn(row, "SCHD_TIME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM125", "[알림여부]가 체크되었을 경우 [시간]은 필수입력사항입니다!", this.dsTM_SCHDXM, row, this.dsTM_SCHDXM, "SCHD_TIME");
        		}
        	}

        	return true;
        }

        

        /*-------------------------------------+
         |  일정등록 조회 함수      	       |
         +-------------------------------------*/
        this.fn_schSearch = function(pdate){
        	this.sSCHD_DATE = pdate;
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        /*-------------------------------------+
         |  일정등록 버튼 클릭 시       	   |
         +-------------------------------------*/
        this.btnSchAdd_onclick = function(obj,e){

        	var nRow = this.dsTM_SCHDXM.addRow();
        	
        	this.dsTM_SCHDXM.setColumn(nRow, "SCHD_DATE", this.sSCHD_DATE);			//생성일자
        	this.dsTM_SCHDXM.setColumn(nRow, "SCHD_EMNR", application.GBL_EMPLNO);  //생성자 사번(로그인사번)
        	this.dsTM_SCHDXM.setColumn(nRow, "SCHD_NTYN", 0); 					 	//알림설정여부
        	
        }

        /*-------------------------------------+
         |  일정삭제 버튼 클릭 시       	   |
         +-------------------------------------*/
        this.btnSchDel_onclick = function(obj,e){
        	
        	if (this.fnc_ToUpper(this.dsTM_SCHDXM.getRowType(this.dsTM_SCHDXM.rowposition)) == Dataset.ROWTYPE_NORMAL){
        		//삭제될 데이터 복사
        		var sRow = this.dsTM_SCHDXM_Del.addRow();
        		this.dsTM_SCHDXM_Del.copyRow(sRow, this.dsTM_SCHDXM, this.dsTM_SCHDXM.rowposition);
        	}

        	//삭제
        	this.dsTM_SCHDXM.deleteRow(this.dsTM_SCHDXM.rowposition);
        }

        /*-------------------------------------+
         |  저장버튼 클릭 시       	       |
         +-------------------------------------*/
        this.btnSave_onclick = function(obj,e){

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTM_SCHDXM.getColumn(this.dsTM_SCHDXM.rowposition, "SCHD_SEQN");
        	
        	this.fn_TransactionCall("SAVE00");
        }

        /*-------------------------------------+
         |  데이터셋 컬럼 변경 전            |
         +-------------------------------------*/
        this.dsTM_SCHDXM_oncolumnchanged = function(obj,e)
        {
        	
        	switch (e.columnid) {
        		//시간
        		case "SCHD_TIME":

        			var sSCHD_TIME = this.fnc_SubStr(e.newvalue, 0, 4);
        			var sSuc = obj.setColumn(obj.rowposition, "SCHD_TIME", sSCHD_TIME);
        			
        			break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_SCHDXM.addEventHandler("oncolumnchanged", this.dsTM_SCHDXM_oncolumnchanged, this);
            this.dsTM_SCHDXM.addEventHandler("cancolumnchange", this.dsTM_SCHDXM_cancolumnchange, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_Cancel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btnSchDel.addEventHandler("onclick", this.btnSchDel_onclick, this);
            this.btnSchAdd.addEventHandler("onclick", this.btnSchAdd_onclick, this);
            this.btnSave.addEventHandler("onclick", this.btnSave_onclick, this);

        };

        this.loadIncludeScript("mytodaylist_common.xfdl");

       
    };
}
)();
