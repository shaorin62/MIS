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
                this.set_classname("TMMA0010");
                this.set_titletext("공통코드관리");
                this._setFormPosition(0,0,1051,834);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXH", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"COMM_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"COMM_ENNM\" type=\"STRING\" size=\"50\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"UPER_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"CODE_LENG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REFR_NAM1\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_NAM2\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_NAM3\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_NAM4\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_NAM5\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_NAM6\" type=\"STRING\" size=\"100\"/><Column id=\"DESC_REMK\" type=\"STRING\" size=\"100\"/><Column id=\"OLDX_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"OWNE_NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CODEXD", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"COMD_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"COMD_NAME\" type=\"STRING\" size=\"0\"/><Column id=\"COMD_ENNM\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD1\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD2\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD3\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD4\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD5\" type=\"STRING\" size=\"100\"/><Column id=\"REFR_FLD6\" type=\"STRING\" size=\"100\"/><Column id=\"SORT_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USIG_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"HEADFLAG\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSYST_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"COMD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD1\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD2\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD3\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD4\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD5\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD6\" size=\"255\" type=\"STRING\"/><Column id=\"USIG_YSNO\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRSYST_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"COMD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD1\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD2\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD3\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD4\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD5\" size=\"255\" type=\"STRING\"/><Column id=\"REFR_FLD6\" size=\"255\" type=\"STRING\"/><Column id=\"USIG_YSNO\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Shape("spSearchBox0", "absolute", "8", "92", "1035", "38", null, null, this);
            obj.getSetter("type").set("rectangle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgSearchTitle1", "absolute", "396", "100", "52", "22", null, null, this);
            obj.set_taborder("4");
            obj.set_text("시스템");
            obj.style.set_background("transparent");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgSearchTitle0", "absolute", "16", "101", "76", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("공통코드/명");
            obj.style.set_background("transparent");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_NAME", "absolute", "106", "100", "281", "22", null, null, this);
            obj.set_taborder("3");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "448", "101", "149", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.style.set_font("굴림,9,bold antialias");
            obj.set_innerdataset("@dsSHRSYST_CODE");
            obj.set_datacolumn("COMD_NAME");
            obj.set_codecolumn("COMD_CODE");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("stInformation1", "absolute", "8", "157", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_color("black");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "504", "157", "304", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_color("black");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowHead", "absolute", "358", "154", "68", "23", null, null, this);
            obj.set_taborder("6");
            obj.style.set_image("URL('image::btnGridRowAdd.bmp')");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,9");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowHead", "absolute", "428", "154", "68", "23", null, null, this);
            obj.set_taborder("7");
            obj.style.set_image("URL('image::btnGridRowDelete.bmp')");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,9");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowSub", "absolute", "972", "154", "68", "23", null, null, this);
            obj.set_taborder("25");
            obj.style.set_image("URL('image::btnGridRowDelete.bmp')");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,9");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowSub", "absolute", "902", "154", "68", "23", null, null, this);
            obj.set_taborder("24");
            obj.style.set_image("URL('image::btnGridRowAdd.bmp')");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXH", "absolute", "8", "179", null, null, "557", "272", this);
            obj.set_taborder("8");
            obj.set_binddataset("dsTM_CODEXH");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.style.set_background("#f5f5f5ff");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"160\"/><Column size=\"147\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공통코드\"/><Cell col=\"1\" text=\"공통코드명\"/><Cell col=\"2\" text=\"영문명\"/><Cell col=\"3\" text=\"시스템\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMM_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMM_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMM_ENNM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:SYST_CODE\" combodataset=\"dsSYST_CODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXD", "absolute", "504", "179", null, null, "8", "189", this);
            obj.set_taborder("26");
            obj.set_binddataset("dsTM_CODEXD");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.style.set_background("#f5f5f5ff");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"160\"/><Column size=\"147\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"세부코드\"/><Cell col=\"1\" text=\"세부필드명\"/><Cell col=\"2\" text=\"영문명\"/><Cell col=\"3\" text=\"정렬\"/><Cell col=\"4\" text=\"사용\"/><Cell col=\"5\" text=\"보조필드1\"/><Cell col=\"6\" text=\"보조필드2\"/><Cell col=\"7\" text=\"보조필드3\"/><Cell col=\"8\" text=\"보조필드4\"/><Cell col=\"9\" text=\"보조필드5\"/><Cell col=\"10\" text=\"보조필드10\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMD_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMD_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:COMD_ENNM\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:SORT_ORDR\"/><Cell col=\"4\" displaytype=\"checkbox\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:USIG_YSNO\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD1\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD2\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD3\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD4\"/><Cell col=\"9\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD5\"/><Cell col=\"10\" displaytype=\"text\" style=\"background:EXPR(decode(rowlevel, 0, decode(rowType,&quot;insert&quot;,&quot;User11&quot;,&quot;update&quot;,&quot;User12&quot;,&quot;default&quot;), 1, 'User7', 2, 'User8',3,'User9'));\" text=\"bind:REFR_FLD6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape0", "absolute", "8", "569", "487", "257", null, null, this);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "12", "573", "97", "25", null, null, this);
            obj.set_text("공통코드");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "250", "573", "101", "25", null, null, this);
            obj.set_text("시스템");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cobSYST_CODE", "absolute", "351", "574", "139", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.style.set_font("돋움체,9");
            obj.set_innerdataset("@dsSYST_CODE");
            obj.set_datacolumn("COMD_NAME");
            obj.set_codecolumn("COMD_CODE");
            obj.set_cssclass("styFormItemText");

            obj = new Static("staXxxx1", "absolute", "12", "597", "97", "25", null, null, this);
            obj.set_text("공통코드명");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "12", "621", "97", "25", null, null, this);
            obj.set_text("영문명");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "12", "645", "97", "25", null, null, this);
            obj.set_text("상위코드");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "12", "669", "97", "25", null, null, this);
            obj.set_text("소유자");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "12", "693", "97", "25", null, null, this);
            obj.set_text("보조필드명 1");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "12", "717", "97", "25", null, null, this);
            obj.set_text("보조필드명 2");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "12", "741", "97", "25", null, null, this);
            obj.set_text("보조필드명 5");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "12", "765", "97", "57", null, null, this);
            obj.set_text("비고");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_CODE", "absolute", "110", "575", "139", "21", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_NAME", "absolute", "110", "599", "379", "21", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_ENNM", "absolute", "110", "623", "379", "21", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "250", "645", "101", "25", null, null, this);
            obj.set_text("세부코드길이");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "250", "669", "101", "25", null, null, this);
            obj.set_text("복사완료");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "250", "717", "101", "25", null, null, this);
            obj.set_text("보조필드명 4");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "250", "693", "101", "25", null, null, this);
            obj.set_text("보조필드명 2");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "250", "741", "101", "25", null, null, this);
            obj.set_text("보조필드명 6");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPER_CODE", "absolute", "110", "647", "139", "21", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNE_NAME", "absolute", "110", "671", "139", "21", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "110", "695", "139", "21", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit2", "absolute", "110", "719", "139", "21", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit4", "absolute", "110", "743", "139", "21", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit5", "absolute", "352", "743", "137", "21", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("mskCODE_LENG", "absolute", "352", "647", "137", "21", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOLDX_CODE", "absolute", "352", "671", "137", "21", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "352", "695", "137", "21", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3", "absolute", "352", "719", "137", "21", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDESC_REMK", "absolute", "110", "767", "379", "53", null, null, this);
            obj.set_taborder("23");
            obj.style.set_font("굴림체,9,antialias");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape2", "absolute", "506", "651", "535", "173", null, null, this);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "508", "653", "96", "25", null, null, this);
            obj.set_text("세부코드");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "508", "677", "96", "25", null, null, this);
            obj.set_text("세부코드명");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "508", "701", "96", "25", null, null, this);
            obj.set_text("세부영문명");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD1", "absolute", "508", "725", "96", "25", null, null, this);
            obj.set_text("보조필드 1");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD3", "absolute", "508", "749", "96", "25", null, null, this);
            obj.set_text("보조필드 3");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD5", "absolute", "508", "773", "96", "25", null, null, this);
            obj.set_text("보조필드 5");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "508", "797", "96", "25", null, null, this);
            obj.set_text("정렬순서");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_CODE", "absolute", "606", "655", "139", "21", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD2", "absolute", "771", "725", "101", "25", null, null, this);
            obj.set_text("보조필드 2");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD4", "absolute", "771", "749", "101", "25", null, null, this);
            obj.set_text("보조필드 4");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "771", "797", "101", "25", null, null, this);
            obj.set_text("사용여부");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD6", "absolute", "771", "773", "101", "25", null, null, this);
            obj.set_text("보조필드 6");
            obj.style.set_background("skyblue");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD1", "absolute", "606", "727", "164", "21", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("REFR_FLD3", "absolute", "606", "751", "164", "21", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD5", "absolute", "606", "775", "164", "21", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "606", "799", "164", "21", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_NAME", "absolute", "606", "679", "431", "21", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_ENNM", "absolute", "606", "703", "431", "21", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD2", "absolute", "873", "727", "164", "21", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD4", "absolute", "873", "751", "164", "21", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD6", "absolute", "873", "775", "164", "21", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#ffffffb3");
            obj.style.set_font("돋움체,9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRXXXX_XXXX0", "absolute", "872", "798", "162", "21", null, null, this);
            obj.set_taborder("37");
            obj.style.set_color("#707070ff");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgFormTitle", "absolute", "8", "8", "22", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_image("URL('image::imgFormTitle.bmp')");
            obj.set_imagealign("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "37", "8", "453", "22", null, null, this);
            obj.set_text("공통코드 등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "8", "492", "22", null, null, this);
            obj.set_text("공통>공통관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_wordwrap("false");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape01", "absolute", "8", "37", "972", "6", null, null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", "526", "48", "456", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "452", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnCodeCopy", "absolute", "23", "51", "101", "25", null, null, this);
            obj.set_taborder("41");
            obj.set_text("코드복사");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TMMA0010");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("공통코드관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cobSYST_CODE","value","dsTM_CODEXH","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cobSYST_CODE","codecolumn","","COMD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cobSYST_CODE","datacolumn","","COMD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCOMM_NAME","value","dsTM_CODEXH","COMM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCOMM_ENNM","value","dsTM_CODEXH","COMM_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtUPER_CODE","value","dsTM_CODEXH","UPER_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtOWNE_NAME","value","dsTM_CODEXH","OWNE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit0","value","dsTM_CODEXH","REFR_NAM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Edit2","value","dsTM_CODEXH","REFR_NAM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit4","value","dsTM_CODEXH","REFR_NAM5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit5","value","dsTM_CODEXH","REFR_NAM6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","mskCODE_LENG","value","dsTM_CODEXH","CODE_LENG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtOLDX_CODE","value","dsTM_CODEXH","OLDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Edit1","value","dsTM_CODEXH","REFR_NAM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Edit3","value","dsTM_CODEXH","REFR_NAM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","txtDESC_REMK","value","dsTM_CODEXH","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtCOMM_CODE","value","dsTM_CODEXH","COMM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtCOMD_CODE","value","dsTM_CODEXD","COMD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtREFR_FLD1","value","dsTM_CODEXD","REFR_FLD1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","REFR_FLD3","value","dsTM_CODEXD","REFR_FLD3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtREFR_FLD5","value","dsTM_CODEXD","REFR_FLD5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtSORT_ORDR","value","dsTM_CODEXD","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtCOMD_NAME","value","dsTM_CODEXD","COMD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtCOMD_ENNM","value","dsTM_CODEXD","COMD_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtREFR_FLD2","value","dsTM_CODEXD","REFR_FLD2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtREFR_FLD4","value","dsTM_CODEXD","REFR_FLD4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtREFR_FLD6","value","dsTM_CODEXD","REFR_FLD6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","chkSHRXXXX_XXXX0","value","dsTM_CODEXD","USIG_YSNO");
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
        this.addIncludeScript("TMMA0012.xfdl", "lib::lib_common.xjs");
        this.registerScript("TMMA0012.xfdl", function() {
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
        //include "lib::lib_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFTTTF'; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = ''; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = ''; //Form의 Location 정보
        this.sPACKAGENAME = 'erp.u.tmm.a.ab.TMMA0010AB'; //해당 Form에서 사용 할 Package 명

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	this.lookupFunc("fnc_FormLoadSetting").call(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.lookupFunc("fnc_GridSetting").call(this.grdTM_CODEXH);
        	this.lookupFunc("fnc_GridSetting").call(this.grdTM_CODEXD);

        	this.fn_GetCombo();

        	// fnc_GetComboDs(dsCombo);

        	this.fn_Search();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}
        	this.lookupFunc("fnc_DatasetClear").call('dsTM_CODEXH,dsTM_CODEXD');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_CODEXH=dsTM_CODEXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	this.lookupFunc("fnc_DataSetCancel").call("dsTM_CODEXH,dsTM_CODEXD");
        	this.grdTM_CODEXH.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}
        	// 저장 전 처리(필수 체크)
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_CODEXH=dsTM_CODEXH:U dsTM_CODEXD=dsTM_CODEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.lookupFunc("fnc_ToExcel").call(this.grdTM_CODEXH);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadProcess = function (obj)
        {
        	return this.lookupFunc("fnc_FormUnloadCheck").call("dsTM_CODEXH,dsTM_CODEXD", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	this.lookupFunc("fnc_HotKey").call(this, obj, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.lookupFunc("fnc_EditFocus").call(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	if (this.lookupFunc("fnc_DatasetChangeCheck").call('dsTM_CODEXH,dsTM_CODEXD')) 
        	{
        		if (this.lookupFunc("fnc_Message").call("M1023") == false) 
        		{
        			return false;
        		}
        	}

        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (dsobj)
        {
        	// 공통 Head & 상세 변경 체크
        	if (this.lookupFunc("fnc_DatasetChangeCheck").call("dsTM_CODEXH,dsTM_CODEXD") == false) 
        	{
        		this.lookupFunc("fnc_Message").call("M1006");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CODEXH.rowcount; i++) 
        	{
        		if (this.lookupFunc("gfn_ToUpper").call(this.lookupFunc("GetRowType").call(this.dsTM_CODEXH, i)) == "NORMAL") 
        		{
        			continue;
        		}

        		if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(i, "COMM_CODE"))) < 1) 
        		{
        			return this.lookupFunc("fnc_CheckPostAction").call("M1005", "공통코드", this.dsTM_CODEXH, i, this.edtCOMM_CODE, '');
        		}

        		if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(i, "SYST_CODE"))) < 1) 
        		{
        			return this.lookupFunc("fnc_CheckPostAction").call("M1005", "시스템", this.dsTM_CODEXH, i, this.cobSYST_CODE, '');
        		}

        		if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(i, "COMM_NAME"))) < 1) 
        		{
        			return this.lookupFunc("fnc_CheckPostAction").call("M1005", "공통코드명", this.dsTM_CODEXH, i, this.edtCOMM_NAME, '');
        		}
        	}

        	// 공통 상세 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CODEXD.rowcount; i++) 
        	{
        		if (this.lookupFunc("gfn_ToUpper").call(this.lookupFunc("GetRowType").call(this.dsTM_CODEXD, i)) == "NORMAL") 
        		{
        			continue;
        		}

        		if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXD.getColumn(i, "COMD_CODE"))) < 1) 
        		{
        			return this.lookupFunc("fnc_CheckPostAction").call("M1005", "세부코드", this.dsTM_CODEXD, i, this.edtCOMD_CODE, '');
        		}

        		if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXD.getColumn(i, "COMD_NAME"))) < 1) 
        		{
        			return this.lookupFunc("fnc_CheckPostAction").call("M1005", "세부코드명", this.dsTM_CODEXD, i, this.edtCOMD_NAME, '');
        		}
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (dsobj)
        {
        	// 공통 Head 코드 삭제 처리
        	if (dsobj = 'dsTM_CODEXH') 
        	{
        		if (this.dsTM_CODEXH.rowcount < 1) 
        		{
        			this.lookupFunc("fnc_Message").call("M1003");
        			return false;
        		}

        		if (this.dsTM_CODEXD.rowcount > 0) 
        		{
        			this.lookupFunc("fnc_Message").call("M1046", "세부코드가 존재하는 공통코드는 삭제할 수 없습니다.");
        			return false;
        		}

        		var sQuestionText = '(' + this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_NAME")) + ') 공통코드';
        		return this.lookupFunc("fnc_Message").call("M1004", sQuestionText);
        	}
        	else if (dsobj == 'dsTM_CODEXD') 
        	{
        		if (this.dsTM_CODEXD.rowcount < 1) 
        		{
        			this.lookupFunc("fnc_Message").call("M1003");
        			return false;
        		}

        		// 선택된 Row Count
        		var iSelectRowCount = this.lookupFunc("fnc_SelectRowCount").call(this.dsTM_CODEXD);

        		if (iSelectRowCount > 1) 
        		{
        			return this.lookupFunc("fnc_Message").call("M1010", iSelectRowCount);
        		}
        		else 
        		{
        			// 한 건 삭제 처리시 해당 항목에 대한 삭제 여부 확인
        			var sQuestionText = '(' + this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_NAME")) + ') 공통코드의';
        			sQuestionText += ' (' + this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "COMD_NAME")) + ') 세부항목코드 ';
        			return this.lookupFunc("fnc_Message").call("M1004", sQuestionText);
        		}
        	}
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 공통코드조회
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME);
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind);
        		sReturnString += " COMM_NAME=" + this.lookupFunc("gfn_Quote").call(this.edtSHRCOMM_NAME.value); //공통코드명
        		sReturnString += " SYST_CODE=" + this.lookupFunc("gfn_Quote").call(this.cmbSHRSYST_CODE.value); //시스템

        		// 공통세부코드
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME);
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind);
        		sReturnString += " COMM_CODE=" + this.lookupFunc("gfn_Quote").call(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE")); //공통코드

        		// 공통세부코드
        	}
        	else if (sKind == 'COPY00') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME);
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind);
        		sReturnString += " COMM_CODE=" + this.lookupFunc("gfn_Quote").call(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE")); //공통코드
        	}
        	else if (sKind == 'SEARCH02') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME);
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind);
        		sReturnString += " COMM_CODE=" + this.lookupFunc("gfn_Quote").call("SYST_CODE"); //공통코드

        		// 공통코드 및 세부코드 저장
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME);
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind);
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	// Service 후 Progress Bar Close
        	this.lookupFunc("fnc_CloseProgress").call();

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.lookupFunc("fnc_ErrorProcess").call(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.lookupFunc("fnc_Message").call("SERVERMSG", ErrorMSG);
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
        		// trace(dsTM_CODEXH.saveXML());

        		this.lookupFunc("fnc_Information").call(this.stInformation1, this.dsTM_CODEXH.rowcount, "SHR");
        	}
        	else if (sMethodName == 'SEARCH01') 
        	{
        		this.lookupFunc("fnc_Information").call(this.stInformation2, this.dsTM_CODEXD.rowcount, "SHR");
        	}
        	else if (sMethodName == 'SEARCH02') 
        	{
        		this.dsSHRSYST_CODE.insertRow(0);
        		this.dsSHRSYST_CODE.setColumn(0, 'COMD_NAME', '전체');
        		this.dsSHRSYST_CODE.setColumn(0, 'COMD_CODE', '');

        		this.dsSHRSYST_CODE.applyChange();

        		this.cmbSHRSYST_CODE.set_index(0);
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.lookupFunc("fnc_Information").call(this.stInformation1, 0, "SAVE");
        		this.lookupFunc("fnc_Information").call(this.stInformation2, 0, "SAVE");
        		this.lookupFunc("fnc_Message").call("M1008");

        		this.fn_KeyFieldDisible_Head(this.dsTM_CODEXH, 0, this.dsTM_CODEXH.row);
        		this.fn_KeyFieldDisible_Sub(this.dsTM_CODEXD, 0, this.dsTM_CODEXD.rowposition);
        	}
        	else if (sMethodName == 'COPY00') 
        	{
        		this.dsTM_CODEXH.setColumn(this.dsTM_CODEXH.rowposition, 'OLDX_CODE', 'Y');
        		this.dsTM_CODEXH.applyChange();

        		// // 		fnc_Information(stInformation1, 0, "SAVE");
        		// // 		fnc_Information(stInformation2, 0, "SAVE");
        		// fnc_Message("M1008");

        		// // 		fn_KeyFieldDisible_Head(dsTM_CODEXH, 0, dsTM_CODEXH.row);
        		// // 		fn_KeyFieldDisible_Sub(dsTM_CODEXD, 0, dsTM_CODEXD.rowposition);
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// var arrParam = new Array();
        		// arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		// arrParam[1] = "COMBO,cobSYST_CODE,dsSYST_CODE,0";
        		// arrParam[2] = "GRID,grdTM_CODEXH,dsSYST_CODE,SYST_CODE";
        		// fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*-----------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj,e)
        {
        	this.lookupFunc("fnc_DatasetClear").call("dsTM_CODEXD");

        	var nOldRow = e.oldrow;
        	var nRow = e.newrow;

        	if (nRow == -1) 
        	{
        		return;
        	}

        	if (this.dsTM_CODEXH.rowcount < 1) 
        	{
        		return;
        	}
        	this.fn_RefCaptionDisplay(obj, nOldRow, nRow);

        	if (this.lookupFunc("gfn_ToUpper").call(this.lookupFunc("GetRowType").call(obj, nRow)) == "INSERT") 
        	{
        		this.edtCOMM_CODE.set_readonly(false);
        		// edtCOMM_CODE = "default";
        		// fnc_DatasetClear("dsTM_CODEXD");
        	}
        	else 
        	{
        		this.edtCOMM_CODE.set_readonly(true);
        		// edtCOMM_CODE = "User13";
        		this.lookupFunc("fnc_DatasetClear").call("dsTM_CODEXD");

        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible_Sub = function (obj,e)
        {
        	var nOldRow = e.oldrow;
        	var nRow = e.newrow;

        	if (nRow == -1) 
        	{
        		return;
        	}

        	if (this.lookupFunc("gfn_ToUpper").call(this.lookupFunc("GetRowType").call(obj, nRow)) == "INSERT") 
        	{
        		this.edtCOMD_CODE.set_readonly(false);
        		// edtCOMD_CODE = "default";
        	}
        	else 
        	{
        		this.edtCOMD_CODE.set_readonly(true);
        		// edtCOMD_CODE = "User13";
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
        	this.lookupFunc("fnc_GridSort").call(obj, obj.binddataset, e.col);
        }

        /*-----------------+
         |  공통 코드 추가  |
         +------------------*/
        this.fn_AddRow = function (obj)
        {
        	// 공통 Head 코드 추가
        	if (obj.name == 'btnAddRowHead') 
        	{
        		var iRow = this.dsTM_CODEXH.addRow();
        		// dsTM_CODEXH.setColumn(iRow, "SYST_CODE", dsSYST_CODE.getColumn(0, "COMDCODE"));
        		this.dsTM_CODEXH.setColumn(iRow, "CODE_LENG", 4);
        		this.edtCOMM_CODE.setFocus();
        		this.lookupFunc("fnc_DatasetClear").call('dsTM_CODEXD');

        		// 공통 Sub(세부) 코드 추가
        	}
        	else if (obj.name == 'btnAddRowSub') 
        	{
        		var iRow = this.dsTM_CODEXD.addRow();
        		this.dsTM_CODEXD.setColumn(iRow, 'COMM_CODE', this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, 'COMM_CODE'));
        		this.dsTM_CODEXD.setColumn(iRow, 'USIG_YSNO', '1');
        		this.dsTM_CODEXD.setColumn(iRow, 'SORT_ORDR', 0);
        		this.edtCOMD_CODE.setFocus();
        	}
        }

        /*-----------------+
         |  공통 코드 삭제  |
         +------------------*/
        this.fn_DeleteRow = function (obj)
        {
        	// 공통 Head 코드 삭제
        	if (obj.name == 'btnDelRowHead') 
        	{
        		if (this.fn_DeleteCheck("dsTM_CODEXH")) 
        		{
        			this.dsTM_CODEXH.deleteRow(this.dsTM_CODEXH.rowposition);
        		}
        		this.grdTM_CODEXH.setFocus();

        		// 공통 Sub(세부) 코드 추가
        	}
        	else if (obj.name == 'btnDelRowSub') 
        	{
        		if (this.fn_DeleteCheck("dsTM_CODEXD")) 
        		{
        			this.dsTM_CODEXD.deleteSelectedRows();
        		}
        		this.grdTM_CODEXD.setFocus();
        	}
        }

        /*-----------------------------------------------------------------+
         |  공통코드 및 세부 코드 변경 후 다른 Row 이동 체크(저장 후 이동)  |
         +------------------------------------------------------------------*/
        this.dsTM_CODEXH_CanRowPosChange = function (obj,nOldRow,nRow)
        {
        	// if (nRow<0) return;
        	// if (fnc_DatasetChangeCheck('dsTM_CODEXH,dsTM_CODEXD')==false) return;
        	// 
        	// if (fnc_Message("M1023")==false) {
        	// return false;
        	// } else {
        	// fnc_DataSetCancel('dsTM_CODEXH,dsTM_CODEXD');
        	// }
        }

        /*-------------------+
         |  그리드 툴팁 처리  |
         +--------------------*/
        this.fn_GridToolTip = function (obj,e)
        {
        	var nRow = e.row;
        	var nCell = e.cell;

        	this.lookupFunc("fnc_GridTooltip").call(obj, nRow, nCell);
        }

        /*------------------------+
         |  보조필드 Caption 처리  |
         +-------------------------*/
        this.fn_RefCaptionDisplay = function (obj,nOldRow,nRow)
        {
        	var sTitle = "";

        	// 세부코드의 보조 필드 타이틀 수정 처리
        	for (var i = 1; i < 7; i++) 
        	{
        		sTitle = this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(nRow, "REFR_NAM" + i));

        		if (this.lookupFunc("gfn_Length").call(sTitle) > 0) 
        		{
        			this.all["stREFR_FLD" + i].Text = sTitle;
        			this.grdTM_CODEXD.setCellProperty("head", this.lookupFunc("fnc_GridColumnIndex").call(this.grdTM_CODEXD, "REFR_FLD" + i), "text", sTitle);
        		}
        		else 
        		{
        			this.all["stREFR_FLD" + i].Text = "보조필드 " + i;
        			this.grdTM_CODEXD.setCellProperty("head", this.lookupFunc("fnc_GridColumnIndex").call(this.grdTM_CODEXD, "REFR_FLD" + i), "text", "보조필드 " + i);
        		}
        	}
        }

        this.fn_GetCombo = function ()
        {
        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsSHRSYST_CODE=dsSHRSYST_CODE dsSYST_CODE=dsSYST_CODE ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        }

        
        this.btnCodeCopy_onclick = function (obj,e)
        {
        	if (this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, 'OLDX_CODE') == 'Y') 
        	{
        		return this.lookupFunc("fnc_Message").call("M1046", '이미 복사처리 된 건 입니다.... ');
        	}

        	var sQuestionText = '(' + this.lookupFunc("gfn_Trim").call(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_NAME")) + ') 코드를 복사 하시겠습니까? ';

        	if (this.lookupFunc("fnc_Message").call("M1093", sQuestionText)) 
        	{
        		this.fn_copy();
        	}
        }

        this.fn_copy = function ()
        {
        	var sMethodName = "COPY00";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("canrowposchange", this.dsTM_CODEXH_CanRowPosChange, this);
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Sub, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtSHRCOMM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnAddRowHead.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnDelRowHead.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.btnDelRowSub.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.btnAddRowSub.addEventHandler("onclick", this.fn_AddRow, this);
            this.grdTM_CODEXH.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTM_CODEXH.addEventHandler("onmousemove", this.fn_GridToolTip, this);
            this.grdTM_CODEXD.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtCOMM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMM_ENNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPER_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOWNE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit5.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCODE_LENG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOLDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static10.addEventHandler("onclick", this.staXxxx02_onclick, this);
            this.edtCOMD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREFR_FLD1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.REFR_FLD3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREFR_FLD5.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMD_ENNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREFR_FLD2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREFR_FLD4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREFR_FLD6.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnCodeCopy.addEventHandler("onclick", this.btnCodeCopy_onclick, this);

        };

        this.loadIncludeScript("TMMA0012.xfdl");
        this.loadPreloadList();
       
    };
}
)();
