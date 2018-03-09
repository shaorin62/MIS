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
                this.set_name("FAMA0070");
                this.set_titletext("관리코드등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">GO01</Col><Col id=\"DSNAME\">dsSYST_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CODEXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODH_FLNM\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CODH_LENG\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CODH_DESC\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"CODH_RMRK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"KIND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CODEXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODH_FLNM\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_VALU\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_DESC\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF1\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF2\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CODD_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF3\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF4\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF5\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_REF6\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POSX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FOWD_VALU\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BACK_VALU\" size=\"4\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSYST_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResize", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ObjectID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ResizeType\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ColumnIndex\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_CODEXD", "absolute", "446", "140", null, null, "8", "221", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTM_CODEXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"64\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"46\"/><Column size=\"37\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"세부&#10;코드\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"세부&#10;필드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"보조필드1\"/><Cell col=\"3\" displaytype=\"text\" text=\"보조필드2\"/><Cell col=\"4\" displaytype=\"text\" text=\"보조필드3\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"순서\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"사용\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"보조필드4\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"보조필드5\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"보조필드6\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_VALU\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_DESC\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF1\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF2\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF3\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SORT_ORDE\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"checkbox\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_YSNO\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF4\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF5\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODD_REF6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXH", "absolute", "8", "140", "430", null, null, "221", this);
            obj.set_binddataset("dsTM_CODEXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"88\"/><Column size=\"125\"/><Column size=\"74\"/><Column size=\"162\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공통코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"필드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"시스템\"/><Cell col=\"3\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODH_FLNM\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODH_DESC\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SYST_NAME\" combodataset=\"dsSYST_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left top;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CODH_RMRK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "446", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow1", "absolute", "300", "109", "68", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.style.set_imagealign("left");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button0", "absolute", null, "109", "68", "23", "78", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.style.set_imagealign("left");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow2", "absolute", null, "109", "68", "23", "8", null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.style.set_imagealign("left");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow1", "absolute", "370", "109", "68", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.style.set_imagealign("left");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("관리코드등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staFormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("재무관리>기본정보>관리코드등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "40", "324", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCODH_DESC", "absolute", "71", "70", "300", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "24", "70", "45", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_text("필드명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Shape3", "absolute", "8", null, "430", "201", null, "8", this);
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Shape2", "absolute", "10", null, "426", "197", null, "10", this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemBoxIn");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "13", null, "421", "25", null, "180", this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "12", null, "422", "25", null, "155", this);
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "13", null, "422", "147", null, "10", this);
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "215", null, "211", "20", null, "182", this);
            obj.set_taborder("21");
            obj.set_text("※ 첫자리는 \"Z\"로 시작해야 합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_color("red");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODH_LENG", "absolute", "12", null, "104", "29", null, "67", this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_value("8");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new TextArea("areaCODH_RMRK", "absolute", "93", null, "340", "143", null, "12", this);
            obj.set_taborder("23");
            obj.set_maxlength("500");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODH_DESC", "absolute", "93", null, "340", "21", null, "157", this);
            obj.set_taborder("24");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "12", null, "80", "25", null, "155", this);
            obj.set_taborder("25");
            obj.set_text("필드명");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "12", null, "80", "143", null, "12", this);
            obj.set_taborder("26");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "12", null, "80", "25", null, "180", this);
            obj.set_taborder("27");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODH_FLNM", "absolute", "93", null, "119", "21", null, "182", this);
            obj.set_taborder("28");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("Shape00", "absolute", "446", null, null, "201", "8", "8", this);
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "448", null, null, "197", "10", "10", this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormItemBoxIn");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "450", null, null, "25", "12", "132", this);
            obj.set_taborder("31");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "450", null, null, "25", "12", "108", this);
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "450", null, null, "25", "12", "84", this);
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "450", null, null, "25", "12", "60", this);
            obj.set_taborder("34");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "450", null, null, "25", "12", "36", this);
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "450", null, null, "25", "12", "12", this);
            obj.set_taborder("36");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "450", null, null, "25", "12", "156", this);
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "450", null, null, "25", "12", "180", this);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBACK_VALU", "absolute", "573", null, "138", "21", null, "182", this);
            obj.set_taborder("39");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFOWD_VALU", "absolute", "532", null, "40", "21", null, "182", this);
            obj.set_taborder("40");
            obj.set_maxlength("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "532", null, null, "21", "13", "14", this);
            obj.set_taborder("41");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "450", null, "81", "25", null, "12", this);
            obj.set_taborder("42");
            obj.set_text("보조필드6");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "532", null, null, "21", "13", "38", this);
            obj.set_taborder("43");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "450", null, "81", "25", null, "36", this);
            obj.set_taborder("44");
            obj.set_text("보조필드5");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODD_REF4", "absolute", "532", null, null, "21", "13", "62", this);
            obj.set_taborder("45");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODD_REF2", "absolute", "532", null, null, "21", "13", "110", this);
            obj.set_taborder("46");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "450", null, "81", "25", null, "60", this);
            obj.set_taborder("47");
            obj.set_text("보조필드4");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "450", null, "81", "25", null, "108", this);
            obj.set_taborder("48");
            obj.set_text("보조필드2");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCODD_YSNO", "absolute", "805", null, "15", "23", null, "157", this);
            obj.set_taborder("49");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "712", null, "88", "25", null, "156", this);
            obj.set_taborder("50");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODD_REF3", "absolute", "532", null, null, "21", "13", "86", this);
            obj.set_taborder("51");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODD_REF1", "absolute", "532", null, null, "21", "13", "134", this);
            obj.set_taborder("52");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDE", "absolute", "801", null, null, "21", "12", "182", this);
            obj.set_taborder("53");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "712", null, "88", "25", null, "180", this);
            obj.set_taborder("54");
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCODD_DESC", "absolute", "532", null, "179", "21", null, "158", this);
            obj.set_taborder("55");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "450", null, "81", "25", null, "156", this);
            obj.set_taborder("56");
            obj.set_text("세부필드명");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "450", null, "81", "25", null, "84", this);
            obj.set_taborder("57");
            obj.set_text("보조필드3");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "450", null, "81", "25", null, "132", this);
            obj.set_taborder("58");
            obj.set_text("보조필드1");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "450", null, "81", "25", null, "180", this);
            obj.set_taborder("59");
            obj.set_text("세부코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("관리코드등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCODD_DESC_value","edtCODD_DESC","value","dsTM_CODEXD","CODD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSORT_ORDE_value","edtSORT_ORDE","value","dsTM_CODEXD","SORT_ORDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODD_REF1_value","edtCODD_REF1","value","dsTM_CODEXD","CODD_REF1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODD_REF3_value","edtCODD_REF3","value","dsTM_CODEXD","CODD_REF3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkCODD_YSNO_value","chkCODD_YSNO","value","dsTM_CODEXD","CODD_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODD_REF2_value","edtCODD_REF2","value","dsTM_CODEXD","CODD_REF2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODD_REF4_value","edtCODD_REF4","value","dsTM_CODEXD","CODD_REF4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit0_value","Edit0","value","dsTM_CODEXD","CODD_REF5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit1_value","Edit1","value","dsTM_CODEXD","CODD_REF6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFOWD_VALU_value","edtFOWD_VALU","value","dsTM_CODEXD","FOWD_VALU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBACK_VALU_value","edtBACK_VALU","value","dsTM_CODEXD","BACK_VALU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODH_FLNM_value","edtCODH_FLNM","value","dsTM_CODEXH","CODH_FLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODH_DESC_value","edtCODH_DESC","value","dsTM_CODEXH","CODH_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("areaCODH_RMRK_value","areaCODH_RMRK","value","dsTM_CODEXH","CODH_RMRK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCODH_LENG_value","edtCODH_LENG","value","dsTM_CODEXH","CODH_LENG");
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
        this.addIncludeScript("FAMA0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0070.xfdl", function() {
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
        this.sBUTTONLIST = 'TTFFTTTF'; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = 'FAMA0070'; //해당 Form에서 사용 할 Package 명

        
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
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	this.dsTM_CODEXH.clearData();
        	this.dsTM_CODEXD.clearData();

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_CODEXH=dsTM_CODEXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel(this.dsTM_CODEXH); //취소 할 DataSet의 이름을 입력한다.
        	this.fnc_DataSetCancel(this.dsTM_CODEXD); //fn_KeyFieldDisible();
        	this.grdTM_CODEXH.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck("dsTM_CODEXH"))
        	{
        		return;
        	}
        	if (!this.fn_SaveItemCheck("dsTM_CODEXD"))
        	{
        		this.dsTM_CODEXD.clearSelect();
        		this.dsTM_CODEXD.selectRow(this.dsTM_CODEXD.rowposition);
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_CODEXH=dsTM_CODEXH:U dsTM_CODEXD=dsTM_CODEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e)
        {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXD", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e)
        {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        //	if ((e.keycode == 13) && !(e.fromobject instanceof Grid) && !(e.fromobject instanceof this.lookup("TextArea")))
        //	{
        //		var oFocusComponent = this.getNextComponent(e.fromobject, true);
        //		oFocusComponent.setFocus();
        //		return;
        //	}

        	// 단축키 처리
        //	this.lookupFunc("fnc_HotKey").call(this, e.keycode);
        	
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (dsobj)
        {
        	switch (dsobj)
        	{
        		case "dsTM_CODEXH":
        			// 대분류

        			// 삭제 할 자료가 있는지 여부를 체크
        			if (this.dsTM_CODEXD.getRowCount() > 0)
        			{
        				this.fnc_Message("TMM125", "소분류가 존재하는 대분류는 삭제 할수 없습니다.");
        				return false;
        			}

        			// 선택된 Row Count
        			var iSelectRowCount = this.fnc_SelectRowCount(this.dsTM_CODEXH);

        			if (iSelectRowCount > 1)
        			{
        				// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        				return this.fnc_Message("TMM004", iSelectRowCount);
        			}
        			else
        			{
        				// 한 건 삭제 처리시 해당 항목에 대한 삭제 여부 확인
        				var sQuestionText = '(' + this.fnc_Trim(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "CODH_FLNM")) + ') 공통코드';
        				return this.fnc_Message("TMM002", sQuestionText);
        			}
        			return true;
        			break;
        		case "dsTM_CODEXD":
        			// 소분류

        			// 선택된 Row Count
        			var iSelectRowCount = this.fnc_SelectRowCount(this.dsTM_CODEXD);

        			if (iSelectRowCount > 1)
        			{
        				// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        				return this.fnc_Message("TMM004", iSelectRowCount);
        			}
        			else
        			{
        				// 한 건 삭제 처리시 해당 항목에 대한 삭제 여부 확인
        				var sQuestionText = '(' + this.fnc_Trim(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "CODH_FLNM")) + ') 공통코드의';
        				sQuestionText += ' (' + this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "CODD_VALU")) + ') 세부항목코드 ';
        				return this.fnc_Message("TMM002", sQuestionText);
        			}
        			return true;
        			break;
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (dsobj)
        {
        	// '대분류,중분류'변경된 자료가 있는지 체크
        	if ((this.fnc_DatasetChangeCheck(this.dsTM_CODEXH) == false) && (this.fnc_DatasetChangeCheck(this.dsTM_CODEXD) == false))
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	switch (dsobj)
        	{
        		case "dsTM_CODEXH":
        			// 대분류

        			// 필수 입력 항목 체크
        			for (var i = 0; i < this.dsTM_CODEXH.getRowCount(); i++)
        			{
        				//if (this.fnc_ToUpper(this.lookupFunc("GetRowType").call(this.dsTM_CODEXH, i)) == Dataset.ROWTYPE_NORMAL)
        				if(this.dsTM_CODEXH.getRowType(this.dsTM_CODEXH.rowposition) == Dataset.ROWTYPE_NORMAL)
        				{
        					continue;
        				}

        				// if (GetRowType(dsTM_CODEXH,i)== "normal")
        				// continue;

        				if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "CODH_FLNM"))) < 4)
        				{
        					this.fnc_Message("TMM125", "공통코드는 4자리 입니다"); //Message 처리
        					this.dsTM_CODEXH.set_rowposition(i); //DataSet을 현재 Row로 이동
        					this.edtCODH_FLNM.setFocus(); //공통코드 항목으로 Focus
        					return false;
        				}

        				if (this.fnc_Left(this.dsTM_CODEXH.getColumn(i, "CODH_FLNM"), 1) != "Z")
        				{
        					this.fnc_Message("TMM125", "공통코드의 첫자리는 'Z'로 시작해야 합니다");
        					this.dsTM_CODEXH.set_rowposition(i); //DataSet을 현재 Row로 이동
        					this.edtCODH_FLNM.setFocus(); //공통코드 항목으로 Focus
        					return false;
        				}

        				if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "CODH_DESC"))) < 1)
        				{
        					this.fnc_Message("TMM072", "공통코드명"); //Message 처리
        					this.dsTM_CODEXH.set_rowposition(i); //DataSet을 현재 Row로 이동
        					this.edtCODH_DESC.setFocus(); //공통코드 항목으로 Focus
        					return false;
        				}
        			}
        			break;
        		case "dsTM_CODEXD":
        			// 소분류

        			// 필수 입력 항목 체크
        			for (var i = 0; i < this.dsTM_CODEXD.getRowCount(); i++)
        			{
        				//if (this.fnc_ToUpper(this.lookupFunc("GetRowType").call(this.dsTM_CODEXD, i)) == "INSERT" || this.fnc_ToUpper(this.lookupFunc("GetRowType").call(this.dsTM_CODEXD, i)) == "UPDATE")
        				if (this.dsTM_CODEXD.getRowType(this.dsTM_CODEXD.rowposition) == Dataset.ROWTYPE_INSERT || this.dsTM_CODEXD.getRowType(this.dsTM_CODEXD.rowposition) == Dataset.ROWTYPE_UPDATE )
        				{
        					if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "BACK_VALU"))) < 4)
        					{
        						this.fnc_Message("TMM125", "세부코드는 8자리 입니다"); //Message 처리
        						this.dsTM_CODEXD.set_rowposition(i); //DataSet을 현재 Row로 이동
        						this.edtBACK_VALU.setFocus(); //세부코드 항목으로 Focus
        						return false;
        					}

        					if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "CODD_DESC"))) < 1)
        					{
        						this.fnc_Message("TMM072", "세부코드명"); //Message 처리
        						this.dsTM_CODEXD.set_rowposition(i); //DataSet을 현재 Row로 이동
        						this.edtCODD_DESC.setFocus(); //세부코드 항목으로 Focus
        						return false;
        					}
        				}
        			}
        			break;
        	}

        	return true;
        	// Validation Check Sign Return
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00')
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " CODH_DESC=" + this.fnc_Quote(this.edtSHRCODH_DESC.value); //전송 할 인자 값(필드명)
        	}
        	else if (sKind == 'SEARCH01')
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " CODH_FLNM=" + this.fnc_Quote(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "CODH_FLNM")); //전송 할 인자 값(공통코드)
        	}
        	else if (sKind == 'SAVE00')
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        	}
        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0)
        	{
        		if (application.GBL_SESSONCHK == "E0001")
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00')
        	{
        		this.fnc_Information(this.stInformation1, this.dsTM_CODEXH.rowcount, "SHR"); //조회 결과 Display
        	}
        	else if (sMethodName == 'SEARCH01')
        	{
        		this.fnc_Information(this.stInformation2, this.dsTM_CODEXD.rowcount, "SHR"); //fn_KeyFieldDisible();
        	}
        	else if (sMethodName == 'SAVE00')
        	{
        		this.fnc_Message("TMM103"); //dsTM_CODEXH_OnRowPosChanged(dsTM_CODEXH,0,dsTM_CODEXH.rowposition);
        		this.fn_Search();
        	}
        	else if (sMethodName == "GetCommCode")
        	{
        		// 공통 코드 콤보를 가져오기
        		// trace(ds01.SaveXML());
        	}
        	else if (sMethodName == "CODENAMESEARCH00")
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj)
        {
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;

        	if (nRow == -1)
        	{
        		return;
        	}

        	var stInformation3 = "* 0건이 조회 되었습니다.";
        	this.stInformation2.set_text(stInformation3);
        	
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.edtBACK_VALU.set_enable(true);
        	}
        	/*
        	if (this.lookupFunc("GetRowType").call(this.dsTM_CODEXD, this.dsTM_CODEXD.rowposition) == "insert")
        	{
        		this.edtBACK_VALU.set_enable(true);
        	}
        	*/
        	else
        	{
        		this.edtBACK_VALU.set_enable(false);
        	}

        	// 탭의 메시지를 보여준다.
        	if (this.dsTM_CODEXH.getRowCount() > 0)
        	{
        		this.fnc_Information(this.stInformation2, this.dsTM_CODEXD.rowcount, "SHR");
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, obj.binddataset, e.col);
        	// if (obj.name == "grdTM_CODEXD") fn_KeyFieldDisible();
        }
        /*-----------------------+
         |  대분류에서 추가하기.  |
         +------------------------*/
        this.btnAddRow1_OnClick = function (obj,e)
        {
        	// DataSet의 Header 정보가 있을 때  Add 처리
        	if (this.dsTM_CODEXH.getColCount() > 0)
        	{
        		var iRow = this.dsTM_CODEXH.addRow();
        		this.dsTM_CODEXH.setColumn(iRow, "SYST_NAME", 'GO010020');
        		this.dsTM_CODEXH.setColumn(iRow, "KIND_YSNO", '1');
        		this.edtCODH_LENG.set_value("8");
        		this.edtCODH_FLNM.setFocus(); //입력 첫 항목으로 Focus
        		this.dsTM_CODEXD.clearData();
        	}
        	else
        	{
        		this.fnc_Message("TMM032"); //DataSet의 Header가 없어서 오류
        	}
        }
        /*-----------------------+
         |  소분류에서 추가하기.  |
         +------------------------*/
        this.btnAddRow2_OnClick = function (obj,e)
        {
        	// DataSet의 Header 정보가 있을 때  Add 처리
        	if (this.dsTM_CODEXD.getColCount() > 0)
        	{
        		if (this.fnc_Length(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "CODH_FLNM")) < 4)
        		{
        			this.fnc_Message("TMM072", "공통코드"); //Message 처리
        			this.edtCODH_FLNM.setFocus(); //공통코드 항목으로 Focus
        			return;
        		}

        		if (this.fnc_Left(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "CODH_FLNM"), 1) != "Z")
        		{
        			this.fnc_Message("TMM125", "공통코드의 첫자리는 'Z'로 시작해야 합니다");
        			this.edtCODH_FLNM.setFocus(); //공통코드 항목으로 Focus
        			return;
        		}

        		var iRow = this.dsTM_CODEXD.addRow();
        		this.dsTM_CODEXD.setColumn(iRow, 'CODH_FLNM', this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, 'CODH_FLNM'));
        		this.dsTM_CODEXD.setColumn(iRow, "FOWD_VALU", this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, 'CODH_FLNM'));
        		this.dsTM_CODEXD.setColumn(iRow, 'CODD_YSNO', '1'); //디폴트를 "사용"으로

        		this.edtCODH_FLNM.set_enable(false);
        		this.edtBACK_VALU.setFocus(); //입력 첫 항목으로 Focus
        	}
        	else
        	{
        		this.fnc_Message("TMM032"); //DataSet의 Header가 없어서 오류
        	}
        }

        /*-----------------------+
         |  대분류에서 삭제하기.  |
         +------------------------*/
        this.btnDelRow1_OnClick = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTM_CODEXH.getRowCount() > 0)
        	{
        		if (this.dsTM_CODEXD.getDeletedRowCount() > 0)
        		{
        			this.fnc_Message("TMM125", "삭제된 소분류가 있습니다. 저장 후 삭제하세요");
        			return;
        		}

        		if (this.fn_DeleteCheck("dsTM_CODEXH"))
        		{
        			this.dsTM_CODEXH.deleteRow(this.dsTM_CODEXH.rowposition);
        		}
        		// 삭제 여부 확인
        	}
        	else
        	{
        		this.fnc_Message("TMM007"); //삭제 자료 없음 정보 Display
        	}

        	this.grdTM_CODEXH.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  소분류에서 삭제하기.  |
         +------------------------*/
        this.btnDelRow2_OnClick = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTM_CODEXD.getRowCount() > 0)
        	{
        		if (this.fn_DeleteCheck("dsTM_CODEXD"))
        		{
        			this.dsTM_CODEXD.deleteSelectedRows();
        		}
        		// 삭제 여부 확인
        		if (this.dsTM_CODEXD.rowcount == 0)
        		{
        			this.edtCODH_FLNM.set_enable(true);
        		}
        	}
        	else
        	{
        		this.fnc_Message("TMM007"); //삭제 자료 없음 정보 Display
        	}

        	this.grdTM_CODEXD.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*---------------------------------------------------------+
         |  Key Field Enabled & Detail 조회.                        |
         +---------------------------------------------------------*/
        this.dsTM_CODEXH_CanRowPosChange = function (obj,e)
        {
        	if (this.lookupFunc("GetUpdate").call(this.dsTM_CODEXD) && this.dsTM_CODEXH.rowcount > 0)
        	{
        		if (this.fnc_Message("TMM023") == false)
        		{
        			return false;
        		}
        	}
        }

        /*----------------------------------+
         |  대분류 그리드 행 이동시 이벤트|
         +----------------------------------*/

        this.dsTM_CODEXH_OnRowPosChanged = function (obj,e)
        {
        	if (this.dsTM_CODEXH.getRowCount() < 1)
        	{
        		this.dsTM_CODEXD.clearData();
        	}

        	//if (this.fnc_ToUpper(this.lookupFunc("GetRowType").call(this.dsTM_CODEXH, this.dsTM_CODEXH.rowposition)) == "INSERT")
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.edtCODH_FLNM.set_enable(true); //PK Field를 Updateable(공통코드)
        		this.dsTM_CODEXD.clearData(); //신규 자료는 조회 할 필요 없음
        	}
        	else
        	{
        		this.edtCODH_FLNM.set_enable(false); //PK Field를 Disibled(공통코드)

        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		this.grdTM_CODEXH.setFocus(); //재 클릭 방지를 위해 Focus 이동
        	}
        }

        /*----------------------------------+
         |  세부코드 뒷자리 변경시 이벤트    |
         +----------------------------------*/
        this.dsTM_CODEXD_OnColumnChanged = function (obj,e)
        {
        	if (e.columnid == "BACK_VALU")
        	{
        		var sCODD_VALU = this.dsTM_CODEXD.getColumn(e.row, "FOWD_VALU") + this.dsTM_CODEXD.getColumn(e.row, "BACK_VALU");
        		this.dsTM_CODEXD.setColumn(e.row, "CODD_VALU", sCODD_VALU);
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("canrowposchange", this.dsTM_CODEXH_CanRowPosChange, this);
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.dsTM_CODEXH_OnRowPosChanged, this);
            this.dsTM_CODEXD.addEventHandler("oncolumnchanged", this.dsTM_CODEXD_OnColumnChanged, this);
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_CODEXD.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.btnAddRow1.addEventHandler("onclick", this.btnAddRow1_OnClick, this);
            this.Button0.addEventHandler("onclick", this.btnAddRow2_OnClick, this);
            this.btnDelRow2.addEventHandler("onclick", this.btnDelRow2_OnClick, this);
            this.btnDelRow1.addEventHandler("onclick", this.btnDelRow1_OnClick, this);
            this.edtSHRCODH_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODH_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODH_FLNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBACK_VALU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtFOWD_VALU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODD_REF4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODD_REF2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODD_REF3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODD_REF1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCODD_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
