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
                this.set_name("Mytoday_P");
                this.set_titletext("MY Today");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,770,368);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdFS_ASCHXM", "absolute", "15", "33", "740", "292", null, null, this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASCHXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("class").set("styGrid01");
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"594\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"내용\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" displaytype=\"text\" text=\"알림여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"00:00\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "261", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "755", "6", "15", "261", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "693", "332", "62", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "701", "0", "64", "8", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn00", "absolute", "669", "8", "86", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("일정삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn01", "absolute", "580", "8", "86", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("일정등록");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "692", "356", "64", "12", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "692", "324", "64", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel00", "absolute", "628", "332", "62", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "6", "176", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("2016.00.00");
            obj.set_cssclass("sta_MF_text6");
            obj.style.set_background("transparent URL('theme://images/btn_CalDrop_N.png') left middle");
            obj.style.set_padding("-2 0 0 24");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 770, 368, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("MY Today");
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
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btn00.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btn01.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btnCancel00.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("Mytoday_P.xfdl");

       
    };
}
)();
