﻿(function()
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
                this.set_name("TXMC0070");
                this.set_titletext("영세율매출명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT177_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"DIRECT_EXPORT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"CONSIGNMENT_EXPORT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"APPROVAL_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"CARRING_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PROCESSING_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PASSENGER_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"MULTIMODAL_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"CORPORATION_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PROCESSING_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PASSENGER_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UN_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"TOURISM_SOUVENIR\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"DIPLOMAT_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PATIENT_SERVICE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SUM_SAMTBYVAT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"CORPS_PETROLEUM\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"RAILWAY_CONSTUCTION\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"COUNTRY_INFRASTRUCTURE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"DISABLED_PERSON\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FARMER_EQUIPMENT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"TOURIST_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"JEJU_GOODS\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SPECIAL_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SUM_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"CORPS_SUPPLY\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"FISHER_EQUIPMENT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT177_H", "absolute", "8", "208", null, null, "25", "15", this);
            obj.set_selecttype("area");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT177_H");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"171\"/><Column size=\"543\"/><Column size=\"134\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align: middle;\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: middle;\" text=\"내용\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: middle;\" text=\"공 급 가 액\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"제11조제1항제1호\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"직접수출(대행수출 포함)\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:DIRECT_EXPORT\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"중계무역·위탁판매·외국인도 또는 위탁가공무역 방식의 수출\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:CONSIGNMENT_EXPORT\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"내국신용장·구매확인서에 의하여 공급하는 재화\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:APPROVAL_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"한국국제협력단 및 한국국제보건의료재단에 공급하는 해외반출용 재화\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:CARRING_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"4\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"수탁가공무역 수출용으로 공급하는 재화\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PROCESSING_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"제11조제1항제2호\"/><Cell row=\"5\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"국외에서 제공하는 용역\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:FOREIGN_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"제11조제1항제3호\"/><Cell row=\"6\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"선박·항공기에 의한 외국항행 용역\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PASSENGER_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"7\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"국제복합운송계약에 의한 외국항행용역\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:MULTIMODAL_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"8\" rowspan=\"10\" displaytype=\"text\" style=\"align: center;\" text=\"제11조제1항제4호\"/><Cell row=\"8\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"국내에서 비거주자·외국법인에게 공급되는 재화 또는 용역\"/><Cell row=\"8\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:CORPORATION_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"9\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"수출재화임가공용역\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PROCESSING_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"10\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"외국항행 선박·항공기 등에 공급하는 재화 또는 용역\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PASSENGER_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"11\" col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"국내 주재 외교공관, 영사기관, 국제연합과 이에 준하는 국제기구, 국제연합군 또는 미국군에게 \"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"공급하는 재화 또는 용역\"/></Cell><Cell row=\"11\" col=\"2\" rowspan=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:UN_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"13\" col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"[관광진흥법]에 따른 일반여행업자 또는 외국인전용 관광기념품 판매업자가 외국인관광객에게\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"공급하는 관광알선용역 또는 관광기념품\"/></Cell><Cell row=\"13\" col=\"2\" rowspan=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:TOURISM_SOUVENIR\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"15\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"외국인전용판매장 또는 주한외국군인 등의 전용 유흥음식점에서 공급하는 재화 또는 용역\"/><Cell row=\"15\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:FOREIGN_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"16\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"외교관 등에게 공급하는 재화 또는 용역\"/><Cell row=\"16\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:DIPLOMAT_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"17\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"외국인환자 유치용역\"/><Cell row=\"17\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PATIENT_SERVICE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"18\" colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"(11)부가가치세법에 따른 영세율 적용 공급실적 합계\"/><Cell row=\"18\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SUM_SAMTBYVAT\" mask=\"#,##0\"/><Cell row=\"19\" displaytype=\"text\" style=\"align: center;\" text=\"제105조제1항제1호·제2호\"/><Cell row=\"19\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"방위산업물자 및 군부대 등에 공급하는 석유류\"/><Cell row=\"19\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:CORPS_PETROLEUM\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"20\" displaytype=\"text\" style=\"align: center;\" text=\"제105조제1항제3호\"/><Cell row=\"20\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"도시철도건설용역\"/><Cell row=\"20\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RAILWAY_CONSTUCTION\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"21\" displaytype=\"text\" style=\"align: center;\" text=\"제105조제1항제3호의2\"/><Cell row=\"21\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"국가·지방자치단체에 공급하는 사회기반시설 등\"/><Cell row=\"21\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:COUNTRY_INFRASTRUCTURE\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"22\" displaytype=\"text\" style=\"align: center;\" text=\"제105조제1항제4호\"/><Cell row=\"22\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"장애인용 보장구 및 장애인용 정보통신기기 등\"/><Cell row=\"22\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:DISABLED_PERSON\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"23\" displaytype=\"text\" style=\"align: center;\" text=\"제105조제1항제5호·제6호\"/><Cell row=\"23\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"농·어민 등에게 공급하는 농업용·축산업용·임업용 또는 어업용 기자재\"/><Cell row=\"23\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:FARMER_EQUIPMENT\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"24\" displaytype=\"text\" style=\"align: center;\" text=\"제107조\"/><Cell row=\"24\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"외국인관광객 등에게 공급하는 재화\"/><Cell row=\"24\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:TOURIST_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"25\" displaytype=\"text\" style=\"align: center;\" text=\"제121조의13\"/><Cell row=\"25\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"제주특별자치도 면세품판매장에서 판매하거나 제주특별자치도 면세품 판매장에 공급하는 물품\"/><Cell row=\"25\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:JEJU_GOODS\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"26\" colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"(12)조세특례제한법 및 그 밖의 법률에 따른 영세율 적용 공급실적 합계\"/><Cell row=\"26\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SPECIAL_SAMT\" mask=\"#,##0\" editlimit=\"17\"/><Cell row=\"27\" colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"(13)영세율 적용 공급실적 총 합계(11)+(12)\"/><Cell row=\"27\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SUM_SAMT\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "189", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "118", null, "65", "25", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_LINE", "absolute", "714", "153", "160", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "620", "153", "88", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("업   종");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "620", "127", "88", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("성명(대표자)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "153", "100", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("사업장 소재지");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_TEL", "absolute", "500", "153", "90", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR", "absolute", "127", "153", "250", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_MASTER", "absolute", "714", "127", "160", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBIZ_NO", "absolute", "127", "127", "122", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "127", "100", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "500", "127", "90", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "406", "127", "88", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("상호(법인명)");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "85", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static6", "absolute", "436", "71", "76", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "504", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static03", "absolute", "406", "153", "88", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("업   태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("영세율매출명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("57");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>영세율매출명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("58");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("68");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("69");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "183", "80", "25", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 189, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("영세율매출명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCORP_TYPENM_value","edtCORP_LINE","value","dsVA_VATBRANCH","CORP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_TEL_value","edtCORP_TEL","value","dsVA_VATBRANCH","CORP_TYPENM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_ADDR_value","edtCORP_ADDR","value","dsVA_VATBRANCH","CORP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_MASTER_value","edtCORP_MASTER","value","dsVA_VATBRANCH","CORP_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBIZ_NO_value","mskBIZ_NO","value","dsVA_VATBRANCH","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsVA_VATBRANCH","BRANCH_NM");
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
        this.addIncludeScript("TXMC0070.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0070.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0070       영세율매출명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.04		황치웅		Initial Created.
         *   2016.08.08		안윤준		수정
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFTFT"; 
        this.sPACKAGENAME = "TXMC0070";
        this.sSERVERDATE  = this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
        	}
        	
        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	// 조회 필수 입력 여부 체크
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_VAT177_H");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT177_H=dsTA_VAT177_H ";
        		
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.cmbSHRACCT_GUBN.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음..
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음..
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음..
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (this.dsTA_VAT177_H.getRowCount() <= 0) {
        		this.fnc_Message("TMM125", "조회 후 저장하세요");
        		return false;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_VAT177_H=dsTA_VAT177_H:A ";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        		
        	var reportfile = "/txm/TXMC0070R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0070_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT177_H=dsTA_VAT177_H dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT177_H", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        
        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도",this.calSHRVAT_YYYY);
        	}
        	
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
        		
        	}
        	
        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Message("TMM018", this.dsTA_VAT177_H.rowcount);
        		this.grdTA_VAT177_H.setFocus();
        		
        	} else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "PROC00") {
        		if ( this.dsTA_VAT177_H.getRowCount() == 0 ) {
        			var iRow = this.dsTA_VAT177_H.addRow();
        			this.dsTA_VAT177_H.setColumn(iRow, "BRANCH_CD" 		, this.cmbSHRACCT_GUBN.value);
        			this.dsTA_VAT177_H.setColumn(iRow, "VAT_YYYY"		, this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4));
        			this.dsTA_VAT177_H.setColumn(iRow, "VAT_QUARTER"	, this.cmbVAT_QUARTER.value);
        		}
        		this.grdTA_VAT177_H.setFocus();
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);

        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.dsTA_VAT177_H_OnColumnChanged = function (obj,e) {

        	var SUM_SAMTBYVAT   = 0;
        	var SPECIAL_SAMT 	= 0;
        	var SUM_SAMT 		= 0;
        	
        	if (e.columnid != "SUM_SAMTBYVAT" && e.columnid != "SPECIAL_SAMT" && e.columnid != "SUM_SAMT") {
        		// 부가가치세법에 따른 영세율 적용 공급실적 합계
        		SUM_SAMTBYVAT = nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "DIRECT_EXPORT"), 0); //직접수출
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "CONSIGNMENT_EXPORT"), 0); //중계무역ㆍ위탁판매ㆍ외국인도 또는 위탁가공무역 방식의 수출
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "APPROVAL_GOODS"), 0); //내국신용장ㆍ구매확인서에 의하여 공급하는 재화
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "CARRING_GOODS"), 0); //한국국제협력단 및 한국국제보건의료재단에 공급하는 해외반출용 재화
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "PROCESSING_GOODS"), 0); //수탁가공무역 수출용으로 공급하는 재화
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "FOREIGN_SERVICE"), 0); //국외에서 제공하는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "PASSENGER_SERVICE"), 0); //선박ㆍ항공기에 의한 외국항행용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "MULTIMODAL_SERVICE"), 0); //국제복합운송계약에 의한 외국항행용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "CORPORATION_SERVICE"), 0); //국내에서 비거주자ㆍ외국법인에게 공급되는 재화 또는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "PROCESSING_SERVICE"), 0); //수출재화임가공용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "PASSENGER_GOODS"), 0); //외국항행 선박ㆍ항공기 등에 공급하는 재화 또는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "UN_GOODS"), 0); //국내 주재 외교공관, 영사기관, 국제연합과 이에 준하는 국제기구, 국제연합군 또는 미국군에게 공급하는 재화 또는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "TOURISM_SOUVENIR"), 0); //관광진흥법에 따른 일반여행업자 또는 외국인전용 관광기념품 판매업자가 외국인관광객에게 공급하는 관광알선용역 또는 관광기념품
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "FOREIGN_GOODS"), 0); //외국인전용판매장 또는 주한외국군인 등의 전용 유흥음식점에서 공급하는 재화 또는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "DIPLOMAT_GOODS"), 0); //외교관 등에게 공급하는 재화 또는 용역
        		SUM_SAMTBYVAT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "PATIENT_SERVICE"), 0); //외국인환자 유치용역

        		// 조세특례제한법 및 그 밖의 법률에 따른 영세율 적용 공급실적 합계
        		SPECIAL_SAMT = nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "CORPS_PETROLEUM"), 0); //방위산업물자 및 군부대 등에 공급하는 석유류
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "RAILWAY_CONSTUCTION"), 0); //도시철도건설용역
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "COUNTRY_INFRASTRUCTURE"), 0); //국가ㆍ지방자치단체에 공급하는 사회기반시설 등
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "DISABLED_PERSON"), 0); //장애인용 보장구 및 장애인용 정보통신기기 등
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "FARMER_EQUIPMENT"), 0); //농ㆍ어민 등에게 공급하는 농업용ㆍ축산업용ㆍ임업용 또는 어업용 기자재
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "TOURIST_GOODS"), 0); //외국인관광객 등에게 공급하는 재화
        		SPECIAL_SAMT += nexacro.toNumber(this.dsTA_VAT177_H.getColumn(0, "JEJU_GOODS"), 0); //제주특별자치도 면세품판매장에서 판매하거나 제주특별자치도 면세품판매장에 공급하는 물품

        		// 영세율 적용 공급실적 총 합계
        		SUM_SAMT = SUM_SAMTBYVAT + SPECIAL_SAMT;

        		this.dsTA_VAT177_H.setColumn(0, "SUM_SAMTBYVAT"	, SUM_SAMTBYVAT);
        		this.dsTA_VAT177_H.setColumn(0, "SPECIAL_SAMT"	, SPECIAL_SAMT);
        		this.dsTA_VAT177_H.setColumn(0, "SUM_SAMT"		, SUM_SAMT);
        	}
        }

        /*-------------------+
         |  처리 버튼 클릭 시 |
         +------------------*/
        this.btn_PROC_OnClick = function (obj,e) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	var sInDataSet  = "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT177_H=dsTA_VAT177_H ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.cmbSHRACCT_GUBN_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT177_H.addEventHandler("oncolumnchanged", this.dsTA_VAT177_H_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.edtCORP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_TEL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_MASTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBRANCH_NM.addEventHandler("ontextchanged", this.edtBRANCH_NM_OnChanged, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onitemchanged", this.cmbSHRACCT_GUBN_onitemchanged, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
