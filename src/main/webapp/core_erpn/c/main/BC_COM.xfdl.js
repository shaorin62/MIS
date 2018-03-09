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
                this.set_name("BC_COM");
                this.set_scrollbars("none");
                this.set_titletext("[기획]하단컨텐츠");
                this._setFormPosition(0,0,1183,383);
            }
            this.style.set_padding("0 0 10 0");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "37", "26", "210", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "26", "5", "140", "145", null, null, this);
            obj.set_taborder("1");
            obj.set_text("경영실적현황");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont01.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "224", "5", "140", "145", null, null, this);
            obj.set_taborder("2");
            obj.set_text("WORK알림");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont02.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "422", "5", "140", "145", null, null, this);
            obj.set_taborder("3");
            obj.set_text("임시전표");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont03.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "620", "5", "140", "145", null, null, this);
            obj.set_taborder("4");
            obj.set_text("법인카드\r\n미처리신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont04.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "818", "5", "140", "145", null, null, this);
            obj.set_taborder("5");
            obj.set_text("재직증명서");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont05.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "1016", "5", "140", "145", null, null, this);
            obj.set_taborder("6");
            obj.set_text("급여/상여");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont06.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "26", "199", "140", "145", null, null, this);
            obj.set_taborder("7");
            obj.set_text("원천징수영수증");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont07.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "224", "199", "140", "145", null, null, this);
            obj.set_taborder("8");
            obj.set_text("출장신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont08.png') center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "422", "199", "140", "145", null, null, this);
            obj.set_taborder("9");
            obj.set_text("경조금신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont09.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "620", "199", "140", "145", null, null, this);
            obj.set_taborder("10");
            obj.set_text("학자금신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont10.png') center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "818", "199", "140", "145", null, null, this);
            obj.set_taborder("11");
            obj.set_text("품의서작성");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont11.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "1016", "199", "140", "145", null, null, this);
            obj.set_taborder("12");
            obj.set_text("제작의뢰서");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont12.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "150", "150", "90", "49", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 49");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1156", "37", "27", "210", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "219", "0", "31", "36", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "417", "0", "31", "36", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "615", "0", "31", "36", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1183, 383, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]하단컨텐츠");
            		p.style.set_padding("0 0 10 0");

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
            this.addEventHandler("onbeforeclose", this.fn_BeforeWorkFrameClosing, this);
            this.addEventHandler("onclose", this.fn_WorkFrameClose, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);

        };

        this.loadIncludeScript("BC_COM.xfdl");

       
    };
}
)();
