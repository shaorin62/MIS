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
                this.set_name("TXMC0060");
                this.set_titletext("수출실적명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT141_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"EXPORT_TCNT\" size=\"9\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_TAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"WON_TAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"GOODS_CNT\" size=\"9\" type=\"BIGDECIMAL\"/><Column id=\"WON_AMT_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_AMT_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ETC_CNT\" size=\"9\" type=\"BIGDECIMAL\"/><Column id=\"WON_AMT_ETC\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_AMT_ETC\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT141_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"VAT_SERIAL\" size=\"10\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"10\" type=\"STRING\"/><Column id=\"EXPORT_RNO\" size=\"15\" type=\"STRING\"/><Column id=\"SHIP_YMD\" size=\"10\" type=\"STRING\"/><Column id=\"EXPORT_CURRENCY_CD\" size=\"10\" type=\"STRING\"/><Column id=\"RATES\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_AMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"WON_AMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINT01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXPORT_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_CURCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCHANGE_RATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_E_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_W_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT141_R", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static2", "absolute", "8", "118", null, "65", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "446", "127", "90", "21", null, null, this);
            obj.set_text("상호(법인명)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "749", "127", "90", "21", null, null, this);
            obj.set_text("성명(대표자)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "540", "127", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_MASTER", "absolute", "843", "127", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "127", "100", "21", null, null, this);
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBIZ_NO", "absolute", "127", "127", "122", "21", null, null, this);
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_enable("true");
            obj.set_mask("###-##-#####");
            obj.set_taborder("3");
            obj.set_trimtype("both");
            obj.set_type("string");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_TYPENM", "absolute", "540", "153", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "446", "153", "90", "21", null, null, this);
            obj.set_text("업   태");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "153", "100", "21", null, null, this);
            obj.set_text("사업장 소재지");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR", "absolute", "127", "153", "290", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VAT141_H", "absolute", "8", "208", null, "110", "25", null, this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT141_H");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("18");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\"/><Column size=\"119\"/><Column size=\"115\"/><Column size=\"110\"/><Column size=\"181\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"건수\"/><Cell col=\"2\" displaytype=\"text\" text=\"외화금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"원화금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"합                 계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EXPORT_TCNT\" mask=\"###,##0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FOREIGN_TAMT\" mask=\"###,##0.00\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:WON_TAMT\" mask=\"###,##0\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"수    출    재    화\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:GOODS_CNT\" mask=\"###,##0\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FOREIGN_AMT_GOODS\" mask=\"###,##0.00\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:WON_AMT_GOODS\" mask=\"###,##0\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"기타 영세율 적용\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"integer\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ETC_CNT\" mask=\"###,##0\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FOREIGN_AMT_ETC\" mask=\"###,##0.00\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:WON_AMT_ETC\" mask=\"###,##0\"/><Cell row=\"2\" col=\"4\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VAT141_D", "absolute", "8", "353", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT141_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("23");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"132\"/><Column size=\"90\"/><Column size=\"64\"/><Column size=\"75\"/><Column size=\"112\"/><Column size=\"105\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"수출신고번호\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"선(기)적일자\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"통화코드\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"환율\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"외화\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"원화\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"mask\" editfilter=\"number\" style=\"align:center;\" text=\"bind:EXPORT_RNO\" mask=\"@@@-@@-@@-@@@@@@@-@\" editlimit=\"15\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align: center;\" text=\"bind:SHIP_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" editfilter=\"upper\" style=\"align: center;\" text=\"bind:EXPORT_CURRENCY_CD\" editlimit=\"3\" editimemode=\"alpha\" combodisplayrowcount=\"10\"/><Cell col=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RATES\" mask=\"###,##0.0000\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:FOREIGN_AMT\" mask=\"###,##0.00\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:WON_AMT\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "328", "62", "21", "90", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "328", "62", "21", "25", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static211", "absolute", "749", "153", "90", "21", null, null, this);
            obj.set_text("업   종");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_LINE", "absolute", "843", "153", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1316", "298", "34", "22", null, null, this);
            obj.set_text("금액");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1206", "298", "34", "22", null, null, this);
            obj.set_text("건수");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medAMT", "absolute", "1354", "298", "110", "22", null, null, this);
            obj.set_taborder("20");
            obj.set_mask("#,###");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VAT141_R");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCNT", "absolute", "1246", "298", "60", "22", null, null, this);
            obj.set_taborder("19");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VAT141_R");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("본/지점");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "90", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "441", "71", "76", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "510", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("수줄실적명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("30");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>수출실적명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "0", "8", "717", null, null, this);
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

            obj = new Static("Static16", "absolute", "573", "183", "80", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "189", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_imagealign("left");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "573", "318", "80", "35", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "332", "262", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 189, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("수출실적명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsVA_VATBRANCH","BRANCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_MASTER_value","edtCORP_MASTER","value","dsVA_VATBRANCH","CORP_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBIZ_NO_value","mskBIZ_NO","value","dsVA_VATBRANCH","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_TYPENM_value","edtCORP_TYPENM","value","dsVA_VATBRANCH","CORP_TYPENM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_ADDR_value","edtCORP_ADDR","value","dsVA_VATBRANCH","CORP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_LINE_value","edtCORP_LINE","value","dsVA_VATBRANCH","CORP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCNT_value","medCNT","value","dsTA_VAT141_R","CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medAMT_value","medAMT","value","dsTA_VAT141_R","AMT");
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
        this.addIncludeScript("TXMC0060.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0060.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0060 수출실적명세서
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.08		안윤준		수정
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFTFT";
        this.sPACKAGENAME 	= "TXMC0060";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
        	}
        	
        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
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
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	var sMethodName  = "SEARCH00";
        	var sInDataSet 	 = "";
        	var sOutDataSet  = "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT141_H=dsTA_VAT141_H ";
        		sOutDataSet += "dsTA_VAT141_D=dsTA_VAT141_D ";
        		sOutDataSet += "dsTA_VAT141_R=dsTA_VAT141_R ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var sBRANCH_CD 		= this.dsTA_VAT141_H.getColumn(this.dsTA_VAT141_H.rowposition, "BRANCH_CD");
        	var sVAT_YYYY 		= this.dsTA_VAT141_H.getColumn(this.dsTA_VAT141_H.rowposition, "VAT_YYYY");
        	var sVAT_QUARTER 	= this.dsTA_VAT141_H.getColumn(this.dsTA_VAT141_H.rowposition, "VAT_QUARTER");
        	
        	if (this.dsVA_VATBRANCH.getRowCount() > 0) {
        		var iRow = this.dsTA_VAT141_D.addRow();
        		this.dsTA_VAT141_D.setColumn(iRow, "BRANCH_CD"	, sBRANCH_CD);
        		this.dsTA_VAT141_D.setColumn(iRow, "VAT_YYYY"	, sVAT_YYYY);
        		this.dsTA_VAT141_D.setColumn(iRow, "VAT_QUARTER", sVAT_QUARTER);
        		this.dsTA_VAT141_D.setColumn(iRow, "RATES"		, 0);
        		this.dsTA_VAT141_D.setColumn(iRow, "FOREIGN_AMT", 0);
        		this.dsTA_VAT141_D.setColumn(iRow, "WON_AMT"	, 0);

        		// seq 또는 serial을 순서대로 들어가게 하기 위하여 정렬
        		// 따라서 테이블을 전체 삭제하고 저장하나 UPDATE를 하나 수정자에 대한 내역은 소용이 없다.
        		// 전체 삭제 후 저장
        		for (var i = this.dsTA_VAT141_D.getRowCount() - 1; i >= 0; i--) {
        			this.dsTA_VAT141_D.setColumn(i, "VAT_SERIAL", i + 1);
        		}

        		this.grdTA_VAT141_D.setCellPos(0);
        		this.grdTA_VAT141_D.setFocus();
        		
        	} else {
        		this.fnc_Message("TMM200");
        		
        	}

        	this.fn_Total();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.dsTA_VAT141_D.getRowCount() > 0) {
        		if (this.fn_DeleteCheck()) {
        			this.dsTA_VAT141_D.deleteMultiRows(this.grdTA_VAT141_D.getSelectedDatasetRows());
        		}
        		// seq 또는 serial을 순서대로 들어가게 하기 위하여 정렬
        		// 따라서 테이블을 전체 삭제하고 저장하나 UPDATE를 하나 수정자에 대한 내역은 소용이 없다.
        		// 전체 삭제 후 저장
        		for (var i = this.dsTA_VAT141_D.getRowCount() - 1; i >= 0; i--) {
        			this.dsTA_VAT141_D.setColumn(i, "VAT_SERIAL", i + 1);
        		}
        	} else {
        		this.fnc_Message("TMM007"); //삭제 자료 없음 정보 Display
        	}

        	this.fn_Total();
        	this.grdTA_VAT141_D.setFocus(); //Record 삭제 후 Grid로 Focus
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fnc_DatasetChangeCheck("dsTA_VAT141_H,dsTA_VAT141_D")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VAT141_H=dsTA_VAT141_H:A ";
        		sInDataSet += "dsTA_VAT141_D=dsTA_VAT141_D:A "; //자료 저장 시 보낼 DataSet 명칭
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0060R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/
        		
        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0060_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT141_H=dsTA_VAT141_H dsTA_VAT141_D=dsTA_VAT141_D dsBRANCH_CD=dsBRANCH_CD"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT141_H,dsTA_VAT141_D", this);
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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT141_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
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
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기

        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);

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
        		if (this.dsTA_VAT141_H.getRowCount() < 1) {
        			var iRow = this.dsTA_VAT141_H.addRow();

        			this.dsTA_VAT141_H.setColumn(iRow, "BRANCH_CD"			, this.cmbSHRACCT_GUBN.value);
        			this.dsTA_VAT141_H.setColumn(iRow, "VAT_YYYY"			, this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4));
        			this.dsTA_VAT141_H.setColumn(iRow, "VAT_QUARTER"		, this.cmbVAT_QUARTER.value);
        			this.dsTA_VAT141_H.setColumn(iRow, "EXPORT_TCNT"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_TAMT"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_TAMT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "GOODS_CNT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_AMT_GOODS"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_AMT_GOODS"	, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "ETC_CNT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_AMT_ETC"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_AMT_ETC"	, 0);

        			this.dsTA_VAT141_H.set_updatecontrol(false);
        			var t = this.dsTA_VAT141_H.setRowType(iRow, Dataset.ROWTYPE_NORMAL);
        			this.dsTA_VAT141_H.set_updatecontrol(true);
        		}
        		this.fnc_Information(this.stInformation, this.dsTA_VAT141_D.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_VAT141_D.rowcount);
        		
        	} else if (sMethodName == "REPORT00") {

        	}else if (sMethodName == "PROC00") {
        		if (this.dsTA_VAT141_H.getRowCount() < 1) {
        			var iRow = this.dsTA_VAT141_H.addRow();

        			this.dsTA_VAT141_H.setColumn(iRow, "BRANCH_CD"			, this.cmbSHRACCT_GUBN.value);
        			this.dsTA_VAT141_H.setColumn(iRow, "VAT_YYYY"			, this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4));
        			this.dsTA_VAT141_H.setColumn(iRow, "VAT_QUARTER"		, this.cmbVAT_QUARTER.value);
        			this.dsTA_VAT141_H.setColumn(iRow, "EXPORT_TCNT"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_TAMT"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_TAMT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "GOODS_CNT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_AMT_GOODS"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_AMT_GOODS"	, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "ETC_CNT"			, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "WON_AMT_ETC"		, 0);
        			this.dsTA_VAT141_H.setColumn(iRow, "FOREIGN_AMT_ETC"	, 0);

        			this.dsTA_VAT141_H.set_updatecontrol(false);
        			var t = this.dsTA_VAT141_H.setRowType(iRow, Dataset.ROWTYPE_NORMAL);
        			this.dsTA_VAT141_H.set_updatecontrol(true);
        		}
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTA_VAT141_D,dsCURR_CODE,EXPORT_CURRENCY_CD";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);

        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_VAT141_D);

        	if (iSelectRowCount > 1) {
        		// Multi로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		// 한 건 삭제 처리시 해당 항목에 대한 삭제 여부 확인
        		var sQuestionText = "수출신고번호: " + this.dsTA_VAT141_D.getColumn(this.dsTA_VAT141_D.rowposition, "EXPORT_RNO");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------+
         |  처리 버튼 클릭 시 |
         +------------------*/
        this.btn_PROC_OnClick = function(obj,e) {
        	if (!this.fn_SearchItemCheck()) return;

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH dsTA_VAT141_H=dsTA_VAT141_H dsTA_VAT141_D=dsTA_VAT141_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*----------------------+
         |  헤더 DATASET 변경 시 |
         +----------------------*/
        this.dsTA_VAT141_H_oncolumnchanged = function(obj,e) {
        	obj.setColumn(e.row, "EXPORT_TCNT"	, nexacro.toNumber(obj.getColumn(e.row, "GOODS_CNT"),0) 		+ nexacro.toNumber(obj.getColumn(e.row, "ETC_CNT"),0));
        	obj.setColumn(e.row, "FOREIGN_TAMT"	, nexacro.toNumber(obj.getColumn(e.row, "FOREIGN_AMT_GOODS"),0) + nexacro.toNumber(obj.getColumn(e.row, "FOREIGN_AMT_ETC"),0) + nexacro.toNumber(obj.getColumn(e.row, "TIP_CREDIT_TAMT"),0));
        	obj.setColumn(e.row, "WON_TAMT"		, nexacro.toNumber(obj.getColumn(e.row, "WON_AMT_GOODS"),0)   	+ nexacro.toNumber(obj.getColumn(e.row, "WON_AMT_ETC"),0)   + nexacro.toNumber(obj.getColumn(e.row, "TIP_CASH_TAMT"),0));
        	
        }

        /*----------------------+
         |  바디 DATASET 변경 시 |
         +----------------------*/
        this.dsTA_VAT141_D_oncolumnchanged = function (obj,e) {
        	
        	var WON_AMT 	= this.dsTA_VAT141_D.getColumn(e.row, "WON_AMT");
        	var FOREIGN_AMT = this.dsTA_VAT141_D.getColumn(e.row, "FOREIGN_AMT");
        	var RATES 		= this.dsTA_VAT141_D.getColumn(e.row, "RATES");
        	
        	if (e.columnid == "RATES" || e.columnid == "WON_AMT" ) {
        		// 환율 또는 원화에서 ENTER 입력시(원화기준 계산)
        		WON_AMT = WON_AMT / parseFloat(RATES);
        		this.dsTA_VAT141_D.setColumn(e.row, "FOREIGN_AMT", WON_AMT);
        		
        	} else if (e.columnid == "FOREIGN_AMT") {
        		// 외화에서 ENTER 입력시(외화기준 계산)
        		FOREIGN_AMT = FOREIGN_AMT * parseFloat(RATES);
        		this.dsTA_VAT141_D.setColumn(e.row, "WON_AMT", FOREIGN_AMT);
        		;
        	}
        	
        	this.fn_Total();

        }

        /*-----------+
         |  fn_Total |
         +-----------*/
        this.fn_Total = function () {

        	var GOODS_E_SAMT = 0;
        	var GOODS_W_SAMT = 0;

        	for (var i = 0; i <= this.dsTA_VAT141_D.getRowCount() - 1; i++) {
        		GOODS_E_SAMT = nexacro.toNumber(GOODS_E_SAMT, 0) + nexacro.toNumber(this.dsTA_VAT141_D.getColumn(i, "FOREIGN_AMT"), 0);
        		GOODS_W_SAMT = nexacro.toNumber(GOODS_W_SAMT, 0) + nexacro.toNumber(this.dsTA_VAT141_D.getColumn(i, "WON_AMT"), 0);
        	}

        	this.dsTA_VAT141_H.setColumn(0, "GOODS_CNT"			, this.dsTA_VAT141_D.getRowCount());
        	this.dsTA_VAT141_H.setColumn(0, "FOREIGN_AMT_GOODS"	, GOODS_E_SAMT);
        	this.dsTA_VAT141_H.setColumn(0, "WON_AMT_GOODS" 	, GOODS_W_SAMT);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT141_H.addEventHandler("oncolumnchanged", this.dsTA_VAT141_H_oncolumnchanged, this);
            this.dsTA_VAT141_D.addEventHandler("oncolumnchanged", this.dsTA_VAT141_D_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_MASTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_TYPENM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_ADDR.addEventHandler("ontextchanged", this.edtCORP_ADDR_OnChanged, this);
            this.edtCORP_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnAdd.addEventHandler("onclick", this.fn_Input, this);
            this.btnDel.addEventHandler("onclick", this.fn_Delete, this);
            this.edtCORP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medAMT.addEventHandler("onchar", this.medSUPP_AMNT_onchar, this);
            this.medCNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCNT.addEventHandler("onchar", this.medSUPP_AMNT_onchar, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
