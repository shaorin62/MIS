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
                this.set_name("FAMA0020");
                this.set_titletext("부서별전표작성현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1041,534);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHREVID_ACPT</Col><Col id=\"CODEID\">FA39</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMK\">증빙제출구분</Col></Row><Row><Col id=\"CODEID\">FA39</Col><Col id=\"DSNAME\">dsEVID_ACPT</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">증빙제출구분</Col></Row><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"CODEID\">GO03</Col><Col id=\"DSNAME\">dsGW_STATUS</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">결재상태</Col></Row><Row><Col id=\"CODEID\">FC01</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">통화구분</Col></Row><Row><Col id=\"CODEID\">FC02</Col><Col id=\"DSNAME\">dsBANK_GUBN</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">은행</Col></Row><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"CODEID\">FA16</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMK\">전표종류</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAEX_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SELE_CHEK\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_PGBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_ACPT\" type=\"STRING\" size=\"8\"/><Column id=\"ACCT_GUB1\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GWST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FOCH_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FODA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCURR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGW_STATUS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEVID_ACPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRECE_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미접수</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">접수</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAPPR_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBANK_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREVID_ACPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSLIP_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("부서별전표작성현황");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLocation", "absolute", null, "0", "590", "29", "16", null, this);
            obj.set_text("재무관리>전표관리>전표처리>전표승인처리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_wordwrap("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "129", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "7", "60", null, "62", "11", null, this);
            obj.getSetter("radiusy").set("7");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "544", "68", "60", "22", null, null, this);
            obj.set_text("기표부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "606", "68", "76", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHRDEPT_CODE", "absolute", "683", "68", "22", "22", null, null, this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "706", "68", "112", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "821", "68", "60", "22", null, null, this);
            obj.set_text("증빙제출");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_ACPT", "absolute", "883", "68", "84", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("@dsSHREVID_ACPT");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static9", "absolute", "287", "68", "50", "22", null, null, this);
            obj.set_text("기표일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DTFR", "absolute", "338", "68", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static10", "absolute", "432", "68", "14", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DTTO", "absolute", "450", "68", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static11", "absolute", "287", "92", "50", "22", null, null, this);
            obj.set_text("승인일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DTFR", "absolute", "338", "92", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static12", "absolute", "432", "92", "14", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DTTO", "absolute", "450", "92", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static13", "absolute", "16", "92", "60", "22", null, null, this);
            obj.set_text("전표종류");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("edtSHRSLIP_GUBN", "absolute", "78", "92", "200", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("@dsSLIP_GUBN");
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static14", "absolute", "544", "92", "60", "22", null, null, this);
            obj.set_text("기표자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "606", "92", "76", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHREMPL_NUMB", "absolute", "683", "92", "22", "22", null, null, this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "706", "92", "112", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "821", "92", "60", "22", null, null, this);
            obj.set_text("승인여부");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "883", "92", "84", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsAPPR_YSNO");
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static6", "absolute", "8", null, "70", "22", null, "280", this);
            obj.set_text("전표번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "708", null, null, "20", "11", "280", this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "153", null, null, "8", "307", this);
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cellclickbound("control");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"86\"/><Column size=\"87\"/><Column size=\"294\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"기표일\"/><Cell col=\"1\" displaytype=\"text\" text=\"기표번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"기표부서\"/><Cell col=\"3\" displaytype=\"text\" text=\"기표자\"/><Cell col=\"4\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"증빙제출\"/><Cell col=\"7\" displaytype=\"text\" text=\"메모\"/><Cell col=\"8\" displaytype=\"text\" text=\"상태\"/><Cell col=\"9\" displaytype=\"text\" text=\"GW상태\"/><Cell col=\"10\" displaytype=\"text\" text=\"처리일\"/><Cell col=\"11\" displaytype=\"text\" text=\"처리자\"/><Cell col=\"12\" displaytype=\"text\" text=\"차변외화금액\"/><Cell col=\"13\" displaytype=\"text\" text=\"대변외화금액\"/><Cell col=\"14\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;\" text=\"bind:SLIP_DATE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_NUMB\" mask=\"@@-@@@@@@@@-@@@@\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"6\" celltype=\"none\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:EVID_ACPT\" combodataset=\"dsEVID_ACPT\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:MEMO_REMK\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:GW_STATUS\" combodataset=\"dsGW_STATUS\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:GWST_NAME\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left;\" text=\"bind:APPR_EMNM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FOCH_AMNT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FODA_AMNT\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TITL_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSLIP_PGBN", "absolute", "80", null, "130", "23", null, "280", this);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_enable("false");
            obj.set_mask("##-########-####");
            obj.set_taborder("13");
            obj.set_type("string");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "78", "68", "200", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Button("btnSearchSlip", "absolute", "212", null, "75", "22", null, "280", this);
            obj.set_taborder("14");
            obj.set_text("전표조회");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", null, null, "268", "8", "8", this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"42\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"행\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"2\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"비고\"/><Cell col=\"5\" displaytype=\"text\" text=\"자금일\"/><Cell col=\"6\" displaytype=\"text\" text=\"관리항목값1\"/><Cell col=\"7\" displaytype=\"text\" text=\"관리항목값2\"/><Cell col=\"8\" displaytype=\"text\" text=\"관리항목값3\"/><Cell col=\"9\" displaytype=\"text\" text=\"관리항목값4\"/><Cell col=\"10\" displaytype=\"text\" text=\"관리항목값5\"/><Cell col=\"11\" displaytype=\"text\" text=\"관리항목값6\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_LINE\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"5\" displaytype=\"date\" style=\"align: center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ1\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ2\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ3\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ4\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ5\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1041, 534, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서별전표작성현황");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("medSLIP_PGBN_value","medSLIP_PGBN","value","dsTA_SLIPXM","SLIP_NUMB");
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
        this.addIncludeScript("FAMA0105.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0105.xfdl", function() {
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
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sBUTTONLIST = 'TTFFFFTT'; //공통기능정의(버튼순으로 T or F)
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        } else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }
        this.sPACKAGENAME = 'FAMA0105'; //해당 Form에서 사용 할 Package 명
        this.gRow = 0;
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------+
         |  00.도움말 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_Help = function (obj)
        {
        }
        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	// 마스터가 없는 경우 디테일이 초기화 안된다.
        	// 조회전 클리어하고 조회한다.
        	this.dsTA_SLIPXM.clearData();
        	this.dsTA_SLIPNT.clearData();

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel("dsTA_SLIPXM,dsTA_SLIPNT"); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTA_SLIPXM.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	// trace(dsTA_SLIPXM.SaveXML());
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}
        	/*
        	 var sMethodName = "SAVE00";                        //서버에서 호출 될 Method 명
        	 var sInDataSet  = "dsTA_SLIPXM=dsTA_SLIPXM:U";     //자료 저장 시 보낼 DataSet 명칭
        	 var sOutDataSet = "";                              //조회 후 돌려 받을 DataSet 명칭
        	 var sArgument   = fn_CreateArgument(sMethodName);  //조회 시 넘길 Argument 생성
        	 
        	 fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	 grdTA_SLIPXM.setFocus();
        	 */
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	if (this.dsTA_SLIPXM.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "fama0105.jrf"; //Report File Name

        	// Parameter
        	if (!this.IsNull(this.calSHRSLIP_DTFR.value)) 
        	{
        		application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRSLIP_DTFR.value + "^";
        	}
        	else 
        	{
        		application.GBL_RPTARGUMENT = 'sArg001,' + this.dsTA_SLIPXM.getMin("SLIP_DATE") + "^";
        	}

        	if (!this.IsNull(this.calSHRSLIP_DTTO.value)) 
        	{
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + this.calSHRSLIP_DTTO.value + "^";
        	}
        	else 
        	{
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + this.fnc_GetServerDateTime("DATE") + "^";
        	}

        	if (!this.IsNull(this.edtSHRDEPT_CODE.value)) 
        	{
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + this.fnc_Trim(this.edtSHRDEPT_CODE.value) + "^";
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg004,' + this.fnc_Trim(this.edtSHRDEPT_NAME.value) + "^";
        	}

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_SLIPXM,dsGW_STATUS,dsEVID_ACPT";
        	application.GBL_PRINT = 'Y'; //미리보기 사이즈 120%

        	// Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("부서별전표작성현황", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	// 조회 기본값 설정
        	this.calSHRSLIP_DTFR.set_value(this.fnc_AddDate(this.fnc_GetServerDateTime("DATE"), -30));
        	this.calSHRSLIP_DTTO.set_value(this.fnc_GetServerDateTime("DATE"));

        	/* 메뉴 권한별 처리 */
        	if (this.sUSERLAVEL != '5') 
        	{
        		this.imgHelpSHRDEPT_CODE.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        		this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	}
        	else if (this.sUSERLAVEL == '5') 
        	{
        		this.imgHelpSHRDEPT_CODE.set_enable(true);
        		this.edtSHRDEPT_NAME.set_enable(true);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	}
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPXM",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }  
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("dsTA_SLIPXM", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if (e.keycode == 13) 
        	{
        		var oFocusComponent = this.getNextComponent(e.fromobject, true);
        		oFocusComponent.setFocus();
        		return;
        	}

        	// Control Key가 눌려져 있다면 단축키 처리
        	if (e.ctrlKey) 
        	{
        		this.fnc_HotKey(this, e.keycode);
        	}
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM")) 
        	{
        		// 수정 사항이 있으면, 신규 진행할지 묻는다. // TODO
        		if (!this.fnc_Message("M1023")) 
        		{
        			return false;
        		}
        		// 변경된 자료가 있습니다. 계속 진행하시겠습니까?
        	}

        
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	return true;
        	// Validation Check Sign Return
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //호출할 Package의 Method명
        		sReturnString += " SLIP_GUBN=" + this.fnc_Quote(this.edtSHRSLIP_GUBN.value); //호출할 Package의 Method명
        		sReturnString += " SLIP_DTFR=" + this.fnc_Quote(this.calSHRSLIP_DTFR.value); //호출할 Package의 Method명
        		sReturnString += " SLIP_DTTO=" + this.fnc_Quote(this.calSHRSLIP_DTTO.value); //호출할 Package의 Method명
        		sReturnString += " APPR_DTFR=" + this.fnc_Quote(this.calSHRAPPR_DTFR.value); //호출할 Package의 Method명
        		sReturnString += " APPR_DTTO=" + this.fnc_Quote(this.calSHRAPPR_DTTO.value); //호출할 Package의 Method명
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //호출할 Package의 Method명
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value); //호출할 Package의 Method명
        		sReturnString += " EVID_ACPT=" + this.fnc_Quote(this.cmbSHREVID_ACPT.value); //호출할 Package의 Method명
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value); //호출할 Package의 Method명
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, 'SLIP_NUMB')); //호출할 Package의 Method명
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTA_SLIPXM.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SEARCH01') 
        	{
        		this.fnc_Information(this.stInformation1, this.dsTA_SLIPNT.rowcount, "SHR"); //조회 결과 Display
        		this.dsTA_SLIPXM.set_rowposition(this.dsTA_SLIPXM.rowposition);
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 공통 코드 콤보를 가져오기
        		// trace(ds01.SaveXML());

        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHREVID_ACPT.set_index(0);
        		this.edtSHRSLIP_GUBN.set_index(0);
        		this.cmbSHRAPPR_YSNO.set_index(0);
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow)
        {
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	switch (obj.name) 
        	{
        		// 조회 조건의 부서 코드
        		case "imgHelpSHRDEPT_CODE":
        			if (this.edtSHRDEPT_NAME.enable == false) 
        			{
        				return;
        			}
        			// 수정 불가 시 처리 않음
        			sSearchKind = "DEPT01"; //Search Code(부서코드)
        			sInputValue = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //부서코드명
        			sCommonGubn = ""; //코드 구분
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRDEPT_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRDEPT_CODE.set_value(sResponse[0]); //부서코드
        				this.edtSHRDEPT_NAME.set_value(sResponse[1]); //부서코드명
        			}
        			break;

        			// 조회조건의 사원번호
        		case "imgHelpSHREMPL_NUMB":
        			if (this.edtSHREMPL_NAME.enable == false) 
        			{
        				return;
        			}
        			// 수정 불가 시 처리 않음
        			sSearchKind = "EMPL01"; //Search Code(사원번호)
        			sInputValue = this.fnc_Trim(this.edtSHREMPL_NAME.value); //사원명
        			sCommonGubn = "";
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHREMPL_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHREMPL_NUMB.set_value(sResponse[0]); //사원번호
        				this.edtSHREMPL_NAME.set_value(sResponse[1]); //성명
        			}
        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
        {
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (obj.name) 
        	{
        		// 조회조건 부서코드
        		case "edtSHRDEPT_NAME":
        			sSearchKind = "DEPT01";
        			application.GBL_REVOBJ1 = "edtSHRDEPT_CODE"; //부서코드
        			application.GBL_REVOBJ2 = "edtSHRDEPT_NAME"; //부서명
        			break;

        			// 조회조건 사원
        		case "edtSHREMPL_NAME":
        			sSearchKind = "EMPL01";
        			application.GBL_REVOBJ1 = "edtSHREMPL_NUMB"; //사원 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSHREMPL_NAME"; //사원 받을 Text Object명
        			break;
        	}

        
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn);
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	if (obj.getCellProperty("head", e.cell, "edittype") == "checkbox") 
        	{
        		// 
        	}
        	else 
        	{
        		// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        		this.fnc_GridSort(obj, this.all[obj.name], e.cell);
        	}
        }

        

        

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        /*===============================================================
         전표조회
         ===============================================================*/
        this.btnSearchSlip_OnClick = function (obj,e)
        {
        	var sSlipNumb = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, 'SLIP_NUMB');
        	var sGwxxStat = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, 'GW_STATUS');

        	this.fnc_PopSlipForm(sSlipNumb, "", this.sUSERLAVEL, sGwxxStat);
        }

        // 마스터 로우 변경시
        this.dsTA_SLIPXM_OnRowPosChanged = function (obj,e)
        {
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
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
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHREVID_ACPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DTFR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DTTO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DTFR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DTTO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.medSLIP_PGBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnSearchSlip.addEventHandler("onclick", this.btnSearchSlip_OnClick, this);

        };

        this.loadIncludeScript("FAMA0105.xfdl");
        this.loadPreloadList();
       
    };
}
)();
