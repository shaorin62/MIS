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
                this.set_name("TXMC0080");
                this.set_titletext("영세율첨부서류제출명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT106_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"VAT_SERIAL\" size=\"6\" type=\"STRING\"/><Column id=\"SEND_TYPECD\" size=\"2\" type=\"STRING\"/><Column id=\"SEND_REMARK\" size=\"60\" type=\"STRING\"/><Column id=\"DOCUMENT_NM\" size=\"40\" type=\"STRING\"/><Column id=\"ISSUER_NM\" size=\"20\" type=\"STRING\"/><Column id=\"ISSUE_YMD\" size=\"8\" type=\"STRING\"/><Column id=\"SHIP_YMD\" size=\"8\" type=\"STRING\"/><Column id=\"EXPORT_CURRENCY_CD\" size=\"3\" type=\"STRING\"/><Column id=\"RATES\" size=\"9\" type=\"BIGDECIMAL\"/><Column id=\"SENDE_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SENDW_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REPOE_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REPOW_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSEND_TYPECD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">01.특별소비세신고서 증빙서류 제출</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">02.테이프 또는 디스켓으로 복사하여 제출(전자무역기반사업자를 통한 제출 포함)</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT106_D", "absolute", "8", "218", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_VAT106_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("11");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"서류명\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"발급자\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"발급일자\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"선적일자\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"통화코드\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"환율\"/><Cell col=\"6\" colspan=\"2\" displaytype=\"text\" text=\"당기제출금액\"/><Cell col=\"8\" colspan=\"2\" displaytype=\"text\" text=\"당기신고해당분\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"제출사유\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"text\" text=\"비고\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"외화\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"원화\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"외화\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"원화\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:DOCUMENT_NM\" editlimit=\"40\" editimemode=\"hangul\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:ISSUER_NM\" editlimit=\"20\" editimemode=\"hangul\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align: center;\" text=\"bind:ISSUE_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align: center;\" text=\"bind:SHIP_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" editfilter=\"upper\" style=\"align: center;\" text=\"bind:EXPORT_CURRENCY_CD\" editlimit=\"3\" editimemode=\"alpha\" combodisplayrowcount=\"10\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RATES\" mask=\"###,##0.0000\" editlimit=\"17\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SENDE_SAMT\" mask=\"###,##0.00\" editlimit=\"17\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SENDW_SAMT\" mask=\"###,##0\" editlimit=\"17\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:REPOE_SAMT\" mask=\"###,##0.00\" editlimit=\"17\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:REPOW_SAMT\" mask=\"###,##0\" editlimit=\"17\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" style=\"align: left;\" text=\"bind:SEND_TYPECD\" combodataset=\"dsSEND_TYPECD\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\" combodisplayrowcount=\"3\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:SEND_REMARK\" editimemode=\"hangul\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SENDE_SAMT&quot;)\" mask=\"###,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SENDW_SAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;REPOE_SAMT&quot;)\" mask=\"###,##0.00\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;REPOW_SAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "193", "62", "21", "90", null, this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "193", "62", "21", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "56", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "85", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static6", "absolute", "438", "71", "66", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "507", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("spSearchBox01", "absolute", "8", "118", null, "65", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_LINE", "absolute", "744", "153", "160", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "650", "153", "90", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("업   종");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "650", "127", "90", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("성명(대표자)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "153", "104", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("사업장 소재지");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_TEL", "absolute", "514", "153", "106", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR", "absolute", "127", "153", "250", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_MASTER", "absolute", "744", "127", "160", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBIZ_NO", "absolute", "514", "127", "106", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "406", "127", "100", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "127", "127", "250", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", "127", "92", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("성명(법인명)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "406", "153", "88", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("업   태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("영세율첨부서류제출명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("41");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>영세율첨부서류제출명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "197", "262", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "183", "80", "35", null, null, this);
            obj.set_taborder("52");
            obj.set_text("35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("53");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("영세율첨부서류제출명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCORP_TYPENM_value","edtCORP_LINE","value","dsVA_VATBRANCH","CORP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_TEL_value","edtCORP_TEL","value","dsVA_VATBRANCH","CORP_TYPENM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_ADDR_value","edtCORP_ADDR","value","dsVA_VATBRANCH","CORP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_MASTER_value","edtCORP_MASTER","value","dsVA_VATBRANCH","CORP_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBIZ_NO_value","mskBIZ_NO","value","dsVA_VATBRANCH","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsVA_VATBRANCH","BRANCH_NM");
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
        this.addIncludeScript("TXMC0080.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0080.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0080 영세율첨부서류제출명세서
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.09		안윤준		수정
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFTFT";
        this.sPACKAGENAME 	= "TXMC0080";
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
        	}
        	
        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH dsTA_VAT106_D=dsTA_VAT106_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

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

        	if (this.dsVA_VATBRANCH.rowcount < 1) {
        		this.fnc_Message("TMM125", "조회 후 저장하세요");
        		return false;
        	}

        	if (!this.fnc_DatasetChangeCheck("dsTA_VAT106_D")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VAT106_D=dsTA_VAT106_D:A ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0080R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0080_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT106_D=dsTA_VAT106_D dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT106_D", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT106_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기

        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*------------------------------------+
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Message("TMM018", this.dsTA_VAT106_D.rowcount); //정상 종료 메세지
        		this.grdTA_VAT106_D.setFocus();
        	
        	} else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTA_VAT106_D,dsCURR_CODE,EXPORT_CURRENCY_CD";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------+
         |  Dataset 변경 시 |
         +-----------------*/
        this.dsTA_VAT106_D_oncolumnchanged = function (obj,e) {

        	// 환율에 따른 당기제출금액(외화, 원화), 당기신고해당분(외화, 원화) 재계산
        	var SENDE_SAMT 	= this.dsTA_VAT106_D.getColumn(e.row, "SENDE_SAMT");
        	var SENDW_SAMT 	= this.dsTA_VAT106_D.getColumn(e.row, "SENDW_SAMT");
        	var REPOE_SAMT 	= this.dsTA_VAT106_D.getColumn(e.row, "REPOE_SAMT");
        	var REPOW_SAMT 	= this.dsTA_VAT106_D.getColumn(e.row, "REPOW_SAMT");
        	var RATES 		= this.dsTA_VAT106_D.getColumn(e.row, "RATES");

        	if (e.columnid == "RATES" || e.columnid == "SENDW_SAMT" || e.columnid == "REPOW_SAMT") {
        		// 환율 또는 원화에서 ENTER 입력시(원화기준 계산)
        		SENDE_SAMT = nexacro.toNumber(SENDW_SAMT, 0) / nexacro.toNumber(RATES, 0);
        		REPOE_SAMT = nexacro.toNumber(REPOW_SAMT, 0) / nexacro.toNumber(RATES, 0);

        		this.dsTA_VAT106_D.setColumn(e.row, "SENDE_SAMT", SENDE_SAMT);
        		this.dsTA_VAT106_D.setColumn(e.row, "REPOE_SAMT", REPOE_SAMT);
        	} else if (e.columnid == "SENDE_SAMT" || e.columnid == "REPOE_SAMT") {
        		// 외화에서 ENTER 입력시(외화기준 계산)
        		SENDW_SAMT = nexacro.toNumber(SENDE_SAMT, 0) * nexacro.toNumber(RATES, 0);
        		REPOW_SAMT = nexacro.toNumber(REPOE_SAMT, 0) * nexacro.toNumber(RATES, 0);

        		this.dsTA_VAT106_D.setColumn(e.row, "SENDW_SAMT", SENDW_SAMT);
        		this.dsTA_VAT106_D.setColumn(e.row, "REPOW_SAMT", REPOW_SAMT);
        	}
        	
        }

        /*--------------------+
         |  행추가 버튼 클릭 시 |
         +--------------------*/
        this.btnAdd_onclick = function(obj,e) {

        	if (this.dsVA_VATBRANCH.rowcount > 0) {
        		var iRow = this.dsTA_VAT106_D.addRow();
        		this.dsTA_VAT106_D.setColumn(iRow, "BRANCH_CD"	, this.cmbSHRACCT_GUBN.value);
        		this.dsTA_VAT106_D.setColumn(iRow, "VAT_YYYY"	, this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4));
        		this.dsTA_VAT106_D.setColumn(iRow, "VAT_QUARTER", this.cmbVAT_QUARTER.value);

        		// seq 또는 serial을 순서대로 들어가게 하기 위하여 정렬
        		// 따라서 테이블을 전체 삭제하고 저장하나 UPDATE를 하나 수정자에 대한 내역은 소용이 없다.
        		// 전체 삭제 후 저장
        		for (var i = this.dsTA_VAT106_D.getRowCount() - 1; i >= 0; i--) {
        			this.dsTA_VAT106_D.setColumn(i, "VAT_SERIAL", i + 1);
        		}
        		
        	} else {
        		this.fnc_Message("TMM032"); //DataSet의 Header가 없어서 오류
        		return false;
        	}
        	
        }

        /*--------------------+
         |  행삭제 버튼 클릭 시 |
         +--------------------*/
        this.btnDel_onclick = function (obj,e) {

        	if (this.dsTA_VAT106_D.getRowCount() > 0) {
        		if (this.fn_DeleteCheck()) {
        			this.dsTA_VAT106_D.deleteMultiRows(this.grdTA_VAT106_D.getSelectedDatasetRows());
        		}
        	} else {
        		this.fnc_Message("TMM007");
        	}

        	this.grdTA_VAT106_D.setFocus();
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_VAT106_D);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	} else {
        		var sQuestionText = "서류명: " + this.dsTA_VAT106_D.getColumn(this.dsTA_VAT106_D.rowposition, "DOCUMENT_NM");
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT106_D.addEventHandler("oncolumnchanged", this.dsTA_VAT106_D_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.btnAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.btnDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_TEL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_MASTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRANCH_NM.addEventHandler("ontextchanged", this.edtBRANCH_NM_OnChanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
