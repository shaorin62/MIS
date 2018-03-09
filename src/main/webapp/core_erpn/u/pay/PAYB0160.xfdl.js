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
                this.set_name("PAYB0160");
                this.set_titletext("급여조정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PAYSET", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDI_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FEND_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">AJDI_CODE</Col><Col id=\"DSNAME\">dsAJDI_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYSET_TEMP", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDI_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FEND_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_YMTH", "absolute", "252", "74", "58", "22", null, null, this);
            obj.set_taborder("55");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_CODE", "absolute", "217", "71", "118", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_CODE", "absolute", "998", "71", "97", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "77", "21", null, null, this);
            obj.set_enable("true");
            obj.set_mask("####-##-##");
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "162", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "185", "71", "130", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "655", "71", "65", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "722", "71", "22", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "745", "71", "111", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "613", "71", "57", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "885", "71", "112", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("지급공제항목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "343", "71", "57", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "385", "71", "64", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "451", "71", "22", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "474", "71", "111", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_NAME", "absolute", "980", "71", "97", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXPD_CODE", "absolute", "1079", "71", "22", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormUp", "absolute", "106", "35", "95", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DATA_COPY", "absolute", "204", "35", "95", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("급여조정복사");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "8", "35", "95", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("급여조정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("33");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "744", "56", "128", "4", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("47");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PAYSET", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_binddataset("dsPY_PAYSET");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"92\"/><Column size=\"99\"/><Column size=\"85\"/><Column size=\"91\"/><Column size=\"111\"/><Column size=\"84\"/><Column size=\"82\"/><Column size=\"83\"/><Column size=\"268\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"지급일\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"급여구분\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급공제항목\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"조정값\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"조정구분\"/><Cell col=\"9\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"고정종료월\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:WAGE_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editimemode=\"hangul\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:EXPD_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" combodisplayrowcount=\"15\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ADJT_RAPY\" mask=\"#,##0.##\" editlimit=\"10\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:AJDI_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:FEND_YMTH\" mask=\"expr:FEND_YMTH == '' ? '' : '####-##'\" editlimit=\"6\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1237", "128", "474", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "67", null, null, this.popINSERT);
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "338", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("2");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("3");
            obj.set_text("의 급여조정 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_FROM", "absolute", "212", "18", "118", "21", null, null, this.popINSERT);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_TO", "absolute", "212", "44", "118", "21", null, null, this.popINSERT);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_TO", "absolute", "189", "44", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_FROM", "absolute", "189", "18", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_FROM", "absolute", "110", "18", "77", "21", null, null, this.popINSERT);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_TO", "absolute", "110", "44", "77", "21", null, null, this.popINSERT);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("10");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("11");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_TO", "absolute", "169", "85", "68", "22", null, null, this.popINSERT);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_FROM", "absolute", "25", "85", "48", "22", null, null, this.popINSERT);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_YMTH_TO", "absolute", "242", "84", "58", "22", null, null, this.popINSERT);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1207", "129", "182", "8", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1207", "204", "294", "8", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1238", "148", "8", "96", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1702", "148", "8", "96", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "315", "61", "40", "41", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "585", "61", "40", "41", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "856", "61", "40", "41", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 474, 118, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여조정");
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
        this.addIncludeScript("PAYB0160.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0160.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0160 급여조정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.18  	고민주		Initial Created.
         *   2016.10.10  	황치웅		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYB0160"; 
        this.sFLAG 		  = false;

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRWAGE_NAME.setFocus();

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
        	this.fnc_DatasetClear("dsPY_PAYSET");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PAYSET=dsPY_PAYSET";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PAYSET.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_PAYSET.addRow();
        	this.dsPY_PAYSET.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);
        	this.dsPY_PAYSET.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);
        	this.dsPY_PAYSET.setColumn(iRow, "WAGE_NAME", this.edtSHRWAGE_NAME.value);	
        	this.fnc_GridSetCellFocus(this.grdPY_PAYSET, "WAGE_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		for (i = this.dsPY_PAYSET.getRowCount() - 1 ; i >= 0 ; i -- ){
        			if(this.dsPY_PAYSET.getColumn(i,"CHK") == '1'){
        				this.dsPY_PAYSET.deleteRow(i);
        			}
        		}	
        		this.grdPY_PAYSET.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_PAYSET");
        	this.grdPY_PAYSET.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_PAYSET=dsPY_PAYSET:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PAYSET.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PAYSET", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_PAYSET")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.edtSHRWAGE_NAME);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRWAGE_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급명", this.edtSHRWAGE_NAME);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_PAYSET.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}

        	var iSelectRowCount = this.dsPY_PAYSET.getCaseCount("CHK == '1'");
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "사원명:" + this.fnc_Trim(this.dsPY_PAYSET.getColumn(this.dsPY_PAYSET.rowposition, "EMPL_NAME"));
        	 	   sQuestionText += ", 수당명:" + this.fnc_Trim(this.dsPY_PAYSET.getColumn(this.dsPY_PAYSET.rowposition, "EXPD_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_PAYSET")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_PAYSET.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_PAYSET.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PAYSET.getColumn(i, "PAYX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급일", this.dsPY_PAYSET, i, this.grdPY_PAYSET, "PAYX_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PAYSET.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_PAYSET, i, this.grdPY_PAYSET, "EMPL_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PAYSET.getColumn(i, "WAGE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여구분", this.dsPY_PAYSET, i, this.grdPY_PAYSET, "WAGE_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PAYSET.getColumn(i, "EXPD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급공제항목", this.dsPY_PAYSET, i, this.grdPY_PAYSET, "EXPD_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PAYSET.getColumn(i, "AJDI_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정구분", this.dsPY_PAYSET, i, this.grdPY_PAYSET, "AJDI_CODE");
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
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EXPD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREXPD_CODE.value)); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.stInformation, this.dsPY_PAYSET.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PAYSET.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_PAYSET);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "PROC00") {
        		this.fn_KeyFieldDisible(this.dsPY_PAYSET);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM073", this.dsPY_PAYSET.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdPY_PAYSET,dsAJDI_CODE,AJDI_CODE";	
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "WAGE_NAME"), "edittype", "text");	
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "EMPL_NAME"), "edittype", "text");	
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "EXPD_NAME"), "edittype", "text");	
        		
        	} else {
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "WAGE_NAME"), "edittype", "none");
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "EMPL_NAME"), "edittype", "none");
        		this.grdPY_PAYSET.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_PAYSET, "EXPD_NAME"), "edittype", "none");
        	}

        }
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM0004"; 								
        		arrParam[1] = ""; 										
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N"; 										
        		arrParam[4] = "edtSHRDEPT_NAME"; 						
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		
        		arrParam[6] = "0,1"; 									
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) { // 급여일지 조회 팝업
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME,edtSHRWAGE_YMTH";
        		arrParam[6] = "0,1,2,6";
        		
        	} else if ((obj.name == "imgHelpSHRPAYX_DATE_FROM") || (obj.name == "edtSHRWAGE_NAME_FROM")) { // 급여일지 조회 팝업	
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popINSERT.edtSHRWAGE_NAME_FROM.value);
        		arrParam[3] = "N";
        		arrParam[4] = "popINSERT.edtSHRWAGE_NAME_FROM";
        		arrParam[5] = "popINSERT.medSHRPAYX_DATE_FROM,popINSERT.edtSHRWAGE_CODE_FROM,popINSERT.edtSHRWAGE_NAME_FROM";
        		arrParam[6] = "0,1,2";
        		arrParam[9] = "fn_CommPopupPost";
        		
        	} else if ((obj.name == "imgHelpSHRPAYX_DATE_TO") || (obj.name == "edtSHRWAGE_NAME_TO")) { // 급여일지 조회 팝업	
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popINSERT.edtSHRWAGE_NAME_TO.value);
        		arrParam[3] = "N";
        		arrParam[4] = "popINSERT.edtSHRWAGE_NAME_TO";
        		arrParam[5] = "popINSERT.medSHRPAYX_DATE_TO,popINSERT.edtSHRWAGE_CODE_TO,popINSERT.edtSHRWAGE_NAME_TO,popINSERT.edtSHRWAGE_YMTH_TO";
        		arrParam[6] = "0,1,2,6";
        		arrParam[9] = "fn_CommPopupPost2";
        		
        	} else if ((obj.name == "imgHelpSHREXPD_CODE") || (obj.name == "edtSHREXPD_NAME")) { //지급공제항목
        		arrParam[0] = "PAY0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREXPD_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREXPD_NAME";
        		arrParam[5] = "edtSHREXPD_CODE,edtSHREXPD_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if (obj.name == "grdPY_PAYSET") {
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") { //사원정보조회(Popup)
        			arrParam[0] = "HRM0001";
        			arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_PAYSET";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		} else if (sColumnID == "WAGE_NAME" ||this.fnc_getGridHelpColName(obj, sFromDs) == "WAGE_NAME" ) { // 급여일지 조회 팝업
        			arrParam[0] = "PAY0001";
        			arrParam[1] = "";
        			arrParam[2] = "WAGE_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_PAYSET";
        			arrParam[5] = "PAYX_DATE,WAGE_CODE,WAGE_NAME";
        			arrParam[6] = "0,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		} else if (sColumnID == "EXPD_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME") {//지급공제항목
        			arrParam[0] = "PAY0012";
        			arrParam[1] = "1,,";//1:사용중, 0:미사용, "":전체//A:지급항목, D:공제, "":전체//1:지급공제관리, 0:지급공제미관리, "":전체
        			arrParam[2] = "EXPD_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_PAYSET";
        			arrParam[5] = "EXPD_CODE,EXPD_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
        	
        	} 
        	
        	if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        this.fn_CommPopupPost = function(sResponse) {
        	this.sFLAG = true;
        	this.fn_DataCodeCopy();	
        	var sArrRtn = this.fnc_Split(sResponse, ",");
        	this.popINSERT.medSHRPAYX_DATE_FROM.set_value(sArrRtn[0]);
        	this.popINSERT.edtSHRWAGE_NAME_FROM.set_value(sArrRtn[2]);
        	
        }

        this.fn_CommPopupPost2 = function(sResponse) {
        	this.sFLAG = true;
        	this.fn_DataCodeCopy();	
        	var sArrRtn = this.fnc_Split(sResponse, ",");
        	this.popINSERT.medSHRPAYX_DATE_TO.set_value(sArrRtn[0]);
        	this.popINSERT.edtSHRWAGE_NAME_TO.set_value(sArrRtn[2]);
        	
        }

        this.dsPY_PAYSET_OnColumnChanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_PAYSET, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "EXPD_NAME") this.fn_HelpDialoge(this.grdPY_PAYSET, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "WAGE_NAME") this.fn_HelpDialoge(this.grdPY_PAYSET, "YES" ,e.oldvalue, e.columnid);
        	
        	// 0월 입력 또는 12월 이상은 고정값으로 변경
        	if (e.columnid == "FEND_YMTH") {
        		if ( nexacro.toNumber(this.fnc_SubStr(e.newvalue,4,2)) == 0 ){
        			obj.setColumn(e.row, e.columnid, this.fnc_SubStr(e.newvalue,0,4)+"01");
        			
        		} else if ( nexacro.toNumber(this.fnc_SubStr(e.newvalue,4,2)) > 12 ){
        			obj.setColumn(e.row, e.columnid, this.fnc_SubStr(e.newvalue,0,4)+"12");
        			
        		}
        	}
        	
        } 

        /*------------+
         |  팝업닫기  |
         +------------*/
        this.popINSERT_btnClose_OnClick = function (obj,e) {
        	this.popINSERT.medSHRPAYX_DATE_FROM.set_value("");
        	this.popINSERT.edtSHRWAGE_NAME_FROM.set_value("");
        	this.popINSERT.medSHRPAYX_DATE_TO.set_value("");
        	this.popINSERT.edtSHRWAGE_NAME_TO.set_value("");
        	this.popINSERT.closePopup();
        	this.sFLAG = false;
        	
        }

        this.fn_DataCodeCopy = function (obj,e) {
        	
        	if ( this.sFLAG == false) {
        		this.popINSERT.edtSHRWAGE_CODE_TO.set_value(this.edtSHRWAGE_CODE.value);
        		this.popINSERT.medSHRPAYX_DATE_TO.set_value(this.medSHRPAYX_DATE.value);
        		this.popINSERT.edtSHRWAGE_NAME_TO.set_value(this.edtSHRWAGE_NAME.value);
        		this.popINSERT.edtSHRWAGE_YMTH_TO.set_value(this.edtSHRWAGE_YMTH.value);
        		
        	}
        	
        	var nX 	= system.clientToScreenX(this.btn_DATA_COPY, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_DATA_COPY, this.btn_DATA_COPY.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        	
        	this.popINSERT.trackPopup(nX, nY - 2);
        }

        /*-----------------+
         |  팝업 자료생성  |
         +-----------------*/
        this.popINSERT_btnINSERT_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_TO.value)) != 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준지급일", this.popINSERT.medSHRPAYX_DATE_TO);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.value)) != 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상지급일", this.popINSERT.medSHRPAYX_DATE_FROM);
        	}
        	
        	var sFROM_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.value, 0, 4)+"년 "+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.value, 4, 2)+"월 "+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.value, 6, 2)+"일";
        	var sTO_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.value, 0, 4)+"년 "+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.value, 4, 2)+"월 "+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.value, 6, 2)+"일";
        	if (this.fnc_Message("PAY011", sTO_MESS, sFROM_MESS, sTO_MESS )){
        		this.fnc_DatasetClear("dsPY_PAYSET");

        		var sMethodName = "PROC00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPY_PAYSET=dsPY_PAYSET";
        		var sArgument   = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        			sArgument  += " action="		 + this.fnc_Quote(sMethodName);
        			sArgument  += " WAGE_CODE_FROM=" + this.fnc_Quote(this.popINSERT.edtSHRWAGE_CODE_FROM.value);
        			sArgument  += " PAYX_DATE_FROM=" + this.fnc_Quote(this.popINSERT.medSHRPAYX_DATE_FROM.value);
        			sArgument  += " WAGE_CODE_TO="   + this.fnc_Quote(this.popINSERT.edtSHRWAGE_CODE_TO.value);
        			sArgument  += " PAYX_DATE_TO="   + this.fnc_Quote(this.popINSERT.medSHRPAYX_DATE_TO.value);
        			sArgument  += " WAGE_YMTH_TO="   + this.fnc_Quote(this.popINSERT.edtSHRWAGE_YMTH_TO.value);
        			sArgument  += " WAGE_CODE="	 	 + this.fnc_Quote(this.popINSERT.edtSHRWAGE_CODE_TO.value);
        			sArgument  += " PAYX_DATE=" 	 + this.fnc_Quote(this.popINSERT.medSHRPAYX_DATE_TO.value);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		this.popINSERT_btnClose_OnClick();
        	}
        	
        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
        	}
        	
        	this.fnc_DatasetClear("dsPY_PAYSET");
        	this.fnc_ExcelUpload("dsPY_PAYSET", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        
        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	this.dsPY_PAYSET.set_enableevent(false);
        	this.dsPY_PAYSET.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		
        		var iRow = this.dsPY_PAYSET.addRow();
        		this.dsPY_PAYSET.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		this.dsPY_PAYSET.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, 0));
        		this.dsPY_PAYSET.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, 1));
        		this.dsPY_PAYSET.setColumn(iRow, "EXPD_CODE", this.objDsImportTemp.getColumn(i, 2));
        		this.dsPY_PAYSET.setColumn(iRow, "EXPD_NAME", this.objDsImportTemp.getColumn(i, 3));
        		this.dsPY_PAYSET.setColumn(iRow, "ADJT_RAPY", this.objDsImportTemp.getColumn(i, 4));
        		this.dsPY_PAYSET.setColumn(iRow, "AJDI_CODE", this.objDsImportTemp.getColumn(i, 5)); 
        		this.dsPY_PAYSET.setColumn(iRow, "FEND_YMTH", this.objDsImportTemp.getColumn(i, 7)); 
        		this.dsPY_PAYSET.setColumn(iRow, "REMK_100X", this.objDsImportTemp.getColumn(i, 8));
        		
        		this.dsPY_PAYSET.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);
        		this.dsPY_PAYSET.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);
        		this.dsPY_PAYSET.setColumn(iRow, "WAGE_NAME", this.edtSHRWAGE_NAME.value);
        		
        	}
        	
        	this.objDsImportTemp.clear();
        	this.dsPY_PAYSET.set_updatecontrol(true);
        	this.dsPY_PAYSET.set_enableevent(true);

        	this.dsPY_PAYSET.set_rowposition(0);
        	this.grdPY_PAYSET.setFocus();
        	
        }

        this.grdPY_PAYSET_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PAYSET.addEventHandler("oncolumnchanged", this.dsPY_PAYSET_OnColumnChanged, this);
            this.dsPY_PAYSET.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREXPD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREXPD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREXPD_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.btn_DATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_PAYSET.addEventHandler("onheadclick", this.grdPY_PAYSET_onheadclick, this);
            this.grdPY_PAYSET.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.edtSHRWAGE_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_NAME_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.imgHelpSHRPAYX_DATE_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.imgHelpSHRPAYX_DATE_FROM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.medSHRPAYX_DATE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.medSHRPAYX_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_YMTH_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYB0160.xfdl");
        this.loadPreloadList();
       
    };
}
)();
