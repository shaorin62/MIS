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
                this.set_name("Popup00005");
                this.set_titletext("그리드(1) 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,732);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdFS_ASCHXM", "absolute", "15", "33", null, null, "15", "44", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASCHXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("class").set("styGrid01");
            obj.set_taborder("-1");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"102\"/><Column size=\"116\"/><Column size=\"257\"/><Column size=\"94\"/><Column size=\"234\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"폐기일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"3\" displaytype=\"text\" text=\"부서코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length==0?&quot;&quot;:&quot;####-####-####&quot;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", null, "8", "205", "21", "15", null, this);
            obj.set_taborder("2");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", "18", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("2");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", "119", "0", "86", "21", null, null, this.Div0);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "579", "11", "14", "18", null, null, this);
            obj.set_taborder("4");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.set_text("F");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "835", "6", "15", "461", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "758", "688", "64", "8", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "758", "720", "64", "12", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "700", "0", "64", "8", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "27", "5", "307", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_text("개발시 ==>즐겨찾기 버튼 없애주세요");
            obj.style.set_background("crimson");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 205, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 850, 732, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드(1) 팝업");
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
            this.Div0.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.Div0.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("Popup00005.xfdl");

       
    };
}
)();
