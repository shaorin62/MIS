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
                this.set_name("TMMC0020");
                this.set_titletext("부서관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_DEPTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_LEVL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ABBR_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REGR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPFX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TORG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_FCOD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_THNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_DTGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsDTGP_CODE</Col><Col id=\"CODEID\">DTGP_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDTCH_CODE</Col><Col id=\"CODEID\">DTCH_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDTGN_CODE</Col><Col id=\"CODEID\">DTGN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsEVAL_DTGN</Col><Col id=\"CODEID\">EVAL_DTGN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_DEPHSL", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTCH_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ABBR_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_DEPTXM_TREE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtUPPR_DTCD", "absolute", "362", null, "70", "21", null, "332", this);
            obj.set_taborder("54");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_text("기준일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_value("null");

            obj = new Static("stInformation1", "absolute", "8", "106", "262", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_DEPTXM", "absolute", "258", "127", null, null, "25", "403", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTM_DEPTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj.getSetter("nosort").set("");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"82\"/><Column size=\"116\"/><Column size=\"134\"/><Column size=\"127\"/><Column size=\"57\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"76\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"부서코드\"/><Cell col=\"1\" text=\"소속\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"3\" displaytype=\"text\" text=\"상위부서\"/><Cell col=\"4\" text=\"정렬순서\"/><Cell col=\"5\" text=\"사업장\"/><Cell col=\"6\" displaytype=\"text\" text=\"등록일\"/><Cell col=\"7\" displaytype=\"text\" text=\"폐기일\"/><Cell col=\"8\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:UPPR_DTNM\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:right;\" text=\"bind:SORT_ORDR\" editlimitbymask=\"integer\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ENFC_NAME\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:REGR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:WAST_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:ORGZ_ORDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("trvTM_DEPTXM", "absolute", "8", "127", "230", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTM_DEPTXM");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseline("true");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none #808080 ;\" text=\"bind:DEPT_NAME\" editautoselect=\"true\" treelevel=\"bind:DEPT_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Shape00", "absolute", "257", null, null, "113", "25", "275", this);
            obj.set_taborder("42");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "277", null, "76", "21", null, "358", this);
            obj.set_taborder("28");
            obj.set_text("부서코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "510", null, "84", "21", null, "358", this);
            obj.set_taborder("30");
            obj.set_text("부서명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "738", null, "60", "21", null, "358", this);
            obj.set_taborder("31");
            obj.set_text("영문명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "904", null, "60", "21", null, "358", this);
            obj.set_taborder("32");
            obj.set_text("약어명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "904", null, "60", "21", null, "332", this);
            obj.set_taborder("35");
            obj.set_text("폐기일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "510", null, "84", "21", null, "332", this);
            obj.set_taborder("36");
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "277", null, "76", "21", null, "332", this);
            obj.set_taborder("33");
            obj.set_text("상위부서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "738", null, "60", "21", null, "332", this);
            obj.set_taborder("34");
            obj.set_text("등록일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGL_DTNM", "absolute", "793", null, "100", "21", null, "358", this);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtABBR_DTNM", "absolute", "998", null, "100", "21", null, "358", this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "346", null, "120", "21", null, "358", this);
            obj.set_taborder("1");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_background("#ffffffff");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "592", null, "101", "21", null, "358", this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calWAST_DATE", "absolute", "998", null, "100", "21", null, "332", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");

            obj = new Edit("edtUPPR_DTNM", "absolute", "346", null, "97", "21", null, "332", this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUPPR_DTCD", "absolute", "445", null, "21", "21", null, "332", this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "592", null, "101", "21", null, "332", this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREGR_DATE", "absolute", "793", null, "100", "21", null, "332", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");

            obj = new Static("staXxxx02", "absolute", "1215", null, "76", "21", null, "306", this);
            obj.set_taborder("45");
            obj.set_text("부서구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDTGN_CODE", "absolute", "1284", null, "92", "21", null, "306", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_SCHLXM");
            obj.set_visible("false");
            obj.set_index("0");

            obj = new Static("Static40", "absolute", "277", null, "84", "21", null, "306", this);
            obj.set_taborder("46");
            obj.set_text("부서그룹");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDTGP_CODE", "absolute", "346", null, "120", "21", null, "306", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            obj.set_index("0");

            obj = new Static("staXxxx03", "absolute", "510", null, "92", "21", null, "306", this);
            obj.set_taborder("47");
            obj.set_text("사업장");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENFC_CODE", "absolute", "592", null, "101", "21", null, "306", this);
            obj.set_taborder("29");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpENFC_CODE", "absolute", "695", null, "21", "21", null, "306", this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENFC_NAME", "absolute", "718", null, "175", "21", null, "306", this);
            obj.set_taborder("12");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "277", null, "76", "21", null, "280", this);
            obj.set_taborder("48");
            obj.set_text("소속여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "738", null, "92", "21", null, "280", this);
            obj.set_taborder("49");
            obj.set_text("정원책정여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "510", null, "84", "21", null, "280", this);
            obj.set_taborder("51");
            obj.set_text("실부서여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "1227", null, "68", "21", null, "280", this);
            obj.set_taborder("50");
            obj.set_text("TFT여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkREDT_YSNO", "absolute", "592", null, "17", "21", null, "280", this);
            obj.set_taborder("16");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkTORG_YSNO", "absolute", "1294", null, "16", "21", null, "280", this);
            obj.set_taborder("52");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCPFX_YSNO", "absolute", "833", null, "15", "21", null, "280", this);
            obj.set_taborder("53");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSECT_YSNO", "absolute", "349", null, "15", "21", null, "280", this);
            obj.set_taborder("15");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_DEPHSL", "absolute", "258", null, null, "225", "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTM_DEPHSL");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"변경구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"변경일\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"3\" displaytype=\"text\" text=\"영문명\"/><Cell col=\"4\" displaytype=\"text\" text=\"약어명\"/><Cell col=\"5\" displaytype=\"text\" text=\"상위부서코드\"/><Cell col=\"6\" displaytype=\"text\" text=\"상위부서명\"/><Cell col=\"7\" displaytype=\"text\" text=\"정렬순서\"/><Cell col=\"8\" displaytype=\"text\" text=\"부서그룹\"/><Cell col=\"9\" displaytype=\"text\" text=\"사업장\"/><Cell col=\"10\" displaytype=\"text\" text=\"소속여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:DTCH_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:STDS_DATE\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:DEPT_NAME\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:ENGL_DTNM\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:ABBR_DTNM\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:UPPR_DTCD\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" expandshow=\"show\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:UPPR_DTNM\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:right;\" text=\"bind:SORT_ORDR\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:DTGP_CODE\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:ENFC_NAME\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:SECT_YSNO\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("imgAddRow", "absolute", null, null, "62", "21", "89", "244", this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("imgDelRow", "absolute", null, null, "62", "21", "25", "244", this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("부서관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("56");
            obj.set_text("홈 > 인사관리 > 인사기준정보 > 조직(부서)관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("66");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("67");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("69");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "183", "61", "40", "41", null, null, this);
            obj.set_taborder("70");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "121", "216", "6", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST", "absolute", "258", null, null, "21", "828", "240", this);
            obj.set_taborder("76");
            obj.set_text("부서변경");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "563", "314", "80", "15", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "238", "175", "20", "201", null, null, this);
            obj.set_taborder("80");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "337", null, "10", "13", null, "244", this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "349", null, "182", "23", null, "240", this);
            obj.set_taborder("85");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "258", "330", "30", "111", null, null, this);
            obj.set_taborder("86");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "563", "442", "80", "35", null, null, this);
            obj.set_taborder("87");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "904", null, "94", "21", null, "306", this);
            obj.set_taborder("88");
            obj.set_cssclass("styFormItemCap");
            obj.set_text("평가부서구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVAL_DTGN", "absolute", "998", null, "100", "21", null, "306", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_DEPTXM");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","edtDEPT_CODE","value","dsTM_DEPTXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtDEPT_NAME","value","dsTM_DEPTXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtENGL_DTNM","value","dsTM_DEPTXM","ENGL_DTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtABBR_DTNM","value","dsTM_DEPTXM","ABBR_DTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtUPPR_DTNM","value","dsTM_DEPTXM","UPPR_DTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtSORT_ORDR","value","dsTM_DEPTXM","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","calREGR_DATE","value","dsTM_DEPTXM","REGR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","calWAST_DATE","value","dsTM_DEPTXM","WAST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","cmbDTGN_CODE","value","dsTM_DEPTXM","DTGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","cmbDTGP_CODE","value","dsTM_DEPTXM","DTGP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtENFC_CODE","value","dsTM_DEPTXM","ENFC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtENFC_NAME","value","dsTM_DEPTXM","ENFC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","chkREDT_YSNO","value","dsTM_DEPTXM","REDT_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","chkTORG_YSNO","value","dsTM_DEPTXM","TORG_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","chkCPFX_YSNO","value","dsTM_DEPTXM","CPFX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","chkSECT_YSNO","value","dsTM_DEPTXM","SECT_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtUPPR_DTCD","value","dsTM_DEPTXM","UPPR_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbEVAL_DTGN","value","dsTM_DEPTXM","EVAL_DTGN");
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
        this.addIncludeScript("TMMC0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMC0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMC0020 부서 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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

        /************************
         *  화면 변수 선언부  *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMC0020"; //해당 Form에서 사용 할 Package 명
        this.sKeyValue    = new Array();

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        var sDEPT_CODE = 0;
        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))); 
        	
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

        	if (!this.fn_searchItemCheck())	return;
        	this.fnc_DatasetClear("dsTM_DEPTXM,dsTM_DEPHSL");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_DEPTXM=dsTM_DEPTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTM_DEPTXM.setFocus(); 
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var oldRow = this.dsTM_DEPTXM.rowposition;
        	
        	var iRow = this.dsTM_DEPTXM.addRow();
        	
        	this.dsTM_DEPTXM.setColumn(iRow, "UPPR_DTCD", this.dsTM_DEPTXM.getColumn(oldRow, "DEPT_CODE"));	
        	this.dsTM_DEPTXM.setColumn(iRow, "UPPR_DTNM", this.dsTM_DEPTXM.getColumn(oldRow, "DEPT_NAME"));		//상위부서 : 선택 부서  
        	this.dsTM_DEPTXM.setColumn(iRow, "REGR_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.dsTM_DEPTXM.setColumn(iRow, "SECT_YSNO", "0");
        	this.dsTM_DEPTXM.setColumn(iRow, "CPFX_YSNO", "0");
        	this.dsTM_DEPTXM.setColumn(iRow, "REDT_YSNO", "0");
        	this.dsTM_DEPTXM.setColumn(iRow, "TORG_YSNO", "0");
        	this.grdTM_DEPTXM.selectRow(iRow);
        	this.dsTM_DEPTXM.set_rowposition(iRow);
        	this.edtDEPT_CODE.setFocus();					//부서코드 Fucus	
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck(this.dsTM_DEPTXM, "부서코드", "부서")) {
        		this.dsTM_DEPTXM.deleteRow(this.dsTM_DEPTXM.rowposition);
        	}
        	this.grdTM_DEPTXM.setFocus();
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_DEPTXM,dsTM_DEPHSL");
        	this.grdTM_DEPTXM.setFocus();
        	
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sDEPT_CODE = this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition,"DEPT_CODE");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_DEPTXM=dsTM_DEPTXM:U dsTM_DEPHSL=dsTM_DEPHSL:U";
        	var sOutDataSet = "dsTM_DEPTXM=dsTM_DEPTXM dsTM_DEPHSL=dsTM_DEPHSL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_DEPTXM.setFocus();
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +-------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_DEPTXM,dsTM_DEPHSL", this);
        	if(!this.fnc_IsEmpty(sMessage))	return sMessage;
        	
        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }

        
        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /****************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         |  조회 필수 체크!  |
         +-------------------*/
        this.fn_searchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_DEPTXM") || this.fnc_DatasetChangeCheck("dsTM_DEPHSL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_DEPTXM.getRowCount() < 1 ) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_DEPTXM);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "부서코드 : "  + this.fnc_Trim(this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DEPT_CODE")) + " "
        			 + " 부서 :  " + this.fnc_Trim(this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DEPT_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_DEPTXM,dsTM_DEPHSL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크 부서
        	for (var i = 0; i < this.dsTM_DEPTXM.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_DEPTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "DEPT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서코드", this.dsTM_DEPTXM, i, this.edtDEPT_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "DEPT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서명", this.dsTM_DEPTXM, i, this.edtDEPT_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "UPPR_DTNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상위부서", this.dsTM_DEPTXM, i, this.edtUPPR_DTNM, "");
        		}

         		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "ENFC_CODE"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "사업장", this.dsTM_DEPTXM, i, this.edtENFC_CODE, "");
         		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "SORT_ORDR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "정렬순서", this.dsTM_DEPTXM, i, this.edtSORT_ORDR, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(i, "REGR_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "등록일", this.dsTM_DEPTXM, i, this.calREGR_DATE, "");
        		}
        		
        	}

        	for (var i = 0; i < this.dsTM_DEPHSL.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_DEPHSL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPHSL.getColumn(i, "DTCH_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "변경구분", this.dsTM_DEPTXM, i, this.grdTM_DEPHSL, "DTCH_CODE");
        		}
        		
        			
        		for ( var j=0; j<this.dsTM_DEPHSL.rowcount; j++){
        			if(i != j){
        				if ( this.dsTM_DEPHSL.getColumn(i, "STDS_DATE") == this.dsTM_DEPHSL.getColumn(j, "STDS_DATE")) {
        					this.fnc_Message("TMM300", i+1+ "줄 [" + this.dsTM_DEPHSL.getColumn(j, "STDS_DATE") + "] 변경일 중복 되었습니다.", this.dsTM_DEPTXM, i, this.grdTM_DEPHSL, "DTCH_CODE");
        					return;
        				}
        			}
        		}
        		
        	}

        
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!    |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); //기준일
        		
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
        		var iRow = 0;
        		iRow = this.dsTM_DEPTXM.findRow("DEPT_CODE", this.sDEPT_CODE);
        		if (iRow < 0) iRow = this.dsTM_DEPTXM.rowposition;
        		
        		sReturnString += " DEPT_CODE=" 	 + this.fnc_Quote(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(iRow,"DEPT_CODE"))); //기준일
        		
        		

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); //기준일
        		
        	}

        	return sReturnString;
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){

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
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"));	

        		var iRow = 0;
        		iRow = this.dsTM_DEPTXM.findRow("DEPT_CODE", this.sDEPT_CODE);

        		if (iRow < 0) iRow = 0;
        		
        		this.dsTM_DEPTXM.set_rowposition(iRow);	
        		this.grdTM_DEPTXM.selectRow(iRow);
        		this.sDEPT_CODE = "";

        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation2, this.dsTM_DEPHSL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdTM_DEPHSL.selectRow(0);
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search();
        				
        	// 공통콤보 바인딩
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbDTGN_CODE,dsDTGN_CODE,0";
        			arrParam[1] = "COMBO,cmbDTGP_CODE,dsDTGP_CODE,0";
        			arrParam[2] = "COMBO,cmbEVAL_DTGN,dsEVAL_DTGN,0";
        			arrParam[3] = "GRID,grdTM_DEPHSL,dsDTCH_CODE,DTCH_CODE";
        			arrParam[4] = "GRID,grdTM_DEPHSL,dsDTGN_CODE,DTGN_CODE";
        			arrParam[5] = "GRID,grdTM_DEPHSL,dsDTGP_CODE,DTGP_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} 
        	
        }

        
        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리      |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if ( this.dsTM_DEPTXM.getRowCount() < 1) return;
        	
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.edtDEPT_CODE.set_readonly(false); //부서코드를 Updateable
        		this.edtDEPT_CODE.style.set_background_color("#ffffffff");

        		this.edtDEPT_CODE.set_readonly(false);
        		this.edtUPPR_DTNM.set_readonly(false);
        		this.cmbDTGN_CODE.set_readonly(false);
        		this.edtDEPT_NAME.set_readonly(false);
        		this.imgHelpUPPR_DTCD.set_enable(true);
        		this.imgHelpENFC_CODE.set_enable(true);
        		this.edtSORT_ORDR.set_readonly(false);
        		this.edtENGL_DTNM.set_readonly(false);
        		this.calREGR_DATE.set_readonly(false);
        		this.edtABBR_DTNM.set_readonly(false);
        		this.edtENFC_NAME.set_readonly(false);
        		this.cmbDTGP_CODE.set_readonly(false);
        		this.chkSECT_YSNO.set_readonly(false);
        		this.calWAST_DATE.set_readonly(false);
        		
        	} else {
        		this.edtDEPT_CODE.set_readonly(false); //부서코드를 Disibled
        		this.edtDEPT_CODE.style.set_background_color("#F6F6F6");

        		this.edtDEPT_CODE.set_readonly(true);
        		this.edtUPPR_DTNM.set_readonly(true);
        		this.cmbDTGN_CODE.set_readonly(true);
        		this.edtDEPT_NAME.set_readonly(true);
        		this.imgHelpUPPR_DTCD.set_enable(false);
        		this.imgHelpENFC_CODE.set_enable(false);
        		this.edtSORT_ORDR.set_readonly(true);
        		this.edtENGL_DTNM.set_readonly(true);
        		this.calREGR_DATE.set_readonly(true);
        		this.edtABBR_DTNM.set_readonly(true);		
        		this.edtENFC_NAME.set_readonly(true);
        		this.cmbDTGP_CODE.set_readonly(true);
        		this.chkSECT_YSNO.set_readonly(true);
        		this.calWAST_DATE.set_readonly(false); 
        		
        	}
        	
        	this.fnc_DatasetClear("dsTM_DEPHSL");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_DEPHSL=dsTM_DEPHSL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_DEPHSL.setFocus(); 
        	
        }

        this.fn_KeyFieldDisible_D = function(obj,e) {

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_DEPHSL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_DEPHSL, "DEPT_NAME"), "edittype", "normal");
        	} else {
        		this.grdTM_DEPHSL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_DEPHSL, "DEPT_NAME"), "edittype", "none");
        	}
        	
        }

        /*-----------------------+
         |  컬럼변경시 처리      |
         +-----------------------*/
        this.dsTM_DEPTXM_oncolumnchanged = function(obj,e) {

        	if (e.oldvalue == e.newvalue) return;
        	
        	if (e.columnid == "DEPT_CODE") {
        		for(var i=0; i < this.dsTM_DEPHSL.getRowCount(); i++) {
        			this.dsTM_DEPHSL.setColumn(i, "DEPT_CODE", e.newvalue);
        		}
        	
        	}	
        	
        }

        this.dsTM_DEPHSL_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "UPPR_DTNM") this.fn_HelpDialoge(this.grdTM_DEPHSL, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "ENFC_NAME") this.fn_HelpDialoge(this.grdTM_DEPHSL, "YES", e.oldvalue, e.columnid);
        	
        }

        /*---------+
        |  행추가  |
        +----------*/
        this.btnAddRow_OnClick = function(obj,e) {

        	//부서 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DEPT_CODE"))) < 1) {
        		this.fnc_Message("TMM300", "부서를 선택하세요.");  //부서를 선택하세요.
        		return false;
        	}
        		
        	var iRow  = this.dsTM_DEPHSL.addRow();
        	
        	this.dsTM_DEPHSL.set_enableevent(false);
        	this.dsTM_DEPHSL.setColumn(iRow, "DEPT_CODE", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DEPT_CODE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "DEPT_NAME", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DEPT_NAME")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "ENGL_DTNM", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "ENGL_DTNM")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "ABBR_DTNM", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "ABBR_DTNM")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "DTGN_CODE", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DTGN_CODE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "DTGP_CODE", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "DTGP_CODE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "ENFC_CODE", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "ENFC_CODE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "ENFC_NAME", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "ENFC_NAME")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "UPPR_DTCD", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "UPPR_DTCD")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "UPPR_DTNM", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "UPPR_DTNM")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "WAST_DATE", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "WAST_DATE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "SECT_YSNO", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "SECT_YSNO")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "SORT_ORDR", this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition, "SORT_ORDR")); 
        	
        	this.dsTM_DEPHSL.setColumn(iRow, "STDS_DATE", this.fnc_GetServerDateTime("DATE")); 
        	this.dsTM_DEPHSL.setColumn(iRow, "DTCH_CODE", "0"); 
        	this.dsTM_DEPHSL.set_enableevent(true);
        	this.fnc_GridSetCellFocus(this.grdTM_DEPHSL, "DTCH_CODE");	 
        	
        }

        /*---------+
        |  행삭제  |
        +----------*/
        this.btnDelRow_OnClick = function(obj,e) {

        	if (this.fn_DeleteCheck_D()) {
        		this.dsTM_DEPHSL.deleteRow(this.dsTM_DEPHSL.rowposition);
        	} 
        	this.grdTM_DEPHSL.setFocus();
        	
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpUPPR_DTCD") || (obj.name == "edtUPPR_DTNM")) { // 부서코드(Popup) 
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtUPPR_DTNM.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtUPPR_DTNM";
        		arrParam[5] = "edtUPPR_DTCD,edtUPPR_DTNM";
        		arrParam[6] = "0,1";
        		
        	}else if ((obj.name == "imgHelpENFC_CODE") || (obj.name == "edtENFC_NAME")) { // 대표사업장정보조회(Popup)
        		arrParam[0] = "TMM0008";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtENFC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtENFC_NAME";
        		arrParam[5] = "edtENFC_CODE,edtENFC_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdTM_DEPHSL") { // 사원정보조회(Popup)
        		if (obj.getCellProperty("Body", obj.currentcell, "text") == "bind:UPPR_DTNM") {
        			var sSTDS_DATE = this.dsTM_DEPHSL.getColumn(this.dsTM_DEPHSL.rowposition, "STDS_DATE");
        			arrParam[0] = "TMM0020";
        			arrParam[1] = sSTDS_DATE;
        			arrParam[2] = "UPPR_DTNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTM_DEPHSL";
        			arrParam[5] = "UPPR_DTCD,UPPR_DTNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}else if (obj.getCellProperty("Body", obj.currentcell, "text") == "bind:ENFC_NAME") {
        			arrParam[0] = "TMM0008"; 							//Popup ID
        			arrParam[1] = ""; 									//조건구분에 대응되는 조회조건 값
        			arrParam[2] = "ENFC_NAME"; 							//콤보조건구분에 대응되는 컬럼
        			arrParam[3] = "N"; 									//사용 여부 구분 포함 여부 값
        			arrParam[4] = "grdTM_DEPHSL"; 						//현재 포커스 Componect명
        			arrParam[5] = "ENFC_CODE,ENFC_NAME"; 		//초기화 및 결과 Mapping Column
        			arrParam[6] = "0,1"; 							//Mapping Column Index
        			arrParam[7] = sFromDs; 								//Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = sOldValue; 							//취소 시 변경 이전의 값		
        			
        		}
        	}
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*--------------------+
        |  fn_DeleteCheck_D()  |
        +---------------------*/
        this.fn_DeleteCheck_D = function ()  {

        	if (this.dsTM_DEPHSL.getRowCount() < 1) { 
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	//선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_DEPHSL);

        	if (iSelectRowCount>1) {

        		return fnc_Message("TMM004", iSelectRowCount);

        	} else {

        		var sQuestionText = "부서 " + this.fnc_Trim(this.dsTM_DEPHSL.getColumn(this.dsTM_DEPHSL.rowposition, "DEPT_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	
        	}
        }

        /*---------------------------------+
         | Tree Grid 더블 클릭 이벤트 처리 |
         +---------------------------------*/
        this.tvTM_DEPTXM_oncelldblclick = function (obj,e) {

        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1) {
        		this.treeStatus = 0;
        		return;
        	}

        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) {
        	
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		if (obj.isTreeCollapsedRow(childRow, true)) {
        			obj.setTreeStatus(gridRow, true);
        		} else {
        			obj.setTreeStatus(gridRow, false);
        		}
        	}
        	this.treeStatus = 0;
        }

        /*---------------------------------+
         | Tree 행변경 |
         +---------------------------------*/
        this.tvTM_DEPTXM_cantreestatuschange = function (obj,e) {

        	this.treeStatus = 1;

        }

        /*---------------------------------+
         | Grid 행변경 |
         +---------------------------------*/
        this.dsTM_DEPTXM_canrowposchange = function(obj,e){

        	if (this.fnc_DatasetChangeCheck("dsTM_DEPHSL")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		}
        	}
        	return true;

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_DEPTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_DEPTXM.addEventHandler("canrowposchange", this.dsTM_DEPTXM_canrowposchange, this);
            this.dsTM_DEPHSL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_D, this);
            this.dsTM_DEPHSL.addEventHandler("oncolumnchanged", this.dsTM_DEPHSL_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtUPPR_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPPR_DTCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.trvTM_DEPTXM.addEventHandler("oncelldblclick", this.tvTM_DEPTXM_oncelldblclick, this);
            this.trvTM_DEPTXM.addEventHandler("cantreestatuschange", this.tvTM_DEPTXM_cantreestatuschange, this);
            this.Shape00.addEventHandler("onclick", this.Shape00_onclick, this);
            this.edtENGL_DTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtABBR_DTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calWAST_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calWAST_DATE.addEventHandler("oneditclick", this.calWAST_DATE_oneditclick, this);
            this.edtUPPR_DTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPPR_DTNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpUPPR_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calREGR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDTGN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDTGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENFC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpENFC_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtENFC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENFC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.chkREDT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkTORG_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkCPFX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkSECT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTM_DEPHSL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.imgAddRow.addEventHandler("onclick", this.btnAddRow_OnClick, this);
            this.imgDelRow.addEventHandler("onclick", this.btnDelRow_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbEVAL_DTGN.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
