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
                this.set_name("PDMC0030");
                this.set_titletext("제작관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMH", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PLPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PDPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PMPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSTAT_FLAG", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STAT_FLAG\">SF01</Col><Col id=\"STAT_NAME\">의뢰</Col></Row><Row><Col id=\"STAT_FLAG\">SF02</Col><Col id=\"STAT_NAME\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBNXM", this);
            obj._setContents("<ColumnInfo><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBNXM03", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PLPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PDPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PMPT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_COMBO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD02", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMD02", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_PDELEC05", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PDCM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PLPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PDPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PMPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH04", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_FILEXH04", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"URLX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "7", "60", null, "69", "25", null, this);
            obj.set_taborder("188");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_JOBNXM", "absolute", "8", "154", null, null, "25", "388", this);
            obj.set_binddataset("dsPD_JOBNXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"68\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"의뢰일\"/><Cell col=\"1\" style=\"background: ;\" text=\"진행상태\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"3\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"4\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"5\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"6\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"7\" style=\"background: ;\" text=\"제작종류\"/><Cell col=\"8\" style=\"background: ;\" text=\"제작용도\"/><Cell col=\"9\" style=\"background: ;\" text=\"청구일\"/><Cell col=\"10\" style=\"background: ;\" text=\"견적금액\"/><Cell col=\"11\" style=\"background: ;\" text=\"청구금액\"/><Cell col=\"12\" style=\"background: ;\" text=\"정산금액\"/><Cell col=\"13\" style=\"background: ;\" text=\"견적번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:REQU_DATE\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:STAT_FLAG\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:MEDA_CODE\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HIGH_LEVL\" combodataset=\"dsPD_COMBO\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USEX_TYPE\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DEND_AMTX\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUJU_AMTX\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "271", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "10", "0", null, "29", "441", null, this);
            obj.set_taborder("111");
            obj.set_text("제작관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "825", "29", "24", null, this);
            obj.set_taborder("112");
            obj.set_text("홈 > 제작시스템>제작관리>견적관리>제작관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "579", "23", "25", null, this);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "581", "0", "37", "60", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "97.89%", "0", null, "717", "0%", null, this);
            obj.set_taborder("116");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "581", "129", "81", "25", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "629", "329", null, "37", "477", null, this);
            obj.set_taborder("158");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.18%", null, null, "15", "2.61%", "0", this);
            obj.set_taborder("160");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME", "absolute", "29", "71", "95", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("제작의뢰일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchMEDA_CODE", "absolute", "149", "97", "95", "21", null, null, this);
            obj.set_taborder("162");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchHIGH_LEVL", "absolute", "357", "97", "75", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "357", "71", "75", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "425", "71", "80", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "507", "71", "21", "21", null, null, this);
            obj.set_taborder("166");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "530", "71", "140", "21", null, null, this);
            obj.set_taborder("167");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "701", "71", "84", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "768", "71", "80", "21", null, null, this);
            obj.set_taborder("169");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRJOBN_NAME", "absolute", "850", "71", "21", "21", null, null, this);
            obj.set_taborder("170");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "873", "71", "200", "21", null, null, this);
            obj.set_taborder("171");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchUSEX_TYPE", "absolute", "510", "97", "70", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_TYPE", "absolute", "577", "97", "92", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("173");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchSTAT_FLAG", "absolute", "698", "97", "69", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_text("진행상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_FLAG", "absolute", "766", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("175");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsSTAT_FLAG");
            obj.set_datacolumn("STAT_NAME");
            obj.set_codecolumn("STAT_FLAG");

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "229", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("176");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHRHIGH_LEVL", "absolute", "425", "97", "87", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("177");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static34", "absolute", "8", "61", "31", "67", null, null, this);
            obj.set_taborder("178");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "101", "61", "8", "67", null, null, this);
            obj.set_taborder("179");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSHRFROM_REQD", "absolute", "109", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("180");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("edtSHRTO_REQD", "absolute", "227", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("181");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "213", "71", "14", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "327", "61", "41", "67", null, null, this);
            obj.set_taborder("183");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "35.13%", "61", null, "67", "64.2%", null, this);
            obj.set_taborder("184");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "668", "61", "41", "67", null, null, this);
            obj.set_taborder("185");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "759", "61", "9", "67", null, null, this);
            obj.set_taborder("186");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("190");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("193");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Tab("tabIndex", "absolute", "8", null, null, "363", "25", "15", this);
            obj.set_taborder("194");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabIndex);
            obj.set_text("견적");
            this.tabIndex.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "4", null, "21", "881", null, this.tabIndex.tabpage1);
            obj.set_taborder("41");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabIndex.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", null, "25", "491", null, this.tabIndex.tabpage1);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0%", "75", null, "67", "99.13%", null, this.tabIndex.tabpage1);
            obj.set_taborder("43");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdPD_ESTIMH", "absolute", "10", "25", null, null, "10", "10", this.tabIndex.tabpage1);
            obj.set_taborder("44");
            obj.set_binddataset("dsPD_ESTIMH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"제작구분\"/><Cell col=\"1\" style=\"background: ;\" text=\"견적일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"3\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"4\" style=\"background: ;\" text=\"견적명\"/><Cell col=\"5\" style=\"background: ;\" text=\"견적금액\"/><Cell col=\"6\" style=\"background: ;\" text=\"견적번호\"/><Cell col=\"7\" style=\"background: ;\" text=\"청구구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_FLAG\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:ESTI_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEND_FLAG\"/></Band></Format></Formats>");
            this.tabIndex.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "99.13%", "75", null, "75", "0%", null, this.tabIndex.tabpage1);
            obj.set_taborder("45");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tabIndex);
            obj.set_text("견적상세");
            this.tabIndex.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "4", null, "21", "881", null, this.tabIndex.tabpage2);
            obj.set_taborder("39");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabIndex.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grdPD_ESTIMD", "absolute", "10", "25", null, null, "10", "10", this.tabIndex.tabpage2);
            obj.set_taborder("40");
            obj.set_binddataset("dsPD_ESTIMD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"순번\"/><Cell col=\"1\" style=\"background: ;\" text=\"대분류\"/><Cell col=\"2\" style=\"background: ;\" text=\"중분류\"/><Cell col=\"3\" style=\"background: ;\" text=\"견적항목명\"/><Cell col=\"4\" style=\"background: ;\" text=\"견적번호\"/><Cell col=\"5\" style=\"background: ;\" text=\"내역\"/><Cell col=\"6\" style=\"background: ;\" text=\"수량\"/><Cell col=\"7\" style=\"background: ;\" text=\"단가\"/><Cell col=\"8\" style=\"background: ;\" text=\"금액\"/><Cell col=\"9\" style=\"background: ;\" text=\"제작사\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_IDXX\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MIDD_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBX_NAME\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:TYPE_QTYX\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:ESTI_PRCE\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"4\" style=\"align: center;\" text=\"합계\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TYPE_QTYX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_PRCE&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.tabIndex.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1143", "83", "10", "75", null, null, this.tabIndex.tabpage2);
            obj.set_taborder("41");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", null, "25", "491", null, this.tabIndex.tabpage2);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.tabIndex);
            obj.set_text("외주정산");
            this.tabIndex.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "4", null, "21", "881", null, this.tabIndex.tabpage3);
            obj.set_taborder("40");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabIndex.tabpage3.addChild(obj.name, obj);
            obj = new Grid("grdPD_ESTIMD02", "absolute", "10", "25", "389", "299", null, null, this.tabIndex.tabpage3);
            obj.set_taborder("41");
            obj.set_binddataset("dsPD_ESTIMD02");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"견적번호\"/><Cell col=\"1\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작항목\"/><Cell col=\"3\" style=\"background: ;\" text=\"견적금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBX_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ESTI_AMTX\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" style=\"align: center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/></Band></Format></Formats>");
            this.tabIndex.tabpage3.addChild(obj.name, obj);
            obj = new Grid("grdPD_SUJUMD02", "absolute", "419", "25", null, null, "10", "10", this.tabIndex.tabpage3);
            obj.set_taborder("42");
            obj.set_binddataset("dsPD_SUJUMD02");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"제작사코드\"/><Cell col=\"1\" style=\"background: ;\" text=\"제작사명\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작항목\"/><Cell col=\"3\" style=\"background: ;\" text=\"내역\"/><Cell col=\"4\" style=\"background: ;\" text=\"정산금액\"/><Cell col=\"5\" style=\"background: ;\" text=\"정산일자\"/><Cell col=\"6\" style=\"background: ;\" text=\"계약서번호\"/><Cell col=\"7\" style=\"background: ;\" text=\"계약명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:OUTS_CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBX_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUJU_AMTX\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUJU_DATE\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CONT_NUMB\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CONT_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"3\" style=\"align: center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUJU_AMTX&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.tabIndex.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", null, "25", "491", null, this.tabIndex.tabpage3);
            obj.set_taborder("43");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "399", "102", "20", "55", null, null, this.tabIndex.tabpage3);
            obj.set_taborder("44");
            obj.set_text("W20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage3.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.tabIndex);
            obj.set_text("제작의뢰");
            this.tabIndex.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "10", null, null, "168", "10", "151", this.tabIndex.tabpage4);
            obj.set_taborder("99");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staCTIM_CODE", "absolute", "423", "24", "82", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("100");
            obj.set_text("광고주 팀");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_color("#515151ff");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staPLAN_DEPT", "absolute", "423", "50", "82", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("101");
            obj.set_text("기획 담당팀");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staPLAN_EMPL", "absolute", "791", "50", "98", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("102");
            obj.set_text("기획 담당자");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "791", "24", "98", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("103");
            obj.set_text("광고주 담당자");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_color("#515151ff");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staREQU_DATE", "absolute", "34", null, "102", "21", null, "237", this.tabIndex.tabpage4);
            obj.set_taborder("104");
            obj.set_text("제작의뢰일");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staPROD_DEPT", "absolute", "423", "76", "82", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("105");
            obj.set_text("제작 담당팀");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staPROD_EMPL", "absolute", "791", "76", "98", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("106");
            obj.set_text("제작 담당자");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtCUST_EMPL", "absolute", "893", "24", "230", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("107");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpCUST_CODE", "absolute", "223", "24", "21", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("108");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staCOMP_DATE", "absolute", "34", null, "102", "21", null, "211", this.tabIndex.tabpage4);
            obj.set_taborder("109");
            obj.set_text("제작완료희망일");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staMEMO_FILD", "absolute", "34", null, null, "21", "1016", "185", this.tabIndex.tabpage4);
            obj.set_taborder("110");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "34", null, null, "21", "1016", "168", this.tabIndex.tabpage4);
            obj.set_taborder("111");
            obj.set_cssclass("styFormItemCap");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staMEDA_CODE", "absolute", "423", "102", "82", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("112");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staHIGH_LEVL", "absolute", "423", "128", "82", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("113");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staUSEX_TYPE", "absolute", "791", null, null, "21", "263", "186", this.tabIndex.tabpage4);
            obj.set_taborder("114");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staJOBN_SIZE", "absolute", "791", "102", "98", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("115");
            obj.set_text("규격");
            obj.set_cssclass("styFormItemCap");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpPLAN_EMPL", "absolute", "975", "50", "21", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("116");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpPROD_EMPL", "absolute", "975", null, "21", "21", null, "237", this.tabIndex.tabpage4);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtJOBN_NAME", "absolute", "141", "50", "245", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("118");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtCUST_CODE", "absolute", "141", "24", "80", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("119");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtCUST_NAME", "absolute", "246", "24", "140", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("120");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtCTIM_CODE", "absolute", "509", "24", "80", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("121");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtCTIM_NAME", "absolute", "614", "24", "140", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("122");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPLAN_DEPT", "absolute", "509", "50", "80", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("123");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPLAN_NAME", "absolute", "614", "50", "140", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("124");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPLAN_EMPL", "absolute", "893", "50", "80", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("125");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPLAN_EMPN", "absolute", "998", "50", "125", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("126");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Calendar("calREQU_DATE", "absolute", "141", "76", "103", "21", null, null, this.tabIndex.tabpage4);
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            obj = new Edit("edtPROD_DEPT", "absolute", "509", "76", "80", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("128");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPROD_NAME", "absolute", "614", "76", "140", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("129");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPROD_EMPL", "absolute", "893", null, "80", "21", null, "237", this.tabIndex.tabpage4);
            obj.set_taborder("130");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtPROD_EMPN", "absolute", "998", "76", "125", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("131");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Calendar("calCOMP_DATE", "absolute", "141", "102", "103", "21", null, null, this.tabIndex.tabpage4);
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            obj = new Combo("cmbMEDA_CODE", "absolute", "509", "102", "245", "21", null, null, this.tabIndex.tabpage4);
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj.set_taborder("133");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            obj = new Combo("cmbHIGH_LEVL", "absolute", "509", null, "245", "21", null, "185", this.tabIndex.tabpage4);
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsPD_COMBO");
            obj.set_codecolumn("COMB_CODE");
            obj.set_datacolumn("COMB_NAME");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            obj = new Combo("cmbUSEX_TYPE", "absolute", "892", null, "231", "21", null, "186", this.tabIndex.tabpage4);
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj.set_taborder("135");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            obj = new Edit("edtJOBN_SIZE", "absolute", "893", "102", "230", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("136");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Edit("edtMEMO_FILD", "absolute", "141", null, "245", "46", null, "160", this.tabIndex.tabpage4);
            obj.set_taborder("137");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM03");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staJOBN_NAME", "absolute", "34", null, "102", "21", null, "263", this.tabIndex.tabpage4);
            obj.set_taborder("138");
            obj.set_text("제작명");
            obj.set_cssclass("styFormItemCapBE");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("staselectCUST_NAME", "absolute", "34", null, "102", "21", null, "289", this.tabIndex.tabpage4);
            obj.set_taborder("139");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_color("#515151ff");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "11", null, null, "152", "1107", "138", this.tabIndex.tabpage4);
            obj.set_taborder("140");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", null, "15", "491", null, this.tabIndex.tabpage4);
            obj.set_taborder("141");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", null, "10", "152", null, "138", this.tabIndex.tabpage4);
            obj.set_taborder("142");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpPLAN_DEPT", "absolute", "591", "50", "21", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("143");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpPROD_DEPT", "absolute", "591", "76", "21", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("144");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Static("imgHelpCTIM_CODE", "absolute", "591", "24", "21", "21", null, null, this.tabIndex.tabpage4);
            obj.set_taborder("145");
            obj.set_cssclass("sytHelpPopup");
            this.tabIndex.tabpage4.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.tabIndex);
            obj.set_text("제작물");
            this.tabIndex.addChild(obj.name, obj);
            obj = new Button("btn_FileSave", "absolute", null, "5", "80", "21", "96", null, this.tabIndex.tabpage5);
            obj.set_taborder("113");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Module");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Grid("grdPD_FILEXH04", "absolute", "10", "30", null, null, "10", "10", this.tabIndex.tabpage5);
            obj.set_taborder("114");
            obj.set_binddataset("dsPD_FILEXH04");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"파일번호\"/><Cell col=\"1\" text=\"제작번호\"/><Cell col=\"2\" text=\"등록일\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"기타 URL\"/><Cell col=\"5\" text=\"업로드\"/><Cell col=\"6\" text=\"다운로드\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_NUMB\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:REGI_DATE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_NAME\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" text=\"bind:URLX_NAME\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" text=\"파일 업로드\"/><Cell col=\"6\" displaytype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" edittype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" text=\"expr:DOWNLOAD == '파일 다운로드' ? DOWNLOAD : ''\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MEMO_FILD\"/></Band></Format></Formats>");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Button("btn_AddRow", "absolute", null, "5", "80", "21", "176", null, this.tabIndex.tabpage5);
            obj.set_taborder("115");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0%", "75", null, "67", "99.13%", null, this.tabIndex.tabpage5);
            obj.set_taborder("116");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", null, "30", "491", null, this.tabIndex.tabpage5);
            obj.set_taborder("117");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "99.13%", "75", null, "75", "0%", null, this.tabIndex.tabpage5);
            obj.set_taborder("118");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabIndex.tabpage5.addChild(obj.name, obj);
            obj = new Button("btn_FileDelete", "absolute", null, "5", "80", "21", "16", null, this.tabIndex.tabpage5);
            obj.set_taborder("119");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Module");
            this.tabIndex.tabpage5.addChild(obj.name, obj);

            obj = new Radio("rdoCODE_TIME", "absolute", "38", "97", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoCODE_TIME_innerdataset = new Dataset("rdoCODE_TIME_innerdataset", this.rdoCODE_TIME);
            rdoCODE_TIME_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdoCODE_TIME_innerdataset);
            obj.set_taborder("195");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabIndex.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("견적");

            	}
            );
            this.tabIndex.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabIndex.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("견적상세");

            	}
            );
            this.tabIndex.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabIndex.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("외주정산");

            	}
            );
            this.tabIndex.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabIndex.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("제작의뢰");

            	}
            );
            this.tabIndex.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabIndex.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("제작물");

            	}
            );
            this.tabIndex.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","tabIndex.tabpage4.edtCUST_EMPL","value","dsPD_JOBNXM03","CUST_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","tabIndex.tabpage4.edtCUST_EMPL","binddataset","dsPD_JOBNXM03","CUST_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBUTY_NAME_value","tabIndex.tabpage4.edtJOBN_NAME","value","dsPD_JOBNXM03","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","tabIndex.tabpage4.edtJOBN_NAME","binddataset","dsPD_JOBNXM03","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL1_ADDR_value","tabIndex.tabpage4.edtCUST_CODE","value","dsPD_JOBNXM03","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","tabIndex.tabpage4.edtCUST_CODE","binddataset","dsPD_JOBNXM03","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","tabIndex.tabpage4.edtCUST_NAME","value","dsPD_JOBNXM03","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","tabIndex.tabpage4.edtCUST_NAME","binddataset","dsPD_JOBNXM03","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tabIndex.tabpage4.edtCTIM_CODE","value","dsPD_JOBNXM03","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","tabIndex.tabpage4.edtCTIM_CODE","binddataset","dsPD_JOBNXM03","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tabIndex.tabpage4.edtCTIM_NAME","value","dsPD_JOBNXM03","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabIndex.tabpage4.edtCTIM_NAME","binddataset","dsPD_JOBNXM03","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tabIndex.tabpage4.edtPLAN_DEPT","value","dsPD_JOBNXM03","PLAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","tabIndex.tabpage4.edtPLAN_DEPT","binddataset","dsPD_JOBNXM03","PLAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","tabIndex.tabpage4.edtPLAN_NAME","value","dsPD_JOBNXM03","PLAN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabIndex.tabpage4.edtPLAN_NAME","binddataset","dsPD_JOBNXM03","PLAN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","tabIndex.tabpage4.edtPLAN_EMPL","value","dsPD_JOBNXM03","PLAN_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tabIndex.tabpage4.edtPLAN_EMPL","binddataset","dsPD_JOBNXM03","PLAN_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","tabIndex.tabpage4.edtPLAN_EMPN","value","dsPD_JOBNXM03","PLAN_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tabIndex.tabpage4.edtPLAN_EMPN","binddataset","dsPD_JOBNXM03","PLAN_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calESTA_DATE_value","tabIndex.tabpage4.calREQU_DATE","value","dsPD_JOBNXM03","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","tabIndex.tabpage4.calREQU_DATE","binddataset","dsPD_JOBNXM03","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","tabIndex.tabpage4.edtPROD_DEPT","value","dsPD_JOBNXM03","PROD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","tabIndex.tabpage4.edtPROD_DEPT","binddataset","dsPD_JOBNXM03","PROD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","tabIndex.tabpage4.edtPROD_NAME","value","dsPD_JOBNXM03","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","tabIndex.tabpage4.edtPROD_NAME","binddataset","dsPD_JOBNXM03","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","tabIndex.tabpage4.edtPROD_EMPL","value","dsPD_JOBNXM03","PROD_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","tabIndex.tabpage4.edtPROD_EMPL","binddataset","dsPD_JOBNXM03","PROD_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","tabIndex.tabpage4.edtPROD_EMPN","value","dsPD_JOBNXM03","PROD_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","tabIndex.tabpage4.edtPROD_EMPN","binddataset","dsPD_JOBNXM03","PROD_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","tabIndex.tabpage4.calCOMP_DATE","value","dsPD_JOBNXM03","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","tabIndex.tabpage4.calCOMP_DATE","binddataset","dsPD_JOBNXM03","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPBGN_CODE_value","tabIndex.tabpage4.cmbMEDA_CODE","value","dsPD_JOBNXM03","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","tabIndex.tabpage4.cmbMEDA_CODE","binddataset","dsPD_JOBNXM03","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","tabIndex.tabpage4.cmbHIGH_LEVL","value","dsPD_JOBNXM03","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","tabIndex.tabpage4.cmbHIGH_LEVL","binddataset","dsPD_JOBNXM03","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","tabIndex.tabpage4.cmbUSEX_TYPE","value","dsPD_JOBNXM03","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","tabIndex.tabpage4.cmbUSEX_TYPE","binddataset","dsPD_JOBNXM03","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","tabIndex.tabpage4.edtJOBN_SIZE","value","dsPD_JOBNXM03","JOBN_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","tabIndex.tabpage4.edtJOBN_SIZE","binddataset","dsPD_JOBNXM03","JOBN_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","tabIndex.tabpage4.edtMEMO_FILD","value","dsPD_JOBNXM03","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","tabIndex.tabpage4.edtMEMO_FILD","binddataset","dsPD_JOBNXM03","MEMO_FILD");
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
        this.addIncludeScript("PDMC0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PDMC0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMA0030 제작 계약서 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMC0030"; //해당 Form에서 사용 할 Package 명
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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	//최초 날짜 세팅
        	this.edtSHRFROM_REQD.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.edtSHRTO_REQD.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	//제작종류 콤보 데이터셋 가져오기
        	this.fn_getHigh_codeCombo();
        	
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
        	this.fnc_DatasetClear("dsPD_JOBNXM");

        	//상단 계약서 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_JOBNXM=dsPD_JOBNXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_ESTIMH.insertRow(this.dsPD_ESTIMH.rowposition + 1);
        	this.dsPD_ESTIMH.set_rowposition(iRow);
        	
        	this.dsPD_ESTIMH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_CONTXH, 0));	

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
        	if ((this.fnc_DatasetChangeCheck("dsPD_ESTIMH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	if ((this.fnc_DatasetChangeCheck("dsPD_ESTIMD")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_FILEXH04.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_FILEXH04.getColumn(this.dsPD_FILEXH04.rowposition, "FILE_NAME")) + ") 파일";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        // 기능없음
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FROM_REQD=" + this.fnc_Quote(this.edtSHRFROM_REQD.value); //제작의뢰검색시작일
        		sReturnString += " TO_REQD=" + this.fnc_Quote(this.edtSHRTO_REQD.value);     //제작의뢰검색종료일
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); //제작내용
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); //제작종류
        		sReturnString += " USEX_TYPE=" + this.fnc_Quote(this.cmbSHRUSEX_TYPE.value); //제작용도
        		sReturnString += " STAT_FLAG=" + this.fnc_Quote(this.cmbSHRSTAT_FLAG.value); //진행상태
        		
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB")); //헤더의 견적번호
        	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB")); //헤더의 제작번호
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "PREE_CODE")); //헤더의 견적번호
        	
        	} else if (sKind == "SEARCH03_1" || sKind == "SEARCH03_2") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB")); //헤더의 제작번호
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "PREE_CODE")); //헤더의 견적번호
        	
        	} else if (sKind == "SEARCH04") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB")); //헤더의 견적번호
        	
        	} else if (sKind == "SEARCH05") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB")); //헤더의 견적번호
        	
        	}  else if (sKind == "SEARCH07") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SAVE00" || sKind == "SAVE01") {
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

        		this.fnc_Information(this.stInformation, this.dsPD_JOBNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.tabIndex.tabpage1.stInformation00, this.dsPD_ESTIMH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH02") {
        	
        		this.fnc_Information(this.tabIndex.tabpage2.stInformation00, this.dsPD_ESTIMD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH03_1") {
        	
        		this.fnc_Information(this.tabIndex.tabpage3.stInformation00, this.dsPD_ESTIMD02.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH05") {	
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRCLAS_CODE,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		//----------------------------------------------------		
        		// 제작내용 조회용
        		//this.fnc_GetComboSearchMEDA_CODE();
        		// 제작용도 조회용
        		this.fnc_GetComboSearchUSEX_TYPE();
        		// 진행상태 조회용
        		this.fnc_GetComboSearchSTAT_FLAG();
        		
        		// 제작내용 입력용
        		this.fnc_GetComboMEDA_CODE();
        		// 제작종류 조회용 내용을 선택하면 종류 선택 가능
        		//this.fnc_GetComboHIGH_LEVL();		
        		// 제작용도 입력용
        		this.fnc_GetComboUSEX_TYPE();
        		
        		// 제작내용 그리드용
        		this.fnc_GetComboGrdMEDA_CODE();
        		// 제작용도 그리드용
        		this.fnc_GetComboGrdUSEX_TYPE();
        		// 진행상태 그리드용
        		this.fnc_GetComboGrdSTAT_FLAG();
        //-----------------------------------------------------
        		
        		
        	}	

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        
        //콤보 데이터 셋 가져오기 
        this.fn_getHigh_codeCombo = function (obj) {

        	this.fnc_DatasetClear("dsPD_COMBO");

        	var sMethodName = "SEARCH07";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_COMBO=dsPD_COMBO";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        //상단의 속성이 변경되면 하단의 탭 활성화를 확인하고 조회한다.
        this.dsPD_JOBNXM_onrowposchanged = function(obj,e)
        {

        	var tab_index = this.tabIndex.tabindex;
        	this.fn_validation(tab_index);
        }

        this.tabIndex_onchanged = function(obj,e)
        {
        	var tab_index = this.tabIndex.tabindex;
        	this.fn_validation(tab_index);
        }

        /*-----------------------------+
         | 활성화된 탭 체크 후 조회 |
         +-----------------------------*/
        this.fn_validation = function(tab_index){
        	//하단그리드
        	if(tab_index == '0'){
        		// 견적헤더 조회
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_ESTIMH");

        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_ESTIMH=dsPD_ESTIMH";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}
        	else if(tab_index == '1'){
        		// 견적상세
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_ESTIMD");

        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_ESTIMD=dsPD_ESTIMD";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	else if(tab_index == '2'){
        		// 외주정산
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		
        		this.fnc_DatasetClear("dsPD_ESTIMD02");
        		
        		var sMethodName = "SEARCH03_1";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_ESTIMD02=dsPD_ESTIMD02";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		this.fnc_DatasetClear("dsPD_SUJUMD02");
        		
        		var sMethodName = "SEARCH03_2";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SUJUMD02=dsPD_SUJUMD02";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	}
        	else if(tab_index == '3'){
        		// 제작의뢰 조회
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_JOBNXM03");

        		var sMethodName = "SEARCH04";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_JOBNXM03=dsPD_JOBNXM03";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	else if(tab_index == '4'){
        		// 제작물 조회
        		if (!this.fn_SearchItemDTLCheck(tab_index)) return;
        		this.fnc_DatasetClear("dsPD_FILEXH04");

        		var sMethodName = "SEARCH05";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_FILEXH04=dsPD_FILEXH04";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemDTLCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_JOBNXM")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        

        /*-----------------------+
         |조회를 위한 제작내용 콤보박스
         +------------------------*/
        this.fnc_GetComboSearchMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //제작내용 콤보 선택시 제작 종류 선택
        this.cmbSHRMEDA_CODE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }

        /*-----------------------+
         |조회를 위한 제작종류
         +------------------------*/
        this.fnc_GetComboSearchHIGH_LEVL = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRMEDA_CODE.value
        		
        		//신코드 또는 구코드 포함 여부
        		if(this.rdoCODE_TIME.index == "0"){
        			var sCOMBO_ID = "PCM0001";
        		}else{
        			var sCOMBO_ID = "PCM0002";
        		}

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = sCOMBO_ID; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE	   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRHIGH_LEVL,dsSHRHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*-----------------------+
         |조회를 위한 제작용도 콤보
         +------------------------*/
        this.fnc_GetComboSearchUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRUSEX_TYPE,dsSHRUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*-----------------------+
         |조회를 위한 진행상태 콤보
         +------------------------*/
        this.fnc_GetComboSearchSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRSTAT_FLAG,dsSHRSTAT_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*-----------------------+
         |제작내용 콤보박스
         +------------------------*/
        this.fnc_GetComboMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,tabIndex.tabpage4.cmbMEDA_CODE,dsMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*-----------------------+
         |제작용도 콤보
         +------------------------*/
        this.fnc_GetComboUSEX_TYPE = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,tabIndex.tabpage4.cmbUSEX_TYPE,dsUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*-----------------------+
         |그리드 제작내용 콤보박스
         +------------------------*/
        this.fnc_GetComboGrdMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        /*-----------------------+
         |그리드 제작용도 콤보
         +------------------------*/
        this.fnc_GetComboGrdUSEX_TYPE = function()
        {

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDUSEX_TYPE,USEX_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*-----------------------+
         |그리드 진행상태  콤보
         +------------------------*/
        this.fnc_GetComboGrdSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDSTAT_FLAG,STAT_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        

        //그리드 콤보 오픈
        this.grdPD_JOBNXM_ondropdown = function(obj,e)
        {
            var sMEDA_CODE = this.dsPD_JOBNXM.getColumn(e.row, "MEDA_CODE");

        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        }

        
        /*-----------------------+
         |콤보 변경시
         +------------------------*/
        this.cmbMEDA_CODE_oncloseup = function(obj,e)
        {
        	var sMEDA_CODE = this.cmbMEDA_CODE.value;
        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        	
        	var iRow = this.dsPD_JOBNXM.rowposition;
        	var sMEDA_CODE = this.dsPD_JOBNXM.getColumn(iRow, "MEDA_CODE");
        	var sHIGH_LEVL = this.dsPD_JOBNXM.getColumn(iRow, "HIGH_LEVL");
        	
        	
        	if (sMEDA_CODE != this.dsPD_COMBO.lookup("COMB_CODE", sHIGH_LEVL, "CLAS_TYPE"))
        	{
                this.dsPD_JOBNXM.setColumn(iRow, "HIGH_LEVL", "");
        	}
        	this.dsPD_COMBO.filter("");
        }

        

        /*------------------------------------+
         |  광고주코드 조회팝업
         +-------------------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        	
        }

        /*------------------------------------+
         |  제작번호 조회팝업
         +-------------------------------------*/
        this.fn_HelpDialogeJOBN_NUMB = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpSHRJOBN_NAME') || (obj.name == 'edtSHRJOBN_NAME')) {

        		arrParam[0] = 'PDM0005';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRJOBN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRJOBN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRJOBN_NUMB,edtSHRJOBN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*------------------------------------+
         |  제작물탭 추가버튼 클릭시
         +-------------------------------------*/
        this.tabIndex_tabpage5_btn_AddRow_onclick = function(obj,e)
        {
        	var iRow = this.dsPD_FILEXH04.insertRow(this.dsPD_FILEXH04.rowposition + 1);
        	this.dsPD_FILEXH04.set_rowposition(iRow);

        	this.dsPD_FILEXH04.setColumn(iRow, "JOBN_NUMB", this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB"));
        	this.dsPD_FILEXH04.setColumn(iRow, "REGI_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,10 ));

        	this.tabIndex.tabpage5.grdPD_FILEXH04.setCellPos(this.fnc_GridColumnIndex(this.tabIndex.tabpage5.grdPD_FILEXH04,0));
        }

        /*------------------------------------+
         |  제작물탭 제작물 파일 저장버튼
         +-------------------------------------*/
        this.tabIndex_tabpage5_btn_FileSave_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheckDTL()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPD_FILEXH04=dsPD_FILEXH04:U dsFL_ATTACH04=dsFL_ATTACH04:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------------+
         |  제작물탭 제작물 파일 삭제버튼
         +-------------------------------------*/
         
        this.tabIndex_tabpage5_btn_FileDelete_onclick = function(obj,e)
        {
        	if (this.fn_DeleteCheck()) this.dsPD_FILEXH04.deleteRow(this.dsPD_FILEXH04.rowposition);
        	this.tabIndex.tabpage5.grdPD_FILEXH04.setFocus();
        }

        

        /*------------------+
         |  파일저장 탭 파일저장체크
         +-------------------*/
        this.fn_SaveItemCheckDTL = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_FILEXH04") == false && this.fnc_DatasetChangeCheck("dsPD_FILEXH04") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_FILEXH04.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_FILEXH04.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_FILEXH04.getColumn(i, "JOBN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작번호", this.dsPD_FILEXH04, i, '', '');
        		}
        	}

        	return true;
        }

        /*------------------+
         |  제작물관리탭 파일저장 클릭시
         +-------------------*/
        this.tabIndex_tabpage5_grdPD_FILEXH04_oncellclick = function(obj,e)
        {

        	if(this.tabIndex.tabpage5.grdPD_FILEXH04.getCellText(e.row,e.col)=="파일 업로드") {
        	
        		//그리드 셀 이미지 클릭시 그리드로우와 데이타셋 로우가 같은지 확인(같음)
        		//파일업로드 팝업창 호출
        		this.fnc_CallFileUplod(3,"doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml,tif","fn_CallFileUplodCallback");
        		
        	} else if(this.tabIndex.tabpage5.grdPD_FILEXH04.getCellText(e.row,e.col)=="파일 다운로드") {
        		//다운로드 펑션
        		var filePath   = this.dsPD_FILEXH04.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsPD_FILEXH04.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsPD_FILEXH04.getColumn(e.row,"LFIL_NAME");

        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}		
        	}
        }

        

        //공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
        //form 새로 꺼내야 한다.
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	//dataset이 없으면 이 함수가 실행되지 않는다.
        	//tmp에 업로드된 파일리스트가 담긴 dataset object 
        	
        	//기존의 데이터를 삭제해야 하는데.
        	 
        	//var objds = form.components["dsFL_ATTACH04"];
        	var objds = form.dsFL_ATTACH04;
        	//var objmainds =form.components["dsTM_EXCLXM"];
        	var objmainds =form.dsPD_FILEXH04;

        	var objmaingrd = form.tabIndex.tabpage5.grdPD_FILEXH04;
        	
        	//기존에 등록된 데이터는 삭제로 등록한다.
        	if((objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != "") && (objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != null )){
        		
        		var preFileName = objmainds.getColumn(objmainds.rowposition, "PFIL_NAME");
        		
        		// 만약 기존에 등록된 데이터가 이전 업로드에 업로드 하였다면(이전에 파일 업로드 후 저장하지는 않았다면...)
        		// dsFL_ATTACH04 데이터셋에도 존재한다. 방금 업로드 했기에...
        		var findRow = objds.findRow("PFIL_NAME", preFileName);
        		
        		if (findRow == -1) {

        			// 기존에 엑셀양식파일이 업로드 데이터셋에 존재하지 않는 경우(업로드를 한 것이 아니었다면...)
        			var iRow = objds.addRow();
        			objds.setColumn(iRow, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        			objds.setColumn(iRow, "PFIL_NAME", objmainds.getColumn(objmainds.rowposition, "PFIL_NAME"));
        			objds.setColumn(iRow, "FILE_PATH", objmainds.getColumn(objmainds.rowposition, "FILE_PATH"));
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(iRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(iRow, Dataset.ROWTYPE_DELETE);
        			}
        		
        		} else {
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(findRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(findRow, Dataset.ROWTYPE_DELETE);
        			}
        			
        		}
        	}
        	
        	//업무테이블에 해당 컬럼을 저장할 때만 갱신함, 보통 FILE_IDXX만 있으면 된다.
        	objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	objmainds.setColumn(objmainds.rowposition, "FILE_NAME", robjds.getColumn(0, "LFIL_NAME"));
        	
        	//현재 첨부파일이 tmp 폴더에 있는 상태에서 다운로드 버튼을 활성화 시킨다. (다운로드를 하려면 FILE_PATH,PFIL_NAME,LFIL_NAME 가 필요함.
        	objmainds.setColumn(objmainds.rowposition, "FILE_PATH", robjds.getColumn(0, "FILE_PATH"));
        	objmainds.setColumn(objmainds.rowposition, "PFIL_NAME", robjds.getColumn(0, "PFIL_NAME"));
        	objmainds.setColumn(objmainds.rowposition, "LFIL_NAME", robjds.getColumn(0, "LFIL_NAME"));

        	objmainds.setColumn(objmainds.rowposition, "DOWNLOAD", "파일 다운로드");

        	//저장버튼을 누르게 되면 tmp폴더에 있는 파일이 실제 폴더로 옮겨지기 때문에 FILE_PATH를 갱신하기 위해서 검색을 다시 해야 한다.
        	
        	//팝업창에서 추가된 파일리스트를 추가상태로 복사한다.(copyData를 사용하면 초기상태가된다)
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);

        		if(objds.updatecontrol){
        			//copyRow 시
        			//updatecontrol 속성의 값이 'true'이면 복사된 행의 타입은 ROWTYPE_UPDATE가 되고, 'false'이면 ROWTYPE_NORMAL
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        }

        

        this.rdoCODE_TIME_onitemchanged = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_ESTIMH.addEventHandler("onrowposchanged", this.dsPD_ESTIMH_onrowposchanged, this);
            this.dsPD_JOBNXM.addEventHandler("onrowposchanged", this.dsPD_JOBNXM_onrowposchanged, this);
            this.dsPD_ESTIMD.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_ESTIMD02.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_SUJUMD02.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_PDELEC05.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_JOBNXM.addEventHandler("onheadclick", this.grdPD_CONTXH_onheadclick, this);
            this.grdPD_JOBNXM.addEventHandler("oncellclick", this.grdPD_ESTIMH_oncellclick, this);
            this.grdPD_JOBNXM.addEventHandler("ondropdown", this.grdPD_JOBNXM_ondropdown, this);
            this.imgSearchTYPE_NAME.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchHIGH_LEVL.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRJOBN_NAME.addEventHandler("onclick", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeJOBN_NUMB, this);
            this.imgSearchUSEX_TYPE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRUSEX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchSTAT_FLAG.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMEDA_CODE.addEventHandler("oncloseup", this.cmbSHRMEDA_CODE_oncloseup, this);
            this.cmbSHRMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRHIGH_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.tabIndex.addEventHandler("onchanged", this.tabIndex_onchanged, this);
            this.tabIndex.tabpage1.grdPD_ESTIMH.addEventHandler("oncellclick", this.tabIndex_tabpage1_grdPD_ESTIMH_oncellclick, this);
            this.tabIndex.tabpage2.grdPD_ESTIMD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeCUST_CODE, this);
            this.tabIndex.tabpage4.imgHelpPLAN_EMPL.addEventHandler("onclick", this.fn_HelpDialogePLAN_EMPL, this);
            this.tabIndex.tabpage4.imgHelpPROD_EMPL.addEventHandler("onclick", this.fn_HelpDialogePROD_EMPL, this);
            this.tabIndex.tabpage4.edtJOBN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtCUST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCUST_CODE, this);
            this.tabIndex.tabpage4.edtCTIM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtCTIM_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtCTIM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtCTIM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCTIM_CODE, this);
            this.tabIndex.tabpage4.edtPLAN_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPLAN_DEPT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtPLAN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPLAN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogePLAN_DEPT, this);
            this.tabIndex.tabpage4.edtPLAN_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPLAN_EMPL.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtPLAN_EMPN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPLAN_EMPN.addEventHandler("onkillfocus", this.fn_HelpDialogePLAN_EMPL, this);
            this.tabIndex.tabpage4.calREQU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPROD_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPROD_DEPT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtPROD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPROD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogePROD_DEPT, this);
            this.tabIndex.tabpage4.edtPROD_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPROD_EMPL.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabIndex.tabpage4.edtPROD_EMPN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.edtPROD_EMPN.addEventHandler("onkillfocus", this.fn_HelpDialogePROD_EMPL, this);
            this.tabIndex.tabpage4.calCOMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.cmbMEDA_CODE.addEventHandler("oncloseup", this.cmbMEDA_CODE_oncloseup, this);
            this.tabIndex.tabpage4.cmbMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.cmbUSEX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabIndex.tabpage4.imgHelpPLAN_DEPT.addEventHandler("onclick", this.fn_HelpDialogePLAN_DEPT, this);
            this.tabIndex.tabpage4.imgHelpPROD_DEPT.addEventHandler("onclick", this.fn_HelpDialogePROD_DEPT, this);
            this.tabIndex.tabpage4.imgHelpCTIM_CODE.addEventHandler("onclick", this.fn_HelpDialogeCTIM_CODE, this);
            this.tabIndex.tabpage5.btn_FileSave.addEventHandler("onclick", this.tabIndex_tabpage5_btn_FileSave_onclick, this);
            this.tabIndex.tabpage5.grdPD_FILEXH04.addEventHandler("oncellclick", this.tabIndex_tabpage5_grdPD_FILEXH04_oncellclick, this);
            this.tabIndex.tabpage5.btn_AddRow.addEventHandler("onclick", this.tabIndex_tabpage5_btn_AddRow_onclick, this);
            this.tabIndex.tabpage5.btn_FileDelete.addEventHandler("onclick", this.tabIndex_tabpage5_btn_FileDelete_onclick, this);
            this.rdoCODE_TIME.addEventHandler("onitemchanged", this.rdoCODE_TIME_onitemchanged, this);

        };

        this.loadIncludeScript("PDMC0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
