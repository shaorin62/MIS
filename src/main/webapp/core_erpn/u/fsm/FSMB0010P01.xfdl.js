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
                this.set_name("FSMB0010P01");
                this.set_titletext("자산 이미지 상세 보기");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,760);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("imgASST_PHOTO", "absolute", "15", "30", null, null, "15", "44", this);
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("3");
            obj.set_imagealign("left middle");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "15", "6", null, "21", "15", null, this);
            obj.set_taborder("6");
            obj.set_text("ESC키 또는 이미지를 클릭하시면 해당 화면이 종료됩니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "0", "120", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "376", "0", "56", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnASST_PHOTO", "absolute", null, "5", "86", "21", "15", null, this);
            obj.set_taborder("11");
            obj.set_text("원본이미지");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnd", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("12");
            obj.set_text("종료");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "918", "716", "64", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "918", "748", "64", "12", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 760, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산 이미지 상세 보기");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FSMB0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0010P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0010P01 자산이미지 상세보기
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.04		권미영		Initial Created.
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
        this.sPACKAGENAME 	= "FAMB0010P01";

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
            this.btnASST_PHOTO.addEventHandler("onclick", this.fn_ImageStretch, this);
            this.btnEnd.addEventHandler("onclick", this.fn_ClosePhotoPopUp, this);

        };

        this.loadIncludeScript("FSMB0010P01.xfdl");

       
    };
}
)();
