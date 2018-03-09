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
                this.set_name("Guide_detail");
                this.set_classname("Guide_01");
                this.set_titletext("상세(Detail)영역");
                this._setFormPosition(0,0,1187,1429);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("spSearchBox04", "absolute", "8", "695", null, "213", "25", null, this);
            obj.set_taborder("403");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("Detail Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "94", null, "39", "25", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "103", "80", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "103", "184", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "95", "30", "37", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "95", "8", "37", null, null, this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "280", "95", "40", "37", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0", "46", "8", "645", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", null, "46", "25", "645", "0", null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "561", "95", "40", "37", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "251", null, "65", "25", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "252", "30", "63", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "449", "95", "38", "8", null, null, this);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.set_text("h8");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "449", "124", "38", "8", null, null, this);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.set_text("h8");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "308", "252", "40", "63", null, null, this);
            obj.set_taborder("75");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "477", "252", "38", "8", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "617", "252", "40", "63", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox02", "absolute", "8", "379", null, "91", "25", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "380", "30", "89", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "477", "409", "102", "5", null, null, this);
            obj.set_taborder("94");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "308", "380", "40", "89", null, null, this);
            obj.set_taborder("95");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "477", "380", "38", "8", null, null, this);
            obj.set_taborder("96");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "477", "461", "38", "8", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "617", "380", "40", "89", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "477", "435", "102", "5", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", "531", null, "117", "25", null, this);
            obj.set_taborder("113");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "532", "30", "115", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "8", "71", "430", "23", null, null, this);
            obj.set_taborder("210");
            obj.set_text("1줄  [상세영역사이즈 : W 1154 * H 39 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "8", "228", "430", "23", null, null, this);
            obj.set_taborder("211");
            obj.set_text("2줄  [상세영역사이즈 : W 1154 * H 65 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "8", "356", "430", "23", null, null, this);
            obj.set_taborder("212");
            obj.set_text("3줄  [상세영역사이즈 : W 1154 * H 91 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", "508", "430", "23", null, null, this);
            obj.set_taborder("213");
            obj.set_text("4줄  [상세영역사이즈 : W 1154 * H 117 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "309", "103", "80", "21", null, null, this);
            obj.set_taborder("214");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27", "absolute", "377", "103", "184", "21", null, null, this);
            obj.set_taborder("215");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "590", "103", "80", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", "658", "103", "184", "21", null, null, this);
            obj.set_taborder("217");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "477", "307", "38", "8", null, null, this);
            obj.set_taborder("220");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "477", "281", "102", "5", null, null, this);
            obj.set_taborder("221");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "28", "260", "80", "21", null, null, this);
            obj.set_taborder("222");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT00", "absolute", "96", "260", "212", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("223");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static04", "absolute", "337", "260", "80", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "405", "260", "212", "21", null, null, this);
            obj.set_taborder("225");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "646", "260", "80", "21", null, null, this);
            obj.set_taborder("226");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "714", "260", "212", "21", null, null, this);
            obj.set_taborder("227");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "286", "80", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT01", "absolute", "96", "286", "212", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("231");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static18", "absolute", "337", "286", "80", "21", null, null, this);
            obj.set_taborder("232");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "405", "286", "212", "21", null, null, this);
            obj.set_taborder("233");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "646", "286", "80", "21", null, null, this);
            obj.set_taborder("234");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "714", "286", "212", "21", null, null, this);
            obj.set_taborder("235");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "28", "388", "80", "21", null, null, this);
            obj.set_taborder("239");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", "414", "80", "21", null, null, this);
            obj.set_taborder("240");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT03", "absolute", "96", "388", "212", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("242");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static29", "absolute", "337", "414", "80", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "337", "388", "80", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "405", "388", "212", "21", null, null, this);
            obj.set_taborder("245");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "405", "414", "212", "21", null, null, this);
            obj.set_taborder("246");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "646", "414", "80", "21", null, null, this);
            obj.set_taborder("247");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "646", "388", "80", "21", null, null, this);
            obj.set_taborder("248");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "714", "388", "212", "21", null, null, this);
            obj.set_taborder("249");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "714", "414", "212", "21", null, null, this);
            obj.set_taborder("250");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "714", "440", "212", "21", null, null, this);
            obj.set_taborder("256");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "646", "440", "80", "21", null, null, this);
            obj.set_taborder("257");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "405", "440", "212", "21", null, null, this);
            obj.set_taborder("258");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "337", "440", "80", "21", null, null, this);
            obj.set_taborder("259");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "28", "440", "80", "21", null, null, this);
            obj.set_taborder("261");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "477", "561", "102", "5", null, null, this);
            obj.set_taborder("264");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "308", "532", "40", "115", null, null, this);
            obj.set_taborder("265");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "477", "532", "38", "8", null, null, this);
            obj.set_taborder("266");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "477", "639", "38", "8", null, null, this);
            obj.set_taborder("267");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "617", "532", "40", "115", null, null, this);
            obj.set_taborder("268");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "477", "587", "102", "5", null, null, this);
            obj.set_taborder("269");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "28", "540", "80", "21", null, null, this);
            obj.set_taborder("270");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "28", "566", "80", "21", null, null, this);
            obj.set_taborder("271");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "337", "566", "80", "21", null, null, this);
            obj.set_taborder("274");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "337", "540", "80", "21", null, null, this);
            obj.set_taborder("275");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "405", "540", "212", "21", null, null, this);
            obj.set_taborder("276");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "405", "566", "212", "21", null, null, this);
            obj.set_taborder("277");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "646", "566", "80", "21", null, null, this);
            obj.set_taborder("278");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "646", "540", "80", "21", null, null, this);
            obj.set_taborder("279");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17", "absolute", "714", "540", "212", "21", null, null, this);
            obj.set_taborder("280");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", "714", "566", "212", "21", null, null, this);
            obj.set_taborder("281");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21", "absolute", "714", "592", "212", "21", null, null, this);
            obj.set_taborder("286");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "646", "592", "80", "21", null, null, this);
            obj.set_taborder("287");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22", "absolute", "405", "592", "212", "21", null, null, this);
            obj.set_taborder("288");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "337", "592", "80", "21", null, null, this);
            obj.set_taborder("289");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "28", "592", "80", "21", null, null, this);
            obj.set_taborder("291");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", "618", "80", "21", null, null, this);
            obj.set_taborder("294");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "337", "618", "80", "21", null, null, this);
            obj.set_taborder("296");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", "405", "618", "212", "21", null, null, this);
            obj.set_taborder("297");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "646", "618", "80", "21", null, null, this);
            obj.set_taborder("298");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25", "absolute", "714", "618", "212", "21", null, null, this);
            obj.set_taborder("299");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "477", "613", "102", "5", null, null, this);
            obj.set_taborder("302");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "40", "154", "178", "38", null, null, this);
            obj.set_taborder("303");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormItemCapBE</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "44", "124", "1", "31", null, null, this);
            obj.set_taborder("306");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormSearchCapBe</b>");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "353", "124", "1", "31", null, null, this);
            obj.set_taborder("307");
            obj.style.set_background("red");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormSearchCapBe</b>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "901", "133", "1", "23", null, null, this);
            obj.set_taborder("308");
            obj.style.set_background("red");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormItemBoxOut</b>");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "348", "155", "178", "38", null, null, this);
            obj.set_taborder("309");
            obj.set_text("조회라벨 class\r\n- <b v='true'>styFormItemCap</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "891", "153", "146", "38", null, null, this);
            obj.set_taborder("310");
            obj.set_text("상세영역 class\r\n- <b v='true'>styFormItemBoxOut</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "1141", "95", "20", "37", null, null, this);
            obj.set_taborder("311");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "842", "95", "40", "37", null, null, this);
            obj.set_taborder("312");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "871", "103", "80", "21", null, null, this);
            obj.set_taborder("313");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "939", "103", "202", "21", null, null, this);
            obj.set_taborder("314");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "273", "70", "127", "23", null, null, this);
            obj.set_taborder("315");
            obj.set_text("(W40, W25는 가변)");
            obj.style.set_color("#ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "96", "414", "212", "21", null, null, this);
            obj.set_taborder("316");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "96", "440", "212", "21", null, null, this);
            obj.set_taborder("317");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "96", "540", "212", "21", null, null, this);
            obj.set_taborder("318");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "96", "566", "212", "21", null, null, this);
            obj.set_taborder("319");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19", "absolute", "96", "592", "212", "21", null, null, this);
            obj.set_taborder("320");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", "96", "618", "212", "21", null, null, this);
            obj.set_taborder("321");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "567", "939", "1", "43", null, null, this);
            obj.set_taborder("361");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormSearchCapBe</b>");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "414", "942", "170", "38", null, null, this);
            obj.set_taborder("362");
            obj.set_text("class\r\n<b v='true'>styFormSearchCapBe</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "556", "977", "137", "38", null, null, this);
            obj.set_taborder("363");
            obj.set_text("class\r\n<b v='true'>styFormSubCapBe</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "155", "977", "137", "38", null, null, this);
            obj.set_taborder("364");
            obj.set_text("class\r\n<b v='true'>styFormSubCap</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "38", "942", "137", "38", null, null, this);
            obj.set_taborder("365");
            obj.set_text("class\r\n<b v='true'>styFormSearchCap</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "167", "939", "1", "43", null, null, this);
            obj.set_taborder("366");
            obj.set_text("필수 상세라벨 class\r\n- <b v='true'>styFormSearchCapBe</b>");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33", "absolute", "215", "921", "95", "21", null, null, this);
            obj.set_taborder("367");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "141", "921", "72", "21", null, null, this);
            obj.set_taborder("368");
            obj.set_text("자료수집비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "28", "921", "120", "21", null, null, this);
            obj.set_taborder("369");
            obj.set_text("해외시장개척비");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32", "absolute", "591", "921", "95", "21", null, null, this);
            obj.set_taborder("370");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "517", "921", "72", "21", null, null, this);
            obj.set_taborder("371");
            obj.set_text("자료수집비");
            obj.set_cssclass("styFormSubCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "404", "921", "120", "21", null, null, this);
            obj.set_taborder("372");
            obj.set_text("해외시장개척비");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "56", "782", "128", "5", null, null, this);
            obj.set_taborder("373");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "56", "843", "128", "5", null, null, this);
            obj.set_taborder("374");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "310", "747", "10", "33", null, null, this);
            obj.set_taborder("375");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "8", "689", "216", "6", null, null, this);
            obj.set_taborder("376");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "9", "725", "30", "131", null, null, this);
            obj.set_taborder("377");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "1141", "710", "20", "171", null, null, this);
            obj.set_taborder("378");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "141", "843", "1000", "56", null, null, this);
            obj.set_taborder("379");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "141", "782", "1000", "56", null, null, this);
            obj.set_taborder("380");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "28", "782", "120", "21", null, null, this);
            obj.set_taborder("381");
            obj.set_text("출장계획");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "28", "844", "120", "35", null, null, this);
            obj.set_taborder("382");
            obj.set_text("전도금 세부내역\r\n및 기타사항");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "320", "756", "49", "21", null, null, this);
            obj.set_taborder("383");
            obj.set_text("접대비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31", "absolute", "370", "756", "95", "21", null, null, this);
            obj.set_taborder("384");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30", "absolute", "215", "756", "95", "21", null, null, this);
            obj.set_taborder("385");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "141", "756", "72", "21", null, null, this);
            obj.set_taborder("386");
            obj.set_text("자료수집비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "28", "756", "120", "21", null, null, this);
            obj.set_taborder("387");
            obj.set_text("해외시장개척비");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29", "absolute", "868", "730", "273", "21", null, null, this);
            obj.set_taborder("388");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06", "absolute", "672", "730", "60", "21", null, null, this);
            obj.set_taborder("389");
            obj.set_text("선박");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "733", "730", "60", "21", null, null, this);
            obj.set_taborder("390");
            obj.set_text("회사차");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "807", "730", "60", "21", null, null, this);
            obj.set_taborder("391");
            obj.set_text("기타");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "612", "730", "60", "21", null, null, this);
            obj.set_taborder("392");
            obj.set_text("항공");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "538", "730", "60", "21", null, null, this);
            obj.set_taborder("393");
            obj.set_text("자가차");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "418", "730", "60", "21", null, null, this);
            obj.set_taborder("394");
            obj.set_text("철도");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "478", "730", "60", "21", null, null, this);
            obj.set_taborder("395");
            obj.set_text("버스");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "347", "726", "80", "21", null, null, this);
            obj.set_taborder("396");
            obj.set_text("교통편");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26", "absolute", "807", "704", "334", "21", null, null, this);
            obj.set_taborder("397");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "417", "704", "416", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">업무출장</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">연수출장</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업무+연수</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상사지원</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("398");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Edit("Edit23", "absolute", "141", "730", "170", "21", null, null, this);
            obj.set_taborder("399");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "28", "730", "56", "21", null, null, this);
            obj.set_taborder("400");
            obj.set_text("출장지");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "141", "704", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">국내</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국외</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">외근</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("401");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static97", "absolute", "347", "704", "107", "21", null, null, this);
            obj.set_taborder("402");
            obj.set_text("출장목적");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "674", "294", "21", null, null, this);
            obj.set_taborder("404");
            obj.set_text("여비정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "512", "1274", "454", "58", null, null, this);
            obj.set_taborder("405");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "512", "1217", "454", "58", null, null, this);
            obj.set_taborder("406");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "72", "1185", "249", "33", null, null, this);
            obj.set_taborder("407");
            obj.set_text("월매출액(높이 : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "72", "1217", "125", "33", null, null, this);
            obj.set_taborder("408");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "196", "1217", "125", "33", null, null, this);
            obj.set_taborder("409");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "72", "1184", "249", "2", null, null, this);
            obj.set_taborder("410");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "196", "1249", "125", "33", null, null, this);
            obj.set_taborder("411");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "72", "1249", "125", "33", null, null, this);
            obj.set_taborder("412");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "0", "1055", "247", "21", null, null, this);
            obj.set_taborder("413");
            obj.set_text("예외적인 테이블");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "78", "1255", "113", "21", null, null, this);
            obj.set_taborder("414");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "202", "1255", "113", "21", null, null, this);
            obj.set_taborder("415");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "512", "1185", "100", "33", null, null, this);
            obj.set_taborder("416");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "512", "1217", "100", "58", null, null, this);
            obj.set_taborder("417");
            obj.set_text("배출 및 \r\n방지시설");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "611", "1185", "355", "33", null, null, this);
            obj.set_taborder("418");
            obj.set_text("css : sta_WF_Label_CT");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "512", "1184", "454", "2", null, null, this);
            obj.set_taborder("419");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "512", "1274", "100", "58", null, null, this);
            obj.set_taborder("420");
            obj.set_text("css : \r\nsta_WF_Label");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "512", "1331", "454", "58", null, null, this);
            obj.set_taborder("421");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "512", "1331", "100", "58", null, null, this);
            obj.set_taborder("422");
            obj.set_text("전송시스템");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07", "absolute", "797", "1223", "73", "21", null, null, this);
            obj.set_taborder("423");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08", "absolute", "877", "1223", "73", "21", null, null, this);
            obj.set_taborder("424");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09", "absolute", "617", "1223", "73", "21", null, null, this);
            obj.set_taborder("425");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox10", "absolute", "709", "1223", "73", "21", null, null, this);
            obj.set_taborder("426");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox11", "absolute", "797", "1248", "73", "21", null, null, this);
            obj.set_taborder("427");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox12", "absolute", "877", "1248", "73", "21", null, null, this);
            obj.set_taborder("428");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox13", "absolute", "617", "1248", "73", "21", null, null, this);
            obj.set_taborder("429");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox14", "absolute", "709", "1248", "73", "21", null, null, this);
            obj.set_taborder("430");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox15", "absolute", "797", "1280", "73", "21", null, null, this);
            obj.set_taborder("431");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox16", "absolute", "877", "1280", "73", "21", null, null, this);
            obj.set_taborder("432");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox17", "absolute", "617", "1280", "73", "21", null, null, this);
            obj.set_taborder("433");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox18", "absolute", "709", "1280", "73", "21", null, null, this);
            obj.set_taborder("434");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox19", "absolute", "797", "1305", "73", "21", null, null, this);
            obj.set_taborder("435");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox20", "absolute", "877", "1305", "73", "21", null, null, this);
            obj.set_taborder("436");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox21", "absolute", "617", "1305", "73", "21", null, null, this);
            obj.set_taborder("437");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox22", "absolute", "709", "1305", "73", "21", null, null, this);
            obj.set_taborder("438");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox23", "absolute", "797", "1337", "73", "21", null, null, this);
            obj.set_taborder("439");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox24", "absolute", "877", "1337", "73", "21", null, null, this);
            obj.set_taborder("440");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox25", "absolute", "617", "1337", "73", "21", null, null, this);
            obj.set_taborder("441");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox26", "absolute", "709", "1337", "73", "21", null, null, this);
            obj.set_taborder("442");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox27", "absolute", "797", "1362", "73", "21", null, null, this);
            obj.set_taborder("443");
            obj.set_text("재가동");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox28", "absolute", "877", "1362", "73", "21", null, null, this);
            obj.set_taborder("444");
            obj.set_text("성능검사");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox29", "absolute", "617", "1362", "73", "21", null, null, this);
            obj.set_taborder("445");
            obj.set_text("가동중지");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox30", "absolute", "709", "1362", "73", "21", null, null, this);
            obj.set_taborder("446");
            obj.set_text("가동정지");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "311", "1192", "25", "49", null, null, this);
            obj.set_taborder("447");
            obj.style.set_border("1 solid #ff0000ff,1 solid #ff0000ff,1 solid #ff0000ff,0 solid #ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "72", "1297", "249", "33", null, null, this);
            obj.set_taborder("448");
            obj.set_text("월매출액(높이 : 33)");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "72", "1329", "125", "33", null, null, this);
            obj.set_taborder("449");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "196", "1329", "125", "33", null, null, this);
            obj.set_taborder("450");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "72", "1297", "249", "2", null, null, this);
            obj.set_taborder("451");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "196", "1361", "125", "33", null, null, this);
            obj.set_taborder("452");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "72", "1361", "125", "33", null, null, this);
            obj.set_taborder("453");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "78", "1367", "113", "21", null, null, this);
            obj.set_taborder("454");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "202", "1367", "113", "21", null, null, this);
            obj.set_taborder("455");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "344", "1195", "156", "18", null, null, this);
            obj.set_taborder("456");
            obj.set_text("class : <b v='true'>sta_WF_Label_C</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "329", "1339", "156", "18", null, null, this);
            obj.set_taborder("457");
            obj.set_text("class : <b v='true'>sta_WF_Label_C</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "329", "1307", "164", "18", null, null, this);
            obj.set_taborder("458");
            obj.set_text("class : <b v='true'>sta_WF_Label_CT</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "72", "1096", null, "33", "415", null, this);
            obj.set_taborder("459");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "72", "1096", "150", "33", null, null, this);
            obj.set_taborder("460");
            obj.set_text("라벨명(가로 : 150)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34", "absolute", "227", "1102", "190", "21", null, null, this);
            obj.set_taborder("461");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "422", "1096", "150", "33", null, null, this);
            obj.set_taborder("462");
            obj.set_text("필수라벨명");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35", "absolute", "577", "1102", "189", "21", null, null, this);
            obj.set_taborder("463");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "72", "1095", null, "2", "415", null, this);
            obj.set_taborder("464");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "818", "1082", "125", "33", null, null, this);
            obj.set_taborder("466");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "942", "1082", "125", "33", null, null, this);
            obj.set_taborder("467");
            obj.set_text("인건비(H : 33)");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "818", "1081", "249", "2", null, null, this);
            obj.set_taborder("468");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "942", "1114", "125", "33", null, null, this);
            obj.set_taborder("469");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "818", "1114", "125", "33", null, null, this);
            obj.set_taborder("470");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "824", "1120", "113", "21", null, null, this);
            obj.set_taborder("471");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "948", "1120", "113", "21", null, null, this);
            obj.set_taborder("472");
            obj.set_value("20160101");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 1429, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("상세(Detail)영역");

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
            this.cmbSHRACCT_UNIT00.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT00.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT01.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT01.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT03.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT03.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.CheckBox02.addEventHandler("onclick", this.CheckBox02_onclick, this);

        };

        this.loadIncludeScript("04_Guide_detail.xfdl");

       
    };
}
)();
