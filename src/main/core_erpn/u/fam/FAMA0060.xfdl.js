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
                this.set_name("FAMA0060");
                this.set_titletext("계정과목등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_ACCTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_BFNM\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_LEVL\" size=\"1\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UPPR_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"INOU_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CONT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PREX_INTL\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"GUNB_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ZERO_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FNCR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_GUBN\" type=\"STRING\" size=\"10\" sumtext=\"간접비구분\" prop=\"default\"/><Column id=\"CUST_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SPSA_GUBN\" type=\"STRING\" size=\"10\" sumtext=\"거래구분\" prop=\"default\"/><Column id=\"FUND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CODE_SEQ2\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CODE_SEQ3\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CODE_SEQ4\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CODE_SEQ5\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CODE_SEQ6\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"ACCT_REMK\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"COST_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"10\" sumtext=\"정렬순서\" prop=\"default\"/><Column id=\"CSUS_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"BEFO_ACCT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MEMO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COST_GUBN</Col><Col id=\"DSNAME\">dsCOST_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">원가구분</Col></Row><Row><Col id=\"CODEID\">OVER_GUBN</Col><Col id=\"DSNAME\">dsOVER_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\"/></Row><Row><Col id=\"CODEID\">ACCT_TYPE</Col><Col id=\"DSNAME\">dsACCT_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">계정종류</Col></Row><Row><Col id=\"DSNAME\">dsDRCR_YSNO</Col><Col id=\"CODEID\">DRCR_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">관리코드 필수구분</Col></Row><Row><Col id=\"DSNAME\">dsSPSA_GUBN</Col><Col id=\"CODEID\">SPSA_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">특수관계자 거래구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRACCT_TYPE</Col><Col id=\"CODEID\">ACCT_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"MEMO\">계정종류</Col></Row><Row><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">사용여부</Col></Row><Row><Col id=\"DSNAME\">dsDRCR_GUBN</Col><Col id=\"CODEID\">DRCR_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"MEMO\">차대구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"MEMO\">사용여부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"UNUS_YSNO\" type=\"STRING\" prop=\"default\" size=\"1\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXD_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("계정과목등록");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("재무관리 > 재무기준정보 > 계정과목등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("65");
            obj.set_scrollbars("none");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "116", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("62");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_ACCTXD", "absolute", "585", null, null, "352", "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsTA_ACCTXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("55");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"157\"/><Column size=\"110\"/><Column size=\"54\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"관리코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관리코드명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"필수구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"순번\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"미결사용\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"이월사용\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:COND_CODE\" editlimit=\"4\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;background: ;\" text=\"bind:COND_NAME\" editlimit=\"100\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:DRCR_YSNO\" combodisplayrowcount=\"6\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:CODE_SEQN\" editlimit=\"5\" editautoselect=\"true\" combodisplayrowcount=\"7\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:UNUS_YSNO\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:OVER_YSNO\" editlimit=\"1\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:USEX_YSNO\" editlimit=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowAdd", "absolute", null, null, "62", "21", "90", "371", this);
            obj.style.set_imagealign("left");
            obj.set_taborder("61");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDel", "absolute", null, null, "62", "21", "25", "371", this);
            obj.style.set_imagealign("left");
            obj.set_taborder("60");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_ACCTXM", "absolute", "8", "137", null, null, "25", "402", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_ACCTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("2");
            obj.set_selecttype("row");
            obj.set_autofittype("none");
            obj.set_scrollpixel("none");
            obj.set_autosizebandtype("body");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"92\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정&#13;&#10;레벨\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"3\" displaytype=\"text\" text=\"계정약어명\"/><Cell col=\"4\" displaytype=\"text\" text=\"상위코드\"/><Cell col=\"5\" displaytype=\"text\" text=\"상위코드명\"/><Cell col=\"6\" displaytype=\"text\" text=\"전표등록&#13;&#10;여부\"/><Cell col=\"7\" displaytype=\"text\" text=\"사용&#13;&#10;여부\"/><Cell col=\"8\" displaytype=\"text\" text=\"잔액차대&#13;&#10;구분\"/><Cell col=\"9\" displaytype=\"text\" text=\"예산&#13;&#10;사용\"/><Cell col=\"10\" displaytype=\"text\" text=\"건별미결&#13;&#10;관리항목\"/><Cell col=\"11\" displaytype=\"text\" text=\"충당금&#13;&#10;계정\"/><Cell col=\"12\" displaytype=\"text\" text=\"금액0&#13;&#10;허용\"/><Cell col=\"13\" displaytype=\"text\" text=\"외화필수&#13;&#10;여부\"/><Cell col=\"14\" displaytype=\"text\" text=\"출납전표&#13;&#10;사용\"/><Cell col=\"15\" displaytype=\"text\" text=\"증빙&#13;&#10;사용\"/><Cell col=\"16\" displaytype=\"text\" text=\"계정종류\" combodataset=\"dsACCT_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"17\" displaytype=\"text\" text=\"계정설명\"/><Cell col=\"18\" text=\"구계정과목\"/><Cell col=\"19\" displaytype=\"text\" text=\"관리항목1\"/><Cell col=\"20\" displaytype=\"text\" text=\"관리항목2\"/><Cell col=\"21\" displaytype=\"text\" text=\"관리항목3\"/><Cell col=\"22\" displaytype=\"text\" text=\"관리항목4\"/><Cell col=\"23\" displaytype=\"text\" text=\"관리항목5\"/><Cell col=\"24\" displaytype=\"text\" text=\"관리항목6\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:PRNT_LEVL\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:ACCT_INTL\"/><Cell col=\"2\" displaytype=\"tree\" edittype=\"tree\" style=\"align:left;background2: ;\" text=\"bind:ACCT_NAME\" treestartlevel=\"1\" treelevel=\"bind:PRNT_LEVL\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:ACCT_BFNM\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:UPPR_ACCT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:UPPR_NAME\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:SLIP_YSNO\"/><Cell col=\"7\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:ACCT_YSNO\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center;background2: ;\" text=\"bind:DRCR_GUBN\"/><Cell col=\"9\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:BUDG_YSNO\"/><Cell col=\"10\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:GUNB_YSNO\"/><Cell col=\"11\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:CHUN_YSNO\"/><Cell col=\"12\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:ZERO_YSNO\"/><Cell col=\"13\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:FNCR_YSNO\"/><Cell col=\"14\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:CHUL_YSNO\"/><Cell col=\"15\" displaytype=\"checkbox\" style=\"align:center middle;background2: ;\" text=\"bind:EVID_YSNO\"/><Cell col=\"16\" displaytype=\"combo\" style=\"align:left;background2: ;\" text=\"bind:ACCT_TYPE\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:ACCT_REMK\"/><Cell col=\"18\" text=\"bind:BEFO_ACCT\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ1\"/><Cell col=\"20\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ2\"/><Cell col=\"21\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ3\"/><Cell col=\"22\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ4\"/><Cell col=\"23\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ5\"/><Cell col=\"24\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CopyRow", "absolute", null, "112", "62", "21", "25", null, this);
            obj.style.set_imagealign("left");
            obj.set_text("행복사");
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_TYPE", "absolute", "414", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_autoselect("true");

            obj = new Static("Static11", "absolute", "345", "71", "68", "21", null, null, this);
            obj.set_text("계정종류");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("58");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "115", "71", "201", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "27", "71", "90", "21", null, null, this);
            obj.set_text("계정과목/명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("57");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, "557", "377", null, "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", null, "106", "21", null, "362", this);
            obj.set_text("계정과목");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "28", null, "106", "21", null, "310", this);
            obj.set_text("계정약어명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_BFNM", "absolute", "135", null, "409", "21", null, "310", this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", null, "106", "21", null, "258", this);
            obj.set_text("전표등록여부");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", null, "106", "21", null, "232", this);
            obj.set_text("잔액차대구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "295", null, "125", "21", null, "258", this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("staCHUL_YSNO", "absolute", "28", null, "106", "21", null, "128", this);
            obj.set_text("출납전표사용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRNT_LEVL", "absolute", "438", null, "106", "21", null, "362", this);
            obj.set_taborder("15");
            obj.set_inputtype("number");
            obj.set_maxlength("1");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "28", null, "106", "21", null, "284", this);
            obj.set_text("상위코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("staBUDG_YSNO", "absolute", "295", null, "125", "21", null, "232", this);
            obj.set_text("예산사용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPPR_NAME", "absolute", "268", null, "276", "21", null, "284", this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", null, "106", "21", null, "336", this);
            obj.set_text("계정명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "135", null, "409", "21", null, "336", this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSLIP_YSNO", "absolute", "135", null, "131", "21", null, "258", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_index("-1");

            obj = new Combo("cmbCHUL_YSNO", "absolute", "135", null, "131", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_index("-1");

            obj = new Combo("cmbACCT_YSNO", "absolute", "429", null, "115", "21", null, "258", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_index("-1");

            obj = new Static("staGUNB_YSNO", "absolute", "28", null, "106", "21", null, "206", this);
            obj.set_text("건별미결관리");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbZERO_YSNO", "absolute", "135", null, "131", "21", null, "180", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_index("-1");

            obj = new Static("staZERO_YSNO", "absolute", "28", null, "106", "21", null, "180", this);
            obj.set_text("금액0허용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("staCHUN_YSNO", "absolute", "295", null, "125", "21", null, "206", this);
            obj.set_text("충당금계정");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("staFNCR_YSNO", "absolute", "295", null, "125", "21", null, "180", this);
            obj.set_text("외화필수");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGUNB_YSNO", "absolute", "135", null, "131", "21", null, "206", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_index("-1");

            obj = new Combo("cmbFNCR_YSNO", "absolute", "429", null, "115", "21", null, "180", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_index("-1");

            obj = new Static("staEVID_YSNO", "absolute", "28", null, "106", "21", null, "154", this);
            obj.set_text("증빙사용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVID_YSNO", "absolute", "135", null, "131", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_index("-1");

            obj = new Static("Static21", "absolute", "28", null, "106", "21", null, "76", this);
            obj.set_text("간접비구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOVER_GUBN", "absolute", "135", null, "131", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_index("-1");

            obj = new Combo("cmbCUST_YSNO", "absolute", "117", "738", "129", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_innerdataset("dsUSEX_YSNO");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");

            obj = new Static("Static23", "absolute", "251", "738", "80", "17", null, null, this);
            obj.set_cssclass("styFormItemCapBE");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_YSNO", "absolute", "317", "738", "167", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("dsUSEX_YSNO");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");

            obj = new Static("Static26", "absolute", "295", null, "125", "21", null, "154", this);
            obj.set_text("계정종류");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "295", null, "125", "21", null, "102", this);
            obj.set_text("자금사용");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbFUND_YSNO", "absolute", "429", null, "115", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_index("-1");

            obj = new Static("Static04", "absolute", "295", null, "129", "21", null, "128", this);
            obj.set_text("특수관계자거래구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSPSA_GUBN", "absolute", "429", null, "115", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_index("-1");

            obj = new Static("Static06", "absolute", "295", null, "125", "21", null, "76", this);
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", null, "106", "21", null, "24", this);
            obj.set_text("계정설명");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaACCT_REMK", "absolute", "135", null, "409", "21", null, "24", this);
            obj.set_taborder("53");
            obj.set_scrollbars("autovert");
            obj.set_imemode("hangul");
            obj.set_maxlength("500");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBUDG_YSNO", "absolute", "429", null, "115", "21", null, "232", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_index("-1");

            obj = new Edit("edtUPPR_ACCT", "absolute", "135", null, "108", "21", null, "284", this);
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_enable("true");
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "135", null, "131", "21", null, "362", this);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "709", null, null, "21", "318", "367", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDRCR_GUBN", "absolute", "135", null, "131", "21", null, "232", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_index("-1");

            obj = new Edit("edtSORT_ORDR", "absolute", "429", null, "115", "21", null, "76", this);
            obj.set_taborder("50");
            obj.set_maxlength("5");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "28", null, "106", "21", null, "50", this);
            obj.set_text("원가구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCOST_GUBN", "absolute", "135", null, "131", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_index("-1");

            obj = new Static("staCSUS_YSNO", "absolute", "28", null, "106", "21", null, "102", this);
            obj.set_taborder("68");
            obj.set_text("코스트센터사용");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCSUS_YSNO", "absolute", "135", null, "131", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");

            obj = new Static("Static32", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "608", "0", "36", "60", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1162", "0", "25", "717", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "736", "56", "145", "4", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "107", "61", "8", "41", null, null, this);
            obj.set_taborder("75");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, "1154", "15", null, "0", this);
            obj.set_taborder("76");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "131", "264", "6", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "485", "103", "80", "35", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "295", null, "100", "21", null, "362", this);
            obj.set_taborder("82");
            obj.set_text("계정레벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_TYPE", "absolute", "429", null, "115", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("83");

            obj = new Combo("cmbCHUN_YSNO", "absolute", "429", null, "115", "21", null, "206", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");

            obj = new Static("Static17", "absolute", "151", null, "38", "8", null, "383", this);
            obj.set_taborder("85");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "151", null, "102", "5", null, "331", this);
            obj.set_taborder("86");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "151", null, "38", "8", null, "16", this);
            obj.set_taborder("87");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "151", null, "102", "5", null, "71", this);
            obj.set_taborder("88");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "9", "328", "30", "33", null, null, this);
            obj.set_taborder("89");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "399", null, null, "10", "25", "392", this);
            obj.set_taborder("90");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "151", null, "102", "5", null, "45", this);
            obj.set_taborder("91");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "151", null, "102", "5", null, "97", this);
            obj.set_taborder("92");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "151", null, "102", "5", null, "123", this);
            obj.set_taborder("93");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "151", null, "102", "5", null, "175", this);
            obj.set_taborder("94");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "151", null, "102", "5", null, "149", this);
            obj.set_taborder("95");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "151", null, "102", "5", null, "201", this);
            obj.set_taborder("96");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "151", null, "102", "5", null, "227", this);
            obj.set_taborder("97");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "151", null, "102", "5", null, "253", this);
            obj.set_taborder("98");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "151", null, "102", "5", null, "305", this);
            obj.set_taborder("99");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "151", null, "102", "5", null, "279", this);
            obj.set_taborder("100");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUPPR_ACCT", "absolute", "245", null, "21", "21", null, "284", this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "151", null, "102", "5", null, "357", this);
            obj.set_taborder("101");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "267", "326", "40", "33", null, null, this);
            obj.set_taborder("102");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "585", null, "114", "21", null, "367", this);
            obj.set_taborder("103");
            obj.set_text("관리코드 등록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "49.62%", "344", null, "6", "28.14%", null, this);
            obj.set_taborder("104");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "72.96%", "315", null, "35", "20.3%", null, this);
            obj.set_taborder("105");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "583", "71", "68", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("계정레벨");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPRNT_LEVL", "absolute", "651", "71", "50", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.set_maxlength("1");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "730", "71", "90", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("전표등록여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSLIP_YSNO", "absolute", "825", "71", "95", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            obj.set_autoselect("true");

            obj = new Static("Static51", "absolute", "949", "71", "69", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_YSNO", "absolute", "1018", "71", "95", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            obj.set_autoselect("true");

            obj = new Static("Static49", "absolute", "544", "328", "20", "337", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "554", "61", "40", "41", null, null, this);
            obj.set_taborder("110");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "701", "61", "40", "41", null, null, this);
            obj.set_taborder("111");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "920", "61", "40", "41", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "696", null, "10", "13", null, "371", this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "295", null, "106", "21", null, "50", this);
            obj.set_taborder("114");
            obj.set_text("구계정과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBEFO_ACCT", "absolute", "429", null, "115", "21", null, "50", this);
            obj.set_taborder("52");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "565", "336", "20", "337", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_scrollbars("none");
            		p.style.set_color("black");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계정과목등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("cmbCHUN_YSNO_value","cmbCHUN_YSNO","value","dsTA_ACCTXM","CHUN_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_TYPE_value","cmbACCT_TYPE","value","dsTA_ACCTXM","ACCT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDRCR_GUBN_value","cmbDRCR_GUBN","value","dsTA_ACCTXM","DRCR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBUDG_YSNO_value","cmbBUDG_YSNO","value","dsTA_ACCTXM","BUDG_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaACCT_REMK_value","txaACCT_REMK","value","dsTA_ACCTXM","ACCT_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbSPSA_GUBN","value","dsTA_ACCTXM","SPSA_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbFUND_YSNO_value","cmbFUND_YSNO","value","dsTA_ACCTXM","FUND_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBANK_YSNO_value","cmbBANK_YSNO","value","dsTA_ACCTXM","BANK_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCUST_YSNO_value","cmbCUST_YSNO","value","dsTA_ACCTXM","CUST_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbOVER_GUBN_value","cmbOVER_GUBN","value","dsTA_ACCTXM","OVER_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbEVID_YSNO_value","cmbEVID_YSNO","value","dsTA_ACCTXM","EVID_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbFNCR_YSNO_value","cmbFNCR_YSNO","value","dsTA_ACCTXM","FNCR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbGUNB_YSNO_value","cmbGUNB_YSNO","value","dsTA_ACCTXM","GUNB_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbZERO_YSNO_value","cmbZERO_YSNO","value","dsTA_ACCTXM","ZERO_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_YSNO_value","cmbACCT_YSNO","value","dsTA_ACCTXM","ACCT_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCHUL_YSNO_value","cmbCHUL_YSNO","value","dsTA_ACCTXM","CHUL_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSLIP_YSNO_value","cmbSLIP_YSNO","value","dsTA_ACCTXM","SLIP_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_NAME_value","edtACCT_NAME","value","dsTA_ACCTXM","ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUPPR_NAME_value","edtUPPR_NAME","value","dsTA_ACCTXM","UPPR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCOST_GUBN_value","cmbCOST_GUBN","value","dsTA_ACCTXM","COST_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRNT_LEVL_value","edtPRNT_LEVL","value","dsTA_ACCTXM","PRNT_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_BFNM_value","edtACCT_BFNM","value","dsTA_ACCTXM","ACCT_BFNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtUPPR_ACCT","value","dsTA_ACCTXM","UPPR_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtACCT_BFNM","binddataset","dsTA_ACCTXM","ACCT_BFNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtACCT_INTL","value","dsTA_ACCTXM","ACCT_INTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtSORT_ORDR","value","dsTA_ACCTXM","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cmbCSUS_YSNO","value","dsTA_ACCTXM","CSUS_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtBEFO_ACCT","value","dsTA_ACCTXM","BEFO_ACCT");
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
        this.addIncludeScript("FAMA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMA0060 계정과목등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *	 2016.08.29		권미영
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMA0060";

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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRACCT_NAME.setFocus();

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_ACCTXM,dsTA_ACCTXD"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_ACCTXM=dsTA_ACCTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ACCTXM.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {

        	var uRow      = this.dsTA_ACCTXM.rowposition;
        	var uPrntLevl = this.dsTA_ACCTXM.getColumn(uRow, "PRNT_LEVL");
        	var uUpprAcct = this.dsTA_ACCTXM.getColumn(uRow, "ACCT_INTL");

        	if (uPrntLevl == "5") {
        		this.fnc_Message("TMM125", "최하위 레벨에는 등록할 수 없습니다");
        		return;
        	}

        	var iRow = this.dsTA_ACCTXM.insertRow(uRow + 1);

        	this.dsTA_ACCTXM.setColumn(iRow, "PRNT_LEVL", uPrntLevl + 1);
        	this.dsTA_ACCTXM.setColumn(iRow, "ACCT_INTL", this.fnc_SubStr(this.dsTA_ACCTXM.getColumn(uRow, "ACCT_INTL"), 0, uPrntLevl));
        	this.dsTA_ACCTXM.setColumn(iRow, "UPPR_ACCT", this.dsTA_ACCTXM.getColumn(uRow, "ACCT_INTL"));
        	this.dsTA_ACCTXM.setColumn(iRow, "UPPR_NAME", this.dsTA_ACCTXM.getColumn(uRow, "ACCT_BFNM"));

        	if (uPrntLevl == "4") {		
        			
        		this.dsTA_ACCTXM.setColumn(iRow, "SLIP_YSNO", "1");
        		
        		if (this.fnc_SubStr(uUpprAcct, 0, 1) == "5" || this.fnc_SubStr(uUpprAcct, 0, 1) == "6") {
        			this.dsTA_ACCTXM.setColumn(iRow, "BUDG_YSNO", "1");	
        		} else {
        			this.dsTA_ACCTXM.setColumn(iRow, "BUDG_YSNO", "0");
        		}
        		
        	} else {
        	
        		this.dsTA_ACCTXM.setColumn(iRow, "SLIP_YSNO", "0");
        		this.dsTA_ACCTXM.setColumn(iRow, "BUDG_YSNO", "0");
        		
        	}

        	this.dsTA_ACCTXM.setColumn(iRow, "ACCT_YSNO", "1"); //사용여부
        	this.dsTA_ACCTXM.setColumn(iRow, "DRCR_GUBN", this.dsTA_ACCTXM.getColumn(uRow, "DRCR_GUBN")); //차대구분
        	this.dsTA_ACCTXM.setColumn(iRow, "GUNB_YSNO", "0"); //건별미결여부
        	this.dsTA_ACCTXM.setColumn(iRow, "CHUN_YSNO", "0"); //충당금계정여부
        	this.dsTA_ACCTXM.setColumn(iRow, "ZERO_YSNO", "0"); //금액허용
        	this.dsTA_ACCTXM.setColumn(iRow, "FNCR_YSNO", "0");
        	this.dsTA_ACCTXM.setColumn(iRow, "EVID_YSNO", "0");
        	this.dsTA_ACCTXM.setColumn(iRow, "CHUL_YSNO", "0");
        	this.edtACCT_INTL.setFocus();
        	
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) {
        		//this.dsTA_ACCTXD.deleteAll();
        		this.dsTA_ACCTXM.deleteRow(this.dsTA_ACCTXM.rowposition);
        	}
        	this.grdTA_ACCTXM.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTA_ACCTXM,dsTA_ACCTXD");
        // 	if (this.dsTA_ACCTXM.rowposition == 0) {
        // 		this.dsTA_ACCTXM.set_rowposition(0);
        // 	} else {
        // 		this.dsTA_ACCTXM.set_rowposition((this.dsTA_ACCTXM.rowposition - 1));
        // 	}
        	this.grdTA_ACCTXM.setFocus();
        	
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_ACCTXM=dsTA_ACCTXM:U dsTA_ACCTXD=dsTA_ACCTXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ACCTXM.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_ACCTXM", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	this.fnc_FormUnload(obj,e);
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {	
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_ACCTXM")) return this.fnc_Message("TMM023");
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if ( this.dsTA_ACCTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "계정과목 : (" + this.dsTA_ACCTXM.getColumn(this.dsTA_ACCTXM.rowposition, "ACCT_INTL") + "), 계정명 : (";
        		sQuestionText += this.fnc_Trim(this.dsTA_ACCTXM.getColumn(this.dsTA_ACCTXM.rowposition, "ACCT_BFNM"))+")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_ACCTXM,dsTA_ACCTXD")) {	
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsTA_ACCTXM.getRowCount(); i++) {

        		if (this.dsTA_ACCTXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "PRNT_LEVL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정레벨", this.dsTA_ACCTXM, i, this.edtPRNT_LEVL, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTA_ACCTXM, i, this.edtACCT_INTL, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "ACCT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정명", this.dsTA_ACCTXM, i, this.edtACCT_NAME, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "ACCT_BFNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정약어명", this.dsTA_ACCTXM, i, this.edtACCT_BFNM, "");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "PRNT_LEVL")) != 1) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "UPPR_ACCT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상위코드", this.dsTA_ACCTXM, i, this.edtUPPR_NAME, "");
        			}
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "SLIP_YSNO"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전표등록여부", this.dsTA_ACCTXM, i, this.cmbSLIP_YSNO, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "DRCR_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "잔액차대구분", this.dsTA_ACCTXM, i, this.cmbDRCR_GUBN, "");
        		}
        		
        		
        		if (this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "SLIP_YSNO")) == 1) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "BUDG_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "예산사용", this.dsTA_ACCTXM, i, this.cmbBUDG_YSNO, "");
        			}
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "GUNB_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "건별미결관리항목여부", this.dsTA_ACCTXM, i, this.cmbGUNB_YSNO, "");
        			}
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "EVID_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "증빙여부", this.dsTA_ACCTXM, i, this.cmbEVID_YSNO, "");
        			}
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "CHUN_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "충당금계정여부", this.dsTA_ACCTXM, i, this.cmbCHUN_YSNO, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "ZERO_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "금액0허용여부", this.dsTA_ACCTXM, i, this.cmbZERO_YSNO, "");
        			}
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "FNCR_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "외화필수여부", this.dsTA_ACCTXM, i, this.cmbFNCR_YSNO, "");
        			}
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "CHUL_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "출납전표사용", this.dsTA_ACCTXM, i, this.cmbCHUL_YSNO, "");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(i, "CSUS_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코스트센터사용", this.dsTA_ACCTXM, i, this.cmbCSUS_YSNO, "");
        			}
        		}

        	}
        	
        	this.dsTA_ACCTXD.set_keystring("S:CODE_SEQN");

        	for (var i = 0; i < this.dsTA_ACCTXD.getRowCount(); i++) {
        		
        		//if (this.dsTA_ACCTXD.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXD.getColumn(i, "COND_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드", this.dsTA_ACCTXD, i, this.grdTA_ACCTXD, "COND_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXD.getColumn(i, "DRCR_YSNO"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "필수구분", this.dsTA_ACCTXD, i, this.grdTA_ACCTXD, "DRCR_YSNO");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXD.getColumn(i, "CODE_SEQN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "순번", this.dsTA_ACCTXD, i, this.grdTA_ACCTXD, "CODE_SEQN");
        		}
        		
        		if (this.dsTA_ACCTXD.getCaseCount("CODE_SEQN = " + this.dsTA_ACCTXD.getColumn(i, "CODE_SEQN")) > 1) {
        			return this.fnc_CheckPostAction("TMM300", "순번이 중복됩니다.", this.dsTA_ACCTXD, i, this.grdTA_ACCTXD, "CODE_SEQN");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_ACCTXD.getColumn(i, "UNUS_YSNO")) == "1") {
        			if (this.fnc_Trim(this.dsTA_ACCTXD.getColumn(i, "DRCR_YSNO")) != "1") {
        				return this.fnc_CheckPostAction("TMM300", "미결사용시 차대필수 입니다.", this.dsTA_ACCTXD, i, this.grdTA_ACCTXD, "DRCR_YSNO");
        			}
        		}
        		
        		this.dsTA_ACCTXD.setColumn(i, "ACCT_INTL", this.dsTA_ACCTXM.getColumn(this.dsTA_ACCTXM.rowposition, "ACCT_INTL"));
        		
        		//순번 재계산
        		this.dsTA_ACCTXD.setColumn(i, "CODE_SEQN", nexacro.toNumber(i + 1));
        		
        	}
        	
        	//this.dsTA_ACCTXD.set_keystring("");
        		
        	return true;
        	
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------***-------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_NAME.value));
        		sReturnString += " ACCT_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_TYPE.value));
        		sReturnString += " PRNT_LEVL=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPRNT_LEVL.value));
        		sReturnString += " SLIP_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSLIP_YSNO.value));
        		sReturnString += " ACCT_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_YSNO.value));

        	} else if (sKind == "SEARCH01") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.fnc_Trim(this.dsTA_ACCTXM.getColumn(this.dsTA_ACCTXM.rowposition, "ACCT_INTL")));

        	} else if (sKind == "SAVE00") {
        		
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        /*--------------------------------------+
         |  Transaction 후 Post Process!       |
         +--------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTA_ACCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_ACCTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTA_ACCTXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
                this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_TYPE,dsSHRACCT_TYPE,0";      //계정종류
        			arrParam[1]  = "COMBO,cmbACCT_TYPE,dsACCT_TYPE,0";            //계정종류
        			arrParam[2]  = "COMBO,cmbSPSA_GUBN,dsSPSA_GUBN,0";            //특수관게자거래구분
        			arrParam[3]  = "COMBO,cmbOVER_GUBN,dsOVER_GUBN,0";            //간접비구분
        			arrParam[4]  = "COMBO,cmbSLIP_YSNO,dsUSEX_YSNO,0";            //전표등록여부
        			arrParam[5]  = "COMBO,cmbACCT_YSNO,dsUSEX_YSNO,0";            //사용여부
        			arrParam[6]  = "COMBO,cmbBUDG_YSNO,dsUSEX_YSNO,0";            //예산사용
        			arrParam[7]  = "COMBO,cmbGUNB_YSNO,dsUSEX_YSNO,0";            //간별미결관리
        			arrParam[8]  = "COMBO,cmbCHUN_YSNO,dsUSEX_YSNO,0";            //충당급계정
        			arrParam[9]  = "COMBO,cmbZERO_YSNO,dsUSEX_YSNO,0";            //금액허용
        			arrParam[10] = "COMBO,cmbFNCR_YSNO,dsUSEX_YSNO,0";            //외화필수	
        			arrParam[11] = "COMBO,cmbEVID_YSNO,dsUSEX_YSNO,0";            //증빙사용
        			arrParam[12] = "COMBO,cmbACCT_TYPE,dsACCT_TYPE,0";            //계정종류	
        			arrParam[13] = "COMBO,cmbCHUL_YSNO,dsUSEX_YSNO,0";            //출납전표사용
        			arrParam[14] = "COMBO,cmbCSUS_YSNO,dsUSEX_YSNO,0";            //코스트센터사용
        			arrParam[15] = "COMBO,cmbEVID_YSNO,dsUSEX_YSNO,0";            //증빙사용
        			arrParam[16] = "COMBO,cmbFUND_YSNO,dsUSEX_YSNO,0";            //자금사용
        			arrParam[17] = "COMBO,cmbCOST_GUBN,dsCOST_GUBN,0";            //원가구분
        			arrParam[18] = "GRID,grdTA_ACCTXD,dsDRCR_YSNO,DRCR_YSNO";	  //필수구분
        			arrParam[19] = "GRID,grdTA_ACCTXM,dsDRCR_GUBN,DRCR_GUBN";     //그리드 차대구분
        			arrParam[20] = "GRID,grdTA_ACCTXM,dsACCT_TYPE,ACCT_TYPE";     //그리드 계정종류
        			arrParam[21] = "COMBO,cmbDRCR_GUBN,dsDRCR_GUBN,0";            //입력항목 차대구분
        			arrParam[22] = "COMBO,cmbSHRSLIP_YSNO,dsSHRUSEX_YSNO,0";
        			arrParam[23] = "COMBO,cmbSHRACCT_YSNO,dsSHRUSEX_YSNO,0";

        		this.fnc_CommonCodeInnerBind(arrParam);	
        	
        	} 
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (e.newrow == -1) return;

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtACCT_INTL, false);
        	} else {
        		this.fnc_SetReadonly(this.edtACCT_INTL, true);
        	}

        	this.fn_SetFieldEnable(obj.getColumn(obj.rowposition, "SLIP_YSNO"));

        	// 관리항목 조회
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_ACCTXD=dsTA_ACCTXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*----------------------------------------------------+
         |  관리코드 등록 수정 시 Key Field Disibled 처리  |
         +----------------------------------------------------*/
        this.fn_KeyFieldDisible1 = function (obj,e) {

        	if (e.newrow == -1) return;

        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT) {
        		this.grdTA_ACCTXD.setCellProperty("Body",this.fnc_GridColumnIndex(this.grdTA_ACCTXD, "COND_NAME"), "edittype", "text");
        	} else {
        		this.grdTA_ACCTXD.setCellProperty("Body",this.fnc_GridColumnIndex(this.grdTA_ACCTXD, "COND_NAME"), "edittype", "none");
        	}
        	
        }
        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
        		
            // 입력 - 상위 코드(Popup)
            if ((obj.name == "imgHelpUPPR_ACCT") || (sColumnID == "UPPR_NAME")) {
        	
        		if (nexacro.toNumber(this.fnc_Trim(this.edtPRNT_LEVL.value), 0) <= 0) {
        			return this.fnc_CheckPostAction("TMM072", "계정레벨", this.dsTA_ACCTXM, this.dsTA_ACCTXM.rowposition, this.edtPRNT_LEVL, "");
        		}
        		
                arrParam[0] = "FAM0033";
                arrParam[1] = this.edtPRNT_LEVL.value;
                arrParam[2] = this.fnc_Trim(this.edtUPPR_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtUPPR_NAME";
                arrParam[5] = "edtUPPR_ACCT,edtUPPR_NAME";
                arrParam[6] = "0,1";
                arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
        	// 입력(관리코드등록) - 관리코드(Popup)
            } else if(obj.name == "grdTA_ACCTXD") {
           
        			if (sColumnID == "COND_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "COND_NAME") {
        			
        				arrParam[0] = "FAM0036";
        				arrParam[1] = "";
        				arrParam[2] = "COND_NAME";
        				arrParam[3] = "N";
        				arrParam[4] = "grdTA_ACCTXD";
        				arrParam[5] = "COND_CODE,COND_NAME";
        				arrParam[6] = "0,1";
        				arrParam[7] = sFromDs;
        				arrParam[8] = sOldValue;
        				this.fnc_HelpDialogeAction(this, obj, arrParam);

        			}
        			
               }
               
         }
         
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------+
         |  행 복사  |
         +------------*/
        this.btn_CopyRow_OnClick = function (obj,e) {
        	
        	if (this.dsTA_ACCTXM.getRowCount() < 1) {
        		this.fnc_Message("FAM004");
        		return;
        	}
        	
        	var uRow = this.dsTA_ACCTXM.rowposition;

        	// 관리코드 데이터셋 복사
        	this.dsTA_ACCTXD_TEMP.copyData(this.dsTA_ACCTXD);

        	// 계정과목 행추가, 복사
        	var iRow = this.dsTA_ACCTXM.insertRow(uRow + 1);
        	this.dsTA_ACCTXM.copyRow(iRow, this.dsTA_ACCTXM, uRow);

        	this.dsTA_ACCTXM.setColumn(iRow, "ACCT_INTL", ""); //계정과목
        	this.dsTA_ACCTXM.setColumn(iRow, "SORT_ORDR", ""); //정렬순서

        	this.fn_SetFieldEnable(this.dsTA_ACCTXM.getColumn(iRow, "SLIP_YSNO"));

        	// 관리코드 행추가 후 데이터 복사
        	var dCount = this.dsTA_ACCTXD_TEMP.getRowCount();

        	for (var dRow = 0; dRow < dCount; dRow++) {
        		this.dsTA_ACCTXD_TEMP.setColumn(dRow, "ACCT_INTL", "");
        		this.dsTA_ACCTXD.insertRow(dRow);
        		this.dsTA_ACCTXD.copyRow(dRow, this.dsTA_ACCTXD_TEMP, dRow);
        	}

        	this.dsTA_ACCTXD_TEMP.clearData();
        	this.edtACCT_INTL.setFocus();

        }

        /*------------------+
         |  관리코드추가  |
         +------------------*/
        this.btn_RowAdd_OnClick = function (obj,e) {
        	
        	if (this.dsTA_ACCTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM032");
        		return;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtACCT_INTL.value)) < 1) {
        		this.fnc_Message("TMM072", "계정과목");
        		this.edtACCT_INTL.setFocus();
        		return;
        	}
        	
        	if (this.cmbSLIP_YSNO.value == "0") {
        		this.fnc_Message("FAM001");
        		this.cmbSLIP_YSNO.setFocus();
        		return;
        	}	
        	
        	this.fnc_SetReadonly(this.edtACCT_INTL, true);
        	var iRow = this.dsTA_ACCTXD.addRow();
        	this.dsTA_ACCTXD.setColumn(iRow, "ACCT_INTL", this.dsTA_ACCTXM.getColumn(this.dsTA_ACCTXM.rowposition, "ACCT_INTL"));
        	this.dsTA_ACCTXD.setColumn(iRow, "DRCR_YSNO", "0");
            this.dsTA_ACCTXD.setColumn(iRow, "CODE_SEQN", "0"); //순번 
        	this.dsTA_ACCTXD.setColumn(iRow, "CODE_SEQN", nexacro.toNumber(this.dsTA_ACCTXD.getMax("CODE_SEQN")) + 1);
        	this.dsTA_ACCTXD.setColumn(iRow, "UNUS_YSNO", "0");  //미결사용
        	this.dsTA_ACCTXD.setColumn(iRow, "OVER_YSNO", "0");  //이월사용
        	this.dsTA_ACCTXD.setColumn(iRow, "USEX_YSNO", "1");  //사용여부

        	this.fnc_GridSetCellFocus(this.grdTA_ACCTXD, "COND_NAME");

        }

        /*-----------------+
         |  관리코드삭제 |
         +-----------------*/
        this.btn_RowDel_OnClick = function (obj,e){

        	if(this.fn_DetailDeleteCheck()) {
        		this.dsTA_ACCTXD.deleteRow(this.dsTA_ACCTXD.rowposition);
        		this.dsTA_ACCTXD.set_keystring("S:CODE_SEQN");
        		for (var i = 0; i < this.dsTA_ACCTXD.getRowCount(); i++) {

        			//순번 재계산
        			this.dsTA_ACCTXD.setColumn(i, "CODE_SEQN", nexacro.toNumber(i + 1));
        			
        		}
        		
        	}

        	if (this.dsTA_ACCTXD.getRowCount() < 1) {

        		if (this.dsTA_ACCTXM.getRowType(this.dsTA_ACCTXM.rowposition) == Dataset.ROWTYPE_INSERT) {
        			this.fnc_SetReadonly(this.edtACCT_INTL, false);
        		} else {
        			this.fnc_SetReadonly(this.edtACCT_INTL, true);
        		}

        	}

        }

        /*-----------------------+
         |  관리코드 삭제 여부 |
         +-----------------------*/
        this.fn_DetailDeleteCheck = function (){
        	
        	if (this.dsTA_ACCTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM032");
        		return;
        	}
        	
        	if (this.dsTA_ACCTXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText  = "관리코드 : (" + this.fnc_Trim(this.dsTA_ACCTXD.getColumn(this.dsTA_ACCTXD.rowposition, "COND_CODE")) + "), ";
        		sQuestionText += "관리코드명 : (" + this.fnc_Trim(this.dsTA_ACCTXD.getColumn(this.dsTA_ACCTXD.rowposition, "COND_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------------------------+
         |  계정과목정보 행 이동시 체크 이벤트 |
         +-------------------------------------*/
        this.dsTA_ACCTXM_canrowposchange = function (obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_ACCTXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        }

        this.dsTA_ACCTXM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "SLIP_YSNO") {
        	
        		this.fn_SetFieldEnable(e.newvalue);
        		
        	} else if (e.columnid == "UPPR_NAME") {
        	
        		this.fn_HelpDialoge(this.edtUPPR_NAME, "YES", e.oldvalue, e.columnid);
        		
        	}
        	
        }

        this.fn_SetFieldEnable = function (sVal) {

        	if (sVal == "1") {
        	
        		this.staBUDG_YSNO.set_cssclass("styFormItemCapBE");
        		this.staGUNB_YSNO.set_cssclass("styFormItemCapBE");
        		this.staCHUN_YSNO.set_cssclass("styFormItemCapBE");
        		this.staZERO_YSNO.set_cssclass("styFormItemCapBE");
        		this.staFNCR_YSNO.set_cssclass("styFormItemCapBE");
        		this.staEVID_YSNO.set_cssclass("styFormItemCapBE");
        		this.staCHUL_YSNO.set_cssclass("styFormItemCapBE");
        		this.staCSUS_YSNO.set_cssclass("styFormItemCapBE");

        		this.fnc_SetReadonly(this.cmbBUDG_YSNO, false);
        		this.fnc_SetReadonly(this.cmbGUNB_YSNO, false);
        		this.fnc_SetReadonly(this.cmbCHUN_YSNO, false);
        		this.fnc_SetReadonly(this.cmbZERO_YSNO, false);
        		this.fnc_SetReadonly(this.cmbFNCR_YSNO, false);
        		this.fnc_SetReadonly(this.cmbEVID_YSNO, false);
        		this.fnc_SetReadonly(this.cmbACCT_TYPE, false);
        		this.fnc_SetReadonly(this.cmbSPSA_GUBN, false);
        		this.fnc_SetReadonly(this.cmbCHUL_YSNO, false);
        		this.fnc_SetReadonly(this.cmbCSUS_YSNO, false);
        		this.fnc_SetReadonly(this.cmbFUND_YSNO, false);
        		this.fnc_SetReadonly(this.cmbOVER_GUBN, false);
        		this.fnc_SetReadonly(this.cmbCOST_GUBN, false);
        	
        	} else {

        		this.staBUDG_YSNO.set_cssclass("styFormItemCap");
        		this.staGUNB_YSNO.set_cssclass("styFormItemCap");
        		this.staCHUN_YSNO.set_cssclass("styFormItemCap");
        		this.staZERO_YSNO.set_cssclass("styFormItemCap");
        		this.staFNCR_YSNO.set_cssclass("styFormItemCap");
        		this.staEVID_YSNO.set_cssclass("styFormItemCap");
        		this.staCHUL_YSNO.set_cssclass("styFormItemCap");
        		this.staCSUS_YSNO.set_cssclass("styFormItemCap");

        		this.fnc_SetReadonly(this.cmbBUDG_YSNO, true);
        		this.fnc_SetReadonly(this.cmbGUNB_YSNO, true);
        		this.fnc_SetReadonly(this.cmbCHUN_YSNO, true);
        		this.fnc_SetReadonly(this.cmbZERO_YSNO, true);
        		this.fnc_SetReadonly(this.cmbFNCR_YSNO, true);
        		this.fnc_SetReadonly(this.cmbEVID_YSNO, true);
        		this.fnc_SetReadonly(this.cmbACCT_TYPE, true);
        		this.fnc_SetReadonly(this.cmbSPSA_GUBN, false);
        		this.fnc_SetReadonly(this.cmbCHUL_YSNO, true);
        		this.fnc_SetReadonly(this.cmbCSUS_YSNO, true);
        		this.fnc_SetReadonly(this.cmbFUND_YSNO, true);
        		this.fnc_SetReadonly(this.cmbOVER_GUBN, true);
        		this.fnc_SetReadonly(this.cmbCOST_GUBN, true);
        		
        	}
        }

        /*-----------------------+
         |  그리드 팝업 이벤트 |
         +-----------------------*/
        //그리드 팝업 시 필요한 이벤트(dsTA_ACCTXD oncolumnchanged 이벤트 추가)
        this.dsTA_ACCTXD_oncolumnchanged = function(obj,e) {

        	//관리코드팝업
        	if (e.columnid == "COND_NAME") this.fn_HelpDialoge(this.grdTA_ACCTXD, "YES" ,e.oldvalue, e.columnid);

        }

        this.edtSHRACCT_NAME_onkeydown = function(obj,e) {
        	
        	if (e.keycode != 13) return;
        	if (this.fnc_Length(this.fnc_Trim(obj.value)) > 0) this.fn_Search();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_ACCTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_ACCTXM.addEventHandler("canrowposchange", this.dsTA_ACCTXM_canrowposchange, this);
            this.dsTA_ACCTXM.addEventHandler("oncolumnchanged", this.dsTA_ACCTXM_oncolumnchanged, this);
            this.dsTA_ACCTXD.addEventHandler("oncolumnchanged", this.dsTA_ACCTXD_oncolumnchanged, this);
            this.dsTA_ACCTXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible1, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_ACCTXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_RowAdd.addEventHandler("onclick", this.btn_RowAdd_OnClick, this);
            this.btn_RowDel.addEventHandler("onclick", this.btn_RowDel_OnClick, this);
            this.btn_CopyRow.addEventHandler("onclick", this.btn_CopyRow_OnClick, this);
            this.cmbSHRACCT_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkeydown", this.edtSHRACCT_NAME_onkeydown, this);
            this.edtACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRNT_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPPR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSLIP_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCHUL_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbZERO_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbGUNB_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbFNCR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEVID_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbOVER_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCUST_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbFUND_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSPSA_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBUDG_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPPR_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDRCR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCOST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCSUS_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbACCT_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCHUN_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpUPPR_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRPRNT_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSLIP_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBEFO_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
