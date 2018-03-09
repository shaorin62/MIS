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
                this.set_name("comDashBoard");
                this.set_scrollbars("autoboth");
                this.set_titletext("메인_대시보드");
                this._setFormPosition(0,0,1204,730);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMainTop", "absolute", "0", "0", "1204", "322", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_top");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("divTopArea", "absolute", "0", "37", "1183", "285", null, null, this.divMainTop);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_url("main::dashboard_top.xfdl");
            this.divMainTop.addChild(obj.name, obj);

            obj = new Div("divMainBottom", "absolute", "0", "322", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_bottom");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("divBottomArea", "absolute", "0", "25", "1156", "383", null, null, this.divMainBottom);
            obj.set_taborder("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("divBottomArea");
            obj.set_url("main::worktiles_common.xfdl");
            this.divMainBottom.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "112", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "322", "112", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divMainBtn", "absolute", null, "322", "30", "300", "6", null, this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnMyinfo", "absolute", "0", "29", "28", "28", null, null, this.divMainBtn);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_01");
            obj.set_tooltiptext("나의정보");
            this.divMainBtn.addChild(obj.name, obj);
            obj = new Button("btnMyphoto", "absolute", "0", "75", "28", "28", null, null, this.divMainBtn);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_02");
            obj.set_tooltiptext("나의사진");
            this.divMainBtn.addChild(obj.name, obj);
            obj = new Button("btnRollup", "absolute", "0", "121", "28", "28", null, null, this.divMainBtn);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_03");
            obj.set_tooltiptext("나의정보 접기");
            this.divMainBtn.addChild(obj.name, obj);
            obj = new Button("btnSetContent", "absolute", "0", "167", "28", "28", null, null, this.divMainBtn);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_04");
            obj.set_tooltiptext("컨텐츠 설정");
            this.divMainBtn.addChild(obj.name, obj);
            obj = new Button("btnRolldown", "absolute", "0", "230", "28", "28", null, null, this.divMainBtn);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_05");
            obj.set_tooltiptext("나의정보 펼치기");
            obj.set_visible("false");
            this.divMainBtn.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1204, 322, this.divMainTop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_MF_top");
            		p.set_scrollbars("none");

            	}
            );
            this.divMainTop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divMainBottom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_MF_bottom");
            		p.set_scrollbars("none");

            	}
            );
            this.divMainBottom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 30, 300, this.divMainBtn,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_visible("true");
            		p.set_scrollbars("none");

            	}
            );
            this.divMainBtn.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1204, 730, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("autoboth");
            		p.set_titletext("메인_대시보드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "main::dashboard_top.xfdl");
            this._addPreloadList("fdl", "main::worktiles_common.xfdl");
        };
        
        // User Script
        this.addIncludeScript("dashboard_common.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("dashboard_common.xfdl", "script::lib_script_theme.xjs");
        this.registerScript("dashboard_common.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 메인 대시보드
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.25		jsh			Initial Created.
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
        //include "script::lib_script_theme.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.bShowProfile = true;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 테마 설정 적용
        	this.fnc_ThemeSetting(this);
        	
        	this.divMainTop.divTopArea.divFirst.set_url("main::profile_common.xfdl");		// 사용자정보/휴가일수
        	this.divMainTop.divTopArea.divSecond.set_url("main::workcalendar.xfdl");	// 달력[공통]
        	this.divMainTop.divTopArea.divThird.set_url("main::mytoday_common.xfdl");		// My Today
        	this.divMainTop.divTopArea.divFourth.set_url("main::dayoff_common.xfdl");	// Day Off 현황	
        	
        	// 메인 DIV의 넓이는 변경시켜줌
        	this.divMainTop.set_width(this.width);
        	this.divMainBottom.set_width(this.width);
        	
        }

        
        /**
         *  Work Div 내의 업무화면에서 종료(닫기) 버튼 클릭 시 해당 함수 실행
         */
        this.fn_End = function (obj) {
        	this.close();
        }

        
        /**
         * form의 크기가 변경될 때
         */
        this.comDashBoard_onsize = function(obj,e)
        {
        	this.fn_AlignCenter();
        }

        
        /**
         * 개인 정보(프로필정보) 펼침/접힘 버튼 클릭 
         */
        this.divMainBtn_btnRollup_onclick = function(obj,e)
        {

        	this.fn_ToggleProfileLayer(!this.bShowProfile);
        }

        
        /**
         * 나의사진 버튼 클릭 이벤트
         */
        this.divMainBtn_btnMyphoto_onclick = function(obj,e)
        {
        	this.divMainTop.divTopArea.fn_ToggleImageProfile(true);
        }

        /**
         * 나의 프로필 보기 버튼 클릭 시 이벤트
         */
        this.divMainBtn_btnMyinfo_onclick = function(obj,e)
        {
        	this.divMainTop.divTopArea.fn_ToggleImageProfile(false);
        }

        
        /**
         * 화면 사이즈 변경 시 컨텐츠 처리
         */
        this.fn_AlignCenter = function() {
        	
        	var frmw = this.width;
        	var frmh = this.height;
        	
        	var newLeft = 0;
        	var newTop = 0;
        	
        	var basew = 1204;
        	var baseh = 730;
        	
        	// 기본 사이즈는 W 1204, H 730임
        	if (frmw > basew) {
        		newLeft = (frmw - basew) / 2;
        		this.divMainTop.set_width(frmw);
        		this.divMainBottom.set_width(frmw);
        	} else {
        		newLeft = 0;
        		this.divMainTop.set_width(basew);
        		this.divMainBottom.set_width(basew);
        	}
        	
        	this.divMainTop.divTopArea.set_left(newLeft);
        	this.divMainBottom.divBottomArea.set_left(newLeft);
        	
        	// 화면의 크기가 기본보다 커지면.. 
        	if (frmh > baseh) {
        		var h = frmh - baseh;
        		this.divMainBottom.divBottomArea.set_height(383 + h);
        	} else {
        		this.divMainBottom.divBottomArea.set_height(383);
        	}

        	this.resetScroll();
        }

        
        /**
         * 대시보드 상단 나의정보 접기/펼치기
         */
        this.fn_ToggleProfileLayer = function(bShow) {
        	
        	var baseTop = 322;
        	var newTop = 0;
        	
        	var baseClass = "btn_MF_03";
        	var toggleClass = "btn_MF_05";
        	
        	this.bShowProfile = bShow;
        	
        	if (bShow) {
        		this.divMainBtn.btnRollup.set_tooltiptext("나의정보 접기");
        		this.divMainBtn.btnRollup.set_cssclass(baseClass);
        		this.divMainBottom.set_top(baseTop);
        		this.divMainBtn.set_top(baseTop);
        	} else {
        		this.divMainBtn.btnRollup.set_tooltiptext("나의정보 펼치기");
        		this.divMainBtn.btnRollup.set_cssclass(toggleClass);
        		this.divMainBottom.set_top(newTop);
        		this.divMainBtn.set_top(newTop);
        	}
        }

        
        /**
         * 대시보드 바로가기 편집버튼 클릭 시 이벤트 처리
         */
        this.divMainBtn_btnSetContent_onclick = function(obj,e)
        {
        	this.divMainBottom.divBottomArea.fn_SetLinkEditMode();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onsize", this.comDashBoard_onsize, this);
            this.divMainBtn.btnMyinfo.addEventHandler("onclick", this.divMainBtn_btnMyinfo_onclick, this);
            this.divMainBtn.btnMyphoto.addEventHandler("onclick", this.divMainBtn_btnMyphoto_onclick, this);
            this.divMainBtn.btnRollup.addEventHandler("onclick", this.divMainBtn_btnRollup_onclick, this);
            this.divMainBtn.btnSetContent.addEventHandler("onclick", this.divMainBtn_btnSetContent_onclick, this);

        };

        this.loadIncludeScript("dashboard_common.xfdl");
        this.loadPreloadList();
       
    };
}
)();
