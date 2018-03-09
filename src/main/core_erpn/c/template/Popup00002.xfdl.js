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
                this.set_name("Popup00002");
                this.set_classname("passwordChange");
                this.set_titletext("상세(입력/수정)");
                this._setFormPosition(0,0,400,176);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "385", "0", "15", "135", null, null, this);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "286", "164", "64", "12", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "286", "132", "64", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "15", "15", "370", "117", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", null, "140", "62", "24", "15", null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", null, "140", "62", "24", "80", null, this);
            obj.set_taborder("8");
            obj.set_text("변경");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSER_IDXX", "absolute", "135", "24", null, "21", "36", null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_NUMB", "absolute", "135", "50", null, "21", "36", null, this);
            obj.set_taborder("10");
            obj.set_password("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSCRT_NUMB", "absolute", "135", "76", null, "21", "36", null, this);
            obj.set_taborder("11");
            obj.set_password("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSCRT_NUMB2", "absolute", "135", "102", null, "21", "36", null, this);
            obj.set_taborder("12");
            obj.set_password("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L00", "absolute", "35", "102", "101", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L01", "absolute", "35", "76", "101", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("신규 비밀번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L", "absolute", "35", "50", "101", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L02", "absolute", "35", "24", "101", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("아이디");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 176, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("상세(입력/수정)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.btnSubmit.addEventHandler("onclick", this.fn_changePassword, this);

        };

        this.loadIncludeScript("Popup00002.xfdl");

       
    };
}
)();
