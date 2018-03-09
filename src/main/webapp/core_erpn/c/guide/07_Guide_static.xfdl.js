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
                this.set_name("Guide_static");
                this.set_classname("guide02_new");
                this.set_titletext("Static, 주석,PopupDiv");
                this._setFormPosition(0,0,990,986);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "30", "82", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("농심기획");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "230", "82", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("농심기획");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "30", "56", "62", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "230", "56", "65", "18", null, null, this);
            obj.set_taborder("59");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "425", "72", "503", "113", null, null, this);
            obj.set_taborder("71");
            obj.set_value("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v='12'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v='red'></fc><fc v='#FF00FF'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v='굴림'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v='true'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v='true'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v='true'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v='true'></s>");
            obj.set_readonly("true");
            obj.set_linespace("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "425", "48", "265", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("usedecorate =\"<b v='true'>true</b>\"");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.getSetter("class").set("sta_WF_Info_Orange");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_GID_Title");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "35", "133", "116", "21", null, null, this);
            obj.set_taborder("215");
            obj.set_text("서브타이틀(01)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "158", "133", "183", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_text("class : <b v='true'>sta_WF_Subtitle</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "35", "161", "116", "21", null, null, this);
            obj.set_taborder("222");
            obj.set_text("서브타이틀(02)");
            obj.set_cssclass("sta_WF_Subtitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "158", "161", "183", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("class : <b v='true'>sta_WF_Subtitle02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "0", "355", "528", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("도로명주소가 검색되지 않는 경우 <b v='true'><fc v='#ed6c44'>도로명주소안내시스템</b></fc>에서 확인하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Desc01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0", "336", "528", "21", null, null, this);
            obj.set_taborder("225");
            obj.set_text("지번/도로명/건물명으로 주소 검색 후 선택 주소를 클릭해 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "317", "528", "21", null, null, this);
            obj.set_taborder("226");
            obj.set_text("도로명 주소는 도로명과 건물번호로 이루어진 새로운 주소체계입니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", null, "420", "261", "20", "729", null, this);
            obj.set_taborder("227");
            obj.set_text("전화번호와 휴대폰번호 중 하나는 필수 입력");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "293", "221", "18", null, null, this);
            obj.set_taborder("231");
            obj.set_text("class : sta_WF_Desc01");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "396", "221", "18", null, null, this);
            obj.set_taborder("232");
            obj.set_text("class : sta_WF_Info");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "482", "972", "21", null, null, this);
            obj.set_taborder("233");
            obj.set_text("이월가능량 : [영 제 21조]에 의거 다음연도 배출허용총량은 해당연도의 배출허용총량 초과 불가");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "463", "972", "21", null, null, this);
            obj.set_taborder("234");
            obj.set_text("이월연도 : 다음연도(예..이행연도가 2013년이면 이월연도는 다음연도인 2014년을 의미합니다.  <fc v='#ed6c44'>class : sta_WF_Desc01</fc>");
            obj.set_cssclass("sta_WF_Desc01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "591", "972", "31", null, null, this);
            obj.set_taborder("235");
            obj.set_text("A : 사용가능 배출허용총량(사업장),  B : 전체배출허용총량(차년도),  C : 사용가능배출허용총량(전체)  <fc v='#ed6c44'>class : sta_WF_Desc02</fc>\r\n- 사용가능 배출허용총량 : 다른 총량관리사업자에게 이전할 수 있는 배출허용총량 중 당해연도 미사용 배출허용총량");
            obj.set_cssclass("sta_WF_Desc02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "556", "972", "30", null, null, this);
            obj.set_taborder("236");
            obj.set_text("이월가능량 직접계산(빈 칸에 해당되는 값을 입력하시면 공식에 맞추어 결과가 계산됩니다.) <fc v='#ed6c44'>class : sta_WF_Desc02</fc>\r\n※ 이월할 수 있는 양은 다음연도 배출허용총량이 이행연도의 배출허용총량을 초과하지 못합니다.");
            obj.set_cssclass("sta_WF_Desc02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "304", "618", "668", "10", null, null, this);
            obj.set_taborder("237");
            obj.set_text("h10");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "16", "478", "214", "8", null, null, this);
            obj.set_taborder("238");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "16", "457", "214", "10", null, null, this);
            obj.set_taborder("239");
            obj.set_text("h10");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "505", "972", "47", null, null, this);
            obj.set_taborder("240");
            obj.set_text("<b v='true'>이월가능량</b> <fc v='#ed6c44'>class : sta_WF_Desc02</fc>\r\n- 질소산화물 : 전체 총량관리 사업자의 이전 가능량 중 미사용량의 합계가 다음연도 전체 총량사업자의 배출허용총량 합계의 10% 이상이므로 이월산정식은 A X 0.1 X (B/C)\r\n- 황산화물 : 전체 총량관리 사업자의 이전 가능량 중 미사용량의 합계가 다음연도 전체 총량사업자의 배출허용총량 합계의 10% 이상이므로 이월산정식은 A X 0.1 X (B/C)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "16", "497", "214", "8", null, null, this);
            obj.set_taborder("241");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "16", "548", "214", "8", null, null, this);
            obj.set_taborder("242");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "16", "583", "214", "8", null, null, this);
            obj.set_taborder("243");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "267", "221", "18", null, null, this);
            obj.set_taborder("245");
            obj.set_text("[ 주석 ]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "618", "102", "21", null, null, this);
            obj.set_taborder("246");
            obj.set_text("h21");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "332", "198", "8", null, null, this);
            obj.set_taborder("247");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "351", "198", "8", null, null, this);
            obj.set_taborder("248");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "598", "704", "278", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "260", "39", null, null, this.popINSERT);
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("21");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSTDS_YEAR", "absolute", "98", "18", "66", "21", null, null, this.popINSERT);
            obj.set_taborder("22");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "166", "18", "63", "21", null, null, this.popINSERT);
            obj.set_taborder("23");
            obj.set_text("자료생성");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("Button0", "absolute", "207", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("24");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "568", "705", "182", "8", null, null, this);
            obj.set_taborder("250");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "568", "784", "294", "8", null, null, this);
            obj.set_taborder("251");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "599", "724", "8", "96", null, null, this);
            obj.set_taborder("252");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "867", "724", "8", "96", null, null, this);
            obj.set_taborder("253");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "598", "678", "221", "18", null, null, this);
            obj.set_taborder("254");
            obj.set_text("[ PopupDiv 가이드 ]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "77", "704", "407", "229", null, null, this);
            obj.set_taborder("255");
            obj.set_cssclass("divFile");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grdTM_ATFILE", "absolute", "15", "48", "375", "135", null, null, this.divFile);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("5");
            obj.set_binddataset("dsTM_ATFILE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"218\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"image\" style=\"cursor:hand;\" text=\"expr:PFIL_NAME == &quot;&quot; ? &quot;&quot; : &quot;theme://imagesNex/button_fileupload/fileDown.gif&quot;\"/></Band></Format></Formats>");
            this.divFile.addChild(obj.name, obj);
            obj = new Static("imgFormTitle", "absolute", "0", "0", null, "33", "0", null, this.divFile);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_cssclass("styFileTitle");
            this.divFile.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", null, "191", "62", "24", "14", null, this.divFile);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "77", "678", "221", "18", null, null, this);
            obj.set_taborder("256");
            obj.set_text("[ Div 팝업 가이드 ]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "78", "768", "15", "96", null, null, this);
            obj.set_taborder("257");
            obj.set_text("15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "468", "768", "15", "96", null, null, this);
            obj.set_taborder("258");
            obj.set_text("15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "404", "920", "64", "12", null, null, this);
            obj.set_taborder("259");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "404", "888", "64", "8", null, null, this);
            obj.set_taborder("260");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "230", "738", "64", "15", null, null, this);
            obj.set_taborder("261");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 278, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");
            		p.set_visible("true");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 407, 229, this.divFile,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("255");
            		p.set_cssclass("divFile");
            		p.set_visible("false");

            	}
            );
            this.divFile.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 990, 986, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Static, 주석,PopupDiv");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea03.addEventHandler("oneditclick", this.TextArea03_oneditclick, this);
            this.Static36.addEventHandler("onclick", this.Static46_onclick, this);
            this.Static37.addEventHandler("onclick", this.Static46_onclick, this);
            this.Static09.addEventHandler("onclick", this.Static46_onclick, this);
            this.popINSERT.medSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.Button0.addEventHandler("onclick", this.popINSERT_Button0_OnClick, this);
            this.Static22.addEventHandler("onclick", this.Static46_onclick, this);
            this.divFile.grdTM_ATFILE.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.divFile.btnCancel.addEventHandler("onclick", this.divFile_btnCancel_onclick, this);
            this.Static23.addEventHandler("onclick", this.Static46_onclick, this);

        };

        this.loadIncludeScript("07_Guide_static.xfdl");

       
    };
}
)();
