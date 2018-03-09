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
                this.set_name("PAYJ0060");
                this.set_titletext("인건비효율성");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_EMPAVG1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_EMPAVG2", this);
            obj._setContents("<ColumnInfo><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_EMPAVG3", this);
            obj._setContents("<ColumnInfo><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AMOT_NOPS3\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("인건비효율성");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("10");
            obj.set_text("급여관리>인건비효율성");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Tab("tabPY_EMPAVG", "absolute", "8", "114", null, null, "8", "8", this);
            obj.set_taborder("11");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabPY_EMPAVG1", this.tabPY_EMPAVG);
            obj.set_text("부서");
            obj.set_scrollbars("none");
            this.tabPY_EMPAVG.addChild(obj.name, obj);
            obj = new Grid("grdPY_EMPAVG1", "absolute", "8", "31", null, null, "11", "8", this.tabPY_EMPAVG.tabPY_EMPAVG1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsPY_EMPAVG1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"62\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"67\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" rowspan=\"2\" text=\"부문\"/><Cell col=\"2\" rowspan=\"2\" text=\"부실\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"구분\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"전년도\"/><Cell col=\"8\" colspan=\"3\" style=\"background: ;\" text=\"당해년도\"/><Cell col=\"11\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"증감\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"5\" text=\"총계\"/><Cell row=\"1\" col=\"6\" text=\"평균인원\"/><Cell row=\"1\" col=\"7\" text=\"인당인건비\"/><Cell row=\"1\" col=\"8\" text=\"총계\"/><Cell row=\"1\" col=\"9\" text=\"평균인원\"/><Cell row=\"1\" col=\"10\" text=\"인당인건비\"/><Cell row=\"1\" col=\"11\" text=\"총계\"/><Cell row=\"1\" col=\"12\" style=\"align:center;\" text=\"평균인원\"/><Cell row=\"1\" col=\"13\" text=\"인당인건비\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" text=\"bind:DTGN_NAME\"/><Cell col=\"2\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CPOS_TYPE\" editlimit=\"4\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT1\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT2\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS2\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS2\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"EXPD_AMOT2-EXPD_AMOT1\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AVER_NOPS2-AVER_NOPS1\" mask=\"#,###.##\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AMOT_NOPS2-AMOT_NOPS1\"/></Band></Format></Formats>");
            this.tabPY_EMPAVG.tabPY_EMPAVG1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "8", "8", "400", "23", null, null, this.tabPY_EMPAVG.tabPY_EMPAVG1);
            obj.set_taborder("2");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            this.tabPY_EMPAVG.tabPY_EMPAVG1.addChild(obj.name, obj);
            obj = new Tabpage("tabPY_EMPAVG2", this.tabPY_EMPAVG);
            obj.set_text("직급");
            obj.set_scrollbars("none");
            this.tabPY_EMPAVG.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "8", "8", "400", "23", null, null, this.tabPY_EMPAVG.tabPY_EMPAVG2);
            obj.set_taborder("2");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            this.tabPY_EMPAVG.tabPY_EMPAVG2.addChild(obj.name, obj);
            obj = new Grid("grdPY_EMPAVG2", "absolute", "8", "31", null, null, "11", "8", this.tabPY_EMPAVG.tabPY_EMPAVG2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsPY_EMPAVG2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"직급\"/><Cell col=\"2\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"전년도\"/><Cell col=\"5\" colspan=\"3\" style=\"background: ;\" text=\"당해년도\"/><Cell col=\"8\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"증감\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"3\" text=\"평균인원\"/><Cell row=\"1\" col=\"4\" text=\"인당인건비\"/><Cell row=\"1\" col=\"5\" text=\"총계\"/><Cell row=\"1\" col=\"6\" text=\"평균인원\"/><Cell row=\"1\" col=\"7\" text=\"인당인건비\"/><Cell row=\"1\" col=\"8\" text=\"총계\"/><Cell row=\"1\" col=\"9\" text=\"평균인원\"/><Cell row=\"1\" col=\"10\" text=\"인당인건비\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CPOS_NAME\" editlimit=\"4\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT1\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT2\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS2\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS2\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"EXPD_AMOT2-EXPD_AMOT1\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AVER_NOPS2-AVER_NOPS1\" mask=\"#,###.##\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AMOT_NOPS2-AMOT_NOPS1\"/></Band></Format></Formats>");
            this.tabPY_EMPAVG.tabPY_EMPAVG2.addChild(obj.name, obj);
            obj = new Tabpage("tabPY_EMPAVG3", this.tabPY_EMPAVG);
            obj.set_text("직무");
            this.tabPY_EMPAVG.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "8", "8", "400", "23", null, null, this.tabPY_EMPAVG.tabPY_EMPAVG3);
            obj.set_taborder("0");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            this.tabPY_EMPAVG.tabPY_EMPAVG3.addChild(obj.name, obj);
            obj = new Grid("grdPY_EMPAVG3", "absolute", "8", "31", null, null, "11", "8", this.tabPY_EMPAVG.tabPY_EMPAVG3);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsPY_EMPAVG3");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"122\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"직무\"/><Cell col=\"2\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"전년도\"/><Cell col=\"5\" colspan=\"3\" style=\"background: ;\" text=\"당해년도\"/><Cell col=\"8\" colspan=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"증감\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"3\" text=\"평균인원\"/><Cell row=\"1\" col=\"4\" text=\"인당인건비\"/><Cell row=\"1\" col=\"5\" text=\"총계\"/><Cell row=\"1\" col=\"6\" text=\"평균인원\"/><Cell row=\"1\" col=\"7\" text=\"인당인건비\"/><Cell row=\"1\" col=\"8\" text=\"총계\"/><Cell row=\"1\" col=\"9\" text=\"평균인원\"/><Cell row=\"1\" col=\"10\" text=\"인당인건비\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:DUTY_NAME\" editlimit=\"4\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT1\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS1\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPD_AMOT2\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AVER_NOPS2\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMOT_NOPS2\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"EXPD_AMOT2-EXPD_AMOT1\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AVER_NOPS2-AVER_NOPS1\" mask=\"#,###.##\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" expr=\"AMOT_NOPS2-AMOT_NOPS1\"/></Band></Format></Formats>");
            this.tabPY_EMPAVG.tabPY_EMPAVG3.addChild(obj.name, obj);

            obj = new Static("Image01", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("조회년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle5", "absolute", "194", "68", "60", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "259", "68", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_type("search");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new MaskEdit("medSHRSTDS_YMTH", "absolute", "81", "68", "103", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPY_EMPAVG.tabPY_EMPAVG1,
            	//-- Layout function
            	function(p) {
            		p.set_text("부서");
            		p.set_scrollbars("none");

            	}
            );
            this.tabPY_EMPAVG.tabPY_EMPAVG1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPY_EMPAVG.tabPY_EMPAVG2,
            	//-- Layout function
            	function(p) {
            		p.set_text("직급");
            		p.set_scrollbars("none");

            	}
            );
            this.tabPY_EMPAVG.tabPY_EMPAVG2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPY_EMPAVG.tabPY_EMPAVG3,
            	//-- Layout function
            	function(p) {
            		p.set_text("직무");

            	}
            );
            this.tabPY_EMPAVG.tabPY_EMPAVG3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인건비효율성");
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
        this.addIncludeScript("PAYJ0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYJ0060.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		인건비효율성를 관리한다.
         * @category	 	급여관리/인건비효율성
         * @author	   	고민주
         * @cdate	  		2016.08.02
         * @version 1.0		최초 작성
         * PAYJ0060.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYJ0060"; 

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
        	this.medSHRSTDS_YMTH.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	this.medSHRSTDS_YMTH.setFocus();

        
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
        	this.fnc_DatasetClear('dsPY_EMPAVG1,dsPY_EMPAVG2,dsPY_EMPAVG3');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPAVG1=dsPY_EMPAVG1";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPAVG2=dsPY_EMPAVG2";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_EMPAVG3=dsPY_EMPAVG3";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabPY_EMPAVG.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_EMPAVG1,dsPY_EMPAVG2,dsPY_EMPAVG3");
        	this.tabPY_EMPAVG.tabPY_EMPAVG1.grdPY_EMPAVG1.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_EMPAVG1,dsPY_EMPAVG2,dsPY_EMPAVG3", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_EMPAVG1,dsPY_EMPAVG2,dsPY_EMPAVG3")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRSTDS_YMTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회년월", this.medSHRSTDS_YMTH);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

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
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YMTH.value)); 
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)); 
        				
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YMTH.value)); 
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)); 
        			
        	}else if (sKind == 'SEARCH02') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YMTH.value)); 
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)); 
        			
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
        		
        		this.fnc_Information(this.tabPY_EMPAVG.tabPY_EMPAVG1.stInformation, this.dsPY_EMPAVG1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPAVG1.getCaseCount("dataset.getRowLevel(currow)==0")); 
        		
        	} else if (sMethodName == 'SEARCH01') {
        	
        		this.fnc_Information(this.tabPY_EMPAVG.tabPY_EMPAVG2.stInformation, this.dsPY_EMPAVG2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPAVG2.getCaseCount("dataset.getRowLevel(currow)==0")); 
        		
        	} else if (sMethodName == 'SEARCH02') {
        	
        		this.fnc_Information(this.tabPY_EMPAVG.tabPY_EMPAVG3.stInformation, this.dsPY_EMPAVG3.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EMPAVG3.getCaseCount("dataset.getRowLevel(currow)==0")); 
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRCLSD_CODE,dsCLSD_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        				
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        } 
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYJ0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
