﻿(function()
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
                this.set_name("MDMD0010");
                this.set_titletext("인터넷_개별청약");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_ITMDXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ITAD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">MDM0011</Col><Col id=\"DSNAME\">dsITAD_FLAG</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">인터넷광고구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox03", "absolute", "8", null, null, "169", "25", "15", this);
            obj.set_taborder("203");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("121");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("개별청약");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "43.98%", "0", null, "29", "2.11%", null, this);
            obj.set_taborder("7");
            obj.set_text("매체관리 > 인터넷광고");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "37", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "361", "71", "51", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "28", "97", "55", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("청구지");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "417", "71", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "499", "71", "23", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "522", "71", "120", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "83", "97", "80", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMEDX_CODE", "absolute", "165", "97", "21", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_NAME", "absolute", "188", "97", "120", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", null, "21", "915", null, this);
            obj.set_taborder("21");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "48.27%", "129", null, "25", "44.99%", null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_ITMDXM", "absolute", "8", "154", null, null, "25", "209", this);
            obj.set_binddataset("dsMD_ITMDXM");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"일련번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"8\" style=\"background:transparent;\" text=\"인터넷광고구분\"/><Cell col=\"9\" style=\"background:transparent;\" text=\"광고시작일\"/><Cell col=\"10\" style=\"background:transparent;\" text=\"광고종료일\"/><Cell col=\"11\" style=\"background:transparent;\" text=\"소재명\"/><Cell col=\"12\" style=\"background:transparent;\" text=\"금액\"/><Cell col=\"13\" style=\"background:transparent;\" text=\"수수료율\"/><Cell col=\"14\" style=\"background:transparent;\" text=\"수수료\"/><Cell col=\"15\" style=\"background:transparent;\" text=\"적용일자\"/><Cell col=\"16\" style=\"background:transparent;\" text=\"부서명\"/><Cell col=\"17\" style=\"background:transparent;\" text=\"사원명\"/><Cell col=\"18\" style=\"background:transparent;\" text=\"위수탁부가세\"/><Cell col=\"19\" style=\"background:transparent;\" text=\"수수료부가세\"/><Cell col=\"20\" style=\"background:transparent;\" text=\"비고\"/><Cell col=\"21\" style=\"background:transparent;\" text=\"등록일자\"/><Cell col=\"22\" style=\"background:transparent;\" text=\"등록자\"/><Cell col=\"23\" style=\"background:transparent;\" text=\"위수탁번호(거래)\"/><Cell col=\"24\" style=\"background:transparent;\" text=\"수수료번호(거래)\"/><Cell col=\"25\" style=\"background:transparent;\" text=\"위수탁번호(계산서)\"/><Cell col=\"26\" style=\"background:transparent;\" text=\"수수료번호(계산서)\"/><Cell col=\"27\" style=\"background:transparent;\" text=\"위수탁번호(전표)\"/><Cell col=\"28\" style=\"background:transparent;\" text=\"수수료번호(전표)\"/><Cell col=\"29\" style=\"background:transparent;\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ITAD_FLAG\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:STAR_DATE\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENDD_DATE\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:MATT_NAME\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" text=\"bind:COMI_RATE\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:COMI_FILD\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"date\" edittype=\"none\" text=\"bind:APLY_DATE\"/><Cell col=\"16\" edittype=\"none\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"17\" edittype=\"none\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"18\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"19\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"20\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"22\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"23\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"24\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"25\" text=\"bind:TRTX_NUMB\"/><Cell col=\"26\" text=\"bind:CMTX_NUMB\"/><Cell col=\"27\" text=\"bind:TRCH_NUMB\"/><Cell col=\"28\" text=\"bind:CMCF_NUMB\"/><Cell col=\"29\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:AORX_FLAG\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" style=\"align:center;\" text=\"합계\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"13\" displaytype=\"number\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "628", "508", "81", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", null, null, "21", "988", "184", this);
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

            obj = new Static("stMATT_NAME", "absolute", "421", null, "81", "21", null, "76", this);
            obj.set_taborder("39");
            obj.set_text("소재명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("stCUST_NAME", "absolute", "28", null, "70", "21", null, "128", this);
            obj.set_taborder("42");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stCTIM_NAME", "absolute", "28", null, "70", "21", null, "102", this);
            obj.set_taborder("43");
            obj.set_text("광고주 팀");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stAMNT_FILD", "absolute", "821", null, "89", "21", null, "154", this);
            obj.set_taborder("47");
            obj.set_text("금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stBRND_NAME", "absolute", "28", null, "70", "21", null, "76", this);
            obj.set_taborder("48");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "534", "30", "167", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_COPYAll", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("전체복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CopyRow", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("내역복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "183", null, "24", "22", null, "127", this);
            obj.set_taborder("59");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "206", null, "146", "21", null, "128", this);
            obj.set_taborder("60");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCTIM_CODE", "absolute", "183", null, "24", "22", null, "102", this);
            obj.set_taborder("67");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_NAME", "absolute", "206", null, "146", "21", null, "102", this);
            obj.set_taborder("68");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpBRND_CODE", "absolute", "183", null, "24", "22", null, "75", this);
            obj.set_taborder("69");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRND_NAME", "absolute", "206", null, "146", "21", null, "76", this);
            obj.set_taborder("70");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stMEDX_NAME", "absolute", "28", null, "70", "21", null, "50", this);
            obj.set_taborder("74");
            obj.set_text("청구지");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMEDX_CODE", "absolute", "183", null, "24", "22", null, "49", this);
            obj.set_taborder("75");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEDX_NAME", "absolute", "206", null, "146", "21", null, "50", this);
            obj.set_taborder("76");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stAORX_FLAG", "absolute", "1025", null, "50", "21", null, "128", this);
            obj.set_taborder("93");
            obj.set_text("AOR");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAORX_FLAG", "absolute", "1080", null, "32", "21", null, "128", this);
            obj.set_taborder("94");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMI_FILD", "absolute", "821", null, "50", "21", null, "102", this);
            obj.set_taborder("97");
            obj.set_text("수수료");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtCOMI_FILD", "absolute", "915", null, "188", "21", null, "102", this);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("103");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "101", null, "80", "21", null, "128", this);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("105");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_CODE", "absolute", "101", null, "80", "21", null, "102", this);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("106");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRND_CODE", "absolute", "101", null, "80", "21", null, "76", this);
            obj.set_taborder("107");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEDX_CODE", "absolute", "101", null, "80", "21", null, "50", this);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("108");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "749", "71", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_CODE", "absolute", "831", "71", "21", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "854", "71", "120", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "361", "97", "51", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("매체");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_CODE", "absolute", "417", "97", "80", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRRMED_CODE", "absolute", "499", "97", "21", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_NAME", "absolute", "522", "97", "120", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stITAD_FLAG", "absolute", "421", null, "81", "21", null, "102", this);
            obj.set_taborder("142");
            obj.set_text("인터넷구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stCMTX_FLAG", "absolute", "821", null, "89", "21", null, "50", this);
            obj.set_taborder("155");
            obj.set_text("수수료부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCMTX_FLAG", "absolute", "915", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("156");
            obj.set_innerdataset("@dsTRTX_FLAGCombo");
            obj.set_codecolumn("TRTX_FLAG_CODE");
            obj.set_datacolumn("TRTX_FLAG_NAME");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbTRTX_FLAG", "absolute", "915", null, "100", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("157");
            obj.set_innerdataset("@dsTRTX_FLAGCombo");
            obj.set_codecolumn("TRTX_FLAG_CODE");
            obj.set_datacolumn("TRTX_FLAG_NAME");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_index("-1");

            obj = new Static("stTRTX_FLAG", "absolute", "821", null, "89", "21", null, "76", this);
            obj.set_taborder("158");
            obj.set_text("위수탁부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", "162", "35", "74", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRMED_NAME", "absolute", "206", null, "146", "21", null, "24", this);
            obj.set_taborder("168");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpRMED_CODE", "absolute", "183", null, "24", "22", null, "23", this);
            obj.set_taborder("170");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRMED_CODE", "absolute", "101", null, "80", "21", null, "24", this);
            obj.set_taborder("171");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stRMED_NAME", "absolute", "28", null, "70", "21", null, "24", this);
            obj.set_taborder("173");
            obj.set_text("매체");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stYEAR_MNTH", "absolute", "28", null, "70", "21", null, "154", this);
            obj.set_taborder("187");
            obj.set_text("년월");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYEAR_MNTH", "absolute", "101", null, "80", "21", null, "154", this);
            obj.set_taborder("188");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.style.set_background("#ffffffff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbITAD_FLAG", "absolute", "502", null, "251", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("191");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.style.set_itembordertype("normal 0 0");

            obj = new MaskEdit("edtAMNT_FILD", "absolute", "915", null, "188", "21", null, "154", this);
            obj.set_taborder("193");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMATT_NAME", "absolute", "502", null, "251", "21", null, "76", this);
            obj.set_taborder("200");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_CODE", "absolute", "584", null, "21", "22", null, "127", this);
            obj.set_taborder("204");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_background("transparent URL('theme://images/sta_WF_HelpPopup.png')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "607", null, "146", "21", null, "128", this);
            obj.set_taborder("205");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_CODE", "absolute", "502", null, "80", "21", null, "128", this);
            obj.set_taborder("206");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_background("#ffffffff");
            obj.style.setStyleValue("displaynulltextcolor", "disabled", "transparent");
            obj.style.setStyleValue("background", "disabled", "#ffffffff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "607", null, "146", "21", null, "154", this);
            obj.set_taborder("207");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "584", null, "21", "22", null, "153", this);
            obj.set_taborder("208");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "502", null, "80", "21", null, "154", this);
            obj.set_taborder("209");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_NAME", "absolute", "421", null, "81", "21", null, "154", this);
            obj.set_taborder("210");
            obj.set_text("담당부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NAME", "absolute", "421", null, "81", "21", null, "128", this);
            obj.set_taborder("211");
            obj.set_text("사원명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTAR_DATE", "absolute", "502", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("212");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");

            obj = new Static("stSTAR_DATE", "absolute", "421", null, "81", "21", null, "50", this);
            obj.set_taborder("213");
            obj.set_text("광고기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "607", null, "14", "21", null, "50", this);
            obj.set_taborder("217");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENDD_DATE", "absolute", "622", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            obj.set_taborder("218");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtCOMI_RATE", "absolute", "915", null, "50", "21", null, "128", this);
            obj.set_taborder("222");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Static("stCOMI_RATE", "absolute", "821", null, "89", "21", null, "128", this);
            obj.set_taborder("223");
            obj.set_text("수수료율");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stMEMO_FILD", "absolute", "421", null, "89", "21", null, "24", this);
            obj.set_taborder("224");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edMEMO_FILD", "absolute", "502", null, "251", "21", null, "24", this);
            obj.set_taborder("225");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsMD_ITMDXM");
            this.addChild(obj.name, obj);

            obj = new Div("CalSHRYEAR_MNTH", "absolute", "83", "71", "103", "21", null, null, this);
            obj.set_taborder("226");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "694", "71", "50", "21", null, null, this);
            obj.set_taborder("264");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "522", "93", "120", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("265");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인터넷_개별청약");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edtCOMI_FILD","binddataset","dsMD_ITMDXM","COMI_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCOMI_FILD","value","dsMD_ITMDXM","COMI_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtCUST_CODE","value","dsMD_ITMDXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtCUST_CODE","binddataset","dsMD_ITMDXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtCTIM_CODE","value","dsMD_ITMDXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtCTIM_CODE","binddataset","dsMD_ITMDXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtBRND_CODE","value","dsMD_ITMDXM","BRND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtBRND_CODE","binddataset","dsMD_ITMDXM","BRND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtMEDX_CODE","value","dsMD_ITMDXM","MEDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtMEDX_CODE","binddataset","dsMD_ITMDXM","MEDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtCUST_NAME","value","dsMD_ITMDXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtCUST_NAME","binddataset","dsMD_ITMDXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtCTIM_NAME","value","dsMD_ITMDXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtCTIM_NAME","binddataset","dsMD_ITMDXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtBRND_NAME","value","dsMD_ITMDXM","BRND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtBRND_NAME","binddataset","dsMD_ITMDXM","BRND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtMEDX_NAME","value","dsMD_ITMDXM","MEDX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtMEDX_NAME","binddataset","dsMD_ITMDXM","MEDX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","chkAORX_FLAG","binddataset","dsMD_ITMDXM","AORX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","chkAORX_FLAG","value","dsMD_ITMDXM","AORX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbCMTX_FLAG","value","dsMD_ITMDXM","CMTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbCMTX_FLAG","binddataset","dsMD_ITMDXM","CMTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","cmbTRTX_FLAG","value","dsMD_ITMDXM","TRTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","cmbTRTX_FLAG","binddataset","dsMD_ITMDXM","TRTX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","edtRMED_NAME","value","dsMD_ITMDXM","RMED_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","edtRMED_NAME","binddataset","dsMD_ITMDXM","RMED_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","edtRMED_CODE","value","dsMD_ITMDXM","RMED_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","edtRMED_CODE","binddataset","dsMD_ITMDXM","RMED_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtYEAR_MNTH","binddataset","dsMD_ITMDXM","YEAR_MNTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtYEAR_MNTH","value","dsMD_ITMDXM","YEAR_MNTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbITAD_FLAG","value","dsMD_ITMDXM","ITAD_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmbITAD_FLAG","binddataset","dsMD_ITMDXM","ITAD_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtAMNT_FILD","binddataset","dsMD_ITMDXM","AMNT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","edtAMNT_FILD","value","dsMD_ITMDXM","AMNT_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edtMATT_NAME","binddataset","dsMD_ITMDXM","MATT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edtMATT_NAME","value","dsMD_ITMDXM","MATT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtEMPL_NAME","value","dsMD_ITMDXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtEMPL_NAME","binddataset","dsMD_ITMDXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtEMPL_CODE","value","dsMD_ITMDXM","EMPL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtEMPL_CODE","binddataset","dsMD_ITMDXM","EMPL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtDEPT_NAME","value","dsMD_ITMDXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtDEPT_NAME","binddataset","dsMD_ITMDXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edtDEPT_CODE","value","dsMD_ITMDXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edtDEPT_CODE","binddataset","dsMD_ITMDXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACQS_DATE_value","calSTAR_DATE","value","dsMD_ITMDXM","STAR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","calSTAR_DATE","binddataset","dsMD_ITMDXM","STAR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","calENDD_DATE","value","dsMD_ITMDXM","ENDD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","calENDD_DATE","binddataset","dsMD_ITMDXM","ENDD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edtCOMI_RATE","binddataset","dsMD_ITMDXM","COMI_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtCOMI_RATE","value","dsMD_ITMDXM","COMI_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edMEMO_FILD","binddataset","dsMD_ITMDXM","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edMEMO_FILD","value","dsMD_ITMDXM","MEMO_FILD");
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
        this.addIncludeScript("MDMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDMD0010 인터넷개별청약
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.13		최제현		Initial Created.
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
        this.sPACKAGENAME 	= "MDMD0010"; //해당 Form에서 사용 할 Package 명

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

        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.CalSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
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

        	this.fnc_DatasetClear('dsMD_ITMDXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_ITMDXM=dsMD_ITMDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_ITMDXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsMD_ITMDXM.addRow();
        		
        	var date = this.fnc_GetServerDateTime("DATE");
        	var year_mnth = date.substr(0,6);

        	this.dsMD_ITMDXM.setColumn(iRow, "INST_DATE", date);
        	this.dsMD_ITMDXM.setColumn(iRow, "YEAR_MNTH", this.CalSHRYEAR_MNTH.fn_GetMonth());
        	this.dsMD_ITMDXM.setColumn(iRow, "COMI_RATE", 0.15); 
        	this.dsMD_ITMDXM.setColumn(iRow, "CMTX_FLAG",'T');
        	this.dsMD_ITMDXM.setColumn(iRow, "TRTX_FLAG",'T');
        	this.grdMD_ITMDXM.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_ITMDXM.rowcount ; i++){
        		if(this.dsMD_ITMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_ITMDXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_ITMDXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_ITMDXM.deleteRow(i);
        			}
        		}
        	}

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsMD_ITMDXM");
        	this.grdMD_ITMDXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsMD_ITMDXM=dsMD_ITMDXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_ITMDXM.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsMD_ITMDXM, dsMD_ITMDXM",this);
        	
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

        	if (this.fnc_DatasetChangeCheck("dsMD_ITMDXM")) {
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
        	for(var i=0 ; i<this.dsMD_ITMDXM.rowcount ; i++){

        		if(this.dsMD_ITMDXM.getColumn(i,"CHEK_FILD") == '1'){
        			if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "TRTR_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "CMTR_NUMB"))) > 0){
        				this.fnc_Message("MCM001");
        				return false;
        			}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "TRTX_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "CMTX_NUMB")))){
        				this.fnc_Message("MCM002");
        				return false;
        			}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "TRCH_NUMB"))) > 0 || this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "CMCH_NUMB")))){
        				this.fnc_Message("MCM003");
        				return false;
        			}
        		}
        	}
        	
        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "일련번호 : ("+this.grdMD_ITMDXM.getCellText(this.grdMD_ITMDXM.currentrow, this.grdMD_ITMDXM.getBindCellIndex( "body", "SEQX_FILD" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsMD_ITMDXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_ITMDXM.getRowCount(); i++) {
        	
        		this.dsMD_ITMDXM.setColumn(i,"CHEK_FILD",0);
        	
        		if (this.fnc_ToUpper(this.dsMD_ITMDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		//이후의 프로세스가 진행되었는지 확인
        		if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"TRTR_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"CMTR_NUMB"))) > 0){
        			this.fnc_Message("MDM007");
        			return false;
        		}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"TRTX_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"CMTX_NUMB"))) > 0){
        			this.fnc_Message("MDM008");
        			return false;
        		}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"CMTR_NUMB"))) > 0 || 
        		this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i,"CMCH_NUMB"))) > 0){
        			this.fnc_Message("MDM009");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "YEAR_MNTH"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "년월", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"YEAR_MNTH"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "CUST_NAME"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "광고주", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"CUST_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "BRND_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "브랜드", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"BRND_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "MEDX_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "청구지", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"MEDX_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "RMED_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"RMED_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "DEPT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당부서", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"RMED_NAME"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "AMNT_FILD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "금액", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"AMNT_FILD"), '');
        		}else if (this.fnc_Length(this.fnc_Trim(this.dsMD_ITMDXM.getColumn(i, "ITAD_FLAG"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "인터넷구분", this.dsMD_ITMDXM, i, this.dsMD_ITMDXM.getColumn(this.dsMD_ITMDXM.rowposition,"ITAD_FLAG"), '');
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
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //광고주
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
        		this.fnc_Information(this.stInformation, this.dsMD_ITMDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_ITMDXM.rowcount);

        	} else if (sMethodName == "SEARCH01") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {		
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		 var arrParam = new Array();
        		 
        		 arrParam[0]  = "COMBO,cmbITAD_FLAG,dsITAD_FLAG,0";
        		 arrParam[1]  = "GRID,grdMD_ITMDXM,dsITAD_FLAG,ITAD_FLAG";
        		 
        		 this.fnc_UserComboInnerBind(arrParam);	
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

        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_ITMDXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_ITMDXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_ITMDXM.getRowCount(); i++) {
        			this.dsMD_ITMDXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_ITMDXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*--------------+
         |  내역복사   |
         +--------------*/
        this.btn_CopyRow_onclick = function(obj,e)
        {

        	var nRow = this.dsMD_ITMDXM.rowposition;
        	var iRow = this.dsMD_ITMDXM.insertRow(this.dsMD_ITMDXM.rowposition + 1);
        	
        	this.dsMD_ITMDXM.setColumn(iRow, "YEAR_MNTH", this.dsMD_ITMDXM.getColumn(nRow, "YEAR_MNTH"));//년월
        	this.dsMD_ITMDXM.setColumn(iRow, "CUST_CODE", this.dsMD_ITMDXM.getColumn(nRow, "CUST_CODE"));//광고주코드
        	this.dsMD_ITMDXM.setColumn(iRow, "CUST_NAME", this.dsMD_ITMDXM.getColumn(nRow, "CUST_NAME"));//광고주명
        	this.dsMD_ITMDXM.setColumn(iRow, "CTIM_CODE", this.dsMD_ITMDXM.getColumn(nRow, "CTIM_CODE"));//광고주팀코드
        	this.dsMD_ITMDXM.setColumn(iRow, "CTIM_NAME", this.dsMD_ITMDXM.getColumn(nRow, "CTIM_NAME"));//광고주팀명
        	this.dsMD_ITMDXM.setColumn(iRow, "BRND_CODE", this.dsMD_ITMDXM.getColumn(nRow, "BRND_CODE"));//브랜드코드
        	this.dsMD_ITMDXM.setColumn(iRow, "BRND_NAME", this.dsMD_ITMDXM.getColumn(nRow, "BRND_NAME"));//브랜드명
        	this.dsMD_ITMDXM.setColumn(iRow, "MEDX_CODE", this.dsMD_ITMDXM.getColumn(nRow, "MEDX_CODE"));//청구지코드
        	this.dsMD_ITMDXM.setColumn(iRow, "MEDX_NAME", this.dsMD_ITMDXM.getColumn(nRow, "MEDX_NAME"));//청구지명
        	this.dsMD_ITMDXM.setColumn(iRow, "MEDX_FLAG", this.dsMD_ITMDXM.getColumn(nRow, "MEDX_FLAG"));//매체구분
        	this.dsMD_ITMDXM.setColumn(iRow, "RMED_CODE", this.dsMD_ITMDXM.getColumn(nRow, "RMED_CODE"));//매체코드
        	this.dsMD_ITMDXM.setColumn(iRow, "RMED_NAME", this.dsMD_ITMDXM.getColumn(nRow, "RMED_NAME"));//매체명
        	this.dsMD_ITMDXM.setColumn(iRow, "APLY_DATE", this.dsMD_ITMDXM.getColumn(nRow, "APLY_DATE"));//적용일자
        	this.dsMD_ITMDXM.setColumn(iRow, "MATT_NAME", this.dsMD_ITMDXM.getColumn(nRow, "MATT_NAME"));//소재명
        	this.dsMD_ITMDXM.setColumn(iRow, "DEPT_CODE", this.dsMD_ITMDXM.getColumn(nRow, "DEPT_CODE"));//코바넷청약일련번호
        	this.dsMD_ITMDXM.setColumn(iRow, "DEPT_NAME", this.dsMD_ITMDXM.getColumn(nRow, "DEPT_NAME"));//코바넷운행일련번호
        	this.dsMD_ITMDXM.setColumn(iRow, "EMPL_CODE", this.dsMD_ITMDXM.getColumn(nRow, "EMPL_CODE"));//매체통신구분
        	this.dsMD_ITMDXM.setColumn(iRow, "EMPL_NAME", this.dsMD_ITMDXM.getColumn(nRow, "EMPL_NAME"));//AOR구분
        	this.dsMD_ITMDXM.setColumn(iRow, "AMNT_FILD", this.dsMD_ITMDXM.getColumn(nRow, "AMNT_FILD"));//금액
        	this.dsMD_ITMDXM.setColumn(iRow, "ITAD_FLAG", this.dsMD_ITMDXM.getColumn(nRow, "ITAD_FLAG"));//인터넷광고구분
        	this.dsMD_ITMDXM.setColumn(iRow, "COMI_RATE", this.dsMD_ITMDXM.getColumn(nRow, "COMI_RATE"));//수수료율
        	this.dsMD_ITMDXM.setColumn(iRow, "COMI_FILD", this.dsMD_ITMDXM.getColumn(nRow, "COMI_FILD"));//수수료
        	this.dsMD_ITMDXM.setColumn(iRow, "TRTX_FLAG", this.dsMD_ITMDXM.getColumn(nRow, "TRTX_FLAG"));//위수탁부가세유무
        	this.dsMD_ITMDXM.setColumn(iRow, "CMTX_FLAG", this.dsMD_ITMDXM.getColumn(nRow, "CMTX_FLAG"));//수수료부가세유무
        	this.dsMD_ITMDXM.setColumn(iRow, "MEMO_FILD", this.dsMD_ITMDXM.getColumn(nRow, "MEMO_FILD"));//비고		
        	this.dsMD_ITMDXM.setColumn(iRow, "AORX_FLAG", this.dsMD_ITMDXM.getColumn(nRow, "AORX_FLAG"));//AOR구분
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

        //상단 브랜드팝업
        this.fn_HelpDialogeSHRBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0015";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtSHRBRND_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtSHRBRND_NAME";                          
        	arrParam[5] = "edtSHRBRND_CODE,edtSHRBRND_NAME,edtSHRCUST_CODE,edtSHRCUST_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
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

        //상단 매체팝업
        this.fn_HelpDialogeSHRRMED_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0021";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtSHRRMED_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtSHRRMED_NAME";                          
        	arrParam[5] = "edtSHRRMED_CODE,edtSHRRMED_NAME,edtSHRMEDX_CODE,edtSHRMEDX_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        //하단 광고주 팝업
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

        //하단 청구지 팝업
        this.fn_HelpDialogeMEDX_CODE = function(obj,e)
        {

            var arrParam = new Array();
        	arrParam[0] = "MCM0026";                                 
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
        	arrParam[0] = "MCM0021";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtRMED_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtRMED_NAME";                          
        	arrParam[5] = "edtRMED_CODE,edtRMED_NAME,edtMEDX_CODE,edtMEDX_NAME";   
        	arrParam[6] = "0,1,2,3";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }

        //하단 사원 팝업
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

        //하단 담당부서 팝업
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
        	if(this.dsMD_ITMDXM.rowcount == 0){
        		alert('복사할 데이터가 없습니다.');
        	}else{
        		var sName 		= "MDMD0010P01";
        		var sFormURL 	= "mdm::MDMD0010P01.xfdl";
        		var sOpenStyle  = "modeless=false";
        			sOpenStyle += ",autosize=true";
        			sOpenStyle += ",top=-1";
        			sOpenStyle += ",left=-1";
        			sOpenStyle += ",width=990";
        			sOpenStyle += ",height=800";
        			sOpenStyle += ",title=true";
        			sOpenStyle += ",titletext=전체복사";
        			sOpenStyle += ",status=false";
        			sOpenStyle += ",resizable=true";3

        		var objArgument = {
        			 oYEAR_MNTH : this.edtYEAR_MNTH.value
        		};

        		this.fnc_OpenPopup(sName, sFormURL, objArgument, sOpenStyle, "");
        	
        	}	
        }

        
        /*----------------+
         |   초기화 	  |
         +----------------*/
        this.btn_Reset_onclick = function(obj,e)
        {
        	this.dsMD_ITMDXM.reset();
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

        /*------------------------+
         |  자동으로 수수료 입력  |
         +------------------------*/

        this.fn_InputAMNT_FILD = function(obj,e)
        {
        	this.edtCOMI_FILD.set_value(this.edtAMNT_FILD.value*this.edtCOMI_RATE.value);
        	if(this.edtCOMI_FILD.value=='')
        	this.edtCOMI_FILD.set_value(0);
        }

        /*------------------------------------------+
         |  이름이 지워지면 코드가 지워짐(상단) |
         +-----------------------------------------*/

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
        this.edtMEDX_NAME_ontextchanged = function(obj,e)
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

        

        this.edtSHRCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.lstCUST_NAME.set_visible(false);
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_ITMDXM.addEventHandler("oncolumnchanged", this.dsMD_ITMDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRMEDX_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.grdMD_ITMDXM.addEventHandler("onheadclick", this.grdMD_ITMDXM_onheadclick, this);
            this.btn_COPYAll.addEventHandler("onclick", this.btn_COPYAll_onclick, this);
            this.btn_CopyRow.addEventHandler("onclick", this.btn_CopyRow_onclick, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeCUST_CODE, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCUST_CODE, this);
            this.edtCUST_NAME.addEventHandler("ontextchanged", this.edtCUST_NAME_ontextchanged, this);
            this.imgHelpCTIM_CODE.addEventHandler("onclick", this.fn_HelpDialogeCTIM_CODE, this);
            this.edtCTIM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCTIM_CODE, this);
            this.edtCTIM_NAME.addEventHandler("ontextchanged", this.edtCTIM_NAME_ontextchanged, this);
            this.imgHelpBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeBRND_CODE, this);
            this.edtBRND_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeBRND_CODE, this);
            this.edtBRND_NAME.addEventHandler("ontextchanged", this.edtBRND_NAME_ontextchanged, this);
            this.imgHelpMEDX_CODE.addEventHandler("onclick", this.fn_HelpDialogeMEDX_CODE, this);
            this.edtMEDX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeMEDX_CODE, this);
            this.edtMEDX_NAME.addEventHandler("ontextchanged", this.edtMEDX_NAME_ontextchanged, this);
            this.chkAORX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMI_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("ontextchanged", this.edtSHRBRND_NAME_ontextchanged, this);
            this.edtSHRRMED_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRRMED_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_NAME.addEventHandler("oneditclick", this.edtSHRCTIM_NAME_oneditclick, this);
            this.edtSHRRMED_NAME.addEventHandler("ontextchanged", this.edtSHRRMED_NAME_ontextchanged, this);
            this.stITAD_FLAG.addEventHandler("onclick", this.stCOLR_DEGR_onclick, this);
            this.cmbCMTX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbTRTX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_Reset.addEventHandler("onclick", this.btn_Reset_onclick, this);
            this.edtRMED_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRMED_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeRMED_CODE, this);
            this.edtRMED_NAME.addEventHandler("ontextchanged", this.edtRMED_NAME_ontextchanged, this);
            this.imgHelpRMED_CODE.addEventHandler("onclick", this.fn_HelpDialogeRMED_CODE, this);
            this.edtRMED_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtYEAR_MNTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtYEAR_MNTH.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbITAD_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAMNT_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAMNT_FILD.addEventHandler("ontextchanged", this.fn_InputAMNT_FILD, this);
            this.edtMATT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMATT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_CODE.addEventHandler("onclick", this.fn_HelpDialogeEMPL_CODE, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeEMPL_CODE, this);
            this.edtEMPL_NAME.addEventHandler("ontextchanged", this.edtEMPL_NAME_ontextchanged, this);
            this.edtEMPL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeDEPT_CODE, this);
            this.edtDEPT_NAME.addEventHandler("ontextchanged", this.edtDEPT_NAME_ontextchanged, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialogeDEPT_CODE, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSTAR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calENDD_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMI_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMI_RATE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCOMI_RATE.addEventHandler("ontextchanged", this.fn_InputAMNT_FILD, this);
            this.edMEMO_FILD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edMEMO_FILD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.CalSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MDMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
