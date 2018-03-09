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
                this.set_name("mytoday_common");
                this.set_scrollbars("none");
                this.set_titletext("[솔루션]MY TODAY");
                this._setFormPosition(0,0,375,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_SCHDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_NTYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grdTM_SCHDXM", "absolute", "12", "47", "360", "192", null, null, this);
            obj.set_taborder("55");
            obj.set_binddataset("dsTM_SCHDXM");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_cssclass("grd_MF_notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"255\"/><Column size=\"40\"/><Column size=\"45\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;background2:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_notice\" text=\"bind:SCHD_CNTT\"/><Cell col=\"2\" style=\"align:center middle;\" expandshow=\"expr:SCHD_NTYN == 1 ? 'show':'hide'\" expandsize=\"32\" expandimage=\"URL('theme://images/ico_MF_arlam.png')\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:SCHD_TIME\" mask=\"HH:mm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "18", "9", "121", "32", null, null, this);
            obj.set_taborder("56");
            obj.set_text("MY TODAY");
            obj.set_cssclass("sta_MF_name");
            obj.style.set_font("antialias 15 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "12", "0", "188", "18", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchAdd", "absolute", "295", "15", "67", "24", null, null, this);
            obj.set_taborder("58");
            obj.set_text("일정등록+");
            obj.set_cssclass("btn_MF_button2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 375, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[솔루션]MY TODAY");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("mytoday_common.xfdl", "script::lib_script_common.xjs");
        this.registerScript("mytoday_common.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>사용자정보/휴가일수
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
        this.sSCHD_DATE   = this.fnc_GetServerDateTime("DATE");

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fn_schSearch(this.sSCHD_DATE);
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

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		sReturnString += " SCHD_DATE="	+ this.fnc_Quote(this.sSCHD_DATE);

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
        	}
        }

        /*-------------------------------------+
         |  일정등록 조회 함수      	       |
         +-------------------------------------*/
        this.fn_schSearch = function(pdate){
        	this.sSCHD_DATE = pdate;
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        /*-------------------------------------+
         |  일정등록 클릭!      			   |
         +-------------------------------------*/
        this.btnSchAdd_onclick = function(obj,e){

        	this.fn_openPopUpMyToday();
        }

        this.fn_openPopUpMyToday = function(row){

        	var sPopupId = "MyToday";
        	var sUrl = "main::mytodaylist_common.xfdl";
        	var oArgs = { pSCHD_DATE : this.sSCHD_DATE, pRow : row, sCallback : "fn_myTodayCallback" };
        	var sOptions = "";
        	var sPopupCallback = "fn_myTodayCallback";
        	this.fnc_OpenPopup(sPopupId, sUrl, oArgs, sOptions, sPopupCallback);
        	
        }

        /*-------------------------------------+
         |  일정등록 팝업 호출 후 Callback!      			   |
         +-------------------------------------*/
        this.fn_myTodayCallback = function(){
        	this.fn_TransactionCall("SEARCH00");
        }

        /*-------------------------------------+
         |  그리드 셀 클릭 시    			   |
         +-------------------------------------*/
        this.grdTM_SCHDXM_oncellclick = function(obj,e)
        {
        	if(e.cell == "1"){
        		this.fn_openPopUpMyToday(e.row);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTM_SCHDXM.addEventHandler("oncellclick", this.grdTM_SCHDXM_oncellclick, this);
            this.btnSchAdd.addEventHandler("onclick", this.btnSchAdd_onclick, this);

        };

        this.loadIncludeScript("mytoday_common.xfdl");

       
    };
}
)();
