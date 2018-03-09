package core.ifw.utl;

import java.util.Calendar;

/**
 * <pre>
 *   @author Jong Kun, Park (jkpark@trueinfotec.com)
 *   @version 1.0 
 *   
 *   프로그램명  : 날자관련 Utility 모음
 *   클래스명       : DateTime.java
 *   작성일자       : 2006. 9. 19.
 *   Description    : 
 *   Copyright (c) 2006 TrueInfoTec All Rights reserved.
 * </pre>
 */
public final class DateTime {

    private Calendar c;
    private int tmp = 1;

    private String sep = "";
    private String dateSep = ".";
    private String hourSep = ":";

    private DateTime() {
        super();
    }

    /**
     * <pre>
     *  Description : 경과 일수 구하기
     *  날짜의 형식(Format) 없음.
     *  @param String date string
     *  @param int 더할 일수
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 일수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static String addDays(String s, int day)
            throws java.text.ParseException {

        return addDays(s, day, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 경과 일수 구하기 
     *  @param String date string
     *  @param int 더할 일수
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 일수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static String addDays(String s, int day, String format)
            throws java.text.ParseException {
        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date date = check(s, format);

        // 하루는 (1/1000초*60초*60분*24시)
        date.setTime(date.getTime() + ((long) day * 1000 * 60 * 60 * 24));

        // Date형을 String형으로
        return formatter.format(date);
    }

    /**
     * <pre>
     *  Description : 경과 월수 구하기
     *  날짜의 형식(Format) 없음.
     *  @param String date string
     *  @param int 더할 월수
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 월수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static String addMonths(String s, int month) throws Exception {

        return addMonths(s, month, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 경과 월수 구하기
     *  @param String date string
     *  @param int 더할 월수
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 월수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     *      
     * </pre>
     */
    public static String addMonths(String s, int addMonth, String format)
            throws Exception {
        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date date = check(s, format);

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);
        java.text.SimpleDateFormat dayFormat = new java.text.SimpleDateFormat("dd", java.util.Locale.KOREA);

        int year = Integer.parseInt(yearFormat.format(date));
        int month = Integer.parseInt(monthFormat.format(date));
        int day = Integer.parseInt(dayFormat.format(date));

        month += addMonth;
        if (addMonth > 0) {
            while (month > 12) {
                month -= 12;
                year += 1;
                if (month <= 0) //2015.05.15시큐어처리
                	break;
            }
        }
        else {
            while (month <= 0) {
                month += 12;
                year -= 1;
            }
        }

        java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
        java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");

        String tempDate = String.valueOf(fourDf.format(year)) + String.valueOf(twoDf.format(month)) + String.valueOf(twoDf.format(day));

        java.util.Date targetDate = null;

        // 날짜검사
        try {
            targetDate = check(tempDate, "yyyyMMdd");
        } catch (java.text.ParseException pe) {
            day = lastDay(year, month);
            tempDate = String.valueOf(fourDf.format(year)) + String.valueOf(twoDf.format(month)) + String.valueOf(twoDf.format(day));
            targetDate = check(tempDate, "yyyyMMdd");
        }

        return formatter.format(targetDate);
    }

    /**
     * <pre>
     *  Description : 경과 년수 구하기
     *  날짜의 형식(Format) 없음.
     *  @param String date string
     *  @param int 더할 년수
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 일수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static String addYears(String s, int year) throws Exception {

        return addYears(s, year, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 경과 년수 구하기
     *  @param String date string
     *  @param int 더할 년수
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 월수 더하기
     *              형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static String addYears(String s, int addYear, String format)
            throws Exception {
        return addMonths(s, addYear * 12, format);

    }

    /**
     * <pre>
     *  Description : 나이 구하기 (return age between two date strings with default defined format.(&quot;yyyyMMdd&quot;))
     *  @param String from date string
     *  @param String to date string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int ageBetween(String from, String to)
            throws java.text.ParseException {

        return ageBetween(from, to, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 나이 구하기 
     *  @param String from date string
     *  @param String to date string
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int ageBetween(String from, String to, String format)
            throws java.text.ParseException {

        return (int) (daysBetween(from, to, format) / 365);
    }

    /**
     * <pre>
     *  Description : 날짜 검사, 날짜의 형식(Format) 없음.
     *  @param s date string you want to check with default format &quot;yyyyMMdd&quot;.
     *  @return date java.util.Date
     * </pre>
     */
    public static java.util.Date check(String s)
            throws java.text.ParseException {

        return check(s, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 일자 검사
     *  @param s date string you want to check.
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return date java.util.Date
     * </pre>
     */
    public static java.util.Date check(String s, String format)
            throws java.text.ParseException {
        // 파라메터 검사
        if (s == null) {
            throw new java.text.ParseException("date string to check is null", 0);
        }
        if (format == null) {
            throw new java.text.ParseException("format string to check date is null", 0);
        }

        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 검사
        java.util.Date date = null;

        try {
            date = formatter.parse(s);
        } catch (java.text.ParseException e) {
            throw new java.text.ParseException(" wrong date:\"" + s + "\" with format \"" + format + "\"", 0);
        }

        // 날짜 포멧이 틀린 경우
        if (!formatter.format(date).equals(s)) {
            throw new java.text.ParseException("Out of bound date:\"" + s + "\" with format \"" + format + "\"", 0);
        }

        // 리턴
        return date;
    }

    /**
     * <pre>
     *  Description : 기간 구하기
     *  날짜의 형식(Format) 없음.
     *  @param String from date string
     *  @param String to date string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int daysBetween(String from, String to)
            throws java.text.ParseException {

        return daysBetween(from, to, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 일자 사이의 기간 구하기
     *  return days between two date strings with user defined format.
     *  @param 
     *  @param String to date string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 일자 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int daysBetween(String from, String to, String format)
            throws java.text.ParseException {
        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date d1 = check(from, format);
        java.util.Date d2 = check(to, format);

        long duration = d2.getTime() - d1.getTime();

        return (int) (duration / (1000 * 60 * 60 * 24));
    }

    /**
     * <pre>
     *  Description : 현재 일자 구하기
     *  @return formatted string representation of current day with  &quot;yyyy.MM.dd&quot;.
     * </pre>
     */
    public static String getDateString() {

        return getDateString("yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 현재 일 부분 구하기 (For example, String time = DateTime.getFormatString(&quot;yyyy-MM-dd HH:mm:ss&quot;);)
     *  @param java.lang.String pattern  &quot;yyyy, MM, dd, HH, mm, ss and more&quot;
     *  @return formatted string representation of current day and time with  your pattern.
     * </pre>
     */
    public static int getDay() {

        return getNumberByPattern("dd");
    }

    /**
     * <pre>
     *  Description : 지정일을 지정된 형식으로 변환
     *  날짜의 형식(Format) 없음.
     *  @return java.lang.String
     *  @param s java.lang.String
     *  @param format java.lang.String
     *  @exception java.lang.Exception 예외 설명.
     * </pre>
     */
    public static String getDisDate(String s) throws java.lang.Exception {

        return getDisDate(s, "yyyy.MM.dd");
    }

    /**
     * <pre>
     *  Description : 지정일을 지정된 형식으로 변환
     *  @return java.lang.String
     *  @param s java.lang.String
     *  @param format java.lang.String
     *  @exception java.lang.Exception 예외 설명.
     * </pre>
     */
    public static String getDisDate(String s, String format)
            throws java.lang.Exception {
        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date targetDate = null;

        try {
            targetDate = check(s);
        } catch (java.text.ParseException pe) {
            // 현재일로 Setting
            // targetDate = new java.util.Date();
            return "";
        }

        return formatter.format(targetDate);
    }

    /**
     * <pre>
     *  Description : 현재 일자를 지정된 형식으로 문자 변환
     *  For example, String time = DateTime.getFormatString(&quot;yyyy-MM-dd HH:mm:ss&quot;);
     * 
     *  @param java.lang.String pattern  &quot;yyyy, MM, dd, HH, mm, ss and more&quot;
     *  @return formatted string representation of current day and time with  your pattern.
     * </pre>
     */
    public static String getFormatString(String pattern) {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(pattern, java.util.Locale.KOREA);

        // 현재일 가져오기
        String dateString = formatter.format(new java.util.Date());

        return dateString;
    }

    /**
     * <pre>
     *  Description : 현재 월 구하기
     *  For example, String time = DateTime.getFormatString(&quot;yyyy-MM-dd HH:mm:ss&quot;);
     * 
     *  @param java.lang.String pattern  &quot;yyyy, MM, dd, HH, mm, ss and more&quot;
     *  @return formatted string representation of current day and time with  your pattern.
     * </pre>
     */
    public static int getMonth() {

        return getNumberByPattern("MM");
    }

    /**
     * <pre>
     *  Description : 현재 일자를 지정된 형식으로 int형으로 변환
     *  For example, String time = DateTime.getFormatString(&quot;yyyy-MM-dd HH:mm:ss&quot;);
     * 
     *  @param java.lang.String pattern  &quot;yyyy, MM, dd, HH, mm, ss and more&quot;
     *  @return formatted string representation of current day and time with  your pattern.
     * </pre>
     */
    public static int getNumberByPattern(String pattern) {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(pattern, java.util.Locale.KOREA);

        // 형식에 따라서 현재 일자를 가져옴
        String dateString = formatter.format(new java.util.Date());

        return Integer.parseInt(dateString);
    }

    /**
     * <pre>
     *  Description : 일자 구하기
     *  @return formatted string representation of current day with  &quot;yyyyMMdd&quot;.
     * </pre>
     */
    public static String getShortDateString() {

        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyyMMdd", java.util.Locale.KOREA);

        return formatter.format(new java.util.Date());
    }

    /**
     * <pre>
     *  Description : 시간 구하기
     *      @return formatted string representation of current time with  &quot;HHmmss&quot;.
     * </pre>
     */
    public static String getShortTimeString() {

        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("HHmmss", java.util.Locale.KOREA);

        return formatter.format(new java.util.Date());
    }

    /**
     * <pre>
     *  Description : TimeStamp 구하기
     *  @return formatted string representation of current time with  &quot;yyyy-MM-dd-HH:mm:ss&quot;.
     * </pre>
     */
    public static String getTimeStampString() {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);

        return formatter.format(new java.util.Date());
    }

    /**
     * <pre>
     *  Description : 현재 시간 구하기
     *  @return formatted string representation of current time with  &quot;HH:mm:ss&quot;.
     * </pre>
     */
    public static String getTimeString() {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("HH:mm:ss", java.util.Locale.KOREA);

        // 시간 보내기
        return formatter.format(new java.util.Date());
    }

    /**
     * <pre>
     *  Description : 현재 년도 구하기
     *  For example, String time = DateTime.getFormatString(&quot;yyyy-MM-dd HH:mm:ss&quot;);
     *  @param java.lang.String pattern  &quot;yyyy, MM, dd, HH, mm, ss and more&quot;
     *  @return formatted string representation of current day and time with  your pattern.
     * </pre>
     */
    public static int getYear() {
        return getNumberByPattern("yyyy");
    }

    /**
     * <pre>
     *  Description : 일자를 검사,형식 지정이 없음
     *  check date string validation with the default format &quot;yyyyMMdd&quot;.
     *  @param s date string you want to check with default format &quot;yyyyMMdd&quot;
     *  @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때
     *                  false 날짜 형식이 맞지 않거나, 존재하지 않는 날짜일 때
     * </pre>
     */
    public static boolean isValid(String s) throws Exception {

        return DateTime.isValid(s, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 일자를 검사
     *  check date string validation with an user defined format.
     *  @param 
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때
     *                  false 날짜 형식이 맞지 않거나, 존재하지 않는 날짜일 때
     * </pre>
     */
    public static boolean isValid(String s, String format) {

        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        java.util.Date date = null;

        try {
            date = formatter.parse(s);
        } catch (java.text.ParseException e) {
            return false;
        }

        if (!formatter.format(date).equals(s))
            return false;

        return true;
    }

    /**
     * <pre>
     *  Description : 월의 마지막 일자 구함.
     *  @param year 년
     *  @param month 월
     *  @return int 마지막 일자
     * </pre>
     */
    private static int lastDay(int year, int month)
            throws java.text.ParseException {

        int day = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 2:
                if ((year % 4) == 0) {
                    if ((year % 100) == 0 && (year % 400) != 0) {
                        day = 28;
                    }
                    else {
                        day = 29;
                    }
                }
                else {
                    day = 28;
                }
                break;
            default:
                day = 30;
        }
        return day;
    }

    /**
     * <pre>
     *  Description : 월의 마지막일 구하기
     *  @param src yyyyMMdd
     *  @return String
     * </pre>
     */
    public static String lastDayOfMonth(String src)
            throws java.text.ParseException {
        return lastDayOfMonth(src, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description :  월의 마지막일 구하기
     *  @param src
     *  @param format
     *  @return String
     * </pre>
     */
    public static String lastDayOfMonth(String src, String format)
            throws java.text.ParseException {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date date = check(src, format);

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);

        int year = Integer.parseInt(yearFormat.format(date));
        int month = Integer.parseInt(monthFormat.format(date));
        int day = lastDay(year, month);

        java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
        java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");

        String tempDate = String.valueOf(fourDf.format(year)) + String.valueOf(twoDf.format(month)) + String.valueOf(twoDf.format(day));

        date = check(tempDate, format);

        return formatter.format(date);
    }

    /**
     * <pre>
     *  Description : 기간(월수) 구하기
     *  return days between two date strings with default defined format.(&quot;yyyyMMdd&quot;)
     *  @param String from date string
     *  @param String to date string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 월수 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int monthsBetween(String from, String to)
            throws java.text.ParseException {
        return monthsBetween(from, to, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 기간(월수) 구하기
     *  return days between two date strings with default defined format.(&quot;yyyyMMdd&quot;)
     *  @param String from date string
     *  @param String to date string
     *  @param String format format string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 월수 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int monthsBetween(String from, String to, String format)
            throws java.text.ParseException {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        java.util.Date fromDate = check(from, format);
        java.util.Date toDate = check(to, format);

        // if two date are same, return 0.
        if (fromDate.compareTo(toDate) == 0)
            return 0;

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);
        java.text.SimpleDateFormat dayFormat = new java.text.SimpleDateFormat("dd", java.util.Locale.KOREA);

        int fromYear = Integer.parseInt(yearFormat.format(fromDate));
        int toYear = Integer.parseInt(yearFormat.format(toDate));
        int fromMonth = Integer.parseInt(monthFormat.format(fromDate));
        int toMonth = Integer.parseInt(monthFormat.format(toDate));
        int fromDay = Integer.parseInt(dayFormat.format(fromDate));
        int toDay = Integer.parseInt(dayFormat.format(toDate));

        int result = 0;
        // 년
        result += ((toYear - fromYear) * 12);
        // 월
        result += (toMonth - fromMonth);
        // 일
        if (((toDay - fromDay) > 0))
            result += toDate.compareTo(fromDate);

        return result;
    }

    /**
     * <pre>
     *  Description : 요일 검사.
     *       1: 일요일 (java.util.Calendar.SUNDAY 와 비교)
     *      2: 월요일 (java.util.Calendar.MONDAY 와 비교)
     *     3: 화요일 (java.util.Calendar.TUESDAY 와 비교)
     *     4: 수요일 (java.util.Calendar.WENDESDAY 와 비교)
     *     5: 목요일 (java.util.Calendar.THURSDAY 와 비교)
     *     6: 금요일 (java.util.Calendar.FRIDAY 와 비교)
     *     7: 토요일 (java.util.Calendar.SATURDAY 와 비교)
     * 
     *  @param s date string you want to check.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 요일을 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int whichDay(String s) throws java.text.ParseException {
        return whichDay(s, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 요일 검사.
     *   1: 일요일 (java.util.Calendar.SUNDAY 와 비교)
     *   2: 월요일 (java.util.Calendar.MONDAY 와 비교)
     *   3: 화요일 (java.util.Calendar.TUESDAY 와 비교)
     *   4: 수요일 (java.util.Calendar.WENDESDAY 와 비교)
     *   5: 목요일 (java.util.Calendar.THURSDAY 와 비교)
     *   6: 금요일 (java.util.Calendar.FRIDAY 와 비교)
     *   7: 토요일 (java.util.Calendar.SATURDAY 와 비교)
     * 
     *  @param s date string you want to check.
     *  @param format string representation of the date format. For example, &quot;yyyy-MM-dd&quot;.
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 요일을 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int whichDay(String s, String format)
            throws java.text.ParseException {

        // 날짜 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        // 날짜 검사
        java.util.Date date = check(s, format);

        // Calendar 생성
        java.util.Calendar calendar = formatter.getCalendar();

        calendar.setTime(date);

        return calendar.get(java.util.Calendar.DAY_OF_WEEK);
    }

    /**
     * <pre>
     *  Description : 년도 월 일 시간 분 초 밀리세컨드를 반환. FileUpload에 사용한다.
     *  @return String
     * </pre>
     */
    public String getFileSeper() {

        return getYear() + sep + getMonth() + sep + getDay() + sep + getHour() + sep + getMinute() + sep + getSecond() + sep + getTimeInMillis() + sep + getTmp();
    }

    /**
     * <pre>
     *  Description : 구분자 셋팅
     *  @param sep 날짜간의 구분자
     *  @return void
     * </pre>
     */
    private void setDateSep(String sep) {

        this.dateSep = sep;
    }

    private int getTmp() {
        return tmp++;
    }

    /**
     * <pre>
     *  Description : 밀리초를 int로 반환
     *  @param 
     *  @return long
     * </pre>
     */
    public long getTimeInMillis() {

        return c.get(Calendar.MILLISECOND);
    }

    /**
     * <pre>
     *  Description : 초를 int로 반환
     *  @param 
     *  @return int
     * </pre>
     */
    public int getSecond() {
        return c.get(Calendar.SECOND);
    }

    /**
     * <pre>
     *  Description : 분을 int로 반환
     *  @param 
     *  @return int
     * </pre>
     */
    public int getMinute() {
        return c.get(Calendar.MINUTE);
    }

    /**
     * <pre>
     *  Description : 시간을 int로 반환
     *  @return int
     * </pre>
     */
    public int getHour() {
        return c.get(Calendar.HOUR);
    }

    /**
     * <pre>
     *  Description : 기간(년수) 구하기
     *  return days between two date strings with default defined format.(&quot;yyyyMMdd&quot;)
     *  @param String from date string
     *  @param String to date string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 월수 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int yearsBetween(String from, String to) throws Exception {

        return yearsBetween(from, to, "yyyyMMdd");
    }

    /**
     * <pre>
     *  Description : 기간(년수) 구하기
     *  return days between two date strings with default defined format.(&quot;yyyyMMdd&quot;)
     *  @param String from date string
     *  @param String to date string
     *  @param String format format string
     *  @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 월수 리턴
     *            형식이 잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     * </pre>
     */
    public static int yearsBetween(String from, String to, String format)
            throws Exception {

        // 월수를 구한후에 년수로 환산
        int result = monthsBetween(from, to, format) / 12;

        // 나머지가 있으면 년도에 1을 더함.
        if ((monthsBetween(from, to, format) % 12) > 0)
            result += 1;

        // 결과를 보냄
        return result;
    }

    /**
     * <pre>
     *  Description : 현재 일자 구하기
     *  @return formatted string representation of current day with  &quot;yyyy.MM.dd&quot;.
     * </pre>
     */
    public static String getDateString(String format) {

        // 형식 지정
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);

        return formatter.format(new java.util.Date());
    }
}