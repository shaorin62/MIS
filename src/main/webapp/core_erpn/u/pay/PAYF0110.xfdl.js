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
                this.set_name("PAYF0110");
                this.set_titletext("퇴직연금기준임금");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row><Row><Col id=\"DSNAME\">dsBIZR_NAME</Col><Col id=\"COMBOID\">PAY0010</Col><Col id=\"PARAM\">퇴직연금가입기관</Col><Col id=\"USEYSNO\">0</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTDCPY", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RVSN_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDC", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REAY_JOCD\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"REAY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_WAGE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CMPA_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RTBN_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"WAGE_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BONU_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ANVA_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AVEW_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AVBN_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AVAV_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECW_YCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECW_MCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECW_DCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_STNM\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" size=\"32\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"256\" type=\"STRING\"/><Column id=\"APPR_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTDCPY01", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RVSN_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTDCPY02", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RVSN_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDC_PRINT", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"300\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"RECW_YCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECW_MCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECW_DCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REAY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"STDS_WAGE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CMPA_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CMPA_RTBN\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RTBN_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ANVA_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AVER_PAYX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTDCPY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"REAY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_YMTH\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAYX\" size=\"15\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("퇴직연금기준임금");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "357", "129", "80", "25", null, null, this);
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

            obj = new Static("Static07", "absolute", "676", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTDCPY", "absolute", null, "154", "284", "247", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPY_RTDCPY01");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"100\"/><Column size=\"103\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"귀속년월\"/><Cell col=\"1\" text=\"수당항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RVSN_YMTH\" mask=\"####.##\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:EXPD_NAME\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:PAYX_AMOT\" mask=\"###,##\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('PAYX_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "96", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("Static32", "absolute", "325", "71", "50", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "395", "71", "80", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "477", "71", "21", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "500", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "600", "61", "40", "67", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "629", "71", "50", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "671", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "753", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "776", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "296", "61", "40", "67", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "878", "148", "216", "6", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "133", "140", "21", "169", null, this);
            obj.set_taborder("126");
            obj.set_text("기준임금 산출 급여");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPSDC", "absolute", "8", "154", null, null, "339", "15", this);
            obj.set_taborder("128");
            obj.set_binddataset("dsPY_RTPSDC");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"78\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"98\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"연금시작일\"/><Cell col=\"7\" text=\"정산근속기간\"/><Cell col=\"8\" text=\"기준임금\"/><Cell col=\"9\" text=\"회사부담금\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴직위로금\"/><Cell col=\"11\" text=\"납입총액\"/><Cell col=\"12\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" text=\"bind:CPOS_NAME\"/><Cell col=\"6\" text=\"bind:REAY_DATE\" mask=\"####.##.##\"/><Cell col=\"7\" style=\"align:right;\" expr=\"expr:RECW_YCNT + '년 ' + RECW_MCNT + '월 ' + RECW_DCNT+'일'\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:STDS_WAGE\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:CMPA_AMOT\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:RTBN_AMOT\" mask=\"###,##\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:CMPA_AMOT + RTBN_AMOT\"/><Cell col=\"12\" text=\"bind:APPR_STNM\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("129");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "141", "133", "192", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "133", "125", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("퇴직연금 대상자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "132", "136", "10", "13", null, null, this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("납입부담금처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", "95", "70", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "325", "95", "80", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("가입기관");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREAY_JOCD", "absolute", "395", "95", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Static("Static11", "absolute", "848", "279", "30", "41", null, null, this);
            obj.set_taborder("142");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", null, "405", "201", "21", "108", null, this);
            obj.set_taborder("143");
            obj.set_text("기준임금 산출 상여");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRPAY2", "absolute", null, "426", "284", null, "25", "15", this);
            obj.set_taborder("144");
            obj.set_binddataset("dsPY_RTDCPY02");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"100\"/><Column size=\"103\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"귀속년월\"/><Cell col=\"1\" text=\"수당항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RVSN_YMTH\" mask=\"####.##\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:EXPD_NAME\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:PAYX_AMOT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYX_AMOT')\" mask=\"###,##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSendGW", "absolute", "241", "35", "74", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancGW", "absolute", "318", "35", "74", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("상신취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchDoc", "absolute", "395", "35", "74", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("문서보기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "96", "95", "80", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC01", "absolute", "120", "35", "118", "21", null, null, this);
            obj.set_taborder("146");
            obj.set_text("납입부담금취소처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직연금기준임금");

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
        this.addIncludeScript("PAYF0110.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYF0110.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYF0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0110 퇴직연금 기준임금
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		김준수		Initial Created.
         *   2016.11.23		안윤준		수정.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFFTTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0110";
        this.sSERVERTIME  = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));

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

        this.sKeyValue 		= new Array();
        this.sDOCU_IDXX 	= "KHR132";	//결재문서 ID
        this.sAPPR_GUBN 	= "";		//결재처리구분 [ createDoc : 상신, deleteDoc : 결재취소, show : 조회, list : 목록 ]
        this.sAPPR_SEQN 	= "";		//결재문서 SEQ
        this.sAPPR_STAT   	= "";   	//결재문서 상태

        /**************************************************************************************************
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
        		case "1" :	//관리자(본사)
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.cmbSHRENFC_CODE.setFocus();
        			break;

        		case "5" : //소속
        			this.cmbSHRENFC_CODE.set_readonly(true);
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.edtSHRDEPT_NAME.setFocus();
        			break;

        		default :
        			break;
        	}
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	this.divSHRSTDS_YMTH.fn_SetMonth(this.fnc_SubStr(sNowDate, 0, 6));
        	
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
            this.fnc_DatasetClear("dsPY_RTPSDC,dsPY_RTDCPY01,dsPY_RTDCPY02");
        	
        	var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSDC=dsPY_RTPSDC";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdPY_RTPSDC.setFocus();
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        // 기능없음.
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
            // 기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            // 기능없음.
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;

            var sMethodName = "SAVE00";
            var sInDataSet  = "dsPY_RTPSDC=dsPY_RTPSDC:U dsPY_RTDCPY=dsPY_RTDCPY:U ";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
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
            
            var reportfile 	= "/pay/PAYF0110R02.jrf";
        	var params 		= "";
        	
        	var dataref 			= new Array();		
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pay/PAYF0110_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPY_RTPSDC_PRINT=dsPY_RTPSDC_PRINT dsPY_RTDCPY_PRINT=dsPY_RTDCPY_PRINT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPSDC,dsPY_RTDCPY", this);
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
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth())) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.calSHRSTDS_YMTH);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRREAY_JOCD.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "가입기관", this.cmbSHRREAY_JOCD);
        	}
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsPY_RTPSDC,dsPY_RTDCPY")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        // 	for (var row = 0; row < this.dsPY_RTBUSI.getRowCount(); row++) {
        // 	
        // 		if (this.fnc_ToUpper(this.dsPY_RTBUSI.getRowType(row)) == Dataset.ROWTYPE_NORMAL) continue;
        // 		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "REAY_JOCD"))) < 1) {
        // 			return this.fnc_CheckPostAction("TMM008", "연금사업자코드", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "REAY_JOCD");
        // 		}
        // 		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NAME"))) < 1) {
        // 			return this.fnc_CheckPostAction("TMM008", "사업자 성명", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NAME");
        // 		}
        // 		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NUMB"))) < 1) {
        // 			return this.fnc_CheckPostAction("TMM008", "사업자 번호", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NUMB");
        // 		}
        // 		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBUSI.getColumn(row, "BIZR_NUMB"))) < 10) {
        // 			return this.fnc_CheckPostAction("TMM008", "사업자 번호", this.dsPY_RTBUSI, row, this.grdPY_RTBUSI, "BIZR_NUMB");
        // 		}
        // 	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        // 	기능없음.
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 6));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " REAY_JOCD=" 	+ this.fnc_Quote(this.cmbSHRREAY_JOCD.value);
        		
        	} else if (sKind == "SEARCH01")	{
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 6));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "EMPL_NUMB"));
        		
        	} else if (sKind == "PRINT00")	{
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 6));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "EMPL_NUMB"));
        		
        	} else if (sKind == "SAVE00")	{
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " REAY_JOCD=" 	+ this.fnc_Quote(this.cmbSHRREAY_JOCD.value);
        		
        	} else if (sKind == "PROC00")	{
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 6));
        		sReturnString += " SAVE_TYPE=" 	+ this.fnc_Quote("I");
        		
        	} else if (sKind == "PROC01")	{
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 6));
        		sReturnString += " SAVE_TYPE=" 	+ this.fnc_Quote("U");
        		
        	} else if (sKind == "SAVE99") { // 전자결재 연동자료 저장
        		var sApprDocId1 = this.fnc_SubStr(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN"),0, 7)
        		var sApprDocId2 = this.fnc_SubStr(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN"),7)
        		var sApprDocId	= this.sDOCU_IDXX + "-" +sApprDocId1 + sApprDocId2;

        		var sGwap_Subj 	= "퇴직연금기준임금(DC)(PAYF0110I01::"+sApprDocId; 
        		
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " GWAP_EMPL="  + this.fnc_Quote(application.GBL_EMPLNO);	//사원번호(결재요청자)          
                sReturnString += " GWAP_DEPT="  + this.fnc_Quote(application.GBL_DEPTCD);	//부서코드(신청자)
                sReturnString += " GWAP_SUBJ="  + this.fnc_Quote(sGwap_Subj);				//전자결재제목

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
        this.fn_PostProcess = function (sMethodName,ErrorCode) {

        	if (sMethodName == "SEARCH00") {	
        		this.fnc_Information(this.stInformation00, this.dsPY_RTPSDC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPSDC.rowcount);
                if ( this.dsPY_RTPSDC.rowcount > 0 ){
        			this.dsPY_RTPSDC.set_rowposition = 0;
                    //this.fn_KeyFieldDisible(this.dsPY_RTPSDC);
                }
        		

        	} else if (sMethodName == "SEARCH01") {
        		//this.fnc_Information(this.stInformation, this.dsPY_RTDCPY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsPY_RTDCPY.filter("REUD_CODE == '2'");
        		this.dsPY_RTDCPY01.copyData(this.dsPY_RTDCPY, true);
        		this.dsPY_RTDCPY.filter("REUD_CODE == '3'");
        		this.dsPY_RTDCPY02.copyData(this.dsPY_RTDCPY, true);
        		this.dsPY_RTDCPY.filter("");
        		this.grdPY_RTDCPY.setFocus();
        		
        	} else if (sMethodName == "PRINT00") {
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "SAVE99") { // 전자결재 연동자료 저장
        		this.dsPY_RTPSDC.setColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN", this.sAPPR_SEQN);
        		this.dsPY_RTPSDC.applyChange();
        		
        		this.sAPPR_GUBN = "createDoc";
        		this.fn_GwApprProcess(this.sAPPR_GUBN);
        		
        	} else if (sMethodName == "sendApproval") { // 전자결재 GW 전송
        		if (this.sAPPR_GUBN == "createDoc") {
        			this.fnc_ShowApproval(this.sAPPR_GUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		}
        			
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRREAY_JOCD,dsBIZR_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        }

        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        	if (this.dsPY_RTPSDC.rowposition == -1) return;
        	if (!this.fn_SearchItemCheck()) return;

            this.fnc_DatasetClear("dsPY_RTDCPY");
        	
            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTDCPY=dsPY_RTDCPY";
            var sArgument   = this.fn_CreateArgument(sMethodName);

            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", true);
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { //사원조회
        		arrParam[0] = "HRM0002";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        	}
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-----------------------------+
         |  납입부담금처리 버튼 클릭 함수 |
         +-----------------------------*/
        this.btn_PROC_OnClick = function(obj,e) {

        	if(this.fnc_Length(this.divSHRSTDS_YMTH.fn_GetMonth()) < 6 ) { //기준일 여부
        		this.fnc_Message("TMM008", true, "기준년월");
        		this.calSHRSTDS_YMTH.setFocus();
        		return ;
        	}
        	
        	if ( this.fnc_Message("PAY060") ) {
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsPY_RTPSDC,dsPY_RTDCPY01,dsPY_RTDCPY02");

        		var sMethodName = "PROC00";
        		var sInDataSet  = "";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}
        	
        }

        /*----------------------+
         |  결재상신 버튼 클릭 시 |
         +----------------------*/
        this.btnSendGW_onclick = function(obj,e) {
        	
        	if (this.dsPY_RTPSDC.rowcount < 1) return;
        	
        // 	if (!this.fnc_DatasetChangeCheck("dsPY_RTPSDC,dsPY_RTDCPY")) {
        // 		return this.fnc_Message("TMM015", "결재상신");
        // 	}
        	
        	if (!this.fnc_Message("TMM061", "전자결재 상신")) return false;
            
        	this.sAPPR_GUBN = "createDoc";
        	
        	this.dsPY_RTPSDC.set_updatecontrol(false);
        	this.dsPY_RTPSDC.set_enableevent(false);
        	this.dsPY_RTPSDC.setColumn(this.dsPY_RTPSDC.rowposition, "DOCU_IDXX", this.sDOCU_IDXX);
        	this.dsPY_RTPSDC.setRowType(this.dsPY_RTPSDC.rowposition, Dataset.ROWTYPE_UPDATE);
        	this.dsPY_RTPSDC.set_enableevent(true);
        	this.dsPY_RTPSDC.set_updatecontrol(true);
        	
        	this.sKeyValue[0] = this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition,"EMPL_NUMB");
        	
        	//전자결재 연동자료 저장
            var sMethodName = "SAVE99";
            var sInDataSet  = "dsPY_RTPSDC=dsPY_RTPSDC:U";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------------------+
         |  결재취소 버튼 클릭 시
         +---------------------------------------*/
        this.btnCancGW_onclick = function(obj,e) {
        	
        	if (this.dsPY_RTPSDC.rowcount < 1) return;
        	
        	if (!this.fnc_Message("TMM061", "전자결재 상신취소")) return false;
        	
        	this.sAPPR_GUBN = "deleteDoc";
        	this.fn_GwApprProcess(this.sAPPR_GUBN);
        	
        }

        /*--------------------------------------+
         |  문서보기 클릭 시
         +---------------------------------------*/
        this.btnSearchDoc_onclick = function(obj,e) {
        	if (this.dsPY_RTPSDC.rowcount < 1) return;
        	this.sAPPR_GUBN = "show";
        	var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        	this.fnc_ShowApproval(this.sAPPR_GUBN, this.sDOCU_IDXX + "-" + this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN"), "", bPerm);
        	
        }

        /*--------------------------------------+
         |  전자결재상신/취소
         +---------------------------------------*/
        this.fn_GwApprProcess = function(sApprGubn) {
        	
        	if (!this.fn_GwApprCheck(sApprGubn)) return;
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------+
         |  전자결재상신/취소 체크!  |
         +---------------------------*/
        this.fn_GwApprCheck = function (sApprGubn) {

            if (this.dsPY_RTPSDC.rowcount < 1) return this.fnc_Message("TMM011");
            if (this.dsPY_RTPSDC.rowposition < 0) return false;
        	
            var sAppr_Docn 	= this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN");
            var sApprDocId1 = this.fnc_SubStr(sAppr_Docn, 0, 7);
        	var sApprDocId2 = this.fnc_SubStr(sAppr_Docn, 7);
        	var sSubject 	= "퇴직금지급결의서(DC)";
        	var sApprDocId	= this.sDOCU_IDXX + "-" + sAppr_Docn; //DOCU_IDXX - APPR_DOCN
        	
        	if (this.fnc_Length(this.fnc_Trim(sAppr_Docn)) < 1) {
        		return this.fnc_Message("TMM300", "전자결재문서번호가 없습니다.");
        	}
        	
        	var sXmlStr = this.fn_MakeHtml();	//전자결재용 HTML 생성
        	
        	this.fnc_DatasetClear("dsTM_APPROVAL");
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID"     , sApprDocId);      		/* 문서번호 */
            this.dsTM_APPROVAL.setColumn(nRow, "documentType"   , this.sDOCU_IDXX); 		/* 문서종류 */
            this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument"   , sXmlStr);         		/* 결재문서에 그릴HTML */
            this.dsTM_APPROVAL.setColumn(nRow, "subject"        , sSubject);        		/* 결재문서 제목 */
            this.dsTM_APPROVAL.setColumn(nRow, "recipient"      , application.GBL_EMPLNO); 	/* 기안자사번 */
            this.dsTM_APPROVAL.setColumn(nRow, "creator"        , application.GBL_USERNM); 	/* 기안자성명 */
            this.dsTM_APPROVAL.setColumn(nRow, "documentStatus" , sApprGubn);       		/* 결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc */
            this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile"     , "F");             		/* 첨부파일여부 */
        	
        	return true;
        	
        }

        /*--------------------------------------+
         |  전자결재용 HTML 생성
         +---------------------------------------*/
        this.fn_MakeHtml = function () {
            this.fnc_DatasetClear("dsPY_RTPSDC_PRINT,dsPY_RTDCPY_PRINT");
            var sMethodName = "PRINT00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSDC_PRINT=dsPY_RTPSDC_PRINT dsPY_RTDCPY_PRINT=dsPY_RTDCPY_PRINT";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        	var sXmlStr = "";
        	/* 개발 시 DOCU_IDXX 과 APPR_SEQN 조합 -> 예제(KHR111-2016092700001) */ 
        	var sApprDocId1 = this.fnc_SubStr(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN"),0, 7)
        	var sApprDocId2 = this.fnc_SubStr(this.dsPY_RTPSDC.getColumn(this.dsPY_RTPSDC.rowposition, "APPR_SEQN"),7)
        	var sApprDocId	= this.sDOCU_IDXX + "-" +sApprDocId1 + sApprDocId2;
        	
        	var sSubject 	= "퇴직연금기준임금(DC)"; 
        	var mRow 		= this.dsPY_RTPSDC_PRINT.rowposition;
        		
        	sXmlStr  = "<style>";
        	sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += "td { height:18px; font-size:12px; border-top: solid 1px; border-left: solid 1px; }";
        	sXmlStr  += ".linkTable td {font-size: 12px;}";
        	sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label2 { background-color:#FFFFFF; text-align:left; padding-left:10px; font-size:12px;}";
        	sXmlStr  += ".label3 { background-color:#FFFFFF; text-align:right; padding-right: 20px; font-size:12px; height:20px;}";
        	sXmlStr  += ".label4 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; border-top-style:hidden;}";
        	sXmlStr  += ".label5 { background-color:#FFFFFF; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label6 { text-align:right; font-size:12px; font-weight:bold; padding-right: 20px; padding-top: 3px;}";
        	sXmlStr  += ".label7 { text-align:left; font-size:12px; padding-left:30px; padding-top: 3px; padding-bottom: 3px;}";
        	sXmlStr  += ".table2 { background-color:#FAFAFA; text-align:center; font-size:12px; margin-left:30px; width:640px;}";
        	sXmlStr  += "td.labe25 { background-color:#FFFFFF; border-left: none;}";
        	sXmlStr  += "td.left{ border-left: none; text-align: right; padding-right:40px; }";
        	sXmlStr  += "</style>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>근무부서</td>";
        	sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "DEPT_CODE") + " " +	this.dsPY_RTPSDC_PRINT.getColumn(mRow, "DEPT_NAME") + "</td>";
        	sXmlStr  += "        <td class='label1'>직위</td>";
        	sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "OPOS_NAME") + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>성명</td>";
        	sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "EMPL_NUMB") + " " + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "EMPL_NAME") + "</td>";
        	sXmlStr  += "        <td class='label1'>주민등록번호</td>";
        	
        	var sRERN_NUMB  = this.fnc_SubStr(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RERN_NUMB"), 0, 6)+"-";
        		sRERN_NUMB += this.fnc_SubStr(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RERN_NUMB"), 6);
        		
        	sXmlStr  += "        <td class='label2'>" + sRERN_NUMB + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>현주소</td>";
        	sXmlStr  += "        <td class='label2' colspan='3'>" + "( " + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "POST_NUMB") + " ) " + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "DTL1_ADDR") + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직금정산기간</td>";
        	sXmlStr  += "        <td class='label2'>" + this.fnc_GetMaskFormat(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "REAY_DATE"), '@@@@/@@/@@') +  " ~ " +  this.fnc_GetMaskFormat(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "STDS_YMTH"), '@@@@/@@/@@') + "</td>";
        	sXmlStr  += "        <td class='label1'>정산근속기간</td>";
        	sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RECW_YCNT") + "년 " + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RECW_MCNT") + "개월 " + this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RECW_DCNT") + "일" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<br/>";
        	sXmlStr  += "<p>□ 평균임금 정산내역</p>";
            sXmlStr  += "<p class='label7'>1)급여내역<p>";
        	sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td colspan='2' class='label1'>기간</td>";
        	sXmlStr  += "        <td class='label1'>기본급</td>";
        	sXmlStr  += "        <td class='label1'>연장수당</td>";
        	sXmlStr  += "        <td class='label1'>금액</td>";
        	sXmlStr  += "    </tr>";
        	
        	var sPAYX_AMOT = 0;
        	var sOVER_AMOT = 0;
        	var sTOTL_PAYX = 0;
        	var sTOTL_DATE = 0;
        	for(var i = 0; i < this.dsPY_RTDCPY_PRINT.getRowCount(); i++){
        		sXmlStr  += "    <tr>";
        		sXmlStr  += "        <td class='label2'>" + this.fnc_GetMaskFormat(this.dsPY_RTDCPY_PRINT.getColumn(i, "REAY_DATE"), '@@@@/@@/@@') +  " 부터 " +  this.fnc_GetMaskFormat(this.dsPY_RTDCPY_PRINT.getColumn(i, "STDS_YMTH"), '@@@@/@@/@@') + " 까지" + "</td>";
        		sXmlStr  += "        <td class='labe25 left'>" + this.dsPY_RTDCPY_PRINT.getColumn(i, "TOTL_DATE") + " 일" + "</td>";
        		sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTDCPY_PRINT.getColumn(i, "PAYX_AMOT")) + " 원" + "</td>";
        		sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTDCPY_PRINT.getColumn(i, "OVER_AMOT")) + " 원" + "</td>";
        		sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTDCPY_PRINT.getColumn(i, "TOTL_PAYX")) + " 원" + "</td>";
        		sXmlStr  += "    </tr>";
        		sPAYX_AMOT += this.dsPY_RTDCPY_PRINT.getColumn(i, "PAYX_AMOT");
        		sOVER_AMOT += this.dsPY_RTDCPY_PRINT.getColumn(i, "OVER_AMOT");
        		sTOTL_PAYX += this.dsPY_RTDCPY_PRINT.getColumn(i, "TOTL_PAYX");
        		sTOTL_DATE += this.dsPY_RTDCPY_PRINT.getColumn(i, "TOTL_DATE");
        	}
        	
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "급여총액" + "</td>";
        	sXmlStr  += "        <td class='labe25 left'>" + "총일수 " + sTOTL_DATE + " 일" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(sPAYX_AMOT) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(sOVER_AMOT) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(sTOTL_PAYX) + " 원" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td colspan='2' class='label1'>" + "평균급여" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(Math.round(sPAYX_AMOT/this.dsPY_RTDCPY_PRINT.getRowCount())) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(Math.round(sOVER_AMOT/this.dsPY_RTDCPY_PRINT.getRowCount())) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(Math.round(sTOTL_PAYX/this.dsPY_RTDCPY_PRINT.getRowCount())) + " 원" + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p class='label7'>2)연차수당, 평균임금</p>";
        	sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>지급연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "ANVA_TAMT")) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label1'>평균연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "AVER_PAYX")) + " 원" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' colspan='2' style='border-bottom-style:hidden; border-left-style:hidden;'></td>";
        	sXmlStr  += "        <td class='label1'>평균임금</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "TOTL_AMOT")) + " 원" + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직급여</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "CMPA_AMOT")) + " 원" + "</td>";
        	sXmlStr  += "        <td class='label1'>퇴직위로금</td>";
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RTBN_AMOT")) + " 원" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직소득수입금액</td>";
        	
        	var srSTDS_SUMM = nexacro.toNumber(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "CMPA_AMOT"))
                            + nexacro.toNumber(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RTBN_AMOT"));
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(srSTDS_SUMM) + " 원" + "</td>";
        	
        	sXmlStr  += "        <td class='label1'>차인지급액</td>";
        	
        	var srSTDS_SUMM = nexacro.toNumber(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "CMPA_AMOT"))
                            + nexacro.toNumber(this.dsPY_RTPSDC_PRINT.getColumn(mRow, "RTBN_AMOT"));
        	sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(srSTDS_SUMM) + " 원" + "</td>";
        	
        	sXmlStr  += "</table>"
            sXmlStr  += "<p class='label6'>" + "상기와 같이 퇴직금을 청구하오니 지급하여 주시기 바랍니다." + "</p>";
        	
        	var sYear 	= this.fnc_SubStr(this.sSERVERTIME, 0, 4)+"년 ";
        	var sMonth 	= this.fnc_SubStr(this.sSERVERTIME, 4, 2)+"월 ";
        	var sDay 	= this.fnc_SubStr(this.sSERVERTIME, 6, 2)+"일";
        	
        	sXmlStr  += "<p class='label6'>" + sYear + sMonth + sDay +  "</p>";
            sXmlStr  += "<br/>";
        	trace(sXmlStr);
        	
        	return sXmlStr;
        	
        }
        /*-----------------------------+
         |  납입부담금취소처리 버튼 클릭 함수 |
         +-----------------------------*/
        this.btn_PROC01_onclick = function(obj,e){

        	if(this.fnc_Length(this.divSHRSTDS_YMTH.fn_GetMonth()) < 6 ) { //기준일 여부
        		this.fnc_Message("TMM008", true, "기준년월");
        		this.calSHRSTDS_YMTH.setFocus();
        		return ;
        	}
        	
        	if ( this.fnc_Message("EVM005", "납입부담금 취소처리") ) {
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsPY_RTPSDC,dsPY_RTDCPY01,dsPY_RTDCPY02");

        		var sMethodName = "PROC00";
        		var sInDataSet  = "";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument("PROC01");
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTPSDC.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsPY_RTPSDC_PRINT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_RTDCPY.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_RTPSDC.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.grdPY_RTRPAY2.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnSendGW.addEventHandler("onclick", this.btnSendGW_onclick, this);
            this.btnCancGW.addEventHandler("onclick", this.btnCancGW_onclick, this);
            this.btnSearchDoc.addEventHandler("onclick", this.btnSearchDoc_onclick, this);
            this.btn_PROC01.addEventHandler("onclick", this.btn_PROC01_onclick, this);

        };

        this.loadIncludeScript("PAYF0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
