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
                this.set_name("Popup00010");
                this.set_classname("passwordChange");
                this.set_titletext("[예외]상세팝업02");
                this._setFormPosition(0,0,735,218);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static14", "absolute", "15", "78", "705", "64", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15", "78", "90", "64", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "141", "705", "33", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "15", "15", "705", "64", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", "658", "182", "62", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "593", "182", "62", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "15", "15", "90", "64", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "110", "23", "61", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("한도액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12", "absolute", "160", "23", "95", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "258", "23", "36", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("원  X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "294", "23", "35", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "332", "23", "37", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("명  X");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "720", "8", "15", "135", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "180", "528", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("해외출장자는 환율 금액 필수 입력 바랍니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "656", "174", "64", "8", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "656", "206", "64", "12", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "110", "50", "45", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("실비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "243", "50", "120", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "365", "50", "12", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "160", "50", "46", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "209", "50", "37", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("박  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "368", "23", "35", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "406", "23", "37", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("박  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "440", "23", "95", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "538", "23", "20", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "110", "86", "61", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("한도액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "242", "86", "95", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "340", "86", "63", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("원/＄  X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "392", "86", "35", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "430", "86", "37", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("명  X");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "110", "113", "45", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("실비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "243", "113", "120", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "365", "113", "12", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "160", "113", "46", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "209", "113", "37", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("박  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10", "absolute", "466", "86", "35", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "504", "86", "37", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("박  -");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11", "absolute", "598", "86", "95", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "696", "86", "20", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "160", "86", "65", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">130</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("63");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("선택1");
            obj.set_value("1");
            obj.set_index("0");

            obj = new Static("Static23", "absolute", "229", "86", "19", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "536", "86", "45", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("65");
            obj.set_value("1");
            obj.set_text("130");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static24", "absolute", "586", "86", "19", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("=");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "232", "147", "12", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "141", "90", "33", null, null, this);
            obj.set_taborder("20");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "110", "147", "120", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "23", "17", "58", "123", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">국내</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국외</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 735, 218, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("[예외]상세팝업02");

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
            this.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.btnSubmit.addEventHandler("onclick", this.fn_changePassword, this);

        };

        this.loadIncludeScript("Popup00010.xfdl");

       
    };
}
)();
