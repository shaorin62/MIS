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
                this.set_name("TC_COM_1");
                this.set_scrollbars("none");
                this.set_titletext("[기획]사용자정보/휴가");
                this._setFormPosition(0,0,285,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staUserName", "absolute", "144", "9", "140", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_text("한지민 대리");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("staDeptName", "absolute", "144", "40", "140", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("경영지원팀");
            obj.set_cssclass("sta_MF_text1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgProfile", "absolute", "0", "0", "120", "120", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("img_MF_photo");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "120", "8", "25", "104", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnEditProfile", "absolute", "144", "66", "88", "24", null, null, this);
            obj.set_taborder("52");
            obj.set_text("정보수정 >");
            obj.set_cssclass("btn_MF_button1");
            obj.set_tooltiptext("정보수정 >");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangeProfileImage", "absolute", "144", "90", "88", "24", null, null, this);
            obj.set_taborder("53");
            obj.set_text("사진변경 >");
            obj.set_cssclass("btn_MF_button1");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "120", "162", "38", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 38");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "151", "80", "24", null, null, this);
            obj.set_taborder("55");
            obj.set_text("연차휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("staYearlyDay", "absolute", "0", "170", "129", "42", null, null, this);
            obj.set_taborder("56");
            obj.set_text("7<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>15<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "144", "151", "80", "24", null, null, this);
            obj.set_taborder("57");
            obj.set_text("정기휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("staRegularDay", "absolute", "144", "170", "129", "42", null, null, this);
            obj.set_taborder("58");
            obj.set_text("3<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>5<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            this.addChild(obj.name, obj);

            obj = new Static("staVacationInfo", "absolute", "0", "222", "249", "24", null, null, this);
            obj.set_taborder("59");
            obj.set_text("※ 연차휴가 의무사용일수는 <fc v='#ff1d5c'>5일</fc>입니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text3");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 285, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]사용자정보/휴가");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("profile_custom.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("profile_custom.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("profile_custom.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>사용자정보/휴가일수
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		jsh			Initial Created.
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

        

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {

        	// 1. 기본 개인정보 처리(이름, 부서)
        	this.staUserName.set_text(application.GBL_USERNM + " " + application.GBL_OPOSNM);
        	this.staDeptName.set_text(application.GBL_DEPTNM);
        	
        	
        	// 2. 개인 사진 이미지 호출
        	this.fn_LoadProfileImage();
        	
        	// 3. 연차// 정기휴가 잔여일수 조회
        	this.fn_GetHolidayInfo();
        	
        }

        
        /**
         * 정보수정 버튼 클릭 시 인사정보 메뉴로 이동
         */
        this.btnEditProfile_onclick = function(obj,e)
        {
        	this.fn_OpenLinkMenu("MHRMB0030");
        }

        /**
         * 사진변경 버튼 클릭 시 이벤트
         */
        this.btnChangeProfileImage_onclick = function(obj,e)
        {
        	this.fn_UploadProfileImage("PROFILE", "fn_UploadProfileImageCallback");
        }

        
        /*
         * 화면의 표시내용을 갱신한다.
         */
        this.fn_RefreshForm = function() {
        	
        	trace(this.name + " " + this.titletext);
        	
        	// 2. 개인 사진 이미지 호출
        	this.fn_LoadProfileImage();
        	
        	// 3. 연차// 정기휴가 잔여일수 조회
        	this.fn_GetHolidayInfo();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.staDeptName.addEventHandler("onclick", this.Static03_onclick, this);
            this.imgProfile.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.btnEditProfile.addEventHandler("onclick", this.btnEditProfile_onclick, this);
            this.btnChangeProfileImage.addEventHandler("onclick", this.btnChangeProfileImage_onclick, this);

        };

        this.loadIncludeScript("profile_custom.xfdl");

       
    };
}
)();
