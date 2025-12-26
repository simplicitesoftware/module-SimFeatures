package com.simplicite.tests.SimFeatures;

import java.util.*;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import com.simplicite.util.*;

/**
 * Shared code FtTestMain
 */
public class FtTestMain implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private static final String FT_USER_SCOPE = "SimFeaturesScope";
	private Grant grant = null;
	
	private Grant getGrant() {
		// Load grant once
		if (grant == null) {
			grant = new Grant();
			// the login must be a declared user with responsibilities to access objects used in the test
			grant.init("user", "testSessionId", Globals.ENDPOINT_UI, FT_USER_SCOPE, null);
		}
		return grant;
	}

	@Test
	public void testImportedDataset() {
		try (BusinessObject bo = getGrant().getBusinessObject("FtAttributes")) {
			long countAttr1 = bo
				.filters(Map.of("ftAttrCode", "Dataset_01"))
				.getCount();
			
			assertEquals(1,countAttr1);
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
}
