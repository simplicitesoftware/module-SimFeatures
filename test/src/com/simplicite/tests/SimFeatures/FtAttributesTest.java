package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.simplicite.objects.SimFeatures.FtAttributes;
import com.simplicite.util.Grant;

/**
 * Unit tests for FtCustomUser
 */
    public class FtAttributesTest {

	/**
	 * Get a system administrator Grant instance for testing purposes.
	 */
	private Grant getGrant() {
		return Grant.getSystemAdmin();
	}

    @Test  
    public void testInitUpdate() {
        FtAttributes attributes = (FtAttributes) getGrant().getTmpObject("FtAttributes");
        attributes.setFieldValue("ftAttrLongTextGrid", "test");
        attributes.initUpdate();
        assertEquals("ftAttrLongTextGridSource should be set to ftAttrLongTextGrid", "test", attributes.getFieldValue("ftAttrLongTextGridSource"));
    }

    @Test
    public void testPreSave() {
        FtAttributes attributes = (FtAttributes) getGrant().getTmpObject("FtAttributes");
        attributes.setFieldValue("ftAttrHtml", "test");
        attributes.preSave();
        assertEquals("ftAttrHtmlReadOnly should be set to ftAttrHtml", "test", attributes.getFieldValue("ftAttrHtmlReadOnly"));
    }
}
