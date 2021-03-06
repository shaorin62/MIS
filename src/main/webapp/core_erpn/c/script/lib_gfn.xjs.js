﻿//XJS=lib_gfn.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         * Email의 유효성을 체크한다.
         * @param {String} sEmail : 이메일 주소
         * @return {boolean}
         * @author ksd   
         * @example var sBool = fnc_IsEmail("ksd@inbus.co.kr");
        */
        this.fnc_IsEmail = function(sEmail) {

        	if (sEmail == undefined)         return false;
        	if (sEmail.trim() == "")         return false;
        	if (sEmail.trim().length < 3)    return false;  //최소 [@],[.] 존재 해야 함
        	if (sEmail.lastIndexOf("@") < 1) return false;
        	if (sEmail.lastIndexOf(".") < 1) return false;
        	if (sEmail.lastIndexOf("@") ==  sEmail.trim().length -1) return false;  //[@] 이후에 반드시 문자가 있어야 함
        	if (sEmail.lastIndexOf(".") ==  sEmail.trim().length -1) return false;  //[.] 이후에 반드시 문자가 있어야 함

        	return true;
        	
        }

        /**
         * 클라이언트 PC의 현재날짜를 가져온다.
         * @return {String} 'YYYYMMDD' 형식의 클라이언트PC 현재(오늘)날짜
         * @author ksd
         */
        this.fnc_Today = function () {

        	var objDate  = new Date();      //Create Date

        	var strToday  = objDate.getFullYear() + "";                          //년도 반환
        		strToday += this.fnc_Right("0" + (objDate.getMonth() + 1), 2);   //Month은 0에서 11까지 반환(+1을 함)
        		strToday += this.fnc_Right("0" + objDate.getDate(), 2);          //일 반환

        	return strToday;	

        }

        /**
         * 주어진 날짜의 요일을 가져온다.
         * @param {String} sDate 요일을 확인할 날짜. 'yyyyMMdd' 형식의 8자리 문자열.
         * @return {Number} 날짜가 해당하는 요일. 0~6을 반환하며, 0부터 일요일, 6은 토요일을 의미하낟.
         * @example this.fnc_GetDay('20160301')
         * @author ksd
         */
        this.fnc_GetDay = function (sDate) {

        	sDate = this.fnc_ToString(sDate);
        	sDate = this.fnc_Replace(this.fnc_Replace(this.fnc_Replace(sDate, "/", ""), "-", ""), ".", "");

        	if (this.fnc_Length(sDate) != 8) return -1;   //입력된 값의 자리수 체크
        	if (!nexacro.isNumeric(sDate))   return -1;   //숫자 여부 체크

        	//년/월/일 설정
        	var sYear  = nexacro.toNumber(this.fnc_SubStr(sDate, 0, 4));
        	var sMonth = nexacro.toNumber(this.fnc_SubStr(sDate, 4, 2)) - 1;  //Month는 0에서 11의 값을 줌
        	var sDay   = nexacro.toNumber(this.fnc_SubStr(sDate, 6, 2));

        	var oDate = new Date(sYear , sMonth ,sDay);    //날짜 생성
        	if (isNaN(oDate)) return -1;                   //유효한 날짜인지 체크

        	return oDate.getDay();                         //요일 반환

        }

        /**
         * 입력된 값이 정확한 날짜 형석인지 체크한다.
         * @param {String} sDate 'yyyyMMdd' 형식의 날짜
         * @return {Boolean} 8자리로 구성된 날짜형식이 맞으면 true, 아니면 false를 반환
         * @example this.fnc_IsDate('20160301')
         * @author ksd
         */
        this.fnc_IsDate = function (sDate) {

        	sDate = this.fnc_ToString(sDate);                 //undefine 및 null 처리
        	sDate = sDate.trim();                             //공백제거
        	if (!nexacro.toNumber(sDate)) return false;       //숫자 여부 체크

        	if (this.fnc_Length(sDate) < 6) return false;     //6 미만 자리수 체크
        	if (this.fnc_Length(sDate) > 8) return false;     //8 이상 자리수 체크

        	if (this.fnc_Length(sDate) == 6) sDate += "01";   //만약 년월 체크라면 01일로 처리
        	var sMonth = Math.floor(sDate.slice(4,6), 10);    //Get Month
        	var sDay   = Math.floor(sDate.slice(6,8), 10);    //Get Day

        	if (sMonth < 1 || sMonth > 12) return false;                                 //Month Check
        	if (sDay < 1 || sDay > this.fnc_GetLastDayOfMonth(sDate) ) return false;     //Day Check

        	return true;

        }

        /**
         * 년월, 또는 년월일 문자를 입력받아 해당월의 마지막 일을 반환한다.
         * @param {String} sDate 년월(yyyyMM) 또는 년월일(yyyyMMdd) 날짜 문자열
         * @return {Number} 주어진 일자의 월 마지막 날짜를 반환
         * @example this.fnc_GetLastDayOfMonth('20160312')
         * @author ksd
         */
        this.fnc_GetLastDayOfMonth =  function(sDate) {

        	var sMonth, sLastDate;
        	sMonth = parseInt(this.fnc_SubStr(sDate,4,2), 10);

        	if (sMonth == 1 || sMonth == 3 || sMonth == 5 || sMonth == 7  || sMonth == 8 || sMonth == 10 || sMonth == 12 ) {

        		sLastDate = 31;

        	} else if (sMonth == 2) {

        		if (this.fnc_IsLeapYear(sDate) == true) {
        			sLastDate = 29;
        		} else {
        			sLastDate = 28;
        		}

        	} else {

        		sLastDate = 30;

        	}

        	return sLastDate;

        }

        /**
         * 주어진 값이 빈 값인지 체크한다.
         * @param {String} val 체크할 문자열
         * @return {Boolean} 주어진 값이 비어있으면 true, 그렇지 않으면 false를 반환
         * @example var emptyStr = ''; this.fnc_IsEmpty(emptyStr);
         * @author ksd
         */
        this.fnc_IsEmpty = function (val) {

        	var sVal = new String(val);

        	if (val == null || sVal.trim().length <= 0) return true;
        	return false;

        }

        /**
         * 주어진 값이 null인 모든 경우를 체크한다.
         * @param {String} sValue null을 체크할 입력값
         * @return {Boolean} 주어진 값이 null, undefined, NaN 값일 경우 true, 아니면 false 반환
         * @example this.IsNull(sValue)
         * @author ksd
         */
        this.IsNull = function (sValue) {

        	if (new String(sValue).valueOf() == "undefined") return true;
        	if (sValue == null) return true;
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) return true;
        	if (sValue.length == 0) return true;

        	return false;

        }

        /**
         * 원하는 숫자만큼의 공백(' ')을 반환한다.
         * @param {String} 원하는 공백갯수
         * @return {String} 숫자만큼 채워진 공백문자열
         * @example this.fnc_Space(3)
         * @author ksd
         */
        this.fnc_Space = function (iNum) {

        	var sVal = new String("");

        	if (iNum <= 0) return "";

        	for (var i = 0; i < iNum; i++) {
        		sVal += new String(" ");
        	}

        	return sVal;

        }

        /**
         * 주어진 날짜에 일을 더한다.
         * @param {String} date 'yyyyMMdd' 형식의 날짜
         * @param {Number} offset 날짜에 더할 일 수
         * @return {String} 주어진 date 날짜에 offset만큼 이후의 날짜를 반환
         * @example this.fnc_AddDate('20160307', 3) - 20160310 반환
         * @author ksd
         */
        this.fnc_AddDate = function (sDate,nOffset) {

        	sDate = this.fnc_ToString(sDate);
        	sDate = this.fnc_Replace(this.fnc_Replace(this.fnc_Replace(sDate, "/", ""), "-", ""), ".", "");

        	if (this.fnc_Length(sDate) != 8) return "";              //입력된 값의 자리수 체크
        	if (!nexacro.isNumeric(sDate))   return "";              //숫자 여부 체크

        	if (this.fnc_Length(nOffset) < 1) return "";             //입력된 값의 자리수 체크
        	//isNumeric()함수가 음수인 경우 문자로 판단하여 제외 함(2016.09.21 by302))
        	//if (!nexacro.isNumeric(nOffset.toString())) return "";   //숫자 여부 체크
        	if (isNaN(nOffset)) return "";   						 //숫자 여부 체크

        	var sYear  = nexacro.toNumber(this.fnc_SubStr(sDate, 0, 4));
        	var sMonth = nexacro.toNumber(this.fnc_SubStr(sDate, 4, 2))-1;  //Month는 0에서 11임
        	var sDay   = nexacro.toNumber(this.fnc_SubStr(sDate, 6, 2));

        	var objDate = new Date(sYear, sMonth, sDay);    //Date 객체 설정
        	objDate.setDate(objDate.getDate() + (nOffset));

        	//Create Date String(YYYYMMDD)
        	var sDate  = objDate.getFullYear() + "";
        		sDate += this.fnc_Right("0" + (objDate.getMonth() + 1), 2);
        		sDate += this.fnc_Right("0" + objDate.getDate(), 2);

        	return sDate;	

        }

        /**
         * 주어진 날짜에 월을 더한다.
         * @param {String} date 'yyyyMMdd' 형식의 날짜
         * @param {Number} offset 날짜에 더할 개월 수
         * @return {String} 주어진 date 날짜에 offset개월만큼 이후의 날짜를 반환
         * @example fnc_AddMonth('20160307', 3) - 20160607 반환
         * @author ksd
         */
        this.fnc_AddMonth = function (sDate,nOffset) {

        	sDate = this.fnc_ToString(sDate);
        	sDate = this.fnc_Replace(this.fnc_Replace(this.fnc_Replace(sDate, "/", ""), "-", ""), ".", "");

        	if (this.fnc_Length(sDate) != 8) return "";              //입력된 값의 자리수 체크
        	if (!nexacro.isNumeric(sDate))   return "";              //숫자 여부 체크

        	if (this.fnc_Length(nOffset) < 1) return "";             //입력된 값의 자리수 체크
        	//if (!nexacro.isNumeric(nOffset.toString())) return "";   //숫자 여부 체크

        	var sYear  = nexacro.toNumber(this.fnc_SubStr(sDate, 0, 4));
        	var sMonth = nexacro.toNumber(this.fnc_SubStr(sDate, 4, 2))-1;  //Month는 0에서 11임
        	var sDay   = nexacro.toNumber(this.fnc_SubStr(sDate, 6, 2));

        	var objDate = new Date(sYear , sMonth ,sDay);    //Date 객체 설정
        	//objDate.addMonth(nOffset);
        	objDate.setMonth(objDate.getMonth() + (nOffset));

        	//Create Date String(YYYYMMDD)
        	var sDate  = objDate.getFullYear() + "";
        		sDate += this.fnc_Right("0" + (objDate.getMonth() + 1), 2);
        		sDate += this.fnc_Right("0" + objDate.getDate(), 2);

        	return sDate;	

        }

        /**
         * 주어진 문자열을 쌍따옴표로 감싼다.
         * @param {String} str 문자열
         * @return {String} 쌍따옴표로 감싼 문자열
         * @example this.fnc_Quote('대한민국')	-	'"대한민국"'
         * @author ksd
         */
        this.fnc_Quote = function (arg)
        {
        	if (arg == null || arg == "undefined" || arg == "") 
        	{
        		return '""';
        	}

        	var sArg = new String(arg);

        	return nexacro.wrapQuote(sArg);
        }

        /**
         * 주어진 문자열의 알파벳 소문자를 대문자로 변환한다.
         * @param {String} str 변환할 문자열
         * @return {String} 소문자를 대문자로 변환한 문자열
         * @example this.fnc_ToUpper('AppLe')	-	'APPLE'
         * @author ksd
         */
        this.fnc_ToUpper = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.toUpperCase();
        }

        /**
         * 주어진 문자열의 알파벳 대문자를 소문자로 변환한다.
         * @param {String} str 변환할 문자열
         * @return {String} 대문자를 소문자로 변환한 문자열
         * @example fnc_ToLower('AppLe')	-	'apple'
         * @author ksd
         */
        this.fnc_ToLower = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.toLowerCase();
        }

        
        /**
         * 입력된 값을 문자열로 변환한다.
         * @param {String} str 문자열로 변환할 값
         * @return {String} 문자열로 변환한 값
         * @example this.fnc_ToString(139) - "139"
         * @author ksd
         */
        this.fnc_ToString = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.toString();
        }

        /**
         * 입력된 문자열의 양쪽 공백을 제거한다.
         * @param {String} str 양쪽 공백을 제거할 문자열
         * @return {String} 좌, 우측의 공백문자가 제거된 문자열
         * @example this.fnc_Trim("  대한민국 만세  ") - "대한민국 만세"
         * @author ksd
         */
        this.fnc_Trim = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.trim();
        }

        /**
         * 입력된 문자열에서 좌측 공백을 제거한다.
         * @param {String} str 좌측 공백을 제거할 문자열
         * @return {String} 입력문자열에서 좌측 공백 제거된 문자열
         * @example this.fnc_Ltrim("  우리강산 금수강산  ")	-	"우리강산 금수강산  "
         * @author ksd
         */
        this.fnc_Ltrim = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.trimLeft();
        }

        /**
         * 입력된 문자열에서 좌측 공백을 제거한다.
         * @param {String} str 좌측 공백을 제거할 문자열
         * @return {String} 입력문자열에서 좌측 공백 제거된 문자열
         * @example this.fnc_Ltrim("  우리강산 금수강산  ")	-	"우리강산 금수강산  "
         * @author ksd
         */
        this.fnc_Rtrim = function (arg)
        {
        	if (arg == null || arg == "undefined") 
        	{
        		return "";
        	}

        	var sArg = new String(arg);

        	return sArg.trimRight();
        }

        /**
         * 주어진 문자열 또는 객체(배열)의 길이를 구한다.
         * @param {Object} obj 길이를 구할 문자열, 객체 또는 배열
         * @return {Number} 주어진 값의 길이
         * @example this.fnc_Length("abc")	-	3
         * @author ksd
         */
        this.fnc_Length = function (sValue)
        {
        	/* 2014.03.19 KSD 수정 */
        	
        	// 인자가 Null이면 0 반환
        	if (sValue == null) 
        	{
        		return 0;
        	}

        	// 혹시 몰라 Undefined 체크함
        	var sNewStr = new String(sValue);
        	if (sNewStr == "undefined") 
        	{
        		return 0;
        	}

        	// return sNewStr.trim().length;
        	return sNewStr.length;

        	/*
        	 var varRtnValue = 0;
        	 var arrArgument = fnc_Length.arguments;
        	 if (arrArgument.length < 1) { return 0; }
        	 
        	 if (!fnc_IsEmpty(arrArgument[0]))
        	 varRtnValue = arrArgument[0].toString().length;
        	 
        	 return varRtnValue;
        	 */
        }

        /**
         * 주어진 문자열의 byte 크기를 계산한다.
         * @param {String} val 계산할 문자열
         * @return {Number} 주어진 문자열의 byte 수
         * @example this.fnc_LengthB("398!@#가나abc")
         * @author ksd
         */
        this.fnc_LengthB = function (sValue)
        {
        	if (this.fnc_IsEmpty(sValue)) 
        	{
        		return 0;
        	}
        	var v_ChkStr = sValue.toString();
        	var v_cnt = 0;

        	for (var i = 0; i < v_ChkStr.length; i++) 
        	{
        		if (v_ChkStr.charCodeAt(i) > 127) 
        		{
        			v_cnt += 2;
        		}
        		else 
        		{
        			v_cnt += 1;
        		}
        	}

        	return v_cnt;
        }

        
        /**
         * 입력된 문자열의 특정 문자열을 다른 문자열로 변경한다.
         * @param {String} str 원본 문자열
         * @param {String} oldStr 원본 문자열에서 찾을 문자열
         * @param {String} newStr 원본 문자열에 변환할 새로운 문자열
         * @return {String} 변환된 문자열
         * @example this.fnc_Replace("this is an apple", "is", "and") - "thand and an apple"
         * @author ksd
         */
        this.fnc_Replace = function () {
        	// trace("fnc_Replace --- ");

        	var varRtnValue = null;
        	var arrArgument = this.fnc_Replace.arguments;

        	if (arrArgument.length < 3) {
        		
        		varRtnValue = arrArgument[0];
        		
        	} else {
        	
        		if (this.fnc_IsEmpty(arrArgument[0])) {
        			return varRtnValue;
        		}
        		
        		varRtnValue = arrArgument[0].toString();
        		
        		while (varRtnValue.indexOf(arrArgument[1]) != -1) {
        			varRtnValue = varRtnValue.toString().replace(arrArgument[1], arrArgument[2]);
        		}
        		
        	}

        	return varRtnValue;
        }

        /**
         * 주어진 문자열에서 특정 문자열의 시작위치를 반환한다.
         * @param {String} str 전체 문자열
         * @param {String} findstr 전체 문자열에서 위치를 찾을 문자열
         * @return {Number} 문자열의 위치.
         * 			찾고자 하는 문자열이 1번 이상일 경우 원본 문자열의 가장 앞에 위치한 문자열의 시작위치를 반환한다.
         * @example this.fnc_IndexOf("this is an apple", "an") - 8
         * @author ksd
         */
        this.fnc_IndexOf = function ()
        {
        	var varRtnValue = -1;
        	var arrArgument = this.fnc_IndexOf.arguments;

        	if (arrArgument.length < 2) 
        	{
        		varRtnValue = -1;
        	}
        	else 
        	{
        		var nOffset = 0;

        		if (this.fnc_IsEmpty(arrArgument[0]) || this.fnc_IsEmpty(arrArgument[1])) 
        		{
        			return varRtnValue;
        		}

        		if (!this.fnc_IsEmpty(arrArgument[2])) 
        		{
        			nOffset = parseInt(arrArgument[2]);
        		}
        		varRtnValue = arrArgument[0].toString().indexOf(arrArgument[1], nOffset);
        	}

        	return varRtnValue;
        }

        /**
         * 문자열에서 해당 인덱스의 문자열을 반환한다.
         * @param {String} str 원본 문자열
         * @param {Number} index 인덱스
         * @return {String} 문자열에서 인덱스에 해당하는 문자 한 개를 반환한다.
         * @example this.fnc_CharAt('summer vacation', 7) - 'v'
         * @author ksd
         */
        this.fnc_CharAt = function ()
        {
        	var varRtnValue = null;
        	var arrArgument = this.fnc_CharAt.arguments;

        	if (arrArgument.length < 2) 
        	{
        		varRtnValue = "";
        	}
        	else 
        	{
        		var nIndex = parseInt(arrArgument[1]);
        		varRtnValue = arrArgument[0].toString().charAt(nIndex);
        	}

        	return varRtnValue;
        }

        
        /**
         * 문자열내의 특정 문자를 기준으로 문자열을 분할한다.
         * @param {String} str 문자열
         * @param {String} delimiter 문자열에서 분할할 문자열
         * @return {Array} 주어진 문자열을 delimiter로 분할한 후 생성된 배열
         * @example this.fnc_Split(",a,b,c") - ["", "a", "b", "c"]
         * @author ksd
         */
        this.fnc_Split = function ()
        {
        	var rtnArr = new Array();
        	var arrArgument = this.fnc_Split.arguments;

        	if (arrArgument.length < 1) 
        	{
        	}
        	else if (arrArgument.length < 2) 
        	{
        		if (!this.fnc_IsEmpty(arrArgument[0])) 
        		{
        			rtnArr[0] = arrArgument[0];
        		}
        	}
        	else 
        	{
        		if (!this.fnc_IsEmpty(arrArgument[0])) 
        		{
        			rtnArr = arrArgument[0].toString().split(arrArgument[1]);
        		}
        	}

        	return rtnArr;
        }

        /**
         * 실수범위의 숫자를 문자열로 변환한다
         * @param {Number} num 실수범위 숫자
         * @param {Number} detail 문자열로 변환시 소숫점 이하 자릿수. 기본은 0이다.
         * @return {String} 문자열로 변환한 실수. 정수부에 3자리 자릿수 기호가 삽입된다.
         * @example fnc_NumFormat(1423.08, 3) - '1,423.080'
         * @author ksd
         */
        this.fnc_NumFormat = function (dNumber,nDetail)
        {
        	var rtnStr;
        	if (this.fnc_IsEmpty(nDetail) != false) 
        	{
        		nDetail = 0;
        	}
        	var toNumber_1 = nexacro.toNumber(dNumber, 0);
        	rtnStr = toNumber_1.toFixedLocaleString(nDetail);

        	return rtnStr;
        }

        /**
         * 문자열에서 요청한 길이만큼의 일부분을 반환합니다.
         * @param {String} str 원본 문자열
         * @param {Number} index 문자열에서 반환할 부분의 시작 인덱스
         * @param {Number} length 문자열에서 반환할 길이
         * @return {String} 주어진 문자열의 일부분을 반환합니다.
         * @example fnc_SubStr(""Oh! Sunny vacation day!", 3, 6) - " Sunny"
         * @author ksd
         */
        this.fnc_SubStr = function ()
        {
        	var retVal = "";
        	var strString = "";
        	var nIndex = 0;
        	var nSize = 0;
        	var arrArgument = this.fnc_SubStr.arguments;

        	if (arrArgument.length >= 1) 
        	{
        		strString = new String(arrArgument[0]);
        	}
        	if (strString == 'null') 
        	{
        		return "";
        	}
        	// Calendar 시 Null 처리

        	if (arrArgument.length >= 2) 
        	{
        		nIndex = parseInt(arrArgument[1]);
        	}
        	if (arrArgument.length >= 3) 
        	{
        		nSize = parseInt(arrArgument[2]);
        	}
        	else 
        	{
        		nSize = this.fnc_Length(arrArgument[0]);
        	}

        	if (!this.fnc_IsEmpty(strString)) 
        	{
        		retVal = strString.substr(nIndex, nSize);
        	}

        	return retVal;
        }

        /**
         * 문자열의 중간에서 주어진 byte크기만큼 추출한다.
         * @param {String} str 추출을 위한 원본 문자열
         * @param {Number} index 원본 문자열에서 추출할 인덱스
         * @param {Number} size 원본 문자열에서 추출할 byte 크기
         * @return {String} byte 크기만큼 추출한 문자열
         * @author Sunghwan
         */
        this.fnc_MidB = function (strString,nIndex,nSize)
        {
        	// 확인요망
        	if (this.fnc_Length(this.fnc_Trim(strString)) == 0) return "";
        	
        	var v_ChkStr = strString.toString();
        	var v_cnt = 0;
        	var nSize2 = 0;

        	for (var i = 0; i < v_ChkStr.length; i++) {
        		if (v_ChkStr.charCodeAt(i) > 127) {
        			v_cnt += 2;
        		} else {
        			v_cnt += 1;
        		}
        		
        		if (v_cnt == nSize) {
        			nSize2 = i + 1; 
        			break;
        		} else if (v_cnt > nSize) {
        			nSize2 = i; 
        			break;
        		}
        	}
        	
        	return strString.substr(nIndex, nSize2);

        }

        /**
         * true/false 조건값에 따른 값을 반환합니다.
         * @param {Expression} expr 비교할 조건값. 
         * 			해당 값을 이용하여 true 또는 false를 확인합니다. 만약, 값이 정수인 경우, 0이면 false으로 판단됩니다.
         * @param {Object} trueValue 조건값이 true일 경우 반환할 값
         * @param {Object} falsevalue 조건값이 false일 경우 반환할 값
         * @return {Object} 조건값이 참일 경우 trueValue를, 거짓일 경우에는 falseValue를 반환합니다. 
         * @example this.fnc_Iif(true, "참", "거짓")	-	"참" 반환
         * @author Sunghwan
         */
        this.fnc_Iif = function ()
        {
        	var varRtnValue = null;

        	var arrArgument = this.fnc_Iif.arguments;

        	if (arrArgument[0]) 
        	{
        		return arrArgument[1];
        	}
        	else 
        	{
        		return arrArgument[2];
        	}
        }

        /**
         * 비교대상 값과 입력된 값을 검사하여 조건에 일치하는 값을 반환합니다.
         * @param {Object} value 비교 대상 값.
         * @param {Object} compValue 비교 대상 값과 비교할 값입니다. 2n (n > 1) 위치의 값입니다.
         * @param {Object} retValue 비교값과 일치시 반환값입니다. 2n + 1 (n > 1) 위치의 값입니다.
         * @param {Object} default 일치하는 비교값이 없을 경우 기본 반환 값입니다. 2n (n > 1)의 값입니다.
         * 					해당 값을 입력하지 않을 경우, null을 반환합니다.
         * @return {Object} 비교조건을 확인하여 해당 반환값을 반환합니다.
         * @example this.fnc_Decode('2', '1', "first", '2', "second")	-	"second" 반환
         * 			this.fnc_Decode(null, true, "참", false, "거짓", "알수없음")	- "알수없음" 반환
         * @author Sunghwan
         */
        this.fnc_Decode = function ()
        {
        	var varRtnValue = null;

        	var arrArgument = this.fnc_Decode.arguments;
        	var varValue = arrArgument[0];
        	var bIsDefault = false;
        	var nCount = 0;

        	if ((arrArgument.length % 2) == 0) 
        	{
        		nCount = arrArgument.length - 1;
        		bIsDefault = true;
        	}
        	else 
        	{
        		nCount = arrArgument.length;
        		bIsDefault = false;
        	}

        	for (var i = 1; i < nCount; i += 2) 
        	{
        		if (varValue == arrArgument[i]) 
        		{
        			varRtnValue = arrArgument[i + 1];
        			i = nCount;
        		}
        	}

        	if (varRtnValue == null && bIsDefault) 
        	{
        		varRtnValue = arrArgument[arrArgument.length - 1];
        	}

        	return varRtnValue;
        }

        /**
         * 문자열 중 일부 문자열의 시작위치를 검색합니다.
         * @param {String} str 원본 문자열
         * @param {String} findStr 찾고자 하는 문자열
         * @param {Number} index 검색 시작위치. Default 0
         * @return {Number} 검색 문자열의 시작 위치, 검색 결과가 없으면 -1을 반환한다.
         * @example this.fnc_Pos("Oh! Sunny vacation day!", "va")	-	10 을 반환
         * @example this.fnc_Pos("Oh! Sunny vacation day!", "va", 11)	-	-1 을 반환
         * @author Sunghwan
         */
        this.fnc_Pos = function (sOrg,sFind,nStart)
        {
        	// 2,3			//★★★ Tested
        	if (nStart == null || nStart == "undefined") 
        	{
        		nStart = 0;
        	}

        	return this.fnc_IndexOf(sOrg, sFind, nStart);
        }

        /**
         * 문자열의 좌측에서 지정된 길이만큼을 반환합니다.
         * @param {String} str 문자열
         * @param {Number} size 문자열의 길이
         * @return {String} 문자열의 좌측 일부 문자열. size - 1의 인덱스까지 반환된다.
         * @example this.fnc_Left("대한민국만세화이팅", 4)	-	"대한민국" 반환
         * @author Sunghwan
         */
        this.fnc_Left = function (strString,nSize)
        {
        	// ★★★ Tested

        	strString = this.fnc_ToString(strString);

        	var rtnVal = "";

        	if (nSize > strString.length || nSize == null) 
        	{
        		rtnVal = strString;
        	}
        	else 
        	{
        		rtnVal = strString.substring(0, nSize);
        	}

        	return rtnVal;
        }

        /**
         * 문자열의 우측에서 지정된 길이만큼을 반환합니다.
         * @param {String} str 문자열
         * @param {Number} size 문자열의 길이
         * @return {String} 문자열의 우측 일부 문자열
         * @example this.fnc_Right("대한민국만세화이팅", 3)	-	"화이팅" 반환
         * @author Sunghwan
         */
        this.fnc_Right = function (sOrg,nSize)
        {
        	// 2,3		//★★★ Tested
        	var sOrg1 = this.fnc_ToString(sOrg);

        	var rtnVal = "";

        	if (sOrg1.length == 0 || nSize == null) 
        	{
        		return "";
        	}

        	if (sOrg1.length < nSize) 
        	{
        		return sOrg1;
        	}
        	else 
        	{
        		return this.fnc_SubStr(sOrg1, sOrg1.length - nSize, nSize);
        	}
        }

        /**
         * 그리드의 컬럼ID를 가져온다.
         * @param {Object} gridObj 그리드 컴포넌트
         * @param {Number} index 컬럼 인덱스
         * @return {String} 해당 컬럼 인덱스의 컬럼 ID 반환
         * @example this.fnc_getColId(gridObj, 1)	-	그리드의 1번째 컬럼의 ID 반환
         * @author Sunghwan
         */
        this.fnc_getColId = function (obj,pBodyCell)
        {
        	var tCellNM = "";
        	try 
        	{
        		tCellNM = obj.getCellProperty("body", pBodyCell, "text");
        		tCellNM = new String(tCellNM);
        		tCellNM = tCellNM.split("BIND:").join("");
        		tCellNM = tCellNM.split("bind:").join("");
        		tCellNM = tCellNM.split("Bind:").join("");
        	}
        	catch (e) 
        	{
        		tCellNM = "";
        	}
        	finally 
        	{
        		return tCellNM;
        	}
        }

        /**
         * 문자열의 우측에서부터 주어진 문자열을 삭제합니다.
         * @param {String} str 원본 문자열
         * @param {String} trimstr trim할 문자열. 해당값이 주어지지 않은 경우 default ' '(공백) 
         * @return {String} 삭제 문자열이 제거된 원본 문자열
         * @example this.fnc_RTrimCase('bbbccCC', 'CC')	-	'bbb', 반환
         * @author Sunghwan
         */
        this.fnc_RTrimCase = function (sOrg,sTrim)
        {
        	var pos,nStart;

        	if (this.IsNull(sOrg)) 
        	{
        		return "";
        	}
        	if (this.IsNull(sTrim)) 
        	{
        		sTrim = " ";
        	}

        	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length) 
        	{
        		if (sOrg.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase()) 
        		{
        			break;
        		}
        	}

        	return sOrg.substr(0, pos + sTrim.length);
        }

        /**
         * 데이터셋의 데이터를 정렬합니다.
         * @param {Object} dataset 데이터셋 객체
         * @param {String} columns 정렬할 열 ID
         * @param {Boolean} 오름차순 정렬 여부
         * @return 주어진 컬럼 정보를 이용하여 데이터셋을 정렬합니다.
         * @example this.fnc_Sort(dsObj, "COL1_IDXX,COL2_IDXX")	-	데이터셋을 COL1_IDXX,COL2_IDXX 순서로 내림차순 정렬합니다.
         * @example this.fnc_Sort(dsObj, "COL1_IDXX,COL2_IDXX", true)	-	데이터셋을 COL1_IDXX,COL2_IDXX 순서로 오름차순 정렬합니다.
         * @example this.fnc_Sort(dsObj, "COL1_IDXX:A,COL2_IDXX:D", true)	
         * 			- 데이터셋을 COL1_IDXX 기준으로 오름차순, COL2_IDXX 기준으로는 내림차순 정렬합니다.
         * @author Sunghwan
         */
        this.fnc_Sort = function (XDataObject,strColList,bAscending)
        {
        	// ★★★ Tested

        	var sKeyString;
        	var aColList;

        	if (strColList.indexOf(":") > 0) 
        	{
        		// 개별 소팅이 정의된 경우
        		sKeyString = "S:";

        		aColList = strColList.split(",");
        		for (var i = 0; i < aColList.length; i++) 
        		{
        			if (aColList[i].indexOf(":D") > 0) 
        			{
        				sKeyString = sKeyString + "-" + this.fnc_RTrimCase(aColList[i], ":D");
        			}
        			else if (aColList[i].indexOf(":A") > 0) 
        			{
        				sKeyString = sKeyString + "+" + this.fnc_RTrimCase(aColList[i], ":A");
        			}
        			else if (aColList[i].indexOf(":") == -1) 
        			{
        				// 언급이 없는 것은 Ascending
        				sKeyString = sKeyString + "+" + this.fnc_RTrimCase(aColList[i], ":A");
        			}
        		}
        	}
        	else 
        	{
        		// bAscending에 의해서 소팅 적용

        		if (this.IsNull(bAscending)) 
        		{
        			bAscending = true;
        		}
        		if (bAscending) 
        		{
        			sKeyString = "S:";

        			aColList = strColList.split(",");
        			for (var i = 0; i < aColList.length; i++) 
        			{
        				sKeyString = sKeyString + "+" + aColList[i];
        			}
        		}
        		else 
        		{
        			sKeyString = "S:";

        			aColList = strColList.split(",");
        			for (var i = 0; i < aColList.length; i++) 
        			{
        				sKeyString = sKeyString + "-" + aColList[i];
        			}
        		}
        	}

        	XDataObject.keystring.current = sKeyString; //sorting 적용
        }

        /**
         * 문자열의 좌측에 문자열을 추가합니다.
         * @param {String} str 문자열
         * @param {String} padding 추가할 문자열
         * @param {Number} count 반복횟수
         * @return {String} pad 문자열을 count 횟수만큼 반복하여 원본 문자열 좌측에 추가합니다.
         * @example this.fnc_Lpad("bbcc", "aa", 2)	-	'aaaabbcc' 반환
         */
        this.fnc_LPad = function (sOrg,sPad,nCnt)
        {
        	var i,sRet = "";
        	if (this.IsNull(sOrg)) 
        	{
        		sOrg = "";
        	}
        	if (this.IsNull(nCnt)) 
        	{
        		nCnt = 1;
        	}
        	if (this.IsNull(sPad)) 
        	{
        		sPad = " ";
        	}

        	return String(sOrg).padLeft(nCnt, sPad);
        }

        /**
         * 문자열의 우측에 문자열을 추가합니다.
         * @param {String} str 문자열
         * @param {String} padding 추가할 문자열
         * @param {Number} count 반복횟수
         * @return {String} pad 문자열을 count 횟수만큼 반복하여 원본 문자열 우측에 추가합니다.
         * @example this.fnc_RPad("bbcc", "aa", 2)	-	'bbccaaaa' 반환
         * @author Sunghwan
         */
        this.fnc_RPad = function (sOrg,sPad,nCnt)
        {
        	var i,sRet = "";

        	if (this.IsNull(sOrg)) 
        	{
        		sOrg = "";
        	}
        	if (this.IsNull(nCnt)) 
        	{
        		nCnt = 1;
        	}
        	if (this.IsNull(sPad)) 
        	{
        		sPad = " ";
        	}

        	return String(sOrg).padRight(nCnt, sPad);
        }

        /**
         * 양력날짜에 해당하는 음력날짜를 반환합니다.
         * @param {String} date 'yyyyMMdd' 형식의 양력 날짜
         * @return {String} 'yyyyMMdd' 형식의 음력날짜를 반환합니다.
         * @example this.fnc_Solar2Lunar('20160427')	-	'20160321' 반환
         * @author Sunghwan
         */
        this.fnc_Solar2Lunar = function (sDate)
        {
        	var rtnVal = this.fnc_solar2lunarBase(sDate);

        	if (rtnVal.valueOf().length == 9) 
        	{
        		rtnVal = rtnVal.valueOf().substr(1, 8);
        	}
        	else 
        	{
        		rtnVal = "";
        	}

        	return rtnVal;
        }

        /**
         * 양력날짜를 음력날짜로 변환 및 양력 날짜의 윤달 여부를 반환합니다. 계산 유효범위는 1841년~2043년 사이의 일자입니다.
         * @param {String} date 양력날짜
         * @return {Array} dateArr 음력날짜 및 윤달 여부, 배열의 0번째 요소는 음력날짜, 1번째 요소는 윤달여부
         * @example this.fnc_Solar2LunarEx('20160427')	-	배열 0번째는 '20160321', 1번째는 false 반환
         * @author Sunghwan
         */
        this.fnc_Solar2LunarEx = function (sDate)
        {
        	var arrVal = new Array();
        	var rtnVal = this.fnc_solar2lunarBase(sDate);

        	if (rtnVal.valueOf().length == 9) 
        	{
        		arrVal[0] = rtnVal.valueOf().substr(1, 8);
        		if (rtnVal.valueOf().substr(0, 1) == "1") 
        		{
        			arrVal[1] = true;
        		}
        		else 
        		{
        			arrVal[1] = false;
        		}
        	}

        	return arrVal;
        }

        /**
         * 양력일자를 음력일자로 변환하고, 윤달 여부를 함께 반환합니다. 계산 유효범위는 1841년~2043년 사이의 일자입니다.
         * @param {String} date 양력날짜
         * @return {String} info 음력날짜 및 윤달 여부, 윤달여부가 '1'이면 윤달. 오류 발생 시에는 빈 값("")이 반환됩니다.
         * @example this.fnc_solar2lunarBase('20160427')	-	'201603210' 반환
         * @author Sunghwan
         */
        this.fnc_solar2lunarBase = function (sDate)
        {
        	// ●●● Need Checking
        	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
        	var aMd = new Array();

        	var aBaseInfo = new Array();
        	var aDt = new Array();
        	var td;
        	var td1;
        	var td2;
        	var mm;
        	var nLy,nLm,nLd;
        	var sLyoon;
        	if (this.IsNull(sDate)) 
        	{
        		return "";
        	}

        	this.sY = parseInt(sDate.substr(0, 4), 10);
        	this.sM = parseInt(sDate.substr(4, 2), 10);
        	this.sD = parseInt(sDate.substr(6, 2), 10);
        	if (this.sY < 1841 || this.sY > 2043) 
        	{
        		return "";
        	}

        	aBaseInfo = this.fnc_SolarBase();
        	aMd = sMd.split(",");
        	if (this.fnc_IsLeapYear(sDate) == true) 
        	{
        		aMd[1] = 29;
        	}
        	else 
        	{
        		aMd[1] = 28;
        	}

        	td1 = 672069; //672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수

        	// 1841년부터 작년까지의 날수
        	td2 = (this.sY - 1) * 365 + parseInt((this.sY - 1) / 4) - parseInt((this.sY - 1) / 100) + parseInt((this.sY - 1) / 400);

        	// 전월까지의 날수를 더함
        	for (this.i = 0; this.i <= this.sM - 2; this.i++) 
        	{
        		td2 = td2 + parseInt(aMd[this.i]);
        	}

        	// 현재일까지의 날수를 더함
        	td2 = td2 + this.sD;

        	// 양력현재일과 음력 1840년까지의 날수의 차이
        	td = td2 - td1 + 1;

        	// 1841년부터 음력날수를 계산
        	for (this.i = 0; this.i <= this.sY - 1841; this.i++) 
        	{
        		aDt.getSetter(this.i).set(0);
        		for (this.j = 0; this.j <= 11; this.j++) 
        		{
        			switch (parseInt(aBaseInfo[this.i * 12 + this.j])) 
        			{
        				case 1:
        					mm = 29;
        					break;
        				case 2:
        					mm = 30;
        					break;
        				case 3:
        					mm = 58; //29 + 29
        					break;
        				case 4:
        					mm = 59; //29 + 30
        					break;
        				case 5:
        					mm = 59; //30 + 29
        					break;
        				case 6:
        					mm = 60; //30 + 30
        					break;
        			}
        			aDt.getSetter(this.i).set(aDt[this.i] + mm);
        		}
        	}

        	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
        	nLy = 0;
        	do {
        		td = td - aDt[nLy];
        		nLy = nLy + 1;
        	} while (td > aDt[nLy]);

        	nLm = 0;
        	sLyoon = "0"; //현재월이 윤달임을 표시할 변수 - 기본값 평달
        	do {
        		if (parseInt(aBaseInfo[nLy * 12 + nLm]) <= 2) 
        		{
        			mm = parseInt(aBaseInfo[nLy * 12 + nLm]) + 28;
        			if (td > mm) 
        			{
        				td = td - mm;
        				nLm = nLm + 1;
        			}
        			else 
        			{
        				break;
        			}
        		}
        		else 
        		{
        			switch (parseInt(aBaseInfo[nLy * 12 + nLm])) 
        			{
        				case 3:
        					this.m1 = 29;
        					this.m2 = 29;
        					break;
        				case 4:
        					this.m1 = 29;
        					this.m2 = 30;
        					break;
        				case 5:
        					this.m1 = 30;
        					this.m2 = 29;
        					break;
        				case 6:
        					this.m1 = 30;
        					this.m2 = 30;
        					break;
        			}

        			if (td > this.m1) 
        			{
        				td = td - this.m1;
        				if (td > this.m2) 
        				{
        					td = td - this.m2;
        					nLm = nLm + 1;
        				}
        				else 
        				{
        					sLyoon = "1";
        				}
        			}
        			else 
        			{
        				break;
        			}
        		}
        	} while (1);

        	nLy = nLy + 1841;
        	nLm = nLm + 1;
        	nLd = td;

        	return sLyoon + nLy + this.fnc_Right("0" + nLm, 2) + this.fnc_Right("0" + nLd, 2);
        }

        /**
         * 1841년~2043년 사이의 월별 음력 기준정보를 처리합니다.
         * 내부처리함수이므로 이 스크립트 파일외에서의 사용을 금지합니다.
         */
        this.fnc_SolarBase = function ()
        {
        	var kk;

        	// 1841
        	kk = "1,2,4,1,1,2,1,2,1,2,2,1,";
        	kk += "2,2,1,2,1,1,2,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,4,1,2,1,2,1,";
        	kk += "2,2,1,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,5,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,3,2,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
        	// 1851
        	kk += "2,2,1,2,1,1,2,1,2,1,5,2,";
        	kk += "2,1,2,2,1,1,2,1,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,5,2,1,2,1,2,";
        	kk += "1,1,2,1,2,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,5,2,1,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,6,1,1,2,1,1,2,1,2,2,";
        	// 1861
        	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
        	kk += "2,1,2,1,2,2,1,2,2,3,1,2,";
        	kk += "1,2,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,4,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,1,2,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,3,2,1,1,2,1,2,2,1,";
        	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,5,2,1,";
        	// 1871
        	kk += "2,2,1,2,2,1,2,1,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,4,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,5,1,2,1,2,2,1,2,";
        	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,4,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
        	// 1881
        	kk += "1,2,1,2,1,2,5,2,2,1,2,1,";
        	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,3,2,1,2,2,1,2,2,";
        	kk += "2,1,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,5,2,1,1,2,1,2,1,2,";
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,5,2,1,2,2,1,2,1,2,1,2,";
        	// 1891
        	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,5,2,2,1,2,2,2,";
        	kk += "1,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,5,1,2,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,5,2,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,5,2,2,1,2,";
        	// 1901
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,3,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,4,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	// 1911
        	kk += "2,1,2,1,1,5,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,5,1,2,1,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,3,2,1,2,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,5,2,2,1,2,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
        	// 1921
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,2,2,3,2,1,1,2,1,2,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
        	kk += "2,1,2,1,2,2,1,2,1,2,1,1,";
        	kk += "2,1,2,5,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,5,1,2,1,1,2,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,1,1,5,1,2,1,2,2,1,";
        	// 1931
        	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,6,1,2,1,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,4,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,2,1,4,1,2,2,1,2,";
        	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
        	// 1941
        	kk += "2,2,1,2,2,4,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,1,2,4,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
        	kk += "2,5,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,3,2,1,2,1,2,";
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
        	// 1951
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,4,2,1,2,1,2,1,2,";
        	kk += "1,2,1,1,2,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
        	kk += "2,1,4,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,5,2,1,2,2,";
        	kk += "1,2,2,1,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,5,2,1,2,1,2,1,";
        	// 1961
        	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,2,3,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,5,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,5,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
        	// 1971
        	kk += "1,2,1,1,5,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,1,2,2,2,1,";
        	kk += "2,2,1,5,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,5,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,1,";
        	kk += "2,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,1,6,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
        	// 1981
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,3,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,2,2,1,1,2,1,1,5,2,2,";
        	kk += "1,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,2,2,1,2,1,2,1,1,";
        	kk += "2,1,2,2,1,5,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,2,1,1,5,1,2,1,2,2,2,2,";
        	// 1991
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,1,1,2,1,1,2,1,2,2,";
        	kk += "1,2,5,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,2,2,1,5,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,3,2,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,2,1,1,2,1,2,2,1,";
        	// 2001
        	kk += "2,2,2,3,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,1,2,2,1,2,1,1,2,1,2,";
        	kk += "1,5,2,2,1,2,1,2,2,1,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,5,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
        	kk += "2,2,1,1,5,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	// 2011
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,6,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,1,2,5,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
        	kk += "2,1,1,2,3,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,1,2,5,2,1,1,2,1,2,1,2,";
        	// 2021
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,2,1,2,1,2,1,2,";
        	kk += "1,5,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,2,1,1,5,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,1,2,2,2,";
        	kk += "1,2,2,1,5,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,1,2,2,";
        	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
        	// 2031
        	kk += "2,1,5,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,2,1,1,2,1,5,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,4,1,1,2,1,2,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,2,1,1,2,1,";
        	kk += "2,2,1,2,5,2,1,2,1,2,1,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,2,1,";
        	// 2041
        	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2";

        	var arr = new Array();
        	arr = kk.split(",");

        	return arr;
        }

        /**
         * 해당일자의 윤년여부를 확인합니다.
         * @param {String} date 양력일자
         * @return {Boolean} 일자가 윤년이면 true, 윤년이 아니거나 날짜를 입력하지 않은 경우 false 반환
         * @example this.fnc_IsLeapYear('20160427')	-	false 반환
         * @author Sunghwan
         */
        this.fnc_IsLeapYear = function (sDate)
        {
        	var ret;
        	var nY;

        	// if(IsNull(sDate)) return false;

        	nY = parseInt(sDate.substring(0, 4), 10);

        	if ((nY % 4) == 0) 
        	{
        		if ((nY % 100) != 0 || (nY % 400) == 0) 
        		{
        			ret = true;
        		}
        		else 
        		{
        			ret = false;
        		}
        	}
        	else 
        	{
        		ret = false;
        	}

        	return ret;
        }

        /**
         * 문자열을 주어진 포맷형식으로 변환한다.
         * @param {String} str 변환할 문자열
         * @param {String} mask 문자열 포맷
         * @return {String} 포맷된 문자열
         * @example this.fnc_GetMaskFormat('20160301', '@@@@.@@-@@')	-	'2016.03-01' 반환
         * @author Sunghwan
         */
        this.fnc_GetMaskFormat = function (Val,strMask) {

        	var strRetVal = "";
        	var sUnit;

        	for (var i = 0; i < strMask.length; i++) {
        		sUnit = strMask.substr(i, 1);

        		if (sUnit == "@" || sUnit == "#")  {
        		
        			strRetVal += Val.substr(0, 1);
        			Val = Val.substr(1);

        // 			if (Val.length == 0) break;

        		} else {
        			strRetVal += sUnit;
        		}
        	}

        	//trace('fnc_GetMaskFormat -- strRetVal : ' + strRetVal);

        	return strRetVal;
        }

        /**
         * 데이터셋의 변경여부를 확인한다.
         * @param {Object} dataset 데이터셋 객체
         * @return {Boolean} 데이터셋이 변경된 경우 true, 아니면 false를 반환한다.
         * @example this.fnc_DsIsUpdated(dsObj)	-	true/false 반환
         * @author Sunghwan
         */
        this.fnc_DsIsUpdated = function (objDs)
        {

        	if (objDs.getDeletedRowCount() > 0) 
        	{
        		return true;
        	}

        	if (objDs.findRowExpr("(this.getRowType(rowidx)==4)||(this.getRowType(rowidx)==2)") > -1) 
        	{
        		return true;
        	}
        	return false;
        }

        
        /**
         * 소수점 이하 자릿수를 잘라낸다.
         * @param {Number} num 숫자
         * @param {Number} scale 유지할 소수점 이하 자릿수
         * @return {Number} 지정된 소숫점 이하 자릿수를 버린 후의 수
         * @example this.fnc_Truncate(2834.298, 1)	-	2834.2 반환
         * @author Sunghwan
         */
        this.fnc_Truncate = function (iData,iScale) {

        	var iSign = 1;
        	if (iData < 0) iSign = -1;
        	return (nexacro.floor(Math.abs(iData), iScale) * iSign);

        }

        /**
         * 생년월일을 이용하여 나이를 계산한다.
         * @param {String} birthday 나이 계산을 위한 생년월일
         * @param {String} type 1이면 만 나이, 0은 실제 나이 계산
         * @return {Number} 파라미터의 type가 1이면 만 나이, 0이면 실제 나이를 반환한다.
         * @example
         *	this.fnc_GetAge('19830812')		-> 33 반환
         *	this.fnc_GetAge('19830812', 0)	-> 34 반환
         * @author luigi
         */
        this.fnc_GetAge = function(birthday,type) {
        	
        	// type이 입력되지 않으면 기본은 '만 나이'
        	if (typeof type == "undefined") {
        		type = 1;
        	}
        	
            var yourage = 0;

            //주민번호를 분해하여 생년월일을 구분
            var byy = parseInt(birthday.substring(0, 4));
            var bmm = parseInt(birthday.substring(4, 6));
            var bdd = parseInt(birthday.substring(6, 8));
        	
            //현재년월일을 조회
            var now = new Date();
            var cyy = parseInt(now.getFullYear());
            var cmm = parseInt(now.getMonth() + 1);
            var cdd = parseInt(now.getDate());

            yourage = cyy - byy;
        	
        	if (type == 1) {
        	
        		//태어날달이 현재 월보다 적으면 만나이 한살제거
        		if (cmm < bmm) {
        			yourage--;
        		}

        		//태어날일이 현재 일보다 적으면 만나이 한살제거
        		if ((cmm == bmm) && (cdd < bdd)) {
        			yourage--;
        		}
        		
        	} else {
        		// 만 나이가 아닌경우 연도 계산 후 + 1
        		yourage += 1;
        	}
        	
            return yourage;
        }

        /**
         * 컴포넌트에 바인드된 DataSet 이름과 컬럼명을 찾는다.
         * @param {Object} sForm 해당 Form
         * @param {String} bind정보를 찾을 Component이름
         * @return {Arr} 바인드된 Dataset 이름, 컬럼명
         * @example this.getBindDataSet(this, "edtUPPR_NAME") -> arr[0] ="dsTA_ACCTXM" arr[1] "ACCT_INTL" 반환
         * @author 김준수
         */
        this.fnc_getBindDataSet = function (sForm,compoid) {
        	
        	var result = new Array(2);
        	
        	for(var i = 0; i < sForm.binds.length; i++) {
        		if (sForm.binds[i].compid == compoid) {
        			result[0] = this.binds[i].datasetid;
        			result[1] = this.binds[i].columnid;
        		}
        	}
        	return result;
        }

        /**
         * DataSet의 현재 rowposition의 해당컬럼의 값구하기
         * @param {Object} sForm 해당 Form
         * @param {String} bind정보를 찾을 Component이름
         * @return {Arr} 바인드된 Dataset 이름, 컬럼명
         * @example this.fnc_getUserData(this, "edtUPPR_NAME") -> "현재 데이터셋의 값" 반환
         * @author 김준수
         */
        this.fnc_getUserData = function (sForm,compoid) {

        	var result = this.fnc_getBindDataSet(sForm, compoid);
        	var dsName = result[0]; // 데이터셋 이름
         	var irow = eval("sForm." + dsName + ".rowposition");
         	var scol = result[1]; // 컬럼명
         	var script = "sForm." + dsName + ".getColumn(" + irow + ", \"" + scol + "\")";
        	
        	// 스크립트 실행
        	var UserData = eval(script);
        	return UserData;
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
