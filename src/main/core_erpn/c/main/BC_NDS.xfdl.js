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
                this.set_name("BC_NDS");
                this.set_scrollbars("autovert");
                this.set_titletext("[솔루션]하단컨텐츠");
                this._setFormPosition(0,0,1156,580);
            }
            this.style.set_padding("0 0 10 0");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "25", "5", "140", "145", null, null, this);
            obj.set_taborder("1");
            obj.set_text("경영실적현황");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont01.png') center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "219", "5", "140", "145", null, null, this);
            obj.set_taborder("2");
            obj.set_text("WORK알림");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont02.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "413", "5", "140", "145", null, null, this);
            obj.set_taborder("3");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont13.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "607", "5", "140", "145", null, null, this);
            obj.set_taborder("4");
            obj.set_text("담당업무지원팀");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont14.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "801", "5", "140", "145", null, null, this);
            obj.set_taborder("5");
            obj.set_text("테마설정");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont15.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "995", "5", "140", "145", null, null, this);
            obj.set_taborder("6");
            obj.set_text("출장신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont08.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "25", "195", "140", "145", null, null, this);
            obj.set_taborder("7");
            obj.set_text("경조금신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont09.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "219", "195", "140", "145", null, null, this);
            obj.set_taborder("8");
            obj.set_text("학자금신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont10.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "413", "195", "140", "145", null, null, this);
            obj.set_taborder("9");
            obj.set_text("법인카드\r\n미처리신청");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont04.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "607", "195", "140", "145", null, null, this);
            obj.set_taborder("10");
            obj.set_text("임시전표");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont03.png') center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "801", "195", "140", "145", null, null, this);
            obj.set_taborder("11");
            obj.set_text("지급/수금");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont16.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "995", "195", "140", "145", null, null, this);
            obj.set_taborder("12");
            obj.set_text("금여/상여");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont06.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "499", "150", "284", "45", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "214", "0", "31", "36", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "408", "190", "31", "36", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "602", "190", "31", "36", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_number");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "146", "131", "24", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "1073", "545", "62", "24", null, null, this);
            obj.set_taborder("19");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "1008", "545", "62", "24", null, null, this);
            obj.set_taborder("20");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "340", "131", "24", "24", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "534", "131", "24", "24", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "728", "131", "24", "24", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "922", "131", "24", "24", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "1116", "131", "24", "24", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06", "absolute", "146", "321", "24", "24", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07", "absolute", "340", "321", "24", "24", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08", "absolute", "534", "321", "24", "24", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09", "absolute", "728", "321", "24", "24", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox10", "absolute", "922", "321", "24", "24", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox11", "absolute", "1116", "321", "24", "24", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "25", "385", "140", "145", null, null, this);
            obj.set_taborder("33");
            obj.set_text("원천징수영수증");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont07.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "219", "385", "140", "145", null, null, this);
            obj.set_taborder("34");
            obj.set_text("나의PC");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont17.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "413", "385", "140", "145", null, null, this);
            obj.set_taborder("35");
            obj.set_text("팀근태");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont18.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "607", "385", "140", "145", null, null, this);
            obj.set_taborder("36");
            obj.set_text("재직증명서");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont05.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "499", "340", "284", "45", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox12", "absolute", "146", "511", "24", "24", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox13", "absolute", "340", "511", "24", "24", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox14", "absolute", "534", "511", "24", "24", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox15", "absolute", "728", "511", "24", "24", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("che_MF_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "945", "569", "196", "11", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "796", "190", "31", "36", null, null, this);
            obj.set_taborder("47");
            obj.set_text("2");
            obj.set_cssclass("sta_MF_number");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1156, 580, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("autovert");
            		p.set_titletext("[솔루션]하단컨텐츠");
            		p.style.set_padding("0 0 10 0");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BC_NDS.xfdl", function() {

        this.Button12_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_BeforeWorkFrameClosing, this);
            this.addEventHandler("onclose", this.fn_WorkFrameClose, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Button12.addEventHandler("onclick", this.Button12_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static03_onclick, this);

        };

        this.loadIncludeScript("BC_NDS.xfdl");

       
    };
}
)();
