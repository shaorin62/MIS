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
                this.set_name("TC_COM_4");
                this.set_scrollbars("none");
                this.set_titletext("[기획]실적현황차트");
                this._setFormPosition(0,0,218,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "61", "0", "151", "18", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "9", "27", "65", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "26", "9", "191", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("2016년 실적현황(누계)");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "53", "223", "35", "24", null, null, this);
            obj.set_taborder("11");
            obj.set_text("합계");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "102", "223", "35", "24", null, null, this);
            obj.set_taborder("12");
            obj.set_text("계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "147", "223", "45", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("비계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "45", "224", "150", "1", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_line2");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "155", "175", "28", "50", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "57", "63", "28", "162", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "106", "95", "28", "130", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "53", "45", "35", "20", null, null, this);
            obj.set_taborder("18");
            obj.set_text("650");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "102", "77", "35", "20", null, null, this);
            obj.set_taborder("19");
            obj.set_text("500");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "152", "157", "35", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_text("150");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "155", "191", "28", "34", null, null, this);
            obj.set_taborder("21");
            obj.set_text("110\r\n73%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "57", "80", "28", "145", null, null, this);
            obj.set_taborder("22");
            obj.set_text("560\r\n86%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "106", "113", "28", "112", null, null, this);
            obj.set_taborder("23");
            obj.set_text("450\r\n90%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 218, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]실적현황차트");

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
            this.Static18.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static32.addEventHandler("onclick", this.Static18_onclick, this);

        };

        this.loadIncludeScript("TC_COM_4.xfdl");

       
    };
}
)();
