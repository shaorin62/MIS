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
                this.set_name("TXMC0140");
                this.set_titletext("대손세액공제(변제)신고서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTdae_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTdae_2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTbyun_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTbyun_2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT112_D", "absolute", "8", "208", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT112_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"75\"/><Column size=\"73\"/><Column size=\"62\"/><Column size=\"71\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"57\"/><Column size=\"95\"/><Column size=\"114\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\"><Cell displaytype=\"text\" text=\"대손확정(변제)\"/><Cell row=\"1\" displaytype=\"text\" text=\"연 월 일\"/></Cell><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\"><Cell displaytype=\"text\" text=\"대 손(변 제)\"/><Cell row=\"1\" displaytype=\"text\" text=\"금 액\"/></Cell><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\"><Cell displaytype=\"text\" text=\"공제율\"/><Cell row=\"1\" displaytype=\"text\" text=\"(10/110)\"/></Cell><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\"><Cell displaytype=\"text\" text=\"대 손(변 제)\"/><Cell row=\"1\" displaytype=\"text\" text=\"세 액\"/></Cell><Cell col=\"5\" colspan=\"4\" displaytype=\"text\" text=\"공 급 받 는 자\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"대 손(변 제) 사 유\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"거래처코드\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"상   호\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"성   명\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"등록번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:dataset.getRowLevel(currow)==1?'소  계':BDR_TYPECD=='1'?'대  손':'변  제'\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BDR_YMD\" mask=\"expr:dataset.getRowLevel(currow)==1?' ':'####-##-##'\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BDR_SAMT\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" expr=\"expr:dataset.getRowLevel(currow)==1?' ':'10/110'\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BDR_VAMT\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CUST_CD\" editlimit=\"15\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CUST_NM\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CUST_MASTER\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CUST_NO\" mask=\"expr:CUST_DIV == &quot;1&quot; ? &quot;###-##-#####&quot; : (CUST_DIV == &quot;2&quot; ? &quot;######-#######&quot; : &quot;&quot;)\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BDR_REMARK\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합  계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BDR_SAMT&quot;)\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BDR_VAMT&quot;)\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "8", "118", null, "65", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", "127", "110", "21", null, null, this);
            obj.set_text("상호(법인명)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "122", "127", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "153", "110", "21", null, null, this);
            obj.set_text("성명(대표자)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_MASTER", "absolute", "122", "153", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "331", "153", "110", "21", null, null, this);
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBIZ_NO", "absolute", "439", "153", "190", "21", null, null, this);
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_enable("true");
            obj.set_mask("###-##-#####");
            obj.set_taborder("6");
            obj.set_trimtype("both");
            obj.set_type("string");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2315", "absolute", "331", "127", "110", "21", null, null, this);
            obj.set_text("사업장소재지");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR", "absolute", "439", "127", "190", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "269", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("본/지점");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "90", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "442", "71", "68", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "511", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("대손세액공제(변제)신고서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("24");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>대손세액공제(변제)신고서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "183", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "187", "262", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("38");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("39");
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
            obj = new Layout("default", "", 269, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("대손세액공제(변제)신고서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsVA_VATBRANCH","BRANCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_MASTER_value","edtCORP_MASTER","value","dsVA_VATBRANCH","CORP_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCORP_NM_value","mskBIZ_NO","value","dsVA_VATBRANCH","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_ADDR_value","edtCORP_ADDR","value","dsVA_VATBRANCH","CORP_ADDR");
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
        this.addIncludeScript("TXMC0140.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0140.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0140.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0140  대손세액공제(변제)신고서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.10		안윤준		수정
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
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFTFT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TXMC0140"; //해당 Form에서 사용 할 Package 명
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH dsTA_VAT112_D=dsTA_VAT112_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (this.dsVA_VATBRANCH.rowcount < 1) {
        		this.fnc_Message("TMM125", "조회 후 저장하세요");
        		return false;
        	}

        	if (this.dsTA_VAT112_D.rowcount < 1) {
        		this.fnc_Message("TMM125", "저장 할 내역이 없습니다");
        		return false;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VAT112_D=dsTA_VAT112_D:A ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0140R01.jrf";

        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/
        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0140_SEARCH02.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT112_D1=dsTA_VAT112_D1 dsTA_VAT112_D2=dsTA_VAT112_D2 dsTA_VAT112_D3=dsTA_VAT112_D3 dsTA_VAT112_D4=dsTA_VAT112_D4 dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT112_D", this);	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT112_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        	}
        	
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
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		//this.fnc_Message("TMM018", this.dsTA_VAT112_D.rowcount); //정상 종료 메세지
        		this.fnc_Information(this.stInformation, this.dsTA_VAT112_D.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsTA_VAT112_D.set_keystring("G:BDR_TYPECD");	
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Information(this.stInformation, this.dsTA_VAT112_D.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsTA_VAT112_D.set_keystring("G:BDR_TYPECD");	
            } else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103"); //정상 종료 Message
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);
        	
        	} else if (sMethodName == "GetCommCode") {
        // 		var arrParam = new Array();
        // 			arrParam[0] = "GRID,grdTA_VAT106_D,dsCURR_CODE,EXPORT_CURRENCY_CD";
        // 		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------+
         |  처리 버튼 클릭 시 |
         +-------------------*/
        this.btn_PROC_OnClick = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH dsTA_VAT112_D=dsTA_VAT112_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------+
         |  DATASET 변경 시 |
         +-------------------*/
        // DATA가 없어서 확인 못함.
        this.dsTA_VAT112_D_oncolumnchanged = function (obj,e) {
        	
        	if (e.columnid == "CUST_NM") {
        		var sInputValue = "";
        		var sSearchKind = "";
        		var sCommonGubn = "";
        		var sResponse;
        		sSearchKind = "CUST08"; //사용자 코드 조회 POPUP
        		sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        		sInputValue = this.dsTA_VAT112_D.getColumn(e.row, "CUST_NM");
        		sResponse = this.fnc_HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.dsTA_VAT112_D.getColumn(e.row, "CUST_NM")); //Popup Open

        		if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) {
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_CD", sResponse[0]); //거래처코드
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_NM", sResponse[1]); //거래처명
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_MASTER", sResponse[2]); //성명
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_NO", sResponse[3]); //등록번호
        		}
        		
        	} else if (e.columnid == "BDR_SAMT") {
        		var BDR_VAMT = 0;
        		BDR_VAMT = nexacro.toNumber(this.dsTA_VAT112_D.getColumn(e.row, "BDR_SAMT") * 10 / 110, 0);
        		this.dsTA_VAT112_D.setColumn(e.row, "BDR_VAMT", BDR_VAMT);
        		
        	} else if (e.columnid == "bind:BDR_VAMT") {
        		var BDR_VAMT = 0;
        		BDR_SAMT = nexacro.toNumber(this.dsTA_VAT112_D.getColumn(e.row, "BDR_VAMT") * 110 / 10, 0);
        		this.dsTA_VAT112_D.setColumn(e.row, "BDR_SAMT", this.lookup("BDR_SAMT"));
        		
        	}
        	
        }

        this.grdTA_VAT112_D_OnChar = function (obj,e) {
        	if (e.cell == 6) {
        		if (e.posttext == "") {
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_CD", ""); //거래처코드
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_NM", ""); //거래처명
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_MASTER", ""); //성명
        			this.dsTA_VAT112_D.setColumn(e.row, "CUST_NO", ""); //등록번호
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT112_D.addEventHandler("oncolumnchanged", this.dsTA_VAT112_D_oncolumnchanged, this);
            this.dsTA_VAT112_D1.addEventHandler("oncolumnchanged", this.dsTA_VAT112_D_oncolumnchanged, this);
            this.dsTA_VAT112_D2.addEventHandler("oncolumnchanged", this.dsTA_VAT112_D_oncolumnchanged, this);
            this.dsTA_VAT112_D3.addEventHandler("oncolumnchanged", this.dsTA_VAT112_D_oncolumnchanged, this);
            this.dsTA_VAT112_D4.addEventHandler("oncolumnchanged", this.dsTA_VAT112_D_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_VAT112_D.addEventHandler("onchar", this.grdTA_VAT112_D_OnChar, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_MASTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0140.xfdl");
        this.loadPreloadList();
       
    };
}
)();
