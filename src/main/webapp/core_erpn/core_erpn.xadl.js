﻿(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "static", null, "", "0", "0");
            this._addService("default_typedef.xml", "css", "css", "./c/css/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "frame", "form", "./c/frame/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide", "form", "./c/guide/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "template", "form", "./c/template/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "image", "file", "./c/image/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "sample", "form", "./c/sample/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "script", "js", "./c/script/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "common", "form", "./c/common/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "main", "form", "./c/main/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "tmm", "form", "./u/tmm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "fam", "form", "./u/fam/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "bdm", "form", "./u/bdm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "fsm", "form", "./u/fsm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "trm", "form", "./u/trm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "pay", "form", "./u/pay/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "hrm", "form", "./u/hrm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "txm", "form", "./u/txm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "pac", "form", "./u/pac/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcm", "form", "./u/pcm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "pdm", "form", "./u/pdm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "prp", "form", "./u/prp/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "mac", "form", "./u/mac/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "mcm", "form", "./u/mcm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "mdm", "form", "./u/mdm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "edm", "form", "./u/edm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "evm", "form", "./u/evm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "hat", "form", "./u/hat/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "wfm", "form", "./u/wfm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "yea", "form", "./u/yea/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "temp", "form", "./u/temp/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "mrp", "form", "./u/mrp/", "dynamic", null, "", "0", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
            		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"UbiReport", "classname":"nexacro.UbiViewer", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("GBL_HTTPURL", "http://localhost:9030/NSCOM_MIS", false);
            this._addVariable("GBL_USERID", "2005012", false);
            this._addVariable("GBL_EMPLNO", "2005012", false);
            this._addVariable("GBL_LOGINIP", null, false);
            this._addVariable("GBL_USERNM", "송은형", false);
            this._addVariable("GBL_USERPW", null, false);
            this._addVariable("GBL_SECTCD", "SECT01", false);
            this._addVariable("GBL_SECTNM", "경영지원소속", false);
            this._addVariable("GBL_DEPTCD", "301007", false);
            this._addVariable("GBL_DEPTNM", "경영지원팀", false);
            this._addVariable("GBL_OPOSCD", "F66", false);
            this._addVariable("GBL_OPOSNM", "대리", false);
            this._addVariable("GBL_DEPTCD1", null, false);
            this._addVariable("GBL_DEPTNM1", null, false);
            this._addVariable("GBL_ENFCCD", null, false);
            this._addVariable("GBL_ENFCNM", null, false);
            this._addVariable("GBL_COMPANYCODE", "A", false);
            this._addVariable("GBL_COMPANYNAME", null, false);
            this._addVariable("GBL_COLORNORMAL", "\#ffffff", false);
            this._addVariable("GBL_COLORINSERT", "\#d1f6ffff", false);
            this._addVariable("GBL_COLORUPDATE", "\#fff4dcff", false);
            this._addVariable("GBL_COLORDISABLE", "\#ebebebff", false);
            this._addVariable("GBL_COLORGROUP1", "\#d7f1eeff", false);
            this._addVariable("GBL_COLORGROUP2", "\#d9f9aeff", false);
            this._addVariable("GBL_COLORGROUP3", "\#e6e6e6ff", false);
            this._addVariable("GBL_WINMAXNUM", "15", false);
            this._addVariable("GBL_THEMECD", "PURPLE", false);
            this._addVariable("GBL_LANGCD", "ko", false);
            this._addVariable("GBL_SYSTCD", "HMS", false);
            this._addVariable("GBL_RPTFILENAME", null, false);
            this._addVariable("GBL_RPTPARAM", null, false);
            this._addVariable("GBL_RPTURL", "http://localhost:9030/NSCOM_MIS/src/main/webapp/report", false);
            this._addVariable("GBL_RPTFILEPATH", null, false);
            this._addVariable("GBL_ODIPARAM", null, false);
            this._addVariable("GBL_GROUPWAREURL", "http://172.21.52.21/jsp/gian/gian2.jsp", false);
            this._addVariable("GBL_SDIMENUNAME", null, false);
            this._addVariable("GBL_PRT_CNT", "0", false);
            this._addVariable("GBL_SERVERGUBUN", "LOCAL", false);
            this._addVariable("GBL_SECR_KEY", null, false);
            this._addVariable("GBL_SECR_IV", null, false);
            this._addVariable("GBL_SLIPMASK", "##-########-####", false);
            this._addVariable("GBL_APPROVALURL", "http://www.nsgportal.net/ekp/user.do?cmpID=CK", false);
            this._addVariable("GBL_DBTYPECD", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"9\"/><Column id=\"DEVC_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"55\"/><Column id=\"MNUT_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"UPME_IDXX\" type=\"STRING\" size=\"4000\"/><Column id=\"PROG_IDXX\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_FUNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_PATH\" type=\"STRING\" size=\"100\"/><Column id=\"USER_AUTH\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"IMAG_IDXX\" type=\"STRING\" size=\"1\"/><Column id=\"EXTE_IMAG\" type=\"STRING\" size=\"1\"/><Column id=\"CLOS_IMAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSKN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSGE_CNTT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSGE_CODE\">HRM001</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 확정되었습니다. 변경/삭제 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM002</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 연차를 생성 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM003</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">최종학교는 한개만 선택해 주십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM004</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">등록하신 업무분장을 승인요청 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM005</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">승인요청을 취소하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM006</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">현재 작성된 쿼리를 초기화 한 후 다시 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM007</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">조건검색 조회 중 오류가 발생하였습니다.\\n관리자에게 문의하시기 바랍니다\\n* 오류내용\\n[ @ ]</Col></Row><Row><Col id=\"MSGE_CODE\">HRM008</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@을(를) 신청 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM009</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">증명서 발급이 미승인 상태입니다. 승인 후 인쇄 할 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM010</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@을(를) 인쇄 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM011</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">업무분장 확인처리를 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM012</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">부서구분 : 직영관리사무소 또는 재개발관리사무소를 선택하여 주십시요!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM013</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">업무분장 확인취소처리를 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM014</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 @ 되었습니다. @ 할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM015</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">등록하신 변경사항을 전송하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM016</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">변경요청을 취소하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM017</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">요청내역을 선택해 주세요!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM018</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">결재요청 되었습니다. @ 할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM019</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">조사자 정보가 존재하지 않습니다. 조사자 정보를 먼저 조회하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM020</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[성명 : @ ] 자료를 제출하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM021</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[성명 : @ ] 자료를 제출 취소하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM022</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이미 제출완료 된 자료입니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM023</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ @ ] 한개만 선택할 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM024</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">그리드에 조회된 자료가 없습니다. 조회 후 다시 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM025</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">평가위원 [ @ ]명을 선정하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM026</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ @ ] 대상자가 아니므로 지원서 작성이 불가능합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM027</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@ 자료가 존재하지 않습니다. 조회 후 진행하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM028</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[승진명 : @ ] 지원하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM029</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[승진명 : @ ] 지원취소하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM030</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">정원책정일 : [@] 자료를 생성 하였습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM031</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@ ] 인사발령을 확정 처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM032</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 인사발령 확정을 취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM033</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 인사발령 @ 건을 확정 또는 취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM034</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 변경신청 @건을 승인처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM035</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">사원 조회 후 진행하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM036</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이전자료복사를 진행하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM037</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">적용할 병역사항이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM038</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">선택된 명단에 정기호봉승급인원이 존재하지 않습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM039</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">자녀정보를 삭제하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM040</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">변경요청이 정상적으로 처리되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM041</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">변경요청취소가 정상적으로 처리되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM042</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">변경요청한 자료가 존재합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM043</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">발령사유가 요양인 경우 비고란에 병명을 입력하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM044</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">해당 내역에 대한 증빙서류를 첨부하여야 합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM045</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">가족수당을 지급받는 가족입니다\\n급여관리&gt;가족수당신청 에서 삭제 신청해 주시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM046</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">가족수당을 지급받는 가족입니다\\n급여관리&gt;급여기본사항관리&gt;가족사항에서 삭제해 주시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM047</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">답변이 작성된 자료는 수정/삭제처리 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM048</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">5건이상 입력할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM049</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 승인처리 되었습니다. @할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM050</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">1건만 입력할 수 있습니다</Col></Row><Row><Col id=\"MSGE_CODE\">HRM051</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]건을 승인요청 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM052</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">변경된 자료가 존재합니다. 먼저 변경된 자료 저장 후 승인 요청을 하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM053</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">승인 요청이 정상적으로 처리되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM054</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">승인 취소요청이 정상적으로 처리되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM055</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">진행상태가 [  @ ] 인 문서만 [  @ ]할 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM056</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]건을 요청취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM057</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">진행상태가 [  임시저장 ] 인 문서만 [  @ ]할 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM058</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 [ @ ] 건을 승인처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM059</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@:@]에 [@ : @] 이 중복되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM060</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@]을(를) 발급요청 하시겟습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM061</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">발급요청을 취소하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">HRM062</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 자료를 삭제하시겠습니까? 경력개발계획에 대한 내용은 전부 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">HRM063</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">경력개발 작성자가 아닙니다. 확인바랍니다!</Col></Row><Row><Col id=\"MSGE_CODE\">HRM064</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">계약 확인 후 인쇄할 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY001</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이미 존재하는 [@]월 자료는 초기화 되고\\n[@]월 자료로 [@]월 자료를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY002</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 직원들의 [ @ ]을(를) 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY003</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 직원들의 [ @ ]을(를) 삭제하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY004</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">의료비명세서의 지급액은 부양가족의 의료비 금액과 같아야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY005</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">기부금명세서의 기부액은 부양가족의 기부금 금액과 같아야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY006</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전산매체 신고할 [@] 내역이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY007</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">전산매체 파일을 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY008</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 전산매체 파일이 생성되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY009</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">퇴직금 추계를 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY010</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]을(를) 선택하여 주십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY011</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이미 존재하는 [@]월 자료는 초기화 하고\\n[@]월 자료로 [@]월 자료를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY012</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 시간외 근무시간을 집계하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY013</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">기준년월을 입력후 집계하십시오.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY014</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">연봉대상자 연간급여를 계산하시겠습니까?\\n기존 데이터는 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY015</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">퇴직처리가 이미 마감 되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY016</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">퇴직급여 자료를 가져오시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY017</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[회차 : @] 시뮬레이션을 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY018</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">인사변동사항을 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY019</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">연차일수를 생성하시겠습니까?\\n기존 데이터는 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY020</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 급여의 분개처리를 진행 하시겠습니까?\\n기존 데이터는 삭제 후 재 처리 됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY021</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 급여의 전표를 취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY022</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 급여의 자동전표를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY023</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">분개처리 후 전표생성 해 주십시요!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY024</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 확정되었습니다. @ 할 수 없습니다!.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY025</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이미 존재하는 [@] [@]년 자료는 초기화 하고\\n[@]년 자료로 [@]년 자료를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY026</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] [@] 납부내역을 집계하시겠습니까?\\n기존에 존재하는 자료는 초기화됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY027</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@ 전산매체 파일을 생성할 자료가 존재하지 않습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY028</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">퇴직연금 기준임금 집계를 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY029</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">출력할 자료를 선택하지 않았습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY030</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">승진자 연봉을 계산하시겠습니까?\\n기존 데이터는 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY031</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">15일 이후에는 변경할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY032</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">차변과 대변중 한쪽에만 금액을 입력하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY033</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">차변금액과 대변금액이 모두 0일수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY034</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">차변합계와 대변합계 금액이 다를수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY035</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[전년 잔여분] / [금년 잔여분] 둘 중 하나는 선택해야 처리하실 수 있습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY036</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 자료의 자동전표를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY037</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전표 생성된 자료입니다. 전표 취소 후 다시 처리 하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY038</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전표 취소할 자료가 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY039</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 만근급여자료를 생성하시겠습니까?\\n기존에 존재하는 자료는 초기화됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY040</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">급여일지 마감 후 작업하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY041</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 급여명세서 이메일을 발송하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY042</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">급여명세서 이메일 발송을 완료하였습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY043</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">연말정산이 확정되지 않았습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY044</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">사업자별 예치율(%)의 합은 100이어야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY045</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">마감된 급여내역이 존재합니다. [@]을(를) [@]할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY046</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">급여처리 데이터가 존재합니다. @할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY047</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 급여처리가 마감되었습니다. 급여처리 및 삭제가 불가 합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY048</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@가 등록되어 있지 않습니다.- @ (사번 : @)</Col></Row><Row><Col id=\"MSGE_CODE\">PAY049</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">부양가족 처리를 먼저 실행하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY050</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">입력마감 전 입니다. 입력마감 후 실행해주세요!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY051</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[성명 : @ (@), 신청일 : @], 이미 승인되었으므로 변경할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY052</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">DC형 퇴직연금 가입자는 산정할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY053</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">소득공제자료 업로드 처리가 정상적으로 완료되었습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY054</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">인사변동사항을 급여일할계산식에 반영하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY055</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 인원을 마감처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY056</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">작성기간이 아닙니다.!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY057</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">입력가능한 급여체크리스트가 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY058</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 인원을 일괄처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY059</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">급여은행 및 계좌정보가 누락되었습니다. [급여관리&gt;기준자료&gt;급여기본내역관리]에서 입력 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY060</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">납입부담금을 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY061</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">마감된 변동급여내역이 존재합니다. [@]을(를) [@]할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">PAY062</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 를 생성하시겠습니까? 해당 @의 기존자료는 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAY063</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 의 퇴직충당금을 삭제하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAY064</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">현재 기준일 이후에 처리된 퇴직충당금이 존재합니다. 삭제할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM030</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">메뉴에 대한 권한이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM200</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">마스터 선택 후 행추가 가능합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM001</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 은(는) 필수 조회조건 입니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM002</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 자료를 삭제 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM003</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">변경된 데이터가 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM004</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택된 자료 [ @ ]건를 삭제 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM005</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]는(은) [@]자리 입니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM006</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">변경된 자료가 있습니다. 조회 시 변경 자료는 초기화 됩니다\\n조회 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM007</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">삭제 할 자료가 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM008</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]는(은) 필수입력 항목입니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM009</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">입력하신 주민등록번호가 올바르지 않습니다\\n정확한 주민등록번호를 입력해 주세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM010</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">선택된 항목이 없습니다! 선택 후 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM011</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">인쇄할 자료가 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM012</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">하위데이터가 존재합니다. 모두 삭제 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM013</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">사원을 먼저 선택하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM014</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">정확한 사업자 번호를 입력해 주세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM015</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">저장 후 @ 하여 주십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM016</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">하위데이터가 존재합니다. 하위데이터 삭제후 처리바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM017</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">변경된 자료가 있습니다. 화면을 종료하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM018</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]건이 조회 되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM019</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@건이 정상적으로 저장 되었습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM020</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">삭제 할 자료를 선택해 주세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM021</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 할 자료를 그리드에서 선택 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM022</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]이(가) [@]보다 큽니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM023</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">변경된 자료가 있습니다. 진행 시 변경 자료는 초기화 됩니다. 그래도 진행 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM024</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 경력평가의 대상자생성을 실행합니다\\n기존의 대상자 및 평가정보 자료는 삭제됩니다\\n계속하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM025</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@]을 입력하여 주십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM026</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 경력평가 처리를 진행하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM027</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택하신 건에 대하여 확인처리를 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM028</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ @ ]이 [ @ ]보다 이전 날짜일 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM029</Col><Col id=\"MSKN_CODE\"/><Col id=\"MSGE_CNTT\">이 프로그램은 화면 해상도 1680 * 1050 이상에서 최적화 되어 있습니다\\n해상도를 1680 * 1050 이상으로 변경하여 사용하시길 권합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM031</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">인쇄 할 자료가 없습니다. 조회 후 인쇄 하십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM032</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">추가 할 Head 정보가 없습니다. 조회 후 다시 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM033</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">SMS를 발송 할 자료가 없습니다. 조회 후 SMS 발송을 하십시요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM034</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택하신 건에 대하여 SMS 발송을 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM035</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">처리상태가 [ 요청 ]이 아니므로 삭제할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM036</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">타 사용자가 작성한 자료는 삭제할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM037</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택된 자료 [ @ ] 건을 처리하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM038</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ @ ] 은(는) 선택할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM039</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">자료 조회 중 오류가 발생하였습니다\\n관리자에게 문의하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM040</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">다운로드 가능한 엑셀 업로드 양식파일이 존재하지 않습니다. 관리자에게 문의하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM041</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">삭제가 완료되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM042</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@ 이 @ 보다 큽니다! 확인 후 입력 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM043</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 등록된 수신자입니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM044</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전자결재 요청내역이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM045</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전자결재 취소내역이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM046</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">전체 사용자의 비밀번호를 모두 초기화하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM047</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]의 비밀번호를 초기화하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM048</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">이미 해당사용자가 존재합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM049</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택된 사용자 @ 명을 [ @ ] 권한그룹에서 제거하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM050</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 사용자를 [ @ ] 권한그룹에서 제거하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM051</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">아직 개발이 완료되지 않았습니다. 완료 후 실행 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM052</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">※ &lt;b&gt;&lt;font color='005BEC'&gt;@건&lt;/font&gt;&lt;/b&gt;이 조회 되었습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM053</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">입력된 쿼리가 존재합니다. 내용을 지우고 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM054</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ @ ] 은(는) 0 이상의 값을 입력하여야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM055</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@ 메뉴를 MY메뉴에 추가 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM056</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@ 메뉴를 MY메뉴에서 삭제 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM057</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 년도 휴일처리를 진행하시겠습니까?\\n진행시 기존의 자료는 삭제됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM058</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[ 결재종류 : @ ] 는 중복등록 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM059</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">부서나 사원번호를 입력 후 조회하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM060</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">결재라인은 7명까지만 가능합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM061</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@ 처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM062</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">결재문서번호 : [@] 를 @ 처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM063</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">체크하신 결재문서 [@]건을 일괄 처리 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM064</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] \\n기존의 자료는 삭제됩니다\\n계속하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM103</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">저장을 완료 하였습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM104</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">삭제된 자료 [ @ ]건이 있습니다! 저장 작업을 하지 않으시면 삭제되지 않습니다!\\n\\n저장하지 않고 종료하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM106</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]값을 선택 후 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM107</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 항목의 값이 [ @ ]이면 삭제 할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM108</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 항목의 값을 [ @ ]에서 [ @ ]값으로 수정 할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM109</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]과 [ @ ]의 값이 다릅니다. 확인하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM110</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">한개 이상 체크 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM111</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 을/를 초과할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM112</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">검색하신 조건의 자료가 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM113</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">이미 적용되었습니다. 다시 적용하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM114</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 존재하지 않습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM115</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">정확한 비밀번호를 입력 후 엔터키를 누르세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM116</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">현재 실행중인 모든 프로그램을 닫고 시스템을 종료하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM117</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">현재 실행중인 모든 프로그램을 종료하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM118</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 자료를 생성하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM119</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">정확한 [ @ ]을/를 입력하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM120</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">비밀번호가 성공적으로 변경 되었습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM121</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">비밀번호를 정확히 입력하세요!(비밀번호 다름)</Col></Row><Row><Col id=\"MSGE_CODE\">TMM122</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">신규 비밀번호가 같지 않습니다. 확인하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM123</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">기존 비밀번호와 신규 비밀번호가 같습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM124</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">삭제 할 메뉴를 먼저 선택 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM125</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@ !!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM126</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">프로그램에 문제가 있습니다(Head자료 없음). 해당 폼을 종료 후 다시 작업 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM127</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@]만 저장 가능합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM128</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 자료를 수정하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM129</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 자료를 정상적으로 삭제하였습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM130</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 작업을 정상적으로 완료 하였습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM131</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">해당 프로그램의 서비스(Class)명을 정의하지 않았습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM132</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">해당 프로그램의 서비스(Class) 파일이 존재하지 않습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM133</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">첨부파일은 @MB(메가) 미만의 파일만 가능합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM134</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]값은 [ @ ]보다 크고 [ @ ]보다 작아야 합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM135</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 항목의 값이 [ @ ]이면 입력 할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM136</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[@] 를 정상적으로 생성 하였습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM137</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">저장하지 않은 내용이 있습니다. 확인을 누르면 저장하지 않은 내용이 무시됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM138</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">취소되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM139</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM140</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM141</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">조회된 데이터가 없습니다. 조회 후 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM065</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 를 삭제하시겠습니까? \\n삭제시 해당 아이디의 사용자도 모두 초기화됩니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM066</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">구부서코드, EMR부서코드는 같이 입력하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM067</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">최종결재자의 결재구분을 확인하십시오.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM068</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">증명사진으로 등록하시기 바랍니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM069</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">본 결재문서의 결재라인에 예산통제를 포함 할  수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM070</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">결재라인에 전결, 대결, 결재는 중복에서 입력할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM072</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 값은 반드시 입력 하셔야 합니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM073</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 건이 정상적으로 처리되었습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM074</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[테스트일 : @, 제목 : @]  \\n처리상태가 [처리중] 또는 [처리완료] 상태이므로 삭제할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM075</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">정확한 법인번호를 입력해 주세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM076</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">버튼 사용권한이 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM077</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">[@] 이(가) 중복 입력되었습니다. 확인 후 다시 작업하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM078</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">임시저장상태인 문서만 결재신청 가능합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM079</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">프로그램ID 자릿수를 확인해주십시오!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM080</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">현재 [@]인 상태입니다\\n[@] 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM081</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">날짜형식을 확인하세요! (YYYYMMDD)</Col></Row><Row><Col id=\"MSGE_CODE\">TMM082</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">날짜형식을 확인하세요! (YYYYMM)</Col></Row><Row><Col id=\"MSGE_CODE\">TMM083</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@은 한쪽만 입력할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM084</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">@의 FROM은 TO보다 작아야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM085</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">해당 @ 정보가 존재합니다. 저장 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM086</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">하위부서가 있는 경우 폐기할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM087</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">@ 부서를 폐기하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">TMM100</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">내부 승인번호 : 0075 입니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM101</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">과거자료는 수정할수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM102</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">다운로드 대상 정보가 부족합니다. 다운로드 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM71</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">1이하의 값을 입력하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM901</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전자결재 문서 정보가 부족합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM902</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전자결재 처리된 내역은 삭제할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM903</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">전자결재 처리된 내역은 수정할 수 없습니다!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM142</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">저장하지 않은 자료가 있습니다. 저장 후 [@] 작업을 계속 하세요!</Col></Row><Row><Col id=\"MSGE_CODE\">TMM143</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 값은 [ @ ] 값 보다 커야 합니다.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM144</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ] 변경하려면 [@] 삭제 한 후 변경하세요.</Col></Row><Row><Col id=\"MSGE_CODE\">TMM300</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">[ @ ]</Col></Row><Row><Col id=\"MSGE_CODE\">PAC001</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">미완료가 아닌 상태에서 세금계산서를 생성할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC002</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 데이터를 개별생성 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC003</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 데이터를 합산생성 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC004</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">완료가 아닌 상태에서 세금계산서를 삭제할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC005</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">선택한 데이터를 삭제 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC006</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">전자 세금계산서를 발송 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC007</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">전자 세금계산서를 발송 취소 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC008</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">완료 상태에서 전표 생성을 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC009</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">완료 상태에서 오류전표삭제를 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC010</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">미완료 상태에서 전표삭제를 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC011</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">미완료 상태에서 오류전표삭제를 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC012</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">오류상태에서 전표생성을 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC013</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">오류상태에서 전표삭제를 할 수 없습니다.</Col></Row><Row><Col id=\"MSGE_CODE\">PAC014</Col><Col id=\"MSKN_CODE\">YN</Col><Col id=\"MSGE_CNTT\">청구일자를 확인 하셨습니까?</Col></Row><Row><Col id=\"MSGE_CODE\">PAC015</Col><Col id=\"MSKN_CODE\">OK</Col><Col id=\"MSGE_CNTT\">청구일자는 필수 입력 사항입니다.</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsOpenFormList", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POPP_NAMEION\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_OPENID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsMyMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"9\"/><Column id=\"DEVE_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"55\"/><Column id=\"TREE_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"UPXX_NAME\" type=\"STRING\" size=\"4000\"/><Column id=\"PROG_IDXX\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_FUNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_PATH\" type=\"STRING\" size=\"100\"/><Column id=\"USER_AUTH\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"IMAG_IDXX\" type=\"STRING\" size=\"1\"/><Column id=\"EXTE_IMAG\" type=\"STRING\" size=\"1\"/><Column id=\"CLOS_IMAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsAddMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"9\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsFindMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"9\"/><Column id=\"DEVC_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"55\"/><Column id=\"MNUT_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"UPME_IDXX\" type=\"STRING\" size=\"4000\"/><Column id=\"PROG_IDXX\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_FUNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_PATH\" type=\"STRING\" size=\"100\"/><Column id=\"USER_AUTH\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_LEVL\" type=\"STRING\" size=\"1\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"IMAG_IDXX\" type=\"STRING\" size=\"1\"/><Column id=\"EXTE_IMAG\" type=\"STRING\" size=\"1\"/><Column id=\"CLOS_IMAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsHolidayInfo", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("dsFrontArgs", this);
            obj._setContents("<ColumnInfo><Column id=\"ARGS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ARGS_VALU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("core_erpx");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("inbus.xtheme");
            this.set_httptimeout("600");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1051", "834", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_openalign("center middle");
            mainframe.style.set_border("1 solid #858585ff");
            mainframe.style.set_bordertype("normal 0 0");
            mainframe.style.set_font("antialias 9 Dotum");
            mainframe.style.set_titlebarheight("33");
            mainframe.set_titletext("신경영정보시스템");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("0,*");

            
            var frame1 = new ChildFrame("FRMTOP", "fixed", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_showtitlebar("false");
            frame1.style.set_border("0px none white");
            frame1.set_dragmovetype("none");
            frame1.set_resizable("true");
            var frame2 = new HFrameSet("HFrameSet", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("0,*");

            
            var frame3 = new ChildFrame("FRMLEFT", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_showtitlebar("false");
            frame3.style.set_border("0px none white");
            frame3.set_dragmovetype("none");
            frame3.set_autosize("false");
            frame3.set_resizable("true");
            var frame4 = new VFrameSet("FRMBODY", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame4.name, frame4);

            var frame5 = new FrameSet("MAIN_WORK", "absolute", null, null, null, null, null, null, frame4);
            frame4.addChild(frame5.name, frame5);
            frame5.style.set_background("#ffffffff");

            
            var frame6 = new ChildFrame("FRMBOTTOM", "absolute", null, null, null, null, null, null, "", frame4);
            frame4.addChild(frame6.name, frame6);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame6.set_resizable("true");
            frame6.set_showtitleicon("false");

            var frame7 = new ChildFrame("FRMDASHBOARD", "absolute", null, null, null, null, null, null, "", frame4);
            frame4.addChild(frame7.name, frame7);
            frame7.set_dragmovetype("none");
            frame7.set_resizable("true");
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.application_onload, this);
            this.addEventHandler("onloadforms", this.application_onloadforms, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.addIncludeScript("core_erpn.xadl", "script::lib_script_common.xjs");
        this.addIncludeScript("core_erpn.xadl", "script::lib_base64.xjs");
        this.registerScript("core_erpn.xadl", function() {
        /*******************************************************************************************
         
         - 넥사크로플랫폼 기본 실행 전역 스크립트
         @name comLogin.xfdl
         @version 1.4
         @author 김석두
         @fileOverview
            본 Script는 Launch Project를 통해 실행될 때 의미가 있습니다
            Login, MainFrame 설정 등 기본 소스만 추가 합니다. 되도록 본 소스는 수정하지 않습니다.
        	소스의 수정 및 추가 시 반드시 해당 P/L의 승인 후 작업하세요!!
         @description
            date			name		explanation
            ==================================================================
            2014.07.03		ksd			최초 작성
            2016.05.29		jsh			프레임워크 교체로 수정
            ==================================================================
            
         *******************************************************************************************/

        //include "script::lib_script_common.xjs"
        //include "script::lib_base64.xjs"

        application.FRMTOP		 = undefined; //Frame Name - Top
        application.FRMLEFT		 = undefined; //Frame Name - Left
        application.FRMBODY		 = undefined; //Frame Name - Body
        application.MAINWORK	 = undefined; //Frame Name - 작업영역
        application.FRMBOTTOM	 = undefined; //Frame Name - 하단 영역
        application.FRMDASHBOARD = undefined; //Frame Name - 대시보드

        this.application_onload = function (obj,e) {

        	application.GBL_USERID = "";
        	
        	// 브라우저 언어셋 이용하여 기본 언어코드 설정
        	var lang = nexacro.BrowserLang;
        		
        	if (lang.indexOf("-") > -1) {
        		lang = lang.substring(0, lang.indexOf("-"));
        	} else if (lang.indexOf("_") > -1) {
        		lang = lang.substring(0, lang.indexOf("_"));
        	}
        	
        	if (lang.length == 0) {
        		lang = "ko";
        	}
        	
        	application.GBL_LANGCD = lang.toLowerCase();
        	
        	
        	//SDI Menu ID passed by main.jsp
        	if (this.IsNull(application.sdiMenuId)) {
        		application.GBL_SDIMENUNAME = "";
        	} else {
        		application.GBL_SDIMENUNAME = application.sdiMenuId;
        	}

        	//Frame type passed by main.jsp
        	if (this.IsNull(application.frameType)) {
        		application.GBL_FRAMETYPE = "MDI"; 
        	} else {
        		application.GBL_FRAMETYPE = application.frameType; 
        	}

        	//Server type passed by main.jsp
        	if (this.IsNull(application.serverType)) {
        		application.GBL_SERVERGUBUN = "LOCAL"; 
        	} else {
        		application.GBL_SERVERGUBUN = application.serverType; 
        	}
        	
        	//SSO - UserId
        	if (this.IsNull(application.ssoUserId)) {
        		application.GBL_USERID = "";
        	} else {
        		application.GBL_USERID = application.ssoUserId;
        	}
        	
        	//SSO - SystemCode
        	if (this.IsNull(application.systemType)) {
        		application.GBL_SYSTCD = "HMS";
        	} else {
        		application.GBL_SYSTCD = application.systemType.toUpperCase();
        	}
        	
        	//SSO - FrameType & Menu
        	if (this.IsNull(application.sdiMenuId) && application.GBL_FRAMETYPE == "MDI") {
        		application.GBL_SDIMENUNAME = "";
        	} else {
        		application.GBL_SDIMENUNAME = "M" + application.sdiMenuId.toUpperCase();	//SDI
        	}	
        	
        	// 브라우저를 통하는 경우에는 실제 접속한 주소를 이용하여 처리
        	if (nexacro.Browser != 'Runtime') {
        		// IP 접근시 허용되도록 'LOCAL' 처리 제외
        		//if (application.GBL_SERVERGUBUN != "LOCAL") {
        			application.GBL_HTTPURL = application.svcDomain;
        		//}
        	}
        	
        	application.mainframe.set_titletext(application.mainframe.titletext);
        	if (application.GBL_SERVERGUBUN == "LOCAL") {
        		application.mainframe.set_titletext(application.mainframe.titletext + " - Local 서버");
        	} else if (application.GBL_SERVERGUBUN == "TEST") {
        		application.mainframe.set_titletext(application.mainframe.titletext + " - Test 서버");
        	}
        	
        	// 코어 설정값 & 전역변수 셋
        	application.GBL_RPTURL  = application.GBL_HTTPURL + "/NSCOM_MIS/server";
        	application.GBL_GROUPWAREURL = "";	// "http://localhost:9030/NSCOM_MIS/jsp/gian/gian2.jsp";
        	application.GBL_APPROVALURL = application.approvalCallUrl;	// 전자결재URL
        	
        	
        	// NSCOM :: 프레임 작업 전 임시 표준 업무 사이즈를 위하여 처리.
        	application.mainframe.set_width(1280);
        	application.mainframe.set_height(868);

        	//Main Frame Setting
        	application.FRMTOP   = application.mainframe.VFrameSet.FRMTOP;
        	application.FRMLEFT  = application.mainframe.VFrameSet.HFrameSet.FRMLEFT;
        	application.FRMBODY  = application.mainframe.VFrameSet.HFrameSet.FRMBODY;
        	application.MAINWORK = application.mainframe.VFrameSet.HFrameSet.FRMBODY.MAIN_WORK;
        	application.FRMBOTTOM = application.mainframe.VFrameSet.HFrameSet.FRMBODY.FRMBOTTOM;
        	application.FRMDASHBOARD = application.mainframe.VFrameSet.HFrameSet.FRMBODY.FRMDASHBOARD;
        	
        	application._SVCENV = "SOLUTION";
        	application._SVCENV = "CUSTOMER";	// 항상 고정으로 고객사용 처리
        	
        	//SSO Pass then bypass nor Login Show
        	if (this.IsNull(application.GBL_USERID)) {
        		
        		this.application_resizeframe(nexacro.Browser);
        		
        		//Login Page를 위한 ChildFrame 생성
        		var newChild = new nexacro.ChildFrame;
        		newChild.init("System Login", "absolute", 0, 0, 0, 0, null, null, "common::comLogin.xfdl");
        		newChild.set_dragmovetype("none");
        		newChild.set_layered("true");
        		newChild.set_openalign("center middle");
        		newChild.set_showtitlebar(false);
        		newChild.set_resizable(true);
        		newChild.showModal(application.mainframe.VFrameSet.HFrameSet.FRMLEFT, {}, this, "fn_popupAfter", true);

        	} else {

        		// SSO 로그인 처리 별도 호출
        		var sOutDataSet = "";
        		var sArgument    = " USER_IDXX=" + this.base64Encode(application.GBL_USERID);
        			sArgument	+= " SYSTEM=" + this.base64Encode(application.GBL_SYSTCD);

        		this.fnc_TransactionCall(this, "ComLogin", "SSOLogin", "", sOutDataSet, sArgument, "fn_LoginResult", false);
        	
        	}
        	
        }

        this.fn_popupAfter = function(sPopupId,Variant) {

        	//정상적으로 로그인 하지 않았다면 시스템을 종료합니다.
        	if (Variant != true){
        	
        		if (application.GBL_SERVERGUBUN == "LOCAL") {
        			application.exit();
        		}else{
        			window.top.close();
        		}
        		
        		return;
        	}
        	
        	//메뉴 및 메시지 정보 다운
        	var sOutDataSet = "dsMenuList=dsMenuList dsMessage=dsMessage dsMyMenuList=dsMyMenuList";
        	var sArgument    = " USER_IDXX=" + this.base64Encode(application.GBL_USERID);
        		sArgument	+= " SYST_CODE=" + this.base64Encode(application.GBL_SYSTCD);

        	this.fnc_TransactionCall(this, "ComLogin", "Mainframe", "", sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        this.fn_LoginResult = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {

        		this.alert("사용 권한이 없는 사용자 입니다!");
        		application.GBL_USERID = "";
        		application.GBL_USERNM = "";
        		application.GBL_DEPTNM = "";
        		
        		if (application.GBL_SERVERGUBUN == "LOCAL") {
        			application.exit();
        		} else {
        			window.top.close();
        		}
        		
        		return;
        	}
        	
        	this.fn_popupAfter("", true);
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) {

        		this.alert("사용 권한이 없는 사용자 입니다!");
        		application.GBL_USERID = "";
        		application.GBL_USERNM = "";
        		application.GBL_DEPTNM = "";
        		
        		if (application.GBL_SERVERGUBUN == "LOCAL") {
        			application.exit();
        		} else {
        			window.top.close();
        		}
        		
        		return;
        	}
        	
        	//프레임 상단 타이틀 변경(로그인 사용자 정보 추가)
        	var sTitleText = application.mainframe.titletext + " - " + application.GBL_USERNM;
        	sTitleText += application.GBL_USERID == application.GBL_EMPLNO ? "(" + application.GBL_USERID + ")" : "(" + application.GBL_USERID + ")" + "(" + application.GBL_EMPLNO + ")";
        	application.mainframe.set_titletext(sTitleText);
        	
        	// SSO를 통하여 전달받은 파라미터가 있다면...
        	if (application.isSSOAuth == "true") {
        		
        		if (application.ssoParam != "") {
        			application.parseCallerArgs();
        		}
        		
        	}
        	
        	//SDI Mode Frame Setting
        	if (application.GBL_FRAMETYPE == "SDI") {

         		if (application.GBL_SDIMENUNAME == "") {

        			this.alert("사용 권한이 없는 사용자 입니다!");
        			application.GBL_USERID = "";
        			application.GBL_USERNM = "";
        			application.GBL_DEPTNM = "";
        			
        			if (application.GBL_SERVERGUBUN == "LOCAL") {
        				application.exit();
        			} else {
        				window.top.close();
        			}
        			return;
        			
         		}
        		
        		var iRow = application.dsMenuList.findRow("MENU_IDXX", application.GBL_SDIMENUNAME);
        		
        		if (iRow < 0) {
        		
        			this.alert("잘못된 경로(메뉴)입니다!");
        			application.GBL_USERID = "";
        			application.GBL_USERNM = "";
        			application.GBL_DEPTNM = "";
        			
        			if (application.GBL_SERVERGUBUN == "LOCAL") {
        				application.exit();
        			} else {
        				window.top.close();
        			}
        			return;
        		
        		}
        		
        		// 새로운 프레임 적용 - SDI 형태로 표시
        		application.mainframe.VFrameSet.set_separatesize("0,*");
        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("0,*");
        		application.mainframe.VFrameSet.HFrameSet.FRMBODY.set_separatesize("*,0,0");
        		
        		//application.FRMLEFT.set_formurl("frame::leftFrame.xfdl");
        		//application.FRMTOP.set_formurl("frame::topFrame.xfdl");
        		application.FRMBOTTOM.set_formurl("frame::mdiFrame.xfdl");
        		
        		// 단일 SDI는 화면부터 조정
        		this.application_resizeframe(nexacro.Browser, true);

        		var sDisplay   = "maximize";
        		var sFormID    = application.dsMenuList.getColumn(iRow, "MENU_IDXX");
        		var sProgID    = application.dsMenuList.getColumn(iRow, "PROG_IDXX");
        		var sFormCapt  = application.dsMenuList.getColumn(iRow, "MENU_NAME");
        		var sFormLoca  = application.dsMenuList.getColumn(iRow, "MENU_FUNM");
        		var sUserAuth  = application.dsMenuList.getColumn(iRow, "USER_AUTH");
        		var sFilePath  = application.dsMenuList.getColumn(iRow, "PROG_PATH");
        		var sAuthLevel = application.dsMenuList.getColumn(iRow, "ATHR_LEVL");

        		var sArgument  = new Array();
        			sArgument[0] = sFormCapt + "[" + sProgID + "]";
        			sArgument[1] = sFormLoca;
        			sArgument[2] = sUserAuth;
        			sArgument[3] = sAuthLevel;
        		
        		this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 1204, 717, sDisplay, -1, -1);
        		
        	} else {
        		
        		// 새로운 프레임 적용
        		application.mainframe.VFrameSet.set_separatesize("50,*");
        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("290,*");
        		application.mainframe.VFrameSet.HFrameSet.FRMBODY.set_separatesize("0,0,*");
        		
        		application.FRMLEFT.set_formurl("frame::leftFrame.xfdl");
        		application.FRMTOP.set_formurl("frame::topFrame.xfdl");
        		application.FRMBOTTOM.set_formurl("frame::mdiFrame.xfdl");
        		
        		if (application._SVCENV == "SOLUTION") {
        			application.FRMDASHBOARD.set_formurl("main::dashboard_common.xfdl");
        		} else {
        			application.FRMDASHBOARD.set_formurl("main::dashboard_custom.xfdl");
        		}
        		
        	}
        	
        	// 로컬 또는 브라우저의 구분이 필요없이 런타임/일반 브라우저에 따라
        	// 실행화면을 조정
        	this.application_resizeframe(nexacro.Browser, false);
        	
        }

        this.application_onloadforms = function(obj,e) {

        	if (application.GBL_FRAMETYPE == "MDI") {

        		var iRow = application.dsMenuList.findRow("MENU_IDXX", "MHRMB0011");
        		if (iRow < 0) iRow = application.dsMenuList.findRow("MENU_IDXX", "MPIMA0010");
        		if (iRow < 0) return;
        		
        		var sDisplay   = "maximize";
        		var sFormID    = application.dsMenuList.getColumn(iRow, "MENU_IDXX");
        		var sProgID    = application.dsMenuList.getColumn(iRow, "PROG_IDXX");
        		var sFormCapt  = application.dsMenuList.getColumn(iRow, "MENU_NAME");
        		var sFormLoca  = application.dsMenuList.getColumn(iRow, "UPXX_NAME");
        		var sUserAuth  = application.dsMenuList.getColumn(iRow, "USER_AUTH");
        		var sFilePath  = application.dsMenuList.getColumn(iRow, "PROG_PATH");
        		var sAuthLevel = application.dsMenuList.getColumn(iRow, "AUTH_LEVE");

        		var sArgument  = new Array();
        			sArgument[0] = sFormCapt + "[" + sProgID + "]";
        			sArgument[1] = sFormLoca;
        			sArgument[2] = sUserAuth;
        			sArgument[3] = sAuthLevel;
        		this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 1187, 717, sDisplay, -1, -1);

        	}
        	
        }

        
        /**
         * 프레임 크기를 조정한다.
         */
        this.application_resizeframe = function(browser,sdiOpen) {
        	
        	if (browser == "Runtime") {
        		// NSCOM 업무영역 사이즈가 퍼블리싱 사이즈에 맞게 나오도록 적용
        		application.mainframe.set_height(868);
        		application.mainframe.set_width(1510);
        	} else {
        		
        		// 화면을 전체화면으로 오픈하지 않는다.
        		var sScreen = system.getScreenResolution(1);
        		var iXY = sScreen.split(" ");

        		//var w = 1510;		// 좌측 메뉴목록을 펼쳐놓은게 기본일 때 화면 총 넓이 - WORKFRAME 적용 시
        		var w = 1280;		// 좌측 메뉴목록을 접어놓은것이 기본인 상태일때
        		var h = 868;
        		
        		// 화면 가로 해상도 체크
        		if (iXY[0] > 1280) {
        			w = 1510;
        			application._wideview = true;
        		} else {
        			application._wideview = false;
        		}
        		
        		// 메뉴트리는 기본으로 보이도록, 또한 자동으로 메뉴 열 때 숨기지 않도록.
        		application._wideview = true;
        		
        		// 싱글 SDI 화면 오픈 시에는 화면 사이즈는 최소
        		if (sdiOpen == true) {
        			w = 1204 + 16;
        			h = 717 + 67;
        		}
        		//alert("w = " + w + ", h = " + h + ", sdiOpen = " + sdiOpen);
        		window.top.resizeTo(w, h);	// Non WorkFrame - (NSCOM)

        	}
        }

        
        /**
         * SSO 등 접속을 통하여 페이지 접속 시 전달 된 쿼리 파라미터를 처리
         */
        application.parseCallerArgs = function() {
        	
        	try {
        	
        	var dsArgs = application.dsFrontArgs;
        	var argsStr = application.ssoParam;
        	var arrArgs = null;
        	var eachArg = null;
        	var nRow = 0;
        	
        	if (argsStr.length > 0) {
        		
        		arrArgs = argsStr.split("&");
        		
        		for(var idx in arrArgs) {
        			eachArg = arrArgs[idx].split("=");
        			nRow = dsArgs.addRow();
        			dsArgs.setColumn(nRow, "ARGS_NAME", eachArg[0]);
        			dsArgs.setColumn(nRow, "ARGS_VALU", eachArg[1]);
        		}
        		
        	}
        	
        	} catch(e) {
        		trace("----- Args parse error...");
        	}
        	
        }
        
        });


        this.checkLicense("nexacro14_client_license.xml");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("inbus.xtheme");

this.loadCss("css::Common_P.css");
this.loadCss("css::Frame_P.css");
this.loadCss("css::Work_P.css");

        this.loadIncludeScript("core_erpn.xadl");
    };
}
)();
