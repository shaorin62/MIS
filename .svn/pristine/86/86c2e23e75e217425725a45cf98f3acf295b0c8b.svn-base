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
                this.set_name("TMMA0010");
                this.set_titletext("공통코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsVI_MENUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"PKGX_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_TBLLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_COLLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"IS_PK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ROW_STATUS\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"INPUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"IME_MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSaveTM_TBLLIST", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"PROG_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABL_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CRTE_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"READ_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEAU_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSaveTM_COLLIST", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"PROG_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"IS_PK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_WIDTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INPUT_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEY_FIELD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_IDXX\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SAVE_COND\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEL_CHECK\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMPONENT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"MANDATORY\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"Q_ORDER\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"TEXT_ALIGN\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"IME_MODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_POPUP\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ICOMPONENT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ROW_STATUS\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboNEXA_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CDNM\">생성안함</Col><Col id=\"COMD_CODE\"/></Row><Row><Col id=\"COMD_CODE\">nxtype01</Col><Col id=\"COMD_CDNM\">1Grid</Col></Row><Row><Col id=\"COMD_CODE\">nxtype02</Col><Col id=\"COMD_CDNM\">Grid(상) + Form(하)</Col></Row><Row><Col id=\"COMD_CDNM\">Grid(좌) + Form(우)</Col><Col id=\"COMD_CODE\">nxtype03</Col></Row><Row><Col id=\"COMD_CDNM\">(M)Grid(상) + (D)Grid(하)</Col><Col id=\"COMD_CODE\">nxtype04</Col></Row><Row><Col id=\"COMD_CDNM\">(M)Grid(상) + (D)Grid(하)+(D)Form(하)</Col><Col id=\"COMD_CODE\">nxtype05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSave00", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"SYST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PKGX_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRTR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MSSQ_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ORSQ_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAOX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CTRL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NEXA_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OVRW_YSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SYST_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSaveTM_COLLIST_copy", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"PROG_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"IS_PK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_WIDTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INPUT_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEY_FIELD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_IDXX\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SAVE_COND\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEL_CHECK\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMPONENT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"MANDATORY\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"Q_ORDER\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"TEXT_ALIGN\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"IME_MODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CODE_POPUP\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ICOMPONENT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ROW_STATUS\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboCOMPONET", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">01</Col><Col id=\"COMD_CDNM\">input</Col></Row><Row><Col id=\"COMD_CODE\">02</Col><Col id=\"COMD_CDNM\">select</Col></Row><Row><Col id=\"COMD_CDNM\">inputCalendar</Col><Col id=\"COMD_CODE\">03</Col></Row><Row><Col id=\"COMD_CDNM\">inpuCalendar(기간)</Col><Col id=\"COMD_CODE\">04</Col></Row><Row><Col id=\"COMD_CDNM\">popup(코드/명)</Col><Col id=\"COMD_CODE\">05</Col></Row><Row><Col id=\"COMD_CDNM\">popup(명)</Col><Col id=\"COMD_CODE\">06</Col></Row><Row><Col id=\"COMD_CDNM\">checkBox</Col><Col id=\"COMD_CODE\">07</Col></Row><Row><Col id=\"COMD_CDNM\">radio</Col><Col id=\"COMD_CODE\">08</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboSAVE_COND", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">0</Col><Col id=\"COMD_CDNM\"/></Row><Row><Col id=\"COMD_CODE\">1</Col><Col id=\"COMD_CDNM\">입력가능</Col></Row><Row><Col id=\"COMD_CDNM\">필수입력</Col><Col id=\"COMD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboINPUT_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">text</Col><Col id=\"COMD_CDNM\">text</Col></Row><Row><Col id=\"COMD_CODE\">select</Col><Col id=\"COMD_CDNM\">select</Col></Row><Row><Col id=\"COMD_CDNM\">checkbox</Col><Col id=\"COMD_CODE\">checkbox</Col></Row><Row><Col id=\"COMD_CDNM\">textImage</Col><Col id=\"COMD_CODE\">textImage</Col></Row><Row><Col id=\"COMD_CDNM\">checkcombobox</Col><Col id=\"COMD_CODE\">checkcombobox</Col></Row><Row><Col id=\"COMD_CDNM\">calendar</Col><Col id=\"COMD_CODE\">calendar</Col></Row><Row><Col id=\"COMD_CDNM\">link</Col><Col id=\"COMD_CODE\">link</Col></Row><Row><Col id=\"COMD_CDNM\">radio</Col><Col id=\"COMD_CODE\">radio</Col></Row><Row><Col id=\"COMD_CDNM\">expression</Col><Col id=\"COMD_CODE\">expression</Col></Row><Row><Col id=\"COMD_CDNM\">textarea</Col><Col id=\"COMD_CODE\">textarea</Col></Row><Row><Col id=\"COMD_CDNM\">drilldown</Col><Col id=\"COMD_CODE\">drilldown</Col></Row><Row><Col id=\"COMD_CDNM\">button</Col><Col id=\"COMD_CODE\">button</Col></Row><Row><Col id=\"COMD_CDNM\">image</Col><Col id=\"COMD_CODE\">image</Col></Row><Row><Col id=\"COMD_CDNM\">autoComplete</Col><Col id=\"COMD_CODE\">autoComplete</Col></Row><Row><Col id=\"COMD_CDNM\">secret</Col><Col id=\"COMD_CODE\">secret</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboICOMPONET00", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">01</Col><Col id=\"COMD_CDNM\">input</Col></Row><Row><Col id=\"COMD_CODE\">02</Col><Col id=\"COMD_CDNM\">select</Col></Row><Row><Col id=\"COMD_CDNM\">inputCalendar</Col><Col id=\"COMD_CODE\">03</Col></Row><Row><Col id=\"COMD_CDNM\">inpuCalendar(기간)</Col><Col id=\"COMD_CODE\">04</Col></Row><Row><Col id=\"COMD_CDNM\">popup(코드/명)</Col><Col id=\"COMD_CODE\">05</Col></Row><Row><Col id=\"COMD_CDNM\">popup(명)</Col><Col id=\"COMD_CODE\">06</Col></Row><Row><Col id=\"COMD_CDNM\">checkBox</Col><Col id=\"COMD_CODE\">07</Col></Row><Row><Col id=\"COMD_CDNM\">radio</Col><Col id=\"COMD_CODE\">08</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboTEXT_ALIGN", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">left</Col><Col id=\"COMD_CDNM\">left</Col></Row><Row><Col id=\"COMD_CODE\">center</Col><Col id=\"COMD_CDNM\">center</Col></Row><Row><Col id=\"COMD_CDNM\">right</Col><Col id=\"COMD_CODE\">right</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboIME_MODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">auto</Col><Col id=\"COMD_CDNM\"/></Row><Row><Col id=\"COMD_CODE\">active</Col><Col id=\"COMD_CDNM\">한글우선</Col></Row><Row><Col id=\"COMD_CDNM\">영문우선</Col><Col id=\"COMD_CODE\">inactive</Col></Row><Row><Col id=\"COMD_CDNM\">영문only</Col><Col id=\"COMD_CODE\">disabled</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboCODE_POPUP", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CODE\">1</Col><Col id=\"COMD_CDNM\">공통코드</Col></Row><Row><Col id=\"COMD_CODE\">2</Col><Col id=\"COMD_CDNM\">사용자코드</Col></Row><Row><Col id=\"COMD_CDNM\">팝업</Col><Col id=\"COMD_CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation1", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, "486", "68", "23", "79", null, this);
            obj.set_taborder("91");
            obj.set_cssclass("styCommBtnAddRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, "486", "68", "23", "9", null, this);
            obj.set_taborder("92");
            obj.set_cssclass("styCommBtnDeleteRow");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("공통코드관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>공통관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("98");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnGenerateCode", "absolute", "0", "1", "76", "23", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("소스생성");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("right middle");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "47", "22", null, null, this);
            obj.set_text("시스템");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "227", "68", "74", "22", null, null, this);
            obj.set_text("프로그램명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPROG_NAME", "absolute", "306", "68", "281", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "68", "68", "149", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Grid("grdVI_MENUXM", "absolute", "8", "132", "608", "209", null, null, this);
            obj.set_binddataset("dsVI_MENUXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("93");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"83\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"시스템\"/><Cell col=\"1\" displaytype=\"text\" text=\"프로그램ID\"/><Cell col=\"2\" displaytype=\"text\" text=\"프로그램명\"/><Cell col=\"3\" displaytype=\"text\" text=\"패키지명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SYST_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:PROG_IDXX\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:PROG_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:PKGX_NAME\" autosizecol=\"limitmax\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_TBLLIST", "absolute", "624", "132", null, "209", "8", null, this);
            obj.set_binddataset("dsTM_TBLLIST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("allband");
            obj.set_selecttype("row");
            obj.set_taborder("96");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_readonly("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\"/><Cell col=\"1\" text=\"테이블명\"/><Cell col=\"2\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:TABLE_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:COMMENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_taborder("99");
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "352", "607", "128", null, null, this);
            obj.set_taborder("100");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "11", "427", "97", "49", null, null, this);
            obj.set_taborder("125");
            obj.set_text("옵션");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "107", "427", "126", "25", null, null, this);
            obj.set_taborder("126");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "107", "355", "183", "25", null, null, this);
            obj.set_taborder("128");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROG_IDXX", "absolute", "109", "357", "179", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "365", "355", "247", "25", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "107", "379", "183", "25", null, null, this);
            obj.set_taborder("132");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROG_NAME", "absolute", "109", "381", "179", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "365", "379", "247", "25", null, null, this);
            obj.set_taborder("134");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_NAME", "absolute", "367", "381", "243", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "107", "403", "183", "25", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPKGX_NAME", "absolute", "109", "405", "179", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "365", "403", "247", "25", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWRTR_NAME", "absolute", "367", "405", "243", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "11", "355", "96", "25", null, null, this);
            obj.set_taborder("140");
            obj.set_text("프로그램ID");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "289", "355", "76", "25", null, null, this);
            obj.set_taborder("141");
            obj.set_text("시스템");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "11", "379", "96", "25", null, null, this);
            obj.set_taborder("142");
            obj.set_text("프로그램명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "289", "379", "76", "25", null, null, this);
            obj.set_taborder("143");
            obj.set_text("테이블명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "11", "403", "96", "25", null, null, this);
            obj.set_taborder("144");
            obj.set_text("패키지명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "289", "403", "76", "25", null, null, this);
            obj.set_taborder("145");
            obj.set_text("작성자");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSYST_CODE", "absolute", "367", "357", "243", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("146");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new CheckBox("chkOVRW_YSNO", "absolute", "111", "431", "122", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_text("기존코드삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "232", "427", "126", "25", null, null, this);
            obj.set_taborder("149");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "357", "427", "126", "25", null, null, this);
            obj.set_taborder("150");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "482", "427", "130", "25", null, null, this);
            obj.set_taborder("151");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "107", "451", "126", "25", null, null, this);
            obj.set_taborder("152");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "232", "451", "126", "25", null, null, this);
            obj.set_taborder("153");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "357", "451", "126", "25", null, null, this);
            obj.set_taborder("154");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "482", "451", "130", "25", null, null, this);
            obj.set_taborder("155");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkMSSQ_YSNO", "absolute", "236", "431", "122", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_text("MSSQL");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkORSQ_YSNO", "absolute", "361", "431", "122", "21", null, null, this);
            obj.set_taborder("157");
            obj.set_text("ORACLE");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDAOX_YSNO", "absolute", "486", "431", "126", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_text("DAO");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSVIM_YSNO", "absolute", "111", "455", "122", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_text("SERVICEIMPL");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSVIC_YSNO", "absolute", "236", "455", "122", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_text("SERVICE");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCTRL_YSNO", "absolute", "361", "455", "122", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("CONTROLLER");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNEXA_TYPE", "absolute", "484", "453", "126", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("162");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_innerdataset("@dsComboNEXA_TYPE");
            obj.set_text("생성안함");
            obj.set_index("0");

            obj = new Grid("grdSaveTM_TBLLIST", "absolute", "624", "352", null, "128", "8", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("163");
            obj.set_binddataset("dsSaveTM_TBLLIST");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"테이블명\"/><Cell col=\"1\" text=\"설명\"/><Cell col=\"2\" text=\"순서명\"/><Cell col=\"3\" text=\"R\"/><Cell col=\"4\" text=\"C\"/><Cell col=\"5\" text=\"U\"/><Cell col=\"6\" text=\"D\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:TABLE_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:COMMENTS\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:TABL_ORDR\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:READ_YSNO\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CRTE_YSNO\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:UPDT_YSNO\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEAU_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSaveTM_COLLIST", "absolute", "8", "511", null, null, "8", "8", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("164");
            obj.set_binddataset("dsSaveTM_COLLIST");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"data\"/><Cell col=\"5\" colspan=\"3\" text=\"검색조건\"/><Cell col=\"8\" colspan=\"7\" text=\"GridView\"/><Cell col=\"15\" colspan=\"3\" text=\"팝업/콤보\"/><Cell row=\"1\" text=\"table\"/><Cell row=\"1\" col=\"1\" text=\"column\"/><Cell row=\"1\" col=\"2\" text=\"columnName\"/><Cell row=\"1\" col=\"3\" text=\"keyField\"/><Cell row=\"1\" col=\"4\" text=\"삭제확인\"/><Cell row=\"1\" col=\"5\" text=\"component\"/><Cell row=\"1\" col=\"6\" text=\"mandatory\"/><Cell row=\"1\" col=\"7\" text=\"ORDER\"/><Cell row=\"1\" col=\"8\" text=\"editMode\"/><Cell row=\"1\" col=\"9\" text=\"inputType\"/><Cell row=\"1\" col=\"10\" text=\"component\"/><Cell row=\"1\" col=\"11\" text=\"textAlign\"/><Cell row=\"1\" col=\"12\" text=\"width\"/><Cell row=\"1\" col=\"13\" text=\"imeMode\"/><Cell row=\"1\" col=\"14\" text=\"구분\"/><Cell row=\"1\" col=\"15\" text=\"팝업/콤보코드\"/><Cell row=\"1\" col=\"16\" text=\"코드ID\"/><Cell row=\"1\" col=\"17\" text=\"코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:TABLE_NAME\" combodataset=\"dsSaveTM_TBLLIST\" combocodecol=\"TABLE_NAME\" combodatacol=\"COMMENTS\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:COLUMN_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMMENTS\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:KEY_FIELD\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_CHECK\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:COMPONENT\" combodataset=\"dsComboCOMPONET\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MANDATORY\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:Q_ORDER\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SAVE_COND\" combodataset=\"dsComboSAVE_COND\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INPUT_TYPE\" combodataset=\"dsComboINPUT_TYPE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ICOMPONENT\" combodataset=\"dsComboICOMPONET00\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TEXT_ALIGN\" combodataset=\"dsComboTEXT_ALIGN\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" text=\"bind:COLUMN_WIDTH\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:IME_MODE\" combodataset=\"dsComboIME_MODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CODE_POPUP\" combodataset=\"dsComboCODE_POPUP\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"text\" text=\"bind:CODE_TYPE\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" text=\"bind:CODE_IDXX\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"text\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "628", "104", "74", "22", null, null, this);
            obj.set_taborder("165");
            obj.set_text("테이블명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTABLE_NAME", "absolute", "706", "104", "281", "22", null, null, this);
            obj.set_taborder("166");
            obj.set_imemode("none");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("98");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통코드관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtPROG_IDXX","value","dsVI_MENUXM","PROG_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtPROG_NAME","value","dsVI_MENUXM","PROG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtPROG_NAME","","dsVI_MENUXM","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtPKGX_NAME","value","dsVI_MENUXM","PKGX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmbSYST_CODE","value","dsVI_MENUXM","SYST_CODE");
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
        this.addIncludeScript("TMMD0300.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0300.xfdl", function() {
        /****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMD0300"; //해당 Form에서 사용 할 Package 명

        this.SEARCH02_TABLE_NAME = "";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "TTTTTTTT";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "5";   //Form의 Location 정보
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
        	
        	//그리드 헤더 클릭시 소트이벤트를 제거하기 위해 fnc_GridSetting 하기전에 nosort 스트링true 등록
        	this.grdSaveTM_TBLLIST.nosort="true";
        	this.grdSaveTM_COLLIST.nosort="true";
        	
        	
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fn_Search();
        	this.fn_table_Search();

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
        	this.fnc_DatasetClear("dsVI_MENUXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsVI_MENUXM=dsVI_MENUXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdVI_MENUXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음.
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        /*
        	this.fnc_DataSetCancel("dsVI_MENUXM,dsSaveTM_TBLLIST,dsSaveTM_C");
        	this.grdTM_CODEXH.setFocus();
        */
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        /*
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsVI_MENUXM=dsVI_MENUXM:U dsTM_CODEXD=dsTM_CODEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();
        */
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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsVI_MENUXM,dsSaveTM_TBLLIST,dsSaveTM_C", this);

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

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        
        	if (this.fnc_DatasetChangeCheck('dsVI_MENUXM,dsSaveTM_TBLLIST,dsSaveTM_COLLIST')) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
         
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {
        /*
        	// 공통 Head 코드 삭제 처리
        	if (obj == "dsVI_MENUXM") {
        	
        		if (this.dsVI_MENUXM.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		if (this.dsTM_CODEXD.getRowCount() > 0) {
        			this.fnc_Message("TMM125", "세부코드가 존재하는 공통코드는 삭제할 수 없습니다.");
        			return false;
        		}

        		var sQuestionText = "(" + this.fnc_Trim(this.dsVI_MENUXM.getColumn(this.dsVI_MENUXM.rowposition, "COMM_CDNM")) + ") 공통코드";
        		return this.fnc_Message("TMM002", sQuestionText);
        	
        	} else if (obj == "dsTM_CODEXD") {
        	
        		if (this.dsTM_CODEXD.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var sQuestionText = "(" + this.fnc_Trim(this.dsVI_MENUXM.getColumn(this.dsVI_MENUXM.rowposition, "COMM_CDNM")) + ") 공통코드의";
        		sQuestionText += " (" + this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "COMD_CDNM")) + ") 세부항목코드 ";
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        */
        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 메뉴 조회
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " PROG_NAME=" + this.fnc_Quote(this.edtSHRPROG_NAME.value); //공통코드명
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.cmbSHRSYST_CODE.value); //시스템

        	// 테이블정보 조회
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);

        	// 컬럼정보 조회
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " TABLE_NAME=" 	 + this.fnc_Quote(this.SEARCH02_TABLE_NAME); //공통코드

        	// 테이블정보 저장용
        	} else if (sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " PROG_IDXX=" 	 + this.fnc_Quote(this.edtPROG_IDXX.value); //공통코드

        	// 컬럼정보 저장용
        	} else if (sKind == "SEARCH04") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " PROG_IDXX=" 	 + this.fnc_Quote(this.edtPROG_IDXX.value); //공통코드

        	// 공통코드 및 세부코드 저장			
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
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
        	
        		this.fnc_Information(this.stInformation1, this.dsVI_MENUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		//this.fnc_Information(this.stInformation2, this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {

        		//테이블 목록에서 체크해서 검색된 컬럼데이터를 save 컬럼으로 옮긴다.
        		this.copyColDataList();

        	} else if (sMethodName == "SEARCH03") {
        	
        		//기존에 체크된 테이블목록을 초기화
        		for( var i = 0 ; i < this.dsTM_TBLLIST.getRowCount(); i++){
        			this.dsTM_TBLLIST.setColumn( i, "CHK", "0" );
        		}
        		
        		//기존에 체크된 테이블목록을 체크처리
        		for( var i = 0 ; i < this.dsSaveTM_TBLLIST.getRowCount(); i++){
        			var sTABLE_NAME = this.dsSaveTM_TBLLIST.getColumn( i, "TABLE_NAME");
        			var matchedRow = this.dsTM_TBLLIST.findRow( "TABLE_NAME", sTABLE_NAME);
        			if(matchedRow >= 0){
        				this.dsTM_TBLLIST.setColumn( matchedRow, "CHK", "1" );
        			}
        		}		

        	} else if (sMethodName == "SEARCH04") {
        	
        		//this.fnc_Information(this.stInformation2, this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        				
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "COMBO,cmbSYST_CODE,dsSYST_CODE,0";
        		arrParam[2] = "GRID,grdVI_MENUXM,dsSYST_CODE,SYST_CODE";
        		
        		
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible_Sub = function (obj) { 
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------+
         |  테이블 검색  |
         +------------------*/
        this.fn_table_Search = function () {

        	this.fnc_DatasetClear("dsTM_TBLLIST");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_TBLLIST=dsTM_TBLLIST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------+
         |  컬럼 추가  |
         +------------------*/
        this.fn_AddRow = function (obj,e) {

        		var iRow = this.dsSaveTM_COLLIST.addRow();
        		this.dsSaveTM_COLLIST.setColumn(iRow, "KEY_FIELD", "0");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "DEL_CHECK", "0");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "COMPONENT", "");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "MANDATORY", "0");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "SAVE_COND", "0");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "INPUT_TYPE", "text");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "TEXT_ALIGN", "left");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "COLUMN_WIDTH", "80");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "IME_MODE", "auto");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "CODE_POPUP", "");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "ROW_STATUS", "C");
        		this.dsSaveTM_COLLIST.setColumn(iRow, "ICOMPONENT", "");
        		this.grdSaveTM_COLLIST.setFocus();
        }

        /*------------------+
         |  컬럼 삭제  |
         +------------------*/
        this.fn_DeleteRow = function (obj,e) {
        	
        	if (this.fn_DeleteCheck("dsSaveTM_COLLIST")) {
        		this.dsSaveTM_COLLIST.deleteRow(this.dsSaveTM_COLLIST.rowposition);
        	}
        	this.grdSaveTM_COLLIST.setFocus();

        }

        /*------------------------------------------------------------------+
         |  공통코드 및 세부 코드 변경 후 다른 Row 이동 체크(저장 후 이동)  |
         +------------------------------------------------------------------*/
        this.dsVI_MENUXM_CanRowPosChange = function (obj,e) {

        	if (e.newrow < 0 || e.oldrow < 0) return;

        	if (this.dsVI_MENUXM.getRowType(e.oldrow) == Dataset.ROWTYPE_NORMAL || this.dsVI_MENUXM.getRowType(e.oldrow) == Dataset.ROWTYPE_EMPTY) {
        		if (this.fnc_DatasetChangeCheck("dsTM_CODEXD") == false) return;
        	} else {
        		if (this.fnc_DatasetChangeCheck("dsVI_MENUXM,dsSaveTM_TBLLIST,dsSaveTM_C") == false) return;
        	}
        	
        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsVI_MENUXM,dsSaveTM_TBLLIST,dsSaveTM_C");
        	}
        }

        /*-------------------------+
         |  보조필드 Caption 처리  |
         +-------------------------*/
        this.fn_RefCaptionDisplay = function (obj,nRow) {

        	var sTitle = "";
        	// 세부코드의 보조 필드 타이틀 수정 처리
        	for (var i = 1; i < 7; i++) {
        	
        		sTitle = this.fnc_Trim(this.dsVI_MENUXM.getColumn(nRow, "REFR_NAM" + i));

        		if (this.fnc_Length(sTitle) > 0) {
        		
        			eval("this.stREFR_FLD"+i+"").set_text(sTitle);
        			this.grdTM_CODEXD.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "REFR_FLD" + i), "text", sTitle);
        		
        		} else {
        		
        			eval("this.stREFR_FLD"+i+"").set_text(("보조필드 " + i));
        			this.grdTM_CODEXD.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "REFR_FLD" + i), "text", "보조필드 " + i);
        		
        		}
        	}
        }

        /*-------------------------+
         |  테이블목록 그리드에서 체크한 데이터를 저장테이블목록에 셋팅  |
         +-------------------------*/
        this.dsTM_TBLLIST_onvaluechanged = function(obj,e)
        {
        	if(e.columnid!="CHK") return;
        	
        	//체크한 로우의 테이블 명을 가져온 다음에
        	var findTable = this.dsTM_TBLLIST.getColumn(e.row,"TABLE_NAME");
        	
        	//밑에 그리드에 데이터가 있는지
        	var matchrow = this.dsSaveTM_TBLLIST.findRow("TABLE_NAME",findTable);

        	var matchflag = true;
        	if(matchrow<0){
        		matchflag = false;
        	}
        	
        	var newValue = e.newvalue;
        	
        	//컬럼데이터 조회/삭제용 파라미터 셋팅
        	this.SEARCH02_TABLE_NAME = findTable;
        	
        	//체크해제는 0이나 블랭크가 오는 경우가 있어서 1을 기준으로 분기한다.
        	if(newValue=="1"){
        		//데이터 생성
        		if(matchflag){
        			//데이터가 이미 있는데 추가? (버그가 아니면 없음)
        		}else{
        			//데이터가 없어서 추가
        			//가장 밑에 추가하면서 순서명은 맥스2자리

        			var maxrow  = this.dsSaveTM_TBLLIST.addRow();
        			this.dsSaveTM_TBLLIST.copyRow(maxrow,this.dsTM_TBLLIST,e.row);
        			this.dsSaveTM_TBLLIST.setColumn(maxrow,"READ_YSNO","1");
        			this.dsSaveTM_TBLLIST.setColumn(maxrow,"CRTE_YSNO","1");
        			this.dsSaveTM_TBLLIST.setColumn(maxrow,"UPDT_YSNO","1");
        			this.dsSaveTM_TBLLIST.setColumn(maxrow,"DEAU_YSNO","1");

        			//해당 테이블명 조건 추가하고 컬럼 검색

        			this.fnc_DatasetClear("dsTM_COLLIST");
        			var sMethodName = "SEARCH02";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsTM_COLLIST=dsTM_COLLIST";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			this.grdVI_MENUXM.setFocus();
        		}		
        	}else{
        		//데이터 삭제
        		if(matchflag){
        			//데이터가 이미 있는데   해당 로우 삭제
        			this.dsSaveTM_TBLLIST.deleteRow( matchrow );
        			this.deleteColDataList();
        			
        			//해당 테이블명 관련된거 삭제.
        			//scwin.deleteColDataList();
        		}else{
        			//데이터가 없는데 삭제? (버그가 아니면 없음)
        		}		
        	}	

        	//생성이나 삭제할때 순서명을 00부터 새로 넣는다.
        	var maxrow = this.dsSaveTM_TBLLIST.getRowCount();
        	var maxlen = 2;	

        	for(var i=0;i<maxrow;i++){
        		var v_TABL_ORDR = this.fillZero(i,maxlen);
        		this.dsSaveTM_TBLLIST.setColumn( i , "TABL_ORDR" , v_TABL_ORDR );
        		this.dsSaveTM_TBLLIST.setColumn( i , "PROG_IDXX" , this.edtPROG_IDXX.value );
        	}
        	
        	
        	this.makeDM_LIST();
        }

        /*-------------------------+
         |  자리수만큼 0을 채운다.  |
         +-------------------------*/
        this.fillZero = function(str,maxLen) {
            var len = str;
            var zero = "";

            if (typeof str == 'number')  len = '' + str;

            if (len.length < maxLen) {
                for (var i=len.length; i<maxLen; i++) {
                    zero += "0";
                }
            }
            return  (zero + '' + str);
        }

        /*-------------------------+
         |  테이블컬럼명을 , 구분자로 붙인다.  |
         +-------------------------*/
        this.makeDM_LIST = function() {

        	var objdtl;	//조건내용 데이터를 변경할때 사용

        	objdtl = this.dsSaveTM_TBLLIST;	
        	
        	//구분상세데이터, 코드집합, 코드명집합 생성
        	var a_code = "";	//코드집합
        	
        	for(i=0;i < objdtl.getRowCount();i++){

        		if(a_code == ""){
        			a_code = a_code	+ objdtl.getColumn( i , "TABLE_NAME" );
        		} else {	
        			a_code = a_code	+ "," + objdtl.getColumn( i , "TABLE_NAME" );
        		}
        	}
        	
        	this.edtTABLE_NAME.set_value(a_code);
        }

        /*-------------------------+
         |  테이블목록 필터  |
         +-------------------------*/
        this.edtSHRTABLE_NAME_onchanged = function(obj,e)
        {
        	if(e.posttext==""){
        		this.dsTM_TBLLIST.filter("");
        	}else{
        		//this.dsTM_TBLLIST.filter("TABLE_NAME=='"+e.posttext.toUpperCase()+"'||COMMENTS=='"+e.posttext+"'");
        		//필터를 like '%%' 방식으로 거는거
        		this.dsTM_TBLLIST.filter("String(TABLE_NAME+COMMENTS).indexOf('" + e.posttext.toUpperCase() + "') >= 0"); 
        	}
        }

        /*-------------------------+
         |  컬럼 목록을 저장컬럼목록에 복사  |
         +-------------------------*/
        this.copyColDataList = function()
        {
        	this.dsSaveTM_COLLIST.mergeData(this.dsTM_COLLIST);
        }

        /*-------------------------+
         |  테이블목록에서 체크 해제된 컬럼을 제거  |
         +-------------------------*/
        this.deleteColDataList = function()
        {
        	//해당 테이블 네임을 가진 로우를 전부 삭제할때 까지 루프반복을 했는데 그리드 draw이벤트에서 꼬여서 rows로 변경

        /*
        	var mrow=0;
        	while((mrow=this.dsSaveTM_COLLIST.findRow("TABLE_NAME",this.SEARCH02_TABLE_NAME))>=0){
        	
        		//updatecontrol를 false로 셋팅하고 지워야 로우가 날아간다.
        		//true인 경우 d 상태로 로우가 남아있어서 findrow할 때 걸림.
        		this.dsSaveTM_COLLIST.deleteRow(mrow);
        	}
        */	
        	var maxrow= this.dsSaveTM_COLLIST.getRowCount();
        	
        	var mindex = [];
        	var mindexcnt = 0;
        	for(var i=0;i<maxrow;i++){
        		if(this.dsSaveTM_COLLIST.getColumn(i,"TABLE_NAME")==this.SEARCH02_TABLE_NAME){
        			mindex[mindexcnt++]=i;
        		}
        	}
        	this.dsSaveTM_COLLIST.deleteMultiRows(mindex);
        	
        }

        /*-------------------------+
         |  프로그램 목록 변경되기 전에 바뀐거 있는지체크  |
         +-------------------------*/
        this.dsVI_MENUXM_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0 || e.oldrow < 0) return;

        	if (this.fnc_DatasetChangeCheck("dsSaveTM_TBLLIST,dsSaveTM_COLLIST") == false) return;
        	
        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsSaveTM_TBLLIST,dsSaveTM_COLLIST");
        	}
        }

        /*-------------------------+
         |  프로그램목록 변경된거 체크후 저장된 데이터 검색  |
         +-------------------------*/
        this.dsVI_MENUXM_onrowposchanged = function(obj,e)
        {
        	
        	this.fnc_DatasetClear("dsSaveTM_TBLLIST");
        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsSaveTM_TBLLIST=dsSaveTM_TBLLIST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.fnc_DatasetClear("dsSaveTM_COLLIST");
        	var sMethodName = "SEARCH04";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsSaveTM_COLLIST=dsSaveTM_COLLIST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	

        	return;
        }

        /*-------------------------+
         |  코드생성 버튼 클릭  |
         +-------------------------*/
        this.fn_GenerateCode = function(obj,e)
        {

        	if (this.fnc_Length(this.fnc_Trim(this.edtWRTR_NAME.value)) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "작성자", this.dsSave00, i, this.edtWRTR_NAME, "");
        	}
        	
        	var dsSave00=this.dsSave00;
        	dsSave00.clearData();
        	dsSave00.insertRow(0);
        	//데이터 초기화. 1행만 사용
        	
        	//메뉴테이블에서 복사해서 붙이고, 나머지는 컴포넌트에서 붙인다.
        	dsSave00.setColumn(0,"WRTR_NAME",this.edtWRTR_NAME.value);
        	dsSave00.setColumn(0,"TABLE_NAME",this.edtTABLE_NAME.value);
        	dsSave00.setColumn(0,"MSSQ_YSNO",this.chkMSSQ_YSNO.value);
        	dsSave00.setColumn(0,"ORSQ_YSNO",this.chkORSQ_YSNO.value);
        	dsSave00.setColumn(0,"DAOX_YSNO",this.chkDAOX_YSNO.value);
        	dsSave00.setColumn(0,"SVIM_YSNO",this.chkSVIM_YSNO.value);
        	dsSave00.setColumn(0,"SVIC_YSNO",this.chkSVIC_YSNO.value);
        	dsSave00.setColumn(0,"CTRL_YSNO",this.chkCTRL_YSNO.value);
        	dsSave00.setColumn(0,"NEXA_TYPE",this.cmbNEXA_TYPE.value);
        	dsSave00.setColumn(0,"OVRW_YSNO",this.chkOVRW_YSNO.value);

        	//포커스 로우 인덱스도 없어서 ds바인딩된 값을 이용해서 키값으로 인덱스를 찾는다.
        	var curmainrow = this.dsVI_MENUXM.findRow("PROG_IDXX",this.edtPROG_IDXX.value);
        	
        	dsSave00.copyRow(0,this.dsVI_MENUXM,curmainrow);

        	if (!this.checkGenerateCode()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsSave00=dsSave00:A dsSaveTM_TBLLIST=dsSaveTM_TBLLIST:A dsSaveTM_COLLIST=dsSaveTM_COLLIST:A";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-------------------------+
         |  코드생성 파라미터 체크  |
         +-------------------------*/
        this.checkGenerateCode = function()
        {
        	return true;
        }

        

        this.dragging_grdname="";
        /*-------------------------+
         |  그리드 드래그앤 드랍 시작 함수: ondrag 에 등록, return true로 종료할때만 onDragEnd 실행된다.  |
         +-------------------------*/
        this.grdCommon_onDragStart = function(obj,e)
        {
        	this.dragging_grdname=obj.name;
        	if(e.row>=0){
        		obj.start_row=e.row;
        		return true;
        	}else{
        		obj.start_row=-1;
        		this.dragging_grdname="";
        		return false;
        	}
        }

        /*-------------------------+
         |  그리드 드래그앤 드랍 종료 함수: ondrop 에 등록  |
         +-------------------------*/
        this.grdCommon_onDragEnd = function(obj,e)
        {
        	var startrow=obj.start_row;
        	var endrow=e.row;
        	
        	//헤더나 바디밑에 드랍하면 endrow에 음수가 나온다.
        	if(startrow>=0 && endrow>=0 && startrow!=endrow && obj.name==this.dragging_grdname){
        	
        		var targetDs = obj.getBindDataset();//이벤트 발생 그리드의 데이타셋을 가져와서 두 행을 변경한다.
        		
        		targetDs.exchangeRow(startrow,endrow);
        		
        		switch(targetDs.name){
        			case "dsSaveTM_TBLLIST":
        				//테이블저장목록에서 일어난 경우 순서명을 새로 만든다.
        				var maxrow = this.dsSaveTM_TBLLIST.getRowCount();
        				var maxlen = 2;	

        				for(var i=0;i<maxrow;i++){
        					var v_TABL_ORDR = this.fillZero(i,maxlen);
        					this.dsSaveTM_TBLLIST.setColumn( i , "TABL_ORDR" , v_TABL_ORDR );
        				}
        				
        				this.makeDM_LIST();	
        				this.changeColDataList();
        				
        				break;
        				
        			case "dsSaveTM_COLLIST":

        				
        				break;
        			
        			default :
        			
        		}

        	}else{
        		//드랍 위치가 비정상적인 경우
        	}

        	//A그리드에서 드래그 시작하고 그리드 밖에서 드랍하면 드랍함수 실행 안됨.
        	//이상태에서 B그리드에서 드래그 시작해서 A그리드 안에 드랍하면 이전 A그리드 시작값이 B그리드 드랍값이 붙음
        	//예외처리로 오브젝트 name을 전역변수로 지정해서 시작과 종료가 같은 그리드에서 일어날때만 발생시키고, 그 외 초기화 시킴
        	//초기화 해야할 값은 시작로우와 시작오브젝트이름
        	obj.start_row=-1;
        	this.dragging_grdname="";	
        }

        /*-------------------------+
         |  테이블저장목록 순서가 변경될때 컬럼순서를 테이블단위로 재정렬  |
         +-------------------------*/
        this.changeColDataList = function()
        {
        	//테이블저장목록에서 순서대로 테이블이름을 가져와서
        	//컬럼목록에 테이블단위로 복사해서 붙이고
        	//앞에 있는 원복 데이터 날림.
        	
        	var targetDsTable = this.dsSaveTM_TBLLIST;
        	var targerDsCol = this.dsSaveTM_COLLIST;
        	var	targerDsColCopy = this.dsSaveTM_COLLIST_copy;
        	
        	var maxTableRow = targetDsTable.getRowCount();
        	var initColRow = targerDsCol.getRowCount()-1;
        	
        	//복사공간 초기화
        	targerDsColCopy.clearData();
        	
        	for(i=0;i<maxTableRow;i++){
        		
        		var tablename= targetDsTable.getColumn(i,"TABLE_NAME");
        	
        		targerDsCol.filter("TABLE_NAME=='"+tablename+"'");
        		
        		//필터링을 해서 필터링 된 것만(테이블네임 단위로) 복사한다.
        		targerDsColCopy.appendData(targerDsCol);
        	}
        	targerDsCol.filter("");
        	targerDsCol.clearData();
        	targerDsCol.copyData(targerDsColCopy);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsVI_MENUXM.addEventHandler("canrowposchange", this.dsVI_MENUXM_canrowposchange, this);
            this.dsVI_MENUXM.addEventHandler("onrowposchanged", this.dsVI_MENUXM_onrowposchanged, this);
            this.dsTM_TBLLIST.addEventHandler("onvaluechanged", this.dsTM_TBLLIST_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnAddRow.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnDelRow.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.divButtonList.btnGenerateCode.addEventHandler("onclick", this.fn_GenerateCode, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRPROG_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkOVRW_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkMSSQ_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkORSQ_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkDAOX_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkSVIM_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkSVIC_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkCTRL_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.grdSaveTM_TBLLIST.addEventHandler("ondrag", this.grdCommon_onDragStart, this);
            this.grdSaveTM_TBLLIST.addEventHandler("ondrop", this.grdCommon_onDragEnd, this);
            this.grdSaveTM_TBLLIST.addEventHandler("oncellclick", this.grdSaveTM_TBLLIST_oncellclick, this);
            this.grdSaveTM_COLLIST.addEventHandler("ondrag", this.grdCommon_onDragStart, this);
            this.grdSaveTM_COLLIST.addEventHandler("ondrop", this.grdCommon_onDragEnd, this);
            this.edtSHRTABLE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRTABLE_NAME.addEventHandler("onchanged", this.edtSHRTABLE_NAME_onchanged, this);

        };

        this.loadIncludeScript("TMMD0300.xfdl");
        this.loadPreloadList();
       
    };
}
)();
