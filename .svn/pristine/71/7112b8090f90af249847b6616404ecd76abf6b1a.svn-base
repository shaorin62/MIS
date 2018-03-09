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
                this.set_name("FSMB0030P01");
                this.set_classname("FSMB0026");
                this.set_titletext("자산일괄변동");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,755);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM_SAVE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GRDC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT2\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"CODD_REF1\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsASCH_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRASST_STAT</Col><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GRDC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT2\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"CODD_REF1\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
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

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_Bookmark");
            obj.set_visible("false");
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
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 755, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FSMB0026");
            		p.set_titletext("자산일괄변동");
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
        this.addIncludeScript("FSMB0030P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0030P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0030P01 자산일괄변동
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
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
        //include "script::lib_script_common.xjs";

        /*********************
        *  화면 변수 선언부  *
        *********************/
        this.sBUTTONLIST   = "TTFFTTTF";                           //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄) 
        this.sPACKAGENAME  = "FSMB0030P01";          //해당 Form에서 사용 할 Package 명 
        this.sACCT_YEAR    = "";                                   //ACCT02 계정코드조회를 위해 선언
        this.sFORM_IDXX    = "FSMB0030P01";                             //전표팝업을 위함
        this.aKeyValue = new Array(4);

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

        /**************************************************************************************************
        *                                         공통 Event 처리 부분                                    *
        ***************************************************************************************************/
        /*-----------------------------------+
        |  01.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
           // this.fnc_GridSetting(this); 
        	this.fnc_GetComboDs(this.dsCombo);

        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"),4);

            this.calCHNG_DATE.set_value(this.fnc_GetServerDateTime("DATE"));

            //조회
             this.fn_Search();
            //Focus
            //this.calCHNG_DATE.setFocus();

        }

        /*----------------------------------+
        |  02.화면 종료(닫기) 버튼 클릭 時  |
        ------------------------------------*/
        this.fn_End = function (obj) {
        	this.fnc_PopupClose(true);
        }

        /*-----------------------+
        |  03.조회 버튼 클릭 時  |
        +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsFS_ASCHXM");                        //기 조회 자료 초기화
        	
        	var sMethodName = "SEARCH00";                           //서버에서 호출 될 Method 명
        	var sInDataSet  = "";                                   //자료 저장 시 보낼 DataSet 명칭
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";            //조회 후 돌려 받을 DataSet 명칭
        	var sArgument   = this.fn_CreateArgument(sMethodName);       //조회 시 넘길 Argument 생성

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdFS_ASCHXM.setFocus();                                //재 클릭 방지를 위해 Focus 이동

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
        	this.fnc_DataSetCancel("dsFS_ASCHXM");
        	this.grdFS_ASCHXM.setFocus();
        }

        /*-----------------------+
        |  07.저장 버튼 클릭 時  |
        -------------------------*/
        this.fn_Save = function (obj) {

            //필수값 체크
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.dsFS_ASCHXM_SAVE.clearData();
        	
        	//선택한 대상만 복사
        	this.dsFS_ASCHXM.enableevent = false;
        	this.dsFS_ASCHXM.filter("CHK=='1'");
        	this.dsFS_ASCHXM_SAVE.copyData(this.dsFS_ASCHXM, true);
        	this.dsFS_ASCHXM.filter("");
        	this.dsFS_ASCHXM.enableevent = true;	

            //매각일 경우 필수값 체크
            if (this.fnc_Trim(this.cmbASCH_GUBN.value) == "SAAL") {
                if (!this.fn_CreateSAAL()) return;
            }
        	//Header TB저장을 위한 처분손익 입력
            this.medDSPS_GILS_SUM.set_value(this.dsFS_ASCHXM_SAVE.getSum("DSPS_GILS"));
            
            
        	if (!this.fnc_Message("TMM145", "자산일괄등록 생성")) return;
        	
        	this.aKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition,"ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition,"ACQS_DATE");
        	
        	var sMethodName = "SAVE00";                     
        	var sInDataSet  = "dsFS_ASCHXM_SAVE=dsFS_ASCHXM_SAVE:A"; 
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";    
        	var sArgument   = this.fn_CreateArgument(sMethodName);
            
            //trace(this.dsFS_ASCHXM_SAVE.saveXML());
            //return;
            
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdFS_ASCHXM.setFocus();                         

        }

        /*-----------------------+
        |  08.엑셀 버튼 클릭 時  |
        -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this);

        }

        /*-----------------------+
        |  09.인쇄 버튼 클릭 時  |
        +------------------------*/
        this.fn_Print = function (obj) {
        	//기능 없음
        }

        /*-----------------------------------+
        |  10.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	

        }

        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM_SAVE")) {
        		if (this.fnc_Message("TMM023")==false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRASST_GUBN.value))< 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "고정/부외", this.cmbSHRASST_GUBN);
        	}

        	if (this.fnc_IsDate(this.calSHRACQU_DAT1.value) && this.fnc_IsDate(this.calSHRACQU_DAT2.value)) {	
        	
        		if (this.fnc_Trim(this.calSHRACQU_DAT1.value)> this.fnc_Trim(this.calSHRACQU_DAT2.value)) {
        			return this.fnc_SearchCheckPostAction("TMM042", "취득일자(시작일),취득일자(종료일)", this.calSHRACQU_DAT2);
        		}
        		
        	}		

        	return true;
        }

        /*------------------+
        |  저장 여부 체크!  |
        +-------------------*/
        this.fn_SaveItemCheck = function () {

         	if (!this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	} 
        	
        	var sASCH_GUBN; //자산변동구분에 따른 필수처리 값

        
        	if (!this.fnc_IsDate(this.fnc_Trim(this.calCHNG_DATE.value))) {
        		this.calCHNG_DATE.setFocus();
        		return this.fnc_Message("TMM125", "변동일자를 확인하시기 바랍니다");
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbASCH_GUBN.value))< 1 ) {
        		this.cmbASCH_GUBN.setFocus();
        		return this.fnc_Message("TMM125", "자산변동구분을 확인하시기 바랍니다");
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtDESC_REMK.value))< 1 ) {
        		this.edtDESC_REMK.setFocus();
        		return this.fnc_Message("TMM125", "적요를 확인하시기 바랍니다");
        	}
        	
        	sASCH_GUBN = this.fnc_Trim(this.cmbASCH_GUBN.value);

        	if (sASCH_GUBN == "SAAL") {            //매각
        	
        		if (nexacro.toNumber(this.fnc_Trim(this.mskDSPS_AMOT.value)) < 1) {
        			this.mskDSPS_AMOT.setFocus();
        			return this.fnc_Message("TMM125", "처분가액을 확인하시기 바랍니다");	
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.edtCUST_CODE.value))< 1 ) {
        			this.edtCUST_NAME.setFocus();
        			return this.fnc_Message("TMM125", "거래처를 확인하시기 바랍니다");	
        		}
        	
        	} else if (sASCH_GUBN == "DSAL") {            //폐기
        	
        	} else if (sASCH_GUBN == "DONA") {            //기증
        	
        		if (this.fnc_Length(this.fnc_Trim(this.edtCUST_CODE.value))< 1 ) {
        			this.edtCUST_NAME.setFocus();
        			return this.fnc_Message("TMM125", "거래처를 확인하시기 바랍니다");	
        		}		
        		
        	}

            return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	//조회 Argument 생성
        	if (sKind=="SEARCH00") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(this.sKind);
        		sReturnString += " ASST_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); // 고정/부외
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); // 자산분류
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); // 품목분류
        		sReturnString += " ACQU_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQU_DAT1.value)); // 취득일자1
        		sReturnString += " ACQU_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQU_DAT2.value)); // 취득일자2
        		sReturnString += " ASST_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_STAT.value)); // 자산상태
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); // 관리부서
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); // 관리사원
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Replace(this.fnc_Trim(this.edtSHRASST_NUMB.value),"-","")); // 자산번호			
        				
        	//저장 Argument 생성
        	} else if (sKind=="SAVE00") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(this.sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote("10"); // 회계단위
        		sReturnString += " CHNG_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calCHNG_DATE.value));        //변동일자
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbASCH_GUBN.value));        //변동구분
        		sReturnString += " DSPS_AMOT=" + this.fnc_Quote(this.fnc_Trim(this.mskDSPS_AMOT.value));        //처분가액
        		sReturnString += " VATX_AMNT=" + this.fnc_Quote(this.fnc_Trim(this.mskVATX_AMNT.value));        //부가세액
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtCUST_CODE.value));        //거래처
        		sReturnString += " DESC_REMK=" + this.fnc_Quote(this.fnc_Trim(this.edtDESC_REMK.value));        //적요 
        		sReturnString += " DSPS_GILS=" + this.fnc_Quote(this.fnc_Trim(this.medDSPS_GILS_SUM.value));    //처분손익합계
        	}
        	 
        	return sReturnString;

        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (this.GBL_SESSONCHK=="E0001") {
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
        	
        	if (sMethodName=="SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsFS_ASCHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASCHXM.rowcount);

        		if (this.fnc_Length(this.fnc_Trim(this.aKeyValue[0])) > 0) {
                    var iRow = this.dsFS_ASCHXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' && ACQS_DATE=='" + this.aKeyValue[1] + "'" );
                    
                    this.grdFS_ASCHXM.clearSelect();
                    this.grdFS_ASCHXM.selectRow(iRow);
                    this.dsFS_ASCHXM.rowposition = iRow;
                    
                    this.aKeyValue[0] = "";
                    this.aKeyValue[1] = "";
        		}
        		
        	} else if (sMethodName=="SAVE00") {

        		//fn_KeyFieldDisible(dsFS_ASCHXM, 0, dsFS_ASCHXM.rowposition);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
                this.fn_Search();

        	} else if (sMethodName=="GetCommCode") {

        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0";
        		arrParam[1] = "COMBO,cmbSHRASST_STAT,dsSHRASST_STAT,2";
        		arrParam[2] = "COMBO,cmbASCH_GUBN,dsASCH_GUBN,0";

        		this.fnc_CommonCodeInnerBind(arrParam);	        

        		//등록전용
        		var sFilterRequirement = "(REF1_FILD == 'ASCH' && REF2_FILD =='DSPS' && REF6_FILD != 'X') || COMD_CDNM == '전체'";
        		this.dsASCH_GUBN.filter(sFilterRequirement);	

        	} 		
        	
        }

        /*------------------------------------+
        |  수정 시 Key Field Disibled 처리     |
        +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
            
        	//fn_AschGubn(this.fnc_Trim(cmbASCH_GUBN.value), "");		

        }

        /**************************************************************************************************
        *                                사용자 정의  Function 처리 부분                                  *
        ***************************************************************************************************/

        /*------------------------------------------------------------------+
        |  변동구분으로 인한 컴포넌트 Enable 처리 및 처분손익 디폴트값 처리 |
        +-------------------------------------------------------------------*/
        this.fn_AschGubn = function (AschGubn,nRow) {

            trace("fn_AschGubn--: " + AschGubn + "----nRow:" + nRow);
            
        	//컴포넌트 Enable 처리
        	if (AschGubn == "CAPI") {                   //자본적지출
        	
        	} else if (AschGubn == "SAAL") {            //매각
        	
        		this.edtCUST_NAME.enable = true;     //거래처
        		this.mskDSPS_AMOT.enable = true;     //처분가액
        		this.mskVATX_AMNT.enable = true;    //부가세액
        		this.satCUST_CODE.class = "styFormItemCapBE";						
        	
        	} else if (AschGubn == "DSAL") {            //폐기
        	
        		this.edtCUST_NAME.enable = true;     //거래처
        		this.mskDSPS_AMOT.enable = false;     //처분가액
        		this.mskVATX_AMNT.enable = false;    //부가세액
        		this.satCUST_CODE.class = "styFormItemCap";								
        		
        	} else if (AschGubn == "DONA") {            //기증
        	
        		this.edtCUST_NAME.enable = true;     //거래처
        		this.mskDSPS_AMOT.enable = false;     //처분가액
        		this.mskVATX_AMNT.enable = false;    //부가세액
        		this.satCUST_CODE.class = "styFormItemCapBE";
        		
        	} else {                                    //디폴트
        	
        		this.edtCUST_NAME.enable = true;     //거래처
        		this.mskDSPS_AMOT.enable = true;     //처분가액
        		this.mskVATX_AMNT.enable = false;    //부가세액
        		this.satCUST_CODE.class = "styFormItemCapBE";						
        		
        	}

        }

        /**************************************************************************************************
        *                                  사용자 정의  Event 처리 부분                                   *
        ***************************************************************************************************/

        /*--------------------------+
        |  자산 변동 구분에 따른 처리  |
        |  매각: 처분가액, 부가세를 선택건수에 따라 비율을 구한후? 개별 적용//2015.01.16 현업협의 요망  |
        |  폐기, 기증: 처분가액,부가세액 0원 고정 |
        +---------------------------*/
        this.cmbASCH_GUBN_OnChanged = function (obj,e) {

            //ds 변경 유무 확인
        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		if (this.fnc_Message("TMM023")==false) return;
        	}
        	
            //자산변동구분 변경시 재 조회 
        	this.fnc_DatasetClear("dsFS_ASCHXM");                        //기 조회 자료 초기화
        	var sMethodName = "SEARCH00";                           //서버에서 호출 될 Method 명
        	var sInDataSet  = "";                                   //자료 저장 시 보낼 DataSet 명칭
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";            //조회 후 돌려 받을 DataSet 명칭
        	var sArgument   = this.fn_CreateArgument(sMethodName);       //조회 시 넘길 Argument 생성

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdFS_ASCHXM.setFocus();
            
            //-------초기화-------
            this.mskDSPS_AMOT.set_value(0);
            this.mskVATX_AMNT.set_value(0);
            this.edtCUST_CODE.set_value("");
            this.edtCUST_NAME.set_value("");
            this.edtDESC_REMK.set_value("");
            this.medCHK_CNT.set_value(0);
            
            this.fn_AschGubn(this.fnc_Trim(this.cmbASCH_GUBN.value), "");	
            this.mskDSPS_AMOT.setFocus();	    

        }

        /*------------------------------------+
        | Help Popup Open                     |
        +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {

                arrParam[0] = "FSM0002";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRASCL_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
           
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,0";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
            
                arrParam[0] = "FAM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRDEPT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
                             
            } else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
            
                arrParam[0] = "FAM0012";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHREMPL_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출            
                             
            } else if ((obj.name == "imgHelpCURR_DEPT") || (obj.name == "edtCURR_NAME")) {
            
                arrParam[0] = "FAM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtCURR_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtCURR_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtCURR_DEPT,edtCURR_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출        
                                
            } else if ((obj.name == "imgHelpASST_NUMB") || (obj.name == "edtASST_NAME")) {
            
                arrParam[0] = "FSM0013";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtASST_NUMB,edtASST_NAME,edtASCL_NAME,edtCLSF_NAME,edtDEPT_CODE,edtDEPT_NAME,mskACQS_DATE,mskACQU_ENDX,mskDPCT_ENDX,mskUNDP_BALE,cmbASST_STAT,cmbASST_STAT2,edtEMPL_NUMB,edtACCT_UNIT";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1,5,7,8,9,12,13,14,15,2,18,10,19";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                                             
            } else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) {

                arrParam[0] = "FAM0021";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtCUST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtCUST_CODE,edtCUST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출                                        
                    
        	}
        }

        /*--------------------------+
        |  데이터 변동에 따른 처리  |
        +---------------------------*/
        this.dsFS_ASCHXM_OnColumnChanged = function (obj,e) {

        	if (e.oldvalue == e.newvalue) return;

            // 사용자 체크전 상단 필수 입력값 모두 설정 요망
            var sASCH_GUBN = this.fnc_Trim(this.cmbASCH_GUBN.value);
            
        	if (this.dsFS_ASCHXM.getCaseCount("CHK=='1'") > 0) {       //1건이상 체크 존재 할때
                if (this.fnc_Length(this.fnc_Trim(sASCH_GUBN)) == 0) {     //자산변동구분은 반드시 존재해야함. 
                    this.fnc_Message("TMM125","자산변동구분 선택 후 사용하세요");
                    this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "CHK", 0);
                    this.cmbASCH_GUBN.setFocus();
                    return;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.edtDESC_REMK.value))< 1 ) {
        			this.edtDESC_REMK.setFocus();
        			this.fnc_Message("TMM125", "적요를 확인하시기 바랍니다");
        			this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "CHK", 0);
        			return ;
        		}
        		
        		if (sASCH_GUBN == "SAAL") {            //매각
        		
        			if (nexacro.toNumber(this.fnc_Trim(this.mskDSPS_AMOT.value)) < 1) {
                        this.fnc_Message("TMM125", "처분가액을 확인하시기 바랍니다");
                        this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "CHK", 0);
                        this.mskDSPS_AMOT.setFocus();
                        return ;
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.edtCUST_CODE.value))< 1 ) {                
                        this.fnc_Message("TMM125", "거래처를 확인하시기 바랍니다");
                        this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "CHK", 0);
                        this.edtCUST_CODE.setFocus();
                        return ;
        			}
        			
        			//-----------매각에 따른 계산로직 추가 요망-----------
                    var sDPCT_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, "DPCT_ENDX"))); //충당금_기말잔액
                    
                    obj.setColumn(e.row, "ASST_STAT", "SALE");              //자산상태
                    obj.setColumn(e.row, "CHNG_DATE", this.calCHNG_DATE.value);  //변동일자
                    obj.setColumn(e.row, "ASCH_GUBN", this.cmbASCH_GUBN.value);  //변동구분
                    obj.setColumn(e.row, "DPCT_GRDC", sDPCT_ENDX);          //충당금가감액=충당금_기말잔액
        		    //--------------------------------------------------------
        		    
        		} else if (sASCH_GUBN == "DSAL") {            //폐기
                    
                    //선택 nRow 계산
                    var sUNDP_BALE = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, "UNDP_BALE"))); //미상각잔액
                    
                    obj.setColumn(e.row, "ASST_STAT", "DSUS");              //자산상태
                    obj.setColumn(e.row, "CHNG_DATE", this.calCHNG_DATE.value);  //변동일자
                    obj.setColumn(e.row, "ASCH_GUBN", this.cmbASCH_GUBN.value);  //변동구분
                    obj.setColumn(e.row, "DSPS_AMOT", 0);                   //처분가액
                    obj.setColumn(e.row, "VATX_AMNT", 0);                   //부가세액
                    obj.setColumn(e.row, "DSPS_GILS", sUNDP_BALE * -1);     //처분손익(처분가액-미상각잔액 즉 미상각잔액의 마이너스금액)	
        		    obj.setColumn(e.row, "DPCT_GRDC", sUNDP_BALE);          //충당금가감액
        		    
        		} else if (sASCH_GUBN == "DONA") {            //기증
        		
        			if (this.fnc_Length(this.fnc_Trim(this.edtCUST_CODE.value))< 1 ) {                
                        this.fnc_Message("TMM125", "거래처를 확인하시기 바랍니다");
                        this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "CHK", 0);
                        this.edtCUST_CODE.setFocus();
                        return ;
        			}		

        			//선택 nRow 계산
                    var sUNDP_BALE = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, "UNDP_BALE"))); //미상각잔액
                    obj.setColumn(e.row, "ASST_STAT", "DONA");              //자산상태
                    obj.setColumn(e.row, "CHNG_DATE", this.calCHNG_DATE.value);  //변동일자
                    obj.setColumn(e.row, "ASCH_GUBN", this.cmbASCH_GUBN.value);  //변동구분
                    obj.setColumn(e.row, "DSPS_AMOT", 0);                   //처분가액
                    obj.setColumn(e.row, "VATX_AMNT", 0);                   //부가세액
                    obj.setColumn(e.row, "DSPS_GILS", sUNDP_BALE * -1);     //처분손익(처분가액-미상각잔액 즉 미상각잔액의 마이너스금액)
                    obj.setColumn(e.row, "DPCT_GRDC", sUNDP_BALE);          //충당금가감액
        		}

        	}
        	
        	//선택건수 체크
        	this.fn_chk_sum();
        	
        	//선택제거된 nRow 초기화
        	this.fn_chk_Clear();

        }

        
        //선택한건의 합계, 미상각액를 구한다.
        this.fn_chk_sum = function () {

            var LAST_UNDP_BALE_SUM=0;
            var UNDP_BALE=0;

        	this.medCHK_CNT.set_value(0);
        	this.medUNDP_BALE_SUM.set_value(0);
        	
        	for (i=0; i<this.dsFS_ASCHXM.getRowCount(); i++){

        		if(this.dsFS_ASCHXM.getColumn(i,"CHK") != "1") continue;
        		
        		LAST_UNDP_BALE_SUM = nexacro.toNumber(this.medUNDP_BALE_SUM.value , 0);
        		UNDP_BALE = nexacro.toNumber(this.dsFS_ASCHXM.getColumn(i, "UNDP_BALE"),0);
        		
        		this.medUNDP_BALE_SUM.set_value(LAST_UNDP_BALE_SUM + UNDP_BALE);
        		this.medCHK_CNT.set_value(nexacro.toNumber(this.medCHK_CNT.value,0) + 1);
        	}	
        }

        //선택안된건 gri초기화 해줌
        this.fn_chk_Clear = function () {

        	for (var i=0; i < this.dsFS_ASCHXM.getRowCount(); i++) {
                
                if (this.fnc_ToUpper(this.dsFS_ASCHXM.getRowType(this.dsFS_ASCHXM,i)) == "NORMAL") continue;
                 
                if (this.dsFS_ASCHXM.getColumn(i,"CHK") != "1") {
                    //trace("----- Clear -----");
                    this.dsFS_ASCHXM.setColumn(i, "ASST_STAT", "");  //자산상태
                    this.dsFS_ASCHXM.setColumn(i, "CHNG_DATE", "");  //변동일자
                    this.dsFS_ASCHXM.setColumn(i, "ASCH_GUBN", "");  //변동구분
                    this.dsFS_ASCHXM.setColumn(i, "DSPS_AMOT", "");  //처분가액
                    this.dsFS_ASCHXM.setColumn(i, "VATX_AMNT", "");  //부가세액
                    this.dsFS_ASCHXM.setColumn(i, "DSPS_GILS", "");  //처분손익
                    this.dsFS_ASCHXM.setColumn(i, "DPCT_GRDC", "");  //충당금가감액
                    
                    //체크해제된 열은다시 normal 변경
                    this.dsFS_ASCHXM.enableevent = false;
                    this.dsFS_ASCHXM.updatecontrol = false;
                    
                    this.dsFS_ASCHXM.setRowType(i, Dataset.ROWTYPE_NORMAL);
                    
                    this.dsFS_ASCHXM.updatecontrol = true;
                    this.dsFS_ASCHXM.enableevent = true;
                }
        	}	
        }

        //처분가액 변경시
        this.mskDSPS_AMOT_canchange = function (obj,e) {

               //매각 경우 부가세액 10% 계산
           if (this.fnc_Trim(this.cmbASCH_GUBN.value) == "SAAL") {
                this.mskVATX_AMNT.set_value(nexacro.toNumber(this.mskDSPS_AMOT.value * 0.1));    //부가세
           } else {
                this.mskVATX_AMNT.set_value(0);
           }
        }

        /*---------------------------------------------------------------------------+
        |            매각일경우 계산 처리함                                       |
        |  1)자산분류 확인(전표처리시 같은 자산으로 처리하기 위함)            |
        |  2)처분가액, 처분손익, 부가세액 비율별 산정                           |
        |  3)처분가액, 처분손익, 부가세액 데이타 보정                           |   
        |
        +----------------------------------------------------------------------------*/
        this.fn_CreateSAAL = function () {

            //-----1)매각 자산분류 확인
            for(var i=0; i < this.dsFS_ASCHXM_SAVE.getRowCount(); i++){
                for(var j=0; j < this.dsFS_ASCHXM_SAVE.getRowCount();j++){
                    if (this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(j,"ASCL_NAME")) != this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(i,"ASCL_NAME"))) {
                        this.fnc_Message("TMM125","매각저장시 자산분류를 확인 하시기 바랍니다"); //같은자산끼리 처리 함
                        return false;
                    }
                }
            }
            
            
            //-----2) 선택된 nROW 별 비율별 계산
        	var sDSPS_AMOT = nexacro.toNumber(this.fnc_Trim(this.mskDSPS_AMOT.value));     //처분가액
            var sUNDP_BALE = nexacro.toNumber(this.fnc_Trim(this.medUNDP_BALE_SUM.value)); //미상각액(chk_sum으로 생성된 값)    
        	var sVATX_AMNT = nexacro.toNumber(this.fnc_Trim(this.mskVATX_AMNT.value));     //부가세액
        	//var sDPCT_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'DPCT_ENDX'))); //충당금 누계액  
        	trace("-----2) sDSPS_AMOT: " + sDSPS_AMOT + " sUNDP_BALE: " + sUNDP_BALE + " sVATX_AMNT: " + sVATX_AMNT);
        	
            var nRowRATE=0;         //비율
            var nRowDSPS_AMOT=0;    //처분가액
            var nRowDSPS_GILS=0;    //처분손익
            var nRowVATX_AMNT=0;    //처분부가세액
            
            var sSUM_AMOT =0;       //처분가액합계
            var sSUM_GILS =0;       //처분손익합계
            var sSUM_AMNT =0;       //처분부가세합계
            var sMAXROW = 0;        //체크된 마지막 행 기억
            
          	for (i=0; i<this.dsFS_ASCHXM_SAVE.getRowCount(); i++){
          
          		//if(this.dsFS_ASCHXM_SAVE.getColumn(i,"CHK") != '1') continue;

          		nRowUNDP_BALE = this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(i, "UNDP_BALE"))     //미상각액
          		if(nexacro.toNumber(this.medUNDP_BALE_SUM.value, 0) !=0) {
          		  nRowRATE = Math.round(nRowUNDP_BALE / nexacro.toNumber(this.medUNDP_BALE_SUM.value, 0), 6);    //소수점자리를 늘려주면 그만큼 보정액이 작아짐.
          		  } else {
          		  nRowRATE = 0;
          		}
          		trace("-----2-0) nRowRATE: " + nRowRATE);
          		
          		nRowDSPS_AMOT = Math.round(nexacro.toNumber(sDSPS_AMOT * nRowRATE, 0));            // 비율별 처분가액[총처분가액*비율]
          		nRowDSPS_GILS = Math.round(nexacro.toNumber(nRowDSPS_AMOT - nRowUNDP_BALE , 0));   // 비율별 처분손익[처분가액-미상각잔액]
                nRowVATX_AMNT = Math.round(nexacro.toNumber(sVATX_AMNT * nRowRATE, 0));            // 비율별 부가세액[총부가세액*비율]
                
                trace("-----2-1) nRowDSPS_AMOT: " + nRowDSPS_AMOT + " nRowDSPS_GILS: " + nRowDSPS_GILS + " nRowVATX_AMNT: " + nRowVATX_AMNT);
                
                this.dsFS_ASCHXM_SAVE.setColumn(i, "DSPS_AMOT", nRowDSPS_AMOT);
                this.dsFS_ASCHXM_SAVE.setColumn(i, "DSPS_GILS", nRowDSPS_GILS);
                this.dsFS_ASCHXM_SAVE.setColumn(i, "VATX_AMNT", nRowVATX_AMNT);
                
                //마지막 행 보정을 위한 Tmp
                sSUM_AMOT = nRowDSPS_AMOT + sSUM_AMOT;      //처분가액합계
                sSUM_GILS = nRowDSPS_GILS + sSUM_GILS;      //처분손익합계
                sSUM_AMNT = nRowVATX_AMNT + sSUM_AMNT;      //처분부가세액합계
                
                sMAXROW = i;
                trace("----- sMAXROW: " + sMAXROW);
            }
            
            trace("-----2-2) sSUM_AMOT(처분가액합계): " + sSUM_AMOT + " sSUM_GILS(처분손익합계): " + sSUM_GILS + " sSUM_AMNT(처분부가세액합계): " + sSUM_AMNT);
            
            //-----3)데이타 보정 MaxROW에 보정   
            var sRevise=0;
            var sMaxDSPS_AMOT=0;
            
            //처분가액 보정
            if (nexacro.toNumber(sDSPS_AMOT,0) != nexacro.toNumber(sSUM_AMOT,0)) {
                
                sRevise = nexacro.toNumber(sDSPS_AMOT - sSUM_AMOT,0);
                sMaxDSPS_AMOT = nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(sMAXROW , "DSPS_AMOT")),0);     //미상각액
                this.dsFS_ASCHXM_SAVE.setColumn(sMAXROW, "DSPS_AMOT", nexacro.toNumber(sMaxDSPS_AMOT + sRevise));      //보정된 미상각액
                
                trace("-----3-0) 처분가액 보정: sRevise: " + sRevise + "  sMaxDSPS_AMOT: " + sMaxDSPS_AMOT + "  sMaxUNDP_BALE + sRevise: " + nexacro.toNumber(sMaxDSPS_AMOT + sRevise));
            }
            
            var sRevice2=0
            var sMaxDSPS_GILS=0;
            // 처분손익 보정
            //  매각액(상단 사용자입력값)-미상각액  !=  계산처리된 매각비율(처분가액)-총미상각액
            if ((nexacro.toNumber(sDSPS_AMOT,0) - nexacro.toNumber(sUNDP_BALE,0)) != (nexacro.toNumber(sSUM_AMOT,0) - nexacro.toNumber(sUNDP_BALE,0))) {
                
                sRevice2 = nexacro.toNumber((nexacro.toNumber(sDSPS_AMOT,0) - nexacro.toNumber(sUNDP_BALE,0)) - (nexacro.toNumber(sSUM_AMOT,0) - nexacro.toNumber(sUNDP_BALE,0)),0);
                sMaxDSPS_GILS = nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(sMAXROW , "DSPS_GILS")),0);      //처분손익
                this.dsFS_ASCHXM_SAVE.setColumn(sMAXROW, "DSPS_GILS", nexacro.toNumber(sMaxDSPS_GILS + sRevice2));      //보정된 처분손익
                
                trace("-----3-1) 처분손익 보정: sRevice2: " + sRevice2 + "  sMaxDSPS_GILS: " + sMaxDSPS_GILS + "  sMaxDSPS_GILS + sRevice2: " + nexacro.toNumber(sMaxDSPS_GILS + sRevice2));
            }
            
            
            var sRevice3=0
            var sMaxVATX_AMNT=0;
            // 부가세액 보정
            if (nexacro.toNumber(sVATX_AMNT,0)!= nexacro.toNumber(sSUM_AMNT,0)) {

                sRevice3 = nexacro.toNumber(sVATX_AMNT - sSUM_AMNT,0);
                sMaxVATX_AMNT = nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(sMAXROW , "VATX_AMNT")),0);      //부가세액
                this.dsFS_ASCHXM_SAVE.setColumn(sMAXROW, "VATX_AMNT", nexacro.toNumber(sMaxVATX_AMNT + sRevice3));      //보정된 부가세액액
                
                trace("-----3-2) 부가세액 보정: sRevice3: " + sRevice3 + "  sMaxVATX_AMNT: " + sMaxVATX_AMNT + "  sMaxVATX_AMNT + sRevice3: " + nexacro.toNumber(sMaxVATX_AMNT + sRevice3));
            }    
            
            return true;
         }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCHXM_SAVE.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_OnColumnChanged, this);
            this.dsFS_ASCHXM_SAVE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXM.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_OnColumnChanged, this);
            this.dsFS_ASCHXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0030P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
