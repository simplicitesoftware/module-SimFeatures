package com.simplicite.tests.SimFeatures;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import com.simplicite.objects.SimFeatures.FtSelectObject;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectField;

/**
 * Unit tests FtSelectObjectTest
 */
public class FtSelectObjectTest {

	private Grant getGrant() {
		return Grant.getSystemAdmin();
	} 

	@Test
	public void testPreSearch() {
		FtSelectObject selectObjectDB = (FtSelectObject) getGrant().getTmpObject("FtSelectObject");
		selectObjectDB.setFieldValue("ftSlcFieldDt", "2026-01-01");
		selectObjectDB.preSearch();
		ObjectField field = selectObjectDB.getField("ftSlcFieldDt");
		assertNotNull(field.getFilter(), "Filter date should not be null");
		assertNotNull(field.getFilterDateMin(), "Filter date min should not be null");
		assertNotNull(field.getFilterDateMax(), "Filter date max should not be null");
	}
}
