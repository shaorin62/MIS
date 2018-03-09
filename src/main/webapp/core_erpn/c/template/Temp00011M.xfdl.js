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
                this.set_name("Temp00011M");
                this.set_titletext("조회/상세/그리드(2)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "8", "164", null, "91", "25", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "99", "269", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("35");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "290", null, null, "25", "227", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj.set_taborder("28");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"25\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"107\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"201\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"86\"/><Column size=\"140\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"회계일자\"/><Cell col=\"3\" text=\"출납예정일\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"계정코드\"/><Cell col=\"6\" text=\"거래처\"/><Cell col=\"7\" text=\"구매카드가맹점번호\"/><Cell col=\"8\" text=\"발생전표적요\"/><Cell col=\"9\" text=\"발생금액\"/><Cell col=\"10\" text=\"기정리액\"/><Cell col=\"11\" text=\"잔액\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정리금액\"/><Cell col=\"13\" text=\"결제계정코드\"/><Cell col=\"14\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"결제계정명\"/><Cell col=\"15\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"적요\"/><Cell col=\"16\" text=\"부서\"/><Cell col=\"17\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"출납방법\"/><Cell col=\"18\" text=\"금융기관\"/><Cell col=\"19\" text=\"거래처계좌번호\"/><Cell col=\"20\"/><Cell col=\"21\" text=\"당사금융기관\"/><Cell col=\"22\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"당사계좌번호\"/><Cell col=\"23\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"지급일\"/><Cell col=\"24\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"발행일\"/><Cell col=\"25\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"관리번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'checkbox' : 'none'\" edittype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'checkbox' : 'none'\" style=\"align:left;\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACCT_DATE\" editlimit=\"-1\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:SLIP_KEY\" mask=\"##-########-####-####\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:VIEW_CUST\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:JOIN_NO\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REMA_AMNT\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'normal' : 'none'\" style=\"align:right;\" text=\"bind:LAST_AMNT\"/><Cell col=\"13\" style=\"align:center;\" text=\"bind:RPAY_ACCT_INTL\"/><Cell col=\"14\" edittype=\"normal\" style=\"align: ;\" text=\"bind:RPAY_ACCT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"15\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RPAY_REMK_NAME\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:RPAY_DEPT_NAME\"/><Cell col=\"17\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:RPAY_LEDG_GUBN\"/><Cell col=\"18\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:BANK_CODE\"/><Cell col=\"19\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"20\" text=\"bind:RPAY_BABR_CODE\"/><Cell col=\"21\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:RPAY_BANK_CODE\"/><Cell col=\"22\" edittype=\"normal\" style=\"align: ;\" cssclass=\"theme://images/btn_WF_Search.png\" text=\"bind:RPAY_ACNT_NUMB\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"23\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RPAY_PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"24\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RPAY_ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"25\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RPAY_MANA_NOXX\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" style=\"align:center;\" text=\"계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('SLIP_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('RPAY_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('REMA_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('LAST_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "794", "97", "55", "21", null, null, this);
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "889", "97", "62", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "976", "97", "135", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "97", "97", "55", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("58");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "199", "91", "21", null, null, this);
            obj.set_text("당사계좌번호");
            obj.set_visible("true");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NUMB", "absolute", "123", "199", "135", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("59");
            obj.set_visible("true");
            obj.set_value("13321452300104");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NAME", "absolute", "283", "199", "201", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_value("하나(구로디지털) ");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "513", "199", "91", "21", null, null, this);
            obj.set_text("당사금융기관");
            obj.set_visible("true");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_CODE", "absolute", null, "139", "52", "21", "314", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("60");
            obj.set_visible("false");
            obj.set_value("081");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_NAME", "absolute", "609", "199", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("19");
            obj.set_visible("true");
            obj.set_value("하나은행");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "97", "71", "92", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "279", "71", "126", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "468", "71", "68", "21", null, null, this);
            obj.set_text("회계일자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "538", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "654", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Button("btnREMAIN_COPY", "absolute", null, "139", "74", "21", "102", null, this);
            obj.set_taborder("27");
            obj.set_text("잔액복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP", "absolute", null, "139", "74", "21", "25", null, this);
            obj.set_taborder("61");
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "269", "89", "21", null, null, this);
            obj.set_text("발생내역");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "99", null, "192", "21", null, "202", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("33");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", null, null, "187", "25", "15", this);
            obj.set_taborder("62");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"333\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"회계일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"2\" displaytype=\"text\" text=\"정리금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"적요\"/><Cell col=\"4\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"6\" text=\"출납예정일\"/><Cell col=\"7\" text=\"출납방법\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\" mask=\"##-########-####-####\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:LEDG_GUBN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, "89", "21", null, "202", this);
            obj.set_text("정리내역");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "615", "97", "68", "21", null, null, this);
            obj.set_text("잔액여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREMA_GUBN", "absolute", "684", "97", "68", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static09", "absolute", "28", "173", "91", "21", null, null, this);
            obj.set_text("결제계정코드");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "123", "173", "135", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "283", "173", "201", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPPLY_ALL", "absolute", null, "139", "74", "21", "179", null, this);
            obj.set_taborder("25");
            obj.set_text("일괄넣기");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "513", "173", "91", "21", null, null, this);
            obj.set_text("출납방법");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbLEDG_GUBN", "absolute", "609", "173", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static05", "absolute", "789", "199", "91", "21", null, null, this);
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPAYX_DATE", "absolute", "858", "199", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static10", "absolute", "28", "225", "91", "21", null, null, this);
            obj.set_text("발행일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Calendar("calISSU_DATE", "absolute", "123", "225", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static11", "absolute", "513", "225", "91", "21", null, null, this);
            obj.set_text("관리번호");
            obj.set_visible("true");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMANA_NOXX", "absolute", "609", "225", "150", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_CODE", "absolute", null, "139", "52", "21", "261", null, this);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_value("811338");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "177", "97", "132", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "794", "71", "96", "21", null, null, this);
            obj.set_text("제외계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXCP_ACCT_INTL", "absolute", "889", "71", "62", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXCP_ACCT_NAME", "absolute", "976", "71", "135", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "789", "173", "76", "21", null, null, this);
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", "858", "173", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static13", "absolute", null, "265", "74", "21", "316", null, this);
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHK_CNT", "absolute", null, "265", "76", "21", "245", null, this);
            obj.set_taborder("69");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "265", "90", "21", "145", null, this);
            obj.set_text("정리금액합계");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskLAST_AMNT_SUM", "absolute", null, "264", "116", "21", "25", null, this);
            obj.set_taborder("70");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "311", "97", "14", "21", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL_TO", "absolute", "327", "97", "55", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME_TO", "absolute", "407", "97", "132", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "222", "71", "55", "21", null, null, this);
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGROUP_GUBN", "absolute", "858", "225", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static19", "absolute", "789", "225", "76", "21", null, null, this);
            obj.set_text("반제생성");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAME", "absolute", "154", "97", "21", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAME_TO", "absolute", "384", "97", "22", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "953", "97", "22", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXCP_ACCT_NAME", "absolute", "953", "71", "22", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpACCT_INTL", "absolute", "260", "173", "21", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACNT_NAME", "absolute", "260", "199", "21", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "638", "71", "14", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_text("미불반제관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("96");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("97");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("102");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "741", "56", "128", "4", null, null, this);
            obj.set_taborder("103");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("105");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("106");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "584", "255", "80", "35", null, null, this);
            obj.set_taborder("107");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("108");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "120", "92", "102", "5", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "120", "118", "38", "10", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "165", "30", "89", null, null, this);
            obj.set_taborder("113");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "93", "165", "38", "8", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "93", "194", "102", "5", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "93", "220", "102", "5", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "93", "246", "38", "8", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "87", "272", "10", "13", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "87", "497", "10", "13", null, null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "942", "261", "20", "25", null, null, this);
            obj.set_taborder("123");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("124");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "663", "490", "80", "25", null, null, this);
            obj.set_taborder("125");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조회/상세/그리드(2)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_FA010010_medGABG_SEKM_value","mskCHK_CNT","value","dsTA_GITAGETA","GABG_SEKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_medJUMI_SEKM_value","mskLAST_AMNT_SUM","value","dsTA_GITAGETA","JUMI_SEKM");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_OnCellDblClick, this);
            this.grdTA_SLIPXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnREMAIN_COPY.addEventHandler("onclick", this.btnREMAIN_COPY_onclick, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_OnClick, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_OnCellDblClick, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnAPPLY_ALL.addEventHandler("onclick", this.btnAPPLY_ALL_OnClick, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREXCP_ACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXCP_ACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskLAST_AMNT_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_NAME_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREXCP_ACCT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACNT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("Temp00011M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
