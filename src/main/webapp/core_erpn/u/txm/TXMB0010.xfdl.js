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
                this.set_name("TXMB0010");
                this.set_titletext("전자세금계산서 업로드");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\">Y</Col></Row><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ETAXUP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ETAX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_APNO\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BOSS\" type=\"STRING\" size=\"30\" prop=\"default\"/><Column id=\"PROV_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"HIMX_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_BOSS\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUMX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_AMTX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETAX_CLAS\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_BILL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_MAIL\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI1\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI2\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_STRD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_QTYX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_SUPP\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_VATX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_REMK\" type=\"STRING\" size=\"200\" prop=\"default\"/><Column id=\"ETAX_NUMB\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" size=\"8\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ETAXUP_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ETAX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_APNO\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BOSS\" type=\"STRING\" size=\"30\" prop=\"default\"/><Column id=\"PROV_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"HIMX_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_BOSS\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUMX_AMNT\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_AMTX\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_CLAS\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_BILL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_MAIL\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI1\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI2\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_STRD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_QTYX\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_PRIC\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_SUPP\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_VATX\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_REMK\" type=\"STRING\" size=\"200\" prop=\"default\"/><Column id=\"ETAX_NUMB\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장조회</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0004</Col></Row><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0004</Col><Col id=\"HEADFLAG\">Y</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "117", "264", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_ETAXUP", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_ETAXUP");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("13");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"65\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"90\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"매출/매입\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"작성일자\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"승인번호\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"발급일자\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"전송일자\"/><Cell col=\"5\" colspan=\"4\" displaytype=\"text\" text=\"공급자\"/><Cell col=\"9\" colspan=\"4\" displaytype=\"text\" text=\"공급받는자\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"text\" text=\"합계금액\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"text\" text=\"세액\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"text\" text=\"전자&#10;세금계산서&#10;분류\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"text\" text=\"전자&#10;세금계산서&#10;종류\"/><Cell col=\"18\" rowspan=\"2\" displaytype=\"text\" text=\"발행유형\"/><Cell col=\"19\" rowspan=\"2\" displaytype=\"text\" text=\"비고\"/><Cell col=\"20\" rowspan=\"2\" displaytype=\"text\" text=\"기타\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"종사업장번호\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"상호\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"대표자명\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"사업자등록번호\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"종사업장번호\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"상호\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"대표자명\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"사업자등록번호\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:VATX_GUBN\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ETAX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ETAX_APNO\"/><Cell col=\"3\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" style=\"align: center;\" text=\"bind:TRNS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PROV_JONG\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:PROV_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PROV_BOSS\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PROV_BSNS\" mask=\"###-##-#####\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: center;\" text=\"bind:HIMX_JONG\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:HIMX_NAME\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: center;\" text=\"bind:HIMX_BOSS\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: center;\" text=\"bind:HIMX_BSNS\" mask=\"###-##-#####\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMX_AMNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ETAX_CLAS\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ETAX_TYPE\"/><Cell col=\"18\" displaytype=\"text\" style=\"align: center;\" text=\"bind:TRNS_TYPE\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NOTE\"/><Cell col=\"20\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_GITA\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SUMX_AMNT')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\" mask=\"#,###\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile", "absolute", null, "113", "86", "21", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("파일업로드");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", null, "113", "60", "21", "475", null, this);
            obj.set_text("사업장");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", null, "113", "76", "21", "229", null, this);
            obj.set_text("매입매출");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVATX_GUBN", "absolute", null, "113", "100", "21", "136", null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "570", "8", "95", "21", null, null, this);
            obj.set_taborder("16");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_DATE2", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static7", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_GUBN", "absolute", "635", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static1", "absolute", "567", "71", "76", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "398", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static29", "absolute", "343", "71", "60", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "4.89%", "274", null, "206", "5.81%", null, this);
            obj.set_taborder("23");
            obj.set_binddataset("dsTA_ETAXUP_TEMP");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"ETAX_DATE\"/><Cell col=\"1\" disptype=\"normal\" text=\"ETAX_APNO\"/><Cell col=\"2\" disptype=\"normal\" text=\"ISSU_DATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"TRNS_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"PROV_BSNS\"/><Cell col=\"5\" disptype=\"normal\" text=\"PROV_JONG\"/><Cell col=\"6\" disptype=\"normal\" text=\"PROV_NAME\"/><Cell col=\"7\" disptype=\"normal\" text=\"PROV_BOSS\"/><Cell col=\"8\" disptype=\"normal\" text=\"PROV_ADDR\"/><Cell col=\"9\" disptype=\"normal\" text=\"HIMX_BSNS\"/><Cell col=\"10\" disptype=\"normal\" text=\"HIMX_JONG\"/><Cell col=\"11\" disptype=\"normal\" text=\"HIMX_NAME\"/><Cell col=\"12\" disptype=\"normal\" text=\"HIMX_BOSS\"/><Cell col=\"13\" disptype=\"normal\" text=\"SUMX_AMNT\"/><Cell col=\"14\" disptype=\"normal\" text=\"SUPP_AMNT\"/><Cell col=\"15\" disptype=\"normal\" text=\"TAXX_AMTX\"/><Cell col=\"16\" disptype=\"normal\" text=\"ETAX_CLAS\"/><Cell col=\"17\" disptype=\"normal\" text=\"ETAX_TYPE\"/><Cell col=\"18\" disptype=\"normal\" text=\"TRNS_TYPE\"/><Cell col=\"19\" disptype=\"normal\" text=\"REMK_NOTE\"/><Cell col=\"20\" disptype=\"normal\" text=\"RECE_BILL\"/><Cell col=\"21\" disptype=\"normal\" text=\"PROV_MAIL\"/><Cell col=\"22\" disptype=\"normal\" text=\"HIMX_MAI1\"/><Cell col=\"23\" disptype=\"normal\" text=\"HIMX_MAI2\"/><Cell col=\"24\" disptype=\"normal\" text=\"ITEM_DATE\"/><Cell col=\"25\" disptype=\"normal\" text=\"ITEM_NAME\"/><Cell col=\"26\" disptype=\"normal\" text=\"ITEM_STRD\"/><Cell col=\"27\" disptype=\"normal\" text=\"ITEM_QTYX\"/><Cell col=\"28\" disptype=\"normal\" text=\"ITEM_PRIC\"/><Cell col=\"29\" disptype=\"normal\" text=\"ITEM_SUPP\"/><Cell col=\"30\" disptype=\"normal\" text=\"ITEM_VATX\"/><Cell col=\"31\" disptype=\"normal\" text=\"ITEM_REMK\"/><Cell col=\"32\" disptype=\"normal\" text=\"ETAX_NUMB\"/><Cell col=\"33\" disptype=\"normal\" text=\"VATX_GUBN\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:ETAX_DATE\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:ETAX_APNO\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:ISSU_DATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:TRNS_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:PROV_BSNS\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:PROV_JONG\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:PROV_NAME\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:PROV_BOSS\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:PROV_ADDR\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:HIMX_BSNS\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:HIMX_JONG\"/><Cell col=\"11\" disptype=\"normal\" text=\"bind:HIMX_NAME\"/><Cell col=\"12\" disptype=\"normal\" text=\"bind:HIMX_BOSS\"/><Cell col=\"13\" disptype=\"normal\" text=\"bind:SUMX_AMNT\"/><Cell col=\"14\" disptype=\"normal\" text=\"bind:SUPP_AMNT\"/><Cell col=\"15\" disptype=\"normal\" text=\"bind:TAXX_AMTX\"/><Cell col=\"16\" disptype=\"normal\" text=\"bind:ETAX_CLAS\"/><Cell col=\"17\" disptype=\"normal\" text=\"bind:ETAX_TYPE\"/><Cell col=\"18\" disptype=\"normal\" text=\"bind:TRNS_TYPE\"/><Cell col=\"19\" disptype=\"normal\" text=\"bind:REMK_NOTE\"/><Cell col=\"20\" disptype=\"normal\" text=\"bind:RECE_BILL\"/><Cell col=\"21\" disptype=\"normal\" text=\"bind:PROV_MAIL\"/><Cell col=\"22\" disptype=\"normal\" text=\"bind:HIMX_MAI1\"/><Cell col=\"23\" disptype=\"normal\" text=\"bind:HIMX_MAI2\"/><Cell col=\"24\" disptype=\"normal\" text=\"bind:ITEM_DATE\"/><Cell col=\"25\" disptype=\"normal\" text=\"bind:ITEM_NAME\"/><Cell col=\"26\" disptype=\"normal\" text=\"bind:ITEM_STRD\"/><Cell col=\"27\" disptype=\"normal\" text=\"bind:ITEM_QTYX\"/><Cell col=\"28\" disptype=\"normal\" text=\"bind:ITEM_PRIC\"/><Cell col=\"29\" disptype=\"normal\" text=\"bind:ITEM_SUPP\"/><Cell col=\"30\" disptype=\"normal\" text=\"bind:ITEM_VATX\"/><Cell col=\"31\" disptype=\"normal\" text=\"bind:ITEM_REMK\"/><Cell col=\"32\" disptype=\"normal\" text=\"bind:ETAX_NUMB\"/><Cell col=\"33\" disptype=\"normal\" text=\"bind:VATX_GUBN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_GUBN", "absolute", null, "113", "145", "21", "334", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("전자세금계산서내역 업로드");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "537", "29", "25", null, this);
            obj.set_taborder("26");
            obj.set_text("홈 > 세무관리 > 부가세대사관리 > 전자세금계산서내역 업로드");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "538", "61", "40", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1051", "99", "12", "23", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1064", "99", "12", "23", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "113", "7", "21", "117", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1085", "103", "56", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown", "absolute", null, "85", "133", "23", "160", null, this);
            obj.set_taborder("6");
            obj.set_text("전자세금계산서양식");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 349, 25, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전자세금계산서 업로드");
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
        this.addIncludeScript("TXMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMB0010 전자세금계선서 업로드
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2016.08.03		안윤준		수정
         *   2016.08.09		오혜성		사업장 이름, 콤보 수정
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
        this.sBUTTONLIST 	= "TTFTTTTF";
        this.sPACKAGENAME 	= "TXMB0010";

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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.fnc_GetServerDateTime("DATE"), -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sTrns_Dat1 	= this.fnc_SubStr(sStds_Date, 0, 4);
        	var sTrns_Dat2 	= this.fnc_SubStr(sStds_Date, 0, 4);

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0101";
        		sTrns_Dat2 	= sTrns_Dat2 + "0331";
        		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0401";
        		sTrns_Dat2 	= sTrns_Dat2 + "0630";
        		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0701";
        		sTrns_Dat2 	= sTrns_Dat2 + "0930";
        		
        	} else if (sStds_Mnth >= "10" || sStds_Mnth <= "12") {
        		sTrns_Dat1 	= sTrns_Dat1 + "1001";
        		sTrns_Dat2 	= sTrns_Dat2 + "1231";
        		
        	}
        	
        	this.calSHRBASE_DATE1.set_value(sTrns_Dat1);
        	this.calSHRBASE_DATE2.set_value(sTrns_Dat2);
        	
        	this.calSHRBASE_DATE1.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTA_ETAXUP");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_ETAXUP=dsTA_ETAXUP";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ETAXUP.setFocus();

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

        	if (this.fn_DeleteCheck()) this.dsTA_ETAXUP.deleteMultiRows(this.grdTA_ETAXUP.getSelectedDatasetRows());
        	this.grdTA_ETAXUP.setFocus();

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_ETAXUP");
        	this.grdTA_ETAXUP.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_ETAXUP=dsTA_ETAXUP:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ETAXUP.setFocus();

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
        	//기능없음
        }

        /*-----------------------------------+
         |  10.화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_ETAXUP", this);
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

        	if (this.fnc_DatasetChangeCheck("dsTA_ETAXUP")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_ETAXUP")) {

        		this.fnc_Message("TMM003");
        		return false;

        	}

        	for (var i = 0; i < this.dsTA_ETAXUP.getRowCount(); i++) {
        	
        		if (this.dsTA_ETAXUP.getRowType(i) == Dataset.ROWTYPE_NORMAL)	continue;		

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ETAXUP.getColumn(i, "ETAX_APNO"))) < 1) {
        			 return this.fnc_CheckPostAction("TMM072", "승인번호", this.dsTA_ETAXUP, row, this.grdTA_ETAXUP, "ETAX_APNO");
        		}

        	}
        	
        	return true;

        }

        
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_ETAXUP);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "승인번호 (" + this.dsTA_ETAXUP.getColumn(this.dsTA_ETAXUP.rowposition, "ETAX_APNO") + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업장
        		sReturnString += " VATX_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value)); //매입매출
        		sReturnString += " BASE_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DATE1.value)); //조회기간FROM
        		sReturnString += " BASE_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DATE2.value)); //조회기간TO

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
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

        		this.fnc_Information(this.stInformation, this.dsTA_ETAXUP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_ETAXUP.getCaseCount("dataset.getRowLevel(currow)==0"));	
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetBranch") {

        		this.cmbSHRACCT_GUBN.set_index(0);
        		this.cmbACCT_GUBN.set_index(0);
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRVATX_GUBN,dsSHRVATX_GUBN,0";
        			arrParam[1] = "COMBO,cmbVATX_GUBN,dsVATX_GUBN,0";
        			arrParam[2] = "GRID,grdTA_ETAXUP,dsVATX_GUBN,VATX_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------------+
         |  양식파일 다운로드 클릭 時  |
         +------------------------------------------*/
        this.btnDown_OnClick = function (obj,e) {
        	
        // 	var folderName = "upload/sample/";
        // 	var fileName = "";
        //
        // 	if (this.cmbVATX_GUBN.value == "FA200010") {
        // 		fileName = "UpSample_FAMG0410_01.xlsx";
        // 	} else {
        // 		fileName = "UpSample_FAMG0410_02.xlsx";
        // 	}
        //
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        	
        	var sPath    = "sample/"; 	//파일 경로
        	var sLogFile = ""; 			//파일 논리명
            var sPhyFile = ""; 			//파일 물리명

        	if (this.cmbVATX_GUBN.value == "FA200010") {
        		sLogFile = "UpSample_FAMG0410_01.xlsx";
        		sPhyFile = "UpSample_FAMG0410_01.xlsx";
        	} else {
        		sLogFile = "UpSample_FAMG0410_02.xlsx";
        		sPhyFile = "UpSample_FAMG0410_02.xlsx";
        	}

        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);
        	
        }

        /*------------------------------------------+
         |  양식파일 업로드 클릭 時  |
         +------------------------------------------*/
        this.btnFile_OnClick = function (obj,e) {
        	
        	this.fnc_DatasetClear("dsTA_ETAXUP,dsTA_ETAXUP_TEMP");
        	this.fnc_ExcelUpload("dsTA_ETAXUP_TEMP", "세금계산서", "A7", "fn_ExcelSuccess");
        	
        }

        
        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_ETAXUP_TEMP.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	
          	//this.dsTA_ETAXUP.copyData(this.dsTA_ETAXUP_TEMP); // TEMP DataSet에서 복사.
          	//this.fnc_DatasetClear("dsTA_ETAXUP_TEMP");
         	
        	// 복사해온 Row Status는 Insert Type.
        	this.dsTA_ETAXUP.set_updatecontrol(false);
        	this.grdTA_ETAXUP.set_enableredraw(false);
        	for (var i = 0; i < this.dsTA_ETAXUP_TEMP.rowcount; i++) {
        		
         		var iRow = this.dsTA_ETAXUP.addRow();
        		this.dsTA_ETAXUP.setRowType(i, Dataset.ROWTYPE_INSERT);

        		this.dsTA_ETAXUP.setColumn(iRow, "VATX_GUBN", this.cmbVATX_GUBN.value);
        		this.dsTA_ETAXUP.setColumn(iRow, "ACCT_GUBN", this.cmbACCT_GUBN.value);

        		this.dsTA_ETAXUP.setColumn(iRow, "ETAX_DATE", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ETAX_DATE"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "ETAX_APNO", this.dsTA_ETAXUP_TEMP.getColumn(i, "ETAX_APNO"));
        		this.dsTA_ETAXUP.setColumn(iRow, "ISSU_DATE", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ISSU_DATE"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "TRNS_DATE", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "TRNS_DATE"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_BSNS", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_BSNS"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_JONG", this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_JONG"));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_NAME", this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_NAME"));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_BOSS", this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_BOSS"));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_ADDR", this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_ADDR"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_BSNS", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_BSNS"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_JONG", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_JONG"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_NAME", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_NAME"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_BOSS", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_BOSS"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_ADDR", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_ADDR"));
        		this.dsTA_ETAXUP.setColumn(iRow, "SUMX_AMNT", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "SUMX_AMNT"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "SUPP_AMNT", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "SUPP_AMNT"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "TAXX_AMTX", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "TAXX_AMTX"), ",", ""), 0));
        		
        		this.dsTA_ETAXUP.setColumn(iRow, "ETAX_CLAS", this.dsTA_ETAXUP_TEMP.getColumn(i, "ETAX_CLAS"));
        		this.dsTA_ETAXUP.setColumn(iRow, "ETAX_TYPE", this.dsTA_ETAXUP_TEMP.getColumn(i, "ETAX_TYPE"));
        		this.dsTA_ETAXUP.setColumn(iRow, "TRNS_TYPE", this.dsTA_ETAXUP_TEMP.getColumn(i, "TRNS_TYPE"));
        		this.dsTA_ETAXUP.setColumn(iRow, "REMK_NOTE", this.dsTA_ETAXUP_TEMP.getColumn(i, "REMK_NOTE"));
        		this.dsTA_ETAXUP.setColumn(iRow, "RECE_BILL", this.dsTA_ETAXUP_TEMP.getColumn(i, "RECE_BILL"));
        		this.dsTA_ETAXUP.setColumn(iRow, "PROV_MAIL", this.dsTA_ETAXUP_TEMP.getColumn(i, "PROV_MAIL"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_MAI1", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_MAI1"));
        		this.dsTA_ETAXUP.setColumn(iRow, "HIMX_MAI2", this.dsTA_ETAXUP_TEMP.getColumn(i, "HIMX_MAI2"));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_DATE", Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_DATE"), "-", ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_NAME", this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_NAME"));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_STRD", this.dsTA_ETAXUP_TEMP.getColumn(i, ""));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_QTYX", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_QTYX"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_PRIC", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_PRIC"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_SUPP", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_SUPP"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_VATX", nexacro.toNumber(Eco.string.replaceIgnoreCase(this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_VATX"), ",", ""), 0));
        		this.dsTA_ETAXUP.setColumn(iRow, "ITEM_REMK", this.dsTA_ETAXUP_TEMP.getColumn(i, "ITEM_REMK"));

        	}
        	this.dsTA_ETAXUP.set_updatecontrol(true);
        	this.grdTA_ETAXUP.set_enableredraw(true);

        	this.dsTA_ETAXUP.set_rowposition(0);
        	this.grdTA_ETAXUP.setFocus();
        	
        	this.stInformation.set_text("[" + (this.dsTA_ETAXUP.rowcount + "]건의 데이터를 로드 했습니다."));
        	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnFile.addEventHandler("onclick", this.btnFile_OnClick, this);
            this.cmbVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnDown.addEventHandler("onclick", this.btnDown_OnClick, this);

        };

        this.loadIncludeScript("TXMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
