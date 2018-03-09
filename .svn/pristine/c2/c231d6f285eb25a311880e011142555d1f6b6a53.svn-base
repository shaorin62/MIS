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
                this.set_name("comLogin_99");
                this.set_classname("comlogin");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1264,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div00", "absolute", "447", "145", "370", "469", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_login");
            this.addChild(obj.name, obj);
            obj = new Edit("edtSCRT_NUMB", "absolute", "70", "258", "232", "35", null, null, this.div00);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_cssclass("edt_login");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edtUSER_IDXX", "absolute", "70", "208", "232", "35", null, null, this.div00);
            obj.set_taborder("4");
            obj.set_cssclass("edt_login");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "75", "260", "19", "20", null, null, this.div00);
            obj.set_taborder("1");
            obj.set_cssclass("sta_login_pass");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "75", "211", "19", "20", null, null, this.div00);
            obj.set_taborder("2");
            obj.set_cssclass("sta_login_user");
            this.div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "70", "133", "235", "40", null, null, this.div00);
            this.div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">인사시스템</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">회계시스템</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("5");
            obj.set_value("1");
            obj.set_text("인사시스템");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("com_TF_system");
            obj.style.set_buttonsize("16");
            obj.style.set_padding("0 2 0 10");
            obj.style.set_border("1 solid #e1e1e1ff");
            obj.style.set_color("#81848cff");
            obj.style.set_font("antialias 12 NanumGothic");
            obj.set_index("0");
            obj = new Button("btnEnd", "absolute", "344", "14", "12", "11", null, null, this.div00);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Login_close");
            obj.set_tooltiptext("F3");
            obj.style.set_cursor("hand");
            this.div00.addChild(obj.name, obj);
            obj = new Button("btnLogin", "absolute", "70", "355", "235", "40", null, null, this.div00);
            obj.set_taborder("7");
            obj.set_text("Login");
            obj.set_cssclass("btn_Login_login");
            this.div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 370, 469, this.div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("Div00");
            		p.set_cssclass("div_login");

            	}
            );
            this.div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1264, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comlogin");
            		p.getSetter("inheritanceid").set("");
            		p.getSetter("text").set("System Login");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comLogin_pul.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("comLogin_pul.xfdl", "script::lib_base64.xjs");
        this.registerScript("comLogin_pul.xfdl", function() {
        /*******************************************************************************************
         
         - 기본 로그인 화면
         @name comLogin.xfdl
         @version 1.4
         @author 김석두
         @fileOverview
            본 화면은 System 로그인 화면 입니다.
            현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         @description
            date			name		explanation
            ==================================================================
            2016.05.29		jsh			프레임워크 교체로 수정
            ==================================================================
            
         *******************************************************************************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_base64.xjs"

        /*-----------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.edtUSER_IDXX.setFocus();
        	//this.fn_Login();
        	
        }

        /*--------------------------+
         |   Form Enter Key Then...  |
         +---------------------------*/
        this.fn_HotKey = function (obj,e) {

        	if (e.keycode != 13) return;

        	var sComp = e.fromreferenceobject.name;
        	if ((sComp == "edtUSER_IDXX") || (e.fromreferenceobject.name == "edtSCRT_NUMB")) {
        		this.getNextComponent(this.getFocus()).setFocus();
        	}

        }

        /*------------------+
         |   시스템 로그인   |
         +-------------------*/
        this.fn_Login = function() {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSYST_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "시스템", this.cmbSYST_CODE);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtUSER_IDXX.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사원번호", this.edtUSER_IDXX);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtSCRT_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "비밀번호", this.edtSCRT_NUMB);
        	}

        	var sArgument  = " USER_IDXX=" + this.base64Encode(this.edtUSER_IDXX.value);
        		sArgument += " SCRT_NUMB=" + this.base64Encode(this.edtSCRT_NUMB.value);
        		sArgument += " SYSTEM=" + this.base64Encode(this.cmbSYST_CODE.value);
        	
        	this.fnc_TransactionCall(this, "ComLogin", "Login", "", "", sArgument, "fn_CallBack");

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        		this.edtUSER_IDXX.setFocus();
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
        		arrParam[0] = "COMBO,cmbSYST_CODE,dsSYST_CODE,0";
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
            this.div00.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.div00.btnLogin.addEventHandler("onclick", this.fn_Login, this);

        };

        this.loadIncludeScript("comLogin_pul.xfdl");

       
    };
}
)();
