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
                this.set_name("TXMB0030");
                this.set_titletext("증빙 및 적요 수정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHREVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">증빙서류</Col></Row><Row><Col id=\"DSNAME\">dsEVID_DOCU_INPUT</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMK\">증빙서류(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsVATX_GUBN_INPUT</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">매입매출(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE_INPUT</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">부가세종류(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN_INPUT</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">부가세유형(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsBULG_GUBN_INPUT</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">불공제세주(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsEBIL_GUBN_INPUT</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">전자발행(일괄)</Col></Row><Row><Col id=\"DSNAME\">dsEBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsBULG_GUBN</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"34\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"USEX_DEPT\" size=\"10\" type=\"STRING\"/><Column id=\"USEX_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"10\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"EBIL_GUBN\" size=\"1\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"50\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATMAT1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EVID_DOCU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP1_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATMAT2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EVID_DOCU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP1_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBU_TYP2_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "286", "208", "20", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("24");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "306", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("body");
            obj.set_taborder("23");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"138\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"81\" band=\"left\"/><Column size=\"81\" band=\"left\"/><Column size=\"175\"/><Column size=\"94\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"81\"/><Column size=\"120\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"4\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"7\" displaytype=\"text\" text=\"카드번호\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"적요\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"증빙\"/><Cell col=\"10\" displaytype=\"text\" text=\"매입매출\"/><Cell col=\"11\" displaytype=\"text\" text=\"부가세종류\"/><Cell col=\"12\" displaytype=\"text\" text=\"부가세유형\"/><Cell col=\"13\" displaytype=\"text\" text=\"불공제세부\"/><Cell col=\"14\" displaytype=\"text\" text=\"전자발행여부\"/><Cell col=\"15\" displaytype=\"text\" text=\"거래처\"/><Cell col=\"16\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"17\" displaytype=\"text\" text=\"계정과목코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DISP_NUMB\" mask=\"expr:comp.parent.fnc_Length(DISP_NUMB) &lt; 1 ? &quot;&quot; : &quot;##-########-####-####&quot;\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:USEX_NAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'D', SLIP_AMNT, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'C', SLIP_AMNT, 0)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SUPP_AMNT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CARD_NUMB\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:#d7f1eeff;background2:#d7f1eeff;\" text=\"bind:REMK_NAME\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background:#d7f1eeff;background2:#d7f1eeff;\" text=\"bind:EVID_DOCU\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATX_GUBN\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATX_TYPE\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PURC_GUBN\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BULG_GUBN\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EBIL_GUBN\"/><Cell col=\"15\" displaytype=\"combo\" edittype=\"combo\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CUST_NAME\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BIZR_RGNB\" mask=\"expr:BIZR_RGNB == '' ? '' : '###-##-#####'\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_INTL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "121", "25", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "858", "71", "14", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "685", "71", "76", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회계일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRREMK_NAME", "absolute", "96", "149", "225", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "149", "76", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("적요");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_NUMB", "absolute", "96", "123", "225", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "123", "76", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "350", "123", "91", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJSAE_NUMB", "absolute", "436", "123", "80", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJSAE_NAME", "absolute", "541", "123", "115", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "858", "123", "115", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "753", "123", "80", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "685", "123", "76", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NAME", "absolute", "201", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NUMB", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "541", "97", "115", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "436", "97", "80", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("staDETL_CODE", "absolute", "350", "97", "91", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_DOCU", "absolute", "753", "97", "220", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static15", "absolute", "685", "97", "76", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("증빙서류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "541", "71", "14", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "350", "71", "91", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("기표일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "225", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static4", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCARD_NUMB", "absolute", "178", "97", "21", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCUST_CODE", "absolute", "518", "97", "21", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRJSAE_NUMB", "absolute", "518", "123", "21", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INTL", "absolute", "835", "123", "21", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "216", null, "65", "25", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", null, "189", "74", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("일괄변경");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEBIL_GUBN", "absolute", "645", "251", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static11", "absolute", "564", "251", "75", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("전자발행");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBULG_GUBN", "absolute", "375", "251", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbPURC_GUBN", "absolute", "109", "251", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static14", "absolute", "298", "251", "75", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("불공제세부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "28", "251", "75", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("부가세유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVATX_TYPE", "absolute", "645", "225", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static37", "absolute", "564", "225", "75", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("부가세종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVATX_GUBN", "absolute", "375", "225", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static32", "absolute", "298", "225", "75", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVID_DOCU", "absolute", "109", "225", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static10", "absolute", "28", "225", "75", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("증빙서류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "873", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "753", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSLIP_DATE2", "absolute", "556", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSLIP_DATE1", "absolute", "436", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static00", "absolute", "573", "281", "80", "25", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "321", "61", "40", "67", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "437", "61", "38", "10", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "437", "92", "102", "5", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "437", "118", "102", "5", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "437", "144", "102", "5", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "437", "170", "38", "10", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("63");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "181", "80", "35", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("66");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "656", "61", "40", "67", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "229", "30", "35", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "195", "209", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("일괄변경항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_text("증빙 및 적요 수정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("71");
            obj.set_text("홈 > 재무관리 > 세무회계 > 부가세대사관리 > 증빙 및 적요 수정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("72");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증빙 및 적요 수정");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TXMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMB0030 증빙 및 적요 수정
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2016.08.04		안윤준		수정
         *   2016.08.09		오혜성		FR,TO,S,E 수정
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
        this.sBUTTONLIST 	= "TTFFTTTF";
        this.sPACKAGENAME 	= "TXMB0030";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("DATA"),0,8);

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

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calSHRSLIP_DATE1.set_value(this.sSERVERDATE);
        	this.calSHRSLIP_DATE2.set_value(this.sSERVERDATE);
        	this.calSHRAPPR_DATE1.set_value(this.sSERVERDATE);
        	this.calSHRAPPR_DATE2.set_value(this.sSERVERDATE);

        	this.fn_Search01();

        	this.fn_VATChange();

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
        	this.fnc_DatasetClear("dsTA_SLIPNT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT ";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_SLIPNT.setFocus();
        	
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

        	this.fnc_DataSetCancel("dsTA_SLIPNT"); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTA_SLIPNT.setFocus(); //취소 후 Grid로 Focus
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_SLIPNT=dsTA_SLIPNT:U ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
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
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);	
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.cmbSHRACCT_UNIT.value == "") {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " SLIP_DATE1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value));
        		sReturnString += " SLIP_DATE2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value));
        		sReturnString += " APPR_DATE1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value));
        		sReturnString += " APPR_DATE2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value));
        		sReturnString += " CARD_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value));
        		sReturnString += " CUST_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        		sReturnString += " EVID_DOCU=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value)); //기표일자
        		sReturnString += " SLIP_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_NUMB.value));
        		sReturnString += " JSAE_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRJSAE_NUMB.value));
        		sReturnString += " ACCT_INTL=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value));
        		sReturnString += " REMK_NAME=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRREMK_NAME.value));
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " SLIP_DATE1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value));
        		sReturnString += " SLIP_DATE2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value));
        		sReturnString += " APPR_DATE1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value));
        		sReturnString += " APPR_DATE2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value));
        		sReturnString += " CARD_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value));
        		sReturnString += " CUST_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        		sReturnString += " EVID_DOCU=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value)); //기표일자
        		sReturnString += " SLIP_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_NUMB.value));
        		sReturnString += " JSAE_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRJSAE_NUMB.value));
        		sReturnString += " ACCT_INTL=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value));
        		sReturnString += " REMK_NAME=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRREMK_NAME.value));
        		
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

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.rowcount);
        		this.grdTA_SLIPNT.setFocus();
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam 		= new Array();
        			arrParam[0] 	= "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1] 	= "COMBO,cmbSHREVID_DOCU,dsSHREVID_DOCU,0";
        			arrParam[2] 	= "COMBO,cmbEVID_DOCU,dsEVID_DOCU_INPUT,0";
        			arrParam[3] 	= "COMBO,cmbVATX_GUBN,dsVATX_GUBN_INPUT,0";
        			arrParam[4] 	= "COMBO,cmbVATX_TYPE,dsVATX_TYPE_INPUT,0";
        			arrParam[5] 	= "COMBO,cmbPURC_GUBN,dsPURC_GUBN_INPUT,0";
        			arrParam[6] 	= "COMBO,cmbBULG_GUBN,dsBULG_GUBN_INPUT,0";
        			arrParam[7] 	= "COMBO,cmbEBIL_GUBN,dsEBIL_GUBN_INPUT,0";
        			arrParam[8] 	= "GRID,grdTA_SLIPNT,dsEBIL_GUBN,EBIL_GUBN";
        			arrParam[9] 	= "GRID,grdTA_SLIPNT,dsBULG_GUBN,BULG_GUBN";
        			arrParam[10] 	= "GRID,grdTA_SLIPNT,dsEVID_DOCU,EVID_DOCU";
        			arrParam[11] 	= "GRID,grdTA_SLIPNT,dsPURC_GUBN,PURC_GUBN";
        			arrParam[12] 	= "GRID,grdTA_SLIPNT,dsVATX_GUBN,VATX_GUBN";
        			arrParam[13] 	= "GRID,grdTA_SLIPNT,dsVATX_TYPE,VATX_TYPE";
        		this.fnc_CommonCodeInnerBind(arrParam);		
        		
        	}
        	
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        }

        /*-----------------+
         | Help Popup Open |                            
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
        	
            // 카드 번호
            if ((obj.name == "imgSHRCARD_NUMB") || (obj.name == "edtSHRCARD_NAME")) {

                arrParam[0] = "FAM0112";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCARD_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCARD_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCARD_NUMB,edtSHRCARD_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
        	
        	//거래처
            } else if ((obj.name == "imgSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {

                arrParam[0] = "FAM0102";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCUST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출

        	//사업자 번호
            } else if ((obj.name == "imgSHRJSAE_NUMB") || (obj.name == "edtSHRJSAE_NAME")) {

                arrParam[0] = "FAM0109";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRJSAE_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRJSAE_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRJSAE_NUMB,edtSHRJSAE_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출

        	//계정 과목
            } else if ((obj.name == "ImgHelpSHRACCT_INTL") || (obj.name == "edtSHRACCT_NAME")) {

                arrParam[0] = "FAM0031";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRACCT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출

            } 
        }

        /*------------------------+
         | Grid Help Button Clikc  |
         +-------------------------*/
        this.fn_OpenGridPopup = function (obj,e) {

        	eval(obj.binddataset).set_enableevent(false);
        	obj.updateToDataset();
        	eval(obj.binddataset).set_enableevent(true);

        	this.fn_OpenDetailWindow(obj, e.row, 8, obj.getCellValue(e.row, e.cell), -1, 'N');
        	this.grdTA_SLIPNT.moveToNextCell();
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_OpenDetailWindow = function (obj,nRow,nCell,strVal,nPivotIndex,sGridYN) {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (nCell) {
        		case 8:
        			// 거래처
        			if (this.fnc_ToUpper(this.grdTA_SLIPNT.getCellProperty("body", 17, "edittype")) == "NONE") return;

        			sSearchKind = "CUST01"; //사번 조회 POPUP
        			sInputValue = this.fnc_Trim(strVal); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)

        			this.lookupSetter("sResponse", "set_sResponse").set(this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.grdTA_SLIPNT, null, null, null, null, null, sGridYN)); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(this.sResponse)) != 0) {
        				this.dsTA_SLIPNT.set_enableevent(false);
        				this.dsTA_SLIPNT.setColumn(nRow, "CUST_CODE", this.sResponse[0]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_SLIPNT.setColumn(nRow, "SHOP_NM", this.sResponse[1]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_SLIPNT.set_enableevent(true);
        			}
        			break;
        	}
        }

        this.cmbSHRCOND_CODE_OnKillFocus = function (obj) {
        	this.edtSHRCOND_VACD.set_text("");
        	this.edtSHRCOND_VANM.set_text("");
        	
        }

        /*-----------------------+
         |  부문변경시 |
         +------------------------*/
        this.cmbSHRACCT_UNIT_OnChanged = function (obj,e) {
        	this.dsACCT_GUB2.filter("REF1_FILD == '" + this.cmbSHRACCT_UNIT.value + "'");
        	var iROW = this.dsACCT_GUB2.insertRow(0);
        	this.dsACCT_GUB2.setColumn(0, "COMD_CODE", "");
        	this.dsACCT_GUB2.setColumn(0, "COMD_CDNM", "전체");

        	this.cmbSHRACCT_GUB2.set_index(0);
        	
        }

        /*-----------------+
         |  전표상세조회  |
         +------------------*/
        this.grdTA_SLIPNT_OnCellDblClick = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	var sSLIP_NUMB = "";
        	var dsBind = obj.binddataset;

        	if (columnName == "DISP_NUMB") {
        		if (this.fnc_Length(eval(dsBind).getColumn(e.row, "SLIP_NUMB")) < 14) return;
        		sSLIP_NUMB = eval(dsBind).getColumn(e.row, "SLIP_NUMB");
        	}

        	if (this.fnc_Length(sSLIP_NUMB) == 0) return;

        	this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "");
        	
        }

        /*-----------------------+
         |  일괄등록 변경 |
         +------------------------*/
        this.cmbEVID_DOCU_OnChanged = function (obj,e) {
        	if (this.cmbEVID_DOCU.value == "FA180090") {
        		this.cmbVATX_GUBN.set_value("");
        		this.cmbVATX_TYPE.set_value("");
        		this.cmbPURC_GUBN.set_value("");
        		this.cmbBULG_GUBN.set_value("");
        		this.cmbEBIL_GUBN.set_value(0);
        	}

        	this.fn_VATChange();
        	
        }

        this.cmbVATX_GUBN_OnChanged = function (obj,e) {
        	this.fn_VATChange();
        	
        }

        this.cmbVATX_TYPE_OnChanged = function (obj,e) {
        	this.fn_VATChange();
        	
        }

        this.cmbPURC_GUBN_OnChanged = function (obj,e) {
        	if (this.fnc_Length(this.cmbPURC_GUBN.value) < 1 || this.cmbPURC_GUBN.value != "FA220050") {
        		this.cmbBULG_GUBN.set_enable(false);
        		this.cmbBULG_GUBN.set_value("");
        	} else {
        		this.cmbBULG_GUBN.set_enable(true);
        	}

        	this.fn_VATChange();
        	
        }

        this.fn_VATChange = function () {
        	var sEVID_DOCU = this.cmbEVID_DOCU.value;
        	var sVATX_GUBN = this.cmbVATX_GUBN.value;
        	var sVATX_TYPE = this.cmbVATX_TYPE.value;
        	var sPURC_GUBN = this.cmbPURC_GUBN.value;

        	this.dsTA_VATMAT1.filter("EVID_DOCU == '" + sEVID_DOCU + "' && VATX_GUBN== '" + sVATX_GUBN + "' && VATX_TYPE == '" + sVATX_TYPE + "'");
        	this.dsTA_VATMAT2.filter("EVID_DOCU == '" + sEVID_DOCU + "' && VATX_GUBN== '" + sVATX_GUBN + "' && VATX_TYPE == '" + sVATX_TYPE + "' && SEBU_TYP1 == '" + sPURC_GUBN + "'");

        	if (this.dsTA_VATMAT1.getRowCount() > 0) {
        		this.cmbPURC_GUBN.set_enable(true);
        	} else {
        		this.cmbPURC_GUBN.set_enable(false);
        	}
        	
        	if (this.dsTA_VATMAT2.getRowCount() > 0) {
        		this.cmbBULG_GUBN.set_enable(true);
        	} else {
        		this.cmbBULG_GUBN.set_enable(false);
        	}

        	var sVAT1 = this.dsTA_VATMAT1.insertRow(0);
        	var sVAT2 = this.dsTA_VATMAT2.insertRow(0);

        	if (this.fnc_Length(this.cmbPURC_GUBN.value) < 1) {
        		this.cmbPURC_GUBN.set_index(this.dsTA_VATMAT1.rowcount);
        	}
        	
        	if (this.fnc_Length(this.cmbBULG_GUBN.value) < 1) {
        		this.cmbBULG_GUBN.set_index(this.dsTA_VATMAT2.rowcount);
        	}
        	
        }

        this.fn_Search01 = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VATMAT1=dsTA_VATMAT1 dsTA_VATMAT2=dsTA_VATMAT2 ";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdTA_SLIPNT.setFocus();
        }

        this.btn_PROC_OnClick = function (obj,e) {

        	if (this.cmbEVID_DOCU.value != "FA180090") {
        		// 매입매출구분
        		if (this.fnc_Length(this.fnc_Trim(this.cmbVATX_GUBN.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "매입매출구분", this.cmbVATX_GUBN);
        		}
        		// 부가세종류
        		if (this.fnc_Length(this.fnc_Trim(this.cmbVATX_TYPE.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "부가세종류", this.cmbVATX_TYPE);
        		}
        		// 전자발행
        		if (this.fnc_Length(this.fnc_Trim(this.cmbEBIL_GUBN.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "전자발행여부", this.cmbEBIL_GUBN);
        		}
        	} else {
        		// 매입매출구분
        		if (this.fnc_Length(this.fnc_Trim(this.cmbVATX_GUBN.value)) > 1) {
        			return this.fnc_SearchCheckPostAction("TMM125", "해당사항없음은 매입매출구분 선택할수 없습니다.", this.cmbVATX_GUBN);
        		}
        		// 부가세종류
        		if (this.fnc_Length(this.fnc_Trim(this.cmbVATX_TYPE.value)) > 1) {
        			return this.fnc_SearchCheckPostAction("TMM125", "해당사항없음은 부가세종류 선택할수 없습니다.", this.cmbVATX_TYPE);
        		}

        		// 전자발행
        		if (this.fnc_Length(this.fnc_Trim(this.cmbEBIL_GUBN.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "전자발행여부", this.cmbEBIL_GUBN);
        		}
        	}
        	
        	var sChkCount = 0;
        	
        	for (var i = 0; i < this.dsTA_SLIPNT.getRowCount(); i++) {
        		if (this.dsTA_SLIPNT.getColumn(i, "CHK") == 1) {
        			this.dsTA_SLIPNT.setColumn(i, "EVID_DOCU", this.cmbEVID_DOCU.value);
        			this.dsTA_SLIPNT.setColumn(i, "VATX_GUBN", this.cmbVATX_GUBN.value);
        			this.dsTA_SLIPNT.setColumn(i, "VATX_TYPE", this.cmbVATX_TYPE.value);
        			this.dsTA_SLIPNT.setColumn(i, "PURC_GUBN", this.cmbPURC_GUBN.value);
        			this.dsTA_SLIPNT.setColumn(i, "BULG_GUBN", this.cmbBULG_GUBN.value);
        			this.dsTA_SLIPNT.setColumn(i, "EBIL_GUBN", this.cmbEBIL_GUBN.value);
        			sChkCount++;
        		}
        	}
        	trace(this.cmbEBIL_GUBN.value);
        	if (sChkCount == 0) this.fnc_Message("TMM300", "일괄 변경 대상이 없습니다."); return;
        	
        }

        /*------------------------------------+
         |  DataSet 컬럼에 변화가 있는지 여부  |
         +-------------------------------------*/
        this.dsTA_SLIPNT_OnColumnChanged = function (obj,e) {

        	if (e.oldvalue == e.newvalue) return;

        	if (e.columnid == "SHOP_NM") {
        		if (this.fnc_Length(this.fnc_Trim(e.newvalue)) < 1) {
        			this.dsTA_SLIPNT.setColumn(e.row, "CUST_CODE", ""); //거래처코드
        		} else {
        			this.fn_OpenDetailWindow(obj, e.row, 8, e.newvalue, -1, "Y");
        		}
        		return;
        	}
        }

        this.grdTA_SLIPNT_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        	
        }

        this.calSHRSLIP_DATE1_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_OnColumnChanged, this);
            this.dsTA_SLIPNT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_OnCellDblClick, this);
            this.grdTA_SLIPNT.addEventHandler("onexpanddown", this.fn_OpenGridPopup, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.grdTA_SLIPNT_onheadclick, this);
            this.edtSHRREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJSAE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJSAE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJSAE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.cmbSHRACCT_UNIT_OnChanged, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSHRCARD_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgSHRJSAE_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbEBIL_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBULG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPURC_GUBN.addEventHandler("onitemchanged", this.cmbPURC_GUBN_OnChanged, this);
            this.cmbPURC_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVATX_TYPE.addEventHandler("onitemchanged", this.cmbVATX_TYPE_OnChanged, this);
            this.cmbVATX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVATX_GUBN.addEventHandler("onitemchanged", this.cmbVATX_GUBN_OnChanged, this);
            this.cmbVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEVID_DOCU.addEventHandler("onitemchanged", this.cmbEVID_DOCU_OnChanged, this);
            this.cmbEVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);
            this.calSHRAPPR_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE1.addEventHandler("oneditclick", this.calSHRSLIP_DATE1_oneditclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TXMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
