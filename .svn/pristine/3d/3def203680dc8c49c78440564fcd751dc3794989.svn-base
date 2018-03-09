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
                this.set_name("PAYF0040");
                this.set_titletext("퇴직금지급현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CALC_TYPE</Col><Col id=\"DSNAME\">dsSHRCALC_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">정산구분</Col></Row><Row><Col id=\"CODEID\">TAXX_GUBN</Col><Col id=\"DSNAME\">dsSHRTAXX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">과세구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRRETR_SEDN</Col><Col id=\"CODEID\">RETR_SEDN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">조회기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPCXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RERE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAXX_GUBN\" size=\"6\" type=\"STRING\"/><Column id=\"TAXX_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"RERE_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FINL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"FIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PMST_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL1_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL2_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL3_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL4_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXCP_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RETI_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VORN_ALLO\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVBN_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PYET_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TRRT_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DBPJ_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RTBM_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PBUS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FPTA_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DDUC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NPPC_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"HINC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"LOAN_RPAM\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REEP_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PENS_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_ALWN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"RLPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BANK_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"DPST_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CLSE_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"GRWS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"GRWX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"SHCH_GUBN\" size=\"255\" type=\"STRING\"/><Column id=\"TAPD_AMOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("퇴직금지급현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 퇴직금관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "60", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "344", "71", "50", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "677", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPCXM", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_taborder("8");
            obj.set_binddataset("dsPY_RTPCXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"마감\"/><Cell col=\"1\" rowspan=\"2\" text=\"사번\"/><Cell col=\"2\" rowspan=\"2\" text=\"성명\"/><Cell col=\"3\" rowspan=\"2\" text=\"소속\"/><Cell col=\"4\" rowspan=\"2\" text=\"부서\"/><Cell col=\"5\" rowspan=\"2\" text=\"직위\"/><Cell col=\"6\" rowspan=\"2\" text=\"직급\"/><Cell col=\"7\" colspan=\"2\" text=\"근속기간\"/><Cell col=\"9\" rowspan=\"2\" text=\"회차\"/><Cell col=\"10\" rowspan=\"2\" text=\"기산일\"/><Cell col=\"11\" rowspan=\"2\" text=\"지급일\"/><Cell col=\"12\" rowspan=\"2\" text=\"과세구분\"/><Cell col=\"13\" rowspan=\"2\" text=\"퇴직사유\"/><Cell col=\"14\" rowspan=\"2\" text=\"평균임금\"/><Cell col=\"15\" rowspan=\"2\" text=\"퇴직급여\"/><Cell col=\"16\" rowspan=\"2\" text=\"소득세\"/><Cell col=\"17\" rowspan=\"2\" text=\"지방소득세\"/><Cell col=\"18\" rowspan=\"2\" text=\"회사실지급액\"/><Cell col=\"19\" rowspan=\"2\" text=\"과세이연합계\"/><Cell row=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"7\" text=\"시작일\"/><Cell row=\"1\" col=\"8\" text=\"종료일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CLSE_YSNO\"/><Cell col=\"1\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" style=\"align: ;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" text=\"bind:CPOS_NAME\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:FINL_ISDT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:FINL_ENDT\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:RECE_SEQN\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" text=\"bind:FINL_STDT\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:FINL_PYDT\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" text=\"bind:TAXX_NAME\"/><Cell col=\"13\" text=\"bind:RERE_NAME\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVER_WAGE\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_WAGE\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_INTX\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_IHTX\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RLPY_AMOT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPD_AMOT\"/></Band><Band id=\"summary\"><Cell colspan=\"14\" text=\"합계\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AVER_WAGE&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;RETI_WAGE&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;RETI_INTX&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;RETI_IHTX&quot;)\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;RLPY_AMOT&quot;)\"/><Cell col=\"19\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAPD_AMOT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "315", "61", "40", "67", null, null, this);
            obj.set_taborder("116");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "636", "61", "40", "67", null, null, this);
            obj.set_taborder("117");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "666", "71", "50", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "344", "100", "60", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "666", "100", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("정산구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCALC_TYPE", "absolute", "748", "100", "190", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchCap");

            obj = new Combo("cmbSHRTAXX_GUBN", "absolute", "1045", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCap");

            obj = new Static("Static14", "absolute", "967", "71", "80", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("과세구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "842", "71", "96", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "819", "71", "21", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "748", "71", "70", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "517", "71", "119", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "494", "71", "21", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "412", "71", "80", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "97", "71", "218", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_readonly("true");

            obj = new Calendar("calSHRYMTH_ENDT", "absolute", "536", "100", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "520", "100", "14", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRYMTH_STDT", "absolute", "412", "100", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static10", "absolute", "938", "54", "40", "67", null, null, this);
            obj.set_taborder("141");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "100", "70", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("조회기준");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRETR_SEDN", "absolute", "97", "100", "218", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직금지급현황");

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
        this.addIncludeScript("PAYF0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0040 퇴직금지급현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.12		안윤준		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "PAYF0040";

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
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
         	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	//dtlCommonCode_RETR_SEDN.setCondition("filter", dtlCommonCode_RETR_SEDN.getOption( "filterCondition" ) + " && REF1_FILD ==  '1'");
        	switch (this.sUSERLAVEL) {
        		case "1" : 	//전체
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.cmbSHRENFC_CODE.set_readonly(false);
        			
        			this.imgHelpSHRDEPT_CODE.set_enable(true);
        			this.edtSHRDEPT_NAME.set_readonly(false);
        			
        			break;
        		case "3" :	case "4" :	// 3:부실 4:부서
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);	
        			this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        			this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        			
        			break;
        		case "5" :	//개인
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			
        			this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        			this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        			
        			this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        			this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_readonly(true);
        			
        			break;	
        		default :
        			break;
        	}

        	var sNowDate  	= this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sFirstDate 	= this.fnc_SubStr(sNowDate, 0, 6) + "01";
        	
        	//초기값 세팅
        	this.calSHRYMTH_STDT.set_value(sFirstDate);
        	this.calSHRYMTH_ENDT.set_value(sNowDate);
        	this.cmbSHRRETR_SEDN.set_value(3);
        	
        	this.calSHRYMTH_STDT.setFocus();
        	
        }

        /*-----------------------------------+
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
        	this.fnc_DatasetClear("dsPY_RTPCXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_RTPCXM=dsPY_RTPCXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_RTPCXM.setFocus();
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_RTPCXM");
        	this.grdPY_RTPCXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_RTPCXM=dsPY_RTPCXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        // 	if(rtnValue == false) return;
        // 	
        // 	//변경여부 체크
        // 	if (!valLib.checkModified([dtlPY_RTPROT]) && rtnValue != true) {
        // 		//퇴직금지급현황 인쇄하시겠습니까?
        // 		
        // 		var sQuestionText = "";
        // 		sQuestionText += "퇴직금지급내역";
        // 		
        // 		comLib.Message("HRM010", true, sQuestionText, "getCommonPrint");
        // 		
        // 	} else {
        // 		//필수조회조건체크
        // 		if (!scwin.checkPrint()) return;
        // 			
        // 		var param = new Array();
        // 		var sParam = "";			
        // 		var iRow = grdPY_RTPCXM.getFocusedRowIndex();
        // 		var jrffile = "";
        // 
        // 		sParam =  "YMTH_STDT=" + ipcSHRYMTH_STDT.getValue();
        // 		sParam += "&YMTH_ENDT=" + ipcSHRYMTH_ENDT.getValue();
        // 		sParam += "&CALC_TYPE=" + cmbSHRCALC_TYPE.getValue();
        // 		
        // 		if (cmbSHRRETR_SEDN.getValue() == "1") {
        // 			jrffile = "PAYF0040R01.jrf";	//출력물 파일
        // 		} else if (cmbSHRRETR_SEDN.getValue() == "3") {
        // 			jrffile = "PAYF0040R02.jrf";	//출력물 파일
        // 		} 
        // 		
        // 		param[0] = new Array("PY_RTPROT", sParam);
        // 		param[1] = new Array("PY_RTPROT1", sParam);
        // 		comLib.UbiReportView(jrffile, param, true, null);
        // 	}
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPCXM", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRYMTH_STDT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.calSHRYMTH_STDT);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRYMTH_ENDT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.calSHRYMTH_ENDT);
        	}
        	
        	if (this.calSHRYMTH_STDT.value > this.calSHRYMTH_ENDT.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "지급일종료일,지급일시작일", this.calSHRYMTH_STDT);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsPY_RTPCXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        // 	var nRow = dtlCommonCode_GRWS_CODE.getMatchedIndex("COMD_CODE", dtlPY_RTPROT.getCellData(dtlPY_RTPROT.getRowPosition(), "GRWS_CODE"), true);
        // 	if ( dtlCommonCode.getCellData(nRow, "REF4_FILD") == "1" ) {
        // 		//전자결재 처리된 내역은 수정할 수 없습니다!
        // 		comLib.Message("TMM903", true);
        // 		return false;
        // 	}

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
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " YMTH_STDT=" 	+ this.fnc_Quote(this.calSHRYMTH_STDT.value);
        		sReturnString += " YMTH_ENDT=" 	+ this.fnc_Quote(this.calSHRYMTH_ENDT.value);
        		sReturnString += " CALC_TYPE=" 	+ this.fnc_Quote(this.cmbSHRCALC_TYPE.value);
        		sReturnString += " TAXX_GUBN=" 	+ this.fnc_Quote(this.cmbSHRTAXX_GUBN.value);
        		sReturnString += " RETR_SEDN=" 	+ this.fnc_Quote(this.cmbSHRRETR_SEDN.value);

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
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
        		this.fnc_Information(this.stInformation, this.dsPY_RTPCXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPCXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_RTPCXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;	
        			arrParam[arrInt++] 	= "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        			arrParam[arrInt++] 	= "COMBO,cmbSHRCALC_TYPE,dsSHRCALC_TYPE,0"; // 조회-정산구분
        			arrParam[arrInt++] 	= "COMBO,cmbSHRTAXX_GUBN,dsSHRTAXX_GUBN,0"; // 조회-과세구분
        			arrParam[arrInt++]  = "COMBO,cmbSHRRETR_SEDN,dsSHRRETR_SEDN,0"; // 조회 - 조회기준
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-------------------+
         |  그리드 헤더 클릭  |
         +-------------------*/
        this.grdPY_RTPCXM_onheadclick = function(obj,e) {
        	
        	if (e.cell == 16) {
        		var sCol = "CLSE_YSNO";
        		var iCheckValue = 0;

        		if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        			obj.setCellProperty("head", e.cell, "text", "0");
        			iCheckValue = 0;
        		} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        			iCheckValue = 1;
        		}

        		obj.set_enableredraw(false);
        		for (var i = 0; i < this.dsPY_RTPCXM.rowcount; i++) {
        			this.dsPY_RTPCXM.setColumn(i, sCol, iCheckValue);
        		}
        		obj.set_enableredraw(true);
        	}
        	
        }

        /*-----------------------------------+
         |  인쇄 여부 체크  | 
         @parameter : 
         @return :bool
         +------------------------------------*/
        this.checkPrint = function() {

        	if(dtlPY_RTPROT.getRowCount() < 1 || grdPY_RTPCXM.getFocusedRowIndex() < 0) {
        		comLib.Message("TMM031", true);        //인쇄할 자료가 없습니다. 조회 후 인쇄하십시요.	
        		return false;
        	}
        		
        	//선택된 내용이 입력 또는 수정상태라면...
        	if (valLib.checkModified([dtlPY_RTPROT])) {
        		comLib.Message("TMM015", true, "인쇄"); //	저장 후 인쇄하시기 바랍니다.	
        		return false;
        	}
        	
        	return true;
        }

        

        this.cmbSHRRETR_SEDN_onitemchanged = function(obj,e) {
        	if ( e.postvalue == "1" ) {
        		this.Static12.set_text("퇴직일");
        		
        	} else if ( e.postvalue == "3" ) {
        		this.Static12.set_text("지급일");
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTPCXM.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_RTPCXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTPCXM.addEventHandler("onheadclick", this.grdPY_RTPCXM_onheadclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRENFC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRYMTH_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRYMTH_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETR_SEDN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETR_SEDN.addEventHandler("onitemchanged", this.cmbSHRRETR_SEDN_onitemchanged, this);

        };

        this.loadIncludeScript("PAYF0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
