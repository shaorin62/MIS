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
                this.set_name("Guide_component");
                this.set_classname("Guide_11");
                this.set_titletext("Component(기본, Readonly)");
                this._setFormPosition(0,0,1000,1253);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static51", "absolute", "20", "932", "964", "31", null, null, this);
            obj.set_taborder("582");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "20", "470", "964", "31", null, null, this);
            obj.set_taborder("576");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "440", "964", "31", null, null, this);
            obj.set_taborder("542");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "20", "344", "964", "73", null, null, this);
            obj.set_taborder("440");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "20", "560", "964", "31", null, null, this);
            obj.set_taborder("456");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "20", "675", "964", "31", null, null, this);
            obj.set_taborder("354");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "20", "705", "964", "31", null, null, this);
            obj.set_taborder("359");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "20", "735", "964", "31", null, null, this);
            obj.set_taborder("364");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", "20", "765", "964", "31", null, null, this);
            obj.set_taborder("369");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static164", "absolute", "20", "842", "964", "31", null, null, this);
            obj.set_taborder("379");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "20", "249", "964", "31", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "20", "219", "964", "31", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "20", "170", "964", "50", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "20", "140", "964", "31", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "110", "964", "31", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "20", "50", "964", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "20", "50", "120", "31", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "145", "55", "110", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_value("선택내용");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "509", "55", "110", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("text");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "384", "50", "120", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "80", "964", "31", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "384", "80", "120", "31", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "80", "120", "31", null, null, this);
            obj.set_taborder("16");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "145", "85", "110", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "509", "85", "110", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "110", "120", "31", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "384", "110", "120", "31", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "145", "115", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("선택1");

            obj = new Static("Static10", "absolute", "20", "140", "120", "31", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "384", "140", "120", "31", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "145", "145", "122", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Radio("Radio02", "absolute", "509", "145", "168", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">라벨0001</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">라벨0002</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Readonly");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Static("Static14", "absolute", "20", "170", "120", "50", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "674", "174", "251", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("columncount = -1 , rowcount = -1 , \r\npadding = 1 0 0 0 , textpadding = 0 12 0 6");
            obj.style.set_color("#ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "20", "219", "120", "31", null, null, this);
            obj.set_taborder("38");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "384", "219", "120", "31", null, null, this);
            obj.set_taborder("41");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "145", "224", "60", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "205", "224", "60", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "509", "224", "60", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("선택");
            obj.set_cssclass("chk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "569", "224", "60", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("선택");
            obj.set_cssclass("chk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "20", "249", "120", "31", null, null, this);
            obj.set_taborder("48");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "384", "249", "120", "31", null, null, this);
            obj.set_taborder("50");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "145", "254", "110", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02", "absolute", "509", "254", "110", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_value("0");
            obj.set_cssclass("spn_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "20", "279", "964", "66", null, null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "20", "279", "120", "66", null, null, this);
            obj.set_taborder("56");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "384", "279", "120", "66", null, null, this);
            obj.set_taborder("58");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "145", "284", "110", "56", null, null, this);
            obj.set_taborder("59");
            obj.set_value("내용들");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "509", "284", "110", "56", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("txt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_value("내용들");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "145", "680", "160", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit29", "absolute", "175", "847", "110", "21", null, null, this);
            obj.set_taborder("204");
            obj.set_value("01012341234");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "676", "50", "120", "31", null, null, this);
            obj.set_taborder("298");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "676", "80", "120", "31", null, null, this);
            obj.set_taborder("299");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "676", "110", "120", "31", null, null, this);
            obj.set_taborder("300");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "676", "140", "120", "31", null, null, this);
            obj.set_taborder("301");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio04", "absolute", "801", "145", "122", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio04_innerdataset = new Dataset("Radio04_innerdataset", this.Radio04);
            Radio04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row></Rows>");
            obj.set_innerdataset(Radio04_innerdataset);
            obj.set_taborder("302");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new MaskEdit("MaskEdit03", "absolute", "801", "85", "110", "21", null, null, this);
            obj.set_taborder("304");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23", "absolute", "801", "55", "110", "21", null, null, this);
            obj.set_taborder("305");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("text");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "20", "50", "964", "2", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "0", "0", "1000", "30", null, null, this);
            obj.set_taborder("307");
            obj.set_text("Component  :  기본/Readonly/enable=false");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "676", "279", "120", "66", null, null, this);
            obj.set_taborder("308");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "676", "249", "120", "31", null, null, this);
            obj.set_taborder("309");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "676", "219", "120", "31", null, null, this);
            obj.set_taborder("310");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06", "absolute", "801", "224", "60", "21", null, null, this);
            obj.set_taborder("311");
            obj.set_text("선택");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07", "absolute", "861", "224", "60", "21", null, null, this);
            obj.set_taborder("312");
            obj.set_text("선택");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03", "absolute", "801", "254", "110", "21", null, null, this);
            obj.set_taborder("313");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "801", "284", "110", "56", null, null, this);
            obj.set_taborder("314");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("내용들");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "145", "445", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");

            obj = new Static("Static41", "absolute", "20", "675", "120", "31", null, null, this);
            obj.set_taborder("350");
            obj.set_text("Mask(Number)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "20", "705", "120", "31", null, null, this);
            obj.set_taborder("355");
            obj.set_text("Mask(원)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "20", "735", "120", "31", null, null, this);
            obj.set_taborder("360");
            obj.set_text("Mask(%)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "20", "765", "120", "31", null, null, this);
            obj.set_taborder("365");
            obj.set_text("Mask(##.00 %)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "20", "842", "150", "31", null, null, this);
            obj.set_taborder("375");
            obj.set_text("전화번호(휴대폰)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "307", "710", "10", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15", "absolute", "145", "740", "160", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_value("80.84");
            obj.set_mask("##.##");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "307", "740", "10", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit18", "absolute", "145", "770", "160", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_value("20160101");
            obj.set_mask("##.00");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "307", "770", "10", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12", "absolute", "145", "710", "160", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "20", "872", "964", "31", null, null, this);
            obj.set_taborder("381");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "20", "872", "150", "31", null, null, this);
            obj.set_taborder("384");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "20", "902", "964", "31", null, null, this);
            obj.set_taborder("386");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "20", "962", "964", "31", null, null, this);
            obj.set_taborder("387");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "20", "902", "150", "31", null, null, this);
            obj.set_taborder("388");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "20", "962", "150", "31", null, null, this);
            obj.set_taborder("390");
            obj.set_text("Password");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "20", "992", "964", "31", null, null, this);
            obj.set_taborder("393");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "20", "992", "150", "31", null, null, this);
            obj.set_taborder("396");
            obj.set_text("Email");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "20", "1022", "964", "31", null, null, this);
            obj.set_taborder("398");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "20", "1022", "150", "31", null, null, this);
            obj.set_taborder("400");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit38", "absolute", "175", "877", "110", "21", null, null, this);
            obj.set_taborder("229");
            obj.set_value("8805071234567");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit41", "absolute", "175", "907", "110", "21", null, null, this);
            obj.set_taborder("236");
            obj.set_value("1231212345");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "175", "967", "110", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_value("afcafcafc");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "175", "997", "184", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_value("abcdefgh@naver.com");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "270", "1027", "250", "21", null, null, this);
            obj.set_taborder("260");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "522", "1027", "317", "21", null, null, this);
            obj.set_taborder("261");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit42", "absolute", "175", "1027", "70", "21", null, null, this);
            obj.set_taborder("258");
            obj.set_value("123123");
            obj.set_mask("###-###");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "145", "349", "110", "63", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">내용들</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">내용들</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">dfghfd</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">ghbfgbh</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">dfgdfgdfg</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("296");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static89", "absolute", "20", "344", "120", "73", null, null, this);
            obj.set_taborder("436");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "384", "344", "120", "73", null, null, this);
            obj.set_taborder("438");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "676", "344", "120", "73", null, null, this);
            obj.set_taborder("439");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox03", "absolute", "801", "349", "110", "63", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox03_innerdataset = new Dataset("ListBox03_innerdataset", this.ListBox03);
            ListBox03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">fdgdfgsdf</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">gdfgdfg</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">dfghfd</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">ghbfgbh</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">dfgdfgdfg</Col></Row></Rows>");
            obj.set_innerdataset(ListBox03_innerdataset);
            obj.set_taborder("442");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Combo("Combo13", "absolute", "509", "115", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo13_innerdataset = new Dataset("Combo13_innerdataset", this.Combo13);
            Combo13_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo13_innerdataset);
            obj.set_taborder("444");
            obj.set_value("1");
            obj.set_text("선택1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Combo("Combo14", "absolute", "801", "115", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo14_innerdataset = new Dataset("Combo14_innerdataset", this.Combo14);
            Combo14_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo14_innerdataset);
            obj.set_taborder("445");
            obj.set_value("1");
            obj.set_text("선택1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Combo("Combo11", "absolute", "801", "566", "110", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo11_innerdataset = new Dataset("Combo11_innerdataset", this.Combo11);
            Combo11_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2016년 1분기</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2016년 2분기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2016년 3분기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2016년 4분기</Col></Row></Rows>");
            obj.set_innerdataset(Combo11_innerdataset);
            obj.set_taborder("448");
            obj.set_value("1");
            obj.set_text("2016년 2분기");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_index("1");

            obj = new Static("Static151", "absolute", "676", "560", "120", "31", null, null, this);
            obj.set_taborder("449");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "384", "560", "120", "31", null, null, this);
            obj.set_taborder("450");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "20", "560", "120", "31", null, null, this);
            obj.set_taborder("452");
            obj.set_text("분기달력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05", "absolute", "509", "566", "110", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo05_innerdataset = new Dataset("Combo05_innerdataset", this.Combo05);
            Combo05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2016년 1분기</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2016년 2분기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2016년 3분기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2016년 4분기</Col></Row></Rows>");
            obj.set_innerdataset(Combo05_innerdataset);
            obj.set_taborder("453");
            obj.set_readonly("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new Combo("Combo03", "absolute", "145", "566", "110", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo03_innerdataset = new Dataset("Combo03_innerdataset", this.Combo03);
            Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2016년 1분기</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2016년 2분기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2016년 3분기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2016년 4분기</Col></Row></Rows>");
            obj.set_innerdataset(Combo03_innerdataset);
            obj.set_taborder("455");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static79", "absolute", "20", "590", "964", "31", null, null, this);
            obj.set_taborder("457");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "676", "590", "120", "31", null, null, this);
            obj.set_taborder("458");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "384", "590", "120", "31", null, null, this);
            obj.set_taborder("459");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "20", "590", "120", "31", null, null, this);
            obj.set_taborder("461");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo15", "absolute", "145", "596", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo15_innerdataset = new Dataset("Combo15_innerdataset", this.Combo15);
            Combo15_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2012</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2013</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2016</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">2017</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2018</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2019</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">2020</Col></Row></Rows>");
            obj.set_innerdataset(Combo15_innerdataset);
            obj.set_taborder("464");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo17", "absolute", "509", "596", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo17_innerdataset = new Dataset("Combo17_innerdataset", this.Combo17);
            Combo17_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2012</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2013</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2016</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">2017</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2018</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2019</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">2020</Col></Row></Rows>");
            obj.set_innerdataset(Combo17_innerdataset);
            obj.set_taborder("466");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");

            obj = new Combo("Combo18", "absolute", "801", "596", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo18_innerdataset = new Dataset("Combo18_innerdataset", this.Combo18);
            Combo18_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2012</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2013</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2016</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">2017</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2018</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2019</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">2020</Col></Row></Rows>");
            obj.set_innerdataset(Combo18_innerdataset);
            obj.set_taborder("467");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Static("Static100", "absolute", "20", "620", "964", "31", null, null, this);
            obj.set_taborder("468");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "20", "620", "120", "31", null, null, this);
            obj.set_taborder("472");
            obj.set_text("년(From~To)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "145", "626", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2012</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2013</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2016</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">2017</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2018</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2019</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">2020</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("473");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static101", "absolute", "227", "626", "10", "20", null, null, this);
            obj.set_taborder("475");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo10", "absolute", "238", "626", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Combo10_innerdataset = new Dataset("Combo10_innerdataset", this.Combo10);
            Combo10_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2012</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2013</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2016</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">2017</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2018</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2019</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">2020</Col></Row></Rows>");
            obj.set_innerdataset(Combo10_innerdataset);
            obj.set_taborder("476");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Calendar("Calendar06", "absolute", "801", "445", "104", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("315");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new FileUpload("FileUpload00", "absolute", "62", "1139", "266", "21", null, null, this);
            obj.set_taborder("530");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "561", "1139", "93", "21", null, null, this);
            obj.set_taborder("531");
            obj.getSetter("retry").set("0");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "1072", "498", "30", null, null, this);
            obj.set_taborder("532");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "496", "1072", null, "30", "0", null, this);
            obj.set_taborder("533");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "62", "1116", "62", "18", null, null, this);
            obj.set_taborder("534");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "62", "1174", "65", "18", null, null, this);
            obj.set_taborder("535");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "62", "1197", "266", "21", null, null, this);
            obj.set_taborder("536");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload01", "absolute", "561", "1198", "93", "21", null, null, this);
            obj.set_taborder("537");
            obj.getSetter("retry").set("0");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "561", "1119", "62", "18", null, null, this);
            obj.set_taborder("538");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "561", "1177", "65", "18", null, null, this);
            obj.set_taborder("539");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "496", "1081", "1", "169", null, null, this);
            obj.set_taborder("540");
            obj.set_text("Static08");
            obj.style.set_background("#c6c6c5ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "440", "120", "31", null, null, this);
            obj.set_taborder("541");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "384", "440", "120", "31", null, null, this);
            obj.set_taborder("543");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "676", "440", "120", "31", null, null, this);
            obj.set_taborder("544");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "20", "500", "964", "31", null, null, this);
            obj.set_taborder("545");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "20", "500", "120", "31", null, null, this);
            obj.set_taborder("546");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "384", "500", "120", "31", null, null, this);
            obj.set_taborder("547");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "676", "500", "120", "31", null, null, this);
            obj.set_taborder("548");
            obj.set_text("enable=false");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "20", "530", "964", "31", null, null, this);
            obj.set_taborder("549");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "20", "530", "120", "31", null, null, this);
            obj.set_taborder("550");
            obj.set_text("월달력(From~To)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "509", "445", "104", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("553");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");

            obj = new Static("Static29", "absolute", "20", "812", "964", "31", null, null, this);
            obj.set_taborder("557");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "20", "812", "150", "31", null, null, this);
            obj.set_taborder("559");
            obj.set_text("코드/코드명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "175", "817", "110", "21", null, null, this);
            obj.set_taborder("563");
            obj.set_value("코드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCARD_NUMB", "absolute", "175", "937", "144", "21", null, null, this);
            obj.set_taborder("566");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_VATXXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "287", "817", "21", "21", null, null, this);
            obj.set_taborder("568");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "20", "470", "120", "31", null, null, this);
            obj.set_taborder("575");
            obj.set_text("일자(From~To)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "145", "475", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("577");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "247", "475", "14", "21", null, null, this);
            obj.set_taborder("578");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "262", "475", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("579");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("Edit03", "absolute", "310", "817", "150", "21", null, null, this);
            obj.set_taborder("580");
            obj.set_value("코드명");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "20", "932", "150", "31", null, null, this);
            obj.set_taborder("581");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE00", "absolute", "247", "1027", "21", "21", null, null, this);
            obj.set_taborder("583");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "150", "184", "486", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택선택2</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택선택선택3</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택선택선택선택4</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("585");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 12 0 6");
            obj.set_value("0");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_index("0");

            obj = new Div("divCalendarMonth", "absolute", "145", "535", "283", "21", null, null, this);
            obj.set_taborder("586");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "632", "817", "52", "21", null, null, this);
            obj.set_taborder("587");
            obj.set_text("성명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "674", "817", "80", "21", null, null, this);
            obj.set_taborder("588");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE01", "absolute", "756", "817", "21", "21", null, null, this);
            obj.set_taborder("589");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "779", "817", "100", "21", null, null, this);
            obj.set_taborder("590");
            this.addChild(obj.name, obj);

            obj = new Div("divMonCal1", "absolute", "145", "505", "80", "21", null, null, this);
            obj.set_taborder("591");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 1253, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_11");
            		p.set_titletext("Component(기본, Readonly)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("medCARD_NUMB_value","medCARD_NUMB","value","dsTA_VATXXM","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.medCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE00.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE01.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("01_Guide_component.xfdl");
        this.loadPreloadList();
       
    };
}
)();
