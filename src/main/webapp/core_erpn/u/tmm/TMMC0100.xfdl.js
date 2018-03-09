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
                this.set_name("TMMC0100");
                this.set_titletext("메인포털");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NOTIXM", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_NUMB\" size=\"9\" prop=\"default\" type=\"STRING\"/><Column id=\"NOTI_TITL\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"NOTI_INFO\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"NOTI_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"NOTI_ENDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"READ_CHEK\" size=\"2\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_SCHDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SCHD_TITL\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHD_INFO\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"READ_CHEK\" size=\"2\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser2", "absolute", "10", "219", "1031", "349", null, null, this);
            obj.getSetter("silent").set("True");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Image8", "absolute", "431", "599", "612", "227", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("Image6", "absolute", "8", "599", "415", "227", null, null, this);
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser1", "absolute", "10", "601", "411", "223", null, null, this);
            obj.getSetter("silent").set("True");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser0", "absolute", "433", "601", "609", "223", null, null, this);
            obj.getSetter("silent").set("True");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "7", "10", "151", "22", null, null, this);
            obj.set_text("오늘의 일정");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "7", "32", "391", "155", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", "33", "389", "153", null, null, this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("imgMonth", "absolute", "26", "49", "76", "20", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("imgDay", "absolute", "26", "69", "76", "45", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("imgWeekday", "absolute", "26", "114", "76", "33", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("stLunar", "absolute", "26", "154", "76", "18", null, null, this);
            obj.set_text("[음] 07.31");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SCHDXM", "absolute", "120", "48", "272", "128", null, null, this);
            obj.set_autofittype("col");
            obj.set_scrollbars("autovert");
            obj.set_binddataset("dsTM_SCHDXM");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("11");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"243\"/></Columns><Rows><Row size=\"20\"/></Rows><Band id=\"body\"><Cell col=\"0\" text=\"bind:SCHD_TITL\" displaytype=\"text\" style=\"align:left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Image2", "absolute", "406", "10", "151", "22", null, null, this);
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Static("Image3", "absolute", "406", "32", "441", "155", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "407", "33", "438", "153", null, null, this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Image4", "absolute", "8", "194", "151", "22", null, null, this);
            obj.set_text("수주/매출 계획");
            this.addChild(obj.name, obj);

            obj = new Static("Image7", "absolute", "8", "577", "151", "22", null, null, this);
            obj.set_text("년간 인력 계획");
            this.addChild(obj.name, obj);

            obj = new Static("Image9", "absolute", "431", "577", "151", "22", null, null, this);
            obj.set_text("월별 예산 집행");
            this.addChild(obj.name, obj);

            obj = new Static("Image10", "absolute", "854", "10", "151", "22", null, null, this);
            obj.set_text("시스템 접속정보");
            this.addChild(obj.name, obj);

            obj = new Static("Image11", "absolute", "854", "32", "189", "155", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("Shape2", "absolute", "855", "33", "187", "153", null, null, this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "862", "50", "174", "20", null, null, this);
            obj.set_text("¤ 이전 접속 IP");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("stLOGN_IPXX", "absolute", "878", "74", "158", "20", null, null, this);
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "862", "114", "174", "20", null, null, this);
            obj.set_text("¤ 이전 로그인  일시");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("stLOGN_TIME", "absolute", "878", "138", "158", "20", null, null, this);
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("lnTop1", "absolute", "8", "0", "1035", "1", null, null, this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("lnTop2", "absolute", "8", "1", "1035", "1", null, null, this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1", "absolute", "415", "45", "423", "128", null, null, this);
            obj.set_autofittype("col");
            obj.set_scrollbars("autovert");
            obj.set_binddataset("dsTM_NOTIXM");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("30");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"372\"/><Column size=\"75\"/></Columns><Rows><Row size=\"20\"/></Rows><Band id=\"body\"><Cell col=\"0\" text=\"bind:NOTI_DESC\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" text=\"bind:NOTI_DATE\" displaytype=\"text\" style=\"align:right;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TM_NOTIXM", "absolute", "415", "45", "423", "128", null, null, this);
            obj.set_autofittype("col");
            obj.set_scrollbars("autovert");
            obj.set_binddataset("dsTM_NOTIXM");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("31");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"372\"/></Columns><Rows><Row size=\"20\"/></Rows><Band id=\"body\"><Cell col=\"0\" text=\"bind:NOTI_TITL\" displaytype=\"text\" style=\"align:left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllS", "absolute", "325", "8", "74", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("더보기");
            obj.style.set_align("right");
            obj.set_cssclass("btntextformopen04");
            this.addChild(obj.name, obj);

            obj = new Button("Button1", "absolute", "774", "8", "74", "23", null, null, this);
            obj.set_taborder("35");
            obj.set_text("더보기");
            obj.style.set_align("right");
            obj.set_cssclass("btntextformopen04");
            this.addChild(obj.name, obj);

            obj = new Static("Image5", "absolute", "8", "216", "1035", "353", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Div("Div1", "absolute", "8", "194", "1035", "375", null, null, this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Shape1", "absolute", "0", "0", "1033", "373", null, null, this.Div1);
            obj.set_cssclass("styFormItemBoxOut");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "2", "2", "1029", "369", null, null, this.Div1);
            obj.set_cssclass("styFormItemBoxOut");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("staXxxx2", "absolute", "80", "28", "949", "341", null, null, this.Div1);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("staXxxx1", "absolute", "4", "28", "77", "341", null, null, this.Div1);
            obj.set_text("공지내용");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("staXxxx6", "absolute", "617", "4", "77", "25", null, null, this.Div1);
            obj.set_text("공지시작일");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("staXxxx9", "absolute", "694", "4", "101", "25", null, null, this.Div1);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "794", "4", "77", "25", null, null, this.Div1);
            obj.set_text("공지종료일");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "4", "4", "77", "25", null, null, this.Div1);
            obj.set_text("공지제목");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("staXxxx12", "absolute", "872", "4", "102", "25", null, null, this.Div1);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "80", "4", "536", "25", null, null, this.Div1);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div1.addChild(obj.name, obj);
            obj = new Calendar("calNOTI_STDT", "absolute", "695", "6", "98", "21", null, null, this.Div1);
            this.Div1.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_NOTIXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_taborder("2");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Calendar("calNOTI_ENDT", "absolute", "872", "6", "101", "21", null, null, this.Div1);
            this.Div1.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_NOTIXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_taborder("3");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Edit("edtNOTI_TITL", "absolute", "83", "6", "530", "21", null, null, this.Div1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_NOTIXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.Div1.addChild(obj.name, obj);
            obj = new TextArea("txtNOTI_INFO", "absolute", "82", "30", "945", "337", null, null, this.Div1);
            obj.getSetter("binddataset").set("dsTM_NOTIXM");
            obj.set_lengthunit("ascii");
            obj.set_hscrollbar("TRUE");
            obj.set_imemode("native");
            obj.set_maxlength("4000");
            obj.set_readonly("true");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.Div1.addChild(obj.name, obj);
            obj = new Button("Button1", "absolute", "975", "4", "55", "22", null, null, this.Div1);
            obj.set_taborder("15");
            obj.set_text("닫기");
            obj.set_cssclass("btnend");
            this.Div1.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "194", "1035", "375", null, null, this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Shape1", "absolute", "0", "0", "1033", "373", null, null, this.Div0);
            obj.set_cssclass("styFormItemBoxOut");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "2", "2", "1029", "369", null, null, this.Div0);
            obj.set_cssclass("styFormItemBoxOut");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("staXxxx2", "absolute", "82", "28", "947", "341", null, null, this.Div0);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "4", "4", "77", "25", null, null, this.Div0);
            obj.set_text("일정일자");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "80", "4", "126", "25", null, null, this.Div0);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div0.addChild(obj.name, obj);
            obj = new Calendar("calSCHD_DATE", "absolute", "82", "6", "119", "21", null, null, this.Div0);
            this.Div0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_taborder("6");
            obj.set_type("normal");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("Static16", "absolute", "278", "4", "696", "25", null, null, this.Div0);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "202", "4", "78", "25", null, null, this.Div0);
            obj.set_text("일정제목");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div0.addChild(obj.name, obj);
            obj = new Static("staXxxx1", "absolute", "4", "28", "77", "341", null, null, this.Div0);
            obj.set_text("일정내용");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("Button0", "absolute", "975", "4", "54", "22", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btnend");
            this.Div0.addChild(obj.name, obj);
            obj = new Edit("edtSCHD_TITL", "absolute", "281", "6", "690", "21", null, null, this.Div0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.Div0.addChild(obj.name, obj);
            obj = new TextArea("txtSCHD_INFO", "absolute", "84", "30", "943", "337", null, null, this.Div0);
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_lengthunit("ascii");
            obj.set_hscrollbar("TRUE");
            obj.set_imemode("native");
            obj.set_maxlength("4000");
            obj.set_readonly("true");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            obj.style.set_border("1 solid #aaaaaaff");
            this.Div0.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1035, 375, this.Div1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.set_text("");
            		p.set_visible("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1035, 375, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("");
            		p.set_visible("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메인포털");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Div1_calNOTI_STDT_value","Div1.calNOTI_STDT","value","dsTM_NOTIXM","NOTI_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div1_calNOTI_ENDT_value","Div1.calNOTI_ENDT","value","dsTM_NOTIXM","NOTI_ENDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div1_edtNOTI_TITL_value","Div1.edtNOTI_TITL","value","dsTM_NOTIXM","NOTI_TITL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div1_txtNOTI_INFO_value","Div1.txtNOTI_INFO","value","dsTM_NOTIXM","NOTI_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div0_calSCHD_DATE_value","Div0.calSCHD_DATE","value","dsTM_SCHDXM","SCHD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div0_edtSCHD_TITL_value","Div0.edtSCHD_TITL","value","dsTM_SCHDXM","SCHD_TITL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div0_txtSCHD_INFO_value","Div0.txtSCHD_INFO","value","dsTM_SCHDXM","SCHD_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TMMC0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMC0100.xfdl", function() {
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

        /************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = ''; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMC0100"; //해당 Form에서 사용 할 Package 명

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
        this.iRESULTCOUNT = 10; //화면에 보여줄 게시글의 개수

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fn_CalendarSetting(); //달력 설정
        	this.fn_MSColumn3D(); //수주/매출 계획
        	this.fn_Area2D(); //월별 인력 계획
        	this.fn_Column3D(); //월별 예산 집행계획
        	this.fn_Schedule(); //오늘의 일정 조회
        	this.fn_Notice(); //공지사항 조회

        	this.stLOGN_IPXX.set_text(application.GBL_LOGINIP); //로그인 IP
        	this.stLOGN_TIME.set_text(this.ToString(application.GBL_LOGINTIMEF, "@@@@-@@-@@ @@:@@:@@")); //최근 로그인 시간

        	this.Div0.set_visible(false); //최초 일정 조회창 숨김
        	this.Div1.set_visible(false); //최초 공지 조회창 숨김

        }

        /*--------------------+
         |  오늘의 일정 조회  |
         +--------------------*/
        this.fn_Schedule = function () {

        	this.fnc_DatasetClear("dsTM_SCHDXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_SCHDXM=dsTM_SCHDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SCHDXM.setFocus();
        }

        /*--------------------+
         |  공지사항  조회    |
         +--------------------*/
        this.fn_Notice = function () {

        	this.fnc_DatasetClear("dsTM_NOTIXM");

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_NOTIXM=dsTM_NOTIXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grd_TM_NOTIXM.setFocus();
        }

        /*------------------+
         |  일정정보 저장   |
         -------------------*/
        this.fn_SchSave = function (obj) {

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_SCHDXM=dsTM_SCHDXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", "N");
        	this.grdTM_SCHDXM.setFocus();
        }

        /*------------------+
         |  공지정보 저장   |
         -------------------*/
        this.fn_NotSave = function (obj) {

        	var sMethodName = "SAVE01";
        	var sInDataSet = "dsTM_NOTIXM=dsTM_NOTIXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", "N");
        	this.grdTM_SCHDXM.setFocus();
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 오늘의 일정 조회
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm=" 		   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	   + this.fnc_Quote(sKind);
        		sReturnString += " iRESULTCOUNT =" + this.fnc_Quote(this.fnc_Trim(this.iRESULTCOUNT)); //화면에 보여줄 게시글의 개수

        	// 공지사항 조회
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm=" 		   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	   + this.fnc_Quote(sKind);
        		sReturnString += " iRESULTCOUNT =" + this.fnc_Quote(this.fnc_Trim(this.iRESULTCOUNT));

        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm=" 		   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="        + this.fnc_Quote(sKind);

        		// 저장 Argument 생성
        	} else if (sKind == 'SAVE01') {
        	
        		sReturnString  = " pgm=" 		   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	   + this.fnc_Quote(sKind);
        	
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
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /*--------------------------------+
         |          달력 설정             |
         +--------------------------------*/
        this.fn_CalendarSetting = function () {

        	this.imgMonth.style.set_background_image(("imgCal_month" + this.fnc_SubStr(this.fnc_Today(), 4, 2)));
        	this.imgDay.style.set_background_image(("imgCal_day" + this.fnc_Right(this.fnc_Today(), 2)));
        	this.imgWeekday.style.set_background_image(("imgCal_week" + this.fnc_GetDay(this.fnc_Today())));
        	this.stLunar.set_text(("[음]" + this.fnc_SubStr(this.solar2Lunar(this.fnc_Today()), 4, 2) + "." + this.fnc_Right(this.solar2Lunar(this.fnc_Today()), 2)));

        }

        /*------------------+
         |  수주/매출 계획  |
         +------------------*/
        this.fn_MSColumn3D = function () {

        	var sChartURL = application.GBL_HTTPURL + 'icharts/ChartsViewer.jsp';
        	var sChartSWD = "ChartDesign/ChartMSColumn3D.swf";
        	var iChartWidth = this.WebBrowser2.getOffsetWidth() - 48;
        	var iChartHeight = this.WebBrowser2.getOffsetHeight() - 34;
        	/***********************************************
        	 차트 종류가 ChartColumn3D.swf 일때 XML 자료
        	 ***********************************************/
        	var strXML = "<graph ";
        	// strXML += "caption='Global Export' ";           //차트 타이틀
        	// strXML += "subcaption='Sub Title Area' ";       //Sub Title
        	// strXML += "xaxisname='Continent' ";             //X축 명칭
        	strXML += "yaxisname='가' "; //Y축 명칭
        	strXML += "decimalPrecision='0' "; //숫자 소수점 자리수

        	// 생략가능
        	strXML += "rotateNames='0' "; //strXML += "numdivlines='9' ";                   //생략가능 - Y축 중가값
        	strXML += "divLineColor='CCCCCC' "; //생략가능 - Y축 Line Color

        	// 수정불가 - 고정값
        	strXML += "hovercapbg='DEDEBE' "; //고정 - 수정불가
        	strXML += "hovercapbg='DEDEBE' "; //고정 - 수정불가
        	strXML += "hovercapborder='889E6D' "; //고정 - 수정불가
        	strXML += "AlternateHGridColor='CCCCCC' "; //고정 - 수정불가
        	strXML += "divLineAlpha='80' "; //고정 - 수정불가
        	strXML += "showAlternateHGridColor='1' "; //고정 - 수정불가
        	strXML += "AlternateHGridAlpha='0' "; //고정 - 수정불가
        	strXML += "> ";

        	// 카테고리(그룹) 설정
        	strXML += "<categories font='굴림' fontSize='13' fontColor='000000'> ";
        	strXML += "<category name='1月'  hoverText='1月'/> ";
        	strXML += "<category name='2月'  hoverText='2月'/> ";
        	strXML += "<category name='3月'  hoverText='3月'/> ";
        	strXML += "<category name='4月'  hoverText='4月'/> ";
        	strXML += "<category name='5月'  hoverText='5月'/> ";
        	strXML += "<category name='6月'  hoverText='6月'/> ";
        	strXML += "<category name='7月'  hoverText='7月'/> ";
        	strXML += "<category name='8月'  hoverText='8月'/> ";
        	strXML += "<category name='9月'  hoverText='9月'/> ";
        	strXML += "<category name='10月' hoverText='10月'/> ";
        	strXML += "<category name='11月' hoverText='11月'/> ";
        	strXML += "<category name='12月' hoverText='12月'/> ";
        	strXML += "</categories> ";

        	// 카테고리별 수주 Data
        	strXML += "<dataset seriesname='수주' color='FDC12E'> ";
        	strXML += "<set value='304' /> ";
        	strXML += "<set value='385' /> ";
        	strXML += "<set value='346' /> ";
        	strXML += "<set value='373' /> ";
        	strXML += "<set value='424' /> ";
        	strXML += "<set value='446' /> ";
        	strXML += "<set value='347' /> ";
        	strXML += "<set value='245' /> ";
        	strXML += "<set value='327' /> ";
        	strXML += "<set value='440' /> ";
        	strXML += "<set value='370' /> ";
        	strXML += "<set value='229' /> ";
        	strXML += "</dataset> ";

        	// 카테고리별 매출 Data
        	strXML += "<dataset seriesname='매출' color='C9198D'> ";
        	strXML += "<set value='420' /> ";
        	strXML += "<set value='274' /> ";
        	strXML += "<set value='206' /> ";
        	strXML += "<set value='497' /> ";
        	strXML += "<set value='245' /> ";
        	strXML += "<set value='354' /> ";
        	strXML += "<set value='263' /> ";
        	strXML += "<set value='308' /> ";
        	strXML += "<set value='864' /> ";
        	strXML += "<set value='380' /> ";
        	strXML += "<set value='378' /> ";
        	strXML += "<set value='375' /> ";
        	strXML += "</dataset> ";

        	// 카테고리별 수금 Data
        	// strXML += "<dataset seriesname='수금' color='56B9F9'> ";
        	// strXML += "<set value='274577' /> ";
        	// strXML += "<set value='206118' /> ";
        	// strXML += "<set value='497692' /> ";
        	// strXML += "<set value='245962' /> ";
        	// strXML += "<set value='354240' /> ";
        	// strXML += "<set value='263993' /> ";
        	// strXML += "<set value='308668' /> ";
        	// strXML += "<set value='864208' /> ";
        	// strXML += "<set value='380158' /> ";
        	// strXML += "<set value='378281' /> ";
        	// strXML += "<set value='375318' /> ";
        	// strXML += "<set value='420996' /> ";
        	// strXML += "</dataset> ";

        	strXML += "</graph> ";

        	var sParam = '&chartSWF=' + sChartSWD;
        	sParam += '&chartWidth=' + iChartWidth;
        	sParam += '&chartHeight=' + iChartHeight;
        	sParam += '&strXML=' + strXML;

        	this.WebBrowser2.getSetter("url", "set_url").set(sChartURL);
        	this.WebBrowser2.PostData = sParam;
        	/* Run은 지원되지 않는 메서드입니다. */
        	this.WebBrowser2.Run();
        }

        /*----------------------+
         |  월별 인력 변경 추이 |
         +----------------------*/
        this.fn_Area2D = function () {

        	var sChartURL = application.GBL_HTTPURL + 'icharts/ChartsViewer.jsp';
        	var sChartSWD = "ChartDesign/ChartArea2D.swf";
        	var iChartWidth = this.WebBrowser1.getOffsetWidth() - 48;
        	var iChartHeight = this.WebBrowser1.getOffsetHeight() - 34;
        	/***********************************************
        	 차트 종류가 ChartArea2D.swf 일때 XML 자료
        	 ***********************************************/
        	var strXML = "<graph ";
        	// strXML += "caption='Monthly Sales Summary' ";    //차트 타이틀
        	// strXML += "subcaption='For the year 2010' ";     //Sub Title
        	// strXML += "xAxisName='Month' ";                  //X축 명칭
        	// strXML += "yAxisName='Units' ";                  //Y축 명칭
        	strXML += "decimalPrecision='0' "; //strXML += "yAxisMaxValue='45000' ";              //생략가능 - 최대값
        	strXML += ">";
        	// 여기서부터 레크드 시작(컬러값을 다르게 주면 구간의 색 변경 가능)
        	strXML += "<set name='1月'  value='33' color='EBF6FC'/>";
        	strXML += "<set name='2月'  value='35' color='EBF6FC'/>";
        	strXML += "<set name='3月'  value='35' color='EBF6FC'/>";
        	strXML += "<set name='4月'  value='40' color='D3E9F4'/>";
        	strXML += "<set name='5月'  value='43' color='D3E9F4'/>";
        	strXML += "<set name='6月'  value='48' color='D3E9F4'/>";
        	strXML += "<set name='7月'  value='48' color='C0DDEF'/>";
        	strXML += "<set name='8月'  value='50' color='C0DDEF'/>";
        	strXML += "<set name='9月'  value='52' color='C0DDEF'/>";
        	strXML += "<set name='10月' value='53' color='B1D6E9'/>";
        	strXML += "<set name='11月' value='55' color='B1D6E9'/>";
        	strXML += "<set name='12月' value='55' color='B1D6E9'/>";
        	// 여기까지 레코드 끝
        	strXML += "</graph>";

        	var sParam  = '&chartSWF=' + sChartSWD;
        		sParam += '&chartWidth=' + iChartWidth;
        		sParam += '&chartHeight=' + iChartHeight;
        		sParam += '&strXML=' + strXML;

        	this.WebBrowser1.getSetter("url", "set_url").set(sChartURL);
        	this.WebBrowser1.PostData = sParam;
        	/* Run은 지원되지 않는 메서드입니다. */
        	this.WebBrowser1.Run();
        }

        /*-------------------+
         |  월별 예산 집행 액 |
         +--------------------*/
        this.fn_Column3D = function () {

        	var sChartURL = application.GBL_HTTPURL + 'icharts/ChartsViewer.jsp?';
        	var sChartSWD = "ChartDesign/ChartColumn3D.swf";
        	var iChartWidth = this.WebBrowser0.getOffsetWidth() - 48;
        	var iChartHeight = this.WebBrowser0.getOffsetHeight() - 34;
        	/***********************************************
        	 차트 종류가 ChartColumn3D.swf 일때 XML 자료
        	 ***********************************************/
        	var strXML = "<graph ";
        	// strXML += "caption='2011년 월간 매출현황' ";    //차트 타이틀
        	// strXML += "xAxisName='Months' ";                //X축 명칭
        	// strXML += "yAxisName='Sales Amount' ";          //Y축 명칭
        	strXML += "decimalPrecision='0' "; //숫자 소수점 자리수
        	strXML += "formatNumberScale='0' "; //Colomn 3D는 의없는 상수
        	strXML += "> <style type='font' name='CaptionFont' size='15' color='666666' />";
        	// 여기서부터 레크드 시작
        	strXML += "<set name='1月'  value='462' color='AFD8F8'/>";
        	strXML += "<set name='2月'  value='857' color='F6BD0F'/>";
        	strXML += "<set name='3月'  value='671' color='8BBA00'/>";
        	strXML += "<set name='4月'  value='494' color='FF8E46'/>";
        	strXML += "<set name='5月'  value='761' color='008E8E'/>";
        	strXML += "<set name='6月'  value='960' color='D64646'/>";
        	strXML += "<set name='7月'  value='629' color='8E468E'/>";
        	strXML += "<set name='8月'  value='622' color='588526'/>";
        	strXML += "<set name='9月'  value='376' color='B3AA00'/>";
        	strXML += "<set name='10月' value='494' color='008ED6'/>";
        	strXML += "<set name='11月' value='761' color='9D080D'/>";
        	strXML += "<set name='12月' value='960' color='A186BE'/>";
        	// 여기까지 레코드 끝
        	strXML += "</graph>";

        	var sParam = '&chartSWF=' + sChartSWD;
        	sParam += '&chartWidth=' + iChartWidth;
        	sParam += '&chartHeight=' + iChartHeight;
        	sParam += '&strXML=' + strXML;

        	this.WebBrowser0.getSetter("url", "set_url").set(sChartURL);
        	this.WebBrowser0.PostData = sParam;
        	/* Run은 지원되지 않는 메서드입니다. */
        	this.WebBrowser0.Run();
        }

        /*--------------------+
         |  일정 조회창 닫기  |
         +--------------------*/
        this.Div0_Button0_OnClick = function (obj,e) {

        	this.Div0.set_visible(false); //일정 조회창 닫기

        }

        /*-------------------+
         |  공지 조회창 닫기  |
         +--------------------*/
        this.Div1_Button1_OnClick = function (obj,e) {

        	this.Div1.set_visible(false); //공지 조회창 닫기

        }

        /*--------- ----+
         |  일정 조회창  |
         +---------------*/
        this.fn_SchdView = function (obj,e) {

        	this.Div1.set_visible(false); //일정 조회창이 열릴 때 공지 조회창은 닫음
        	this.Div0.set_visible(true);

        	if (this.dsTM_SCHDXM.getColumn(e.row, "READ_CHEK") == "N") {
        		// 처음 조회한 게시글일 경우
        		this.dsTM_SCHDXM.setColumn(e.row, "READ_CHEK", "Y"); //게시글 제목을 지정색으로 바꿔줌
        		this.fn_SchSave(); //조회 시 조회정보 저장
        	}
        }
        /*---------------+
         |  공지 조회창  |
         +---------------*/
        this.fn_NotiView = function (obj,e) {

        	this.Div0.set_visible(false);
        	this.Div1.set_visible(true);

        	if (this.dsTM_NOTIXM.getColumn(e.row, "READ_CHEK") == "N") {
        		this.dsTM_NOTIXM.setColumn(e.row, "READ_CHEK", "Y");
        		this.fn_NotSave();
        	}
        }

        this.Button0_OnClick = function (obj,e) {

        	var iRow = application.dsMenuList.findRow("MENU_IDXX", "MTMMC0110");

        	if (application.dsMenuList.getColumn(iRow, 'TREE_YSNO') != '0') return;
        	// Form이 아니면 종료
        	if (application.dsMenuList.getColumn(iRow, 'DEVE_YSNO') != '1') {
        		// 미개발 메뉴는 그냥 RETURN
        		this.fnc_Message("M1046", "아직 개발이 완료되지 않았습니다. 완료 후 실행 하세요!");
        		return;
        	}

        	var sDisplay   = 'OpenStyle=Max';
        	var sFormID    = application.dsMenuList.getColumn(iRow, 'MENU_IDXX');
        	var sProgID    = application.dsMenuList.getColumn(iRow, 'PROG_IDXX');
        	var sFormCapt  = application.dsMenuList.getColumn(iRow, 'MENU_NAME');
        	var sFormLoca  = application.dsMenuList.getColumn(iRow, 'UPXX_NAME');
        	var sUserAuth  = application.dsMenuList.getColumn(iRow, 'USER_AUTH');
        	var sFilePath  = application.dsMenuList.getColumn(iRow, 'PROG_PATH');
        	var sAuthLevel = application.dsMenuList.getColumn(iRow, 'AUTH_LEVE');
        	var sArgument  = " sFORMCAPTION="  + this.fnc_Quote(sFormCapt + "[" + sProgID + "]");
        		sArgument += " sFORMLOCATION=" + this.fnc_Quote(sFormLoca);
        		sArgument += " sUSERAUTH=" 	   + this.fnc_Quote(sUserAuth);
        		sArgument += " sUSERLAVEL="    + this.fnc_Quote(sAuthLevel);
        	this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xml", sArgument, 1051, 834, sDisplay, -1, -1);
        }

        this.Button1_OnClick = function (obj,e) {

        	var iRow = application.dsMenuList.findRow("MENU_IDXX", "MTMMC0120");

        	if (application.dsMenuList.getColumn(iRow, 'TREE_YSNO') != '0') return;
        	// Form이 아니면 종료
        	if (application.dsMenuList.getColumn(iRow, 'DEVE_YSNO') != '1') {
        		// 미개발 메뉴는 그냥 RETURN
        		this.fnc_Message("M1046", "아직 개발이 완료되지 않았습니다. 완료 후 실행 하세요!");
        		return;
        	}

        	var sDisplay   = 'OpenStyle=Max';
        	var sFormID    = application.dsMenuList.getColumn(iRow, 'MENU_IDXX');
        	var sProgID    = application.dsMenuList.getColumn(iRow, 'PROG_IDXX');
        	var sFormCapt  = application.dsMenuList.getColumn(iRow, 'MENU_NAME');
        	var sFormLoca  = application.dsMenuList.getColumn(iRow, 'UPXX_NAME');
        	var sUserAuth  = application.dsMenuList.getColumn(iRow, 'USER_AUTH');
        	var sFilePath  = application.dsMenuList.getColumn(iRow, 'PROG_PATH');
        	var sAuthLevel = application.dsMenuList.getColumn(iRow, 'AUTH_LEVE');
        	var sArgument  = " sFORMCAPTION="  + this.fnc_Quote(sFormCapt + "[" + sProgID + "]");
        		sArgument += " sFORMLOCATION=" + this.fnc_Quote(sFormLoca);
        		sArgument += " sUSERAUTH=" 	   + this.fnc_Quote(sUserAuth);
        		sArgument += " sUSERLAVEL="    + this.fnc_Quote(sAuthLevel);
        	this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xml", sArgument, 1051, 834, sDisplay, -1, -1);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.imgDay.addEventHandler("onclick", this.imgDay_OnClick, this);
            this.grdTM_SCHDXM.addEventHandler("oncellclick", this.fn_SchdView, this);
            this.grd_TM_NOTIXM.addEventHandler("oncellclick", this.fn_NotiView, this);
            this.btnAllS.addEventHandler("onclick", this.Button0_OnClick, this);
            this.Button1.addEventHandler("onclick", this.Button1_OnClick, this);
            this.Div1.Button1.addEventHandler("onclick", this.Div1_Button1_OnClick, this);
            this.Div0.Button0.addEventHandler("onclick", this.Div0_Button0_OnClick, this);
            this.Div0.edtSCHD_TITL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Div0.txtSCHD_INFO.addEventHandler("onkeydown", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMC0100.xfdl");

       
    };
}
)();
