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
                this.set_name("HRMD0090");
                this.set_titletext("승진율현황(직위별)");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_PROMTN", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" type=\"STRING\"/><Column id=\"PROM_CNT1\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPO_CNT1\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_CNT1\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PROM_CNT2\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPO_CNT2\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_CNT2\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PROM_CNT3\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPO_CNT3\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_CNT3\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PROM_CNT4\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPO_CNT4\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_CNT4\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PROM_CNT5\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPO_CNT5\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_CNT5\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PERS_ALL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("승진율현황(직위별)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 승진율현황(직위별)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("조회연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_PROMTN", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsHR_PROMTN");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"grid5_copy\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" colspan=\"3\" style=\"background: ;\"/><Cell col=\"7\" colspan=\"3\" style=\"background: ;\"/><Cell col=\"10\" colspan=\"3\"/><Cell col=\"13\" colspan=\"3\"/><Cell col=\"16\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/><Cell row=\"1\" col=\"4\" text=\"대상인원\"/><Cell row=\"1\" col=\"5\" text=\"승진인원\"/><Cell row=\"1\" col=\"6\" text=\"승진율\"/><Cell row=\"1\" col=\"7\" text=\"대상인원\"/><Cell row=\"1\" col=\"8\" text=\"승진인원\"/><Cell row=\"1\" col=\"9\" text=\"승진율\"/><Cell row=\"1\" col=\"10\" text=\"대상인원\"/><Cell row=\"1\" col=\"11\" text=\"승진인원\"/><Cell row=\"1\" col=\"12\" text=\"승진율\"/><Cell row=\"1\" col=\"13\" text=\"대상인원\"/><Cell row=\"1\" col=\"14\" text=\"승진인원\"/><Cell row=\"1\" col=\"15\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT2\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT2\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT2 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT2+'%'\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT3\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT3\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT3 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT3+'%'\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT4\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT4\" editlimit=\"0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT4 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT4+'%'\" editlimit=\"0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT5\" editlimit=\"0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT5\" editlimit=\"0\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT5 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT5+'%'\" editlimit=\"0\"/><Cell col=\"16\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT2&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT2&quot;)*100)+&quot;%&quot;\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT3&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT3&quot;)/dataset.getSum(&quot;PROM_CNT3&quot;)*100)+&quot;%&quot;\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT4&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT4&quot;)/dataset.getSum(&quot;PROM_CNT4&quot;)*100)+&quot;%&quot;\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT5&quot;)\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT5&quot;)\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT5&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT5&quot;)/dataset.getSum(&quot;PROM_CNT5&quot;)*100)+&quot;%&quot;\"/><Cell col=\"16\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1+APPO_CNT1&quot;)\"/></Band></Format><Format id=\"grid0\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/></Band></Format><Format id=\"grid1\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR1\"/><Cell col=\"7\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/><Cell row=\"1\" col=\"4\" text=\"대상인원\"/><Cell row=\"1\" col=\"5\" text=\"승진인원\"/><Cell row=\"1\" col=\"6\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT2\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT2\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT2 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT2+'%'\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT2&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT2&quot;)*100)+&quot;%&quot;\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1+PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1+APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT1+PROM_CNT2&quot;)*100)+&quot;%&quot;\"/></Band></Format><Format id=\"grid2\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR1\"/><Cell col=\"7\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR2\"/><Cell col=\"10\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/><Cell row=\"1\" col=\"4\" text=\"대상인원\"/><Cell row=\"1\" col=\"5\" text=\"승진인원\"/><Cell row=\"1\" col=\"6\" text=\"승진율\"/><Cell row=\"1\" col=\"7\" text=\"대상인원\"/><Cell row=\"1\" col=\"8\" text=\"승진인원\"/><Cell row=\"1\" col=\"9\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT2\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT2\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT2 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT2+'%'\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT3\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT3\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT3 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT3+'%'\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT2&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT2&quot;)*100)+&quot;%&quot;\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT3&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT3&quot;)/dataset.getSum(&quot;PROM_CNT3&quot;)*100)+&quot;%&quot;\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1+APPO_CNT2+APPO_CNT3&quot;)/dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3&quot;)*100)+&quot;%&quot;\"/></Band></Format><Format id=\"grid3\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR1\"/><Cell col=\"7\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR2\"/><Cell col=\"10\" colspan=\"3\" text=\"expr:parent.this.sYEAR3\"/><Cell col=\"13\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/><Cell row=\"1\" col=\"4\" text=\"대상인원\"/><Cell row=\"1\" col=\"5\" text=\"승진인원\"/><Cell row=\"1\" col=\"6\" text=\"승진율\"/><Cell row=\"1\" col=\"7\" text=\"대상인원\"/><Cell row=\"1\" col=\"8\" text=\"승진인원\"/><Cell row=\"1\" col=\"9\" text=\"승진율\"/><Cell row=\"1\" col=\"10\" text=\"대상인원\"/><Cell row=\"1\" col=\"11\" text=\"승진인원\"/><Cell row=\"1\" col=\"12\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT2\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT2\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT2 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT2+'%'\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT3\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT3\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT3 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT3+'%'\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT4\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT4\" editlimit=\"0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT4 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT4+'%'\" editlimit=\"0\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT2&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT2&quot;)*100)+&quot;%&quot;\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT3&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT3&quot;)/dataset.getSum(&quot;PROM_CNT3&quot;)*100)+&quot;%&quot;\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT4&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT4&quot;)/dataset.getSum(&quot;PROM_CNT4&quot;)*100)+&quot;%&quot;\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4&quot;)/dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4&quot;)*100)+&quot;%&quot;\"/></Band></Format><Format id=\"grid4\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"1\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR0\"/><Cell col=\"4\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR1\"/><Cell col=\"7\" colspan=\"3\" style=\"background: ;\" text=\"expr:parent.this.sYEAR2\"/><Cell col=\"10\" colspan=\"3\" text=\"expr:parent.this.sYEAR3\"/><Cell col=\"13\" colspan=\"3\" text=\"expr:parent.this.sYEAR4\"/><Cell col=\"16\" rowspan=\"2\" text=\"평균승진율\"/><Cell row=\"1\" col=\"1\" text=\"대상인원\"/><Cell row=\"1\" col=\"2\" text=\"승진인원\"/><Cell row=\"1\" col=\"3\" text=\"승진율\"/><Cell row=\"1\" col=\"4\" text=\"대상인원\"/><Cell row=\"1\" col=\"5\" text=\"승진인원\"/><Cell row=\"1\" col=\"6\" text=\"승진율\"/><Cell row=\"1\" col=\"7\" text=\"대상인원\"/><Cell row=\"1\" col=\"8\" text=\"승진인원\"/><Cell row=\"1\" col=\"9\" text=\"승진율\"/><Cell row=\"1\" col=\"10\" text=\"대상인원\"/><Cell row=\"1\" col=\"11\" text=\"승진인원\"/><Cell row=\"1\" col=\"12\" text=\"승진율\"/><Cell row=\"1\" col=\"13\" text=\"대상인원\"/><Cell row=\"1\" col=\"14\" text=\"승진인원\"/><Cell row=\"1\" col=\"15\" text=\"승진율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:COMD_CDNM\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT1\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT1\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT1 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT1+'%'\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT2\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT2\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT2 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT2+'%'\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT3\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT3\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT3 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT3+'%'\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT4\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT4\" editlimit=\"0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT4 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT4+'%'\" editlimit=\"0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: ;\" text=\"bind:PROM_CNT5\" editlimit=\"0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: ;\" text=\"bind:APPO_CNT5\" editlimit=\"0\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: ;\" text=\"expr:PROM_CNT5 == &quot;0&quot; ? &quot;-&quot; : PERS_CNT5+'%'\" editlimit=\"0\"/><Cell col=\"16\" displaytype=\"number\" text=\"expr:(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(((APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5)/(PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5))*100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT1&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1&quot;)/dataset.getSum(&quot;PROM_CNT1&quot;)*100)+&quot;%&quot;\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT2&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT2&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT2&quot;)/dataset.getSum(&quot;PROM_CNT2&quot;)*100)+&quot;%&quot;\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT3&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT3&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT3&quot;)/dataset.getSum(&quot;PROM_CNT3&quot;)*100)+&quot;%&quot;\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT4&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT4&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT4&quot;)/dataset.getSum(&quot;PROM_CNT4&quot;)*100)+&quot;%&quot;\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT5&quot;)\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;APPO_CNT5&quot;)\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT5&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT5&quot;)/dataset.getSum(&quot;PROM_CNT5&quot;)*100)+&quot;%&quot;\"/><Cell col=\"16\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5&quot;) == &quot;0&quot; ? &quot;-&quot; : nexacro.round(dataset.getSum(&quot;APPO_CNT1+APPO_CNT2+APPO_CNT3+APPO_CNT4+APPO_CNT5&quot;)/dataset.getSum(&quot;PROM_CNT1+PROM_CNT2+PROM_CNT3+PROM_CNT4+PROM_CNT5&quot;)*100)+&quot;%&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "181", "72", "14", "20", null, null, this);
            obj.set_taborder("110");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("SHRPRON_STDE_FROM", "absolute", "96", "72", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_dateformat("yyyy");
            obj.set_value("null");
            obj.set_editformat("yyyy");
            obj.set_type("spin");

            obj = new Calendar("SHRPRON_STDE_TO", "absolute", "196", "72", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("113");
            obj.set_type("spin");
            obj.set_editformat("yyyy");
            obj.set_dateformat("yyyy");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("승진율현황(직위별)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMD0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMD0090.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMD0090 승진율현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.19		안윤준		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  	= "TTFFFFTF";
        this.sPACKAGENAME 	= "HRMD0090";
        this.sSEARCHCHK 	= false;

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

        this.sYEAR0 = "";
        this.sYEAR1 = "";
        this.sYEAR2 = "";
        this.sYEAR3 = "";
        this.sYEAR4 = "";
        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.SHRPRON_STDE_FROM.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.SHRPRON_STDE_TO.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsHR_PROMTN");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_PROMTN=dsHR_PROMTN";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_PROMTN.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_PROMTN", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	var sSTART_YEAR = nexacro.toNumber(this.fnc_SubStr(this.SHRPRON_STDE_FROM.value,0,4));
        	var sEND_YEAR 	= nexacro.toNumber(this.fnc_SubStr(this.SHRPRON_STDE_TO.value,0,4));
        	
        	if ( (sEND_YEAR - sSTART_YEAR) < 0 ) {
        		return this.fnc_SearchCheckPostAction("TMM028", "조회종료연도,조회시작연도", this.SHRPRON_STDE_TO);
        	}
        	
        	if ( (sEND_YEAR - sSTART_YEAR) >  4) {
        		this.alert("조회는 5년 까지 가능합니다.");
        		this.SHRPRON_STDE_TO.setFocus();
        		return;
        		
        	}
        	
        	return true;
        	
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
        		var sSTART_YEAR = nexacro.toNumber(this.fnc_SubStr(this.SHRPRON_STDE_FROM.value,0,4));
        		var sEND_YEAR 	= nexacro.toNumber(this.fnc_SubStr(this.SHRPRON_STDE_TO.value,0,4));
        		var sCal   		= sEND_YEAR-sSTART_YEAR;
        		
        		this.grdHR_PROMTN.set_formatid("grid"+sCal);
        		
        		this.sYEAR0 = "";
        		this.sYEAR1 = "";
        		this.sYEAR2 = "";
        		this.sYEAR3 = "";
        		this.sYEAR4 = "";
        		
        		for ( var i=0; i<=sCal; i++ ) {
        			if ( i == 0 ) this.sYEAR0 = sSTART_YEAR;
        			if ( i == 1 ) this.sYEAR1 = sSTART_YEAR+1;
        			if ( i == 2 ) this.sYEAR2 = sSTART_YEAR+2;
        			if ( i == 3 ) this.sYEAR3 = sSTART_YEAR+3;
        			if ( i == 4 ) this.sYEAR4 = sSTART_YEAR+4;
        		}
        		
        		sReturnString += " YEAR0=" + this.fnc_Quote(this.sYEAR0);
        		sReturnString += " YEAR1=" + this.fnc_Quote(this.sYEAR1);
        		sReturnString += " YEAR2=" + this.fnc_Quote(this.sYEAR2);
        		sReturnString += " YEAR3=" + this.fnc_Quote(this.sYEAR3);
        		sReturnString += " YEAR4=" + this.fnc_Quote(this.sYEAR4);
        		
        	}

        	return sReturnString;

        }

        /*------------------------------------+
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsHR_PROMTN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_PROMTN.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grd_headText();
        		
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {
        	
        }

        /*-----------------------+
         |  조회 후 그리드 세팅  |
         +------------------------*/
        this.grd_headText = function(){
        	if ( this.fnc_Length(this.sYEAR0) > 0 ) this.grdHR_PROMTN.setCellProperty("Head", 1, "text", this.sYEAR0+"년");
        	if ( this.fnc_Length(this.sYEAR1) > 0 ) this.grdHR_PROMTN.setCellProperty("Head", 2, "text", this.sYEAR1+"년");
        	if ( this.fnc_Length(this.sYEAR2) > 0 ) this.grdHR_PROMTN.setCellProperty("Head", 3, "text", this.sYEAR2+"년");
        	if ( this.fnc_Length(this.sYEAR3) > 0 ) this.grdHR_PROMTN.setCellProperty("Head", 4, "text", this.sYEAR3+"년");
        	if ( this.fnc_Length(this.sYEAR4) > 0 ) this.grdHR_PROMTN.setCellProperty("Head", 5, "text", this.sYEAR4+"년");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.grdHR_PROMTN.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRMD0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
