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
                this.set_name("Guide_popup");
                this.set_titletext("기본조회팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,510,480);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdTM_POPUPX", "absolute", "15", "93", null, null, "15", "44", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsCommonCode");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_scrollbars("autovert");
            obj.set_tabstop("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"항목\"/><Cell col=\"3\" text=\"항목\"/><Cell col=\"4\" text=\"항목\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "72", "262", "21", null, null, this);
            obj.set_cssclass("styFormSearchInfo");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "43", "15", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearch", "absolute", "26", "26", "115", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("No");
            obj.set_datacolumn("codeName");
            obj.set_innerdataset("dsCombo");
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchItem");
            obj.set_value("a");
            obj.set_text("1");
            obj.set_index("0");

            obj = new Edit("edtSearchText", "absolute", "143", "26", "279", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("native");
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "68", "50", "21", "15", null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", null, "26", "52", "21", "26", null, this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "87", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "0", "136", "15", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "58", "56", "35", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "468", "64", "12", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "436", "64", "8", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 480, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("기본조회팝업");
            		p.set_scrollbars("none");

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
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTM_POPUPX.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.grdTM_POPUPX.addEventHandler("onkeydown", this.grdTM_POPUPX_OnKeyDown, this);
            this.cmbSearch.addEventHandler("onitemchanged", this.cmbSearch_OnChanged, this);
            this.edtSearchText.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("08_Guide_popup.xfdl");

       
    };
}
)();
