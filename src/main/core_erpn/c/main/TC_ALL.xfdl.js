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
                this.set_name("TC_ALL");
                this.set_scrollbars("none");
                this.set_titletext("상단컨텐츠");
                this._setFormPosition(0,0,1183,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "37", "26", "210", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "26", "0", "285", "285", null, null, this);
            obj.set_taborder("65");
            obj.set_text("Div00");
            obj.set_url("main::TC_COM_1.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "311", "0", "279", "285", null, null, this);
            obj.set_taborder("69");
            obj.set_text("Div00");
            obj.set_url("main::TC_COM_2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "590", "0", "375", "285", null, null, this);
            obj.set_taborder("70");
            obj.set_text("Div00");
            obj.set_url("main::TC_COM_3.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "965", "0", "218", "285", null, null, this);
            obj.set_taborder("71");
            obj.set_text("Div00");
            obj.set_url("main::TC_COM_4.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divUserImgArea", "absolute", "311", "298", "872", "260", null, null, this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgMyPhoto", "absolute", "0", "0", "872", "260", null, null, this.divUserImgArea);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #bdbdbdff");
            obj.set_stretch("fit");
            obj.set_image("URL('theme://images/main_image.jpg')");
            this.divUserImgArea.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "800", "229", "62", "21", null, null, this.divUserImgArea);
            obj.set_taborder("2");
            obj.set_text("사진변경");
            this.divUserImgArea.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 872, 260, this.divUserImgArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("72");

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
            this._addPreloadList("fdl", "main::TC_COM_1.xfdl");
            this._addPreloadList("fdl", "main::TC_COM_2.xfdl");
            this._addPreloadList("fdl", "main::TC_COM_3.xfdl");
            this._addPreloadList("fdl", "main::TC_COM_4.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TC_ALL.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TC_ALL.xfdl", function() {
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

        
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.bImageShow = false;

        
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 솔루션 운영환경에서는 하단 좌측 버튼 표시
        	if (application._SVCENV == "SOLUTION") {
        		this.Div00.set_url("main::TC_NDS_1.xfdl");	// 사용자정보/휴가일수
        		this.Div01.set_url("main::TC_COM_2.xfdl");	// 달력[공통]
        		this.Div02.set_url("main::TC_NDS_3.xfdl");	// My Today
        		this.Div03.set_url("main::TC_NDS_4.xfdl");	// Day Off 현황
        	} else {
        		this.Div00.set_url("main::TC_COM_1.xfdl");	// 사용자정보/휴가일수
        		this.Div01.set_url("main::TC_COM_2.xfdl");	// 달력[공통]
        		this.Div02.set_url("main::TC_COM_3.xfdl");	// 공지사항
        		this.Div03.set_url("main::TC_COM_4.xfdl");	// 실적현황차트
        	}
        	
        }

        
        /**
         * 나의사진 보이기/숨기기 기능
         */
        this.fn_ToggleImageProfile = function(bImageShow) {
        	
        	this.bImageShow = bImageShow;
        	
        	if (bImageShow) {
        		this.divUserImgArea.set_top(8);
        		this.divUserImgArea.set_visible(true);
        	} else {
        		this.divUserImgArea.set_visible(false);
        		this.divUserImgArea.set_top(304);
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);

        };

        this.loadIncludeScript("TC_ALL.xfdl");
        this.loadPreloadList();
       
    };
}
)();
