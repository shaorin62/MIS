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
                this.set_name("TRMA0050");
                this.set_titletext("지급출납관리");
                this.set_scrollbars("none");
                this.set_visible("true");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"DSNAME\">dsAPPS_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_NUMB\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPR_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECI_MAN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ERP_REC_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHKX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_BANK", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_NUMB\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPR_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECI_MAN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ERP_REC_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHKX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_T", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBAL_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_NUMB\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPR_DATE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECI_MAN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ERP_REC_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHKX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "292", "129", "80", "35", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("지급(출납)관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "647", "56", "128", "4", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "143", "240", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "164", null, null, "25", "15", this);
            obj.set_taborder("26");
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"31\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"111\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"127\"/><Column size=\"88\"/><Column size=\"249\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일자\"/><Cell col=\"2\" text=\"결재상태\"/><Cell col=\"3\" text=\"출금계좌번호\"/><Cell col=\"4\" text=\"출금계좌명\"/><Cell col=\"5\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"6\" displaytype=\"text\" text=\"거래처/사원&#13;&#10;코드\"/><Cell col=\"7\" displaytype=\"text\" text=\"거래처/사원명\"/><Cell col=\"8\" displaytype=\"text\" text=\"지급액\"/><Cell col=\"9\" displaytype=\"text\" text=\"적요\"/><Cell col=\"10\" displaytype=\"text\" text=\"사용(귀속)부서\"/><Cell col=\"11\" displaytype=\"text\" text=\"수취인\"/><Cell col=\"12\" displaytype=\"text\" text=\"은행코드\"/><Cell col=\"13\" displaytype=\"text\" text=\"은행명\"/><Cell col=\"14\" displaytype=\"text\" style=\"background: ;\" text=\"지급계좌\"/><Cell col=\"15\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"16\" displaytype=\"text\" text=\"발생전표번호\"/><Cell col=\"17\" displaytype=\"text\" text=\"결제전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:APPS_CODE\"/><Cell col=\"3\" text=\"bind:RPAY_ACNT_NUMB\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RPAY_ACNT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" text=\"bind:VIEW_CUST\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:VIEW_CUST_NM\" editlimit=\"10\" editimemode=\"native\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_AMNT\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:RECI_MAN\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BANK_CODE\"/><Cell col=\"13\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BANK_NAME\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"expand\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));background2:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACNT_NUMB\" expandshow=\"expr:comp.parent.fnc_Length(EMPL_NUMB) &lt; 1 ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"15\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BIZR_NUMB\" mask=\"expr:comp.parent.fnc_Length(BIZR_NUMB) &lt; 1 ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\" editlimit=\"8\" editimemode=\"native\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:OSLI_NUMB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "744", "71", "90", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "801", "71", "76", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "902", "71", "116", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "96", "97", "78", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "199", "97", "140", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "101", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "226", "71", "55", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "283", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "428", "71", "76", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("회계일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "498", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("Static08", "absolute", "600", "71", "14", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "615", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Edit("edtSHRACCT_INTL_TO", "absolute", "356", "97", "78", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME_TO", "absolute", "459", "97", "139", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "341", "97", "14", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAME", "absolute", "176", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAME_TO", "absolute", "436", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "879", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "9", "64", "30", "51", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "138", "92", "102", "5", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "138", "118", "38", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "138", "61", "38", "10", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnBankExcel", "absolute", null, "139", "122", "21", "25", null, this);
            obj.set_taborder("43");
            obj.set_text("은행제출용 엑셀");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnAcntNumbInit", "absolute", null, "139", "122", "21", "150", null, this);
            obj.set_taborder("44");
            obj.set_text("지급계좌 초기화");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "757", "97", "40", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "801", "97", "76", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_tabstop("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NAME", "absolute", "879", "97", "22", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "902", "97", "116", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM_BANK", "absolute", "208", "382", "760", "242", null, null, this);
            obj.set_taborder("25");
            obj.set_binddataset("dsTA_SLIPXM_BANK");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"148\"/><Column size=\"77\"/><Column size=\"115\"/><Column size=\"190\"/><Column size=\"129\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"거래처\"/><Cell col=\"1\" displaytype=\"text\" text=\"은행코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"은행명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"계좌번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:RECI_MAN\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BANK_CODE\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BANK_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACNT_NUMB\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_AMNT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("지급출납관리");
            		p.set_scrollbars("none");
            		p.set_visible("true");

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
        this.addIncludeScript("TRMA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMA0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0050 지급출납관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
         *   2016.09.09		김기환		수정
         *
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
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMA0050";
        this.arrKEYVALUE  = new Array(5);
        this.sACCT_GUBN   = "";
        this.sACCT_YEAR   = "";
        this.sBUDG_YYMM   = "";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	// 전표 mask
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM, "SLIP_NUMB", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM, "OSLI_NUMB", "Y");
        	
        	// 조회일자 세팅
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	this.calSHRACCT_DATE1.set_value(sServerDateTime);
        	this.calSHRACCT_DATE2.set_value(sServerDateTime);
        	//this.calSHRACCT_DATE1.set_value((this.fnc_SubStr(sServerDateTime, 0, 6) + "01"));
            //this.calSHRACCT_DATE2.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));

            this.sACCT_GUBN = "1";
            this.sACCT_YEAR = this.fnc_SubStr(sServerDateTime, 0, 4);
            this.sBUDG_YYMM = this.fnc_SubStr(sServerDateTime, 0, 6);
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
        	
        	//변경자료 체크
        	if( obj != "X" ){
        		if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM") && !this.fnc_Message("TMM023")) return;
        	}
        	
        	if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsTA_SLIPXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_SLIPXM");
            this.grdTA_SLIPXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	
        	if(this.dsTA_SLIPXM.rowcount < 1){
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM_T.clearData();
        	this.dsTA_SLIPXM.set_enableevent(false);
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_T.copyData(this.dsTA_SLIPXM, true);
        	this.dsTA_SLIPXM.filter("");
        	this.dsTA_SLIPXM.set_enableevent(true);

        	if(this.dsTA_SLIPXM_T.rowcount < 1){
        		this.fnc_Message("TMM010"); //선택된 항목이 없습니다! 선택 후 작업하세요!
        		return;
        	}
        	
        	if(!this.fnc_Message("TMM140", "선택된 항목들의 [지급계좌] 정보를 [저장] 하시겠습니까")) return false;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_SLIPXM_T=dsTA_SLIPXM_T";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	
        	if(this.dsTA_SLIPXM.rowcount < 1){
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	this.grdTA_SLIPXM_BANK.set_visible(false); 
        	
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

         /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/

        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPXM",this);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계일자(FROM)", this.calSHRACCT_DATE1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계일자(TO)", this.calSHRACCT_DATE2);
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
        	// 기능 없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        	// 기능 없음
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
        		sReturnString += " ACCT_INTL="    + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value));    //계정과목 FROM
        		sReturnString += " ACCT_INTL_TO=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL_TO.value)); //계정과목 TO
        		sReturnString += " CUST_CODE="    + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));  //거래처
        		sReturnString += " EMPL_NUMB="    + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));  //사원번호
        	}
        	// 저장
        	else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
        		sReturnString += " TNTS_DATE="   + this.fnc_Quote(this.fnc_GetServerDateTime("DATE")); //현재일자
        	}
        	// 저장
        	else if (sKind == "DELETE00") {
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
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
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103"); //저장을 완료 하였습니다!
        		this.fn_Search("X");
        	
        	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("TMM130", "지급계좌 초기화"); //[@] 작업을 정상적으로 완료 하였습니다!
        		this.fn_Search("X");
        	
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		arrParam[1] = "GRID,grdTA_SLIPXM,dsAPPS_CODE,APPS_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
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

        	sACCT_YEAR = this.fnc_SubStr(this.calSHRACCT_DATE1.value, 0, 4);

            if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) { // 조회 Help POPUP START

                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCUST_NAME";
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRACCT_NAME") || (obj.name == "edtSHRACCT_NAME")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = sACCT_YEAR;
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME";
                arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
                arrParam[6] = "0,1";
                
        		if (this.fnc_Length(this.edtSHRACCT_INTL_TO.value) < 1) {

        			arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME,edtSHRACCT_INTL_TO,edtSHRACCT_NAME_TO";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
        			arrParam[6] = "0,1";

        		}
        		
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRACCT_NAME_TO") || (obj.name == "edtSHRACCT_NAME_TO")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = sACCT_YEAR;
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME_TO.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME_TO";
                arrParam[5] = "edtSHRACCT_INTL_TO,edtSHRACCT_NAME_TO";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            }  else if ((obj.name == "imgHelpACNT_NAME") || (obj.name == "edtACNT_NAME")) {

                arrParam[0] = "TRM0016";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtACNT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtACNT_NAME";
                arrParam[5] = "edtACNT_NUMB,edtACNT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                 
            //사원
            } else if ((obj.name == "imgHelpSHREMPL_NAME") || (obj.name == "edtSHREMPL_NAME")) {

                arrParam[0] = "FAM0012";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

        	}
            
            if (obj.name == "grdTA_SLIPXM") { // 그리드 POPUP START
            
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "ACNT_NUMB") {	
        			
        			//사원은 검색막음
        			if(this.fnc_Length(this.dsTA_SLIPXM.getColumn(obj.currentrow, "EMPL_NUMB")) > 0) return;
        			
        			var sSrhParam1 = this.dsTA_SLIPXM.getColumn(obj.currentrow, "VIEW_CUST");

        			// 조회조건 등록
        			arrParam[0] = "TRM0002";
        			arrParam[1] = sSrhParam1; 	  // 쿼리 파리미터값
        			arrParam[2] = "";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTA_SLIPXM";
        			arrParam[5] = "RECI_MAN,BANK_CODE,BANK_NAME,ACNT_NUMB";
        			arrParam[6] = "0,1,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} 
            }
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
         /*-----------------+
        |  엑셀 저장 처리  |
        +------------------*/
        this.fn_ExportExcel = function (sGrid,sName) {

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	
        	var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, sGrid, "Sheet1!A1","allband","allrecord","suppress","onlyvalue","none","","both","cellline");

            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);

        	this.ExcelExportObject.set_exportfilename("ExcelExport_"+sName);

            this.ExcelExportObject.set_exporturl(application.GBL_HTTPURL + "/XExportImport");

            this.ExcelExportObject.exportData();
         
        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

         /*------------------------------------+
         | 그리드 "TA_SLIPXM" 셀 더블클릭시                     
         +-------------------------------------*/
        this.grdTA_SLIPXM_OnCellDblClick = function (obj,e) {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	var objDs = this.objects[obj.binddataset];

        	var sSLIP_NUMB = "";
        	var sSLIP_NUMB_LINE = "";
        	
        	if (columnName == "SLIP_NUMB") {		/* 발생전표번호 */
        		
        		//전표번호+라인이 18자리 미만인지 체크
        		if (this.fnc_Length(objDs.getColumn(e.row, "SLIP_NUMB")) < 18) return;
        		
        		//전표번호가 존재하는지 체크
        		sSLIP_NUMB = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_NUMB"), 0, 14);
        		sSLIP_NUMB_LINE = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_NUMB"), 14, 4);
        	
        		if (this.fnc_Length(sSLIP_NUMB) < 14) return;
        	
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "", sSLIP_NUMB_LINE); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표

        	} else if (columnName == "OSLI_NUMB") {	/* 결재전표번호 */
        		
        		//전표번호+라인이 18자리 미만인지 체크
        		if (this.fnc_Length(objDs.getColumn(e.row, "OSLI_NUMB")) < 18) return;
        		
        		//전표번호가 존재하는지 체크
        		sSLIP_NUMB = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "OSLI_NUMB"), 0, 14);
        		sSLIP_NUMB_LINE = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "OSLI_NUMB"), 14, 4);
        		
        		if (this.fnc_Length(sSLIP_NUMB) < 14) return;
        		
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL,"",sSLIP_NUMB_LINE); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표

        	}
        }

        /*------------------------------------+
         | 그리드 "TA_SLIPXM" 헤드 클릭시                     
         +-------------------------------------*/
        this.grdTA_SLIPXM_onheadclick = function(obj,e)
        {
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} 
        	else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}

        	/* Dataset에 Value 일괄 설정 */
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		objDataSet.setColumn(i, "CHK", iCheckValue);
        	}
        }

        /*------------------------------------+
         | 은행제출용 엑셀 버튼 클릭 시                     
         +-------------------------------------*/
        this.btnBankExcel_onclick = function(obj,e){
        	
        	if(this.dsTA_SLIPXM.rowcount < 1){
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM_BANK.clearData();
        	this.dsTA_SLIPXM.set_enableevent(false);
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_BANK.copyData(this.dsTA_SLIPXM, true);
        	this.dsTA_SLIPXM.filter("");
        	this.dsTA_SLIPXM.set_enableevent(true);

        	if(this.dsTA_SLIPXM_BANK.rowcount < 1){
        		this.fnc_Message("TMM010"); //선택된 항목이 없습니다! 선택 후 작업하세요!
        		return;
        	}
        	var nRow = this.dsTA_SLIPXM_BANK.findRowExpr("ACNT_NUMB==''");

        	if( nRow > -1){
        		var sMsg = "체크된 내역들 중 [지급계좌]가 비어있는 내역이 존재합니다.";
        		sMsg+= "\n(※ 계좌번호는 [거래처정보등록-거래계좌]에서 등록가능합니다! )";
        		sMsg+= "\n그래도 [은행제출용 엑셀] 다운로드 하시겠습니까";
        		
        		if(!this.fnc_Message("TMM140", sMsg)) return false;
        	}else{
        		var sMsg = "[은행제출용 엑셀] 다운로드 하시겠습니까";
        		if(!this.fnc_Message("TMM140", sMsg)) return false;
        	}
        	
        	this.fn_ExportExcel(this.grdTA_SLIPXM_BANK, "BANK");
        }

        /*------------------------------------+
         | 지급계좌 초기화 버튼 클릭 시                     
         +-------------------------------------*/
        this.btnAcntNumbInit_onclick = function(obj,e){

        	if(this.dsTA_SLIPXM.rowcount < 1){
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM_T.clearData();
        	this.dsTA_SLIPXM.set_enableevent(false);
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_T.copyData(this.dsTA_SLIPXM, true);
        	this.dsTA_SLIPXM.filter("");
        	this.dsTA_SLIPXM.set_enableevent(true);

        	if(this.dsTA_SLIPXM_T.rowcount < 1){
        		this.fnc_Message("TMM010"); //선택된 항목이 없습니다! 선택 후 작업하세요!
        		return;
        	}
        	
        	var sMsg = "[지급계좌 초기화] 하시겠습니까";
        	if(!this.fnc_Message("TMM140", sMsg)) return false;
        	
        	var sMethodName = "DELETE00";
        	var sInDataSet  = "dsTA_SLIPXM_T=dsTA_SLIPXM_T";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXM.addEventHandler("oncolumnchanged", this.dsTA_SLIPXM_oncolumnchanged, this);
            this.dsTA_SLIPXM_T.addEventHandler("oncolumnchanged", this.dsTA_SLIPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_OnCellDblClick, this);
            this.grdTA_SLIPXM.addEventHandler("oncellclick", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.cmbSHRACCT_UNIT_OnChanged, this);
            this.edtSHRACCT_INTL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_NAME_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnBankExcel.addEventHandler("onclick", this.btnBankExcel_onclick, this);
            this.btnAcntNumbInit.addEventHandler("onclick", this.btnAcntNumbInit_onclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRMA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
