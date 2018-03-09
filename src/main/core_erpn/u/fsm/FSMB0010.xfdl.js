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
                this.set_name("FSMB0010");
                this.set_titletext("자산등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_METH\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_CYCL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"UNIT_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STRD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_STRD\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_COST\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BUYX_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MUFT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"BARX_CODE\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_CHNL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"PAST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"FCHG_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SAVG_VALU\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FCHG_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASST_CSCD\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_ASST\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_DTLX\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"CARX_NUMB\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"CARX_NAME\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"CARX_MODL\" type=\"STRING\" size=\"8\" prop=\"default\"/><Column id=\"CARX_MODLNAME\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"CARX_YEAR\" type=\"STRING\" size=\"6\" prop=\"default\"/><Column id=\"VHCL_NUMB\" type=\"STRING\" size=\"17\" prop=\"default\"/><Column id=\"CARX_FORM\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"CARX_DPCT\" type=\"STRING\" size=\"8\" prop=\"default\"/><Column id=\"SYLD_CNTX\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"FACT_CODE\" type=\"STRING\" size=\"8\" prop=\"default\"/><Column id=\"FACT_NAME\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"PFMC_CAPA\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"LAND_AREA\" type=\"BIGDECIMAL\" size=\"17\" prop=\"default\"/><Column id=\"IDLE_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"PRID_LEGL\" type=\"BIGDECIMAL\" size=\"22\" prop=\"default\"/><Column id=\"DPCT_CMPT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\" prop=\"default\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"20\" prop=\"default\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJ_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RCGN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXM2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BFDE_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BFEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASRPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RPRQ_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RPRQ_DESC\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"REPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"REPR_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REPR_VDER\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAR_DESC\" size=\"500\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_DPCTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_BEGN\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_GROW\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_DCRS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CRNT_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BRNT_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPTC_BEGN\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GROW\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_DCRS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASSPXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_ASST\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_EMNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"DSNAME\">dsSHRASST_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">DPCT_METH</Col><Col id=\"DSNAME\">dsDPCT_METH</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_CYCL</Col><Col id=\"DSNAME\">dsDPCT_CYCL</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">UNIT_CODE</Col><Col id=\"DSNAME\">dsUNIT_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_STAT</Col><Col id=\"DSNAME\">dsDPCT_STAT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"DSNAME\">dsASST_STAT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ACQU_CHNL</Col><Col id=\"DSNAME\">dsACQU_CHNL</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASST_CSCD</Col><Col id=\"DSNAME\">dsASST_CSCD</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsASCH_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDPCT_CMPT</Col><Col id=\"CODEID\">DPCT_CMPT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"CODEID\">ACCT_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDPCT_RATE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRID_DPCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOT_RT01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOT_RT02\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASSTXM_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "404", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASSTXM", "absolute", "8", "154", null, null, "25", "463", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("17");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"280\" band=\"left\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"85\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"4\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"5\" displaytype=\"text\" text=\"규격\"/><Cell col=\"6\" displaytype=\"text\" text=\"세부규격\"/><Cell col=\"7\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"8\" displaytype=\"text\" text=\"취득수량\"/><Cell col=\"9\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"10\" text=\"부가세\"/><Cell col=\"11\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"12\" displaytype=\"text\" text=\"자산상태\"/><Cell col=\"13\" text=\"상각방법\"/><Cell col=\"14\" text=\"상각기준\"/><Cell col=\"15\" displaytype=\"text\" text=\"내용년수\"/><Cell col=\"16\" text=\"세무년수\"/><Cell col=\"17\" displaytype=\"text\" text=\"상각주기\"/><Cell col=\"18\" displaytype=\"text\" text=\"구매처\"/><Cell col=\"19\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"20\" displaytype=\"text\" text=\"관리자\"/><Cell col=\"21\" text=\"전표번호\"/><Cell col=\"22\" text=\"차량번호\"/><Cell col=\"23\" text=\"차종\"/><Cell col=\"24\" text=\"차종명칭\"/><Cell col=\"25\" text=\"년식\"/><Cell col=\"26\" text=\"차대번호\"/><Cell col=\"27\" text=\"설비코드\"/><Cell col=\"28\" text=\"설비명칭\"/><Cell col=\"29\" text=\"성능및용량\"/><Cell col=\"30\" text=\"토지면적\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:comp.parent.fnc_Decode(CHK_GUBN, 1, &quot;text&quot;, &quot;checkbox&quot;)\" edittype=\"expr:comp.parent.fnc_Decode(CHK_GUBN, 1, &quot;none&quot;, &quot;checkbox&quot;)\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASCL_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CLSF_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_STRD\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DETL_STRD\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_NUMB\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_PRIC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATX_AMNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_STAT\"/><Cell col=\"13\" displaytype=\"combo\" text=\"bind:DPCT_METH\"/><Cell col=\"14\" displaytype=\"combo\" text=\"bind:DPCT_CMPT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRID_LEGL\"/><Cell col=\"17\" displaytype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_CYCL\"/><Cell col=\"18\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"19\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"20\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"none\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/><Cell col=\"22\" text=\"bind:CARX_NUMB\"/><Cell col=\"23\" text=\"bind:CARX_MODL\"/><Cell col=\"24\" text=\"bind:CARX_MODLNAME\"/><Cell col=\"25\" text=\"bind:CARX_YEAR\"/><Cell col=\"26\" text=\"bind:VHCL_NUMB\"/><Cell col=\"27\" style=\"align:center;\" text=\"bind:FACT_CODE\"/><Cell col=\"28\" style=\"align:left;\" text=\"bind:FACT_NAME\"/><Cell col=\"29\" style=\"align:left;\" text=\"bind:PFMC_CAPA\"/><Cell col=\"30\" style=\"align:right;\" text=\"bind:LAND_AREA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "213", "21", null, null, this);
            obj.set_taborder("33");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnBatch", "absolute", "0", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_WF_Module");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSaveSlipNumb", "absolute", "75", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("취득전표생성");
            obj.set_cssclass("btn_WF_Module");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "103", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRASST_STAT", "absolute", "103", "97", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "311", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "416", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "311", "97", "80", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "416", "97", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "613", "71", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "718", "71", "100", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "613", "97", "80", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "718", "97", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQS_DATE1", "absolute", "916", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "1019", "71", "14", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQS_DATE2", "absolute", "1035", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRASST_NUMB", "absolute", "916", "97", "219", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "83", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("고정/부외");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "83", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "242", "71", "76", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "242", "97", "76", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "545", "71", "76", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "545", "97", "76", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("관리사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "847", "71", "76", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "847", "97", "76", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "393", "71", "22", "22", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "393", "97", "22", "22", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "695", "71", "22", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "695", "97", "22", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Tab("tabFS_ASSTXM", "absolute", "8", null, null, "438", "25", "15", this);
            obj.set_taborder("86");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabFS_ASSTXM);
            obj.set_text("자산정보");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "10", "10", null, "299", "10", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("88");
            obj.set_cssclass("styFormItemBoxOut");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Calendar("calACQS_DATE", "absolute", "885", "19", "101", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj = new Static("Static20", "absolute", "812", "19", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("43");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtASST_NAME", "absolute", "368", "19", "424", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "273", "19", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("44");
            obj.set_text("자산명");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("edtASST_NUMB", "absolute", "124", "19", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "30", "19", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("45");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtPROJ_NAME", "absolute", "269", "227", "273", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtPROJ_CODE", "absolute", "124", "227", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("29");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "30", "227", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("46");
            obj.set_text("프로젝트");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("edtPAST_NUMB", "absolute", "367", "279", "174", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("36");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskSLIP_LINE", "absolute", "71.96%", "220", null, "23", "24.65%", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("48");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "640", "253", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("34");
            obj.set_type("string");
            obj.set_mask("##-########-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "546", "253", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("49");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCUST_CODE", "absolute", "124", "175", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("24");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCUST_NAME", "absolute", "269", "175", "273", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("23");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskVATX_AMNT", "absolute", "640", "123", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("19");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "987", "19", "62", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("50");
            obj.set_text("취득수량");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbDPCT_CMPT", "absolute", "447", "71", "95", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.style.set_itemheight("20");
            obj.set_index("-1");
            obj = new Static("Static11", "absolute", "812", "45", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("53");
            obj.set_text("유휴여부");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPRID_LEGL", "absolute", "755", "71", "35", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "684", "71", "70", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("54");
            obj.set_text("세무년수");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDESC_REMK", "absolute", "898", "279", "223", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("38");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbASST_CSCD", "absolute", "124", "279", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_index("-1");
            obj = new Static("Static31", "absolute", "812", "279", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("55");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbACQU_CHNL", "absolute", "124", "253", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_index("-1");
            obj = new Static("Static46", "absolute", "546", "201", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("56");
            obj.set_text("상각상태");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "30", "201", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("57");
            obj.set_text("사원");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbACCT_UNIT", "absolute", "124", "97", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_index("-1");
            obj = new MaskEdit("mskUNDP_BALE", "absolute", "367", "253", "174", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("33");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFCHG_DATE", "absolute", "640", "279", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("37");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_PRIC", "absolute", "368", "123", "174", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("18");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_COST", "absolute", "124", "123", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("17");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_NUMB", "absolute", "1048", "19", "73", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("3");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskDPCT_RATE", "absolute", "885", "71", "40", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("12");
            obj.set_value("MaskEdit3");
            obj.set_mask("!###.#");
            obj.set_limitbymask("both");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPRID_DPCT", "absolute", "640", "71", "35", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbASST_STAT", "absolute", "640", "227", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj = new Combo("cmbDPCT_STAT", "absolute", "640", "201", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj = new Combo("cmbDPCT_CYCL", "absolute", "124", "71", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_index("-1");
            obj = new Combo("cmbUNIT_CODE", "absolute", "640", "149", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj = new Combo("cmbDPCT_METH", "absolute", "368", "71", "74", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_index("-1");
            obj = new Edit("edtMUFT_NAME", "absolute", "640", "175", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtASST_STRD", "absolute", "368", "97", "174", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "812", "71", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("58");
            obj.set_text("상각율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "546", "279", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("59");
            obj.set_text("최종변동일자");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "273", "279", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("60");
            obj.set_text("모자산번호");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "30", "253", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("61");
            obj.set_text("자산취득경로");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "273", "97", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("62");
            obj.set_text("규격(모델명)");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtFILE_LGNM", "absolute", "898", "253", "223", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NAME", "absolute", "269", "201", "273", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("26");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NUMB", "absolute", "124", "201", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("28");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDEPT_NAME", "absolute", "269", "149", "273", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDEPT_CODE", "absolute", "124", "149", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("20");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDETL_STRD", "absolute", "640", "97", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtASCL_NAME", "absolute", "640", "45", "150", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCLSF_CODE", "absolute", "124", "45", "120", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("5");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "30", "45", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("63");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "546", "45", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("64");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static8", "absolute", "30", "71", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("65");
            obj.set_text("상각주기");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "273", "71", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("66");
            obj.set_text("상각방법");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "546", "71", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("67");
            obj.set_text("내용년수");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "30", "97", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("68");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "546", "97", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("69");
            obj.set_text("세부규격");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "30", "123", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("70");
            obj.set_text("단가");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "273", "123", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("71");
            obj.set_text("취득금액");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "546", "123", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("72");
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "30", "149", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("73");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "546", "149", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("74");
            obj.set_text("자산단위");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "30", "175", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("75");
            obj.set_text("구매처");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "546", "175", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("76");
            obj.set_text("제조업체");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "546", "227", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("77");
            obj.set_text("자산상태");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static58", "absolute", "273", "253", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("78");
            obj.set_text("미상각잔액");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "30", "279", "90", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("79");
            obj.set_text("자산비용구분");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnASST_PHOTO", "absolute", "822", "253", "74", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("80");
            obj.set_text("사진등록");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpDEPT_CODE", "absolute", "246", "149", "21", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("81");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpCUST_CODE", "absolute", "246", "175", "21", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("82");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpEMPL_NUMB", "absolute", "246", "201", "21", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("83");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpPROJ_CODE", "absolute", "246", "227", "21", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new ImageViewer("imgASST_PHOTO", "absolute", "822", "97", "299", "150", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("16");
            obj.set_imagealign("left middle");
            obj.set_stretch("fit");
            obj.style.set_border("1 solid #b1b5b9b3");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskSAVG_VALU", "absolute", "833", "191", null, "21", "94", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("40");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtBARX_CODE", "absolute", "92.01%", "191", null, "21", "5.9%", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("41");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtBUYX_NAME", "absolute", "94.27%", "191", null, "21", "3.47%", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("42");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static60", "absolute", "857", "189", "78", "25", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("85");
            obj.set_text("잔존가액");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtASST_DTLX", "absolute", "742", "45", "48", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("52");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCLSF_NAME", "absolute", "269", "45", "274", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Div("popSLIP", "absolute", "10", "309", null, "90", "10", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("47");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "0", "25", null, "65", "0", null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("154");
            obj.set_cssclass("styFormItemBoxOut");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_NUMB00", "absolute", "7.44%", null, null, "23", "79.66%", "809", this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("110");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "-20", "91", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("119");
            obj.set_text("차량운반구");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new MaskEdit("mskCARX_YEAR", "absolute", "869", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("3");
            obj.set_mask("######");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new MaskEdit("mskSYLD_CNTX", "absolute", "869", "60", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("7");
            obj.set_mask("###");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "812", "60", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("136");
            obj.set_text("기통수");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "812", "34", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("137");
            obj.set_text("년식");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtCARX_NAME", "absolute", "622", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new MaskEdit("mskCARX_DPCT", "absolute", "622", "60", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("6");
            obj.set_mask("###,###");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "538", "60", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("140");
            obj.set_text("배기량(cc)");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "538", "34", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("141");
            obj.set_text("차량명칭");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtCARX_MODLNAME", "absolute", "410", "34", "100", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtCARX_MODL", "absolute", "315", "34", "70", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("144");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtCARX_FORM", "absolute", "315", "60", "195", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "273", "60", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("146");
            obj.set_text("형식");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "273", "34", "58", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("147");
            obj.set_text("차종");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtVHCL_NUMB", "absolute", "115", "60", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("17");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtCARX_NUMB", "absolute", "115", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "21", "34", "91", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("150");
            obj.set_text("차량번호");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "21", "60", "91", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("151");
            obj.set_text("차대번호");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpCARX_MODL", "absolute", "387", "34", "30", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("152");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "4", "91", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP);
            obj.set_taborder("153");
            obj.set_text("차량운반구");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabFS_ASSTXM.tab1.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpCLSF_CODE", "absolute", "246", "45", "21", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("86");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Div("popSLIP2", "absolute", "10", "309", null, "64", "10", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("51");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "0", "25", null, "39", "0", null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("63");
            obj.set_cssclass("styFormItemBoxOut");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_NUMB00", "absolute", "7.46%", null, null, "23", "79.62%", "809", this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("44");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "4", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("48");
            obj.set_text("기계장치");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "21", "34", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("55");
            obj.set_text("설비코드");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Edit("edtFACT_CODE", "absolute", "113", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("56");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Edit("edtFACT_NAME", "absolute", "258", "34", "219", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "538", "34", "90", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("59");
            obj.set_text("성능및용량");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Edit("edtPFMC_CAPA", "absolute", "620", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("1");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new Static("imgHelpFACT_CODE", "absolute", "235", "34", "21", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP2);
            obj.set_taborder("62");
            obj.set_cssclass("sytHelpPopup");
            this.tabFS_ASSTXM.tab1.popSLIP2.addChild(obj.name, obj);
            obj = new CheckBox("chkIDLE_YSNO", "absolute", "885", "45", null, "21", "231", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("87");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.style.set_buttonalign("center middle");
            obj.style.set_align("center middle");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Div("popSLIP3", "absolute", "10", "309", null, "64", "10", null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("89");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "0", "25", null, "39", "0", null, this.tabFS_ASSTXM.tab1.popSLIP3);
            obj.set_taborder("41");
            obj.set_cssclass("styFormItemBoxOut");
            this.tabFS_ASSTXM.tab1.popSLIP3.addChild(obj.name, obj);
            obj = new MaskEdit("mskACQU_NUMB00", "absolute", "7.45%", null, null, "23", "79.59%", "809", this.tabFS_ASSTXM.tab1.popSLIP3);
            obj.set_taborder("37");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP3.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "21", "32", "90", "25", null, null, this.tabFS_ASSTXM.tab1.popSLIP3);
            obj.set_taborder("38");
            obj.set_text("토지면적");
            obj.set_cssclass("styFormItemCap");
            this.tabFS_ASSTXM.tab1.popSLIP3.addChild(obj.name, obj);
            obj = new MaskEdit("mskLAND_AREA", "absolute", "115", "34", "120", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP3);
            obj.set_taborder("39");
            obj.set_mask("!#,###.##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.tabFS_ASSTXM.tab1.popSLIP3.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "4", "91", "21", null, null, this.tabFS_ASSTXM.tab1.popSLIP3);
            obj.set_taborder("40");
            obj.set_text("토지");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabFS_ASSTXM.tab1.popSLIP3.addChild(obj.name, obj);
            obj = new Combo("cmbACCT_GUBN", "absolute", "1039", "68", "82", "21", null, null, this.tabFS_ASSTXM.tab1);
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj = new Static("Static01", "absolute", "988", "68", "60", "21", null, null, this.tabFS_ASSTXM.tab1);
            obj.set_taborder("91");
            obj.set_text("사업장");
            obj.set_cssclass("styFormItemCapBE");
            this.tabFS_ASSTXM.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabFS_ASSTXM);
            obj.set_text("변동이력");
            obj.set_scrollbars("none");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Grid("grdFS_ASCHXM1", "absolute", "10", "30", null, null, "10", "10", this.tabFS_ASSTXM.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsFS_ASCHXM1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"102\"/><Column size=\"98\"/><Column size=\"137\"/><Column size=\"125\"/><Column size=\"150\"/><Column size=\"311\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"변동일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"변동구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"3\" displaytype=\"text\" text=\"변동금액(취득금액)\"/><Cell col=\"4\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCH_GUBN\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_AMOT\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length==0?&quot;&quot;:&quot;##-########-####&quot;\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.tabFS_ASSTXM.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", null, "21", "956", null, this.tabFS_ASSTXM.tab2);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabFS_ASSTXM.tab2.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "10", "24", "197", "6", null, null, this.tabFS_ASSTXM.tab2);
            obj.set_taborder("3");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabFS_ASSTXM.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab3", this.tabFS_ASSTXM);
            obj.set_text("이동이력");
            obj.set_scrollbars("none");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Grid("grdFS_ASCHXM2", "absolute", "10", "30", null, null, "10", "10", this.tabFS_ASSTXM.tab3);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_binddataset("dsFS_ASCHXM2");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"87\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"248\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"이동일자\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" text=\"변경전\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"text\" text=\"변경후\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"비고\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BFDE_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BFEM_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.tabFS_ASSTXM.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", null, "21", "949", null, this.tabFS_ASSTXM.tab3);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabFS_ASSTXM.tab3.addChild(obj.name, obj);
            obj = new Tabpage("tab4", this.tabFS_ASSTXM);
            obj.set_text("수리이력");
            obj.set_scrollbars("none");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Grid("grdFS_ASRPXM", "absolute", "10", "30", null, null, "10", "10", this.tabFS_ASSTXM.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsFS_ASRPXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"93\"/><Column size=\"265\"/><Column size=\"92\"/><Column size=\"265\"/><Column size=\"124\"/><Column size=\"158\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"수리의뢰일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"수리의뢰내역\"/><Cell col=\"2\" displaytype=\"text\" text=\"수리완료일자\"/><Cell col=\"3\" displaytype=\"text\" text=\"수리내역\"/><Cell col=\"4\" displaytype=\"text\" text=\"수리비용\"/><Cell col=\"5\" displaytype=\"text\" text=\"수리업체\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:RPRQ_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:RPRQ_DESC\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:RPAR_DESC\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REPR_AMOT\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:REPR_VDER\"/></Band></Format></Formats>");
            this.tabFS_ASSTXM.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", null, "21", "901", null, this.tabFS_ASSTXM.tab4);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabFS_ASSTXM.tab4.addChild(obj.name, obj);
            obj = new Tabpage("tab5", this.tabFS_ASSTXM);
            obj.set_text("상각이력");
            obj.set_scrollbars("none");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", null, "21", "845", null, this.tabFS_ASSTXM.tab5);
            obj.set_taborder("3");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabFS_ASSTXM.tab5.addChild(obj.name, obj);
            obj = new Grid("grdFS_DPCTXM", "absolute", "10", "30", null, null, "10", "10", this.tabFS_ASSTXM.tab5);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsFS_DPCTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"년월\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"2\" colspan=\"4\" displaytype=\"text\" text=\"취득가\"/><Cell col=\"6\" colspan=\"3\" displaytype=\"text\" text=\"상각비\"/><Cell col=\"9\" colspan=\"4\" displaytype=\"text\" text=\"상각누계\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"text\" text=\"미상각잔액(A-B)\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"기말잔액(A)\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"전월누계\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"당월\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"당기누계\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"전기이월\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"당기증가\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"당기감소\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"기말잔액(B)\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:STDS_YMTH\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_BEGN\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_GROW\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_DCRS\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:BRNT_DPCT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MONT_DPCT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CRNT_DPCT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPTC_BEGN\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_GROW\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_DCRS\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ENDX\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/></Band></Format></Formats>");
            this.tabFS_ASSTXM.tab5.addChild(obj.name, obj);
            obj = new Tabpage("tab6", this.tabFS_ASSTXM);
            obj.set_text("분할내역");
            obj.set_scrollbars("none");
            this.tabFS_ASSTXM.addChild(obj.name, obj);
            obj = new Grid("grdFS_ASSPXD", "absolute", "10", "30", null, null, "10", "10", this.tabFS_ASSTXM.tab6);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsFS_ASSPXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"209\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"분할일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"분할수량\"/><Cell col=\"2\" displaytype=\"text\" text=\"분할금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"분할자산번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"분할자산명\"/><Cell col=\"5\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_DATE\" suppress=\"1\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NUMB\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_PRIC\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_ASST\" mask=\"expr:SPLT_ASST.toString().length==0?&quot;&quot;:&quot;####-####-####&quot;\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:SPLT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.tabFS_ASSTXM.tab6.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", null, "21", "917", null, this.tabFS_ASSTXM.tab6);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabFS_ASSTXM.tab6.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("87");
            obj.set_text("홈 > 자산관리 > 자산등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_text("자산등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("89");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "687", "56", "128", "4", null, null, this);
            obj.set_taborder("91");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("94");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("95");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("96");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("97");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "213", "61", "40", "67", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("99");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "416", "92", "102", "5", null, null, this);
            obj.set_taborder("100");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "416", "118", "38", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("102");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "818", "61", "40", "67", null, null, this);
            obj.set_taborder("104");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "20", "308", "30", "67", null, null, this);
            obj.set_taborder("106");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1130", "348", "20", "171", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "538", "129", "32", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "538", "254", "80", "10", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "661", "254", "80", "37", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "799", "331", "30", "67", null, null, this);
            obj.set_taborder("116");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "546", "601", "32", "25", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 213, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 90, this.tabFS_ASSTXM.tab1.popSLIP,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.tabFS_ASSTXM.tab1.popSLIP.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 947, 73, this.tabFS_ASSTXM.tab1.popSLIP2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.tabFS_ASSTXM.tab1.popSLIP2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 64, this.tabFS_ASSTXM.tab1.popSLIP3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("89");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.tabFS_ASSTXM.tab1.popSLIP3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1136, 386, this.tabFS_ASSTXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("자산정보");

            	}
            );
            this.tabFS_ASSTXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabFS_ASSTXM.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("변동이력");
            		p.set_scrollbars("none");

            	}
            );
            this.tabFS_ASSTXM.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabFS_ASSTXM.tab3,
            	//-- Layout function
            	function(p) {
            		p.set_text("이동이력");
            		p.set_scrollbars("none");

            	}
            );
            this.tabFS_ASSTXM.tab3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabFS_ASSTXM.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_text("수리이력");
            		p.set_scrollbars("none");

            	}
            );
            this.tabFS_ASSTXM.tab4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabFS_ASSTXM.tab5,
            	//-- Layout function
            	function(p) {
            		p.set_text("상각이력");
            		p.set_scrollbars("none");

            	}
            );
            this.tabFS_ASSTXM.tab5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabFS_ASSTXM.tab6,
            	//-- Layout function
            	function(p) {
            		p.set_text("분할내역");
            		p.set_scrollbars("none");

            	}
            );
            this.tabFS_ASSTXM.tab6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","tabFS_ASSTXM.tab1.popSLIP3.mskLAND_AREA","value","dsFS_ASSTXM","LAND_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_chkIDLE_YSNO_value","tabFS_ASSTXM.tab1.chkIDLE_YSNO","value","dsFS_ASSTXM","IDLE_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_calACQS_DATE_value","tabFS_ASSTXM.tab1.calACQS_DATE","value","dsFS_ASSTXM","ACQS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtASST_NAME_value","tabFS_ASSTXM.tab1.edtASST_NAME","value","dsFS_ASSTXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtASST_NUMB_value","tabFS_ASSTXM.tab1.edtASST_NUMB","value","dsFS_ASSTXM","ASST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtPROJ_NAME_value","tabFS_ASSTXM.tab1.edtPROJ_NAME","value","dsFS_ASSTXM","PROJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtPROJ_CODE_value","tabFS_ASSTXM.tab1.edtPROJ_CODE","value","dsFS_ASSTXM","PROJ_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtPAST_NUMB_value","tabFS_ASSTXM.tab1.edtPAST_NUMB","value","dsFS_ASSTXM","PAST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskSLIP_LINE_value","tabFS_ASSTXM.tab1.mskSLIP_LINE","value","dsFS_ASSTXM","SLIP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskSLIP_NUMB_value","tabFS_ASSTXM.tab1.mskSLIP_NUMB","value","dsFS_ASSTXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtCUST_CODE_value","tabFS_ASSTXM.tab1.edtCUST_CODE","value","dsFS_ASSTXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtCUST_NAME_value","tabFS_ASSTXM.tab1.edtCUST_NAME","value","dsFS_ASSTXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskVATX_AMNT_value","tabFS_ASSTXM.tab1.mskVATX_AMNT","value","dsFS_ASSTXM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbDPCT_CMPT_value","tabFS_ASSTXM.tab1.cmbDPCT_CMPT","value","dsFS_ASSTXM","DPCT_CMPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtASST_DTLX_value","tabFS_ASSTXM.tab1.edtASST_DTLX","value","dsFS_ASSTXM","ASST_DTLX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskPRID_LEGL_value","tabFS_ASSTXM.tab1.mskPRID_LEGL","value","dsFS_ASSTXM","PRID_LEGL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtDESC_REMK_value","tabFS_ASSTXM.tab1.edtDESC_REMK","value","dsFS_ASSTXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbASST_CSCD_value","tabFS_ASSTXM.tab1.cmbASST_CSCD","value","dsFS_ASSTXM","ASST_CSCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbACQU_CHNL_value","tabFS_ASSTXM.tab1.cmbACQU_CHNL","value","dsFS_ASSTXM","ACQU_CHNL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbACCT_UNIT_value","tabFS_ASSTXM.tab1.cmbACCT_UNIT","value","dsFS_ASSTXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskUNDP_BALE_value","tabFS_ASSTXM.tab1.mskUNDP_BALE","value","dsFS_ASSTXM","UNDP_BALE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskFCHG_DATE_value","tabFS_ASSTXM.tab1.mskFCHG_DATE","value","dsFS_ASSTXM","FCHG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskACQU_PRIC_value","tabFS_ASSTXM.tab1.mskACQU_PRIC","value","dsFS_ASSTXM","ACQU_PRIC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskACQU_COST_value","tabFS_ASSTXM.tab1.mskACQU_COST","value","dsFS_ASSTXM","ACQU_COST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskACQU_NUMB_value","tabFS_ASSTXM.tab1.mskACQU_NUMB","value","dsFS_ASSTXM","ACQU_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskDPCT_RATE_value","tabFS_ASSTXM.tab1.mskDPCT_RATE","value","dsFS_ASSTXM","DPCT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskPRID_DPCT_value","tabFS_ASSTXM.tab1.mskPRID_DPCT","value","dsFS_ASSTXM","PRID_DPCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbASST_STAT_value","tabFS_ASSTXM.tab1.cmbASST_STAT","value","dsFS_ASSTXM","ASST_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbDPCT_STAT_value","tabFS_ASSTXM.tab1.cmbDPCT_STAT","value","dsFS_ASSTXM","DPCT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbDPCT_CYCL_value","tabFS_ASSTXM.tab1.cmbDPCT_CYCL","value","dsFS_ASSTXM","DPCT_CYCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbUNIT_CODE_value","tabFS_ASSTXM.tab1.cmbUNIT_CODE","value","dsFS_ASSTXM","UNIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbDPCT_METH_value","tabFS_ASSTXM.tab1.cmbDPCT_METH","value","dsFS_ASSTXM","DPCT_METH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtMUFT_NAME_value","tabFS_ASSTXM.tab1.edtMUFT_NAME","value","dsFS_ASSTXM","MUFT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtASST_STRD_value","tabFS_ASSTXM.tab1.edtASST_STRD","value","dsFS_ASSTXM","ASST_STRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtFILE_LGNM_value","tabFS_ASSTXM.tab1.edtFILE_LGNM","value","dsFS_ASSTXM","LFIL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtEMPL_NAME_value","tabFS_ASSTXM.tab1.edtEMPL_NAME","value","dsFS_ASSTXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtEMPL_NUMB_value","tabFS_ASSTXM.tab1.edtEMPL_NUMB","value","dsFS_ASSTXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtDEPT_NAME_value","tabFS_ASSTXM.tab1.edtDEPT_NAME","value","dsFS_ASSTXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtDEPT_CODE_value","tabFS_ASSTXM.tab1.edtDEPT_CODE","value","dsFS_ASSTXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtDETL_STRD_value","tabFS_ASSTXM.tab1.edtDETL_STRD","value","dsFS_ASSTXM","DETL_STRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtASCL_NAME_value","tabFS_ASSTXM.tab1.edtASCL_NAME","value","dsFS_ASSTXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtCLSF_CODE_value","tabFS_ASSTXM.tab1.edtCLSF_CODE","value","dsFS_ASSTXM","CLSF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_mskSAVG_VALU_value","tabFS_ASSTXM.tab1.mskSAVG_VALU","value","dsFS_ASSTXM","SAVG_VALU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtBARX_CODE_value","tabFS_ASSTXM.tab1.edtBARX_CODE","value","dsFS_ASSTXM","BARX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtBUYX_NAME_value","tabFS_ASSTXM.tab1.edtBUYX_NAME","value","dsFS_ASSTXM","BUYX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_edtCLSF_NAME_value","tabFS_ASSTXM.tab1.edtCLSF_NAME","value","dsFS_ASSTXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","tabFS_ASSTXM.tab1.popSLIP.edtCARX_NUMB","value","dsFS_ASSTXM","CARX_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL","value","dsFS_ASSTXM","CARX_MODL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME","value","dsFS_ASSTXM","CARX_MODLNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","tabFS_ASSTXM.tab1.popSLIP.edtCARX_NAME","value","dsFS_ASSTXM","CARX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","tabFS_ASSTXM.tab1.popSLIP.mskCARX_YEAR","value","dsFS_ASSTXM","CARX_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tabFS_ASSTXM.tab1.popSLIP.mskSYLD_CNTX","value","dsFS_ASSTXM","SYLD_CNTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","tabFS_ASSTXM.tab1.popSLIP.mskCARX_DPCT","value","dsFS_ASSTXM","CARX_DPCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","tabFS_ASSTXM.tab1.popSLIP.edtCARX_FORM","value","dsFS_ASSTXM","CARX_FORM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabFS_ASSTXM.tab1.popSLIP.edtVHCL_NUMB","value","dsFS_ASSTXM","VHCL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE","value","dsFS_ASSTXM","FACT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME","value","dsFS_ASSTXM","FACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","tabFS_ASSTXM.tab1.popSLIP2.edtPFMC_CAPA","value","dsFS_ASSTXM","PFMC_CAPA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabFS_ASSTXM.tab1.cmbACCT_GUBN","value","dsFS_ASSTXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabFS_ASSTXM_tab1_cmbACCT_GUBN_value","tabFS_ASSTXM.tab1.cmbACCT_GUBN","value","dsFS_ASSTXM","ACCT_GUBN");
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
        this.addIncludeScript("FSMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMB0010 자산등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		오혜성		Initial Created.
         *    
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /* 자산저장시 변동처리에 확정처리 완료됨
         --원소스는 자산등록후 변동처리에 신규 저장후 확정 처리 해야지만 감가상각처리 할 수 있었음
         --자산등록 삭제시 변동처리화면에서 확정취소> 삭제> 저장 후 자산등록 화면에서 삭제>저장 해야함
         */

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "FSMB0010";
        this.sFORM_IDXX   = "FSMB0010";
        this.sACCT_YEAR   = ""; 

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

        this.aKeyValue = new Array(4);
        this.sPOSTGUBN = "";

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.tabFS_ASSTXM.tab1.mskSLIP_NUMB);
        	this.fnc_FormatSlipNumber(this.tabFS_ASSTXM.tab2.grdFS_ASCHXM1, "SLIP_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4);
        	this.cmbSHRASST_GUBN.setFocus();
        	

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
        	this.fnc_DatasetClear("dsFS_ASSTXM,dsFL_ATTACH");
        	this.fnc_DatasetClear("dsFS_ASCHXM1,dsFS_ASCHXM2,dsFS_ASRPXM,dsFS_DPCTXM,dsFS_ASSPXD");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASSTXM=dsFS_ASSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSTXM.setFocus(); 
        	
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsFS_ASSTXM.addRow();
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQS_DATE", this.fnc_GetServerDateTime("DATE")); //취득일자
        	this.dsFS_ASSTXM.setColumn(iRow, "DPCT_STAT", ""); //상각상태
        	this.dsFS_ASSTXM.setColumn(iRow, "ASST_STAT", "USIG"); //자산상태(초기값은WAIT : 대기)//2014.11 변경 사용중
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_CHNL", "MANU"); //취득경로(초기값은MANU : 수기등록)
        	this.dsFS_ASSTXM.setColumn(iRow, "SAVG_VALU", 0); //잔존가액
        	this.dsFS_ASSTXM.setColumn(iRow, "PRID_DPCT", 0); //내용년수
        	this.dsFS_ASSTXM.setColumn(iRow, "DPCT_RATE", 0.0); //상각율
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_NUMB", 1); //취득수량
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_COST", 0); //단가
        	this.dsFS_ASSTXM.setColumn(iRow, "VATX_AMNT", 0); //부가세
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_PRIC", 0); //취득금액
        	this.dsFS_ASSTXM.setColumn(iRow, "UNDP_BALE", 0); //미상각잔액
        	this.dsFS_ASSTXM.setColumn(iRow, "ACCT_UNIT", "10"); //회계단위
        	this.dsFS_ASSTXM.setColumn(iRow, "PRID_LEGL", 0); //세무년수
        	this.dsFS_ASSTXM.setColumn(iRow, "ACCT_GUBN", "100"); //사업장
        	
             this.tabFS_ASSTXM.tab1.cmbASST_CSCD.set_index(0);
        	
        	

        	if (this.tabFS_ASSTXM.tabindex != 0) {

        		this.tabFS_ASSTXM.set_tabindex(0);

        	}

        	this.tabFS_ASSTXM.tab1.edtASST_NAME.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
           //if (this.fn_DeleteCheck()) this.grdFS_ASSTXM.deleteRow(this.grdFS_ASSTXM.rowposition);                                  
           if (this.fn_DeleteCheck()) this.dsFS_ASSTXM.deleteRow(this.dsFS_ASSTXM.rowposition);    
           this.grdFS_ASSTXM.setFocus();	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_ASSTXM,dsFL_ATTACH");
        	this.fn_PhotoView(this.dsFS_ASSTXM, this.dsFS_ASSTXM.rowposition);
        	this.grdFS_ASSTXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_ASSTXM=dsFS_ASSTXM:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSTXM.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASSTXM, dsFS_ASCHXM1, dsFS_ASCHXM2, dsFS_ASRPXM, dsFS_DPCTXM, dsFS_ASSPXD, dsFS_ASSTXM_SLIP", this);
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

        	if (this.fnc_DatasetChangeCheck("dsFS_ASSTXM")) {

        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRASST_GUBN.value)) < 1) {

        		return this.fnc_SearchCheckPostAction("TMM072", "고정/부외", this.cmbSHRASST_GUBN);

        	}

        	if (this.fnc_IsDate(this.calSHRACQS_DATE1.value) && this.fnc_IsDate(this.calSHRACQS_DATE2.value)) {

        		if (this.fnc_Trim(this.calSHRACQS_DATE1.value) > this.fnc_Trim(this.calSHRACQS_DATE2.value)) {

        			return this.fnc_SearchCheckPostAction("TMM042", "취득일자(시작일),취득일자(종료일)", this.calSHRACQS_DATE2);

        		}

        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASSTXM.getRowCount() < 1) {

        		this.fnc_Message("TMM007");
        		return false;

        	}

        	var iAsstStatRow = this.dsASST_STAT.findRow("COMD_CODE", this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_STAT"));	
        	//해당 DS에서 코드 INDEX 찾아냄
        	
        	var sAsstStatName = this.dsASST_STAT.getColumn(iAsstStatRow, "COMD_CDNM"); 
        	//찾아낸 INDEX로 코드명을 찾아냄 
        	
        		

        	if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_STAT")) != "WAIT" && 
        		this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_NUMB"))) != 0) {

        		this.fnc_Message("TMM107", "자산상태", sAsstStatName);		//찾아낸 코드명을 표시
        		return;

        	}

        	var sQuestionText  = this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_NUMB")) + " : ";
        		sQuestionText += this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASSTXM")) {

        		this.fnc_Message("TMM003");
        		return false;

        	}

        	for (var i = 0; i < this.dsFS_ASSTXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsFS_ASSTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "ASST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산명", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.edtASST_NAME, "");
        		}

        		if (!this.fnc_IsDate(this.dsFS_ASSTXM.getColumn(i, "ACQS_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "취득일자", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.calACQS_DATE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "CLSF_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "품목분류", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.edtCLSF_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DPCT_CYCL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상각주기", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL, "");
        		}

        		if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DPCT_CYCL")) != "NONE") {

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DPCT_METH"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각방법", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.cmbDPCT_METH, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DPCT_CMPT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각완료기준", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT, "");
        			}

        			if (this.dsFS_ASSTXM.getColumn(i, "PRID_DPCT") < 1) {
        				return this.fnc_CheckPostAction("TMM072", "내용년수", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.mskPRID_DPCT, "");
        			}

        			if (this.dsFS_ASSTXM.getColumn(i, "PRID_LEGL") < 1) {
        				return this.fnc_CheckPostAction("TMM072", "세무년수", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.mskPRID_LEGL, "");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DPCT_RATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상각율(%)", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.mskDPCT_RATE, "");
        			}

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "ACCT_UNIT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.cmbACCT_UNIT, "");
        		}

        		if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "ACQU_NUMB")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "취득수량", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.mskACQU_NUMB, "");
        		}

        		if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "ACQU_PRIC")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "취득금액", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.mskACQU_PRIC, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "DEPT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.edtDEPT_NAME, "");
        		}
        		
        		if (this.fnc_ToUpper(this.dsFS_ASSTXM.getRowType(i)) == Dataset.ROWTYPE_INSERT) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "구매처", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.edtDEPT_NAME, "");
        			}
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원", this.dsFS_ASSTXM, i, this.tabFS_ASSTXM.tab1.edtEMPL_NAME, "");
        		}

        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); //고정/부외
        		sReturnString += " ASCL_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ACQS_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE1.value)); //취득일자1
        		sReturnString += " ACQS_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE2.value)); //취득일자2
        		sReturnString += " ASST_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_STAT.value)); //자산상태
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //관리부서
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //관리사원
        		sReturnString += " ASST_NUMB="  + this.fnc_Quote(this.fnc_Replace(this.fnc_Trim(this.edtSHRASST_NUMB.value), "-", "")); //자산번호
        		
        		
        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_NUMB"))); //자산번호
        		

        	} else if (sKind == "SEARCH02") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.sACCT_YEAR); //기준년월
        		sReturnString += " PRID_DPCT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "PRID_DPCT"))); //내용년수
        		

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); //고정/부외
        		sReturnString += " ASCL_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ACQS_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE1.value)); //취득일자1
        		sReturnString += " ACQS_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACQS_DATE2.value)); //취득일자2
        		sReturnString += " ASST_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_STAT.value)); //자산상태
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //관리부서
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //관리사원
        		sReturnString += " ASST_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
        		

        	} else if (sKind == "PROC00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM_SLIP.getColumn(this.dsFS_ASSTXM_SLIP.rowposition, "ACCT_UNIT"))); //회계단위		
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM_SLIP.getColumn(this.dsFS_ASSTXM_SLIP.rowposition, "ASST_NUMB"))); //자산번호
        		sReturnString += " ACQS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM_SLIP.getColumn(this.dsFS_ASSTXM_SLIP.rowposition, "ACQS_DATE"))); //sReturnString += " ASST_NUMB=" + gfn_Quote(gfn_Trim(edtSHRASST_NUMB.value)); // 자산번호
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); //출처연결키
                sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); //회계구분_사업장 	
                sReturnString += " SLIP_GUBN=" + this.fnc_Quote("FS001"); //전표유형구분
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //관리사원
                	
        		
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

        		this.fnc_Information(this.stInformation, this.dsFS_ASSTXM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASSTXM.rowcount);

        		if (this.sPOSTGUBN == "GUBUN_PROC00") {

        			this.sPOSTGUBN = "LAST_PROC00";

        		}

        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.tabFS_ASSTXM.tab2.stInformation, this.dsFS_ASCHXM1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //변동이력
        		this.fnc_Information(this.tabFS_ASSTXM.tab3.stInformation, this.dsFS_ASCHXM2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //이동이력
        		this.fnc_Information(this.tabFS_ASSTXM.tab4.stInformation, this.dsFS_ASRPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //수리이력
        		this.fnc_Information(this.tabFS_ASSTXM.tab5.stInformation, this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //상각내역
        		this.fnc_Information(this.tabFS_ASSTXM.tab6.stInformation, this.dsFS_ASSPXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //분할내역

        		
        		if (this.sPOSTGUBN == "LAST_PROC00") {

        			var iRow = 0;
        			iRow = this.dsFS_ASSTXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' ");

        			if (iRow < 0) iRow = 0;

        			this.grdFS_ASSTXM.clearSelect();
        			this.grdFS_ASSTXM.selectRow(iRow);
        			this.dsFS_ASSTXM.set_rowposition(iRow);

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "SLIP_NUMB"))) == 14) {

        				var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "SLIP_NUMB"));
        				var sResponse = this.gfn_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "");

        			}

        			this.sPOSTGUBN = ""; 

        		}

        	} else if (sMethodName == "SEARCH02") {

        		var sDPCT_METH = this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "DPCT_METH"));

        		if (sDPCT_METH == "STRT") {

        			// 정액법
        			this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT01"));

        		} else if (sDPCT_METH == "DMNS") {

        			// 정률법
        			this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT02"));

        		}

        		this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_enable(false);

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "PROC00") {

        		this.fnc_Message("TMM130", "자산등록 전표생성");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRASST_STAT,dsSHRASST_STAT,0";
        			arrParam[2] = "COMBO,tabFS_ASSTXM.tab1.cmbDPCT_METH,dsDPCT_METH,0";
        			arrParam[3] = "COMBO,tabFS_ASSTXM.tab1.cmbDPCT_CMPT,dsDPCT_CMPT,0";
        			arrParam[4] = "COMBO,tabFS_ASSTXM.tab1.cmbDPCT_CYCL,dsDPCT_CYCL,0";
        			arrParam[5] = "COMBO,tabFS_ASSTXM.tab1.cmbUNIT_CODE,dsUNIT_CODE,0";
        			arrParam[6] = "COMBO,tabFS_ASSTXM.tab1.cmbDPCT_STAT,dsDPCT_STAT,0";
        			arrParam[7] = "COMBO,tabFS_ASSTXM.tab1.cmbASST_STAT,dsASST_STAT,0";
        			arrParam[8] = "COMBO,tabFS_ASSTXM.tab1.cmbACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[9] = "COMBO,tabFS_ASSTXM.tab1.cmbACQU_CHNL,dsACQU_CHNL,0";
        			arrParam[10] = "COMBO,tabFS_ASSTXM.tab1.cmbASST_CSCD,dsASST_CSCD,0";
        			arrParam[11] = "GRID,grdFS_ASSTXM,dsASST_STAT,ASST_STAT";
        			arrParam[12] = "GRID,grdFS_ASSTXM,dsDPCT_METH,DPCT_METH";
        			arrParam[13] = "GRID,tabFS_ASSTXM.tab2.grdFS_ASCHXM1,dsASCH_GUBN,ASCH_GUBN";
        			arrParam[14] = "COMBO,tabFS_ASSTXM.tab1.cmbACCT_GUBN,dsACCT_GUBN,0";
        			
        		this.fnc_CommonCodeInnerBind(arrParam);				

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) != 14) {

        		this.Div0.btnSaveSlipNumb.set_enable(true);

        	} else {

        		this.Div0.btnSaveSlipNumb.set_enable(false);

        	}

        	if (this.fnc_Trim(obj.getColumn(e.newrow, "ASST_STAT")) == "WAIT" || this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {

        		this.tabFS_ASSTXM.tab1.calACQS_DATE.set_enable(true); //취득일자
        		this.tabFS_ASSTXM.tab1.edtCLSF_NAME.set_enable(true); //품목분류명
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL.set_enable(true); //상각주기

        		if (this.fnc_Trim(obj.getColumn(e.newrow, "DPCT_CYCL")) == "NONE") {

        			this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_enable(false); //상각방법
        			this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_enable(false); //상각완료기준
        			this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_enable(false); //내용년수
        			this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_enable(false); //tabFS_ASSTXM.tab1.chkIDLE_YSNO.enable = false;                     //유휴여부

        		} else {

        			this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_enable(true); //상각방법
        			this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_enable(true); //상각완료기준
        			this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_enable(true); //내용년수
        			this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_enable(true); //tabFS_ASSTXM.tab1.chkIDLE_YSNO.enable = true;                      //유휴여부

        		}

        		this.tabFS_ASSTXM.tab1.cmbACCT_UNIT.set_enable(true); //회계단위
        		this.tabFS_ASSTXM.tab1.mskACQU_NUMB.set_enable(true); //취득수량
        		this.tabFS_ASSTXM.tab1.mskACQU_COST.set_enable(true); //단가
        		this.tabFS_ASSTXM.tab1.mskVATX_AMNT.set_enable(true); //부가세
        		this.tabFS_ASSTXM.tab1.mskACQU_PRIC.set_enable(true); //금액
        		this.tabFS_ASSTXM.tab1.edtDEPT_NAME.set_enable(true); //부서
        		this.tabFS_ASSTXM.tab1.edtEMPL_NAME.set_enable(true); //사원
        		this.tabFS_ASSTXM.tab1.edtCUST_NAME.set_enable(true); //구매처
        		

        		
        	} else {

        		this.tabFS_ASSTXM.tab1.calACQS_DATE.set_enable(false); //취득일자
        		this.tabFS_ASSTXM.tab1.edtCLSF_NAME.set_enable(false); //품목분류명
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL.set_enable(false); //상각주기
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_enable(false); //상각완료기준
        		this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_enable(false); //상각방법
        		this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_enable(false); //내용년수
        		this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_enable(false); //tabFS_ASSTXM.tab1.chkIDLE_YSNO.enable = false;                         //유휴여부
        		this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_enable(false); //상각율(%)
        		this.tabFS_ASSTXM.tab1.cmbACCT_UNIT.set_enable(false); //회계단위
        		this.tabFS_ASSTXM.tab1.mskACQU_NUMB.set_enable(false); //취득수량
        		this.tabFS_ASSTXM.tab1.mskACQU_COST.set_enable(false); //단가
        		this.tabFS_ASSTXM.tab1.mskVATX_AMNT.set_enable(false); //부가세
        		this.tabFS_ASSTXM.tab1.mskACQU_PRIC.set_enable(false); //금액
        		this.tabFS_ASSTXM.tab1.edtDEPT_NAME.set_enable(false); //부서
        		this.tabFS_ASSTXM.tab1.edtEMPL_NAME.set_enable(false); //사원
        		this.tabFS_ASSTXM.tab1.edtCUST_NAME.set_enable(false); //구매처

        	}

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {

        		this.fnc_DatasetClear("dsFS_ASCHXM1,dsFS_ASCHXM2,dsFS_ASRPXM,dsFS_DPCTXM,dsFS_ASSPXD");

        	} else {

        		if (this.sPOSTGUBN == "LAST_PROC00") return;

        		this.fn_Search01();

        	}

        	
        	this.fn_ControlSlipDivVisible(obj, this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_DTLX")));
        	
        	this.fn_PhotoView(obj, e.newrow);

        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /*----------------+
         |  탭 조회 처리!  |
         +-----------------*/
        this.fn_Search01 = function () {
        	// 조회 값이 없으면 조회 할 필요 없음
        	if (this.dsFS_ASSTXM.rowcount < 1) return;
        	this.fnc_DatasetClear("dsFS_ASCHXM1,dsFS_ASCHXM2,dsFS_ASRPXM,dsFS_DPCTXM,dsFS_ASSPXD");

        	var sMethodName  = "SEARCH01";
        	var sInDataSet   = "";
        	var sOutDataSet  = "dsFS_ASCHXM1=dsFS_ASCHXM1 ";
        		sOutDataSet += "dsFS_ASCHXM2=dsFS_ASCHXM2 ";
        		sOutDataSet += "dsFS_ASRPXM=dsFS_ASRPXM ";
        		sOutDataSet += "dsFS_DPCTXM=dsFS_DPCTXM ";
        		sOutDataSet += "dsFS_ASSPXD=dsFS_ASSPXD ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {
        		
                arrParam[0] = "FSM0002";        //자산분류                          
                arrParam[1] = "";                                         
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRASCL_NAME";                         
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";         
                arrParam[6] = "0,1";                                     
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
        	    arrParam[0] = "FSM0001";                               //품목분류  
                arrParam[1] = "";                                         
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCLSF_NAME";                         
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";         
                arrParam[6] = "10,0";                                     
                //arrParam[6] = "0,1";                                     
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);

        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        	
        	    arrParam[0] = "FAM0001";                        //관리부서
                arrParam[1] = "";                                        
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";                                     
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); 
                	
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        	    arrParam[0] = "FAM0012";                          //관리사원       
                arrParam[1] = "";                                        
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";                                     
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); 
                
        	} else if ((obj.name == "imgHelpCLSF_CODE") || (obj.name == "edtCLSF_NAME")) {
        trace(obj.name);
        		if (this.tabFS_ASSTXM.tab1.edtCLSF_NAME.enable == false || this.dsFS_ASSTXM.rowcount < 1) return;

        		var sName = "FSMB0010P02";							//입력-자산번호
        		var sFormURL = "fsm::FSMB0010P02.xfdl";
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=500";                //현재 반응 없음
        			sOpenStyle += ",height=550";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        			var objArgumentList = {

        				 sCLSF_NAME	: this.tabFS_ASSTXM.tab1.edtCLSF_NAME.value

        			};
        			
        		
        		var sResponse = this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");

        	} else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {
        	
        		if(this.tabFS_ASSTXM.tab1.edtDEPT_NAME.enable==false||this.dsFS_ASSTXM.rowcount<1) return;

        	    arrParam[0] = "FAM0001";                                  //입력 - 부서
                arrParam[1] = "";                                          
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.edtDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "tabFS_ASSTXM.tab1.edtDEPT_NAME";                          
                arrParam[5] = "tabFS_ASSTXM.tab1.edtDEPT_CODE,tabFS_ASSTXM.tab1.edtDEPT_NAME";
                arrParam[6] = "0,1";                                      
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
        	} else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) {
        	
        		if(this.tabFS_ASSTXM.tab1.edtEMPL_NAME.enable==false||this.dsFS_ASSTXM.rowcount<1) return;

        	    arrParam[0] = "FAM0012";                                 //입력 - 사원
                arrParam[1] = "";                                         
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.edtEMPL_NAME.value);
                arrParam[3] = "N";                                     
                arrParam[4] = "tabFS_ASSTXM.tab1.edtEMPL_NAME";        
                arrParam[5] = "tabFS_ASSTXM.tab1.edtEMPL_NUMB,tabFS_ASSTXM.tab1.edtEMPL_NAME";          
                arrParam[6] = "0,1";                                      
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
        	} else if ((obj.name == "imgHelpCARX_MODL") || (obj.name == "edtCARX_MODLNAME")) {
        	
        		if (this.dsFS_ASSTXM.rowcount < 1) return;

        	    arrParam[0] = "FAM0009";                               
                arrParam[1] = "CARX_MODL";                                      
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.value); 
                arrParam[3] = "N";                                          
                arrParam[4] = "tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME"; 
                arrParam[5] = "tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL,tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME";          
                arrParam[6] = "0,1";                                      
                this.fnc_HelpDialogeAction(this, obj, arrParam); 
                          
        	} else if ((obj.name == "imgHelpFACT_CODE") || (obj.name == "edtFACT_NAME")) {
        	
        		if (this.dsFS_ASSTXM.rowcount < 1) return;

        	    arrParam[0] = "FAM0009";                               
                arrParam[1] = "FACT_CODE";                                      
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.value);
                arrParam[3] = "N";                                         
                arrParam[4] = "tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME";   
                arrParam[5] = "tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE,tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                                  
        	} else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) {
        	
        		if(this.tabFS_ASSTXM.tab1.edtCUST_NAME.enable==false||this.dsFS_ASSTXM.rowcount<1) return;

        	    arrParam[0] = "FAM0021";                                 //입력 - 거래처
                arrParam[1] = "";                                        
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.edtCUST_NAME.value);
                arrParam[3] = "N";                                          
                arrParam[4] = "tabFS_ASSTXM.tab1.edtCUST_NAME";             
                arrParam[5] = "tabFS_ASSTXM.tab1.edtCUST_CODE,tabFS_ASSTXM.tab1.edtCUST_NAME";
                arrParam[6] = "0,1";                                    
                this.fnc_HelpDialogeAction(this, obj, arrParam); 
                                        
        	} else if ((obj.name == "imgHelpPROJ_CODE") || (obj.name == "edtPROJ_NAME")) {
        	
        		if (this.tabFS_ASSTXM.tab1.edtPROJ_NAME.enable == false || this.dsFS_ASSTXM.rowcount < 1) return;

        	    arrParam[0] = "FSM0021";                             
                arrParam[1] = "";                                    
                arrParam[2] = this.fnc_Trim(this.tabFS_ASSTXM.tab1.edtPROJ_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "tabFS_ASSTXM.tab1.edtPROJ_NAME";                          
                arrParam[5] = "tabFS_ASSTXM.tab1.edtPROJ_CODE,tabFS_ASSTXM.tab1.edtPROJ_NAME";
                arrParam[6] = "0,1";                             
                this.fnc_HelpDialogeAction(this, obj, arrParam);                      
        	
        	}

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------------+
         |  사진등록 HelpPopUp Click!  |
         +-----------------------------*/
        this.fn_FileOpenHelpOnClick = function (obj,e) {

        	if (this.dsFS_ASSTXM.rowposition < 0) {
        		this.fnc_Message("TMM010");
        		return;
        	}

        	if (this.fnc_ToUpper(this.dsFS_ASSTXM.getRowType(this.dsFS_ASSTXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_Message("TMM125", "저장 후 사진 업로드 작업을 진행 하세요");
        		return;
        	}
        	
        	this.fnc_CallFileUplod(1, "jpg", "fn_CallFileUplodCallback");
        	
        }

        /*---------------------------+
         |  사진등록 Callback 함수!  |
         +---------------------------*/
        this.fn_CallFileUplodCallback = function(objFileDS,objForm){
        	
        	var objDS 		= objForm.dsFL_ATTACH;
        	var objMainDS 	= objForm.dsFS_ASSTXM;
        	
        	var iMainRow 	= objMainDS.rowposition;
        	
        	// 이미지 확장자 체크
        	var sExtn 		= objForm.fnc_ToUpper(objForm.fnc_Trim(objFileDS.getColumn(0, "EXTN_NAME")));
        	if ( sExtn != "BMP" && sExtn != "GIF" && sExtn != "JPEG" && sExtn != "JPG" && sExtn != "PNG" ) {
        		objForm.fnc_Message("TMM125", "이미지파일이 아닙니다");
        		return;
        	}

        	// 기존에 등록된 데이터는 삭제로 등록
        	if ( !objForm.IsNull( objMainDS.getColumn(iMainRow, "PFIL_NAME") ) ) {
        	
        		var iRow = objDS.addRow();
        		objDS.setColumn(iRow, "FILE_IDXX", objMainDS.getColumn(iMainRow, "FILE_IDXX"));
        		objDS.setColumn(iRow, "PFIL_NAME", objMainDS.getColumn(iMainRow, "PFIL_NAME"));
        		objDS.setColumn(iRow, "FILE_PATH", objMainDS.getColumn(iMainRow, "FILE_PATH"));
        		
        		if (objDS.updatecontrol) {
        			objDS.deleteRow(iRow);
        		} else {
        			objDS.setRowType(iRow, Dataset.ROWTYPE_DELETE);
        		}
         	}
         	
        	objMainDS.setColumn(iMainRow, "FILE_IDXX", objFileDS.getColumn(0, "FILE_IDXX"));
        	objMainDS.setColumn(iMainRow, "FILE_PATH", objFileDS.getColumn(0, "FILE_PATH"));
        	objMainDS.setColumn(iMainRow, "PFIL_NAME", objFileDS.getColumn(0, "PFIL_NAME"));
        	objMainDS.setColumn(iMainRow, "LFIL_NAME", objFileDS.getColumn(0, "LFIL_NAME"));

        	// tmp폴더에서 실제 폴더로 FILE_PATH 갱신
        	for (i = 0; i < objFileDS.rowcount; i++) {
        		
        		var iRow = objDS.addRow();
        		objDS.copyRow(iRow, objFileDS, i);
        		
        		if ( !objDS.updatecontrol ) objDS.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		
        	}
        	
        	objForm.fn_PhotoView(objMainDS, iMainRow);
        	
        }

        /*-----------------+
         |  사진파일 보기!  |
         +------------------*/
        this.fn_PhotoView = function (obj,iRow) {
        	
        	if (this.fnc_Length(this.fnc_Trim(obj.getColumn(iRow, "PFIL_NAME"))) > 0) {

        		this.tabFS_ASSTXM.tab1.btnASST_PHOTO.set_text("사진변경");
        		
        		var sFilePath 	= obj.getColumn(iRow, "FILE_PATH");
        		var sPfilName 	= obj.getColumn(iRow, "PFIL_NAME");
        		var sLfilName 	= obj.getColumn(iRow, "LFIL_NAME");
        		this.fnc_ShowImageFile(this.tabFS_ASSTXM.tab1.imgASST_PHOTO, sFilePath, sPfilName, sLfilName);
        		
        	} else {

        		this.tabFS_ASSTXM.tab1.imgASST_PHOTO.set_image("");
        		this.tabFS_ASSTXM.tab1.btnASST_PHOTO.set_text("사진등록");

        	}

        }

        /*-----------------+
         |  사진파일 팝업!  |
         +------------------*/
        this.fn_PhotoPopUp = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "PFIL_NAME"))) < 1) return;

        	var sName 		= "FSMB0010P01";
        	var sFormURL 	= "fsm::FSMB0010P01.xfdl";
        	var sOpenStyle  = "modeless=false";
        		sOpenStyle += ",autosize=true";
        		sOpenStyle += ",top=-1";
        		sOpenStyle += ",left=-1";
        		sOpenStyle += ",width=990";
        		sOpenStyle += ",height=800";
        		sOpenStyle += ",title=true";
        		sOpenStyle += ",titletext=상세보기";
        		sOpenStyle += ",status=false";
        		sOpenStyle += ",resizable=true";

        	var objArgumentList = {

        		 sFILE_PATH : this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "FILE_PATH")
        		,sFILE_NAME : this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "PFIL_NAME")

        	};

        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "");

        }

        
        /*------------------------------------------------------------------------------------------+
         |  신규입력시 미상각잔액을 취득가액 AND 단가및 취득수량 AND 상각주기에 따른 상각상태 처리!  |
         +-------------------------------------------------------------------------------------------*/
        this.dsFS_ASSTXM_OnColumnChanged = function (obj,e) {

        	obj.set_enableevent(false);
        	
        	if ((e.columnid == "ACQU_NUMB") || (e.columnid == "ACQU_COST")) {

        		var iTotAmt = obj.getColumn(e.row, "ACQU_NUMB") * obj.getColumn(e.row, "ACQU_COST");
        		obj.setColumn(e.row, "ACQU_PRIC", iTotAmt); //합계에 추가
        		obj.setColumn(e.row, "UNDP_BALE", iTotAmt); //미상각 잔액에 추가
        		obj.setColumn(e.row, "VATX_AMNT", iTotAmt * 0.1); //부가세 10%

        	} else if (e.columnid == "ACQU_PRIC") {

        		obj.setColumn(e.row, "UNDP_BALE", e.newvalue);

        	} else if (e.columnid == "DPCT_CYCL") {

        		if (e.newvalue == "NONE") {

        			obj.setColumn(e.row, "DPCT_STAT", "NOTG"); //상각상태(미대상)
        			obj.setColumn(e.row, "DPCT_METH", ""); //상각방법
        			obj.setColumn(e.row, "DPCT_CMPT", ""); //상각완료기준
        			obj.setColumn(e.row, "PRID_DPCT", ""); //내용년수
        			obj.setColumn(e.row, "DPCT_RATE", ""); //상각률
        			obj.setColumn(e.row, "PRID_LEGL", ""); //세무년수

        			this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_enable(false);
        			this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_enable(false);
        			this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_enable(false);
        			this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_enable(false);

        		} else {

        			obj.setColumn(e.row, "DPCT_STAT", "INPR"); //상각상태(상각중)

        			this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_enable(true);
        			this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_enable(true);
        			this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_enable(true);
        			this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_enable(true);

        		}
        	} else if (e.columnid == "DPCT_METH") {

        		if (e.newvalue == "STRT") {
        			// 정액법이면
        			obj.setColumn(e.row, "DPCT_RATE", 0); //상각율은 기본 0으로
        			this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_enable(false); //상각율 입력 불가

        		} else {

        			this.fn_DpctMeth();

        		}

        	} else if (e.columnid == "PRID_DPCT") {
        		// 내용년수
        		this.fn_DpctMeth();

        	} else if (e.columnid == "ASST_DTLX") {

        		this.fn_ControlSlipDiv(obj, this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_DTLX")));

        	} else if (e.columnid == "CHK") {

        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);
        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);
        	}

        	obj.set_enableevent(true);

        }

        /*-----------------+
         |  일괄등록 팝업!  |
         +------------------*/
        this.fn_BatchSave = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsFS_ASSTXM")) {

        		this.fnc_Message("TMM015", "일괄등록 작업");
        		return;

        	}
        	
        	var sName 		= "FSMB0010P03";
        	var sFormURL 	= "fsm::FSMB0010P03.xfdl";
        	var sOpenStyle  = "modeless=false";
        		sOpenStyle += ",autosize=true";
        		sOpenStyle += ",top=-1";
        		sOpenStyle += ",left=-1";
        		sOpenStyle += ",width=811";
        		sOpenStyle += ",height=370";
        		sOpenStyle += ",title=true";
        		sOpenStyle += ",titletext=자산일괄변경";
        		sOpenStyle += ",status=false";
        		sOpenStyle += ",resizable=true";

        	var objArgumentList = {

        // 		 sACCT_INTL	: this.fnc_Trim(objDs.getColumn(iRow, "ACCT_NAME"))
        // 		,sFSFM_CODE	: this.fnc_Trim(objDs.getColumn(iRow, "FSFM_CODE"))

        	};

        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");

        }

        /*------------------+
         |  팝업 Callback!  |
         +------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {

        	var sResponse = this.fnc_GetPopupRtn();
        	
        	if (sPopupId == "FSMB0010P03") {	// 일괄등록
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) this.fn_Search();
        		
        	} else if (sPopupId == "FSMB0010P02") {	// 자산번호
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) == 0) return;

        		this.tabFS_ASSTXM.tab1.edtCLSF_CODE.set_value(sResponse[10]);   //프로그램 ID
        		this.tabFS_ASSTXM.tab1.edtCLSF_NAME.set_value(sResponse[0]);    //프로그램 명
        		this.tabFS_ASSTXM.tab1.edtASCL_NAME.set_value(sResponse[3]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_value(sResponse[16]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_value(sResponse[12]);     //상각완료기준
        		this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_value(sResponse[7]);
        		this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_value(sResponse[7]);
        		this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_value(sResponse[8]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL.set_value(sResponse[17]);
        		this.tabFS_ASSTXM.tab1.edtASST_DTLX.set_value(sResponse[19]);
        			
        	}
        	
        }

        /*------------------------------------------------------+
         |  전표조회 팝업                                       |
         |  자동전표는처리는 회계쪽에서 삭제불가             |
         |  현재 창에서 삭제권한으로 삭제할수 있도록 처리함 |
         +-------------------------------------------------------*/
         
        /*메인그리드 */ 
        this.grdFS_ASSTXM_oncelldblclick = function (obj,e) {

        	if (this.grdFS_ASSTXM.getBindCellIndex("body", "SLIP_NUMB") == e.cell) {

        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASSTXM.getColumn(e.row, "SLIP_NUMB"));
        		//var sResponse = this.gfn_PopSlipForm(sSLIP_NUMB, "REV", this.sUSERLAVEL, "");
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "", ""); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		this.fn_Search();

        	}
        }

        /*변동이력탭*/
        this.grdFS_ASSTXM_oncelldblclick2 = function(obj,e) {

        	if (this.tabFS_ASSTXM.tab2.grdFS_ASCHXM1.getBindCellIndex("body", "SLIP_NUMB") == e.cell) {

        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASCHXM1.getColumn(e.row, "SLIP_NUMB"));
        	//	var sResponse = this.gfn_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL, "", ""); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		this.fn_Search();
        		
        	}
        }

        

        

        /*---------------------------------------+
         |  자산정보 Detail DIV(차량,기계,토지) |
         +----------------------------------------*/
        this.fn_ControlSlipDiv = function (obj,nRowValue) {

        	if (nRowValue == "CARX") {

        		// 기계장치
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtPFMC_CAPA.set_value("");
        		// 토지
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.mskLAND_AREA.set_value("");

        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(true);

        	} else if (nRowValue == "PLAT") {
        		// 기계장치
        		// 차량운반구
        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_YEAR.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtVHCL_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_FORM.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_DPCT.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskSYLD_CNTX.set_value("");

        		// 토지
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.mskLAND_AREA.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(true);

        
        	} else if (nRowValue == "LAND") {
        		// 토지
        		// 차량운반구
        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_YEAR.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtVHCL_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_FORM.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_DPCT.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskSYLD_CNTX.set_value("");
        		// 기계장치
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtPFMC_CAPA.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(true);

        	} else {
        		// 차량운반구
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_YEAR.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtVHCL_NUMB.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_FORM.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_DPCT.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP.mskSYLD_CNTX.set_value("");
        		// 기계장치
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.set_value("");
        		this.tabFS_ASSTXM.tab1.popSLIP2.edtPFMC_CAPA.set_value("");
        		// 토지
        		this.tabFS_ASSTXM.tab1.popSLIP3.mskLAND_AREA.set_value("");

        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);

        	}

        }

        
        /*---------------------------------------+
         |  Tabpage에 따른 자산정보 Detail DIV(차량,기계,토지) |
         +----------------------------------------*/
        this.fn_TabChange = function (obj,e) {

        	if (this.tabFS_ASSTXM.tabpages[e.postindex] == null) return;

        	if (e.postindex == 0) {

        		this.fn_ControlSlipDivVisible(obj, this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_DTLX")));

        	} else {

        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);

        	}

        }

        /*---------------------------------------+
         |  Onrowposchanged 자산정보 Detail DIV(차량,기계,토지) |
         +----------------------------------------*/
        this.fn_ControlSlipDivVisible = function (obj,nRowValue) {

        	if (this.tabFS_ASSTXM.tabindex != 0) return;

        	if (nRowValue == "CARX") {

        		// 차량운반구
        		// popSLIP.position = "21px 725px 968px 798px";
        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(true);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);

        	} else if (nRowValue == "PLAT") {

        		// 기계장치
        		// popSLIP2.position = "21px 725px 968px 798px";
        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(true);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);

        	} else if (nRowValue == "LAND") {

        		// 토지
        		// popSLIP3.position = "21px 725px 968px 798px";
        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(true);

        	} else {

        		this.tabFS_ASSTXM.tab1.popSLIP.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP2.set_visible(false);
        		this.tabFS_ASSTXM.tab1.popSLIP3.set_visible(false);

        	}

        }

        /*-----------------------+
         |  상각율 조회  |
         +------------------------*/
        this.fn_DpctMeth = function () {

        	if (this.dsFS_ASSTXM.rowcount < 1) return;

        	this.dsDPCT_RATE.clearData();

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsDPCT_RATE=dsDPCT_RATE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        /*---------------------------+
         |  전표생성 필수 입력 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {

        	// 취득월 비교
        	for (var i = 0; i < this.dsFS_ASSTXM_SLIP.getRowCount(); i++) {

        		for (var j = 0; j < this.dsFS_ASSTXM_SLIP.getRowCount(); j++) {

        			if (this.fnc_Left(this.dsFS_ASSTXM_SLIP.getColumn(j, "ACQS_DATE"), 6) != this.fnc_Left(this.dsFS_ASSTXM_SLIP.getColumn(i, "ACQS_DATE"), 6)) {

        				this.fnc_Message("TMM125", "취득월이 같아야 전표생성 가능합니다");
        				return false;

        			}

        		}

        	}

        	// 여러건 전표처리시 가장큰 취득일자를 기준으로 전표 Header 생성
        	for (var i = 0; i < this.dsFS_ASSTXM_SLIP.getRowCount(); i++) {

        		for (var j = 0; j < this.dsFS_ASSTXM_SLIP.getRowCount(); j++) {

        			if (this.dsFS_ASSTXM_SLIP.getColumn(j, "ACQS_DATE") > this.dsFS_ASSTXM_SLIP.getColumn(i, "ACQS_DATE")) {

        				this.dsFS_ASSTXM_SLIP.setColumn(i, "ACQS_DATE", this.dsFS_ASSTXM_SLIP.getColumn(j, "ACQS_DATE")); //가장큰 취득일자 업데이트

        			}

        		}

        	}

        	return true;

        }

        /*------------------------------------------+
         |  전표 생성// 건당 전표처리
         2014.12.16  1:n 전표처리|
         +-----------------------------------------------*/
        this.fn_SaveSlipNumb = function (obj,e) {

        	this.aKeyValue[0] = this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "ASST_NUMB"); //Key값 선언

        	this.dsFS_ASSTXM_SLIP.clearData();

        	// 선택한 대상만 복사
        	this.dsFS_ASSTXM.set_enableevent(false);
        	this.dsFS_ASSTXM.filter("CHK=='1'");
        	this.dsFS_ASSTXM_SLIP.copyData(this.dsFS_ASSTXM, true);
        	this.dsFS_ASSTXM.filter("");
        	this.dsFS_ASSTXM.set_enableevent(true);

        	// 필수값 체크
        	if (!this.fn_CreateSlipItemCheck()) return;

        	if (!this.fnc_Message("TMM145", "자산등록 전표 생성")) return;

        	// 전표처리시 자동팝업 호출을 위한 변수 선언
        	this.sPOSTGUBN = "GUBUN_PROC00";

        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsFS_ASSTXM_SLIP=dsFS_ASSTXM_SLIP:A";
        	var sOutDataSet = "dsFS_ASSTXM=dsFS_ASSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        this.grdFS_ASSTXM_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	/* Dataset에 Value 일괄 설정 */
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sChk_Gubn = this.fnc_Trim(objDataSet.getColumn(i, "CHK_GUBN"));

        		if (sChk_Gubn != "1") {
        			objDataSet.setColumn(i, "CHK", iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASSTXM.addEventHandler("oncolumnchanged", this.dsFS_ASSTXM_OnColumnChanged, this);
            this.dsFS_ASSTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsFS_ASSTXM_SLIP.addEventHandler("oncolumnchanged", this.dsFS_ASSTXM_OnColumnChanged, this);
            this.dsFS_ASSTXM_SLIP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASSTXM.addEventHandler("oncelldblclick", this.grdFS_ASSTXM_oncelldblclick, this);
            this.grdFS_ASSTXM.addEventHandler("onheadclick", this.grdFS_ASSTXM_onheadclick, this);
            this.Div0.btnBatch.addEventHandler("onclick", this.fn_BatchSave, this);
            this.Div0.btnSaveSlipNumb.addEventHandler("onclick", this.fn_SaveSlipNumb, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRACQS_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACQS_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.addEventHandler("onchanged", this.fn_TabChange, this);
            this.tabFS_ASSTXM.tab1.Shape0.addEventHandler("onclick", this.tabFS_ASSTXM_tab1_Shape0_onclick, this);
            this.tabFS_ASSTXM.tab1.calACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtPROJ_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtPROJ_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.edtPROJ_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtPAST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskSLIP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskPRID_LEGL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbASST_CSCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbACQU_CHNL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskUNDP_BALE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskFCHG_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskACQU_PRIC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskACQU_COST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskACQU_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskDPCT_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.mskPRID_DPCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbDPCT_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbUNIT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbDPCT_METH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtMUFT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtASST_STRD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtFILE_LGNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtDETL_STRD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCLSF_CODE.addEventHandler("oneditclick", this.tabFS_ASSTXM_tab1_edtCLSF_CODE_oneditclick, this);
            this.tabFS_ASSTXM.tab1.btnASST_PHOTO.addEventHandler("onclick", this.fn_FileOpenHelpOnClick, this);
            this.tabFS_ASSTXM.tab1.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.imgHelpPROJ_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.imgASST_PHOTO.addEventHandler("onclick", this.fn_PhotoPopUp, this);
            this.tabFS_ASSTXM.tab1.mskSAVG_VALU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtBARX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtBUYX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtASST_DTLX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.edtCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.popSLIP.Shape0.addEventHandler("onclick", this.tabFS_ASSTXM_tab1_Shape0_onclick, this);
            this.tabFS_ASSTXM.tab1.popSLIP.mskACQU_NUMB00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.mskSYLD_CNTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.mskCARX_DPCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODLNAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_MODL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_FORM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtVHCL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.edtCARX_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP.imgHelpCARX_MODL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.imgHelpCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.Shape0.addEventHandler("onclick", this.tabFS_ASSTXM_tab1_Shape0_onclick, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.mskACQU_NUMB00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.edtFACT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.edtPFMC_CAPA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP2.imgHelpFACT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabFS_ASSTXM.tab1.chkIDLE_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP3.Shape0.addEventHandler("onclick", this.tabFS_ASSTXM_tab1_Shape0_onclick, this);
            this.tabFS_ASSTXM.tab1.popSLIP3.mskACQU_NUMB00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.popSLIP3.mskLAND_AREA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab1.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabFS_ASSTXM.tab2.grdFS_ASCHXM1.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.tabFS_ASSTXM.tab2.grdFS_ASCHXM1.addEventHandler("oncelldblclick", this.grdFS_ASSTXM_oncelldblclick2, this);
            this.tabFS_ASSTXM.tab2.grdFS_ASCHXM1.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.tabFS_ASSTXM.tab3.grdFS_ASCHXM2.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.tabFS_ASSTXM.tab3.grdFS_ASCHXM2.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.tabFS_ASSTXM.tab4.grdFS_ASRPXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.tabFS_ASSTXM.tab4.grdFS_ASRPXM.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.tabFS_ASSTXM.tab5.grdFS_DPCTXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.tabFS_ASSTXM.tab5.grdFS_DPCTXM.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.tabFS_ASSTXM.tab6.grdFS_ASSPXD.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.tabFS_ASSTXM.tab6.grdFS_ASSPXD.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
