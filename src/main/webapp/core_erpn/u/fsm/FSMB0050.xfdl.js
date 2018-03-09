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
                this.set_name("FSMB0050");
                this.set_titletext("자산일괄이동");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"BFDE_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"BFDE_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRASST_STAT</Col><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM_SAVE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"BFDE_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"BFDE_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape0", "absolute", "8", "144", null, "65", "25", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_ACCN", "absolute", "316", "153", null, "21", "737", null, this);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "224", "207", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("20");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHXM", "absolute", "8", "244", null, null, "25", "15", this);
            obj.set_taborder("21");
            obj.set_tabstop("true");
            obj.set_binddataset("dsFS_ASCHXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"170\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"170\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"선택\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"3\" rowspan=\"2\" text=\"자산번호\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"7\" colspan=\"6\" text=\"변경 전\"/><Cell col=\"13\" colspan=\"6\" text=\"이동승인 대기부서\"/><Cell col=\"19\" rowspan=\"2\" text=\"이동일자\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"사업장\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell row=\"1\" col=\"13\" colspan=\"2\" text=\"사업장\"/><Cell row=\"1\" col=\"15\" colspan=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"17\" colspan=\"2\" displaytype=\"text\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:comp.parent.fnc_Decode(CHK_GUBN, 1, &quot;text&quot;, &quot;checkbox&quot;)\" edittype=\"expr:comp.parent.fnc_Decode(CHK_GUBN, 1, &quot;none&quot;, &quot;checkbox&quot;)\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:ASCL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:CLSF_NAME\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:ASST_NAME\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center middle;background: ;\" text=\"bind:ACQS_DATE\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;background: ;\" text=\"bind:ACQU_PRIC\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:BFDE_ACCN\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:BFDE_ACCT\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:CHBF_DEPT\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align:left;background: ;\" text=\"bind:BFDE_NAME\"/><Cell col=\"11\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:CHBF_EMPL\"/><Cell col=\"12\" displaytype=\"normal\" style=\"align:center;background: ;\" text=\"bind:BFEM_NAME\"/><Cell col=\"13\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:DEPT_ACCN\"/><Cell col=\"14\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_ACCT\"/><Cell col=\"15\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"16\" displaytype=\"normal\" style=\"align:left;background: ;\" text=\"bind:DEPT_NAME\"/><Cell col=\"17\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"18\" displaytype=\"normal\" style=\"align:center;background: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:CHNG_DATE\" mask=\"expr:CHNG_DATE.toString().length == 0 ? &quot;&quot; : &quot;####-##-##&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "103", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRASST_STAT", "absolute", "103", "97", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "311", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "416", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("95");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "311", "97", "80", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "416", "97", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("95");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "613", "71", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "718", "71", "100", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("95");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "613", "97", "80", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "718", "97", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_maxlength("95");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQU_DAT1", "absolute", "912", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "1015", "71", "14", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQU_DAT2", "absolute", "1032", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRASST_NUMB", "absolute", "912", "97", "220", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "83", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("고정/부외");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "83", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "243", "71", "68", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "243", "97", "68", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "544", "71", "76", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "544", "97", "76", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("관리사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "844", "71", "68", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "844", "97", "68", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "571", "153", "47", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("사원");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", "153", "87", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("이동일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCHNG_DATE", "absolute", "103", "153", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Edit("edtDESC_REMK", "absolute", "103", "179", "715", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "311", "153", "48", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "416", "153", "100", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "613", "153", "80", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "718", "153", "100", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "243", "153", "68", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("이동부서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_ACCT", "absolute", "311", "153", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "28", "179", "87", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCHK_CNT", "absolute", null, "219", "45", "21", "25", null, this);
            obj.set_taborder("83");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "393", "71", "21", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "393", "97", "21", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "695", "71", "22", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "695", "97", "22", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "393", "153", "21", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "695", "153", "22", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("92");
            obj.set_text("자산일괄이동");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("93");
            obj.set_text("홈 > 자산관리 > 자산일괄이동");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("94");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("99");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "638", "56", "128", "4", null, null, this);
            obj.set_taborder("100");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("102");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("103");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "371", "118", "38", "10", null, null, this);
            obj.set_taborder("104");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "371", "92", "102", "5", null, null, this);
            obj.set_taborder("105");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "371", "61", "38", "10", null, null, this);
            obj.set_taborder("106");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("107");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "238", "216", "6", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "219", "65", "21", "74", null, this);
            obj.set_taborder("111");
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "573", "129", "80", "15", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "573", "209", "80", "35", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("114");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산일괄이동");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edtEMPL_NUMB","binddataset","dsFS_ASCHXM","EMPL_NUMB");
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
        this.addIncludeScript("FSMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0050 자산일괄이동
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
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FSMB0050"; //해당 Form에서 사용 할 Package 명
        this.aKeyValue 		= new Array(4);

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
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calCHNG_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        	// 조회
        	//this.fn_Search();

        	this.calCHNG_DATE.setFocus();

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
        	
        	this.fnc_DatasetClear("dsFS_ASCHXM"); 
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();
        	
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

        	// 선택한 대상만 복사
        	this.dsFS_ASCHXM.set_enableevent(false);
        	this.dsFS_ASCHXM.filter("CHK=='1'");
        	this.dsFS_ASCHXM_SAVE.copyData(this.dsFS_ASCHXM, true);
        	this.dsFS_ASCHXM.filter("");
        	this.dsFS_ASCHXM.set_enableevent(true);

        	if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ACQS_DATE");
        	//trace("-----aKeyValue[0] : " + this.aKeyValue[0] + " aKeyValue[1] : " + this.aKeyValue[1]);

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsFS_ASCHXM_SAVE=dsFS_ASCHXM_SAVE:A";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	//trace(this.dsFS_ASCHXM_SAVE.saveXML());

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();
        	
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
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXM,dsFS_ASCHXM_SAVE",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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

        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRASST_GUBN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "고정/부외", this.cmbSHRASST_GUBN);
        	}

        	if (this.fnc_IsDate(this.calSHRACQU_DAT1.value) && this.fnc_IsDate(this.calSHRACQU_DAT2.value)) {
        		if (this.fnc_Trim(this.calSHRACQU_DAT1.value) > this.fnc_Trim(this.calSHRACQU_DAT2.value)) {
        			return this.fnc_SearchCheckPostAction("TMM042", "취득일자(시작일),취득일자(종료일)", this.calSHRACQU_DAT2);
        		}
        	}
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	var sCHBF_DEPT = "";
        	var sDEPT_CODE = "";
        	var sCHBF_EMPL = "";
        	var sEMPL_NUMB = "";

        	if (this.dsFS_ASCHXM.getCaseCount("CHK == '1'") < 1) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	
        	if (!this.fnc_IsDate(this.fnc_Trim(this.calCHNG_DATE.value))) {
        		return this.fnc_CheckPostAction("TMM072", "이동일자", "", 0, this.calCHNG_DATE, "");
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtDEPT_CODE.value)) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "이동부서", "", 0, this.edtDEPT_NAME, "");
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtEMPL_NUMB.value)) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "사원", "", 0, this.edtEMPL_NAME, "");
        	}

        	
        	
        	for (var i = 0; i < this.dsFS_ASCHXM_SAVE.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(i, "CHBF_DEPT"))) < 1) {
        			sCHBF_DEPT = "same"; //변경전부서
        		} else {
        			sCHBF_DEPT = this.dsFS_ASCHXM_SAVE.getColumn(i, "CHBF_DEPT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.edtDEPT_CODE.value)) < 1) {
        			sDEPT_CODE = "same"; //이동부서
        		} else {
        			sDEPT_CODE = this.fnc_Trim(this.edtDEPT_CODE.value);
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM_SAVE.getColumn(i, "CHBF_EMPL"))) < 1) {
        			sCHBF_EMPL = "same"; //변경전사원
        		} else {
        			sCHBF_EMPL = this.dsFS_ASCHXM_SAVE.getColumn(i, "CHBF_EMPL");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.edtEMPL_NUMB.value)) < 1) {
        			sEMPL_NUMB = "same"; //변경후 사원
        		} else {
        			sEMPL_NUMB = this.fnc_Trim(this.edtEMPL_NUMB.value);
        		}
        		
        		if ((sCHBF_DEPT == sDEPT_CODE) && (sCHBF_EMPL == sEMPL_NUMB)) {
        			return this.fnc_CheckPostAction("TMM125", "변경 전후의 부서 및 사원이 동일합니다.", this.dsFS_ASCHXM_SAVE, i, this.edtDEPT_NAME, "");
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
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); //고정/부외
        		sReturnString += " ASCL_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ACQU_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACQU_DAT1.value)); //취득일자1
        		sReturnString += " ACQU_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACQU_DAT2.value)); //취득일자2
        		sReturnString += " ASST_STAT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_STAT.value)); //자산상태
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //관리부서
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //관리사원
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Replace(this.fnc_Trim(this.edtSHRASST_NUMB.value), "-", "")); //자산번호

        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calCHNG_DATE.value)); //이동일자
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtDEPT_CODE.value)); //관리부서
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtEMPL_NUMB.value)); //관리사원
        		sReturnString += " DESC_REMK=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtDESC_REMK.value)); //비고
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
        	
        		this.fnc_Information(this.stInformation, this.dsFS_ASCHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASCHXM.rowcount);

        		if (this.fnc_Length(this.fnc_Trim(this.aKeyValue[0])) > 0) {
        			var iRow = this.dsFS_ASCHXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' && ACQS_DATE=='" + this.aKeyValue[1] + "'");

        			this.grdFS_ASCHXM.clearSelect();
        			this.grdFS_ASCHXM.selectRow(iRow);
        			this.dsFS_ASCHXM.set_rowposition(iRow);

        			this.aKeyValue[0] = "";
        			this.aKeyValue[1] = "";
        		}

        		// 화면 초기화
        		this.fn_SearchClear();
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0";
        		arrParam[1] = "COMBO,cmbSHRASST_STAT,dsSHRASST_STAT,2";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);	    	

        	} 
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
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
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                    
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
                                       
            } else if ((obj.name == "imgHelpASST_NUMB") || (obj.name == "edtASST_NAME")) {
            
                arrParam[0] = "FSM0015";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtASST_NUMB,edtASST_NAME,edtASCL_NAME,edtCLSF_NAME,mskACQS_DATE,mskACQU_PRIC,edtCHBF_DEPT,edtBFDE_NAME,edtDEPT_CODE,edtDEPT_NAME,edtCHBF_EMPL,edtBFEM_NAME,edtEMPL_NUMB,edtEMPL_NAME,edtACCT_UNIT,edtBFDE_ACCN,edtBFDE_ACCT,edtDEPT_ACCN,edtDEPT_ACCT";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1,2,3,4,6,12,8,12,8,13,9,13,9,18,10,11,10,11";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출  
                 
            } else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {
            
                arrParam[0] = "FAM0002";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtDEPT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME,edtDEPT_ACCN,edtDEPT_ACCT";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1,2,3";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출  
                            
            } else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) {
            
                arrParam[0] = "FAM0012";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtEMPL_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출                      
        	}
        }

        /*---------------------------------+
         |  In Grid Enter Then Next Column  |
         +----------------------------------*/
        this.dsFS_ASCHXM_oncolumnchanged = function (obj,e) {
        	
        	if (e.oldvalue == e.newvalue) return;

        	this.fn_chk_sum();

        	if (e.columnid == "CHK") {
        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);

        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);

        		return;
        	}
        }

        // 선택한건의 합계를 구한다.
        this.fn_chk_sum = function () {
        	this.medCHK_CNT.set_value(0);

        	for (var i=0 ; i < this.dsFS_ASCHXM.getRowCount(); i++) {
        		if (this.dsFS_ASCHXM.getColumn( i, "CHK") != "1") continue;

        		this.medCHK_CNT.set_value((nexacro.toNumber(this.medCHK_CNT.value, 0) + 1));
        	}
        }

        // 저장후 화면 초기화
        this.fn_SearchClear = function (){
        	this.edtDEPT_CODE.set_value("");
        	this.edtDEPT_ACCT.set_value("");
        	this.edtDEPT_ACCN.set_value("");
        	this.edtDEPT_NAME.set_value("");
        	this.edtEMPL_NUMB.set_value("");
        	this.edtEMPL_NAME.set_value("");
        	this.edtDESC_REMK.set_value("");
        	this.medCHK_CNT.set_value(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCHXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXM.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_oncolumnchanged, this);
            this.dsFS_ASCHXM_SAVE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXM_SAVE.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRACQU_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACQU_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCHNG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCHK_CNT.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
