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
                this.set_name("PAYF0060");
                this.set_titletext("퇴직소득전산매체");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_OFFICE", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" size=\"8\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"ENGX_OFFI\" size=\"50\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"ENGX_OWNR\" size=\"30\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"100\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"100\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"100\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"200\" type=\"STRING\"/><Column id=\"ENGL_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"100\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"10\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"20\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" type=\"STRING\"/><Column id=\"VATX_TPYN\" size=\"7\" type=\"STRING\"/><Column id=\"VATX_UTTN\" size=\"7\" type=\"STRING\"/><Column id=\"MPBZ_NUMB\" size=\"4\" type=\"STRING\"/><Column id=\"MAST_OFFI\" size=\"4\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CLSR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"OFAR_SQMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"OFAR_PYNG\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_CONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"GBN1_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AREA_GBN1\" size=\"10\" type=\"STRING\"/><Column id=\"GBN2_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AREA_GBN2\" size=\"10\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CIOF_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CNTL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PRES_DATE\" size=\"255\" type=\"STRING\"/><Column id=\"PRES_GUBN\" size=\"255\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"WORK_TENR\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPROC", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTL_NAME\" type=\"string\" size=\"32\"/><Column id=\"BSNS_NUMB\" type=\"string\" size=\"32\"/><Column id=\"OFFI_NAME\" type=\"string\" size=\"32\"/><Column id=\"OWNR_NAME\" type=\"string\" size=\"32\"/><Column id=\"JURI_NUMB\" type=\"string\" size=\"32\"/><Column id=\"PRES_CONT\" type=\"bigdecimal\" size=\"255\"/><Column id=\"BEFO_CONT\" type=\"bigdecimal\" size=\"255\"/><Column id=\"RETI_INCO\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_INTX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_IHTX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_STRD\" type=\"bigdecimal\" size=\"255\"/><Column id=\"DECI_TAMT\" type=\"bigdecimal\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPROT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"string\" size=\"32\"/><Column id=\"EMPL_NAME\" type=\"string\" size=\"32\"/><Column id=\"RETI_INCO\" type=\"bigdecimal\" size=\"255\"/><Column id=\"RTIN_DEDU\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STAN_ASSE\" type=\"bigdecimal\" size=\"255\"/><Column id=\"YEAR_STAN\" type=\"bigdecimal\" size=\"255\"/><Column id=\"YEAR_TAX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"CALC_TAX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"FORE_DEDU\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_INTX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_IHTX\" type=\"bigdecimal\" size=\"255\"/><Column id=\"STXA_STRD\" type=\"bigdecimal\" size=\"255\"/><Column id=\"DECI_TAMT\" type=\"bigdecimal\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSAVE00", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("7");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("퇴직소득전산매체");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "168", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("제출자 레코드");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "205", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "422", "61", "40", "41", null, null, this);
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
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "56", "128", "4", null, null, this);
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

            obj = new Grid("grdTM_BRCHXM", "absolute", "8", "128", null, "58", "25", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTM_OFFICE");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"세무서\"/><Cell col=\"1\" text=\"제출일\"/><Cell col=\"2\" text=\"제출자구분\"/><Cell col=\"3\" text=\"홈택스ID\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"법인명\"/><Cell col=\"6\" text=\"담당자부서\"/><Cell col=\"7\" text=\"담당자성명\"/><Cell col=\"8\" text=\"담당자전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTL_NAME\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:PRES_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:PRES_GUBN\"/><Cell col=\"3\" text=\"bind:HTSX_IDXX\"/><Cell col=\"4\" text=\"bind:BSNS_NUMB\" mask=\"###-##-#####\"/><Cell col=\"5\" text=\"bind:OFFI_NAME\"/><Cell col=\"6\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" text=\"bind:EMPL_NAME\"/><Cell col=\"8\" text=\"bind:WORK_TENR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "262", "72", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_index("-1");

            obj = new Static("Static13", "absolute", "451", "71", "70", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("제출일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPRES_DATE", "absolute", "506", "72", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static14", "absolute", "573", "186", "80", "25", null, null, this);
            obj.set_taborder("134");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPROC", "absolute", "8", "211", null, "184", "25", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsPY_RTPROC");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"세무서\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업자번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"지점명\"/><Cell col=\"3\" rowspan=\"2\" text=\"대표자\"/><Cell col=\"4\" rowspan=\"2\" text=\"법인등록번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"주근무처수\"/><Cell col=\"6\" rowspan=\"2\" text=\"종근무처수\"/><Cell col=\"7\" rowspan=\"2\" text=\"퇴직급여액\"/><Cell col=\"8\" colspan=\"4\" text=\"담당자전화번호\"/><Cell row=\"1\" col=\"8\" text=\"소득세\"/><Cell row=\"1\" col=\"9\" text=\"지방소득세\"/><Cell row=\"1\" col=\"10\" text=\"농특세\"/><Cell row=\"1\" col=\"11\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTL_NAME\"/><Cell col=\"1\" text=\"bind:BSNS_NUMB\" mask=\"###-##-#####\"/><Cell col=\"2\" text=\"bind:OFFI_NAME\"/><Cell col=\"3\" text=\"bind:OWNR_NAME\"/><Cell col=\"4\" text=\"bind:JURI_NUMB\" mask=\"######-#######\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRES_CONT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BEFO_CONT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_INCO\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_INTX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_IHTX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_STRD\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DECI_TAMT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "204", "216", "6", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "8", "190", "243", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("원천징수 의무자별 집계레코드");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "394", "80", "25", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPROT", "absolute", "8", "420", null, null, "25", "15", this);
            obj.set_taborder("5");
            obj.set_binddataset("dsPY_RTPROT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사번\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"퇴직급여액\"/><Cell col=\"3\" rowspan=\"2\" text=\"퇴직&#13;&#10;소득공제\"/><Cell col=\"4\" rowspan=\"2\" text=\"퇴직소득&#13;&#10;과세표준\"/><Cell col=\"5\" rowspan=\"2\" text=\"연평균&#13;&#10;과세표준\"/><Cell col=\"6\" rowspan=\"2\" text=\"연평균&#13;&#10;산출세액\"/><Cell col=\"7\" rowspan=\"2\" text=\"산출세액\"/><Cell col=\"8\" colspan=\"4\" text=\"결정세액\"/><Cell row=\"1\" col=\"8\" text=\"소득세\"/><Cell row=\"1\" col=\"9\" text=\"지방소득세\"/><Cell row=\"1\" col=\"10\" text=\"농특세\"/><Cell row=\"1\" col=\"11\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_INCO\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTIN_DEDU\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STAN_ASSE\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEAR_STAN\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEAR_TAX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CALC_TAX\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_INTX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_IHTX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STXA_STRD\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DECI_TAMT\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" text=\"합계\"/><Cell col=\"1\" text=\"expr:dataset.rowcount+&quot;명&quot;\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;RETI_INCO&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;RTIN_DEDU&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;STAN_ASSE&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;YEAR_STAN&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;YEAR_TAX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CALC_TAX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;STXA_INTX&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;STXA_IHTX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;STXA_STRD&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;DECI_TAMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "413", "216", "6", null, null, this);
            obj.set_taborder("140");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "8", "399", "186", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_text("주(현)근무처 레코드");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("142");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("trigger1", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_text("파일생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_YEAR", "absolute", "96", "72", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_type("spin");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직소득전산매체");

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
        this.addIncludeScript("PAYF0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0060 퇴직소득전산매체
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.20		안윤준		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "PAYF0060";
        this.sFILE_NAME = "";
        this.sFILE_PATH = "";

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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetUserComboDs(this.dsUserCombo);

        	switch (this.sUSERLAVEL) {
        		case "1" : // 전체
        			this.cmbSHRACCT_GUBN.set_value(application.GBL_ENFCCD);

        			break;
        		case "3" : // 소속
        			this.cmbSHRACCT_GUBN.set_value(application.GBL_ENFCCD);
        			this.cmbSHRACCT_GUBN.set_readonly(true);

        			break;
        		default :
        			break;
        	}

        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sNowYear = this.fnc_SubStr(sNowDate, 0, 4);

        	//초기값 세팅
        	this.calSHRSTDS_YEAR.set_value(this.fnc_ToString(nexacro.toNumber(sNowYear)-1));
        	this.calSHRPRES_DATE.set_value(sNowYear + "0310");

        	//검색조건 포커스
        	this.calSHRSTDS_YEAR.setFocus();

        }

        /*-----------------------------------+
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
        	this.fnc_DatasetClear("dsTM_OFFICE,dsPY_RTPROC,dsPY_RTPROT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_OFFICE=dsTM_OFFICE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_RTPROC=dsPY_RTPROC";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_RTPROT=dsPY_RTPROT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*------------------------+
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

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_OFFICE,dsPY_RTPROC,dsPY_RTPROT", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_OFFICE,dsPY_RTPROC,dsPY_RTPROT")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRSTDS_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사업장", this.cmbSHRACCT_GUBN);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPRES_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "제출일", this.calSHRPRES_DATE);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00" || sKind == "SEARCH01" || sKind == "SEARCH02" || sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRSTDS_YEAR.value, 0, 4));
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.cmbSHRACCT_GUBN.value);
        		sReturnString += " PRES_DATE=" 	+ this.fnc_Quote(this.calSHRPRES_DATE.value);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(application.GBL_EMPLNO);
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        	} else if (sMethodName == "SEARCH01") {

        	} else if (sMethodName == "SEARCH02") {

        	} else if (sMethodName == "SAVE00") {
        		this.dsSAVE00.set_updatecontrol(false);
        		this.dsSAVE00.setRowType(Dataset.ROWTYPE_NORMAL);
        		this.dsSAVE00.set_updatecontrol(true);
        		
        		this.fn_ExcelFileDown();
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		arrParam[arrInt++] 	= "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*-----------------------------+
         |  전산매체 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {
        	var sPath    = this.sFILE_PATH;  //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명

        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        }

        /*--------------------------------+
         |  전자신고 전산매체 생성 파일 작성 |
         +--------------------------------*/
        this.trigger1_onclick = function(obj,e) {

        //     if ( this.dsPY_RTPROT.rowcount <= 0 ) {
        // 		// 전산매체 신고할 [주근무처 레코드] 내역이 없습니다.
        // 		this.fnc_Message("PAY006", " 주(현)근무처 레코드 ");
        // 		return;
        // 	}

        	if ( this.fnc_Message("PAY007",true, "createEosRecordFile") ){
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsSAVE00");
        		
        		var nRow = this.dsSAVE00.addRow();
        		var sBIZR_NUMB = this.dsPY_RTPROC.getColumn(0, "BSNS_NUMB");
        		var sFileName  = "EA" + this.fnc_SubStr(sBIZR_NUMB, 0, 7) + ".";
        			sFileName += this.fnc_SubStr(sBIZR_NUMB, 7) + "_" + this.cmbSHRACCT_GUBN.value;
        			
        		this.dsSAVE00.setColumn(nRow, "FILE_NAME", sFileName);
        		
        		var sMethodName = "SAVE00";
        		var sInDataSet 	= "dsSAVE00=dsSAVE00:u";
        		var sOutDataSet = "";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_OFFICE.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.dsPY_RTPROC.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.dsPY_RTPROT.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.dsSAVE00.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTM_BRCHXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTPROC.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTPROT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.trigger1.addEventHandler("onclick", this.trigger1_onclick, this);

        };

        this.loadIncludeScript("PAYF0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
