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
                this.set_name("FSMA0010");
                this.set_titletext("자산분류관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCLXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_METH\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_CYCL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_CMPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT1_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT2_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT3\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT3_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT4\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT4_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT5\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT5_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT6\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT6_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_DTLX\" type=\"STRING\" size=\"10\"/><Column id=\"SORT_ORDR\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"DPCT_ACT7\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"DPCT_ACT7_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"DSNAME\">dsASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_METH</Col><Col id=\"DSNAME\">dsDPCT_METH</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_CYCL</Col><Col id=\"DSNAME\">dsDPCT_CYCL</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_CMPT</Col><Col id=\"DSNAME\">dsDPCT_CMPT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsASST_DTLX</Col><Col id=\"CODEID\">ASST_DTLX</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDPCT_RATE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT01\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT02\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape0", "absolute", "8", null, null, "169", "25", "15", this);
            obj.set_taborder("127");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("23");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCLXM", "absolute", "8", "128", null, null, "25", "199", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASCLXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"69\"/><Column size=\"64\"/><Column size=\"62\"/><Column size=\"70\"/><Column size=\"83\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"172\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"자산구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"자산분류코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"자산분류명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"상각주기\"/><Cell col=\"4\" displaytype=\"text\" text=\"상각방법\"/><Cell col=\"5\" displaytype=\"text\" text=\"내용년수\"/><Cell col=\"6\" displaytype=\"text\" text=\"상각율(%)\"/><Cell col=\"7\" displaytype=\"text\" text=\"상각완료기준\"/><Cell col=\"8\" displaytype=\"text\" text=\"자산계정\"/><Cell col=\"9\" displaytype=\"text\" text=\"자산처분이익계정\"/><Cell col=\"10\" displaytype=\"text\" text=\"자산처분손실계정\"/><Cell col=\"11\" displaytype=\"text\" text=\"상각누계액계정\"/><Cell col=\"12\" displaytype=\"text\" text=\"상각비계정과목(판관)\"/><Cell col=\"13\" text=\"상각비계정과목(제조)\"/><Cell col=\"14\" displaytype=\"text\" text=\"자산세부유형\"/><Cell col=\"15\" displaytype=\"text\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_GUBN\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_CODE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_CYCL\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_METH\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\" expr=\"expr:PRID_DPCT == 0 ? &quot;&quot; : PRID_DPCT\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_RATE\" expr=\"expr:DPCT_RATE == 0 ? &quot;&quot; : DPCT_RATE\" mask=\"expr:DPCT_RATE == 0 ? &quot;&quot; : &quot;#0.0&quot;\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_CMPT\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ACT1_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ACT5_NAME\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:DPCT_ACT6_NAME\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ACT2_NAME\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ACT4_NAME\"/><Cell col=\"13\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ACT7_NAME\"/><Cell col=\"14\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:ASST_DTLX\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:SORT_ORDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "30", "71", "68", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("자산구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "97", "71", "154", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtDPCT_ACT2", "absolute", "696", null, "134", "21", null, "102", this);
            obj.set_taborder("188");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT4", "absolute", "696", null, "134", "21", null, "76", this);
            obj.set_taborder("189");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "882", null, "98", "21", null, "154", this);
            obj.set_taborder("193");
            obj.set_text("상각주기");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "554", null, "135", "21", null, "154", this);
            obj.set_taborder("194");
            obj.set_text("자산분류명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "314", null, "95", "21", null, "154", this);
            obj.set_taborder("195");
            obj.set_text("자산분류코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "882", null, "98", "21", null, "128", this);
            obj.set_taborder("199");
            obj.set_text("상각완료기준");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "554", null, "135", "21", null, "128", this);
            obj.set_taborder("200");
            obj.set_text("상각율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "314", null, "95", "21", null, "128", this);
            obj.set_taborder("201");
            obj.set_text("내용년수");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_GUBN", "absolute", "148", null, "137", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.set_index("-1");

            obj = new Edit("edtASCL_CODE", "absolute", "409", null, "116", "21", null, "154", this);
            obj.set_taborder("3");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_NAME", "absolute", "696", null, "157", "21", null, "154", this);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDPCT_METH", "absolute", "148", null, "137", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.set_index("-1");

            obj = new Combo("cmbDPCT_CMPT", "absolute", "977", null, "164", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.set_index("-1");

            obj = new Edit("edtPRID_DPCT", "absolute", "409", null, "116", "21", null, "128", this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT1", "absolute", "148", null, "137", "21", null, "102", this);
            obj.set_taborder("210");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT1_NAME", "absolute", "310", null, "215", "21", null, "102", this);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDPCT_RATE", "absolute", "696", null, "157", "21", null, "128", this);
            obj.set_taborder("8");
            obj.set_mask("!###.#");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_background("#eeeeeeff");
            obj.style.set_color("#999999ff");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "554", null, "145", "21", null, "76", this);
            obj.set_taborder("214");
            obj.set_text("상각비계정과목(판관)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_DTLX", "absolute", "694", null, "157", "21", null, "23", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");

            obj = new Static("Static13", "absolute", "553", null, "135", "21", null, "24", this);
            obj.set_taborder("218");
            obj.set_text("자산세부유형");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "976", null, "164", "21", null, "23", this);
            obj.set_taborder("21");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT6", "absolute", "148", null, "137", "21", null, "50", this);
            obj.set_taborder("221");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT6_NAME", "absolute", "310", null, "215", "21", null, "50", this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT5", "absolute", "148", null, "137", "21", null, "76", this);
            obj.set_taborder("225");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT5_NAME", "absolute", "310", null, "215", "21", null, "76", this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", null, "120", "21", null, "24", this);
            obj.set_taborder("227");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "120", "21", null, "50", this);
            obj.set_taborder("228");
            obj.set_text("자산처분손실계정");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "28", null, "120", "21", null, "76", this);
            obj.set_taborder("229");
            obj.set_text("자산처분이익계정");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "28", null, "120", "21", null, "102", this);
            obj.set_taborder("230");
            obj.set_text("자산계정과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "28", null, "120", "21", null, "128", this);
            obj.set_taborder("231");
            obj.set_text("상각방법");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "28", null, "120", "21", null, "154", this);
            obj.set_taborder("232");
            obj.set_text("자산구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT1", "absolute", "287", null, "21", "21", null, "102", this);
            obj.set_taborder("10");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT2", "absolute", "832", null, "21", "21", null, "102", this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "554", null, "135", "21", null, "102", this);
            obj.set_taborder("236");
            obj.set_text("상각누계액계정과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "881", null, "98", "21", null, "23", this);
            obj.set_taborder("237");
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT4", "absolute", "832", null, "21", "21", null, "76", this);
            obj.set_taborder("16");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT5", "absolute", "287", null, "21", "21", null, "76", this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "148", null, "377", "21", null, "24", this);
            obj.set_taborder("22");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT6", "absolute", "287", null, "21", "21", null, "50", this);
            obj.set_taborder("18");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT2_NAME", "absolute", "855", null, "286", "21", null, "102", this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT4_NAME", "absolute", "855", null, "286", "21", null, "76", this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDPCT_CYCL", "absolute", "977", null, "164", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("258");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("259");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("260");
            obj.set_text("자산분류관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("261");
            obj.set_text("자산관리>자산분류관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("262");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("263");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("264");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("265");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("266");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("267");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("269");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "148", "534", "38", "8", null, null, this);
            obj.set_taborder("271");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "148", "563", "102", "5", null, null, this);
            obj.set_taborder("272");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "148", "589", "102", "5", null, null, this);
            obj.set_taborder("273");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "148", "615", "102", "5", null, null, this);
            obj.set_taborder("274");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "148", "693", "38", "8", null, null, this);
            obj.set_taborder("275");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("276");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "554", null, "145", "21", null, "50", this);
            obj.set_taborder("277");
            obj.set_text("상각비계정과목(제조)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT7", "absolute", "695", null, "134", "21", null, "50", this);
            obj.set_taborder("278");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDPCT_ACT7", "absolute", "831", null, "21", "21", null, "50", this);
            obj.set_taborder("279");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDPCT_ACT7_NAME", "absolute", "854", null, "286", "21", null, "50", this);
            obj.set_taborder("280");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산분류관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("cmbDPCT_CYCL_value","cmbDPCT_CYCL","value","dsFS_ASCLXM","DPCT_CYCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtDESC_REMK","value","dsFS_ASCLXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT2_value","edtDPCT_ACT2","value","dsFS_ASCLXM","DPCT_ACT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT4_value","edtDPCT_ACT4","value","dsFS_ASCLXM","DPCT_ACT4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASST_GUBN_value","cmbASST_GUBN","value","dsFS_ASCLXM","ASST_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_CODE_value","edtASCL_CODE","value","dsFS_ASCLXM","ASCL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_NAME_value","edtASCL_NAME","value","dsFS_ASCLXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDPCT_METH_value","cmbDPCT_METH","value","dsFS_ASCLXM","DPCT_METH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDPCT_CMPT_value","cmbDPCT_CMPT","value","dsFS_ASCLXM","DPCT_CMPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRID_DPCT_value","edtPRID_DPCT","value","dsFS_ASCLXM","PRID_DPCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT1_value","edtDPCT_ACT1","value","dsFS_ASCLXM","DPCT_ACT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT1_NAME_value","edtDPCT_ACT1_NAME","value","dsFS_ASCLXM","DPCT_ACT1_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDPCT_RATE_value","mskDPCT_RATE","value","dsFS_ASCLXM","DPCT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbASST_DTLX","value","dsFS_ASCLXM","ASST_DTLX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtSORT_ORDR","value","dsFS_ASCLXM","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtDPCT_ACT6","value","dsFS_ASCLXM","DPCT_ACT6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtDPCT_ACT6_NAME","value","dsFS_ASCLXM","DPCT_ACT6_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtDPCT_ACT5","value","dsFS_ASCLXM","DPCT_ACT5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtDPCT_ACT5_NAME","value","dsFS_ASCLXM","DPCT_ACT5_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT2_NAME_value","edtDPCT_ACT2_NAME","value","dsFS_ASCLXM","DPCT_ACT2_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPCT_ACT4_NAME_value","edtDPCT_ACT4_NAME","value","dsFS_ASCLXM","DPCT_ACT4_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDPCT_ACT7","value","dsFS_ASCLXM","DPCT_ACT7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtDPCT_ACT7_NAME","value","dsFS_ASCLXM","DPCT_ACT7_NAME");
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
        this.addIncludeScript("FSMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMA0010 자산분류관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "FSMA0010";
        this.sACCT_YEAR   = ""; 

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
        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4);
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
        	this.fnc_DatasetClear("dsFS_ASCLXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_ASCLXM=dsFS_ASCLXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCLXM.setFocus(); 
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	this.dsFS_ASCLXM.addRow();
        	this.fn_DpctcyclChange("");
        	this.cmbASST_GUBN.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsFS_ASCLXM.deleteRow(this.dsFS_ASCLXM.rowposition);
        	this.grdFS_ASCLXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsFS_ASCLXM");
        	// 취소버튼 클릭시 상각주기에 따른 변동사항 재설정
        	this.fn_DpctcyclChange(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.dsFS_ASCLXM.rowposition, "DPCT_CYCL")));
        	this.grdFS_ASCLXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_ASCLXM=dsFS_ASCLXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCLXM.setFocus();

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

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCLXM",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj, e);
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

        	if (this.fnc_DatasetChangeCheck("dsFS_ASCLXM")) return this.fnc_Message("TMM023");
        	
        // 	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRASST_GUBN.value)) < 1) {	
        // 		return this.fnc_SearchCheckPostAction("TMM072", "자산구분", this.cmbSHRASST_GUBN);
        // 	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText = "자산분류명 : " + this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.dsFS_ASCLXM.rowposition, "ASCL_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASCLXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sDPCT_CYCL;
        	
        	for (var row = 0; row < this.dsFS_ASCLXM.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsFS_ASCLXM.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "ASST_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산구분", this.dsFS_ASCLXM, row, this.cmbASST_GUBN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "ASCL_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산분류코드", this.dsFS_ASCLXM, row, this.edtASCL_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "ASCL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산분류명", this.dsFS_ASCLXM, row, this.edtASCL_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "DPCT_CYCL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상각주기", this.dsFS_ASCLXM, row, this.cmbDPCT_CYCL, "");
        		}

        		sDPCT_CYCL = this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "DPCT_CYCL"));

        		if (sDPCT_CYCL == "MONH") {
        		
        			// 월상각일때만 체크
        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "DPCT_METH"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각방법", this.dsFS_ASCLXM, row, this.cmbDPCT_METH, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "PRID_DPCT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "내용년수", this.dsFS_ASCLXM, row, this.edtPRID_DPCT, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "DPCT_RATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각율(%)", this.dsFS_ASCLXM, row, this.mskDPCT_RATE, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(row, "DPCT_CMPT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각완료기준", this.dsFS_ASCLXM, row, this.cmbDPCT_CMPT, "");
        			}
        			
        		}
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); 

        	// 상각율조회 Argument 생성
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " BASE_YEAR=" + this.fnc_Quote(this.sACCT_YEAR); 
        		sReturnString += " PRID_DPCT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.dsFS_ASCLXM.rowposition, "PRID_DPCT"))); //내용년수

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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
        		
        		this.fnc_Information(this.stInformation, this.dsFS_ASCLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASCLXM.rowcount);
        		
        	} else if (sMethodName == "SEARCH01") {
        		// 상각율 조회. 상각방법
        		var sDPCT_METH = this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.dsFS_ASCLXM.rowposition, "DPCT_METH"));
        		
        		if (sDPCT_METH == "STRT") {
        			// 정액법
        			if (this.fnc_Length(this.fnc_Trim(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT01"))) != 0) {
        				this.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT01"));
        				this.edtPRID_DPCT.set_enable(true); 
        				this.cmbDPCT_CMPT.set_enable(true); 
        				this.edtDPCT_ACT2_NAME.set_enable(true);
        				this.edtDPCT_ACT4_NAME.set_enable(true);
        		        this.edtDPCT_ACT7_NAME.set_enable(true);
        				
        			} else {
        				this.mskDPCT_RATE.set_value(0);
        				this.edtPRID_DPCT.set_enable(true); 
        				this.cmbDPCT_CMPT.set_enable(true); 
        				this.edtDPCT_ACT2_NAME.set_enable(true);
        				this.edtDPCT_ACT4_NAME.set_enable(true);
        		        this.edtDPCT_ACT7_NAME.set_enable(true);
        			}
        		} else if (sDPCT_METH == "DMNS") {
        			// 정률법
        			if (this.fnc_Length(this.fnc_Trim(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT02"))) != 0) {
        				this.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT02"));
        				this.edtPRID_DPCT.set_enable(true); 
        				this.cmbDPCT_CMPT.set_enable(true); 
        				this.edtDPCT_ACT2_NAME.set_enable(true);
        				this.edtDPCT_ACT4_NAME.set_enable(true);
        		        this.edtDPCT_ACT7_NAME.set_enable(true);
        			} else 	{
        				this.mskDPCT_RATE.set_value(0);
        				this.edtPRID_DPCT.set_enable(true); 
        				this.cmbDPCT_CMPT.set_enable(true); 
        				this.edtDPCT_ACT2_NAME.set_enable(true);
        				this.edtDPCT_ACT4_NAME.set_enable(true);
        		        this.edtDPCT_ACT7_NAME.set_enable(true);
        			}
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0";
         			arrParam[1] = "COMBO,cmbASST_GUBN,dsASST_GUBN,0";
         			arrParam[2] = "COMBO,cmbDPCT_METH,dsDPCT_METH,0";
         			arrParam[3] = "COMBO,cmbASST_DTLX,dsASST_DTLX,0";
         			arrParam[4] = "COMBO,cmbDPCT_CYCL,dsDPCT_CYCL,0";
         			arrParam[5] = "COMBO,cmbDPCT_CMPT,dsDPCT_CMPT,0";
         			arrParam[6] = "GRID,grdFS_ASCLXM,dsASST_GUBN,ASST_GUBN";
         			arrParam[7] = "GRID,grdFS_ASCLXM,dsDPCT_CYCL,DPCT_CYCL";
         			arrParam[8] = "GRID,grdFS_ASCLXM,dsDPCT_METH,DPCT_METH";
         			arrParam[9] = "GRID,grdFS_ASCLXM,dsASST_DTLX,ASST_DTLX";
         			arrParam[10] = "GRID,grdFS_ASCLXM,dsDPCT_CMPT,DPCT_CMPT";
         			
        		this.fnc_CommonCodeInnerBind(arrParam);
        	} 
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) { 
        		this.edtASCL_CODE.set_enable(true);
        	} else {
         		this.edtASCL_CODE.set_enable(false); 		
        		this.fn_DpctcyclChange(obj.getColumn(obj.rowposition, "DPCT_CYCL") );
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*----------------------------+
         |  상각주기 변경 시 처리 내용 |
         +-----------------------------*/
        this.fn_DpctcyclChange = function (DPCT_CYCL) {
        	
        	if (DPCT_CYCL == "MONH") {
        	
        		// 월상각
        		this.cmbDPCT_METH.set_enable(true);
        		this.edtPRID_DPCT.set_enable(true);
        		this.cmbDPCT_CMPT.set_enable(true);
        		this.edtDPCT_ACT2_NAME.set_enable(true);
        		this.edtDPCT_ACT4_NAME.set_enable(true);
        		this.edtDPCT_ACT7_NAME.set_enable(true);

        		// 자산세부가 무형 자산일경우
        		if (this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.dsFS_ASCLXM.rowposition, "ASST_DTLX")) == "INAS") {
        			this.edtDPCT_ACT2_NAME.set_enable(false);
        			this.edtDPCT_ACT5_NAME.set_enable(false);
        			this.edtDPCT_ACT6_NAME.set_enable(false);
        		} else {
        			this.edtDPCT_ACT2_NAME.set_enable(true);
        			this.edtDPCT_ACT5_NAME.set_enable(true);
        			this.edtDPCT_ACT6_NAME.set_enable(true);
        			this.edtDPCT_ACT4_NAME.set_enable(true);
        		    this.edtDPCT_ACT7_NAME.set_enable(true);
        		}
        		
        	} else {
        		
        		// 미상각
        		this.cmbDPCT_METH.set_enable(false); //상각방법
        		this.edtPRID_DPCT.set_enable(false); //내용년수
        		this.mskDPCT_RATE.set_enable(false); //상각율
        		this.cmbDPCT_CMPT.set_enable(false); //edtDPCT_ACT2.enable      = false;					 //상각누계액계정과목코드
        		this.edtDPCT_ACT2_NAME.set_enable(false); //edtDPCT_ACT4.enable      = false;					 //상각비계정과목코드
        		this.edtDPCT_ACT4_NAME.set_enable(false); //상각비계정과목명
        		this.edtDPCT_ACT5_NAME.set_enable(true);
        		this.edtDPCT_ACT6_NAME.set_enable(true);
                this.edtDPCT_ACT7_NAME.set_enable(false); //상각비계정과목명(제조)		
        		
        	}

        	this.edtDPCT_ACT2.style.set_align("center middle");
        	this.edtDPCT_ACT4.style.set_align("center middle");
        	this.edtDPCT_ACT7.style.set_align("center middle");
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	//자산계정과목 
        	if ((obj.name == "imgHelpDPCT_ACT1") || (obj.name == "edtDPCT_ACT1_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT1_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT1_NAME";                         
        		arrParam[5] = "edtDPCT_ACT1,edtDPCT_ACT1_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	//상각누계액계정과목 
        	} else if ((obj.name == "imgHelpDPCT_ACT2") || (obj.name == "edtDPCT_ACT2_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT2_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT2_NAME";                         
        		arrParam[5] = "edtDPCT_ACT2,edtDPCT_ACT2_NAME";         
        		arrParam[6] = "0,1";     

        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	//자산처분이익계정 
        	} else if ((obj.name == "imgHelpDPCT_ACT5") || (obj.name == "edtDPCT_ACT5_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT5_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT5_NAME";                         
        		arrParam[5] = "edtDPCT_ACT5,edtDPCT_ACT5_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	//상각비계정과목 
        	} else if ((obj.name == "imgHelpDPCT_ACT4") || (obj.name == "edtDPCT_ACT4_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT4_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT4_NAME";                         
        		arrParam[5] = "edtDPCT_ACT4,edtDPCT_ACT4_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	//자산처분손실계정
        	} else if ((obj.name == "imgHelpDPCT_ACT6") || (obj.name == "edtDPCT_ACT6_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT6_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT6_NAME";                         
        		arrParam[5] = "edtDPCT_ACT6,edtDPCT_ACT6_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if ((obj.name == "imgHelpDPCT_ACT7") || (obj.name == "edtDPCT_ACT7_NAME")) {

        		arrParam[0] = "FAM0031";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtDPCT_ACT7_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtDPCT_ACT7_NAME";                         
        		arrParam[5] = "edtDPCT_ACT7,edtDPCT_ACT7_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} 
        }

        /*-----------------------+
         |  상각주기, 상각방법 변경 시 처리 |
         +------------------------*/
        this.dsFS_ASCLXM_OnColumnChanged = function (obj,e) {

        	if (e.columnid == "DPCT_CYCL" ) {
        		
        		if (e.newvalue == "MONH") {
        		
        			// 월상각
        			this.fn_DpctcyclChange(e.newvalue);
        		
        		} else {

        			// 미상각
         			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_METH", " "); //상각방법
         			this.dsFS_ASCLXM.setColumn(e.row, "PRID_DPCT", 0); //내용년수
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_RATE", 0.00); //상각율
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_CMPT", ""); //상각완료기준
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT2", ""); //상각누계액계정과목코드
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT2_NAME", ""); //상각누계액계정과목명
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT4", ""); //상각비계정과목코드
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT4_NAME", ""); //상각비계정과목명
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT7", ""); //상각비계정과목코드
        			this.dsFS_ASCLXM.setColumn(e.row, "DPCT_ACT7_NAME", ""); //상각비계정과목명			
        			this.fn_DpctcyclChange(e.newvalue);
        			
        		}
        		
        	// 상각방법, 내용년수 일경우 조회
        	} else if (e.columnid == "PRID_DPCT" || e.columnid == "DPCT_METH") {
        	   
        		this.fn_DpctMeth();

        	// 자산세부가 무형 자산일경우
        	} else if (e.columnid == "ASST_DTLX") {
        	
        		if (e.newvalue == "INAS") {
        			// 무형자산
        			// edtDPCT_ACT1.enable = true;
        			// edtDPCT_ACT4.enable = true;
        			this.edtDPCT_ACT2_NAME.set_enable(false);
        			this.edtDPCT_ACT5_NAME.set_enable(false);
        			this.edtDPCT_ACT6_NAME.set_enable(false);
                    //this.edtDPCT_ACT7_NAME.set_enable(false);			
        		} else {
        			// edtDPCT_ACT1.enable = true;
        			// edtDPCT_ACT4.enable = true;
        			this.edtDPCT_ACT2_NAME.set_enable(true);
        			this.edtDPCT_ACT5_NAME.set_enable(true);
        			this.edtDPCT_ACT6_NAME.set_enable(true);
        			//this.edtDPCT_ACT7_NAME.set_enable(true);
        		}
        	}
        	
        }

        /*-----------------------+
         |  상각율 조회  |
         +------------------------*/
        this.fn_DpctMeth = function () {
        	// 조회 값이 없으면 조회 할 필요 없음
        	
        	if (this.dsFS_ASCLXM.rowcount < 1) return;
        	
        	
        	//if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCLXM.getColumn(this.lookup("i"), "PRID_DPCT"))) != 0) return;
            
        	this.dsDPCT_RATE.clearData();

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsDPCT_RATE=dsDPCT_RATE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.edtDPCT_ACT1_NAME_onchanged = function(obj,e) {
        	if (e.columnid == "COND_NAME") {
        		this.fn_HelpDialoge(this.edtDPCT_ACT1_NAME, "YES" ,e.oldvalue, e.columnid);
        	} 

        }

        

        this.edtPRID_DPCT_onchanged = function(obj,e)
        {
        	//this.mskDPCT_RATE.set_value(this.fn_DpctMeth);
        	
        			this.edtDPCT_ACT2_NAME.set_enable(true);			
        			this.edtDPCT_ACT4_NAME.set_enable(true);
        		    this.edtDPCT_ACT7_NAME.set_enable(true);
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCLXM.addEventHandler("oncolumnchanged", this.dsFS_ASCLXM_OnColumnChanged, this);
            this.dsFS_ASCLXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsDPCT_RATE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASCLXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDPCT_METH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDPCT_METH.addEventHandler("onitemchanged", this.cmbDPCT_METH_onitemchanged, this);
            this.cmbDPCT_CMPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRID_DPCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT1_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT1_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskDPCT_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASST_DTLX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT6.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT6_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT6_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDPCT_ACT5.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT5_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT5_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpDPCT_ACT1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDPCT_ACT2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDPCT_ACT4.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDPCT_ACT5.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDPCT_ACT6.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDPCT_ACT2_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT2_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDPCT_ACT4_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT4_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbDPCT_CYCL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtDPCT_ACT7.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDPCT_ACT7.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDPCT_ACT7_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPCT_ACT7_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FSMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
