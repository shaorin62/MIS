﻿(function()
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
                this.set_name("TXMA0010");
                this.set_titletext("부가세예외등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_VATXXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VATX_SEQN\" size=\"20\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" type=\"STRING\"/><Column id=\"SLIP_INPU\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"4\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"10\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"EBIL_GUBN\" size=\"1\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" type=\"STRING\"/><Column id=\"ETIS_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DEET_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"34\"/><Column id=\"CANC_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"COND_VANM\" type=\"STRING\" size=\"34\"/><Column id=\"SUMX_AMNT\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"VATE_NUMB\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATXXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VATX_SEQN\" type=\"STRING\" size=\"20\"/><Column id=\"VATD_SEQN\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"SUPP_MNTH\" type=\"STRING\" size=\"2\"/><Column id=\"SUPP_DAYX\" type=\"STRING\" size=\"2\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"SUPP_UNIT\" type=\"STRING\" size=\"20\"/><Column id=\"SUPP_CNTX\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"SUPP_PRIC\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"SUPP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"400\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHREVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRVATX_TYPE</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsBULG_GUBN</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRBULG_GUBN</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsEBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHREBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsMODI_CODE</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSLIP_INPU</Col><Col id=\"CODEID\">SLIP_INPU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRSLIP_INPU</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"CODEID\">SLIP_INPU</Col></Row><Row><Col id=\"DSNAME\">dsSHRETIS_YSNO</Col><Col id=\"CODEID\">ETIS_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0004</Col></Row><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0004</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation1", "absolute", "8", "159", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("35");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VATXXM", "absolute", "8", "180", null, null, "25", "337", this);
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_binddataset("dsTA_VATXXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizebandtype("body");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"60\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"발행일\"/><Cell col=\"2\" displaytype=\"text\" text=\"증빙종류\"/><Cell col=\"3\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"4\" displaytype=\"text\" text=\"세액\"/><Cell col=\"5\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"7\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"8\" displaytype=\"text\" text=\"매입/&#13;&#10;매출\"/><Cell col=\"9\" displaytype=\"text\" text=\"부가세&#13;&#10;종류\"/><Cell col=\"10\" displaytype=\"text\" text=\"부가세유형\"/><Cell col=\"11\" displaytype=\"text\" text=\"불공제\"/><Cell col=\"12\" displaytype=\"text\" text=\"전자신고\"/><Cell col=\"13\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"14\" displaytype=\"text\" text=\"적요\"/><Cell col=\"15\" displaytype=\"text\" text=\"카드번호\"/><Cell col=\"16\" text=\"사업장\"/><Cell col=\"17\" displaytype=\"text\" text=\"신고제외\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:center;background: ;\" text=\"bind:SLIP_INPU\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:TRNS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;background: ;\" text=\"bind:EVID_DOCU\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:BSNS_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BSNS_NUMB), 10, '###-##-#####', 13, '######-#######', '')\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CUST_CODE\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CUST_NAME\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATX_GUBN\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATX_TYPE\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:left;background: ;\" text=\"bind:PURC_GUBN\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align:left;background: ;\" text=\"bind:BULG_GUBN\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align:center;background: ;\" text=\"bind:EBIL_GUBN\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:DISP_NUMB\" editdisplay=\"edit\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"14\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CARD_NUMB\" mask=\"expr:comp.parent.fnc_Length(CARD_NUMB) &lt; 1 ? &quot;&quot; : &quot;@@@@-@@@@-@@@@-@@@@&quot;\"/><Cell col=\"16\" text=\"bind:ACCT_GUBN\" expr=\"bind:ACCT_GUBN\"/><Cell col=\"17\" displaytype=\"checkbox\" text=\"bind:DEET_YSNO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMNT&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VATXXD", "absolute", "8", null, null, "103", "25", "15", this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_VATXXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"No\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"월\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"일\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"품목\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"단위\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"수량\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"단가\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"공급가액\"/><Cell col=\"8\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"세액\"/><Cell col=\"9\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:SUPP_MNTH\" mask=\"##\" editlimit=\"2\" combodataset=\"dsSLIP_INPU\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:SUPP_DAYX\" mask=\"##\" editlimit=\"2\" combodataset=\"dsSLIP_INPU\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:ITEM_NAME\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;background: ;\" text=\"bind:SUPP_UNIT\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" style=\"align:right;background: ;\" text=\"bind:SUPP_CNTX\" editlimit=\"0\" editlimitbymask=\"decimal\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:SUPP_PRIC\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:SUPP_AMNT\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:VATX_AMNT\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"0\" editimemode=\"hangul\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "125", null, "208", "21", null, "118", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("36");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddRow", "absolute", null, null, "62", "21", "90", "122", this);
            obj.set_taborder("40");
            obj.style.set_imagealign("left");
            obj.set_tabstop("false");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DelRow", "absolute", null, null, "62", "21", "25", "122", this);
            obj.set_taborder("41");
            obj.style.set_imagealign("left");
            obj.set_tabstop("false");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBSNS_NUMB", "absolute", "530", null, "90", "23", null, "-35", this);
            obj.set_taborder("43");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_cssclass("styFormItemText");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSEND", "absolute", null, "157", "134", "21", "24", null, this);
            obj.set_taborder("37");
            obj.set_text("수정세금계산서발행");
            obj.style.set_imagealign("left");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRETIS_YSNO", "absolute", "915", "123", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static25", "absolute", "795", "123", "125", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("타사이트발행여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSLIP_INPU", "absolute", "685", "123", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "604", "123", "75", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("전표구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREBIL_GUBN", "absolute", "356", "123", "220", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static08", "absolute", "287", "123", "75", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("전자발행");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBULG_GUBN", "absolute", "108", "123", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static07", "absolute", "27", "123", "75", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("불공제구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "790", "71", "274", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "685", "71", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDETL_CODE", "absolute", "604", "71", "60", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_GUBN", "absolute", "356", "97", "220", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static04", "absolute", "287", "97", "75", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPURC_GUBN", "absolute", "915", "97", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static33", "absolute", "795", "97", "75", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("부가세유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "604", "97", "75", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("부가세종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_TYPE", "absolute", "685", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHREVID_DOCU", "absolute", "108", "97", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.set_bordertype("normal 0 0");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "27", "97", "75", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("증빙종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRNS_DATE2", "absolute", "476", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "461", "71", "14", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRNS_DATE1", "absolute", "356", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static5", "absolute", "287", "71", "75", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("발행일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "108", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static1", "absolute", "27", "71", "75", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", null, null, "169", "25", "153", this);
            obj.set_taborder("56");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "767", "71", "21", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtETIS_NUMB", "absolute", "665", null, "476", "21", null, "162", this);
            obj.set_taborder("33");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "582", null, "82", "37", null, "154", this);
            obj.set_taborder("58");
            obj.set_text("타사이트\r\n승인번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVATE_NUMB", "absolute", "111", null, "442", "21", null, "162", this);
            obj.set_taborder("32");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "27", null, "80", "37", null, "154", this);
            obj.set_taborder("59");
            obj.set_text("부가세\r\n증빙번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkETIS_YSNO", "absolute", "705", null, "15", "21", null, "214", this);
            obj.set_taborder("28");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "582", null, "114", "29", null, "210", this);
            obj.set_taborder("60");
            obj.set_text("타사이트발행여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtITEM_NAME", "absolute", "111", null, "442", "21", null, "188", this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "27", null, "82", "21", null, "188", this);
            obj.set_taborder("61");
            obj.set_text("품목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCARD_NUMB", "absolute", "423", null, "130", "21", null, "214", this);
            obj.set_taborder("27");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "329", null, "90", "21", null, "214", this);
            obj.set_taborder("62");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "873", null, "104", "21", null, "240", this);
            obj.set_taborder("24");
            obj.set_mask("##,###,###,###,###,###");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Static("staVATX_AMNT", "absolute", "793", null, "75", "21", null, "240", this);
            obj.set_taborder("63");
            obj.set_text("세액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "582", null, "82", "21", null, "240", this);
            obj.set_taborder("64");
            obj.set_text("공급가액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEBIL_GUBN", "absolute", "423", null, "130", "21", null, "240", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_index("-1");

            obj = new Static("Static15", "absolute", "329", null, "90", "21", null, "240", this);
            obj.set_taborder("65");
            obj.set_text("전자발행");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBULG_GUBN", "absolute", "111", null, "189", "21", null, "240", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static14", "absolute", "27", null, "80", "21", null, "240", this);
            obj.set_taborder("66");
            obj.set_text("불공제구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPURC_GUBN", "absolute", "873", null, "268", "21", null, "266", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static20", "absolute", "793", null, "75", "21", null, "266", this);
            obj.set_taborder("67");
            obj.set_text("부가세유형");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVATX_TYPE", "absolute", "665", null, "100", "21", null, "266", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("Static19", "absolute", "582", null, "82", "21", null, "266", this);
            obj.set_taborder("68");
            obj.set_text("부가세종류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVATX_GUBN", "absolute", "423", null, "130", "21", null, "266", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static18", "absolute", "329", null, "90", "21", null, "266", this);
            obj.set_taborder("69");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVID_DOCU", "absolute", "111", null, "166", "21", null, "266", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static16", "absolute", "27", null, "80", "21", null, "266", this);
            obj.set_taborder("70");
            obj.set_text("증빙종류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "873", null, "150", "21", null, "292", this);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("background", "disabled", "#f4f4f4ff");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "793", null, "75", "21", null, "292", this);
            obj.set_taborder("71");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRNS_DATE", "absolute", "665", null, "100", "21", null, "292", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_value("null");

            obj = new Static("Static09", "absolute", "582", null, "82", "21", null, "292", this);
            obj.set_taborder("72");
            obj.set_text("발행일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSLIP_INPU", "absolute", "423", null, "130", "21", null, "292", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static3", "absolute", "582", null, "80", "21", null, "188", this);
            obj.set_taborder("73");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "212", null, "88", "21", null, "214", this);
            obj.set_taborder("26");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "111", null, "76", "21", null, "214", this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "27", null, "80", "21", null, "214", this);
            obj.set_taborder("74");
            obj.set_text("거래처");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_GUBN", "absolute", "111", null, "189", "21", null, "292", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_tooltiptype("default");

            obj = new Static("Static12", "absolute", "27", null, "80", "21", null, "292", this);
            obj.set_taborder("75");
            obj.set_text("사업장");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "329", null, "90", "21", null, "292", this);
            obj.set_taborder("76");
            obj.set_text("전표등록구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSLIP_NUMB", "absolute", "1120", null, "22", "21", null, "292", this);
            obj.set_taborder("77");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "189", null, "21", "21", null, "214", this);
            obj.set_taborder("78");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "793", null, "94", "21", null, "214", this);
            obj.set_taborder("79");
            obj.set_text("신고제외여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDEET_YSNO", "absolute", "891", null, "15", "21", null, "214", this);
            obj.set_taborder("29");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUPP_AMNT", "absolute", "665", null, "100", "21", null, "240", this);
            obj.set_taborder("23");
            obj.set_mask("##,###,###,###,###,###");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSUMX_AMNT", "absolute", "1042", null, "99", "21", null, "240", this);
            obj.set_taborder("25");
            obj.set_limitbymask("integer");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_mask("##,###,###,###,###,###");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staVATX_AMNT00", "absolute", "998", null, "50", "21", null, "240", this);
            obj.set_taborder("80");
            obj.set_text("합계");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1025", null, "14", "21", null, "292", this);
            obj.set_taborder("81");
            obj.set_text("-");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_LINE", "absolute", "1042", null, "76", "21", null, "292", this);
            obj.set_taborder("82");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEVID_DOCU", "absolute", "279", null, "22", "21", null, "266", this);
            obj.set_taborder("83");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "8", null, "98", "21", null, "118", this);
            obj.set_taborder("84");
            obj.set_text("품목세부내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("부가세예외등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("86");
            obj.set_text("홈 > 세무관리 > 세무회계 > 부가세신고자료관리 > 부가세예외등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("87");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("91");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("92");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("94");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("95");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("96");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "258", "61", "40", "67", null, null, this);
            obj.set_taborder("97");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "444", "61", "38", "10", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "444", "92", "102", "5", null, null, this);
            obj.set_taborder("99");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "444", "118", "102", "5", null, null, this);
            obj.set_taborder("100");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "444", "144", "38", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "576", "61", "40", "67", null, null, this);
            obj.set_taborder("102");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "573", "380", "80", "15", null, null, this);
            obj.set_taborder("103");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "9", "396", "30", "163", null, null, this);
            obj.set_taborder("104");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "1141", "396", "20", "171", null, null, this);
            obj.set_taborder("105");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "573", "564", "80", "35", null, null, this);
            obj.set_taborder("106");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "8", "593", "48", "6", null, null, this);
            obj.set_taborder("107");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "113", null, "10", "13", null, "123", this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "101", "560", "12", "23", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "114", "560", "12", "23", null, null, this);
            obj.set_taborder("110");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NAME", "absolute", "665", null, "476", "21", null, "188", this);
            obj.set_taborder("31");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세예외등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("mskSUPP_AMNT_value","mskSUPP_AMNT","value","dsTA_VATXXM","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtSUPP_AMNT","value","dsTA_VATXXM","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_GUBN_value","cmbACCT_GUBN","value","dsTA_VATXXM","ACCT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_CODE_value","edtCUST_CODE","value","dsTA_VATXXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtCUST_NAME","value","dsTA_VATXXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREMK_NAME_value","edtREMK_NAME","value","dsTA_VATXXM","REMK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSLIP_INPU_value","cmbSLIP_INPU","value","dsTA_VATXXM","SLIP_INPU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calTRNS_DATE_value","calTRNS_DATE","value","dsTA_VATXXM","TRNS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDISP_NUMB_value","mskSLIP_NUMB","value","dsTA_VATXXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbEVID_DOCU_value","cmbEVID_DOCU","value","dsTA_VATXXM","EVID_DOCU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbVATX_GUBN_value","cmbVATX_GUBN","value","dsTA_VATXXM","VATX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbVATX_TYPE_value","cmbVATX_TYPE","value","dsTA_VATXXM","VATX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPURC_GUBN_value","cmbPURC_GUBN","value","dsTA_VATXXM","PURC_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBULG_GUBN_value","cmbBULG_GUBN","value","dsTA_VATXXM","BULG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbEBIL_GUBN_value","cmbEBIL_GUBN","value","dsTA_VATXXM","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskVATX_AMNT_value","mskVATX_AMNT","value","dsTA_VATXXM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCARD_NUMB_value","mskCARD_NUMB","value","dsTA_VATXXM","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtITEM_NAME_value","edtITEM_NAME","value","dsTA_VATXXM","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkETIS_YSNO_value","chkETIS_YSNO","value","dsTA_VATXXM","ETIS_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtVATE_NUMB_value","edtVATE_NUMB","value","dsTA_VATXXM","VATE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtETIS_NUMB_value","edtETIS_NUMB","value","dsTA_VATXXM","ETIS_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCUST_NUMB_value","mskBSNS_NUMB","value","dsTA_VATXXM","BSNS_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","calTRNS_DATE","binddataset","dsTA_VATXXM","TRNS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","chkDEET_YSNO","value","dsTA_VATXXM","DEET_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","medSUMX_AMNT","value","dsTA_VATXXM","SUMX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtSLIP_LINE","value","dsTA_VATXXM","SLIP_LINE");
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
        this.addIncludeScript("TXMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMA0010 부가세예외등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2016.08.02		안윤준		수정
         *	 2016.08.02		양현덕		수정
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

        /*************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST 	= "TTTTTTTF";
        this.sPACKAGENAME 	= "TXMA0010";
        this.sACCT_GUBN 	= "";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);
        this.aKeyValue 		= new Array(1);

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

        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);
        	this.fnc_FormatSlipNumber(this.grdTA_VATXXM, "DISP_NUMB", "Y");
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.calSHRTRNS_DATE1.set_value(this.fnc_SubStr(this.sSERVERDATE, 0, 6));
        	this.calSHRTRNS_DATE2.set_value(this.sSERVERDATE);
        	
        	this.cmbSHRACCT_GUBN.setFocus();
        	
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
        	
        	this.fnc_DatasetClear("dsTA_VATXXM,dsTA_VATXXD");
        	if (!this.fn_SearchItemCheck()) return;
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VATXXM=dsTA_VATXXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_VATXXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_VATXXM.addRow();
        	
        	this.dsTA_VATXXM.setColumn(iRow, "ACCT_GUBN", this.cmbSHRACCT_GUBN.value);
        	this.dsTA_VATXXM.setColumn(iRow, "SLIP_INPU", "MANU");
        	this.calTRNS_DATE.set_value(this.sSERVERDATE);
        	this.dsTA_VATXXM.setColumn(iRow, "EVID_DOCU", this.cmbEVID_DOCU.value);
        	this.dsTA_VATXXM.setColumn(iRow, "DEET_YSNO", "0");
        	this.dsTA_VATXXM.setColumn(iRow, "ETIS_YSNO", "0");
        	this.dsTA_VATXXM.setColumn(iRow, "EBIL_GUBN", "0");
        	this.dsTA_VATXXM.setColumn(iRow, "SUPP_AMNT", 0);
        	this.dsTA_VATXXM.setColumn(iRow, "VATX_AMNT", 0);
        	
        	this.cmbACCT_GUBN.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
           
           if (this.fn_DeleteCheck(obj)) this.dsTA_VATXXM.deleteRow(this.dsTA_VATXXM.rowposition);
           this.grdTA_VATXXM.setFocus();	
           
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTA_VATXXM,dsTA_VATXXD");
        	this.grdTA_VATXXM.setFocus();
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "VATX_SEQN");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VATXXM=dsTA_VATXXM:U dsTA_VATXXD=dsTA_VATXXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_VATXXM.setFocus();
        	
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
        	
        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VATXXM,dsTA_VATXXD", this);	
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
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
        /*-------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_VATXXM,dsTA_VATXXD")) {
        		if (!this.fnc_Message("TMM023")) return false;		
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)) < 1) {
                return this.fnc_SearchCheckPostAction("TMM001", "사업장", this.cmbSHRACCT_GUBN);
        	}

        	if (this.fnc_IsDate(this.calSHRTRNS_DATE1.value) == false) {
                return this.fnc_SearchCheckPostAction("TMM001", "발행 시작일자", this.calSHRTRNS_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRTRNS_DATE2.value) == false) {
                return this.fnc_SearchCheckPostAction("TMM001", "발행 종료일자", this.calSHRTRNS_DATE2);
        	}

        	if (this.calSHRTRNS_DATE1.value > this.calSHRTRNS_DATE2.value) {
                return this.fnc_SearchCheckPostAction("TMM028", "발행종료일자,발행시작일자", this.calSHRTRNS_DATE2);
        	}

        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {
        	
        	if (this.dsTA_VATXXM.getRowCount() < 1) return this.fnc_Message("TMM007");
        	if (this.dsTA_VATXXD.getRowCount() > 0) return this.fnc_Message("TMM125", "품목세부내역 존재하는 부가세는 삭제 할수 없습니다.");
        	
        	var sQuestionText  = "증빙종류 : ("+this.grdTA_VATXXM.getCellText(this.grdTA_VATXXM.currentrow, this.grdTA_VATXXM.getBindCellIndex( "body", "EVID_DOCU"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*----------------------------+
         |  품목세부내역 삭제 여부 |
         +----------------------------*/
        this.fn_DetailDeleteCheck = function () {
        	
        	if (this.dsTA_VATXXD.getRowCount() < 1) return this.fnc_Message("TMM007");
        	if (this.dsTA_VATXXM.getRowCount() < 1) return this.fnc_Message("TMM032");	
        	
        	var sQuestionText  = "품목세부내역 : (" +this.grdTA_VATXXD.getCellText(this.grdTA_VATXXD.currentrow, this.grdTA_VATXXD.getBindCellIndex( "body", "ITEM_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_VATXXM,dsTA_VATXXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        		
        	}

        	for (var i = 0; i < this.dsTA_VATXXM.getRowCount(); i++) {
        	
        		if (this.dsTA_VATXXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "ACCT_GUBN"))) < 1) { // 사업장
        			return this.fnc_CheckPostAction("TMM072", "사업장", this.dsTA_VATXXM, i, this.cmbACCT_GUBN, "");				
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "TRNS_DATE"))) < 1) { // 발행일자
        			return this.fnc_CheckPostAction("TMM072", "발행일자", this.dsTA_VATXXM, i, this.calTRNS_DATE, "");	
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "EVID_DOCU"))) < 1) { // 증빙종류
        			return this.fnc_CheckPostAction("TMM072", "증빙종류", this.dsTA_VATXXM, i, this.cmbEVID_DOCU, "");	
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "VATX_GUBN"))) < 1) { // 매입매출
        			return this.fnc_CheckPostAction("TMM072", "매입매출", this.dsTA_VATXXM, i, this.cmbVATX_GUBN, "");	
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "VATX_TYPE"))) < 1) { // 부가세종류
        			return this.fnc_CheckPostAction("TMM072", "부가세종류", this.dsTA_VATXXM, i, this.cmbVATX_TYPE, "");	
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "EBIL_GUBN"))) < 1) { // 전자발행
        			return this.fnc_CheckPostAction("TMM072", "전자발행", this.dsTA_VATXXM, i, this.cmbEBIL_GUBN, "");	
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "SUPP_AMNT"))) < 1 
        			|| nexacro.toNumber(this.dsTA_VATXXM.getColumn(i, "SUPP_AMNT")) == 0) { // 공급가액
        			return this.fnc_CheckPostAction("TMM072", "공급가액", this.dsTA_VATXXM, i, this.mskSUPP_AMNT, "");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "VATX_TYPE")) == "FA210010") { // 세액
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "VATX_AMNT"))) < 1 
        				|| nexacro.toNumber(this.dsTA_VATXXM.getColumn(i, "VATX_AMNT"), 0) == 0) {
        				return this.fnc_CheckPostAction("TMM072", "세액", this.dsTA_VATXXM, i, this.mskVATX_AMNT, "");
        			}
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "CUST_CODE"))) < 1) { // 거래처
        			return this.fnc_CheckPostAction("TMM072", "거래처", this.dsTA_VATXXM, i, this.edtCUST_NAME, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(i, "ITEM_NAME"))) < 1) { // 품목
        			return this.fnc_CheckPostAction("TMM072", "품목", this.dsTA_VATXXM, i, this.edtITEM_NAME, "");
        		}
        					
        	}

        	for (var i = 0; i < this.dsTA_VATXXD.getRowCount(); i++) {
        		
        		if (this.dsTA_VATXXD.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        			
        		if (nexacro.toNumber(this.dsTA_VATXXD.getColumn(i, "SUPP_MNTH")) < 0 || nexacro.toNumber(this.dsTA_VATXXD.getColumn(i, "SUPP_MNTH")) > 12) {
        			return this.fnc_CheckPostAction("TMM125", "월은 1월부터 12월 까지만 입력 가능합니다", this.dsTA_VATXXD, i, this.grdTA_VATXXD, "SUPP_MNTH");
        		}

        		if (nexacro.toNumber(this.dsTA_VATXXD.getColumn(i, "SUPP_DAYX")) < 0 || nexacro.toNumber(this.dsTA_VATXXD.getColumn(i, "SUPP_DAYX")) > 31) {
        			return this.fnc_CheckPostAction("TMM125", "일은 1일부터 31일 까지만 입력 가능합니다", this.dsTA_VATXXD, i, this.grdTA_VATXXD, "SUPP_DAYX");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXD.getColumn(i, "ITEM_NAME"))) < 1) { // 품목
        			return this.fnc_CheckPostAction("TMM072", "품목", this.dsTA_VATXXD, i, this.grdTA_VATXXD, "ITEM_NAME");
        		}

        		if (this.dsTA_VATXXD.getRowType(this.dsTA_VATXXD.rowposition) == Dataset.ROWTYPE_UPDATE) {
        			this.dsTA_VATXXM.setRowType(this.dsTA_VATXXM.rowposition, Dataset.ROWTYPE_UPDATE);
        		}
        		
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //회계구분(사업장)
        		sReturnString += " TRNS_STDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRTRNS_DATE1.value)); //발행일자_시작일
        		sReturnString += " TRNS_ENDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRTRNS_DATE2.value)); //발행일자_종료일
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //거래처
        		sReturnString += " EVID_DOCU=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value)); //증빙종류
        		sReturnString += " VATX_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value)); //매입매출
        		sReturnString += " VATX_TYPE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_TYPE.value)); //부가세종류
        		sReturnString += " PURC_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPURC_GUBN.value)); //매입구분
        		sReturnString += " BULG_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRBULG_GUBN.value)); //불공제구분
        		sReturnString += " EBIL_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREBIL_GUBN.value)); //전자발행
        		sReturnString += " SLIP_INPU=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRSLIP_INPU.value)); //전표구분
        		sReturnString += " ETIS_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRETIS_YSNO.value)); //타사이트발행여부
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " VATX_SEQN=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "VATX_SEQN")));
        		
        	} else if (sKind == "SEARCH_VATMAT") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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
        	
        		if (this.dsTA_VATXXM.rowcount == 0) {
        			this.fnc_DatasetClear("dsTA_VATXXM,dsTA_VATXXD");
        		}

        		this.fnc_Information(this.stInformation1, this.dsTA_VATXXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation2, this.dsTA_VATXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_VATXXM.rowcount); //정상 종료 메세지

        		var iRow = this.dsTA_VATXXM.findRowExpr("VATX_SEQN=='" + this.aKeyValue[0] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_VATXXM.selectRow(iRow);
         		this.dsTA_VATXXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";	
        		
        	} else if (sMethodName == "SEARCH01") {
        		
        		this.fnc_Information(this.stInformation2, this.dsTA_VATXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");	
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation1, this.dsTA_VATXXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SAVE");	
        		this.fnc_Information(this.stInformation2, this.dsTA_VATXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SAVE");	
        		this.fnc_Message("TMM103"); //정상 종료 Message
        		
        		this.fn_Search();
        		
        	}  else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] 	= "COMBO,cmbSHREVID_DOCU,dsSHREVID_DOCU,0";
        			arrParam[1] 	= "COMBO,cmbSHRVATX_GUBN,dsSHRVATX_GUBN,0";
        			arrParam[2] 	= "COMBO,cmbSHRVATX_TYPE,dsSHRVATX_TYPE,0";
        			arrParam[3] 	= "COMBO,cmbSHRPURC_GUBN,dsSHRPURC_GUBN,0";
        			arrParam[4] 	= "COMBO,cmbSHRBULG_GUBN,dsSHRBULG_GUBN,0";
        			arrParam[5] 	= "COMBO,cmbSHREBIL_GUBN,dsSHREBIL_GUBN,0";
        			arrParam[6] 	= "COMBO,cmbSHRSLIP_INPU,dsSHRSLIP_INPU,0";
        			arrParam[7] 	= "COMBO,cmbSHRETIS_YSNO,dsSHRETIS_YSNO,0";
        			arrParam[8] 	= "COMBO,cmbEVID_DOCU,dsEVID_DOCU,0";
        			arrParam[9] 	= "COMBO,cmbVATX_TYPE,dsVATX_TYPE,0";
        			arrParam[10] 	= "COMBO,cmbVATX_GUBN,dsVATX_GUBN,0";
        			arrParam[11] 	= "COMBO,cmbPURC_GUBN,dsPURC_GUBN,0";
        			arrParam[12] 	= "COMBO,cmbBULG_GUBN,dsBULG_GUBN,0";
        			arrParam[13] 	= "COMBO,cmbEBIL_GUBN,dsEBIL_GUBN,0";
        			arrParam[14] 	= "COMBO,cmbSLIP_INPU,dsSLIP_INPU,0";
        			arrParam[15] 	= "GRID,grdTA_VATXXM,dsEVID_DOCU,EVID_DOCU";
        			arrParam[16] 	= "GRID,grdTA_VATXXM,dsVATX_TYPE,VATX_TYPE";
        			arrParam[17] 	= "GRID,grdTA_VATXXM,dsVATX_GUBN,VATX_GUBN";
        			arrParam[18] 	= "GRID,grdTA_VATXXM,dsPURC_GUBN,PURC_GUBN";
        			arrParam[19] 	= "GRID,grdTA_VATXXM,dsBULG_GUBN,BULG_GUBN";
        			arrParam[20] 	= "GRID,grdTA_VATXXM,dsSLIP_INPU,SLIP_INPU";
        			arrParam[21] 	= "GRID,grdTA_VATXXM,dsEBIL_GUBN,EBIL_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);		
        	
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	} 

        }

        /*---------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCUST_NAME";
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if (obj.name == "imgHelpEVID_DOCU") {

        		if (this.dsTA_VATXXM.getRowCount() < 1) return;

        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=200";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=증빙선택조회";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		var sSEAR_GUBN = "E";
        		this.fnc_OpenPopup("FAMB0030P05", "fam::FAMB0030P05.xfdl", {sSEAR_GUBN:sSEAR_GUBN}, sOpenStyle, this.fn_popupAfter);

            }else if ((obj.name == "imgHelpSLIP_NUMB") || (obj.name == "mskDISP_NUMB")) {

        		if (this.dsTA_VATXXM.getRowCount() < 1) return;

        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=200";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=전표번호선택조회";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("TXMA0010P01", "txm::TXMA0010P01.xfdl", {}, sOpenStyle, this.fn_popupAfter);

            } else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) {
            
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCUST_NAME";
                arrParam[5] = "edtCUST_CODE,edtCUST_NAME,mskBSNS_NUMB";
                arrParam[6] = "0,1,3";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            }
            
        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
        	
        	//전표번호선택조회 팝업
        	if (sPopupId == "TXMA0010P01") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        	
        				this.mskSLIP_NUMB.set_value(sResponse[0]);
        				this.edtSLIP_LINE.set_value(sResponse[1]);
        				this.dsTA_VATXXM.setColumn(this.dsTA_VATXXM.rowposition, "DISP_NUMB", sResponse[0]+sResponse[1]);
        				
        			}
        			
        		}
        	//증빙선택조회 팝업
        	} else if (sPopupId == "FAMB0030P05") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        	
        				this.cmbEVID_DOCU.set_value(sResponse[0]);
        				this.cmbVATX_GUBN.set_value(sResponse[1]);
        				this.cmbVATX_TYPE.set_value(sResponse[2]);
        				this.cmbBULG_GUBN.set_value(sResponse[3]);
        				this.cmbPURC_GUBN.set_value(sResponse[4]);
        				
        			}
        			
        		}
        		
        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------+
         |  기장 추가  |
         +--------------*/
        this.btn_AddRowOnClick = function (obj,e) {
        	
        	if (this.dsTA_VATXXM.getRowCount() < 1) {
        		this.fnc_Message("TMM032");
        		return false;
        	}

        	var iRow = this.dsTA_VATXXD.addRow();

        	var sTRNS_DATE = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "TRNS_DATE");
        	var sSUPP_MNTH = Eco.decode(this.fnc_Length(this.fnc_Trim(sTRNS_DATE)), 0, this.fnc_SubStr(this.fnc_Today(), 4, 2), this.fnc_SubStr(sTRNS_DATE, 4, 2));
        	var sSUPP_DAYX = Eco.decode(this.fnc_Length(this.fnc_Trim(sTRNS_DATE)), 0, this.fnc_SubStr(this.fnc_Today(), 6, 2), this.fnc_SubStr(sTRNS_DATE, 6, 2));

        	this.dsTA_VATXXD.setColumn(iRow, "VATX_SEQN", this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "VATX_SEQN"));
        	this.dsTA_VATXXD.setColumn(iRow, "SUPP_MNTH", sSUPP_MNTH);
        	this.dsTA_VATXXD.setColumn(iRow, "SUPP_DAYX", sSUPP_DAYX);
        	this.dsTA_VATXXD.setColumn(iRow, "ITEM_NAME", this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "ITEM_NAME"));

        	this.grdTA_VATXXD.setCellPos(3);
        	this.grdTA_VATXXD.setFocus();
        }

        /*-------------+
         |  기장 삭제  |
         +--------------*/
        this.btn_DelRowOnClick = function (obj,e) {
        	
        	if (this.fn_DetailDeleteCheck(obj)) this.dsTA_VATXXD.deleteRow(this.dsTA_VATXXD.rowposition);
        	this.grdTA_VATXXD.setFocus();
        	
        }

        /*-----------------------+
         |  부가세 기장 조회  |
         +------------------------*/
        this.fn_Search01 = function () {

        	this.fnc_DatasetClear("dsTA_VATXXD");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VATXXD=dsTA_VATXXD ";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	//this.grdTA_VATXXD.setFocus();
        	
        }

        /*-----------------+
         |  전표상세조회  |
         +------------------*/
        this.grdTA_VATXXM_oncelldblclick = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "DISP_NUMB") return;
        	
        	var sSlipNumb = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "SLIP_NUMB");
        	var sSlipLine = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "SLIP_LINE");
        	
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        		this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}	
        	
        }

        /*---------------------------+
         |  조회 전 변경사항 체크  |
         +---------------------------*/
        this.dsTA_VATXXM_canrowposchange = function (obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_VATXXD")) {
        		if (this.fnc_Message("TMM140", "[ 품목세부내역 ] 항목의 변경된 변경내역이 있습니다.계속진행하게 되면 품목세부내역은 초기화 됩니다. 계속진행하시겠습니까") == false) {
        		  return false;
        	   }
        	}
           
        	this.fnc_DataSetCancel("dsTA_VATXXD");
        	return true;   

        }

        /*-------------------------------+
         |  메인 행 변경 시 세부 조회  |
         +--------------------------------*/
        this.dsTA_VATXXM_onrowposchanged = function (obj,e) {

        	if (obj.getRowCount() < 1) return;

        	//전표구분이 전표등록일 경우
        	if (this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "SLIP_INPU") == "SLIP") {
        		
        		this.fnc_SetReadonly(this.cmbACCT_GUBN, true);
        		this.fnc_SetReadonly(this.calTRNS_DATE, true);
        		this.fnc_SetReadonly(this.imgHelpSLIP_NUMB, true);
        		this.fnc_SetReadonly(this.imgHelpEVID_DOCU, true);
        		this.fnc_SetReadonly(this.mskSUPP_AMNT, true);
        		this.fnc_SetReadonly(this.mskVATX_AMNT, true);
        		this.fnc_SetReadonly(this.imgHelpCUST_CODE, true);
        		this.fnc_SetReadonly(this.edtCUST_NAME, true);
        		this.fnc_SetReadonly(this.mskCARD_NUMB, true);
        		this.fnc_SetReadonly(this.edtITEM_NAME, true);
        		this.fnc_SetReadonly(this.chkETIS_YSNO, true);
        		this.fnc_SetReadonly(this.edtREMK_NAME, true);
        		this.fnc_SetReadonly(this.chkDEET_YSNO, true);
        		this.fnc_SetReadonly(this.edtETIS_NUMB, true);
        		
        	} else {
        	
        		this.fnc_SetReadonly(this.cmbACCT_GUBN, false);
        		this.fnc_SetReadonly(this.calTRNS_DATE, false);
        		this.fnc_SetReadonly(this.imgHelpSLIP_NUMB, false);
        		this.fnc_SetReadonly(this.imgHelpEVID_DOCU, false);
        		this.fnc_SetReadonly(this.mskSUPP_AMNT, false);
        		this.fnc_SetReadonly(this.mskVATX_AMNT, false);
        		this.fnc_SetReadonly(this.imgHelpCUST_CODE, false);
        		this.fnc_SetReadonly(this.edtCUST_NAME, false);
        		this.fnc_SetReadonly(this.mskCARD_NUMB, false);
        		this.fnc_SetReadonly(this.edtITEM_NAME, false);
        		this.fnc_SetReadonly(this.chkETIS_YSNO, false);
        		this.fnc_SetReadonly(this.edtREMK_NAME, false);
        		this.fnc_SetReadonly(this.chkDEET_YSNO, false);
        		this.fnc_SetReadonly(this.edtETIS_NUMB, false);
        		
        	}

        	if (this.dsTA_VATXXM.getRowType(this.dsTA_VATXXM.rowposition) == Dataset.ROWTYPE_INSERT) {
        	
        		this.dsTA_VATXXD.clearData();
        		this.fnc_Information(this.stInformation2, this.dsTA_VATXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.btn_AddRow.set_visible(false);
        	    this.btn_DelRow.set_visible(false);
        	
        	} else {
        		
        		this.btn_AddRow.set_visible(true);
        	    this.btn_DelRow.set_visible(true);
        		this.fn_Search01();
        		
        	}
        	
        }

        /*------------------------+
         |  수정세금계산서발행  |
         +-------------------------*/
        this.fn_SendModify = function () {

        	if (this.dsTA_VATXXM.getRowCount() < 1) {
        		this.fnc_Message("TMM010"); //선택된 항목이 없습니다! 선택 후 작업하세요!
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "MODI_CODE"))) < 1) {
        		this.fnc_Message("TMM106", "수정사유"); //[ @ ]값을 선택 후 작업하세요!
        		return false;
        	}
        	
        	var sName 		= "FAMG0007";
        	var sFormURL 	= "fam::FAMG0007.xfdl";
        	
        	var objArgumentList = {
        				refform : this,
        				pVATX_SEQN : this.refform.dsTA_VATXXM.getColumn(this.refform.dsTA_VATXXM.rowposition, "VATX_SEQN"),
        				pMODI_CODE : this.refform.dsTA_VATXXM.getColumn(this.refform.dsTA_VATXXM.rowposition, "MODI_CODE"),
        				pPROC_GUBN : "3"
        	};
        	
        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=00";                //현재 반응 없음
        		sOpenStyle += ",height=200";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=전표번호선택조회";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        	
        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "");
        	
        	this.fn_Search();
        	
        }

        /*--------------------------------------+
         |  증빙세부 컬럼 변경             
         +---------------------------------------*/
        this.dsTA_VATXXM_oncolumnchanged = function(obj,e) {
        	
        	//공급가액
        	if (e.columnid == "SUPP_AMNT") {
        		var sSupp_Amnt = nexacro.toNumber(e.newvalue, 0);
        		if (obj.getColumn(e.row, "VATX_TYPE") == "FA210010") {
        			obj.setColumn(e.row, "VATX_AMNT", sSupp_Amnt * 0.1);
        		}
        		this.fn_SUMX_AMNT(e.row);
        	//세액
        	} else if (e.columnid == "VATX_AMNT") {
        		this.fn_SUMX_AMNT(e.row);
        	}
        	
        }

        /*--------------------------------------+
         |  증빙세부 합계             
         +---------------------------------------*/
        this.fn_SUMX_AMNT = function(nRow) {

        	var SUPP_AMNT = nexacro.toNumber(this.dsTA_VATXXM.getColumn(nRow, "SUPP_AMNT"),0);
        	var VATX_AMNT = nexacro.toNumber(this.dsTA_VATXXM.getColumn(nRow, "VATX_AMNT"),0);
        	this.dsTA_VATXXM.setColumn(nRow, "SUMX_AMNT", SUPP_AMNT + VATX_AMNT); 
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VATXXM.addEventHandler("onrowposchanged", this.dsTA_VATXXM_onrowposchanged, this);
            this.dsTA_VATXXM.addEventHandler("canrowposchange", this.dsTA_VATXXM_canrowposchange, this);
            this.dsTA_VATXXM.addEventHandler("oncolumnchanged", this.dsTA_VATXXM_oncolumnchanged, this);
            this.dsTA_VATXXD.addEventHandler("canrowposchange", this.fdgfafg, this);
            this.dsTA_VATXXD.addEventHandler("onrowposchanged", this.dfgsdg, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_VATXXM.addEventHandler("oncelldblclick", this.grdTA_VATXXM_oncelldblclick, this);
            this.btn_AddRow.addEventHandler("onclick", this.btn_AddRowOnClick, this);
            this.btn_DelRow.addEventHandler("onclick", this.btn_DelRowOnClick, this);
            this.mskBSNS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnSEND.addEventHandler("onclick", this.fn_SendModify, this);
            this.cmbSHRETIS_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSLIP_INPU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREBIL_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBULG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRPURC_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRNS_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRNS_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtETIS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtVATE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtITEM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static23.addEventHandler("onclick", this.Static23_onclick, this);
            this.mskCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEBIL_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBULG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPURC_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVATX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTRNS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSLIP_INPU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSLIP_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.mskSUPP_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSUMX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_LINE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpEVID_DOCU.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
