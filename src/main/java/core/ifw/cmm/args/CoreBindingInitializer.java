package core.ifw.cmm.args;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.support.WebBindingInitializer;
import org.springframework.web.context.request.WebRequest;

public class CoreBindingInitializer implements WebBindingInitializer {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(CoreBindingInitializer.class);


	public void initBinder(WebDataBinder binder, WebRequest request) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd",Locale.ENGLISH);
		dateFormat.setLenient(false);
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
		binder.registerCustomEditor(String.class, new StringTrimmerEditor(false));
    }

}
