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
                this.set_name("TXMC0020");
                this.set_titletext("매출처별 계산서 집계표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFF_BILL_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"KEY\" type=\"STRING\"/><Column id=\"BILL_TYPENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" type=\"string\" size=\"32\"/><Column id=\"CORP_LINE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT110_D", "absolute", "8", "128", null, null, "25", "155", this);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT110_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"275\"/><Column size=\"50\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사업자/주민번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"상대처명\"/><Cell col=\"2\" displaytype=\"text\" text=\"매수\"/><Cell col=\"3\" displaytype=\"text\" text=\"공급가액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:CUST_NO\" expr=\"expr:dataset.getRowLevel(currow)==1?dataset.getColumn(currow-1,&quot;BILL_TYPENM&quot;):CUST_NO\" mask=\"expr:CUST_DIV == &quot;1&quot; ? &quot;###-##-#####&quot; : (CUST_DIV == &quot;2&quot; ? &quot;######-#######&quot; : &quot;&quot;)\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:CUST_NM\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:OFF_BILL_CCNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:OFF_SAMT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;OFF_BILL_CCNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;OFF_SAMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "8", "107", "216", "21", null, null, this);
            obj.set_text("계산서 매출자료");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VAT104_H1", "absolute", "8", null, "554", "110", null, "15", this);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT110_H1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"109\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처수\"/><Cell col=\"2\" displaytype=\"text\" text=\"매수\"/><Cell col=\"3\" displaytype=\"text\" text=\"공급가액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"합       계       분\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ALL_CCNT\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ALL_PCNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ALL_SAMT\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"사업자번호 발행분\" suppress=\"1\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BIZNO_CCNT\" suppress=\"2\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BIZNO_PCNT\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BIZNO_SAMT\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"주민번호 발행분\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SSN_CCNT\" suppress=\"2\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SSN_PCNT\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SSN_SAMT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "582", null, "456", "21", null, "125", this);
            obj.set_text("과세기간 종료일 다음달 11일까지 전송된 전자계산서 발급분");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VAT104_H2", "absolute", "582", null, null, "110", "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT110_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"109\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처수\"/><Cell col=\"2\" displaytype=\"text\" text=\"매수\"/><Cell col=\"3\" displaytype=\"text\" text=\"공급가액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"합       계       분\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ALL_CCNT\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ALL_PCNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ALL_SAMT\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"사업자번호 발행분\" suppress=\"1\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BIZNO_CCNT\" suppress=\"2\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BIZNO_PCNT\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BIZNO_SAMT\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"주민번호 발행분\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SSN_CCNT\" suppress=\"2\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SSN_PCNT\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SSN_SAMT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "8", null, "440", "21", null, "125", this);
            obj.set_taborder("9");
            obj.set_text("과세기간 종료일 다음달 11일까지 전송된 전자계산서 외 발급분");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "27", "71", "66", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "82", "71", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static6", "absolute", "405", "71", "76", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "470", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static0", "absolute", "271", "71", "50", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "469", "562", "80", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "562", "590", "20", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("매출처별 계산서 집계표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("27");
            obj.set_text("홈 > 재무관리 > 세무회계>부가세신고> 매출처별 계산서 집계표");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "74", "61", "8", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "242", "61", "40", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "377", "61", "40", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "313", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매출처별 계산서 집계표");
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
        this.addIncludeScript("TXMC0020.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0020.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0020       매출처별계산서집계표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		황치웅		Initial Created.
         *   2016.08.05		안윤준		수정
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; 
        this.sPACKAGENAME = "TXMC0020";
        this.sSERVERDATE  = this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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
        	this.fnc_DatasetClear("dsTA_VAT110_D,dsTA_VAT110_H1,dsTA_VAT110_H2");

        	var sMethodName  = "SEARCH00";
        	var sInDataSet   = "";
        	var	sOutDataSet  = "dsTA_VAT110_H1=dsTA_VAT110_H1 ";
        		sOutDataSet += "dsTA_VAT110_H2=dsTA_VAT110_H2 ";
        		sOutDataSet += "dsTA_VAT110_D=dsTA_VAT110_D ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
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
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	
        	var reportfile = "/txm/TXMC0020R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.text);

        	var dataref = new Array();
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/txm/TXMC0020_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsTA_VAT110_D=dsTA_VAT110_D dsTA_VAT110_H1=dsTA_VAT110_H1 dsTA_VAT110_H2=dsTA_VAT110_H2 dsTA_VAT110_H3=dsTA_VAT110_H3 dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
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
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도",this.calSHRVAT_YYYY);
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
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if ( sKind == "PRINT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
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
        		this.dsTA_VAT110_D.set_keystring("G:BILL_TYPECD");	
        		this.grdTA_VAT110_D.setFocus();
        		
        	} else if (sMethodName == "PRINT00") {
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTA_VAT110_D.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_VAT104_H1.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_VAT104_H2.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
