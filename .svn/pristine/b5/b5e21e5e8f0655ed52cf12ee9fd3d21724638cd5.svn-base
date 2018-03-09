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
                this.set_name("Guide_search");
                this.set_classname("Guide_01");
                this.set_titletext("조회영역");
                this._setFormPosition(0,0,1187,681);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "8", "51", "297", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("1줄  [조회영역사이즈 : W 1154 * H 43 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "483", "138", "178", "38", null, null, this);
            obj.set_taborder("10");
            obj.set_text("필수 조회라벨 class\r\n- <b v='true'>styFormSearchCapBe</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "723", "139", "178", "38", null, null, this);
            obj.set_taborder("26");
            obj.set_text("조회라벨 class\r\n- <b v='true'>styFormSearchCap</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "78", null, "43", "25", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "89", "70", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "89", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static31", "absolute", "271", "89", "68", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "467", "89", "70", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("자금구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "536", "89", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Calendar("calSHRPROV_DATE", "absolute", "339", "89", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "711", "89", "70", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("입출구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "780", "89", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "79", "30", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "79", "8", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "242", "79", "40", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0", "30", "8", "645", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", null, "30", "25", "645", "0", null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "438", "79", "40", "41", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "682", "79", "40", "41", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "203", "297", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("2줄  [조회영역사이즈 : W 1154 * H 69 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "230", null, "69", "25", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "231", "30", "67", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "28", "241", "80", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "110", "241", "163", "21", null, null, this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "302", "241", "80", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "384", "241", "200", "21", null, null, this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "613", "241", "80", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "695", "241", "163", "21", null, null, this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "357", "79", "38", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.set_text("h10");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "357", "110", "38", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.set_text("h10");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "416", "262", "102", "5", null, null, this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.set_text("h5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "273", "231", "40", "67", null, null, this);
            obj.set_taborder("75");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "416", "231", "38", "10", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "416", "288", "38", "10", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "584", "231", "40", "67", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "267", "80", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "110", "267", "163", "21", null, null, this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "384", "267", "200", "21", null, null, this);
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "302", "267", "80", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "613", "267", "80", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "695", "267", "163", "21", null, null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "331", "297", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("3줄  [조회영역사이즈 : W 1154 * H 95 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox02", "absolute", "8", "358", null, "95", "25", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "359", "30", "67", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", "369", "80", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "110", "369", "163", "21", null, null, this);
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "302", "369", "80", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "384", "369", "200", "21", null, null, this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "613", "369", "80", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "695", "369", "163", "21", null, null, this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "416", "390", "102", "5", null, null, this);
            obj.set_taborder("94");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "273", "359", "40", "67", null, null, this);
            obj.set_taborder("95");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "416", "359", "38", "10", null, null, this);
            obj.set_taborder("96");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "416", "442", "38", "10", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "584", "359", "40", "67", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "28", "395", "80", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "110", "395", "163", "21", null, null, this);
            obj.set_taborder("100");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "384", "395", "200", "21", null, null, this);
            obj.set_taborder("101");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "302", "395", "80", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "613", "395", "80", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "695", "395", "163", "21", null, null, this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "28", "421", "80", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "110", "421", "163", "21", null, null, this);
            obj.set_taborder("106");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "302", "421", "80", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "384", "421", "200", "21", null, null, this);
            obj.set_taborder("108");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "613", "421", "80", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "695", "421", "163", "21", null, null, this);
            obj.set_taborder("110");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "416", "416", "102", "5", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "8", "483", "297", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("4줄  [조회영역사이즈 : W 1154 * H 121 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", "510", null, "121", "25", null, this);
            obj.set_taborder("113");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "511", "30", "67", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "28", "521", "80", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "110", "521", "163", "21", null, null, this);
            obj.set_taborder("116");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "302", "521", "80", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "384", "521", "200", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "613", "521", "80", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17", "absolute", "695", "521", "163", "21", null, null, this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "416", "542", "102", "5", null, null, this);
            obj.set_taborder("121");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "273", "511", "40", "67", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "416", "511", "38", "10", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "416", "620", "38", "10", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "584", "511", "40", "67", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "28", "547", "80", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", "110", "547", "163", "21", null, null, this);
            obj.set_taborder("127");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19", "absolute", "384", "547", "200", "21", null, null, this);
            obj.set_taborder("128");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "302", "547", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "613", "547", "80", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", "695", "547", "163", "21", null, null, this);
            obj.set_taborder("131");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "28", "573", "80", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21", "absolute", "110", "573", "163", "21", null, null, this);
            obj.set_taborder("133");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "302", "573", "80", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22", "absolute", "384", "573", "200", "21", null, null, this);
            obj.set_taborder("135");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "613", "573", "80", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23", "absolute", "695", "573", "163", "21", null, null, this);
            obj.set_taborder("137");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "416", "594", "102", "5", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", "599", "80", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", "110", "599", "163", "21", null, null, this);
            obj.set_taborder("140");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "302", "599", "80", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25", "absolute", "384", "599", "200", "21", null, null, this);
            obj.set_taborder("142");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "613", "599", "80", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("검색텍스트");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26", "absolute", "695", "599", "163", "21", null, null, this);
            obj.set_taborder("144");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "416", "568", "102", "5", null, null, this);
            obj.set_taborder("145");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "986", "141", "146", "38", null, null, this);
            obj.set_taborder("146");
            obj.set_text("조회영역 Static class\r\n- <b v='true'>styFormSearchBox</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "487", "108", "1", "31", null, null, this);
            obj.set_taborder("147");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "728", "108", "1", "31", null, null, this);
            obj.set_taborder("148");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "992", "121", "1", "23", null, null, this);
            obj.set_taborder("149");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 681, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("조회영역");

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
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("ontextchange", this.fn_clearData, this);

        };

        this.loadIncludeScript("03_Guide_search.xfdl");

       
    };
}
)();
