package core.ifw.utl;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.jdom.Attribute;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;

/**
 * XML 파일의 처리를 돕는 Util
 *
 * <br><br>
 * Copyright Notice: Copyright 1998-2008 By INBUS CO, LTD. All rights reserved.
 *
 * @author 조 정 호
 * @since: 2008. 02. 14
 */
public class XmlLoader {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(XmlLoader.class);
    private Document doc;
    
    public Document getDocument() {
        return doc;
    }

    /**
     * 생성과 동시에 XML 파일 초기화 시킴 - XML 파일이 들어 있는 경로
     * @param xmlFileName
     */
    public XmlLoader(String xmlFileName) {
        SAXBuilder builder = new SAXBuilder();
        InputStream is = null;

        logger.debug("xmlFileName=>"+xmlFileName);

        //정보를 읽어 오기
        try {
            try{
                is = XmlLoader.class.getResourceAsStream(xmlFileName);
            }catch(NullPointerException e) {
                is = new FileInputStream(xmlFileName);
            }

            if(logger.isDebugEnabled()) {
                if(is == null)
                    logger.debug("is null");
            }

            doc = builder.build(is);
        } catch(Exception e) {
            logger.error("@Exception "+e.getMessage());
        } finally {
            if(is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    logger.error("@Exception "+e.getMessage());
                }
            }
        }
    }
    
    /**
     * 초기화 시킨 XML 문서에서 해당 element를 추출해 옴
     * @param elementName 조회할 명칭
     * @return elementValue 조회할 값
     */
    public Element getDocElement(String elementName) {
        String elementVal = null;
        
        try {
            Element element = doc.getRootElement();
            List list = element.getChildren();
            Iterator iterator = list.iterator();
            
            while (iterator.hasNext()) {
                Element child = (Element) iterator.next();
                List ChildList = child.getAttributes();
                Iterator iter = ChildList.iterator();
                while (iter.hasNext()) {
                    Attribute attribute = (Attribute) iter.next();
                    
                    if (attribute.getValue().equals(elementName)) {
                        return child;
                    }
                }
            }
        } catch (Exception e) {
            logger.error("@Exception "+e.getMessage());
        }
        
        return null;
    }

    /**
     * 초기화 시킨 XML 문서에서 해당 element를 추출해 옴
     * @param elementName 조회할 명칭
     * @return elementValue 조회할 값
     */
    public String getElement(String elementName) {
        String elementVal = null;

        try {
            Element element = doc.getRootElement();
            List list = element.getChildren();
            Iterator iterator = list.iterator();

            while (iterator.hasNext()) {
                Element child = (Element) iterator.next();
                List ChildList = child.getAttributes();
                Iterator iter = ChildList.iterator();
                while (iter.hasNext()) {
                    Attribute attribute = (Attribute) iter.next();
                    
                    if (attribute.getValue().equals(elementName)) {
                        return child.getText();
                    }
                }
            }
        } catch (Exception e) {
            logger.error("@Exception "+e.getMessage());
        }

        return null;
    }

}
