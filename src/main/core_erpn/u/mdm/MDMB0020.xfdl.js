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
                this.set_name("MDMB0010");
                this.set_titletext("케이블&종편_거래명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_CTTRXH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUMX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TREC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CTMDXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_MOND\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TUES\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_WEDN\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_THUR\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FRID\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SATU\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SUND\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TTST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TTED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_CHCK\" type=\"STRING\" size=\"256\"/><Column id=\"PRMN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CTTRXD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUMX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TSEQ_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TRANXD_RPT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MATT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TRANXH_RPT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MBIZ_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUMX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("232");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("거래명세서");
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

            obj = new Static("st_FormLocation", "absolute", "522", "0", null, "29", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("매체관리 > 케이블&종편");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "37", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "215", "71", "51", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "271", "71", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "353", "71", "23", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "376", "71", "140", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "263", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "572", "103", null, "25", "534", null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_CTTRXH", "absolute", "8", "128", null, "254", "25", null, this);
            obj.set_taborder("24");
            obj.set_binddataset("dsMD_CTTRXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"300\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"5\" style=\"background:transparent;\" text=\"매체구분\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"7\" style=\"background:transparent;\" text=\"대행금액\"/><Cell col=\"8\" style=\"background:transparent;\" text=\"부가세\"/><Cell col=\"9\" style=\"background:transparent;\" text=\"합계\"/><Cell col=\"10\" text=\"매체구분\"/><Cell col=\"11\" text=\"내역\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:TRTR_NUMB\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:COMM_CDNM\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:VATX_FILD\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUMX_FILD\" mask=\"#,###\"/><Cell col=\"10\" text=\"bind:MEDX_FLAG\"/><Cell col=\"11\" text=\"bind:MEMO_FILD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" style=\"align:center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;VATX_FILD&quot;)\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMX_FILD&quot;)\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, "1143", "15", null, "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "560", "71", "50", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "615", "71", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_CODE", "absolute", "697", "71", "23", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "720", "71", "140", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("CalSHRYEAR_MNTH", "absolute", "70", "71", "100", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "673", "56", "128", "4", null, null, this);
            obj.set_taborder("219");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "396", "286", "21", null, null, this);
            obj.set_taborder("221");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "382", "80", "35", null, null, this);
            obj.set_taborder("223");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnEachCreate", "absolute", null, "392", "74", "21", "126", null, this);
            obj.set_taborder("224");
            obj.set_text("개별생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustomerCreate", "absolute", null, "392", "98", "21", "25", null, this);
            obj.set_taborder("225");
            obj.set_text("광고주별생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_CTTRXD", "absolute", "8", "417", null, "285", "25", null, this);
            obj.set_taborder("227");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsMD_CTTRXD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"36\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"8\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"9\" style=\"background:transparent;\" text=\"방송요일\"/><Cell col=\"10\" style=\"background:transparent;\" text=\"회수\"/><Cell col=\"11\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"단가\"/><Cell col=\"12\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"13\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"부가세\"/><Cell col=\"14\" style=\"background:transparent;\" text=\"총액\"/><Cell col=\"15\" style=\"background:transparent;\" text=\"비고\"/><Cell col=\"16\" style=\"background:transparent;\" text=\"등록일자\"/><Cell col=\"17\" style=\"background:transparent;\" text=\"등록자\"/><Cell col=\"18\" style=\"background:transparent;\" text=\"수정일\"/><Cell col=\"19\" style=\"background:transparent;\" text=\"수정자\"/><Cell col=\"20\" text=\"세금계산서번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:TSEQ_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" edittype=\"none\" style=\"align: ;\" text=\"bind:MATT_NAME\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ADVR_DATE\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:CONT_FILD\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PRCE_FILD\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:VATX_FILD\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMX_FILD\" mask=\"#,###\"/><Cell col=\"15\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"17\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"18\" displaytype=\"normal\" edittype=\"none\" text=\"bind:UPDT_DATE\"/><Cell col=\"19\" edittype=\"none\" text=\"bind:UPDT_USID\"/><Cell col=\"20\" text=\"bind:TAXY_NUMB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" style=\"align:center;\" text=\"합계\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;VATX_FILD&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMX_FILD&quot;)\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_CTMDXM", "absolute", "8", "417", null, null, "25", "15", this);
            obj.set_binddataset("dsMD_CTMDXM");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\" expandsize=\"13\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"8\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"9\" style=\"background:transparent;\" text=\"방송시작시간\"/><Cell col=\"10\" style=\"background:transparent;\" text=\"방송종료시간\"/><Cell col=\"11\" style=\"background:transparent;\" text=\"방송시급\"/><Cell col=\"12\" style=\"background:transparent;\" text=\"방송구분\"/><Cell col=\"13\" style=\"background:transparent;\" text=\"방송초수\"/><Cell col=\"14\" style=\"background:transparent;\" text=\"월\"/><Cell col=\"15\" style=\"background:transparent;\" text=\"화\"/><Cell col=\"16\" style=\"background:transparent;\" text=\"수\"/><Cell col=\"17\" style=\"background:transparent;\" text=\"목\"/><Cell col=\"18\" style=\"background:transparent;\" text=\"금\"/><Cell col=\"19\" style=\"background:transparent;\" text=\"토\"/><Cell col=\"20\" style=\"background:transparent;\" text=\"일\"/><Cell col=\"21\" style=\"background:transparent;\" text=\"회수\"/><Cell col=\"22\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"단가\"/><Cell col=\"23\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"24\" style=\"background:transparent;\" text=\"지역구분\"/><Cell col=\"25\" style=\"background:transparent;\" text=\"청약구분\"/><Cell col=\"26\" style=\"background:transparent;\" text=\"광고형태\"/><Cell col=\"27\" style=\"background:transparent;\" text=\"광고유형\"/><Cell col=\"28\" style=\"background:transparent;\" text=\"계약형태\"/><Cell col=\"29\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고시작일\"/><Cell col=\"30\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고종료일\"/><Cell col=\"31\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송시작일\"/><Cell col=\"32\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송종료일\"/><Cell col=\"33\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"계획치구분\"/><Cell col=\"34\" style=\"background:transparent;\" text=\"비고\"/><Cell col=\"35\" style=\"background:transparent;\" text=\"적용일자\"/><Cell col=\"36\" style=\"background:transparent;\" text=\"부서명\"/><Cell col=\"37\" style=\"background:transparent;\" text=\"사원명\"/><Cell col=\"38\" style=\"background:transparent;\" text=\"위수탁부가세\"/><Cell col=\"39\" style=\"background:transparent;\" text=\"수수료부가세\"/><Cell col=\"40\" style=\"background:transparent;\" text=\"위수탁번호\"/><Cell col=\"41\" style=\"background:transparent;\" text=\"수수료번호\"/><Cell col=\"42\" style=\"background:transparent;\" text=\"자동계산\"/><Cell col=\"43\" style=\"background:transparent;\" text=\"투입경로\"/><Cell col=\"44\" style=\"background:transparent;\" text=\"수수료\"/><Cell col=\"45\" style=\"background:transparent;\" text=\"수수료율\"/><Cell col=\"46\" style=\"background:transparent;\" text=\"등록일자\"/><Cell col=\"47\" style=\"background:transparent;\" text=\"등록자\"/><Cell col=\"48\" style=\"background:transparent;\" text=\"수정일\"/><Cell col=\"49\" style=\"background:transparent;\" text=\"수정자\"/><Cell col=\"50\" style=\"background:transparent;\" text=\"서비스체크\"/><Cell col=\"51\" style=\"background:transparent;\" text=\"위수탁임시전표번호\"/><Cell col=\"52\" style=\"background:transparent;\" text=\"수수료임시전표번호\"/><Cell col=\"53\" style=\"background:transparent;\" text=\"전월이월순번\"/><Cell col=\"54\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" edittype=\"none\" style=\"align: ;\" text=\"bind:PRGM_NAME\" editlimit=\"0\"/><Cell col=\"9\" edittype=\"none\" style=\"align: ;\" text=\"bind:STAR_TIME\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:ENDD_TIME\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HOUR_TYPE\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"none\" text=\"bind:BROD_FLAG\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:SECD_FILD\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_MOND\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_TUES\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_WEDN\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_THUR\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_FRID\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SATU\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SUND\"/><Cell col=\"21\" edittype=\"none\" text=\"bind:CONT_FILD\"/><Cell col=\"22\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PRCE_FILD\" mask=\"#,###\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"24\" displaytype=\"combo\" edittype=\"none\" text=\"bind:AREA_FLAG\"/><Cell col=\"25\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SUBS_FLAG\"/><Cell col=\"26\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ADDX_FORM\"/><Cell col=\"27\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ADDX_TYPE\"/><Cell col=\"28\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CONT_FORM\"/><Cell col=\"29\" displaytype=\"date\" edittype=\"none\" text=\"bind:TTST_DATE\"/><Cell col=\"30\" displaytype=\"date\" edittype=\"none\" text=\"bind:TTED_DATE\"/><Cell col=\"31\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNST_DATE\"/><Cell col=\"32\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNED_DATE\"/><Cell col=\"33\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:PLAN_FLAG\"/><Cell col=\"34\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"35\" displaytype=\"date\" edittype=\"none\" text=\"bind:APLY_DATE\"/><Cell col=\"36\" edittype=\"none\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"37\" edittype=\"none\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"38\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"39\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"40\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"41\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"42\" edittype=\"none\" text=\"bind:ATCT_FLAG\"/><Cell col=\"43\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INPT_PATH\" combodataset=\"dsINPT_PATHCombo\" combocodecol=\"INPT_PATH_CODE\" combodatacol=\"INPT_PATH_NAME\"/><Cell col=\"44\" displaytype=\"number\" edittype=\"none\" text=\"bind:COMI_FILD\" mask=\"#,###\"/><Cell col=\"45\" displaytype=\"number\" edittype=\"none\" text=\"bind:COMI_RATE\" mask=\"#,###\"/><Cell col=\"46\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"47\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"48\" displaytype=\"normal\" edittype=\"none\" text=\"bind:UPDT_DATE\"/><Cell col=\"49\" edittype=\"none\" text=\"bind:UPDT_USID\"/><Cell col=\"50\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:SERV_CHCK\"/><Cell col=\"51\" edittype=\"none\" text=\"bind:TRCH_NUMB\"/><Cell col=\"52\" edittype=\"none\" text=\"bind:CMCH_NUMB\"/><Cell col=\"53\" edittype=\"none\" text=\"bind:PRMN_SEQX\"/><Cell col=\"54\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:AORX_FLAG\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\" style=\"align:center;\" text=\"합계\"/><Cell col=\"22\"/><Cell col=\"23\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "376", "93", "140", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("233");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");

            obj = new Static("Static03", "absolute", "788", "392", "64", "21", null, null, this);
            obj.set_taborder("234");
            obj.set_text("청구일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAN_DATE", "absolute", "847", "392", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("235");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("케이블&종편_거래명세서");
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
        this.addIncludeScript("MDMB0020.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("MDMB0020.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("MDMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDMB0020 거래명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		최제현		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "MDMB0020"; //해당 Form에서 사용 할 Package 명

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
        	this.CalSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	//모든 광고주 명 가져오기
        	this.calTRAN_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	this.fn_GetCUST_NAME();
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
        	this.calTRAN_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	//개별청약 그리드를 보이도록
        	this.grdMD_CTMDXM.set_visible('true');
        	if (!this.fn_SearchItemCheck()) return;
        	
        	//하단 개별청약 조회
        	this.fnc_DatasetClear('dsMD_CTMDXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_CTMDXM=dsMD_CTMDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	//상단 거래명세서(헤더)조회
        	this.fnc_DatasetClear('dsMD_CTTRXH'); // 조회 자료 초기화

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_CTTRXH=dsMD_CTTRXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdMD_CTTRXH.setFocus();
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
        	
        	var totalNum1 = 0;
        	
        	//상단 거래명세서(헤더)삭제
        	for(var i=0 ; i<this.dsMD_CTTRXH.rowcount ; i++){
        		if(this.dsMD_CTTRXH.getColumn(i,"CHEK_FILD") == '1'){totalNum1 ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum1)) {
        		var sMethodName = "SAVE03";
        		var sInDataSet = "dsMD_CTTRXH=dsMD_CTTRXH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	//수정 한 부분 취소
        	this.fnc_DataSetCancel("dsMD_CTMDXM");
        	this.fnc_DataSetCancel("dsMD_CTTRXH");
        	this.fnc_DataSetCancel("dsMD_CTTRXD");
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        //SAVE00,01은 사용자 정의 Event에서 거래명세서 생성

        this.fn_Save = function (obj) {
        	
        	//거래명세서 데이터 셋이 바뀌었는지 확인
        	if(this.fn_SaveItemCheck()){
        		//거래명세서(헤더,디테일) 부가세변경
        		var sMethodName = "UPDATE10";
        		var sInDataSet = "dsMD_CTTRXD=dsMD_CTTRXD:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
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
        	if (this.dsMD_CTTRXH.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsMD_CTTRXH.rowposition < 0) return;
            
             this.fnc_DatasetClear("dsMD_TRANXH_RPT");
             this.fnc_DatasetClear("dsMD_TRANXD_RPT");

        	var reportfile 	= "/mdm/MDMB0020R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/mdm/MDMB0020_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsMD_TRANXH_RPT=dsMD_TRANXH_RPT dsMD_TRANXD_RPT=dsMD_TRANXD_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        }

        /*----------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsMD_CTMDXM, dsMD_CTMDXM",this);
        	
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
        	//하단 개별청약 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_CTMDXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	//상단 거래명세서(헤더) 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_CTTRXH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	//하단 거래명세서(상세) 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_CTTRXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.CalSHRYEAR_MNTH.fn_GetMonth()==''){
        		this.fnc_Message("TMM008","년월");
        		return false;
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/

        
        //거래명세서 삭제여부체크
        this.fn_DeleteCheck = function (totalNum) {
        	//체크가 되어있지 않으면 리턴
        	if(totalNum < 1)
        		return false;
        		
        	var sQuestionText  = "거래번호 : ("+this.grdMD_CTTRXH.getCellText(this.grdMD_CTTRXH.currentrow, this.grdMD_CTTRXH.getBindCellIndex( "body", "TRTR_NUMB" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsMD_CTTRXD")) {
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
        	if (sKind == "SEARCH00" || sKind == "SEARCH01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.CalSHRYEAR_MNTH.fn_GetMonth())); //년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //광고주
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //광고주
        		sReturnString += " BRND_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_CODE.value)); //브랜드
        		
        		// 조회 Argument 생성
        	}if (sKind == "SEARCH02" ) {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		//그리드에서 년월과 일련번호, 거래명세서 번호를 가져옴.
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(
         		this.grdMD_CTTRXH.getCellText(this.grdMD_CTTRXH.currentrow, this.grdMD_CTTRXH.getBindCellIndex( "body", "YEAR_MNTH")))); //년월
        		sReturnString += " SEQX_FILD=" + this.fnc_Quote(this.fnc_Trim(
        		this.grdMD_CTTRXH.getCellText(this.grdMD_CTTRXH.currentrow, this.grdMD_CTTRXH.getBindCellIndex( "body", "SEQX_FILD")))); //일련번호
        		sReturnString += " TRTR_NUMB=" + this.fnc_Quote(this.fnc_Trim(
        		this.grdMD_CTTRXH.getCellText(this.grdMD_CTTRXH.currentrow, this.grdMD_CTTRXH.getBindCellIndex( "body", "TRTR_NUMB")))); //거래명세서(헤더)번호
        	} else if (sKind == "SEARCH03") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02" || sKind == "SAVE03" || sKind == "UPDATE10") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " TRAN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calTRAN_DATE.value)); //청구일
        	} else if (sKind == "PRINT00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " MEDX_FLAG=" + 
        		this.fnc_Quote(this.dsMD_CTTRXH.getColumn(this.dsMD_CTTRXH.rowposition, "MEDX_FLAG")); //매체구분
        		sReturnString += " YEAR_MNTH=" + 
        		this.fnc_Quote(this.dsMD_CTTRXH.getColumn(this.dsMD_CTTRXH.rowposition, "YEAR_MNTH")); //년월
        		sReturnString += " TRTR_NUMB=" + 
        		this.fnc_Quote(this.dsMD_CTTRXH.getColumn(this.dsMD_CTTRXH.rowposition, "TRTR_NUMB")); //헤더의 거래명세서번호
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
        		this.fnc_Information(this.stInformation, this.dsMD_CTMDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.stInformation.set_text(this.stInformation.text+" <b v='true'>(개별청약)</b>");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsMD_CTTRXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation, this.dsMD_CTTRXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.stInformation.set_text(this.stInformation.text+" <b v='true'>(거래명세)</b>");
        	} else if (sMethodName == "SEARCH03") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Message("MDM001");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE02" || sMethodName == "SAVE03" || sMethodName == "UPDATE10") {
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
         

        

        
        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_CTMDXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_CTMDXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CTMDXM.getRowCount(); i++) {
        			this.dsMD_CTMDXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_CTMDXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        var isAllChecked2 = 0;
        this.grdMD_CTTRXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_CTTRXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked2 = (isAllChecked2 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CTTRXH.getRowCount(); i++) {
        			this.dsMD_CTTRXH.setColumn(i, v_Colid, isAllChecked2);
        		}
        		this.grdMD_CTTRXH.setCellProperty("Head", 0, "expr", isAllChecked2);
        	}
        }

        
        var isAllChecked3 = 0;
        this.grdMD_CTTRXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_CTTRXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked3 = (isAllChecked3 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CTTRXD.getRowCount(); i++) {
        			this.dsMD_CTTRXD.setColumn(i, v_Colid, isAllChecked3);
        		}
        		this.grdMD_CTTRXD.setCellProperty("Head", 0, "expr", isAllChecked3);
        	}
        }

        
        /*----------------+
         |     팝업 	  |
         +----------------*/

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         //상단 광고주 팝업
         this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0005";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRCUST_NAME";                          
            arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        //상단 브랜드팝업
        this.fn_HelpDialogeSHRBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0016";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtSHRBRND_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtSHRBRND_NAME";                          
        	arrParam[5] = "edtSHRBRND_CODE,edtSHRBRND_NAME,edtSHRCUST_CODE,edtSHRCUST_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        	
        }

        
        /*----------------------------+
         |   개별 거래명세서 생성   |
         +----------------------------*/
        this.fn_OnClick_EachCreate = function(obj,e)
        {	
        	if(this.fnc_Message("MDM006")){
        		var totalNum = 0;	//체크된 개수
        		
        		for(var i=0 ; i<this.dsMD_CTMDXM.rowcount ; i++){
        			if(this.dsMD_CTMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        		}
        		
        		//체크한 데이터가 있고, 청구일을 입력했으면
        		if (this.fn_CreateCheck(totalNum) && this.fn_TranDateCheck()) {
        			//거래명세서 생성
        			var sMethodName = "SAVE00";
        			var sInDataSet = "dsMD_CTMDXM=dsMD_CTMDXM:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        /*---------------------------------+
         |  거래명세서 생성 여부 체크!  |
         +---------------------------------*/
        this.fn_CreateCheck = function (totalNum) {
        	if (totalNum < 1) {
        		this.fnc_Message("MDM002");
        		return false;
        	}
        	return true;
        }

        /*--------------------+
         |  청구일 입력 체크! |
         +-------------------*/
        this.fn_TranDateCheck = function () {
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_CTMDXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsMD_CTMDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "TRAN_DATE"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "청구일", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"YEAR_MNTH"), '');
        		}
        	}

        	return true;
        }

        /*--------------------------------+
         |   광고주별 거래명세서 생성  |
         +--------------------------------*/
        this.fn_OnClick_CustomerCreate = function(obj,e)
        {
        	if(this.fnc_Message("MDM006")){
        		var totalNum = 0;	//체크된 개수
        		
        		for(var i=0 ; i<this.dsMD_CTMDXM.rowcount ; i++){
        			if(this.dsMD_CTMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        		}
        		
        		//체크한 데이터가 있고, 청구일을 입력했으면
        		if (this.fn_CreateCheck(totalNum) && this.fn_TranDateCheck()) {
        			//거래명세서 생성
        			var sMethodName = "SAVE01";
        			var sInDataSet = "dsMD_CTMDXM=dsMD_CTMDXM:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        /*--------------------------------+
         |   거래명세서 상세내역          |
         +--------------------------------*/
         //상단 거래명세서 헤더 컬럼 클릭 시
        this.dsMD_CTTRXH_onrowposchanged = function(obj,e)
        {	
        	//체크박스는 제외. 삭제 가능하도록
        	if(this.grdMD_CTTRXH.currentcol != '0'){
        		
        		//개별청약 그리드를 보이지 않게 한다.
        		this.grdMD_CTMDXM.set_visible('false');
        		
        		if (!this.fn_SearchItemCheck()) return;
        		//하단 거래명세서(상세) 조회
        		this.fnc_DatasetClear('dsMD_CTTRXD'); // 조회 자료 초기화

        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_CTTRXD=dsMD_CTTRXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        //키업 이벤트. 위아래의 방향키를 누르면 종속된 그리드 조회
        this.grdMD_CTTRXH_onkeyup = function(obj,e)
        {
        	if(e.keycode=='38' || e.keycode=='40'){
        		//체크박스는 제외. 삭제 가능하도록
        		if(this.grdMD_CTTRXH.currentcol != '0'){
        			
        			//개별청약 그리드를 보이지 않게 한다.
        			this.grdMD_CTMDXM.set_visible('false');
        			
        			if (!this.fn_SearchItemCheck()) return;
        			//하단 거래명세서(상세) 조회
        			this.fnc_DatasetClear('dsMD_CTTRXD'); // 조회 자료 초기화

        			var sMethodName = "SEARCH02";
        			var sInDataSet = "";
        			var sOutDataSet = "dsMD_CTTRXD=dsMD_CTTRXD";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}
        }
        /*------------------------------------+
         |  이름이 지워지면 코드가 지워짐 |
         +------------------------------------*/

        
        //브랜드
        this.edtSHRBRND_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRBRND_NAME.value=='')
        	this.edtSHRBRND_CODE.set_value('');
        }

        
        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAUTO_NAME=dsAUTO_NAME";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.fn_AutoSetting = function(){

        	var iCNT = this.dsAUTO_NAME.getRowCount();
        	var i;

        	for(i=0;i<iCNT;i++)
        	{
        		var text = this.dsAUTO_NAME.getColumn(i,"CLIENT_NAME");
        		var code = this.GetSpliceTextE(text);
        		this.dsAUTO_NAME.setColumn(i,"USEX_CODE",code);
        	}
        }

        
        // 한글 자소를 분리하여 리턴한다.
        var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
        var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
        var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

        this.GetSpliceTextK = function(strInput)
        {
        	var i;
        	var strOut = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOut += String.fromCharCode(arrFirst[nFirst]);
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOut += String.fromCharCode(arrSecond[nSecond]);
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOut += String.fromCharCode(arrThird[nThird]);
        		}
        		else
        			strOut += String.fromCharCode(nCode);
        	}
        	return strOut;
        }

        // 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
        var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
        var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
        var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
        var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];

        this.GetSpliceTextE = function(strInput)
        {
        	var i;
        	var strOutE = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOutE += arrFirstE[nFirst];
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOutE += arrSecondE[nSecond];
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOutE += arrThirdE[nThird];
        		}
        		else if(nCode>=12593 && nCode <= 12643)
        		{
        			strOutE += arrAllE[nCode-12593];
        		}
        		else
        		{
        			strOutE += String.fromCharCode(nCode);
        		}
        	}
        	return strOutE;
        }

        this.edtSHRCUST_NAME_onkeyup = function(obj,e)
        {
        	if(e.keycode==40 || e.keycode == 38)
        	{
        		this.lstCUST_NAME.setFocus();
        		this.lstCUST_NAME.set_index(0);
        	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRCUST_NAME.set_value(e.itemtext);
        	this.edtSHRCUST_CODE.set_value(e.itemvalue);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.edtSHRCUST_CODE.set_value(this.lstCUST_NAME.value);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        	//명이 지워지면 코드가 지워짐
        	if(this.edtSHRCUST_NAME.value=='')
        	this.edtSHRCUST_CODE.set_value('');
        		
        	this.lstCUST_NAME.set_value("");
        	
        	var text = e.posttext;
        	if(text.length > 0)
        	{
        		var etext = this.GetSpliceTextE(text);

        		var sFilter = "String(USEX_CODE).toUpperCase().indexOf('" + etext.toUpperCase().replace("'","\\'") + "') >= 0";

        		this.dsAUTO_NAME.filter(sFilter);

        		this.lstCUST_NAME.set_visible(true);
        	}
        	else
        	{
        		this.dsAUTO_NAME.filter("USEX_CODE == 0");
        		this.lstCUST_NAME.set_visible(false);
        	}
        }

        

        this.edtSHRCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_CTMDXM.addEventHandler("oncolumnchanged", this.dsMD_CTMDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.grdMD_CTTRXH.addEventHandler("oncellclick", this.dsMD_CTTRXH_onrowposchanged, this);
            this.grdMD_CTTRXH.addEventHandler("onkeyup", this.grdMD_CTTRXH_onkeyup, this);
            this.grdMD_CTTRXH.addEventHandler("onheadclick", this.grdMD_CTTRXH_onheadclick, this);
            this.edtSHRBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("ontextchanged", this.edtSHRBRND_NAME_ontextchanged, this);
            this.CalSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.btnEachCreate.addEventHandler("onclick", this.fn_OnClick_EachCreate, this);
            this.btnCustomerCreate.addEventHandler("onclick", this.fn_OnClick_CustomerCreate, this);
            this.grdMD_CTTRXD.addEventHandler("onheadclick", this.grdMD_CTTRXD_onheadclick, this);
            this.grdMD_CTMDXM.addEventHandler("onheadclick", this.grdMD_CTMDXM_onheadclick, this);
            this.grdMD_CTMDXM.addEventHandler("ontextchanged", this.grdMD_CTMDXM_ontextchanged, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MDMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
