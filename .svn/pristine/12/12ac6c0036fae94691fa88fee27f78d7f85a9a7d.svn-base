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
                this.set_name("FAMA0130");
                this.set_titletext("전표변경내역조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTH_CARMNG", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCURR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"CODEID\">FA14</Col><Col id=\"DSNAME\">dsACCT_GUB2</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">브랜드</Col></Row><Row><Col id=\"CODEID\">GO03</Col><Col id=\"DSNAME\">dsGW_STATUS</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">결재상태</Col></Row><Row><Col id=\"CODEID\">FC01</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMK\">통화구분</Col></Row><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"CODEID\">FA16</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">전표종류</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGW_STATUS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSLIP_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNTLOG", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_SEQX\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB2\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAM2\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAM3\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"WORK_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_EMPL\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_PGBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB1\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMPL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_DOCUNO\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_YEAR\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TABL_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DIFF_SLIP\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_FORI\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_APPRLOG", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_SEQN\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GW_STATUS\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLOGX_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SUBCODE\">I</Col><Col id=\"SUBNAME\">입력</Col></Row><Row><Col id=\"SUBCODE\">U</Col><Col id=\"SUBNAME\">수정</Col></Row><Row><Col id=\"SUBCODE\">D</Col><Col id=\"SUBNAME\">삭제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div0", "absolute", "8", "31", "349", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("전표변경내역조회");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "11", "288", "322", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNTLOG", "absolute", "8", "312", null, null, "8", "8", this);
            obj.set_binddataset("dsTA_SLIPNTLOG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"85\"/><Column size=\"135\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"No\"/><Cell col=\"1\" displaytype=\"text\" text=\"순번\"/><Cell col=\"2\" displaytype=\"text\" text=\"작업\"/><Cell col=\"3\" displaytype=\"text\" text=\"처리일\"/><Cell col=\"4\" displaytype=\"text\" text=\"변경자\"/><Cell col=\"5\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"6\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"8\" displaytype=\"text\" text=\"차변외화금액\"/><Cell col=\"9\" displaytype=\"text\" text=\"대변외화금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_LINE\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:LOGX_GUBN\" combodataset=\"dsLOGX_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:WORK_DATE\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:WORK_EMPL\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FORI_CHAX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FORI_DAEX\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_APPRLOG", "absolute", "639", "124", null, "159", "8", null, this);
            obj.set_binddataset("dsTA_APPRLOG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"No\"/><Cell col=\"1\" displaytype=\"text\" text=\"작업자\"/><Cell col=\"2\" displaytype=\"text\" text=\"작업일\"/><Cell col=\"3\" displaytype=\"text\" text=\"작업구분\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:APPR_DATE\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:GW_STATUS\" combodataset=\"dsGW_STATUS\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSLIPSearch", "absolute", "8", "32", "100", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_text("전표상세조회");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("52");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "16", null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("재무관리>전표관리>전표조회>전표변경내역조회");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "16", "68", "50", "22", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("기표일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_NUMB", "absolute", "298", "68", "163", "23", null, null, this);
            obj.set_taborder("56");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSlipNumb", "absolute", "229", "68", "22", "22", null, null, this);
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            obj.set_cssclass("styHelpPopup");
            obj.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDISP_NUMB", "absolute", "178", "68", "50", "23", null, null, this);
            obj.set_taborder("58");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "161", "67", "16", "22", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("-");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE", "absolute", "68", "68", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("shape2", "absolute", "8", "124", "624", "158", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "396", "128", "70", "23", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("작성시간");
            obj.set_cssclass("styFormItemCap");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit5", "absolute", "468", "128", "160", "23", null, null, this);
            obj.set_taborder("63");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit4", "absolute", "312", "128", "80", "23", null, null, this);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "238", "128", "72", "23", null, null, this);
            obj.getSetter("taborder").set("65");
            obj.set_text("최초작성자");
            obj.set_cssclass("styFormItemCap");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTITL_NAME", "absolute", "84", "153", "544", "23", null, null, this);
            obj.set_taborder("66");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit4", "absolute", "500", "253", "128", "23", null, null, this);
            obj.set_taborder("67");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit3", "absolute", "500", "228", "128", "23", null, null, this);
            obj.set_taborder("68");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit2", "absolute", "292", "253", "132", "23", null, null, this);
            obj.set_taborder("69");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit1", "absolute", "84", "253", "132", "23", null, null, this);
            obj.set_taborder("70");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit0", "absolute", "292", "228", "132", "23", null, null, this);
            obj.set_taborder("71");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSLIP_AMNT_FR", "absolute", "84", "228", "132", "23", null, null, this);
            obj.set_taborder("72");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSLIP_GUBN", "absolute", "83", "128", "156", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_innerdataset("dsSLIP_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");

            obj = new Edit("Edit23", "absolute", "468", "203", "160", "23", null, null, this);
            obj.set_taborder("74");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "396", "203", "70", "23", null, null, this);
            obj.getSetter("taborder").set("75");
            obj.set_text("승인부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3", "absolute", "312", "203", "80", "23", null, null, this);
            obj.set_taborder("76");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "240", "203", "70", "23", null, null, this);
            obj.set_taborder("77");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "183", "203", "55", "23", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.set_text("승인자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar2", "absolute", "84", "203", "95", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");

            obj = new Calendar("Calendar0", "absolute", "84", "178", "95", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");

            obj = new Static("Static21", "absolute", "12", "153", "70", "23", null, null, this);
            obj.getSetter("taborder").set("81");
            obj.set_text("제목");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "428", "253", "70", "23", null, null, this);
            obj.getSetter("taborder").set("82");
            obj.set_text("외화대차");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "428", "228", "70", "23", null, null, this);
            obj.getSetter("taborder").set("83");
            obj.set_text("원화대차");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "220", "253", "70", "23", null, null, this);
            obj.getSetter("taborder").set("84");
            obj.set_text("대변외화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "12", "253", "70", "23", null, null, this);
            obj.getSetter("taborder").set("85");
            obj.set_text("차변외화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "12", "228", "70", "23", null, null, this);
            obj.getSetter("taborder").set("86");
            obj.set_text("차변원화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "220", "228", "70", "23", null, null, this);
            obj.getSetter("taborder").set("87");
            obj.set_text("대변원화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit7", "absolute", "468", "178", "160", "23", null, null, this);
            obj.set_taborder("88");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit2", "absolute", "312", "178", "80", "23", null, null, this);
            obj.set_taborder("89");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "396", "178", "70", "23", null, null, this);
            obj.getSetter("taborder").set("90");
            obj.set_text("기표부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "240", "178", "70", "23", null, null, this);
            obj.set_taborder("91");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "183", "178", "55", "23", null, null, this);
            obj.getSetter("taborder").set("92");
            obj.set_text("기표자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "12", "128", "70", "23", null, null, this);
            obj.getSetter("taborder").set("93");
            obj.set_text("전표종류");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "12", "203", "70", "23", null, null, this);
            obj.getSetter("taborder").set("94");
            obj.set_text("회계일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "12", "178", "70", "23", null, null, this);
            obj.getSetter("taborder").set("95");
            obj.set_text("기표일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표변경내역조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Edit1_value","Edit1","value","dsTA_SLIPXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit2_value","Edit2","value","dsTA_SLIPXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit7_value","Edit7","value","dsTA_SLIPXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Calendar0_value","Calendar0","value","dsTA_SLIPXM","SLIP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Calendar2_value","Calendar2","value","dsTA_SLIPXM","APPR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit0_value","Edit0","value","dsTA_SLIPXM","APPR_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit3_value","Edit3","value","dsTA_SLIPXM","APPR_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit23_value","Edit23","value","dsTA_SLIPXM","APPR_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSLIP_PGBN_value","cmbSLIP_GUBN","value","dsTA_SLIPXM","SLIP_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSLIP_AMNT_FR_value","medSLIP_AMNT_FR","value","dsTA_SLIPXM","SLIP_CHAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit0_value","MaskEdit0","value","dsTA_SLIPXM","SLIP_DAEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit1_value","MaskEdit1","value","dsTA_SLIPXM","FORI_CHAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit2_value","MaskEdit2","value","dsTA_SLIPXM","FORI_DAEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit3_value","MaskEdit3","value","dsTA_SLIPXM","DIFF_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit4_value","MaskEdit4","value","dsTA_SLIPXM","DIFF_FORI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTITL_NAME_value","edtTITL_NAME","value","dsTA_SLIPXM","TITL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit4_value","Edit4","value","dsTA_SLIPXM","WORK_USID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit5_value","Edit5","value","dsTA_SLIPXM","WORK_DATE");
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
        this.addIncludeScript("FAMA0130.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0130.xfdl", function() {
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
        /* this.sBUTTONLIST = 'TTFFFFFT'; //공통기능정의(버튼순으로 T or F)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = '전표변경내역조회'; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = ''; //사용자 권한레벨
        this.sPACKAGENAME = 'erp.u.fam.a.ab.FAMA0130AB'; //해당 Form에서 사용 할 Package 명
        */
        this.sBUTTONLIST = 'TTFFFFFT'; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = 'FAMA0130AB'; //해당 Form에서 사용 할 Package 명
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
        this.sALLX_YSNO = '';
        this.sLoadForm = '';
        this.sSlipNumb = '';
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
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM dsTA_SLIPNTLOG=dsTA_SLIPNTLOG dsTA_APPRLOG=dsTA_APPRLOG";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNTLOG.setFocus(); //재 클릭 방지를 위해 Focus 이동
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
        	// fnc_DataSetCancel(dsTA_SLIPNT);    //취소 할 DataSet의 이름을 입력한다.
        	// grdTA_SLIPNTLOG.SetFocus();           //취소 후 Grid로 Focus
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
        	if (this.dsTA_SLIPNTLOG.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "fama0130.jrf"; //Report File Name

        
        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRSLIP_DATE.value + "-" + this.edtSHRDISP_NUMB.value + "^";

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_SLIPNTLOG,dsLOGX_GUBN";
        	application.GBL_PRINT = 'Y'; //미리보기 사이즈 120%

        	// Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("전표변경내역조회", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
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

        	// 팝업호출에 대한 파라메터를 셋팅한다.
        	this.fn_SetPopupArgument();

        	if (this.sLoadForm == 'SHR') 
        	{	
        		// 전표내역을 조회할때 사용
        		//this.st_FormLocation.text = "";
        		//this.st_FormLocation.set_text(""); //2014-10-31 : 팝업일때는 위치가 의미가 없다.
        		this.calSHRSLIP_DATE.set_value(this.fnc_SubStr(this.sSlipNumb, 2, 8));
        		this.edtSHRDISP_NUMB.set_value(this.fnc_SubStr(this.sSlipNumb, 10, 4));
        		this.edtSHRSLIP_NUMB.set_value(this.sSlipNumb);
        		this.fn_Search();
        		this.btnSLIPSearch.set_visible(false);
        	}

        	this.grdTA_SLIPNTLOG.setFocus();
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck(this.parent.dsTA_SLIPNT)) 
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("M1006");
        		return false;
        	}

        	return true;
        	// Validation Check Sign Return
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
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.edtSHRSLIP_NUMB.value); //호출할 Package의 Method명
        		sReturnString += " USERLAVEL=" + this.fnc_Quote(this.sUSERLAVEL); //유저레벨
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(application.GBL_DEPTCD); //부서코드
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
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNTLOG.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTA_SLIPNTLOG.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 공통 코드 콤보를 가져오기
        		// trace(ds01.SaveXML());
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
        	this.sALLX_YSNO = "Y";

        	trace(" fn_HelpDialoge : " + obj.name);

        	switch (obj.name) 
        	{
        		case "imgHelpSlipNumb":
        			// 전표번호 Popup

        			if (this.edtSHRDISP_NUMB.enable == false) 
        			{
        				return;
        			}

        			if (this.fnc_Length(this.calSHRSLIP_DATE.value) < 8) 
        			{
        				this.fnc_Message("M1005", "전표일자"); //Message 처리
        				this.calSHRSLIP_DATE.setFocus(); //해당 항목으로 Focus
        				return false;
        			}

        			var strName = "FAMA0015";
        			var strFormURL = "fam::FAMA0015.xfdl";
        			var strOpenStyle = "";
        			var nWidth = 793;
        			var nHeight = 590;
        			var nLeft = -1;
        			var nTop = -1;

        			var objArgumentList = {
        				refform : this, // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        				pSLIP_DATE : this.refform.calSHRSLIP_DATE.value,
        				pUSERLAVEL : this.refform.sUSERLAVEL,
        				pALLX_YSNO : this.refform.sALLX_YSNO,
        				pEMPL_NUMB : application.GBL_USERID,
        				pDEPT_CODE : ""
        			};

        			var sResponse = this.fnc_Dialog(strName, strFormURL, this, objArgumentList, nWidth, nHeight, strOpenStyle, nLeft, nTop);

        
        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRSLIP_NUMB.set_value(sResponse[0]); //전표 번호
        				this.edtSHRDISP_NUMB.set_value(this.fnc_SubStr(sResponse[0], 10, 4));
        				this.fn_Search(); //조회 태우기
        			}

        			break;
        	}
        }

        
        /*----------------------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +-----------------------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
        {
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	if (e.cell > 0) 
        	{
        		this.fnc_GridSort(obj, this.all[obj.name], e.cell);
        	}
        }

        /*----------------------------------------------------------------+
         |  // 조회 전표번호 |
         +-----------------------------------------------------------------*/

        this.edtSHRDISP_NUMB_onkillfocus = function (obj,e)
        {
        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("01" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        }

        /*-----------------------+
         |  전표상세조회 |
         +------------------------*/
        this.btnSLIPSearch_OnClick = function (obj,e)
        {
        	this.fnc_PopSlipForm(this.edtSHRSLIP_NUMB.value, "SHR", this.sUSERLAVEL);
        }

        

        /*-----------------------------------------+
         |  팦업으로 호출될때 변수를 셋팅한다.  |
         +-----------------------------------------*/
        this.fn_SetPopupArgument = function ()
        {
        	// trace( " pLoadForm : " + pLoadForm);
        	// trace( " pSlipNumb : " + pSlipNumb);

        	// 메인메뉴 트리에서 클릭시 하단 파라메터들이 설정 되어 있지 않아
        	// 오류가 발생한다.
        	// try 구문으로 오류 발생시 무시하도록 한다.
        	try 
        	{
        		if (this.pLoadForm != null) 
        		{
        			this.sLoadForm = this.pLoadForm;
        		}
        		if (this.pSlipNumb != null) 
        		{
        			this.sSlipNumb = this.pSlipNumb;
        		}
        	}
        	catch (e) 
        	{
        		trace(e.message);
        	}
        }

        
        /*----------------------------------------------------------------+
         |  // 조회 전표번호 |
         +-----------------------------------------------------------------*/

        this.edtSHRSLIP_DATE_onkillfocus = function (obj,e)
        {
        	// OnChanged는 키보드 입려시마다 발생된다.
        	// OnChanged -> onkillfocus 으로 변경
        	if (this.fnc_Trim(this.edtSHRDISP_NUMB.value) == "") 
        	{
        		return;
        	}

        	// sACCT_YEAR = fnc_SubStr(edtSHRSLIP_DATE.value,0,4);
        	// alert(sACCT_YEAR);
        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("10" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        }

        

        this.edtSHRDISP_NUMB_onkillfocus = function (obj,e)
        {
        	// OnChanged는 키보드 입려시마다 발생된다.
        	// OnChanged -> onkillfocus 으로 변경
        	if (this.fnc_Trim(this.edtSHRDISP_NUMB.value) == "") 
        	{
        		return;
        	}

        	this.edtSHRDISP_NUMB.set_value(this.fnc_LPad(this.edtSHRDISP_NUMB.value, "0", 4));
        	this.edtSHRSLIP_NUMB.set_value(("10" + this.calSHRSLIP_DATE.value + this.edtSHRDISP_NUMB.value));
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNTLOG.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.btnSLIPSearch.addEventHandler("onclick", this.btnSLIPSearch_OnClick, this);
            this.edtSHRSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSlipNumb.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDISP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDISP_NUMB.addEventHandler("onkillfocus", this.edtSHRDISP_NUMB_onkillfocus, this);
            this.calSHRSLIP_DATE.addEventHandler("onkillfocus", this.edtSHRSLIP_DATE_onkillfocus, this);
            this.Edit5.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit5.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Edit4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTITL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.MaskEdit4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.MaskEdit3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.MaskEdit2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.MaskEdit1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.MaskEdit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSLIP_AMNT_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit23.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit23.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Edit3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit3.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Edit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Calendar2.addEventHandler("onchanged", this.edtSHRDISP_NUMB_OnChanged, this);
            this.Calendar0.addEventHandler("onchanged", this.edtSHRDISP_NUMB_OnChanged, this);
            this.Edit7.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit7.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Edit2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit2.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Edit1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0130.xfdl");
        this.loadPreloadList();
       
    };
}
)();
