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
                this.set_name("TMMB0080");
                this.set_titletext("비밀번호변경");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,400,300);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnEnd", "absolute", "339", "48", "55", "23", null, null, this);
            obj.set_defaultbutton("TRUE");
            obj.set_taborder("4");
            obj.set_text("종료");
            obj.set_cssclass("btnend");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "30", "120", "336", "90", null, null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "40", "129", "127", "25", null, null, this);
            obj.set_text("이전 비밀번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx3", "absolute", "167", "129", "189", "25", null, null, this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.addChild(obj.name, obj);

            obj = new Edit("edtORIG_PASS", "absolute", "169", "131", "185", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_password("true");
            obj.set_taborder("0");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "40", "153", "127", "25", null, null, this);
            obj.set_text("변경 비밀번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "167", "153", "189", "25", null, null, this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNEWX_PW01", "absolute", "169", "155", "185", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_password("true");
            obj.set_taborder("1");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "40", "177", "127", "25", null, null, this);
            obj.set_text("비밀번호 확인");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "167", "177", "189", "25", null, null, this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNEWX_PW02", "absolute", "169", "179", "185", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_password("true");
            obj.set_taborder("2");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnXxxx0", "absolute", "235", "48", "100", "23", null, null, this);
            obj.set_defaultbutton("TRUE");
            obj.set_taborder("3");
            obj.set_text("비밀번호변경");
            obj.style.set_align("right");
            obj.set_cssclass("btntextbizproc06");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "8", "0", "384", "29", null, null, this);
            obj.set_text("비밀번호변경");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 300, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("비밀번호변경");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TMMB0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0080.xfdl", function() {
        /****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "TMMB0080AB";

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e) {

        	this.fnc_PopupClose("");

        }

        /*------------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "PWEDIT";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	// 필수 입력 항목 체크
        	if (this.fnc_Length(this.fnc_Trim(this.edtORIG_PASS.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("M1005", "현재 비밀번호", this.edtORIG_PASS);
        	}

        	if (this.fnc_GetPasswordEncrypt(this.fnc_Trim(this.edtORIG_PASS.value)) != application.GBL_USERPW) {
        		return this.fnc_SearchCheckPostAction("M1038", "", this.edtORIG_PASS);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtNEWX_PW01.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("M1005", "변경 비밀번호", this.edtNEWX_PW01);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtNEWX_PW02.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("M1005", "변경 비밀번호 확인", this.edtNEWX_PW02);
        	}

        	if (this.fnc_Trim(this.edtNEWX_PW01.value) != this.fnc_Trim(this.edtNEWX_PW02.value)) {
        		return this.fnc_SearchCheckPostAction("M1039", "", this.edtNEWX_PW01);
        	}

        	if (application.GBL_USERPW == this.fnc_GetPasswordEncrypt(this.fnc_Trim(this.edtNEWX_PW02.value))) {
        		return this.fnc_SearchCheckPostAction("M1040", "", this.edtNEWX_PW01);
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 저장 Argument 생성
        	if (sKind == "PWEDIT") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " ID=" 	+ this.fnc_Quote(application.GBL_LOGINID); 				  //User ID
        		sReturnString += " PW=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtNEWX_PW02.value)); //User Password
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
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

        	if (sMethodName == "PWEDIT") {
        	
        		this.fnc_Message("M1037"); 	//정상 종료 Message
        		application.GBL_USERPW = this.fnc_GetPasswordEncrypt(this.fnc_Trim(this.edtNEWX_PW02.value)); //변경 비밀 번호를 비밀 번호로 변경
        		this.fn_End(); 				//저장 후 시스템 종료
        	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.btnXxxx0.addEventHandler("onclick", this.fn_Save, this);

        };

        this.loadIncludeScript("TMMB0080.xfdl");

       
    };
}
)();
