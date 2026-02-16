package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.BusinessObject;
import com.simplicite.util.ObjectDB;
import com.simplicite.util.exceptions.SaveException;
import com.simplicite.util.exceptions.ValidateException;

/**
 * Business object FtObjInlineChild
 */
public class FtObjInlineChild extends ObjectDB {
	private static final long serialVersionUID = 1L;

	private void updateParent(String desc) {
	    String parentId = getFieldValue("ftObjInlineChildParentId");
		try (BusinessObject parent = getGrant().getBusinessObject("FtObjInlineParent")) {
			parent
			.withAllAccess()
			.forUpdate(parentId)
			.withValue("ftObjInlineParentDescription", desc)
			.validateAndSave();
		}
		catch (ValidateException | SaveException e) {
			AppLog.error("Error updateParent", e);
		}
	}

	@Override
	public String postCreate() {
		updateParent("Updated by child postCreate");
	    return null;
	}

	@Override
	public String postUpdate() {
		updateParent("Updated by child postUpdate");
	    return null;
	}
}
