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
                this.set_name("FSMB0020");
                this.set_titletext("자산변동관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GRDC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT2\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHNG_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsSHRASCH_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRRCGN_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsASCH_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"DSNAME\">dsASST_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GRDC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT2\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtACCT_UNIT", "absolute", null, null, "42", "21", "209", "149", this);
            obj.set_taborder("142");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "135", "262", "19", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("29");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHXM", "absolute", "8", "154", null, null, "25", "218", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASCHXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"75\"/><Column size=\"94\"/><Column size=\"91\"/><Column size=\"90\"/><Column size=\"91\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"선택\"/><Cell col=\"1\" displaytype=\"text\" text=\"변동일자\"/><Cell col=\"2\" text=\"일괄구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"변동구분\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"5\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"6\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"7\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"8\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"9\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"11\" displaytype=\"text\" text=\"부서\"/><Cell col=\"12\" displaytype=\"text\" text=\"변동금액\"/><Cell col=\"13\" text=\"확정여부\"/><Cell col=\"14\" text=\"확정일자\"/><Cell col=\"15\" text=\"확정자\"/><Cell col=\"16\" text=\"전표번호\"/><Cell col=\"17\" text=\"전표승인여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:(REF1_FILD == 'ASCH' || ASCH_GUBN == 'ACQU') ? 'checkbox' : 'text'\" edittype=\"expr:(REF1_FILD == 'ASCH' || ASCH_GUBN == 'ACQU') ? 'checkbox' : 'none'\" text=\"bind:CHEK_YSNO\" expr=\"expr:CHEK_YSNO == 0 ? &quot;&quot; : CHEK_YSNO\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:CHNG_GUBN\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCH_GUBN\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DEPT_NAME\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_AMOT\"/><Cell col=\"13\" displaytype=\"checkbox\" text=\"bind:RCGN_YSNO\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:APPV_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:APPV_EMNM\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/><Cell col=\"17\" displaytype=\"combo\" text=\"APPV_STAT\" combodataset=\"dsAPPV_STAT\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "350", "21", null, null, this);
            obj.set_taborder("51");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnBatch", "absolute", "0", "0", "122", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("폐기엑셀일괄등록");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnPermit", "absolute", "125", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("변동확정");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", "202", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("2");
            obj.set_text("확정취소");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT1", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT2", "absolute", "219", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRASCH_GUBN", "absolute", "417", "71", "225", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRRCGN_YSNO", "absolute", "740", "71", "269", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "97", "97", "80", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "202", "97", "117", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASST_NAME", "absolute", "863", "97", "146", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "417", "97", "75", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "516", "97", "126", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "348", "71", "76", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("변동구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "348", "97", "76", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "671", "71", "76", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "671", "97", "76", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRASST_NUMB", "absolute", "740", "97", "99", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "169", "25", "15", this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtASST_NUMB", "absolute", "754", null, "131", "21", null, "154", this);
            obj.set_taborder("85");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "910", null, "231", "21", null, "154", this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "294", null, "324", "21", null, "50", this);
            obj.set_taborder("23");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "887", null, "254", "21", null, "128", this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "28", null, "128", "21", null, "24", this);
            obj.set_taborder("89");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("satCUST_CODE", "absolute", "28", null, "128", "21", null, "50", this);
            obj.set_taborder("91");
            obj.set_text("거래처");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "911", null, "100", "21", null, "76", this);
            obj.set_taborder("95");
            obj.set_text("처분손익");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "299", null, "125", "21", null, "76", this);
            obj.set_taborder("96");
            obj.set_text("처분가액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "28", null, "128", "21", null, "76", this);
            obj.set_taborder("97");
            obj.set_text("변동금액(취득가)");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "911", null, "100", "21", null, "102", this);
            obj.set_taborder("99");
            obj.set_text("미상각잔액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "647", null, "119", "21", null, "102", this);
            obj.set_taborder("101");
            obj.set_text("충당금기말잔액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "299", null, "125", "21", null, "102", this);
            obj.set_taborder("103");
            obj.set_text("취득가기말잔액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "911", null, "100", "21", null, "50", this);
            obj.set_taborder("105");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "647", null, "119", "21", null, "128", this);
            obj.set_taborder("106");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "299", null, "125", "21", null, "128", this);
            obj.set_taborder("107");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "28", null, "128", "21", null, "128", this);
            obj.set_taborder("108");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "128", "21", null, "102", this);
            obj.set_taborder("109");
            obj.set_text("자산변동구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "647", null, "119", "21", null, "154", this);
            obj.set_taborder("110");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", null, "128", "21", null, "154", this);
            obj.set_taborder("111");
            obj.set_text("변동일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCHNG_DATE", "absolute", "148", null, "121", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Combo("cmbASCH_GUBN", "absolute", "148", null, "121", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Edit("edtASCL_NAME", "absolute", "148", null, "121", "21", null, "128", this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "406", null, "212", "21", null, "128", this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQS_DATE", "absolute", "992", null, "149", "21", null, "50", this);
            obj.set_taborder("25");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskUNDP_BALE", "absolute", "992", null, "149", "21", null, "102", this);
            obj.set_taborder("17");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "754", null, "131", "21", null, "128", this);
            obj.set_taborder("119");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "148", null, "121", "21", null, "50", this);
            obj.set_taborder("120");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "148", null, "470", "21", null, "24", this);
            obj.set_taborder("26");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHNG_AMOT", "absolute", "148", null, "121", "21", null, "76", this);
            obj.set_taborder("19");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_ENDX", "absolute", "406", null, "212", "21", null, "102", this);
            obj.set_taborder("15");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDPCT_ENDX", "absolute", "754", null, "131", "21", null, "102", this);
            obj.set_taborder("16");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDSPS_AMOT", "absolute", "406", null, "212", "21", null, "76", this);
            obj.set_taborder("20");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDSPS_GILS", "absolute", "992", null, "149", "21", null, "76", this);
            obj.set_taborder("22");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_STAT", "absolute", "992", null, "149", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            obj.set_index("-1");

            obj = new Static("Static7", "absolute", "299", null, "100", "21", null, "154", this);
            obj.set_taborder("137");
            obj.set_text("자산부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_DEPT", "absolute", "406", null, "75", "21", null, "154", this);
            obj.set_taborder("138");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_NAME", "absolute", "506", null, "112", "21", null, "154", this);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_LINE", "absolute", "803", null, "35", "21", null, "50", this);
            obj.set_taborder("143");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "754", null, "131", "21", null, "50", this);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_mask("##-########-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "754", null, "131", "21", null, "76", this);
            obj.set_taborder("21");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "647", null, "119", "21", null, "76", this);
            obj.set_taborder("149");
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Shape02", "absolute", "8", "762", "241", "33", null, null, this);
            obj.set_taborder("150");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape04", "absolute", "265", "762", "302", "33", null, null, this);
            obj.set_taborder("153");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape06", "absolute", "847", "762", "160", "33", null, null, this);
            obj.set_taborder("156");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape08", "absolute", "583", "762", "248", "33", null, null, this);
            obj.set_taborder("159");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape10", "absolute", "583", "803", "384", "33", null, null, this);
            obj.set_taborder("162");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDPCT_GRDC", "absolute", "120", "768", "120", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAAA", "absolute", "438", "768", "120", "21", null, null, this);
            obj.set_taborder("167");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "602", "766", "114", "25", null, null, this);
            obj.set_taborder("169");
            obj.set_text("본자산의자산상태");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_STAT2", "absolute", "722", "768", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("170");
            obj.set_tabstop("false");
            obj.set_innerdataset("@dsASST_STAT");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Static("Static0", "absolute", "866", "768", "82", "21", null, null, this);
            obj.set_taborder("171");
            obj.set_text("사원코드,명");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "952", "768", "22", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "976", "768", "22", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "592", "809", "100", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "717", "809", "241", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "179", "97", "21", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "493", "97", "22", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASST_NUMB", "absolute", "840", "97", "22", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCURR_DEPT", "absolute", "483", null, "21", "21", null, "154", this);
            obj.set_taborder("180");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpASST_NUMB", "absolute", "887", null, "21", "21", null, "154", this);
            obj.set_taborder("181");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACCT_INTL", "absolute", "694", "809", "22", "22", null, null, this);
            obj.set_taborder("182");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "271", null, "21", "21", null, "50", this);
            obj.set_taborder("183");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveSlipNumb", "absolute", null, null, "74", "21", "25", "188", this);
            obj.set_taborder("185");
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("186");
            obj.set_text("자산변동관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("187");
            obj.set_text("홈 > 자산관리 > 자산변동관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("188");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("189");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("191");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("192");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("193");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "641", "56", "128", "4", null, null, this);
            obj.set_taborder("194");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("195");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("196");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("197");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("198");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "432", "118", "38", "10", null, null, this);
            obj.set_taborder("199");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "432", "92", "102", "5", null, null, this);
            obj.set_taborder("200");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "432", "61", "38", "10", null, null, this);
            obj.set_taborder("201");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("202");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("204");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("205");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("satSLIP_NAME", "absolute", "647", null, "119", "21", null, "50", this);
            obj.set_taborder("206");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "911", null, "100", "21", null, "24", this);
            obj.set_taborder("207");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "9", "545", "30", "156", null, null, this);
            obj.set_taborder("208");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "573", "498", "80", "35", null, null, this);
            obj.set_taborder("209");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "26", "766", "90", "25", null, null, this);
            obj.set_taborder("210");
            obj.set_text("충당금가감액");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "285", "766", "160", "25", null, null, this);
            obj.set_taborder("211");
            obj.set_text("변동금액-충당금가감액");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 350, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산변동관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item21","edtASST_NUMB","value","dsFS_ASCHXM","ASST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_NAME_value","edtASST_NAME","value","dsFS_ASCHXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtCUST_NAME","value","dsFS_ASCHXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsFS_ASCHXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCHNG_DATE_value","calCHNG_DATE","value","dsFS_ASCHXM","CHNG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASCH_GUBN_value","cmbASCH_GUBN","value","dsFS_ASCHXM","ASCH_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_NAME_value","edtASCL_NAME","value","dsFS_ASCHXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCLSF_NAME_value","edtCLSF_NAME","value","dsFS_ASCHXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQS_DATE_value","mskACQS_DATE","value","dsFS_ASCHXM","ACQS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskUNDP_BALE_value","mskUNDP_BALE","value","dsFS_ASCHXM","UNDP_BALE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_CODE_value","edtDEPT_CODE","value","dsFS_ASCHXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_CODE_value","edtCUST_CODE","value","dsFS_ASCHXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFS_ASCHXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCHNG_AMOT_value","mskCHNG_AMOT","value","dsFS_ASCHXM","CHNG_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_ENDX_value","mskACQU_ENDX","value","dsFS_ASCHXM","ACQU_ENDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDPCT_ENDX_value","mskDPCT_ENDX","value","dsFS_ASCHXM","DPCT_ENDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDSPS_AMOT_value","mskDSPS_AMOT","value","dsFS_ASCHXM","DSPS_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDSPS_GILS_value","mskDSPS_GILS","value","dsFS_ASCHXM","DSPS_GILS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASST_STAT_value","cmbASST_STAT","value","dsFS_ASCHXM","ASST_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtACCT_UNIT","value","dsFS_ASCHXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mskSLIP_LINE","value","dsFS_ASCHXM","SLIP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","mskSLIP_NUMB","value","dsFS_ASCHXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","mskVATX_AMNT","value","dsFS_ASCHXM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDPCT_GRDC_value","mskDPCT_GRDC","value","dsFS_ASCHXM","DPCT_GRDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASST_STAT2_value","cmbASST_STAT2","value","dsFS_ASCHXM","ASST_STAT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtEMPL_NUMB","value","dsFS_ASCHXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsFS_ASCHXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_CODE_value","edtACCT_INTL","value","dsFS_ASCHXM","ACCT_INTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_NAME_value","edtACCT_NAME","value","dsFS_ASCHXM","ACCT_NAME");
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
        this.addIncludeScript("FSMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0020 자산변동관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2016.09.12     최인철     변동구분 그리드 콤보박스 연결
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
        this.sBUTTONLIST = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FSMB0020"; //해당 Form에서 사용 할 Package 명
        this.sACCT_YEAR = ""; //ACCT02 계정코드조회를 위해 선언
        this.sFORM_IDXX = "FSMB0020"; //전표팝업을 위함
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
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASCHXM, "SLIP_NUMB");
        	this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4);
        	this.calSHRCHNG_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + '0101'));
        	this.calSHRCHNG_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRCHNG_DAT1.setFocus();

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

        	this.fnc_DatasetClear('dsFS_ASCHXM'); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	/*
        	if (this.sUSERLAVEL != "5") {
        		this.edtCURR_DEPT.set_value(application.GBL_DEPTCD);
        		this.edtCURR_NAME.set_value(application.GBL_DEPTNM);
        		this.edtCURR_NAME.UserData = application.GBL_DEPTNM;
        		// edtCURR_NAME.enable = false;
        	}
        	*/

        	// 사용자 입력버튼 누를시 등록전용
        	var sFilterRequirement = "(REF1_FILD == 'ASCH' && REF6_FILD != 'X') || COMD_CDNM == '전체'";
        	this.dsASCH_GUBN.filter(sFilterRequirement);

        	var iRow = this.dsFS_ASCHXM.addRow();
        	this.dsFS_ASCHXM.setColumn(iRow, "CHNG_DATE", this.fnc_GetServerDateTime("DATE")); //변동일자
        	this.dsFS_ASCHXM.setColumn(iRow, "CHNG_AMOT", 0); //변동금액
        	this.dsFS_ASCHXM.setColumn(iRow, "DSPS_AMOT", 0); //처분가액
        	this.dsFS_ASCHXM.setColumn(iRow, "DSPS_GILS", 0); //처분손익
        	this.dsFS_ASCHXM.setColumn(iRow, "DPCT_GRDC", 0); //충당금가감액
        	this.dsFS_ASCHXM.setColumn(iRow, "RCGN_YSNO", "0"); //2014.09. 확정버튼 추가됨
        	this.dsFS_ASCHXM.setColumn(iRow, "CHEK_YSNO", ""); //충당금가감액
        	this.calCHNG_DATE.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	// 일괄처리 여부 확인
        	if (!this.fn_ChangeALL()) return;

        	if (this.fn_DeleteCheck()) {
        		this.dsFS_ASCHXM.deleteRow(this.dsFS_ASCHXM.rowposition);
        	}
        	
        	this.grdFS_ASCHXM.setFocus();
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

        	// 일괄처리 여부 확인
        	if (!this.fn_ChangeALL()) return;

        	if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.aKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.aKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	//trace("-----aKeyValue[0] : " + this.aKeyValue[0] + " aKeyValue[1] : " + this.aKeyValue[1] + " aKeyValue[2] : " + this.aKeyValue[2]);

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsFS_ASCHXM=dsFS_ASCHXM:U";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

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
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXM,dsFS_ASCHXM_SLIP",this);
        	
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

        	if (!this.fnc_IsDate(this.calSHRCHNG_DAT1.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(시작일)", this.calSHRCHNG_DAT1);
        	}

        	if (!this.fnc_IsDate(this.calSHRCHNG_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(종료일)", this.calSHRCHNG_DAT2);
        	}

        	if (this.fnc_Trim(this.calSHRCHNG_DAT1.value) > this.fnc_Trim(this.calSHRCHNG_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "시작일,종료일", this.calSHRCHNG_DAT2);
        	}

        	return true;
        }

        /*------------------------------------------------------------------------+
         |  일괄변동 여부 체크! 일괄변동건은 일괄변동관리화면에서 처리함   |
         |  확정, 저장, 삭제, 전표처리 조건절 추가
         +-------------------------------------------------------------------------*/
        this.fn_ChangeALL = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_GUBN"))) != 0) {
        		this.fnc_Message("TMM125", "일괄변동 데이터는 일괄변동관리화면[FSMB0027]에서 처리하시기바랍니다!");
        		return false;
        	} else {
        		return true;
        	}
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASCHXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	if (this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "RCGN_YSNO")) == "1") {
        		this.fnc_Message("TMM107", "확정여부", "확정");
        		return;
        	}

        	var sQuestionText = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NAME") + "의 변동";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sASCH_GUBN;
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsFS_ASCHXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASCHXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (!this.fnc_IsDate(this.dsFS_ASCHXM.getColumn(i, "CHNG_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "변동일자", this.dsFS_ASCHXM, i, this.calCHNG_DATE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ASST_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASCHXM, i, this.edtASST_NAME, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ASCH_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산변동구분", this.dsFS_ASCHXM, i, this.cmbASCH_GUBN, '');
        		}

        		sASCH_GUBN = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ASCH_GUBN"));

        
        		if (sASCH_GUBN == "CAPI") {
        			// 자본적지출

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHNG_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "변동금액(취득가)", this.dsFS_ASCHXM, i, this.mskCHNG_AMOT, '');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "거래처", this.dsFS_ASCHXM, i, this.edtCUST_NAME, '');
        			}
        		} else if (sASCH_GUBN == "SAAL") {
        			// 매각

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "DSPS_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "처분가액", this.dsFS_ASCHXM, i, this.mskDSPS_AMOT, '');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "거래처", this.dsFS_ASCHXM, i, this.edtCUST_NAME, '');
        			}
        		} else if (sASCH_GUBN == "SAPA") {
        			// 부분매각

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHNG_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "변동금액(취득가)", this.dsFS_ASCHXM, i, this.mskCHNG_AMOT, '');
        			}

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHNG_AMOT"))) > nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ACQU_ENDX")))) {
        				return this.fnc_CheckPostAction("TMM042", "변동금액(취득가),취득가기말잔액", this.dsFS_ASCHXM, i, this.mskCHNG_AMOT, '');
        			}

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "DSPS_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "처분가액", this.dsFS_ASCHXM, i, this.mskDSPS_AMOT, '');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "거래처", this.dsFS_ASCHXM, i, this.edtCUST_NAME, '');
        			}
        		} else if (sASCH_GUBN == "DSPT") {

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHNG_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "변동금액(취득가)", this.dsFS_ASCHXM, i, this.mskCHNG_AMOT, '');
        			}

        			if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHNG_AMOT"))) > nexacro.toNumber(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ACQU_ENDX")))) {
        				return this.fnc_CheckPostAction("TMM042", "변동금액(취득가),취득가기말잔액", this.dsFS_ASCHXM, i, this.mskCHNG_AMOT, '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "거래처", this.dsFS_ASCHXM, i, this.edtCUST_NAME, '');
        			}
        		} else if (sASCH_GUBN == "DONA") {

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "거래처", this.dsFS_ASCHXM, i, this.edtCUST_NAME, '');
        			}
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "DESC_REMK"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "적요", this.dsFS_ASCHXM, i, this.edtDESC_REMK, '');
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
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value)); //조회기간1
        		sReturnString += " CHNG_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value)); //조회기간2
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASCH_GUBN.value)); //변동구분
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //확정여부
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서코드

        		// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value));
        		sReturnString += " CHNG_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value));
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASCH_GUBN.value));
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value));
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        		// 확정(확정), 취소
        	} else if (sKind == 'PERMIT00' || sKind == 'CANCEL00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value)); //조회기간1
        		sReturnString += " CHNG_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value)); //조회기간2
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASCH_GUBN.value)); //변동구분
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //확정여부
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호

        		// 전표 생성
        	} else if (sKind == 'PROC00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " FORM_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); //화면ID
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "ASCH_GUBN"))); //변동구분
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "ASST_NUMB"))); //자산번호
        		sReturnString += " CHNG_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "CHNG_DATE"))); //변동일자
        		sReturnString += " SEQN_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "SEQN_NUMB"))); //자산일련번호
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtDEPT_CODE.value)); //부서코드 
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
        	if (sMethodName == 'SEARCH00') {
        		this.fnc_Information(this.stInformation, this.dsFS_ASCHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASCHXM.rowcount);

        		if (this.fnc_Length(this.fnc_Trim(this.aKeyValue[0])) > 0) {
        			var iRow = this.dsFS_ASCHXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' && CHNG_DATE=='" + this.aKeyValue[1] + "' && SEQN_NUMB=='" + this.aKeyValue[2] + "'");

        			this.grdFS_ASCHXM.clearSelect();
        			this.grdFS_ASCHXM.selectRow(iRow);
        			this.dsFS_ASCHXM.set_rowposition(iRow);

        			this.aKeyValue[0] = "";
        			this.aKeyValue[1] = "";
        			this.aKeyValue[2] = "";
        		}
        	} else if (sMethodName == 'PERMIT00') {
        		this.fnc_Message("TMM125", "변동확정 완료되었습니다.");
        		this.fn_Search();
        	} else if (sMethodName == 'CANCEL00') {
        		this.fnc_Message("TMM125", "확정취소 완료되었습니다.");
        		this.fn_Search();
        	} else if (sMethodName == 'SAVE00') {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == 'PROC00') {
        		// 전표보기. 
        		//var sResponse = this.gfn_PopSlipForm('', 'SEM', this.sUSERLAVEL, '', this.sFORM_IDXX); cic주석처리 
        		//trace("-----sResponse: " + sResponse); cic주석처리

        		this.fnc_Message("TMM130", "자산변동관리 전표생성");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {

        		 var arrParam = new Array();
        		 
        		 arrParam[0]  = "COMBO,cmbSHRASCH_GUBN,dsSHRASCH_GUBN,0";	//상각방법(입력)
        		 arrParam[1]  = "COMBO,cmbSHRRCGN_YSNO,dsSHRRCGN_YSNO,0";	//상각주기(입력)
        		 arrParam[2]  = "COMBO,cmbASCH_GUBN,dsASCH_GUBN,0";	//자산단위(입력)
        		 arrParam[3]  = "COMBO,cmbASST_STAT,dsASST_STAT,0";	//자산상태(입력)
        		 arrParam[4]  = "COMBO,cmbASST_STAT2,dsAPPV_STAT,0";	//회계단위(입력)
        		 //arrParam[5]  = "GRID,grdFS_ASCHXM,dsASST_GUBN,ASCH_GUBN"; 
        		 arrParam[5]  = "GRID,grdFS_ASCHXM,dsSHRASCH_GUBN,ASCH_GUBN"; //2016.09.12 변동구분 컬럼 연결
        		 arrParam[6]  = "GRID,grdFS_ASCHXM,dsASST_GUBN,ASST_STAT";
        		  
        		 
        		 this.fnc_CommonCodeInnerBind(arrParam);
        		 
        		var sFilterRequirement = "(REF2_FILD != 'MOVE' && REF6_FILD != 'X') || COMD_CDNM == '전체'";
        		this.dsSHRASCH_GUBN.filter(sFilterRequirement);
        		this.dsASCH_GUBN.filter(sFilterRequirement);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) != 14 && // 전표처리 하지 않은것
        		this.fnc_Trim(obj.getColumn(e.newrow, "RCGN_YSNO")) > 0 )  {
        		this.btnSaveSlipNumb.set_enable(true);
        	} else {
        		this.btnSaveSlipNumb.set_enable(false);
        	}

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.calCHNG_DATE.set_enable(true); //변동일자
        		this.edtASST_NAME.set_enable(true); //자산명
        		this.cmbASCH_GUBN.set_enable(true); //자산변동구분
        		this.mskCHNG_AMOT.set_enable(true); //변동금액
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtDESC_REMK.set_enable(true); //적요
        	} else {
        		this.calCHNG_DATE.set_enable(false);
        		this.edtASST_NAME.set_enable(false);
        		this.fn_AppvYsno(obj, e.oldrow, e.newrow); //확정으로 인한 수정 방지
        	}

        	var sFilterRequirement = "REF1_FILD != 'MOVE' || COMM_CDNM == '전체'";
        	
        	if (obj.getRowType(e.newrow) != 2) {
        		this.dsASCH_GUBN.filter(sFilterRequirement);
        	}

        	// 확정여부로 인한 컴포넌트 Enable 처리
        	if (this.fnc_Trim(obj.getColumn(e.newrow, "RCGN_YSNO")) != "1") {
        		this.fn_AschGubn(this.fnc_Trim(obj.getColumn(e.newrow, 'ASCH_GUBN')), "");
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  확정여부로 인한 컴포넌트 Enable 처리  |
         +----------------------------------------*/
        this.fn_AppvYsno = function (obj,nOldRow,nRow) {
        	if (this.fnc_Trim(obj.getColumn(nRow, "RCGN_YSNO")) == "1") {
        		this.cmbASCH_GUBN.set_enable(false); //자산변동구분
        		this.mskCHNG_AMOT.set_enable(false); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtCUST_NAME.set_enable(false); //거래처
        		this.edtACCT_NAME.set_enable(false); //상대계정과목
        		this.edtDESC_REMK.set_enable(false); //적요
        		this.mskVATX_AMNT.set_enable(false); //부가세액
        	} else {
        		this.cmbASCH_GUBN.set_enable(true); //자산변동구분
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtDESC_REMK.set_enable(true); //적요
        	}
        }

        /*------------------------------------------------------------------+
         |  변동구분으로 인한 컴포넌트 Enable 처리 및 처분손익 디폴트값 처리 |
         +-------------------------------------------------------------------*/
        this.fn_AschGubn = function (AschGubn,nRow) {
        	//trace("fn_AschGubn--: " + AschGubn + "----nRow:" + nRow);
        	// 컴포넌트 Enable 처리
        	if (AschGubn == "CAPI") {
        		// 자본적지출

        		this.mskCHNG_AMOT.set_enable(true); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(true); //staACCT_INTL.class = 'styFormItemCapBE';
        		this.satCUST_CODE.set_cssclass('styFormItemCapBE');
        	} else if (AschGubn == "SAAL") {
        		// 매각
        		this.mskCHNG_AMOT.set_enable(false); //변동금액
        		this.mskDSPS_AMOT.set_enable(true); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(true); //staACCT_INTL.class = 'styFormItemCapBE';
        		this.satCUST_CODE.set_cssclass('styFormItemCapBE');
        	} else if (AschGubn == "SAPA") {
        		// 부분매각
        		this.mskCHNG_AMOT.set_enable(true); //변동금액
        		this.mskDSPS_AMOT.set_enable(true); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCapBE';
        		this.satCUST_CODE.set_cssclass('styFormItemCapBE');
        	} else if (AschGubn == "DSAL") {
        		// 폐기
        		this.mskCHNG_AMOT.set_enable(false); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCap';
        		this.satCUST_CODE.set_cssclass('styFormItemCap');
        	} else if (AschGubn == "DSPT") {
        		// 부분폐기
        		this.mskCHNG_AMOT.set_enable(true); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCap';
        		this.satCUST_CODE.set_cssclass('styFormItemCap');
        	} else if (AschGubn == "DONA") {
        		// 기증
        		this.mskCHNG_AMOT.set_enable(false); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCapBE';
        		this.satCUST_CODE.set_cssclass('styFormItemCapBE');
        	} else if (AschGubn == "USLS") {
        		// 불용
        		this.mskCHNG_AMOT.set_enable(false); //변동금액
        		this.mskDSPS_AMOT.set_enable(false); //처분가액
        		this.edtACCT_NAME.set_enable(false); //상대계정과목
        		this.edtCUST_NAME.set_enable(false); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCap';
        		this.satCUST_CODE.set_cssclass('styFormItemCap');
        	} else {
        		// 디폴트
        		this.mskCHNG_AMOT.set_enable(true); //변동금액
        		this.mskDSPS_AMOT.set_enable(true); //처분가액
        		this.edtACCT_NAME.set_enable(true); //상대계정과목
        		this.edtCUST_NAME.set_enable(true); //거래처
        		this.mskVATX_AMNT.set_enable(false); //staACCT_INTL.class = 'styFormItemCapBE';
        		this.satCUST_CODE.set_cssclass('styFormItemCapBE');
        	}

        
        	// 처분손익 디폴트값 처리
        	if (nRow != "" || this.fnc_Length(nRow) != 0) {
        		var sASST_NAME = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, 'ASST_NUMB')) + " : " + this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, 'ASST_NAME'));

        		if (AschGubn == "CAPI") {
        			// 자본적지출
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ASST_STAT2"))); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", 0); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", 0); //충당금가감액
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(자본적지출)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "SAAL") {
        			// 매각
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", "SALE"); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ACQU_ENDX"))); //변동금액(취득가기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "DPCT_ENDX"))); //충당금가감액(충당금기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(매각)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "SAPA") {
        			// 부분매각
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ASST_STAT2"))); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", 0); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", 0); //충당금가감액
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(부분매각)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "DSAL") {
        			// 폐기
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", "DSUS"); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ACQU_ENDX"))); //변동금액(취득가기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "DPCT_ENDX"))); //충당금가감액(충당금기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(폐기)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "DSPT") {
        			// 부분폐기
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ASST_STAT2"))); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", 0); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "DPCT_ENDX"))); //충당금가감액(충당금기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(부분폐기)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "DONA") {
        			// 기증
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", "DONA"); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "ACQU_ENDX"))); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", this.fnc_Trim(this.dsFS_ASCHXM.getColumn(nRow, "DPCT_ENDX"))); //충당금가감액(충당금기말잔액)
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(기증)"); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else if (AschGubn == "USLS") {
        			// 불용
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", "USLS"); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", 0); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", 0); //충당금가감액
        			this.dsFS_ASCHXM.setColumn(nRow, "ACCT_INTL", ""); //상대계정과목
        			this.dsFS_ASCHXM.setColumn(nRow, "ACCT_NAME", ""); //상대계정과목
        			this.dsFS_ASCHXM.setColumn(nRow, "CUST_CODE", ""); //거래처
        			this.dsFS_ASCHXM.setColumn(nRow, "CUST_NAME", ""); //거래처
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", sASST_NAME + "(불용)"); //dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		} else {
        			// 디폴트
        			//trace("---->" + AschGubn);
        			this.dsFS_ASCHXM.setColumn(nRow, "ASST_STAT", ""); //자산상태
        			this.dsFS_ASCHXM.setColumn(nRow, "CHNG_AMOT", 0); //변동금액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_AMOT", 0); //처분가액
        			this.dsFS_ASCHXM.setColumn(nRow, "DSPS_GILS", 0); //처분손익
        			this.dsFS_ASCHXM.setColumn(nRow, "DPCT_GRDC", 0); //충당금가감액
        			this.dsFS_ASCHXM.setColumn(nRow, "DESC_REMK", ""); //적요 디폴트 메세지
        			this.dsFS_ASCHXM.setColumn(nRow, "VATX_AMNT", 0); //부가세액
        		}
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

            if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
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
                   
            } else if ((obj.name == "imgHelpSHRASST_NUMB") || (obj.name == "edtSHRASST_NAME")) {
            
                arrParam[0] = "FSM0011";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRASST_NUMB,edtSHRASST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출   
                           
            } else if ((obj.name == "imgHelpCURR_DEPT") || (obj.name == "edtCURR_NAME")) {
            
        		if (this.edtCURR_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return; 
            
                arrParam[0] = "FAM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtCURR_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtCURR_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtCURR_DEPT,edtCURR_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
                                      
            } else if ((obj.name == "imgHelpASST_NUMB") || (obj.name == "edtASST_NAME")) {
            
        		//if (this.edtASST_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return; 
            
                arrParam[0] = "FSM0013";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtASST_NUMB,edtASST_NAME,edtASCL_NAME,edtCLSF_NAME,edtDEPT_CODE,edtDEPT_NAME,mskACQS_DATE,mskACQU_ENDX,mskDPCT_ENDX,mskUNDP_BALE,cmbASST_STAT,cmbASST_STAT2,edtEMPL_NUMB,edtACCT_UNIT";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1,5,7,8,9,12,13,14,15,2,18,10,19";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출   
                                    
            } else if ((obj.name == "imgHelpACCT_INTL") || (obj.name == "edtACCT_NAME")) { 
            
        		if (this.edtACCT_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return;
                                       
                arrParam[0] = "FAM0031";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtACCT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                                                        
            } else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) { 
            
        		if (this.edtCUST_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return;
                                       
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
        	if (e.columnid == "ASST_NUMB") {
        		// 자산번호 변경시

        		if (e.newvalue == "") {
        			obj.setColumn(e.row, "ASCH_GUBN", ""); //자산변동구분
        			obj.setColumn(e.row, "CHNG_AMOT", 0); //변동금액(취득가)
        			obj.setColumn(e.row, "DSPS_AMOT", 0); //처분가액
        			obj.setColumn(e.row, "DSPS_GILS", 0); //처분손익
        			obj.setColumn(e.row, "VATX_AMNT", 0); //부가세액
        		}
        	} else if (e.columnid == "ASCH_GUBN") {
        		// 자산변동구분 변경시

        		// Mi와 XP 컨버전 차이로 인해 자산변동구분시 초기화 후 하단의 계산로직을 추가함
        		this.fn_AschGubn(e.newvalue, e.row);

        		// 매각일경우는 초기화만 해줌
        		if (this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN')) == "SAAL") return;

        		//trace("--------자산변동구분 OnColumnChanged --------");

        		// 매각 아닌경우 기본적 계산 처리
        		var sASCH_GUBN = this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN'));
        		var sDSPS_AMOT = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'DSPS_AMOT')));
        		var sCHNG_AMOT = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'CHNG_AMOT')));
        		var sACQU_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'ACQU_ENDX')));
        		var sUNDP_BALE = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'UNDP_BALE')));
        		var sDPCT_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'DPCT_ENDX')));
        		// 충당금가감액을 먼저 구해주고 처분손익을 구해줘야 금액이 안 틀린다.
        		// 충당금가감액 = Math.floor((변동금액 / 취득가) * 충당금누계액)
        		// 처분손익     = 처분가액 - (변동금액 - 충당금가감액)

        		var sDPCT_GRDC = Math.floor((sCHNG_AMOT / sACQU_ENDX) * sDPCT_ENDX);
        		var sDSPS_GILS = sDSPS_AMOT - (sCHNG_AMOT - sDPCT_GRDC);
        		//trace("-----자산변동 sDPCT_GRDC: " + sDPCT_GRDC + "-----sDSPS_GILS: " + sDSPS_GILS);

        		if (sASCH_GUBN == "SAPA" || sASCH_GUBN == "DSPT") {
        			// 부분매각이거나 부분폐기일때
        			obj.setColumn(e.row, "DPCT_GRDC", sDPCT_GRDC); //충당금가감액
        		}

        		// 2014.12 자본적지출 일 경우 처분손익계산 X
        		if (this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN')) == "CAPI") {
        			obj.setColumn(e.row, "DSPS_GILS", 0);
        		} else {
        			obj.setColumn(e.row, "DSPS_GILS", sDSPS_GILS); //처분손익
        		}
        	} else if (e.columnid == "CHNG_AMOT" || e.columnid == "DSPS_AMOT") {
        		// 변동금액 및 처분가액
        		// 변동구분을 제외한 금액 입력시 자동 계산 처리
        		//trace("--------변동금액 및 처분가액 변경시 계산--------");
        		var sASCH_GUBN = this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN'));
        		var sDSPS_AMOT = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'DSPS_AMOT')));
        		var sCHNG_AMOT = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'CHNG_AMOT')));
        		var sACQU_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'ACQU_ENDX')));
        		var sUNDP_BALE = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'UNDP_BALE')));
        		var sDPCT_ENDX = nexacro.toNumber(this.fnc_Trim(obj.getColumn(e.row, 'DPCT_ENDX')));
        		// 충당금가감액을 먼저 구해주고 처분손익을 구해줘야 금액이 안 틀린다.
        		// 충당금가감액 = Math.floor((변동금액 / 취득가) * 충당금누계액(기말잔액))    //Math.floor  절사
        		// 처분손익     = 처분가액 - (변동금액 - 충당금가감액)

        		//trace("-----변동금액(sCHNG_AMOT): " + sCHNG_AMOT + "-----취득가(sACQU_ENDX): " + sACQU_ENDX);
        		//trace("-----충당금기말잔액(sDPCT_ENDX): " + sDPCT_ENDX);

        		var sDPCT_GRDC = Math.floor((sCHNG_AMOT / sACQU_ENDX) * sDPCT_ENDX);
        		var sDSPS_GILS = sDSPS_AMOT - (sCHNG_AMOT - sDPCT_GRDC);
        		//trace("-----충당금가감액( sDPCT_GRDC): " + sDPCT_GRDC + "-----처분손익(sDSPS_GILS): " + sDSPS_GILS);

        		if (sASCH_GUBN == "SAPA" || sASCH_GUBN == "DSPT") {
        			// 부분매각이거나 부분폐기일때
        			obj.setColumn(e.row, "DPCT_GRDC", sDPCT_GRDC); //충당금가감액
        		}

        		// 2014.12 자본적지출 일 경우 처분손익계산 X, 부가세 계산 O
        		if (this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN')) == "CAPI") {
        			obj.setColumn(e.row, "VATX_AMNT", sCHNG_AMOT * 0.1); //부가세액
        			obj.setColumn(e.row, "DSPS_GILS", 0);
        		} else {
        			obj.setColumn(e.row, "VATX_AMNT", 0);
        			obj.setColumn(e.row, "DSPS_GILS", sDSPS_GILS); //처분손익
        		}

        		// 매각, 자본적 지출일 경우 부가세액 10% 계산
        		if (this.fnc_Trim(obj.getColumn(e.row, 'ASCH_GUBN')) == "SAAL") {
        			obj.setColumn(e.row, "VATX_AMNT", sDSPS_AMOT * 0.1); //부가세액
        		}
        	}
        }

        /*---------------------------------+
         |  변동구분 전처리(자산번호 선택)  |
         +----------------------------------*/
        this.cmbASCH_GUBN_OnChanged = function (obj,e) {
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB"))) < 1) {
        		this.fnc_Message("TMM072", "자산번호");
        		this.dsFS_ASCHXM.setColumn(this.dsFS_ASCHXM.rowposition, "ASCH_GUBN", ""); //자산변동구분
        	}
        }

        /*-----------------------------+
         |  폐기엑셀일괄등록 화면 호출  |
         +------------------------------*/
        this.fn_BatchReg = function (obj,e) {

        	var sName 		= "FSMB0020P01";
        	var sFormURL 	= "fsm::FSMB0020P01.xfdl";
        	var sOpenStyle  = "modeless=false";
        		sOpenStyle += ",autosize=true";
        		sOpenStyle += ",top=-1";       
        		sOpenStyle += ",left=-1";      
        		sOpenStyle += ",width=990";    
        		sOpenStyle += ",height=800";   
        		sOpenStyle += ",title=true";   
        		sOpenStyle += ",titletext=폐기엑셀일괄등록";
        		sOpenStyle += ",status=false";
        		sOpenStyle += ",resizable=true";
        	
        	var objArgumentList = { 
        	};
        	
        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        		
        }

        /*------------------+
         |  팝업 Callback!  |
         +------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {

        	var sResponse = this.fnc_GetPopupRtn();
        	
        	if (sPopupId == "FSMB0020P01") {	// 폐기등록
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) this.fn_Search();
        		
        	} 
        	
        }

        /*-----------------------------+
         |  전표처리 |
         +------------------------------*/
        this.fn_SaveSlipNumb = function (obj,e) {
        	
        	if (this.dsFS_ASCHXM.rowcount < 1) return;

        	// 일괄처리 여부 확인
        	if (!this.fn_ChangeALL()) return;

        	var rRCGN_YSNO = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "RCGN_YSNO");

        	if (rRCGN_YSNO < 1) {
        		this.fnc_Message("TMM125", "자산변동 확정처리 후 사용가능 합니다");
        		return;
        	}

        
        	var sASCH_GUBN;
        	sASCH_GUBN = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASCH_GUBN"));
        	// 매각=SAAL   폐기=DSAL  기증=DONA  자본적지출 = CAPI
        	if (sASCH_GUBN == "SAAL" || sASCH_GUBN == "DSAL" || sASCH_GUBN == "DONA" || sASCH_GUBN == "CAPI") {
        	} else {
        		this.fnc_Message("TMM125", "전표처리 가능한 자산변동구분이 아닙니다");
        		return;
        	}

        

        	this.dsFS_ASCHXM_SLIP.clearData();

        	// 선택한 대상만 복사
        	var rASST_NUMB = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	var rASST_NAME = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NAME");
        	var rSEQN_NUMB = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB");

        	//trace("----rSEQN_NUMB: " + rSEQN_NUMB);
        	this.dsFS_ASCHXM.set_enableevent(false);
        	this.dsFS_ASCHXM.filter("ASST_NUMB=='" + rASST_NUMB + "' && SEQN_NUMB == '" + rSEQN_NUMB + "'"); //현재행 복사
        	this.dsFS_ASCHXM_SLIP.copyData(this.dsFS_ASCHXM, true);
        	this.dsFS_ASCHXM.filter("");
        	this.dsFS_ASCHXM.set_enableevent(true);

        	// 필수값 체크
        	// if (!fn_CreateSlipItemCheck()) return;

        	if (!this.fnc_Message("TMM125", "자산번호: " + rASST_NUMB + " [" + rASST_NAME + "] 을(를) 전표생성")) return;

        	// 저장후 마지막 nRow 설정
        	this.aKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.aKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.aKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	//trace("-----aKeyValue[0] : " + this.aKeyValue[0] + " aKeyValue[1] : " + this.aKeyValue[1] + " aKeyValue[2] : " + this.aKeyValue[2]);

        	var sMethodName = "PROC00";
        	var sInDataSet = "dsFS_ASCHXM_SLIP=dsFS_ASCHXM_SLIP:A";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	//trace(this.dsFS_ASCHXM_SLIP.saveXML());
        	// return;

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        /*-----------------------+
         |  변동확정, 확정취소!!  |
         +-----------------------*/
        this.fn_AschEvent = function (obj,e) {

        	var sProcessKind = this.fnc_ToUpper(this.fnc_Replace(obj.name, "btn", ""));

        	if (!this.fn_AschEventCheck(sProcessKind)) return;
        	
        	this.aKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.aKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.aKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	//trace("-----aKeyValue[0] : " + this.aKeyValue[0] + " aKeyValue[1] : " + this.aKeyValue[1] + " aKeyValue[2] : " + this.aKeyValue[2]);
        	
        	var sMethodName = sProcessKind + "00";
        	var sInDataSet = "dsFS_ASCHXM=dsFS_ASCHXM:U";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        
        /*-----------------------------------------+
         |  분할확정 및 취소시 중복 체크 방지 처리  |
         ------------------------------------------*/
        this.fn_AschEventCheck = function (sProcessKind) {

        	if (this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO=='1'") == 0) {
        		this.fnc_Message("TMM010");
        		return;
        	}

        	// 전표처리
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_NUMB"))) == 14) {
        		this.fnc_Message("TMM125", "전표처리 확정자료는 변동관리 할 수 없습니다!");
        		return;
        	}

        	var iCaseCount;

        	if (sProcessKind == "PERMIT") {
        		iCaseCount = this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO == '1'");
        		//trace("-----PERMIT iCaseCount:" + iCaseCount);

        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "이미 변동확정이 완료된 자산이 체크되었습니다.");
        			return;
        		}

        		return true;
        	} else {
        		iCaseCount = this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO== '0'");
        		//trace("-----iCaseCount:" + iCaseCount);
        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "미확정된 자산이 체크 되었습니다.");
        			return;
        		}

        		return this.fnc_Message("TMM140", "변동확정을 취소 하시겠습니까");
        	}
        }

        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.grdFS_ASCHXM_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName == "SLIP_NUMB") {
        	    
        	    var sSlipNumb = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_LINE");
        	    if(this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
        	}
        }

        
         /*
        this.fn_OpenSlip = function (obj:Grid, e:nexacro.GridClickEventInfo) {
        	var sResponse = '';

        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdFS_ASCHXM, "SLIP_NUMB") == e.cell
        		 && this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"))) > 0) {
        		// var sACCT_UNIT = gfn_Trim(dsFS_ASCHXM.getColumn(e.row, "ACCT_UNIT"));
        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"));
        		// fnc_OpenSlipReadOnly(sACCT_UNIT, sSLIP_NUMB);

        		// 전표보기 일괄처리는 조회만/ 현 화면 전표처리된것은 삭제처리 가능하도록
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_GUBN"))) != 0) {
        			sResponse = this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        		} else {
        			sResponse = this.fnc_PopSlipForm(sSLIP_NUMB, "REV", this.sUSERLAVEL); //SHR REV
        		}
        		this.fn_Search();
        	}
        }
        */

        /*------------------------------------------------+
         |  신규취득과 보조필드1이 ASCH일때 체크박스 처리//
         | 속도느려서 grid에서 자체 처리함. 사용안함
         -------------------------------------------------*/
        this.fn_ChckColumnCheck = function (row) {
        	var RefrFld1 = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(row, 'REF1_FILD'));
        	var AschGubn = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(row, 'ASCH_GUBN'));
        	//trace("-------fn_ChckColumnCheck: " + row);

        	if (RefrFld1 == "ASCH" || AschGubn == "ACQU") {
        		return 'Y';
        	} else {
        		return 'N';
        	}
        }

        this.FormUnloadProcess = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCHXM.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_OnColumnChanged, this);
            this.dsFS_ASCHXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXM_SLIP.addEventHandler("oncolumnchanged", this.dsFS_ASCHXM_OnColumnChanged, this);
            this.dsFS_ASCHXM_SLIP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASCHXM.addEventHandler("oncelldblclick", this.grdFS_ASCHXM_oncelldblclick, this);
            this.Div0.btnBatch.addEventHandler("onclick", this.fn_BatchReg, this);
            this.Div0.btnPermit.addEventHandler("onclick", this.fn_AschEvent, this);
            this.Div0.btnCancel.addEventHandler("onclick", this.fn_AschEvent, this);
            this.calSHRCHNG_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCHNG_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASCH_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRCGN_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCHNG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASCH_GUBN.addEventHandler("onitemchanged", this.cmbASCH_GUBN_OnChanged, this);
            this.cmbASCH_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskUNDP_BALE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHNG_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_ENDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDPCT_ENDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDSPS_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDSPS_GILS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCURR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCURR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskSLIP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDPCT_GRDC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAAA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASST_STAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCURR_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnSaveSlipNumb.addEventHandler("onclick", this.fn_SaveSlipNumb, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
