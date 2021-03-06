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
                this.set_name("TXMC0110");
                this.set_titletext("공제받지못할매입세액명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"UNABLE_SEQ\" size=\"10\" type=\"STRING\"/><Column id=\"UNABLE_TYPECD\" size=\"2\" type=\"STRING\"/><Column id=\"UNABLE_TYPENM\" size=\"256\" type=\"STRING\"/><Column id=\"UNABLE_PCNT\" size=\"9\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"UNABLE_SEQ1\" size=\"10\" type=\"STRING\"/><Column id=\"COMPUR_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"COMPUR_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_ETC_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"EXCEPT_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"UNABLE_SEQ2\" size=\"10\" type=\"STRING\"/><Column id=\"TOTPUR_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"EXCEPT_RATE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UNATOT_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PRE_UNATOT_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ADDUNA_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"UNABLE_SEQ3\" size=\"10\" type=\"STRING\"/><Column id=\"PURGOO_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ADDMIN_RATE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ADDEXC_RATE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ADDUNA_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab0", "absolute", "8", "167", null, null, "25", "15", this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_taborder("75");
            obj.set_text("1쪽");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "10", "9", "197", "21", null, null, this.Tab0.tab1);
            obj.set_text("공제받지 못할 매입세액 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdTA_VAT153_D", "absolute", "10", "30", null, "260", "10", null, this.Tab0.tab1);
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT153_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("0");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"236\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"186\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"매입세액 불공정사유\"/><Cell col=\"1\" colspan=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"세금계산서\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"비고\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"매수\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"공급가액\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"매입세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:UNABLE_TYPENM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNABLE_PCNT\" editlimit=\"9\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNABLE_SAMT\" editlimit=\"17\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNABLE_VAMT\" editlimit=\"17\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:remark\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNABLE_PCNT&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNABLE_SAMT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNABLE_VAMT&quot;)\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdTA_VAT153_D1", "absolute", "10", "320", null, null, "10", "10", this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT153_D1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"59\"/><Column size=\"85\"/><Column size=\"105\"/><Column size=\"115\"/><Column size=\"125\"/><Column size=\"208\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"일련번호\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"과세,면세사업 공통매입\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"총공급가액 등\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"면세공급가액등\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"불공제매입세액\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"공급가액\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align: center;\" text=\"bind:UNABLE_SEQ1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMPUR_SAMT\" mask=\"###,##0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMPUR_VAMT\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:UNABLE_SAMT\" mask=\"###,##0.##\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EXCEPT_SAMT\" mask=\"###,##0.##\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNABLE_VAMT\" expr=\"expr:UNABLE_VAMT\" mask=\"###,##0\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;COMPUR_SAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;COMPUR_VAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNABLE_SAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;EXCEPT_SAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNABLE_VAMT&quot;)\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "10", "299", "197", "21", null, null, this.Tab0.tab1);
            obj.set_text("공통매입세액 안분계산 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "812", "0", "80", "30", null, null, this.Tab0.tab1);
            obj.set_taborder("2");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "220", "9", "262", "21", null, null, this.Tab0.tab1);
            obj.set_taborder("3");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "208", "12", "10", "13", null, null, this.Tab0.tab1);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation02", "absolute", "208", "302", "10", "13", null, null, this.Tab0.tab1);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation03", "absolute", "220", "299", "262", "21", null, null, this.Tab0.tab1);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "812", "290", "80", "30", null, null, this.Tab0.tab1);
            obj.set_taborder("9");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_taborder("75");
            obj.set_text("2쪽");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdTA_VAT153_D2", "absolute", "10", "30", null, "250", "10", null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT153_D2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"62\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"161\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"일련번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"총공통&#13;&#10;매입세액\"/><Cell col=\"2\" displaytype=\"text\" text=\"면세사업&#13;&#10;확정비율\"/><Cell col=\"3\" displaytype=\"text\" text=\"불공정매입&#13;&#10;세액총액(15*16)\"/><Cell col=\"4\" displaytype=\"text\" text=\"기불공제&#13;&#10;매입세액\"/><Cell col=\"5\" displaytype=\"text\" text=\"가산 또는 공제되는&#13;&#10;매입세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:UNABLE_SEQ2\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:TOTPUR_VAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:EXCEPT_RATE\" editlimit=\"17\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:UNATOT_VAMT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PRE_UNATOT_VAMT\" editlimit=\"17\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ADDUNA_VAMT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TOTPUR_VAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;UNATOT_VAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;PREUNA_VAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ADDUNA_VAMT&quot;)\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdTA_VAT153_D3", "absolute", "10", "310", null, null, "10", "10", this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT153_D3");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"64\"/><Column size=\"110\"/><Column size=\"232\"/><Column size=\"184\"/><Column size=\"154\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"일련번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"해당 재화의&#13;&#10;매입세액\"/><Cell col=\"2\" displaytype=\"text\" text=\"경감률[1-(5/100 또는 25/100 * &#13;&#10;경과된 과세기간의 수)]\"/><Cell col=\"3\" displaytype=\"text\" text=\"증가 또는 감소된&#13;&#10;면세공급가액(사용면적)비율\"/><Cell col=\"4\" displaytype=\"text\" text=\"가산 또는 공제되는&#13;&#10;매입세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:UNABLE_SEQ3\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PURGOO_VAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:ADDMIN_RATE\" editlimit=\"17\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align: right;\" text=\"bind:ADDEXC_RATE\" editlimit=\"17\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ADDUNA_VAMT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;PURGOO_VAMT&quot;)\" mask=\"###,##0\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ADDUNA_VAMT&quot;)\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tab2);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tab2);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Button("btnAdd1", "absolute", null, "285", "62", "21", "75", null, this.Tab0.tab2);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Button("btnDel1", "absolute", null, "285", "62", "21", "10", null, this.Tab0.tab2);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "10", "9", "221", "21", null, null, this.Tab0.tab2);
            obj.set_taborder("6");
            obj.set_text("공통매입세액의 정산 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "190", "12", "10", "13", null, null, this.Tab0.tab2);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "202", "9", "262", "21", null, null, this.Tab0.tab2);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "10", "289", "245", "21", null, null, this.Tab0.tab2);
            obj.set_taborder("9");
            obj.set_text("납부세액 또는 환급세액 재계산 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation02", "absolute", "252", "292", "10", "13", null, null, this.Tab0.tab2);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation03", "absolute", "264", "289", "262", "21", null, null, this.Tab0.tab2);
            obj.set_taborder("11");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "812", "0", "80", "30", null, null, this.Tab0.tab2);
            obj.set_taborder("12");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "812", "280", "80", "30", null, null, this.Tab0.tab2);
            obj.set_taborder("13");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab2.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "123", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "118", null, "39", "25", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "122", "127", "180", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "331", "127", "110", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBIZ_NO", "absolute", "439", "127", "90", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_MASTER", "absolute", "653", "127", "160", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "127", "110", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("상호(법인명)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "559", "127", "110", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("성명(대표자)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "85", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static6", "absolute", "437", "71", "60", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "505", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("공제받지못할매입세액명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("36");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>공제받지못할매입세액명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "103", "80", "15", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("49");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 972, 563, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("75");
            		p.set_text("1쪽");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 972, 563, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("75");
            		p.set_text("2쪽");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 123, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공제받지못할매입세액명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsVA_VATBRANCH","BRANCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBIZ_NO_value","mskBIZ_NO","value","dsVA_VATBRANCH","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_MASTER_value","edtCORP_MASTER","value","dsVA_VATBRANCH","CORP_MASTER");
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
        this.addIncludeScript("TXMC0110.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0110.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0110       공제받지못할매입세액명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.04		황치웅		Initial Created.
         *   2016.08.09		안윤준		수정
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
        this.sPACKAGENAME 	= "TXMC0110";
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
         |  09.최초 화면 Load時 처리 할 사항  |
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
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) { 
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("");

        	var sMethodName  = "SEARCH00";
        	var sInDataSet   = "";
        	var sOutDataSet  = "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT153_H=dsTA_VAT153_H ";
        		sOutDataSet += "dsTA_VAT153_D=dsTA_VAT153_D ";
        		sOutDataSet += "dsTA_VAT153_D1=dsTA_VAT153_D1 ";
        		sOutDataSet += "dsTA_VAT153_D2=dsTA_VAT153_D2 ";
        		sOutDataSet += "dsTA_VAT153_D3=dsTA_VAT153_D3 ";
        	var sArgument 	 = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
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
        	
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (this.dsVA_VATBRANCH.rowcount < 1) {
        		this.fnc_Message("M1046", "조회 후 저장하세요");
        		return false;
        	}
        	
        // 	if (!this.fnc_DatasetChangeCheck("dsTA_VAT153_H,dsTA_VAT153_D,dsTA_VAT153_D1,dsTA_VAT153_D2,dsTA_VAT153_D3")) {
        // 		this.fnc_Message("TMM003");
        // 		return false;
        // 	}
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_VAT153_H=dsTA_VAT153_H:A ";
        		sInDataSet += "dsTA_VAT153_D=dsTA_VAT153_D:A ";
        		sInDataSet += "dsTA_VAT153_D1=dsTA_VAT153_D1:A ";
        		sInDataSet += "dsTA_VAT153_D2=dsTA_VAT153_D2:A ";
        		sInDataSet += "dsTA_VAT153_D3=dsTA_VAT153_D3:A ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0110R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.text);

        	var dataref = new Array();
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/txm/TXMC0110_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsTA_VAT153_D=dsTA_VAT153_D dsTA_VAT153_D1=dsTA_VAT153_D1 dsTA_VAT153_D2=dsTA_VAT153_D2 dsTA_VAT153_D3=dsTA_VAT153_D3 dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT153_H,dsTA_VAT153_D,dsTA_VAT153_D1,dsTA_VAT153_D2,dsTA_VAT153_D3", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        	
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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT153_H,dsTA_VAT153_D,dsTA_VAT153_D1,dsTA_VAT153_D2,dsTA_VAT153_D3")) {
        		if (!this.fnc_Message("M1023")) {
        			return false;
        		}
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		this.fnc_Message("M1005", "연도"); //Message 처리
        		this.calSHRVAT_YYYY.setFocus(); //해당 항목으로 Focus
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
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 										  //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 										  //VAT분기
        		
        	} else if ( sKind == "PRINT00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 										  //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 										  //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        	}

        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
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
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "PRINT00") {

        	} else if (sMethodName == "PROC00") {
        		this.fn_Search();
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);

        	}
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.btn_PROC_OnClick = function (obj,e) {

        	if (!this.fnc_Message('TMM140', "이전에 생성된 자료는 삭제되고 다시 자료생성 합니다. 처리하시겠습니까")) return;

        	if (!this.fn_SearchItemCheck()) return;

        	this.dsTA_VAT153_D2.clearData();
        	this.dsTA_VAT153_D3.clearData();

        	var sInDataSet   = "";
        	var sMethodName  = "PROC00";
        	var sOutDataSet  = "";
        	var sArgument 	 = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.Tab0_tab2_btnAdd_onclick = function(obj,e) {

        	if (this.dsVA_VATBRANCH.rowcount > 0) {
        		var iRow = this.dsTA_VAT153_D2.addRow();
        		this.dsTA_VAT153_D2.setColumn(iRow, "BRANCH_CD"		, this.dsTA_VAT153_H.getColumn(0, "BRANCH_CD"));
        		this.dsTA_VAT153_D2.setColumn(iRow, "VAT_YYYY"		, this.dsTA_VAT153_H.getColumn(0, "VAT_YYYY"));
        		this.dsTA_VAT153_D2.setColumn(iRow, "VAT_QUARTER"	, this.dsTA_VAT153_H.getColumn(0, "VAT_QUARTER"));
        		this.dsTA_VAT153_D2.setColumn(iRow, "UNABLE_SEQ2"	, iRow + 1);
        		
        	} else {
        		this.fnc_Message("M1002"); //DataSet의 Header가 없어서 오류
        		return false;
        	}

        	// seq 또는 serial을 순서대로 들어가게 하기 위하여 정렬
        	// 따라서 테이블을 전체 삭제하고 저장하나 UPDATE를 하나 수정자에 대한 내역은 소용이 없다.
        	// 전체 삭제 후 저장
        	for (var i = this.dsTA_VAT153_D2.getRowCount() - 1; i >= 0; i--) {
        		this.dsTA_VAT153_D2.setColumn(i, "UNABLE_SEQ2", i + 1);
        	}

        	this.Tab0.tab2.grdTA_VAT153_D2.setCellPos(1);
        	this.Tab0.tab2.grdTA_VAT153_D2.setFocus();
        	
        }

        this.Tab0_tab2_btnDel_onclick = function(obj,e) {

        	if (this.dsTA_VAT153_D.getRowCount() > 0) {
        		if (this.fn_DeleteCheck()) {
        			this.dsTA_VAT153_D2.deleteMultiRows(this.Tab0.tab2.grdTA_VAT153_D2.getSelectedDatasetRows());
        			
        		}
        	} else {
        		this.fnc_Message("M1003"); //삭제 자료 없음 정보 Display
        		return false;
        		
        	}

        	// seq 또는 serial을 순서대로 들어가게 하기 위하여 정렬
        	// 따라서 테이블을 전체 삭제하고 저장하나 UPDATE를 하나 수정자에 대한 내역은 소용이 없다.
        	// 전체 삭제 후 저장
        	for (var i = this.dsTA_VAT153_D2.getRowCount() - 1; i >= 0; i--) {
        		this.dsTA_VAT153_D2.setColumn(i, "UNABLE_SEQ2", i + 1);
        	} 
        	this.Tab0.tab2.grdTA_VAT153_D2.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        
        this.Tab0_tab2_btnAdd1_onclick = function(obj,e) {

        	if (this.dsVA_VATBRANCH.rowcount > 0) {
        		var iRow = this.dsTA_VAT153_D3.addRow();
        		this.dsTA_VAT153_D3.setColumn(iRow, "BRANCH_CD"		, this.dsTA_VAT153_H.getColumn(0, "BRANCH_CD"));
        		this.dsTA_VAT153_D3.setColumn(iRow, "VAT_YYYY"		, this.dsTA_VAT153_H.getColumn(0, "VAT_YYYY"));
        		this.dsTA_VAT153_D3.setColumn(iRow, "VAT_QUARTER"	, this.dsTA_VAT153_H.getColumn(0, "VAT_QUARTER"));
        		this.dsTA_VAT153_D3.setColumn(iRow, "UNABLE_SEQ3"	, iRow + 1);
        		
        	} else {
        		this.fnc_Message("M1002"); //DataSet의 Header가 없어서 오류
        		return false;
        	}

        	for (var i = this.dsTA_VAT153_D3.getRowCount() - 1; i >= 0; i--) {
        		this.dsTA_VAT153_D3.setColumn(i, "UNABLE_SEQ3", i + 1);
        	}

        	this.Tab0.tab2.grdTA_VAT153_D3.setCellPos(1);
        	this.Tab0.tab2.grdTA_VAT153_D3.setFocus();
        }

        this.Tab0_tab2_btnDel1_onclick = function(obj,e) {

        	if (this.dsTA_VAT153_D.getRowCount() > 0) {
        	
        		if (this.fn_DeleteCheck1()) {
        			this.dsTA_VAT153_D3.deleteMultiRows(this.Tab0.tab2.grdTA_VAT153_D3.getSelectedDatasetRows());
        		}
        	} else {
        		this.fnc_Message("M1003"); //삭제 자료 없음 정보 Display
        		return false;
        	}

        	for (var i = this.dsTA_VAT153_D3.getRowCount() - 1; i >= 0; i--) {
        		this.dsTA_VAT153_D3.setColumn(i, "UNABLE_SEQ3", i + 1);
        	} 
        	this.Tab0.tab2.grdTA_VAT153_D3.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tab2.grdTA_VAT153_D2);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	} else {
        		var sQuestionText = "일련번호:" + this.dsTA_VAT153_D2.getColumn(this.dsTA_VAT153_D2.rowposition, "UNABLE_SEQ2");
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        }

        this.fn_DeleteCheck1 = function () {

        	var iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tab2.grdTA_VAT153_D3);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	} else {
        		var sQuestionText = "일련번호:" + this.dsTA_VAT153_D3.getColumn(this.dsTA_VAT153_D3.rowposition, "UNABLE_SEQ3");
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        }

        /*-----------------------------------------------+
         |  그리드 값 변경 시 ( 확인 안되서 function 제거 ) |
         +-----------------------------------------------*/
        this.grdTA_VAT153_D2_OnChar = function (obj,e) {

        	if (nexacro.toNumber(e.posttext, 0) > 1 && e.cell == 3) {
        		this.fnc_Message("M1046", "1이하의 값을 입력하세요");
        		this.dsTA_VAT153_D2.setColumn(e.row, "EXCEPT_RATE", e.pretext);
        		this.Tab0.tab2.grdTA_VAT153_D2.setFocus();
        		
        	}
        	
        }

        this.grdTA_VAT153_D3_OnChar = function (obj,e) {

        	if (nexacro.toNumber(e.posttext, 0) > 1 && e.cell == 3) {
        		this.fnc_Message("M1046", "1이하의 값을 입력하세요");
        		this.dsTA_VAT153_D3.setColumn(e.row, "ADDMIN_RATE", e.pretext);
        		this.Tab0.tab2.grdTA_VAT153_D3.setFocus();
        	} else if (parseFloat(e.posttext) > 1 && e.cell == 4) {
        		this.fnc_Message("M1046", "1이하의 값을 입력하세요");
        		this.dsTA_VAT153_D3.setColumn(e.row, "ADDEXC_RATE", e.pretext);
        		this.Tab0.tab2.grdTA_VAT153_D3.setFocus();
        	}
        }

        this.dsTA_VAT153_D1_oncolumnchanged = function (obj,e) {
        	var UNABLE_VAMT = 0;
        	UNABLE_VAMT = nexacro.toNumber(this.dsTA_VAT153_D1.getColumn(e.row, "COMPUR_VAMT"), 0) * (nexacro.toNumber(this.dsTA_VAT153_D1.getColumn(e.row, "EXCEPT_SAMT"), 0) / nexacro.toNumber(this.dsTA_VAT153_D1.getColumn(e.row, "UNABLE_SAMT"), 0));
        	this.dsTA_VAT153_D1.setColumn(e.row, "UNABLE_VAMT", UNABLE_VAMT);
        	
        }

        this.dsTA_VAT153_D2_oncolumnchanged = function (obj,e) {

        	var UNATOT_VAMT = 0;
        	var ADDUNA_VAMT = 0;

        	UNATOT_VAMT = nexacro.toNumber(this.dsTA_VAT153_D2.getColumn(e.row, "TOTPUR_VAMT"), 0) * nexacro.toNumber(this.dsTA_VAT153_D2.getColumn(e.row, "EXCEPT_RATE"), 0);
        	this.dsTA_VAT153_D2.setColumn(e.row, "UNATOT_VAMT", UNATOT_VAMT);

        	ADDUNA_VAMT = nexacro.toNumber(this.dsTA_VAT153_D2.getColumn(e.row, "UNATOT_VAMT"), 0) - nexacro.toNumber(this.dsTA_VAT153_D2.getColumn(e.row, "PRE_UNATOT_VAMT"), 0);
        	this.dsTA_VAT153_D2.setColumn(e.row, "ADDUNA_VAMT", ADDUNA_VAMT);
        	
        }

        this.dsTA_VAT153_D3_oncolumnchanged = function (obj,e) {

        	var ADDUNA_VAMT = 0;

        	ADDUNA_VAMT = nexacro.toNumber(this.dsTA_VAT153_D3.getColumn(e.row, "PURGOO_VAMT"), 0) * nexacro.toNumber(this.dsTA_VAT153_D3.getColumn(e.row, "ADDMIN_RATE"), 0) * nexacro.toNumber(this.dsTA_VAT153_D3.getColumn(e.row, "ADDEXC_RATE"), 0);

        	this.dsTA_VAT153_D3.setColumn(e.row, "ADDUNA_VAMT", ADDUNA_VAMT);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT153_D1.addEventHandler("oncolumnchanged", this.dsTA_VAT153_D1_oncolumnchanged, this);
            this.dsTA_VAT153_D2.addEventHandler("oncolumnchanged", this.dsTA_VAT153_D2_oncolumnchanged, this);
            this.dsTA_VAT153_D3.addEventHandler("oncolumnchanged", this.dsTA_VAT153_D3_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.Tab0.tab1.grdTA_VAT153_D.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab1.grdTA_VAT153_D1.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab2.grdTA_VAT153_D2.addEventHandler("onchar", this.grdTA_VAT153_D2_OnChar, this);
            this.Tab0.tab2.grdTA_VAT153_D2.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab2.grdTA_VAT153_D3.addEventHandler("onchar", this.grdTA_VAT153_D3_OnChar, this);
            this.Tab0.tab2.grdTA_VAT153_D3.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab2.btnAdd.addEventHandler("onclick", this.Tab0_tab2_btnAdd_onclick, this);
            this.Tab0.tab2.btnDel.addEventHandler("onclick", this.Tab0_tab2_btnDel_onclick, this);
            this.Tab0.tab2.btnAdd1.addEventHandler("onclick", this.Tab0_tab2_btnAdd1_onclick, this);
            this.Tab0.tab2.btnDel1.addEventHandler("onclick", this.Tab0_tab2_btnDel1_onclick, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_MASTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
