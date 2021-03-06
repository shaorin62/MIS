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
                this.set_name("TRMD0010");
                this.set_titletext("구매론미지급관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRACCT_INTL</Col><Col id=\"CODEID\">PUCD_ACCT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">LOAN_STAT</Col><Col id=\"DSNAME\">dsLOAN_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_NUMB\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPR_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECI_MAN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ERP_REC_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHKX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANA_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_NUMB\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPR_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECI_MAN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ERP_REC_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHKX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANA_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "69", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "143", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "164", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_SLIPXM");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"112\" band=\"left\"/><Column size=\"92\"/><Column size=\"160\"/><Column size=\"249\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"가맹점번호\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" displaytype=\"text\" text=\"지급액\"/><Cell col=\"6\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/><Cell col=\"8\" displaytype=\"text\" text=\"승인일\"/><Cell col=\"9\" displaytype=\"text\" text=\"지급일\"/><Cell col=\"10\" displaytype=\"text\" text=\"발행일\"/><Cell col=\"11\" displaytype=\"text\" text=\"거래번호\"/><Cell col=\"12\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"13\" displaytype=\"text\" text=\"뱅킹처리상태\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:comp.parent.fnc_Length(SEND_STATUS) &lt; 1 ? 'checkbox' : (SEND_STATUS == '3' ? 'checkbox' : (SEND_STATUS == '9' ? 'checkbox' : 'none'))\" edittype=\"expr:comp.parent.fnc_Length(SEND_STATUS) &lt; 1 ? 'checkbox' : (SEND_STATUS == '3' ? 'checkbox' : (SEND_STATUS == '9' ? 'checkbox' : 'none'))\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));background2:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\" editlimit=\"8\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:JOIN_NO\" editlimit=\"10\" editimemode=\"native\"/><Cell col=\"3\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CUST_NAME\" editlimit=\"10\" editimemode=\"native\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_AMNT\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PAY_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MANA_NO\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BIZR_NUMB\" mask=\"###-##-#####\"/><Cell col=\"13\" displaytype=\"combo\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SEND_STATUS\" combodisplaynulltype=\"nulltext\" combodisplay=\"edit\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "427", "97", "68", "21", null, null, this);
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "497", "97", "99", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "621", "97", "177", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "97", "66", "21", null, null, this);
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP", "absolute", null, "139", "98", "21", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("BiCNET전송");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_INTL", "absolute", "96", "97", "302", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Calendar("calSHRISSU_DATE", "absolute", "939", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static9", "absolute", "827", "71", "105", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("구매카드발행일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "614", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static08", "absolute", "599", "71", "14", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "497", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "427", "71", "68", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회계일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "274", "71", "124", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static2", "absolute", "217", "71", "55", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "92", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static4", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "598", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("구매론미지급관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("23");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "128", "61", "38", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "128", "118", "38", "10", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "128", "92", "102", "5", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "64", "30", "51", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "628", "129", "80", "35", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("34");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("구매론미지급관리");
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
        this.addIncludeScript("TRMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMD0010 구매론미지급관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
          *	 2016.10.14		김기환		수정      
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
        this.sBUTTONLIST = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMD0010"; 

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	
        	// 전표 mask
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM, "SLIP_NUMB", "Y");
        	
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	
        	this.calSHRACCT_DATE1.set_value((this.fnc_SubStr(sServerDateTime, 0, 6) + "01"));	//회계일자 FROM
            this.calSHRACCT_DATE2.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));			//회계일자 TO
            
            this.cmbSHRACCT_UNIT.setFocus();
            
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
        	this.fnc_DatasetClear("dsTA_SLIPXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus(); 

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

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name); 
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/

        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계일자(FROM)", this.calSHRACCT_DATE1);
        	}

        	if (this.fnc_Trim(this.calSHRACCT_DATE1.value) > this.fnc_Trim(this.calSHRACCT_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM125", "회계일자(FROM)이 회계일자(TO)보다 큽니다.", this.calSHRACCT_DATE1);
        	}

        	return true;
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_UNIT="    + this.fnc_Quote(this.cmbSHRACCT_UNIT.value); 
        		sReturnString += " ACCT_GUBN="    + this.fnc_Quote(this.cmbSHRACCT_GUBN.value); 
        		sReturnString += " ACCT_DATE1="   + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); //회계일자FROM
        		sReturnString += " ACCT_DATE2="   + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); //회계일자TO
        		sReturnString += " ISSU_DATE="    + this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DATE.value));  //발행일
        		sReturnString += " ACCT_INTL="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_INTL.value)); 	//계정과목
        		sReturnString += " CUST_CODE="    + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); 	//거래처
        		
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		  + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	  + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_UNIT="    + this.fnc_Quote(this.cmbSHRACCT_UNIT.value); 
        		sReturnString += " ACCT_GUBN="    + this.fnc_Quote(this.cmbSHRACCT_GUBN.value); 
        		sReturnString += " ACCT_DATE1="   + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); 	//회계일자FROM
        		sReturnString += " ACCT_DATE2="   + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); 	//회계일자TO
        		sReturnString += " ISSU_DATE=" 	  + this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DATE.value)); 		//발행일
        		sReturnString += " ACCT_INTL="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_INTL.value)); 		//계정과목
        		sReturnString += " CUST_CODE="    + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); 		//거래처
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
        	
        		this.grdTA_SLIPXM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_SLIPXM, "CHK"), "text", "0");
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPXM.rowcount); 
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[2] = "COMBO,cmbSHRACCT_INTL,dsSHRACCT_INTL,0";
        			arrParam[3] = "GRID,grdTA_SLIPXM,dsLOAN_STAT,SEND_STATUS";

        			this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "PROC00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.rowcount, "PROC"); 
        		this.fnc_Message("TMM130","BiCNET 전송"); //[BiCNET 전송] 작업을 정상적으로 완료 하였습니다!
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetUserComboCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	
        	}
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 거래처
        	if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) {

        		arrParam[0] = "FAM0021";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRCUST_NAME";                         
        		arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	}
        }

        /*------------------------------------+
         | Help Popup Open                    |
         +-------------------------------------
        this.fn_HelpDialoge = function (obj)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	switch (obj.name)
        	{
        		case "imgHelpSHRCUST_NAME":
        			// 거래처

        			sSearchKind = "CUST01"; //거래처 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = "";
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtSHRCUST_CODE.set_value(sResponse[0]);
        				this.edtSHRCUST_NAME.set_value(sResponse[1]);
        			}
        			break;
        		case "imgHelpSHRDEPT_NAME":
        			// 작성부서

        			sSearchKind = "DEPT01";
        			sCommonGubn = "";
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRDEPT_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtSHRDEPT_CODE.set_text(sResponse[0]); //부서
        				this.edtSHRDEPT_NAME.set_text(sResponse[1]); //부서명
        			}

        			break;
        		case "imgHelpSHRACCT_NAME":
        			// 계정과목

        			sSearchKind = "ACCT02"; //사용자 코드 조회 POPUP
        			sCommonGubn = this.sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = "";
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtSHRACCT_INTL.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME.set_value(sResponse[1]); //계정명
        			}

        			break;
        		case "imgHelpDEPT_NAME":
        			// 귀속부서 조회

        			sSearchKind = "DEPT01"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtDEPT_CODE.set_value(sResponse[0]); //결과 값 Display(부서코드)
        				this.edtDEPT_NAME.set_value(sResponse[1]); //결과 값 Display(부서명)
        			}
        			break;
        		case "imgHelpBUDG_DENM":
        			// 예산부서 조회

        			sSearchKind = "DEPT01"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtBUDG_DEPT.set_value(sResponse[0]); //결과 값 Display(부서코드)
        				this.edtBUDG_DENM.set_value(sResponse[1]); //결과 값 Display(부서명)
        			}
        			break;
        		case "imgHelpACCT_NAME":
        			// 계정과목

        			sSearchKind = "ACCT02"; //사용자 코드 조회 POPUP
        			sCommonGubn = this.sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = "";
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtACCT_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtACCT_INTL.set_text(sResponse[0]); //계정
        				this.edtACCT_NAME.set_text(sResponse[1]); //계정명
        			}

        			break;
        		case "imgHelpACNT_NAME":
        			// 계좌번호

        			sSearchKind = "ACNT08"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtACNT_NUMB.set_value(sResponse[2]); //결과 값 Display(계좌번호)
        				this.edtACNT_NAME.set_value(sResponse[3]); //결과 값 Display(계좌번호)
        				this.edtBANK_CODE.set_value(sResponse[0]);
        				this.edtBANK_NAME.set_value(sResponse[1]);
        			}
        			break;
        		case "imgHelpSHREMPL_NAME":
        			// 사원번호 Popup - 조회

        			if (this.edtSHREMPL_NAME.enable == false)
        			{
        				return;
        			}

        			sSearchKind = "EMPL01"; //사원조회 팝업
        			sInputValue = this.fnc_Trim(this.edtSHREMPL_NAME.value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, "", this.edtSHREMPL_NUMB); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtSHREMPL_NUMB.set_value(sResponse[0]); //사번
        				this.edtSHREMPL_NAME.set_value(sResponse[1]); //성명
        			}
        			break;
        		case "imgHelpSHRSLIP_EMPLNM":
        			// 사원번호 Popup - 조회

        			if (this.edtSHRSLIP_EMPLNM.enable == false)
        			{
        				return;
        			}

        			sSearchKind = "EMPL01"; //사원조회 팝업
        			sInputValue = this.fnc_Trim(this.edtSHRSLIP_EMPLNM.value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, "", this.edtSHRSLIP_EMPLNM); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0)
        			{
        				this.edtSHRSLIP_EMPLCD.set_value(sResponse[0]); //사번
        				this.edtSHRSLIP_EMPLNM.set_value(sResponse[1]); //성명
        			}
        			break;
        	}
        }
        */

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
         
        /*------------------------------------+
         |  변경 데이터 여부 체크           |
         +-------------------------------------*/
        /*
        this.fn_chkUpdate = function (obj) {

        	if (this.GetUpdate(obj)) {
        		this.fnc_Message("TMM125", "변경된 데이터를 저장 또는 취소한후에 선택하세요!!");
        		return false;
        	}

        	return true;
        }
         */
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------------------+
         |  Dataset Check Toggle 처리          |
         +-------------------------------------*/
        /*
        this.fn_SetCellChk = function (chk_val, objDs, chk_col)
        {
        	for (var i = 0; i < objDs.getRowCount(); i++)
        	{
        		if (this.fnc_Length(this.fnc_Trim(objDs.getColumn(i, "SEND_STATUS"))) < 1 || this.fnc_Trim(objDs.getColumn(i, "SEND_STATUS")) == "3")
        		{
        			objDs.setColumn(i, chk_col, chk_val);

        			objDs.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        	}
        }*/

        /*------------------------------------+
         |  Grid Help Button Clikc             |
         +-------------------------------------*/
        /*
        this.fn_OpenGridPopup = function (obj, nRow, nCell, strVal, nPivotIndex)
        {
        	this.fn_OpenDetailWindow(obj, nRow, nCell, strVal, nPivotIndex);
        }
        */

        /*------------------------------------------------------------+
         |  코드나 명 입력 후 Lost Focus 시 해당 정보 Display     |
         +------------------------------------------------------------*/
        /*
        this.fn_OpenDetailWindow = function (obj, nRow, nCell, strVal, nPivotIndex)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (nCell)
        	{
        		case 5:
        			// 거래처명

        			if (this.fnc_ToUpper(this.grdTA_FBINXM.getCellProperty("body", 5, "edittype")) == "NONE")
        			{
        				return;
        			}

        			sSearchKind = "CUST01"; //거래처조회
        			sInputValue = this.fnc_Trim(strVal); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			this.lookupSetter("sResponse", "set_sResponse").set(this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.grdTA_FBINXM)); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(this.sResponse)) != 0)
        			{
        				this.dsTA_FBINXM.set_enableevent(false);
        				this.dsTA_FBINXM.setColumn(nRow, "CUST_CODE", this.sResponse[0]);
        				this.dsTA_FBINXM.setColumn(nRow, "CUST_NAME", this.sResponse[1]);
        				this.dsTA_FBINXM.set_enableevent(true);
        			}
        			else
        			{
        				this.dsTA_FBINXM.set_enableevent(false);
        				this.dsTA_FBINXM.setColumn(nRow, "CUST_CODE", "");
        				this.dsTA_FBINXM.setColumn(nRow, "CUST_NAME", "");
        				this.dsTA_FBINXM.set_enableevent(true);
        			}
        			break;
        		case 9:
        			// 계좌번호명

        			if (this.fnc_ToUpper(this.grdTA_FBINXM.getCellProperty("body", 9, "edittype")) == "NONE")
        			{
        				return;
        			}

        			sSearchKind = "ACNT08"; //계좌번호
        			sInputValue = this.fnc_Trim(strVal);
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			this.lookupSetter("sResponse", "set_sResponse").set(this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.grdTA_FBINXM)); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(this.sResponse)) != 0)
        			{
        				this.dsTA_FBINXM.set_enableevent(false);
        				this.dsTA_FBINXM.setColumn(nRow, "ACCT_NUMB", this.sResponse[2]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_FBINXM.setColumn(nRow, "ACNT_NAME", this.sResponse[3]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_FBINXM.set_enableevent(true);
        			}
        			else
        			{
        				this.dsTA_FBINXM.set_enableevent(false);
        				this.dsTA_FBINXM.setColumn(nRow, "ACCT_NUMB", ""); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_FBINXM.setColumn(nRow, "ACNT_NAME", ""); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        				this.dsTA_FBINXM.set_enableevent(true);
        			}
        			break;
        	}
        }
        */

        /*------------------------------------+
         |  데이터셋 컬럼 변경시     |
         +-------------------------------------*/
        this.dsTA_FBINXM_OnColumnChanged = function (obj,nRow,strColumnID,varOldValue,varNewValue,nPivotIndex)
        {
        	if (varOldValue == varNewValue) return;

        	if (strColumnID != "CHK") {
        	
        		this.dsTA_FBINXM.set_updatecontrol(true);
        	}
        }

        /*------------------------------------+
         |  BiCNET전송 클릭 시     			|
         +-------------------------------------*/
        this.btnCREATE_SLIP_OnClick = function (obj,e)
        {
        	if( this.dsTA_SLIPXM.rowcount < 1 ){
        		this.fnc_Message("FAM007", "BiCNET전송"); // [BiCNET전송] 가능한 데이터가 없습니다!!
        		return;
        	}
        	
        	var checkCount = 0;
        	for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {
        	
        		if (this.dsTA_SLIPXM.getColumn(i, "CHK") == "1") {
        		
        			checkCount++;

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "JOIN_NO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM125", " 거래처의 가맹점번호를 거래처정보등록 화면에서 입력한후에 조회후 작업하십시요.", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "JOIN_NO");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM125", " 전표의 관리항목에 거래처를 입력해야 합니다..", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "CUST_CODE");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "PAY_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM125", " 전표의 관리항목에 지급일을 입력해야 합니다..", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "PAY_DATE");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "ISSU_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM125", " 전표의 관리항목에 발행일을 입력해야 합니다..", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "ISSU_DATE");
        			}
        		}
        	}

        	if (checkCount == 0) {
        		this.fnc_Message("TMM125", " 처리대상을 선택하십시요!!");
        		return;
        	}
        	   
        	if (!this.fnc_Message("TMM140", "[BiCNET 전송] 하시겠습니까")) return;

        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM_SLIP.clearData();
        	
        	this.dsTA_SLIPXM.set_enableevent(false);
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_SLIP.copyData(this.dsTA_SLIPXM, true); 
        	this.dsTA_SLIPXM.filter("");
        	this.dsTA_SLIPXM.set_enableevent(true);

        	var sMethodName = "PROC00";
        	var sInDataSet = "dsTA_SLIPXM_SLIP=dsTA_SLIPXM_SLIP";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus(); 
        }

        /*------------------------------------+
         |  그리드 "grdTA_SLIPXM" 더블클릭 시 |
         +-------------------------------------*/
        this.grdTA_SLIPXM_OnCellDblClick = function (obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	var objDs = this.objects[obj.binddataset];

        	var sSLIP_NUMB = "";
        	
        	if (columnName == "SLIP_NUMB") { 		/* 전표번호 */

        		//전표번호+라인이 18자리 미만인지 체크
        		if (this.fnc_Length(objDs.getColumn(e.row, "SLIP_NUMB")) < 18) return;
        		
        		//전표번호가 존재하는지 체크
        		sSLIP_NUMB 		= this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_NUMB"), 0, 14);
        		sSLIP_NUMB_LINE = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_NUMB"), 14, 4);
        		
        		if (this.fnc_Length(sSLIP_NUMB) < 14) return;
        		
        		//전표보기 수행
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL,"",sSLIP_NUMB_LINE); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		
        	} 
        }

        /*------------------------------------+
         |  데이터셋 "dsTA_SLIPXM" 컬럼 변경 시 |
         +-------------------------------------*/
        this.dsTA_SLIPXM_oncolumnchanged = function (obj,e) {

        	if (e.oldvalue == e.newvalue) return;

        	if (e.columnid == "CHK") {
        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);

        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);

        		return;
        	}
        }

        /*------------------------------------+
         |  GRID "grdTA_SLIPXM" 헤더 클릭 시 |
         +-------------------------------------*/
        this.grdTA_SLIPXM_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) 
        	{
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} 
        	else 
        	{
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}

        	/* Dataset에 Value 일괄 설정 */
        	for (var i=0; i < objDataSet.rowcount; i++) {

        		if ( this.fnc_Length(objDataSet.getColumn(i,"SEND_STATUS")) >= 1 && 
        			objDataSet.getColumn(i,"SEND_STATUS") != "3" && objDataSet.getColumn(i,"SEND_STATUS") != "9" ){
        			continue;
        		}
        		
        		objDataSet.setColumn(i, "CHK", iCheckValue);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXM.addEventHandler("oncolumnchanged", this.dsTA_SLIPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_OnCellDblClick, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_OnClick, this);
            this.cmbSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRISSU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
