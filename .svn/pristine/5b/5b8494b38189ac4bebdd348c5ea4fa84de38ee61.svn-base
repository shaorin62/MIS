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
                this.set_name("FAMA0120");
                this.set_titletext("재무제표출력설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MODLXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FSFM_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"VIEW_ITCD\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"VIEW_ITNM\" type=\"string\" size=\"500\" prop=\"\"/><Column id=\"VIEW_ITLV\" type=\"string\" size=\"1\" prop=\"\"/><Column id=\"VIEW_ITCY\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"DRCR_GUBN\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"LOCI_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"SORT_ORDR\" type=\"bigdecimal\" size=\"5\" prop=\"\"/><Column id=\"PRTZ_YSNO\" type=\"string\" size=\"1\" prop=\"\"/><Column id=\"BOLD_YSNO\" type=\"string\" size=\"1\" prop=\"\"/><Column id=\"ZPRT_YSNO\" type=\"string\" size=\"1\" prop=\"\"/><Column id=\"REMK_NOTE\" type=\"string\" size=\"500\" prop=\"\"/><Column id=\"OPFM_ITCD\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"OPFM_ITNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPST_CODE\" type=\"string\" size=\"10\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MODLAC", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FSFM_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"VIEW_ITCD\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"ACCT_INTL\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"500\"/><Column id=\"LOCI_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"OPST_CODE\" type=\"string\" size=\"10\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MODLIM", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"FSFM_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"VIEW_ITCD\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"OPFM_ITCD\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"OPFM_ITNM\" type=\"STRING\" size=\"200\"/><Column id=\"LOCI_CODE\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"OPST_CODE\" type=\"string\" size=\"10\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPOP_ACCTRTN", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_CHEK\" type=\"INT\" size=\"1\"/><Column id=\"ACCT_INTL\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"ACCT_NAME\" type=\"string\" size=\"200\" prop=\"\"/><Column id=\"PRNT_LEVL\" type=\"bigdecimal\" size=\"1\" prop=\"\"/><Column id=\"DRCR_GUBN\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"DRCR_GBNM\" type=\"string\" size=\"200\" prop=\"\"/></ColumnInfo><Column id=\"ACCT_INTL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PRNT_LEVL\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"DRCR_GUBN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DRCR_GBNM\" type=\"string\" size=\"32\" prop=\"\"/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsVIEW_ITCY</Col><Col id=\"CODEID\">VIEW_ITCY</Col><Col id=\"HEADFLAG\"/><Col id=\"REMARK\">레벨</Col></Row><Row><Col id=\"DSNAME\">dsVIEW_ITLV</Col><Col id=\"CODEID\">VIEW_ITLV</Col><Col id=\"HEADFLAG\"/><Col id=\"REMARK\">항목구분</Col></Row><Row><Col id=\"CODEID\">DRCR_GUBN</Col><Col id=\"REMARK\">차대구분</Col><Col id=\"DSNAME\">dsDRCR_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">LOCI_CODE</Col><Col id=\"REMARK\">표시위치</Col><Col id=\"DSNAME\">dsLOCI_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">OPST_CODE</Col><Col id=\"REMARK\">계산구분</Col><Col id=\"DSNAME\">dsOPST_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsOPST_CODE2</Col><Col id=\"CODEID\">OPST_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">계산구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_MODLXM", "absolute", "8", "128", null, "395", "25", null, this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_MODLXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"250\" band=\"left\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"항목코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"항목(그룹)명\"/><Cell col=\"2\" text=\"항목트리\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"레벨\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"항목구분\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"차대구분\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"표시위치\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"정렬순서\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"음수괄호\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"굵은글꼴\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"0값출력\"/><Cell col=\"11\" text=\"계산양식항목\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"계산양식항목명\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"계산양식구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:VIEW_ITCD\" editlimit=\"0\" editlengthunit=\"utf16\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align: left;\" text=\"bind:VIEW_ITNM\" editlimit=\"0\" treelevel=\"bind:VIEW_ITLV\"/><Cell col=\"2\" displaytype=\"tree\" edittype=\"tree\" style=\"align:left;\" expr=\"expr:comp.parent.fnc_Trim(VIEW_ITNM)\" treestartlevel=\"1\" treelevel=\"bind:VIEW_ITLV\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:VIEW_ITLV\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:VIEW_ITCY\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:DRCR_GUBN\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:LOCI_CODE\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SORT_ORDR\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PRTZ_YSNO\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BOLD_YSNO\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ZPRT_YSNO\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:OPFM_ITCD\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:OPFM_ITNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:OPST_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MODLAC", "absolute", "8", "558", "515", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MODLAC");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계정명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계산구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"표시위치\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align: left;\" text=\"bind:ACCT_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:OPST_CODE\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:LOCI_CODE\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowAdd2", "absolute", null, "533", "62", "21", "90", null, this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDel2", "absolute", null, "533", "62", "21", "25", null, this);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy", "absolute", "8", "35", "122", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("재무제표양식복사");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "29", "71", "104", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("재무제표양식");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFSFM_CODE", "absolute", "123", "71", "56", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpFSFM_CODE", "absolute", "181", "71", "21", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFSFM_NAME", "absolute", "204", "71", "156", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MODLIM", "absolute", "553", "558", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsTA_MODLIM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"항목코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"항목(그룹)명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계산구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"표시위치\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: center;\" text=\"bind:OPFM_ITCD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align: left;\" text=\"bind:OPFM_ITNM\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:OPST_CODE\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:LOCI_CODE\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDel1", "absolute", "461", "533", "62", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowAdd1", "absolute", "396", "533", "62", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "99", "537", "192", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "644", "537", "176", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "0.67%", "537", null, "21", "93.18%", null, this);
            obj.set_taborder("18");
            obj.set_text("연결계정");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", "553", "537", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("연결항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("재무제표출력설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 > 회계관리 > 기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "789", "523", "80", "35", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "87", "541", "10", "13", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "632", "541", "10", "13", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1061", "523", "80", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "523", "581", "30", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "115", "61", "8", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRVIEW_ITNM", "absolute", "478", "71", "196", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "360", "61", "40", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "390", "71", "86", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("항목코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "703", "71", "44", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("레벨");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRVIEW_ITLV", "absolute", "747", "71", "47", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.set_maxlength("1");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popCopy", "absolute", "8", "731", "538", "115", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", null, null, "9", "42", this.popCopy);
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemBoxOut");
            this.popCopy.addChild(obj.name, obj);
            obj = new Button("btnCopy", "absolute", null, null, "74", "24", "86", "10", this.popCopy);
            obj.set_taborder("2");
            obj.set_text("복사처리");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopy.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", null, null, "74", "24", "9", "10", this.popCopy);
            obj.set_taborder("3");
            obj.set_text("복사취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, null, "40", "10", "84", "1", this.popCopy);
            obj.set_taborder("38");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, null, "40", "10", "76", "33", this.popCopy);
            obj.set_taborder("39");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "130", "64", "40", "8", null, null, this.popCopy);
            obj.set_taborder("40");
            obj.set_text("H8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "29", "18", "120", "21", null, null, this.popCopy);
            obj.set_taborder("41");
            obj.set_text("기준재무제표양식");
            obj.set_cssclass("styFormSearchCapBe");
            this.popCopy.addChild(obj.name, obj);
            obj = new Edit("edtCOPYFSFM_COD1", "absolute", "147", "18", "56", "21", null, null, this.popCopy);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("imgHelpCOPYFSFM_COD1", "absolute", "205", "18", "21", "21", null, null, this.popCopy);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopup");
            this.popCopy.addChild(obj.name, obj);
            obj = new Edit("edtCOPYFSFM_NAM1", "absolute", "228", "18", "140", "21", null, null, this.popCopy);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "375", "18", "152", "21", null, null, this.popCopy);
            obj.set_taborder("45");
            obj.set_text("의 재무제표양식 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "29", "44", "120", "21", null, null, this.popCopy);
            obj.set_taborder("46");
            obj.set_text("대상재무제표양식");
            obj.set_cssclass("styFormSearchCapBe");
            this.popCopy.addChild(obj.name, obj);
            obj = new Edit("edtCOPYFSFM_COD2", "absolute", "147", "44", "56", "21", null, null, this.popCopy);
            obj.set_taborder("47");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("imgHelpCOPYFSFM_COD2", "absolute", "205", "44", "21", "21", null, null, this.popCopy);
            obj.set_taborder("48");
            obj.set_cssclass("sytHelpPopup");
            this.popCopy.addChild(obj.name, obj);
            obj = new Edit("edtCOPYFSFM_NAM2", "absolute", "228", "44", "140", "21", null, null, this.popCopy);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "375", "44", "152", "21", null, null, this.popCopy);
            obj.set_taborder("50");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popCopy.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "132", "731", "40", "10", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 538, 115, this.popCopy,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popCopy.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("재무제표출력설정");
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
        this.addIncludeScript("FAMA0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0120 재무제표출력설정
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.19		권미영		Initial Created.
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
        this.sBUTTONLIST 	= "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FAMA0120"; //해당 Form에서 사용 할 Package 명
        this.aKeyValue 		= new Array(2);

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
        	this.edtSHRFSFM_NAME.setFocus();
        	
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
        	
        	this.fnc_DatasetClear("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_MODLXM=dsTA_MODLXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MODLXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	if (this.fnc_Length(this.edtSHRFSFM_CODE.value) < 1) {
        		this.edtSHRFSFM_NAME.setFocus();
        		return this.fnc_Message("HRM027", "재무제표양식");
        	}

        	var iRow = this.dsTA_MODLXM.insertRow(this.dsTA_MODLXM.rowposition + 1);
        	if (iRow != this.dsTA_MODLXM.rowposition) this.dsTA_MODLXM.deleteRow(iRow);
        	
        	// 항목코드 none 처리
        	this.grdTA_MODLXM.setCellProperty( "Body", this.fnc_GridColumnIndex(this.grdTA_MODLXM, "VIEW_ITCD"), "edittype", "normal");
        	
        // 	this.dsTA_MODLXM.setColumn(iRow, "VIEW_ITLV", 1);
        // 	this.dsTA_MODLXM.setColumn(iRow, "VIEW_ITCY", "EXPR");
        // 	this.dsTA_MODLXM.setColumn(iRow, "DRCR_GUBN", "C");
         	this.dsTA_MODLXM.setColumn(iRow, "LOCI_CODE", "LT");
         	this.dsTA_MODLXM.setColumn(iRow, "PRTZ_YSNO", 0);
         	this.dsTA_MODLXM.setColumn(iRow, "BOLD_YSNO", 0);
         	this.dsTA_MODLXM.setColumn(iRow, "ZPRT_YSNO", 0);
        	
        	this.dsTA_MODLXM.setColumn(iRow, "FSFM_CODE", this.edtSHRFSFM_CODE.value);
        	
        	this.fnc_GridSetCellFocus(this.grdTA_MODLXM, "VIEW_ITCD");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTA_MODLXM.deleteRow(this.dsTA_MODLXM.rowposition);
        	}
        	
        	this.grdTA_MODLXM.setFocus();

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	// 작업내역 초기화
        	this.fnc_DataSetCancel("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM");
        	this.grdTA_MODLXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, "FSFM_CODE");
        	this.aKeyValue[1] = this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, "VIEW_ITCD");

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_MODLXM=dsTA_MODLXM:U dsTA_MODLAC=dsTA_MODLAC:U dsTA_MODLIM=dsTA_MODLIM:U";
        	var sOutDataSet = "dsTA_MODLXM=dsTA_MODLXM dsTA_MODLAC=dsTA_MODLAC dsTA_MODLIM=dsTA_MODLIM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MODLXM.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM", this);

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

        	if (this.fnc_DatasetChangeCheck("dsTA_MODLAC,dsTA_MODLIM")) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRFSFM_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "재무제표양식", this.edtSHRFSFM_NAME);
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText = "항목 (" + this.fnc_Trim(this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, "VIEW_ITNM")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 자료조회조건 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_MODLXM.getRowCount(); i++) {

        		if (this.dsTA_MODLXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "VIEW_ITCD"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "항목코드", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "VIEW_ITCD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "VIEW_ITNM"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "항목(그룹)명", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "VIEW_ITNM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "VIEW_ITLV"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "레벨", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "VIEW_ITLV");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "VIEW_ITCY"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "항목구분", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "VIEW_ITCY");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "DRCR_GUBN"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "차대구분", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "DRCR_GUBN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "LOCI_CODE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "표시위치", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "LOCI_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "SORT_ORDR"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "정렬순서", this.dsTA_MODLXM, i, this.grdTA_MODLXM, "SORT_ORDR");
        		}
        		
        		// 중복 항목코드 체크
        		var sView_Itcd = this.fnc_Trim(this.dsTA_MODLXM.getColumn(i, "VIEW_ITCD"));
        		var iDupl_Cont = this.dsTA_MODLXM.getCaseCount("VIEW_ITCD == '" + sView_Itcd + "'");
        		
        		if (iDupl_Cont > 1) {
        			this.fnc_Message("TMM077", "항목코드");
        			this.fnc_GridSetCellFocus(this.grdTA_MODLXM, "VIEW_ITCD");
        			return false;
        		}
        		
        	}

        	// 자료조회조건 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_MODLAC.getRowCount(); i++) {
        				
        		if (this.dsTA_MODLAC.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLAC.getColumn(i, "ACCT_INTL"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "계정코드", this.dsTA_MODLAC, i, this.grdTA_MODLAC, "ACCT_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLAC.getColumn(i, "OPST_CODE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "계산구분", this.dsTA_MODLAC, i, this.grdTA_MODLAC, "OPST_CODE");
        		}
        		
        		// 중복 계정과목 체크
        		var sAcct_Intl = this.fnc_Trim(this.dsTA_MODLAC.getColumn(i, "ACCT_INTL"));
        		var iDupl_Cont = this.dsTA_MODLAC.getCaseCount("ACCT_INTL == '" + sAcct_Intl + "'");
        		
        		if (iDupl_Cont > 1) {
        			this.fnc_Message("TMM077", "계정과목");
        			this.fnc_GridSetCellFocus(this.dsTA_MODLAC, "ACCT_NAME");
        			return false;
        		}
        		
        	}

        	// 자료조회조건 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_MODLIM.getRowCount(); i++) {
        				
        		if (this.dsTA_MODLIM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLIM.getColumn(i, "OPFM_ITCD"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "항목코드", this.dsTA_MODLIM, i, this.grdTA_MODLIM, "OPFM_ITNM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLIM.getColumn(i, "OPST_CODE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "계산구분", this.dsTA_MODLIM, i, this.grdTA_MODLIM, "OPST_CODE");
        		}
        		
        		// 중복 항목코드 체크
        		var sOpfm_Itcd = this.fnc_Trim(this.dsTA_MODLIM.getColumn(i, "OPFM_ITCD"));
        		var iDupl_Cont = this.dsTA_MODLIM.getCaseCount("OPFM_ITCD == '" + sOpfm_Itcd + "'");
        		
        		if (iDupl_Cont > 1) {
        			this.fnc_Message("TMM077", "항목코드");
        			this.fnc_GridSetCellFocus(this.dsTA_MODLIM, "OPFM_ITNM");
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
        		sReturnString += " FSFM_CODE=" 	+ this.fnc_Quote(this.edtSHRFSFM_CODE.value);
        		sReturnString += " VIEW_ITNM=" 	+ this.fnc_Quote(this.edtSHRVIEW_ITNM.value);
        		sReturnString += " VIEW_ITLV=" 	+ this.fnc_Quote(this.edtSHRVIEW_ITLV.value);
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FSFM_CODE=" 	+ this.fnc_Quote(this.edtSHRFSFM_CODE.value);
        		sReturnString += " VIEW_ITCD=" 	+ this.fnc_Quote(this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, 'VIEW_ITCD'));
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FSFM_COD1=" 	+ this.fnc_Quote(this.popCopy.edtCOPYFSFM_COD1.value);
        		sReturnString += " FSFM_COD2=" 	+ this.fnc_Quote(this.popCopy.edtCOPYFSFM_COD2.value);

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
        	
        		this.fnc_Information(this.stInformation, this.dsTA_MODLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_MODLXM.rowcount);		

        		var iRow = this.dsTA_MODLXM.findRowExpr("FSFM_CODE=='" + this.aKeyValue[0] + "' && VIEW_ITCD=='" + this.aKeyValue[1] + "'");
         		if (iRow < 0) iRow = 0;
        		
         		this.grdTA_MODLXM.selectRow(iRow);
         		this.dsTA_MODLXM.set_rowposition(0);
         		this.dsTA_MODLXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTA_MODLAC.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Information(this.stInformation2, this.dsTA_MODLIM.rowcount, "SHR"); //조회 결과 Display
        	
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("TMM103"); //정상 종료 Message

        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC00") {

         		this.fnc_Message("TMM103"); //정상 종료 Message
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdTA_MODLXM,dsVIEW_ITCY,VIEW_ITCY";
        		arrParam[1] = "GRID,grdTA_MODLXM,dsVIEW_ITLV,VIEW_ITLV";
        		arrParam[2] = "GRID,grdTA_MODLXM,dsDRCR_GUBN,DRCR_GUBN";
        		arrParam[3] = "GRID,grdTA_MODLXM,dsLOCI_CODE,LOCI_CODE";
        		arrParam[4] = "GRID,grdTA_MODLXM,dsOPST_CODE2,OPST_CODE";
        		arrParam[5] = "GRID,grdTA_MODLAC,dsOPST_CODE,OPST_CODE";
        		arrParam[6] = "GRID,grdTA_MODLAC,dsLOCI_CODE,LOCI_CODE";
        		arrParam[7] = "GRID,grdTA_MODLIM,dsOPST_CODE,OPST_CODE";
        		arrParam[8] = "GRID,grdTA_MODLIM,dsLOCI_CODE,LOCI_CODE";

        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 재무제표양식조회
        	if ((obj.name == "imgHelpFSFM_CODE") || (obj.name == "edtSHRFSFM_NAME")) {
        		
        		arrParam[0] = "FAM0120";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRFSFM_NAME.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRFSFM_NAME";
        		arrParam[5] = "edtSHRFSFM_CODE,edtSHRFSFM_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_PopupCallback";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpCOPYFSFM_COD1") || (obj.name == "edtCOPYFSFM_NAM1")) {
        		
        		arrParam[0] = "FAM0120";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popCopy.edtCOPYFSFM_NAM1.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "popCopy.edtCOPYFSFM_NAM1";
        		arrParam[5] = "popCopy.edtCOPYFSFM_COD1,popCopy.edtCOPYFSFM_NAM1";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_CommPopupPost";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpCOPYFSFM_COD2") || (obj.name == "edtCOPYFSFM_NAM2")) {
        		
        		arrParam[0] = "FAM0120";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popCopy.edtCOPYFSFM_NAM2.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "popCopy.edtCOPYFSFM_NAM2";
        		arrParam[5] = "popCopy.edtCOPYFSFM_COD2,popCopy.edtCOPYFSFM_NAM2";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_CommPopupPost";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdTA_MODLXM") {
        		
        		var objDs 	= this.objects[obj.binddataset];
        		var iRow	= objDs.rowposition;
        		
        		// 연결항목조회
        		if (sColumnID == "OPFM_ITNM" || this.fnc_getGridHelpColName(obj, sFromDs) == "OPFM_ITNM") {
        			
        			var iXmRow = this.dsTA_MODLXM.rowposition;
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iXmRow, "VIEW_ITCD"))) < 1)	{
        				return this.fnc_CheckPostAction("TMM072", "항목코드", this.dsTA_MODLXM, iXmRow, this.grdTA_MODLXM, "VIEW_ITCD");
        			}
        			if (this.grdTA_MODLXM.getCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLXM, "VIEW_ITCD"), "edittype") != "none") {
        				return this.fnc_CheckPostAction("TMM015", "지정", this.dsTA_MODLXM, iXmRow, this.grdTA_MODLXM, "VIEW_ITCD");
        			}
        			
        			arrParam[0] = "FAM0121";
        			arrParam[1] = this.edtSHRFSFM_CODE.value;// + "," + this.dsTA_MODLXM.getColumn(iXmRow, "VIEW_ITLV");
        			arrParam[2] = "OPFM_ITNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTA_MODLXM";
        			arrParam[5] = "OPFM_ITCD,OPFM_ITNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        		
        	} else if (obj.name == "grdTA_MODLAC") {
        		
        		var objDs 	= this.objects[obj.binddataset];
        		var iRow	= objDs.rowposition;
        		
        		obj.updateToDataset();
        		
        		// 연결계정조회
        		if (sColumnID == "ACCT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_NAME") {
        			
        			var sName 		= "FAMA0110P01";
        			var sFormURL 	= "fam::FAMA0110P01.xfdl";
        			var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        				sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        				sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        				sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        				sOpenStyle += ",width=750";       //현재 반응 없음
        				sOpenStyle += ",height=500";      //현재 반응 없음
        				sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        				sOpenStyle += ",titletext=연결계정선택조회";      //Form Title여부
        				sOpenStyle += ",status=false";      //Form Title Bar Visible 여부
        				sOpenStyle += ",resizable=true";      //Form Title Bar Visible 여부
        			
        			var objArgumentList = {

        				 sACCT_INTL	: this.fnc_Trim(objDs.getColumn(iRow, "ACCT_NAME"))
        				,sFSFM_CODE	: this.fnc_Trim(objDs.getColumn(iRow, "FSFM_CODE"))
        				,sVIEW_ITCD	: this.fnc_Trim(objDs.getColumn(iRow, "VIEW_ITCD"))
        				,""			: this.dsPOP_ACCTRTN

        			};
        			
        			this.fnc_DatasetClear("dsPOP_ACCTRTN");
        			
        			this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        			
        		}
        		
        	} else if (obj.name == "grdTA_MODLIM") {
        		
        		var objDs 	= this.objects[obj.binddataset];
        		var iRow	= objDs.rowposition;
        		
        		// 연결항목조회
        		if (sColumnID == "OPFM_ITNM" || this.fnc_getGridHelpColName(obj, sFromDs) == "OPFM_ITNM") {
        			
        			var iXmRow = this.dsTA_MODLXM.rowposition;
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iXmRow, "VIEW_ITCD"))) < 1)	{
        				return this.fnc_CheckPostAction("TMM072", "항목코드", this.dsTA_MODLXM, iXmRow, this.grdTA_MODLXM, "VIEW_ITCD");
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iXmRow, "VIEW_ITLV"))) < 1)	{
        				return this.fnc_CheckPostAction("TMM072", "레벨", this.dsTA_MODLXM, iXmRow, this.grdTA_MODLXM, "VIEW_ITLV");
        			}
        			
        			//레벨 1인 경우 레벨 1의 자료를 참조할 수 있도록 허용.
        			var nVIEW_ITLV = this.dsTA_MODLXM.getColumn(iXmRow, "VIEW_ITLV");
        			if (nVIEW_ITLV == 1) nVIEW_ITLV = 0;
        			
        			arrParam[0] = "FAM0121";
        			arrParam[1] = this.edtSHRFSFM_CODE.value + "," + nVIEW_ITLV;
        			arrParam[2] = "OPFM_ITNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTA_MODLIM";
        			arrParam[5] = "OPFM_ITCD,OPFM_ITNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        		
        	}
        	
        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
        	
        	var iCnt = -1;
        		
        	if (sPopupId == "FAMA0110P01") {

        		if (this.dsPOP_ACCTRTN.rowcount < 1) return;
        		
        		this.dsTA_MODLAC.set_enableevent(false);
        		
        		for (var i = 0; i < this.dsPOP_ACCTRTN.rowcount; i++) {
        			
        			// 리턴받은 데이터
        			var sAcct_Intl = this.dsPOP_ACCTRTN.getColumn(i, "ACCT_INTL")
        			var sAcct_Name = this.dsPOP_ACCTRTN.getColumn(i, "ACCT_NAME")
        			
        			// 중복 계정코드 체크
        			var iDupl_Cont = this.dsTA_MODLAC.getCaseCount("ACCT_INTL == '" + sAcct_Intl + "'");		
        			if (iDupl_Cont > 0) continue;
        			
        			iCnt++;
        			
        			var iRow;
        			if (iCnt == 0) {
        			
        				iRow = this.dsTA_MODLAC.rowposition;

        			} else {
        			
        				iRow = this.dsTA_MODLAC.addRow();
        				
        				// 기초값 셋팅
        				this.dsTA_MODLAC.setColumn(iRow, "FSFM_CODE", this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, "FSFM_CODE"));
        				this.dsTA_MODLAC.setColumn(iRow, "VIEW_ITCD", this.dsTA_MODLXM.getColumn(this.dsTA_MODLXM.rowposition, "VIEW_ITCD"));

        				this.dsTA_MODLAC.setColumn(iRow, "OPST_CODE", "PLUS");
        				this.dsTA_MODLAC.setColumn(iRow, "LOCI_CODE", "LT");
        				
        			}

        			// 리턴값 셋팅
        			this.dsTA_MODLAC.setColumn(iRow, "ACCT_INTL", sAcct_Intl);
        			this.dsTA_MODLAC.setColumn(iRow, "ACCT_NAME", sAcct_Name);

        		}
        		
        		this.dsTA_MODLAC.set_enableevent(true);
        		
        		this.grdTA_MODLAC.moveToNextCell();
        	
        	}

        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_PopupCallback = function(rtnArray) {
        	
        	if (this.fnc_Length(this.fnc_Trim(rtnArray[0])) > 0) {
        		this.fnc_DatasetClear("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM");
        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------------+
         |  연결계정, 연결항목 추가  |
         +---------------------------*/
        this.btn_RowAdd_OnClick = function (obj,e) {
        	
        	if (this.dsTA_MODLXM.rowcount < 1) {
        		this.fnc_Message("TMM141");
        		this.edtSHRFSFM_CODE.setFocus();
        		return;
        	}
        	
        	if (this.dsTA_MODLXM.rowposition < 0) {
        		this.fnc_Message("TMM010");
        		this.grdTA_MODLXM.setFocus();
        		return;
        	}
        	
        	// 항목코드 먼저 입력되어야 한다.
        	var iRow = this.dsTA_MODLXM.rowposition;
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iRow, "VIEW_ITCD"))) < 1)	{
        		return this.fnc_CheckPostAction("TMM072", "항목코드", this.dsTA_MODLXM, iRow, this.grdTA_MODLXM, "VIEW_ITCD");
        	}
        	
        	if (obj.name == "btn_RowAdd1") {
        		
        		var iRow1 = this.dsTA_MODLAC.addRow();
        		
        		// 기초값 셋팅
        		this.dsTA_MODLAC.setColumn(iRow1, "FSFM_CODE", this.dsTA_MODLXM.getColumn(iRow, "FSFM_CODE"));
        		this.dsTA_MODLAC.setColumn(iRow1, "VIEW_ITCD", this.dsTA_MODLXM.getColumn(iRow, "VIEW_ITCD"));

        		this.dsTA_MODLAC.setColumn(iRow1, "OPST_CODE", "PLUS");
        		this.dsTA_MODLAC.setColumn(iRow1, "LOCI_CODE", "LT");
        		
        		this.fnc_GridSetCellFocus(this.grdTA_MODLAC, "ACCT_NAME");
        		
        		// 팝업 호출
        		this.fn_HelpDialoge(this.grdTA_MODLAC, "", "", "ACCT_NAME");

        	} else if (obj.name == "btn_RowAdd2") {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iRow, "VIEW_ITLV"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "레벨", this.dsTA_MODLXM, iRow, this.grdTA_MODLXM, "VIEW_ITLV");
        		}
        		
        		var iRow2 = this.dsTA_MODLIM.addRow();
        		
        		// 기초값 셋팅
        		this.dsTA_MODLIM.setColumn(iRow2, "FSFM_CODE", this.dsTA_MODLXM.getColumn(iRow, "FSFM_CODE"));
        		this.dsTA_MODLIM.setColumn(iRow2, "VIEW_ITCD", this.dsTA_MODLXM.getColumn(iRow, "VIEW_ITCD"));

        		this.dsTA_MODLIM.setColumn(iRow2, "OPST_CODE", "PLUS");
        		this.dsTA_MODLIM.setColumn(iRow2, "LOCI_CODE", "LT");
        		
        		this.fnc_GridSetCellFocus(this.grdTA_MODLIM, "OPFM_ITNM");
        	
        		// 팝업 호출
        		this.fn_HelpDialoge(this.grdTA_MODLIM, "", "", "OPFM_ITNM");

        	}
        	
        	// 항목코드 none 처리
        	this.grdTA_MODLXM.setCellProperty( "Body", this.fnc_GridColumnIndex(this.grdTA_MODLXM, "VIEW_ITCD"), "edittype", "none");
        	
        }

        /*---------------------------+
         |  연결계정, 연결항목 삭제  |
         +---------------------------*/
        this.btn_RowDel_OnClick = function (obj,e) {
        	
        	if (obj.name == "btn_RowDel1") {
        		
        		if (this.fn_DeleteCheck1()) this.dsTA_MODLAC.deleteMultiRows(this.grdTA_MODLAC.getSelectedDatasetRows());
        		this.grdTA_MODLAC.setFocus();
        		
        	} else if (obj.name == "btn_RowDel2") {
        	
        		if (this.fn_DeleteCheck2()) this.dsTA_MODLIM.deleteMultiRows(this.grdTA_MODLIM.getSelectedDatasetRows());
        		this.grdTA_MODLIM.setFocus();
        		
        	}

        }

        /*----------------------------+
         |  연결계정 삭제 여부 체크!  |
         +----------------------------*/
        this.fn_DeleteCheck1 = function () {
        	
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_MODLAC);
        	
        	if (iSelectRowCount > 1) {
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = '계정과목 (' + this.fnc_Trim(this.dsTA_MODLAC.getColumn(this.dsTA_MODLAC.rowposition, "ACCT_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*----------------------------+
         |  연결항목 삭제 여부 체크!  |
         +----------------------------*/
        this.fn_DeleteCheck2 = function () {
        	
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_MODLIM);
        	
        	if (iSelectRowCount > 1) {
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = '연결항목(그룹) (' + this.fnc_Trim(this.dsTA_MODLIM.getColumn(this.dsTA_MODLIM.rowposition, "OPFM_ITNM")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-------------------------------+
         |  헤더 선택시 변경데이터 검사  |
         +------------------------------*/
        this.dsTM_MODLXM_canrowposchange = function(obj,e) {

        	// 하위 레벨에 변경사항 있을 시 초기화 경고
        	if (this.fnc_DatasetChangeCheck("dsTA_MODLAC") || this.fnc_DatasetChangeCheck("dsTA_MODLIM") ) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        }

        /*------------------------------+
         |  헤더 선택시 상세 내용 검색  |
         +------------------------------*/
        this.fn_KeyFieldDisible_Head = function(obj,e) {

        	if (this.dsTA_MODLXM.getRowCount() < 1) return;
        	if (e.newrow == e.oldrow) return;

        	// edittype 처리
        	if (this.fnc_ToUpper(this.dsTA_MODLXM.getRowType(this.dsTA_MODLXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTA_MODLXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLXM, "VIEW_ITCD"), "edittype", "normal");
        	} else {
        		this.grdTA_MODLXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLXM, "VIEW_ITCD"), "edittype", "none");
        	}

        	// 연결계정, 연결항목 조회
        	this.fnc_DatasetClear("dsTA_MODLAC,dsTA_MODLIM");
        	
        	if (this.fnc_ToUpper(this.dsTA_MODLXM.getRowType(this.dsTA_MODLXM.rowposition)) == Dataset.ROWTYPE_INSERT) return;
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MODLAC=dsTA_MODLAC dsTA_MODLIM=dsTA_MODLIM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*-----------------------------------+
         |  세부 선택시 KEY값 입력여부 지정  |
         +-----------------------------------*/
        this.fn_KeyFieldDisible_SUB = function(obj,e) {

        	if (obj.name == "dsTA_MODLAC") {
        		
        		// edittype 처리
        		if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        			this.grdTA_MODLAC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLAC, "ACCT_NAME"), "edittype", "normal");
        		} else {
        			this.grdTA_MODLAC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLAC, "ACCT_NAME"), "edittype", "none");
        		}
        		
        	} else if (obj.name == "dsTA_MODLIM") {
        	
        		// edittype 처리
        		if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        			this.grdTA_MODLIM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLIM, "OPFM_ITNM"), "edittype", "normal");
        		} else {
        			this.grdTA_MODLIM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MODLIM, "OPFM_ITNM"), "edittype", "none");
        		}
        		
        	}
        	
        }

        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.dsTA_MODLXM_oncolumnchanged = function(obj,e) {
        	
        	if (e.columnid == "OPFM_ITNM") {

        		this.fn_HelpDialoge(this.grdTA_MODLXM, "YES", e.oldvalue, e.columnid);
        		
        	}
        	
        }

        this.dsTA_MODLXM_cancolumnchange = function(obj,e) {
        	
        	if (e.columnid == "OPST_CODE") {
        		
        		if (this.fnc_Length(this.fnc_Trim(e.newvalue)) < 1) return;
        		
        		var iXmRow = this.dsTA_MODLXM.rowposition;
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MODLXM.getColumn(iXmRow, "OPFM_ITCD"))) < 1)	{
        			
        			this.fnc_CheckPostAction("TMM072", "계산양식항목", this.dsTA_MODLXM, iXmRow, this.grdTA_MODLXM, "OPFM_ITNM");
        			return false;
        		}
        		
        	}
        }

        
        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.dsTA_MODLIM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "OPFM_ITNM") {

        		this.fn_HelpDialoge(this.grdTA_MODLIM, "YES", e.oldvalue, e.columnid);

        	}

        }

        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.dsTA_MODLAC_oncolumnchanged = function(obj,e) {
        	
        	if (e.columnid == "ACCT_NAME") {
        		
        		if (this.fnc_Length(this.fnc_Trim(e.newvalue)) < 1) {
        			this._DatasetDefaultValue(obj.name, obj.rowposition, "ACCT_INTL,ACCT_NAME", "");	
        		} else {
        			this.fn_HelpDialoge(this.grdTA_MODLAC, "YES", e.oldvalue, e.columnid);
        		}
        		
        	}
        	
        }

        /*---------------------------------------+
         |  조회조건 재무제표양식명 텍스트 변경  |
         +---------------------------------------*/
        this.edtSHRFSFM_NAME_ontextchanged = function(obj,e) {
        	
        	if (e.pretext == e.posttext) return;
        	this.fnc_DatasetClear("dsTA_MODLXM,dsTA_MODLAC,dsTA_MODLIM");
        	
        }

        /*--------------------+
         |  재무제표양식복사  |
         +--------------------*/
        this.btnCopy_onclick = function(obj,e) {

        	this.popCopy.trackPopupByComponent(this.btnCopy, 0, 0);
            
        }

        this.fn_CommPopupPost = function(sResponse) {
        	
        	if (!this.popCopy.isPopup()) this.btnCopy_onclick();

        }
        /*-----------------------------+
         |  재무제표양식복사 복사처리  |
         +-----------------------------*/
        this.popCopy_btnCopy_onclick = function(obj,e) {
        	
        	if (!this.fn_CopyItemCheck()) return;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  재무제표양식복사 취소처리  |
         +-----------------------------*/
        this.popCopy_btnCancel_onclick = function(obj,e) {
        	
            this.popCopy.edtCOPYFSFM_COD1.set_value("");
            this.popCopy.edtCOPYFSFM_NAM1.set_value("");
            this.popCopy.edtCOPYFSFM_COD2.set_value("");
            this.popCopy.edtCOPYFSFM_NAM2.set_value("");
            this.popCopy.closePopup();
            
        }

        /*------------------------------------+
         |  재무제표양식복사 필수 조건 체크!  |
         +------------------------------------*/
        this.fn_CopyItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.popCopy.edtCOPYFSFM_COD1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준재무제표양식", this.popCopy.edtCOPYFSFM_NAM1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.popCopy.edtCOPYFSFM_COD2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상재무제표양식", this.popCopy.edtCOPYFSFM_NAM2);
        	}
        	
        	return this.fnc_Message("TMM061", "대상이 되는 재무제표양식 데이터는 초기화됩니다. 복사");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_MODLXM.addEventHandler("canrowposchange", this.dsTM_MODLXM_canrowposchange, this);
            this.dsTA_MODLXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTA_MODLXM.addEventHandler("oncolumnchanged", this.dsTA_MODLXM_oncolumnchanged, this);
            this.dsTA_MODLXM.addEventHandler("cancolumnchange", this.dsTA_MODLXM_cancolumnchange, this);
            this.dsTA_MODLAC.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_SUB, this);
            this.dsTA_MODLAC.addEventHandler("oncolumnchanged", this.dsTA_MODLAC_oncolumnchanged, this);
            this.dsTA_MODLIM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_SUB, this);
            this.dsTA_MODLIM.addEventHandler("oncolumnchanged", this.dsTA_MODLIM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_MODLXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTA_MODLAC.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_RowAdd2.addEventHandler("onclick", this.btn_RowAdd_OnClick, this);
            this.btn_RowDel2.addEventHandler("onclick", this.btn_RowDel_OnClick, this);
            this.btnCopy.addEventHandler("onclick", this.btnCopy_onclick, this);
            this.imgHelpFSFM_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRFSFM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRFSFM_NAME.addEventHandler("ontextchanged", this.edtSHRFSFM_NAME_ontextchanged, this);
            this.grdTA_MODLIM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_RowDel1.addEventHandler("onclick", this.btn_RowDel_OnClick, this);
            this.btn_RowAdd1.addEventHandler("onclick", this.btn_RowAdd_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popCopy.btnCopy.addEventHandler("onclick", this.popCopy_btnCopy_onclick, this);
            this.popCopy.btnCancel.addEventHandler("onclick", this.popCopy_btnCancel_onclick, this);
            this.popCopy.imgHelpCOPYFSFM_COD1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popCopy.edtCOPYFSFM_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popCopy.edtCOPYFSFM_NAM1.addEventHandler("ontextchanged", this.edtSHRFSFM_NAME_ontextchanged, this);
            this.popCopy.imgHelpCOPYFSFM_COD2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popCopy.edtCOPYFSFM_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popCopy.edtCOPYFSFM_NAM2.addEventHandler("ontextchanged", this.edtSHRFSFM_NAME_ontextchanged, this);

        };

        this.loadIncludeScript("FAMA0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
