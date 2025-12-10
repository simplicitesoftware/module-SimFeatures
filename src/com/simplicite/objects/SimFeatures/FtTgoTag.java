package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtTgoTag
 */
public class FtTgoTag extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public boolean isCreateEnable() {
		ObjectDB p = getParentObject();
		// DRAFT parent
		if (p!=null) 
		{
			String status = p.getFieldValue("ftTgoStatus");
			AppLog.info("status="+status + " id=" + p.getRowId() + " new="+p.isNew());
			return "DRAFT".equals(status) || p.isNew();
		}
	    return true;
	}

}
