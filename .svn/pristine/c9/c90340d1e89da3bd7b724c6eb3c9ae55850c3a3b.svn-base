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
                this.set_name("PAYA0135");
                this.set_titletext("정기상여등록(개인)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_EMPLRT", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BONU_RATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "196", "71", "110", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPAYX_CODE", "absolute", "196", "71", "110", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "304", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_EMPLRT", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_EMPLRT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"2\" style=\"background: ;\" text=\"성명\"/><Cell col=\"3\" text=\"직원구분\"/><Cell col=\"4\" text=\"부실\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직무\"/><Cell col=\"8\" text=\"상여율(%)\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:CLSD_CDNM\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:CPOS_CDNM\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DUTY_CDNM\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BONU_RATE\" mask=\"###.##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "213", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "89", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "92", "0", "89", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "165", "71", "22", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "188", "71", "120", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "336", "71", "49", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "378", "71", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "460", "71", "22", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "483", "71", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "631", "71", "49", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "673", "71", "80", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "755", "71", "22", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "778", "71", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "357", "103", "80", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("26");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("정기상여등록(개인)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 세무조정자료 > 원천납부세액명세현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "71", "762", "439", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "421", "39", null, null, this.popINSERT);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("26");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "342", "18", "63", "21", null, null, this.popINSERT);
            obj.set_taborder("28");
            obj.set_text("업로드");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "368", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("29");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtPAYX_CODE", "absolute", "83", "54", "134", "21", null, null, this.popINSERT);
            obj.set_taborder("30");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medPAYX_DATE", "absolute", "84", "18", "93", "21", null, null, this.popINSERT);
            obj.set_taborder("31");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpPAYX_NAME", "absolute", "178", "18", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("32");
            obj.set_cssclass("sytHelpPopupInput");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtPAYX_NAME", "absolute", "200", "18", "134", "21", null, null, this.popINSERT);
            obj.set_taborder("33");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "41", "763", "182", "8", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "41", "842", "294", "8", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "72", "782", "8", "96", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "501", "782", "8", "96", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 213, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 439, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("정기상여등록(개인)");
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
        };
        
        // User Script
        this.addIncludeScript("PAYA0135.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0135.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		정기상여등록(개인별)를 관리한다.
         * @category	 	급여관리/정기상여등록(개인별)
         * @author	   	고민주
         * @cdate	  		2016.07.19
         * @version 1.0		최초 작성
         * PAYA0135.xml - <Created by Code Template generator>
         *
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYA0135"; 

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
        	this.edtSHRWAGE_NAME.setFocus();
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
        	this.fnc_DatasetClear('dsPY_EMPLRT');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPLRT=dsPY_EMPLRT";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_EMPLRT.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	var iRow = this.dsPY_EMPLRT.insertRow(this.dsPY_EMPLRT.rowposition + 1);
        	this.dsPY_EMPLRT.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);	
        	this.dsPY_EMPLRT.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);	
        	this.grdPY_EMPLRT.setCellPos(this.fnc_GridColumnIndex(this.grdPY_EMPLRT, "EMPL_NAME"));
        	this.grdPY_EMPLRT.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPY_EMPLRT.deleteRow(this.dsPY_EMPLRT.rowposition);
        	this.grdPY_EMPLRT.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_EMPLRT");
        	this.grdPY_EMPLRT.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_EMPLRT=dsPY_EMPLRT:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_EMPLRT.setFocus();

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
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_EMPLRT", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_EMPLRT")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_EMPLRT.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "성명:" + this.fnc_Trim(this.dsPY_EMPLRT.getColumn(this.dsPY_EMPLRT.rowposition, "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_EMPLRT")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_EMPLRT.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_EMPLRT.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_EMPLRT.getColumn(i, 'EMPL_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_EMPLRT, i, this.grdPY_EMPLRT, "EMPL_NUMB");
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
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        	
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsPY_EMPLRT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPLRT.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsPY_EMPLRT);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 지급일지정보조회(Popup)
        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	if (obj.name == 'grdPY_EMPLRT') {
        		if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:EMPL_NAME') 
        		{
        			arrParam[0] = 'HRM0002';
        			arrParam[1] = "";
        			arrParam[2] = 'EMPL_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdPY_EMPLRT';
        			arrParam[5] = 'EMPL_NUMB,EMPL_NAME,CLSD_CDNM,SECT_NAME,DEPT_NAME,CPOS_CDNM,DUTY_CDNM';
        			arrParam[6] = '0,1,17,5,3,19,25';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        //그리드 팝업 시 필요한 이벤트
        this.dsPY_EMPLRT_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_EMPLRT, "YES" ,e.oldvalue, e.columnid);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_EMPLRT.addEventHandler("oncolumnchanged", this.dsPY_EMPLRT_oncolumnchanged, this);
            this.dsPY_EMPLRT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_MASTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRPAYX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPAYX_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_EMPLRT.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.btnFile_OnClick, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_Button0_OnClick, this);
            this.popINSERT.edtPAYX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtPAYX_CODE.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.popINSERT.medPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.imgHelpPAYX_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.edtPAYX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtPAYX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYA0135.xfdl");
        this.loadPreloadList();
       
    };
}
)();
