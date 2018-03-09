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
                this.set_name("FSMB0040");
                this.set_titletext("자산이동관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"BFDE_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"BFDE_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRRCGN_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXL_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHBF_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BFEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"BFDE_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"BFDE_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCT\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ACCN\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "262", "25", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("33");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHXM", "absolute", "8", "154", null, null, "25", "199", this);
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
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"73\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"73\"/><Column size=\"94\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"선택\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"이동일자\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"4\" rowspan=\"2\" text=\"자산번호\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"8\" colspan=\"3\" text=\"변경 전\"/><Cell col=\"11\" colspan=\"3\" text=\"변경 후\"/><Cell col=\"14\" rowspan=\"2\" text=\"확정여부\"/><Cell col=\"15\" rowspan=\"2\" text=\"확정일자\"/><Cell col=\"16\" rowspan=\"2\" text=\"확정자\"/><Cell col=\"17\" rowspan=\"2\" text=\"전표번호\"/><Cell row=\"1\" col=\"8\" text=\"사업장\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"사원명\"/><Cell row=\"1\" col=\"11\" text=\"사업장\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:(CHEK_YSNO == '0') ? 'checkbox' : 'checkbox'\" edittype=\"expr:(CHEK_YSNO == '0' || CHEK_YSNO == '1') ? 'checkbox' : 'none'\" text=\"bind:CHEK_YSNO\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_NAME\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_PRIC\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:BFDE_ACCT\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BFDE_NAME\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BFEM_NAME\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:DEPT_ACCT\"/><Cell col=\"12\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\"/><Cell col=\"14\" displaytype=\"checkbox\" text=\"bind:RCGN_YSNO\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:APPV_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" text=\"bind:APPV_EMNM\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"none\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "370", "21", null, null, this);
            obj.set_taborder("41");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnAPPL", "absolute", "190", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("4");
            obj.set_text("이동확정");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnCANC", "absolute", "267", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("5");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", "0", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", "101", "0", "86", "21", null, null, this.Div0);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.Div0.addChild(obj.name, obj);

            obj = new Button("btnSaveSlipNumb", "absolute", null, null, "74", "21", "25", "168", this);
            obj.set_taborder("45");
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "199", "71", "14", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT2", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRRCGN_YSNO", "absolute", "413", "71", "220", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "201", "97", "115", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASST_NAME", "absolute", "850", "71", "157", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "727", "97", "74", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "826", "97", "181", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "413", "97", "80", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "518", "97", "115", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "345", "71", "76", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "345", "97", "76", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "662", "97", "76", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("이동사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "662", "71", "76", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRASST_NUMB", "absolute", "727", "71", "98", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "143", "25", "21", this);
            obj.set_taborder("74");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "28", null, "185", "21", null, "30", this);
            obj.set_taborder("83");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "915", null, "85", "21", null, "108", this);
            obj.set_taborder("86");
            obj.set_text("취득금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "539", null, "108", "21", null, "108", this);
            obj.set_taborder("88");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "227", null, "84", "21", null, "108", this);
            obj.set_taborder("90");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "28", null, "185", "21", null, "108", this);
            obj.set_taborder("92");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "539", null, "84", "21", null, "134", this);
            obj.set_taborder("94");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "185", "21", null, "134", this);
            obj.set_taborder("96");
            obj.set_text("이동일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "98", null, "49", "21", null, "82", this);
            obj.set_taborder("97");
            obj.set_text("부서");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "98", null, "49", "21", null, "56", this);
            obj.set_taborder("98");
            obj.set_text("사원");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "608", null, "108", "21", null, "82", this);
            obj.set_taborder("99");
            obj.set_text("부서");
            obj.set_cssclass("styFormSubCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "608", null, "108", "21", null, "56", this);
            obj.set_taborder("100");
            obj.set_text("사원");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCHNG_DATE", "absolute", "98", null, "100", "21", null, "134", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");

            obj = new Edit("edtASCL_NAME", "absolute", "98", null, "100", "21", null, "108", this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "295", null, "154", "21", null, "108", this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQS_DATE", "absolute", "608", null, "104", "21", null, "108", this);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_PRIC", "absolute", "983", null, null, "21", "54", "108", this);
            obj.set_taborder("14");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCHBF_DEPT", "absolute", "136", null, "77", "21", null, "82", this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBFDE_ACCT", "absolute", "214", null, "156", "21", null, "82", this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "98", null, "765", "21", null, "30", this);
            obj.set_taborder("26");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "646", null, "74", "21", null, "82", this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "888", null, null, "21", "54", "82", this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "646", null, "217", "21", null, "56", this);
            obj.set_taborder("24");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "888", null, null, "21", "54", "56", this);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCHBF_EMPL", "absolute", "136", null, "131", "21", null, "56", this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBFEM_NAME", "absolute", "268", null, "239", "21", null, "56", this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "227", null, "84", "21", null, "134", this);
            obj.set_taborder("122");
            obj.set_text("자산부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_DEPT", "absolute", "295", null, "80", "21", null, "134", this);
            obj.set_taborder("123");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_NAME", "absolute", "400", null, "107", "21", null, "134", this);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_UNIT", "absolute", "646", null, null, "21", "375", "134", this);
            obj.set_taborder("126");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBFDE_NAME", "absolute", "371", null, "136", "21", null, "82", this);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_ACCT", "absolute", "722", null, "141", "21", null, "82", this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBFDE_ACCN", "absolute", "303", null, "57", "21", null, "82", this);
            obj.set_taborder("129");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_ACCN", "absolute", "777", null, "39", "21", null, "82", this);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_LINE", "absolute", "1069", null, null, "21", "54", "28", this);
            obj.set_taborder("131");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "983", null, null, "21", "54", "28", this);
            obj.set_taborder("27");
            obj.set_type("string");
            obj.set_mask("##-########-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "915", null, "90", "21", null, "29", this);
            obj.set_taborder("133");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtASST_NUMB", "absolute", "608", null, "104", "21", null, "134", this);
            obj.set_taborder("134");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "178", "97", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "495", "97", "21", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASST_NUMB", "absolute", "827", "71", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "803", "97", "21", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCURR_DEPT", "absolute", "377", null, "22", "22", null, "133", this);
            obj.set_taborder("139");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpASST_NUMB", "absolute", "714", null, "22", "22", null, "133", this);
            obj.set_taborder("140");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "865", null, "22", "22", null, "81", this);
            obj.set_taborder("141");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "865", null, "22", "22", null, "55", this);
            obj.set_taborder("142");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", null, "60", "21", null, "82", this);
            obj.set_taborder("143");
            obj.set_text("변경전");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "539", null, "74", "21", null, "85", this);
            obj.set_taborder("144");
            obj.set_text("변경후");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "26.03%", "244", null, "130", "9.27%", null, this);
            obj.set_taborder("145");
            obj.set_binddataset("dsFS_ASCHXL_TEMP");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CHNG_DATE\"/><Cell col=\"1\" text=\"ASST_NUMB\"/><Cell col=\"2\" text=\"ASST_NAME\"/><Cell col=\"3\" text=\"CHBF_DEPT\"/><Cell col=\"4\" text=\"BFDE_NAME\"/><Cell col=\"5\" text=\"DEPT_CODE\"/><Cell col=\"6\" text=\"DEPT_NAME\"/><Cell col=\"7\" text=\"DESC_REMK\"/></Band><Band id=\"body\"><Cell text=\"bind:CHNG_DATE\"/><Cell col=\"1\" text=\"bind:ASST_NUMB\"/><Cell col=\"2\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" text=\"bind:CHBF_DEPT\"/><Cell col=\"4\" text=\"bind:BFDE_NAME\"/><Cell col=\"5\" text=\"bind:DEPT_CODE\"/><Cell col=\"6\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "26.62%", "337", null, "130", "8.68%", null, this);
            obj.set_taborder("146");
            obj.set_binddataset("dsFS_ASCHXL");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CHNG_DATE\"/><Cell col=\"1\" text=\"ASST_NUMB\"/><Cell col=\"2\" text=\"ASST_NAME\"/><Cell col=\"3\" text=\"CHBF_DEPT\"/><Cell col=\"4\" text=\"BFDE_NAME\"/><Cell col=\"5\" text=\"DEPT_CODE\"/><Cell col=\"6\" text=\"DEPT_NAME\"/><Cell col=\"7\" text=\"DESC_REMK\"/></Band><Band id=\"body\"><Cell text=\"bind:CHNG_DATE\"/><Cell col=\"1\" text=\"bind:ASST_NUMB\"/><Cell col=\"2\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" text=\"bind:CHBF_DEPT\"/><Cell col=\"4\" text=\"bind:BFDE_NAME\"/><Cell col=\"5\" text=\"bind:DEPT_CODE\"/><Cell col=\"6\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_text("자산이동관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("148");
            obj.set_text("홈 > 자산관리 > 자산이동관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("149");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("150");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("152");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("153");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("154");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("155");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("156");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("157");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("158");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("159");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "291", "118", "38", "10", null, null, this);
            obj.set_taborder("160");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "291", "92", "102", "5", null, null, this);
            obj.set_taborder("161");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "288", "61", "38", "10", null, null, this);
            obj.set_taborder("162");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("163");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "8", "148", "216", "10", null, null, this);
            obj.set_taborder("164");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "9", "597", "30", "67", null, null, this);
            obj.set_taborder("165");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "737", null, null, "21", "54", "134", this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "591", "518", "48", "35", null, null, this);
            obj.set_taborder("166");
            obj.set_text("H35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "591", "129", "48", "25", null, null, this);
            obj.set_taborder("167");
            obj.set_text("H35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 370, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산이동관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("calCHNG_DATE_value","calCHNG_DATE","value","dsFS_ASCHXM","CHNG_DATE");
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
            obj = new BindItem("mskACQU_PRIC_value","mskACQU_PRIC","value","dsFS_ASCHXM","ACQU_PRIC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_NAME_value","edtASST_NAME","value","dsFS_ASCHXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCHBF_DEPT_value","edtCHBF_DEPT","value","dsFS_ASCHXM","CHBF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBFDE_NAME_value","edtBFDE_ACCT","value","dsFS_ASCHXM","BFDE_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFS_ASCHXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_CODE_value","edtDEPT_CODE","value","dsFS_ASCHXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsFS_ASCHXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtEMPL_NUMB","value","dsFS_ASCHXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsFS_ASCHXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCHBF_EMPL_value","edtCHBF_EMPL","value","dsFS_ASCHXM","CHBF_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBFEM_NAME_value","edtBFEM_NAME","value","dsFS_ASCHXM","BFEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtACCT_UNIT","value","dsFS_ASCHXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtBFDE_NAME","value","dsFS_ASCHXM","BFDE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtDEPT_ACCT","value","dsFS_ASCHXM","DEPT_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtBFDE_ACCN","value","dsFS_ASCHXM","BFDE_ACCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtDEPT_ACCN","value","dsFS_ASCHXM","DEPT_ACCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mskSLIP_LINE","value","dsFS_ASCHXM","SLIP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","mskSLIP_NUMB","value","dsFS_ASCHXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtASST_NUMB","value","dsFS_ASCHXM","ASST_NUMB");
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
        this.addIncludeScript("FSMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0040.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        // include "import::lib_XConvert.xjs";
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FSMB0040"; //해당 Form에서 사용 할 Package 명
        this.arrKeyValue 	= new Array(4);
        this.sSLIPGUBN 		= ""; //전표처리 후 재 조회시 예외처리

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
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASCHXM, "SLIP_NUMB");
        	this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRCHNG_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + "0101"));
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

        	this.fnc_DatasetClear("dsFS_ASCHXM"); //기 조회 자료 초기화

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

        	var iRow = this.dsFS_ASCHXM.addRow();

        /*
        	if (this.sUSERLAVEL != "5") {
        		this.edtCURR_DEPT.set_value(application.GBL_DEPTCD);
        		this.edtCURR_NAME.set_value(application.GBL_DEPTNM);
        		this.edtCURR_NAME.UserData = application.GBL_DEPTNM;
        	}
        	*/
            this.dsFS_ASCHXM.setColumn(iRow, "RCGN_YSNO", "0"); //dsFS_ASCHXM.setColumn(dsFS_ASCHXM.rowposition,'RCGN_YSNO','0');
        	this.dsFS_ASCHXM.setColumn(iRow, "CHNG_DATE", this.fnc_GetServerDateTime("DATE")); //이동일자
        	this.dsFS_ASCHXM.setColumn(iRow, "ACQS_DATE", this.fnc_GetServerDateTime("DATE")); //취득일자	
        	this.dsFS_ASCHXM.setColumn(iRow, "RCGN_YSNO", "0"); //dsFS_ASCHXM.setColumn(dsFS_ASCHXM.rowposition,'RCGN_YSNO','0');

        	this.calCHNG_DATE.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

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

        	if (!this.fn_SaveItemCheck()) return;

        	this.arrKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.arrKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.arrKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.arrKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	//trace("-----arrKeyValue[0] : [" + this.arrKeyValue[0] + "] arrKeyValue[1] : [" + this.arrKeyValue[1] + "] arrKeyValue[2] : [" + this.arrKeyValue[2] + "]");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsFS_ASCHXM=dsFS_ASCHXM:U";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
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
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXM, dsFS_ASCHXL, dsFS_ASCHXM_SLIP, dsFS_ASCHXL_TEMP",this);
        	
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

        	//trace("--------sSLIPGUBN: " + this.sSLIPGUBN);
        	if (this.sSLIPGUBN != "SLIP") {
        		if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        			if (this.fnc_Message("TMM023") == false) return false;
        		}
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

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASCHXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	if (this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "RCGN_YSNO")) == "1") {
        		this.fnc_Message("TMM107", "이동확정여부", "이동확정");
        		return;
        	}

        	// 전표처리
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_NUMB"))) == 14) {
        		this.fnc_Message("TMM125", "전표처리 확정자료는 삭제 할 수 없습니다!");
        		return;
        	}

        	var sQuestionText = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB") + " ";
        	sQuestionText += this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NAME") + "의 이동";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	var CHBF_DEPT = "";
        	var DEPT_CODE = "";
        	var CHBF_EMPL = "";
        	var EMPL_NUMB = "";

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsFS_ASCHXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASCHXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (!this.fnc_IsDate(this.dsFS_ASCHXM.getColumn(i, "CHNG_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "이동일자", this.dsFS_ASCHXM, i, this.calCHNG_DATE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "ASST_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASCHXM, i, this.edtASST_NAME, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "DEPT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리부서(변경후)", this.dsFS_ASCHXM, i, this.edtDEPT_NAME, '');
        		}

        		//trace("CHBF_DEPT: " + this.dsFS_ASCHXM.getColumn(i, "CHBF_DEPT"));
        		//trace("DEPT_CODE: " + this.dsFS_ASCHXM.getColumn(i, "DEPT_CODE"));
        		//trace("CHBF_EMPL: " + this.dsFS_ASCHXM.getColumn(i, "CHBF_EMPL"));
        		//trace("EMPL_NUMB: " + this.dsFS_ASCHXM.getColumn(i, "EMPL_NUMB"));

        		// undefined는 if구문으로 확인안됨 trim, length로 비교처리 요망
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHBF_DEPT"))) < 1) {
        			CHBF_DEPT = "same";
        		} else {
        			CHBF_DEPT = this.dsFS_ASCHXM.getColumn(i, "CHBF_DEPT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "DEPT_CODE"))) < 1) {
        			DEPT_CODE = "same";
        		} else {
        			DEPT_CODE = this.dsFS_ASCHXM.getColumn(i, "DEPT_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "CHBF_EMPL"))) < 1) {
        			CHBF_EMPL = "same";
        		} else {
        			CHBF_EMPL = this.dsFS_ASCHXM.getColumn(i, "CHBF_EMPL");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(i, "EMPL_NUMB"))) < 1) {
        			EMPL_NUMB = "same";
        		} else {
        			EMPL_NUMB = this.dsFS_ASCHXM.getColumn(i, "EMPL_NUMB");
        		}

        		//trace("r_CHBF_DEPT: " + CHBF_DEPT);
        		//trace("r_DEPT_CODE: " + DEPT_CODE);
        		//trace("r_CHBF_EMPL: " + CHBF_EMPL);
        		//trace("r_EMPL_NUMB: " + EMPL_NUMB);
        		/*
        		if ((CHBF_DEPT == DEPT_CODE) && (CHBF_EMPL == EMPL_NUMB)) {
        			return this.fnc_CheckPostAction("TMM125", "변경 전후의 부서 및 사원이 동일합니다.", this.dsFS_ASCHXM, i, this.edtDEPT_NAME, '');
        		}
        		*/
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
        		sReturnString += " CHNG_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value)); //조회기간1
        		sReturnString += " CHNG_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value)); //조회기간2
        		sReturnString += " RCGN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //이동확정여부
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //이동사원
        		sReturnString += " CHBF_DEPT=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서코드

        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value));
        		sReturnString += " CHNG_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value));
        		sReturnString += " RCGN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value));
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value));
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        		// 저장 Argument 생성 - 엑셀 저장처리
        	} else if (sKind == "SAVE01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value));
        		sReturnString += " CHNG_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value));
        		sReturnString += " RCGN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value));
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value));
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        		// 확정 처리
        	} else if (sKind == "APPL00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value));
        		sReturnString += " CHNG_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value));
        		sReturnString += " RCGN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value));
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value));
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if (sKind == "CANC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHNG_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value));
        		sReturnString += " CHNG_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value));
        		sReturnString += " RCGN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value));
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value));
        		sReturnString += " CLSF_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));

        		// 전표 생성
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " ASST_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "ASST_NUMB"))); //자산번호
        		sReturnString += " CHNG_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(this.dsFS_ASCHXM_SLIP.rowposition, "CHNG_DATE"))); //이동일자
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim('FS003')); // 전표유형구분
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(this.fnc_Trim('FSMB0040')); // 출처연결키
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

        		if (this.fnc_Length(this.fnc_Trim(this.arrKeyValue[0])) > 0) {
        			var iRow = this.dsFS_ASCHXM.findRowExpr("ASST_NUMB=='" + this.arrKeyValue[0] + "' && CHNG_DATE=='" + this.arrKeyValue[1] + "' && SEQN_NUMB=='" + this.arrKeyValue[2] + "'");

        			this.grdFS_ASCHXM.clearSelect();
        			this.grdFS_ASCHXM.selectRow(iRow);
        			this.dsFS_ASCHXM.set_rowposition(iRow);

        			this.arrKeyValue[0] = "";
        			this.arrKeyValue[1] = "";
        			this.arrKeyValue[2] = "";
        		}
        	} else if (sMethodName == "APPL00") {
        		this.fnc_Message("TMM125", "이동확정이 완료되었습니다.");
        		this.sSLIPGUBN = "";
        		this.fn_Search();
        	} else if (sMethodName == "CANC00") {
        		this.fnc_Message("TMM125", "이동확정 취소가 완료되었습니다.");
        		this.sSLIPGUBN = "";
        		this.fn_Search();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.sSLIPGUBN = "";
        		this.fn_Search();
        	} else if (sMethodName == "SAVE01") {
        		// fn_KeyFieldDisible(dsFS_ASCHXM, 0, dsFS_ASCHXM.rowposition);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.sSLIPGUBN = "";
        		this.fn_Search();
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("TMM130", "자산이동관리 전표생성");
        		this.sSLIPGUBN = "SLIP";
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRRCGN_YSNO,dsSHRRCGN_YSNO,0";

        		this.fnc_CommonCodeInnerBind(arrParam);	    		
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	// 전표번호에 따른 버튼 권한
        	if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) != 14 && // 전표처리 하지 않은것
        		this.fnc_Trim(obj.getColumn(e.newrow, "RCGN_YSNO")) > 0 && // 확정인 것만
        		this.fnc_Trim(obj.getColumn(e.newrow, "BFDE_ACCN")) != this.fnc_Trim(obj.getColumn(e.newrow, "DEPT_ACCN"))) 
        {
        		this.btnSaveSlipNumb.set_enable(true);
        	} else {
        		this.btnSaveSlipNumb.set_enable(false);
        	}

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.calCHNG_DATE.set_enable(true);
        		this.edtASST_NAME.set_enable(true);
        		this.edtDEPT_NAME.set_enable(true); //변경후 관리부서
        		this.edtEMPL_NAME.set_enable(true); //변경후 관리사원
        		this.edtDESC_REMK.set_enable(true); //적요
        	} else {
        		this.calCHNG_DATE.set_enable(false);
        		this.edtASST_NAME.set_enable(false);

        		if (this.fnc_Trim(obj.getColumn(e.newrow, "RCGN_YSNO")) == "1") {
        			this.edtDEPT_NAME.set_enable(false); //변경후 관리부서
        			this.edtEMPL_NAME.set_enable(false); //변경후 관리사원
        			this.edtDESC_REMK.set_enable(false); //적요
        		} else {
        			this.edtDEPT_NAME.set_enable(true); //변경후 관리부서
        			this.edtEMPL_NAME.set_enable(true); //변경후 관리사원
        			this.edtDESC_REMK.set_enable(true); //적요
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

            if ((obj.name == "imgHelpSHRASST_NUMB") || (obj.name == "edtSHRASST_NAME")) {
            
                arrParam[0] = "FSM0011";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRASST_NUMB,edtSHRASST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,0";                                      //Mapping Column Index
                
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
            
                //arrParam[0] = "FAM0012";                                  //Popup ID
                arrParam[0] = "FAM0011";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHREMPL_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";          //초기화 및 결과 Mapping Column
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
            
        		if (this.edtASST_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return;
            
                arrParam[0] = "FSM0015";                                  //Popup ID
                //arrParam[1] = "";                                         //조건구분에 대응되는 조회조건 값
                arrParam[1] = this.fnc_Trim(this.edtCURR_DEPT.value);     // 자료 제한해주도록 기능 보완 
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value);    //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtASST_NUMB,edtASST_NAME,edtASCL_NAME,edtCLSF_NAME,mskACQS_DATE,mskACQU_PRIC,edtCHBF_DEPT,edtBFDE_NAME,edtDEPT_CODE,edtDEPT_NAME,edtCHBF_EMPL,edtBFEM_NAME,edtEMPL_NUMB,edtEMPL_NAME,edtACCT_UNIT,edtBFDE_ACCN,edtBFDE_ACCT,edtDEPT_ACCN,edtDEPT_ACCT";
                arrParam[6] = "0,1,2,3,4,6,12,8,12,8,13,9,13,9,18,10,11,10,11";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출  
                                                                     
            } else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {
        		//if (this.edtDEPT_NAME.enable == false || this.dsFS_ASCHXM.rowcount < 1) return;
        		
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

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時|
         +------------------------------*/
        this.fn_ExcelFileDown = function (obj,e) {
        	
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*---------------------------+
         |  양식파일 업로드 클릭 時   |
         +----------------------------*/
        this.fn_ExcelUpLoad = function (obj,e) {
        	
        	this.fnc_DatasetClear("dsFS_ASCHXL_TEMP");
        	this.fnc_ExcelUpload("dsFS_ASCHXL_TEMP", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	this.dsFS_ASCHXL_TEMP.set_enableevent(false);
        	this.dsFS_ASCHXL_TEMP.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	this.dsFS_ASCHXL_TEMP.set_enableevent(true);
        	
        	// TEMP DataSet에서 복사.
        	this.dsFS_ASCHXL.copyData(this.dsFS_ASCHXL_TEMP);

        	// 복사해온 Row Status는 Insert Type.
        	this.dsFS_ASCHXL.set_updatecontrol(false);
        	for (var i = 0; i < this.dsFS_ASCHXL.getRowCount(); i++) {
        		this.dsFS_ASCHXL.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        	}
        	this.dsFS_ASCHXL.set_updatecontrol(true);
        	this.dsFS_ASCHXL.set_rowposition(1);
        	this.grdFS_ASCHXM.setFocus();

        
        	/* 엑셀 업로드 체크처리 후 저장 */
        	if (!this.fn_ExcelUploadCheck()) return;

        	var sMethodName = "SAVE01";
        	var sInDataSet 	= "dsFS_ASCHXL=dsFS_ASCHXL:A";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();
        	
        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASCHXL")) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	if (this.dsFS_ASCHXL.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsFS_ASCHXL.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASCHXL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (!this.fnc_IsDate(this.dsFS_ASCHXL.getColumn(i, "CHNG_DATE"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 이동일자가 잘못되었습니다.");
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXL.getColumn(i, "ASST_NUMB"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 자산번호가 없습니다.");
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXL.getColumn(i, "CHBF_DEPT"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 변경 전 부서코드가 없습니다.");
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXL.getColumn(i, "DEPT_CODE"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 이동 할 부서코드가 없습니다.");
        			return false;
        		}
        /*
        		if ((this.dsFS_ASCHXL.getColumn(i, "CHBF_DEPT") == this.dsFS_ASCHXL.getColumn(i, "DEPT_CODE"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 변경 전후의 부서가 동일합니다.");
        			return false;
        		}
        */		
        	}

        	return true;
        	
        }

        
        /*------------------------------+
         |      다중 전표 생성          |
         +-------------------------------*/
        this.fn_SaveSlipNumb = function (obj,e) {

        	if (this.dsFS_ASCHXM.rowcount < 1) return;

        	this.dsFS_ASCHXM_SLIP.clearData();

        	if (this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO=='1'") < 1) {
        		this.fnc_Message("TMM125", "선택 체크 후 사용하세요");
        		return;
        	}

        	// 선택한 대상만 복사
        	this.dsFS_ASCHXM.set_enableevent(false);
        	this.dsFS_ASCHXM.filter("CHEK_YSNO=='1'");
        	this.dsFS_ASCHXM_SLIP.copyData(this.dsFS_ASCHXM, true);
        	this.dsFS_ASCHXM.filter("");
        	this.dsFS_ASCHXM.set_enableevent(true);

        	// 필수값 체크
        	if (!this.fn_CreateSlipItemCheck()) return;

        	if (!this.fnc_Message("TMM145", "자산이동 전표 생성")) return;

        	// 저장후 마지막 nRow 설정
        	this.arrKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.arrKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");
        	this.arrKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB");
        	//trace("-----arrKeyValue[0] : " + this.arrKeyValue[0] + " arrKeyValue[1] : " + this.arrKeyValue[1]);

        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsFS_ASCHXM_SLIP=dsFS_ASCHXM_SLIP:A";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	//trace(this.dsFS_ASCHXM_SLIP.saveXML());
        	// return;

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        /*---------------------------+
         |  전표생성 필수 입력 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {
        	// -----0)확정인 경우만 가능
        	for (var i = 0; i < this.dsFS_ASCHXM_SLIP.getRowCount(); i++) {
        		if (this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "RCGN_YSNO") <= 0) {
        			this.fnc_Message("TMM125", "자산이동 확정처리 후 전표처리 사용가능 합니다");
        			return false;
        		}
        	}

        	// -----1)사업장이 다른경우
        	for (var i = 0; i < this.dsFS_ASCHXM_SLIP.getRowCount(); i++) {
        		if (this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(i, "BFDE_ACCN")) == this.fnc_Trim(this.dsFS_ASCHXM_SLIP.getColumn(i, "DEPT_ACCN"))) {
        			this.fnc_Message("TMM125", "사업장이 다른경우만 전표처리 사용가능 합니다.");
        			return false;
        		}
        	}

        	// -----2)취득일자 다른경우
        	for (var i = 0; i < this.dsFS_ASCHXM_SLIP.getRowCount(); i++) {
        		for (var j = 0; j < this.dsFS_ASCHXM_SLIP.getRowCount(); j++) {
        			if (this.dsFS_ASCHXM_SLIP.getColumn(j, "CHNG_DATE") != this.dsFS_ASCHXM_SLIP.getColumn(i, "CHNG_DATE")) {
        				this.fnc_Message("TMM125", "자산이동일자는 같아야 전표생성 가능합니다");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        
        /*-----------------------+
         |  이동확정, 확정취소!!  |
         +-----------------------*/
        this.fn_AschEvent = function (obj,e) {

        	if (!this.fn_AppCanCheck(obj)) return;

        
        	this.arrKeyValue[0] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "ASST_NUMB");
        	this.arrKeyValue[1] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "CHNG_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.arrKeyValue[2] = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.arrKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	
        	//trace("-----arrKeyValue[0] : " + this.arrKeyValue[0] + " arrKeyValue[1] : " + this.arrKeyValue[1] + " arrKeyValue[2] : " + this.arrKeyValue[2]);

        	var sMethodName = this.fnc_Replace(obj.name, "btn", "") + "00";
        	var sInDataSet 	= "dsFS_ASCHXM=dsFS_ASCHXM:U";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();
        }

        
        /*-----------------------------------------+
         |  이동확정 및 취소시 중복 체크 방지 처리  |
         ------------------------------------------*/
        this.fn_AppCanCheck = function (obj) {

        	if (this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO=='1'") == 0) {
        		this.fnc_Message("TMM010");
        		return;
        	}

        	// 전표처리
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_NUMB"))) == 14) {
        		this.fnc_Message("TMM125", "전표처리 확정자료는 이동관리 할 수 없습니다!");
        		return;
        	}

        	var iCaseCount;

        	if (obj.name == "btnAPPL") {
        		iCaseCount = this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO == '1' ");
        		//trace("-----PERMIT iCaseCount:" + iCaseCount);

        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "이미 이동확정하신 자료가 체크 되었습니다.");
        			return;
        		}
        	} else {
        		iCaseCount = this.dsFS_ASCHXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO == '0' ");

        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "미이동확정된 자료가 체크 되었습니다.");
        			return;
        		}
        	}

        	return true;
        }

        
        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {
        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdFS_ASCHXM, "SLIP_NUMB") == e.cell
        		 && this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"))) > 0) {

        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"));

        		//trace("sSLIP_NUMB: " + sSLIP_NUMB);

        		var sResponse = thisgfn_PopSlipForm(sSLIP_NUMB, "REV", this.sUSERLAVEL, "");
        		this.fn_Search();

        	}
        }

        this.edtASCL_NAME_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCHXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXL_TEMP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASCHXM_SLIP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASCHXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.Div0.btnAPPL.addEventHandler("onclick", this.fn_AschEvent, this);
            this.Div0.btnCANC.addEventHandler("onclick", this.fn_AschEvent, this);
            this.Div0.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.Div0.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btnSaveSlipNumb.addEventHandler("onclick", this.fn_SaveSlipNumb, this);
            this.calSHRCHNG_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCHNG_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRCGN_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCHNG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_NAME.addEventHandler("oneditclick", this.edtASCL_NAME_oneditclick, this);
            this.mskACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_PRIC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCURR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCURR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskSLIP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCURR_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FSMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
