package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtObjInlineChild
 */
public class FtObjInlineChild extends ObjectDB {
	private static final long serialVersionUID = 1L;

	@Override
	public String postCreate() {

	    String parentId = getFieldValue("ftObjInlineChildParentId");
	    ObjectDB p = getGrant().getTmpObject("FtObjInlineParent");
	    p.resetFilters();
	    if (p.select(parentId)) {
	    	p.setFieldValue("ftObjInlineParentDescription", "Updated by child postCreate");
	    	p.update();
	    }

	    return null;
	}

	@Override
	public String postUpdate() {

	    String parentId = getFieldValue("ftObjInlineChildParentId");
	    ObjectDB p = getGrant().getTmpObject("FtObjInlineParent");
	    p.resetFilters();
	    if (p.select(parentId)) {
	    	p.setFieldValue("ftObjInlineParentDescription", "Updated by child postUpdate");
	    	p.update();
	    }

	    return null;
	}
}
