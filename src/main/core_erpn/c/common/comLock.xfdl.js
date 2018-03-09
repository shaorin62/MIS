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
                this.set_name("comLock");
                this.set_titletext("System Lock");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1264,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("imgLock", "absolute", "335", "295", "600", "220", null, null, this);
            obj.style.set_border("2 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPASS_WORK", "absolute", "566", "385", "214", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_password("true");
            obj.set_taborder("0");
            obj.style.set_border("1 solid #aaaaaaff");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "566", "463", "340", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("시스템으로 복귀시 비밀번호 입력 후 엔터키를 누르세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "566", "317", "239", "60", null, null, this);
            obj.set_taborder("2");
            obj.set_text("SYSTEM LOCK\r\nEnter you password");
            obj.style.set_font("13 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "357", "341", "145", "129", null, null, this);
            obj.set_taborder("3");
            obj.set_text("디자인 작업 예정");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ff0000ff");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1264, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("System Lock");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comLock.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comLock.xfdl", function() {
        /*******************************************************************************************
         2015.01.25 김석두 (최초 개발)
         본 화면은 공통 버튼 처리 화면 입니다.

         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         *******************************************************************************************/
        //include "script::lib_script_common.xjs"
        this.iPWCheck = false;

        //비밀번호 체크 처리
        this.fn_CheckPassword = function(obj,e) {

        	if (e.keycode != 13) return false;

        	if (this.fnc_GetPasswordEncrypt(this.fnc_Trim(this.edtPASS_WORK.value)) == application.GBL_USERPW) {
        		this.iPWCheck = true;
        		this.close();
        	} else {
        		this.fnc_Message("TMM115");
        	}

        }

        //비밀번호 체크 처리
        this.fn_FormCloseCheck = function(obj,e) {

        	if (this.iPWCheck == false) {
        		this.fnc_Message("TMM115");
        		return false;
        	}

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose", this.fn_FormCloseCheck, this);
            this.edtPASS_WORK.addEventHandler("onkeydown", this.fn_CheckPassword, this);

        };

        this.loadIncludeScript("comLock.xfdl");

       
    };
}
)();
