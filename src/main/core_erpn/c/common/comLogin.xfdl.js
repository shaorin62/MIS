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
                this.set_name("comLogin");
                this.set_classname("comlogin");
                this.set_scrollbars("none");
                this.set_titletext("로그인");
                this._setFormPosition(0,0,1264,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divLogin", "absolute", "447", "145", "370", "469", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("login_bg");
            this.addChild(obj.name, obj);
            obj = new Edit("edtSCRT_NUMB", "absolute", "70", "258", "232", "35", null, null, this.divLogin);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_cssclass("edt_login");
            obj.set_autoselect("true");
            this.divLogin.addChild(obj.name, obj);
            obj = new Edit("edtUSER_IDXX", "absolute", "70", "208", "232", "35", null, null, this.divLogin);
            obj.set_taborder("2");
            obj.set_cssclass("edt_login");
            obj.set_autoselect("true");
            this.divLogin.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "75", "260", "19", "20", null, null, this.divLogin);
            obj.set_taborder("5");
            obj.set_cssclass("sta_login_pass");
            this.divLogin.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "75", "211", "19", "20", null, null, this.divLogin);
            obj.set_taborder("6");
            obj.set_cssclass("sta_login_user");
            this.divLogin.addChild(obj.name, obj);
            obj = new Combo("cmbSYST_CODE", "absolute", "70", "141", "232", "33", null, null, this.divLogin);
            this.divLogin.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("1");
            obj.set_text("인사시스템");
            obj.style.set_buttonsize("16");
            obj.set_index("0");
            obj = new Button("btnEnd", "absolute", "344", "14", "12", "11", null, null, this.divLogin);
            obj.set_taborder("0");
            obj.set_cssclass("btn_Login_close");
            obj.set_tooltiptext("F3");
            obj.style.set_cursor("hand");
            this.divLogin.addChild(obj.name, obj);
            obj = new Button("btnLogin", "absolute", "70", "355", "235", "40", null, null, this.divLogin);
            obj.set_taborder("4");
            obj.set_text("Login");
            obj.set_cssclass("btn_Login_login");
            this.divLogin.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "40", "434", "293", "25", null, null, this.divLogin);
            obj.set_taborder("7");
            obj.set_text("COPYRIGHTⓒ 2016 NSCOM ALL RIGHTS RESERVED.");
            obj.set_cssclass("login_copyright");
            obj.style.set_font("8 Dotum");
            this.divLogin.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "115", "66", "137", "30", null, null, this.divLogin);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('theme://images/login_logo.png')");
            this.divLogin.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 370, 469, this.divLogin,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.set_cssclass("login_bg");

            	}
            );
            this.divLogin.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1264, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comlogin");
            		p.getSetter("inheritanceid").set("");
            		p.getSetter("text").set("System Login");
            		p.set_scrollbars("none");
            		p.set_titletext("로그인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comLogin.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("comLogin.xfdl", "script::lib_base64.xjs");
        this.registerScript("comLogin.xfdl", function() {
        /***************************************************************************************************
         * # Program: comLogin 로그인 Form
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.21		jsh			Initial Created.
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
         ********************************************************************************INBUS*CO*KR***J*SH**/

        /**
         * 공통 스크립트 Include
         */
        //include "script::lib_script_common.xjs"
        //include "script::lib_base64.xjs"

        /*-----------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.divLogin.setFocus();
        	this.divLogin.edtUSER_IDXX.setCaretPos(0);
        	this.divLogin.edtUSER_IDXX.setFocus();

        }

        /*--------------------------+
         |   Form Enter Key Then...  |
         +---------------------------*/
        this.fn_HotKey = function (obj,e) {

        	if (e.keycode != 13) return;
        	var sComp = e.fromreferenceobject.name;
        	if ((sComp == "edtUSER_IDXX")) {
        		this.getNextComponent(this.getFocus()).setFocus();
        	} else if (e.fromreferenceobject.name == "edtSCRT_NUMB" && (this.fnc_Length(this.divLogin.edtSCRT_NUMB.value) > 0)) {
        		this.fn_Login();
        	}

        }

        /*------------------+
         |   시스템 로그인   |
         +-------------------*/
        this.fn_Login = function() {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divLogin.cmbSYST_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "시스템", this.divLogin.cmbSYST_CODE);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divLogin.edtUSER_IDXX.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사원번호", this.divLogin.edtUSER_IDXX);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divLogin.edtSCRT_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "비밀번호", this.divLogin.edtSCRT_NUMB);
        	}

        	var sArgument  = " USER_IDXX=" + this.base64Encode(this.divLogin.edtUSER_IDXX.value);
        		sArgument += " SCRT_NUMB=" + this.base64Encode(this.divLogin.edtSCRT_NUMB.value);
        		sArgument += " SYSTEM=" + this.base64Encode(this.divLogin.cmbSYST_CODE.value);
        	
        	this.fnc_TransactionCall(this, "ComLogin", "Login", "", "", sArgument, "fn_CallBack");

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        		this.divLogin.edtUSER_IDXX.setFocus();
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}

        }

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	//if (sMethodName != "Login") return;
        	
        	if (sMethodName == "Login") {
        		this.close(true);
        	} else if (sMethodName == "GetCommCode") {
        		
        		this.dsSYST_CODE.filter("REF3_FILD == '1' || COMD_CDNM == '선택'");
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,divLogin.cmbSYST_CODE,dsSYST_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*------------------+
        |   시스템 종료     |
        +-------------------*/
        this.fn_End = function(obj,e) {
        	this.close(false);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.divLogin.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.divLogin.btnLogin.addEventHandler("onclick", this.fn_Login, this);

        };

        this.loadIncludeScript("comLogin.xfdl");

       
    };
}
)();
