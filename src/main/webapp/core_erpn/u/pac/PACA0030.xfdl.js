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
                this.set_name("PACA0030");
                this.set_titletext("제작전표처리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsTAXX_TYPE2</Col><Col id=\"CODEID\">TAXX_TYPE2</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXHSL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILD_BUSI\" type=\"STRING\" size=\"256\"/><Column id=\"COST_CENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SACH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ANID\" type=\"STRING\" size=\"256\"/><Column id=\"DEBT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_LNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"CLAS_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SEQX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_VOCHXMSL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"STRING\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"FILD_BUSI\" type=\"STRING\" size=\"256\"/><Column id=\"COST_CENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SACH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ANID\" type=\"STRING\" size=\"256\"/><Column id=\"DEBT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_LNCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMDBY", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"EVID_DOCU\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILD_BUSI\" type=\"STRING\" size=\"256\"/><Column id=\"COST_CENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PUCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ANID\" type=\"STRING\" size=\"256\"/><Column id=\"DEBT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"AGCY_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RANK2\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RANK3\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YESU_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YESU_AMTX2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_VOCHXMBY", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"STRING\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"FILD_BUSI\" type=\"STRING\" size=\"256\"/><Column id=\"COST_CENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PUCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ANID\" type=\"STRING\" size=\"256\"/><Column id=\"DEBT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_LNCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXHSL_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_LNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMDBY_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_LNCD\" type=\"STRING\" size=\"256\"/><Column id=\"AGCY_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_TANS\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSend", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">개별생성</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">집합생성</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSend_BY", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">개별생성</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">집합생성</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">합산생성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("제작전표처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>제작전표처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "63", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "181", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "494", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabVOCHTAB", "absolute", "8", "128", null, null, "25", "14", this);
            obj.set_taborder("112");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabVOCHTAB);
            obj.set_text("매출");
            this.tabVOCHTAB.addChild(obj.name, obj);
            obj = new Grid("grdPD_SATXXHSL", "absolute", "10", "30", null, null, "10", "0", this.tabVOCHTAB.tabpage1);
            obj.set_taborder("33");
            obj.set_binddataset("dsPD_SATXXHSL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"112\"/><Column size=\"0\"/><Column size=\"172\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전기일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"3\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"4\" style=\"background: ;\" text=\"적요\"/><Cell col=\"5\" style=\"background: ;\" text=\"증빙종류\"/><Cell col=\"6\" style=\"background: ;\" text=\"세금계산서분류\"/><Cell col=\"7\" style=\"background: ;\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"9\" style=\"background: ;\" text=\"총액\"/><Cell col=\"10\" style=\"background: ;\" text=\"사업영역\"/><Cell col=\"11\" style=\"background: ;\" text=\"코스트센터\"/><Cell col=\"12\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"13\" style=\"background: ;\" text=\"지급기일\"/><Cell col=\"14\" style=\"background: ;\" text=\"증빙일\"/><Cell col=\"15\" style=\"background: ;\" text=\"전표번호\"/><Cell col=\"16\" style=\"background: ;\" text=\"계좌코드\"/><Cell col=\"17\" style=\"background: ;\" text=\"차변계정\"/><Cell col=\"18\" style=\"background: ;\" text=\"대변계정\"/><Cell col=\"19\" style=\"background: ;\" text=\"계산서년월\"/><Cell col=\"20\" style=\"background: ;\" text=\"계산서번호\"/><Cell col=\"21\" style=\"background: ;\" text=\"합산순번\"/><Cell col=\"22\" style=\"background: ;\" text=\"기획부서\"/><Cell col=\"23\" style=\"background: ;\" text=\"사업자(주민)번호\"/><Cell col=\"24\" style=\"background: ;\" text=\"개인일반구분\"/><Cell col=\"25\" style=\"background: ;\" text=\"제작건명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:POST_DATE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_GUBN\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:FILD_BUSI\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:COST_CENT\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" text=\"bind:MATU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"date\" text=\"bind:DOCU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" text=\"bind:SACH_NUMB\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:CUST_ANID\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:DEBT_CODE\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:ACCT_CODE\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:TAXY_MONT\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:TAXX_NUMB\"/><Cell col=\"21\" displaytype=\"text\" text=\"bind:TRAN_RANK\"/><Cell col=\"22\" displaytype=\"text\" text=\"bind:PLAN_DEPT\"/><Cell col=\"23\" displaytype=\"text\" text=\"bind:BIZR_NUMB\"/><Cell col=\"24\" displaytype=\"text\" text=\"bind:CITY_CODE\"/><Cell col=\"25\" displaytype=\"text\" text=\"bind:JOBN_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"6\" style=\"align: center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdPD_VOCHXMSL", "absolute", "10", "30", null, null, "52", "42", this.tabVOCHTAB.tabpage1);
            obj.set_taborder("35");
            obj.set_binddataset("dsPD_VOCHXMSL");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"112\"/><Column size=\"135\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"정산일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"전표번호\"/><Cell col=\"3\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"4\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"5\" style=\"background: ;\" text=\"적요\"/><Cell col=\"6\" style=\"background: ;\" text=\"금액\"/><Cell col=\"7\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"8\" style=\"background: ;\" text=\"총액\"/><Cell col=\"9\" style=\"background: ;\" text=\"사업영역\"/><Cell col=\"10\" style=\"background: ;\" text=\"코스트센터\"/><Cell col=\"11\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"12\" style=\"background: ;\" text=\"지급기일\"/><Cell col=\"13\" style=\"background: ;\" text=\"증빙일\"/><Cell col=\"14\" style=\"background: ;\" text=\"계좌코드\"/><Cell col=\"15\" style=\"background: ;\" text=\"차변계정\"/><Cell col=\"16\" style=\"background: ;\" text=\"대변계정\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:POST_DATE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" displaytype=\"text\" style=\"background2: ;cursor:hand;\" text=\"bind:SACH_NUMB\" mask=\"##-########-####\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SUMM_AMTX\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:FILD_BUSI\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:COST_CENT\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:DEND_DATE\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:MATU_DATE\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:DOCU_DATE\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:CUST_ANID\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:DEBT_CODE\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:ACCT_CODE\"/></Band></Format></Formats>");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "516", "0", "80", "30", null, null, this.tabVOCHTAB.tabpage1);
            obj.set_taborder("28");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "938", "26", "216", "4", null, null, this.tabVOCHTAB.tabpage1);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabVOCHTAB.tabpage1);
            obj.set_taborder("32");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabVOCHTAB.tabpage1);
            obj.set_taborder("34");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj = new Combo("cmbCRET_FLAG", "absolute", null, "4", "80", "21", "445", null, this.tabVOCHTAB.tabpage1);
            this.tabVOCHTAB.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_value("0");
            obj.set_text("분할발행");
            obj.set_innerdataset("dsSend");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("0");
            obj = new Tabpage("tabpage2", this.tabVOCHTAB);
            obj.set_text("매입");
            this.tabVOCHTAB.addChild(obj.name, obj);
            obj = new Grid("grdPD_SUJUMDBY", "absolute", "10", "30", null, null, "11", "14", this.tabVOCHTAB.tabpage2);
            obj.set_taborder("1");
            obj.set_binddataset("dsPD_SUJUMDBY");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"117\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"정산일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"거래처코드\"/><Cell col=\"3\" style=\"background: ;\" text=\"거래처명\"/><Cell col=\"4\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"5\" style=\"background: ;\" text=\"적요\"/><Cell col=\"6\" style=\"background: ;\" text=\"증빙방법\"/><Cell col=\"7\" style=\"background: ;\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"9\" style=\"background: ;\" text=\"사업영역\"/><Cell col=\"10\" style=\"background: ;\" text=\"코스트센터\"/><Cell col=\"11\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"12\" style=\"background: ;\" text=\"지급기일\"/><Cell col=\"13\" style=\"background: ;\" text=\"증빙일자\"/><Cell col=\"14\" style=\"background: ;\" text=\"전표번호\"/><Cell col=\"15\" style=\"background: ;\" text=\"계좌코드\"/><Cell col=\"16\" style=\"background: ;\" text=\"차변계정\"/><Cell col=\"17\" style=\"background: ;\" text=\"대변계정\"/><Cell col=\"18\" style=\"background: ;\" text=\"제작코드\"/><Cell col=\"19\" style=\"background: ;\" text=\"견적번호\"/><Cell col=\"20\" style=\"background: ;\" text=\"정산ID\"/><Cell col=\"21\" style=\"background: ;\" text=\"합산기준\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:POST_DATE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:JOBN_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EVID_DOCU\" editdisplay=\"edit\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:FILD_BUSI\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:COST_CENT\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:MATU_DATE\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" text=\"bind:DOCU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:PUCH_NUMB\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:CUST_ANID\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:DEBT_CODE\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:ACCT_CODE\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:JOBN_NUMB\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:PREE_CODE\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:PREE_IDXX\"/><Cell col=\"21\" displaytype=\"text\" text=\"bind:TRAN_RANK\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"6\" style=\"align: center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/></Band></Format></Formats>");
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grdPD_VOCHXMBY", "absolute", "10", "30", null, null, "11", "14", this.tabVOCHTAB.tabpage2);
            obj.set_taborder("4");
            obj.set_binddataset("dsPD_VOCHXMBY");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"정산일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"전표번호\"/><Cell col=\"3\" style=\"background: ;\" text=\"거래처코드\"/><Cell col=\"4\" style=\"background: ;\" text=\"거래처명\"/><Cell col=\"5\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"6\" style=\"background: ;\" text=\"적요\"/><Cell col=\"7\" style=\"background: ;\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"9\" style=\"background: ;\" text=\"사업영역\"/><Cell col=\"10\" style=\"background: ;\" text=\"코스트센터\"/><Cell col=\"11\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"12\" style=\"background: ;\" text=\"지급기일\"/><Cell col=\"13\" style=\"background: ;\" text=\"증빙일자\"/><Cell col=\"14\" style=\"background: ;\" text=\"계좌코드\"/><Cell col=\"15\" style=\"background: ;\" text=\"차변계정\"/><Cell col=\"16\" style=\"background: ;\" text=\"대변계정\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:POST_DATE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" displaytype=\"text\" style=\"cursor:hand;\" text=\"bind:PUCH_NUMB\" mask=\"##-########-####\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:JOBN_NAME\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:FILD_BUSI\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:COST_CENT\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:MATU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:DOCU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:CUST_ANID\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:DEBT_CODE\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:ACCT_CODE\"/></Band></Format></Formats>");
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "428", "0", "80", "30", null, null, this.tabVOCHTAB.tabpage2);
            obj.set_taborder("0");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabVOCHTAB.tabpage2);
            obj.set_taborder("2");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabVOCHTAB.tabpage2);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj = new Combo("cmbCRET_FLAG", "absolute", null, "4", "80", "21", "445", null, this.tabVOCHTAB.tabpage2);
            this.tabVOCHTAB.tabpage2.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.set_text("개별생성");
            obj.set_innerdataset("@dsSend_BY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("0");

            obj = new Static("Static3", "absolute", "209", "71", "83", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "265", "71", "79", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "343", "71", "21", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "364", "71", "130", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "257", "61", "8", "41", null, null, this);
            obj.set_taborder("118");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSUCC_FLAG", "absolute", "578", "71", "177", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSUCC_FLAG_innerdataset = new Dataset("rdoSUCC_FLAG_innerdataset", this.rdoSUCC_FLAG);
            rdoSUCC_FLAG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(rdoSUCC_FLAG_innerdataset);
            obj.set_taborder("119");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Static("Static11", "absolute", "523", "71", "57", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("발행");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "159", "70", "21", "378", null, this);
            obj.set_taborder("121");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtVOCH_DATE", "absolute", null, "159", "121", "21", "257", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btn_CREVOCH", "absolute", null, "159", "62", "21", "100", null, this);
            obj.set_taborder("123");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DELVOCH", "absolute", null, "159", "62", "21", "36", null, this);
            obj.set_taborder("124");
            obj.set_text("전표삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "191", "131", "262", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Div("calTAXY_MONT", "absolute", "70", "71", "112", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabVOCHTAB.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("매출");

            	}
            );
            this.tabVOCHTAB.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabVOCHTAB.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("매입");

            	}
            );
            this.tabVOCHTAB.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작전표처리");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PACA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0030 제작전표처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.19		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0030"; //해당 Form에서 사용 할 Package 명
        this.sFORM_IDXX   	= "PACA0030";
        this.sSYST_LNCD		= "ko";
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보

        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.edtVOCH_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));

        	this.calTAXY_MONT.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	
        	//최소 그리스 세팅
        	this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.set_visible(true);	
        	this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.set_visible(false);
        	this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.set_visible(false);
        	this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.set_visible(false);
        	
        	this.fn_Search();

        } 
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_SATXXHSL");
        	
        	//매출 
        	if(this.tabVOCHTAB.tabindex == 0){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.fnc_DatasetClear("dsPD_VOCHXMSL");
        			var sMethodName = "SEARCH01";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsPD_VOCHXMSL=dsPD_VOCHXMSL";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		//미완료 
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.fnc_DatasetClear("dsPD_SATXXHSL");
        			var sMethodName = "SEARCH00";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsPD_SATXXHSL=dsPD_SATXXHSL";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	
        	//매입
        	}else if(this.tabVOCHTAB.tabindex == 1){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.fnc_DatasetClear("dsPD_VOCHXMBY");
        			var sMethodName = "SEARCH03";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsPD_VOCHXMBY=dsPD_VOCHXMBY";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		//미완료 
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.fnc_DatasetClear("dsPD_SUJUMDBY");
        			var sMethodName = "SEARCH02";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsPD_SUJUMDBY=dsPD_SUJUMDBY";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		}
        	}
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
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
        	//기능없음
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
        	// 기능 없음
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
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_SATXXHSL")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXHSL") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SATXXHSL.rowcount; i++){
        		if(this.dsPD_SATXXHSL.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	if(this.rdoSUCC_FLAG.index == 0)
        	{
        		this.fnc_Message("PAC001");
        		return  false;
        	}
        	
        	return true;
        }

        this.fn_SaveItemCheckDel = function () {
        	// 공통 Head & 상세 변경 체크
        	
        	//매출
        	if(this.tabVOCHTAB.tabindex == 0){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        		
        			if (this.fnc_DatasetChangeCheck("dsPD_VOCHXMSL") == false) {
        				this.fnc_Message("TMM003");
        				return false;
        			}
        			
        			var iCNT = 0;
        			for(var i = 0; i < this.dsPD_VOCHXMSL.rowcount; i++){
        			
        				if(this.dsPD_VOCHXMSL.getColumn(i, "CHK") == 1){
        					iCNT += 1;
        				}
        			}
        				
        			if(iCNT==0){
        				this.fnc_Message("PCM001");
        				return  false;
        			}			
        		
        		}else{
        			this.fnc_Message("PAC010");
        		}
        	
        	//매입
        	}else if(this.tabVOCHTAB.tabindex == 1){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        		
        		if (this.fnc_DatasetChangeCheck("dsPD_VOCHXMBY") == false) {
        				this.fnc_Message("TMM003");
        				return false;
        			}
        			
        			var iCNT = 0;
        			for(var i = 0; i < this.dsPD_VOCHXMBY.rowcount; i++){
        			
        				if(this.dsPD_VOCHXMBY.getColumn(i, "CHK") == 1){
        					iCNT += 1;
        				}
        			}
        				
        			if(iCNT==0){
        				this.fnc_Message("PCM001");
        				return  false;
        			}
        		
        		}else{
        			this.fnc_Message("PAC010");
        			return false;
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
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        	
        	} else if(sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        	
        	}  else if(sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SUJU_DATE=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " OUTS_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        	
        	} else if(sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명

        	}  else if (sKind == "PROC00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); //출처연결키
                sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); //회계구분_사업장 	
                sReturnString += " SLIP_GUBN=" + this.fnc_Quote("PD001"); //전표유형구분
                sReturnString += " SYST_LNCD=" + this.fnc_Quote(this.fnc_Trim(this.sSYST_LNCD)); //시스템 언어코드
                sReturnString += " POST_DATE=" + this.fnc_Quote(this.fnc_Trim(this.edtVOCH_DATE.value)); //전표일자
                sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(application.GBL_DEPTCD)); //입력자 부서
                sReturnString += " CRET_FLAG=" + this.fnc_Quote(this.fnc_Trim(this.tabVOCHTAB.tabpage1.cmbCRET_FLAG.value)); //매출전표 합산 분할
                
                for(var i = 0; i < this.dsPD_SATXXHSL.rowcount; i++){
        			if(this.dsPD_SATXXHSL.getColumn(i, "CHK") == "1"){
        				this.dsPD_SATXXHSL.setColumn(i, "POST_DATE", this.edtVOCH_DATE.value);
        			}
                }
        	
        	}  else if (sKind == "PROC01") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); //출처연결키
                sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); //회계구분_사업장 	
                sReturnString += " SLIP_GUBN=" + this.fnc_Quote("PD002"); //전표유형구분
                sReturnString += " SYST_LNCD=" + this.fnc_Quote(this.fnc_Trim(this.sSYST_LNCD)); //시스템 언어코드
                sReturnString += " POST_DATE=" + this.fnc_Quote(this.fnc_Trim(this.edtVOCH_DATE.value)); //전표일자
                sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(application.GBL_DEPTCD)); //입력자 부서
                sReturnString += " CRET_FLAG=" + this.fnc_Quote(this.fnc_Trim(this.tabVOCHTAB.tabpage2.cmbCRET_FLAG.value)); //매입전표 합산 분할
                
                for(var i = 0; i < this.dsPD_SUJUMDBY.rowcount; i++){
        			if(this.dsPD_SUJUMDBY.getColumn(i, "CHK") == "1"){
        				this.dsPD_SUJUMDBY.setColumn(i, "POST_DATE", this.edtVOCH_DATE.value);
        			}
                }
              
        	
        	}  else if (sKind == "DELETE00" || sKind == "DELETE01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_LNCD=" + this.fnc_Quote(this.fnc_Trim(this.sSYST_LNCD)); //시스템 언어코드
        		
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.stInformation, this.dsPD_SATXXHSL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsPD_VOCHXMSL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation, this.dsPD_SUJUMDBY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH03") {
        		this.fnc_Information(this.stInformation, this.dsPD_VOCHXMBY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "PROC00" || sMethodName == "PROC01") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "DELETE00" || sMethodName == "DELETE01") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        			var arrParam = new Array();
        			arrParam[0]  = "GRID,tabVOCHTAB.tabpage2.grdPD_SUJUMDBY,dsEVID_DOCU,EVID_DOCU";
        			arrParam[1]  = "GRID,tabVOCHTAB.tabpage1.grdPD_SATXXHSL,dsEVID_DOCU,DTIX_TYPE";
        			arrParam[2]  = "GRID,tabVOCHTAB.tabpage1.grdPD_SATXXHSL,dsTAXX_TYPE2,TAXX_GUBN";
        			
        			
        			
        		this.fnc_CommonCodeInnerBind(arrParam);

        	
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.rdoSUCC_FLAG_onitemchanged = function(obj,e)
        {
        	//매출 
        	if(this.tabVOCHTAB.tabindex == 0){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.set_visible(false);
        			this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.set_visible(true);
        			this.fn_Search();
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.set_visible(true);
        			this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.set_visible(false);
        			this.fn_Search();
        		}
        	
        	//매입
        	}else if(this.tabVOCHTAB.tabindex == 1){
        			//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.set_visible(false);	
        			this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.set_visible(true);
        			this.fn_Search();
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.set_visible(true);
        			this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.set_visible(false);
        			this.fn_Search();
        		}	
        	}
        }

        //탭이 변경된 후 
        this.tabVOCHTAB_onchanged = function(obj,e)
        {
        	//매출 
        	if(this.tabVOCHTAB.tabindex == 0){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.set_visible(false);
        			this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.set_visible(true);
        			this.fn_Search();
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.set_visible(true);
        			this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.set_visible(false);
        			this.fn_Search();
        		}
        	
        	//매입
        	}else if(this.tabVOCHTAB.tabindex == 1){
        			//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.set_visible(false);	
        			this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.set_visible(true);
        			this.fn_Search();
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.set_visible(true);
        			this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.set_visible(false);
        			this.fn_Search();
        		}
        	
        	}
        }

        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0006';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*************************
         * 전표 생성 버튼 클릭 |                    
         *************************/
        this.btn_CREVOCH_onclick = function(obj,e)
        {
        	if(this.rdoSUCC_FLAG.index == 0){	
        		this.fnc_Message("PAC008");
        		return  false;
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		//생성 필수 확인
        		if (!this.fn_CreItemCheck()) return;
        		
        		
        		//매출생성
        		if(this.tabVOCHTAB.tabindex == 0){
        			
        			//매출전표 전표번호 생성했는지 여부 확인
        			if (!this.fn_CreItemCheck2()) return;
        			
        			this.dsPD_SATXXHSL_SLIP.clearData();
        			
        			// 선택한 대상만 복사
        			this.dsPD_SATXXHSL.set_enableevent(false);
        			this.dsPD_SATXXHSL.filter("CHK=='1'");
        			this.dsPD_SATXXHSL_SLIP.copyData(this.dsPD_SATXXHSL, true);
        			this.dsPD_SATXXHSL.filter("");
        			this.dsPD_SATXXHSL.set_enableevent(true);
        			
        			if(this.fnc_Message("PAC014")){
        			
        			var sMethodName = "PROC00";
        			var sInDataSet 	= "dsPD_SATXXHSL_SLIP=dsPD_SATXXHSL_SLIP:A dsPD_SATXXHSL=dsPD_SATXXHSL:A";
        			var sOutDataSet = "";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        			}
        		//매입생성
        		}else if(this.tabVOCHTAB.tabindex == 1){
        		
        			this.dsPD_SUJUMDBY_SLIP.clearData();
        			
        			// 선택한 대상만 복사
        			this.dsPD_SUJUMDBY.set_enableevent(false);
        			this.dsPD_SUJUMDBY.filter("CHK=='1'");
        			this.dsPD_SUJUMDBY_SLIP.copyData(this.dsPD_SUJUMDBY, true);
        			this.dsPD_SUJUMDBY.filter("");
        			this.dsPD_SUJUMDBY.set_enableevent(true);
        			
        			if(this.fnc_Message("PAC014")){
        			
        			var sMethodName = "PROC01";
        			var sInDataSet 	= "dsPD_SUJUMDBY_SLIP=dsPD_SUJUMDBY_SLIP:A dsPD_SUJUMDBY=dsPD_SUJUMDBY:A";
        			var sOutDataSet = "";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			
        			}
        		}
        	}
        }

        /*************************
         * 전표 삭제 버튼 클릭 |                    
         *************************/
        this.btn_DELVOCH_onclick = function(obj,e)
        {
        	if(this.rdoSUCC_FLAG.index == 0){	
        	
        		if(!this.fnc_Message("TMM140", "전표를 삭제 하시겠습니까")) return;
        		
        		//매출삭제
        		if(this.tabVOCHTAB.tabindex == 0){
        		
        			if (!this.fn_SaveItemCheckDel()) return;
        			
        			var sMethodName = "DELETE00";
        			var sInDataSet 	= "dsPD_VOCHXMSL=dsPD_VOCHXMSL:A";
        			var sOutDataSet = "";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		//매입삭제
        		}else if(this.tabVOCHTAB.tabindex == 1){
        			if (!this.fn_SaveItemCheckDel()) return;
        			
        			var sMethodName = "DELETE01";
        			var sInDataSet 	= "dsPD_VOCHXMBY=dsPD_VOCHXMBY:A";
        			var sOutDataSet = "";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		this.fnc_Message("PAC010");
        		return  false;
        	}
        }

        //전표생성 필수 확인
        this.fn_CreItemCheck = function () {
        	
        	if(this.edtVOCH_DATE.value == ''){
        		this.fnc_Message("TMM300", "전표일자는 필수 항목 입니다.");
        		return false;
        	}
        	
        	//매출
        	if(this.tabVOCHTAB.tabindex == 0){
        		// 공통 Head & 상세 변경 체크
        		if (this.fnc_DatasetChangeCheck("dsPD_SATXXHSL") == false) {
        			this.fnc_Message("TMM003");
        			return false;
        		}
        		
        		var iCNT = 0;
        		for(var i = 0; i < this.dsPD_SATXXHSL.rowcount; i++){
        			if(this.dsPD_SATXXHSL.getColumn(i, "CHK") == 1){
        				iCNT += 1;
        			}
        		}
        			
        		if(iCNT==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}	
        	
        	//매입
        	}else if(this.tabVOCHTAB.tabindex == 1){
        		// 공통 Head & 상세 변경 체크
        		if (this.fnc_DatasetChangeCheck("dsPD_SUJUMDBY") == false) {
        			this.fnc_Message("TMM003");
        			return false;
        		}
        		
        		var iCNT = 0;
        		for(var i = 0; i < this.dsPD_SUJUMDBY.rowcount; i++){
        			if(this.dsPD_SUJUMDBY.getColumn(i, "CHK") == 1){
        				iCNT += 1;
        			}
        		}
        			
        		if(iCNT==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}	
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtVOCH_DATE.value)) < 1) {
        				this.fnc_Message("PAC015");
        				return false;
        		}
        	return true;
        }

        //매출전표 순번 저장 확인
        this.fn_CreItemCheck2 = function () {
        	
        	for(var i=0;i<this.dsPD_SATXXHSL.rowcount;i++){
        		if(this.dsPD_SATXXHSL.getColumn(i, "CHK") == 0) continue;
        		
        		if(this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXHSL.getColumn(i, "CUST_SEQX"))) < 1||
        		this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXHSL.getColumn(i, "CLAS_SEQX"))) < 1||
        		this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXHSL.getColumn(i, "JOBN_SEQX"))) < 1){
        			this.fnc_Message("MAC018")
        			return false;
        		}
        	}

        	return true;
        }

        //매출 완료전표 전표번호 더블클릭시 상세 
        this.tabVOCHTAB_tabpage1_grdPD_VOCHXMSL_oncelldblclick = function(obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "SACH_NUMB") return;
        	
        	var sSlip_Numb = this.dsPD_VOCHXMSL.getColumn(this.dsPD_VOCHXMSL.rowposition, "SACH_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        }

        //매입 완료전표 전표번호 더블클릭시 상세 
        this.tabVOCHTAB_tabpage2_grdPD_VOCHXMBY_oncelldblclick = function(obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "PUCH_NUMB") return;
        	
        	var sSlip_Numb = this.dsPD_VOCHXMBY.getColumn(this.dsPD_VOCHXMBY.rowposition, "PUCH_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        }

        var isAllChecked = 0;
        this.tabVOCHTAB_tabpage1_grdPD_VOCHXMSL_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_VOCHXMSL.getRowCount(); i++) {
        			this.dsPD_VOCHXMSL.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        var isAllChecked2 = 0;
        this.tabVOCHTAB_tabpage1_grdPD_SATXXHSL_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked2 = (isAllChecked2 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SATXXHSL.getRowCount(); i++) {
        			this.dsPD_SATXXHSL.setColumn(i, v_Colid, isAllChecked2);
        		}
        		this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.setCellProperty("Head", 0, "expr", isAllChecked2);
        	}
        }

        var isAllChecked3 = 0;
        this.tabVOCHTAB_tabpage2_grdPD_VOCHXMBY_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked3 = (isAllChecked3 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_VOCHXMBY.getRowCount(); i++) {
        			this.dsPD_VOCHXMBY.setColumn(i, v_Colid, isAllChecked3);
        		}
        		this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.setCellProperty("Head", 0, "expr", isAllChecked3);
        	}
        }

        var isAllChecked4 = 0;
        this.tabVOCHTAB_tabpage2_grdPD_SUJUMDBY_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked4 = (isAllChecked4 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SUJUMDBY.getRowCount(); i++) {
        			this.dsPD_SUJUMDBY.setColumn(i, v_Colid, isAllChecked4);
        		}
        		this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.setCellProperty("Head", 0, "expr", isAllChecked4);
        	}
        }

        

        //매출 완료 같은 전표 번호는 한꺼번에 체크 된다.
        this.dsPD_VOCHXMSL_cancolumnchange = function(obj,e)
        {
        	var sSACH_NUMB =  this.dsPD_VOCHXMSL.getColumn(e.row,"SACH_NUMB");
        	var sCHK = this.dsPD_VOCHXMSL.getColumn(e.row,"CHK");
        	
        	sCHK = (sCHK == "1" ? 0 : 1);
        	
        	for (var i = 0; i < this.dsPD_VOCHXMSL.getRowCount(); i++) {
        		if(sSACH_NUMB == this.dsPD_VOCHXMSL.getColumn(i,"SACH_NUMB")){
        			this.dsPD_VOCHXMSL.setColumn(i, "CHK", sCHK);
        		}
        	}
        } 

        //매입 완료 같은 전표 번호는 한꺼번에 체크 된다.
        this.dsPD_VOCHXMBY_cancolumnchange = function(obj,e)
        {
        	var sPUCH_NUMB =  this.dsPD_VOCHXMBY.getColumn(e.row,"PUCH_NUMB");
        	var sCHK = this.dsPD_VOCHXMBY.getColumn(e.row,"CHK");
        	
        	sCHK = (sCHK == "1" ? 0 : 1);
        	
        	for (var i = 0; i < this.dsPD_VOCHXMBY.getRowCount(); i++) {
        		if(sPUCH_NUMB == this.dsPD_VOCHXMBY.getColumn(i,"PUCH_NUMB")){
        			this.dsPD_VOCHXMBY.setColumn(i, "CHK", sCHK);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_VOCHXMSL.addEventHandler("cancolumnchange", this.dsPD_VOCHXMSL_cancolumnchange, this);
            this.dsPD_VOCHXMBY.addEventHandler("cancolumnchange", this.dsPD_VOCHXMBY_cancolumnchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.tabVOCHTAB.addEventHandler("onchanged", this.tabVOCHTAB_onchanged, this);
            this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabVOCHTAB.tabpage1.grdPD_SATXXHSL.addEventHandler("onheadclick", this.tabVOCHTAB_tabpage1_grdPD_SATXXHSL_onheadclick, this);
            this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.addEventHandler("oncelldblclick", this.tabVOCHTAB_tabpage1_grdPD_VOCHXMSL_oncelldblclick, this);
            this.tabVOCHTAB.tabpage1.grdPD_VOCHXMSL.addEventHandler("onheadclick", this.tabVOCHTAB_tabpage1_grdPD_VOCHXMSL_onheadclick, this);
            this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabVOCHTAB.tabpage2.grdPD_SUJUMDBY.addEventHandler("onheadclick", this.tabVOCHTAB_tabpage2_grdPD_SUJUMDBY_onheadclick, this);
            this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.addEventHandler("oncelldblclick", this.tabVOCHTAB_tabpage2_grdPD_VOCHXMBY_oncelldblclick, this);
            this.tabVOCHTAB.tabpage2.grdPD_VOCHXMBY.addEventHandler("onheadclick", this.tabVOCHTAB_tabpage2_grdPD_VOCHXMBY_onheadclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.rdoSUCC_FLAG.addEventHandler("onitemchanged", this.rdoSUCC_FLAG_onitemchanged, this);
            this.btn_CREVOCH.addEventHandler("onclick", this.btn_CREVOCH_onclick, this);
            this.btn_DELVOCH.addEventHandler("onclick", this.btn_DELVOCH_onclick, this);

        };

        this.loadIncludeScript("PACA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
