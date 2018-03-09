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
                this.set_name("PCMA0040");
                this.set_titletext("제작사관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVI_IF_MD_CUST", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CLASXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CLAS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AGCY_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CUSTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUCL_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGubun", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"GCODE\">0</Col><Col id=\"GNAME\">광고주팀</Col></Row><Row><Col id=\"GCODE\">1</Col><Col id=\"GNAME\">사업부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_EMPLMX", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IDXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHON_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMAL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "492", "22", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("제작시스템>기준정보>제작사관리");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "272", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "96", "71", "200", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchCombo");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("제작사명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Tab("tabCODE", "absolute", "8", null, null, "324", "25", "15", this);
            obj.set_taborder("46");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabCODE);
            obj.set_text("업종분류");
            obj.set_dragscrolltype("vert");
            this.tabCODE.addChild(obj.name, obj);
            obj = new Grid("grdPD_CLASXM", "absolute", "10", null, null, "270", "10", "10", this.tabCODE.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsPD_CLASXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"거래처코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"업종현황\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"업종상세\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"에이전시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BIZR_NUMB\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLAS_CODE\" combodisplaynulltext=\"선택\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ITEM_CODE\" combodisplaynulltext=\"선택\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:AGCY_YSNO\" editdisplay=\"edit\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.tabCODE.tab0.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabCODE.tab0);
            obj.set_taborder("1");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab0.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "15", null, null, this.tabCODE.tab0);
            obj.set_taborder("2");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab0.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabCODE.tab0);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab0.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "605", "285", "80", "10", null, null, this.tabCODE.tab0);
            obj.set_taborder("4");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabCODE);
            obj.set_text("계약담당자");
            this.tabCODE.addChild(obj.name, obj);
            obj = new Grid("grdPD_EMPLMX", "absolute", "10", "15", null, null, "24", "0", this.tabCODE.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsPD_EMPLMX");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"순번\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"계약 담당자명\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"담당자전화번호\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"담당자이메일주소\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"대표담당자\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:IDXX_NUMB\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:PHON_NUMB\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:EMAL_ADDR\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:REPR_EMPL\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/></Band></Format></Formats>");
            this.tabCODE.tab2.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabCODE.tab2);
            obj.set_taborder("1");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "15", null, null, this.tabCODE.tab2);
            obj.set_taborder("2");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab2.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "605", "285", "80", "10", null, null, this.tabCODE.tab2);
            obj.set_taborder("3");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab2.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabCODE.tab2);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tab2.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME00", "absolute", "325", "71", "79", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NUMB", "absolute", "407", "71", "200", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchCombo");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateParameter", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("거래처정보관리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("51");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("52");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("58");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "296", "61", "40", "41", null, null, this);
            obj.set_taborder("60");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "399", "61", "8", "41", null, null, this);
            obj.set_taborder("61");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "368", "80", "37", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("제작사관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdVI_IF_MD_CUST", "absolute", "8", "128", null, null, "25", "349", this);
            obj.set_binddataset("dsVI_IF_MD_CUST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_cellmovingtype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"제작사코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"제작사명\"/><Cell col=\"2\" displaytype=\"text\" text=\"계열/비계열\"/><Cell col=\"3\" displaytype=\"text\" text=\"대표자명\"/><Cell col=\"4\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"주민등록번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"개인/업체\"/><Cell col=\"7\" displaytype=\"text\" text=\"업태\"/><Cell col=\"8\" displaytype=\"text\" text=\"업종\"/><Cell col=\"9\" displaytype=\"text\" text=\"주소1\"/><Cell col=\"10\" displaytype=\"text\" text=\"주소2\"/><Cell col=\"11\" displaytype=\"text\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"cursor:hand;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:RETY_CODE\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:OWNR_NAME\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:BIZR_NUMB\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:RERN_NUMB\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:CITY_CODE\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:BSNS_STAT\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:BSNS_TYPE\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:ADDR_DESC\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:DTL1_ADDR\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "8%", "93", "200", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_visible("false");
            obj.set_innerdataset("@dsAUTO_NAME");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST_CODE");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabCODE.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("업종분류");
            		p.set_dragscrolltype("vert");

            	}
            );
            this.tabCODE.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabCODE.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("계약담당자");

            	}
            );
            this.tabCODE.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작사관리");
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
        this.addIncludeScript("PCMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PCMA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PCMA0040 제작 제작사관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		오세훈		Initial Created.
         *   
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
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PCMA0040"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보

        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	//모든 거래처 명 가져오기 * 자동완성 속도 문제로 임시 중단
        	//this.fn_GetCUST_NAME();
        	
        	this.fn_Search();

        
        } 
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsVI_IF_MD_CUST");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsVI_IF_MD_CUST=dsVI_IF_MD_CUST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdVI_IF_MD_CUST.setFocus();

        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var tab_index = this.tabCODE.tabindex;
        	
        	if(tab_index == 0 )
        	{
        		this.fnc_Message("TMM300","업종분류지정은 추가 입력하실 수 없습니다.")
        		return;
        	}
        // 	else if(tab_index == 1)
        // 	{
        // 		var iRow = this.dsPD_CUSTXM.insertRow(this.dsPD_CUSTXM.rowposition + 1);
        // 		this.dsPD_CUSTXM.set_rowposition(iRow);
        // 		this.dsPD_CUSTXM.setColumn(iRow, "GUBN_FLAG", "0");
        // 		this.dsPD_CUSTXM.setColumn(iRow, "USEX_YSNO", "1");
        // 		
        // 		this.dsPD_CUSTXM.setColumn(iRow, "HIGH_CODE", this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition,"CUST_CODE"));
        // 		this.dsPD_CUSTXM.setColumn(iRow, "HIGH_NAME", this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition,"CUST_NAME"));
        // 		this.dsPD_CUSTXM.setColumn(iRow, "BIZR_NUMB", this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition,"BIZR_NUMB"));
        // 	}
        	else if(tab_index == 1)
        	{
        		if(this.dsVI_IF_MD_CUST.rowcount == 0){
        			this.fnc_Message("TMM300", "상단의 데이터가 없습니다. 조회후에 추가 하세요");
        			return ; 
        		}
        		var iRow = this.dsPD_EMPLMX.insertRow(this.dsPD_EMPLMX.rowposition + 1);
        		this.dsPD_EMPLMX.set_rowposition(iRow);
        		
        		this.dsPD_EMPLMX.setColumn(iRow, "CUST_CODE", this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition,"CUST_CODE"));
        		this.dsPD_EMPLMX.setColumn(iRow, "CUST_NAME", this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition,"CUST_NAME"));
        	}

        
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	var tab_index = this.tabCODE.tabindex;
        	
        	if(tab_index == 0 )
        	{
        		if (this.fn_DeleteCheck(tab_index)){ this.dsPD_CLASXM.deleteRow(this.dsPD_CLASXM.rowposition);}
        		
        		this.tabCODE.tab0.grdPD_CLASXM.setFocus();
        // 	}else if(tab_index == 1 )
        // 	{
        // 		
        // 		if (this.fn_DeleteCheck(tab_index)) {
        // 			for(var i = this.dsPD_CUSTXM.rowcount; i >= 0; i--){
        // 				if(this.dsPD_CUSTXM.getColumn(i, "CHK") == 1){
        // 						this.dsPD_CUSTXM.deleteRow(i);
        // 				}
        // 			}
        // 		}
        // 		
        // 		this.tabCODE.tab1.grdPD_CUSTXM.setFocus();
        	}else if(tab_index == 1 ){
        	if (this.fn_DeleteCheck(tab_index)) {
        			for(var i = this.dsPD_EMPLMX.rowcount; i >= 0; i--){
        				if(this.dsPD_EMPLMX.getColumn(i, "CHK") == 1){
        						this.dsPD_EMPLMX.deleteRow(i);
        				}
        			}
        		}
        	}
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	//탭 분류별 저장 로직 확인
        	var tab_index = this.tabCODE.tabindex;
        	
        	//업종분류 저장
        	if(tab_index == '0'){
        		if (!this.fn_SaveItemCheck(tab_index)) return;
        		this.fn_SaveCLAS(obj);
        	}
        	
        // 	//광고주팀 저장
        // 	else if(tab_index == '1'){
        // 		if (!this.fn_SaveItemCheck(tab_index)) return;
        // 		this.fn_SaveCUST(obj);
        // 	
        // 	}
        	else if(tab_index == '1'){
        		if (!this.fn_SaveItemCheck(tab_index)) return;
        		this.fn_SaveEMPL(obj);
        	
        	}

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsVI_IF_MD_CUST")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (tab_index) {

        	if(tab_index == 0)
        	{
        		if (this.dsPD_CLASXM.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		var sQuestionText = "(" + this.fnc_Trim(this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition, "CUST_NAME")) + ") 업종분류";
        		return this.fnc_Message("TMM002", sQuestionText);
        			
        	}
        // 	else if(tab_index == 1)
        // 	{
        // 		if (this.dsPD_CUSTXM.getRowCount() < 1) {
        // 			this.fnc_Message("TMM007");
        // 			return false;
        // 		}
        // 		
        // 		var cnt = 0;
        // 		for(var i = 0; i < this.dsPD_CUSTXM.rowcount; i++){
        // 			if(this.dsPD_CUSTXM.getColumn(i, "CHK") == 1){
        // 				cnt += 1;
        // 			}
        // 		}
        // 		
        // 		if(cnt==0){
        // 			this.fnc_Message("PCM001");
        // 			return  false;
        // 		}else if(cnt > 1){
        // 			cnt = cnt -1;
        // 			var msg = "  외"+ cnt + " 건";
        // 		}else{
        // 			var msg =  cnt + " 건";
        // 		}
        // 		
        // 		
        // 		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_CUSTXM.getColumn(this.dsPD_CUSTXM.rowposition, "CUST_NAME")) + ") 팀"  + msg ;
        // 		return this.fnc_Message("TMM002", sQuestionText);
        // 	}
        	else if(tab_index == 1)
        	{
        		if (this.dsPD_EMPLMX.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var cnt = 0;
        		for(var i = 0; i < this.dsPD_EMPLMX.rowcount; i++){
        			if(this.dsPD_EMPLMX.getColumn(i, "CHK") == 1){
        				cnt += 1;
        			}
        		}
        		
        		if(cnt==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}else if(cnt > 1){
        			cnt = cnt -1;
        			var msg = "  외"+ cnt + " 건";
        		}else{
        			var msg =  cnt + " 건";
        		}
        		
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_EMPLMX.getColumn(this.dsPD_EMPLMX.rowposition, "EMPL_NAME")) + ")  담당자"  + msg ;
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  
         +-------------------*/
        this.fn_SaveItemCheck = function (tab_index) {

        	//업종분류 저장Check
        	if(tab_index == 0)
        	{
        		// 공통 Head & 상세 변경 체크
        		if (this.fnc_DatasetChangeCheck("dsPD_CLASXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}
        		
        		for (var i = 0; i < this.dsPD_CLASXM.getRowCount(); i++) {
        			var cnt = i + 1;
        			if (this.fnc_ToUpper(this.dsPD_CLASXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_CLASXM.getColumn(i, "CLAS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "업종현황", this.dsPD_ITEMXH, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_CLASXM.getColumn(i, "ITEM_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "업종상세", this.dsPD_ITEMXH, i, '', '');
        			}
        		}
        		
        	}
        // 	else if(tab_index == 1)
        // 	{
        // 	// 공통 Head & 상세 변경 체크
        // 		if (this.fnc_DatasetChangeCheck("dsPD_CUSTXM") == false) {
        // 			this.fnc_Message("TMM003");
        // 			return false;
        // 		}
        // 		
        // 		for (var i = 0; i < this.dsPD_CUSTXM.getRowCount(); i++) {
        // 			var cnt = i + 1;
        // 			if (this.fnc_ToUpper(this.dsPD_CUSTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsPD_CUSTXM.getColumn(i, "CUST_NAME"))) < 1) {
        // 				return this.fnc_CheckPostAction("TMM072", "거래처팀명", this.dsPD_CUSTXM, i, '', '');
        // 			}
        // 		}
        // 	}
        	else if(tab_index == 1)
        	{
        	// 공통 Head & 상세 변경 체크
        		if (this.fnc_DatasetChangeCheck("dsPD_EMPLMX") == false) {
        			this.fnc_Message("TMM003");
        			return false;
        		}
        		
        		for (var i = 0; i < this.dsPD_EMPLMX.getRowCount(); i++) {
        			var cnt = i + 1;
        			if (this.fnc_ToUpper(this.dsPD_EMPLMX.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_EMPLMX.getColumn(i, "EMPL_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "담당자", this.dsPD_CUSTXM, i, '', '');
        			}
        		}
        	}
        	
        	return true;
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //제작사명
        		sReturnString += " BIZR_NUMB=" + this.fnc_Quote(this.edtSHRBIZR_NUMB.value); //사업자번호
        		//제작사
        		if(this.tabCODE.tabindex == 0){
        			// 업종 지정을 광고주에 지정 및 에이전시 지정또한 광고주에 지정모두조회
        			//sReturnString += " CUCL_CODE=" + this.fnc_Quote("FA260130"); //제작사조회
        		//광고주만 조회
        		}else if(this.tabCODE.tabindex == 1){
        			//sReturnString += " CUCL_CODE=" + this.fnc_Quote("FA260110"); //광고주조회
        		}
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition, "CUST_CODE")); //시스템

        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition, "CUST_CODE")); //시스템
        	
        	} else if (sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SEARCH04") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition, "CUST_CODE")); //시스템
        	
        	} else if (sKind == "SAVE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}  else if (sKind == "SAVE02") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "DELETE01" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	}
        	
        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsVI_IF_MD_CUST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        		var CLAS_CODE = this.dsPD_CLASXM.getColumn(this.dsPD_CLASXM.rowposition, "CLAS_CODE");

        		this.fnc_GetComboGridDTL(CLAS_CODE);
        	
        	} else if (sMethodName == "SEARCH04") {
        	
        	} else if (sMethodName == "SEARCH03") {
        	
        		//자동완성 세팅
        		this.fn_AutoSetting();
        		
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        		this.fn_validation(0);
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        		this.fn_validation(1);
        	
        	} else if (sMethodName == "SAVE02") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        		this.fn_validation(1);
        	
        	} else if (sMethodName == "DELETE00") {
        		//체크 선택된 데이터만 제거
        		var cnt = this.dsPD_TYPEXD.rowcount -1 ;
        		for(var i = cnt; i >= 0  ; i --) {	
        			if(this.dsPD_TYPEXD.getColumn(i, "CHK") == "1"){
        				this.dsPD_TYPEXD.deleteRow(i);	
        			}
        		}
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "GRID,tabCODE.tab0.grdPD_CLASXM,dsCLAS_CODE,CLAS_CODE";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}	
        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        //상단의속성이 변경되면 하단을 체크하여 조회한다.
        this.dsVI_IF_MD_CUST_onrowposchanged = function(obj,e)
        {
        	var tab_index = this.tabCODE.tabindex;
        	
        	this.fn_validation(tab_index);
        }

        /*-----------------------------+
         | 활성화된 탭 체크 후 조회 |
         +-----------------------------*/
        this.fn_validation = function(tab_index){
        	//하단그리드
        	
        	if(tab_index == '0'){
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_CLASXM");

        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_CLASXM=dsPD_CLASXM";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.tabCODE.tab0.grdPD_CLASXM.setFocus();
        		
        	}
        // 	else if(tab_index == '1')
        // 	{
        // 		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        // 		this.fnc_DatasetClear("dsPD_CUSTXM");
        // 
        // 		var sMethodName = "SEARCH02";
        // 		var sInDataSet  = "";
        // 		var sOutDataSet = "dsPD_CUSTXM=dsPD_CUSTXM";
        // 		var sArgument   = this.fn_CreateArgument(sMethodName);
        // 		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 		this.tabCODE.tab0.grdPD_CLASXM.setFocus();
        // 	}
        	else if(tab_index == '1')
        	{
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_EMPLMX");

        		var sMethodName = "SEARCH04";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_EMPLMX=dsPD_EMPLMX";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.tabCODE.tab2.grdPD_EMPLMX.setFocus();
        	}
        }

        this.fn_SearchItemDTLCheck = function (tab_index) {

        	//업종분류 항목일 경우 
        	if(tab_index == '0'){
        	
        		// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        		if ((this.fnc_DatasetChangeCheck("dsPD_CLASXM")) && (this.fnc_Message("TMM023") == false) ) {
        			return false;
        			}
        	}
        // 	else if(tab_index == '1'){
        // 		// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        // 		if ((this.fnc_DatasetChangeCheck("dsPD_CUSTXM")) && (this.fnc_Message("TMM023") == false) ) {
        // 			return false;
        // 			}
        // 	}
        	else if(tab_index == '1'){
        		if ((this.fnc_DatasetChangeCheck("dsPD_EMPLMX")) && (this.fnc_Message("TMM023") == false) ) {
        			return false;
        			}
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        

        //업종상세 콤보박스
        this.fnc_GetComboGridDTL = function(CLAS_CODE)
        {
        	if(CLAS_CODE ==""){return ;}
        	
        	var arrParam1 = new Array();
        			arrParam1[0] = "dsPD_ITEM_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0011"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "SELECT"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = CLAS_CODE				   //조회 조건
        			

        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,tabCODE.tab0.grdPD_CLASXM,dsPD_ITEM_CODE,ITEM_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        this.tabCODE_tab0_grdPD_CLASXM_oncloseup = function(obj,e)
        {
        	this.tabCODE.tab0.grdPD_CLASXM.showEditor(false);
        	//업종분류 선택시 업종상세 선택
        	if(e.col == this.tabCODE.tab0.grdPD_CLASXM.getBindCellIndex("body","CLAS_CODE")){
        		var CLAS_CODE = this.dsPD_CLASXM.getColumn(this.dsPD_CLASXM.rowposition, "CLAS_CODE");
        		this.fnc_GetComboGridDTL(CLAS_CODE);
        	}
        }

        //하단 업종분류 저장
        this.fn_SaveCLAS = function (obj)
        {

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPD_CLASXM=dsPD_CLASXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabCODE.tab0.grdPD_CLASXM.setFocus();
        }
        this.tabCODE_onchanged = function(obj,e)
        {
        	this.fn_Search();
        }

        //하단 광고주팀  저장
        this.fn_SaveCUST = function (obj)
        {

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsPD_CUSTXM=dsPD_CUSTXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabCODE.tab1.grdPD_CLASXM.setFocus();
        }

        //하단 계약 담당자 저장
        this.fn_SaveEMPL = function (obj)
        {
        	var sChkCount = 0;
        	for(var i = 0 ; i < this.dsPD_EMPLMX.rowcount; i ++){
        		if(this.dsPD_EMPLMX.getColumn(i,"REPR_EMPL") == 1){
        			sChkCount += 1;
        		}
        	}
        	
        	if(sChkCount > 1){
        		this.fnc_Message("TMM300", "대표 담당자는 한사람만 선택 가능합니다.");
        		return ;
        	}

        	var sMethodName = "SAVE02";
        	var sInDataSet  = "dsPD_EMPLMX=dsPD_EMPLMX:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabCODE.tab2.grdPD_EMPLMX.setFocus();
        }

        
        this.edtSHRCUST_NAME_onkeydown = function(obj,e)
        {
        // 	if(e.keycode == 13)
        // 	{
        // 		//this.fn_Search();
        // 		
        // 		if(this.lstCUST_NAME.text == ""){
        // 			this.lstCUST_NAME.set_index(0);
        // 		}
        // 		
        // 		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        // 		this.lstCUST_NAME.set_visible(false);
        // 	}
        }

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID)
        {
        	
        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_CUSTXM") {
        	
        		var HIGH_CODE = this.dsPD_CUSTXM.getColumn(this.dsPD_CUSTXM.rowposition, "HIGH_CODE");
        	
        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:SUBX_NAME") || (sColumnID == "SUBX_NAME")) {
        			arrParam[0] = "PCM0003";
        			arrParam[1] = HIGH_CODE ;
        			arrParam[2] = "SUBX_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabCODE.tab1.grdPD_CUSTXM";
        			arrParam[5] = "SUBX_CODE,SUBX_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        	
        }

        this.dsPD_CUSTXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBX_NAME" ) this.fn_HelpDialoge(this.tabCODE.tab1.grdPD_CUSTXM, "YES", e.oldvalue, e.columnid);
        	
        }

        var isAllChecked1 = 0;
        this.tabCODE_tab1_grdPD_CUSTXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabCODE.tab1.grdPD_CUSTXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_CUSTXM.getRowCount(); i++) {
        			this.dsPD_CUSTXM.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.tabCODE.tab1.grdPD_CUSTXM.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }

        this.imgSearchTitle1_onclick = function(obj,e)
        {
        	this.edtSHRCUST_NAME.set_value("");
        }

        this.imgSearchTYPE_NAME00_onclick = function(obj,e)
        {
        	this.edtSHRBIZR_NUMB.set_value("");
        }

        this.btnCreateParameter_onclick = function(obj,e)
        {

        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=false";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1187";       //현재 반응 없음
        		sOpenStyle += ",height=720";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        	
        	this.fnc_OpenPopup("FAMA0030", "fam::FAMA0030.xfdl"
        									, {sSLIP_NUMB 	: ""
        									  ,sLoadForm	: ""
        									  ,sUSERLAVEL	: this.sUSERLAVEL
        									  ,sSLIP_LINE	: ""}, sOpenStyle, "");
        }

        

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAUTO_NAME=dsAUTO_NAME";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.fn_AutoSetting = function(){

        	var iCNT = this.dsAUTO_NAME.getRowCount();
        	var i;

        	for(i=0;i<iCNT;i++)
        	{
        		var text = this.dsAUTO_NAME.getColumn(i,"CLIENT_NAME");
        		var code = this.GetSpliceTextE(text);
        		this.dsAUTO_NAME.setColumn(i,"USEX_CODE",code);
        	}
        }

        
        // 한글 자소를 분리하여 리턴한다.
        var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
        var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
        var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

        this.GetSpliceTextK = function(strInput)
        {
        	var i;
        	var strOut = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOut += String.fromCharCode(arrFirst[nFirst]);
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOut += String.fromCharCode(arrSecond[nSecond]);
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOut += String.fromCharCode(arrThird[nThird]);
        		}
        		else
        			strOut += String.fromCharCode(nCode);
        	}
        	return strOut;
        }

        // 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
        var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
        var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
        var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
        var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];

        this.GetSpliceTextE = function(strInput)
        {
        	var i;
        	var strOutE = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOutE += arrFirstE[nFirst];
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOutE += arrSecondE[nSecond];
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOutE += arrThirdE[nThird];
        		}
        		else if(nCode>=12593 && nCode <= 12643)
        		{
        			strOutE += arrAllE[nCode-12593];
        		}
        		else
        		{
        			strOutE += String.fromCharCode(nCode);
        		}
        	}
        	return strOutE;
        }

        this.edtSHRCUST_NAME_onkeyup = function(obj,e)
        {
        // 	if(e.keycode==40 || e.keycode == 38)
        // 	{
        // 		this.lstCUST_NAME.setFocus();
        // 		this.lstCUST_NAME.set_index(0);
        // 	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRCUST_NAME.set_value(e.itemtext);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.lstCUST_NAME.set_visible(false);
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        // 		this.lstCUST_NAME.set_value("");
        // 		
        // 		var text = e.posttext;
        // 		if(text.length > 0)
        // 		{
        // 			var etext = this.GetSpliceTextE(text);
        // 
        // 			var sFilter = "String(USEX_CODE).toUpperCase().indexOf('" + etext.toUpperCase().replace("'","\\'") + "') >= 0";
        // 
        // 			this.dsAUTO_NAME.filter(sFilter);
        // 
        // 			this.lstCUST_NAME.set_visible(true);
        // 		}
        // 		else
        // 		{
        // 			this.dsAUTO_NAME.filter("USEX_CODE == 0");
        // 			this.lstCUST_NAME.set_visible(false);
        // 		}
        }

        //그리드 더블 클릭시 해당 상세 제작사 팝업
        this.grdVI_IF_MD_CUST_oncelldblclick = function(obj,e)
        {
        	
        	var sCUST_CODE = this.dsVI_IF_MD_CUST.getColumn(this.dsVI_IF_MD_CUST.rowposition, "CUST_CODE")
        	
        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=false";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1187";       //현재 반응 없음
        		sOpenStyle += ",height=720";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        	
        	this.fnc_OpenPopup("FAMA0030", "fam::FAMA0030.xfdl"
        									, {sSHRCUST_CODE 	: sCUST_CODE 
        									  ,sLoadForm	: ""
        									  ,sUSERLAVEL	: this.sUSERLAVEL
        									  ,sSLIP_LINE	: ""}, sOpenStyle, "");
        }

        this.dsPD_EMPLMX_oncolumnchanged = function(obj,e)
        {
        	
        	if (e.columnid == "REPR_EMPL") {
        		for (var i = 0; i < this.dsPD_EMPLMX.getRowCount(); i++) {
        			if (i != e.row && e.newvalue == "1") this.dsPD_EMPLMX.setColumn(i, "REPR_EMPL", "0");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsVI_IF_MD_CUST.addEventHandler("onrowposchanged", this.dsVI_IF_MD_CUST_onrowposchanged, this);
            this.dsPD_CLASXM.addEventHandler("onrowposchanged", this.dsPD_TYPEXH_onrowposchanged, this);
            this.dsPD_CUSTXM.addEventHandler("oncolumnchanged", this.dsPD_CUSTXM_oncolumnchanged, this);
            this.dsPD_EMPLMX.addEventHandler("oncolumnchanged", this.dsPD_EMPLMX_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.imgSearchTYPE_NAME.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.tabCODE.addEventHandler("onchanged", this.tabCODE_onchanged, this);
            this.tabCODE.tab0.grdPD_CLASXM.addEventHandler("oncloseup", this.tabCODE_tab0_grdPD_CLASXM_oncloseup, this);
            this.tabCODE.tab2.grdPD_EMPLMX.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tabCODE.tab2.grdPD_EMPLMX.addEventHandler("onheadclick", this.tabCODE_tab1_grdPD_CUSTXM_onheadclick, this);
            this.imgSearchTYPE_NAME00.addEventHandler("onclick", this.imgSearchTYPE_NAME00_onclick, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnCreateParameter.addEventHandler("onclick", this.btnCreateParameter_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdVI_IF_MD_CUST.addEventHandler("oncelldblclick", this.grdVI_IF_MD_CUST_oncelldblclick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("PCMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
