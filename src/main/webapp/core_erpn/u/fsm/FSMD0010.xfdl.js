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
                this.set_name("FSMD0010");
                this.set_titletext("감가상각비명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_DPCTXM", this);
            obj.set_keystring("ASCL_NAME,DEPT_NAME");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"LARG_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"LARG_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_METH\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_MTNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"4\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CRNT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPTC_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"B_ACQU_BEGN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B_ACQU_GROW\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B_ACQU_DCRS\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B_ACQU_ENDX\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DPAJ_LMIT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DPAJ_AMOT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DPAJ_BEGN\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DPAJ_GROW\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DPAJ_DCRS\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DPAJ_ENDX\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"ASST_CSCD\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_DPCTXM_PRT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_MTNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"4\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRID_LEGL\" size=\"4\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT01\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_05\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_06\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_07\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_08\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_09\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_10\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_11\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_12\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_13\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_14\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_15\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_16\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_17\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_18\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_19\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_20\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_21\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_22\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_23\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_24\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_25\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_26\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_27\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_28\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_29\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_30\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_31\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_32\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_33\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_34\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_35\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_36\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_37\" type=\"BIGDECIMAL\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_DPCTXM_SUM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_MTNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"4\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRID_LEGL\" size=\"4\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMOT_RT01\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_05\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_06\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_07\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_08\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_09\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_10\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_11\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_12\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_13\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_14\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_15\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_16\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_17\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_18\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_19\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_20\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_21\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_22\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_23\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_24\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_25\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_26\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_27\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_28\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_29\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_30\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_31\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_32\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_33\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_34\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_35\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_36\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"COL_37\" type=\"BIGDECIMAL\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_DPCTXM", "absolute", "8", "132", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_DPCTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"61\"/><Column size=\"58\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"1\" rowspan=\"2\" text=\"자산비용구분\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"3\" colspan=\"3\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"상각방법\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"내용년수\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"text\" text=\"상각율\"/><Cell col=\"12\" colspan=\"4\" text=\"취득가\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"text\" text=\"당월상각액\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"text\" text=\"당기누계상각액\"/><Cell col=\"18\" colspan=\"4\" displaytype=\"text\" text=\"상각누계\"/><Cell col=\"22\" rowspan=\"2\" displaytype=\"text\" text=\"미상각잔액(A-B)\"/><Cell col=\"23\" colspan=\"3\" text=\"시부인\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"대분류\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"중분류\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"소분류\"/><Cell row=\"1\" col=\"12\" text=\"전기이월\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"15\" displaytype=\"text\" text=\"당기기말잔액(A)\"/><Cell row=\"1\" col=\"18\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"19\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"20\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"21\" displaytype=\"text\" text=\"기말잔액(B)\"/><Cell row=\"1\" col=\"23\" text=\"기초부인액\"/><Cell row=\"1\" col=\"24\" text=\"당기부인액\"/><Cell row=\"1\" col=\"25\" text=\"기말부인액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASCL_NAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:ASST_CSCD\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 2, dataset.getColumn(currow - 2, 'ASCL_NAME') + ' 총계 ')\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:LARG_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'DEPT_NAME') + ' 소계 ')\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:MIDL_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:SMAL_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\" mask=\"expr:ACQS_DATE.toString().length == 0 ? &quot;&quot; : &quot;####-##-##&quot;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_MTNM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 0, PRID_DPCT, '')\"/><Cell col=\"11\" displaytype=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 0, 'number', 'normal')\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_RATE\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 0, DPCT_RATE, '')\" mask=\"###.#\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_BEGN\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_GROW\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_DCRS\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MONT_DPCT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CRNT_DPCT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPTC_BEGN\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_GROW\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_DCRS\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ENDX\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPAJ_BEGN\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPAJ_GROW\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPAJ_ENDX\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" style=\"align:center;\" text=\"합    계\"/><Cell col=\"8\" style=\"align:center;\"/><Cell col=\"9\" style=\"align:center;\"/><Cell col=\"10\" style=\"align:center;\"/><Cell col=\"11\" style=\"align:center;\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_BEGN&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_GROW&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_DCRS&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_ENDX&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MONT_DPCT&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;CRNT_DPCT&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPTC_BEGN&quot;)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_GROW&quot;)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_DCRS&quot;)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_ENDX&quot;)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPAJ_BEGN&quot;)\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPAJ_GROW&quot;)\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPAJ_ENDX&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "111", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "470", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);
            obj = new Button("btnDepreciationSlip", "absolute", "202", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("2");
            obj.set_text("상각전표관리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnDepreciationCanc", "absolute", "101", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("감가상각취소");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnDepreciationProc", "absolute", "0", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("감가상각처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnPrint_SUM", "absolute", "303", "0", "110", "21", null, null, this.Div0);
            obj.set_taborder("3");
            obj.set_text("조정명세서출력");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQS_DATE", "absolute", "891", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "274", "71", "75", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "374", "71", "110", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "582", "71", "75", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "682", "71", "110", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "821", "71", "76", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "513", "71", "76", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "205", "71", "76", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "659", "71", "22", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "351", "71", "22", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("감가상각비명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("20");
            obj.set_text("홈 > 자산관리 > 감가상각명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("31");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "366", "92", "38", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "357", "61", "38", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "126", "216", "6", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "98", "71", "100", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 470, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");
            		p.style.set_color("#444444ff");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("감가상각비명세서");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FSMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMD0010 감가상각비 명세
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
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
        this.sBUTTONLIST = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FSMD0010";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	//this.mskSHRSTDS_YMTH.set_value(this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 6)); //상각년월
        	//this.mskSHRSTDS_YMTH.setFocus();
        	this.divSHRSTDS_YMTH.fn_SetMonth((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) ));
        	this.divSHRSTDS_YMTH.setFocus();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        
        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsFS_DPCTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_DPCTXM=dsFS_DPCTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_DPCTXM.setFocus();

        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

        	//if (this.fnc_Right(this.mskSHRSTDS_YMTH.value, 2) != "12") {
        	if (this.fnc_Right(this.divSHRSTDS_YMTH.fn_GetMonth(), 2) != "12") {

        		this.fnc_Message("TMM125", "감가상각비 조정명세서는 12월 기준으로 출력가능합니다.");
        		return;

        	}

        	if (this.dsFS_DPCTXM_PRT.getRowCount() <= 0) {

        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;

        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/";
        	application.GBL_RPTFILENAME = "fsmd0010.jrf";

        	//application.GBL_RPTARGUMENT = "sArg001," + this.mskSHRSTDS_YMTH.value + "^";
        	application.GBL_RPTARGUMENT = "sArg001," + this.divSHRSTDS_YMTH.fn_GetMonth() + "^";	
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArg002," + "농심기획" + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArg003," + "118-81-";

        	application.GBL_RPTDATASET = "dsFS_DPCTXM_PRT";

        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("감가상각명세서", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        }

        
        /*-----------------------+
         |  09-1.인쇄 버튼 클릭(총 합계전용 출력)  |
         +------------------------*/
        this.fn_btnPrint_SUM_onclick = function (obj,e) {

        	//if (this.fnc_Right(this.mskSHRSTDS_YMTH.value, 2) != "12") {
        	if (this.fnc_Right(this.divSHRSTDS_YMTH.fn_GetMonth(), 2) != "12") {

        		this.fnc_Message("TMM125", "감가상각비 조정명세서는 12월 기준으로 출력가능합니다.");
        		return;

        	}

        	if (this.dsFS_DPCTXM_SUM.getRowCount() <= 0) {

        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); 
        		return;

        	}
        	
        	this.fnc_Message("TMM125", "UB report 구현예정");
        	return;

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/";
        	application.GBL_RPTFILENAME = "fsmd0010s.jrf";

        	//application.GBL_RPTARGUMENT = "sArg001," + this.mskSHRSTDS_YMTH.value + "^";
        	application.GBL_RPTARGUMENT = "sArg001," + this.divSHRSTDS_YMTH.fn_GetMonth() + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArg002," + "농심기획" + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArg003," + "118-81-";

        	application.GBL_RPTDATASET = "dsFS_DPCTXM_SUM";

        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("감가상각명세서", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_DPCTXM", this);
        		
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
        this.fn_SearchItemCheck = function ()
        {
        	if (this.fnc_DatasetChangeCheck("dsFS_DPCTXM"))	{

        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	// fnc_IsDate는 년,월.일 비교임. 월일경우 01 추가
        	//if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {
        	if (!this.fnc_IsDate(this.divSHRSTDS_YMTH.fn_GetMonth() + "01")) {

        		return this.fnc_CheckPostAction("TMM001", "상각년/월", this.dsFS_DPCTXM, 0, this.divSHRSTDS_YMTH, "");

        	}

        	return true;
        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){
        	
        	var sQuestionText = "감가상각 취소를 하시겠습니까";		
        	return this.fnc_Message("TMM140", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		//sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value));
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " ACQS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE.value));

        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		//sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value));
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " ACQS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE.value));

        	} else if (sKind == "PROC00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		//sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value));
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " ACQS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE.value));

        	} else if (sKind == "CANC00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		//sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value));
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value));
        		sReturnString += " ACQS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE.value));

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
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"));		
        	
        		//if (this.fnc_Right(this.mskSHRSTDS_YMTH.value, 2) == "12") {
        		if (this.fnc_Right(this.divSHRSTDS_YMTH.fn_GetMonth(), 2) == "12") {

        			this.fn_Search01();

        		}

        	} else if (sMethodName == "SEARCH01") {

        		// 감가상각비 조정명세서 출력물
        		// trace(dsFS_DPCTXM_PRT.saveXML());
        		// trace(dsFS_DPCTXM_SUM.saveXML());
        	} else if (sMethodName == "PROC00") {

        		this.fnc_Information(this.stInformation, this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "감가상각 처리를 완료 하였습니다.");	
        		this.fn_Search();

        	} else if (sMethodName == "CANC00") {

        		this.fnc_Information(this.stInformation, this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "감가상각 처리를 취소 하였습니다.");	
        		this.fn_Search();

        	}

        }

        /*---------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {

                arrParam[0] = "FSM0002";                               
                arrParam[1] = "D%";                                     
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value);
                arrParam[3] = "N";                                      
                arrParam[4] = "edtSHRASCL_NAME";                        
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";        
                arrParam[6] = "0,1";                                    

                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {

                arrParam[0] = "FSM0001";                                
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value);
                arrParam[3] = "N";                                      
                arrParam[4] = "edtSHRCLSF_NAME";                         
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";         
                arrParam[6] = "10,0";

                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } 
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /*----------------+
         |  감가상각비 조정명세서 조회 처리!  |
         +-----------------*/
        this.fn_Search01 = function (){

        	this.fnc_DatasetClear("dsFS_DPCTXM_PRT,dsFS_DPCTXM_SUM");
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet  = "dsFS_DPCTXM_PRT=dsFS_DPCTXM_PRT ";
        		sOutDataSet += "dsFS_DPCTXM_SUM=dsFS_DPCTXM_SUM ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        this.fn_DepreciationProcess = function (ProcessKind){

        	var sMethodName = ProcessKind + "00";

        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_DPCTXM=dsFS_DPCTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_DPCTXM.setFocus();

        }

        /*--------------------------+
         |  감가상각 전표관리 팝업!  |
         +--------------------------*/
        this.fn_DepreciationSlip = function () {

        
        	var strName = "FSMD0010P01";
        	var strFormURL = "fsm::FSMD0010P01.xfdl";

        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";                //현재 반응 없음
        		sOpenStyle += ",height=800";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=감가상각명세서";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부	
        	
        	var objArgumentList = {

        		refform : this, // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        		//pBASEYMTH : this.fnc_Trim(this.mskSHRSTDS_YMTH.value)
        		pBASEYMTH : this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth())

        	};

        	var sResponse = this.fnc_OpenPopup(strName, strFormURL, objArgumentList, sOpenStyle);

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------------------------------------------------+
         |  감가상각처리 or 감가상각취소 or 상각전표관리 버튼 클릭 時!  |
         +--------------------------------------------------------------*/
        this.fn_Depreciation_Btn_OnClick = function (obj,e) {

        	//if (!this.fnc_IsDate(this.mskSHRSTDS_YMTH.value + "01")) {
        	if (!this.fnc_IsDate(this.divSHRSTDS_YMTH.fn_GetMonth() + "01")) {

        		return this.fnc_CheckPostAction("TMM072", "상각년/월", this.dsFS_DPCTXM, 0, this.divSHRSTDS_YMTH, "");

        	}
        	
        	if (this.fnc_Right(obj.name, 4) == "Proc" || this.fnc_Right(obj.name, 4) == "Canc")	{

        		if (this.fnc_Right(obj.name, 4) == "Canc" && !this.fn_DeleteCheck()) return;

        		this.fn_DepreciationProcess(this.fnc_ToUpper(this.fnc_Replace(obj.name, "btnDepreciation", "")));

        	} else if (this.fnc_Right(obj.name, 4) == "Slip") {

        		this.fn_DepreciationSlip();

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
            this.Div0.btnDepreciationSlip.addEventHandler("onclick", this.fn_Depreciation_Btn_OnClick, this);
            this.Div0.btnDepreciationCanc.addEventHandler("onclick", this.fn_Depreciation_Btn_OnClick, this);
            this.Div0.btnDepreciationProc.addEventHandler("onclick", this.fn_Depreciation_Btn_OnClick, this);
            this.Div0.btnPrint_SUM.addEventHandler("onclick", this.fn_btnPrint_SUM_onclick, this);
            this.calSHRACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
