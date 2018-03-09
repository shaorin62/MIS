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
                this.set_name("HATF0080");
                this.set_titletext("출장외근정산 등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_BTWOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_SEQN\" size=\"20\" type=\"STRING\"/><Column id=\"BSRP_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_STDT\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" size=\"10\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"APLT_EMNR\" size=\"10\" type=\"STRING\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"20\"/><Column id=\"APLT_OPCD\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_OPNM\" type=\"STRING\" size=\"20\"/><Column id=\"APLT_DTCD\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_DTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REMK_ETCR\" type=\"STRING\" size=\"2000\"/><Column id=\"PYMN_YENO\" type=\"STRING\" size=\"1\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"10\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"DRFT_DATE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BTWOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"BTWO_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_SEQ2\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_DATE\" size=\"10\" type=\"STRING\"/><Column id=\"BTWO_PLAC\" size=\"256\" type=\"STRING\"/><Column id=\"BTWO_STDT\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_ENDD\" size=\"20\" type=\"STRING\"/><Column id=\"BTWO_DINT\" size=\"10\" type=\"INT\"/><Column id=\"BTWO_OILB\" type=\"INT\" size=\"10\"/><Column id=\"BTWO_PASS\" type=\"INT\" size=\"10\"/><Column id=\"PARK_CRGE\" type=\"INT\" size=\"10\"/><Column id=\"BTWO_TRAN\" type=\"STRING\" size=\"50\"/><Column id=\"BTWO_CRGE\" type=\"INT\" size=\"10\"/><Column id=\"BTWO_AMNT\" type=\"INT\" size=\"10\"/><Column id=\"BTWO_DAYP\" type=\"INT\" size=\"10\"/><Column id=\"BTWO_PAYA\" type=\"INT\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"10\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BUTRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_SEQN\" size=\"20\" type=\"STRING\"/><Column id=\"BSRP_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DCSN_YENO\" size=\"2\" type=\"STRING\"/><Column id=\"BSRP_STDT\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" size=\"10\" type=\"STRING\"/><Column id=\"SDYT_STDT\" size=\"10\" type=\"STRING\"/><Column id=\"SDYT_ENDD\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_CDNM\" size=\"100\" type=\"STRING\"/><Column id=\"BSRP_DSTN\" size=\"100\" type=\"STRING\"/><Column id=\"BSRP_PLAC\" size=\"256\" type=\"STRING\"/><Column id=\"BSRP_PURC\" type=\"STRING\" size=\"10\"/><Column id=\"BSRP_PUNM\" type=\"STRING\" size=\"100\"/><Column id=\"BSRP_PURE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RAIL\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_BUSB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_CARM\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_AIRB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_SHIP\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_CARB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_ETCR\" type=\"STRING\" size=\"2\"/><Column id=\"TRAN_ETCD\" type=\"STRING\" size=\"256\"/><Column id=\"RCPX_DNSP\" type=\"STRING\" size=\"10\"/><Column id=\"RCPX_PNSP\" type=\"STRING\" size=\"10\"/><Column id=\"BSRP_PLAN\" type=\"STRING\" size=\"2000\"/><Column id=\"DETL_ETCR\" type=\"STRING\" size=\"2000\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"10\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"DRFT_DATE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BUTRXD", this);
            obj._setContents("<ColumnInfo><Column id=\"BSRP_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"BSRP_SEQ2\" type=\"STRING\" size=\"20\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_CDNM\" type=\"STRING\" size=\"100\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"20\"/><Column id=\"APLT_OPCD\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_OPNM\" type=\"STRING\" size=\"20\"/><Column id=\"APLT_DTCD\" type=\"STRING\" size=\"10\"/><Column id=\"APLT_DTNM\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_EMPL\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_CDNM\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_ACNT\" type=\"STRING\" size=\"30\"/><Column id=\"ADNV_AMNT\" type=\"STRING\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"10\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_GASBCT", this);
            obj._setContents("<ColumnInfo><Column id=\"STDR_DSTN\" size=\"10\" type=\"INT\"/><Column id=\"OILP_UNTP\" size=\"10\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", null, null, "175", "25", "15", this);
            obj.set_taborder("179");
            obj.set_cssclass("styFormItemBoxOut");
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

            obj = new Static("st_FormTitle", "absolute", "8", "0", "488", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("출장외근정산 등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("Static00", "absolute", "573", "125", "80", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
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

            obj = new Grid("grdAT_BTWOXM", "absolute", "8", "160", null, null, "25", "215", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_BTWOXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"외근일자\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"외근지역\"/><Cell col=\"3\" rowspan=\"2\" colspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"외근시간\"/><Cell col=\"5\" colspan=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"자가차량\"/><Cell col=\"9\" colspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"대중교통\"/><Cell col=\"11\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"금액\"/><Cell col=\"12\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"일비\"/><Cell col=\"13\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"합계\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"주행거리\"/><Cell row=\"1\" col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"유류대/Km\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"통행료\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"주차료\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"교통편\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"요금\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:BTWO_DATE\" calendardisplay=\"edit\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:BTWO_PLAC\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:left middle;\" text=\"bind:BTWO_STDT\" mask=\"HH:mm\" editlimit=\"4\" editdisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:left middle;\" text=\"bind:BTWO_ENDD\" mask=\"HH:mm\" editlimit=\"4\" editdisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BTWO_DINT\" mask=\"###,###\" editdisplay=\"edit\"/><Cell col=\"6\" style=\"align:right middle;\" text=\"bind:BTWO_OILB\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BTWO_PASS\" mask=\"###,###\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:PARK_CRGE\" mask=\"###,###\" editdisplay=\"edit\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:BTWO_TRAN\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BTWO_CRGE\" mask=\"###,###\" editdisplay=\"edit\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BTWO_AMNT\" mask=\"###,###\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BTWO_DAYP\" mask=\"###,###\" editdisplay=\"edit\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BTWO_PAYA\" mask=\"###,###\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_DINT&quot;)\" mask=\"###,###\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_PASS&quot;)\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;PARK_CRGE&quot;)\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"normal\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_CRGE&quot;)\" mask=\"###,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_AMNT&quot;)\" mask=\"###,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_DAYP&quot;)\" mask=\"###,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BTWO_PAYA&quot;)\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", "139", "245", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_text("외근내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "154", "216", "6", null, null, this);
            obj.set_taborder("152");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "65", "25", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "29", "69", "76", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "63", null, null, this);
            obj.set_taborder("155");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "28", "95", "52", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "83", "95", "80", "21", null, null, this);
            obj.set_taborder("157");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "165", "95", "21", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "188", "95", "100", "21", null, null, this);
            obj.set_taborder("159");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TITL_NAME", "absolute", "83", "69", "796", "21", null, null, this);
            obj.set_taborder("160");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "316", "95", "76", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("외근기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE1", "absolute", "386", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("162");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "488", "95", "14", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE2", "absolute", "503", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("164");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static08", "absolute", "288", "90", "40", "34", null, null, this);
            obj.set_taborder("169");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "8", null, "245", "21", null, "190", this);
            obj.set_taborder("173");
            obj.set_text("기타사항 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "521", "216", "6", null, null, this);
            obj.set_taborder("174");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "502", "80", "25", null, null, this);
            obj.set_taborder("175");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", null, "135", "62", "21", "90", null, this);
            obj.set_taborder("176");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", null, "135", "62", "21", "25", null, this);
            obj.set_taborder("177");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_DETL_ETCR", "absolute", "17", null, null, "157", "34", "24", this);
            obj.set_taborder("182");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("184");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장외근정산 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_TITL_NAME","value","dsAT_BTWOXM","TITL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calSHRBSRP_DATE1","value","dsAT_BTWOXM","BSRP_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calSHRBSRP_DATE2","value","dsAT_BTWOXM","BSRP_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ta_DETL_ETCR","value","dsAT_BTWOXM","REMK_ETCR");
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
        this.addIncludeScript("HATF0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0080.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장외근정산 등록
         * @category	 	인사관리>출장관리>출장외근정산 등록 
         * @author	   		김남호
         * @cdate	  		2016.10.11
         * @version 1.0		최초 작성
         * HATC0010.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0080"; 
        this.sDOCUID 	  = "";
        this.stChk        = ""; //로딩상태체크(신규, 또는 수정)
        this.sAPPLDATE    = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        this.sEMPLGUBN     = ""; // 직원 구분
        this.sSTRTCHCK     = ""; // 로딩상태체크(신규, 또는 수정)
        this.sTITLNAME     = "";
        this.sOIL_UNTP     = 0;

        
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
        	//this.fnc_GetComboDs(this.dsCombo);

        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        	
        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = this.parent.sDOCUIDXX;
        	
        	//this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        //alert(this.parent.sAPPRGUBN);
        trace("HATF0080.fn_FormLoadSetting.sAPPRGUBN = "+this.parent.sAPPRGUBN);

        	if(this.parent.sAPPRGUBN == "cre"){ /*상신일때*/
        		this.btn_PROC.set_enable(true);
        		this.fn_formNotEnable();
        trace("HATF0080.fn_FormLoadSetting = cre");
        	}else if(this.parent.sAPPRGUBN == "del"){ /*취소일때*/
        		this.btn_CANC.set_enable(true);
        		this.fn_formNotEnable();
        trace("HATF0080.fn_FormLoadSetting = del");
        	}
        	
        	if(this.parent.sAPPRSTAT == "T" || this.parent.sAPPRSTAT == "P" || this.parent.sAPPRSTAT == "Y"){	//결재상태(임시저장,진행,완료)
        		this.fn_formNotEnable();
        trace("HATF0080.fn_FormLoadSetting.sAPPRSTAT = "+this.parent.sAPPRSTAT);
        	}

           	/* 화면 구분값에 따른 적용 */
            if(this.parent.sAPPRGUBN == "new" || this.parent.sAPPRGUBN == null) { // 신규등록일 때
        		//DATASET 설정
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_BTWOXM');
        		this.fnc_DatasetClear('dsAT_BTWOXD');
        		this.fnc_DatasetClear('dsAT_BUTRXM');
        		this.fnc_DatasetClear('dsAT_BUTRXD');
        		
            	this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX","KHR122");
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","출장외근정산서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        			
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_BUTRXM=dsAT_BUTRXM dsAT_BUTRXD=dsAT_BUTRXD";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            	this.edt_TITL_NAME.setFocus();
            	
            } else if(this.parent.sAPPRGUBN == "show"){ // 조회

        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_BTWOXM');
        		this.fnc_DatasetClear('dsAT_BTWOXD');
        		this.fnc_DatasetClear('dsAT_BUTRXM');
        		this.fnc_DatasetClear('dsAT_BUTRXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_BTWOXM=dsAT_BTWOXM dsAT_BTWOXD=dsAT_BTWOXD dsTM_APPRXH=dsTM_APPRXH";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            	
        	} else if(this.parent.sAPPRGUBN == "modi" || this.parent.sAPPRGUBN == "cre" || this.parent.sAPPRGUBN == "del"){ // 수정 및 결재상신/취소

        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_BTWOXM');
        		this.fnc_DatasetClear('dsAT_BTWOXD');
        		this.fnc_DatasetClear('dsAT_BUTRXM');
        		this.fnc_DatasetClear('dsAT_BUTRXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_BTWOXM=dsAT_BTWOXM dsAT_BTWOXD=dsAT_BTWOXD dsTM_APPRXH=dsTM_APPRXH";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            	this.edt_TITL_NAME.setFocus();
        	}
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.parent.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.parent.sAPPRGUBN = "list";	
        	this.parent.sAPPRSEQN = "";
        	this.parent.fn_goMenu();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsAT_BTWOXM");
        	this.fnc_DataSetCancel("dsAT_BTWOXD");
        	this.fnc_DataSetCancel("dsAT_BUTRXM");
        	this.fnc_DataSetCancel("dsAT_BUTRXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	
        	this.parent.sAPPRGUBN = "list";	
        	this.parent.sAPPRSEQN = "";
        	this.parent.fn_goMenu();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	var sMethodName = "";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = "";

        	if (!this.fn_SaveItemCheck()) return;

        	this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME", this.dsAT_BTWOXM.getColumn(0, "TITL_NAME"));	//제목
        	this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        	this.dsTM_APPRXH.setColumn(0,"UPDT_USID",application.GBL_EMPLNO);
        	this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        	
        	this.dsAT_BTWOXM.setColumn(0,"APLT_EMNR",application.GBL_EMPLNO);
        	this.dsAT_BTWOXM.setColumn(0,"APLT_DTCD",application.GBL_DEPTCD);
        	//this.dsAT_BTWOXM.setColumn(0,"APLT_OPCD",application.);

        //alert(this.dsAT_BTWOXD.getColumn(0,"BTWO_STDT"));
        //alert(this.dsAT_BTWOXD.getColumn(0,"BTWO_ENDD"));
        	
        	sMethodName = "SAVE00";
        	sInDataSet  = "dsTM_APPRXH=dsTM_APPRXH:A dsAT_BTWOXM=dsAT_BTWOXM:A dsAT_BTWOXD=dsAT_BTWOXD:A";
        	sOutDataSet = "dsTM_APPRXH=dsTM_APPRXH:A dsAT_BTWOXM=dsAT_BTWOXM:A dsAT_BTWOXD=dsAT_BTWOXD:A";
        	sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BTWOXM.setFocus();
        }

        
        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	// 기능 없음
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
        	var sMessage = this.fnc_FormUnloadCheck("dsAT_BTWOXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_BTWOXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        }

        /*-------------------+
         |  저장 필수 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsAT_BTWOXM") && !this.fnc_DatasetChangeCheck("dsAT_BTWOXD") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

            if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "TITL_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsAT_BTWOXM, 0, this.dsAT_BTWOXM, "TITL_NAME");
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "BSRP_STDT"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "외근시작일", this.dsAT_BTWOXM, 0, this.dsAT_BTWOXM, "BSRP_STDT");
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "BSRP_ENDD"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "외근종료일", this.dsAT_BTWOXM, 0, this.dsAT_BTWOXM, "BSRP_ENDD");
        	}		
        	if(nexacro.toNumber(this.dsAT_BTWOXM.getColumn(0,"BSRP_STDT")) > nexacro.toNumber(this.dsAT_BTWOXM.getColumn(0,"BSRP_ENDD"))){
        		this.fnc_Message("TMM125", "출장 시작일이 종료일보다 클 수 없습니다.");
        		return false;
        	}
        	/*if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "REMK_ETCR"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "기타사항", this.dsAT_BTWOXM, 0, this.dsAT_BTWOXM, "REMK_ETCR");
        	}*/
        	
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_BTWOXD.getRowCount(); i++) {
        	
        		if (parseInt(this.dsAT_BTWOXD.getColumn(i, "BTWO_AMNT")) == 0) {
        			this.fnc_Message("TMM125", "교통금액 확인바랍니다.");
        			return;
        		}
        		if (parseInt(this.dsAT_BTWOXD.getColumn(i, "BTWO_PAYA")) == 0) {
        			this.fnc_Message("TMM125", "합계금액 확인바랍니다.");
        			return;
        		}

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_BTWOXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외근일자", this.dsAT_BTWOXD, i, this.dsAT_BTWOXD, "BTWO_DATE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_PLAC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외근지역", this.dsAT_BTWOXD, i, this.dsAT_BTWOXD, "BTWO_PLAC");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_STDT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외근시간", this.dsAT_BTWOXD, i, this.dsAT_BTWOXD, "BTWO_STDT");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외근시간", this.dsAT_BTWOXD, i, this.dsAT_BTWOXD, "BTWO_ENDD");
        		}
        		if (parseInt(this.dsAT_BTWOXD.getColumn(i, "BTWO_CRGE")) > 0 && this.fnc_Length(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_TRAN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "교통편", this.dsAT_BTWOXD, i, this.dsAT_BTWOXD, "BTWO_TRAN");
        		}
        		
        	}

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN;
        		sReturnString += " BSRP_SEQ1=" + this.parent.sBSRP_SEQ1;
        		sReturnString += " BTWO_SEQ1=" + this.parent.sBTWO_SEQ1;
        	
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " BSRP_SEQ1=" + this.parent.sBSRP_SEQ1;
        		
        	} else if (sKind == 'SEARCH02') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " BSRP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "BSRP_STDT"))); 
        			
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN;
        		sReturnString += " BSRP_SEQ1=" + this.parent.sBSRP_SEQ1;
        		sReturnString += " BTWO_SEQ1=" + this.parent.sBTWO_SEQ1;
        	}

        trace("fn_CreateArgument.sReturnString = "+sReturnString);
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
        trace("fn_PostProcess.sMethodName = "+sMethodName);
        	if (sMethodName == 'SEARCH00') {

        		//this.fnc_Information(this.stInformation, this.dsAT_BTWOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsAT_BTWOXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        trace("fn_PostProcess.SEARCH00.BTWO_STDT"+this.dsAT_BTWOXD.getColumn(0,"BTWO_STDT"));
        trace("fn_PostProcess.SEARCH00.BTWO_ENDD"+this.dsAT_BTWOXD.getColumn(0,"BTWO_ENDD"));
        		//this.fn_CreateArgument('SEARCH01');
        		
        		this.fn_formEnable();

        	} else if (sMethodName == "SEARCH01") {

        		//this.fnc_Information(this.stInformation, this.dsAT_BTWOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsAT_BTWOXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var nRow = this.dsAT_BTWOXM.addRow();

        		this.dsAT_BTWOXM.setColumn(nRow, "BSRP_SEQ1", this.dsAT_BUTRXM.getColumn(0, "BSRP_SEQ1"));	//일련번호
        		this.dsAT_BTWOXM.setColumn(nRow, "BSRP_STDT", this.dsAT_BUTRXM.getColumn(0, "BSRP_STDT"));	//출장시작일
        		this.dsAT_BTWOXM.setColumn(nRow, "BSRP_ENDD", this.dsAT_BUTRXM.getColumn(0, "BSRP_ENDD"));	//출장종료일
        		this.dsAT_BTWOXM.setColumn(nRow, "BTWO_CODE", this.dsAT_BUTRXM.getColumn(0, "BSRP_CODE"));	//출장구분코드
        		this.dsAT_BTWOXM.setColumn(nRow, "TITL_NAME", this.dsAT_BUTRXM.getColumn(0, "TITL_NAME"));	//제목
        		this.dsAT_BTWOXM.setColumn(nRow, "REMK_ETCR", this.dsAT_BUTRXM.getColumn(0, "BSRP_PLAN"));	//출장보고내용_출장계획
        		this.dsAT_BTWOXM.setColumn(nRow, "INST_USID", this.edtSHREMPL_NUMB.value);	//등록자	
        		this.dsAT_BTWOXM.setColumn(nRow, "UPDT_USID", this.edtSHREMPL_NUMB.value);	//등록자	
        		

        		var nRow = this.dsAT_BTWOXD.addRow();
        		
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_DATE", this.dsAT_BUTRXM.getColumn(0, "BSRP_STDT"));	//일련번호
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_PLAC", this.dsAT_BUTRXM.getColumn(0, "BSRP_PLAC"));	//사원구분코드
        		this.dsAT_BTWOXD.setColumn(nRow, "APLT_EMNR", this.dsAT_BUTRXD.getColumn(0, "APLT_EMNR"));	//출장자사번
        		
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_DINT", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_OILB", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_PASS", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "PARK_CRGE", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_CRGE", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_AMNT", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_DAYP", 0);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_PAYA", 0);
        			
        		this.dsAT_BTWOXD.setColumn(nRow, "INST_USID", this.edtSHREMPL_NUMB.value);	//등록자	
        		this.dsAT_BTWOXD.setColumn(nRow, "UPDT_USID", this.edtSHREMPL_NUMB.value);	//등록자
        				
        		this.fn_formEnable();
        		
        		
        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_GASBCT=dsAT_GASBCT";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        		
        	} else if (sMethodName == "SEARCH02") {
        		
        		var nSTDR_DSTN = parseInt(this.dsAT_GASBCT.getColumn(0, "STDR_DSTN"));
        		var nOILP_UNTP = parseInt(this.dsAT_GASBCT.getColumn(0, "OILP_UNTP"));
        		this.sOIL_UNTP = nOILP_UNTP / nSTDR_DSTN;
        trace("fn_PostProcess.SEARCH02 : "+nSTDR_DSTN+" / "+nOILP_UNTP+" = "+this.sOIL_UNTP);
        		
        		this.dsAT_BTWOXD.setColumn(0, "BTWO_OILB", this.sOIL_UNTP);	//유류비

        	} else if (sMethodName == "SAVE00") {

        		//this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        trace("fn_PostProcess.SAVE00.dsAT_BTWOXM.APPR_SEQN = "+this.dsAT_BTWOXM.getColumn(0, "APPR_SEQN"));
        trace("fn_PostProcess.SAVE00.dsAT_BTWOXM.BTWO_SEQ1 = "+this.dsAT_BTWOXM.getColumn(0, "BTWO_SEQ1"));
        trace("fn_PostProcess.SAVE00.dsAT_BTWOXD.BTWO_STDT = "+this.dsAT_BTWOXD.getColumn(0, "BTWO_STDT"));
        trace("fn_PostProcess.SAVE00.dsAT_BTWOXD.BTWO_ENDD = "+this.dsAT_BTWOXD.getColumn(0, "BTWO_ENDD"));

        		this.parent.sAPPRSEQN = this.dsAT_BTWOXM.getColumn(0, "APPR_SEQN");
        		this.parent.sBTWO_SEQ1 = this.dsAT_BTWOXM.getColumn(0, "BTWO_SEQ1");
        	
        	} else if (sMethodName == "sendApproval") {
        		
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if(this.parent.sAPPRGUBN == "cre"){
        			this.fnc_ShowApproval(this.parent.sAPPRGUBN, 
        								  this.dsTM_APPROVAL.getColumn(0, "documentID"),
        								  this.dsTM_APPROVAL.getColumn(0,"documentType")
        								  );
        		}
        			
        		this.fn_Search();	
        			
        	} /*else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdAT_BTWOXM,dsBANK_CODE,BANK_CODE";
        		arrParam[1] = "GRID,grdAT_BTWOXM,dsBUTR_GUBN,EMPL_CODE";
                //this.dsWORK_GUBN.filter("COMD_CODE < 3");

        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}*/
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

         /*-----------------------+
         |  업데이트 체크        |
         +------------------------*/
        this.fn_DatasetUpdateChk = function (objDs) 
        {
        	var rowCnt,i,j;
        	var rowType;
        	//삭제된 Row값 유무체크,
        	if(this.objDs.getDeleteRowCount()>0){
        		return true;
        	}
        	
        	if(this.objDs.getCaseCount("getRowType(rowidx)==2 || getRowType(rowidx)==4")>0 ) return ture;
        	
        	return false;
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

         /*-----------------------+
         /*전체화면 비활성화    */
         /*------------------------*/
         this.fn_formNotEnable = function(){
         trace("fn_formNotEnable");
        	this.edt_TITL_NAME.set_enable(false);
        	this.edtSHREMPL_NUMB.set_enable(false);
        	this.imgHelpSHREMPL_NUMB.set_enable(false);
        	this.edtSHREMPL_NAME.set_enable(false);
        	this.calSHRBSRP_DATE1.set_enable(false);
        	this.calSHRBSRP_DATE2.set_enable(false);
        	
        	this.grdAT_BTWOXM.set_enable(false);
        	
        	this.ta_DETL_ETCR.set_enable(false);
         }
         
          /*-----------------------+
         /*전체화면 활성화    */
         /*------------------------*/
         this.fn_formEnable = function(){
         trace("fn_formEnable");
        	this.edt_TITL_NAME.set_enable(true);
        	this.edtSHREMPL_NUMB.set_enable(false);
        	this.imgHelpSHREMPL_NUMB.set_enable(false);
        	this.edtSHREMPL_NAME.set_enable(false);
        	this.calSHRBSRP_DATE1.set_enable(true);
        	this.calSHRBSRP_DATE2.set_enable(true);
        	
        	this.grdAT_BTWOXM.set_enable(true);
        	
        	this.ta_DETL_ETCR.set_enable(true);
         }

         /*-----------------------+
         |  신청자 행추가 버튼  |
         +------------------------*/
        this.btn_addRow_onclick = function(obj,e)
        {
        	var iRow = this.dsAT_BTWOXD.addRow();

        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_SEQ1", this.dsAT_BTWOXM.getColumn(0, "BTWO_SEQ1"));
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_DATE", this.dsAT_BTWOXM.getColumn(0, "BSRP_STDT"));
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_DINT", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_OILB", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_PASS", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"PARK_CRGE", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_CRGE", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_AMNT", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_DAYP", 0);
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_PAYA", 0);
        	
        	this.dsAT_BTWOXD.setColumn(iRow,"INST_USID", this.dsAT_BTWOXM.getColumn(0,application.GBL_EMPLNO));
        	this.dsAT_BTWOXD.setColumn(iRow,"APLT_EMNR", this.dsAT_BTWOXM.getColumn(0,application.GBL_EMPLNO));
        	this.dsAT_BTWOXD.setColumn(iRow,"BTWO_OILB", this.sOIL_UNTP);

        	this.grdAT_BTWOXM.setCellPos(this.fnc_GridColumnIndex(this.grdAT_BTWOXM, "BTWO_DATE"));
        	this.grdAT_BTWOXM.setFocus();

        }

         /*-----------------------+
         |  신청자 행삭제 버튼  |
         +------------------------*/
        this.btn_delRow_onclick = function(obj,e)
        {
            if(this.dsAT_BTWOXD.rowposition == -1) {
        		alert("목록에서 행삭제할 데이터를 선택하여 주십시오.");
        		return;
            }
            
            if(this.dsAT_BTWOXD.rowcount < 2) {
        		// 자료의 마지막입니다. 
        		alert("자료의 마지막입니다.");
        		return;
            }
            
        	//return this.fnc_Message("TMM002", sQuestionText);
        	
        	this.dsAT_BTWOXD.deleteRow(this.dsAT_BTWOXD.rowposition);
        }

        this.dsAT_BTWOXD_oncolumnchanged = function(obj,e)
        {
        	var nRow = obj.rowposition;
        	
        	if(e.columnid == "BTWO_DINT" || e.columnid == "BTWO_OILB" || e.columnid == "BTWO_PASS" || e.columnid == "PARK_CRGE" || e.columnid == "BTWO_CRGE" || e.columnid == "BTWO_DAYP"){
        		// 금액계산
        		//   자가차량 = ((주행거리 / 기준거리) * 유류대) + 통행료(실비) + 주차료(실비)
        		//   금액 = 자가차량 + 대중교통요금
        		var nBTWO_DINT = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_DINT"));
        		var nBTWO_OILB = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_OILB"));
        		var nBTWO_PASS = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_PASS"));
        		var nPARK_CRGE = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"PARK_CRGE"));
        		var nBTWO_CRGE = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_CRGE"));
        		var nBTWO_DAYP = parseInt(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_DAYP"));
        		var nBTWO_AMNT = (nBTWO_DINT * nBTWO_OILB) + nBTWO_PASS + nPARK_CRGE + nBTWO_CRGE;
        		var nBTWO_PAYA = nBTWO_AMNT + nBTWO_DAYP;
        		
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_AMNT", nBTWO_AMNT);
        		this.dsAT_BTWOXD.setColumn(nRow, "BTWO_PAYA", nBTWO_PAYA);
        	}
        	if(e.columnid == "BTWO_ENDD"){
        trace("dsAT_BTWOXD_oncolumnchanged.BTWO_STDT2 = "+this.dsAT_BTWOXD.getColumn(nRow,"BTWO_STDT").substr(8,4));
        trace("dsAT_BTWOXD_oncolumnchanged.BTWO_ENDD2 = "+this.dsAT_BTWOXD.getColumn(nRow,"BTWO_ENDD").substr(8,4));
        		if(this.dsAT_BTWOXD.getColumn(nRow,"BTWO_STDT").substr(8,4) > this.dsAT_BTWOXD.getColumn(nRow,"BTWO_ENDD").substr(8,4)) {
        			this.dsAT_BTWOXD.setColumn(nRow,"BTWO_ENDD", "0000");
        			return;
        		}
        	}
        }

        /*-------------------------------------------+
         |결재 상신 클릭                            |
         +-------------------------------------------*/
        this.btn_PROC_OnClick = function(obj,e)
        {
        	this.fn_apprProcess("createDoc");
        }

        /*-------------------------------------------+
         |결재 취소 클릭                           |
         +-------------------------------------------*/
        this.btn_CANC_onclick = function(obj,e)
        {
        	this.fn_apprProcess("deleteDoc");
        }

        /*결재상신/취소*/
        /*-------------------------------------------+
         |결재 취소 클릭                           |
         +-------------------------------------------*/
        this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/
        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 
        		
        	var sEmplNumb = this.fnc_Trim(application.GBL_EMPLNO);
        	var sUserNm   = this.fnc_Trim(application.GBL_USERNM);
        	var sDeptNm   = this.fnc_Trim(application.GBL_DEPTNM);

        	var sApprDocId	= this.sDOCUID + "-" + this.dsTM_APPRXH.getColumn(0,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	/* 데이터 처리 */
        	
        	sXmlStr  = "<style>";
        	sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += "td { height:25px; font-size:12px; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += ".linkTable td {font-size: 12px;}";
        	sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label2 { background-color:#FAFAFA; text-align:right; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label3 { background-color:#FFFFFF; padding-left: 5px; font-size:12px; height:25px;}";
        	sXmlStr  += ".label4 { background-color:#FFFFFF; text-align:center; font-size:12px; height:30px;}";
        	sXmlStr  += ".label5 { background-color:#FAFAFA; font-weight:bold; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label6 { background-color:#F6E2C8; font-weight:bold; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label7 { background-color:#F6E2C8; font-weight:bold; text-align:right; padding-right: 5px; font-size:12px;}";
        	sXmlStr  += ".label8 { background-color:#FFFFFF; text-align:right; font-size:12px; height:30px;}";
        	sXmlStr  += "</style>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='13%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='13%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='14%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label6'>작성자</td>";
        	sXmlStr  += "        <td class='label5'>사번</td>";
        	sXmlStr  += "        <td class='label4'>" + sEmplNumb + "</td>";
        	sXmlStr  += "        <td class='label5'>성명</td>";
        	sXmlStr  += "        <td class='label4'>" + sUserNm + "</td>";
        	sXmlStr  += "        <td class='label5'>소속</td>";
        	sXmlStr  += "        <td class='label4' colspan='3'>" + sDeptNm + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='5%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='5%'>";
        	sXmlStr  += "    <col width='5%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='8%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='*'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label6' rowspan='2'>순번</td>";
        	sXmlStr  += "        <td class='label6'>외근일자</td>";
        	sXmlStr  += "        <td class='label6' rowspan='2'>외근</br>시간</td>";
        	sXmlStr  += "        <td class='label6' colspan='4'>자가차량</td>";
        	sXmlStr  += "        <td class='label6' colspan='2'>대중교통</td>";
        	sXmlStr  += "        <td class='label6' rowspan='2'>금액</td>";
        	sXmlStr  += "        <td class='label6' rowspan='2'>일비</td>";
        	sXmlStr  += "        <td class='label6' rowspan='2'>합계</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label6'>외근지역</td>";
        	sXmlStr  += "        <td class='label6'>주행</br>거리</td>";
        	sXmlStr  += "        <td class='label6'>유류대</td>";
        	sXmlStr  += "        <td class='label6'>통행료</td>";
        	sXmlStr  += "        <td class='label6'>주차료</td>";
        	sXmlStr  += "        <td class='label6'>교통편</td>";
        	sXmlStr  += "        <td class='label6'>요금</td>";
        	sXmlStr  += "    </tr>";
         	
         	for(i = 0; i < this.dsAT_BTWOXD.rowcount; i++) {        
        		
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label5' rowspan='2'>" + (i+1) + "</td>";
        		sXmlStr  += "        <td class='label4'>" + this.fn_strToDate(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_DATE"))) + "</td>"; /*외근일자*/
        		sXmlStr  += "        <td class='label4'>" + this.fn_strToTime(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_STDT"))) + "</td>"; /*외근시작시간*/
        		sXmlStr  += "        <td class='label4' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_DINT"))) + "</td>"; /*주행거리*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_OILB"))) + "원</td>"; /*유류비*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_PASS"))) + "원</td>"; /*통행료*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"PARK_CRGE"))) + "원</td>"; /*주차료*/
                sXmlStr  += "        <td class='label4' rowspan='2'>" + this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_TRAN")) + "</td>"; /*교통비*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_CRGE"))) + "원</td>"; /*요금*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_AMNT"))) + "원</td>"; /*금액*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_DAYP"))) + "원</td>"; /*일비*/
        		sXmlStr  += "        <td class='label8' rowspan='2'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_PAYA"))) + "원</td>"; /*합계*/
                sXmlStr  += "    </tr>";
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label4'>" + this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i, "BTWO_PLAC")) + "</td>"; /*외근지역*/
        		sXmlStr  += "        <td class='label4'>" + this.fn_strToTime(this.fnc_Trim(this.dsAT_BTWOXD.getColumn(i,"BTWO_ENDD"))) + "</td>"; /*외근종료시간*/
                sXmlStr  += "    </tr>";
                
            }

        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label6' colspan='3'>합계</td>";
        	sXmlStr  += "        <td class='label8'>&nbsp;</td>";
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_OILB"))) + "원</td>"; /*유류비*/
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_PASS"))) + "원</td>"; /*통행료*/
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("PARK_CRGE"))) + "원</td>"; /*주차비*/
        	sXmlStr  += "        <td class='label8'>&nbsp;</td>";
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_CRGE"))) + "원</td>"; /*요금*/
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_AMNT"))) + "원</td>"; /*금액*/
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_DAYP"))) + "원</td>"; /*일비*/
            sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BTWOXD.getSum("BTWO_PAYA"))) + "원</td>"; /*합계*/
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "<br/>";
            sXmlStr  += "<table width='100%'>";	
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='80%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1' style='height:60px'>내용</td>";
        	sXmlStr  += "        <td class='label3' colspan='8'>" + nexacro.replaceAll(this.fnc_Trim(this.dsAT_BTWOXM.getColumn(0, "REMK_ETCR")),"\n","<br>") + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	

         	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);    /*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);				/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-------------------------------------------+
         |  문자열 날짜 변환                       |
         +-------------------------------------------*/
        this.fn_strToDate = function(str) {
        	var sDate = "";
        	sDate = str.substr(0,4) + "." + str.substr(4,2) + "." + str.substr(6,2);
        	return sDate;
        }

        /*-------------------------------------------+
         |  문자열 시간 변환                       |
         +-------------------------------------------*/
        this.fn_strToTime = function(str) {
        	var sTime = "";
        	sTime = str.substr(8,2) + ":" + str.substr(10,2);
        	return sTime;
        }

        /*-------------------------------------------+
         |숫자입력시 콤마 붙여주기                |
         +-------------------------------------------*/
        this.fn_strComma = function(d) {
        	var reg = /(^[+-]?\d+)>\d{3})/;
        	d += '';
        	while (reg.text(d)) {
        	d = ddddddd.replace(reg, '$1' + ',' + '$2');
        	}
        	return ds;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_BTWOXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsAT_BTWOXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsAT_BTWOXD.addEventHandler("oncolumnchanged", this.dsAT_BTWOXD_oncolumnchanged, this);
            this.dsAT_BUTRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsAT_BUTRXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_APPRXH.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsHR_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delRow_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);

        };

        this.loadIncludeScript("HATF0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
