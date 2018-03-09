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
                this.set_name("FAMC0010");
                this.set_titletext("건별반제잔액현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBANK_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOND_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COND_NOXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">부문</Col></Row><Row><Col id=\"CODEID\">FC02</Col><Col id=\"DSNAME\">dsBANK_GUBN</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">은행</Col></Row><Row><Col id=\"CODEID\">FC01</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMK\">통화구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCURR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DISP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"BDIS_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLI_NUMB\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_SLIP\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_SLIP\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_FORI\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_FORI\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANM\" type=\"STRING\" size=\"256\"/><Column id=\"BAPP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBALA_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col></Row><Row><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">잔액 無</Col></Row><Row><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">잔액 有</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRX_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\">SHRX_GUBN</Col><Col id=\"SUBCODE\">INI</Col><Col id=\"SUBNAME\">2015년미결기준</Col></Row><Row><Col id=\"COMCODE\">SHRX_GUBN</Col><Col id=\"SUBCODE\">ORI</Col><Col id=\"SUBNAME\">2015년이전전표기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_UTTN\" type=\"STRING\" size=\"7\"/><Column id=\"MAST_OFFI\" type=\"STRING\" size=\"4\"/><Column id=\"MAST_OFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CLSE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OFAR_SQMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OFAR_PYNG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"5\"/><Column id=\"DEPT_CNTX\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT1", "absolute", "8", "162", null, null, "8", "205", this);
            obj.set_binddataset("dsTA_SLIPNT1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("currow");
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"230\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"2\" displaytype=\"text\" text=\"발생번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"기표일\"/><Cell col=\"4\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"5\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"반제금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"8\" displaytype=\"text\" text=\"관리항목\"/><Cell col=\"9\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:ACCT_INTL\" suppress=\"bind:ACCT_INTL\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" suppress=\"bind:ACCT_INTL\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DISP_NUMB\" mask=\"expr:comp.parent.lookupFunc(&quot;gfn_Decode&quot;).call(DISP_NUMB, null, '', '##-########-####-####')\" suppress=\"bind:DISP_NUMB\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OSLI_SLIP\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_SLIP\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COND_VANM\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "143", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT2", "absolute", "8", null, null, "167", "8", "8", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPNT2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("currow");
            obj.set_taborder("23");
            obj.set_tabstop("true");
            obj.set_autosizingtype("col");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"22\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"333\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"반제번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"반제회계일\"/><Cell col=\"3\" displaytype=\"text\" text=\"반제금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"반제적요\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\" mask=\"##-########-####-####\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "8", null, "80", "22", null, "179", this);
            obj.set_text("기표번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medDISP_NUMB", "absolute", "90", null, "140", "23", null, "179", this);
            obj.getSetter("binddataset").set("dsTA_SLIPNT1");
            obj.set_enable("false");
            obj.set_mask("##-########-####-####");
            obj.set_taborder("24");
            obj.set_type("string");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("건별반제잔액현황");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "492", "29", "16", null, this);
            obj.set_text("재무관리>건별반제>건별반제 잔액현황");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("13");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "62", "8", null, this);
            obj.getSetter("taborder").set("36");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME_TO", "absolute", "475", "92", "181", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgHelpSHRACCT_INTL_TO", "absolute", "452", "92", "22", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            obj.set_cssclass("styHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL_TO", "absolute", "381", "92", "70", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "360", "92", "14", "22", null, null, this);
            obj.getSetter("taborder").set("40");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSHRX_GUBN", "absolute", "821", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_value("INI");
            obj.set_text("2015년미결기준");
            obj.set_innerdataset("dsSHRX_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_index("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");

            obj = new Static("Static01", "absolute", "758", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("조회구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "478", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("43");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE_TO", "absolute", "541", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_tooltiptype("hover");

            obj = new Static("Static6", "absolute", "792", "92", "14", "22", null, null, this);
            obj.getSetter("taborder").set("45");
            obj.set_text("~");
            obj.set_visible("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE_FR", "absolute", "692", "92", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_visible("false");

            obj = new Edit("edtSHRACCT_NAME_FR", "absolute", "172", "92", "181", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgHelpSHRACCT_INTL", "absolute", "149", "92", "22", "22", null, null, this);
            obj.set_taborder("48");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            obj.set_cssclass("styHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL_FR", "absolute", "78", "92", "70", "22", null, null, this);
            obj.set_taborder("49");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "236", "68", "236", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@dsACCT_GUBN");
            obj.set_codecolumn("ACCT_GUBN");
            obj.set_datacolumn("OFFI_NAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "178", "68", "55", "22", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "16", "92", "60", "22", null, null, this);
            obj.getSetter("taborder").set("52");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "78", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건별반제잔액현황");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("medDISP_NUMB_value","medDISP_NUMB","value","dsTA_SLIPNT1","DISP_NUMB");
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
        this.addIncludeScript("FAMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMC0010.xfdl", function() {
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        // this.sBUTTONLIST = 'TTFFFFTF'; //공통기능정의(버튼순으로 T or F)
        // this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        // this.sFORMCAPTION = ''; //Form의 Title 정보
        // this.sFORMLOCATION = ''; //Form의 Location 정보
        // this.sUSERLAVEL = ''; //Form의 Location 정보
        // this.sPACKAGENAME = 'erp.u.fam.c.ab.FAMC0010AB'; //해당 Form에서 사용 할 Package 명
        this.sBUTTONLIST = 'TTFFFFTF'; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = 'FAMC0010'; //해당 Form에서 사용 할 Package 명
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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
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

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT1=dsTA_SLIPNT1 dsTA_SLIPNT2=dsTA_SLIPNT2 ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_SLIPNT2.setFocus(); //재 클릭 방지를 위해 Focus 이동
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
        	this.fnc_DataSetCancel(this.dsTA_SLIPNT2); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTA_SLIPNT2.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
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
        	// 기능없음.
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	//this.fnc_GridSetting(this.grdTA_SLIPNT1);
        	this.fnc_GridSetting(this);

        	for (var i = 0; i < this.grdTA_SLIPNT1.getCellCount("body"); i++ ) 
        	{
        		var styleObj = this.grdTA_SLIPNT1.getCellProperty("body", i, "style");
        		styleObj.background = "expr:DISP_GUBN == '2' ? '#d7f1eeff' : 'white'";
        		styleObj.background2 = "expr:DISP_GUBN == '2' ? '#d7f1eeff' : 'white'";
        	}

        	this.fnc_GetComboDs(this.dsCombo);

        	// fnc_GetBranch();      //사업장 콤보 조회
        	//this.fnc_GetComboDs_AcctGubn(this.dsACCT_GUBN); //사업장 구분 콤보

        	// calSHRAPPR_DATE_FR.value = fnc_AddDate(fnc_Today(), -90);
        	// calSHRAPPR_DATE_TO.value = fnc_Today();

        	this.calSHRAPPR_DATE_FR.set_value('20150101');
        	this.calSHRAPPR_DATE_TO.set_value(this.fnc_GetServerDateTime());

        	// cmbSHRBALA_YSNO.index = 2;

        	this.grdTA_SLIPNT2.setFocus();
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }
         
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if ((e.keycode == 13) && !(e.fromobject instanceof this.Grid)) 
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
        /*--------------------+
         |  조회 조건 체크!  |
         +---------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.

        	if (this.fnc_IsDate(this.calSHRAPPR_DATE_TO.value) == false) 
        	{
        		this.fnc_Message("M1005", "조회종료일자"); //Message 처리 후
        		this.calSHRAPPR_DATE_TO.setFocus(); //품의 일자
        		return false;
        		// False 반환
        	}

        
        	// if (fnc_Length(fnc_Trim(edtSHRACCT_INTL.value)) < 1) {
        	// fnc_Message("M1005", "계정과목");        //Message 처리
        	// edtSHRACCT_NAME.setFocus();
        	// return false;
        	// }

        	/* 2014-12-11 : jyh : 농심은 관리항목 없이 계정/전표 별 상계가 있다.
        	 if (fnc_Length(fnc_Trim(cmbSHRCOND_CODE.value))< 1) {
        	 fnc_Message("M1005","관리구분");         //Message 처리
        	 cmbSHRCOND_CODE.setFocus();
        	 return false;
        	 }
        	 */

        	return true;
        }

        /*--------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function ()
        {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
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
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote(this.cmbSHRACCT_GUBN.value); //호출할 Package의 Method명
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //호출할 Package의 Method명

        		// 계정과목
        		sReturnString += " ACCT_INTL_FR=" + this.fnc_Quote(this.edtSHRACCT_INTL_FR.value); //호출할 Package의 Method명

        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL_TO.value)) < 1) 
        		{
        			sReturnString += " ACCT_INTL_TO=" + this.fnc_Quote(this.edtSHRACCT_INTL_FR.value); //호출할 Package의 Method명
        		}
        		else 
        		{
        			sReturnString += " ACCT_INTL_TO=" + this.fnc_Quote(this.edtSHRACCT_INTL_TO.value); //호출할 Package의 Method명
        		}

        		// 기표일자
        		sReturnString += " APPR_DATE_FR=" + this.fnc_Quote(this.calSHRAPPR_DATE_FR.value); //호출할 Package의 Method명
        		sReturnString += " APPR_DATE_TO=" + this.fnc_Quote(this.calSHRAPPR_DATE_TO.value); //2014-12-31 : 조회 구분 추가
        		sReturnString += " SHRX_GUBN=" + this.fnc_Quote(this.cmbSHRSHRX_GUBN.value); //조회구분
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsTA_SLIPNT1.getColumn(this.dsTA_SLIPNT1.rowposition, 'SLIP_NUMB')); //호출할 Package의 Method명
        		sReturnString += " SLIP_LINE=" + this.fnc_Quote(this.dsTA_SLIPNT1.getColumn(this.dsTA_SLIPNT1.rowposition, 'SLIP_LINE')); //기표일자
        		sReturnString += " APPR_DATE_FR=" + this.fnc_Quote(this.calSHRAPPR_DATE_FR.value); //호출할 Package의 Method명
        		sReturnString += " APPR_DATE_TO=" + this.fnc_Quote(this.calSHRAPPR_DATE_TO.value); //2014-12-31 : 조회 구분 추가
        		sReturnString += " SHRX_GUBN=" + this.fnc_Quote(this.cmbSHRSHRX_GUBN.value); //조회구분
        	}
        	else if (sKind == 'SEARCH09') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //호출할 Package의 Method명
        		sReturnString += " APPR_DATE_FR=" + this.fnc_Quote(this.calSHRAPPR_DATE_FR.value); //호출할 Package의 Method명
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

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
        		if (this.dsTA_SLIPNT1.rowcount == 0) 
        		{
        			this.dsTA_SLIPNT2.clearData();
        		}
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT1.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTA_SLIPNT1.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SEARCH01') 
        	{
        	}
        	else if (sMethodName == 'SEARCH09') 
        	{
        		this.cmbSHRCOND_CODE.set_index(0);
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 공통 코드 콤보를 가져오기
        		this.dsCURR_GUBN.setColumn(0, "SUBREF1", "전체");

        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHRCURR_GUBN.set_index(0);
        	}
        	else if (sMethodName == "SEARCHAG") 
        	{
        		this.dsACCT_GUBN.insertRow(0);
        		this.dsACCT_GUBN.setColumn(0, "ACCT_GUBN", "");
        		this.dsACCT_GUBN.setColumn(0, "OFFI_NAME", "전체");
        		this.cmbSHRACCT_GUBN.set_index(0);
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        	else if (sMethodName == "GetBranch") 
        	{
        		// 사업장 콤보 가져오기
        		this.cmbSHRACCT_GUBN.set_index(0);
        	}
        }
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow)
        {
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sInputValue1 = "";
        	var sInputValue2 = "";
        	var sInputValue3 = "";
        	var sInputValue4 = "";
        	var sResponse;
        	var sACCT_YEAR = this.fnc_SubStr(this.calSHRAPPR_DATE_TO.value, 0, 4);

        	switch (obj.name) 
        	{
        		case "ImgHelpSHRACCT_INTL":
        			// 계정과목

        			sSearchKind = "ACCT05"; //사용자 코드 조회 POPUP
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRACCT_NAME_FR.value;
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME_FR); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL_FR.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME_FR.set_value(sResponse[1]); //계정명

        				// fn_Search01();
        			}

        			break;
        		case "ImgHelpSHRACCT_INTL_TO":
        			// 계정과목

        			sSearchKind = "ACCT05"; //사용자 코드 조회 POPUP
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRACCT_NAME_TO.value;
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME_TO); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL_TO.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME_TO.set_value(sResponse[1]); //계정명

        				// fn_Search01();
        			}

        			break;
        		case "ImgHelpSHRCOND_VACD":
        			// 관리항목

        			if (this.fnc_Length(this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COND_KIND")) < 3) 
        			{
        				return;
        			}

        			if (this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COND_KIND") == "COMB") 
        			{
        				sSearchKind = "COMM1";
        				sCommonGubn = this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COMB_IDXX"); //공통 구분 코드
        			}
        			else 
        			{
        				sSearchKind = this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COMB_IDXX");
        				sCommonGubn = ""; //공통 구분 코드
        			}

        			sInputValue = this.edtSHRCOND_VANM.value; //검색 조건 Text

        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRCOND_VANM); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRCOND_VACD.set_value(sResponse[0]); //관리항목코드
        				this.edtSHRCOND_VANM.set_value(sResponse[1]); //관리항목값
        			}

        			break;
        	}
        }

        
        /*----------------------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +-----------------------------------------------------------------*/
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
        	var sInputValue1 = "";
        	var sInputValue2 = "";
        	var sInputValue3 = "";
        	var sInputValue4 = "";
        	var sACCT_YEAR = this.fnc_SubStr(this.calSHRAPPR_DATE_TO.value, 0, 4);

        	switch (obj.name) 
        	{
        		case "edtSHRACCT_NAME_FR":
        			// 계정과목
        			sSearchKind = "ACCT05"; //계정 정보
        			sCommonGubn = sACCT_YEAR;
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL_FR"; //계정 코드 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACCT_NAME_FR"; //계정 명칭 Text Object명
        			break;
        		case "edtSHRACCT_NAME_TO":
        			// 계정과목
        			sSearchKind = "ACCT05"; //계정 정보
        			sCommonGubn = sACCT_YEAR;
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL_TO"; //계정 코드 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACCT_NAME_TO"; //계정 명칭 Text Object명
        			break;
        		case "edtSHRCOND_VANM":
        			// 관리항목

        			if (this.fnc_Length(this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COND_KIND")) < 3) 
        			{
        				return;
        			}
        			if (this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COND_KIND") == "COMB") 
        			{
        				sSearchKind = "COMM1";
        				sCommonGubn = this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COMB_IDXX"); //공통 구분 코드
        			}
        			else 
        			{
        				sSearchKind = this.dsCOND_CODE.getColumn(this.cmbSHRCOND_CODE.index, "COMB_IDXX");
        				sCommonGubn = ""; //공통 구분 코드
        			}

        			application.GBL_REVOBJ1 = "edtSHRCOND_VACD"; //예산세목코드 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRCOND_VANM"; //예산세목명칭 Text Object명

        			break;
        	}

        	// 조회 서비스 실횅
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1, sInputValue2, sInputValue3, sInputValue4);

        	switch (obj.name) 
        	{
        		case "edtSHRACCT_NAME":
        			// 계정과목
        			this.fn_Search01();
        			break;
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  기표번호 선택시 |
         +------------------------*/
        this.dsTA_SLIPNT1_OnRowPosChanged = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT2=dsTA_SLIPNT2 ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdTA_SLIPNT2.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  계정변경시 |
         +------------------------*/
        this.edtSHRACCT_INTL_OnChanged = function (obj,e)
        {
        	this.fn_Search01();
        }

        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, this.all[obj.name], e.cell);
        }
        /*-----------------------+
         | 관리구분콤보 조회 |
         +------------------------*/
        this.fn_Search01 = function (obj)
        {
        	// 조회 필수 입력 여부  체크

        	var sMethodName = "SEARCH09";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCOND_CODE=dsCOND_CODE ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdTA_SLIPNT2.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        this.cmbSHRCOND_CODE_OnKillFocus = function (obj,e)
        {
        	this.edtSHRCOND_VACD.set_value(""); //관리항목코드
        	this.edtSHRCOND_VANM.set_value(""); //관리항목값
        }

        /*-----------------------+
         |  잔액 세부현황 |
         +------------------------*/
        this.grdTA_SLIPNT1_OnCellDblClick = function (obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);

        	var sSLIP_NUMB = "";

        	if (columnName == "DISP_NUMB") 
        	{
        		// 발생번호
        		if (this.fnc_Length(this.dsTA_SLIPNT1.getColumn(e.row, "DISP_NUMB")) < 14) 
        		{
        			return;
        		}
        		sSLIP_NUMB = this.dsTA_SLIPNT1.getColumn(e.row, "DISP_NUMB");
        	}

        	if (this.fnc_Length(sSLIP_NUMB) == 0) 
        	{
        		return;
        	}

        	this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "");
        }

        /*-----------------------+
         |  잔액 세부현황 |
         +------------------------*/
        this.grdTA_SLIPNT2_OnCellDblClick = function (obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);

        	var sSLIP_NUMB = "";

        	if (columnName == "DISP_NUMB") 
        	{
        		// 반제번호
        		if (this.fnc_Length(this.dsTA_SLIPNT2.getColumn(e.row, "DISP_NUMB")) < 14) 
        		{
        			return;
        		}
        		sSLIP_NUMB = this.dsTA_SLIPNT2.getColumn(e.row, "DISP_NUMB");
        	}

        	if (this.fnc_Length(sSLIP_NUMB) == 0) 
        	{
        		return;
        	}

        	this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT1.addEventHandler("onrowposchanged", this.dsTA_SLIPNT1_OnRowPosChanged, this);
            this.dsACCT_GUBN.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNT1.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_SLIPNT1.addEventHandler("oncelldblclick", this.grdTA_SLIPNT1_OnCellDblClick, this);
            this.grdTA_SLIPNT2.addEventHandler("oncelldblclick", this.grdTA_SLIPNT2_OnCellDblClick, this);
            this.grdTA_SLIPNT2.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.medDISP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.ImgHelpSHRACCT_INTL_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSHRX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATE_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_FR.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.ImgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
