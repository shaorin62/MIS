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
                this.set_name("TXMD0010");
                this.set_titletext("소득자정보등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_GITAMAST", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LABO_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_ADD1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_ADD2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_TELE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_FAXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_HAND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_EMPL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_MEMO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_STRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ENDX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NATI\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SAUP_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">FC02</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"CODEID\">FA01</Col><Col id=\"DSNAME\">dsLABO_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">FA04</Col><Col id=\"DSNAME\">dsJOBS_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">NATN_CODE</Col><Col id=\"DSNAME\">dsPERS_NATI</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"CODEID\">RM08</Col><Col id=\"DSNAME\">dsRESI_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">RM10</Col><Col id=\"DSNAME\">dsFORI_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">FA01</Col><Col id=\"DSNAME\">dsSHRLABO_GUBN</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"CODEID\">HR75</Col><Col id=\"DSNAME\">dsSAUP_GUBN</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"DSNAME\">dsLABO_GUBN</Col><Col id=\"CODEID\">FA11</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"DSNAME\">dsSHRPERS_STAT</Col><Col id=\"CODEID\">PERS_STAT</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div0", "absolute", "8", "31", "349", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("소득자정보등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "492", "29", "16", null, this);
            obj.set_text("재무관리>세무회계>원천세>소득자정보등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_GITAMAST", "absolute", "8", "137", null, null, "8", "193", this);
            obj.set_binddataset("dsTA_GITAMAST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"85\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"82\"/><Column size=\"140\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"140\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"normal\" style=\"align: center;\" text=\"No\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"성명\"/><Cell col=\"2\" displaytype=\"text\" text=\"상호\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"소득자구분\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"주민등록번호\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"사업자등록번호\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"내/외국인\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"직업구분\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"소득자주소\"/><Cell col=\"9\" displaytype=\"text\" text=\"은행\"/><Cell col=\"10\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"11\" displaytype=\"text\" text=\"예금주\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: center;\" text=\"전화번호\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: center;\" text=\"사업장주소\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: center;\" text=\"팩스번호\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: center;\" text=\"휴대전화\"/><Cell col=\"16\" displaytype=\"text\" text=\"비고\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: center;\" text=\"현재거주국가\"/><Cell col=\"18\" displaytype=\"text\" style=\"align: center;\" text=\"담당부서\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: center;\" text=\"등록일자\"/><Cell col=\"20\" displaytype=\"text\" style=\"align: center;\" text=\"폐기일자\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:COMP_NAME\" wordwrap=\"true\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:LABO_GUBN\" combodataset=\"dsLABO_GUBN\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_JUMN\" mask=\"expr:comp.parent.fnc_Length(PERS_JUMN) &lt; 1 ? &quot;&quot; : &quot;######-#######&quot;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:COMP_NUMB\" mask=\"expr:comp.parent.fnc_Length(COMP_NUMB) &lt; 1 ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FORI_GUBN\" combodataset=\"dsFORI_GUBN\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:JOBS_GUBN\" combodataset=\"dsJOBS_GUBN\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_ADD1\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BANK_CODE\" combodataset=\"dsBANK_CODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACNT_NUMB\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPST_NAME\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_TELE\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:COMP_ADD1\"/><Cell col=\"14\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_FAXX\"/><Cell col=\"15\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_HAND\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:GITA_MEMO\"/><Cell col=\"17\" displaytype=\"combo\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_NATI\" combodataset=\"dsPERS_NATI\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"18\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:TAKE_EMNM\"/><Cell col=\"19\" displaytype=\"date\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_STRT\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"date\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PERS_ENDX\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "736", null, "60", "23", null, "-28", this);
            obj.set_text("등록키");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_NUMB", "absolute", "798", null, "180", "23", null, "-28", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_maxlength("13");
            obj.set_taborder("40");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_taborder("160");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "177", "8", "8", this);
            obj.set_taborder("161");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "10", null, null, "173", "10", "10", this);
            obj.set_taborder("162");
            obj.set_cssclass("styFormItemBoxIn");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx3", "absolute", "12", null, null, "25", "12", "84", this);
            obj.set_taborder("163");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx00", "absolute", "12", null, null, "25", "12", "60", this);
            obj.set_taborder("164");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx01", "absolute", "12", null, null, "25", "12", "36", this);
            obj.set_taborder("165");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx02", "absolute", "12", null, null, "25", "12", "12", this);
            obj.set_taborder("166");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx05", "absolute", "12", null, null, "25", "12", "156", this);
            obj.set_taborder("167");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx06", "absolute", "12", null, null, "25", "12", "132", this);
            obj.set_taborder("168");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx07", "absolute", "12", null, null, "25", "12", "108", this);
            obj.set_taborder("169");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "736", null, "60", "25", null, "36", this);
            obj.set_taborder("170");
            obj.set_text("사업구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stPERS_NATI", "absolute", "304", null, "75", "25", null, "132", this);
            obj.set_taborder("171");
            obj.set_text("거주국가");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "505", null, "105", "25", null, "36", this);
            obj.set_taborder("172");
            obj.set_text("폐기일자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "304", null, "75", "25", null, "36", this);
            obj.set_taborder("173");
            obj.set_text("등록일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "12", null, "75", "25", null, "12", this);
            obj.set_taborder("174");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "12", null, "75", "25", null, "36", this);
            obj.set_taborder("176");
            obj.set_text("담당자");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "12", null, "75", "25", null, "60", this);
            obj.set_taborder("177");
            obj.set_text("은행");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "505", null, "105", "25", null, "60", this);
            obj.set_taborder("178");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "304", null, "75", "25", null, "60", this);
            obj.set_taborder("179");
            obj.set_text("예금주");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "736", null, "60", "25", null, "132", this);
            obj.set_taborder("180");
            obj.set_text("휴대전화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "736", null, "60", "25", null, "84", this);
            obj.set_taborder("181");
            obj.set_text("팩스번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "736", null, "60", "25", null, "108", this);
            obj.set_taborder("182");
            obj.set_text("전화번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMP_ADDR", "absolute", "12", null, "75", "25", null, "84", this);
            obj.set_taborder("184");
            obj.set_text("사업장주소");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "12", null, "75", "25", null, "108", this);
            obj.set_taborder("186");
            obj.set_text("소득자주소");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMP_NUMB", "absolute", "505", null, "105", "25", null, "132", this);
            obj.set_taborder("187");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stJOBS_GUBN", "absolute", "736", null, "60", "25", null, "156", this);
            obj.set_taborder("188");
            obj.set_text("직업구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "12", null, "75", "25", null, "132", this);
            obj.set_taborder("189");
            obj.set_text("내/외국인");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "505", null, "105", "25", null, "156", this);
            obj.set_taborder("190");
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "304", null, "75", "25", null, "156", this);
            obj.set_taborder("191");
            obj.set_text("소득자구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "12", null, "75", "25", null, "156", this);
            obj.set_taborder("192");
            obj.set_text("성명(상호)");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "546", "68", "60", "22", null, null, this);
            obj.set_taborder("193");
            obj.set_text("등록기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPERS_STRT_FROM", "absolute", "608", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("194");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRPERS_STRT_TO", "absolute", "726", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("195");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static4", "absolute", "710", "68", "14", "22", null, null, this);
            obj.set_taborder("196");
            obj.set_text("~");
            obj.style.set_color("#505050ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "221", "68", "75", "22", null, null, this);
            obj.set_taborder("197");
            obj.set_text("소득자구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRLABO_GUBN", "absolute", "298", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("198");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("Static1", "absolute", "420", "68", "35", "22", null, null, this);
            obj.set_taborder("199");
            obj.set_text("상태");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPERS_STAT", "absolute", "458", "68", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("200");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Static("Static2", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("201");
            obj.set_text("성명(상호)");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPECO_NAME", "absolute", "93", "68", "120", "22", null, null, this);
            obj.set_taborder("202");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGITA_MEMO", "absolute", null, null, "949", "21", "14", "14", this);
            obj.set_taborder("203");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSAUP_GUBN", "absolute", "798", null, null, "21", "14", "38", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("204");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtACNT_NUMB", "absolute", "611", null, null, "21", "14", "62", this);
            obj.set_taborder("205");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPERS_ENDX", "absolute", "612", null, "120", "21", null, "38", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("206");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtPERS_FAXX", "absolute", "798", null, null, "21", "14", "86", this);
            obj.set_taborder("207");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_TELE", "absolute", "798", null, null, "21", "14", "110", this);
            obj.set_taborder("208");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_HAND", "absolute", "798", null, null, "21", "14", "134", this);
            obj.set_taborder("209");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJOBS_GUBN", "absolute", "918", null, null, "21", "14", "158", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("210");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtJOBS_GUBN", "absolute", "798", null, "119", "21", null, "158", this);
            obj.set_taborder("211");
            obj.set_maxlength("13");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPERS_JUMN", "absolute", "611", null, "124", "21", null, "158", this);
            obj.set_taborder("212");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCOMP_NUMB", "absolute", "611", null, "124", "21", null, "134", this);
            obj.set_taborder("213");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_ADD2", "absolute", "505", null, "230", "21", null, "110", this);
            obj.set_taborder("214");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMP_ADD2", "absolute", "505", null, "230", "21", null, "86", this);
            obj.set_taborder("215");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPERS_STRT", "absolute", "381", null, "120", "21", null, "38", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("216");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtDPST_NAME", "absolute", "380", null, "124", "21", null, "62", this);
            obj.set_taborder("217");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMP_ADD1", "absolute", "180", null, "324", "21", null, "86", this);
            obj.set_taborder("218");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_ADD1", "absolute", "180", null, "324", "21", null, "110", this);
            obj.set_taborder("219");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPERS_NATI", "absolute", "381", null, "123", "21", null, "134", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("220");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Combo("cmbLABO_GUBN", "absolute", "381", null, "123", "21", null, "158", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("221");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtCOMP_NAME", "absolute", "180", null, "123", "21", null, "158", this);
            obj.set_taborder("222");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRESI_GUBN", "absolute", "180", null, "123", "21", null, "134", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("223");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Combo("cmbFORI_GUBN", "absolute", "88", null, "91", "21", null, "134", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("224");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtPERS_NAME", "absolute", "88", null, "91", "21", null, "158", this);
            obj.set_taborder("225");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPERS_POST", "absolute", "88", null, "68", "21", null, "110", this);
            obj.set_taborder("226");
            obj.set_type("string");
            obj.set_mask("###-###");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCOMP_POST", "absolute", "88", null, "68", "21", null, "86", this);
            obj.set_taborder("227");
            obj.set_type("string");
            obj.set_mask("###-###");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTAKE_EMPL", "absolute", "88", null, "71", "21", null, "38", this);
            obj.set_taborder("228");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "88", null, "215", "21", null, "62", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("229");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");

            obj = new Edit("edtTAKE_EMNM", "absolute", "183", null, "120", "21", null, "38", this);
            obj.set_taborder("230");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsTA_GITAMAST");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPERS_POST", "absolute", "157", null, "22", "22", null, "110", this);
            obj.set_taborder("234");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCOMP_POST", "absolute", "157", null, "22", "22", null, "85", this);
            obj.set_taborder("235");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTAKE_EMPL", "absolute", "160", null, "22", "22", null, "37", this);
            obj.set_taborder("236");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소득자정보등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtTAKE_EMNM_value","edtTAKE_EMNM","value","dsTA_GITAMAST","TAKE_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBANK_CODE_value","cmbBANK_CODE","value","dsTA_GITAMAST","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTAKE_EMPL_value","edtTAKE_EMPL","value","dsTA_GITAMAST","TAKE_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCOMP_POST_value","medCOMP_POST","value","dsTA_GITAMAST","COMP_POST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medPERS_POST_value","medPERS_POST","value","dsTA_GITAMAST","PERS_POST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_NAME_value","edtPERS_NAME","value","dsTA_GITAMAST","PERS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbFORI_GUBN_value","cmbFORI_GUBN","value","dsTA_GITAMAST","FORI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbRESI_GUBN_value","cmbRESI_GUBN","value","dsTA_GITAMAST","RESI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMP_NAME_value","edtCOMP_NAME","value","dsTA_GITAMAST","COMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbLABO_GUBN_value","cmbLABO_GUBN","value","dsTA_GITAMAST","LABO_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPERS_NATI_value","cmbPERS_NATI","value","dsTA_GITAMAST","PERS_NATI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_ADD1_value","edtPERS_ADD1","value","dsTA_GITAMAST","PERS_ADD1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMP_ADD1_value","edtCOMP_ADD1","value","dsTA_GITAMAST","COMP_ADD1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDPST_NAME_value","edtDPST_NAME","value","dsTA_GITAMAST","DPST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPERS_STRT_value","calPERS_STRT","value","dsTA_GITAMAST","PERS_STRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMP_ADD2_value","edtCOMP_ADD2","value","dsTA_GITAMAST","COMP_ADD2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_ADD2_value","edtPERS_ADD2","value","dsTA_GITAMAST","PERS_ADD2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCOMP_NUMB_value","medCOMP_NUMB","value","dsTA_GITAMAST","COMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medPERS_JUMN_value","medPERS_JUMN","value","dsTA_GITAMAST","PERS_JUMN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtJOBS_GUBN_value","edtJOBS_GUBN","value","dsTA_GITAMAST","JOBS_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbJOBS_GUBN_value","cmbJOBS_GUBN","value","dsTA_GITAMAST","JOBS_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_HAND_value","edtPERS_HAND","value","dsTA_GITAMAST","PERS_HAND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_TELE_value","edtPERS_TELE","value","dsTA_GITAMAST","PERS_TELE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_FAXX_value","edtPERS_FAXX","value","dsTA_GITAMAST","PERS_FAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPERS_ENDX_value","calPERS_ENDX","value","dsTA_GITAMAST","PERS_ENDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACNT_NUMB_value","edtACNT_NUMB","value","dsTA_GITAMAST","ACNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSAUP_GUBN_value","cmbSAUP_GUBN","value","dsTA_GITAMAST","SAUP_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGITA_MEMO_value","edtGITA_MEMO","value","dsTA_GITAMAST","GITA_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPERS_NUMB_value","edtPERS_NUMB","value","dsTA_GITAMAST","PERS_NUMB");
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
        this.addIncludeScript("TXMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMD0010.xfdl", function() {
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/

        this.sBUTTONLIST = "TTTTTTTF"; 
        this.sPACKAGENAME = "TXMD0010"; 
        this.sACCT_GUBN = application.GBL_ACCT_GUBN;

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

        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.grdTA_GITAMAST.setFocus();	
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
        	this.fnc_DatasetClear("dsTA_GITAMAST");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_GITAMAST=dsTA_GITAMAST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_GITAMAST.setFocus(); 
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_GITAMAST.addRow();

        	// 회계구분 초기화
        	this.dsTA_GITAMAST.setColumn(iRow, "ACCT_GUBN", this.sACCT_GUBN);
        	
        	// 입력필드를 소득자구분/거주구분에 맞춰서 초기화
        	this.cmbLABO_GUBN_OnChanged(this.cmbLABO_GUBN);
        	this.cmbRESI_GUBN_OnChanged(this.cmbRESI_GUBN);

        	// 등록일자를 초기화
        	this.calPERS_STRT.set_value(this.fnc_GetServerDateTime("DATE"));

        	this.edtPERS_NAME.setFocus(); //입력 첫 항목으로 Focus
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
        	
        	if (this.fn_DeleteCheck()) this.dsTA_GITAMAST.deleteRow(this.dsTA_GITAMAST.rowposition);
        	this.grdTA_GITAMAST.setFocus(); 
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_DataSetCancel("dsTA_GITAMAST"); 
        	this.grdTA_GITAMAST.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTA_GITAMAST=dsTA_GITAMAST:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_GITAMAST.setFocus(); 
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
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_GITAMAST",this);
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

        	if (this.fnc_DatasetChangeCheck("dsTA_GITAMAST")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	// 유효기간 From ~ To 크기 체크
        	if (this.calSHRPERS_STRT_FROM.value != "" && this.calSHRPERS_STRT_TO.value != "") {
        		if (this.calSHRPERS_STRT_FROM.value > this.calSHRPERS_STRT_TO.value) {
        			this.fnc_Message("TMM042", "등록기간 시작일", "등록기간 종료일");
        			this.calSHRPERS_STRT_FROM.set_value(""); //등록기간시작일 From
        			this.calSHRPERS_STRT_TO.set_value(""); //등록기간종료일 To
        			this.calSHRPERS_STRT_FROM.setFocus(); //등록기간시작일 From 으로 Focus
        			return false;
        		}
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var sQuestionText = "성명  (" + this.fnc_Trim(this.dsTA_GITAMAST.getColumn(this.dsTA_GITAMAST.rowposition, "PERS_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck("dsTA_GITAMAST")) {
        		// 저장 할 자료가 없음
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_GITAMAST.getRowCount(); i++) {
        		if (this.dsTA_GITAMAST.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "PERS_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "소득자 성명", this.dsTA_GITAMAST, i, this.edtPERS_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "LABO_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("HR1033", "소득자 구분", this.dsTA_GITAMAST, i, this.cmbLABO_GUBN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "PERS_JUMN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "주민등록번호", this.dsTA_GITAMAST, i, this.medPERS_JUMN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "FORI_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("HR1033", "내/외국인 구분", this.dsTA_GITAMAST, i, this.cmbFORI_GUBN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "RESI_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("HR1033", "거주/비거주 여부", this.dsTA_GITAMAST, i, this.cmbRESI_GUBN, "");
        		} else {
        			if (this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "RESI_GUBN")) != "RM080001") {
        				if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "PERS_NATI"))) < 1) {
        					return this.fnc_CheckPostAction("HR1033", "거주국가", this.dsTA_GITAMAST, i, this.cmbPERS_NATI, "");
        				}
        			}
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "TAKE_EMPL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당자", this.dsTA_GITAMAST, i, this.edtTAKE_EMNM, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "PERS_STRT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "등록일자", this.dsTA_GITAMAST, i, this.calPERS_STRT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "GITA_MEMO"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "비고", this.dsTA_GITAMAST, i, this.edtGITA_MEMO, "");
        		}

        		// 사업소득 선택시 추가 입력사항 체크
        		if (this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "LABO_GUBN")) == "FA010010") {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "COMP_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "사업자 상호", this.dsTA_GITAMAST, i, this.edtCOMP_NAME, "");
        			}

        			// 사업자번호를 10자리로 입력하지 않으면 무효처리함
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "COMP_NUMB"))) == 10) {
        				// 사업자등록번호 유효성 검사
        				if (!this.fnc_FormatCustNumber(this.fnc_Trim(this.dsTA_GITAMAST.getColumn(i, "COMP_NUMB")))) {
        					return this.fnc_CheckPostAction("TMM119", "사업자등록번호", this.dsTA_GITAMAST, i, this.medCOMP_NUMB, "");
        				}
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
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		sReturnString += " PERS_STRT_FROM=" + this.fnc_Quote(this.fnc_Trim(this.calSHRPERS_STRT_FROM.value));
        		sReturnString += " PERS_STRT_TO=" + this.fnc_Quote(this.fnc_Trim(this.calSHRPERS_STRT_TO.value));
        		sReturnString += " PECO_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPECO_NAME.value));
        		sReturnString += " LABO_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRLABO_GUBN.value));
        		sReturnString += " PERS_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRPERS_STAT.value));
        		sReturnString += " USER_DEPT_CD=" + this.fnc_Quote(this.fnc_Trim(application.GBL_DEPTCD));

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
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
        	}
        	else {
        		
        		this.fn_PostProcess(sMethodName);
        	}
        }
        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		// 사용하는 은행코드만 filter 해제
        		this.dsBANK_CODE.filter("");
        		
        		this.fnc_Information(this.stInformation, this.dsTA_GITAMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_GITAMAST.rowcount); //정상 종료 메세지
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("TMM103"); //정상 종료 Message
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        		// 공통 코드 콤보를 가져오기
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRLABO_GUBN,dsSHRLABO_GUBN,0";
        		arrParam[1] = "COMBO,cmbSHRPERS_STAT,dsSHRPERS_STAT,0";
        		arrParam[2] = "COMBO,cmbLABO_GUBN,dsLABO_GUBN,0";
        		arrParam[3] = "COMBO,cmbJOBS_GUBN,dsJOBS_GUBN,0";
        		arrParam[4] = "COMBO,cmbFORI_GUBN,dsFORI_GUBN,0";
        		arrParam[5] = "COMBO,cmbRESI_GUBN,dsRESI_GUBN,0";
        		//arrParam[6] = "COMBO,cmbPERS_NATI,dsPERS_NATI,0";
        		//arrParam[7] = "COMBO,cmbBANK_CODE,dsBANK_CODE,0";
        		arrParam[6] = "COMBO,cmbSAUP_GUBN,dsSAUP_GUBN,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);		
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisable = function (obj) {
        	// if(fnc_ToUpper(GetRowType(dsTA_GITAMAST,e.newrow))== "INSERT") {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		// 사용하는 은행코드 filter
        		//this.dsBANK_CODE.filter("CODDYSNO == '1'");
        		this.dsBANK_CODE.insertRow(0);

        		// 행의 상태에 따라서 소득자 구분 콤보 활성화
        		this.cmbLABO_GUBN.set_enable(true);

        		// if(dsTA_GITAMAST.getColumn(e.newrow, "LABO_GUBN") == 'FA010010' ) {	// 사업소득인 경우
        		if (obj.getColumn(obj.rowposition, "LABO_GUBN") == "FA010010") {
        			// 사업소득인 경우

        			this.imgHelpCOMP_POST.set_enable(true);

        			this.edtCOMP_NAME.set_enable(true);
        			this.edtCOMP_ADD1.set_enable(true);
        			this.edtCOMP_ADD2.set_enable(true);
        			this.cmbJOBS_GUBN.set_enable(true);
        			this.medCOMP_NUMB.set_enable(true);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCapBE");
        			// stCOMP_NUMB.class = "styFormItemCapBE";
        			// stCOMP_ADDR.class = "styFormItemCapBE";

        			// } else if (dsTA_GITAMAST.getColumn(e.newrow, "LABO_GUBN") == 'FA010040'){
        		} else if (obj.getColumn(obj.rowposition, "LABO_GUBN") == "FA010040") {
        			this.imgHelpCOMP_POST.set_enable(true);

        			this.edtCOMP_NAME.set_enable(true);
        			this.edtCOMP_ADD1.set_enable(true);
        			this.edtCOMP_ADD2.set_enable(true);
        			this.cmbJOBS_GUBN.set_enable(true);
        			this.medCOMP_NUMB.set_enable(true);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			// stCOMP_NUMB.class = "styFormItemCapBE";
        			// stCOMP_ADDR.class = "styFormItemCapBE";
        		} else {
        			// 일용/기타소득인 경우

        			this.imgHelpCOMP_POST.set_enable(false);

        			this.edtCOMP_NAME.set_enable(false);
        			this.edtCOMP_ADD1.set_enable(false);
        			this.edtCOMP_ADD2.set_enable(false);
        			this.cmbJOBS_GUBN.set_enable(false);
        			this.medCOMP_NUMB.set_enable(false);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			// stCOMP_NUMB.class = "styFormItemCap";
        			// stCOMP_ADDR.class = "styFormItemCap";
        		}
        	} else {
        		// 사용하는 은행코드 filter 해제
        		this.dsBANK_CODE.filter("");

        		// 행의 상태에 따라서 소득자 구분 콤보 비활성화
        		this.cmbLABO_GUBN.set_enable(false);

        		// if(dsTA_GITAMAST.getColumn(e.newrow, "LABO_GUBN") == 'FA010010' ) {	// 사업소득인 경우
        		if (obj.getColumn(obj.rowposition, "LABO_GUBN") == "FA010010") {
        			// 사업소득인 경우

        			this.imgHelpCOMP_POST.set_enable(true);

        			this.edtCOMP_NAME.set_enable(true);
        			this.edtCOMP_ADD1.set_enable(true);
        			this.edtCOMP_ADD2.set_enable(true);
        			this.cmbJOBS_GUBN.set_enable(true);
        			this.medCOMP_NUMB.set_enable(true);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCapBE");
        			// stCOMP_NUMB.class = "styFormItemCapBE";
        			// stCOMP_ADDR.class = "styFormItemCapBE";

        			// } else if (dsTA_GITAMAST.getColumn(e.newrow, "LABO_GUBN") == 'FA010040'){
        		} else if (obj.getColumn(obj.rowposition, "LABO_GUBN") == "FA010040") {
        			this.imgHelpCOMP_POST.set_enable(true);

        			this.edtCOMP_NAME.set_enable(true);
        			this.edtCOMP_ADD1.set_enable(true);
        			this.edtCOMP_ADD2.set_enable(true);
        			this.cmbJOBS_GUBN.set_enable(true);
        			this.medCOMP_NUMB.set_enable(true);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			// stCOMP_NUMB.class = "styFormItemCapBE";
        			// stCOMP_ADDR.class = "styFormItemCapBE";
        		} else {
        			// 일용/기타소득인 경우

        			this.imgHelpCOMP_POST.set_enable(false);

        			this.edtCOMP_NAME.set_enable(false);
        			this.edtCOMP_ADD1.set_enable(false);
        			this.edtCOMP_ADD2.set_enable(false);
        			this.cmbJOBS_GUBN.set_enable(false);
        			this.medCOMP_NUMB.set_enable(false);

        			this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			// stCOMP_NUMB.class = "styFormItemCap";
        			// stCOMP_ADDR.class = "styFormItemCap";
        		}
        	}

        	// '거주'인 경우
        	if (obj.getColumn(obj.rowposition, "RESI_GUBN") == "RM080001")
        	{
        		this.cmbPERS_NATI.set_enable(false);
        		this.stPERS_NATI.set_cssclass("styFormItemCap");

        		// '비거주'인 경우
        	} else {
        		this.cmbPERS_NATI.set_enable(true);
        		this.stPERS_NATI.set_cssclass("styFormItemCapBE");
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY) {

        	// 아무것도 없을때는 팝업창 조회X
        	if (this.dsTA_GITAMAST.getRowCount() == 0) return;

        	var arrParam = new Array();
        	
        	if(obj.name == "imgHelpPERS_POST"){
        		
        		arrParam[0] = "POST01";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtPERS_ADD1.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtPERS_ADD1";
        		arrParam[5] = "medPERS_POST,edtPERS_ADD1";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ( obj.name == "imgHelpCOMP_POST"){
        	
        		arrParam[0] = "POST01";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtCOMP_ADD1.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtCOMP_ADD1";
        		arrParam[5] = "medCOMP_POST,edtCOMP_ADD1";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        	} else if ( obj.name == "imgHelpTAKE_EMPL" || obj.name == "edtTAKE_EMNM"){
        				
        		arrParam[0] = "TRM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtTAKE_EMNM.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtTAKE_EMNM";
        		arrParam[5] = "edtTAKE_EMPL,edtTAKE_EMNM";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);				

        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------------------------+
         |  소득자구분 선택값에 따라 입력필드 활성화 |
         +-------------------------------------------*/
        this.cmbLABO_GUBN_OnChanged = function (obj,e) {
        	if (obj.value == 'FA010010') {
        		// 사업소득인 경우, 이자배당인경우

        		this.imgHelpCOMP_POST.set_enable(true);
        		this.edtCOMP_NAME.set_enable(true);
        		this.edtCOMP_ADD1.set_enable(true);
        		this.edtCOMP_ADD2.set_enable(true);
        		this.cmbJOBS_GUBN.set_enable(true);
        		this.medCOMP_NUMB.set_enable(true);

        		this.stJOBS_GUBN.set_cssclass("styFormItemCapBE");
        	} else if (obj.value == 'FA010040') {
        		this.imgHelpCOMP_POST.set_enable(true);
        		this.edtCOMP_NAME.set_enable(true);
        		this.edtCOMP_ADD1.set_enable(true);
        		this.edtCOMP_ADD2.set_enable(true);
        		this.cmbJOBS_GUBN.set_enable(true);
        		this.medCOMP_NUMB.set_enable(true);

        		this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        		// stCOMP_NUMB.class = "styFormItemCap";
        		// stCOMP_ADDR.class = "styFormItemCap";
        	} else {
        		// 일용/기타소득인 경우

        		this.imgHelpCOMP_POST.set_enable(false);
        		this.edtCOMP_NAME.set_enable(false);
        		this.edtCOMP_ADD1.set_enable(false);
        		this.edtCOMP_ADD2.set_enable(false);
        		this.cmbJOBS_GUBN.set_enable(false);
        		this.medCOMP_NUMB.set_enable(false);

        
        		this.stJOBS_GUBN.set_cssclass("styFormItemCap");
        		// stCOMP_NUMB.class = "styFormItemCap";
        		// stCOMP_ADDR.class = "styFormItemCap";

        		// 변경시 데이터셋에 저장된 데이터도 삭제
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "COMP_NAME", '');
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "COMP_ADD1", '');
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "COMP_ADD2", '');
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "JOBS_GUBN", '');
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "COMP_NUMB", '');
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "COMP_POST", '');
        	}
        }

        /*-------------------------------------------+
         |  거주/비거주 선택에 따라서 거주국가 활성화 |
         +--------------------------------------------*/
        this.cmbRESI_GUBN_OnChanged = function (obj,e) {
        	if (obj.value == "RM080001") {
        		// '거주'인 경우

        		this.cmbPERS_NATI.set_enable(false);
        		this.dsTA_GITAMAST.setColumn(this.dsTA_GITAMAST.rowposition, "PERS_NATI", "");
        		this.stPERS_NATI.set_cssclass("styFormItemCap");
        	} else {
        		// '비거주'인 경우

        		this.cmbPERS_NATI.set_enable(true);
        		this.cmbPERS_NATI.set_index(0);
        		this.stPERS_NATI.set_cssclass("styFormItemCapBE");
        	}
        }

        this.Div0_btnDown_OnClick = function (obj) {
        	var file_size;
        	var remote_url;
        	var remote_file;
        	var file_url;

        	var file_name;
        	var ret;

        	file_name = "ASSET.xls"; //파일 이름을 내가 만든 엑셀 파일명으로 바꾸기

        	// 위치 지정
        	this.FileDialog2.FileName = file_name;
        	if (!Open(this.FileDialog2, "C:\\")) return;

        	file_url = this.FileDialog2.FilePath + "\\" + this.FileDialog2.FileName;
        	var ret = fnc_FileRead(this.multipart_http, file_url, file_name, 1, null, null, null, "/upload/sample/");

        }

        this.Div0_btnUp_OnClick = function (obj) {
        	if (this.dsTF_ASSETM.getRowCount() == 0) return;

        	this.FileDialog1.Type = "OPEN";
        	this.FileDialog1.Filter = "Excel(.xls)|*.xls|Excel(.xlsx)|*.xlsx|";
        	var result = Open(this.FileDialog1, "C:\\");

        	if (result) {
        		var xls_path = this.FileDialog1.FilePath + "\\" + this.FileDialog1.FileName;

        		this.DS_EXCEL.clearData();
        		ext_ExcelImportByIndex(xls_path, 0, "DS_EXCEL");

        		this.dsTF_ASSETM.set_enableredraw(false);

        		for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        			if (this.fnc_Length(this.DS_EXCEL.getColumn(i, 0)) <= 10) {
        				for (var k = 0; k < this.dsTF_ASSETM.getRowCount(); k++) {
        					if (this.dsTF_ASSETM.getColumn(k, "ITEM_CD") == this.DS_EXCEL.getColumn(i, 0)) {
        						this.dsTF_ASSETM.setColumn(k, "SAFETYSTOCK_QT", this.DS_EXCEL.getColumn(i, 2));
        					}
        				}
        			}
        		}

        		if (!this.fn_SaveItemCheck()) return;

        		var sMethodName = "SAVE01";
        		var sInDataSet = "dsTB_ITEMXM=dsTB_ITEMXM:U";
        		var sOutDataSet = "dsTB_ITEMXM=dsTB_ITEMXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.dsTF_ASSETM.setFocus();

        		this.dsTF_ASSETM.set_enableredraw(true);

        		this.stInformation.set_text((this.DS_EXCEL.getRowCount() + "개의 데이타를 로드 했습니다."));
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_GITAMAST.addEventHandler("onrowposchanged", this.fn_KeyFieldDisable, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtPERS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPERS_STRT_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPERS_STRT_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRLABO_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRPERS_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPECO_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGITA_MEMO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSAUP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPERS_ENDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_FAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_TELE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_HAND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbJOBS_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtJOBS_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_ADD2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMP_ADD2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPERS_STRT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDPST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMP_ADD1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMP_ADD1.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtPERS_ADD1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_ADD1.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbPERS_NATI.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPERS_NATI.addEventHandler("onitemchanged", this.cmbPERS_NATI_onitemchanged, this);
            this.cmbLABO_GUBN.addEventHandler("onitemchanged", this.cmbLABO_GUBN_OnChanged, this);
            this.cmbLABO_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbRESI_GUBN.addEventHandler("onitemchanged", this.cmbRESI_GUBN_OnChanged, this);
            this.cmbRESI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbFORI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTAKE_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTAKE_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTAKE_EMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpPERS_POST.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCOMP_POST.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpTAKE_EMPL.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TXMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
