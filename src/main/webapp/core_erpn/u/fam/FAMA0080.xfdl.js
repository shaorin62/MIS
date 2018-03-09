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
                this.set_name("FAMA0080");
                this.set_titletext("금융기관(지점)등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_BANKBR", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BABR_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BABR_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BABR_ABNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsSHRBANK_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">은행코드</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">사용여부</Col></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMARK\">은행코드 - 사용코드만(입력용)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "196", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_BANKBR", "absolute", "8", "128", null, null, "25", "95", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_BANKBR");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"금융지점코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" text=\"지점명\"/><Cell col=\"3\" displaytype=\"text\" text=\"은행명(FULL)\"/><Cell col=\"4\" displaytype=\"text\" text=\"발생일자\"/><Cell col=\"5\" displaytype=\"text\" text=\"종료일자\"/><Cell col=\"6\" displaytype=\"text\" text=\"사용여부\"/><Cell col=\"7\" displaytype=\"text\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BABR_CODE\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BANK_CODE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BABR_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BABR_ABNM\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:OPEN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLOS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:USEX_YSNO\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BIZR_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BIZR_NUMB), 10, '###-##-#####', 13, '######-#######', '')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_CODE", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("search");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "573", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("Static00", "absolute", "27", "71", "70", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "505", "71", "70", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBABR_NAME", "absolute", "326", "71", "150", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "245", "71", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("금융지점명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", null, null, "65", "25", "15", this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_NAME", "absolute", "631", null, "140", "21", null, "50", this);
            obj.set_taborder("14");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "561", null, "70", "21", null, "50", this);
            obj.set_taborder("25");
            obj.set_text("지점명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_CODE", "absolute", "97", null, "100", "21", null, "50", this);
            obj.set_taborder("10");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_ABNM", "absolute", "945", null, null, "21", "46", "50", this);
            obj.set_taborder("16");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "28", null, "70", "21", null, "50", this);
            obj.set_taborder("26");
            obj.set_text("지점코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "838", null, "115", "21", null, "50", this);
            obj.set_taborder("27");
            obj.set_text("은행명(FULL)");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "278", null, "70", "21", null, "50", this);
            obj.set_taborder("28");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "348", null, "140", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");
            obj.set_type("search");
            obj.set_index("-1");

            obj = new Static("Static46", "absolute", "28", null, "70", "21", null, "24", this);
            obj.set_taborder("29");
            obj.set_text("발생일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medBIZR_NUMB", "absolute", "945", null, "140", "21", null, "24", this);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.addChild(obj.name, obj);

            obj = new Static("stREGS_NO", "absolute", "838", null, "115", "21", null, "24", this);
            obj.set_taborder("30");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUSEX_YSNO", "absolute", "631", null, "120", "21", null, "24", this);
            obj.set_taborder("21");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("satCUST_CODE", "absolute", "561", null, "70", "21", null, "24", this);
            obj.set_taborder("31");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCLOS_DATE", "absolute", "348", null, "100", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_value("null");
            obj.set_innerdataset("@dsTA_BANKBR");
            obj.set_datecolumn("CLOS_DATE");

            obj = new Static("Static02", "absolute", "278", null, "70", "21", null, "24", this);
            obj.set_taborder("32");
            obj.set_text("종료일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calOPEN_DATE", "absolute", "97", null, "100", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("금융기관(지점)등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("34");
            obj.set_text("홈 > 재무관리 > 기본정보 > 금융기관(지점)등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("44");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "216", "61", "40", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "476", "61", "40", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "622", "80", "15", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "9", "649", "30", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("금융기관(지점)등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","cmbBANK_CODE","value","dsTA_BANKBR","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtBABR_ABNM","value","dsTA_BANKBR","BABR_ABNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtBABR_CODE","value","dsTA_BANKBR","BABR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtBABR_NAME","value","dsTA_BANKBR","BABR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_medREGS_NO_value","medBIZR_NUMB","value","dsTA_BANKBR","BIZR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","chkUSEX_YSNO","value","dsTA_BANKBR","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calCLOS_DATE","value","dsTA_BANKBR","CLOS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calOPEN_DATE","value","dsTA_BANKBR","OPEN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calCLOS_DATE","datecolumn","dsTA_BANKBR","CLOS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FAMA0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0080.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMA0080 금융기관지점등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMA0080";

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRBANK_CODE.setFocus();

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_BANKBR"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_BANKBR=dsTA_BANKBR";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_BANKBR.setFocus();

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow     = this.dsTA_BANKBR.addRow();
        	var sNowDate = this.fnc_GetServerDateTime("DATE");

        	this.dsTA_BANKBR.setColumn(iRow, "OPEN_DATE", sNowDate);
        	
        	this.dsTA_BANKBR.setColumn(iRow, "USEX_YSNO", "1");
        	this.edtBABR_CODE.setFocus();

        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTA_BANKBR.deleteRow(this.dsTA_BANKBR.rowposition);
        	this.grdTM_BANKBR.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_BANKBR");
        	this.grdTM_BANKBR.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_BANKBR=dsTA_BANKBR:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_BANKBR.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;	
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_BANKBR", this);	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_BANKBR")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
        	}

        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTA_BANKBR.rowcount < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	var sQuestionText  ="금융지점코드 : ("+ this.dsTA_BANKBR.getColumn(this.dsTA_BANKBR.rowposition, "BABR_CODE") + "), 은행명 : ("
        		sQuestionText += this.dsTA_BANKBR.getColumn(this.dsTA_BANKBR.rowposition, "BABR_ABNM")+")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsTA_BANKBR")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTA_BANKBR.rowcount; i++) {

        		if (this.dsTA_BANKBR.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BABR_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지점코드", this.dsTA_BANKBR, i, this.edtBABR_CODE, "BABR_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BANK_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "금융기관", this.dsTA_BANKBR, i, this.cmbBANK_CODE, "BANK_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BABR_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지점명", this.dsTA_BANKBR, i, this.edtBABR_NAME, "BABR_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BABR_ABNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "은행명", this.dsTA_BANKBR, i, this.edtBABR_ABNM, "BABR_ABNM");
        		}

        		// 사업자번호를 입력하면 처리함
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BIZR_NUMB"))) != 0) {
        			// 사업자등록번호 유효성 검사
        			if (!this.fnc_FormatCustNumber(this.fnc_Trim(this.dsTA_BANKBR.getColumn(i, "BIZR_NUMB")))) {
        				return this.fnc_CheckPostAction("TMM119", "사업자등록번호", this.dsTA_BANKBR, i, this.medBIZR_NUMB, "BIZR_NUMB");
        			}
        			
        		}

        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " BANK_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBANK_CODE.value)); //은행명
        		sReturnString += " BABR_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBABR_NAME.value)); //계좌유형
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부

        	} else if ( sKind == "SAVE00") {
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	}

        	return sReturnString;
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        	    this.fnc_Information(this.stInformation, this.dsTA_BANKBR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_BANKBR.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRBANK_CODE,dsSHRBANK_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,1";
        			arrParam[2] = "COMBO,cmbBANK_CODE,dsBANK_CODE,0";
        			arrParam[3] = "GRID,grdTM_BANKBR,dsBANK_CODE,BANK_CODE";	
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        	
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리   |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (e.newrow == -1) return;

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtBABR_CODE, !true);
        	} else {
        		this.fnc_SetReadonly(this.edtBABR_CODE, !false);
        	}

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_BANKBR.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBABR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_ABNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCLOS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calOPEN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
