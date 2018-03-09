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
                this.set_name("FAMA0040");
                this.set_titletext("거래처정보조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CUCL_CODE</Col><Col id=\"DSNAME\">dsSHRCUCL_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">거래처유형</Col></Row><Row><Col id=\"CODEID\">CUTY_CODE</Col><Col id=\"DSNAME\">dsSHRCUTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">거래처구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRRETY_CODE</Col><Col id=\"CODEID\">RETY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">관계사구분</Col></Row><Row><Col id=\"CODEID\">LFTY_CODE</Col><Col id=\"DSNAME\">dsSHRLFTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">국내외구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">사용여부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CUST\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"LFTY_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"LFTY_CDNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"NANY_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"NANY_CDNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTCD\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GBNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHSN_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CHSN_TELE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CDNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUTY_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CUTY_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RETY_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"RETY_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_CUSTXM", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_selecttype("TRUE");
            obj.set_binddataset("dsTA_CUSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"72\" band=\"left\"/><Column size=\"116\" band=\"left\"/><Column size=\"71\" band=\"left\"/><Column size=\"153\" band=\"left\"/><Column size=\"164\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"89\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"거래처구분\"/><Cell col=\"1\" text=\"세부구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"4\" displaytype=\"text\" text=\"집계거래처명\"/><Cell col=\"5\" displaytype=\"text\" text=\"국내외구분\"/><Cell col=\"6\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"7\" text=\"주민등록번호\"/><Cell col=\"8\" displaytype=\"text\" text=\"법인등록번호\"/><Cell col=\"9\" displaytype=\"text\" text=\"대표자명\"/><Cell col=\"10\" displaytype=\"text\" text=\"업태\"/><Cell col=\"11\" displaytype=\"text\" text=\"업종\"/><Cell col=\"12\" displaytype=\"text\" text=\"우편번호\"/><Cell col=\"13\" displaytype=\"text\" text=\"주소\"/><Cell col=\"14\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"15\" displaytype=\"text\" text=\"팩스\"/><Cell col=\"16\" displaytype=\"text\" text=\"이메일\"/><Cell col=\"17\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"18\" displaytype=\"text\" text=\"담당자\"/><Cell col=\"19\" displaytype=\"text\" text=\"거래시작일\"/><Cell col=\"20\" displaytype=\"text\" text=\"거래종료일\"/><Cell col=\"21\" displaytype=\"text\" text=\"사용여부\"/><Cell col=\"22\" displaytype=\"text\" text=\"거래처담당자\"/><Cell col=\"23\" displaytype=\"text\" text=\"담당자연락처\"/><Cell col=\"24\" displaytype=\"text\" text=\"거래금융기관\"/><Cell col=\"25\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"26\" displaytype=\"text\" text=\"예금주명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:CUTY_CDNM\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:RETY_CDNM\"/><Cell col=\"2\" displaytype=\"text\" style=\"cursor:hand;\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;cursor:hand;\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_CDNM\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:LFTY_CDNM\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:BIZR_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BIZR_NUMB), 10, '###-##-#####', '')\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:RERN_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(RERN_NUMB), 13, Eco.decode(comp.parent.sUSERLAVEL, '1', '######-#######', '######-#{######}'), '')\" editlimitbymask=\"decimal\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CORP_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Trim(CORP_NUMB), '', '', '######-#######')\" editlimitbymask=\"decimal\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:OWNR_NAME\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BSNS_STAT\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BSNS_TYPE\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:center;\" text=\"bind:POST_NUMB\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ADDR_DETL\"/><Cell col=\"14\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TELE_NUMB\"/><Cell col=\"15\" displaytype=\"text\" style=\"align:left;\" text=\"bind:FAXX_NUMB\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ELTR_MLAD\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MGMT_DTNM\"/><Cell col=\"18\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SACH_EMNM\"/><Cell col=\"19\" displaytype=\"date\" style=\"align:center;\" text=\"bind:OPEN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"date\" style=\"align:center;\" text=\"bind:CLOS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:USEX_YSNO\"/><Cell col=\"22\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CHSN_NAME\"/><Cell col=\"23\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CHSN_TELE\"/><Cell col=\"24\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BANK_CDNM\"/><Cell col=\"25\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"26\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACNT_MANM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "159", "404", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "373", "97", "82", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMGMT_DTCD", "absolute", "455", "97", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMGMT_DTNM", "absolute", "560", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "27", "71", "82", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("거래처명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUCL_CODE", "absolute", "108", "97", "236", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Edit("edtSHRCUST_NAME", "absolute", "108", "71", "236", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "27", "97", "82", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("거래처유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "710", "97", "82", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("영업담당자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSACH_EMNR", "absolute", "791", "97", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSACH_EMNM", "absolute", "896", "97", "120", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "373", "123", "82", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("국내외구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRLFTY_CODE", "absolute", "455", "123", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("Static4", "absolute", "709", "123", "82", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "791", "123", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_value("1");
            obj.set_autoselect("true");
            obj.set_index("1");

            obj = new Static("Static6", "absolute", "373", "71", "82", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("거래처코드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "455", "71", "225", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "709", "71", "82", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NUMB", "absolute", "791", "71", "225", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "27", "123", "82", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("거래처구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUTY_CODE", "absolute", "108", "123", "85", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("Static06", "absolute", "202", "123", "55", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("관계사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRETY_CODE", "absolute", "259", "123", "85", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("imgHelpSHRMGMT_DTNM", "absolute", "537", "97", "21", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSACH_EMNM", "absolute", "873", "97", "21", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("거래처정보조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 재무관리 > 기본정보 > 거래처정보조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("36");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "122", "144", "38", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "122", "92", "102", "5", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "93", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "122", "118", "102", "5", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "344", "61", "40", "93", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "680", "61", "40", "93", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("거래처정보조회");
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
        this.addIncludeScript("FAMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0040 거래처정보조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		권미영		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FAMA0040"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRUSEX_YSNO.set_value(1);
        	this.edtSHRCUST_NAME.setFocus();
        	
        }

        /*-----------------------------------+
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
        	
        	this.fnc_DatasetClear("dsTA_CUSTXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CUSTXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음.
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음.
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음.
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음.
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*------------------------------------+
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
        	
        	var sShrStr = this.fnc_Trim(this.edtSHRCUST_CODE.value) + this.fnc_Trim(this.edtSHRCUST_NAME.value) + this.fnc_Trim(this.edtSHRBIZR_NUMB.value)
        		 + this.fnc_Trim(this.cmbSHRCUCL_CODE.value) + this.fnc_Trim(this.edtSHRMGMT_DTCD.value) + this.fnc_Trim(this.edtSHRSACH_EMNR.value)
        		 + this.fnc_Trim(this.cmbSHRLFTY_CODE.value) + this.fnc_Trim(this.cmbSHRUSEX_YSNO.value);

        	if (this.fnc_Trim(sShrStr) == "") {
        		this.fnc_Message("TMM110");
        		return false;
        	}

        	return true;
        	
        }

        /*-------------------------+
         |  저장 여부 체크(임시)!  |
         +------------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
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
        		sReturnString += " CUST_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); 
        		sReturnString += " CUCL_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUCL_CODE.value)); 
        		sReturnString += " LFTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRLFTY_CODE.value)); 
        		sReturnString += " MGMT_DTCD=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRMGMT_DTCD.value)); 
        		sReturnString += " SACH_EMNR=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSACH_EMNR.value)); 
        		sReturnString += " USEX_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); 
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); 
        		sReturnString += " CUTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUTY_CODE.value)); 
        		sReturnString += " RETY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRETY_CODE.value)); 
        		sReturnString += " BIZR_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRBIZR_NUMB.value)); 
        		
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

        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_CUSTXM.rowcount);		
         	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0]  = "COMBO,cmbSHRCUCL_CODE,dsSHRCUCL_CODE,0";
        		arrParam[1]  = "COMBO,cmbSHRCUTY_CODE,dsSHRCUTY_CODE,0";
        		arrParam[2]  = "COMBO,cmbSHRRETY_CODE,dsSHRRETY_CODE,0";
        		arrParam[3]  = "COMBO,cmbSHRLFTY_CODE,dsSHRLFTY_CODE,0";
        		arrParam[4]  = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, true);
        	
        	}
        	
        }

        /*---------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

        	// 영업담당자 조회조건
        	if ((obj.name == "imgHelpSHRSACH_EMNM") || (obj.name == "edtSHRSACH_EMNM")) {
        		
        		arrParam[0] = "TRM0004";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRSACH_EMNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRSACH_EMNM";
        		arrParam[5] = "edtSHRSACH_EMNR,edtSHRSACH_EMNM";
        		arrParam[6] = "0,1";

        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	// 관리부서 조회조건
        	} else if ((obj.name == "imgHelpSHRMGMT_DTNM") || (obj.name == "edtSHRMGMT_DTNM")) {
        	
        		arrParam[0] = "FAM0001";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRMGMT_DTNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRMGMT_DTNM";
        		arrParam[5] = "edtSHRMGMT_DTCD,edtSHRMGMT_DTNM";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } 
            
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        // 거래처정보등록 화면 팝업
        this.grdTA_CUSTXM_oncelldblclick = function (obj,e) {
        	
        	var sColumnName = this.fnc_getColId(obj, e.cell);
            
        	if (sColumnName == "CUST_CODE" || sColumnName == "CUST_NAME") {
        	
        		var sCust_Code = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(e.row, "CUST_CODE"));
        		var sOpenStyle  = "modeless=false";
        			sOpenStyle += ",autosize=false";
        			sOpenStyle += ",top=-1";
        			sOpenStyle += ",left=-1";
        			sOpenStyle += ",width=1190";
        			sOpenStyle += ",height=690";
        			sOpenStyle += ",title=true";
        			sOpenStyle += ",titletext=";
        			sOpenStyle += ",status=false";
        			sOpenStyle += ",resizable=true";

        		var objArgumentList = {
        			 sLOAD_FORM : "SHR"
        			,sSHRCUST_CODE : sCust_Code
        			,sPARENT_USERLAVEL : this.sUSERLAVEL
        		};
        				
        		this.fnc_OpenPopup("FAMA0030", "fam::FAMA0030.xfdl", objArgumentList, sOpenStyle);
        		
        	}

        }

        // 거래처구분에 따른 관계사구분
        this.cmbSHRCUTY_CODE_onitemchanged = function (obj,e) {

        	if (obj.value == "TS100010") {
        		// 관계사
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, false);
        	} else {
        		// 일발
        		this.cmbSHRRETY_CODE.set_index(0);
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, true);
        	}
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_CUSTXM.addEventHandler("oncelldblclick", this.grdTA_CUSTXM_oncelldblclick, this);
            this.edtSHRMGMT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMGMT_DTNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRSACH_EMNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSACH_EMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCUTY_CODE.addEventHandler("onitemchanged", this.cmbSHRCUTY_CODE_onitemchanged, this);
            this.imgHelpSHRMGMT_DTNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRSACH_EMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
