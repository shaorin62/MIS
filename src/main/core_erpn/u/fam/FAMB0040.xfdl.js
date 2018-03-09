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
                this.set_name("FAMB0040");
                this.set_titletext("전표승인관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHREVID_ACPT</Col><Col id=\"CODEID\">EVID_ACPT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">증빙제출조회</Col></Row><Row><Col id=\"CODEID\">EVID_ACPT</Col><Col id=\"DSNAME\">dsEVID_ACPT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">증빙제출그리드</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"DSNAME\">dsAPPS_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">결재상태</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"REMK\">승인여부</Col></Row><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">통화구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAX_FORI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAEX_FORI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SELE_CHEK\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_PGBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_ACPT\" type=\"STRING\" size=\"8\"/><Column id=\"ACCT_UNIT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GWST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GW_DOCUNO\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"FILECNT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"FILENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_RT2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_BFNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UPNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNTD\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNTC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPFILE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_DURL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTC_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"25\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"COMBOID\">FAM0003</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">전표종류(조회용)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape0", "absolute", "8", "205", null, "6", "10", null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", null, null, "261", "25", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"180\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"행\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"3\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"적요\"/><Cell col=\"6\" text=\"화폐\"/><Cell col=\"7\" text=\"환율\"/><Cell col=\"8\" text=\"차변외화\"/><Cell col=\"9\" text=\"대변외화\"/><Cell col=\"10\" displaytype=\"text\" text=\"자금일\"/><Cell col=\"11\" displaytype=\"text\" text=\"관리항목값1\"/><Cell col=\"12\" displaytype=\"text\" text=\"관리항목값2\"/><Cell col=\"13\" displaytype=\"text\" text=\"관리항목값3\"/><Cell col=\"14\" displaytype=\"text\" text=\"관리항목값4\"/><Cell col=\"15\" displaytype=\"text\" text=\"관리항목값5\"/><Cell col=\"16\" displaytype=\"text\" text=\"관리항목값6\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_LINE\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ACCT_INTL\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"6\" text=\"bind:CURR_GUBN\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXCH_RATE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_FORI\" mask=\"#,##0.#0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_FORI\" mask=\"#,##0.#0\"/><Cell col=\"10\" displaytype=\"date\" style=\"align: center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ1\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ2\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ3\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ4\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ5\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ6\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;CHAX_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DAEX_AMNT&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;CHAX_FORI&quot;)\" mask=\"#,##0.#0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DAEX_FORI&quot;)\" mask=\"#,##0.#0\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "24", null, this);
            obj.getSetter("radiusy").set("7");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "548", "71", "68", "21", null, null, this);
            obj.set_text("작성부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "616", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "721", "71", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "870", "71", "68", "21", null, null, this);
            obj.set_text("증빙제출");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_ACPT", "absolute", "938", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static9", "absolute", "245", "71", "65", "21", null, null, this);
            obj.set_text("전표일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE1", "absolute", "300", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static10", "absolute", "405", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE2", "absolute", "419", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static11", "absolute", "245", "97", "65", "21", null, null, this);
            obj.set_text("회계일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "300", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static12", "absolute", "405", "97", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "419", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Button("btn_RECEPROC", "absolute", "8", "200", "74", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("접수처리");
            obj.set_visible("false");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RECECANCEL", "absolute", "85", "200", "74", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("접수취소");
            obj.set_visible("false");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_text("전표유형");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Combo("edtSHRSLIP_GUBN", "absolute", "96", "97", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static1", "absolute", "548", "97", "68", "21", null, null, this);
            obj.set_text("작성자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "616", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "721", "97", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("26");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "870", "97", "68", "21", null, null, this);
            obj.set_text("승인상태");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPS_CODE", "absolute", "938", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", null, null, "70", "21", "576", "280", this);
            obj.set_text("전표번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", null, null, "40", "21", "322", "280", this);
            obj.set_text("메모");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEMO_REMK", "absolute", null, null, "294", "21", "25", "280", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_maxlength("100");
            obj.set_taborder("35");
            obj.set_tabstop("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", null, null, "21", "917", "276", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "154", null, null, "25", "311", this);
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cellclickbound("control");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"81\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"95\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"205\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"승인상태\"/><Cell col=\"2\" displaytype=\"text\" text=\"전표일\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"회계일\"/><Cell col=\"4\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"전표제목\"/><Cell col=\"6\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"8\" displaytype=\"text\" text=\"작성부서\"/><Cell col=\"9\" displaytype=\"text\" text=\"작성자\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"증빙제출\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"메모\"/><Cell col=\"12\" text=\"전표유형\"/><Cell col=\"13\" displaytype=\"text\" text=\"처리자\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"expr:Eco.decode(APPS_CODE, &quot;1&quot;, &quot;normal&quot;, &quot;2&quot;, &quot;normal&quot;, &quot;4&quot;, &quot;normal&quot;, &quot;checkbox&quot;)\" edittype=\"expr:Eco.decode(APPS_CODE, &quot;1&quot;, &quot;none&quot;, &quot;2&quot;, &quot;none&quot;, &quot;4&quot;, &quot;none&quot;, &quot;checkbox&quot;)\" style=\"align: center;\" text=\"bind:SELE_CHEK\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:APPS_CODE\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:SLIP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"expr:Eco.decode(APPS_CODE, 'FA1', 'none', 'date')\" style=\"align:center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_NUMB\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TITL_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"10\" celltype=\"none\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:EVID_ACPT\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:MEMO_REMK\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SLIP_GUBN\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:center;\" text=\"bind:APPR_EMNM\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"align:center;\" text=\"합    계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;CHAX_AMNT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DAEX_AMNT&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_PGBN", "absolute", null, null, "130", "21", "447", "280", this);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_taborder("33");
            obj.set_type("string");
            obj.style.set_align("center middle");
            obj.set_cssclass("msk_MF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "168", "35", "93", "21", null, null, this);
            obj.set_text("회계처리일");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCT_DATE", "absolute", "249", "35", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_visible("false");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Button("btnSearchSlip", "absolute", null, null, "74", "21", "371", "280", this);
            obj.set_taborder("34");
            obj.set_text("전표조회");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_APPRPROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("승인처리 ");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_APPRCANCEL", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("승인취소");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint02", "absolute", "349", "35", "74", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("증빙인쇄");
            obj.set_visible("false");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "698", "71", "21", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "698", "97", "21", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("전표승인관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("43");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표처리 > 전표승인관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("44");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "554", "0", "32", "60", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "624", "56", "128", "4", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("52");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "362", "129", "80", "25", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "216", "61", "40", "67", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("57");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "159", "35", "20", "25", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "362", "406", "80", "35", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "435", "216", "6", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("61");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "965", "406", "134", "10", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표승인관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Edit1_value","edtMEMO_REMK","value","dsTA_SLIPXM","MEMO_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskSLIP_PGBN_value","mskSLIP_PGBN","value","dsTA_SLIPXM","SLIP_NUMB");
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
        this.addIncludeScript("FAMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0040.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMB0040";

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
        	
        	//전표번호mask
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM,"SLIP_NUMB");
        	this.fnc_FormatSlipNumber(this.mskSLIP_PGBN);
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	
        	this.calSHRSLIP_DATE1.set_value(this.fnc_AddDate(sNowDate, -21));
        	this.calSHRSLIP_DATE2.set_value(sNowDate);
        	this.calACCT_DATE.set_value(sNowDate);
        	this.cmbSHRAPPS_CODE.set_index(1);
        	
        	this.cmbSHRACCT_UNIT.setFocus();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e) {
         
        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_DataSetCancel("dsTA_SLIPXM,dsTA_SLIPNT");
        	this.grdTA_SLIPXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

        	if (!this.fn_SaveItemCheck()) return;
        		
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTA_SLIPXM=dsTA_SLIPXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {

        	this.fnc_ToExcel(this.name);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPXM,dsTA_SLIPNT", this);
        		
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

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	if(this.fnc_Length(this.cmbSHRACCT_UNIT.text) < 1 ) {
        		return this.fnc_SearchCheckPostAction("TMM008", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표시작일자", this.calSHRSLIP_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표종료일자", this.calSHRSLIP_DATE2);
        	}

        	if (this.calSHRSLIP_DATE1.value > this.calSHRSLIP_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "전표시작일자,전표종료일자", this.calSHRSLIP_DATE2);
        	}

        	return true;

        }

        
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
        		
        		if (this.dsTA_SLIPXM.getRowType(this.dsTA_SLIPXM.rowposition) == Dataset.ROWTYPE_NORMAL) continue;
        				
        	}
        	
        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); 
        		sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_GUBN.value)); 
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value));
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value));
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); 
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); 
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EVID_ACPT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_ACPT.value)); 
        		sReturnString += " APPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPS_CODE.value)); 

        	} else if (sKind == "SEARCH01") {

        		sReturnString = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")); 
        	
        	} else if (sKind == "APPRPROC00") {
        		
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_DATE="  + this.fnc_Quote(this.fnc_Trim(this.calACCT_DATE.value));
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); 
        		sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_GUBN.value)); 
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value)); 
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value)); 
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); 
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); 
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EVID_ACPT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_ACPT.value)); 
        		sReturnString += " APPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPS_CODE.value)); 
        	
        	} else if (sKind == "APPRPROC01") {
        		
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_DATE="  + this.fnc_Quote(this.fnc_Trim(this.calACCT_DATE.value));
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); 
        		sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_GUBN.value)); 
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value)); 
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value)); 
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); 
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); 
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EVID_ACPT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_ACPT.value)); 
        		sReturnString += " APPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPS_CODE.value)); 

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 

        	} else if (sKind == "SAVE01") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 

        	} else if (sKind == "PRINT02") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); //sReturnString += " GW_DOCUNO="  	+ gfn_Quote(dsTA_SLIPXM.getColumn(dsTA_SLIPXM.rowposition,'GW_DOCUNO'));		//

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

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdTA_SLIPXM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_SLIPXM, "SELE_CHEK"), "text", "0");
        		
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        // 		//선택 초기화
        // 		for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
        // 			this.dsTA_SLIPXM.setColumn(i, "SELE_CHEK", 0);
        // 		}
        // 		this.dsTA_SLIPXM.applyChange();
        		
        	} else if (sMethodName == "SAVE01")  {
        		
        	} else if (sMethodName == "APPRPROC00") {
               
                this.fnc_Message("TMM300", "승인처리가 완료되었습니다.");
                this.fn_Search();

        	} else if (sMethodName == "APPRPROC01") {

        		this.fnc_Information(this.stInformation1, this.dsTA_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsTA_SLIPXM.set_enableevent(false);
        		this.dsTA_SLIPXM.set_rowposition(this.gRow);
        		this.dsTA_SLIPXM.set_enableevent(true);
        		
        		this.fnc_Message("TMM300", "승인취소 처리가 완료되었습니다.");
                this.fn_Search();
        		this.grdTA_SLIPXM.setFocus();

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHREVID_ACPT,dsSHREVID_ACPT,0";
        			arrParam[2] = "GRID,grdTA_SLIPXM,dsAPPS_CODE,APPS_CODE";
        			arrParam[3] = "COMBO,cmbSHRAPPS_CODE,dsSHRAPPS_CODE,0";
        			arrParam[4] = "GRID,grdTA_SLIPXM,dsEVID_ACPT,EVID_ACPT";
        			arrParam[5] = "GRID,grdTA_SLIPNT,dsCURR_GUBN,CURR_GUBN";

        		this.fnc_CommonCodeInnerBind(arrParam);

        		var nRow = this.dsSHRAPPS_CODE.insertRow(1);
        		this.dsSHRAPPS_CODE.setColumn(nRow, "COMD_CODE", "DISAPPROVE");
        		this.dsSHRAPPS_CODE.setColumn(nRow, "COMD_CDNM", "<미승인>");

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,edtSHRSLIP_GUBN,dsSLIP_GUBN,0";
        			arrParam[1] = "GRID,grdTA_SLIPXM,dsSLIP_GUBN,SLIP_GUBN";
        		this.fnc_UserComboInnerBind(arrParam);

        	} else if (sMethodName == "PRINT02") {

        		trace(this.dsTA_SLIPNT_RT2.saveXML());
        		trace(this.dsTA_SLIPFILE.saveXML());

        		// File Location & File Name
        		application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        		application.GBL_RPTFILENAME = "fama0010r3.jrf"; //Report File Name

        		// 가로출력물 여부
        		application.GBL_PRINT = "Y";

        		// Dataset
        		application.GBL_RPTDATASET = 'dsTA_SLIPXM_RPT,dsTA_SLIPNT_RT2,dsTA_SLIPFILE';

        		// Parameter
        		application.GBL_RPTARGUMENT = '';
        		application.GBL_RPTARGUMENT += 'G1,' + this.dsTA_SLIPXM.getColumn(0, "SLIP_NUMB") + ' ^';
        		application.GBL_RPTARGUMENT += 'G2,' + this.dsTA_SLIPXM.getColumn(0, "ACCT_DATE") + ' ^';
        		application.GBL_RPTARGUMENT += 'G3,' + this.dsTA_SLIPXM.getColumn(0, "ACCT_GUBN") + ' ' + this.dsTA_SLIPXM.getColumn(0, "ACCT_NAME") + ' ^';
        		application.GBL_RPTARGUMENT += 'G4,' + this.dsTA_SLIPXM.getColumn(0, "DEPT_NAME") + ' ^';
        		application.GBL_RPTARGUMENT += 'G5,' + this.dsTA_SLIPXM.getColumn(0, "EMPL_NAME") + ' ^';
        		application.GBL_RPTARGUMENT += 'G6,' + this.dsTA_SLIPXM.getColumn(0, "TITL_NAME") + ' ^';

        		// Dialog Option List
        		var strOpenStyle = "resizable=true openalign='center middle' ";

        		// Report Viewer Call
        		application.dialog("증빙서", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        	}

        }

        
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow) {
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        	var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } else if((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
           
        		arrParam[0] = "FAM0011";                                
                arrParam[1] = "1";
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
              
            }
           
        }

        /*===============================================================
         접수 체크
         ===============================================================*/
        this.fn_RECECheck = function (Mode) {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) {

        		this.fnc_Message("TMM003");
        		return false;

        	}

        	if (Mode == "PROC") {

        		for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {

        			if (this.dsTA_SLIPXM.getColumn(i, 'SELE_CHEK') != '0') {

        				if (this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE') == "GO030090") {

        					this.fnc_Message("TMM125", "임시전표는 처리할수 없습니다.");
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}
        				
        				if (this.dsTA_SLIPXM.getColumn(i, 'CHAX_AMNT') != this.dsTA_SLIPXM.getColumn(i, 'DAEX_AMNT')) {

        					this.fnc_Message("TMM125", "차대변 금액이 맞지 않습니다."); //Message 처리
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}

        				if (this.fnc_Length(this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE')) > 7) {

        					this.fnc_Message("FA1015");
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}

        				if (this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE') == 'GO030001' || this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE') == 'GO030006') {

        					this.fnc_Message("FA1015");
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}
        			}
        		}

        		if (!this.fnc_Message("M1091", "접수")) return false;
        		
        	} else {

        		for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {

        			if (this.dsTA_SLIPXM.getColumn(i, 'SELE_CHEK') != '0') {

        				if (this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE') == 'GO030006') {

        					this.fnc_Message("FA1015");
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}

        				if (this.dsTA_SLIPXM.getColumn(i, 'APPS_CODE') != 'GO030003') {

        					this.fnc_Message("TMM125", "접수처리 자료만 취소 가능합니다.");
        					this.dsTA_SLIPXM.set_rowposition(i);
        					return false;

        				}

        			}

        		}

        		if (!this.fnc_Message("M1091", "접수취소")) return false;
        	}

        	return true;

        }

        /*===============================================================
         승인 체크
         ===============================================================*/
        this.fn_APPRCheck = function (Mode) {

        	if (!this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) {
        		this.fnc_Message("PCM001");
        		return false;
        	}
        	
        	if (this.dsTA_SLIPXM.getCaseCount("SELE_CHEK == 1") < 1) {
        		this.fnc_Message("TMM300", " 처리대상을 선택하십시요.");
        		return false;
        	}

        	return true;

        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
          //그리드 해더 체크박스 클릭 이벤트
        this.grdTA_SLIPXM_onheadclick = function (obj,e) {
        	
        // 	var sCol = "SELE_CHEK";
        // 	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        // 	
        // 	
        // 	Eco.decode(APPS_CODE, 1, "text", 2, "text", "checkbox")
        	
        	var sCol = "SELE_CHEK";
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", sCol)) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	/* Dataset에 Value 일괄 설정 */
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sApps_Code = this.fnc_Trim(objDataSet.getColumn(i, "APPS_CODE"));

        		if (sApps_Code != "1" && sApps_Code != "2" && sApps_Code != "4") {
        			objDataSet.setColumn(i, sCol, iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}

        }
        /*==============================================================
         승인처리
         ===============================================================*/
        this.btn_APPRPROC_OnClick = function (obj,e) {
              
        	this.dsTA_SLIPXM.set_enableevent(false);
        	//this.dsTA_SLIPXM.set_updatecontrol(false);
        	for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {
        		if (this.dsTA_SLIPXM.getColumn(i, "SELE_CHEK") == "1") { 
        			this.dsTA_SLIPXM.setColumn(i, "APPR_EMPL", this.fnc_Trim(application.GBL_EMPLNO));
        		}
        	}
        	//this.dsTA_SLIPXM.set_updatecontrol(true);
        	this.dsTA_SLIPXM.set_enableevent(true);

        	if (!this.fn_APPRCheck("PROC")) return;
        	
        	if (!this.fnc_Message("TMM061", "승인")) return; 

        	this.gRow = this.dsTA_SLIPXM.rowposition;

        	var sMethodName = "APPRPROC00";
        	var sInDataSet 	= "dsTA_SLIPXM=dsTA_SLIPXM:U";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();

        }
        /*===============================================================
         승인취소
         ===============================================================*/
        this.btn_APPRCANCEL_OnClick = function (obj,e) {
        	
        	this.dsTA_SLIPXM.set_enableevent(false);
        	//this.dsTA_SLIPXM.set_updatecontrol(false);
        	for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {
        		if (this.dsTA_SLIPXM.getColumn(i, "SELE_CHEK") == "1") {
        			this.dsTA_SLIPXM.setColumn(i, "APPR_EMPL", this.fnc_Trim(application.GBL_EMPLNO));
        		}
        	}
        	//this.dsTA_SLIPXM.set_updatecontrol(true);
        	this.dsTA_SLIPXM.set_enableevent(true);
        	
        	if (!this.fn_APPRCheck("CANCEL")) return;
        	
        	if (!this.fnc_Message("TMM061", "승인취소를")) return;
        	
        	this.gRow = this.dsTA_SLIPXM.rowposition;

        	var sMethodName = "APPRPROC01";
        	var sInDataSet 	= "dsTA_SLIPXM=dsTA_SLIPXM:U";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();

        }

        /*===============================================================
         전표조회
         ===============================================================*/
        this.btnSearchSlip_OnClick = function (obj,e) {

        	var sSlipNumb = this.mskSLIP_PGBN.value;
        	if (this.fnc_Length(sSlipNumb) > 0) this.fnc_ViewSlipForm(sSlipNumb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표

        }

        // 마스터 로우 변경시
        this.dsTA_SLIPXM_OnRowPosChanged = function (obj,e) {

        	if (e.newrow == -1) return;
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();

        }

        this.btnPrint02_onclick = function (obj,e) {

        	var strSlip_Numb = "";
        	strSlip_Numb = new Array();
        	var strGw_Docuno = "";
        	strGw_Docuno = new Array();
        	var query1 = "";
        	var query2 = "";
        	var chkcnt = 0;

        	for (var i=0; i < this.dsTA_SLIPXM.rowcount; i++) {

        		if (this.dsTA_SLIPXM.getColumn(i, "SELE_CHEK") == '1') {

        			chkcnt = chkcnt + 1;
        		}

        		if (this.grdTA_SLIPXM.getCellValue(i, 0) == "1") {

        			strSlip_Numb.getSetter(i).set(this.grdTA_SLIPXM.getCellValue(i, 2));
        			query1 += strSlip_Numb[i] + ",";

        			strGw_Docuno.getSetter(i).set(this.dsTA_SLIPXM.getColumn(i, "GW_DOCUNO"));
        			query2 += strGw_Docuno[i] + ",";

        		}

        	}

        	if (chkcnt == 0) {

        		this.fnc_Message("TMM011");
        		return;

        	}

        	query1 = query1.substr(0, query1.length - 1);
        	trace("[증빙인쇄] 전표번호 : " + query1);
        	query2 = query2.substr(0, query2.length - 1);
        	trace("[증빙인쇄] 결재문서 : " + query2);

        	this.dsTA_SLIPNT_RT2.clearData(); //증빙서 - 분개내역
        	this.dsTA_SLIPFILE.clearData(); //증빙서 - 증빙내역

        	var sMethodName = "PRINT02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPXM_RPT=dsTA_SLIPXM_RPT dsTA_SLIPNT_RT2=dsTA_SLIPNT_RT2 dsTA_SLIPFILE=dsTA_SLIPFILE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        		sArgument  += " SLIP_NUMBS=" + query1; //전표번호
        		sArgument  += " GW_DOCUNOS=" + query2; //전자결재ID

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();

        }

        this.grdTA_SLIPXM_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "SLIP_NUMB") return;
        	
        	var sSlipNumb = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0) {
        		this.fnc_ViewSlipForm(sSlipNumb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXM.addEventHandler("onrowposchanged", this.dsTA_SLIPXM_OnRowPosChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHREVID_ACPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_RECEPROC.addEventHandler("onclick", this.btn_RECEPROC_OnClick, this);
            this.btn_RECECANCEL.addEventHandler("onclick", this.btn_RECECANCEL_OnClick, this);
            this.edtSHRSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRAPPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEMO_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_oncelldblclick, this);
            this.mskSLIP_PGBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calACCT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnSearchSlip.addEventHandler("onclick", this.btnSearchSlip_OnClick, this);
            this.btn_APPRPROC.addEventHandler("onclick", this.btn_APPRPROC_OnClick, this);
            this.btn_APPRCANCEL.addEventHandler("onclick", this.btn_APPRCANCEL_OnClick, this);
            this.btnPrint02.addEventHandler("onclick", this.btnPrint02_onclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
