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
                this.set_name("test_helppopup");
                this.set_classname("test_helppopup");
                this.set_titletext("공통팝업 호출 예제");
                this._setFormPosition(0,0,1054,887);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPOPUP", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_DEPTXM", "absolute", "21", "59", "553", "153", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPOPUP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"198\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"기타\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"background:bisque;background2:bisque;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" expr=\"bind:DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Image00", "absolute", "21", "20", "44", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "74", "20", "87", "22", null, null, this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "162", "20", "22", "22", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "185", "20", "140", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "635", "156", "385", "28", null, null, this);
            obj.set_taborder("12");
            obj.set_text("컴포넌트 & 그리드 팝업 호출 예제");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "635", "178", "385", "28", null, null, this);
            obj.set_taborder("13");
            obj.set_text("팝업버튼 및 컴포넌트, 그리드의 이벤트 참고하세요.");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "635", "200", "385", "28", null, null, this);
            obj.set_taborder("14");
            obj.set_text("스크립트 처리는 \"fn_HelpDialoge\" 함수 참고하여 적용하세요.");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "21", "290", "425", "28", null, null, this);
            obj.set_taborder("16");
            obj.set_text("※ 탭 내부의 컴포넌트 & 그리드 팝업호출");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Tab("tabSUB_AREA", "absolute", "21", "326", "689", "274", null, null, this);
            obj.set_taborder("17");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabONE", this.tabSUB_AREA);
            obj.set_text("탭1");
            this.tabSUB_AREA.addChild(obj.name, obj);
            obj = new Grid("grdTM_DEPTXM2", "absolute", "11", "59", "591", "153", null, null, this.tabSUB_AREA.tabONE);
            obj.set_taborder("0");
            obj.set_binddataset("dsPOPUP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"198\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"기타\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"background:bisque;background2:bisque;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" expr=\"bind:DESC\"/></Band></Format></Formats>");
            this.tabSUB_AREA.tabONE.addChild(obj.name, obj);
            obj = new Static("Image00", "absolute", "21", "20", "44", "23", null, null, this.tabSUB_AREA.tabONE);
            obj.set_taborder("1");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.tabSUB_AREA.tabONE.addChild(obj.name, obj);
            obj = new Edit("edtDEPT_CODE", "absolute", "74", "20", "87", "22", null, null, this.tabSUB_AREA.tabONE);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.tabSUB_AREA.tabONE.addChild(obj.name, obj);
            obj = new Static("imgHelpDEPT_CODE", "absolute", "162", "20", "22", "22", null, null, this.tabSUB_AREA.tabONE);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.tabSUB_AREA.tabONE.addChild(obj.name, obj);
            obj = new Edit("edtDEPT_NAME", "absolute", "185", "20", "140", "22", null, null, this.tabSUB_AREA.tabONE);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.tabSUB_AREA.tabONE.addChild(obj.name, obj);
            obj = new Tabpage("tabTWO", this.tabSUB_AREA);
            obj.set_text("탭2");
            this.tabSUB_AREA.addChild(obj.name, obj);

            obj = new Static("Image01", "absolute", "32", "680", "44", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRCDEPT_CODE", "absolute", "85", "680", "87", "22", null, null, this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPRCDEPT_CODE", "absolute", "173", "680", "22", "22", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRCDEPT_NAME", "absolute", "196", "680", "140", "22", null, null, this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "32", "626", "425", "28", null, null, this);
            obj.set_taborder("22");
            obj.set_text("※ 팝업 호출 이후 콜백함수 지정");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabSUB_AREA.tabONE,
            	//-- Layout function
            	function(p) {
            		p.set_text("탭1");

            	}
            );
            this.tabSUB_AREA.tabONE.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1054, 887, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_helppopup");
            		p.set_titletext("공통팝업 호출 예제");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_helppopup.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_helppopup.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	sample_helppopup.xfdl 팝업 사용 예제
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.12		장성환		Initial Created.
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

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_GridSetting(this);

        }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 부서정보 조회 - 팝업버튼&컴포넌트 이벤트로 팝업 호출
        	if ((obj.name == 'imgHelpSHRDEPT_CODE') || (obj.name == 'edtSHRDEPT_NAME')) {

        		arrParam[0] = 'TMM0004';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRDEPT_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRDEPT_CODE,edtSHRDEPT_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        	
        	// 부서정보 조회 - 그리드 컬럼 이벤트를 통한 팝업 호
        	} else if (obj.name == 'grdTM_DEPTXM') {

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:DEPT_NAME") || (sColumnID == "DEPT_NAME")) {
        		
        			arrParam[0] = 'TMM0004';                                 //Popup ID
        			arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        			arrParam[2] = 'DEPT_NAME';                               //콤보조건구분에 대응되는 컬럼
        			arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        			arrParam[4] = 'grdTM_DEPTXM';                            //현재 포커스 Componect명
        			arrParam[5] = 'DEPT_CODE,DEPT_NAME';                     //초기화 및 결과 Mapping Column
        			arrParam[6] = '0,1';                                     //Mapping Column Index
        			arrParam[7] = sFromDs;                                   //Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = sOldValue;                                 //취소 시 변경 이전의 값
        			
        		}
        	
        	// 부서정보 조회 - 탭 안쪽 컴포넌트에서 팝업 호출
        	} else if ((obj.name == 'imgHelpDEPT_CODE') || (obj.name == 'edtDEPT_NAME')) {
        		
        		arrParam[0] = 'TMM0004';                                                          //Popup ID
        		arrParam[1] = '';                                                                 //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.tabSUB_AREA.tabONE.edtDEPT_NAME.value);          //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                                                //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'tabSUB_AREA.tabONE.edtDEPT_NAME';                                  //현재 포커스 Componect명
        		arrParam[5] = 'tabSUB_AREA.tabONE.edtDEPT_CODE,tabSUB_AREA.tabONE.edtDEPT_NAME';  //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                                              //Mapping Column Index
        	 
        	} else if (obj.name == 'grdTM_DEPTXM2') {

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == 'bind:DEPT_NAME')  || (sColumnID == "DEPT_NAME")) {
        		
        			arrParam[0] = 'TMM0004';                                 //Popup ID
        			arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        			arrParam[2] = 'DEPT_NAME';                               //콤보조건구분에 대응되는 컬럼
        			arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        			arrParam[4] = 'tabSUB_AREA.tabONE.grdTM_DEPTXM2';        //현재 포커스 Componect명
        			arrParam[5] = 'DEPT_CODE,DEPT_NAME';                     //초기화 및 결과 Mapping Column
        			arrParam[6] = '0,1';                                     //Mapping Column Index
        			arrParam[7] = sFromDs;                                   //Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = sOldValue;                                 //취소 시 변경 이전의 값
        		}
        	// 팝업 호출 이후 콜백함수 실행
        	} else if ((obj.name == 'imgHelpPRCDEPT_CODE') || (obj.name == 'edtPRCDEPT_NAME')) {
        		
        		arrParam[0] = 'TMM0004';                                                          //Popup ID
        		arrParam[1] = '';                                                                 //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.tabSUB_AREA.tabONE.edtDEPT_NAME.value);          //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                                                //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtPRCDEPT_NAME';                                  //현재 포커스 Componect명
        		arrParam[5] = 'edtPRCDEPT_CODE,edtPRCDEPT_NAME';  //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                                              //Mapping Column Index
        		arrParam[9] = "this.fn_PopupCallback";												// 팝업 콜백함수(반드시 배열파라미터 9번 인덱스에 저장!!!!!)
        		//arrParam[9] = "this.fn_PopupCallback";												// 팝업 콜백함수(반드시 배열파라미터 9번 인덱스에 저장!!!!!)
        	
        	}

        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        
        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        
        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        
        /*------------------------------------+
        | Dataset에서 Help Popup Open         |
        +-------------------------------------*/
        this.dsPY_ADCBUD_OnColumnChanged = function (obj,e) {

        	if (e.columnid == "DEPT_NAME" ) this.fn_HelpDialoge(this.grdPY_ADCBUD, 'YES', e.oldvalue, e.columnid);

        }

        /**
         * 팝업 호출 이후 실행할 콜백함수
         */
        this.fn_PopupCallback = function(returnObject) {
        	alert("팝업선택값 : [" + returnObject + "]");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTM_DEPTXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabSUB_AREA.tabONE.grdTM_DEPTXM2.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tabSUB_AREA.tabONE.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabSUB_AREA.tabONE.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabSUB_AREA.tabONE.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabSUB_AREA.tabONE.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPRCDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPRCDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtPRCDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRCDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("sample_helppopup.xfdl");

       
    };
}
)();
