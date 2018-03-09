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
                this.set_name("TC_NDS_4");
                this.set_scrollbars("none");
                this.set_titletext("[솔루션]Day OFF");
                this._setFormPosition(0,0,218,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "34", "0", "151", "18", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "9", "40", "113", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "39", "9", "135", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("DAY OFF");
            obj.set_cssclass("sta_MF_name");
            obj.style.set_font("antialias 15 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "39", "48", "175", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("경영지원팀");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 13 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "39", "104", "52", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("외출");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "39", "151", "52", "30", null, null, this);
            obj.set_taborder("13");
            obj.set_text("출장");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "39", "197", "52", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("휴가");
            obj.set_cssclass("sta_MF_text1");
            obj.style.set_font("antialias 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "26", "34", "151", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "40", "93", "150", "1", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "40", "144", "150", "1", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "40", "190", "150", "1", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "40", "237", "150", "1", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "133", "96", "57", "40", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_MF_text4");
            obj.set_text("2<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "133", "147", "57", "40", null, null, this);
            obj.set_taborder("25");
            obj.set_text("0<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "133", "193", "57", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_text("1<fs v='11'>명</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 218, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[솔루션]Day OFF");

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
            this.Static00.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);

        };

        this.loadIncludeScript("TC_NDS_4.xfdl");

       
    };
}
)();
