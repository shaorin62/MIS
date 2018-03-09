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
                this.set_name("MDMB0010");
                this.set_titletext("케이블&종편_개별청약");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_CTMDXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_MOND\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TUES\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_WEDN\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_THUR\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FRID\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SATU\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SUND\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TTST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TTED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_CHCK\" type=\"STRING\" size=\"256\"/><Column id=\"PRMN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCMTX_FLAGCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CMTX_FLAG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMTX_FLAG_CODE\">T</Col><Col id=\"CMTX_FLAG_NAME\">유</Col></Row><Row><Col id=\"CMTX_FLAG_CODE\">F</Col><Col id=\"CMTX_FLAG_NAME\">무</Col></Row><Row><Col id=\"CMTX_FLAG_NAME\">영세율</Col><Col id=\"CMTX_FLAG_CODE\">P</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTRTX_FLAGCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRTX_FLAG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TRTX_FLAG_CODE\">T</Col><Col id=\"TRTX_FLAG_NAME\">유</Col></Row><Row><Col id=\"TRTX_FLAG_CODE\">F</Col><Col id=\"TRTX_FLAG_NAME\">무</Col></Row><Row><Col id=\"TRTX_FLAG_NAME\">영세율</Col><Col id=\"TRTX_FLAG_CODE\">P</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("개별청약");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "522", "0", null, "29", "25", null, this);
            obj.set_taborder("13");
            obj.set_text("매체관리 > 케이블&종편");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "361", "71", "51", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "28", "97", "55", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("청구지");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "417", "71", "80", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "499", "71", "23", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "522", "71", "120", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "83", "97", "80", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMEDX_CODE", "absolute", "165", "97", "21", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_NAME", "absolute", "188", "97", "120", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", null, "21", "915", null, this);
            obj.set_taborder("23");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "572", "129", null, "25", "534", null, this);
            obj.set_taborder("24");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_CTMDXM", "absolute", "8", "154", null, null, "25", "235", this);
            obj.set_binddataset("dsMD_CTMDXM");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"98\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"51\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"일련번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"8\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"9\" style=\"background:transparent;\" text=\"방송시작시간\"/><Cell col=\"10\" style=\"background:transparent;\" text=\"방송종료시간\"/><Cell col=\"11\" style=\"background:transparent;\" text=\"방송시급\"/><Cell col=\"12\" text=\"방송시급\"/><Cell col=\"13\" style=\"background:transparent;\" text=\"방송구분\"/><Cell col=\"14\" style=\"background:transparent;\" text=\"방송초수\"/><Cell col=\"15\" style=\"background:transparent;\" text=\"월\"/><Cell col=\"16\" style=\"background:transparent;\" text=\"화\"/><Cell col=\"17\" style=\"background:transparent;\" text=\"수\"/><Cell col=\"18\" style=\"background:transparent;\" text=\"목\"/><Cell col=\"19\" style=\"background:transparent;\" text=\"금\"/><Cell col=\"20\" style=\"background:transparent;\" text=\"토\"/><Cell col=\"21\" style=\"background:transparent;\" text=\"일\"/><Cell col=\"22\" style=\"background:transparent;\" text=\"방송회수\"/><Cell col=\"23\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"단가\"/><Cell col=\"24\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"25\" style=\"background:transparent;\" text=\"지역구분\"/><Cell col=\"26\" style=\"background:transparent;\" text=\"청약구분\"/><Cell col=\"27\" style=\"background:transparent;\" text=\"광고형태\"/><Cell col=\"28\" style=\"background:transparent;\" text=\"광고유형\"/><Cell col=\"29\" style=\"background:transparent;\" text=\"계약형태\"/><Cell col=\"30\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고시작일\"/><Cell col=\"31\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고종료일\"/><Cell col=\"32\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송시작일\"/><Cell col=\"33\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송종료일\"/><Cell col=\"34\" text=\"수수료율\"/><Cell col=\"35\" text=\"수수료\"/><Cell col=\"36\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"계획치구분\"/><Cell col=\"37\" style=\"background:transparent;\" text=\"비고\"/><Cell col=\"38\" style=\"background:transparent;\" text=\"적용일자\"/><Cell col=\"39\" style=\"background:transparent;\" text=\"부서명\"/><Cell col=\"40\" style=\"background:transparent;\" text=\"사원명\"/><Cell col=\"41\" style=\"background:transparent;\" text=\"위수탁부가세\"/><Cell col=\"42\" style=\"background:transparent;\" text=\"수수료부가세\"/><Cell col=\"43\" style=\"background:transparent;\" text=\"위수탁번호\"/><Cell col=\"44\" style=\"background:transparent;\" text=\"수수료번호\"/><Cell col=\"45\" text=\"위수탁계산서번호\"/><Cell col=\"46\" text=\"수수료계산서번호\"/><Cell col=\"47\" text=\"위수탁전표번호\"/><Cell col=\"48\" text=\"수수료전표번호\"/><Cell col=\"49\" style=\"background:transparent;\" text=\"자동계산\"/><Cell col=\"50\" style=\"background:transparent;\" text=\"투입경로\"/><Cell col=\"51\" style=\"background:transparent;\" text=\"등록일자\"/><Cell col=\"52\" style=\"background:transparent;\" text=\"등록자\"/><Cell col=\"53\" style=\"background:transparent;\" text=\"수정일\"/><Cell col=\"54\" style=\"background:transparent;\" text=\"수정자\"/><Cell col=\"55\" style=\"background:transparent;\" text=\"서비스체크\"/><Cell col=\"56\" style=\"background:transparent;\" text=\"전월이월순번\"/><Cell col=\"57\" style=\"background:transparent;\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:PRGM_NAME\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:STAR_TIME\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ENDD_TIME\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HOUR_TYPE\"/><Cell col=\"12\" edittype=\"none\" text=\"bind:RHOU_TYPE\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BROD_FLAG\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SECD_FILD\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_MOND\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_TUES\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_WEDN\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_THUR\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_FRID\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SATU\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SUND\"/><Cell col=\"22\" edittype=\"none\" text=\"bind:CONT_FILD\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PRCE_FILD\" mask=\"#,###\"/><Cell col=\"24\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"25\" displaytype=\"normal\" edittype=\"none\" text=\"bind:AREA_FLAG\"/><Cell col=\"26\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SUBS_FLAG\"/><Cell col=\"27\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ADDX_FORM\"/><Cell col=\"28\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ADDX_TYPE\"/><Cell col=\"29\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CONT_FORM\"/><Cell col=\"30\" displaytype=\"date\" edittype=\"none\" text=\"bind:TTST_DATE\"/><Cell col=\"31\" displaytype=\"date\" edittype=\"none\" text=\"bind:TTED_DATE\"/><Cell col=\"32\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNST_DATE\"/><Cell col=\"33\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNED_DATE\"/><Cell col=\"34\" text=\"bind:COMI_RATE\"/><Cell col=\"35\" style=\"align:right;\" text=\"bind:COMI_FILD\"/><Cell col=\"36\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:PLAN_FLAG\"/><Cell col=\"37\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"38\" displaytype=\"text\" edittype=\"none\" text=\"bind:APLY_DATE\"/><Cell col=\"39\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"40\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"41\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"42\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"43\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"44\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"45\" text=\"bind:TRTX_NUMB\"/><Cell col=\"46\" text=\"bind:CMTX_NUMB\"/><Cell col=\"47\" text=\"bind:TRCH_NUMB\"/><Cell col=\"48\" text=\"bind:CMCF_NUMB\"/><Cell col=\"49\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ATCT_FLAG\"/><Cell col=\"50\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INPT_PATH\" combodataset=\"dsINPT_PATHCombo\" combocodecol=\"INPT_PATH_CODE\" combodatacol=\"INPT_PATH_NAME\"/><Cell col=\"51\" displaytype=\"normal\" edittype=\"date\" text=\"bind:INST_DATE\"/><Cell col=\"52\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"53\" displaytype=\"date\" edittype=\"none\" text=\"bind:UPDT_DATE\"/><Cell col=\"54\" edittype=\"none\" text=\"bind:UPDT_USID\"/><Cell col=\"55\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:SERV_CHCK\"/><Cell col=\"56\" edittype=\"none\" text=\"bind:PRMN_SEQX\"/><Cell col=\"57\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:AORX_FLAG\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\" style=\"align:center;\" text=\"합계\"/><Cell col=\"23\"/><Cell col=\"24\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\" style=\"align:center;\" text=\"수수료합계\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/><Cell col=\"55\"/><Cell col=\"56\"/><Cell col=\"57\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "572", "482", "81", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", null, null, "21", "747", "210", this);
            obj.set_taborder("26");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, "1143", "15", null, "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "195", "25", "15", this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("stYEAR_MNTH", "absolute", "28", null, "95", "21", null, "180", this);
            obj.set_taborder("29");
            obj.set_text("년월");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stCUST_NAME", "absolute", "28", null, "95", "21", null, "154", this);
            obj.set_taborder("30");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NAME", "absolute", "400", null, "97", "21", null, "154", this);
            obj.set_taborder("31");
            obj.set_text("사원명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("stMEMO_FILD", "absolute", "772", null, "81", "21", null, "24", this);
            obj.set_taborder("32");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stTTST_DATE", "absolute", "400", null, "97", "21", null, "76", this);
            obj.set_taborder("33");
            obj.set_text("총광고기간");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sbPRGM_NAME", "absolute", "400", null, "97", "21", null, "128", this);
            obj.set_taborder("34");
            obj.set_text("프로그램명");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("stBRND_NAME", "absolute", "28", null, "95", "21", null, "128", this);
            obj.set_taborder("35");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stCTIM_NAME", "absolute", "28", null, "95", "21", null, "102", this);
            obj.set_taborder("36");
            obj.set_text("광고주 팀");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stMNST_DATE", "absolute", "400", null, "97", "21", null, "102", this);
            obj.set_taborder("37");
            obj.set_text("금월방송기간");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stSECD_FILD", "absolute", "772", null, "81", "21", null, "154", this);
            obj.set_taborder("38");
            obj.set_text("초수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stSUBS_FLAG", "absolute", "772", null, "81", "21", null, "102", this);
            obj.set_taborder("39");
            obj.set_text("청약구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stMEDX_NAME", "absolute", "28", null, "95", "21", null, "76", this);
            obj.set_taborder("40");
            obj.set_text("청구지");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "508", "30", "164", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_COPYAll", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("전체복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CopyRow", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("내역복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "204", null, "21", "21", null, "154", this);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "227", null, "120", "21", null, "154", this);
            obj.set_taborder("0");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpBRND_CODE", "absolute", "204", null, "21", "21", null, "128", this);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRND_NAME", "absolute", "227", null, "120", "21", null, "128", this);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCTIM_CODE", "absolute", "204", null, "21", "21", null, "102", this);
            obj.set_taborder("46");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_NAME", "absolute", "227", null, "120", "21", null, "102", this);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMEDX_CODE", "absolute", "204", null, "21", "21", null, "76", this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEDX_NAME", "absolute", "227", null, "120", "21", null, "76", this);
            obj.set_taborder("3");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_CODE", "absolute", "576", null, "21", "22", null, "153", this);
            obj.set_taborder("48");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYEAR_MNTH", "absolute", "122", null, "80", "21", null, "180", this);
            obj.set_taborder("49");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_inputtype("number");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRMED_NAME", "absolute", "28", null, "95", "21", null, "50", this);
            obj.set_taborder("50");
            obj.set_text("매체");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpRMED_CODE", "absolute", "204", null, "21", "21", null, "50", this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRMED_NAME", "absolute", "227", null, "120", "21", null, "50", this);
            obj.set_taborder("4");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stAORX_FLAG", "absolute", "668", null, "45", "21", null, "50", this);
            obj.set_taborder("52");
            obj.set_text("AOR");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAORX_FLAG", "absolute", "712", null, "13", "21", null, "50", this);
            obj.set_taborder("53");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMI_FILD", "absolute", "964", null, "65", "21", null, "76", this);
            obj.set_taborder("54");
            obj.set_text("수수료");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMI_RATE", "absolute", "772", null, "81", "21", null, "76", this);
            obj.set_taborder("55");
            obj.set_text("수수료율");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "122", null, "80", "21", null, "154", this);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtCOMI_FILD", "absolute", "1032", null, "90", "21", null, "76", this);
            obj.set_readonly("true");
            obj.set_taborder("57");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRND_CODE", "absolute", "122", null, "80", "21", null, "128", this);
            obj.set_taborder("58");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_CODE", "absolute", "122", null, "80", "21", null, "102", this);
            obj.set_taborder("59");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEDX_CODE", "absolute", "122", null, "80", "21", null, "76", this);
            obj.set_taborder("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_ETMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRMED_CODE", "absolute", "122", null, "80", "21", null, "50", this);
            obj.set_taborder("61");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_CODE", "absolute", "494", null, "80", "21", null, "154", this);
            obj.set_taborder("62");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "599", null, "120", "21", null, "154", this);
            obj.set_taborder("63");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRGM_NAME", "absolute", "494", null, "225", "21", null, "128", this);
            obj.set_taborder("64");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECD_FILD", "absolute", "853", null, "90", "21", null, "154", this);
            obj.set_taborder("65");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMI_RATE", "absolute", "853", null, "50", "21", null, "76", this);
            obj.set_taborder("66");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "694", "71", "50", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "749", "71", "80", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_CODE", "absolute", "831", "71", "21", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "854", "71", "120", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSUBS_FLAG", "absolute", "853", null, "90", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_index("-1");

            obj = new Static("Static04", "absolute", "361", "97", "51", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("매체");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_CODE", "absolute", "417", "97", "80", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRRMED_CODE", "absolute", "499", "97", "21", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_NAME", "absolute", "522", "97", "120", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_NAME", "absolute", "400", null, "97", "21", null, "180", this);
            obj.set_taborder("79");
            obj.set_text("담당부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "494", null, "80", "21", null, "180", this);
            obj.set_taborder("80");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "576", null, "21", "21", null, "180", this);
            obj.set_taborder("81");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "599", null, "120", "21", null, "180", this);
            obj.set_taborder("82");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEMO_FILD", "absolute", "853", null, "90", "21", null, "24", this);
            obj.set_taborder("89");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stPRCE_FILD", "absolute", "964", null, "65", "21", null, "128", this);
            obj.set_taborder("90");
            obj.set_text("단가");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtPRCE_FILD", "absolute", "1032", null, "90", "21", null, "128", this);
            obj.set_taborder("91");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stCMTX_FLAG", "absolute", "562", null, "95", "21", null, "24", this);
            obj.set_taborder("92");
            obj.set_text("수수료부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCMTX_FLAG", "absolute", "659", null, "60", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_innerdataset("@dsTRTX_FLAGCombo");
            obj.set_codecolumn("TRTX_FLAG_CODE");
            obj.set_datacolumn("TRTX_FLAG_NAME");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");

            obj = new Combo("cmbTRTX_FLAG", "absolute", "494", null, "60", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_innerdataset("@dsTRTX_FLAGCombo");
            obj.set_codecolumn("TRTX_FLAG_CODE");
            obj.set_datacolumn("TRTX_FLAG_NAME");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_index("-1");

            obj = new Static("stTRTX_FLAG", "absolute", "400", null, "97", "21", null, "24", this);
            obj.set_taborder("95");
            obj.set_text("위수탁부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stAMNT_FILD", "absolute", "964", null, "65", "21", null, "102", this);
            obj.set_taborder("96");
            obj.set_text("금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtAMNT_FILD", "absolute", "1032", null, "90", "21", null, "102", this);
            obj.set_taborder("97");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calMNST_DATE", "absolute", "494", null, "102", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("83");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");

            obj = new Calendar("calTTET_DATE", "absolute", "617", null, "102", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");

            obj = new Static("Static07", "absolute", "602", null, "14", "21", null, "102", this);
            obj.set_taborder("84");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Calendar("calMNED_DATE", "absolute", "617", null, "102", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");

            obj = new Calendar("calTTST_DATE", "absolute", "494", null, "102", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");

            obj = new Static("Static29", "absolute", "602", null, "14", "21", null, "76", this);
            obj.set_taborder("87");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", "162", "35", "74", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSEQX_FILD", "absolute", "282", null, "65", "21", null, "180", this);
            obj.set_taborder("99");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSEQX_FILD", "absolute", "214", null, "66", "21", null, "180", this);
            obj.set_taborder("100");
            obj.set_text("일련번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stHOUR_TYPE", "absolute", "964", null, "65", "21", null, "154", this);
            obj.set_taborder("101");
            obj.set_text("방송시급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbHOUR_TYPE", "absolute", "1032", null, "90", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("102");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");

            obj = new Static("stSTAR_TIME", "absolute", "400", null, "97", "21", null, "50", this);
            obj.set_taborder("103");
            obj.set_text("방송시간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSTAR_TIME", "absolute", "494", null, "80", "21", null, "50", this);
            obj.set_taborder("104");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENDD_TIME", "absolute", "594", null, "80", "21", null, "50", this);
            obj.set_taborder("105");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_WEEK", "absolute", "772", null, "81", "21", null, "180", this);
            obj.set_taborder("106");
            obj.set_text("방송요일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_TUES", "absolute", "900", null, "25", "21", null, "180", this);
            obj.set_taborder("107");
            obj.set_text("화");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_WEDN", "absolute", "939", null, "25", "21", null, "180", this);
            obj.set_taborder("108");
            obj.set_text("수");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_THUR", "absolute", "979", null, "24", "21", null, "180", this);
            obj.set_taborder("109");
            obj.set_text("목");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_FRID", "absolute", "1019", null, "25", "21", null, "180", this);
            obj.set_taborder("110");
            obj.set_text("금");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_SATU", "absolute", "1060", null, "26", "21", null, "180", this);
            obj.set_taborder("111");
            obj.set_text("토");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stBROD_SUND", "absolute", "1101", null, "26", "21", null, "180", this);
            obj.set_taborder("112");
            obj.set_text("일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sbBROD_MOND", "absolute", "858", null, "24", "21", null, "180", this);
            obj.set_taborder("113");
            obj.set_text("월");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_TUES", "absolute", "894", null, "25", "21", null, "180", this);
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_taborder("114");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_MOND", "absolute", "853", null, "23", "21", null, "180", this);
            obj.set_taborder("115");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_WEDN", "absolute", "936", null, "24", "21", null, "180", this);
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_taborder("116");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_THUR", "absolute", "974", null, "23", "21", null, "180", this);
            obj.set_taborder("117");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_FRID", "absolute", "1014", null, "24", "21", null, "180", this);
            obj.set_taborder("118");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_SATU", "absolute", "1055", null, "25", "21", null, "180", this);
            obj.set_taborder("119");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_SUND", "absolute", "1096", null, "23", "21", null, "180", this);
            obj.set_taborder("120");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCONT_FILD", "absolute", "853", null, "90", "21", null, "128", this);
            obj.set_taborder("121");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stCONT_FILD", "absolute", "772", null, "81", "21", null, "128", this);
            obj.set_taborder("122");
            obj.set_text("횟수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stSERV_CHCK", "absolute", "772", null, "81", "21", null, "50", this);
            obj.set_taborder("123");
            obj.set_text("서비스구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBROD_TUES00", "absolute", "853", null, "21", "21", null, "50", this);
            obj.getSetter("binddataset").set("dsMD_CTMDXM");
            obj.set_taborder("124");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("stSERV_DVSN", "absolute", "864", null, "73", "21", null, "50", this);
            obj.set_taborder("125");
            obj.set_text("서비스광고");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "579", null, "14", "21", null, "50", this);
            obj.set_taborder("126");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Div("CalSHRYEAR_MNTH", "absolute", "83", "71", "103", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "522", "93", "120", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 103, 21, this.CalSHRYEAR_MNTH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("127");
            		p.set_url("common::comMonthCalendar.xfdl");

            	}
            );
            this.CalSHRYEAR_MNTH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("케이블&종편_개별청약");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtASCL_NAME_value","edtCUST_CODE","value","dsMD_CTMDXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCOMI_FILD","binddataset","dsMD_CTMDXM","COMI_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCOMI_FILD","value","dsMD_CTMDXM","COMI_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtYEAR_MNTH","binddataset","dsMD_CTMDXM","YEAR_MNTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtYEAR_MNTH","value","dsMD_CTMDXM","YEAR_MNTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtCUST_CODE","binddataset","dsMD_CTMDXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtCUST_NAME","binddataset","dsMD_CTMDXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtCUST_NAME","value","dsMD_CTMDXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtBRND_CODE","value","dsMD_CTMDXM","BRND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtBRND_CODE","binddataset","dsMD_CTMDXM","BRND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtCTIM_CODE","value","dsMD_CTMDXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtCTIM_CODE","binddataset","dsMD_CTMDXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtMEDX_CODE","value","dsMD_CTMDXM","MEDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtMEDX_CODE","binddataset","dsMD_CTMDXM","MEDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtRMED_CODE","value","dsMD_CTMDXM","RMED_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtRMED_CODE","binddataset","dsMD_CTMDXM","RMED_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtBRND_NAME","value","dsMD_CTMDXM","BRND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtBRND_NAME","binddataset","dsMD_CTMDXM","BRND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtCTIM_NAME","value","dsMD_CTMDXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtCTIM_NAME","binddataset","dsMD_CTMDXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtMEDX_NAME","value","dsMD_CTMDXM","MEDX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtMEDX_NAME","binddataset","dsMD_CTMDXM","MEDX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtRMED_NAME","value","dsMD_CTMDXM","RMED_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtRMED_NAME","binddataset","dsMD_CTMDXM","RMED_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtEMPL_CODE","value","dsMD_CTMDXM","EMPL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtEMPL_CODE","binddataset","dsMD_CTMDXM","EMPL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtEMPL_NAME","binddataset","dsMD_CTMDXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edtEMPL_NAME","value","dsMD_CTMDXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edtPRGM_NAME","binddataset","dsMD_CTMDXM","PRGM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edtPRGM_NAME","value","dsMD_CTMDXM","PRGM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","edtSECD_FILD","binddataset","dsMD_CTMDXM","SECD_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","edtSECD_FILD","value","dsMD_CTMDXM","SECD_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","chkAORX_FLAG","binddataset","dsMD_CTMDXM","AORX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","chkAORX_FLAG","value","dsMD_CTMDXM","AORX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","edtCOMI_RATE","binddataset","dsMD_CTMDXM","COMI_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","edtCOMI_RATE","value","dsMD_CTMDXM","COMI_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","cmbSUBS_FLAG","value","dsMD_CTMDXM","SUBS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","cmbSUBS_FLAG","binddataset","dsMD_CTMDXM","SUBS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtDEPT_CODE","value","dsMD_CTMDXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDEPT_CODE","binddataset","dsMD_CTMDXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edtDEPT_NAME","binddataset","dsMD_CTMDXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edtDEPT_NAME","value","dsMD_CTMDXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACQS_DATE_value","calMNST_DATE","value","dsMD_CTMDXM","MNST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","calMNED_DATE","value","dsMD_CTMDXM","MNED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","calTTST_DATE","value","dsMD_CTMDXM","TTST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","calTTET_DATE","value","dsMD_CTMDXM","TTED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edtMEMO_FILD","binddataset","dsMD_CTMDXM","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtMEMO_FILD","value","dsMD_CTMDXM","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edtPRCE_FILD","binddataset","dsMD_CTMDXM","PRCE_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edtPRCE_FILD","value","dsMD_CTMDXM","PRCE_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbCMTX_FLAG","value","dsMD_CTMDXM","CMTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbCMTX_FLAG","binddataset","dsMD_CTMDXM","CMTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","cmbTRTX_FLAG","value","dsMD_CTMDXM","TRTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","cmbTRTX_FLAG","binddataset","dsCMTX_FLAGCombo","TRTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edtAMNT_FILD","binddataset","dsMD_CTMDXM","AMNT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edtAMNT_FILD","value","dsMD_CTMDXM","AMNT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","calMNST_DATE","binddataset","dsMD_CTMDXM","MNST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","calMNED_DATE","binddataset","dsMD_CTMDXM","MNED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","calTTST_DATE","binddataset","dsMD_CTMDXM","TTST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","calTTET_DATE","binddataset","dsMD_CTMDXM","TTED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","edtSEQX_FILD","binddataset","dsMD_CTMDXM","SEQX_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","edtSEQX_FILD","value","dsMD_CTMDXM","SEQX_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","cmbHOUR_TYPE","value","dsMD_CTMDXM","HOUR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","cmbHOUR_TYPE","binddataset","dsMD_CTMDXM","HOUR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","edtSTAR_TIME","binddataset","dsMD_CTMDXM","STAR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","edtSTAR_TIME","value","dsMD_CTMDXM","STAR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","edtENDD_TIME","binddataset","dsMD_CTMDXM","ENDD_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","edtENDD_TIME","value","dsMD_CTMDXM","ENDD_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","chkBROD_TUES","value","dsMD_CTMDXM","BROD_TUES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","chkBROD_TUES","binddataset","dsMD_CTMDXM","BROD_TUES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","chkBROD_MOND","binddataset","dsMD_CTMDXM","BROD_MOND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","chkBROD_MOND","value","dsMD_CTMDXM","BROD_MOND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","chkBROD_WEDN","value","dsMD_CTMDXM","BROD_WEDN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","chkBROD_WEDN","binddataset","dsMD_CTMDXM","BROD_WEDN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","chkBROD_THUR","value","dsMD_CTMDXM","BROD_THUR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","chkBROD_THUR","binddataset","dsMD_CTMDXM","BROD_THUR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","chkBROD_FRID","value","dsMD_CTMDXM","BROD_FRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","chkBROD_FRID","binddataset","dsMD_CTMDXM","BROD_FRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","chkBROD_SATU","value","dsMD_CTMDXM","BROD_SATU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item79","chkBROD_SATU","binddataset","dsMD_CTMDXM","BROD_SATU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item80","chkBROD_SUND","value","dsMD_CTMDXM","BROD_SUND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item81","chkBROD_SUND","binddataset","dsMD_CTMDXM","BROD_SUND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","edtCONT_FILD","binddataset","dsMD_CTMDXM","CONT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item83","edtCONT_FILD","value","dsMD_CTMDXM","CONT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","chkBROD_TUES00","value","dsMD_CTMDXM","SERV_CHCK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item85","chkBROD_TUES00","binddataset","dsMD_CTMDXM","SERV_CHCK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MDMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDMB0010 개별청약
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.12		최제현		Initial Created.
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "MDMB0010"; //해당 Form에서 사용 할 Package 명

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.CalSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	//모든 광고주 명 가져오기
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
        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear('dsMD_CTMDXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_CTMDXM=dsMD_CTMDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CTMDXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsMD_CTMDXM.addRow();
        		
        	var date = this.fnc_GetServerDateTime("DATE");
        	var year_mnth = date.substr(0,6);

        	this.dsMD_CTMDXM.setColumn(iRow, "INST_DATE", date);
        	this.dsMD_CTMDXM.setColumn(iRow, "YEAR_MNTH", this.CalSHRYEAR_MNTH.fn_GetMonth());
        	this.dsMD_CTMDXM.setColumn(iRow, "COMI_RATE", 0.15); 
        	this.dsMD_CTMDXM.setColumn(iRow, "CMTX_FLAG",'T');
        	this.dsMD_CTMDXM.setColumn(iRow, "TRTX_FLAG",'T');
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CTMDXM.rowcount ; i++){
        		if(this.dsMD_CTMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_CTMDXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CTMDXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CTMDXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	//수정 한 부분 취소
        	this.fnc_DataSetCancel("dsMD_CTMDXM");
        	this.grdMD_CTMDXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsMD_CTMDXM=dsMD_CTMDXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CTMDXM.setFocus();
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
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
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

        	if (this.fnc_DatasetChangeCheck("dsMD_CTMDXM")) {
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
        this.fn_DeleteCheck = function (totalNum) {
        	
        	//이후이 프로세스가 진행되었는지 확인
        	for(var i=0 ; i<this.dsMD_CTMDXM.rowcount ; i++){

        		if(this.dsMD_CTMDXM.getColumn(i,"CHEK_FILD") == '1'){
        			if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "TRTR_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "CMTR_NUMB"))) > 0){
        				this.fnc_Message("MCM001");
        				return false;
        			}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "TRTX_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "CMTX_NUMB")))){
        				this.fnc_Message("MCM002");
        				return false;
        			}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "TRCH_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "CMCH_NUMB")))){
        				this.fnc_Message("MCM003");
        				return false;
        			}
        		}
        	}
        	
        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "일련번호 : ("+this.grdMD_CTMDXM.getCellText(this.grdMD_CTMDXM.currentrow, this.grdMD_CTMDXM.getBindCellIndex( "body", "SEQX_FILD" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsMD_CTMDXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_CTMDXM.getRowCount(); i++) {
        	
        		this.dsMD_CTMDXM.setColumn(i,"CHEK_FILD",0);
        	
        		if (this.fnc_ToUpper(this.dsMD_CTMDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		//이후의 프로세스가 진행되었는지 확인
        		if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"TRTR_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"CMTR_NUMB"))) > 0){
        			this.fnc_Message("MDM007");
        			return false;
        		}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"TRTX_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"CMTX_NUMB"))) > 0){
        			this.fnc_Message("MDM008");
        			return false;
        		}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"CMTR_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i,"CMCH_NUMB"))) > 0){
        			this.fnc_Message("MDM009");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "YEAR_MNTH"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "년월", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"YEAR_MNTH"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "CUST_NAME"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "광고주", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"CUST_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "BRND_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "브랜드", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"BRND_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "MEDX_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "청구지", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"MEDX_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "RMED_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"RMED_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "DEPT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당부서", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"RMED_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "AMNT_FILD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "금액", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"AMNT_FILD"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "MNST_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "금월방송시작일", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"MNST_DATE"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTMDXM.getColumn(i, "MNED_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "금월방송종료일", this.dsMD_CTMDXM, i, this.dsMD_CTMDXM.getColumn(this.dsMD_CTMDXM.rowposition,"MNED_DATE"), '');
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
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.CalSHRYEAR_MNTH.fn_GetMonth())); //년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //광고주
        		sReturnString += " BRND_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_CODE.value)); //브랜드
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMEDX_CODE.value)); //청구지
        		sReturnString += " RMED_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRRMED_CODE.value)); //매체

        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
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
        		this.fnc_Message("TMM018", this.dsMD_CTMDXM.rowcount);

        	} else if (sMethodName == "SEARCH01") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {	
        		
        		// 하단 텍스트 시급콤보
        		this.fnc_GetComboHOUR_TYPE();
        		// 하단 텍스트 청약구분콤보
        		this.fnc_GetComboSUBS_FLAG();

        		
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
         

        /*------------------------------+
         |  입력을 위한 하단 시급콤보|
         +------------------------------*/
        this.fnc_GetComboHOUR_TYPE = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsHOUR_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0003"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbHOUR_TYPE,dsHOUR_TYPE,0";
        			arrParam2[1] = "GRID,grdMD_CTMDXM,dsHOUR_TYPE,HOUR_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*-----------------------------------+
         |  입력을 위한 하단 청약구분콤보|
         +-----------------------------------*/
        this.fnc_GetComboSUBS_FLAG = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSUBS_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0004"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSUBS_FLAG,dsSUBS_FLAG,0";
        			arrParam2[1] = "GRID,grdMD_CTMDXM,dsSUBS_FLAG,SUBS_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        

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

        /*--------------+
         |  내역복사   |
         +--------------*/
        this.btn_CopyRow_onclick = function(obj,e)
        {

        	var nRow = this.dsMD_CTMDXM.rowposition;
        	var iRow = this.dsMD_CTMDXM.insertRow(this.dsMD_CTMDXM.rowposition + 1);
        	
        	this.dsMD_CTMDXM.setColumn(iRow, "YEAR_MNTH", this.dsMD_CTMDXM.getColumn(nRow, "YEAR_MNTH"));//년월
        	this.dsMD_CTMDXM.setColumn(iRow, "CUST_CODE", this.dsMD_CTMDXM.getColumn(nRow, "CUST_CODE"));//광고주코드
        	this.dsMD_CTMDXM.setColumn(iRow, "CUST_NAME", this.dsMD_CTMDXM.getColumn(nRow, "CUST_NAME"));//광고주명
        	this.dsMD_CTMDXM.setColumn(iRow, "CTIM_CODE", this.dsMD_CTMDXM.getColumn(nRow, "CTIM_CODE"));//광고주팀코드
        	this.dsMD_CTMDXM.setColumn(iRow, "CTIM_NAME", this.dsMD_CTMDXM.getColumn(nRow, "CTIM_NAME"));//광고주팀명
        	this.dsMD_CTMDXM.setColumn(iRow, "BRND_CODE", this.dsMD_CTMDXM.getColumn(nRow, "BRND_CODE"));//브랜드코드
        	this.dsMD_CTMDXM.setColumn(iRow, "BRND_NAME", this.dsMD_CTMDXM.getColumn(nRow, "BRND_NAME"));//브랜드명
        	this.dsMD_CTMDXM.setColumn(iRow, "MEDX_CODE", this.dsMD_CTMDXM.getColumn(nRow, "MEDX_CODE"));//청구지코드
        	this.dsMD_CTMDXM.setColumn(iRow, "MEDX_NAME", this.dsMD_CTMDXM.getColumn(nRow, "MEDX_NAME"));//청구지명
        	this.dsMD_CTMDXM.setColumn(iRow, "MEDX_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "MEDX_FLAG"));//매체구분
        	this.dsMD_CTMDXM.setColumn(iRow, "RMED_CODE", this.dsMD_CTMDXM.getColumn(nRow, "RMED_CODE"));//매체코드
        	this.dsMD_CTMDXM.setColumn(iRow, "RMED_NAME", this.dsMD_CTMDXM.getColumn(nRow, "RMED_NAME"));//매체명
        	this.dsMD_CTMDXM.setColumn(iRow, "PRGM_NAME", this.dsMD_CTMDXM.getColumn(nRow, "PRGM_NAME"));//프로그램명
        	this.dsMD_CTMDXM.setColumn(iRow, "STAR_TIME", this.dsMD_CTMDXM.getColumn(nRow, "STAR_TIME"));//방송시작일
        	this.dsMD_CTMDXM.setColumn(iRow, "ENDD_TIME", this.dsMD_CTMDXM.getColumn(nRow, "ENDD_TIME"));//방송종료일
        	this.dsMD_CTMDXM.setColumn(iRow, "HOUR_TYPE", this.dsMD_CTMDXM.getColumn(nRow, "HOUR_TYPE"));//방송시급
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "BROD_FLAG"));//방송구분
        	this.dsMD_CTMDXM.setColumn(iRow, "SECD_FILD", this.dsMD_CTMDXM.getColumn(nRow, "SECD_FILD"));//초수
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_MOND", this.dsMD_CTMDXM.getColumn(nRow, "BROD_MOND"));//월
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_TUES", this.dsMD_CTMDXM.getColumn(nRow, "BROD_TUES"));//화
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_WEDN", this.dsMD_CTMDXM.getColumn(nRow, "BROD_WEDN"));//수
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_THUR", this.dsMD_CTMDXM.getColumn(nRow, "BROD_THUR"));//목
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_FRID", this.dsMD_CTMDXM.getColumn(nRow, "BROD_FRID"));//금
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_SATU", this.dsMD_CTMDXM.getColumn(nRow, "BROD_SATU"));//토
        	this.dsMD_CTMDXM.setColumn(iRow, "BROD_SUND", this.dsMD_CTMDXM.getColumn(nRow, "BROD_SUND"));//일
        	this.dsMD_CTMDXM.setColumn(iRow, "CONT_FILD", this.dsMD_CTMDXM.getColumn(nRow, "CONT_FILD"));//회수
        	this.dsMD_CTMDXM.setColumn(iRow, "PRCE_FILD", this.dsMD_CTMDXM.getColumn(nRow, "PRCE_FILD"));//단가
        	this.dsMD_CTMDXM.setColumn(iRow, "AMNT_FILD", this.dsMD_CTMDXM.getColumn(nRow, "AMNT_FILD"));//광고비
        	this.dsMD_CTMDXM.setColumn(iRow, "AREA_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "AREA_FLAG"));//지역구분
        	this.dsMD_CTMDXM.setColumn(iRow, "SUBS_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "SUBS_FLAG"));//청약구분
        	this.dsMD_CTMDXM.setColumn(iRow, "ADDX_FORM", this.dsMD_CTMDXM.getColumn(nRow, "ADDX_FORM"));//광고형태
        	this.dsMD_CTMDXM.setColumn(iRow, "ADDX_TYPE", this.dsMD_CTMDXM.getColumn(nRow, "ADDX_TYPE"));//광고유형
        	this.dsMD_CTMDXM.setColumn(iRow, "CONT_FORM", this.dsMD_CTMDXM.getColumn(nRow, "CONT_FORM"));//계약형태
        	this.dsMD_CTMDXM.setColumn(iRow, "TTST_DATE", this.dsMD_CTMDXM.getColumn(nRow, "TTST_DATE"));//총광고시작일
        	this.dsMD_CTMDXM.setColumn(iRow, "TTED_DATE", this.dsMD_CTMDXM.getColumn(nRow, "TTED_DATE"));//총광고종료일
        	this.dsMD_CTMDXM.setColumn(iRow, "MNST_DATE", this.dsMD_CTMDXM.getColumn(nRow, "MNST_DATE"));//금월방송시작일
        	this.dsMD_CTMDXM.setColumn(iRow, "MNED_DATE", this.dsMD_CTMDXM.getColumn(nRow, "MNED_DATE"));//금월방송종료일
        	this.dsMD_CTMDXM.setColumn(iRow, "PLAN_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "PLAN_FLAG"));//계획치구분
        	this.dsMD_CTMDXM.setColumn(iRow, "MEMO_FILD", this.dsMD_CTMDXM.getColumn(nRow, "MEMO_FILD"));//비고
        	this.dsMD_CTMDXM.setColumn(iRow, "APLY_DATE", this.dsMD_CTMDXM.getColumn(nRow, "APLY_DATE"));//적용일자
        	this.dsMD_CTMDXM.setColumn(iRow, "DEPT_CODE", this.dsMD_CTMDXM.getColumn(nRow, "DEPT_CODE"));//코바넷청약일련번호
        	this.dsMD_CTMDXM.setColumn(iRow, "DEPT_NAME", this.dsMD_CTMDXM.getColumn(nRow, "DEPT_NAME"));//코바넷운행일련번호
        	this.dsMD_CTMDXM.setColumn(iRow, "EMPL_CODE", this.dsMD_CTMDXM.getColumn(nRow, "EMPL_CODE"));//매체통신구분
        	this.dsMD_CTMDXM.setColumn(iRow, "EMPL_NAME", this.dsMD_CTMDXM.getColumn(nRow, "EMPL_NAME"));//AOR구분
        	this.dsMD_CTMDXM.setColumn(iRow, "TRTX_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "TRTX_FLAG"));//위수탁부가세
        	this.dsMD_CTMDXM.setColumn(iRow, "CMTX_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "CMTX_FLAG"));//수수료부가세
        	this.dsMD_CTMDXM.setColumn(iRow, "ATCT_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "ATCT_FLAG"));//자동계산
        	this.dsMD_CTMDXM.setColumn(iRow, "INPT_PATH", this.dsMD_CTMDXM.getColumn(nRow, "INPT_PATH"));//투입경로
        	this.dsMD_CTMDXM.setColumn(iRow, "COMI_FILD", this.dsMD_CTMDXM.getColumn(nRow, "COMI_FILD"));//수수료
        	this.dsMD_CTMDXM.setColumn(iRow, "COMI_RATE", this.dsMD_CTMDXM.getColumn(nRow, "COMI_RATE"));//수수료율
        	this.dsMD_CTMDXM.setColumn(iRow, "AORX_FLAG", this.dsMD_CTMDXM.getColumn(nRow, "AORX_FLAG"));//AOR구분
        	this.dsMD_CTMDXM.setColumn(iRow, "SERV_CHCK", this.dsMD_CTMDXM.getColumn(nRow, "SERV_CHCK"));//서비스체크
        }

        
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
        //상단 청구지팝업
        this.fn_HelpDialogeSHRMEDX_CODE = function(obj,e)
        {
        	
        	var arrParam = new Array();
        	arrParam[0] = "MCM0009";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRMEDX_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRMEDX_NAME";                          
            arrParam[5] = "edtSHRMEDX_CODE,edtSHRMEDX_NAME";   
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

        //상단 매체팝업
        this.fn_HelpDialogeSHRRMED_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0019";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtSHRRMED_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtSHRRMED_NAME";                          
        	arrParam[5] = "edtSHRRMED_CODE,edtSHRRMED_NAME,edtSHRMEDX_CODE,edtSHRMEDX_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
         
         
        //하단 광고주팝업
        this.fn_HelpDialogeCUST_CODE = function(obj,e)
        {

        	var arrParam = new Array();
        	arrParam[0] = "MCM0007";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtCUST_NAME";                          
        	arrParam[5] = "edtBRND_CODE,edtBRND_NAME,edtCUST_CODE,edtCUST_NAME,edtDEPT_CODE,edtDEPT_NAME";   
        	arrParam[6] = "0,1,2,3,4,5";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 브랜드 팝업
        this.fn_HelpDialogeBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0016";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtBRND_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtBRND_NAME";                          
        	arrParam[5] = "edtBRND_CODE,edtBRND_NAME,edtCUST_CODE,edtCUST_NAME,edtDEPT_CODE,edtDEPT_NAME";   
        	arrParam[6] = "0,1,2,3,4,5";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }

        
        //하단 광고주팀 팝업
        this.fn_HelpDialogeCTIM_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0008";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtCTIM_NAME";                          
        	arrParam[5] = "edtCTIM_CODE,edtCTIM_NAME";   
        	arrParam[6] = "0,1";                                     
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 청구지팝업
        this.fn_HelpDialogeMEDX_CODE = function(obj,e)
        {  	
        	
        	var arrParam = new Array();
        	arrParam[0] = "MCM0024";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtMEDX_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtMEDX_NAME";                          
        	arrParam[5] = "edtRMED_CODE,edtRMED_NAME,edtMEDX_CODE,edtMEDX_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 매체 팝업
        this.fn_HelpDialogeRMED_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0019";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtRMED_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtRMED_NAME";                          
        	arrParam[5] = "edtRMED_CODE,edtRMED_NAME,edtMEDX_CODE,edtMEDX_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 사원팝업
        this.fn_HelpDialogeEMPL_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MDM0002";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtEMPL_NAME";                          
        	arrParam[5] = "edtEMPL_CODE,edtEMPL_NAME";   
        	arrParam[6] = "0,1";                                     
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 담당부서팝업
        this.fn_HelpDialogeDEPT_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MDM0001";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtDEPT_NAME";                          
        	arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";   
        	arrParam[6] = "0,1";                                     
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        
        /*--------------------+
         |     전체복사 	  |
         +--------------------*/
        this.btn_COPYAll_onclick = function(obj,e)
        {
        	if(this.dsMD_CTMDXM.rowcount == 0){
        		alert('복사할 데이터가 없습니다.');
        	}else{
        		var sName 		= "MDMB0010P01";
        		var sFormURL 	= "mdm::MDMB0010P01.xfdl";
        		var sOpenStyle  = "modeless=false";
        			sOpenStyle += ",autosize=true";
        			sOpenStyle += ",top=-1";
        			sOpenStyle += ",left=-1";
        			sOpenStyle += ",width=990";
        			sOpenStyle += ",height=800";
        			sOpenStyle += ",title=true";
        			sOpenStyle += ",titletext=전체복사";
        			sOpenStyle += ",status=false";
        			sOpenStyle += ",resizable=true";

        		var objArgument = {
        			 oYEAR_MNTH : this.CalSHRYEAR_MNTH.fn_GetMonth()
        		};

        		this.fnc_OpenPopup(sName, sFormURL, objArgument, sOpenStyle, "");
        	}
        }

        /*----------------------------+
         |   브랜드 팝업 CALLBACK 	  |
         +----------------------------*/
        this.fn_CallBackP02 = function(cust_code,cust_name,brnd_code,brnd_name,key){
        	switch(key){
        		case "SHR":
        			this.edtSHRCUST_CODE.set_value(cust_code);
        			this.edtSHRCUST_NAME.set_value(cust_name);
        			this.edtSHRBRND_CODE.set_value(brnd_code);
        			this.edtSHRBRND_NAME.set_value(brnd_name);
        			break;
        		case "DETAIL":
        			this.edtCUST_CODE.set_value(cust_code);
        			this.edtCUST_NAME.set_value(cust_name);
        			this.edtBRND_CODE.set_value(brnd_code);
        			this.edtBRND_NAME.set_value(brnd_name);
        			break;
        		case "GRID":
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"CUST_CODE",cust_code);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"CUST_NAME",cust_name);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"BRND_CODE",brnd_code);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"BRND_NAME",brnd_name);
        			break;
        	}	
        }

        /*----------------------------+
         |   매체 팝업 CALLBACK 	  |
         +----------------------------*/
        this.fn_CallBackP03 = function(cust_code,cust_name,rmed_code,rmed_name,key){
        	switch(key){
        		case "SHR":
        			this.edtSHRMEDX_CODE.set_value(cust_code);
        			this.edtSHRMEDX_NAME.set_value(cust_name);
        			this.edtSHRRMED_CODE.set_value(rmed_code);
        			this.edtSHRRMED_NAME.set_value(rmed_name);
        			break;
        		case "DETAIL":
        			this.edtMEDX_CODE.set_value(cust_code);
        			this.edtMEDX_NAME.set_value(cust_name);
        			this.edtRMED_CODE.set_value(rmed_code);
        			this.edtRMED_NAME.set_value(rmed_name);
        			break;
        		case "GRID":
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"MEDX_CODE",cust_code);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"MEDX_NAME",cust_name);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"RMED_CODE",rmed_code);
        			this.dsMD_CTMDXM.setColumn(this.dsMD_CTMDXM.rowposition,"RMED_NAME",rmed_name);
        			break;
        	}	
        }

        /*----------------+
         |   초기화 	  |
         +----------------*/
        this.btn_Reset_onclick = function(obj,e)
        {
        	this.dsMD_CTMDXM.reset();
        	this.fn_Input(this);
        }

        /*----------------------+
         |  조회조건 엔터 時  |
         +----------------------*/
        this.fn_onKeyDown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.fn_Search();
        	}
        }

        
        /*-------------------------------+
         |  단가*횟수를 자동으로 입력 |
         +-------------------------------*/
        this.fn_InputPRCE_FILD = function(obj,e)
        {
        	//총금액을 넣어줌
        	this.edtAMNT_FILD.set_value(this.edtPRCE_FILD.value*this.edtCONT_FILD.value);
        	this.edtCOMI_FILD.set_value(this.edtCOMI_RATE.value*this.edtAMNT_FILD.value);
        }

        /*---------------------------------+
         |  수수료 금액을 자동으로 입력 |
         +---------------------------------*/
        this.fn_InputCOMI_RATE = function(obj,e)
        {
        	//수수료금액을 넣어줌
        	this.edtCOMI_FILD.set_value(this.edtCOMI_RATE.value*this.edtAMNT_FILD.value);
        	if(this.edtCOMI_FILD.value=='')
        	this.edtCOMI_FILD.set_value(0);
        }

        /*------------------------------------------+
         |  이름이 지워지면 코드가 지워짐(상단) |
         +------------------------------------------*/

        //청구지
        this.edtSHRMEDX_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRMEDX_NAME.value=='')
        	this.edtSHRMEDX_CODE.set_value('');
        }
        //브랜드
        this.edtSHRBRND_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRBRND_NAME.value=='')
        	this.edtSHRBRND_NAME.set_value('');
        }

        //매체
        this.edtSHRRMED_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRRMED_NAME.value=='')
        	this.edtSHRRMED_CODE.set_value('');
        }

        /*----------------------------------------+
         |  이름을 지우면 코드가 지워짐(하단)  |
         +----------------------------------------*/
        //광고주
        this.edtCUST_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtCUST_NAME.value=='')
        	this.edtCUST_CODE.set_value('');
        }
        //브랜드 
        this.edtBRND_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtBRND_NAME.value=='')
        	this.edtBRND_CODE.set_value('');
        }
        //광고주팀 
        this.edtCTIM_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtCTIM_NAME.value=='')
        	this.edtCTIM_CODE.set_value('');
        }
        //담당부서 
        this.edtDEPT_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtDEPT_NAME.value=='')
        	this.edtDEPT_CODE.set_value('');
        }
        //매체 
        this.edtRMED_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtRMED_NAME.value=='')
        	this.edtRMED_CODE.set_value('');
        }
        //청구지 
        this.edtMEDX_NAME_ontextchange = function(obj,e)
        {
        	if(this.edtMEDX_NAME.value=='')
        	this.edtMEDX_CODE.set_value('');
        }
        //사원번호
        this.edtEMPL_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtEMPL_NAME.value=='')
        	this.edtEMPL_CODE.set_value('');
        }

        
        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH01";
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
        		//이름이 지워지면 코드가 지워짐.
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

        
        this.fn_onkeydown = function(obj,e)
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
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.grdMD_CTMDXM.addEventHandler("onheadclick", this.grdMD_CTMDXM_onheadclick, this);
            this.btn_COPYAll.addEventHandler("onclick", this.btn_COPYAll_onclick, this);
            this.btn_CopyRow.addEventHandler("onclick", this.btn_CopyRow_onclick, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeCUST_CODE, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCUST_CODE, this);
            this.edtCUST_NAME.addEventHandler("ontextchanged", this.edtCUST_NAME_ontextchanged, this);
            this.imgHelpBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeBRND_CODE, this);
            this.edtBRND_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeBRND_CODE, this);
            this.edtBRND_NAME.addEventHandler("ontextchanged", this.edtBRND_NAME_ontextchanged, this);
            this.imgHelpCTIM_CODE.addEventHandler("onclick", this.fn_HelpDialogeCTIM_CODE, this);
            this.edtCTIM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCTIM_CODE, this);
            this.edtCTIM_NAME.addEventHandler("ontextchanged", this.edtCTIM_NAME_ontextchanged, this);
            this.imgHelpMEDX_CODE.addEventHandler("onclick", this.fn_HelpDialogeMEDX_CODE, this);
            this.edtMEDX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeMEDX_CODE, this);
            this.edtMEDX_NAME.addEventHandler("ontextchanged", this.edtMEDX_NAME_ontextchange, this);
            this.imgHelpEMPL_CODE.addEventHandler("onclick", this.fn_HelpDialogeEMPL_CODE, this);
            this.edtYEAR_MNTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtYEAR_MNTH.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpRMED_CODE.addEventHandler("onclick", this.fn_HelpDialogeRMED_CODE, this);
            this.edtRMED_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRMED_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeRMED_CODE, this);
            this.edtRMED_NAME.addEventHandler("oneditclick", this.edtRMED_NAME_oneditclick, this);
            this.edtRMED_NAME.addEventHandler("ontextchanged", this.edtRMED_NAME_ontextchanged, this);
            this.chkAORX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMI_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRMED_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeEMPL_CODE, this);
            this.edtEMPL_NAME.addEventHandler("ontextchanged", this.edtEMPL_NAME_ontextchanged, this);
            this.edtPRGM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRGM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSECD_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSECD_FILD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCOMI_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMI_RATE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCOMI_RATE.addEventHandler("ontextchanged", this.fn_InputCOMI_RATE, this);
            this.edtSHRBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("ontextchanged", this.edtSHRBRND_NAME_ontextchanged, this);
            this.cmbSUBS_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRRMED_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRRMED_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_NAME.addEventHandler("oneditclick", this.edtSHRCTIM_NAME_oneditclick, this);
            this.edtSHRRMED_NAME.addEventHandler("ontextchanged", this.edtSHRRMED_NAME_ontextchanged, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialogeDEPT_CODE, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeDEPT_CODE, this);
            this.edtDEPT_NAME.addEventHandler("ontextchanged", this.edtDEPT_NAME_ontextchanged, this);
            this.edtMEMO_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEMO_FILD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPRCE_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRCE_FILD.addEventHandler("ontextchanged", this.fn_InputPRCE_FILD, this);
            this.cmbCMTX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbTRTX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAMNT_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAMNT_FILD.addEventHandler("ontextchanged", this.fn_InputCOMI_RATE, this);
            this.calMNST_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTTET_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calMNED_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTTST_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_Reset.addEventHandler("onclick", this.btn_Reset_onclick, this);
            this.edtSEQX_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSEQX_FILD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbHOUR_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSTAR_TIME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSTAR_TIME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtENDD_TIME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENDD_TIME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.chkBROD_TUES.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_MOND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_WEDN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_THUR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_FRID.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_SATU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkBROD_SUND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCONT_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCONT_FILD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCONT_FILD.addEventHandler("ontextchanged", this.fn_InputPRCE_FILD, this);
            this.chkBROD_TUES00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.CalSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MDMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
