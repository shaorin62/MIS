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
                this.set_name("HATF0100");
                this.set_titletext("출장여비정산서 현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"DSNAME\">dsSHRDPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BTCLXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BSRP_SEQ1\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BTCL_SEQ1\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"TITL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_STDT\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"SDYT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"SDYT_ENDD\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_CODE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_DSTN\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_PLAC\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_PURC\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PUNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PURE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_RAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_BUSB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_BUSB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_CARM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_CARM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AIRB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_AIRB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_SHIP\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_SHIP\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_CARB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_CARB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_ETCR\" type=\"STRING\" size=\"256\"/><Column id=\"TRAP_ETCR\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_ETCD\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_DAYP\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_ETCP\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_ADDP\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_LDDP\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_ALLP\" type=\"STRING\" size=\"256\"/><Column id=\"RCPX_DNSP\" type=\"STRING\" size=\"256\"/><Column id=\"RCPX_PNSP\" type=\"STRING\" size=\"256\"/><Column id=\"RCPX_ALLP\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALP\" type=\"STRING\" size=\"256\"/><Column id=\"DETL_ETCR\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_RPDT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USNM\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USNM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADNV_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"PERS_TREX\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
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

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("출장여비정산서 현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 출장관리 > 출장여비정산서현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "155", "80", "25", null, null, this);
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

            obj = new Static("Static07", "absolute", "636", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "199", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "214", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static03", "absolute", "343", "71", "70", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("출장일정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "314", "61", "40", "93", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "628", "61", "40", "93", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "343", "97", "65", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE1", "absolute", "411", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static08", "absolute", "513", "71", "14", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE2", "absolute", "528", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static11", "absolute", "657", "71", "70", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("연수일정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSDYT_DATE1", "absolute", "725", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("136");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static16", "absolute", "827", "71", "14", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSDYT_DATE2", "absolute", "842", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("138");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "411", "97", "80", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "493", "97", "21", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "516", "97", "112", "21", null, null, this);
            obj.set_taborder("142");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29", "97", "65", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "97", "97", "80", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "179", "97", "21", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "202", "97", "112", "21", null, null, this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "123", "68", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("출장구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDPAY_CODE", "absolute", "97", "123", "217", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRDPAY_CODE_innerdataset = new Dataset("cmbSHRDPAY_CODE_innerdataset", this.cmbSHRDPAY_CODE);
            cmbSHRDPAY_CODE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRDPAY_CODE_innerdataset);
            obj.set_taborder("148");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("cmbSHRCOMM_STAT", "absolute", "411", "123", "217", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRCOMM_STAT_innerdataset = new Dataset("cmbSHRCOMM_STAT_innerdataset", this.cmbSHRCOMM_STAT);
            cmbSHRCOMM_STAT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRCOMM_STAT_innerdataset);
            obj.set_taborder("149");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static17", "absolute", "342", "123", "68", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("152");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "159", "240", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_BTCLXM", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_taborder("154");
            obj.set_binddataset("dsAT_BTCLXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"제목\"/><Cell col=\"3\" rowspan=\"2\" text=\"출장&#13;&#10;구분\"/><Cell col=\"4\" colspan=\"2\" text=\"출장목적\"/><Cell col=\"6\" rowspan=\"2\" text=\"출장지\"/><Cell col=\"7\" colspan=\"2\" text=\"출장기간\"/><Cell col=\"9\" colspan=\"2\" text=\"연수일정\"/><Cell col=\"11\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"12\" colspan=\"6\" text=\"신청자\"/><Cell col=\"18\" colspan=\"8\" text=\"교통편\"/><Cell col=\"26\" colspan=\"7\" text=\"출장여비\"/><Cell col=\"33\" colspan=\"2\" text=\"해외시장개척비\"/><Cell col=\"35\" rowspan=\"2\" text=\"출장비 총계\"/><Cell col=\"36\" rowspan=\"2\" text=\"교통비 세부내역 및 기타사항\"/><Cell col=\"37\" rowspan=\"2\" text=\"교통비상세기타\"/><Cell col=\"38\" rowspan=\"2\" text=\"출장보고내용\"/><Cell col=\"39\" colspan=\"2\" text=\"작성자\"/><Cell row=\"1\" col=\"4\" text=\"목적\"/><Cell row=\"1\" col=\"5\" text=\"기타내용\"/><Cell row=\"1\" col=\"7\" text=\"시작일\"/><Cell row=\"1\" col=\"8\" text=\"종료일\"/><Cell row=\"1\" col=\"9\" text=\"시작일\"/><Cell row=\"1\" col=\"10\" text=\"종료일\"/><Cell row=\"1\" col=\"12\" text=\"구분\"/><Cell row=\"1\" col=\"13\" text=\"사번\"/><Cell row=\"1\" col=\"14\" text=\"성명\"/><Cell row=\"1\" col=\"15\" text=\"직급\"/><Cell row=\"1\" col=\"16\" text=\"소속\"/><Cell row=\"1\" col=\"17\" text=\"전도금\"/><Cell row=\"1\" col=\"18\" text=\"철도\"/><Cell row=\"1\" col=\"19\" text=\"버스\"/><Cell row=\"1\" col=\"20\" text=\"자가차\"/><Cell row=\"1\" col=\"21\" text=\"항공\"/><Cell row=\"1\" col=\"22\" text=\"선박\"/><Cell row=\"1\" col=\"23\" text=\"회사차\"/><Cell row=\"1\" col=\"24\" text=\"기타\"/><Cell row=\"1\" col=\"25\" text=\"출장거리(Km)\"/><Cell row=\"1\" col=\"26\" text=\"교통비\"/><Cell row=\"1\" col=\"27\" text=\"숙박비\"/><Cell row=\"1\" col=\"28\" text=\"일비\"/><Cell row=\"1\" col=\"29\" text=\"기타\"/><Cell row=\"1\" col=\"30\" text=\"공제액\"/><Cell row=\"1\" col=\"31\" text=\"장기출장공제액\"/><Cell row=\"1\" col=\"32\" text=\"합계\"/><Cell row=\"1\" col=\"33\" text=\"자료수집비\"/><Cell row=\"1\" col=\"34\" text=\"접대비\"/><Cell row=\"1\" col=\"39\" text=\"사번\"/><Cell row=\"1\" col=\"40\" text=\"성명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:INST_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:TITL_NAME\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:BSRP_CDNM\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:BSRP_PUNM\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:BSRP_PURE\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:BSRP_PLAC\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BSRP_STDT\" mask=\"yyyy.MM.dd\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BSRP_ENDD\" mask=\"yyyy.MM.dd\"/><Cell col=\"9\" displaytype=\"expr:SDYT_STDT == &quot;&quot; ? &quot;none&quot; : &quot;date&quot;\" style=\"align:center middle;\" text=\"bind:SDYT_STDT\" mask=\"yyyy.MM.dd\" calendardisplay=\"edit\" calendardisplaynulltype=\"default\"/><Cell col=\"10\" displaytype=\"expr:SDYT_ENDD == &quot;&quot; ? &quot;none&quot; : &quot;date&quot;\" style=\"align:center middle;\" text=\"bind:SDYT_ENDD\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"default\"/><Cell col=\"11\" style=\"align:center middle;\" text=\"bind:STAT_NAME\"/><Cell col=\"12\" style=\"align:center middle;\" text=\"bind:EMPL_CDNM\"/><Cell col=\"13\" style=\"align:center middle;\" text=\"bind:APLT_EMNR\"/><Cell col=\"14\" style=\"align:center middle;\" text=\"bind:APLT_EMNM\"/><Cell col=\"15\" style=\"align:center middle;\" text=\"bind:APLT_OPNM\"/><Cell col=\"16\" style=\"align:center middle;\" text=\"bind:APLT_DTNM\"/><Cell col=\"17\" style=\"align:right middle;\" text=\"bind:ADNV_AMNT\"/><Cell col=\"18\" style=\"align:right middle;\" text=\"bind:TRAP_RAIL\"/><Cell col=\"19\" style=\"align:right middle;\" text=\"bind:TRAP_BUSB\"/><Cell col=\"20\" style=\"align:right middle;\" text=\"bind:TRAP_CARM\"/><Cell col=\"21\" style=\"align:right middle;\" text=\"bind:TRAP_AIRB\"/><Cell col=\"22\" style=\"align:right middle;\" text=\"bind:TRAP_SHIP\"/><Cell col=\"23\" style=\"align:right middle;\" text=\"bind:TRAP_CARB\"/><Cell col=\"24\" style=\"align:right middle;\" text=\"bind:TRAP_ETCR\"/><Cell col=\"25\" style=\"align:right middle;\" text=\"bind:BSRP_DSTN\"/><Cell col=\"26\" style=\"align:right middle;\" text=\"bind:BTCL_TRAN\"/><Cell col=\"27\" style=\"align:right middle;\" text=\"bind:BTCL_ROOM\"/><Cell col=\"28\" style=\"align:right middle;\" text=\"bind:BTCL_DAYP\"/><Cell col=\"29\" style=\"align:right middle;\" text=\"bind:BTCL_ETCP\"/><Cell col=\"30\" style=\"align:right middle;\" text=\"bind:BTCL_ADDP\"/><Cell col=\"31\" style=\"align:right middle;\" text=\"bind:BTCL_LDDP\"/><Cell col=\"32\" style=\"align:right middle;\" text=\"bind:BTCL_ALLP\"/><Cell col=\"33\" style=\"align:right middle;\" text=\"bind:RCPX_DNSP\"/><Cell col=\"34\" style=\"align:right middle;\" text=\"bind:RCPX_PNSP\"/><Cell col=\"35\" style=\"align:right middle;\" text=\"bind:TOTALP\"/><Cell col=\"36\" style=\"align:left top;\" text=\"bind:TRAN_ETCD\"/><Cell col=\"37\" style=\"align:left middle;\" text=\"bind:DETL_ETCR\"/><Cell col=\"38\" style=\"align:left middle;\" text=\"bind:BTCL_RPDT\"/><Cell col=\"39\" style=\"align:center middle;\" text=\"bind:INST_USID\"/><Cell col=\"40\" style=\"align:center middle;\" text=\"bind:INST_USNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장여비정산서 현황");

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
        this.addIncludeScript("HATF0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HATF0100 출장여비정산서현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.01		박정윤		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By NDS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************NDS*CO*KR********/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTFT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "HATF0100"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');
        	//this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4)+ '1231');

        	this.calSHRAPPR_DATE1.setFocus();
        	
        	this.fn_Search();
        	
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
        	this.fnc_DatasetClear("dsAT_BTCLXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_BTCLXM=dsAT_BTCLXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BTCLXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	// 검색영역 데이터 초기화
        	this.dsAT_BTCLXM.clearData();
        	
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');   // 신청시작일자
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));             // 신청종료
        	this.calSHRBSRP_DATE1.set_value(""); // 출장시작일자
        	this.calSHRBSRP_DATE2.set_value(""); // 출장종료일자
        	this.calSHRSDYT_DATE1.set_value(""); // 외근시작일자
        	this.calSHRSDYT_DATE2.set_value(""); // 외근종료일자

        	this.edtSHREMPL_NUMB.set_value(""); // 작성자사번
        	this.edtSHREMPL_NAME.set_value(""); // 작성자이름
        	
        	this.edtSHRDEPT_CODE.set_value(""); // 부서코드
        	this.edtSHRDEPT_NAME.set_value(""); // 부서이름

        	this.cmbSHRCOMM_STAT.set_index(0); // 출장구분 콤보
        	this.cmbSHRDPAY_CODE.set_index(0); // 결재상태 콤보

        	this.calSHRAPPR_DATE1.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	// 기능 없음
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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsAT_BTCLXM", this);
        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
         
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE1.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청일자", this.calSHRAPPR_DATE1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE2.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청일자", this.calSHRAPPR_DATE2);
        	}

        	if (this.fnc_Trim(this.calSHRAPPR_DATE1.value) > this.fnc_Trim(this.calSHRAPPR_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청일자 시작일, 종료일", this.calSHRAPPR_DATE1);
        	}

        	if (this.fnc_Trim(this.calSHRBSRP_DATE1.value) > this.fnc_Trim(this.calSHRBSRP_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "출장일정 시작일, 종료일", this.calSHRBSRP_DATE1);
        	}

        	if (this.fnc_Trim(this.calSHRSDYT_DATE1.value) > this.fnc_Trim(this.calSHRSDYT_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "연수일정 시작일, 종료일", this.calSHRSDYT_DATE1);
        	}

        	if (this.fnc_DatasetChangeCheck("dsAT_BTCLXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

          //기능 없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	// 기능 없음
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			  + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		  + this.fnc_Quote(sKind);
        		sReturnString += " INST_USID="        + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	                // 신청자
        		sReturnString += " APLT_DTCD="        + this.fnc_Quote(this.edtSHRDEPT_CODE.value);                 // 신청부서
        		sReturnString += " APPR_STDT="        + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); // 시작일자 
        		sReturnString += " APPR_ENDD="        + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); // 종료일자 
        		sReturnString += " BSRP_STDT="        + this.fnc_Quote(this.fnc_Trim(this.calSHRBSRP_DATE1.value)); // 시작일자 
        		sReturnString += " BSRP_ENDD="        + this.fnc_Quote(this.fnc_Trim(this.calSHRBSRP_DATE2.value)); // 종료일자 
        		sReturnString += " SDYT_STDT="        + this.fnc_Quote(this.fnc_Trim(this.calSHRSDYT_DATE1.value)); // 연수시작일자 
        		sReturnString += " SDYT_ENDD="        + this.fnc_Quote(this.fnc_Trim(this.calSHRSDYT_DATE2.value)); // 연수종료일자 
        		sReturnString += " STAT_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOMM_STAT.value));  // 결재상태
        		sReturnString += " BSRP_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDPAY_CODE.value));  // 출장구분

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsAT_BTCLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_BTCLXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRCOMM_STAT,dsSHRAPPR_STAT,0";
        		arrParam[1] = "COMBO,cmbSHRDPAY_CODE,dsSHRDPAY_CODE,0";
        		arrParam[2] = "GRID,grdAT_BTCLXM,dsDPAY_CODE,BSRP_CODE";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_HelpDialogeCallback";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // SHR부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_HelpDialogeCallback";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	}

        }

        this.fn_HelpDialogeCallback = function(dummy){
        	if ( dummy.length > 0 ) this.fn_Search();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRAPPR_DATE1.addEventHandler("canchange", this.calSHRCHRQ_STDT_canchange, this);
            this.calSHRAPPR_DATE2.addEventHandler("canchange", this.calSHRCHRQ_ENDT_canchange, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdAT_BTCLXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATF0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
