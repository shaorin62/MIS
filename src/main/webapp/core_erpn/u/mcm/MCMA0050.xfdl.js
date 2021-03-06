﻿(function()
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
                this.set_name("MCMA0050");
                this.set_titletext("코바넷매체등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_RMEDXM_01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_RMEDXM_02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsKBNT_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("코바넷 매체 등록");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("공통관리>기준정보");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "114", "21", null, null, this);
            obj.set_text("코바넷 코드");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "350", "71", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("10");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("KOBANET");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_RMEDXM_01", "absolute", "10", "25", null, null, "10", "10", this.tabXM.tab0);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsMD_RMEDXM_01");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"39\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷방송사코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송국명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷매체코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"코바넷 매체명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"코바넷본지사코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"본지사명\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent;\" text=\"코바넷코드\"/><Cell col=\"8\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"매체코드\"/><Cell col=\"9\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"매체명\"/><Cell col=\"10\" text=\"청구지코드\"/><Cell col=\"11\" text=\"사용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:BROD_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:BROD_CDNM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:MDIM_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:MDIM_CDNM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:OFIC_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:OFIC_CDNM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"background: ;\" text=\"bind:KBNT_CODE\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:CUST_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"10\" text=\"bind:HIGH_CODE\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "9", "19", "216", "6", null, null, this.tabXM.tab0);
            obj.set_taborder("2");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "604", "550", "80", "10", null, null, this.tabXM.tab0);
            obj.set_taborder("6");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("SBS");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_RMEDXM_02", "absolute", "10", "25", null, null, "10", "10", this.tabXM.tab1);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsMD_RMEDXM_02");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"33\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷방송사코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송국명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷매체코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"코바넷 매체명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"코바넷본지사코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"본지사명\"/><Cell col=\"7\" displaytype=\"text\" text=\"코바넷코드\"/><Cell col=\"8\" text=\"매체코드\"/><Cell col=\"9\" text=\"매체명\"/><Cell col=\"10\" text=\"청구지코드\"/><Cell col=\"11\" text=\"사용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:BROD_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:BROD_CDNM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:MDIM_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:MDIM_CDNM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:OFIC_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:OFIC_CDNM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"background: ;\" text=\"bind:KBNT_CODE\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:CUST_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"10\" text=\"bind:HIGH_CODE\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "9", "19", "216", "6", null, null, this.tabXM.tab1);
            obj.set_taborder("1");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "198", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Edit("edtSHRKBNT_CODE", "absolute", "116", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "295", "71", "54", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("매체명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("115");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("116");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "108", "61", "8", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "266", "61", "40", "41", null, null, this);
            obj.set_taborder("123");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "342", "61", "8", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "103", "80", "37", null, null, this);
            obj.set_taborder("125");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "141", "80", "25", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "197", "10", "67", null, null, this);
            obj.set_taborder("128");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1151", "202", "10", "75", null, null, this);
            obj.set_taborder("129");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "498", "61", "40", "41", null, null, this);
            obj.set_taborder("130");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "527", "71", "62", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("방송사명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "587", "61", "8", "41", null, null, this);
            obj.set_taborder("132");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBROD_CDNM", "absolute", "595", "71", "150", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1153, 494, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("KOBANET");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 336, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("SBS");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("코바넷매체등록");
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
        this.addIncludeScript("MCMA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0050.xfdl", function() {
         /***************************************************************************************************
         * # Program : MCMA0050 코바넷매체등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		조민희 	Initial Created.
         *   2016.10.10		최제현 	Check and Revise.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0050";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 this.sUSERAUTH     = "";  
        	 this.sFORMCAPTION  = "";  
        	 this.sFORMLOCATION = "";  
        	 this.sUSERLAVEL    = "";  
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항|
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時|
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時|
         +------------------------*/
        this.fn_Search = function (obj) {
        	if(this.tabXM.tabindex=='0'){
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsMD_RMEDXM_01");
        		this.fnc_DatasetClear("dsMD_RMEDXM_02");
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_RMEDXM_01=dsMD_RMEDXM_01";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex=='1'){
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsMD_RMEDXM_01");
        		this.fnc_DatasetClear("dsMD_RMEDXM_02");
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_RMEDXM_02=dsMD_RMEDXM_02";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Input = function (obj) {
        	if(this.tabXM.tabindex=='0'){
        		this.dsMD_RMEDXM_01.insertRow(0);
        		this.dsMD_RMEDXM_01.setColumn(this.dsMD_RMEDXM_01.rowposition,"USEX_YSNO",1);
        	}else if(this.tabXM.tabindex=='1'){
        		this.dsMD_RMEDXM_02.insertRow(0);
        		this.dsMD_RMEDXM_02.setColumn(this.dsMD_RMEDXM_02.rowposition,"USEX_YSNO",1);
        	}
        	
        }

        
        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if(this.tabXM.tabindex=='0'){
        		var totalNum = 0;	//체크된 개수
        		
        		for(var i=0 ; i<this.dsMD_RMEDXM_01.rowcount ; i++){
        			if(this.dsMD_RMEDXM_01.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        		}
        		
        		if (this.fn_DeleteCheck(totalNum)) {
        			var rowCnt = this.dsMD_RMEDXM_01.rowcount;
        			for(var i=(rowCnt-1); i>=0; i--){
        				if(this.dsMD_RMEDXM_01.getColumn(i,"CHEK_FILD") == '1'){
        					this.dsMD_RMEDXM_01.deleteRow(i);
        				}
        			}
        		}
        	}else if(this.tabXM.tabindex=='1'){
        		var totalNum = 0;	//체크된 개수
        		
        		for(var i=0 ; i<this.dsMD_RMEDXM_02.rowcount ; i++){
        			if(this.dsMD_RMEDXM_02.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        		}
        		
        		if (this.fn_DeleteCheck(totalNum)) {
        			var rowCnt = this.dsMD_RMEDXM_02.rowcount;
        			for(var i=(rowCnt-1); i>=0; i--){
        				if(this.dsMD_RMEDXM_02.getColumn(i,"CHEK_FILD") == '1'){
        					this.dsMD_RMEDXM_02.deleteRow(i);
        				}
        			}
        		}
        	}
        	
        }

        
        /*------------------------+
         |  06.취소 버튼 클릭 時|
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	if(this.tabXM.tabindex=='0'){
        		this.fnc_DataSetCancel("dsMD_RMEDXM_01");
        	}else if(this.tabXM.tabindex=='1'){
        		this.fnc_DataSetCancel("dsMD_RMEDXM_02");
        	}

        
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時|
         -------------------------*/
        this.fn_Save = function (obj) {
        	if(this.tabXM.tabindex=='0'){
        		if (!this.fn_SaveItemCheck()) return;
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsMD_RMEDXM_01=dsMD_RMEDXM_01:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex=='1'){
        		if (!this.fn_SaveItemCheck()) return;
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsMD_RMEDXM_02=dsMD_RMEDXM_02:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        
        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTA_CUSTXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

        } 

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	if (this.fnc_DatasetChangeCheck("dsMD_RMEDXM_01")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} else if(this.fnc_DatasetChangeCheck("dsMD_RMEDXM_02")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} 

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크! |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if(this.tabXM.tabindex == '0'){	// KOBANET
        	
        		if (this.fnc_DatasetChangeCheck("dsMD_RMEDXM_01") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}
        	
        		for (var i = 0; i < this.dsMD_RMEDXM_01.getRowCount(); i++) {
        			
        			if (this.fnc_ToUpper(this.dsMD_RMEDXM_01.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "BROD_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "방송국명", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "BROD_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "BROD_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "방송사코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "BROD_CODE"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "MDIM_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코바넷매체명", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "MDIM_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "MDIM_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코바넷매체코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "MDIM_CODE"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "OFIC_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "본지사명", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "OFIC_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "OFIC_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "본지사코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(i, "OFIC_CODE"), "");
        			}
        		}

        		return true;
        	}else if(this.tabXM.tabindex  == '1'){	// SBS
        	
        		if (this.fnc_DatasetChangeCheck("dsMD_RMEDXM_02") == false){
        		this.fnc_Message("TMM003");
        		return false;
        		}

        		for (var i = 0; i < this.dsMD_RMEDXM_02.getRowCount(); i++) {			// 코바넷매체코드
        		
        			
        			if (this.fnc_ToUpper(this.dsMD_RMEDXM_02.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "BROD_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "방송국명", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "BROD_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "BROD_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "방송사코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "BROD_CODE"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "MDIM_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코바넷매체명", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "MDIM_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "MDIM_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코바넷매체코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "MDIM_CODE"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "OFIC_CDNM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "본지사명", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "OFIC_CDNM"), "");
        			}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "OFIC_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "본지사코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(i, "OFIC_CODE"), "");
        			}
        		}
        		return true;
        	}
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        	if(this.tabXM.tabindex == '0'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var grdMD_RMEDXM_01 = this.tabXM.tab0.grdMD_RMEDXM_01;
        		var sQuestionText  = "코바넷 코드 : ("+grdMD_RMEDXM_01.getCellText(grdMD_RMEDXM_01.currentrow, grdMD_RMEDXM_01.getBindCellIndex( "body", "KBNT_CODE" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}else if(this.tabXM.tabindex == '1'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var grdMD_RMEDXM_02 = this.tabXM.tab1.grdMD_RMEDXM_02;
        		var sQuestionText  = "코바넷 코드 : ("+grdMD_RMEDXM_02.getCellText(grdMD_RMEDXM_02.currentrow, grdMD_RMEDXM_02.getBindCellIndex( "body", "KBNT_CODE" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MDIM_CODE=" + this.fnc_Quote(this.edtSHRKBNT_CODE.value); //코바넷매체코드
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
         		sReturnString += " BROD_CDNM=" + this.fnc_Quote(this.edtSHRBROD_CDNM.value); //방송사명
         		
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MDIM_CODE=" + this.fnc_Quote(this.edtSHRKBNT_CODE.value); //코바넷매체코드
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
         		sReturnString += " BROD_CDNM=" + this.fnc_Quote(this.edtSHRBROD_CDNM.value); //방송사명

        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}  else if (sKind == "SAVE01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*-------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}

        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_RMEDXM_01.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_RMEDXM_01.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_RMEDXM_02.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_RMEDXM_02.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*----------------------------+
         |  탭 클릭 시				  |
         +----------------------------*/
        this.tabXM_onchanged = function(obj,e)
        {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	this.fn_Search();
        }

        /*---------------------------------------+
         |        KOBANET (TAB0) 팝업           |
         +---------------------------------------*/
        this.dsMD_RMEDXM_01_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_RMEDXM_01, "YES", e.oldvalue, e.columnid);
        }
        /*---------------------------------------+
         |    		 SBS (TAB1) 팝업            |
         +---------------------------------------*/
        this.dsMD_RMEDXM_02_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_02, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         |      Help Popup Open                |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	var arrParam = new Array();

        	if (obj.name == "grdMD_RMEDXM_01") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_CODE") || (sColumnID == "CUST_NAME")) {		//매체명팝업(KOBANET)
        			arrParam[0] = "MCM0031";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_RMEDXM_01";
        			arrParam[5] = "CUST_CODE,CUST_NAME,HIGH_CODE";
        			arrParam[6] = "0,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "BROD_CODE") || (sColumnID == "BROD_CDNM")) {		//방송사코드
        			arrParam[0] = "MCM0012";
        			arrParam[1] = "";
        			arrParam[2] = "BROD_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_RMEDXM_01";
        			arrParam[5] = "BROD_CODE,BROD_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MDIM_CODE") || (sColumnID == "MDIM_CDNM")) {		//매체팝업
        			arrParam[0] = "MCM0013";
        			arrParam[1] = "";
        			arrParam[2] = "MDIM_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_RMEDXM_01";
        			arrParam[5] = "MDIM_CODE,MDIM_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "OFIC_CODE") || (sColumnID == "OFIC_CDNM")) {		//본지사팝업
        			arrParam[0] = "MCM0014";
        			arrParam[1] = "";
        			arrParam[2] = "OFIC_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_RMEDXM_01";
        			arrParam[5] = "OFIC_CODE,OFIC_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	} else if (obj.name == "grdMD_RMEDXM_02") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_CODE") || (sColumnID == "CUST_NAME")) {		//매체명팝업(SBS)
        			arrParam[0] = "MCM0032";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "CUST_CODE,CUST_NAME,HIGH_CODE";
        			arrParam[6] = "0,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "BROD_CODE") || (sColumnID == "BROD_CDNM")) {		//방송사코드
        			arrParam[0] = "MCM0012";
        			arrParam[1] = "";
        			arrParam[2] = "BROD_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "BROD_CODE,BROD_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MDIM_CODE") || (sColumnID == "MDIM_CDNM")) {		//매체팝업
        			arrParam[0] = "MCM0013";
        			arrParam[1] = "";
        			arrParam[2] = "MDIM_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "MDIM_CODE,MDIM_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "OFIC_CODE") || (sColumnID == "OFIC_CDNM")) {		//본지사팝업
        			arrParam[0] = "MCM0014";
        			arrParam[1] = "";
        			arrParam[2] = "OFIC_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "OFIC_CODE,OFIC_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	} 
        }

        /*---------------------------------------+
         |     KOBANET (TAB0) 전체 선택 / 해제  |
         +---------------------------------------*/
        var isAllChecked = 0;
        this.tabXM_tab0_grdMD_RMEDXM_01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_RMEDXM_01.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_RMEDXM_01.getRowCount(); i++) {
        			this.dsMD_RMEDXM_01.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab0.grdMD_RMEDXM_01.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*---------------------------------------+
         |     SBS (TAB1) 전체 선택 / 해제     |
         +---------------------------------------*/
        this.tabXM_tab1_grdMD_RMEDXM_02_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        	var v_Colid = this.tabXM.tab1.grdMD_RMEDXM_02.getCellProperty("body", e.cell, "text").replace("bind:", "");
        	isAllChecked = (isAllChecked ? 0 : 1);
        	
        	for (var i = 0; i < this.dsMD_RMEDXM_02.getRowCount(); i++) {
        		this.dsMD_RMEDXM_02.setColumn(i, v_Colid, isAllChecked);
        	}
        	this.tabXM.tab1.grdMD_RMEDXM_02.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*----------------------+
         |  조회조건 엔터 時  |
         +----------------------*/
        this.fn_onKeyDown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.fn_Search();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_RMEDXM_01.addEventHandler("oncolumnchanged", this.dsMD_RMEDXM_01_oncolumnchanged, this);
            this.dsMD_RMEDXM_02.addEventHandler("oncolumnchanged", this.dsMD_RMEDXM_02_oncolumnchanged, this);
            this.dsMD_RMEDXM_02.addEventHandler("onvaluechanged", this.dsMD_RMEDXM_02_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.grdMD_RMEDXM_01.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_RMEDXM_01.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_RMEDXM_01_onheadclick, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("ontextchanged", this.tabXM_tab1_grdMD_RMEDXM_01_ontextchanged, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("onmove", this.tabXM_tab1_grdMD_RMEDXM_01_onmove, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_RMEDXM_02_onheadclick, this);
            this.edtSHRKBNT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRKBNT_CODE.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.imgSearchTitle01.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRBROD_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBROD_CDNM.addEventHandler("onkeydown", this.fn_onKeyDown, this);

        };

        this.loadIncludeScript("MCMA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
