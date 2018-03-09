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
                this.set_name("MDMB0010");
                this.set_titletext("통합큐시트");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_QSHTXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYY_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_PRIC\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAY0_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY7_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY8_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY9_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"UPPR_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TPPR_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"UPBO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TPBO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AFCM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AVCM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AVAV_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CMCM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CMCM_PRIC\" type=\"STRING\" size=\"256\"/><Column id=\"CMCM_SUGE\" type=\"STRING\" size=\"256\"/><Column id=\"CMCM_LOCA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "42", "25", null, this);
            obj.set_taborder("234");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("통합 큐시트");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "43.98%", "0", null, "29", "2.11%", null, this);
            obj.set_taborder("7");
            obj.set_text("결산관리 > 통합 큐시트");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, "1143", "15", null, "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0.67%", "29", null, "6", "84.5%", null, this);
            obj.set_taborder("52");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0.59%", "56", null, "4", "88.63%", null, this);
            obj.set_taborder("53");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "40", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("219");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "120", "92", "38", "10", null, null, this);
            obj.set_taborder("239");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "37", "21", null, null, this);
            obj.set_taborder("241");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "73", "71", "112", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63", "61", "10", "40", null, null, this);
            obj.set_taborder("243");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("246");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("프로그램리스트");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_QSHTXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("7");
            obj.set_binddataset("dsMD_QSHTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_selecttype("row");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"48\"/><Column size=\"62\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"54\"/><Column size=\"40\"/><Column size=\"212\"/><Column size=\"40\"/><Column size=\"35\"/><Column size=\"31\"/><Column size=\"42\"/><Column size=\"80\"/><Column size=\"53\"/><Column size=\"80\"/><Column size=\"34\"/><Column size=\"66\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"년월\"/><Cell col=\"2\" rowspan=\"2\" text=\"브랜드\"/><Cell col=\"3\" rowspan=\"2\" text=\"채널\"/><Cell col=\"4\" rowspan=\"2\" text=\"광고유형\"/><Cell col=\"5\" rowspan=\"2\" text=\"구매\"/><Cell col=\"6\" rowspan=\"2\" text=\"형태\"/><Cell col=\"7\" rowspan=\"2\" text=\"프로그램\"/><Cell col=\"8\" rowspan=\"2\" text=\"요일\"/><Cell col=\"9\" rowspan=\"2\" text=\"시간\"/><Cell col=\"10\" rowspan=\"2\" text=\"시급\"/><Cell col=\"11\" rowspan=\"2\" text=\"초수\"/><Cell col=\"12\" rowspan=\"2\" text=\"단가\"/><Cell col=\"13\" rowspan=\"2\" text=\"적용률\"/><Cell col=\"14\" rowspan=\"2\" text=\"실단가\"/><Cell col=\"15\" rowspan=\"2\" text=\"횟수\"/><Cell col=\"16\" rowspan=\"2\" text=\"횟수(검수)\"/><Cell col=\"17\" rowspan=\"2\" colspan=\"10\" text=\"날짜\"/><Cell col=\"27\" text=\"광고비\"/><Cell col=\"28\" text=\"광고비\"/><Cell col=\"29\" text=\"보너스\"/><Cell col=\"30\" text=\"보너스\"/><Cell col=\"31\" text=\"시청률\"/><Cell col=\"32\" text=\"시청률\"/><Cell col=\"33\" text=\"시청률\"/><Cell col=\"34\" text=\"시청률\"/><Cell col=\"35\" text=\"CM 지정\"/><Cell col=\"36\" text=\"CM 지정\"/><Cell col=\"37\" text=\"CM 지정\"/><Cell col=\"38\" text=\"CM 지정\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"27\" text=\"(Upfront)\"/><Cell row=\"1\" col=\"28\" text=\"(임시물)\"/><Cell row=\"1\" col=\"29\" text=\"(Upfront)\"/><Cell row=\"1\" col=\"30\" text=\"(임시물)\"/><Cell row=\"1\" col=\"31\" text=\"(CM 전)\"/><Cell row=\"1\" col=\"32\" text=\"(CM 후)\"/><Cell row=\"1\" col=\"33\" text=\"(평균)\"/><Cell row=\"1\" col=\"34\" text=\"(P2049)\"/><Cell row=\"1\" col=\"35\" text=\"요율\"/><Cell row=\"1\" col=\"36\" text=\"금액\"/><Cell row=\"1\" col=\"37\" text=\"제안위치\"/><Cell row=\"1\" col=\"38\" text=\"위치\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\"/><Cell col=\"2\" text=\"bind:BRND_NAME\"/><Cell col=\"3\" text=\"bind:RMED_NAME\"/><Cell col=\"4\" text=\"bind:CONT_FORM\"/><Cell col=\"5\" text=\"bind:BUYY_FORM\"/><Cell col=\"6\" text=\"bind:BROD_FORM\"/><Cell col=\"7\" text=\"bind:PRGM_NAME\"/><Cell col=\"8\" text=\"bind:DAYY_WEEK\"/><Cell col=\"9\" text=\"bind:BROD_TIME\"/><Cell col=\"10\" text=\"bind:HOUR_TYPE\"/><Cell col=\"11\" text=\"bind:SECD_FILD\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRIC_FILD\"/><Cell col=\"13\" text=\"bind:APLY_PERC\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REAL_PRIC\"/><Cell col=\"15\" text=\"bind:CONT_FILD\"/><Cell col=\"16\" text=\"bind:RCON_FILD\"/><Cell col=\"17\" text=\"bind:DAY0_MNTH\"/><Cell col=\"18\" text=\"bind:DAY1_MNTH\"/><Cell col=\"19\" text=\"bind:DAY2_MNTH\"/><Cell col=\"20\" text=\"bind:DAY3_MNTH\"/><Cell col=\"21\" text=\"bind:DAY4_MNTH\"/><Cell col=\"22\" text=\"bind:DAY5_MNTH\"/><Cell col=\"23\" text=\"bind:DAY6_MNTH\"/><Cell col=\"24\" text=\"bind:DAY7_MNTH\"/><Cell col=\"25\" text=\"bind:DAY8_MNTH\"/><Cell col=\"26\" text=\"bind:DAY9_MNTH\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPPR_FILD\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TPPR_FILD\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPBO_FILD\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TPBO_FILD\"/><Cell col=\"31\" text=\"bind:PRCM_RATE\"/><Cell col=\"32\" text=\"bind:AFCM_RATE\"/><Cell col=\"33\" text=\"bind:AVCM_RATE\"/><Cell col=\"34\" text=\"bind:AVAV_RATE\"/><Cell col=\"35\" text=\"bind:CMCM_RATE\"/><Cell col=\"36\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CMCM_PRIC\"/><Cell col=\"37\" text=\"bind:CMCM_SUGE\"/><Cell col=\"38\" text=\"bind:CMCM_LOCA\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\" colspan=\"10\" style=\"align:center;\" text=\"합계\"/><Cell col=\"27\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;UPPR_FILD&quot;)\"/><Cell col=\"28\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TPPR_FILD&quot;)\"/><Cell col=\"29\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;UPBO_FILD&quot;)\"/><Cell col=\"30\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TPBO_FILD&quot;)\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;CMCM_PRIC&quot;)\"/><Cell col=\"37\"/><Cell col=\"38\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "139", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "9", "24", "216", "6", null, null, this.tabXM.tab0);
            obj.set_taborder("9");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "604", "550", "80", "10", null, null, this.tabXM.tab0);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("큐시트");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "9", "24", "216", "6", null, null, this.tabXM.tab1);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "262", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("5");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_QSHTXM", "absolute", "10", "30", null, null, "10", "-1", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("6");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_binddataset("dsMD_QSHTXM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"57\"/><Column size=\"66\"/><Column size=\"82\"/><Column size=\"59\"/><Column size=\"40\"/><Column size=\"0\"/><Column size=\"191\"/><Column size=\"39\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"38\"/><Column size=\"0\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"62\"/><Column size=\"58\"/><Column size=\"57\"/><Column size=\"55\"/><Column size=\"54\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"57\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"년월\"/><Cell col=\"2\" rowspan=\"2\" text=\"브랜드\"/><Cell col=\"3\" rowspan=\"2\" text=\"채널\"/><Cell col=\"4\" rowspan=\"2\" text=\"광고유형\"/><Cell col=\"5\" rowspan=\"2\" text=\"구매\"/><Cell col=\"6\" rowspan=\"2\" text=\"형태\"/><Cell col=\"7\" rowspan=\"2\" text=\"프로그램\"/><Cell col=\"8\" rowspan=\"2\" text=\"요일\"/><Cell col=\"9\" rowspan=\"2\" text=\"시간\"/><Cell col=\"10\" rowspan=\"2\" text=\"시급\"/><Cell col=\"11\" rowspan=\"2\" text=\"초수\"/><Cell col=\"12\" rowspan=\"2\" text=\"단가\"/><Cell col=\"13\" rowspan=\"2\" text=\"적용률\"/><Cell col=\"14\" rowspan=\"2\" text=\"실단가\"/><Cell col=\"15\" rowspan=\"2\" text=\"횟수\"/><Cell col=\"16\" rowspan=\"2\" text=\"횟수(검수)\"/><Cell col=\"17\" text=\"광고비\"/><Cell col=\"18\" text=\"광고비\"/><Cell col=\"19\" text=\"보너스\"/><Cell col=\"20\" text=\"보너스\"/><Cell col=\"21\" text=\"시청률\"/><Cell col=\"22\" text=\"시청률\"/><Cell col=\"23\" text=\"시청률\"/><Cell col=\"24\" text=\"시청률\"/><Cell col=\"25\" text=\"CM 지정\"/><Cell col=\"26\" text=\"CM 지정\"/><Cell col=\"27\" text=\"CM 지정\"/><Cell col=\"28\" text=\"CM 지정\"/><Cell col=\"29\" rowspan=\"2\" colspan=\"10\" text=\"날짜\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\" text=\"(Upfront)\"/><Cell row=\"1\" col=\"18\" text=\"(임시물)\"/><Cell row=\"1\" col=\"19\" text=\"(Upfront)\"/><Cell row=\"1\" col=\"20\" text=\"(임시물)\"/><Cell row=\"1\" col=\"21\" text=\"(CM 전)\"/><Cell row=\"1\" col=\"22\" text=\"(CM 후)\"/><Cell row=\"1\" col=\"23\" text=\"(평균)\"/><Cell row=\"1\" col=\"24\" text=\"(P2049)\"/><Cell row=\"1\" col=\"25\" text=\"요율\"/><Cell row=\"1\" col=\"26\" text=\"금액\"/><Cell row=\"1\" col=\"27\" text=\"제안위치\"/><Cell row=\"1\" col=\"28\" text=\"위치\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\"/><Cell col=\"2\" text=\"bind:BRND_NAME\"/><Cell col=\"3\" text=\"bind:RMED_NAME\"/><Cell col=\"4\" text=\"bind:CONT_FORM\"/><Cell col=\"5\" text=\"bind:BUYY_FORM\"/><Cell col=\"6\" text=\"bind:BROD_FORM\"/><Cell col=\"7\" text=\"bind:PRGM_NAME\"/><Cell col=\"8\" text=\"bind:DAYY_WEEK\"/><Cell col=\"9\" text=\"bind:BROD_TIME\"/><Cell col=\"10\" text=\"bind:HOUR_TYPE\"/><Cell col=\"11\" text=\"bind:SECD_FILD\"/><Cell col=\"12\" text=\"bind:PRIC_FILD\"/><Cell col=\"13\" text=\"bind:APLY_PERC\"/><Cell col=\"14\" text=\"bind:REAL_PRIC\"/><Cell col=\"15\" text=\"bind:CONT_FILD\"/><Cell col=\"16\" text=\"bind:RCON_FILD\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:UPPR_FILD\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:TPPR_FILD\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:UPBO_FILD\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:TPBO_FILD\"/><Cell col=\"21\" text=\"bind:PRCM_RATE\"/><Cell col=\"22\" text=\"bind:AFCM_RATE\"/><Cell col=\"23\" text=\"bind:AVCM_RATE\"/><Cell col=\"24\" text=\"bind:AVAV_RATE\"/><Cell col=\"25\" text=\"bind:CMCM_RATE\"/><Cell col=\"26\" style=\"align:right;\" text=\"bind:CMCM_PRIC\"/><Cell col=\"27\" text=\"bind:CMCM_SUGE\"/><Cell col=\"28\" text=\"bind:CMCM_LOCA\"/><Cell col=\"29\" text=\"bind:DAY0_MNTH\"/><Cell col=\"30\" text=\"bind:DAY1_MNTH\"/><Cell col=\"31\" text=\"bind:DAY2_MNTH\"/><Cell col=\"32\" text=\"bind:DAY3_MNTH\"/><Cell col=\"33\" text=\"bind:DAY4_MNTH\"/><Cell col=\"34\" text=\"bind:DAY5_MNTH\"/><Cell col=\"35\" text=\"bind:DAY6_MNTH\"/><Cell col=\"36\" text=\"bind:DAY7_MNTH\"/><Cell col=\"37\" text=\"bind:DAY8_MNTH\"/><Cell col=\"38\" text=\"bind:DAY9_MNTH\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabXM);
            obj.set_text("일자별");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_QSHTXM", "absolute", "9", "30", null, null, "0", "14", this.tabXM.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsMD_QSHTXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"60\"/><Column size=\"42\"/><Column size=\"92\"/><Column size=\"68\"/><Column size=\"218\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"일자\"/><Cell col=\"3\" text=\"브랜드\"/><Cell col=\"4\" text=\"채널\"/><Cell col=\"5\" text=\"프로그램\"/><Cell col=\"6\" text=\"요일\"/><Cell col=\"7\" text=\"시간\"/><Cell col=\"8\" text=\"CM 위치\"/><Cell col=\"9\" text=\"보너스여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\"/><Cell col=\"2\" text=\"bind:DAYY_MNTH\"/><Cell col=\"3\" text=\"bind:BRND_NAME\"/><Cell col=\"4\" text=\"bind:RMED_NAME\"/><Cell col=\"5\" text=\"bind:PRGM_NAME\"/><Cell col=\"6\" text=\"bind:DAYY_WEEK\"/><Cell col=\"7\" text=\"bind:BROD_TIME\"/><Cell col=\"8\" text=\"bind:CMCM_LOCA\"/><Cell col=\"9\" text=\"bind:BUYY_FORM\"/></Band></Format></Formats>");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "139", "21", null, null, this.tabXM.tab2);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "9", "24", "216", "6", null, null, this.tabXM.tab2);
            obj.set_taborder("2");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab2.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "573", "102", "80", "38", null, null, this);
            obj.set_taborder("247");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "141", "80", "30", null, null, this);
            obj.set_taborder("248");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "214", "71", "68", "21", null, null, this);
            obj.set_taborder("249");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "269", "71", "80", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_NAME", "absolute", "351", "71", "26", "21", null, null, this);
            obj.set_taborder("251");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "374", "71", "150", "21", null, null, this);
            obj.set_taborder("252");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "185", "61", "40", "41", null, null, this);
            obj.set_taborder("253");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormUp", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1153, 494, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("프로그램리스트");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("큐시트");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("일자별");

            	}
            );
            this.tabXM.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("통합큐시트");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MRPA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MRPA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MRPA0030 통합큐시트
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.27		최제현		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTFTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "MRPA0030"; //해당 Form에서 사용 할 Package 명

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

        //this.aKeyValue = new Array(4);

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
         	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
         	this.fnc_GridSetting(this);
         	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	this.fn_Search();
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
        		if(this.tabXM.tabindex=='0'){
        		//프로그램리스트
        		this.fnc_DatasetClear('dsMD_QSHTXM'); // 조회 자료 초기화

        		var sMethodName = "SEARCH00";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_QSHTXM=dsMD_QSHTXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex=='1'){
        		//통합 큐시트
        		this.fnc_DatasetClear('dsMD_QSHTXM'); // 조회 자료 초기화

        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_QSHTXM=dsMD_QSHTXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex=='2'){
        		//일자별 프로그램리스트
        		this.fnc_DatasetClear('dsMD_QSHTXM'); // 조회 자료 초기화

        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_QSHTXM=dsMD_QSHTXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if(this.fnc_Message("MRP001")){
        		var sMethodName = "DELETE00";
        		var sInDataSet  = "dsMD_QSHTXM=dsMD_QSHTXM:D";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음.
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsMD_QSHTXM=dsMD_QSHTXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CTMDXM.setFocus();
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
        }

        /*----------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsMD_QSHTXM, dsMD_QSHTXM",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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
        	
        	if (this.calSHRYEAR_MNTH.fn_GetMonth()==''){
        		this.fnc_Message("TMM008","년월");
        		return false;
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
         
         this.fn_DeleteCheck = function (totalNum) {
        	//기능없음.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsMD_QSHTXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	return true;
        }

        

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
         		sReturnString += " BRND_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_NAME.value)); //브랜드명
        	}else if(sKind == "SEARCH01"){
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
         		sReturnString += " BRND_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_NAME.value)); //브랜드명
        	}else if(sKind == "SEARCH02"){
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
         		sReturnString += " BRND_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_NAME.value)); //브랜드명
        	} else if (sKind == "DELETE00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_QSHTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_QSHTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.tabXM.tab2.stInformation, this.dsMD_QSHTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------------------+
         |    통합큐시트 조회조건 변경 	  |
         +------------------------------------*/
        this.rdoRMED_NAME_onitemchanged = function(obj,e)
        {
        	if(this.tabXM.tab1.rdoRMED_NAME.index=='0'){
        		this.dsMD_QSHTXM.filter("1==1");
        	}else if(this.tabXM.tab1.rdoRMED_NAME.index=='1'){
        		this.dsMD_QSHTXM.filter("RMED_NAME=='KBS2'");
        	}else if(this.tabXM.tab1.rdoRMED_NAME.index=='2'){
        		this.dsMD_QSHTXM.filter("RMED_NAME=='MBC'");
        	}else if(this.tabXM.tab1.rdoRMED_NAME.index=='3'){
        		this.dsMD_QSHTXM.filter("RMED_NAME=='SBS'");
        	}
        }

        /*----------------+
         |     팝업 	  |
         +----------------*/

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         //상단 브랜드 팝업
         this.fn_HelpDialogeSHRBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0015";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRBRND_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRBRND_NAME";                          
            arrParam[5] = "edtSHRBRND_CODE,edtSHRBRND_NAME";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*----------------+
         |  양식 다운로드  |
         +----------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        this.fn_ExcelUpload = function(obj,e){

        	if (this.fnc_DatasetChangeCheck("dsMD_QSHTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsMD_QSHTXM");
        	this.fnc_ExcelUpload("dsMD_QSHTXM", "Sheet1", "A6", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsMD_QSHTXM.set_enableevent(false);
        	this.dsMD_QSHTXM.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		if(this.objDsImportTemp.getColumn(i, 5)!=''&&this.objDsImportTemp.getColumn(i, 10)){
        			var iRow = this.dsMD_QSHTXM.addRow();
        			this.dsMD_QSHTXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        			this.dsMD_QSHTXM.setColumn(iRow, "YEAR_MNTH",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )); //년월
        			this.dsMD_QSHTXM.setColumn(iRow, "BRND_NAME", this.objDsImportTemp.getColumn(i, 0)); // 브랜드
        			this.dsMD_QSHTXM.setColumn(iRow, "RMED_NAME", this.objDsImportTemp.getColumn(i, 1)); // 채널
        			this.dsMD_QSHTXM.setColumn(iRow, "CONT_FORM", this.objDsImportTemp.getColumn(i, 2)); // 광고유형
        			this.dsMD_QSHTXM.setColumn(iRow, "BUYY_FORM", this.objDsImportTemp.getColumn(i, 3)); // 구매
        			this.dsMD_QSHTXM.setColumn(iRow, "BROD_FORM", this.objDsImportTemp.getColumn(i, 4)); // 형태
        			this.dsMD_QSHTXM.setColumn(iRow, "PRGM_NAME", this.objDsImportTemp.getColumn(i, 5)); // 프로그램
        			this.dsMD_QSHTXM.setColumn(iRow, "DAYY_WEEK", this.objDsImportTemp.getColumn(i, 6)); // 요일
        			this.dsMD_QSHTXM.setColumn(iRow, "BROD_TIME", this.objDsImportTemp.getColumn(i, 7)); // 시간
        			this.dsMD_QSHTXM.setColumn(iRow, "HOUR_TYPE", this.objDsImportTemp.getColumn(i, 8)); // 시급
        			this.dsMD_QSHTXM.setColumn(iRow, "SECD_FILD", this.objDsImportTemp.getColumn(i, 9)); // 초수
        			this.dsMD_QSHTXM.setColumn(iRow, "PRIC_FILD", this.objDsImportTemp.getColumn(i, 10)); // 단가
        			this.dsMD_QSHTXM.setColumn(iRow, "APLY_PERC", this.objDsImportTemp.getColumn(i, 11)); // 적용률
        			this.dsMD_QSHTXM.setColumn(iRow, "REAL_PRIC", this.objDsImportTemp.getColumn(i, 12)); //실단가
        			this.dsMD_QSHTXM.setColumn(iRow, "CONT_FILD", this.objDsImportTemp.getColumn(i, 13)); //  횟수
        			this.dsMD_QSHTXM.setColumn(iRow, "RCON_FILD", this.objDsImportTemp.getColumn(i, 14)); // 횟수(검수)
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY0_MNTH", this.objDsImportTemp.getColumn(i, 15)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY1_MNTH", this.objDsImportTemp.getColumn(i, 16)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY2_MNTH", this.objDsImportTemp.getColumn(i, 17)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY3_MNTH", this.objDsImportTemp.getColumn(i, 18)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY4_MNTH", this.objDsImportTemp.getColumn(i, 19)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY5_MNTH", this.objDsImportTemp.getColumn(i, 20)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY6_MNTH", this.objDsImportTemp.getColumn(i, 21)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY7_MNTH", this.objDsImportTemp.getColumn(i, 22)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY8_MNTH", this.objDsImportTemp.getColumn(i, 23)); // 날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "DAY9_MNTH", this.objDsImportTemp.getColumn(i, 24)); //  날짜
        			this.dsMD_QSHTXM.setColumn(iRow, "UPPR_FILD", this.objDsImportTemp.getColumn(i, 25)); // 광고비(Upfront)
        			this.dsMD_QSHTXM.setColumn(iRow, "TPPR_FILD", this.objDsImportTemp.getColumn(i, 26)); // 광고비(임시물)
        			this.dsMD_QSHTXM.setColumn(iRow, "UPBO_FILD", this.objDsImportTemp.getColumn(i, 27)); // 보너스(upfront)
        			this.dsMD_QSHTXM.setColumn(iRow, "TPBO_FILD", this.objDsImportTemp.getColumn(i, 28)); // 보너스 임시물
        			this.dsMD_QSHTXM.setColumn(iRow, "PRCM_RATE", this.objDsImportTemp.getColumn(i, 29)); // 전 CM 시청률
        			this.dsMD_QSHTXM.setColumn(iRow, "AFCM_RATE", this.objDsImportTemp.getColumn(i, 30)); // 후 CM 시청률
        			this.dsMD_QSHTXM.setColumn(iRow, "AVCM_RATE", this.objDsImportTemp.getColumn(i, 31)); // 평균시청률
        			this.dsMD_QSHTXM.setColumn(iRow, "AVAV_RATE", this.objDsImportTemp.getColumn(i, 32)); // 시청률(P2049)
        			this.dsMD_QSHTXM.setColumn(iRow, "CMCM_RATE", this.objDsImportTemp.getColumn(i, 33)); // CM지정요율
        			this.dsMD_QSHTXM.setColumn(iRow, "CMCM_PRIC", this.objDsImportTemp.getColumn(i, 34)); // CM지정금액
        			this.dsMD_QSHTXM.setColumn(iRow, "CMCM_SUGE", this.objDsImportTemp.getColumn(i, 35)); // CM지정 제안위치
        			this.dsMD_QSHTXM.setColumn(iRow, "CMCM_LOCA", this.objDsImportTemp.getColumn(i, 36)); // CM지정 위치
        		}
        		
        	}

        
        	
        	this.objDsImportTemp.clear();
        	this.dsMD_QSHTXM.set_updatecontrol(true);
        	this.dsMD_QSHTXM.set_enableevent(true);

        	this.dsMD_QSHTXM.set_rowposition(0);
        	this.dsMD_QSHTXM.setFocus();
        	
        }

        this.tabXM_onchanged = function(obj,e)
        {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	this.fn_Search();
        }

        
        this.edtSHRBRND_NAME_onkeyup = function(obj,e)
        {
        	if(this.edtSHRBRND_NAME.value==''){
        		this.edtSHRBRND_CODE.set_value('');
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_QSHTXM.addEventHandler("oncolumnchanged", this.dsMD_PTMDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.st_FormLocation.addEventHandler("onclick", this.st_FormLocation_onclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.grdMD_QSHTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_QSHTXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_QSHTXM.addEventHandler("onheadclick", this.grdMD_QSHTXM_onheadclick, this);
            this.tabXM.tab1.grdMD_QSHTXM.addEventHandler("onheadclick", this.grdMD_QSHTXM_onheadclick, this);
            this.tabXM.tab1.grdMD_QSHTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_QSHTXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab2.grdMD_QSHTXM.addEventHandler("onheadclick", this.grdMD_QSHTXM_onheadclick, this);
            this.tabXM.tab2.grdMD_QSHTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab2.grdMD_QSHTXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRBRND_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRBRND_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkeyup", this.edtSHRBRND_NAME_onkeyup, this);
            this.edtSHRBRND_NAME.addEventHandler("ontextchanged", this.edtSHRBRND_NAME_ontextchanged, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);

        };

        this.loadIncludeScript("MRPA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
