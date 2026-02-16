package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.ObjectDB;

/**
 * Business object FtTgoTag
 */
public class FtTgoTag extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public boolean isCreateEnable() {
		ObjectDB p = getParentObject();
		// DRAFT parent
		if (p != null) {
			String status = p.getFieldValue("ftTgoStatus");
			AppLog.info("status=" + status + " id=" + p.getRowId() + " new=" + p.isNew());
			return "DRAFT".equals(status) || p.isNew();
		}
	    return true;
	}

}
