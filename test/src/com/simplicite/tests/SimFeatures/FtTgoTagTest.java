package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.simplicite.objects.SimFeatures.FtTgoTag;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectDB;

/**
 * Unit tests for FtCustomUser
 */
public class FtTgoTagTest {

	/**
	 * Get a system administrator Grant instance for testing purposes.
	 */
	private Grant getGrant() {
		return Grant.getSystemAdmin();
	}

	@Test
    public void testIsCreateEnable() {
        ObjectDB parent = getGrant().getTmpObject("FtTaggedObject");
        FtTgoTag tgoTag = (FtTgoTag) getGrant().getTmpObject("FtTgoTag");
        parent.setFieldValue("ftTgoStatus", "DRAFT");
        tgoTag.setParentObject(parent);
        assertTrue("IsCreateEnable should return true for DRAFT status", tgoTag.isCreateEnable());
    }

}
