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
                this.set_name("MDMA0011");
                this.set_titletext("미크 일괄청약");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_SUBSXM", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"INT\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_WAYY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REPL_PRGM\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MATRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"INT\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ISEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"MSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LCAL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYW_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RHOU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RBRO_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RARE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RSUB_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_ETMDXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"OVER_LAPP\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_MOND\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TUES\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_WEDN\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_THUR\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FRID\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SATU\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SUND\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TTST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TTED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CNMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_OSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_SSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_MSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_WKDY\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_BRSQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_DISQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RARE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RSUB_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RINP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"NUMB_NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RHOU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KBNT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsBROD_FLAG</Col><Col id=\"COMBOID\">MDM0001</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">방송구분</Col></Row><Row><Col id=\"DSNAME\">dsCONT_FORM</Col><Col id=\"COMBOID\">MDM0002</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">계약형태</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsADDX_TYPE</Col><Col id=\"COMBOID\">MDM0006</Col><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">광고유형</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsHOUR_TYPE</Col><Col id=\"COMBOID\">MDM0003</Col><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">시급</Col></Row><Row><Col id=\"DSNAME\">dsSUBS_FLAG</Col><Col id=\"COMBOID\">MDM0004</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">청약구분</Col></Row><Row><Col id=\"DSNAME\">dsADDX_FORM</Col><Col id=\"COMBOID\">MDM0005</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">광고형태</Col></Row><Row><Col id=\"DSNAME\">dsAREA_FLAG</Col><Col id=\"COMBOID\">MDM0007</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">지역구분</Col></Row><Row><Col id=\"DSNAME\">dsTRNS_FLAG</Col><Col id=\"COMBOID\">MDM0008</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\">매체통신구분</Col></Row><Row><Col id=\"DSNAME\">dsEDIT_WKDY</Col><Col id=\"COMBOID\">MDM0010</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">1</Col></Row><Row><Col id=\"DSNAME\">dsMEDX_FLAG</Col><Col id=\"COMBOID\">MDM0009</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("일괄청약");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "9", "35", "306", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC02", "absolute", "1", "0", "62", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btn_ExcelUpload00", "absolute", "181", "0", "109", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("소재별운행현황");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "28", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "507", "23", "28", null, this);
            obj.set_taborder("72");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0.67%", "29", null, "6", "82.56%", null, this);
            obj.set_taborder("74");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0.67%", "56", null, "4", "87.11%", null, this);
            obj.set_taborder("75");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "51.19%", "0", null, "60", "45.77%", null, this);
            obj.set_taborder("76");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "97.62%", "0", null, "717", "0%", null, this);
            obj.set_taborder("78");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.33%", null, null, "15", "2.95%", "0", this);
            obj.set_taborder("79");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "75.65%", "23", null, "10", "2.11%", null, this);
            obj.set_taborder("80");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "5.22%", "61", null, "41", "94.1%", null, this);
            obj.set_taborder("83");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "518", "0", null, "29", "28", null, this);
            obj.set_taborder("86");
            obj.set_text("매체관리 > 전파광고");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "48.27%", "103", null, "37", "44.99%", null, this);
            obj.set_taborder("87");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "53.66%", "56", null, "4", "35.55%", null, this);
            obj.set_taborder("88");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", "113", null, null, "28", "15", this);
            obj.set_taborder("89");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("미등록");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_SUBSXM", "absolute", "24", "89", null, "252", "34", null, this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("8");
            obj.set_binddataset("dsMD_SUBSXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"광고회사\"/><Cell col=\"2\" text=\"광고주\"/><Cell col=\"3\" text=\"방송국\"/><Cell col=\"4\" text=\"매체\"/><Cell col=\"5\" text=\"지역\"/><Cell col=\"6\" text=\"프로그램\"/><Cell col=\"7\" text=\"시급\"/><Cell col=\"8\" text=\"요일\"/><Cell col=\"9\" text=\"시작\"/><Cell col=\"10\" text=\"종료\"/><Cell col=\"11\" text=\"횟수\"/><Cell col=\"12\" text=\"단가\"/><Cell col=\"13\" text=\"금액\"/><Cell col=\"14\" text=\"시작일자\"/><Cell col=\"15\" text=\"종료일자\"/><Cell col=\"16\" text=\"운행구분\"/><Cell col=\"17\" text=\"초수\"/><Cell col=\"18\" text=\"본지사\"/><Cell col=\"19\" text=\"영업국\"/><Cell col=\"20\" text=\"청약구분\"/><Cell col=\"21\" text=\"광고형태\"/><Cell col=\"22\" text=\"판매시장\"/><Cell col=\"23\" text=\"판매경로\"/><Cell col=\"24\" text=\"계약기간\"/><Cell col=\"25\" text=\"광고유형\"/><Cell col=\"26\" text=\"업종\"/><Cell col=\"27\" text=\"입력일자\"/><Cell col=\"28\" text=\"지역\"/><Cell col=\"29\" text=\"광고회사코드\"/><Cell col=\"30\" text=\"광고주코드\"/><Cell col=\"31\" text=\"편성년도\"/><Cell col=\"32\" text=\"편성일련번호\"/><Cell col=\"33\" text=\"청약일련번호\"/><Cell col=\"34\" text=\"운행일련번호\"/><Cell col=\"35\" text=\"본방 릴레이 프로그램\"/><Cell col=\"36\" text=\"패키지명\"/></Band><Band id=\"body\"><Cell text=\"bind:NUMB_NUMB\"/><Cell col=\"1\" text=\"bind:ENTP_NAME\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:BROD_CDNM\"/><Cell col=\"4\" text=\"bind:MDIM_CDNM\"/><Cell col=\"5\" text=\"bind:MEDX_AREA\"/><Cell col=\"6\" text=\"bind:PRGM_NAME\"/><Cell col=\"7\" text=\"bind:HOUR_TYPE\"/><Cell col=\"8\" text=\"bind:DAYY_WEEK\"/><Cell col=\"9\" text=\"bind:STAR_TIME\"/><Cell col=\"10\" text=\"bind:ENDD_TIME\"/><Cell col=\"11\" text=\"bind:CONT_FILD\"/><Cell col=\"12\" text=\"bind:PRIC_FILD\"/><Cell col=\"13\" text=\"bind:AMNT_FILD\"/><Cell col=\"14\" text=\"bind:STAR_DATE\"/><Cell col=\"15\" text=\"bind:ENDD_DATE\"/><Cell col=\"16\" text=\"bind:BROD_NAME\"/><Cell col=\"17\" text=\"bind:SECD_FILD\"/><Cell col=\"18\" text=\"bind:OFIC_CDNM\"/><Cell col=\"19\" text=\"bind:OPER_DEPT\"/><Cell col=\"20\" text=\"bind:SUBS_NAME\"/><Cell col=\"21\" text=\"bind:ADVR_TYPE\"/><Cell col=\"22\" text=\"bind:CONT_FORM\"/><Cell col=\"23\" text=\"bind:SELL_WAYY\"/><Cell col=\"24\" text=\"bind:CONT_PRID\"/><Cell col=\"25\" text=\"bind:ADDX_NAME\"/><Cell col=\"26\" text=\"bind:BUSI_TYPE\"/><Cell col=\"27\" text=\"bind:INST_DATE\"/><Cell col=\"28\" text=\"bind:AREA_NAME\"/><Cell col=\"29\" text=\"bind:ENTP_CODE\"/><Cell col=\"30\" text=\"bind:CUST_CODE\"/><Cell col=\"31\" text=\"bind:OPER_YEAR\"/><Cell col=\"32\" text=\"bind:OSEQ_CODE\"/><Cell col=\"33\" text=\"bind:SEQX_CODE\"/><Cell col=\"34\" text=\"bind:OSEQ_FLAG\"/><Cell col=\"35\" text=\"bind:REPL_PRGM\"/><Cell col=\"36\" text=\"bind:PACK_NAME\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", null, "21", "883", null, this.tabXM.tab0);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_MATRXM", "absolute", "12", "25", null, null, "11", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsMD_MATRXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"86\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"71\"/><Column size=\"0\"/><Column size=\"93\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"82\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"입력년월\"/><Cell col=\"3\" text=\"오류내역\"/><Cell col=\"4\" text=\"방송사\"/><Cell col=\"5\" text=\"편성명\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"요일\"/><Cell col=\"9\" text=\"시급\"/><Cell col=\"10\" text=\"시작시간\"/><Cell col=\"11\" text=\"종료시간\"/><Cell col=\"12\" text=\"광고주코드\"/><Cell col=\"13\"/><Cell col=\"14\" text=\"광고주명\"/><Cell col=\"15\"/><Cell col=\"16\" text=\"운행시작일\"/><Cell col=\"17\" text=\"소재시작일\"/><Cell col=\"18\" text=\"운행종료일\"/><Cell col=\"19\" text=\"소재종료일\"/><Cell col=\"20\" text=\"품목\"/><Cell col=\"21\" text=\"품목\"/><Cell col=\"22\" text=\"소재\"/><Cell col=\"23\" text=\"초수\"/><Cell col=\"24\" text=\"회수\"/><Cell col=\"25\" text=\"단가\"/><Cell col=\"26\" text=\"금액\"/><Cell col=\"27\" text=\"운행구분코드\"/><Cell col=\"28\" text=\"운행구분명\"/><Cell col=\"29\" text=\"청약형태코드\"/><Cell col=\"30\" text=\"청약형태\"/><Cell col=\"31\"/><Cell col=\"32\" text=\"본지사명\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\" text=\"입력자\"/><Cell col=\"40\" text=\"입력일\"/><Cell col=\"41\"/><Cell col=\"42\" text=\"방송사코드\"/><Cell col=\"43\" text=\"청약일련번호\"/><Cell col=\"44\" text=\"매체코드\"/><Cell col=\"45\" text=\"품목일련번호\"/><Cell col=\"46\" text=\"편성년도\"/><Cell col=\"47\" text=\"대표소재일련번호\"/><Cell col=\"48\" text=\"편성일련번호\"/><Cell col=\"49\" text=\"소재일련번호\"/><Cell col=\"50\" text=\"운행일련번호\"/><Cell col=\"51\"/><Cell col=\"52\" text=\"운행구분코드\"/><Cell col=\"53\" text=\"청약구분코드\"/><Cell col=\"54\" text=\"본지사코드\"/><Cell col=\"55\" text=\"지역코드\"/><Cell col=\"56\" text=\"지역코드\"/><Cell col=\"57\" text=\"광고형태코드\"/><Cell col=\"58\"/><Cell col=\"59\" text=\"광고형태코드\"/><Cell col=\"60\" text=\"광고유형코드\"/><Cell col=\"61\" text=\"광고유형코드\"/><Cell col=\"62\" text=\"단구분\"/><Cell col=\"63\" text=\"로컬구분\"/><Cell col=\"64\" text=\"시급코드\"/><Cell col=\"65\" text=\"요일구분\"/><Cell col=\"66\"/><Cell col=\"67\" text=\"지역\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:NUMB_NUMB\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:YEAR_MNTH\"/><Cell col=\"3\" text=\"bind:FAIL_NAME\"/><Cell col=\"4\" text=\"bind:RMED_NAME\"/><Cell col=\"5\" text=\"bind:PRGM_NAME\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:DAYY_WEEK\"/><Cell col=\"9\" text=\"bind:HOUR_TYPE\"/><Cell col=\"10\" text=\"bind:STAR_TIME\"/><Cell col=\"11\" text=\"bind:ENDD_TIME\"/><Cell col=\"12\" text=\"bind:CUST_CODE\"/><Cell col=\"13\"/><Cell col=\"14\" text=\"bind:CUST_NAME\"/><Cell col=\"15\"/><Cell col=\"16\" text=\"bind:OSTA_DATE\"/><Cell col=\"17\" text=\"bind:STAR_DATE\"/><Cell col=\"18\" text=\"bind:OEND_DATE\"/><Cell col=\"19\" text=\"bind:ENDD_DATE\"/><Cell col=\"20\" text=\"bind:KBNT_ITEM\"/><Cell col=\"21\" text=\"bind:KBNT_ITMM\"/><Cell col=\"22\" text=\"bind:KBNT_ITEM\"/><Cell col=\"23\" text=\"bind:SECD_FILD\"/><Cell col=\"24\" text=\"bind:CONT_FILD\"/><Cell col=\"25\" text=\"bind:PRIC_FILD\"/><Cell col=\"26\" text=\"bind:AMNT_FILD\"/><Cell col=\"27\" text=\"bind:RBRO_FLAG\"/><Cell col=\"28\" text=\"bind:BROD_NAME\"/><Cell col=\"29\" text=\"bind:RSUB_FLAG\"/><Cell col=\"30\" text=\"bind:SUBS_NAME\"/><Cell col=\"31\"/><Cell col=\"32\" text=\"bind:OFIC_CDNM\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\" text=\"bind:BROD_CODE\"/><Cell col=\"43\" text=\"bind:SEQX_CODE\"/><Cell col=\"44\" text=\"bind:MDIM_CODE\"/><Cell col=\"45\" text=\"bind:PSEQ_CODE\"/><Cell col=\"46\" text=\"bind:OPER_YEAR\"/><Cell col=\"47\" text=\"bind:ISEQ_CODE\"/><Cell col=\"48\" text=\"bind:OSEQ_CODE\"/><Cell col=\"49\" text=\"bind:KBNT_ITSQ\"/><Cell col=\"50\" text=\"bind:MSEQ_CODE\"/><Cell col=\"51\"/><Cell col=\"52\" text=\"bind:OPER_FLAG\"/><Cell col=\"53\" text=\"bind:OFER_FLAG\"/><Cell col=\"54\" text=\"bind:OFIC_CODE\"/><Cell col=\"55\" text=\"bind:RARE_FLAG\"/><Cell col=\"56\" text=\"bind:AREA_FLAG\"/><Cell col=\"57\" text=\"bind:RADD_FORM\"/><Cell col=\"58\"/><Cell col=\"59\" text=\"bind:ADVR_FLAG\"/><Cell col=\"60\" text=\"bind:RADD_TYPE\"/><Cell col=\"61\" text=\"bind:ADVR_TYPE\"/><Cell col=\"62\" text=\"bind:COLM_FLAG\"/><Cell col=\"63\" text=\"bind:LCAL_FLAG\"/><Cell col=\"64\" text=\"bind:HOUR_CODE\"/><Cell col=\"65\" text=\"bind:DAYW_FLAG\"/><Cell col=\"66\"/><Cell col=\"67\" text=\"bind:AREA_NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\" style=\"align:center;\" text=\"합계\"/><Cell col=\"24\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;CONT_FILD&quot;)\"/><Cell col=\"25\"/><Cell col=\"26\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/><Cell col=\"55\"/><Cell col=\"56\"/><Cell col=\"57\"/><Cell col=\"58\"/><Cell col=\"59\"/><Cell col=\"60\"/><Cell col=\"61\"/><Cell col=\"62\"/><Cell col=\"63\"/><Cell col=\"64\"/><Cell col=\"65\"/><Cell col=\"66\"/><Cell col=\"67\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_ETMDXM", "absolute", "12", "25", null, null, "11", "10", this.tabXM.tab0);
            obj.set_taborder("12");
            obj.set_binddataset("dsMD_ETMDXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"84\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"89\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"81\"/><Column size=\"67\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"75\"/><Column size=\"71\"/><Column size=\"79\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"71\"/><Column size=\"81\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"69\"/><Column size=\"76\"/><Column size=\"78\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"78\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"94\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"93\"/><Column size=\"89\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"소재번호\"/><Cell col=\"2\" text=\"신탁번호\"/><Cell col=\"3\" text=\"년월\"/><Cell col=\"4\" text=\"오류내역\"/><Cell col=\"5\" text=\"광고주코드\"/><Cell col=\"6\" text=\"CUST_NAME\"/><Cell col=\"7\" text=\"광고주명\"/><Cell col=\"8\" text=\"광고주팀코드\"/><Cell col=\"9\" text=\"CTIM_NAME\"/><Cell col=\"10\" text=\"코바넷코드\"/><Cell col=\"11\" text=\"브랜드코드\"/><Cell col=\"12\" text=\"BRND_NAME\"/><Cell col=\"13\" text=\"브랜드명\"/><Cell col=\"14\" text=\"코바넷코드\"/><Cell col=\"15\" text=\"코바넷명\"/><Cell col=\"16\" text=\"매체사코드\"/><Cell col=\"17\" text=\"MEDX_NAME\"/><Cell col=\"18\" text=\"매체지코드\"/><Cell col=\"19\" text=\"코바넷코드\"/><Cell col=\"20\" text=\"코바넷명\"/><Cell col=\"21\" text=\"매체구분\"/><Cell col=\"22\" text=\"시급\"/><Cell col=\"23\" text=\"방송요일\"/><Cell col=\"24\" text=\"시작시간\"/><Cell col=\"25\" text=\"종료시간\"/><Cell col=\"26\" text=\"시작일\"/><Cell col=\"27\" text=\"종료일\"/><Cell col=\"28\" text=\"MNST_DATE\"/><Cell col=\"29\" text=\"MNED_DATE\"/><Cell col=\"30\" text=\"코바넷코드\"/><Cell col=\"31\" text=\"코바넷명\"/><Cell col=\"32\" text=\"방송구분\"/><Cell col=\"33\" text=\"ATCT_FLAG\"/><Cell col=\"34\" text=\"코바넷코드\"/><Cell col=\"35\" text=\"코바넷명\"/><Cell col=\"36\" text=\"코바넷코드\"/><Cell col=\"37\" text=\"코바넷명\"/><Cell col=\"38\" text=\"회수\"/><Cell col=\"39\" text=\"단가\"/><Cell col=\"40\" text=\"BRCE_FILD\"/><Cell col=\"41\" text=\"금액\"/><Cell col=\"42\" text=\"초수\"/><Cell col=\"43\" text=\"운행구분\"/><Cell col=\"44\" text=\"코바넷코드\"/><Cell col=\"45\" text=\"코바넷명\"/><Cell col=\"46\" text=\"광고형태\"/><Cell col=\"47\" text=\"코바넷코드\"/><Cell col=\"48\" text=\"코바넷명\"/><Cell col=\"49\" text=\"계약형태\"/><Cell col=\"50\" text=\"코바넷명\"/><Cell col=\"51\" text=\"광고유형\"/><Cell col=\"52\" text=\"코바넷코드\"/><Cell col=\"53\" text=\"지역구분\"/><Cell col=\"54\" text=\"코바넷 코드\"/><Cell col=\"55\" text=\"코바넷명\"/><Cell col=\"56\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell text=\"bind:TEMP_NUMB\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"readonly\" text=\"bind:NUMB_NUMB\"/><Cell col=\"2\" edittype=\"readonly\" text=\"bind:NUMB_NUM2\"/><Cell col=\"3\" edittype=\"readonly\" text=\"bind:YEAR_MNTH\"/><Cell col=\"4\" edittype=\"readonly\" style=\"background:burlywood;background2:burlywood;\" text=\"bind:FAIL_NAME\"/><Cell col=\"5\" edittype=\"readonly\" text=\"bind:CUST_CODE\"/><Cell col=\"6\" edittype=\"readonly\" text=\"bind:CUST_NAME\"/><Cell col=\"7\" edittype=\"readonly\" text=\"bind:CUST_NAME\"/><Cell col=\"8\" edittype=\"readonly\" text=\"bind:CTIM_CODE\"/><Cell col=\"9\" edittype=\"readonly\" text=\"bind:CTIM_NAME\"/><Cell col=\"10\" edittype=\"readonly\" text=\"bind:CUST_KBNT\"/><Cell col=\"11\" edittype=\"readonly\" text=\"bind:BRND_CODE\"/><Cell col=\"12\" edittype=\"readonly\" text=\"bind:BRND_NAME\"/><Cell col=\"13\" edittype=\"readonly\" text=\"bind:KBNT_ITEM\"/><Cell col=\"14\" edittype=\"readonly\" text=\"bind:PSEQ_CODE\"/><Cell col=\"15\" edittype=\"readonly\" text=\"bind:RKBN_ITEM\"/><Cell col=\"16\" edittype=\"readonly\" text=\"bind:MEDX_CODE\"/><Cell col=\"17\" edittype=\"readonly\" text=\"bind:MEDX_NAME\"/><Cell col=\"18\" edittype=\"readonly\" text=\"bind:RMED_CODE\"/><Cell col=\"19\" edittype=\"readonly\" text=\"bind:KBNT_CODE\"/><Cell col=\"20\" edittype=\"readonly\" text=\"bind:RMED_NAME\"/><Cell col=\"21\" edittype=\"readonly\" text=\"bind:MEDX_FLAG\"/><Cell col=\"22\" edittype=\"readonly\" text=\"bind:HOUR_TYPE\"/><Cell col=\"23\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:DAYY_WEEK\"/><Cell col=\"24\" edittype=\"readonly\" text=\"bind:STAR_TIME\"/><Cell col=\"25\" edittype=\"readonly\" text=\"bind:ENDD_TIME\"/><Cell col=\"26\" edittype=\"readonly\" text=\"bind:TTST_DATE\"/><Cell col=\"27\" edittype=\"readonly\" text=\"bind:TTED_DATE\"/><Cell col=\"28\" edittype=\"readonly\" text=\"bind:MNST_DATE\"/><Cell col=\"29\" edittype=\"readonly\" text=\"bind:MNED_DATE\"/><Cell col=\"30\" edittype=\"readonly\" text=\"bind:HOUR_CODE\"/><Cell col=\"31\" edittype=\"readonly\" text=\"bind:RHOU_TYPE\"/><Cell col=\"32\" edittype=\"readonly\" text=\"bind:BROD_FLAG\"/><Cell col=\"33\" edittype=\"readonly\" text=\"bind:ATCT_FLAG\"/><Cell col=\"34\" edittype=\"readonly\" text=\"bind:OPER_FLAG\"/><Cell col=\"35\" edittype=\"readonly\" text=\"bind:BROD_NAME\"/><Cell col=\"36\" edittype=\"readonly\" text=\"bind:OPER_FLAG\"/><Cell col=\"37\" edittype=\"readonly\" text=\"bind:BROD_NAME\"/><Cell col=\"38\" edittype=\"readonly\" text=\"bind:CONT_FILD\"/><Cell col=\"39\" edittype=\"readonly\" style=\"align:right;\" text=\"bind:PRCE_FILD\"/><Cell col=\"40\" edittype=\"readonly\" text=\"bind:BRCE_FILD\"/><Cell col=\"41\" edittype=\"readonly\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"42\" edittype=\"readonly\" text=\"bind:SECD_FILD\"/><Cell col=\"43\" edittype=\"readonly\" text=\"bind:SUBS_FLAG\"/><Cell col=\"44\" edittype=\"readonly\" text=\"bind:OFER_FLAG\"/><Cell col=\"45\" edittype=\"readonly\" text=\"bind:SUBS_NAME\"/><Cell col=\"46\" edittype=\"readonly\" text=\"bind:ADDX_FORM\"/><Cell col=\"47\" edittype=\"readonly\" text=\"bind:ADVR_FLAG\"/><Cell col=\"48\" edittype=\"readonly\" text=\"bind:RADV_TYPE\"/><Cell col=\"49\" edittype=\"readonly\" text=\"bind:CONT_FORM\"/><Cell col=\"50\" edittype=\"readonly\" text=\"bind:RCON_FORM\"/><Cell col=\"51\" edittype=\"readonly\" text=\"bind:ADDX_TYPE\"/><Cell col=\"52\" edittype=\"readonly\" text=\"bind:ADVR_TYPE\"/><Cell col=\"53\" edittype=\"readonly\" text=\"bind:AREA_FLAG\"/><Cell col=\"54\" edittype=\"readonly\" text=\"bind:RARE_FLAG\"/><Cell col=\"55\" edittype=\"readonly\" text=\"bind:AREA_NAME\"/><Cell col=\"56\" text=\"bind:DEPT_CODE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\" style=\"align:center;\" text=\"합계\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;CONT_FILD&quot;)\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/><Cell col=\"55\"/><Cell col=\"56\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "526", "2", "111", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("13");
            obj.set_text("대체할 브랜드명");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_background("transparent");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Edit("edtREPL_BRND", "absolute", "645", "2", "133", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("14");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stBRND_NAME", "absolute", "828", "2", "53", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("15");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Edit("edtBRND_CODE", "absolute", "893", "2", "80", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpBRND_CODE", "absolute", "975", "2", "23", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Edit("edtBRND_NAME", "absolute", "998", "2", "140", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("등록");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "9", "4", null, "21", "884", null, this.tabXM.tab1);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_ETMDXM", "absolute", "11", "25", null, null, "11", "10", this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_binddataset("dsMD_ETMDXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"107\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"87\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"일련번호\"/><Cell col=\"3\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체구분\"/><Cell col=\"8\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"9\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"10\" style=\"background:transparent;\" text=\"방송시작시간\"/><Cell col=\"11\" style=\"background:transparent;\" text=\"방송종료시간\"/><Cell col=\"12\" style=\"background:transparent;\" text=\"방송시급\"/><Cell col=\"13\" style=\"background:transparent;\" text=\"방송구분\"/><Cell col=\"14\" style=\"background:transparent;\" text=\"방송초수\"/><Cell col=\"15\" style=\"background:transparent;\" text=\"월\"/><Cell col=\"16\" style=\"background:transparent;\" text=\"화\"/><Cell col=\"17\" style=\"background:transparent;\" text=\"수\"/><Cell col=\"18\" style=\"background:transparent;\" text=\"목\"/><Cell col=\"19\" style=\"background:transparent;\" text=\"금\"/><Cell col=\"20\" style=\"background:transparent;\" text=\"토\"/><Cell col=\"21\" style=\"background:transparent;\" text=\"일\"/><Cell col=\"22\" style=\"background:transparent;\" text=\"방송회수\"/><Cell col=\"23\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"단가\"/><Cell col=\"24\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"25\" text=\"수수료\"/><Cell col=\"26\" style=\"background:transparent;\" text=\"지역구분\"/><Cell col=\"27\" style=\"background:transparent;\" text=\"청약구분\"/><Cell col=\"28\" style=\"background:transparent;\" text=\"광고형태\"/><Cell col=\"29\" style=\"background:transparent;\" text=\"광고유형\"/><Cell col=\"30\" style=\"background:transparent;\" text=\"계약형태\"/><Cell col=\"31\" style=\"background:transparent;\" text=\"편집요일\"/><Cell col=\"32\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고시작일\"/><Cell col=\"33\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고종료일\"/><Cell col=\"34\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송시작일\"/><Cell col=\"35\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송종료일\"/><Cell col=\"36\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"계획치구분\"/><Cell col=\"37\" style=\"background:transparent;\" text=\"비고\"/><Cell col=\"38\" style=\"background:transparent;\" text=\"적용일자\"/><Cell col=\"39\" style=\"background:transparent;\" text=\"연계매체\"/><Cell col=\"40\" style=\"background:transparent;\" text=\"부서명\"/><Cell col=\"41\" style=\"background:transparent;\" text=\"사원명\"/><Cell col=\"42\" style=\"background:transparent;\" text=\"위수탁부가세\"/><Cell col=\"43\" style=\"background:transparent;\" text=\"수수료부가세\"/><Cell col=\"44\" style=\"background:transparent;\" text=\"위수탁번호\"/><Cell col=\"45\" style=\"background:transparent;\" text=\"수수료번호\"/><Cell col=\"46\" text=\"위수탁계산서번호\"/><Cell col=\"47\" text=\"수수료계산서번호\"/><Cell col=\"48\" text=\"위수탁전표번호\"/><Cell col=\"49\" text=\"수수료전표번호\"/><Cell col=\"50\" style=\"background:transparent;\" text=\"자동계산\"/><Cell col=\"51\" style=\"background:transparent;\" text=\"수수료율\"/><Cell col=\"52\" style=\"background:transparent;\" text=\"등록일자\"/><Cell col=\"53\" style=\"background:transparent;\" text=\"등록자\"/><Cell col=\"54\" text=\"투입경로\"/><Cell col=\"55\" style=\"background:transparent;\" text=\"코바넷편성년도\"/><Cell col=\"56\" style=\"background:transparent;\" text=\"코바넷편성일련번호\"/><Cell col=\"57\" style=\"background:transparent;\" text=\"코바넷청약일련번호\"/><Cell col=\"58\" style=\"background:transparent;\" text=\"코바넷운행일련번호\"/><Cell col=\"59\" style=\"background:transparent;\" text=\"전월이월순번\"/><Cell col=\"60\" style=\"background:transparent;\" text=\"매체통신구분\"/><Cell col=\"61\" style=\"background:transparent;\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" edittype=\"none\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:MEDX_FLAG\" combodataset=\"dsMEDX_FLAGCombo\" combocodecol=\"MEDX_FLAG_CODE\" combodatacol=\"MEDX_FLAG_NAME\"/><Cell col=\"8\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"9\" edittype=\"none\" style=\"align: ;\" text=\"bind:PRGM_NAME\" editlimit=\"0\"/><Cell col=\"10\" edittype=\"none\" style=\"align: ;\" text=\"bind:STAR_TIME\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:ENDD_TIME\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HOUR_TYPE\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" text=\"bind:BROD_FLAG\"/><Cell col=\"14\" edittype=\"none\" text=\"bind:SECD_FILD\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_MOND\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_TUES\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_WEDN\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_THUR\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_FRID\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SATU\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:BROD_SUND\"/><Cell col=\"22\" edittype=\"none\" text=\"bind:CONT_FILD\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PRCE_FILD\" mask=\"#,###\"/><Cell col=\"24\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"25\" text=\"bind:COMI_FILD\"/><Cell col=\"26\" displaytype=\"combo\" edittype=\"none\" text=\"bind:AREA_FLAG\"/><Cell col=\"27\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SUBS_FLAG\"/><Cell col=\"28\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ADDX_FORM\"/><Cell col=\"29\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ADDX_TYPE\"/><Cell col=\"30\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CONT_FORM\"/><Cell col=\"31\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EDIT_WKDY\"/><Cell col=\"32\" displaytype=\"text\" edittype=\"none\" text=\"bind:TTST_DATE\"/><Cell col=\"33\" displaytype=\"text\" edittype=\"none\" text=\"bind:TTED_DATE\"/><Cell col=\"34\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNST_DATE\"/><Cell col=\"35\" displaytype=\"date\" edittype=\"none\" text=\"bind:MNED_DATE\"/><Cell col=\"36\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:PLAN_FLAG\"/><Cell col=\"37\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"38\" displaytype=\"text\" edittype=\"none\" text=\"bind:APLY_DATE\"/><Cell col=\"39\" edittype=\"none\" text=\"bind:CNMD_CODE\"/><Cell col=\"40\" edittype=\"none\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"41\" edittype=\"none\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"42\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"43\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"44\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"45\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"46\" text=\"bind:TRTX_NUMB\"/><Cell col=\"47\" text=\"bind:CMTX_NUMB\"/><Cell col=\"48\" text=\"bind:TRCH_NUMB\"/><Cell col=\"49\" text=\"bind:CMCF_NUMB\"/><Cell col=\"50\" edittype=\"none\" text=\"bind:ATCT_FLAG\"/><Cell col=\"51\" displaytype=\"number\" edittype=\"none\" text=\"bind:COMI_RATE\" mask=\"#,###\"/><Cell col=\"52\" displaytype=\"text\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"53\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"54\" text=\"bind:INPT_PATH\" combodataset=\"dsINPT_PATHCombo\" combocodecol=\"INPT_PATH_CODE\" combodatacol=\"INPT_PATH_NAME\"/><Cell col=\"55\" edittype=\"none\" text=\"bind:KBNT_YEAR\"/><Cell col=\"56\" edittype=\"none\" text=\"bind:KBNT_OSEQ\"/><Cell col=\"57\" edittype=\"none\" text=\"bind:KBNT_SSEQ\"/><Cell col=\"58\" edittype=\"none\" text=\"bind:KBNT_MSEQ\"/><Cell col=\"59\" edittype=\"none\" text=\"bind:PRMN_SEQX\"/><Cell col=\"60\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TRNS_FLAG\"/><Cell col=\"61\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:AORX_FLAG\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\" text=\"합계\"/><Cell col=\"23\"/><Cell col=\"24\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/><Cell col=\"55\"/><Cell col=\"56\"/><Cell col=\"57\"/><Cell col=\"58\"/><Cell col=\"59\"/><Cell col=\"60\"/><Cell col=\"61\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "10", "243", "10", "67", null, null, this);
            obj.set_taborder("90");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "398", "141", "80", "25", null, null, this);
            obj.set_taborder("91");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1148", "243", "10", "75", null, null, this);
            obj.set_taborder("92");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "615", "691", "80", "10", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("99");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1148", "499", "10", "75", null, null, this);
            obj.set_taborder("100");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "74", "35", "114", "21", null, null, this);
            obj.set_taborder("101");
            obj.set_text("소재 양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 306, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("68");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("미등록");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("등록");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("미크 일괄청약");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MDMA0011.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMA0011.xfdl", function() {
         /***************************************************************************************************
         * # Program : MDMA0011 미크일괄청약
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		최제현 	Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MDMA0011";
        this.sKeyValue    = new Array();

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
         	this.fnc_GetUserComboDs(this.dsUserCombo);
         	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
         	this.fn_Search();
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
         //업로드한 엑셀파일들을 조인해서 조회
        this.fn_Search = function (obj) {
        	this.tabXM.tab0.grdMD_ETMDXM.set_visible(true);
        	this.tabXM.tab0.grdMD_MATRXM.set_visible(false);
        	
        	if(this.tabXM.tabindex==0){
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear("dsMD_ETMDXM");
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_ETMDXM=dsMD_ETMDXM";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex==1){
        		if (!this.fn_SearchItemCheck()) return;
        		this.fnc_DatasetClear('dsMD_ETMDXM'); // 조회 자료 초기화
        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_ETMDXM=dsMD_ETMDXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
         this.fn_Input = function (obj) {

         }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
         this.fn_Delete = function (obj) {

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//if(this.fn_SaveItemCheck()){
        		//미등록일때만 일괄청약실행
        		if(this.tabXM.tabindex=='0'){
        			var sMethodName = "SAVE02";
        			var sInDataSet  = "dsMD_ETMDXM=dsMD_ETMDXM:D";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	//}

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
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_MATRXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

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
        	if(this.tabXM.tabindex=='0'){
        		if (this.fnc_DatasetChangeCheck("dsMD_ETMDXM")) {
        			if (this.fnc_Message("TMM023") == false) return false;
        		}
        	}else if(this.tabXM.tabindex=='1'){
        		if (this.fnc_DatasetChangeCheck("dsMD_ETMDXM")) {
        			if (this.fnc_Message("TMM023") == false) return false;
        		}
        		
        		if (this.calSHRYEAR_MNTH.fn_GetMonth()==''){
        			this.fnc_Message("TMM008","년월");
        			return false;
        		}
        	}
        	return true;
        }
        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 필수 입력 항목 체크
        	//소재별운행현황에서 광고주별신탁집계표의 데이터중 CONT_FORM만 필요하기 때문에 이것만 비교
        	var COUNT_CONT_FORM = 0;

        	for (var i = 0; i < this.dsMD_ETMDXM.getRowCount(); i++) {

        		if (this.fnc_Trim(this.dsMD_ETMDXM.getColumn(i, "CONT_FORM"))=='') {
        			COUNT_CONT_FORM++
        		}	
        	}

        	if(COUNT_CONT_FORM>0){
        		this.fnc_Message("MDM010");
        		return false;
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        	//이후이 프로세스가 진행되었는지 확인
        // 	for(var i=0 ; i<this.dsMD_ETMDXM.rowcount ; i++){
        // 
        // 		if(this.dsMD_ETMDXM.getColumn(i,"TRTR_NUMB") != '' || this.dsMD_ETMDXM.getColumn(i,"CMTR_NUMB") != ''){
        // 			this.fnc_Message("MCM001");
        // 			return false;
        // 		}else if(this.dsMD_ETMDXM.getColumn(i,"TRTX_NUMB") != '' || this.dsMD_ETMDXM.getColumn(i,"CMTX_NUMB") != ''){
        // 			this.fnc_Message("MCM002");
        // 			return false;
        // 		}else if(this.dsMD_ETMDXM.getColumn(i,"TRCH_NUMB") != '' || this.dsMD_ETMDXM.getColumn(i,"CMCH_NUMB") != ''){
        // 			this.fnc_Message("MCM003");
        // 			return false;
        // 		}
        // 	}
        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

         	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	} else if (sKind == "DELETE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
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
        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_ETMDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
         	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_ETMDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
         	} else if (sMethodName == "SAVE00") {
        		//this.fnc_Message("MDM011");
        		this.fnc_Message("MDM017");
        		this.removeChild("Import00");
        		this.importObj.destroy();
        		this.fn_Search();
         	} else if (sMethodName == "SAVE01") {
        		//저장 후 두 엑셀파일을 조인한 값들을 조회한다.
        		//this.fnc_Message("TMM103");
        		this.fnc_Message("MDM012");
        		this.removeChild("Import00");
        		this.importObj.destroy();
        		this.fn_Search();
         	} else if (sMethodName == "SAVE02") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
         	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("MDM014");
        		this.fnc_DatasetClear("dsMD_MATRXM");
        		this.fnc_DatasetClear("dsMD_SUBSXM");
        		this.fn_Search();
         	} else if (sMethodName == "GetUserComboCode") {
        		 var arrParam = new Array();
        		 arrParam[0]  = "GRID,tabXM.tab1.grdMD_ETMDXM,dsBROD_FLAG,BROD_FLAG";
        		 arrParam[1]  = "GRID,tabXM.tab1.grdMD_ETMDXM,dsCONT_FORM,CONT_FORM";
        		 arrParam[2]  = "GRID,tabXM.tab1.grdMD_ETMDXM,dsADDX_TYPE,ADDX_TYPE";
        		 arrParam[3]  = "GRID,tabXM.tab1.grdMD_ETMDXM,dsHOUR_TYPE,HOUR_TYPE";
        		 arrParam[4] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsSUBS_FLAG,SUBS_FLAG";
        		 arrParam[5] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsADDX_FORM,ADDX_FORM";
        		 arrParam[6] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsAREA_FLAG,AREA_FLAG";
        		 arrParam[7] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsTRNS_FLAG,TRNS_FLAG";
        		 arrParam[8] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsEDIT_WKDY,EDIT_WKDY";
        		 arrParam[9] = "GRID,tabXM.tab1.grdMD_ETMDXM,dsMEDX_FLAG,MEDX_FLAG";
        		 
        		 this.fnc_UserComboInnerBind(arrParam);				
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        //상단 소재별운행현황 그리드
        this.tabXM_tab0_grdMD_MATRXM00_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_MATRXM00.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_MATRXM.getRowCount(); i++) {
        			this.dsMD_MATRXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_MATRXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        //하단(숨겨진) 광고신탁집계표 그리드
        this.grdMD_SUBSXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_SUBSXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_SUBSXM.getRowCount(); i++) {
        			this.dsMD_SUBSXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_SUBSXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        

        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        this.fn_ExcelUpload00 = function(obj,e){

        	if(this.dsMD_ETMDXM.rowcount>0 || this.dsMD_MATRXM.rowcount!=0){
        	 this.fnc_Message("MDM015");
        	 return false;
        	}
        	
        	this.tabXM.tab0.grdMD_ETMDXM.set_visible(false);
        	this.tabXM.tab0.grdMD_MATRXM.set_visible(true);
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_MATRXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsMD_MATRXM");
        	this.fnc_ExcelUpload("dsMD_MATRXM", "Sheet1", "A2", "fn_ExcelSuccess00");
        	
        }

        this.fn_ExcelSuccess00 = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsMD_MATRXM.set_enableevent(false);
        	this.dsMD_MATRXM.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		if(this.objDsImportTemp.getColumn(i, 5)!=''&&this.objDsImportTemp.getColumn(i, 10)){
        			var iRow = this.dsMD_MATRXM.addRow();
        			this.dsMD_MATRXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        			this.dsMD_MATRXM.setColumn(iRow, "YEAR_MNTH", this.calSHRYEAR_MNTH.fn_GetMonth());
        			this.dsMD_MATRXM.setColumn(iRow, "NUMB_NUMB", this.objDsImportTemp.getColumn(i, 0));
        			this.dsMD_MATRXM.setColumn(iRow, "RMED_NAME", this.objDsImportTemp.getColumn(i, 1)); 
        			this.dsMD_MATRXM.setColumn(iRow, "PRGM_NAME", this.objDsImportTemp.getColumn(i, 2)); 
        // 			this.dsMD_MATRXM.setColumn(iRow, "", this.objDsImportTemp.getColumn(i, 3));
        // 			this.dsMD_MATRXM.setColumn(iRow, "", this.objDsImportTemp.getColumn(i, 4)); 
        			this.dsMD_MATRXM.setColumn(iRow, "DAYY_WEEK", this.objDsImportTemp.getColumn(i, 5));
        			this.dsMD_MATRXM.setColumn(iRow, "HOUR_TYPE", this.objDsImportTemp.getColumn(i, 6)); 
        			this.dsMD_MATRXM.setColumn(iRow, "STAR_TIME", this.objDsImportTemp.getColumn(i, 7)); 
        			this.dsMD_MATRXM.setColumn(iRow, "ENDD_TIME", this.objDsImportTemp.getColumn(i, 8)); 
        			this.dsMD_MATRXM.setColumn(iRow, "CUST_CODE", this.objDsImportTemp.getColumn(i, 9)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 10)); 
        			this.dsMD_MATRXM.setColumn(iRow, "CUST_NAME", this.objDsImportTemp.getColumn(i, 11)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 12)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OSTA_DATE", this.objDsImportTemp.getColumn(i, 13)); 
        			this.dsMD_MATRXM.setColumn(iRow, "STAR_DATE", this.objDsImportTemp.getColumn(i, 14)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OEND_DATE", this.objDsImportTemp.getColumn(i, 15)); 
        			this.dsMD_MATRXM.setColumn(iRow, "ENDD_DATE", this.objDsImportTemp.getColumn(i, 16)); 
        			this.dsMD_MATRXM.setColumn(iRow, "BRND_NAME", this.objDsImportTemp.getColumn(i, 17));
        	//		this.dsMD_MATRXM.setColumn(iRow, "KBNT_ITMM", this.objDsImportTemp.getColumn(i, 18)); 
        			this.dsMD_MATRXM.setColumn(iRow, "KBNT_ITEM", this.objDsImportTemp.getColumn(i, 18));
        			this.dsMD_MATRXM.setColumn(iRow, "SECD_FILD", this.objDsImportTemp.getColumn(i, 19)); 
        			this.dsMD_MATRXM.setColumn(iRow, "CONT_FILD", this.objDsImportTemp.getColumn(i, 20)); 
        			this.dsMD_MATRXM.setColumn(iRow, "PRIC_FILD", this.objDsImportTemp.getColumn(i, 21));
        			this.dsMD_MATRXM.setColumn(iRow, "AMNT_FILD", this.objDsImportTemp.getColumn(i, 22)); 
        			this.dsMD_MATRXM.setColumn(iRow, "BROD_NAME", this.objDsImportTemp.getColumn(i, 23));
        			this.dsMD_MATRXM.setColumn(iRow, "SUBS_NAME", this.objDsImportTemp.getColumn(i, 24)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 25));
        			this.dsMD_MATRXM.setColumn(iRow, "OFIC_CDNM", this.objDsImportTemp.getColumn(i, 26));
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 27));
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 28)); 
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 29)); 
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 30));
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 31)); 
        // 			this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 32)); 
        			this.dsMD_MATRXM.setColumn(iRow, "INST_NAME", this.objDsImportTemp.getColumn(i, 33));
        			this.dsMD_MATRXM.setColumn(iRow, "INST_DATE", this.objDsImportTemp.getColumn(i, 34)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "21", this.objDsImportTemp.getColumn(i, 35)); 
        			this.dsMD_MATRXM.setColumn(iRow, "BROD_CODE", this.objDsImportTemp.getColumn(i, 36)); 
        			this.dsMD_MATRXM.setColumn(iRow, "SEQX_CODE", this.objDsImportTemp.getColumn(i, 37)); 
        			this.dsMD_MATRXM.setColumn(iRow, "MDIM_CODE", this.objDsImportTemp.getColumn(i, 38)); 
        			this.dsMD_MATRXM.setColumn(iRow, "PSEQ_CODE", this.objDsImportTemp.getColumn(i, 39)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OPER_YEAR", this.objDsImportTemp.getColumn(i, 40)); 
        			this.dsMD_MATRXM.setColumn(iRow, "ISEQ_CODE", this.objDsImportTemp.getColumn(i, 41)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OSEQ_CODE", this.objDsImportTemp.getColumn(i, 42)); 
        			this.dsMD_MATRXM.setColumn(iRow, "KBNT_ITSQ", this.objDsImportTemp.getColumn(i, 43)); 
        			this.dsMD_MATRXM.setColumn(iRow, "MSEQ_CODE", this.objDsImportTemp.getColumn(i, 44)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "ADDX_TYPE", this.objDsImportTemp.getColumn(i, 45)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OPER_FLAG", this.objDsImportTemp.getColumn(i, 46)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OFER_FLAG", this.objDsImportTemp.getColumn(i, 47)); 
        			this.dsMD_MATRXM.setColumn(iRow, "OFIC_CODE", this.objDsImportTemp.getColumn(i, 48)); 
        			this.dsMD_MATRXM.setColumn(iRow, "AREA_FLAG", this.objDsImportTemp.getColumn(i, 49));
        			this.dsMD_MATRXM.setColumn(iRow, "RADD_FORM", this.objDsImportTemp.getColumn(i, 50)); 
        			this.dsMD_MATRXM.setColumn(iRow, "ADVR_FLAG", this.objDsImportTemp.getColumn(i, 51)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "RADD_TYPE", this.objDsImportTemp.getColumn(i, 52)); 
        			this.dsMD_MATRXM.setColumn(iRow, "ADVR_TYPE", this.objDsImportTemp.getColumn(i, 52)); 
        			this.dsMD_MATRXM.setColumn(iRow, "COLM_FLAG", this.objDsImportTemp.getColumn(i, 53)); 
        			this.dsMD_MATRXM.setColumn(iRow, "LCAL_FLAG", this.objDsImportTemp.getColumn(i, 54)); 
        			this.dsMD_MATRXM.setColumn(iRow, "HOUR_CODE", this.objDsImportTemp.getColumn(i, 55)); 
        			//this.dsMD_MATRXM.setColumn(iRow, "DAYW_FLAG", this.objDsImportTemp.getColumn(i, 56));
        			this.dsMD_MATRXM.setColumn(iRow, "AREA_NAME", this.objDsImportTemp.getColumn(i, 58)); 
        			
        		}
        		
        	}
        	
        	//미등록일때만 일괄청약실행
        	if(this.tabXM.tabindex=='0'){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsMD_MATRXM=dsMD_MATRXM:D";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	this.objDsImportTemp.clear();
        	this.dsMD_MATRXM.set_updatecontrol(true);
        	this.dsMD_MATRXM.set_enableevent(true);

        	this.dsMD_MATRXM.set_rowposition(0);
        	this.dsMD_MATRXM.setFocus();
        }

        

        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        // this.fn_ExcelUpload01 = function(obj:Button,  e:nexacro.ClickEventInfo){
        // 
        // 	this.tabXM.tab0.grdMD_ETMDXM.set_visible(false);
        // 	this.tabXM.tab0.grdMD_MATRXM.set_visible(true);
        // 	
        // 	if (this.fnc_DatasetChangeCheck("dsMD_SUBSXM")) {
        // 		if (this.fnc_Message("TMM023") == false) return false;
        // 	}
        // 	
        // 	this.fnc_DatasetClear("dsMD_SUBSXM");
        // 	this.fnc_ExcelUpload("dsMD_SUBSXM", "Sheet1", "A2", "fn_ExcelSuccess01");
        // 	
        // }
        // 
        // this.fn_ExcelSuccess01 = function (obj:ExcelImportObject,  e:nexacro.ExcelImportEventInfo) {
        // 	
        // 	this.setWaitCursor(false);
        // 	this.dsMD_SUBSXM.set_enableevent(false);
        // 	this.dsMD_SUBSXM.set_updatecontrol(false);
        // 
        // 	if (this.objDsImportTemp.getRowCount() < 1) {
        // 		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        // 		return false;
        // 	}
        // 	
        // 	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        // 		if(this.objDsImportTemp.getColumn(i, 5)!=''&&this.objDsImportTemp.getColumn(i, 10)){
        // 			var iRow = this.dsMD_SUBSXM.addRow();
        // 			this.dsMD_SUBSXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 			this.dsMD_SUBSXM.setColumn(iRow, "NUMB_NUMB", this.objDsImportTemp.getColumn(i, 0));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "ENTP_NAME", this.objDsImportTemp.getColumn(i, 1));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "CUST_NAME", this.objDsImportTemp.getColumn(i, 2)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "BROD_CDNM", this.objDsImportTemp.getColumn(i, 3)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "MDIM_CDNM", this.objDsImportTemp.getColumn(i, 4));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "MEDX_AREA", this.objDsImportTemp.getColumn(i, 5));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "PRGM_NAME", this.objDsImportTemp.getColumn(i, 6)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "HOUR_TYPE", this.objDsImportTemp.getColumn(i, 7)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "DAYY_WEEK", this.objDsImportTemp.getColumn(i, 8));
        // 			 
        // 			 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "STAR_TIME", this.objDsImportTemp.getColumn(i, 15)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "ENDD_TIME", this.objDsImportTemp.getColumn(i, 16)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "CONT_FILD", this.objDsImportTemp.getColumn(i, 9)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "PRIC_FILD", this.objDsImportTemp.getColumn(i, 10)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "AMNT_FILD", this.objDsImportTemp.getColumn(i, 14)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "STAR_DATE", this.objDsImportTemp.getColumn(i, 17)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "ENDD_DATE", this.objDsImportTemp.getColumn(i, 18)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "BROD_NAME", this.objDsImportTemp.getColumn(i, 19)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "SECD_FILD", this.objDsImportTemp.getColumn(i, 20)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "OFIC_CDNM", this.objDsImportTemp.getColumn(i, 22));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "SUBS_NAME", this.objDsImportTemp.getColumn(i, 23)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "ADVR_TYPE", this.objDsImportTemp.getColumn(i, 24));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "CONT_FORM", this.objDsImportTemp.getColumn(i, 25)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "SELL_WAYY", this.objDsImportTemp.getColumn(i, 26));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "CONT_PRID", this.objDsImportTemp.getColumn(i, 27));
        //  			this.dsMD_SUBSXM.setColumn(iRow, "ADDX_NAME", this.objDsImportTemp.getColumn(i, 28));
        //  			this.dsMD_SUBSXM.setColumn(iRow, "BUSI_TYPE", this.objDsImportTemp.getColumn(i, 29));
        //  			this.dsMD_SUBSXM.setColumn(iRow, "INST_DATE", this.objDsImportTemp.getColumn(i, 30)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "AREA_NAME", this.objDsImportTemp.getColumn(i, 31));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "ENTP_CODE", this.objDsImportTemp.getColumn(i, 33));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "CUST_CODE", this.objDsImportTemp.getColumn(i, 32));
        // 			//this.dsMD_SUBSXM.setColumn(iRow, "", this.objDsImportTemp.getColumn(i, 31)); 
        // 			this.dsMD_SUBSXM.setColumn(iRow, "OSEQ_CODE", this.objDsImportTemp.getColumn(i, 34));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "SEQX_CODE", this.objDsImportTemp.getColumn(i, 35));
        // 			this.dsMD_SUBSXM.setColumn(iRow, "OSEQ_FLAG", this.objDsImportTemp.getColumn(i, 36));
        //  			this.dsMD_SUBSXM.setColumn(iRow, "REPL_PRGM", this.objDsImportTemp.getColumn(i, 37)); 
        //  			this.dsMD_SUBSXM.setColumn(iRow, "PACK_NAME", this.objDsImportTemp.getColumn(i, 38)); 
        // 
        // 			
        // 		}
        // 		
        // 	}
        // 
        // 	//미등록일때만 일괄청약실행
        // 	if(this.tabXM.tabindex=='0'){
        // 		var sMethodName = "SAVE01";
        // 		var sInDataSet  = "dsMD_SUBSXM=dsMD_SUBSXM:D";
        // 		var sOutDataSet = "";
        // 		var sArgument   = this.fn_CreateArgument(sMethodName);
        // 		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 	}
        // 	
        // 	this.objDsImportTemp.clear();
        // 	this.dsMD_SUBSXM.set_updatecontrol(true);
        // 	this.dsMD_SUBSXM.set_enableevent(true);
        // 
        // 	this.dsMD_SUBSXM.set_rowposition(0);
        // 	this.dsMD_SUBSXM.setFocus();
        // 	
        // 	
        // 
        // }

        

        
        /*-----------------------------+
         |  임시테이블 데이터삭제 ! |
         +-----------------------------*/

        this.btn_PROC02_OnClick = function(obj,e)
        {
        	if (!this.fn_DeleteCheck()) return;
        	
        	var sMethodName = "DELETE00";
        	var sInDataSet  = "dsMD_ETMDXM=dsMD_ETMDXM:D";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.tabXM_onchanged = function(obj,e)
        {	
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	
        	if(this.tabXM.tabindex==0){
        		this.divButtonList.btn_ExcelUpload00.set_visible(true);
        		//this.divButtonList.btn_ExcelUpload01.set_visible(true);
        	}else if(this.tabXM.tabindex==1){
        		this.divButtonList.btn_ExcelUpload00.set_visible(false);
        		//this.divButtonList.btn_ExcelUpload01.set_visible(false);
        	}
        	
        	this.fn_Search();
        }

        

        
        this.tabXM_tab0_Edit00_ontextchanged = function(obj,e)
        {
        	for(var i=0;i<this.dsMD_ETMDXM.rowcount;i++){
        		this.dsMD_ETMDXM.setColumn(i,"YEAR_MNTH",this.tabXM.tab0.edtYEAR_MNTH.value);
        	}
        }

        //브랜드 팝업
        this.fn_HelpDialogeBRND_CODE = function(obj,e)
        {
        	if(obj.name=='imgHelpBRND_CODE' || this.fnc_Trim(this.tabXM.tab0.edtBRND_NAME.value)!='' && this.fnc_Trim(this.tabXM.tab0.edtBRND_CODE.value)==''){
        		var arrParam = new Array();
        		var sName 		= "MDMB0010P02";
        		var sFormURL 	= "mdm::MDMB0010P02.xfdl";
        		var sOpenStyle  = "modeless=false";
        			sOpenStyle += ",autosize=true";
        			sOpenStyle += ",top=-1";
        			sOpenStyle += ",left=-1";
        			sOpenStyle += ",width=990";
        			sOpenStyle += ",height=800";
        			sOpenStyle += ",title=true";
        			sOpenStyle += ",titletext=브랜드조회";
        			sOpenStyle += ",status=false";
        			sOpenStyle += ",resizable=true";

        		var objArgument = {
        			brnd_name : this.tabXM.tab0.edtBRND_NAME.value
        			 ,key : "DETAIL"
        		};

        		this.fnc_OpenPopup(sName, sFormURL, objArgument, sOpenStyle, "");
        	}
        }

        /*----------------------------+
         |   브랜드 팝업 CALLBACK 	  |
         +----------------------------*/
        this.fn_CallBackP02 = function(cust_code,cust_name,brnd_code,brnd_name,cate_code,cate_name,dept_code,dept_name,key){

        		this.tabXM.tab0.edtBRND_CODE.set_value(brnd_code);
        		this.tabXM.tab0.edtBRND_NAME.set_value(brnd_name);

        	//브랜드 코드,카테고리코드,부서코드를 자동으로 넣는다.
        	for(var i=0;i<this.dsMD_ETMDXM.rowcount;i++){
        		if(this.dsMD_ETMDXM.getColumn(i,"KBNT_ITEM")==this.tabXM.tab0.edtREPL_BRND.value){
        			this.dsMD_ETMDXM.setColumn(i,"BRND_CODE",this.tabXM.tab0.edtBRND_CODE.value);
        			this.dsMD_ETMDXM.setColumn(i,"CATE_CODE",cate_code);
        			if(dept_code == ''){
        				this.dsMD_ETMDXM.setColumn(i,"DEPT_CODE",'301007');
        			}else{
        				this.dsMD_ETMDXM.setColumn(i,"DEPT_CODE",dept_code);
        			}
        		}

        	}
        }

        this.tabXM_tab0_edtBRND_NAME_onchanged = function(obj,e)
        {
        	if(this.tabXM.tab0.edtBRND_NAME.value==''){
        		this.tabXM.tab0.edtBRND_CODE.set_value('');
        	}
        }

        this.tabXM_tab0_edtBRND_NAME_onkeyup = function(obj,e)
        {
        	if(this.tabXM.tab0.edtBRND_NAME.value == ''){
        		this.tabXM.tab0.edtBRND_CODE.set_value(''); 
        	}
        }

        this.fn_ExcelFileDown00 = function(obj,e)
        {
        	this.fnc_FileDownLoad("", "", "", "MDMA0013");
        }

        this.fn_ExcelFileDown01 = function(obj,e)
        {
        	this.fnc_FileDownLoad("", "", "", "MDMA0014");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_SUBSXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_MATRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_ETMDXM.addEventHandler("oncolumnchanged", this.dsMD_ETMDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btn_PROC02.addEventHandler("onclick", this.btn_PROC02_OnClick, this);
            this.divButtonList.btn_ExcelUpload00.addEventHandler("onclick", this.fn_ExcelUpload00, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.grdMD_SUBSXM.addEventHandler("onheadclick", this.grdMD_SUBSXM_onheadclick, this);
            this.tabXM.tab0.grdMD_SUBSXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_SUBSXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_MATRXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_MATRXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_ETMDXM.addEventHandler("onheadclick", this.grdMD_ETMDXM_onheadclick, this);
            this.tabXM.tab0.edtBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab0.imgHelpBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeBRND_CODE, this);
            this.tabXM.tab0.edtBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeBRND_CODE, this);
            this.tabXM.tab0.edtBRND_NAME.addEventHandler("onchanged", this.tabXM_tab0_edtBRND_NAME_onchanged, this);
            this.tabXM.tab0.edtBRND_NAME.addEventHandler("onkeyup", this.tabXM_tab0_edtBRND_NAME_onkeyup, this);
            this.tabXM.tab1.grdMD_ETMDXM.addEventHandler("onheadclick", this.grdMD_ETMDXM_onheadclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown00, this);

        };

        this.loadIncludeScript("MDMA0011.xfdl");
        this.loadPreloadList();
       
    };
}
)();
