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
                this.set_name("FAMB0010");
                this.set_titletext("전표조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsAPPS_CODE</Col><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"REMK\">결재상태</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">EVID_ACPT</Col><Col id=\"DSNAME\">dsEVID_ACPT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">증빙제출구분</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPS_CODE</Col><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">승인여부</Col></Row><Row><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">통화구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHAX_FORI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAEX_FORI\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"SELE_CHEK\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"EVID_ACPT\" type=\"STRING\" size=\"8\"/><Column id=\"ACCT_UNIT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GWST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FOCH_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FODA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">전표종류</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0003</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HANG_AMNT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_GUBN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_GBNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_NUMB\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_DATE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_DATE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"EMPL_NUMB\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"EMPL_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TITL_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"APPR_EMPL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"APPR_EMNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_AMNT\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"HANG_AMNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTLD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_BFNMD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UPNMD\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNTD\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CSTC_CODED\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODED\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD1\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD2\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD3\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD4\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD5\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD6\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD6\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND6\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_NUMBD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTLC\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_BFNMC\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UPNMC\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNTC\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CSTC_CODEC\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODEC\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC1\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC2\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC3\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC4\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC5\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC6\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC6\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC6\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_NUMBC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "256", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "8", "60", null, "69", "25", null, this);
            obj.getSetter("radiusy").set("7");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "549", "71", "68", "21", null, null, this);
            obj.set_text("작성부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "722", "71", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("16");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "29", "71", "68", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "871", "71", "68", "21", null, null, this);
            obj.set_text("증빙제출");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "246", "71", "53", "21", null, null, this);
            obj.set_text("전표일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "406", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "246", "97", "53", "21", null, null, this);
            obj.set_text("회계일");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "406", "97", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "29", "97", "68", "21", null, null, this);
            obj.set_text("전표유형");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "549", "97", "68", "21", null, null, this);
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "722", "97", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("22");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "871", "97", "68", "21", null, null, this);
            obj.set_text("승인상태");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", null, "466", "70", "21", "230", null, this);
            obj.set_text("전표번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "470", null, "21", "923", null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "154", null, "302", "25", null, this);
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cellclickbound("control");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"55\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"230\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"전표일\"/><Cell col=\"2\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"작성부서\"/><Cell col=\"4\" displaytype=\"text\" text=\"작성자\"/><Cell col=\"5\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"제목\"/><Cell col=\"8\" displaytype=\"text\" text=\"증빙제출\"/><Cell col=\"9\" displaytype=\"text\" text=\"결재상태\"/><Cell col=\"10\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"11\" text=\"전표유형\"/><Cell col=\"12\" displaytype=\"text\" text=\"처리자\"/><Cell col=\"13\" displaytype=\"text\" text=\"차변외화금액\"/><Cell col=\"14\" displaytype=\"text\" text=\"대변외화금액\"/><Cell col=\"15\" displaytype=\"text\" text=\"메모\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;\" text=\"bind:SLIP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_NUMB\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TITL_NAME\"/><Cell col=\"8\" celltype=\"none\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:EVID_ACPT\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:APPS_CODE\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SLIP_GUBN\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: ;\" text=\"bind:APPR_EMNM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FOCH_AMNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FODA_AMNT\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:MEMO_REMK\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHAX_AMNT')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAEX_AMNT')\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('FOCH_AMNT')\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('FODA_AMNT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchSlip", "absolute", null, "466", "74", "21", "25", null, this);
            obj.set_taborder("26");
            obj.set_text("전표조회");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "491", null, null, "25", "15", this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"180\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"행\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"3\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"적요\"/><Cell col=\"6\" text=\"화폐\"/><Cell col=\"7\" text=\"환율\"/><Cell col=\"8\" text=\"차변외화\"/><Cell col=\"9\" text=\"대변외화\"/><Cell col=\"10\" displaytype=\"text\" text=\"자금일\"/><Cell col=\"11\" displaytype=\"text\" text=\"관리항목값1\"/><Cell col=\"12\" displaytype=\"text\" text=\"관리항목값2\"/><Cell col=\"13\" displaytype=\"text\" text=\"관리항목값3\"/><Cell col=\"14\" displaytype=\"text\" text=\"관리항목값4\"/><Cell col=\"15\" displaytype=\"text\" text=\"관리항목값5\"/><Cell col=\"16\" displaytype=\"text\" text=\"관리항목값6\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_LINE\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ACCT_INTL\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:CURR_GUBN\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXCH_RATE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_FORI\" mask=\"#,##0.#0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_FORI\" mask=\"#,##0.#0\"/><Cell col=\"10\" displaytype=\"date\" style=\"align: center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ1\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ2\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ3\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ4\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ5\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ6\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;CHAX_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DAEX_AMNT&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;CHAX_FORI&quot;)\" mask=\"#,##0.#0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DAEX_FORI&quot;)\" mask=\"#,##0.#0\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "699", "71", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "699", "97", "21", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE1", "absolute", "301", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calSHRSLIP_DATE2", "absolute", "420", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "301", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "420", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Combo("edtSHRSLIP_GUBN", "absolute", "97", "97", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "617", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPS_CODE", "absolute", "940", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "97", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "617", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_ACPT", "absolute", "940", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", null, "466", "130", "21", "101", null, this);
            obj.set_taborder("25");
            obj.set_type("string");
            obj.style.set_align("center");
            obj.set_tabstop("false");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("전표조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("33");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표처리 > 전표승인처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "456", "80", "35", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("44");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "120", "92", "102", "5", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "120", "118", "38", "10", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("mskSLIP_NUMB_value","mskSLIP_NUMB","value","dsTA_SLIPXM","SLIP_NUMB");
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
        this.addIncludeScript("FAMB0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMB0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMB0010.xfdl", function() {
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTTFFFTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMB0010";
        this.sSLIP_LIST     = "";      //리포트 선택

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 this.sUSERAUTH     = "";
        	 this.sFORMCAPTION  = "";
        	 this.sFORMLOCATION = "";
        	 this.sUSERLAVEL    = "";
        	 this.sCALLFROM 	= "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        	 this.sCALLFROM     = this.getOwnerFrame()["sCALLFROM"];	// 일반호출이면 공백(""), 대시보드에서 호출이면 "DASHBOARD"
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM, "SLIP_NUMB");
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRSLIP_DATE1.set_value(this.fnc_AddDate(sNowDate, -7));
        	this.calSHRSLIP_DATE2.set_value(sNowDate);
        	
        	this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, true);
        	this.fnc_SetReadonly(this.edtSHRDEPT_NAME, true);
        	this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        	this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	
        	if (this.sUSERLAVEL == "1") {
        		this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, false);
        		this.fnc_SetReadonly(this.edtSHRDEPT_NAME, false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	
        	} else if (this.sUSERLAVEL == "5") {
        		this.fnc_SetReadonly(this.imgHelpSHREMPL_NUMB, true);
        		this.fnc_SetReadonly(this.edtSHREMPL_NAME, true);
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		
        	}
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        	if (this.sCALLFROM == "DASHBOARD") {
        		this.cmbSHRAPPS_CODE.set_value("DISAPPROVE");	//미승인
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		this.calSHRSLIP_DATE1.set_value(this.fnc_SubStr(this.fnc_AddMonth(sNowDate, -5), 0, 6) + "01");
        		this.fn_Search();
        		
        	}

        }

         
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e){

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument	 = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
        	this.fnc_ViewSlipForm("", "NEW", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {
        	//기능없음
        }

        /*-----------------------+
         |  07. 저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

        	if (this.dsTA_SLIPXM.rowcount < 1) return this.fnc_Message("TMM141");
        	
        	this.sSLIP_LIST = "";
        	for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
        	
        		if (this.dsTA_SLIPXM.getColumn(i, "CHK") == "1") {
        			if (this.sSLIP_LIST != "") this.sSLIP_LIST += ",";                  
        			this.sSLIP_LIST += this.dsTA_SLIPXM.getColumn(i,"SLIP_NUMB");   
        		}
        		
        	}
        	
        	if (this.sSLIP_LIST == "") return this.fnc_Message("TMM021", "인쇄");
                
        	var reportfile 	= "/fam/FAMB0030R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/fam/FAMB0030_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsTA_SLIPXM_RPT=dsTA_SLIPXM_RPT dsTA_SLIPNT_RPT=dsTA_SLIPNT_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");

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
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);

        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

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
        this.fn_SaveItemCheck = function () {
        	//기능없음
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

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계구분
        		sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_GUBN.value)); //전표종류
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value));//전표시작일
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value));//전표종료일
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value));//승인시작일
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value));//승인종료일
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //작성부서
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //작성자
        		sReturnString += " EVID_ACPT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_ACPT.value)); //증빈제출
        		sReturnString += " APPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPS_CODE.value)); //승인통과

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="      	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " SLIP_NUMB="	+ this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB"));
        		
        	} else if (sKind == "PRINT00") {
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);		
        		sReturnString += " SLIP_LIST="  + this.fnc_Quote(this.sSLIP_LIST);
        		
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
        		this.grdTA_SLIPXM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_SLIPXM, "CHK"), "text", "0");

        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHREVID_ACPT,dsEVID_ACPT,0";
        			arrParam[2] = "COMBO,cmbSHRAPPS_CODE,dsSHRAPPS_CODE,0";
        			arrParam[3] = "GRID,grdTA_SLIPXM,dsEVID_ACPT,EVID_ACPT";
        			arrParam[4] = "GRID,grdTA_SLIPXM,dsAPPS_CODE,APPS_CODE";
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

        	}
        	
        }

        
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj){

         var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "";  
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } else if((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")){
           
        		arrParam[0] = "FAM0011";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
              
            }
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*===============================================================
         전표조회
         ===============================================================*/

        
        // 마스터 로우 변경시
        this.dsTA_SLIPXM_onrowposchanged = function(obj,e){
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	if (e.newrow == -1) return;
        		
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*===============================================================
         전표조회
         ===============================================================*/
        this.btnSearchSlip_OnClick = function(obj,e){

        	var sSlip_Numb = this.mskSLIP_NUMB.value;
        	if (this.fnc_Length(sSlip_Numb) > 0) this.fnc_ViewSlipForm(sSlip_Numb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	
        }

        this.grdTA_SLIPXM_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "SLIP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        }

        this.grdTA_SLIPXM_onheadclick = function(obj,e) {
        	var sCol = "CHK";
            if (obj.getBindCellIndex("body", sCol) == e.cell) {
        		this.fnc_GridAllCheck(obj, sCol);
        		this.dsTA_SLIPXM.applyChange();
        	}
        }

        this.dsTA_SLIPXM_oncolumnchanged = function(obj,e) {
        	
        	this.dsTA_SLIPXM.applyChange();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXM.addEventHandler("onrowposchanged", this.dsTA_SLIPXM_onrowposchanged, this);
            this.dsTA_SLIPXM.addEventHandler("oncolumnchanged", this.dsTA_SLIPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_oncelldblclick, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.btnSearchSlip.addEventHandler("onclick", this.btnSearchSlip_OnClick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.calSHRSLIP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVID_ACPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("oneditclick", this.mskSLIP_NUMB_oneditclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
