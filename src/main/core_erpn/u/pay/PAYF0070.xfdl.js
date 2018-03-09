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
                this.set_name("PAYF0070");
                this.set_titletext("퇴직추계액처리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">TMM0006</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row><Row><Col id=\"DSNAME\">dsSTDS_DATE</Col><Col id=\"COMBOID\">PAY0026</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">기준일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">REEP_DIVC</Col><Col id=\"DSNAME\">dsREEP_DIVC</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsYESX_NOXX</Col><Col id=\"CODEID\">YESX_NOXX</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTRESE", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RCKN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CWRK_YCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_MCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_DCNT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RETI_ALWN\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_ALWN\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OCUR_ALWN\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REEP_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BONU_TAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CPOS_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"AVEW_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ANVA_TAMT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"AVAV_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"AVBN_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"RETR_RATE\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTRPAY1", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTRPAY2", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("8");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("퇴직추계액처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
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
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "97", "90", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "77", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
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

            obj = new Static("Static07", "absolute", "697", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRESE", "absolute", "8", "154", null, null, "295", "15", this);
            obj.set_taborder("51");
            obj.set_wheelscrollrow("1");
            obj.set_binddataset("dsPY_RTRESE");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"77\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"퇴직수당구분\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"기산일\"/><Cell col=\"8\" text=\"근속년수\"/><Cell col=\"9\" text=\"급여 연간 지급액\"/><Cell col=\"10\" text=\"월 평균급여\"/><Cell col=\"11\" text=\"연차수당\"/><Cell col=\"12\" text=\"월 평균 연차수당\"/><Cell col=\"13\" text=\"상여 연간 지급액\"/><Cell col=\"14\" text=\"월 평균상여\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"평균임금\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴직추계액\"/><Cell col=\"17\" text=\"연간 총 급여액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" text=\"bind:REEP_NAME\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCKN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"expr:CWRK_YCNT + '년' + CWRK_MCNT + '월' + CWRK_DCNT+'일'\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:AVEW_AMOT *   ((( CWRK_YCNT * 12 ) + CWRK_MCNT + ( CWRK_DCNT &gt; 0 ? 1 : 0 )) &gt; 12 ? 12 : (( CWRK_YCNT * 12 ) + CWRK_MCNT + ( CWRK_DCNT &gt; 0 ? 1 : 0 )))\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEW_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ANVA_TAMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVAV_AMOT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BONU_TAMT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVBN_AMOT\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:AVER_WAGE\" editlimit=\"15\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RETI_ALWN\" editlimit=\"15\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:AVEW_AMOT *   ((( CWRK_YCNT * 12 ) + CWRK_MCNT + ( CWRK_DCNT &gt; 0 ? 1 : 0 )) &gt; 12 ? 12 : (( CWRK_YCNT * 12 ) + CWRK_MCNT + ( CWRK_DCNT &gt; 0 ? 1 : 0 ))) + BONU_TAMT + ANVA_TAMT\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;) * 12\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ANVA_TAMT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVAV_AMOT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;BONU_TAMT&quot;)\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVBN_AMOT&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('AVER_WAGE')\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('RETI_ALWN')\"/><Cell col=\"17\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;)*12+dataset.getSum(&quot;BONU_TAMT&quot;)+dataset.getSum(&quot;ANVA_TAMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "201", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "285", "61", "40", "67", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "430", "71", "80", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "512", "71", "21", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "535", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "314", "71", "52", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "635", "61", "40", "67", null, null, this);
            obj.set_taborder("61");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "664", "71", "52", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "760", "71", "80", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "842", "71", "21", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "865", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "52", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "85", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_index("-1");

            obj = new Static("Static11", "absolute", "308", "97", "132", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text(" 1년이상근무여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYESX_NOXX", "absolute", "430", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Static("Static12", "absolute", "664", "97", "132", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("퇴직수당구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREEP_DIVC", "absolute", "760", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_visible("true");

            obj = new Static("Static14", "absolute", "965", "61", "40", "67", null, null, this);
            obj.set_taborder("75");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "538", "129", "32", "25", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "133", "201", "21", "74", null, this);
            obj.set_taborder("77");
            obj.set_text("추계액 산출 급여");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "912", "148", "216", "6", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRPAY1", "absolute", null, "154", "250", "247", "25", null, this);
            obj.set_taborder("79");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_RTRPAY1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"수당항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:EXPD_NAME\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:PAYX_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYX_AMOT')\" mask=\"###,##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "892", "281", "20", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", null, "405", "201", "21", "74", null, this);
            obj.set_taborder("81");
            obj.set_text("추계액 산출 상여");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "912", "420", "216", "6", null, null, this);
            obj.set_taborder("82");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRPAY2", "absolute", null, "426", "250", null, "25", "15", this);
            obj.set_taborder("83");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_RTRPAY2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"수당항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:EXPD_NAME\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:PAYX_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYX_AMOT')\" mask=\"###,##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "110", "35", "86", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("추계액처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DELETE", "absolute", "198", "35", "86", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("추계액삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTDS_DATE", "absolute", "8", "35", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Combo("cmbSHRSTDS_DATE", "absolute", "85", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직추계액처리");

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
        this.addIncludeScript("PAYF0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0070.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYF0070 퇴직추계액 처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.12     김준수     Initial Created.
         *   2016.09.22     안윤준     수정
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

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0070";
        this.aKeyValue    = new Array(1);
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
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            this.fnc_GetUserComboDs(this.dsUserCombo);
            
            switch (this.sUSERLAVEL) {
                case "1" : // 전체
                    this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);

                    break;
                case "3" : // 소속
                    this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
                    this.cmbSHRENFC_CODE.set_readonly(true);

                    break;
                default :
                    break;
            }

            var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
            this.calSTDS_DATE.set_value(sNowDate);
            
            this.cmbSHRENFC_CODE.setFocus();
            
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
            this.fnc_DatasetClear("dsPY_RTRESE");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTRESE=dsPY_RTRESE";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            // 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        // 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_RTRESE");
        	this.grdPY_RTRESE.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;

            var sMethodName = "SAVE00";
            var sInDataSet  = "dsPY_RTRESE=dsPY_RTRESE:U";
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
            // 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTRESE,dsPY_RTRPAY1,dsPY_RTRPAY2", this);
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
            if (this.fnc_DatasetChangeCheck("dsPY_RTRESE,dsPY_RTRPAY1,dsPY_RTRPAY2")) {
                if (this.fnc_Message("TMM023") == false) return false;
            }
            if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_DATE.value)) < 8) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.cmbSHRSTDS_DATE);
            }   
            return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

            if (!this.fnc_DatasetChangeCheck("dsPY_RTRESE,dsPY_RTRPAY1,dsPY_RTRPAY2")) {
                this.fnc_Message("TMM003");
                return false;
            }

        //  for (var row = 0; row < this.dsPY_RTRESE.getRowCount(); row++) {
        //  
        //      if (this.fnc_ToUpper(this.dsPY_RTRESE.getRowType(row)) == Dataset.ROWTYPE_NORMAL) continue;
        //      
        //      if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTRESE.getColumn(row, "REAY_JOCD"))) < 1) {
        //          return this.fnc_CheckPostAction("TMM008", "연금사업자코드", this.dsPY_RTRESE, row, this.grdPY_RTRESE, "REAY_JOCD");
        //      }
        //      
        //      if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTRESE.getColumn(row, "BIZR_NAME"))) < 1) {
        //          return this.fnc_CheckPostAction("TMM008", "사업자 성명", this.dsPY_RTRESE, row, this.grdPY_RTRESE, "BIZR_NAME");
        //      }
        //      
        //      if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTRESE.getColumn(row, "BIZR_NUMB"))) < 10) {
        //          return this.fnc_CheckPostAction("TMM008", "사업자 번호", this.dsPY_RTRESE, row, this.grdPY_RTRESE, "BIZR_NUMB");
        //      }
        //  }

            return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
            var sQuestionText = "연금사업자코드 (" + this.fnc_Trim(this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "REAY_JOCD")) + ")";
            return this.fnc_Message("TMM002", sQuestionText);
            
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

            var sReturnString;

            if (sKind == "SEARCH00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " STDS_DATE="  + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
                sReturnString += " PAYX_YSNO="  + this.fnc_Quote(this.cmbSHRYESX_NOXX.value);
                sReturnString += " REEP_DIVC="  + this.fnc_Quote(this.cmbSHRREEP_DIVC.value);
                sReturnString += " ENFC_CODE="  + this.fnc_Quote(this.cmbSHRENFC_CODE.value);
                
            } else if (sKind == "SEARCH01") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " STDS_DATE="  + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "EMPL_NUMB"));
                
            } else if (sKind == "SEARCH02") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " STDS_DATE="  + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "EMPL_NUMB"));
                
            } else if (sKind == "SAVE00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
            
            } else if (sKind == "PROC00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " STDS_DATE="  + this.fnc_Quote(this.calSTDS_DATE.value);
                
            } else if (sKind == "DELETE00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " STDS_DATE="  + this.fnc_Quote(this.calSTDS_DATE.value);
                
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

            if (sMethodName == "SEARCH00") {    
                this.fnc_Information(this.stInformation, this.dsPY_RTRESE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsPY_RTRESE.rowcount);
                if ( this.dsPY_RTRESE.rowcount > 0 ){
                    this.cmbSHRSTDS_DATE.set_value(this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "STDS_DATE"));
                    this.fn_Search01();
                }
                
            } else if (sMethodName == "SAVE00") {
                this.fnc_Information(this.stInformation, 0, "SAVE");
                this.fnc_Message("TMM103");
                this.grdPY_RTRESE.setFocus();
                
            } else if (sMethodName == "PROC00") {
                this.fnc_Message("HRM071", "추계액 생성");
                this.fnc_GetUserComboDs(this.dsUserCombo);
                this.cmbSHRSTDS_DATE.set_value(this.calSTDS_DATE.value);
                
        //      this.dsPROC00.set_updatecontrol(false);
        //      this.dsPROC00.setRowType(0, Dataset.ROWTYPE_NORMAL);
        //      this.dsPROC00.set_updatecontrol(true);
                this.fn_Search();
                
            } else if (sMethodName == "SEARCH01") {
                this.fn_Search02();
                
            } else if (sMethodName == "SEARCH02") {
                this.grdPY_RTRESE.setFocus();
                
            } else if (sMethodName == "DELETE00") {
                this.fnc_Message("HRM071", "추계액 삭제");
                this.fnc_GetUserComboDs(this.dsUserCombo);
                this.cmbSHRSTDS_DATE.set_index(0);
                
                this.dsDELETE00.set_updatecontrol(false);
                this.dsDELETE00.setRowType(0, Dataset.ROWTYPE_NORMAL);
                this.dsDELETE00.set_updatecontrol(true);
                this.fn_Search();
                
            } else if (sMethodName == "GetUserComboCode") {
                var arrParam = new Array();
                    arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
                    arrParam[1] = "COMBO,cmbSHRSTDS_DATE,dsSTDS_DATE,0";
                this.fnc_UserComboInnerBind(arrParam);
                
            } else if (sMethodName == "GetCommCode") {
                var arrParam1 = new Array();
                    arrParam1[0] = "COMBO,cmbSHRREEP_DIVC,dsREEP_DIVC,0"; 
                    arrParam1[1] = "COMBO,cmbSHRYESX_NOXX,dsYESX_NOXX,0"; 
                this.fnc_CommonCodeInnerBind(arrParam1);
                
            }
        }

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
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        this.fn_Search01 = function (obj) {

            //if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsPY_RTRPAY1");

            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTRPAY1=dsPY_RTRPAY1";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdPY_RTRPAY1.setFocus();
            
        }

        this.fn_Search02 = function (obj) {

            //if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsPY_RTRPAY2");

            var sMethodName = "SEARCH02";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTRPAY2=dsPY_RTRPAY2";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdPY_RTRPAY1.setFocus();
            
        }

        this.btn_PROC_OnClick = function(obj,e) {
            
            if (this.fnc_Length(this.fnc_Trim(this.calSTDS_DATE.value)) != 8) { //기준일 여부
                this.fnc_Message("TMM008", "처리일자");
                this.calSTDS_DATE.setFocus();
                return false;
            }
            
            if ( this.fnc_Message("PAY009", true) ){
                this.fnc_DatasetClear("dsPY_RTRESE,dsPY_RTRPAY1,dsPY_RTRPAY2");
                
                var sMethodName = "PROC00";
                var sInDataSet  = "";
                var sOutDataSet = "";
                var sArgument   = this.fn_CreateArgument(sMethodName);
                this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
            }
            
        }

        this.btn_DELETE_onclick = function(obj,e) {
            
            if (this.fnc_Length(this.fnc_Trim(this.calSTDS_DATE.value)) != 8) { //기준일 여부
                this.fnc_Message("TMM008", "처리일자");
                this.calSTDS_DATE.setFocus();
                return false;
            }
            
            if ( this.fnc_Message("PAY063", this.calSTDS_DATE.text) ){
                this.fnc_DatasetClear("dsPY_RTRESE,dsPY_RTRPAY1,dsPY_RTRPAY2");
                
                var sMethodName = "DELETE00";
                var sInDataSet  = "";
                var sOutDataSet = "";
                var sArgument   = this.fn_CreateArgument(sMethodName);
                this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
                
            }
            
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
         // 퇴직추계액 계산
        this.dsPY_RTRESE_oncolumnchanged = function(obj,e) {

            // 평균임금 
            var iAVER_WAGE = this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "AVER_WAGE");
            // 지급률
            var iPAYX_RATE = this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "PAYX_RATE");
            // 퇴직배율
            var iRETR_RATE = this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "RETR_RATE");
            // 퇴직추계액    ------- (평균임금 * 지급률 /10) * 10
            var iRETI_ALWN = ((iAVER_WAGE * iPAYX_RATE * iRETR_RATE) / 10) * 10 ;
            
            // 이전 충당금 ------ (퇴직추계액 - 이전충당금)
            var iBEFO_ALWN = this.dsPY_RTRESE.getColumn(this.dsPY_RTRESE.rowposition, "BEFO_ALWN");
            // 차년도 퇴직추계액
            //var iOCUR_ALWN = iRETI_ALWN - iBEFO_ALWN;
            
            this.dsPY_RTRESE.setColumn(this.dsPY_RTRESE.rowposition, "RETI_ALWN", iRETI_ALWN) ;
            //this.dsPY_RTRESE.setColumn(this.dsPY_RTRESE.rowposition, "OCUR_ALWN", iOCUR_ALWN)
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTRESE.addEventHandler("onrowposchanged", this.fn_Search01, this);
            this.dsPY_RTRESE.addEventHandler("oncolumnchanged", this.dsPY_RTRESE_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_RTRESE.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_RTRPAY1.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTRPAY2.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_DELETE.addEventHandler("onclick", this.btn_DELETE_onclick, this);

        };

        this.loadIncludeScript("PAYF0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
