<%@ page import="java.io.*" %>

<%!

public void setDomainCookie ( HttpServletResponse response, String sName, String sValue,String sDomain )
{
	Cookie c = new Cookie( sName, sValue );
		
	c.setPath( "/" ); 
	c.setDomain(sDomain);	
	//c.setMaxAge(10000);

	// 필요에 따라 쿠키의 옵션값을 추가한다.	
	response.addCookie(c);
}

/* sName 에 해당되는 쿠키 값을 얻는다. */
public String getCookie ( HttpServletRequest request )
{
	String sName = "ktcuToken";
	Cookie[] cookies = request.getCookies();	
	
	if ( cookies != null ) 
	{		
		for (int i=0; i < cookies.length; i++) 
		{
	
			String name = cookies[i].getName();			
			String sDomain = cookies[i].getDomain();			
			
			if( name != null && name.equals(sName) ) 
			{
				return cookies[i].getValue();
			}
		}
		;
	}
	return null;	
}	

// java에서 한글을 웹브라우저로 출력하기 위해서 사용
public String toHangul( String str )        
{
	if ( str == null )
    	return null;
    	
    String newstr=null;	
    try {	
		newstr = new String( str.getBytes("8859_1"), "KSC5601" );
	}	
	catch (Exception e )
    {  System.err.printf("Exception");   }
        
	if ( newstr!=null && str.length() == newstr.length() )  // 이미 encoding 된 것이었으면 원문을 사용한다.
		return str;
	else
		return newstr;
}

public String toEng( String str )        
{
	if ( str == null )
    	return null;
    	
    String newstr=null;	
    try {	
		newstr = new String( str.getBytes("KSC5601"), "8859_1" );
	}	
	catch (Exception e )
    {  System.err.printf("Exception");   }
        
	if ( newstr!=null && str.length() == newstr.length() )  // 이미 encoding 된 것이었으면 원문을 사용한다.
		return str;
	else
		return newstr;
}

%>	
