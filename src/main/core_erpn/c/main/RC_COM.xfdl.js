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
                this.set_name("RC_COM");
                this.set_scrollbars("none");
                this.set_titletext("[공통]우측 나의정보popupdiv");
                this._setFormPosition(0,0,305,784);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "305", null, null, "0", this);
            obj.set_taborder("20");
            obj.set_cssclass("sty_WF_Myinfo");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "25", "17", "38", "38", null, null, this);
            obj.set_taborder("1");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "73", "24", "207", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("홍길동과장 / 경영지원팀");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "5", "112", "34", "185", null, null, this);
            obj.set_taborder("3");
            obj.set_text("w34");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "29", "106", "248", "199", null, null, this);
            obj.set_cssclass("grd_MF_date");
            obj.set_taborder("4");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell style=\"color:#f84f4fff;\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"1\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"2\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"3\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"4\" style=\"selectbackground: ;\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"5\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"6\" style=\"color:#5e95eeff;\" text=\"1\"/><Cell row=\"1\" style=\"color:#f84f4fff;\" text=\"2\"/><Cell row=\"1\" col=\"1\" text=\"3\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_MF_link\" text=\"4\"/><Cell row=\"1\" col=\"3\" text=\"5\"/><Cell row=\"1\" col=\"4\" text=\"6\"/><Cell row=\"1\" col=\"5\" text=\"7\"/><Cell row=\"1\" col=\"6\" style=\"color:#5e95eeff;\" text=\"8\"/><Cell row=\"2\" style=\"color:#f84f4fff;\" text=\"9\"/><Cell row=\"2\" col=\"1\" text=\"10\"/><Cell row=\"2\" col=\"2\" text=\"11\"/><Cell row=\"2\" col=\"3\" text=\"12\"/><Cell row=\"2\" col=\"4\" text=\"13\"/><Cell row=\"2\" col=\"5\" text=\"14\"/><Cell row=\"2\" col=\"6\" style=\"color:#5e95eeff;\" text=\"15\"/><Cell row=\"3\" style=\"color:#f84f4fff;\" text=\"16\"/><Cell row=\"3\" col=\"1\" text=\"17\"/><Cell row=\"3\" col=\"2\" text=\"18\"/><Cell row=\"3\" col=\"3\" text=\"19\"/><Cell row=\"3\" col=\"4\" cssclass=\"Cellgrd_MF_link\" text=\"20\"/><Cell row=\"3\" col=\"5\" text=\"21\"/><Cell row=\"3\" col=\"6\" style=\"color:#5e95eeff;\" text=\"22\"/><Cell row=\"4\" style=\"color:#f84f4fff;\" text=\"23\"/><Cell row=\"4\" col=\"1\" text=\"24\"/><Cell row=\"4\" col=\"2\" text=\"25\"/><Cell row=\"4\" col=\"3\" text=\"26\"/><Cell row=\"4\" col=\"4\" text=\"27\"/><Cell row=\"4\" col=\"5\" text=\"28\"/><Cell row=\"4\" col=\"6\" style=\"color:#5e95eeff;\" text=\"29\"/><Cell row=\"5\" style=\"color:#f84f4fff;\" text=\"30\"/><Cell row=\"5\" col=\"1\" text=\"31\"/><Cell row=\"5\" col=\"2\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"3\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"4\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"5\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"6\" style=\"color:#5e95eeff;\" cssclass=\"Cellgrd_MF_noimg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "94", "68", "121", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2016 . 10");
            obj.set_cssclass("sta_MF_text6");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "84", "64", "21", "36", null, null, this);
            obj.set_taborder("6");
            obj.set_text("<");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "209", "63", "21", "36", null, null, this);
            obj.set_taborder("7");
            obj.set_text(">");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "75", "60", "151", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30", "309", "250", "54", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_mybox1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "55", "310", "80", "24", null, null, this);
            obj.set_taborder("10");
            obj.set_text("연차휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "55", "328", "97", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_text("7<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>15<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_font("antialias 18 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "174", "328", "97", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_text("3<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>5<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_font("antialias 18 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "174", "310", "80", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("정기휴가");
            obj.set_cssclass("sta_MF_text2");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "25", "570", "275", "190", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div04");
            obj.set_cssclass("divBottomArea");
            this.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "18", "0", "2", "233", null, null, this.Div04);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_line1");
            this.Div04.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", "264", "40", null, null, this.Div04);
            obj.set_taborder("18");
            obj.set_text("Div00");
            this.Div04.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "38", "38", null, null, this.Div04.Div00);
            obj.set_taborder("14");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.Div04.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47", "17", "216", "22", null, null, this.Div04.Div00);
            obj.set_taborder("15");
            obj.set_text("경조금 신청되었습니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("#5578daff");
            this.Div04.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "47", "0", "138", "22", null, null, this.Div04.Div00);
            obj.set_taborder("16");
            obj.set_text("홍길동  <fc v='#9e9e9eff'>[2016-00-00]</fc>");
            obj.set_usedecorate("true");
            this.Div04.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "0", "50", "264", "40", null, null, this.Div04);
            obj.set_taborder("19");
            obj.set_text("Div00");
            this.Div04.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "38", "38", null, null, this.Div04.Div01);
            obj.set_taborder("17");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.Div04.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47", "17", "216", "22", null, null, this.Div04.Div01);
            obj.set_taborder("18");
            obj.set_text("경조금 신청되었습니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("#5578daff");
            this.Div04.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "47", "0", "138", "22", null, null, this.Div04.Div01);
            obj.set_taborder("19");
            obj.set_text("홍길동  <fc v='#9e9e9eff'>[2016-00-00]</fc>");
            obj.set_usedecorate("true");
            this.Div04.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "100", "264", "40", null, null, this.Div04);
            obj.set_taborder("20");
            obj.set_text("Div00");
            this.Div04.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "38", "38", null, null, this.Div04.Div02);
            obj.set_taborder("20");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.Div04.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47", "17", "216", "22", null, null, this.Div04.Div02);
            obj.set_taborder("21");
            obj.set_text("경조금 신청되었습니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("#5578daff");
            this.Div04.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "47", "0", "138", "22", null, null, this.Div04.Div02);
            obj.set_taborder("22");
            obj.set_text("홍길동  <fc v='#9e9e9eff'>[2016-00-00]</fc>");
            obj.set_usedecorate("true");
            this.Div04.Div02.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0", "150", "264", "40", null, null, this.Div04);
            obj.set_taborder("21");
            obj.set_text("Div00");
            this.Div04.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "38", "38", null, null, this.Div04.Div03);
            obj.set_taborder("23");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.Div04.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47", "17", "216", "22", null, null, this.Div04.Div03);
            obj.set_taborder("24");
            obj.set_text("경조금 신청되었습니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("#5578daff");
            this.Div04.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "47", "0", "138", "22", null, null, this.Div04.Div03);
            obj.set_taborder("25");
            obj.set_text("홍길동  <fc v='#9e9e9eff'>[2016-00-00]</fc>");
            obj.set_usedecorate("true");
            this.Div04.Div03.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "0", "200", "264", "40", null, null, this.Div04);
            obj.set_taborder("22");
            obj.set_text("Div00");
            this.Div04.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "38", "38", null, null, this.Div04.Div04);
            obj.set_taborder("26");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.Div04.Div04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47", "17", "216", "22", null, null, this.Div04.Div04);
            obj.set_taborder("27");
            obj.set_text("경조금 신청되었습니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("#5578daff");
            this.Div04.Div04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "47", "0", "138", "22", null, null, this.Div04.Div04);
            obj.set_taborder("28");
            obj.set_text("홍길동  <fc v='#9e9e9eff'>[2016-00-00]</fc>");
            obj.set_usedecorate("true");
            this.Div04.Div04.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "538", "129", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("WORK알림");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 11 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "6", "378", "299", "151", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_mybox2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "21", "411", "273", "116", null, null, this);
            obj.set_cssclass("grd_MF_notice");
            obj.set_taborder("17");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"310\"/></Columns><Rows><Row size=\"27\"/><Row size=\"27\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"1\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"1\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"2\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"2\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"3\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"3\" col=\"1\" text=\"농심기획 공지사항 제목영역입니다.\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "233", "386", "54", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_text("더보기+");
            obj.set_cssclass("btn_MF_button2");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "28", "385", "97", "24", null, null, this);
            obj.set_taborder("19");
            obj.set_text("공지사항");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 11 Malgun Gothic");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 264, 40, this.Div04.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");

            	}
            );
            this.Div04.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 264, 40, this.Div04.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");

            	}
            );
            this.Div04.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 264, 40, this.Div04.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div00");

            	}
            );
            this.Div04.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 264, 40, this.Div04.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_text("Div00");

            	}
            );
            this.Div04.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 264, 40, this.Div04.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div00");

            	}
            );
            this.Div04.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 265, 240, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div04");
            		p.set_cssclass("divBottomArea");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 305, 784, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[공통]우측 나의정보popupdiv");

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
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Div04.Static29.addEventHandler("onclick", this.Div04_Static29_onclick, this);
            this.Div04.Div00.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Div04.Div01.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Div04.Div02.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Div04.Div03.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Div04.Div04.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);

        };

        this.loadIncludeScript("RC_COM.xfdl");

       
    };
}
)();
