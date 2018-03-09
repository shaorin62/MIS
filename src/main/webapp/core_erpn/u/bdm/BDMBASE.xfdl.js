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
                this.set_name("FAME0010");
                this.set_titletext("BDMSAMPLE");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_OFFICE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_TAX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTS_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_END\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_UNITTAXNO\" type=\"STRING\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">FA05</Col><Col id=\"DSNAME\">dsOFFI_TAX</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOFFI_TAX", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResize", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ObjectID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ResizeType\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ColumnIndex\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "123", "240", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_OFFICE", "absolute", "8", "147", null, null, "8", "148", this);
            obj.set_binddataset("dsTM_OFFICE");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"107\"/><Column size=\"132\"/><Column size=\"78\"/><Column size=\"108\"/><Column size=\"100\"/><Column size=\"102\"/><Column size=\"81\"/><Column size=\"314\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"사업장명\"/><Cell col=\"3\" displaytype=\"text\" text=\"대표자\"/><Cell col=\"4\" displaytype=\"text\" text=\"업태\"/><Cell col=\"5\" displaytype=\"text\" text=\"업종\"/><Cell col=\"6\" displaytype=\"text\" text=\"법인번호\"/><Cell col=\"7\" displaytype=\"text\" text=\"우편번호\"/><Cell col=\"8\" displaytype=\"text\" text=\"주소\"/><Cell col=\"9\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"10\" displaytype=\"text\" text=\"팩스번호\"/><Cell col=\"11\" displaytype=\"text\" text=\"홈페이지\"/><Cell col=\"12\" displaytype=\"text\" text=\"관할세무서\"/><Cell col=\"13\" displaytype=\"text\" text=\"홈택스ID\"/><Cell col=\"14\" text=\"사업자단위과세승인번호\"/><Cell col=\"15\" displaytype=\"text\" text=\"회계기수\"/><Cell col=\"16\" displaytype=\"text\" text=\"시작일\"/><Cell col=\"17\" displaytype=\"text\" text=\"종료일\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BSNS_NUMB\" mask=\"###-##-#####\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:OFFI_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:OWNR_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BSNS_STAT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BSNS_TYPE\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:JURI_NUMB\" mask=\"######-#######\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:POST_NUMB\" mask=\"###-###\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:comp.parent.lookupFunc(&quot;gfn_Trim&quot;).call(ADDR_DESC) + ' ' + comp.parent.lookupFunc(&quot;gfn_Trim&quot;).call(ADDR_DETL)\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:TELE_NUMB\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FAXX_NUMB\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:OFFI_HMPG\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align: left middle;\" text=\"bind:OFFI_TAX\" combodataset=\"dsOFFI_TAX\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\" combodisplaynulltext=\"true\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: middle left;\" text=\"bind:HTS_ID\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:VAT_UNITTAXNO\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: middle left;\" text=\"bind:ESTA_DATE\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ACCT_STRT\" mask=\"####-##-##\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ACCT_END\" mask=\"####-##-##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "249", null, "85", "23", null, "112", this);
            obj.set_text("사업장명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOFFI_NAME", "absolute", "336", null, "148", "23", null, "112", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpPOST_NUMB", "absolute", "163", null, "22", "23", null, "37", this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDR_DESC", "absolute", "187", null, "297", "23", null, "37", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("60");
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stBSNS_NUMB", "absolute", "12", null, "85", "23", null, "112", this);
            obj.set_text("사업자번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNR_NAME", "absolute", "804", null, "174", "23", null, "112", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "709", null, "93", "23", null, "112", this);
            obj.set_text("대표자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "488", null, "85", "23", null, "112", this);
            obj.set_text("법인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "12", null, "85", "23", null, "87", this);
            obj.set_text("업태");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBSNS_STAT", "absolute", "99", null, "146", "23", null, "87", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBSNS_TYPE", "absolute", "336", null, "148", "23", null, "87", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "249", null, "85", "23", null, "87", this);
            obj.set_text("업종");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "12", null, "85", "23", null, "37", this);
            obj.set_text("우편번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "12", null, "85", "23", null, "62", this);
            obj.set_text("전화번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "249", null, "85", "23", null, "62", this);
            obj.set_text("팩스번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTELE_NUMB", "absolute", "99", null, "146", "23", null, "62", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFAXX_NUMB", "absolute", "336", null, "148", "23", null, "62", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medBSNS_NUMB", "absolute", "99", null, "146", "23", null, "112", this);
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_mask("###-##-#####");
            obj.set_taborder("2");
            obj.set_trimtype("both");
            obj.set_type("string");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "488", null, "85", "23", null, "87", this);
            obj.set_text("관할세무서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "488", null, "85", "23", null, "62", this);
            obj.set_text("홈페이지");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRNT_NAME", "absolute", "575", null, "131", "23", null, "62", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("alpha");
            obj.set_maxlength("40");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHTS_ID", "absolute", "804", null, "174", "23", null, "87", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "709", null, "93", "23", null, "87", this);
            obj.set_text("홈텍스ID");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "12", null, "85", "22", null, "13", this);
            obj.set_text("회계기수");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtESTA_DATE", "absolute", "99", null, "37", "23", null, "12", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("14");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCT_STRT", "absolute", "163", null, "105", "23", null, "12", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static13", "absolute", "138", null, "23", "23", null, "12", this);
            obj.set_text("기");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCT_END", "absolute", "290", null, "104", "23", null, "12", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("stACCT", "absolute", "270", null, "18", "16", null, "15", this);
            obj.set_text("~");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_GUBN", "absolute", "394", null, "6", "23", null, "12", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("14");
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDR_DETL", "absolute", "487", null, "491", "23", null, "37", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("60");
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOFFI_TAX1", "absolute", "575", null, "130", "23", null, "87", this);
            this.addChild(obj.name, obj);
            var cmbOFFI_TAX1_innerdataset = new Dataset("cmbOFFI_TAX1_innerdataset", this.cmbOFFI_TAX1);
            cmbOFFI_TAX1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row></Rows>");
            obj.set_innerdataset(cmbOFFI_TAX1_innerdataset);
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsOFFI_TAX");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");

            obj = new Static("stSUMSHOP_CD", "absolute", "488", null, "85", "23", null, "12", this);
            obj.set_text("본사거래처");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "575", null, "106", "23", null, "12", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpCUST_NAME", "absolute", "683", null, "22", "23", null, "12", this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "707", null, "271", "23", null, "12", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medJURI_NUMB", "absolute", "575", null, "130", "23", null, "112", this);
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_trimtype("both");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPOST_NUMB", "absolute", "99", null, "62", "23", null, "37", this);
            obj.set_taborder("28");
            obj.set_type("string");
            obj.set_mask("###-###");
            obj.set_trimtype("both");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "709", null, "161", "23", null, "62", this);
            obj.set_text("사업자단위과세승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHTS_ID00", "absolute", "872", null, "106", "23", null, "62", this);
            obj.set_taborder("29");
            obj.set_maxlength("7");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "8", "453", "22", null, null, this);
            obj.set_text("본사정보등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "8", "492", "22", "8", null, this);
            obj.set_text(">회계관리>사업장등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "48", "456", "25", "8", null, this);
            obj.set_taborder("23");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "0.81%", "79", null, "38", "0.81%", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "1.62%", "86", null, "22", "92.32%", null, this);
            obj.set_taborder("31");
            obj.set_text("사업장명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBSNS_NAME", "absolute", "7.88%", "86", null, "22", "70.91%", null, this);
            obj.set_taborder("32");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("BDMSAMPLE");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtOFFI_NAME_value","edtOFFI_NAME","value","dsTM_OFFICE","OFFI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtADDR_DESC_value","edtADDR_DESC","value","dsTM_OFFICE","ADDR_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNR_NAME_value","edtOWNR_NAME","value","dsTM_OFFICE","OWNR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBSNS_STAT_value","edtBSNS_STAT","value","dsTM_OFFICE","BSNS_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBSNS_TYPE_value","edtBSNS_TYPE","value","dsTM_OFFICE","BSNS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTELE_NUMB_value","edtTELE_NUMB","value","dsTM_OFFICE","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFAXX_NUMB_value","edtFAXX_NUMB","value","dsTM_OFFICE","FAXX_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBSNS_NUMB_value","medBSNS_NUMB","value","dsTM_OFFICE","BSNS_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRNT_NAME_value","edtPRNT_NAME","value","dsTM_OFFICE","OFFI_HMPG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHTS_ID_value","edtHTS_ID","value","dsTM_OFFICE","HTS_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtESTA_DATE_value","edtESTA_DATE","value","dsTM_OFFICE","ESTA_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACCT_STRT_value","calACCT_STRT","value","dsTM_OFFICE","ACCT_STRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACCT_END_value","calACCT_END","value","dsTM_OFFICE","ACCT_END");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_GUBN_value","edtACCT_GUBN","value","dsTM_OFFICE","ACCT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtADDR_DETL_value","edtADDR_DETL","value","dsTM_OFFICE","ADDR_DETL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbOFFI_TAX1_value","cmbOFFI_TAX1","value","dsTM_OFFICE","OFFI_TAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_CODE_value","edtCUST_CODE","value","dsTM_OFFICE","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtCUST_NAME","value","dsTM_OFFICE","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","medJURI_NUMB","value","dsTM_OFFICE","JURI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","medPOST_NUMB","value","dsTM_OFFICE","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtHTS_ID00","value","dsTM_OFFICE","VAT_UNITTAXNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BDMBASE.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMBASE.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        /***************************************************************************************************
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
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTTFTTTF'; //공통기능정의(버튼순으로 T or F)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = ''; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = '';
        this.sPACKAGENAME = 'erp.u.fam.e.ab.FAME0010AB'; //해당 Form에서 사용 할 Package 명

        this.sACCT_GUBN = '';

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_OFFICE=dsTM_OFFICE";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_OFFICE.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	this.dsTM_OFFICE.addRow(); //Record Add
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel("dsTM_OFFICE"); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTM_OFFICE.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_OFFICE=dsTM_OFFICE:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// fn_search();

        	this.grdTM_OFFICE.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this.name); //Export 할 화면 Call
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	// fnc_GridResizeInit(obj,"grdTM_OFFICE",true,false);

        	this.fn_Search();
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("dsTM_OFFICE", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if (e.keycode == 13) 
        	{
        		var oFocusComponent = this.getNextComponent(e.fromobject, true);
        		oFocusComponent.setFocus();
        		return;
        	}

        	// Control Key가 눌려져 있다면 단축키 처리
        	if (e.ctrlKey) 
        	{
        		this.fnc_HotKey(this, e.keycode);
        	}
        }
        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck("dsTM_OFFICE")) 
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("M1006");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_OFFICE.getRowCount(); i++) 
        	{
        		// if (fnc_ToUpper(GetRowType(dsTM_OFFICE,i)) == "NORMAL") continue;
        		if (this.fnc_ToUpper(this.dsTM_OFFICE.getRowType(this.dsTM_OFFICE, i)) != "NORMAL") 
        		{
        			// 사업자번호 체크
        			//if (!this.fnc_FormatCustNumber(this.dsTM_OFFICE.getColumn(i, "BSNS_NUMB"))) 
        			//{
        			//	this.fnc_Message("M1034", "사업자 번호"); //Message 처리
        			//	this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			//	this.medBSNS_NUMB.setFocus(); //사업자번호 항목으로 Focus
        			//	return false;
        			//}

        			// 사업장명 체크
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "OFFI_NAME"))) < 1) 
        			{
        				this.fnc_Message("M1034", "사업장명"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.edtOFFI_NAME.setFocus(); //사업자명 항목으로 Focus
        				return false;
        			}

        			// 법인번호
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "JURI_NUMB"))) < 1) 
        			{
        				this.fnc_Message("M1034", "법인번호"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.medJURI_NUMB.setFocus(); //법인번호 항목으로 Focus
        				return false;
        			}

        			// 우편번호 체크
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "POST_NUMB"))) < 1) 
        			{
        				this.fnc_Message("M1034", "우편번호"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.edtADDR_DESC.setFocus(); //우편번호 항목으로 Focus
        				return false;
        			}

        			// 관할세무서 체크
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "OFFI_TAX"))) < 1) 
        			{
        				this.fnc_Message("M1034", "관할세무서"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.cmbOFFI_TAX1.setFocus(); //관할세무서 항목으로 Focus
        				return false;
        			}
        			// 회계기수
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "ESTA_DATE"))) < 1) 
        			{
        				this.fnc_Message("M1034", "회계기수"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.edtESTA_DATE.setFocus(); //회계기수 항목으로 Focus
        				return false;
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "ACCT_STRT"))) < 8) 
        			{
        				this.fnc_Message("M1034", "회계기수 시작일"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.calACCT_STRT.setFocus(); //회계기수 항목으로 Focus
        				return false;
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "ACCT_END"))) < 8) 
        			{
        				this.fnc_Message("M1034", "회계기수 종료일"); //Message 처리
        				this.dsTM_OFFICE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.calACCT_END.setFocus(); //회계기수 항목으로 Focus
        				return false;
        			}
        		}
        	}
        	return true;
        	// Validation Check Sign Return
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " OFFI_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBSNS_NAME.value)); //사업자번호

        		// 저장 Argument 생성
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " OFFI_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBSNS_NAME.value)); //사업자번호
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsTM_OFFICE.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTM_OFFICE.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("M1008"); //fn_KeyFieldDisible(dsTM_OFFICE,0,dsTM_OFFICE.rowposition);

        		this.fn_Search();
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		trace(" GBL_CUROBJ.name : " + application.GBL_CUROBJ.name);

        		if (application.GBL_CUROBJ.name == '') 
        		{
        			// 우편번호 조회 후 처리
        			this.fnc_MultiRowDisplayPost(this);
        		}
        		else 
        		{
        			// 코드명 조회 후 처리
        			this.fnc_MultiRowDisplay(this);
        		}
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e)
        {
        	// 시작
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;

        	if (nRow == -1) 
        	{
        		return;
        	}
        	// 끝

        	if (this.fnc_ToUpper(this.dsTM_OFFICE.getRowType(obj, e.newrow)) == "INSERT") 
        	{
        		this.medBSNS_NUMB.set_enable(true);
        	}
        	else 
        	{
        		this.medBSNS_NUMB.set_enable(false);
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	switch (obj.name) 
        	{
        		case "imgHelpPOST_NUMB":
        			// 우편번호 조회

        			sSearchKind = "POST01"; //우편번호 조회 POPUP
        			sInputValue = this.fnc_Trim(this.edtADDR_DESC.value); //주소 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, "", this.edtADDR_DESC); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.medPOST_NUMB.set_value(sResponse[0]); //결과 값 Display(우편번호)
        				this.edtADDR_DESC.set_value(sResponse[1]); //결과 값 Display(주소)
        			}
        			break;
        		case "imgHelpTAXX_CODE":
        			// 세무서명 비활성일 경우 바로 리턴
        			if (this.edtTAXX_NAME.enable == false || this.dsTM_OFFICE.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "COMM1"; //부서 코드 조회 POPUP
        			sInputValue = this.fnc_Trim(this.edtTAXX_NAME.value); //검색 조건 Text
        			sCommonGubn = "86"; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtTAXX_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtTAXX_NAME.set_value(sResponse[1]); //세무서이름
        				this.edtTAXX_CODE.set_value(sResponse[0]); //세무서코드
        			}
        			break;
        		case "imgHelpCUST_NAME":
        			// 거래처

        			// 우편번호 비활성일 경우 바로 리턴
        			if (this.edtCUST_NAME.enable == false || this.dsTM_OFFICE.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "CUST01"; //거래처 조회 POPUP
        			sInputValue = this.fnc_Trim(this.edtCUST_NAME.value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtCUST_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtCUST_CODE.set_value(sResponse[0]); //거래처코드
        				this.edtCUST_NAME.set_value(sResponse[1]); //거래처명
        			}
        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
        {
        	trace("fn_CodeNameDisplay --");
        	trace("fn_CodeNameDisplay --  obj.value  " + obj.value);
        	trace("fn_CodeNameDisplay --  obj.UserData  " + obj.UserData);

        
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = this.all[obj.name]; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (obj.name) 
        	{
        		case "edtADDR_DESC":
        			// 우편 번호
        			sSearchKind = "POST01"; //우편번호 조회
        			application.GBL_REVOBJ1 = "medPOST_NUMB"; //우편번호를 받을
        			application.GBL_REVOBJ2 = "edtADDR_DESC"; //주소를 받을
        			break;
        		case "edtCUST_NAME":
        			// 우편 번호
        			sSearchKind = "CUST01"; //우편번호 조회
        			application.GBL_REVOBJ1 = "edtCUST_CODE"; //우편번호를 받을
        			application.GBL_REVOBJ2 = "edtCUST_NAME"; //주소를 받을
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn);
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, obj.binddataset, e.col);
        }

        /*---------------------------------------+
         |  회계기수일자from to의 크기비교        |
         +---------------------------------------*/
        this.calACCT_STRT_OnChanged = function (obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(e.posttext)) == 8) 
        	{
        		if (!this.fn_date_compare(this.calACCT_STRT, this.calACCT_END, this.calACCT_STRT, "회계기수의 일자[FROM]", "회계기수의 일자[TO]")) 
        		{
        			return;
        		}
        	}
        }

        this.calACCT_END_OnChanged = function (obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(e.posttext)) == 8) 
        	{
        		if (!this.fn_date_compare(this.calACCT_STRT, this.calACCT_END, this.calACCT_END, "회계기수의 일자[FROM]", "회계기수의 일자[TO]")) 
        		{
        			return;
        		}
        	}
        }

        this.fn_date_compare = function (obj1,obj2,baseobj,msgtext1,msgtext2)
        {
        	if (this.fnc_Length(this.fnc_Trim(obj1.value)) == 8 && 
        		this.fnc_Length(this.fnc_Trim(obj2.value)) == 8) 
        	{
        		if (nexacro.toNumber(obj1.value) > nexacro.toNumber(obj2.value)) 
        		{
        			this.fnc_Message("M1046", msgtext1 + "가 " + msgtext2 + "보다 클수 없습니다"); //@!!
        			baseobj.set_value("");
        			baseobj.setFocus();
        			return false;
        		}
        	}
        	return true;
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_OFFICE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTM_OFFICE.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtOFFI_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPOST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADDR_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDR_DESC.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtOWNR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBSNS_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBSNS_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTELE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtFAXX_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medBSNS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHTS_ID.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtESTA_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calACCT_STRT.addEventHandler("onchanged", this.calACCT_STRT_OnChanged, this);
            this.calACCT_STRT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calACCT_END.addEventHandler("onchanged", this.calACCT_END_OnChanged, this);
            this.calACCT_END.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDR_DETL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbOFFI_TAX1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.medJURI_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHTS_ID00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBSNS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("BDMBASE.xfdl");
        this.loadPreloadList();
       
    };
}
)();
