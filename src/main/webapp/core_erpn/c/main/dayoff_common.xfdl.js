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
                this.set_name("dayoff_common");
                this.set_scrollbars("none");
                this.set_titletext("[솔루션]Day OFF");
                this._setFormPosition(0,0,218,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDAYOFF", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "34", "0", "151", "18", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "9", "40", "113", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "39", "9", "135", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("DAY OFF");
            obj.set_cssclass("sta_MF_name");
            obj.style.set_font("antialias 15 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("staDeptName", "absolute", "39", "48", "175", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 13 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "39", "104", "52", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("외출");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "39", "151", "52", "30", null, null, this);
            obj.set_taborder("13");
            obj.set_text("출장");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "39", "197", "52", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("휴가");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "26", "34", "151", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "40", "93", "150", "1", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "40", "144", "150", "1", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "40", "190", "150", "1", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "40", "237", "150", "1", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("staOS", "absolute", "133", "96", "57", "40", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_MF_text4");
            obj.set_text("0<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staBT", "absolute", "133", "147", "57", "40", null, null, this);
            obj.set_taborder("25");
            obj.set_text("0<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staHO", "absolute", "133", "193", "57", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_text("0<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 218, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[솔루션]Day OFF");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("dayoff_common.xfdl", "script::lib_script_common.xjs");
        this.registerScript("dayoff_common.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>사용자정보/DAYOFF
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.29		김기환		Initial Created.
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
        this.sPACKAGENAME = "ComDayOff"; //해당 Form에서 사용 할 Package 명

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {

        	this.staDeptName.set_text(application.GBL_DEPTNM); //부서명
        	
        	//출장관련정보 재설계로 인한 쿼리 보류(2016.12.29)
        	//this.fn_TransactionCall("SEARCH00");
        }

        /*---------------------------------------+
         |  Transaction 처리
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {

        	switch (pMethodName) {
        	
        		//현재월 데이터 조회
        		case "SEARCH00": 

        			this.fnc_DatasetClear("dsDAYOFF");
        			
        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsDAYOFF=dsDAYOFF";
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
        		sReturnString += " DEPT_CODE="	+ this.fnc_Quote(application.GBL_DEPTCD); //부서코드
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

        		for(var i = 0; i < this.dsDAYOFF.rowcount; i++){
        			
        			switch (this.dsDAYOFF.getColumn(i,"GUBN")) {
        				case 'A' : this.staOS.set_text(this.dsDAYOFF.getColumn(i,"CNT")+"<fs v='11'>명</fs>"); break;
        				case 'B' : this.staBT.set_text(this.dsDAYOFF.getColumn(i,"CNT")+"<fs v='11'>명</fs>"); break;
        				case 'C' : this.staHO.set_text(this.dsDAYOFF.getColumn(i,"CNT")+"<fs v='11'>명</fs>"); break;
        			}
        		}
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.staDeptName.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);

        };

        this.loadIncludeScript("dayoff_common.xfdl");

       
    };
}
)();
