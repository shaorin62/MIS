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
                this.set_name("Popup00006");
                this.set_classname("FSMB0026");
                this.set_titletext("[예외]공통버튼사용한 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,755);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "69", "15", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "110", "46", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHRASST_STAT", "absolute", "110", "72", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "280", "46", "67", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "348", "46", "21", "21", null, null, this);
            obj.set_taborder("25");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "371", "46", "104", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "280", "72", "67", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "348", "72", "21", "21", null, null, this);
            obj.set_taborder("27");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("image").set("URL('image::btnHelpPop.bmp')");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "371", "72", "104", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "554", "46", "67", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "622", "46", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "645", "46", "104", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "554", "72", "67", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "622", "72", "21", "21", null, null, this);
            obj.set_taborder("31");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "645", "72", "104", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "928", "46", "16", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASST_NUMB", "absolute", "829", "72", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "35", "46", "74", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("고정/부외");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "35", "72", "74", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "211", "46", "69", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "211", "72", "69", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "486", "46", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "486", "72", "68", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("관리사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "760", "46", "68", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "760", "72", "68", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Shape02", "absolute", "15", "119", null, "65", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "35", "128", "74", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("변동일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("satCUST_CODE", "absolute", "35", "154", "74", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("거래처");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "246", "128", "134", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("자산변동구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "486", "128", "76", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("처분가액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "486", "154", "76", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "760", "128", "68", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "104", "154", "100", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASCH_GUBN", "absolute", "341", "128", "113", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemCombo");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Edit("edtCUST_NAME", "absolute", "229", "154", "225", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDSPS_AMOT", "absolute", "554", "128", "148", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "815", "128", "219", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "554", "154", "480", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "198", "262", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.getSetter("class").set("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHXM", "absolute", "15", "219", null, null, "15", "15", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsFS_ASCHXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"88\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"75\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"선택\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"2\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"5\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"6\" displaytype=\"text\" text=\"부서\"/><Cell col=\"7\" displaytype=\"text\" text=\"취득가기말잔액\"/><Cell col=\"8\" text=\"충당금기말잔액\"/><Cell col=\"9\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"10\" displaytype=\"text\" text=\"변동금액(취득가)\"/><Cell col=\"11\" displaytype=\"text\" text=\"변동구분\"/><Cell col=\"12\" displaytype=\"text\" text=\"변동일자\"/><Cell col=\"13\" text=\"처분가액\"/><Cell col=\"14\" text=\"부가세액\"/><Cell col=\"15\" displaytype=\"normal\" text=\"처분손익\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:(CHK_GUBN == &quot;1&quot;)? &quot;text&quot;: &quot;checkbox&quot;\" edittype=\"expr:(CHK_GUBN == &quot;1&quot;)? &quot;none&quot;: &quot;checkbox&quot;\" text=\"bind:CHK\" expr=\"expr:(CHK_GUBN == &quot;1&quot;)? &quot;&quot; : CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:ASCL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:CLSF_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length==0?&quot;&quot;:&quot;####-####-####&quot;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:ASST_NAME\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:ACQS_DATE\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:ACQU_ENDX\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPCT_ENDX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:UNDP_BALE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:CHNG_AMOT\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align:center;background: ;\" text=\"bind:ASCH_GUBN\"/><Cell col=\"12\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:CHNG_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSPS_AMOT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSPS_GILS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCHK_CNT", "absolute", null, "194", "45", "21", "235", null, this);
            obj.set_taborder("52");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("class").set("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "194", "74", "21", "275", null, this);
            obj.set_taborder("53");
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medUNDP_BALE_SUM", "absolute", null, "194", "116", "21", "15", null, this);
            obj.set_taborder("54");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("class").set("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "194", "104", "21", "133", null, this);
            obj.set_taborder("55");
            obj.set_text("선택미상각합계");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medDSPS_GILS_SUM", "absolute", null, "194", "116", "21", "387", null, this);
            obj.set_taborder("56");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("class").set("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "194", "119", "21", "504", null, this);
            obj.set_taborder("57");
            obj.set_text("선택처분손익합계");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQU_DAT2", "absolute", "942", "46", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRACQU_DAT1", "absolute", "829", "46", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calCHNG_DATE", "absolute", "104", "128", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Static("imgHelpCUST_CODE", "absolute", "206", "154", "21", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("image").set("URL('image::btnHelpPop.bmp')");
            obj.getSetter("imagealign").set("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "4", "15", "461", "0", null, this);
            obj.set_taborder("61");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "4", "15", "461", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "125", "120", "38", "8", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "125", "149", "102", "5", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "125", "175", "38", "8", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "341", "184", "56", "35", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("73");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "740", "110", "15", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "19", "3", "307", "22", null, null, this);
            obj.set_taborder("77");
            obj.set_text("개발시 ==>즐겨찾기 버튼 없애주세요");
            obj.style.set_background("crimson");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 755, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FSMB0026");
            		p.set_titletext("[예외]공통버튼사용한 팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_FA010010_medJUMI_SEKM_value","medUNDP_BALE_SUM","value","dsTA_GITAGETA","JUMI_SEKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","medDSPS_GILS_SUM","value","dsTA_GITAGETA","JUMI_SEKM");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASCH_GUBN.addEventHandler("onitemchanged", this.cmbASCH_GUBN_OnChanged, this);
            this.cmbASCH_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskDSPS_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDSPS_AMOT.addEventHandler("canchange", this.mskDSPS_AMOT_canchange, this);
            this.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCHK_CNT.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.medUNDP_BALE_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medUNDP_BALE_SUM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.medDSPS_GILS_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medDSPS_GILS_SUM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.calSHRACQU_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACQU_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCHNG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("Popup00006.xfdl");
        this.loadPreloadList();
       
    };
}
)();
