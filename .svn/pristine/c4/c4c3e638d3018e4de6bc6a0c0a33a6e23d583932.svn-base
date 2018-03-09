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
                this.set_name("HRMB0910P01");
                this.set_scrollbars("none");
                this.set_titletext("인재Pool관리 이미지 상세보기");
                this._setFormPosition(0,0,990,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("imgASST_PHOTO", "absolute", "8", "60", null, null, "8", "8", this);
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("3");
            obj.set_imagealign("left middle");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "8", "32", "710", "23", null, null, this);
            obj.set_text("* ESC키 또는 이미지를 클릭하시면 해당 화면이 종료됩니다. *");
            obj.style.set_color("blue");
            obj.style.set_align("left");
            obj.style.set_font("9 굴림");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", "526", "31", "456", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnASST_PHOTO", "absolute", null, "1", "86", "23", "58", null, this.div_ButtonList);
            obj.set_taborder("2");
            obj.set_text("원본이미지");
            obj.set_cssclass("styTextButtonBizProc");
            this.div_ButtonList.addChild(obj.name, obj);
            obj = new Button("btnEnd", "absolute", "87.72%", "1", null, "23", "0.22%", null, this.div_ButtonList);
            obj.set_taborder("3");
            obj.set_cssclass("styCommBtnClose");
            obj.set_visible("true");
            obj.style.set_cursor("hand");
            this.div_ButtonList.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("left middle");
            obj.style.set_font("GulimChe,11, bold");
            obj.set_text("인재Pool관리 이미지 상세보기");
            this.addChild(obj.name, obj);

            obj = new Static("stFormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("8");
            obj.set_text("인사관리>인사기본>인재Pool관 이미지 상세보기");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 456, 25, this.div_ButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");

            	}
            );
            this.div_ButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 990, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("인재Pool관리 이미지 상세보기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRMB0910P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0910P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0910P01 인재Pool관리 이미지 상세보기
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.12		황치웅		Initial Created.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sFILE_PATH 	= this.parent.sFILE_PATH;
        this.sFILE_NAME 	= this.parent.sFILE_NAME;
        this.sPACKAGENAME 	= "HRMB0910P01";

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_ShowImageFile(this.imgASST_PHOTO, this.sFILE_PATH, this.sFILE_NAME);
        	this.fn_ImageStretch();

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------+
         |  이미지 확대 축소   |
         +---------------------*/
        this.fn_ImageStretch = function () {

        	if (this.imgASST_PHOTO.stretch == "fit") {
        		this.div_ButtonList.btnASST_PHOTO.set_text("화면에맞게");
        		this.imgASST_PHOTO.set_stretch("none");

        	} else {
        		this.div_ButtonList.btnASST_PHOTO.set_text("원본이미지");
        		this.imgASST_PHOTO.set_stretch("fit");

        	}

        }

        /*------------------------+
         |  사진파일 팝업 Close!  |
         +------------------------*/
        this.fn_ClosePhotoPopUp = function (obj){
        	this.fnc_PopupClose();
        }

        this.fn_HotKey = function(obj,e) {
        	if (e.keycode == 27) this.fn_ClosePhotoPopUp();
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.imgASST_PHOTO.addEventHandler("onclick", this.fn_ClosePhotoPopUp, this);
            this.div_ButtonList.btnASST_PHOTO.addEventHandler("onclick", this.fn_ImageStretch, this);
            this.div_ButtonList.btnEnd.addEventHandler("onclick", this.fn_ClosePhotoPopUp, this);

        };

        this.loadIncludeScript("HRMB0910P01.xfdl");

       
    };
}
)();
