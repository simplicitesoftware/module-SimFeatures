package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.ObjectDB;
import com.simplicite.util.ObjectField;

/**
 * Business object FtSelectObject
 */
public class FtSelectObject extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void preSearch() {
		ObjectField f = getField("ftSlcFieldDt");
	    AppLog.info("filter date = " + f.getFilter());
	    AppLog.info("filter date min = " + f.getFilterDateMin());
	    AppLog.info("filter date max = " + f.getFilterDateMax());
	}

}
