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
                this.set_name("MRPA0010");
                this.set_titletext("매체결산 종합보고서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_REPOXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"XXAD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"DTLX_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"INT\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"INT\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMONY_UNITCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">원</Col></Row><Row><Col id=\"CODE\">1000</Col><Col id=\"NAME\">천 원</Col></Row><Row><Col id=\"CODE\">1000000</Col><Col id=\"NAME\">백만 원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMEDX_FLAGCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A00A</Col><Col id=\"NAME\">전파</Col></Row><Row><Col id=\"CODE\">A00C</Col><Col id=\"NAME\">전파 외</Col></Row><Row><Col id=\"CODE\">A004</Col><Col id=\"NAME\">CATV</Col></Row><Row><Col id=\"CODE\">A00B</Col><Col id=\"NAME\">인쇄</Col></Row><Row><Col id=\"CODE\">A007</Col><Col id=\"NAME\">옥외</Col></Row><Row><Col id=\"CODE\">A008</Col><Col id=\"NAME\">인터넷</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("234");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("매체결산 종합보고서");
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
            obj.set_text("결산관리 > 매체결산 종합보고서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "344", "71", "51", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "401", "71", "70", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "472", "71", "23", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "495", "71", "143", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "48.27%", "129", null, "25", "44.99%", null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0.67%", "148", null, "6", "81.13%", null, this);
            obj.set_taborder("23");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, "1143", "15", null, "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0.67%", "29", null, "6", "84.5%", null, this);
            obj.set_taborder("52");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0.59%", "56", null, "4", "88.63%", null, this);
            obj.set_taborder("53");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "316", "61", "40", "67", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "-3", "129", "216", "7", null, null, this);
            obj.set_taborder("218");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("219");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "169", "21", null, null, this);
            obj.set_taborder("221");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_REPOXM", "absolute", "0.59%", "154", null, null, "2.19%", "15", this);
            obj.set_taborder("233");
            obj.set_binddataset("dsMD_REPOXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"89\"/><Column size=\"93\"/><Column size=\"113\"/><Column size=\"68\"/><Column size=\"91\"/><Column size=\"121\"/><Column size=\"102\"/><Column size=\"193\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"광고주\"/><Cell col=\"3\" text=\"제품명\"/><Cell col=\"4\" text=\"매체명\"/><Cell col=\"5\" text=\"매체설명\"/><Cell col=\"6\" text=\"법인\"/><Cell col=\"7\" text=\"청구처\"/><Cell col=\"8\" text=\"세부내용\"/><Cell col=\"9\" text=\"광고료\"/><Cell col=\"10\" text=\"수수료\"/><Cell col=\"11\" text=\"수수료율\"/><Cell col=\"12\" text=\"기타\"/><Cell col=\"13\" text=\"AOR\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:CUST_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"3\" text=\"bind:BRND_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"4\" text=\"bind:MEDX_FLNM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"5\" text=\"bind:XXAD_FLAG\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"6\" text=\"bind:MEDX_CDNM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"7\" text=\"bind:RMED_CDNM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"8\" text=\"bind:DTLX_CONT\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMI_FILD\"/><Cell col=\"11\" text=\"bind:COMI_RATE\"/><Cell col=\"12\" text=\"bind:MEMO_FILD\"/><Cell col=\"13\" displaytype=\"checkbox\" text=\"bind:AORX_FLAG\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" style=\"align:center;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "344", "96", "51", "21", null, null, this);
            obj.set_taborder("235");
            obj.set_text("청구지");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "400", "97", "70", "21", null, null, this);
            obj.set_taborder("236");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMEDX_CODE", "absolute", "471", "97", "23", "21", null, null, this);
            obj.set_taborder("237");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CDNM", "absolute", "495", "97", "143", "21", null, null, this);
            obj.set_taborder("238");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "120", "118", "38", "10", null, null, this);
            obj.set_taborder("239");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDX_FLAG", "absolute", "96", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("240");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_innerdataset("@dsMEDX_FLAGCombo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("A00A");
            obj.set_text("전파");

            obj = new Static("Static07", "absolute", "28", "97", "71", "21", null, null, this);
            obj.set_taborder("241");
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "994", "71", "71", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_text("금액단위");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMONY_UNIT", "absolute", "1062", "71", "76", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("243");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_innerdataset("@dsMONY_UNITCombo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_text("원");

            obj = new Static("staSHRYEAR_MNTH", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "96", "71", "100", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "637", "61", "40", "67", null, null, this);
            obj.set_taborder("246");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "495", "93", "143", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("247");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");

            obj = new Div("calSHRYEAR_MNTH2", "absolute", "216", "71", "100", "21", null, null, this);
            obj.set_taborder("248");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "203", "71", "14", "21", null, null, this);
            obj.set_taborder("249");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_CDNM", "absolute", "829", "71", "143", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRRMED_CODE", "absolute", "805", "71", "23", "21", null, null, this);
            obj.set_taborder("251");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRRMED_CODE", "absolute", "734", "71", "70", "21", null, null, this);
            obj.set_taborder("252");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "666", "71", "51", "21", null, null, this);
            obj.set_taborder("253");
            obj.set_text("매체");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "666", "97", "51", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "734", "97", "70", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_NAME", "absolute", "805", "97", "23", "21", null, null, this);
            obj.set_taborder("256");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "829", "97", "143", "21", null, null, this);
            obj.set_taborder("257");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매체결산 종합보고서");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MRPA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MRPA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MRPA0010 매체결산 종합보고서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.25		최제현		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "MRPA0010"; //해당 Form에서 사용 할 Package 명

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
         	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_AddMonth(this.fnc_GetServerDateTime("DATE"),-6),0,6 ));
         	this.calSHRYEAR_MNTH2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
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
        	
        	//세금계산서가 생성된 개별청약서 조회
        	this.fnc_DatasetClear('dsMD_REPOXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_REPOXM=dsMD_REPOXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음.
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음.
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/

        
        this.fn_Save = function (obj) {
        	//기능없음.
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	//this.fnc_ToExcel(this.name);
        	
        	var sGrid = "grd" + this.fnc_SubStr(obj.name, 3);

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	
        	var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, this.grdMD_REPOXM, "Sheet1!A1","allband","allrecord","nosuppress","allstyle","image","","both","cellline");
        	
        	var objExportItem = this.ExcelExportObject.getExportItem(nexacro.ExportItemTypes.GRID, 0);
        	objExportItem.set_exportimage("image");	
        	this.ExcelExportObject.setExportItem(nexacro.ExportItemTypes.GRID, 0,objExportItem);  
        	
            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
            this.ExcelExportObject.set_exportfilename("FinalReport_" + Eco.date.getMaskFormatString(new Date(), "yyyyMMddHHmmss"));
        	//this.ExcelExportObject.set_exportfilename("ExcelExport_"+sGrid);

            this.ExcelExportObject.set_exporturl(application.GBL_HTTPURL + "/XExportImport");
            
        	// var objExportItem = this.ExcelExportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
        	// objExportItem.set_exceptstyle("background,background2");

            this.ExcelExportObject.exportData();
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        }

        /*----------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsMD_REPOXM, dsMD_REPOXM",this);
        	
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
        	
        	if (this.calSHRYEAR_MNTH.fn_GetMonth()==''){
        		this.fnc_Message("TMM008","년월");
        		return false;
        	}else if (this.calSHRYEAR_MNTH2.fn_GetMonth()==''){
        		this.fnc_Message("TMM008","년월");
        		return false;
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
         
         this.fn_DeleteCheck = function (totalNum) {
        	//기능없음.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음.
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
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
         		sReturnString += " YEAR_MNTH2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH2.fn_GetMonth())); //년월
         		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRMEDX_FLAG.value)); //매체구분
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //광고주
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //광고주
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMEDX_CODE.value)); //매체사
        		sReturnString += " MONY_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRMONY_UNIT.value)); //단위구분
        		sReturnString += " RMED_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRRMED_CODE.value)); //매체
        		sReturnString += " BRND_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_CODE.value)); //브랜드
        	}else if (sKind == "SEARCH01") {
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
        		this.fnc_Information(this.stInformation, this.dsMD_REPOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "GetCommCode") {	

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

        
        /*----------------+
         |     팝업 	  |
         +----------------*/

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

        //상단 매체사 팝업
        this.fn_HelpDialogeSHRMEDX_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0009";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRMEDX_CDNM.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRMEDX_CDNM";                          
            arrParam[5] = "edtSHRMEDX_CODE,edtSHRMEDX_CDNM";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        //상단 매체 팝업
        this.fn_HelpDialogeSHRRMED_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0033";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRRMED_CDNM.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRRMED_CDNM";                          
            arrParam[5] = "edtSHRRMED_CODE,edtSHRRMED_CDNM";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        //상단 브랜드 팝업
        this.fn_HelpDialogeSHRBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0015";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRBRND_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRBRND_NAME";                          
            arrParam[5] = "edtSHRBRND_CODE,edtSHRBRND_NAME";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        
        //청구지
        this.edtSHRMEDX_CDNM_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRMEDX_CDNM.value=='')
        	this.edtSHRMEDX_CODE.set_value('');
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
        	//명이 지워지면 코드가 지워짐
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
        		this.fn_Search();
        	}
        }

        this.fn_onItemChanged = function(obj,e)
        {
        	this.fn_Search();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.st_FormLocation.addEventHandler("onclick", this.st_FormLocation_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.grdMD_REPOXM.addEventHandler("onheadclick", this.grdMD_REPOXM_onheadclick, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_CDNM.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_CDNM.addEventHandler("ontextchanged", this.edtSHRMEDX_CDNM_ontextchanged, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMONY_UNIT.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.cmbSHRMONY_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);
            this.calSHRYEAR_MNTH2.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.edtSHRRMED_CDNM.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_CDNM.addEventHandler("ontextchanged", this.edtSHRMEDX_CDNM_ontextchanged, this);
            this.imgHelpSHRRMED_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRRMED_CODE, this);
            this.edtSHRRMED_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBRND_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRBRND_CODE, this);

        };

        this.loadIncludeScript("MRPA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
