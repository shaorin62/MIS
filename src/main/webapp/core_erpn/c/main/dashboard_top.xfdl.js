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
                this.set_name("dashboard_top");
                this.set_scrollbars("none");
                this.set_titletext("상단컨텐츠");
                this._setFormPosition(0,0,1183,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "37", "26", "210", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divFirst", "absolute", "26", "0", "285", "285", null, null, this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Div("divSecond", "absolute", "311", "0", "279", "285", null, null, this);
            obj.set_taborder("69");
            obj.set_url("main::workcalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divThird", "absolute", "590", "0", "375", "285", null, null, this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Div("divFourth", "absolute", "965", "0", "218", "285", null, null, this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Div("divUserImgArea", "absolute", "311", "298", "872", "260", null, null, this);
            obj.set_taborder("72");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgMyPhoto", "absolute", "0", "0", "872", "260", null, null, this.divUserImgArea);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #bdbdbdff");
            obj.set_stretch("fit");
            obj.set_image("URL('theme://images/main_image.jpg')");
            this.divUserImgArea.addChild(obj.name, obj);
            obj = new Button("btnImageChange", "absolute", "800", "229", "62", "21", null, null, this.divUserImgArea);
            obj.set_taborder("2");
            obj.set_text("사진변경");
            obj.set_tooltiptext("사진변경");
            this.divUserImgArea.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 285, 285, this.divFirst,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");

            	}
            );
            this.divFirst.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 872, 260, this.divUserImgArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("72");
            		p.set_visible("false");

            	}
            );
            this.divUserImgArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1183, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("상단컨텐츠");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "main::workcalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("dashboard_top.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("dashboard_top.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("dashboard_top.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드 상단
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.26		jsh			Initial Created.
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
        //include "script::lib_script_dashboard.xjs"

        
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.bImageShow = false;

        
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fn_RefreshForm();
        }

        
        /**
         * 나의사진 보이기/숨기기 기능
         */
        this.fn_ToggleImageProfile = function(bImageShow) {
        	
        	this.bImageShow = bImageShow;
        	
        	if (bImageShow) {
        		this.divUserImgArea.set_top(0);
        		this.divUserImgArea.set_visible(true);
        	} else {
        		this.divUserImgArea.set_visible(false);
        		this.divUserImgArea.set_top(298);
        	}

        }

        /**
         * 프로필의 나의사진 변경 버튼 클릭 시
         */
        this.divUserImgArea_btnImageChange_onclick = function(obj,e)
        {
        	this.fn_UploadProfileImage("MYPHOTO", "fn_LoadMyPhoto");
        }

        /**
         * 나의사진 이미지를 조회한다.
         */
        this.fn_LoadMyPhoto = function(popupId,type) {
        	
        	if (type == "SAVE") {
        		var imgProviderUrl = application.GBL_HTTPURL;
        		imgProviderUrl += "/core/erp/com/ComMain_LoadFrameImage.do";
        		imgProviderUrl += "?user=" + application.GBL_USERID;
        		imgProviderUrl += "&tstamp=" + (new Date()).getTime();
        		
        		this.divUserImgArea.imgMyPhoto.set_image(imgProviderUrl);
        	}
        }

        /**
         * 폼의 표시내용을 초기화 한다.
         */
        this.fn_RefreshForm = function() {
        	this.fn_LoadMyPhoto("", "SAVE");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.divUserImgArea.btnImageChange.addEventHandler("onclick", this.divUserImgArea_btnImageChange_onclick, this);

        };

        this.loadIncludeScript("dashboard_top.xfdl");
        this.loadPreloadList();
       
    };
}
)();
