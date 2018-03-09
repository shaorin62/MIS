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
                this.set_name("FSMC0010");
                this.set_titletext("자산대장");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"LARG_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OLDX_ASST\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_METH\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SAVG_VALU\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CRNT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPTC_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" type=\"BIGDECIMAL\" size=\"17\" prop=\"default\"/><Column id=\"REUN_BALE\" type=\"BIGDECIMAL\" size=\"17\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"LARG_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OLDX_ASST\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_METH\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SAVG_VALU\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CRNT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPTC_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"DSNAME\">dsSHRASST_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRHAVE_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cmbSHRGROP_YSNO", "absolute", null, "139", "130", "21", "25", null, this);
            this.addChild(obj.name, obj);
            var cmbSHRGROP_YSNO_innerdataset = new Dataset("cmbSHRGROP_YSNO_innerdataset", this.cmbSHRGROP_YSNO);
            cmbSHRGROP_YSNO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">소계처리(X)</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">소계처리(O)</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRGROP_YSNO_innerdataset);
            obj.set_type("dropdown");
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchItem");
            obj.set_value("X");
            obj.set_text("소계처리(X)");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_tabstop("false");
            obj.set_index("0");

            obj = new Grid("grdFS_ASCHXM", "absolute", "8", "164", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASCHXM1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_formatid("dsFS_ASCHXM1");
            obj.set_selecttype("row");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"dsFS_ASCHXM1\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"185\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"2\" colspan=\"3\" text=\"품목분류\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"구 자산번호\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"자산상태\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"수량\"/><Cell col=\"11\" rowspan=\"2\" text=\"자산취득금액\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"text\" text=\"자산미상각액\"/><Cell col=\"13\" colspan=\"4\" displaytype=\"text\" text=\"취득가\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"text\" text=\"당월상각액\"/><Cell col=\"18\" rowspan=\"2\" displaytype=\"text\" text=\"당기누계상각액\"/><Cell col=\"19\" colspan=\"4\" displaytype=\"text\" text=\"충당금\"/><Cell col=\"23\" rowspan=\"2\" displaytype=\"text\" text=\"미상각잔액\"/><Cell row=\"1\" col=\"2\" text=\"대분류\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"중분류\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"소분류\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"15\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"16\" displaytype=\"text\" text=\"기말잔액\"/><Cell row=\"1\" col=\"19\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"20\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"21\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"22\" displaytype=\"text\" text=\"기말잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, 'default',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 3, dataset.getColumn(currow - 3, 'DEPT_NAME') + ' 총계 ')\" suppress=\"2\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LARG_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 2, dataset.getColumn(currow - 2, 'ASCL_NAME') + ' 소계 ')\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:MIDL_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'LARG_NAME') + ' 소계 ')\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:SMAL_NAME\" subsumtext=\" \"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" subsumtext=\" \" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"bind:OLDX_ASST\" subsumtext=\" \"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\" subsumtext=\" \"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_STAT\" subsumtext=\" \"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\" subsumtext=\" \" mask=\"expr:ACQS_DATE.toString().length == 0 ? &quot;&quot; : &quot;####-##-##&quot;\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ACQU_NUMB\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ACQU_PRIC\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REUN_BALE\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_BEGN\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_GROW\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_DCRS\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MONT_DPCT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CRNT_DPCT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPTC_BEGN\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_GROW\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_DCRS\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ENDX\"/><Cell col=\"23\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" displaytype=\"text\" style=\"align:center;\" text=\"합    계\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_NUMB&quot;, 0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_PRIC&quot;, 0)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;REUN_BALE&quot;, 0)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_BEGN&quot;, 0)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_GROW&quot;, 0)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_DCRS&quot;, 0)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_ENDX&quot;, 0)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MONT_DPCT&quot;, 0)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;CRNT_DPCT&quot;, 0)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPTC_BEGN&quot;, 0)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_GROW&quot;, 0)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_DCRS&quot;, 0)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_ENDX&quot;, 0)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;, 0)\"/></Band></Format><Format id=\"dsFS_ASCHXM2\"><Columns><Column size=\"103\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"58\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"1\" colspan=\"3\" text=\"품목분류\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"구 자산번호\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"자산상태\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"수량\"/><Cell col=\"11\" rowspan=\"2\" text=\"자산취득금액\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"text\" text=\"자산미상각액\"/><Cell col=\"13\" colspan=\"4\" displaytype=\"text\" text=\"취득가\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"text\" text=\"당월상각액\"/><Cell col=\"18\" rowspan=\"2\" displaytype=\"text\" text=\"당기누계상각액\"/><Cell col=\"19\" colspan=\"4\" displaytype=\"text\" text=\"충당금\"/><Cell col=\"23\" rowspan=\"2\" displaytype=\"text\" text=\"미상각잔액\"/><Cell row=\"1\" col=\"1\" text=\"대분류\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"중분류\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"소분류\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"15\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"16\" displaytype=\"text\" text=\"기말잔액\"/><Cell row=\"1\" col=\"19\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"20\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"21\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"22\" displaytype=\"text\" text=\"기말잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, 'default',3,'default',4,'#dbdbdbff'));align: left;\" text=\"bind:ASCL_NAME\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:LARG_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 4, dataset.getColumn(currow - 4, 'ASCL_NAME') + ' 총계 ')\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:MIDL_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 3, dataset.getColumn(currow - 3, 'LARG_NAME') + ' 소계 ')\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:SMAL_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 2, dataset.getColumn(currow - 2, 'MIDL_NAME') + ' 소계 ')\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));align: left;\" text=\"bind:DEPT_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'SMAL_NAME') + ' 소계 ')\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"bind:OLDX_ASST\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));align: left;\" text=\"bind:ASST_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ASST_STAT\" subsumtext=\" \"/><Cell col=\"9\" displaytype=\"text\" edittype=\"mask\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ACQS_DATE\" mask=\"expr:ACQS_DATE.toString().length == 0 ? &quot;&quot; : &quot;####-##-##&quot;\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ACQU_NUMB\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACQU_PRIC\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:REUN_BALE\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ACQU_BEGN\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ACQU_GROW\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ACQU_DCRS\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:MONT_DPCT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:CRNT_DPCT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:DPTC_BEGN\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:DPCT_GROW\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:DPCT_DCRS\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:DPCT_ENDX\"/><Cell col=\"23\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff',4,'#dbdbdbff'));\" text=\"bind:UNDP_BALE\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" displaytype=\"text\" style=\"align:center;\" text=\"합    계\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_NUMB&quot;, 0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_PRIC&quot;, 0)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;REUN_BALE&quot;, 0)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_BEGN&quot;, 0)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_GROW&quot;, 0)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_DCRS&quot;, 0)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_ENDX&quot;, 0)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MONT_DPCT&quot;, 0)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;CRNT_DPCT&quot;, 0)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPTC_BEGN&quot;, 0)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_GROW&quot;, 0)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_DCRS&quot;, 0)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_ENDX&quot;, 0)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;, 0)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "143", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DATE", "absolute", "401", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRHAVE_YSNO", "absolute", "597", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRORDR_BASE", "absolute", "994", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRORDR_BASE_innerdataset = new Dataset("cmbSHRORDR_BASE_innerdataset", this.cmbSHRORDR_BASE);
            cmbSHRORDR_BASE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dsFS_ASCHXM1</Col><Col id=\"datacolumn\">부서별</Col></Row><Row><Col id=\"codecolumn\">dsFS_ASCHXM2</Col><Col id=\"datacolumn\">품목별</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRORDR_BASE_innerdataset);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchItem");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("dsFS_ASCHXM1");
            obj.set_text("부서별");
            obj.set_index("0");

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "103", "71", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "103", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "208", "97", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "794", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "899", "97", "195", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "401", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "506", "97", "191", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_STAT", "absolute", "794", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("title01", "absolute", "28", "71", "83", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("고정/부외");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "336", "71", "76", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "529", "71", "68", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("보유여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "726", "71", "68", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "926", "71", "76", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("정렬기준");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "336", "97", "85", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "83", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "726", "97", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "185", "97", "21", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "483", "97", "21", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "876", "97", "21", "22", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("자산대장");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("32");
            obj.set_text("홈 > 자산관리 > 자산대장");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "661", "56", "128", "4", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("43");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "435", "118", "38", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "435", "92", "102", "5", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "415", "61", "38", "10", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "158", "216", "6", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "573", "129", "80", "35", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산대장");
            		p.set_scrollbars("none");

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
        this.addIncludeScript("FSMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSMC0010 자산대장
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSMC0010";
        this.sEARCHGUBN   = "DEPTGUBN"; //기본조회 부서별

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
         *                                         공통 Event 처리 부분                                 *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
         this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRCHNG_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.cmbSHRASST_GUBN.setFocus();

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsFS_ASCHXM1"); 
        	
        	var sInDataSet = "";
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_ASCHXM1=dsFS_ASCHXM1";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }
        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;	
        	
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /*************************************************************************************************
         *                                      공통 Function 처리 부분                                *
         *************************************************************************************************/
         /*-------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM1")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
        	}
        	
        	if (this.fnc_Trim(this.cmbSHRASST_GUBN.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "고정/부외", this.cmbSHRASST_GUBN);
        	}
        	
        	if (this.fnc_Trim(this.calSHRCHNG_DATE.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRCHNG_DATE);
        	}

        	return true;

        }

        /*--------------------+
         |  삭제 여부 체크! |
         +--------------------*/
        this.fn_DeleteCheck = function (){
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){
        	//기능없음
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); //고정/부외
        		sReturnString += " CHNG_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DATE.value)); //기준일자
        		sReturnString += " HAVE_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRHAVE_YSNO.value)); //보유여부
        		sReturnString += " ASST_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_STAT.value)); //자산상태
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
        		sReturnString += " ODER_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.sEARCHGUBN)); //정렬기준
        		
        	}
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        	    this.fnc_Information(this.stInformation, this.dsFS_ASCHXM1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	    // Copy(dsFS_ASCHXM2,dsFS_ASCHXM1); //부서별데이터셋 복사
        		this.dsFS_ASCHXM2.copyData(this.dsFS_ASCHXM1);
        		this.fnc_Message("TMM018", this.dsFS_ASCHXM1.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.cmbSHRGROP_YSNO_onchanged();
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRHAVE_YSNO,dsSHRHAVE_YSNO,1";
        			arrParam[2] = "COMBO,cmbSHRASST_STAT,dsSHRASST_STAT,0";	
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        	
        }

        /*-----------------+
         |  팝업 Setting  |
         +-----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            // 자산분류 (Popup)
            if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {

                arrParam[0] = "FSM0002";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRASCL_NAME";
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            
            // 품목분류 (Popup)
            }  else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {

                arrParam[0] = "FSM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCLSF_NAME";
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";
                arrParam[6] = "10,0";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            // 부서  (Popup)
            }  else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } 
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*------------------------------------------------+
         |  그리드 포멧 및 데이터셋 그룹키 변경 로직 |
         +------------------------------------------------*/
        this.cmbSHRORDR_BASE_onchanged = function (obj,e) {
        	
        	var chgSHRORDR = this.cmbSHRORDR_BASE.value;
        	
        	if (chgSHRORDR == "dsFS_ASCHXM2") {		
        		this.sEARCHGUBN = "ITEMGUBUN";	
        	} else {		
        		this.sEARCHGUBN = "DEPTGUBN";		
        	}

        	this.grdFS_ASCHXM.set_binddataset(this.cmbSHRORDR_BASE.value);
        	this.grdFS_ASCHXM.set_formatid(this.cmbSHRORDR_BASE.value);

        	this.fnc_GridSetting(this);
        	this.fnc_DatasetClear("dsFS_ASCHXM1,dsFS_ASCHXM2");
        	this.fnc_Information(this.stInformation, "0", "SHR");
        	
        }

        /*-------------------+
         |  소계 처리 여부 |
         +-------------------*/
        this.cmbSHRGROP_YSNO_onchanged = function (obj,e) {
        	
        	if (this.cmbSHRGROP_YSNO.value == "G") {

        		this.dsFS_ASCHXM1.set_keystring("DEPT_NAME,ASCL_NAME");
        		this.dsFS_ASCHXM2.set_keystring("ASCL_NAME,LARG_NAME");
        		this.grdFS_ASCHXM.setCellProperty("Body", 0, "suppress", 1);
        		this.grdFS_ASCHXM.setCellProperty("Body", 1, "suppress", 2);
        		this.grdFS_ASCHXM.setCellProperty("Body", 2, "suppress", 3);
        		this.grdFS_ASCHXM.setCellProperty("Body", 3, "suppress", 4);
        	
        	} else {
        		
        		this.dsFS_ASCHXM1.set_keystring("");
        		this.dsFS_ASCHXM2.set_keystring("");
        		this.grdFS_ASCHXM.setCellProperty("Body", 0, "suppress", 0);
        		this.grdFS_ASCHXM.setCellProperty("Body", 1, "suppress", 0);
        		this.grdFS_ASCHXM.setCellProperty("Body", 2, "suppress", 0);
        		this.grdFS_ASCHXM.setCellProperty("Body", 3, "suppress", 0);
        	}

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRGROP_YSNO.addEventHandler("onitemchanged", this.cmbSHRGROP_YSNO_onchanged, this);
            this.calSHRCHNG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRHAVE_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRORDR_BASE.addEventHandler("onitemchanged", this.cmbSHRORDR_BASE_onchanged, this);
            this.cmbSHRORDR_BASE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
