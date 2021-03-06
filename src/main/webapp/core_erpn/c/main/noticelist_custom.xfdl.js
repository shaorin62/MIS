﻿(function()
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
                this.set_name("noticelist_custom");
                this.set_scrollbars("none");
                this.set_titletext("[기획]공지사항");
                this._setFormPosition(0,0,375,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGWNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"ATCL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", "375", "260", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_MF_bg1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "9", "19", "152", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGWNotice", "absolute", "19", "47", "356", "192", null, null, this);
            obj.set_cssclass("grd_MF_notice");
            obj.set_taborder("55");
            obj.set_binddataset("dsGWNotice");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"Cellgrd_WF_notice\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "18", "9", "105", "32", null, null, this);
            obj.set_taborder("56");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "12", "0", "188", "18", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 375, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]공지사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grdGWNotice","","dsGWNotice","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("noticelist_custom.xfdl", "script::lib_script_common.xjs");
        this.registerScript("noticelist_custom.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>공지사항
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.21		박정훈		Initial Created.
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
        this.sPACKAGENAME = "ComNotice"; //해당 Form에서 사용 할 Package 명

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fn_TransactionCall("GWNotice");

        }

        /*-------------------------------------+
         |  팝업 하단의 닫기버튼 클릭 시    |
         +-------------------------------------*/
        this.fn_Cancel = function(obj,e) {
        	
        }

        /*---------------------------------------+
         |  Transaction 처리					 |
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {
        	
        	switch (pMethodName) {
        	
        		//공지사항 조회
        		case "GWNotice": 

        			this.dsGWNotice.clearData();
        			
        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsGWNotice=dsGWNotice";
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
        	
        	//공지사항 조회
        	if (sKind == "GWNotice") {
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
        	
        	//공지사항 조회
        	if (sMethodName == "GWNotice"){
        	}
        }

        /*------------------+
         |  저장 여부 체크!|
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	return true;
        }

        /*******************************************************
        *  공통코드 DoubleClick 시 공통코드 세부 호출 처리 *
        ********************************************************/
        this.grdGWNotice_oncellclick = function(obj,e) {

        	var sPostData = this.dsGWNotice.getColumn(this.dsGWNotice.rowposition, "ATCL_NO");
        	
        	//var openUrl = application.GBL_GROUPWAREURL + "/ekp/board/atcl.do?cmd=viewAtcl&atclReq.newList=Y&atclReq.atclNo="+addParam;
        	var openUrl = "http://www.nsgportal.net" + "/ekp/board/atcl.do?cmd=viewAtcl&atclReq.newList=Y&atclReq.atclNo=";
        	
        	if (nexacro.Browser == "Runtime") {  	//런타임모드
        		system.execBrowser(openUrl + sPostData);
        	} else {								//브라우저
        		window.open(openUrl + sPostData);
        	}

        }

        
        /*
         * 화면의 표시내용을 갱신한다.
         */
        this.fn_RefreshForm = function() {

        	//	공지사항 목록 조회
        	trace(this.name + " " + this.titletext);
        	
        	this.fn_TransactionCall("GWNotice");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdGWNotice.addEventHandler("oncellclick", this.grdGWNotice_oncellclick, this);

        };

        this.loadIncludeScript("noticelist_custom.xfdl");

       
    };
}
)();
