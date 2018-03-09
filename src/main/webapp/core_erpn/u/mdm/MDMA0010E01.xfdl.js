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
                this.set_name("comFileUploadPopup");
                this.set_classname("FileUpDownload");
                this.set_titletext("엑셀업로드 팝업");
                this._setFormPosition(0,0,600,314);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"FILE_EXTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SZDS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PROG\" type=\"INT\" size=\"256\"/><Column id=\"TRAN_SIZE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SZDS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_MOND\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TUES\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_WEDN\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_THUR\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FRID\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SATU\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SUND\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TTST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TTED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CNMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_OSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_SSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_MSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_WKDY\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_BRSQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_DISQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFileList", "absolute", "15", "31", null, null, "15", "44", this);
            obj.set_taborder("20");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:FILE_NAME\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"280\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:FILE_NAME\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:FILE_SZDS\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"expr:(FILE_PROG &lt; 100)?((FILE_PROG &lt; 0)?'normal':'bar'):'normal'\" text=\"bind:FILE_PROG\" expr=\"expr:(FILE_PROG &lt; 100)?((FILE_PROG &lt; 0)?'Error!':FILE_PROG + '%'):'완료'\" tooltiptext=\"Upload Progress\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_dropArea", "absolute", "17", "34", null, null, "17", "46", this);
            obj.set_taborder("32");
            obj.set_text("파일을 마우스로 선택한 후 끌어서 이곳에 놓으세요");
            obj.style.set_border("1 dashed #ff6e6eff");
            obj.style.set_color("#ff6e6eff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "6", "74", "21", "15", null, this);
            obj.set_taborder("35");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnYes", "absolute", null, null, "62", "24", "80", "12", this);
            obj.set_taborder("36");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("37");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "6", "74", "21", "92", null, this);
            obj.set_taborder("38");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", null, "324", "20", null, "14", this);
            obj.set_taborder("39");
            obj.set_text("첨부파일은 <b v='true'><fc v='#ff0000'>30Mbyte</b></fc> 를 넘지 않아야 합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "585", "0", "15", "125", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "15", "125", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_maxSize", "absolute", "291", null, "70", "23", null, "8", this);
            obj.set_taborder("46");
            obj.set_text("30Mbyte");
            obj.style.set_color("#b72025ff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "256", "0", "296", "6", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "32", "270", "120", "14", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "270", "64", "8", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "302", "64", "12", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_ETMDXM", "absolute", "4%", "128", null, null, "-0.83%", "76", this);
            obj.set_taborder("51");
            obj.set_binddataset("dsMD_ETMDXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"182\"/><Column size=\"182\"/><Column size=\"186\"/><Column size=\"175\"/><Column size=\"138\"/><Column size=\"184\"/><Column size=\"238\"/><Column size=\"148\"/><Column size=\"139\"/><Column size=\"145\"/><Column size=\"141\"/><Column size=\"85\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"88\"/><Column size=\"97\"/><Column size=\"99\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"139\"/><Column size=\"148\"/><Column size=\"138\"/><Column size=\"96\"/><Column size=\"110\"/><Column size=\"111\"/><Column size=\"107\"/><Column size=\"108\"/><Column size=\"83\"/><Column size=\"98\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"167\"/><Column size=\"172\"/><Column size=\"92\"/><Column size=\"90\"/><Column size=\"148\"/><Column size=\"179\"/><Column size=\"110\"/><Column size=\"135\"/><Column size=\"87\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"102\"/><Column size=\"127\"/><Column size=\"135\"/><Column size=\"143\"/><Column size=\"153\"/><Column size=\"152\"/><Column size=\"155\"/><Column size=\"152\"/><Column size=\"97\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"일련번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"매체구분\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"10\" text=\"방송시작시간\"/><Cell col=\"11\" text=\"방송종료시간\"/><Cell col=\"12\" text=\"방송시급\"/><Cell col=\"13\" text=\"방송구분\"/><Cell col=\"14\" text=\"방송초수\"/><Cell col=\"15\" text=\"월\"/><Cell col=\"16\" text=\"화\"/><Cell col=\"17\" text=\"수\"/><Cell col=\"18\" text=\"목\"/><Cell col=\"19\" text=\"금\"/><Cell col=\"20\" text=\"토\"/><Cell col=\"21\" text=\"일\"/><Cell col=\"22\" text=\"방송회수\"/><Cell col=\"23\" cssclass=\"Cellgrd_WF_essential\" text=\"단가\"/><Cell col=\"24\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"25\" text=\"지역구분\"/><Cell col=\"26\" text=\"청약구분\"/><Cell col=\"27\" text=\"광고형태\"/><Cell col=\"28\" text=\"광고유형\"/><Cell col=\"29\" text=\"계약형태\"/><Cell col=\"30\" text=\"편집요일\"/><Cell col=\"31\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고시작일\"/><Cell col=\"32\" cssclass=\"Cellgrd_WF_essential\" text=\"총광고종료일\"/><Cell col=\"33\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송시작일\"/><Cell col=\"34\" cssclass=\"Cellgrd_WF_essential\" text=\"금월방송종료일\"/><Cell col=\"35\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"계획치구분\"/><Cell col=\"36\" text=\"비고\"/><Cell col=\"37\" text=\"적용일자\"/><Cell col=\"38\" text=\"연계매체\"/><Cell col=\"39\" text=\"부서명\"/><Cell col=\"40\" text=\"사원명\"/><Cell col=\"41\" text=\"위수탁부가세\"/><Cell col=\"42\" text=\"수수료부가세\"/><Cell col=\"43\" text=\"위수탁번호\"/><Cell col=\"44\" text=\"수수료번호\"/><Cell col=\"45\" text=\"자동계산\"/><Cell col=\"46\" text=\"투입경로\"/><Cell col=\"47\" text=\"수수료율\"/><Cell col=\"48\" text=\"등록일자\"/><Cell col=\"49\" text=\"등록자\"/><Cell col=\"50\" text=\"코바넷편성년도\"/><Cell col=\"51\" text=\"코바넷편성일련번호\"/><Cell col=\"52\" text=\"코바넷청약일련번호\"/><Cell col=\"53\" text=\"코바넷운행일련번호\"/><Cell col=\"54\" text=\"위수탁임시전표번호\"/><Cell col=\"55\" text=\"수수료임시전표번호\"/><Cell col=\"56\" text=\"전월이월순번\"/><Cell col=\"57\" text=\"매체통신구분\"/><Cell col=\"58\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" edittype=\"text\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"0\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"text\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"text\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"text\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MEDX_FLAG\"/><Cell col=\"8\" edittype=\"text\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"9\" edittype=\"text\" style=\"align: ;\" text=\"bind:PRGM_NAME\" editlimit=\"0\"/><Cell col=\"10\" edittype=\"text\" style=\"align: ;\" text=\"bind:STAR_TIME\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:ENDD_TIME\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:HOUR_TYPE\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BROD_FLAG\"/><Cell col=\"14\" edittype=\"text\" text=\"bind:SECD_FILD\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_MOND\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_TUES\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_WEDN\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_THUR\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_FRID\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_SATU\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:BROD_SUND\"/><Cell col=\"22\" edittype=\"text\" text=\"bind:CONT_FILD\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"text\" text=\"bind:PRCE_FILD\" mask=\"#,###\"/><Cell col=\"24\" displaytype=\"number\" edittype=\"text\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"25\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AREA_FLAG\"/><Cell col=\"26\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SUBS_FLAG\"/><Cell col=\"27\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ADDX_FORM\"/><Cell col=\"28\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ADDX_TYPE\"/><Cell col=\"29\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CONT_FORM\"/><Cell col=\"30\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EDIT_WKDY\"/><Cell col=\"31\" displaytype=\"date\" edittype=\"date\" text=\"bind:TTST_DATE\"/><Cell col=\"32\" displaytype=\"date\" edittype=\"date\" text=\"bind:TTED_DATE\"/><Cell col=\"33\" displaytype=\"date\" edittype=\"date\" text=\"bind:MNST_DATE\"/><Cell col=\"34\" displaytype=\"date\" edittype=\"date\" text=\"bind:MNED_DATE\"/><Cell col=\"35\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PLAN_FLAG\"/><Cell col=\"36\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"37\" displaytype=\"date\" edittype=\"date\" text=\"bind:APLY_DATE\"/><Cell col=\"38\" edittype=\"text\" text=\"bind:CNMD_CODE\"/><Cell col=\"39\" edittype=\"text\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"40\" edittype=\"text\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"41\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"42\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"43\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"44\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"45\" edittype=\"text\" text=\"bind:ATCT_FLAG\"/><Cell col=\"46\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INPT_PATH\" combodataset=\"dsINPT_PATHCombo\" combocodecol=\"INPT_PATH_CODE\" combodatacol=\"INPT_PATH_NAME\"/><Cell col=\"47\" displaytype=\"number\" edittype=\"text\" text=\"bind:COMI_RATE\" mask=\"#,###\"/><Cell col=\"48\" displaytype=\"date\" edittype=\"date\" text=\"bind:INST_DATE\"/><Cell col=\"49\" edittype=\"text\" text=\"bind:INST_USID\"/><Cell col=\"50\" edittype=\"text\" text=\"bind:KBNT_YEAR\"/><Cell col=\"51\" edittype=\"text\" text=\"bind:KBNT_OSEQ\"/><Cell col=\"52\" edittype=\"text\" text=\"bind:KBNT_SSEQ\"/><Cell col=\"53\" edittype=\"text\" text=\"bind:KBNT_MSEQ\"/><Cell col=\"54\" edittype=\"none\" text=\"bind:TRCH_NUMB\"/><Cell col=\"55\" edittype=\"none\" text=\"bind:CMCH_NUMB\"/><Cell col=\"56\" edittype=\"text\" text=\"bind:PRMN_SEQX\"/><Cell col=\"57\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TRNS_FLAG\"/><Cell col=\"58\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:AORX_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 314, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.set_titletext("엑셀업로드 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MDMA0010E01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMA0010E01.xfdl", function() {
        /***************************************************************************************************
         * # Program : comFileUploadPopup 공통파일 업로드 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		최흥규		Initial Created.
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

        /*--------------------------------------+
         |  공통 Script Include					|
         +--------------------------------------*/
        //include "script::lib_script_common.xjs"

        /*--------------------------------------+
         |  화면 변수 선언부					|
         +--------------------------------------*/
        if(this.parent.maxFileLimit == undefined) {
        	//Quick View 실행 시 설정
        	this.maxFileLimit = "UNLIMIT";
        	this.filterStr = "doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml,tif";
        	this.callbackfunctionname = null;
        	this.bizCategory = "ETC";
        } else {
        	this.maxFileLimit  = this.parent.maxFileLimit;
        	this.filterStr = this.parent.filterStr;
        	this.callbackfunctionname = this.parent.callbackfunctionname;
        	this.bizCategory = this.parent.bizCategory;
        }

        this.maxFileCount = 1;
        this.filter = [];
        this.maxFlag = false;
        this.fileUploadServiceUrl   = application.GBL_HTTPURL + "/core/erp/com/comFile_UploadMulti.do";

        this.extFileUpload;     //file upload object

        //XHR2 진행처리용
        this.tranFiles = {
        	added : [],				// 업로드 파일 정보
        	downloaded : [],		// 다운로드 파일 정보
        	transferFileSize : 0,	// 현재까지 전송된 파일 크기
        	transferFileIndex : 0,	// 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0		// 현재까지 전송된 파일크기 합계
        };

        this.transferType = "all";

        // 30MB 기본 설정
        this.maxFileSizeLimit = 30 * 1024 * 1024;

        
        /*--------------------------------------+
         |  최초 화면 Load時 처리 할 사항	|
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// TODO 기본 업로드 확장자 
        	
        	// 최대 업로드 사이즈
        	this.st_maxSize.set_text(this.bytesToSize(this.maxFileSizeLimit, 3));
        	
        	//파일 확장자 필터스트링
        	if (this.filterStr != "") {
        		this.filter = this.filterStr.split(",");
        	}
        	
        	//갯수제한에 "" 이 들어오는 경우 무제한
        	if (this.maxFileLimit == "UNLIMIT") {
        		this.maxFileCount = 9999;
        	} else {
        		this.maxFileCount = this.maxFileLimit;
        	}
        	
        	// 파일업로드 시 세부 업무 구분을 파라미터로 전달
        	this.fileUploadServiceUrl = this.fileUploadServiceUrl + "?biz=" + this.bizCategory;
        	
        	this.grdFileList.setFocus();
        	
        	this.initFileUploadObj();
        }

        
        /*--------------------------------------+
         |  확장 파일업로드 컴포넌트 초기화	|
         +--------------------------------------*/
        this.initFileUploadObj = function() {
        	
        	// 확장 파일 업로드 컴포넌트 생성 및 초기화
        	var name = Eco.getUniqueId("extUpload_");
        	var extUpload = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUpload.name, extUpload);
        	this.extFileUpload = extUpload;
        	
        	// 업로드 제한파일이 1개면 다중선택 안됨
        	if (this.maxFileLimit == "1") {
        		extUpload.set_multiselect(false);
        	} else {
        		extUpload.set_multiselect(true);
        	}
        	
        	// Drag&Drop 컴포넌트 이벤트 처리
        	extUpload.setResponseZone(this, this.st_dropArea, this.grdFileList);	
        	
        	// 상황별 이벤트 핸들러 등록
        	extUpload.addEventHandler("onchange", this.extFileUpload_onchange, this);
        	extUpload.addEventHandler("onreadystatechange", this.extFileUpload_onreadystatechange, this);
        	extUpload.addEventHandler("onprogress", this.extFileUpload_onprogress, this);
        	extUpload.addEventHandler("onsuccess", this.extFileUpload_onsuccess, this);
        	extUpload.addEventHandler("onerror", this.extFileUpload_onerror, this);
        	
        	// 초기화 완료!
        	extUpload.show();
        	
        	this.grdFileList.setFormat("format1");
        	
        	//Drag and Drop 미지원 브라우저 확인.
        	if(extUpload.support.FileAPI == false) {
        		this.st_dropArea.set_visible(false);
        	}
        	
        	//XHR2와 FileAPI 지원하지 않을 경우 그리드 format 변경. ex) file 전송량 표시용 progress bar
        	if (!extUpload.support.XHR2) {
        		this.grdFileList.setFormat("default");
        	}	
        	
        }

        
        /*--------------------------------------+
         |  Form 키보드 이벤트 처리			|
         +--------------------------------------*/
        this.comFileUploadPopup_onkeydown = function(obj,e) {
        	if (e.keycode == 27) {
        		this.btnCancel_onclick();
        	}
        }

        
        /*---------------------------------------+
         |  파일이 업로드 가능한 확장자 타입인가? |
         +---------------------------------------*/
        this.isAllowFileType = function(filename) {

        	var ext = filename.toLowerCase().substr(filename.lastIndexOf(".") + 1);

        	if ((ext == undefined) || (ext.length == 0)) {
        		return false;
        	}	

        	var isAllowType = false;

        	for (var idx = 0; idx < this.filter.length; idx++) {
        		//소문자로 변환 후 비교
        		if (ext == this.filter[idx].toLowerCase()) {
        			isAllowType = true;
        			break;
        		}
        	}
        	return isAllowType;
        }

        /*--------------------------------------+
         |  파일추가 버튼 클릭 이벤트 처리	|
         +--------------------------------------*/
        this.btnAdd_onclick = function(obj,e) {
        	
        	var fileCnt = this.dsFileList.getRowCount();
        	
        	if (this.maxFileCount <= fileCnt) {
        		var msg = "첨부파일은 최대  " + this.maxFileCount + "개를 초과할 수 없습니다.";
        		this.fnc_Alert(msg);
        		return;
        	}
        	
        	this.extFileUpload.addFiles();
        		
        	if (this.st_dropArea.visible) {
        		this.st_dropArea.set_visible(false);
        	}
        	
        }

        
        /*--------------------------------------+
         |  파일삭제 버튼 클릭 이벤트 처리	|
         +--------------------------------------*/
        this.btnDel_onclick = function(obj,e) {
        	
        	if (this.dsFileList.getRowCount() == 0) {
        		return;
        	}
        	
        	var row = this.dsFileList.rowposition;
        	
        	if (this.checkDeleteFile(row)) {
        		var fileId = this.dsFileList.getColumn(row, "FILE_IDXX");
        		this.extFileUpload.removeFile(fileId);
        		this.dsFileList.deleteRow(row);
        		
        		if (this.dsFileList.getRowCount() == 0) {
        			this.st_dropArea.set_visible(true);
        		}
        	}
        	
        }

        
        /*--------------------------------------+
         |  파일 삭제여부 확인				|
         +--------------------------------------*/
        this.checkDeleteFile = function(row) {
        	var msg = "파일명 : " + this.dsFileList.getColumn(row, "FILE_NAME");
        	return this.fnc_Message("TMM002", msg);
        }

        
        /*--------------------------------------+
         |  확인 버튼 클릭 이벤트 처리		|
         +--------------------------------------*/
        this.btnYes_onclick = function(obj,e) {
        	
        	// 선택된 파일이 없을 경우..
        	if (this.dsFileList.getRowCount() == 0) {
        		this.fnc_Alert("업로드 할 파일을 선택하세요!");
        		return;
        	} else {
        		this.importExcel();	// 엑셀임포트
        	}
        	
        }

        
        /*--------------------------------------+
         |  취소 버튼 클릭 이벤트 처리		|
         +--------------------------------------*/
        this.btnCancel_onclick = function(obj,e) {
        	// 추가 기능 없이 팝업 종료
        	this.fnc_PopupClose("");
        }

        
        /*--------------------------------------+
         |  파일다이얼로그에서 파일 선택 시	|
         +--------------------------------------*/
        this.extFileUpload_onchange = function(obj,e) {
        	
        	var dsObj = this.dsFileList;
        	var files = e.files;
        	var fileCnt = files.length;
        	var isSupport = (this.extFileUpload.support.XHR2 && this.extFileUpload.support.FileAPI);
        	var file = "";
        	
        	var fileId;
        	var fileName;
        	var fileSize;
        	var fileType;
        	var fileExt;
        	var row;
        	var msg = "";
        	var choosedCnt;
        	
        	for (var idx = 0; idx < fileCnt; idx++) {
        		
        		// 파일 정보
        		file = files[idx];
        		fileId = file.id;		// 파일ID
        		fileName = file.name;	// 파일명
                fileSize = file.size;	// 크기
                fileType = file.type;	// 파일형식(Mime Type);
        		fileExt = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : "";	// 확장자
        		
        		// 업로드 한 파일의 갯수가 업로드 제한 갯수를 초과하지 않았나?
        		choosedCnt = dsObj.getRowCount();
        		
        		if (this.maxFileCount <= choosedCnt) {
        			msg = "첨부파일은 최대  " + this.maxFileCount + "개를 초과할 수 없습니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			break;
        		}
        		
        		// 이미 추가되어 있는 파일인가?
        		var findRow = dsObj.findRow("FILE_NAME", fileName);
        		if (findRow > -1) {
        			var filesz = dsObj.getColumn(findRow, "FILE_SIZE");
        			// 파일 사이즈도 확인해보자
        			if (fileSize == filesz) {
        				msg = "파일명 : " + fileName + ", 이미 동일한 이름,크기로 등록된 파일이 있습니다.";
        				this.fnc_Alert(msg);
        				this.extFileUpload.removeFile(fileId);
        				continue;
        			}
        		}
        		
        		// 파일이 업로드 가능한 확장자인가?
        		/*
        		if (!this.isAllowFileType(fileName)) {
        			msg = "파일명 : " + fileName + ", 첨부할 수 없는 파일 형식입니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			continue;
        		}
        		*/
        		
        		//업로드할 파일의 크기가.. 제한용량을 넘는가?
        		if (fileSize > this.maxFileSizeLimit) {
        			msg = "파일명 : " + fileName + ", 크기는 " + this.bytesToSize(this.maxFileSizeLimit, 3) + "를 초과할 수 없습니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			continue;
        		}
        		
        		// 파일정보 추가
        		row = dsObj.addRow();
        		dsObj.setColumn(row, "FILE_IDXX", fileId);
        		dsObj.setColumn(row, "FILE_NAME", fileName);
        		dsObj.setColumn(row, "FILE_EXTN", fileExt);
        		dsObj.setColumn(row, "FILE_TYPE", fileType);
        		dsObj.setColumn(row, "FILE_SZDS", this.bytesToSize(fileSize, 3));
        		dsObj.setColumn(row, "FILE_SIZE", fileSize);
        		dsObj.setColumn(row, "FILE_PROG", 0);
        		dsObj.set_rowposition(row);
        				
        	}
        	
        }

        
        /**
         * byte를 size로 변환처리한다.
         * @param {number} filesize file size
         * @param {string} type 표시형태
         * @return {string} file size
         */
        this.bytesToSize = function(filesize,type)
        {
        	if (Eco.isEmpty(filesize)) return;
        	
            var size = filesize  + " bytes",
                multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                idx = 0, 
                approx = 0;
        	
            for (idx = 0, approx = filesize / 1024; approx > 1; approx /= 1024, idx++) 
            {
                if (type == 1)
                {
                    size = approx.toFixed(2) + multiples[idx] + " (" + filesize + " bytes)";
                }
                else if (type == 2)
                {
                    size = approx.toFixed(2);
                }
                else
                {
                    size = approx.toFixed(2) + multiples[idx];
                }
            }
          
            return size;
        }

        /**
         * size를 byte로 변환처리한다.
         * @param {number} fileSize file size
         * @return {number} file size
         */
        this.sizeToByte = function(fileSize) 
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;
        	
        	if (unit == "mb") 
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb") 
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb") 
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "") 
        	{
        		return size;
        	}
        	else 
        	{
        		return fileSize;
        	}
        }

        
        /**
         * 추가한 첨부파일을 //
         */
        this.importExcel = function() {
        	
        	
        	파일업로드
        	var extUp = this.extFileUpload;
        	var fileLength = extUp.getAddedFileLength();
        	
        	if (fileLength > 0) {
        		
        		extUp.upload(this.fileUploadServiceUrl, "dsFiles=dsFiles", "", this.transferType, 0);
        		
        	}	// end of if (fileLength > 0) 

        	
        }
        /////////////////////////////////////
        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        this.fn_ExcelUpload = function(obj,e){
        	this.fnc_DatasetClear("dsMD_ETMDXM");
        	this.fnc_ExcelUpload("dsMD_ETMDXM", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsPY_REGSAL_TEMP.set_enableevent(false);
        	this.dsPY_REGSAL_TEMP.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	this.dsPY_REGSAL_TEMP.set_enableevent(true);

        	// TEMP DataSet에서 복사.
        	this.dsPY_REGSAL.copyData(this.dsPY_REGSAL_TEMP);

        	// 복사해온 Row Status는 Insert Type.
        	this.dsPY_REGSAL.set_updatecontrol(false);
        	for (var i = 0; i < this.dsPY_REGSAL.getRowCount(); i++) {
        		if ( this.dsPY_REGSAL.getColumn(i, "STDS_DATE").indexOf("-") >= 0  ){
        			this.dsPY_REGSAL.setColumn(i, "STDS_DATE", this.dsPY_REGSAL.getColumn(i, "STDS_DATE").split("-").join(""));
        			
        		} else if ( this.dsPY_REGSAL.getColumn(i, "STDS_DATE").indexOf("/") >= 0 ) {
        			this.dsPY_REGSAL.setColumn(i, "STDS_DATE", this.dsPY_REGSAL.getColumn(i, "STDS_DATE").split("/").join(""));
        			
        		} else if ( this.dsPY_REGSAL.getColumn(i, "STDS_DATE").indexOf(".") >= 0 ) {
        			this.dsPY_REGSAL.setColumn(i, "STDS_DATE", this.dsPY_REGSAL.getColumn(i, "STDS_DATE").split(".").join(""));
        			
        		}
        		
        		this.dsPY_REGSAL.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        	}
        	
        	this.dsPY_REGSAL.set_updatecontrol(true);
        	this.dsPY_REGSAL.set_rowposition(1);
        	this.grdPY_REGSAL.setFocus();
        	
        	/* 엑셀 업로드 체크처리 후 저장 */
        	if (!this.fn_ExcelUploadCheck()) return;

        	var sMethodName = "SAVE01";
        	var sInDataSet 	= "dsPY_REGSAL=dsPY_REGSAL:A";
        	var sOutDataSet = "dsPY_REGSAL=dsPY_REGSAL";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_REGSAL.setFocus();
        	
        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_REGSAL")) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	if (this.dsPY_REGSAL.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_REGSAL.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPY_REGSAL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "EMPL_NUMB"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사원번호가 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "EMPL_NAME"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사원명이 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "OPOS_CODE"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 직위코드가 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "OPOS_NAME"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 직위명이 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "SRAL_NUMB"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 순번이 없습니다.");
        			return false;
        		}
        		
        		if (!this.fnc_IsDate(this.dsPY_REGSAL.getColumn(i, "STDS_DATE"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 기준일이 잘못되었습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "BSLY_AMOT"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 기본급이 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "BSL1_AMOT"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 시간외 근무수당이 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "BSL2_AMOT"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 임원상여가 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "REMK_100X"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 비고가  없습니다.");
        			return false;
        		}
        		
        	}

        	return true;
        	
        }

        ///////////////////////
        /*--------------------------------------+
         |  확장업로드 컴포넌트의 상태변경 이벤트 핸들러|
         +--------------------------------------*/
        this.extFileUpload_onreadystatechange = function(obj,e) {

        	if (e.readyState == 4) {
        		
        		if (e.status != 200) {
        			var ds = this.dsFileList;
        			var count = ds.rowcount;
        			for(var row = 0; row < count; row++)
        			{
        				ds.setColumn(row, "FILE_PROG", -1);
        			}
        		}
        		
        	}

        }

        
        /*--------------------------------------+
         |  서버에 파일 업로드 진행 이벤트 핸들러		|
         |  이 기능은 HTML5 지원 가능 브라우저에서만 동작합니다.
         |  Runtime 환경에서는 작동하지 않습니다.
         +--------------------------------------*/
        this.extFileUpload_onprogress = function(obj,e) {

        	var files = obj.getAddedFile();
        	var len = files.length;
        	
        	// 진행률 계산이 가능하다면...
        	if (e.lengthComputable && (len > 0)) {
        		
        		var fileId = e.fileId;
        		var currSize;
        		var totalSize;
        		var dsObj = this.dsFileList;
        		
        		if (fileId) {
        			
        			currSize = e.loaded;
        			totalSize = e.total;
        			
        			var row = dsObj.findRow("FILE_NAME", fileId);
        			var rate = Math.floor((currSize / totalSize) * 100);
        			dsObj.setColumn(row, "FILE_PROG", rate);
        			return;
        		
        		}
        		
        		var sendFiles = this.tranFiles;
        		sendFiles.transferFileSize = e.loaded;
        		
        		var currFileId;
        		var dsRow;
        		var currentFile;
        		var currFileNm;
        		var transSize;
        		
        		while ((sendFiles.transferFileSize > sendFiles.preFileSizeSum) && (sendFiles.transferFileIndex < len)) {
        			
        			currFileId = files[sendFiles.transferFileIndex].id;
        			dsRow = dsObj.findRow("FILE_IDXX", currFileId);
        			
        			currentFile = files[sendFiles.transferFileIndex].file;
        			currSize = currentFile.size;
        			currFileNm = currentFile.name;
        			
        			dsObj.setColumn(dsRow, "FILE_SIZE", currSize);
        			
        			transSize = sendFiles.transferFileSize - sendFiles.preFileSizeSum;
        			var rate = Math.floor((transSize / currSize) * 100);
        			
        			if (rate < 100) {	
        				dsObj.setColumn(dsRow, "FILE_PROG", rate);
        				break;
        			}
        			
        			if (rate >= 100) {
        				
        				transSize = currSize;
        				rate = 100;
        				
        				dsObj.setColumn(dsRow, "FILE_PROG", rate);
        				
        				// 다음 순서로 전송할 파일 정보 설정
        				sendFiles.preFileSizeSum += currSize;	// 이전 파일 사이즈 합계
        				sendFiles.transferFileIndex++;
        				
        				if (sendFiles.transferFileIndex >= len)
        				{
        					break;
        				}
        			}
        			
        		}	// end of while...
        		
        		
        	}

        }

        
        /*--------------------------------------+
         |  서버에 파일 전송이 완료된 경우 이벤트 처리	|
         +--------------------------------------*/
        this.extFileUpload_onsuccess = function(obj,e) {
        	
        	var ErrorCode = e.errorcode;
        	var ErrorMsg = e.errormsg;
        	
        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMsg);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMsg);
        		}
        		
        		return;
        	}
        	
        	
        	
        	this.dsFiles.applyChange();
        	
        	if (e.datasets) {
        		
        		var dsRets = e.datasets[0];
        		this.dsFiles.copyData(dsRets);
        		this.dsFiles.set_name("dsFiles");
        		
        		var retObj = {};
        		retObj.callbackFunctionName = this.callbackfunctionname;
        		retObj.dsFiles = e.datasets[0];
        		this.fnc_Alert(this.dsFiles.getRowCount() + "개의 파일 업로드가 완료되었습니다");
        		this.fnc_PopupClose(retObj);
        		
        	}
        	
        }

        
        /*--------------------------------------+
         |  서버에 파일 전송 중 오류 발생 시 이벤트 핸들러	|
         +--------------------------------------*/
        this.extFileUpload_onerror = function(obj,e) {
        	
        	this.fnc_Alert("파일 전송 중 오류가 발생하였습니다.");
        	trace("에러발생 \extUpload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_ETMDXM.addEventHandler("oncolumnchanged", this.dsMD_ETMDXM_oncolumnchanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting , this);
            this.addEventHandler("onkeydown", this.comFileUploadPopup_onkeydown, this);
            this.grdFileList.addEventHandler("oncellclick", this.grdFileList_oncellclick, this);
            this.btnDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.btnYes.addEventHandler("onclick", this.btnYes_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);
            this.btnAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.Static0.addEventHandler("onclick", this.Static0_onclick, this);
            this.grdMD_ETMDXM.addEventHandler("onheadclick", this.grdMD_ETMDXM_onheadclick, this);

        };

        this.loadIncludeScript("MDMA0010E01.xfdl");

       
    };
}
)();
