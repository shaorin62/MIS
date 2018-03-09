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
                this.set_name("Popup00009");
                this.set_classname("passwordChange");
                this.set_titletext("[예외]상세팝업01");
                this._setFormPosition(0,0,520,188);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static28", "absolute", "15", "47", "490", "33", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "15", "79", "490", "33", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "15", "15", "490", "33", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "111", "490", "33", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("1");
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

            obj = new Button("btnCancle", "absolute", "443", "152", "62", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "378", "152", "62", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "505", "0", "15", "135", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "441", "144", "64", "8", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "441", "176", "64", "12", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "232", "117", "12", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "111", "90", "33", null, null, this);
            obj.set_taborder("20");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "110", "117", "120", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "15", "90", "33", null, null, this);
            obj.set_taborder("67");
            obj.set_text("유류대");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "15", "47", "90", "33", null, null, this);
            obj.set_taborder("69");
            obj.set_text("통행료");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "15", "79", "90", "33", null, null, this);
            obj.set_taborder("71");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "208", "21", "35", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "249", "21", "14", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "264", "21", "75", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_value("1234");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "343", "21", "37", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("원  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "377", "21", "95", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "475", "21", "20", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12", "absolute", "110", "21", "55", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_value("40");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "169", "21", "36", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("KM  /");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "232", "53", "12", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13", "absolute", "110", "53", "120", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "232", "85", "12", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14", "absolute", "110", "85", "120", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34", "absolute", "248", "85", "224", "21", null, null, this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 520, 188, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("[예외]상세팝업01");

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

        this.loadIncludeScript("Popup00009.xfdl");

       
    };
}
)();
