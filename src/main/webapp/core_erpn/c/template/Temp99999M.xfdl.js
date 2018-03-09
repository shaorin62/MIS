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
                this.set_name("Temp99999M");
                this.set_titletext("(1600)업무화면샘플");
                this._setFormPosition(0,0,1277,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_WF_Combtn", "absolute", "8", "44", null, "33", "25", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Combtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "600", "44", null, null, this);
            obj.set_taborder("2");
            obj.set_text("자금계획관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "44", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 회계관리 > 사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "49", "494", "23", "30", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "1", "18", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "136", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "157", null, null, "25", "20", this);
            obj.set_taborder("9");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"43\" band=\"left\"/><Column size=\"144\" band=\"left\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"71\"/><Column size=\"258\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"대분류\"/><Cell col=\"1\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"지급구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" style=\"background:URL('theme://imagesInbus\\imgGridInput.png');\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background:URL('theme://imagesInbus\\imgGridInput.png');\" text=\"계좌명\"/><Cell col=\"5\" style=\"background:URL('theme://imagesInbus\\imgGridInput.png');\" text=\"은행\"/><Cell col=\"6\" style=\"background:URL('theme://imagesInbus\\imgGridInput.png');\" text=\"환종\"/><Cell col=\"7\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"금액\"/><Cell col=\"8\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:EXCE_GROUP\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:EXCE_GUBN\" editlimit=\"0\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:EXCE_SEQN\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACNT_NUMB\" editlimit=\"0\" expandshow=\"show\" expandsize=\"15\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:ACNT_NAME\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:BANK_GUBN\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CURR_GUBN\" editlimit=\"0\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MONE_AMNT\" editlimit=\"0\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "14", "49", "110", "23", null, null, this);
            obj.set_taborder("29");
            obj.set_text("일계획가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "77", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "39", "88", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "107", "88", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static31", "absolute", "293", "88", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "500", "88", "70", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("자금구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "569", "88", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Calendar("calSHRPROV_DATE", "absolute", "361", "88", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "744", "88", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("입출구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "813", "88", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "78", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "99", "78", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "253", "78", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "460", "78", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "715", "78", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "120", "80", "37", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "20", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 20");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1277, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("(1600)업무화면샘플");

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
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("ontextchange", this.fn_clearData, this);

        };

        this.loadIncludeScript("Temp99999M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
