package core.ifw.utl;

import java.text.DateFormatSymbols;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 날짜 변환 유틸
 * <br><br>
 * Copyright Notice: Copyright 1998-2010 By INBUS CO, LTD. All rights reserved.
 *
 * @author 조 정 호
 * @since: 2010. 10. 24.
 */
public final class DateUtil
{
	
	private static final Logger logger = LoggerFactory.getLogger(DateUtil.class);
    /**
     * Don't let anyone instantiate this class
     */
    private DateUtil()
    {

    }

    /**
     * check date string validation with the default format "yyyyMMdd".
     *
     * @param s
     *            date string you want to check with default format "yyyyMMdd".
     * @return date java.util.Date
     */
    public static java.util.Date check(String s)
            throws java.text.ParseException
    {
        return check(s, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return date java.util.Date
     */
    public static java.util.Date check(String s, String format)
            throws java.text.ParseException
    {
        if (s == null)
            throw new java.text.ParseException("date string to check is null",
                    0);
        if (format == null)
            throw new java.text.ParseException(
                    "format string to check date is null", 0);

        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = null;
        try
        {
            date = formatter.parse(s);
        } catch (java.text.ParseException e)
        {
            /*
             * throw new java.text.ParseException( e.getMessage() + " with
             * format \"" + format + "\"", e.getErrorOffset() );
             */
            throw new java.text.ParseException(" wrong date:\"" + s
                    + "\" with format \"" + format + "\"", 0);
        }

        if (!formatter.format(date).equals(s))
            throw new java.text.ParseException("Out of bound date:\"" + s
                    + "\" with format \"" + format + "\"", 0);
        return date;
    }

    /**
     * check date string validation with the default format "yyyyMMdd".
     *
     * @param s
     *            date string you want to check with default format "yyyyMMdd"
     * @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때 false 날짜 형식이 맞지 않거나, 존재하지 않는
     *         날짜일 때
     */
    public static boolean isValid(String s) throws Exception
    {
        return DateUtil.isValid(s, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때 false 날짜 형식이 맞지 않거나, 존재하지 않는
     *         날짜일 때
     */
    public static boolean isValid(String s, String format)
    {
        /*
         * if ( s == null ) throw new NullPointerException("date string to check
         * is null"); if ( format == null ) throw new
         * NullPointerException("format string to check date is null");
         */
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = null;
        try
        {
            date = formatter.parse(s);
        } catch (java.text.ParseException e)
        {
            return false;
        }

        if (!formatter.format(date).equals(s))
            return false;

        return true;
    }

    /**
     * @return formatted string representation of current day with "yyyy-MM-dd".
     */
    public static String getDateString()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                "yyyy-MM-dd", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }

    /**
     *
     * For example, String time = DateUtil.getFormatString("yyyy-MM-dd
     * HH:mm:ss");
     *
     * @param java.lang.String
     *            pattern "yyyy, MM, dd, HH, mm, ss and more"
     * @return formatted string representation of current day and time with your
     *         pattern.
     */
    public static int getDay()
    {
        return getNumberByPattern("dd");
    }

    /**
     *
     * For example, String time = DateUtil.getFormatString("yyyy-MM-dd
     * HH:mm:ss");
     *
     * @param java.lang.String
     *            pattern "yyyy, MM, dd, HH, mm, ss and more"
     * @return formatted string representation of current day and time with your
     *         pattern.
     */
    public static int getYear()
    {
        return getNumberByPattern("yyyy");
    }

    /**
     *
     * For example, String time = DateUtil.getFormatString("yyyy-MM-dd
     * HH:mm:ss");
     *
     * @param java.lang.String
     *            pattern "yyyy, MM, dd, HH, mm, ss and more"
     * @return formatted string representation of current day and time with your
     *         pattern.
     */
    public static int getMonth()
    {
        return getNumberByPattern("MM");
    }

    /**
     *
     * For example, String time = DateUtil.getFormatString("yyyy-MM-dd
     * HH:mm:ss");
     *
     * @param java.lang.String
     *            pattern "yyyy, MM, dd, HH, mm, ss and more"
     * @return formatted string representation of current day and time with your
     *         pattern.
     */
    public static int getNumberByPattern(String pattern)
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                pattern, java.util.Locale.KOREA);
        String dateString = formatter.format(new java.util.Date());
        return Integer.parseInt(dateString);
    }

    /**
     *
     * For example, String time = DateUtil.getFormatString("yyyy-MM-dd
     * HH:mm:ss");
     *
     * @param java.lang.String
     *            pattern "yyyy, MM, dd, HH, mm, ss and more"
     * @return formatted string representation of current day and time with your
     *         pattern.
     */
    public static String getFormatString(String pattern)
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                pattern, java.util.Locale.KOREA);
        String dateString = formatter.format(new java.util.Date());
        return dateString;
    }

    /**
     * @return formatted string representation of current day with "yyyyMMdd".
     */
    public static String getShortDateString()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                "yyyyMMdd", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }

    /**
     * @return formatted string representation of current time with "HHmmss".
     */
    public static String getShortTimeString()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                "HHmmss", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }

    /**
     * @return formatted string representation of current time with
     *         "yyyy-MM-dd-HH:mm:ss".
     */
    public static String getTimeStampString()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                "yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }

    /**
     * @return formatted string representation of current time with "HH:mm:ss".
     */
    public static String getTimeString()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                "HH:mm:ss", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }

    /**
     * return days between two date strings with default defined
     * format.(yyyyMMdd)
     *
     * @param s
     *            date string you want to check.
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 요일을 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생 0: 일요일 (java.util.Calendar.SUNDAY 와
     *         비교) 1: 월요일 (java.util.Calendar.MONDAY 와 비교) 2: 화요일
     *         (java.util.Calendar.TUESDAY 와 비교) 3: 수요일
     *         (java.util.Calendar.WENDESDAY 와 비교) 4: 목요일
     *         (java.util.Calendar.THURSDAY 와 비교) 5: 금요일
     *         (java.util.Calendar.FRIDAY 와 비교) 6: 토요일
     *         (java.util.Calendar.SATURDAY 와 비교) 예) String s = "20000529"; int
     *         dayOfWeek = whichDay(s, format); if (dayOfWeek ==
     *         java.util.Calendar.MONDAY) 
     *         if (dayOfWeek == java.util.Calendar.TUESDAY)
     */
    public static String nameDate(String sdate) throws java.text.ParseException
    {
        String s = null;
        int i = whichDay(sdate);

        if (i == java.util.Calendar.MONDAY)
            s = "Mon";
        if (i == java.util.Calendar.TUESDAY)
            s = "Tue";
        if (i == java.util.Calendar.WEDNESDAY)
            s = "Wed";
        if (i == java.util.Calendar.THURSDAY)
            s = "Thu";
        if (i == java.util.Calendar.FRIDAY)
            s = "Fri";
        if (i == java.util.Calendar.SATURDAY)
            s = "Sat";
        if (i == java.util.Calendar.SUNDAY)
            s = "Sun";

        return s;
    }
    
    /**
     * 한글로 가지고 오자
     * @param sdate
     * @return
     * @throws java.text.ParseException
     */
    public static String nameDateKor(String sdate) throws java.text.ParseException
    {
        String s = null;
        int i = whichDay(sdate);
        
        if (i == java.util.Calendar.MONDAY)
            s = "월";
        if (i == java.util.Calendar.TUESDAY)
            s = "화";
        if (i == java.util.Calendar.WEDNESDAY)
            s = "수";
        if (i == java.util.Calendar.THURSDAY)
            s = "목";
        if (i == java.util.Calendar.FRIDAY)
            s = "금";
        if (i == java.util.Calendar.SATURDAY)
            s = "토";
        if (i == java.util.Calendar.SUNDAY)
            s = "일";
        
        return s;
    }

    public static int whichDay(String s) throws java.text.ParseException
    {
        return whichDay(s, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 요일을 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생 0: 일요일 (java.util.Calendar.SUNDAY 와
     *         비교) 1: 월요일 (java.util.Calendar.MONDAY 와 비교) 2: 화요일
     *         (java.util.Calendar.TUESDAY 와 비교) 3: 수요일
     *         (java.util.Calendar.WENDESDAY 와 비교) 4: 목요일
     *         (java.util.Calendar.THURSDAY 와 비교) 5: 금요일
     *         (java.util.Calendar.FRIDAY 와 비교) 6: 토요일
     *         (java.util.Calendar.SATURDAY 와 비교) 예) String s = "2000-05-29";
     *         int dayOfWeek = whichDay(s, "yyyy-MM-dd"); if (dayOfWeek ==
     *         java.util.Calendar.MONDAY) 
     *         if (dayOfWeek == java.util.Calendar.TUESDAY)
     */
    public static int whichDay(String s, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = check(s, format);

        java.util.Calendar calendar = formatter.getCalendar();
        calendar.setTime(date);
        return calendar.get(java.util.Calendar.DAY_OF_WEEK);
    }

    // modified by WDH 2001.02.23 START
    /**
     * return days between two date strings with default defined
     * format.(yyyyMMdd)
     *
     * @param s
     *            date string you want to check.
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 그달의 주수을 리턴
     */
    public static int weeksOfMonth(String s) throws java.text.ParseException
    {
        return weeksOfMonth(s, "yyyyMMdd");
    }

    /**
     * return days between two date strings with default defined
     * format.("yyyyMMdd")
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 그달의 주수을 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static int weeksOfMonth(String s, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);

        java.util.Date date = check(lastDayOfMonth(s), format);

        java.util.Calendar calendar = formatter.getCalendar();
        calendar.setTime(date);
        return calendar.get(java.util.Calendar.WEEK_OF_MONTH);
    }

    public static int numOfWeek(String s) throws java.text.ParseException
    {
        return numOfWeek(s, "yyyyMMdd");
    }

    public static int numOfWeek(String s, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);

        java.util.Date date = check(s, format);

        java.util.Calendar calendar = formatter.getCalendar();
        calendar.setTime(date);
        return calendar.get(java.util.Calendar.WEEK_OF_MONTH);
    }

    /**
     * return days between two date strings with default defined
     * format.("yyyyMMdd")
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @param week
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 해당날짜를 기준으로 이전일요일부터 지정한 주수만큼의 일요일날짜 형식이
     *         잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     */
    public static String sundayOfWeek(String s) throws java.text.ParseException
    {
        return sundayOfWeek(s, "yyyyMMdd");
    }

    /**
     * return days between two date strings with default defined
     * format.("yyyyMMdd")
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @param week
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 해당날짜를 기준으로 이전일요일부터 지정한 주수만큼의 일요일날짜 형식이
     *         잘못 되었거나 존재하지 않는 날짜: java.text.ParseException 발생
     */
    public static String sundayOfWeek(String s, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);

        java.util.Date date = check(s, format);

        String temp = formatter.format(date);

        if (DateUtil.whichDay(temp) != 0)
        {
            date.setTime(date.getTime() - (long) (DateUtil.whichDay(temp) - 1)
                    * 1000 * 60 * 60 * 24);
        }
        return formatter.format(date);
    }

    // modified by WDH 2001.02.23 END

    /**
     * return days between two date strings with default defined
     * format.("yyyyMMdd")
     *
     * @param String
     *            from date string
     * @param String
     *            to date string
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static int daysBetween(String from, String to)
            throws java.text.ParseException
    {
        return daysBetween(from, to, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param String
     *            from date string
     * @param String
     *            to date string
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 일자 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static int daysBetween(String from, String to, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date d1 = check(from, format);
        java.util.Date d2 = check(to, format);

        long duration = d2.getTime() - d1.getTime();

        return (int) (duration / (1000 * 60 * 60 * 24));
        // seconds in 1 day
    }

    /**
     * return age between two date strings with default defined
     * format.("yyyyMMdd")
     *
     * @param String
     *            from date string
     * @param String
     *            to date string
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static int ageBetween(String from, String to)
            throws java.text.ParseException
    {
        return ageBetween(from, to, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param String
     *            from date string
     * @param String
     *            to date string
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 2개 일자 사이의 나이 리턴 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static int ageBetween(String from, String to, String format)
            throws java.text.ParseException
    {
        return (int) (daysBetween(from, to, format) / 365);
    }

    /**
     * return add day to date strings
     *
     * @param String
     *            date string
     * @param int
     *            더할 일수
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 일수 더하기 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static String addDays(String s, int day)
            throws java.text.ParseException
    {
        return addDays(s, day, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param String
     *            date string
     * @param int
     *            더할 일수
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 일수 더하기 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static String addDays(String s, int day, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = check(s, format);

        date.setTime(date.getTime() + ((long) day * 1000 * 60 * 60 * 24));
        return formatter.format(date);
    }

    /**
     * return add month to date strings
     *
     * @param String
     *            date string
     * @param int
     *            더할 월수
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 월수 더하기 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static String addMonths(String s, int month) throws Exception
    {
        return addMonths(s, month, "yyyyMMdd");
    }

    /**
     * 
     *
     * @param String
     *            date string
     * @param int
     *            더할 월수
     * @param format
     *            string representation of the date format. For example,
     *            "yyyy-MM-dd".
     * @return int 날짜 형식이 맞고, 존재하는 날짜일 때 월수 더하기 형식이 잘못 되었거나 존재하지 않는 날짜:
     *         java.text.ParseException 발생
     */
    public static String addMonths(String s, int addMonth, String format)
            throws Exception
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = check(s, format);

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat(
                "yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat(
                "MM", java.util.Locale.KOREA);
        java.text.SimpleDateFormat dayFormat = new java.text.SimpleDateFormat(
                "dd", java.util.Locale.KOREA);
        int year = Integer.parseInt(yearFormat.format(date));
        int month = Integer.parseInt(monthFormat.format(date));
        int day = Integer.parseInt(dayFormat.format(date));

        month += addMonth;
        if (addMonth > 0)
        {
            while (month > 12)
            {
                month -= 12;
                year += 1;
                if (month <= 0) //2015.05.15시큐어처리
                	break;
                
            }
        } else
        {
            while (month <= 0)
            {
                month += 12;
                year -= 1;
            }
        }
        java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
        java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");
        String tempDate = String.valueOf(fourDf.format(year))
                + String.valueOf(twoDf.format(month))
                + String.valueOf(twoDf.format(day));
        java.util.Date targetDate = null;

        try
        {
            targetDate = check(tempDate, "yyyyMMdd");
        } catch (java.text.ParseException pe)
        {
            day = lastDay(year, month);
            tempDate = String.valueOf(fourDf.format(year))
                    + String.valueOf(twoDf.format(month))
                    + String.valueOf(twoDf.format(day));
            targetDate = check(tempDate, "yyyyMMdd");
        }

        return formatter.format(targetDate);
    }

    public static String addYears(String s, int year)
            throws java.text.ParseException
    {
        return addYears(s, year, "yyyyMMdd");
    }

    public static String addYears(String s, int year, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = check(s, format);
        date.setTime(date.getTime()
                + ((long) year * 1000 * 60 * 60 * 24 * (365 + 1)));
        return formatter.format(date);
    }

    public static int monthsBetween(String from, String to)
            throws java.text.ParseException
    {
        return monthsBetween(from, to, "yyyyMMdd");
    }

    public static int monthsBetween(String from, String to, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date fromDate = check(from, format);
        java.util.Date toDate = check(to, format);

        // if two date are same, return 0.
        if (fromDate.compareTo(toDate) == 0)
            return 0;

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat(
                "yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat(
                "MM", java.util.Locale.KOREA);
        java.text.SimpleDateFormat dayFormat = new java.text.SimpleDateFormat(
                "dd", java.util.Locale.KOREA);

        int fromYear = Integer.parseInt(yearFormat.format(fromDate));
        int toYear = Integer.parseInt(yearFormat.format(toDate));
        int fromMonth = Integer.parseInt(monthFormat.format(fromDate));
        int toMonth = Integer.parseInt(monthFormat.format(toDate));
        int fromDay = Integer.parseInt(dayFormat.format(fromDate));
        int toDay = Integer.parseInt(dayFormat.format(toDate));

        int result = 0;
        result += ((toYear - fromYear) * 12);
        result += (toMonth - fromMonth);

        // if (((toDay - fromDay) < 0) ) result += fromDate.compareTo(toDate);
        // ceil과 floor의 효과
        if (((toDay - fromDay) > 0))
            result += toDate.compareTo(fromDate);

        return result;
    }


    /**
     * 분기 사이의 값들을 문자 배열로 돌려준다.
     * ex) yearsBetween("200401", "200604")
     *
     * @param from
     * @param to
     * @return
     */
    public static String[] quarterBetweenArray( String from, String to )
    {
        int start = Integer.parseInt( from.substring(0, 4) );
        int end = Integer.parseInt( to.substring(0, 4) ) + 1;
        int startdate = Integer.parseInt( from.substring(4, 6) );
        int enddate = Integer.parseInt( from.substring(4, 6) );
        ArrayList temp = new ArrayList();

        for( int i = start; i < end; i++ )
        {
            for( int j = 1; j < 5; j++ )
            {
                if( (i == start) && (j < startdate) )
                {
                    continue;
                }
                else if( (i == end) && (j > enddate) )
                {
                    break;
                }
                else
                {
                    String y = Integer.toString(i);
                    String d = "0" + Integer.toString(j);

                    temp.add(y + d);
                }
            }//end of month for
        }//end of year for

        return (String [])temp.toArray( new String[temp.size()] );
    }



    /**
     * 달 사이의 값들을 문자 배열로 돌려준다.
     * ex) yearsBetween("200402", "200612")
     *
     * @param from
     * @param to
     * @return
     */
    public static String[] monthsBetweenArray( String from, String to )
    {
        int start = Integer.parseInt( from.substring(0, 4) );
        int end = Integer.parseInt( to.substring(0, 4) ) + 1;
        int startdate = Integer.parseInt( from.substring(4, 6) );
        int enddate = Integer.parseInt( from.substring(4, 6) );
        ArrayList temp = new ArrayList();

        for( int i = start; i < end; i++ )
        {
            for( int j = 1; j < 13; j++ )
            {
                if( (i == start) && (j < startdate) )
                {
                    continue;
                }
                else if( (i == end) && (j > enddate) )
                {
                    break;
                }
                else
                {
                    String y = Integer.toString(i);
                    String d = Integer.toString(j);
                    d = (d.length() == 1) ? ("0" + d) : d;

                    temp.add(y + d);
                }
            }//end of month for
        }//end of year for

        return (String [])temp.toArray( new String[temp.size()] );
    }



    /**
     * 년도 사이의 값들을 문자 배열로 돌려준다.
     * ex) yearsBetween("2004", "2006")
     *
     * @param from : 시작 년도
     * @param to : 끝 년도
     * @return
     */
    public static String[] yearsBetweenArray( String from, String to )
    {
        int start = Integer.parseInt(from);
        int end = Integer.parseInt(to) + 1;
        ArrayList temp = new ArrayList();

        if( start > end )
            return null;

        for(int i = start; i < end; i++)
        {
            temp.add( Integer.toString(i) );
        }

        return (String [])temp.toArray( new String[temp.size()] );
    }


    public static String lastDayOfMonth(String src)
            throws java.text.ParseException
    {
        return lastDayOfMonth(src, "yyyyMMdd");
    }

    public static String lastDayOfMonth(String src, String format)
            throws java.text.ParseException
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
                format, java.util.Locale.KOREA);
        java.util.Date date = check(src, format);

        java.text.SimpleDateFormat yearFormat = new java.text.SimpleDateFormat(
                "yyyy", java.util.Locale.KOREA);
        java.text.SimpleDateFormat monthFormat = new java.text.SimpleDateFormat(
                "MM", java.util.Locale.KOREA);

        int year = Integer.parseInt(yearFormat.format(date));
        int month = Integer.parseInt(monthFormat.format(date));
        int day = lastDay(year, month);

        java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
        java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");
        String tempDate = String.valueOf(fourDf.format(year))
                + String.valueOf(twoDf.format(month))
                + String.valueOf(twoDf.format(day));
        date = check(tempDate, format);

        return formatter.format(date);
    }

    private static int lastDay(int year, int month)
            throws java.text.ParseException
    {
        int day = 0;
        switch (month)
        {
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
                if ((year % 4) == 0)
                {
                    if ((year % 100) == 0 && (year % 400) != 0)
                    {
                        day = 28;
                    } else
                    {
                        day = 29;
                    }
                } else
                {
                    day = 28;
                }
            break;
            default:
                day = 30;
        }
        return day;
    }

    public static String getYear_to()
    {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy");
        Date xDate = new Date();
        String xStrDate = formatter.format(xDate);
        return xStrDate.trim();
    }

    public static String getMonth_to()
    {
        SimpleDateFormat formatter = new SimpleDateFormat("MM");
        Date xDate = new Date();
        String xStrDate = formatter.format(xDate);
        return xStrDate.trim();
    }

    /**
     * 해당 날짜의 월요일, 토요일 날짜를 돌려준다.
     * @param dt : 해당날짜
     * @param type : 시작일 및 종료일을 구분 (F:시작일, T:종료일)
     * @return
     */
    public static String getWeekDt(String dt, String type)
    {
        String strDt = null;
        String getDt = null;

        try {
            getDt = sundayOfWeek(dt);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
    		logger.warn("예외 발생");
            
        }

        if(type.equals("F")){
            try {
                strDt = addDays(getDt, 1);
            } catch (ParseException e) {
                // TODO Auto-generated catch block
        		logger.warn("예외 발생");
                
            }
        }else{
            try {
                strDt = addDays(getDt, 6);
            } catch (ParseException e) {
                // TODO Auto-generated catch block
        		logger.warn("예외 발생");
                
            }
        }
        return strDt;
    }

    public static String getMonthDt(String dt, String type)
    {
        String strDt = null;

        if(type.equals("F")){
            strDt = dt.substring(0, 6) + "01";
        }else{
            try {
                strDt = lastDayOfMonth(dt);
            } catch (ParseException e) {
                // TODO Auto-generated catch block
        		logger.warn("예외 발생");
                
            }
        }
        return strDt;
    }

    /**
     * 스트링을 Date형으로 변환
     * @param dateStr
     * @return
     */
    public static Date parseDate(String dateStr) {
        SimpleDateFormat formatter      = null;
        Date            date            = null;

        String[]        formats         = {"yyyy-MM-dd", "yyyy.MM.dd", "yyyy,MM,dd", "yyyyMMdd", "yyyy/MM/dd"};

        for(int i=0; i<formats.length; i++) {
            formatter                   = new SimpleDateFormat(formats[i]);
            try{
                date                    = formatter.parse(dateStr);
            }catch (Exception ex) {
            	logger.warn("@Exception "+ex.getMessage());
            }

            if(date != null) break;
        }
        return date;
    }

    /**
     * 원하는 형식으로 날짜 형식 변경
     * @param date
     * @param format
     * @return
     */
    public static String getConvertDateFormat(String dateStr, String format) {
        return getConvertDateFormat(parseDate(dateStr), format);
    }

    /**
     * 원하는 형식으로 날짜 형식 변경
     * @param date
     * @param format
     * @return
     */
    public static String getConvertDateFormat(Date date, String format) {
        SimpleDateFormat
                        simpleDateFormate
                                        = null;
        simpleDateFormate               = new SimpleDateFormat(format);

        return simpleDateFormate.format(date);
    }
    

    /**
     * 일자가 속한 주의 인덱스를구한다
     *
     * @param date
     *            DATE형 일자
     * @return int
     * @author PSMKORE CO,.LTD
     * @since 2003.11.13
     */

    public static int getDayOfWeek(java.util.Date date)
    {
        String weekdays[] = (new DateFormatSymbols()).getShortWeekdays();
        String weekday = (new SimpleDateFormat("E")).format(date);

        for (int i = 1; i < weekdays.length; ++i)
        {
            if (weekday.equals(weekdays[i]))
                return i;
        }
        return -1;
    }
}

