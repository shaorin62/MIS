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
                this.set_name("mainContent");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1183,730);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "37", "26", "449", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "0", "138", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "170", "46", "150", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_text("한지민 대리");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "170", "77", "150", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("경영지원팀");
            obj.set_cssclass("sta_MF_text1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "170", "103", "88", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("정보수정 >");
            obj.set_cssclass("sta_MF_button1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "170", "127", "88", "24", null, null, this);
            obj.set_taborder("6");
            obj.set_text("사진변경 > ");
            obj.set_cssclass("sta_MF_button1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "26", "188", "80", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("연차휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "170", "188", "80", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("정기휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "26", "259", "217", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("※ 연차휴가 의무사용일수는 <fc v='#ff1d5c'>5일</fc>입니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text3");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "322", "81", "248", "199", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("Dataset01");
            obj.set_cssclass("grd_MF_date");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell style=\"color:#f84f4fff;\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" style=\"color:#5e95eeff;\" text=\"1\"/><Cell row=\"1\" style=\"color:#f84f4fff;\" text=\"2\"/><Cell row=\"1\" col=\"1\" text=\"3\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_MF_link\" text=\"4\"/><Cell row=\"1\" col=\"3\" text=\"5\"/><Cell row=\"1\" col=\"4\" text=\"6\"/><Cell row=\"1\" col=\"5\" text=\"7\"/><Cell row=\"1\" col=\"6\" style=\"color:#5e95eeff;\" text=\"8\"/><Cell row=\"2\" style=\"color:#f84f4fff;\" text=\"9\"/><Cell row=\"2\" col=\"1\" text=\"10\"/><Cell row=\"2\" col=\"2\" text=\"11\"/><Cell row=\"2\" col=\"3\" text=\"12\"/><Cell row=\"2\" col=\"4\" text=\"13\"/><Cell row=\"2\" col=\"5\" text=\"14\"/><Cell row=\"2\" col=\"6\" style=\"color:#5e95eeff;\" text=\"15\"/><Cell row=\"3\" style=\"color:#f84f4fff;\" text=\"16\"/><Cell row=\"3\" col=\"1\" text=\"17\"/><Cell row=\"3\" col=\"2\" text=\"18\"/><Cell row=\"3\" col=\"3\" text=\"19\"/><Cell row=\"3\" col=\"4\" cssclass=\"Cellgrd_MF_link\" text=\"20\"/><Cell row=\"3\" col=\"5\" text=\"21\"/><Cell row=\"3\" col=\"6\" style=\"color:#5e95eeff;\" text=\"22\"/><Cell row=\"4\" style=\"color:#f84f4fff;\" text=\"23\"/><Cell row=\"4\" col=\"1\" text=\"24\"/><Cell row=\"4\" col=\"2\" text=\"25\"/><Cell row=\"4\" col=\"3\" text=\"26\"/><Cell row=\"4\" col=\"4\" text=\"27\"/><Cell row=\"4\" col=\"5\" text=\"28\"/><Cell row=\"4\" col=\"6\" style=\"color:#5e95eeff;\" text=\"29\"/><Cell row=\"5\" style=\"color:#f84f4fff;\" text=\"30\"/><Cell row=\"5\" col=\"1\" text=\"31\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\"/><Cell row=\"5\" col=\"4\"/><Cell row=\"5\" col=\"5\"/><Cell row=\"5\" col=\"6\" style=\"color:#5e95eeff;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "598", "83", "350", "192", null, null, this);
            obj.set_taborder("18");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_binddataset("Dataset01");
            obj.set_cssclass("grd_MF_notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"310\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" style=\"background: ;\" text=\"[아이폰/패드 사용자][iOS10]업무용APP 패치 완료 안내\"/><Cell row=\"1\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"1\" col=\"1\" text=\"농심그룹 정보보안 사고예방 및 대응방안 공지\"/><Cell row=\"2\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"2\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"3\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"3\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"4\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"4\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"5\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"5\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "385", "46", "121", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_text("2016 . 10");
            obj.set_cssclass("sta_MF_text6");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "604", "46", "105", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "987", "46", "191", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_text("2016년 실적현황(누계)");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "26", "37", "120", "120", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("img_MF_photo");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "26", "352", "140", "145", null, null, this);
            obj.set_taborder("29");
            obj.set_text("경영실적현황");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont01.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "224", "352", "140", "145", null, null, this);
            obj.set_taborder("30");
            obj.set_text("WORK알림");
            obj.set_cssclass("btn_MF_content");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont02.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "422", "352", "140", "145", null, null, this);
            obj.set_taborder("31");
            obj.set_text("임시전표");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont03.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "620", "352", "140", "145", null, null, this);
            obj.set_taborder("32");
            obj.set_text("법인카드\r\n미처리신청");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont04.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "818", "352", "140", "145", null, null, this);
            obj.set_taborder("33");
            obj.set_text("재직증명서");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont05.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "1016", "352", "140", "145", null, null, this);
            obj.set_taborder("34");
            obj.set_text("급여/상여");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont06.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1156", "236", "27", "185", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "26", "546", "140", "145", null, null, this);
            obj.set_taborder("36");
            obj.set_text("원천징수영수증");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont07.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "224", "546", "140", "145", null, null, this);
            obj.set_taborder("37");
            obj.set_text("출장신청");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont08.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "422", "546", "140", "145", null, null, this);
            obj.set_taborder("38");
            obj.set_text("경조금신청");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont09.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "620", "546", "140", "145", null, null, this);
            obj.set_taborder("39");
            obj.set_text("학자금신청");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont10.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "818", "546", "140", "145", null, null, this);
            obj.set_taborder("40");
            obj.set_text("품의서작성");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont11.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "1016", "546", "140", "145", null, null, this);
            obj.set_taborder("41");
            obj.set_text("제작의뢰서");
            obj.style.set_background("#ffffffff URL('theme://images/ico_MF_cont12.png') center middle");
            obj.set_cssclass("btn_MF_content");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "97", "497", "138", "49", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 49");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "146", "45", "25", "136", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "171", "0", "68", "55", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 55");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "26", "157", "114", "38", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 38");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "211", "207", "55", "40", null, null, this);
            obj.set_taborder("46");
            obj.set_text("5<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("center middle");
            obj.style.set_font("antialias 26 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "203", "211", "25", "40", null, null, this);
            obj.set_taborder("47");
            obj.set_text("/");
            obj.set_cssclass("sta_MF_text5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "158", "207", "55", "40", null, null, this);
            obj.set_taborder("48");
            obj.set_text("3<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "26", "207", "129", "40", null, null, this);
            obj.set_taborder("49");
            obj.set_text("7<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>15<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "253", "117", "79", "136", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w79");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "375", "42", "21", "36", null, null, this);
            obj.set_taborder("51");
            obj.set_text("<");
            obj.set_cssclass("sta_MF_button1");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "500", "41", "21", "36", null, null, this);
            obj.set_taborder("52");
            obj.set_text(">");
            obj.set_cssclass("sta_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "584", "87", "2", "185", null, null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1014", "260", "35", "24", null, null, this);
            obj.set_taborder("54");
            obj.set_text("합계");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "1063", "260", "35", "24", null, null, this);
            obj.set_taborder("55");
            obj.set_text("계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1108", "260", "45", "24", null, null, this);
            obj.set_taborder("56");
            obj.set_text("비계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "1006", "261", "150", "1", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_MF_line2");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1116", "212", "28", "50", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1018", "100", "28", "162", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1067", "132", "28", "130", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "894", "52", "54", "24", null, null, this);
            obj.set_taborder("58");
            obj.set_text("더보기+");
            obj.set_cssclass("sta_MF_button2");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "1014", "82", "35", "20", null, null, this);
            obj.set_taborder("62");
            obj.set_text("650");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "1063", "114", "35", "20", null, null, this);
            obj.set_taborder("63");
            obj.set_text("500");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "1113", "194", "35", "20", null, null, this);
            obj.set_taborder("64");
            obj.set_text("150");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "1116", "228", "28", "34", null, null, this);
            obj.set_taborder("61");
            obj.set_text("110\r\n73%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "1018", "117", "28", "145", null, null, this);
            obj.set_taborder("59");
            obj.set_text("560\r\n86%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "1067", "150", "28", "112", null, null, this);
            obj.set_taborder("60");
            obj.set_text("450\r\n90%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1183, 730, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");

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
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_BeforeWorkFrameClosing, this);
            this.addEventHandler("onclose", this.fn_WorkFrameClose, this);
            this.Static09.addEventHandler("onclick", this.Static09_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static09_onclick, this);
            this.Static18.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static32.addEventHandler("onclick", this.Static18_onclick, this);

        };

        this.loadIncludeScript("mainContent.xfdl");

       
    };
}
)();
