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
                this.set_name("Temp00016M");
                this.set_titletext("그리드만있음");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdHR_APPOBS", "absolute", "8", "71", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_APPOBS");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"127\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"발령구분\"/><Cell col=\"1\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"급여형태\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직종\"/><Cell col=\"4\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직급\"/><Cell col=\"5\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직위\"/><Cell col=\"6\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직책\"/><Cell col=\"7\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무\"/><Cell col=\"8\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"호봉\"/><Cell col=\"9\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"겸직\"/><Cell col=\"10\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"파견부서\"/><Cell col=\"11\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"파견지\"/><Cell col=\"12\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"종료일\"/><Cell col=\"13\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서장\"/><Cell col=\"14\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴직사유\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:APDN_NAME\" editlimit=\"4\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTCH_YSNO\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYTC_YSNO\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:OCCH_YSNO\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLPC_YSNO\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:OFPC_YSNO\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DURC_YSNO\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:JOCH_YSNO\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:NMCG_YSNO\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AJDC_YSNO\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTDC_YSNO\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PSCH_YSNO\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EDCH_YSNO\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:HDTC_YSNO\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:RETC_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("발령기초설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 인사관리>인사기준정보>발령기초설정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "15", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "50", "262", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "65", "216", "6", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("23");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드만있음");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("Temp00016M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
