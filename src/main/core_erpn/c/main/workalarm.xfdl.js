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
                this.set_name("workalarm");
                this.set_titletext("WORK 알림");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,625,365);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_WKNTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"WKNT_TYCD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WKNT_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"INUS_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"INUS_EMNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WKNT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "5", "25", "261", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "504", "353", "64", "12", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "25", "25", "590", "303", null, null, this);
            obj.set_cssclass("grd_MF_Workalarm");
            obj.set_taborder("28");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsTM_WKNTXM");
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"147\"/><Column size=\"240\"/><Column size=\"50\"/><Column size=\"94\"/></Columns><Rows><Row size=\"55\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"background:stretch;background2:stretch;selectbackground:stretch;backgroundimage:bind:FILE_INFO;controlimage:URL('theme://images\\bg_BT_Mdi.png');\" text=\"theme://images/bg_WF_workpop2.png\"/><Cell col=\"1\" style=\"align:right;padding:0 0 0 24;background:URL('theme://images/bg_WF_workpop.png');background2:URL('theme://images/bg_WF_workpop.png');font:9 Dotum;selectbackground:URL('theme://images/bg_WF_workpop.png');selectcolor:#333333ff;selectfont:9 Dotum;\" text=\"expr:WKNT_TYCD_NAME + &quot; &gt; &quot;\"/><Cell col=\"2\" style=\"align:left;background:URL('theme://images/bg_WF_workpop_1.png');background2:URL('theme://images/bg_WF_workpop_1.png');color:#5578daff;color2:#5578daff;font:9 Dotum;selectbackground:URL('theme://images/bg_WF_workpop_1.png');selectcolor:#5578daff;selectfont:9 Dotum;\" text=\"expr:WKNT_CNTT.length &gt; 22 ? WKNT_CNTT.substr(0,20) + &quot;..&quot; :  WKNT_CNTT\" autosizecol=\"limitmin\"/><Cell col=\"3\" style=\"background:URL('theme://images/bg_WF_workpop_1.png');background2:URL('theme://images/bg_WF_workpop_1.png');font:9 Dotum;selectbackground:URL('theme://images/bg_WF_workpop_1.png');selectcolor:#333333ff;selectfont:9 Dotum;\" text=\"bind:INUS_EMNR_NAME\"/><Cell col=\"4\" style=\"align:center middle;background:URL('theme://images/bg_WF_workpop_2.png');background2:URL('theme://images/bg_WF_workpop_2.png');color:#9e9e9eff;color2:#9e9e9eff;font:9 Dotum;selectbackground:URL('theme://images/bg_WF_workpop_2.png');selectcolor:#9e9e9eff;selectfont:9 Dotum;\" text=\"bind:WKNT_DATE\" mask=\"expr:'9999-99-99'\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "595", "25", "30", "195", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "529", "329", "62", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel00", "absolute", "444", "329", "82", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 625, 365, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("WORK 알림");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("workalarm.xfdl", "script::lib_script_common.xjs");
        this.registerScript("workalarm.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>알람메뉴>알람내역조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.17		남상기		Initial Created.
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
        this.sPACKAGENAME 	= 	"ComWorkAlarm"; //해당 Form에서 사용 할 Package 명
        this.sTRAN_GUBN		=	"";   // TranGubn(U : 알람읽음 업데이트, D : 전체삭제)

        /*
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fn_schSearch();
        	
        }

        /*---------------------------------------+
         |  Transaction 처리
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {

        	switch (pMethodName) {
        	
        		//현재기준 알람 리스트 조회
        		case "SEARCH00": 

        			this.fnc_DatasetClear("dsTM_WKNTXM ");
        			
        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsTM_WKNTXM=dsTM_WKNTXM";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		//현재기준 업데이트, 전체삭제
        		case "SAVE00": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
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

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        	
        	}
        	
        	if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="			+ this.fnc_Quote(sKind);
        		sReturnString += " tranGubn="		+ this.fnc_Quote(sTRAN_GUBN);
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
        	
        		for(var i= 0; i < this.dsTM_WKNTXM.getRowCount(); i++)
        		{
        			//사진정보 set
        			var v = this.fnc_GetProfileImageURL(this.dsTM_WKNTXM.getColumn(i, "INUS_EMNR"));
        		    this.dsTM_WKNTXM.addColumn("FILE_INFO","String","256");
        		    this.dsTM_WKNTXM.setColumn(i,"FILE_INFO",v);
        		    
        		    
        		}
        		this.fn_PostProcess(sMethodName);
        		
        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        				
        		this.fn_schUpdate();
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		//전체 삭제 후 재조회
        		if (sTRAN_GUBN == "D") this.fn_schSearch();
        	}
        	
        }

        /*-------------------------------------+
         |  알림 조회 함수      	       |
         +-------------------------------------*/
        this.fn_schSearch = function(){
        	this.fn_TransactionCall("SEARCH00");
        }

        /*-------------------------------------+
         |  알람업데이트 함수      	       |
         +-------------------------------------*/
        this.fn_schUpdate = function(){

        	sTRAN_GUBN	=	"U";
        	this.fn_TransactionCall("SAVE00");
        	
        }

        /*-------------------------------------+
         |  알람삭제 함수      	       |
         +-------------------------------------*/
        this.fn_schDelete = function(){

        	sTRAN_GUBN	=	"D";
        	this.fn_TransactionCall("SAVE00");
        	
        }

        /*-------------------------------------+
         |  닫기 버튼  함수      	       |
         +-------------------------------------*/
        this.fn_Cancel = function(obj,e) {

        	this.close();
        	
        }

        this.btnCancel00_onclick = function(obj,e) {

        	this.fn_schDelete();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btnCancel00.addEventHandler("onclick", this.btnCancel00_onclick, this);

        };

        this.loadIncludeScript("workalarm.xfdl");

       
    };
}
)();
